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

import { HttpFile } from '../http/http';

/**
* CustomResourceDefinitionCondition contains details for the current condition of this pod.
*/
export class V1CustomResourceDefinitionCondition {
    /**
    * lastTransitionTime last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * message is a human-readable message indicating details about last transition.
    */
    'message'?: string;
    /**
    * reason is a unique, one-word, CamelCase reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * status is the status of the condition. Can be True, False, Unknown.
    */
    'status': string;
    /**
    * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionCondition.attributeTypeMap;
    }

    public constructor() {
    }
}

