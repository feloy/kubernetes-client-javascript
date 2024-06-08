/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ConfigMapNodeConfigSource } from '../models/V1ConfigMapNodeConfigSource';
import { HttpFile } from '../http/http';

/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
*/
export class V1NodeConfigSource {
    'configMap'?: V1ConfigMapNodeConfigSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1ConfigMapNodeConfigSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeConfigSource.attributeTypeMap;
    }

    public constructor() {
    }
}

