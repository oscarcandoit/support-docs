---
url: "https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal"
title: "Get status of Remote Caching for this principal - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

artifacts

Get status of Remote Caching for this principal

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


status

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.status({
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

402

403

Copy

Ask AI

```
{
  "status": "disabled"
}
```

artifacts

# Get status of Remote Caching for this principal

Copy page

Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.

Copy page

GET

/

v8

/

artifacts

/

status

status

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.status({
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

402

403

Copy

Ask AI

```
{
  "status": "disabled"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/get-status-of-remote-caching-for-this-principal#response-status)

status

enum<string>

required

Available options:

`disabled`,

`enabled`,

`over_limit`,

`paused`

[Record an artifacts cache usage event](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event) [Download a cache artifact](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/download-a-cache-artifact)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.