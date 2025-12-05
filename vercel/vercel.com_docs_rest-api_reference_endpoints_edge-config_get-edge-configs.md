---
url: "https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs"
title: "Get Edge Configs - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

edge-config

Get Edge Configs

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


getEdgeConfigs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigs({
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
[\
  {\
    "id": "<string>",\
    "createdAt": 123,\
    "ownerId": "<string>",\
    "slug": "<string>",\
    "updatedAt": 123,\
    "digest": "<string>",\
    "transfer": {\
      "fromAccountId": "<string>",\
      "startedAt": 123,\
      "doneAt": 123\
    },\
    "schema": {},\
    "purpose": {\
      "type": "flags",\
      "projectId": "<string>"\
    },\
    "sizeInBytes": 123,\
    "itemCount": 123\
  }\
]
```

edge-config

# Get Edge Configs

Copy page

Returns all Edge Configs.

Copy page

GET

/

v1

/

edge-config

getEdgeConfigs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigs({
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
[\
  {\
    "id": "<string>",\
    "createdAt": 123,\
    "ownerId": "<string>",\
    "slug": "<string>",\
    "updatedAt": 123,\
    "digest": "<string>",\
    "transfer": {\
      "fromAccountId": "<string>",\
      "startedAt": 123,\
      "doneAt": 123\
    },\
    "schema": {},\
    "purpose": {\
      "type": "flags",\
      "projectId": "<string>"\
    },\
    "sizeInBytes": 123,\
    "itemCount": 123\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

List of all edge configs.

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-size-in-bytes)

sizeInBytes

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-item-count)

itemCount

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-id)

id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-owner-id)

ownerId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-slug)

slug

string

Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-digest)

digest

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-transfer)

transfer

object

Keeps track of the current state of the Edge Config while it gets transferred.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-schema)

schema

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-configs#response-purpose)

purpose

object

Show child attributes

[Dangerously delete by source image](https://vercel.com/docs/rest-api/reference/endpoints/edge-cache/dangerously-delete-by-source-image) [Create an Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/create-an-edge-config)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.