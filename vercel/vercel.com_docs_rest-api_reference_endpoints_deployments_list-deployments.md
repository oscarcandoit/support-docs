---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments"
title: "List deployments - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

List deployments

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

  - [GET\\
    \\
    Get deployment events](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events)
  - [PATCH\\
    \\
    Update deployment integration action](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action)
  - [GET\\
    \\
    Get a deployment by ID or URL](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-a-deployment-by-id-or-url)
  - [POST\\
    \\
    Create a new deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/create-a-new-deployment)
  - [PATCH\\
    \\
    Cancel a deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/cancel-a-deployment)
  - [POST\\
    \\
    Upload Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/upload-deployment-files)
  - [GET\\
    \\
    List Deployment Files](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployment-files)
  - [GET\\
    \\
    Get Deployment File Contents](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-file-contents)
  - [GET\\
    \\
    List deployments](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments)
  - [DEL\\
    \\
    Delete a Deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment)
- domains

- dns

- domains-registrar

- logDrains

- drains

- edge-cache

- edge-config

- environment

- user

- integrations

- marketplace

- authentication

- logs

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


getDeployments

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.getDeployments({
    app: "docs",
    from: 1612948664566,
    limit: 10,
    projectId: "QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY",
    projectIds: [\
      "prj_123",\
      "prj_456",\
    ],
    target: "production",
    to: 1612948664566,
    users: "kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY",
    since: 1540095775941,
    until: 1540095775951,
    state: "BUILDING,READY",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

404

422

Copy

Ask AI

```
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "deployments": [\
    {\
      "uid": "dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa",\
      "name": "docs",\
      "projectId": "<string>",\
      "url": "docs-9jaeg38me.vercel.app",\
      "created": 1609492210000,\
      "defaultRoute": "/docs",\
      "deleted": 1609492210000,\
      "undeleted": 1609492210000,\
      "softDeletedByRetention": true,\
      "source": "cli",\
      "state": "READY",\
      "readyState": "READY",\
      "type": "LAMBDAS",\
      "creator": {\
        "uid": "eLrCnEgbKhsHyfbiNR7E8496",\
        "email": "example@example.com",\
        "username": "johndoe",\
        "githubLogin": "johndoe",\
        "gitlabLogin": "johndoe"\
      },\
      "meta": {},\
      "target": "production",\
      "aliasError": {\
        "code": "<string>",\
        "message": "<string>"\
      },\
      "aliasAssigned": 123,\
      "createdAt": 1609492210000,\
      "buildingAt": 1609492210000,\
      "ready": 1609492210000,\
      "readySubstate": "STAGED",\
      "checksState": "registered",\
      "checksConclusion": "succeeded",\
      "checks": {\
        "deployment-alias": {\
          "state": "succeeded",\
          "startedAt": 123,\
          "completedAt": 123\
        }\
      },\
      "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",\
      "errorCode": "BUILD_FAILED",\
      "errorMessage": "The Deployment has been canceled because this project was not affected",\
      "oomReport": "out-of-memory",\
      "isRollbackCandidate": true,\
      "prebuilt": true,\
      "projectSettings": {\
        "framework": "blitzjs",\
        "gitForkProtection": true,\
        "customerSupportCodeVisibility": true,\
        "gitLFS": true,\
        "devCommand": "<string>",\
        "installCommand": "<string>",\
        "buildCommand": "<string>",\
        "nodeVersion": "24.x",\
        "outputDirectory": "<string>",\
        "publicSource": true,\
        "rootDirectory": "<string>",\
        "sourceFilesOutsideRootDirectory": true,\
        "commandForIgnoringBuildStep": "<string>",\
        "createdAt": 123,\
        "speedInsights": {\
          "id": "<string>",\
          "enabledAt": 123,\
          "disabledAt": 123,\
          "canceledAt": 123,\
          "hasData": true,\
          "paidAt": 123\
        },\
        "webAnalytics": {\
          "id": "<string>",\
          "disabledAt": 123,\
          "canceledAt": 123,\
          "enabledAt": 123,\
          "hasData": true\
        },\
        "skipGitConnectDuringLink": true,\
        "gitComments": {\
          "onPullRequest": true,\
          "onCommit": true\
        }\
      },\
      "connectBuildsEnabled": true,\
      "connectConfigurationId": "<string>",\
      "passiveConnectConfigurationId": "<string>",\
      "expiration": 123,\
      "proposedExpiration": 123,\
      "customEnvironment": {\
        "id": "<string>",\
        "slug": "<string>"\
      }\
    }\
  ]
}
```

deployments

# List deployments

Copy page

List deployments under the authenticated user or team. If a deployment hasn’t finished uploading (is incomplete), the `url` property will have a value of `null`.

Copy page

GET

/

v6

/

deployments

getDeployments

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.getDeployments({
    app: "docs",
    from: 1612948664566,
    limit: 10,
    projectId: "QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY",
    projectIds: [\
      "prj_123",\
      "prj_456",\
    ],
    target: "production",
    to: 1612948664566,
    users: "kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY",
    since: 1540095775941,
    until: 1540095775951,
    state: "BUILDING,READY",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

404

422

Copy

Ask AI

```
{
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  },
  "deployments": [\
    {\
      "uid": "dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa",\
      "name": "docs",\
      "projectId": "<string>",\
      "url": "docs-9jaeg38me.vercel.app",\
      "created": 1609492210000,\
      "defaultRoute": "/docs",\
      "deleted": 1609492210000,\
      "undeleted": 1609492210000,\
      "softDeletedByRetention": true,\
      "source": "cli",\
      "state": "READY",\
      "readyState": "READY",\
      "type": "LAMBDAS",\
      "creator": {\
        "uid": "eLrCnEgbKhsHyfbiNR7E8496",\
        "email": "example@example.com",\
        "username": "johndoe",\
        "githubLogin": "johndoe",\
        "gitlabLogin": "johndoe"\
      },\
      "meta": {},\
      "target": "production",\
      "aliasError": {\
        "code": "<string>",\
        "message": "<string>"\
      },\
      "aliasAssigned": 123,\
      "createdAt": 1609492210000,\
      "buildingAt": 1609492210000,\
      "ready": 1609492210000,\
      "readySubstate": "STAGED",\
      "checksState": "registered",\
      "checksConclusion": "succeeded",\
      "checks": {\
        "deployment-alias": {\
          "state": "succeeded",\
          "startedAt": 123,\
          "completedAt": 123\
        }\
      },\
      "inspectorUrl": "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",\
      "errorCode": "BUILD_FAILED",\
      "errorMessage": "The Deployment has been canceled because this project was not affected",\
      "oomReport": "out-of-memory",\
      "isRollbackCandidate": true,\
      "prebuilt": true,\
      "projectSettings": {\
        "framework": "blitzjs",\
        "gitForkProtection": true,\
        "customerSupportCodeVisibility": true,\
        "gitLFS": true,\
        "devCommand": "<string>",\
        "installCommand": "<string>",\
        "buildCommand": "<string>",\
        "nodeVersion": "24.x",\
        "outputDirectory": "<string>",\
        "publicSource": true,\
        "rootDirectory": "<string>",\
        "sourceFilesOutsideRootDirectory": true,\
        "commandForIgnoringBuildStep": "<string>",\
        "createdAt": 123,\
        "speedInsights": {\
          "id": "<string>",\
          "enabledAt": 123,\
          "disabledAt": 123,\
          "canceledAt": 123,\
          "hasData": true,\
          "paidAt": 123\
        },\
        "webAnalytics": {\
          "id": "<string>",\
          "disabledAt": 123,\
          "canceledAt": 123,\
          "enabledAt": 123,\
          "hasData": true\
        },\
        "skipGitConnectDuringLink": true,\
        "gitComments": {\
          "onPullRequest": true,\
          "onCommit": true\
        }\
      },\
      "connectBuildsEnabled": true,\
      "connectConfigurationId": "<string>",\
      "passiveConnectConfigurationId": "<string>",\
      "expiration": 123,\
      "proposedExpiration": 123,\
      "customEnvironment": {\
        "id": "<string>",\
        "slug": "<string>"\
      }\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-app)

app

string

Name of the deployment.

Example:

`"docs"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-from)

from

number

deprecated

Gets the deployment created after this Date timestamp. (default: current time)

Example:

`1612948664566`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-limit)

limit

number

Maximum number of deployments to list from a request.

Example:

`10`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-project-id)

projectId

string

Filter deployments from the given ID or name.

Example:

`"QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-project-ids)

projectIds

string\[\]

Filter deployments from the given project IDs. Cannot be used when projectId is specified.

Required array length: `1 - 20` elements

Example:

```
["prj_123", "prj_456"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-target)

target

string

Filter deployments based on the environment.

Example:

`"production"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-to)

to

number

deprecated

Gets the deployment created before this Date timestamp. (default: current time)

Example:

`1612948664566`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-users)

users

string

Filter out deployments based on users who have created the deployment.

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-since)

since

number

Get Deployments created after this JavaScript timestamp.

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-until)

until

number

Get Deployments created before this JavaScript timestamp.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-state)

state

string

Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)

Example:

`"BUILDING,READY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-rollback-candidate)

rollbackCandidate

boolean

Filter deployments based on their rollback candidacy

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-branch)

