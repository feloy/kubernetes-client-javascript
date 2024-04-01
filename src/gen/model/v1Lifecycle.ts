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
import { V1LifecycleHandler } from './v1LifecycleHandler';

/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
*/
export class V1Lifecycle {
    'postStart'?: V1LifecycleHandler;
    'preStop'?: V1LifecycleHandler;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "V1LifecycleHandler"
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "V1LifecycleHandler"
        }    ];

    static getAttributeTypeMap() {
        return V1Lifecycle.attributeTypeMap;
    }
}

