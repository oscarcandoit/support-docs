---
url: "https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag"
title: "Invalidate by tag - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

edge-cache

Invalidate by tag

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

  - [POST\\
    \\
    Invalidate by tag](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag)
  - [POST\\
    \\
    Dangerously delete by tag](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/dangerously-delete-by-tag)
  - [POST\\
    \\
    Invalidate by source image](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-source-image)
  - [POST\\
    \\
    Dangerously delete by source image](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/dangerously-delete-by-source-image)
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


invalidateByTags

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.edgeCache.invalidateByTags({
    projectIdOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

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
This response has no body data.
```

edge-cache

# Invalidate by tag

Copy page

Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.

Copy page

POST

/

v1

/

edge-cache

/

invalidate-by-tags

invalidateByTags

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.edgeCache.invalidateByTags({
    projectIdOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

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
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#parameter-project-id-or-name)

projectIdOrName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#body-tags)

tags

string\[\]string

required

Required array length: `1 - 16` elements

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/invalidate-by-tag#body-target)

target

enum<string>

Available options:

`production`,

`preview`

[Validate Drain delivery configuration](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration) [Dangerously delete by tag](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/dangerously-delete-by-tag)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.