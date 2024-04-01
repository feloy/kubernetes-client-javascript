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
import { V1alpha2ResourceClaimSchedulingStatus } from './v1alpha2ResourceClaimSchedulingStatus';

/**
* PodSchedulingContextStatus describes where resources for the Pod can be allocated.
*/
export class V1alpha2PodSchedulingContextStatus {
    /**
    * ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses \"WaitForFirstConsumer\" allocation mode.
    */
    'resourceClaims'?: Array<V1alpha2ResourceClaimSchedulingStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceClaims",
            "baseName": "resourceClaims",
            "type": "Array<V1alpha2ResourceClaimSchedulingStatus>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2PodSchedulingContextStatus.attributeTypeMap;
    }
}

