---
url: "https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check"
title: "Creates a new Check - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

checks

Creates a new Check

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

  - [GET\\
    \\
    Retrieve a list of all checks](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks)
  - [POST\\
    \\
    Creates a new Check](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check)
  - [GET\\
    \\
    Get a single check](https://vercel.com/docs/rest-api/reference/endpoints/checks/get-a-single-check)
  - [PATCH\\
    \\
    Update a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check)
  - [POST\\
    \\
    Rerequest a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check)
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

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


createCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.createCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "Performance Check",
      path: "/",
      blocking: true,
      detailsUrl: "http://example.com",
      externalId: "1234abc",
      rerequestable: true,
    },
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

Copy

Ask AI

```
{
  "id": "chk_1a2b3c4d5e6f7g8h9i0j",
  "name": "Performance Check",
  "path": "/api/users",
  "status": "completed",
  "conclusion": "succeeded",
  "blocking": true,
  "output": {
    "metrics": {
      "FCP": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "LCP": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "CLS": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "TBT": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "virtualExperienceScore": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      }
    }
  },
  "detailsUrl": "<string>",
  "integrationId": "<string>",
  "deploymentId": "<string>",
  "externalId": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "startedAt": 123,
  "completedAt": 123,
  "rerequestable": true
}
```

checks

# Creates a new Check

Copy page

Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

Copy page

POST

/

v1

/

deployments

/

{deploymentId}

/

checks

createCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.createCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "Performance Check",
      path: "/",
      blocking: true,
      detailsUrl: "http://example.com",
      externalId: "1234abc",
      rerequestable: true,
    },
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

Copy

Ask AI

```
{
  "id": "chk_1a2b3c4d5e6f7g8h9i0j",
  "name": "Performance Check",
  "path": "/api/users",
  "status": "completed",
  "conclusion": "succeeded",
  "blocking": true,
  "output": {
    "metrics": {
      "FCP": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "LCP": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "CLS": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "TBT": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      },
      "virtualExperienceScore": {
        "value": 123,
        "previousValue": 123,
        "source": "web-vitals"
      }
    }
  },
  "detailsUrl": "<string>",
  "integrationId": "<string>",
  "deploymentId": "<string>",
  "externalId": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "startedAt": 123,
  "completedAt": 123,
  "rerequestable": true
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#parameter-deployment-id)

deploymentId

string

required

The deployment to create the check for.

Example:

`"dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-name)

name

string

required

The name of the check being created

Maximum length: `100`

Example:

`"Performance Check"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-blocking)

blocking

boolean

required

Whether the check should block a deployment from succeeding

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-path)

path

string

Path of the page that is being checked

Maximum length: `255`

Example:

`"/"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-details-url)

detailsUrl

string

URL to display for further details

Example:

`"http://example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-external-id)

externalId

string

An identifier that can be used as an external reference

Example:

`"1234abc"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#body-rerequestable)

rerequestable

boolean

Whether a user should be able to request for the check to be rerun if it fails

Example:

`true`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-id)

id

string

required

Example:

`"chk_1a2b3c4d5e6f7g8h9i0j"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-name)

name

string

required

Example:

`"Performance Check"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-status)

status

enum<string>

required

Available options:

`registered`,

`running`,

`completed`

Example:

`"completed"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-blocking)

blocking

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-integration-id)

integrationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-deployment-id)

deploymentId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-path)

path

string

Example:

`"/api/users"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-conclusion)

conclusion

enum<string>

Available options:

`canceled`,

`failed`,

`neutral`,

`succeeded`,

`skipped`,

`stale`

Example:

`"succeeded"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-output)

output

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-output-metrics)

output.metrics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-details-url)

detailsUrl

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-external-id)

externalId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-started-at)

startedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-completed-at)

completedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check#response-rerequestable)

rerequestable

boolean

[Retrieve a list of all checks](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks) [Get a single check](https://vercel.com/docs/rest-api/reference/endpoints/checks/get-a-single-check)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.