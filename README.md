# ![LOGO](logo.png) Dataflow **flow**ground Connector

## Description

A generated **flow**ground connector for the Dataflow API (version v1b3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/dataflow/v1b3/swagger.json<br/>
Generated at: 2019-05-07T17:41:30+03:00

## API Description

Manages Google Cloud Dataflow projects on Google Cloud Platform.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Send a worker_message to the service.

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - The project to send the WorkerMessages to.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### List the jobs of a project.<br/>
> <br/>
> To list the jobs of a project in a region, we recommend using<br/>
> `projects.locations.jobs.get` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To<br/>
> list the all jobs across all regions, use `projects.jobs.aggregated`. Using<br/>
> `projects.jobs.list` is not recommended, as you can only get the list of<br/>
> jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - The kind of filter to use.
    Possible values: UNKNOWN, ALL, TERMINATED, ACTIVE.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `pageSize` - _optional_ - If there are many jobs, limit response to at most this many.
The actual number of jobs returned will be the lesser of max_responses
and an unspecified server-defined limit.
* `pageToken` - _optional_ - Set this to the 'next_page_token' field of a previous response
to request additional results in a long list.
* `projectId` - _required_ - The project which owns the jobs.
* `view` - _optional_ - Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a Cloud Dataflow job.<br/>
> <br/>
> To create a job, we recommend using `projects.locations.jobs.create` with a<br/>
> [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.create` is not recommended, as your job will always start<br/>
> in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `replaceJobId` - _optional_ - Deprecated. This field is now in the Job message.
* `view` - _optional_ - The level of information requested in response.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the state of the specified Cloud Dataflow job.<br/>
> <br/>
> To get the state of a job, we recommend using `projects.locations.jobs.get`<br/>
> with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.get` is not recommended, as you can only get the state of<br/>
> jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job ID.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `view` - _optional_ - The level of information requested in response.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the state of an existing Cloud Dataflow job.<br/>
> <br/>
> To update the state of an existing job, we recommend using<br/>
> `projects.locations.jobs.update` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.update` is not recommended, as you can only update the state<br/>
> of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job ID.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Get encoded debug configuration for component. Not cacheable.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job id.
* `projectId` - _required_ - The project id.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Send encoded debug capture data for component.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job id.
* `projectId` - _required_ - The project id.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Request the job status.<br/>
> <br/>
> To request the status of a job, we recommend using<br/>
> `projects.locations.jobs.messages.list` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.messages.list` is not recommended, as you can only request<br/>
> the status of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `endTime` - _optional_ - Return only messages with timestamps < end_time. The default is now
(i.e. return up to the latest messages available).
* `jobId` - _required_ - The job to get messages about.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `minimumImportance` - _optional_ - Filter to only get messages with importance >= level
    Possible values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR.
* `pageSize` - _optional_ - If specified, determines the maximum number of messages to
return.  If unspecified, the service may choose an appropriate
default, or may return an arbitrarily large number of results.
* `pageToken` - _optional_ - If supplied, this should be the value of next_page_token returned
by an earlier call. This will cause the next page of results to
be returned.
* `projectId` - _required_ - A project id.
* `startTime` - _optional_ - If specified, return only messages with timestamps >= start_time.
The default is the job creation time (i.e. beginning of messages).
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Request the job status.<br/>
> <br/>
> To request the status of a job, we recommend using<br/>
> `projects.locations.jobs.getMetrics` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.getMetrics` is not recommended, as you can only request the<br/>
> status of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job to get messages for.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `projectId` - _required_ - A project id.
* `startTime` - _optional_ - Return only metric data that has changed since this time.
Default is to return all information about all metrics for the job.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Leases a dataflow WorkItem to run.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - Identifies the workflow job this worker belongs to.
* `projectId` - _required_ - Identifies the project this worker belongs to.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Reports the status of dataflow WorkItems leased by a worker.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job which the WorkItem is part of.
* `projectId` - _required_ - The project which owns the WorkItem's job.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Snapshot the state of a streaming job.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job to be snapshotted.
* `projectId` - _required_ - The project which owns the job to be snapshotted.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### List the jobs of a project across all regions.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - The kind of filter to use.
    Possible values: UNKNOWN, ALL, TERMINATED, ACTIVE.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `pageSize` - _optional_ - If there are many jobs, limit response to at most this many.
The actual number of jobs returned will be the lesser of max_responses
and an unspecified server-defined limit.
* `pageToken` - _optional_ - Set this to the 'next_page_token' field of a previous response
to request additional results in a long list.
* `projectId` - _required_ - The project which owns the jobs.
* `view` - _optional_ - Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Send a worker_message to the service.

*Tags:* `projects`

#### Input Parameters
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job.
* `projectId` - _required_ - The project to send the WorkerMessages to.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### List the jobs of a project.<br/>
> <br/>
> To list the jobs of a project in a region, we recommend using<br/>
> `projects.locations.jobs.get` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To<br/>
> list the all jobs across all regions, use `projects.jobs.aggregated`. Using<br/>
> `projects.jobs.list` is not recommended, as you can only get the list of<br/>
> jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - The kind of filter to use.
    Possible values: UNKNOWN, ALL, TERMINATED, ACTIVE.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `pageSize` - _optional_ - If there are many jobs, limit response to at most this many.
The actual number of jobs returned will be the lesser of max_responses
and an unspecified server-defined limit.
* `pageToken` - _optional_ - Set this to the 'next_page_token' field of a previous response
to request additional results in a long list.
* `projectId` - _required_ - The project which owns the jobs.
* `view` - _optional_ - Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a Cloud Dataflow job.<br/>
> <br/>
> To create a job, we recommend using `projects.locations.jobs.create` with a<br/>
> [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.create` is not recommended, as your job will always start<br/>
> in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `replaceJobId` - _optional_ - Deprecated. This field is now in the Job message.
* `view` - _optional_ - The level of information requested in response.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the state of the specified Cloud Dataflow job.<br/>
> <br/>
> To get the state of a job, we recommend using `projects.locations.jobs.get`<br/>
> with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.get` is not recommended, as you can only get the state of<br/>
> jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job ID.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `view` - _optional_ - The level of information requested in response.
    Possible values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the state of an existing Cloud Dataflow job.<br/>
> <br/>
> To update the state of an existing job, we recommend using<br/>
> `projects.locations.jobs.update` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.update` is not recommended, as you can only update the state<br/>
> of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job ID.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains this job.
* `projectId` - _required_ - The ID of the Cloud Platform project that the job belongs to.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Get encoded debug configuration for component. Not cacheable.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job id.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `projectId` - _required_ - The project id.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Send encoded debug capture data for component.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job id.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `projectId` - _required_ - The project id.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Request the job status.<br/>
> <br/>
> To request the status of a job, we recommend using<br/>
> `projects.locations.jobs.messages.list` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.messages.list` is not recommended, as you can only request<br/>
> the status of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `endTime` - _optional_ - Return only messages with timestamps < end_time. The default is now
(i.e. return up to the latest messages available).
* `jobId` - _required_ - The job to get messages about.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `minimumImportance` - _optional_ - Filter to only get messages with importance >= level
    Possible values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR.
* `pageSize` - _optional_ - If specified, determines the maximum number of messages to
return.  If unspecified, the service may choose an appropriate
default, or may return an arbitrarily large number of results.
* `pageToken` - _optional_ - If supplied, this should be the value of next_page_token returned
by an earlier call. This will cause the next page of results to
be returned.
* `projectId` - _required_ - A project id.
* `startTime` - _optional_ - If specified, return only messages with timestamps >= start_time.
The default is the job creation time (i.e. beginning of messages).
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Request the job status.<br/>
> <br/>
> To request the status of a job, we recommend using<br/>
> `projects.locations.jobs.getMetrics` with a [regional endpoint]<br/>
> (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using<br/>
> `projects.jobs.getMetrics` is not recommended, as you can only request the<br/>
> status of jobs that are running in `us-central1`.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job to get messages for.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the job specified by job_id.
* `projectId` - _required_ - A project id.
* `startTime` - _optional_ - Return only metric data that has changed since this time.
Default is to return all information about all metrics for the job.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Leases a dataflow WorkItem to run.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - Identifies the workflow job this worker belongs to.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the WorkItem's job.
* `projectId` - _required_ - Identifies the project this worker belongs to.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Reports the status of dataflow WorkItems leased by a worker.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job which the WorkItem is part of.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
contains the WorkItem's job.
* `projectId` - _required_ - The project which owns the WorkItem's job.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Snapshot the state of a streaming job.

*Tags:* `projects`

#### Input Parameters
* `jobId` - _required_ - The job to be snapshotted.
* `location` - _required_ - The location that contains this job.
* `projectId` - _required_ - The project which owns the job to be snapshotted.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a Cloud Dataflow job from a template.

*Tags:* `projects`

#### Input Parameters
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
which to direct the request.
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Get the template associated with a template.

*Tags:* `projects`

#### Input Parameters
* `gcsPath` - _optional_ - Required. A Cloud Storage path to the template from which to
create the job.
Must be valid Cloud Storage URL, beginning with 'gs://'.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
which to direct the request.
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `view` - _optional_ - The view to retrieve. Defaults to METADATA_ONLY.
    Possible values: METADATA_ONLY.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Launch a template.

*Tags:* `projects`

#### Input Parameters
* `dynamicTemplate.gcsPath` - _optional_ - Path to dynamic template spec file on GCS.
The file must be a Json serialized DynamicTemplateFieSpec object.
* `dynamicTemplate.stagingLocation` - _optional_ - Cloud Storage path for staging dependencies.
Must be a valid Cloud Storage URL, beginning with `gs://`.
* `gcsPath` - _optional_ - A Cloud Storage path to the template from which to create
the job.
Must be valid Cloud Storage URL, beginning with 'gs://'.
* `location` - _required_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
which to direct the request.
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `validateOnly` - _optional_ - If true, the request is validated but not actually executed.
Defaults to false.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a Cloud Dataflow job from a template.

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Get the template associated with a template.

*Tags:* `projects`

#### Input Parameters
* `gcsPath` - _optional_ - Required. A Cloud Storage path to the template from which to
create the job.
Must be valid Cloud Storage URL, beginning with 'gs://'.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
which to direct the request.
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `view` - _optional_ - The view to retrieve. Defaults to METADATA_ONLY.
    Possible values: METADATA_ONLY.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Launch a template.

*Tags:* `projects`

#### Input Parameters
* `dynamicTemplate.gcsPath` - _optional_ - Path to dynamic template spec file on GCS.
The file must be a Json serialized DynamicTemplateFieSpec object.
* `dynamicTemplate.stagingLocation` - _optional_ - Cloud Storage path for staging dependencies.
Must be a valid Cloud Storage URL, beginning with `gs://`.
* `gcsPath` - _optional_ - A Cloud Storage path to the template from which to create
the job.
Must be valid Cloud Storage URL, beginning with 'gs://'.
* `location` - _optional_ - The [regional endpoint]
(https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
which to direct the request.
* `projectId` - _required_ - Required. The ID of the Cloud Platform project that the job belongs to.
* `validateOnly` - _optional_ - If true, the request is validated but not actually executed.
Defaults to false.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-dataflow-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
