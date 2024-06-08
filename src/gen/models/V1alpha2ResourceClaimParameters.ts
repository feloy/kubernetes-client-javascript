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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha2DriverRequests } from '../models/V1alpha2DriverRequests';
import { V1alpha2ResourceClaimParametersReference } from '../models/V1alpha2ResourceClaimParametersReference';
import { HttpFile } from '../http/http';

/**
* ResourceClaimParameters defines resource requests for a ResourceClaim in an in-tree format understood by Kubernetes.
*/
export class V1alpha2ResourceClaimParameters {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * DriverRequests describes all resources that are needed for the allocated claim. A single claim may use resources coming from different drivers. For each driver, this array has at most one entry which then may have one or more per-driver requests.  May be empty, in which case the claim can always be allocated.
    */
    'driverRequests'?: Array<V1alpha2DriverRequests>;
    'generatedFrom'?: V1alpha2ResourceClaimParametersReference;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * Shareable indicates whether the allocated claim is meant to be shareable by multiple consumers at the same time.
    */
    'shareable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "driverRequests",
            "baseName": "driverRequests",
            "type": "Array<V1alpha2DriverRequests>",
            "format": ""
        },
        {
            "name": "generatedFrom",
            "baseName": "generatedFrom",
            "type": "V1alpha2ResourceClaimParametersReference",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "shareable",
            "baseName": "shareable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceClaimParameters.attributeTypeMap;
    }

    public constructor() {
    }
}