branch

string

Filter deployments based on the branch name

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-sha)

sha

string

Filter deployments based on the SHA

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments)

deployments

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-uid)

uid

string

required

The unique identifier of the deployment.

Example:

`"dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-name)

name

string

required

The name of the deployment.

Example:

`"docs"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-project-id)

projectId

string

required

The project ID of the deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-url)

url

string

required

The URL of the deployment.

Example:

`"docs-9jaeg38me.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-created)

created

number

required

Timestamp of when the deployment got created.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-type)

type

enum<string>

required

The type of the deployment.

Available options:

`LAMBDAS`

Example:

`"LAMBDAS"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-creator)

creator

object

required

Metadata information of the user who created the deployment.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-inspector-url)

inspectorUrl

string \| null

required

Vercel URL to inspect the deployment.

Example:

`"https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-default-route)

defaultRoute

string

The default route that should be used for screenshots and links if configured with microfrontends.

Example:

`"/docs"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-deleted)

deleted

number

Timestamp of when the deployment got deleted.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-undeleted)

undeleted

number

Timestamp of when the deployment was undeleted.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-soft-deleted-by-retention)

softDeletedByRetention

boolean

Optional flag to indicate if the deployment was soft deleted by retention policy.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-source)

source

enum<string>

The source of the deployment.

