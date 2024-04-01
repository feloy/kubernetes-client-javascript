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
import { V2MetricIdentifier } from './v2MetricIdentifier';
import { V2MetricValueStatus } from './v2MetricValueStatus';

/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
*/
export class V2PodsMetricStatus {
    'current': V2MetricValueStatus;
    'metric': V2MetricIdentifier;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "V2MetricValueStatus"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2MetricIdentifier"
        }    ];

    static getAttributeTypeMap() {
        return V2PodsMetricStatus.attributeTypeMap;
    }
}

