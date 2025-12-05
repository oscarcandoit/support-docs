---
url: "https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup"
title: "Get Edge Config backup - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

edge-config

Get Edge Config backup

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


getEdgeConfigBackup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigBackup({
    edgeConfigId: "<id>",
    edgeConfigBackupVersionId: "<id>",
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
  "id": "<string>",
  "lastModified": 123,
  "backup": {
    "digest": "<string>",
    "items": {},
    "slug": "<string>",
    "updatedAt": 123
  },
  "metadata": {
    "updatedAt": "<string>",
    "updatedBy": "<string>",
    "itemsCount": 123,
    "itemsBytes": 123
  },
  "user": {
    "id": "<string>",
    "username": "<string>",
    "email": "<string>",
    "name": "<string>",
    "avatar": "<string>"
  }
}
```

edge-config

# Get Edge Config backup

Copy page

Retrieves a specific version of an Edge Config from backup storage.

Copy page

GET

/

v1

/

edge-config

/

{edgeConfigId}

/

backups

/

{edgeConfigBackupVersionId}

getEdgeConfigBackup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.edgeConfig.getEdgeConfigBackup({
    edgeConfigId: "<id>",
    edgeConfigBackupVersionId: "<id>",
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
  "id": "<string>",
  "lastModified": 123,
  "backup": {
    "digest": "<string>",
    "items": {},
    "slug": "<string>",
    "updatedAt": 123
  },
  "metadata": {
    "updatedAt": "<string>",
    "updatedBy": "<string>",
    "itemsCount": 123,
    "itemsBytes": 123
  },
  "user": {
    "id": "<string>",
    "username": "<string>",
    "email": "<string>",
    "name": "<string>",
    "avatar": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#parameter-edge-config-id)

edgeConfigId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#parameter-edge-config-backup-version-id)

edgeConfigBackupVersionId

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1

- Option 2


The object the API responds with when requesting an Edge Config backup

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-last-modified)

lastModified

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-backup)

backup

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-backup-digest)

backup.digest

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-backup-items)

backup.items

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-backup-slug)

backup.slug

string

required

Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-backup-updated-at)

backup.updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-metadata)

metadata

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-metadata-updated-at)

metadata.updatedAt

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-metadata-updated-by)

metadata.updatedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-metadata-items-count)

metadata.itemsCount

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-metadata-items-bytes)

metadata.itemsBytes

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user)

user

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user-id)

user.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user-username)

user.username

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user-email)

user.email

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user-name)

user.name

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backup#response-user-avatar)

user.avatar

string

[Create an Edge Config token](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/create-an-edge-config-token) [Get Edge Config backups](https://vercel.com/docs/rest-api/reference/endpoints/edge-config/get-edge-config-backups)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.