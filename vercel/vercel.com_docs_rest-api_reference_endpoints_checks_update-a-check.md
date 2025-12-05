---
url: "https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check"
title: "Update a check - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

checks

Update a check

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


updateCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.updateCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "Performance Check",
      path: "/",
      detailsUrl: "https://example.com/check/run/1234abc",
      output: {
        metrics: {
          fcp: {
            value: 1200,
            previousValue: 900,
            source: "web-vitals",
          },
          lcp: {
            value: 1200,
            previousValue: 1000,
            source: "web-vitals",
          },
          cls: {
            value: 4,
            previousValue: 2,
            source: "web-vitals",
          },
          tbt: {
            value: 3000,
            previousValue: 3500,
            source: "web-vitals",
          },
          virtualExperienceScore: {
            value: 30,
            previousValue: 35,
            source: "web-vitals",
          },
        },
      },
      externalId: "1234abc",
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

413

Copy

Ask AI

```
{
  "id": "<string>",
  "name": "<string>",
  "path": "<string>",
  "status": "registered",
  "conclusion": "canceled",
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

# Update a check

Copy page

Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

Copy page

PATCH

/

v1

/

deployments

/

{deploymentId}

/

checks

/

{checkId}

updateCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.updateCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "Performance Check",
      path: "/",
      detailsUrl: "https://example.com/check/run/1234abc",
      output: {
        metrics: {
          fcp: {
            value: 1200,
            previousValue: 900,
            source: "web-vitals",
          },
          lcp: {
            value: 1200,
            previousValue: 1000,
            source: "web-vitals",
          },
          cls: {
            value: 4,
            previousValue: 2,
            source: "web-vitals",
          },
          tbt: {
            value: 3000,
            previousValue: 3500,
            source: "web-vitals",
          },
          virtualExperienceScore: {
            value: 30,
            previousValue: 35,
            source: "web-vitals",
          },
        },
      },
      externalId: "1234abc",
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

413

Copy

Ask AI

```
{
  "id": "<string>",
  "name": "<string>",
  "path": "<string>",
  "status": "registered",
  "conclusion": "canceled",
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#parameter-deployment-id)

deploymentId

string

required

The deployment to update the check for.

Example:

`"dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#parameter-check-id)

checkId

string

required

The check being updated

Example:

`"check_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-name)

name

string

The name of the check being created

Maximum length: `100`

Example:

`"Performance Check"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-path)

path

string

Path of the page that is being checked

Maximum length: `255`

Example:

`"/"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-status)

status

enum<string>

The current status of the check

Available options:

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-conclusion)

conclusion

enum<string>

The result of the check being run

Available options:

`canceled`,

`failed`,

`neutral`,

`succeeded`,

`skipped`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-details-url)

detailsUrl

string

A URL a user may visit to see more information about the check

Example:

`"https://example.com/check/run/1234abc"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-output)

output

object

The results of the check Run

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-output-metrics)

output.metrics

object

Metrics about the page

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#body-external-id)

externalId

string

An identifier that can be used as an external reference

Example:

`"1234abc"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-status)

status

enum<string>

required

Available options:

`registered`,

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-blocking)

blocking

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-integration-id)

integrationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-deployment-id)

deploymentId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-path)

path

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-conclusion)

conclusion

enum<string>

Available options:

`canceled`,

`failed`,

`neutral`,

`succeeded`,

`skipped`,

`stale`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-output)

output

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-output-metrics)

output.metrics

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-details-url)

detailsUrl

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-external-id)

externalId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-started-at)

startedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-completed-at)

completedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check#response-rerequestable)

rerequestable

boolean

[Get a single check](https://vercel.com/docs/rest-api/reference/endpoints/checks/get-a-single-check) [Rerequest a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.