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
import { V1UserInfo } from './v1UserInfo';

/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
*/
export class V1beta1SelfSubjectReviewStatus {
    'userInfo'?: V1UserInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userInfo",
            "baseName": "userInfo",
            "type": "V1UserInfo"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1SelfSubjectReviewStatus.attributeTypeMap;
    }
}

