---
url: "https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks"
title: "Retrieve a list of all checks - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

checks

Retrieve a list of all checks

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


getAllChecks

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.getAllChecks({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
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

Copy

Ask AI

```
{
  "checks": [\
    {\
      "completedAt": 123,\
      "conclusion": "canceled",\
      "createdAt": 123,\
      "detailsUrl": "<string>",\
      "id": "<string>",\
      "integrationId": "<string>",\
      "name": "<string>",\
      "output": {\
        "metrics": {\
          "FCP": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "LCP": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "CLS": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "TBT": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "virtualExperienceScore": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          }\
        }\
      },\
      "path": "<string>",\
      "rerequestable": true,\
      "blocking": true,\
      "startedAt": 123,\
      "status": "registered",\
      "updatedAt": 123\
    }\
  ]
}
```

checks

# Retrieve a list of all checks

Copy page

List all of the checks created for a deployment.

Copy page

GET

/

v1

/

deployments

/

{deploymentId}

/

checks

getAllChecks

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.getAllChecks({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
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

Copy

Ask AI

```
{
  "checks": [\
    {\
      "completedAt": 123,\
      "conclusion": "canceled",\
      "createdAt": 123,\
      "detailsUrl": "<string>",\
      "id": "<string>",\
      "integrationId": "<string>",\
      "name": "<string>",\
      "output": {\
        "metrics": {\
          "FCP": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "LCP": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "CLS": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "TBT": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          },\
          "virtualExperienceScore": {\
            "value": 123,\
            "previousValue": 123,\
            "source": "web-vitals"\
          }\
        }\
      },\
      "path": "<string>",\
      "rerequestable": true,\
      "blocking": true,\
      "startedAt": 123,\
      "status": "registered",\
      "updatedAt": 123\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#parameter-deployment-id)

deploymentId

string

required

The deployment to get all checks for

Example:

`"dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks)

checks

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-integration-id)

integrationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-rerequestable)

rerequestable

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-blocking)

blocking

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-status)

status

enum<string>

required

Available options:

`registered`,

`running`,

`completed`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-completed-at)

completedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-conclusion)

conclusion

enum<string>

Available options:

`canceled`,

`failed`,

`neutral`,

`succeeded`,

`skipped`,

`stale`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-details-url)

detailsUrl

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-output)

output

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-path)

path

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks#response-checks-started-at)

startedAt

number

[Query information about an artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact) [Creates a new Check](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.