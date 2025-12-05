---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment"
title: "Get logs for a deployment - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logs

Get logs for a deployment

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

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

  - [GET\\
    \\
    Get logs for a deployment](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment)
- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


getRuntimeLogs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logs.getRuntimeLogs({
    projectId: "<id>",
    deploymentId: "<id>",
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

Copy

Ask AI

```
{
  "level": "error",
  "message": "<string>",
  "rowId": "<string>",
  "source": "delimiter",
  "timestampInMs": 123,
  "domain": "<string>",
  "messageTruncated": true,
  "requestMethod": "<string>",
  "requestPath": "<string>",
  "responseStatusCode": 123
}
```

logs

# Get logs for a deployment

Copy page

Returns a stream of logs for a given deployment.

Copy page

GET

/

v1

/

projects

/

{projectId}

/

deployments

/

{deploymentId}

/

runtime-logs

getRuntimeLogs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logs.getRuntimeLogs({
    projectId: "<id>",
    deploymentId: "<id>",
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

Copy

Ask AI

```
{
  "level": "error",
  "message": "<string>",
  "rowId": "<string>",
  "source": "delimiter",
  "timestampInMs": 123,
  "domain": "<string>",
  "messageTruncated": true,
  "requestMethod": "<string>",
  "requestPath": "<string>",
  "responseStatusCode": 123
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#parameter-deployment-id)

deploymentId

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/stream+json

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-level)

level

enum<string>

required

Available options:

`error`,

`warning`,

`info`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-message)

message

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-row-id)

rowId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-source)

source

enum<string>

required

Available options:

`delimiter`,

`edge-function`,

`edge-middleware`,

`serverless`,

`request`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-timestamp-in-ms)

timestampInMs

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-domain)

domain

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-message-truncated)

messageTruncated

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-request-method)

requestMethod

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-request-path)

requestPath

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment#response-response-status-code)

responseStatusCode

number

required

[Delete an authentication token](https://vercel.com/docs/rest-api/reference/endpoints/authentication/delete-an-authentication-token) [List project members](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.