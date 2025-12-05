---
url: "https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact"
title: "Query information about an artifact - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

artifacts

Query information about an artifact

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

  - [POST\\
    \\
    Record an artifacts cache usage event](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event)
  - [GET\\
    \\
    Get status of Remote Caching for this principal](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal)
  - [GET\\
    \\
    Download a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/download-a-cache-artifact)
  - [PUT\\
    \\
    Upload a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/upload-a-cache-artifact)
  - [HEAD\\
    \\
    Check if a cache artifact exists](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/check-if-a-cache-artifact-exists)
  - [POST\\
    \\
    Query information about an artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact)
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

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


artifactQuery

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.artifactQuery({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      hashes: [\
        "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",\
        "34HKQaOmR5t5Uy6vasdasdasdasd",\
      ],
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

Copy

Ask AI

```
{}
```

artifacts

# Query information about an artifact

Copy page

Query information about an array of artifacts.

Copy page

POST

/

v8

/

artifacts

artifactQuery

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.artifactQuery({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      hashes: [\
        "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",\
        "34HKQaOmR5t5Uy6vasdasdasdasd",\
      ],
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#body-hashes)

hashes

string\[\]

required

artifact hashes

Example:

```
[\
  "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",\
  "34HKQaOmR5t5Uy6vasdasdasdasd"\
]
```

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#response-key)

{key}

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#response-key-size)

{key}.size

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#response-key-task-duration-ms)

{key}.taskDurationMs

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/query-information-about-an-artifact#response-key-tag)

{key}.tag

string

[Check if a cache artifact exists](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/check-if-a-cache-artifact-exists) [Retrieve a list of all checks](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.