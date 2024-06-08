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

import { V1DaemonSetCondition } from '../models/V1DaemonSetCondition';
import { HttpFile } from '../http/http';

/**
* DaemonSetStatus represents the current status of a daemon set.
*/
export class V1DaemonSetStatus {
    /**
    * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
    */
    'collisionCount'?: number;
    /**
    * Represents the latest available observations of a DaemonSet\'s current state.
    */
    'conditions'?: Array<V1DaemonSetCondition>;
    /**
    * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'currentNumberScheduled': number;
    /**
    * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'desiredNumberScheduled': number;
    /**
    * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
    */
    'numberAvailable'?: number;
    /**
    * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'numberMisscheduled': number;
    /**
    * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
    */
    'numberReady': number;
    /**
    * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
    */
    'numberUnavailable'?: number;
    /**
    * The most recent generation observed by the daemon set controller.
    */
    'observedGeneration'?: number;
    /**
    * The total number of nodes that are running updated daemon pod
    */
    'updatedNumberScheduled'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collisionCount",
            "baseName": "collisionCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1DaemonSetCondition>",
            "format": ""
        },
        {
            "name": "currentNumberScheduled",
            "baseName": "currentNumberScheduled",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "desiredNumberScheduled",
            "baseName": "desiredNumberScheduled",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "numberAvailable",
            "baseName": "numberAvailable",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "numberMisscheduled",
            "baseName": "numberMisscheduled",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "numberReady",
            "baseName": "numberReady",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "numberUnavailable",
            "baseName": "numberUnavailable",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "updatedNumberScheduled",
            "baseName": "updatedNumberScheduled",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonSetStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

