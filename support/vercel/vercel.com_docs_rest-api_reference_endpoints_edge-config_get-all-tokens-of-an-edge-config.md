---
url: "https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config"
title: "Get all tokens of an Edge Config - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

edge-config

Get all tokens of an Edge Config

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

  - [GET\\
    \\
    Get Edge Configs](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs)
  - [POST\\
    \\
    Create an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/create-an-edge-config)
  - [GET\\
    \\
    Get an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-an-edge-config)
  - [PUT\\
    \\
    Update an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/update-an-edge-config)
  - [DEL\\
    \\
    Delete an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/delete-an-edge-config)
  - [GET\\
    \\
    Get Edge Config items](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-items)
  - [PATCH\\
    \\
    Update Edge Config items in batch](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/update-edge-config-items-in-batch)
  - [GET\\
    \\
    Get Edge Config schema](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-schema)
  - [POST\\
    \\
    Update Edge Config schema](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/update-edge-config-schema)
  - [DEL\\
    \\
    Delete an Edge Config's schema](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/delete-an-edge-configs-schema)
  - [GET\\
    \\
    Get an Edge Config item](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-an-edge-config-item)
  - [GET\\
    \\
    Get all tokens of an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config)
  - [DEL\\
    \\
    Delete one or more Edge Config tokens](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/delete-one-or-more-edge-config-tokens)
  - [GET\\
    \\
    Get Edge Config token meta data](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-token-meta-data)
  - [POST\\
    \\
    Create an Edge Config token](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/create-an-edge-config-token)
  - [GET\\
    \\
    Get Edge Config backup](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup)
  - [GET\\
    \\
    Get Edge Config backups](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backups)
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


getEdgeConfigTokens

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigTokens({
    edgeConfigId: "<id>",
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
  "token": "<string>",
  "label": "<string>",
  "id": "<string>",
  "edgeConfigId": "<string>",
  "createdAt": 123
}
```

edge-config

# Get all tokens of an Edge Config

Copy page

Returns all tokens of an Edge Config.

Copy page

GET

/

v1

/

edge-config

/

{edgeConfigId}

/

tokens

getEdgeConfigTokens

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigTokens({
    edgeConfigId: "<id>",
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
  "token": "<string>",
  "label": "<string>",
  "id": "<string>",
  "edgeConfigId": "<string>",
  "createdAt": 123
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#parameter-edge-config-id)

edgeConfigId

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The EdgeConfig.

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#response-token)

token

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#response-label)

label

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#response-id)

id

string

required

This is not the token itself, but rather an id to identify the token by

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#response-edge-config-id)

edgeConfigId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-all-tokens-of-an-edge-config#response-created-at)

createdAt

number

required

[Get an Edge Config item](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-an-edge-config-item) [Delete one or more Edge Config tokens](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/delete-one-or-more-edge-config-tokens)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.