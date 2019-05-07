/**
 * Auto-generated action file for "Dataflow" API.
 *
 * Generated at: 2019-05-07T14:41:30.091Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-dataflow-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'dataflow.projects.jobs.update'
 * Endpoint Path: '/v1b3/projects/{projectId}/jobs/{jobId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "jobId",
    "location",
    "projectId",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "jobId": "jobId",
    "location": "location",
    "projectId": "projectId",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "clientRequestId": "clientRequestId",
    "createTime": "createTime",
    "createdFromSnapshotId": "createdFromSnapshotId",
    "currentState": "currentState",
    "currentStateTime": "currentStateTime",
    "clusterManagerApiService": "clusterManagerApiService",
    "dataset": "dataset",
    "experiments": "experiments",
    "flexResourceSchedulingGoal": "flexResourceSchedulingGoal",
    "internalExperiments": "internalExperiments",
    "sdkPipelineOptions": "sdkPipelineOptions",
    "serviceAccountEmail": "serviceAccountEmail",
    "tempStoragePrefix": "tempStoragePrefix",
    "userAgent": "userAgent",
    "version": "version",
    "workerPools": "workerPools",
    "environment": "environment",
    "stages": "stages",
    "executionInfo": "executionInfo",
    "id": "id",
    "bigTableDetails": "bigTableDetails",
    "bigqueryDetails": "bigqueryDetails",
    "datastoreDetails": "datastoreDetails",
    "fileDetails": "fileDetails",
    "pubsubDetails": "pubsubDetails",
    "sdkSupportStatus": "sdkSupportStatus",
    "versionDisplayName": "versionDisplayName",
    "sdkVersion": "sdkVersion",
    "spannerDetails": "spannerDetails",
    "jobMetadata": "jobMetadata",
    "labels": "labels",
    "name": "name",
    "displayData": "displayData",
    "executionPipelineStage": "executionPipelineStage",
    "originalPipelineTransform": "originalPipelineTransform",
    "pipelineDescription": "pipelineDescription",
    "replaceJobId": "replaceJobId",
    "replacedByJobId": "replacedByJobId",
    "requestedState": "requestedState",
    "stageStates": "stageStates",
    "startTime": "startTime",
    "steps": "steps",
    "stepsLocation": "stepsLocation",
    "tempFiles": "tempFiles",
    "transformNameMapping": "transformNameMapping",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'dataflow.projects.jobs.update',
        pathName: '/v1b3/projects/{projectId}/jobs/{jobId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}