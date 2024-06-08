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
* NamedResourcesIntSlice contains a slice of 64-bit integers.
*/
export class V1alpha2NamedResourcesIntSlice {
    /**
    * Ints is the slice of 64-bit integers.
    */
    'ints': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ints",
            "baseName": "ints",
            "type": "Array<number>",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2NamedResourcesIntSlice.attributeTypeMap;
    }

    public constructor() {
    }
}

