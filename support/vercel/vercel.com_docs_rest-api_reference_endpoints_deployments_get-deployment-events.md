---
url: "https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events"
title: "Get deployment events - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

deployments

Get deployment events

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


getDeploymentEvents

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.getDeploymentEvents({
    idOrUrl: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
    direction: "backward",
    follow: 1,
    limit: 100,
    name: "bld_cotnkcr76",
    since: 1540095775941,
    until: 1540106318643,
    statusCode: "5xx",
    delimiter: 1,
    builds: 1,
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

500

Copy

Ask AI

```
[\
  {\
    "type": "delimiter",\
    "created": 123,\
    "payload": {\
      "deploymentId": "<string>",\
      "info": {\
        "type": "<string>",\
        "name": "<string>",\
        "entrypoint": "<string>",\
        "path": "<string>",\
        "step": "<string>",\
        "readyState": "<string>"\
      },\
      "text": "<string>",\
      "id": "<string>",\
      "date": 123,\
      "serial": "<string>",\
      "created": 123,\
      "statusCode": 123,\
      "requestId": "<string>",\
      "proxy": {\
        "timestamp": 123,\
        "method": "<string>",\
        "host": "<string>",\
        "path": "<string>",\
        "statusCode": 123,\
        "userAgent": [\
          "<string>"\
        ],\
        "referer": "<string>",\
        "clientIp": "<string>",\
        "region": "<string>",\
        "scheme": "<string>",\
        "responseByteSize": 123,\
        "cacheId": "<string>",\
        "pathType": "<string>",\
        "pathTypeVariant": "<string>",\
        "vercelId": "<string>",\
        "vercelCache": "MISS",\
        "lambdaRegion": "<string>",\
        "wafAction": "log",\
        "wafRuleId": "<string>"\
      }\
    }\
  }\
]
```

deployments

# Get deployment events

Copy page

Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.

Copy page

GET

/

v3

/

deployments

/

{idOrUrl}

/

events

getDeploymentEvents

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.getDeploymentEvents({
    idOrUrl: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
    direction: "backward",
    follow: 1,
    limit: 100,
    name: "bld_cotnkcr76",
    since: 1540095775941,
    until: 1540106318643,
    statusCode: "5xx",
    delimiter: 1,
    builds: 1,
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

500

Copy

Ask AI

```
[\
  {\
    "type": "delimiter",\
    "created": 123,\
    "payload": {\
      "deploymentId": "<string>",\
      "info": {\
        "type": "<string>",\
        "name": "<string>",\
        "entrypoint": "<string>",\
        "path": "<string>",\
        "step": "<string>",\
        "readyState": "<string>"\
      },\
      "text": "<string>",\
      "id": "<string>",\
      "date": 123,\
      "serial": "<string>",\
      "created": 123,\
      "statusCode": 123,\
      "requestId": "<string>",\
      "proxy": {\
        "timestamp": 123,\
        "method": "<string>",\
        "host": "<string>",\
        "path": "<string>",\
        "statusCode": 123,\
        "userAgent": [\
          "<string>"\
        ],\
        "referer": "<string>",\
        "clientIp": "<string>",\
        "region": "<string>",\
        "scheme": "<string>",\
        "responseByteSize": 123,\
        "cacheId": "<string>",\
        "pathType": "<string>",\
        "pathTypeVariant": "<string>",\
        "vercelId": "<string>",\
        "vercelCache": "MISS",\
        "lambdaRegion": "<string>",\
        "wafAction": "log",\
        "wafRuleId": "<string>"\
      }\
    }\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-id-or-url)

idOrUrl

string

required

The unique identifier or hostname of the deployment.

Example:

`"dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-direction)

direction

enum<string>

default:forward

Order of the returned events based on the timestamp.

Available options:

`backward`,

`forward`

Example:

`"backward"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-follow)

follow

enum<number>

When enabled, this endpoint will return live events as they happen.

Available options:

`0`,

`1`

Example:

`1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-limit)

limit

number

Maximum number of events to return. Provide `-1` to return all available logs.

Example:

`100`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-name)

name

string

Deployment build ID.

Example:

`"bld_cotnkcr76"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-since)

since

number

Timestamp for when build logs should be pulled from.

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-until)

until

number

Timestamp for when the build logs should be pulled up until.

Example:

`1540106318643`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-status-code)

statusCode

numberstring

HTTP status code range to filter events by.

Example:

`"5xx"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-delimiter)

delimiter

enum<number>

Available options:

`0`,

`1`

Example:

`1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-builds)

builds

enum<number>

Available options:

`0`,

`1`

Example:

`1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

object\[\] \| null

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#response-type)

type

enum<string>

required

Available options:

`delimiter`,

`command`,

`stdout`,

`stderr`,

`exit`,

`deployment-state`,

`middleware`,

`middleware-invocation`,

`edge-function-invocation`,

`metric`,

`report`,

`fatal`

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#response-created)

created

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events#response-payload)

payload

object

required

Show child attributes

[Unpause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/unpause-a-project) [Update deployment integration action](https://vercel.com/docs/rest-api/reference/endpoints/deployments/update-deployment-integration-action)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.