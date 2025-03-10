/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim.
*/
export class V1alpha3ResourceClaimConsumerReference {
    /**
    * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
    */
    'apiGroup'?: string;
    /**
    * Name is the name of resource being referenced.
    */
    'name': string;
    /**
    * Resource is the type of resource being referenced, for example \"pods\".
    */
    'resource': string;
    /**
    * UID identifies exactly one incarnation of the resource.
    */
    'uid': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha3ResourceClaimConsumerReference.attributeTypeMap;
    }
}

