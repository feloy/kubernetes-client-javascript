import WebSocket from 'isomorphic-ws';
import stream from 'node:stream';

import { V1Status } from './api';
import { KubeConfig } from './config';

const protocols = ['v4.channel.k8s.io', 'v3.channel.k8s.io', 'v2.channel.k8s.io', 'channel.k8s.io'];

export interface WebSocketInterface {
    connect(
        path: string,
        textHandler: ((text: string) => boolean) | null,
        binaryHandler: ((stream: number, buff: Buffer) => boolean) | null,
    ): Promise<WebSocket.WebSocket>;
}

export class WebSocketHandler implements WebSocketInterface {
    public static readonly StdinStream: number = 0;
    public static readonly StdoutStream: number = 1;
    public static readonly StderrStream: number = 2;
    public static readonly StatusStream: number = 3;
    public static readonly ResizeStream: number = 4;

    public static handleStandardStreams(
        streamNum: number,
        buff: Buffer,
        stdout: stream.Writable | null,
        stderr: stream.Writable | null,
    ): V1Status | null {
        if (buff.length < 1) {
            return null;
        }
        if (stdout && streamNum === WebSocketHandler.StdoutStream) {
            stdout.write(buff);
        } else if (stderr && streamNum === WebSocketHandler.StderrStream) {
            stderr.write(buff);
        } else if (streamNum === WebSocketHandler.StatusStream) {
            // stream closing.
            if (stdout && stdout !== process.stdout) {
                stdout.end();
            }
            if (stderr && stderr !== process.stderr) {
                stderr.end();
            }
            return JSON.parse(buff.toString('utf8')) as V1Status;
        } else {
            throw new Error('Unknown stream: ' + streamNum);
        }
        return null;
    }

    public static handleStandardInput(
        ws: WebSocket.WebSocket,
        stdin: stream.Readable,
        streamNum: number = 0,
    ): boolean {
        stdin.on('data', (data) => {
            ws.send(copyChunkForWebSocket(streamNum, data, stdin.readableEncoding));
        });

        stdin.on('end', () => {
            ws.close();
        });
        // Keep the stream open
        return true;
    }

    public static async processData(
        data: string | Buffer,
        ws: WebSocket.WebSocket | null,
        createWS: () => Promise<WebSocket.WebSocket>,
        streamNum: number = 0,
        retryCount: number = 3,
        encoding?: BufferEncoding | null,
    ): Promise<WebSocket.WebSocket | null> {
        const buff = copyChunkForWebSocket(streamNum, data, encoding);
        let i = 0;
        for (; i < retryCount; ++i) {
            if (ws !== null && ws.readyState === WebSocket.OPEN) {
                ws.send(buff);
                break;
            } else {
                ws = await createWS();
            }
        }

        // This throw doesn't go anywhere.
        // TODO: Figure out the right way to return an error.
        if (i >= retryCount) {
            throw new Error("can't send data to ws");
        }

        return ws;
    }

    public static restartableHandleStandardInput(
        createWS: () => Promise<WebSocket.WebSocket>,
        stdin: stream.Readable,
        streamNum: number = 0,
        retryCount: number = 3,
    ): () => WebSocket.WebSocket | null {
        if (retryCount < 0) {
            throw new Error("retryCount can't be lower than 0.");
        }

        let queue: Promise<void> = Promise.resolve();
        let ws: WebSocket.WebSocket | null = null;

        stdin.on('data', (data) => {
            queue = queue.then(async () => {
                ws = await WebSocketHandler.processData(
                    data,
                    ws,
                    createWS,
                    streamNum,
                    retryCount,
                    stdin.readableEncoding,
                );
            });
        });

        stdin.on('end', () => {
            if (ws) {
                ws.close();
            }
        });

        return () => ws;
    }

    // factory is really just for test injection
    public constructor(
        readonly config: KubeConfig,
        readonly socketFactory?: (uri: string, opts: WebSocket.ClientOptions) => WebSocket.WebSocket,
    ) {}

    /**
     * Connect to a web socket endpoint.
     * @param path The HTTP Path to connect to on the server.
     * @param textHandler Callback for text over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     * @param binaryHandler Callback for binary data over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     */
    public async connect(
        path: string,
        textHandler: ((text: string) => boolean) | null,
        binaryHandler: ((stream: number, buff: Buffer) => boolean) | null,
    ): Promise<WebSocket.WebSocket> {
        const cluster = this.config.getCurrentCluster();
        if (!cluster) {
            throw new Error('No cluster is defined.');
        }
        const server = cluster.server;
        const ssl = server.startsWith('https://');
        const target = ssl ? server.substr(8) : server.substr(7);
        const proto = ssl ? 'wss' : 'ws';
        const uri = `${proto}://${target}${path}`;

        const opts: WebSocket.ClientOptions = {};

        await this.config.applyToHTTPSOptions(opts);

        return await new Promise<WebSocket.WebSocket>((resolve, reject) => {
            const client = this.socketFactory
                ? this.socketFactory(uri, opts)
                : new WebSocket(uri, protocols, opts);
            let resolved = false;

            client.onopen = () => {
                resolved = true;
                resolve(client);
            };

            client.onerror = (err) => {
                if (!resolved) {
                    reject(err);
                }
            };

            client.onmessage = ({ data }: { data: WebSocket.Data }) => {
                // TODO: support ArrayBuffer and Buffer[] data types?
                if (typeof data === 'string') {
                    if (textHandler && !textHandler(data)) {
                        client.close();
                    }
                } else if (data instanceof Buffer) {
                    const streamNum = data.readInt8(0);
                    if (binaryHandler && !binaryHandler(streamNum, data.slice(1))) {
                        client.close();
                    }
                }
            };
        });
    }
}

function copyChunkForWebSocket(
    streamNum: number,
    chunk: string | Buffer,
    encoding?: BufferEncoding | null,
): Buffer {
    let buff: Buffer;

    if (chunk instanceof Buffer) {
        buff = Buffer.alloc(chunk.length + 1);
        chunk.copy(buff, 1);
    } else {
        encoding ??= 'utf-8';
        const size = Buffer.byteLength(chunk, encoding);
        buff = Buffer.alloc(size + 1);
        buff.write(chunk, 1, size, encoding);
    }

    buff.writeInt8(streamNum, 0);
    return buff;
}
