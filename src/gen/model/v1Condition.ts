/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Condition contains details for one aspect of the current state of this API Resource.
*/
export class V1Condition {
    /**
    * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
    */
    'lastTransitionTime': Date;
    /**
    * message is a human readable message indicating details about the transition. This may be an empty string.
    */
    'message': string;
    /**
    * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
    */
    'observedGeneration'?: number;
    /**
    * reason contains a programmatic identifier indicating the reason for the condition\'s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
    */
    'reason': string;
    /**
    * status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * type of condition in CamelCase or in foo.example.com/CamelCase.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Condition.attributeTypeMap;
    }
}