Available options:

`api-trigger-git-deploy`,

`cli`,

`clone/repo`,

`git`,

`import`,

`import/repo`,

`redeploy`,

`v0-web`

Example:

`"cli"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-state)

state

enum<string>

In which state is the deployment.

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`QUEUED`,

`READY`,

`CANCELED`,

`DELETED`

Example:

`"READY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-ready-state)

readyState

enum<string>

In which state is the deployment.

Available options:

`BUILDING`,

`ERROR`,

`INITIALIZING`,

`QUEUED`,

`READY`,

`CANCELED`,

`DELETED`

Example:

`"READY"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-meta)

meta

object

Metadata information from the Git provider.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-target)

target

enum<string> \| null

On which environment has the deployment been deployed to.

Available options:

`production`,

`staging`

Example:

`"production"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-alias-error)

aliasError

object \| null

An error object in case aliasing of the deployment failed.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-alias-assigned)

aliasAssigned

numberboolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-created-at)

createdAt

number

Timestamp of when the deployment got created.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-building-at)

buildingAt

number

Timestamp of when the deployment started building at.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-ready)

ready

number

Timestamp of when the deployment got ready.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-ready-substate)

readySubstate

enum<string>

Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has seen production traffic

Available options:

`STAGED`,

`ROLLING`,

`PROMOTED`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-checks-state)

checksState

enum<string>

State of all registered checks

Available options:

`registered`,

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-checks-conclusion)

checksConclusion

enum<string>

Conclusion for checks

Available options:

`succeeded`,

`failed`,

`skipped`,

`canceled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-checks)

checks

object

Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-error-code)

errorCode

string

Error code when the deployment is in an error state.

Example:

`"BUILD_FAILED"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-error-message)

errorMessage

string \| null

Error message when the deployment is in an canceled or error state.

Example:

`"The Deployment has been canceled because this project was not affected"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-oom-report)

oomReport

enum<string>

Indicates if the deployment encountered an out-of-memory error.

Available options:

`out-of-memory`

Example:

`"out-of-memory"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-is-rollback-candidate)

isRollbackCandidate

boolean \| null

Deployment can be used for instant rollback

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-prebuilt)

prebuilt

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-project-settings)

projectSettings

object

The project settings which was used for this deployment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-connect-builds-enabled)

connectBuildsEnabled

boolean

The flag saying if Secure Compute network is used for builds

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-connect-configuration-id)

connectConfigurationId

string

The ID of Secure Compute network used for this deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-passive-connect-configuration-id)

passiveConnectConfigurationId

string

The ID of Secure Compute network used for this deployment's passive functions

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-expiration)

expiration

number

The expiration configured by the project retention policy

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-proposed-expiration)

proposedExpiration

number

The expiration proposed to replace the existing expiration

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/list-deployments#response-deployments-custom-environment)

customEnvironment

object

The custom environment used for this deployment, if any

Show child attributes

[Get Deployment File Contents](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-file-contents) [Delete a Deployment](https://vercel.com/docs/rest-api/reference/endpoints/deployments/delete-a-deployment)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.