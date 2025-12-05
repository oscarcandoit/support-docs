---
url: "https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks"
title: "Get a list of webhooks - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

webhooks

Get a list of webhooks

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

- projectMembers

- connect

- rolling-release

- security

- teams

- webhooks

  - [GET\\
    \\
    Get a list of webhooks](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks)
  - [POST\\
    \\
    Creates a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/creates-a-webhook)
  - [GET\\
    \\
    Get a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-webhook)
  - [DEL\\
    \\
    Deletes a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook)
- aliases

- certs


getWebhooks

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webhooks.getWebhooks({
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
    "projectsMetadata": [\
      {\
        "id": "<string>",\
        "name": "<string>",\
        "framework": "blitzjs",\
        "latestDeployment": "<string>"\
      }\
    ],\
    "events": "deployment.created",\
    "id": "account_hook_GflD6EYyo7F4ViYS",\
    "url": "https://my-webhook.com",\
    "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",\
    "createdAt": 1567024758130,\
    "updatedAt": 1567024758130,\
    "projectIds": [\
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"\
    ]\
  }\
]
```

webhooks

# Get a list of webhooks

Copy page

Get a list of webhooks

Copy page

GET

/

v1

/

webhooks

getWebhooks

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.webhooks.getWebhooks({
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
    "projectsMetadata": [\
      {\
        "id": "<string>",\
        "name": "<string>",\
        "framework": "blitzjs",\
        "latestDeployment": "<string>"\
      }\
    ],\
    "events": "deployment.created",\
    "id": "account_hook_GflD6EYyo7F4ViYS",\
    "url": "https://my-webhook.com",\
    "ownerId": "ZspSRT4ljIEEmMHgoDwKWDei",\
    "createdAt": 1567024758130,\
    "updatedAt": 1567024758130,\
    "projectIds": [\
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"\
    ]\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#parameter-project-id)

projectId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1 · object\[\]

- Option 2 · object\[\]


[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-projects-metadata)

projectsMetadata

object\[\] \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-events)

events

enum<string>\[\]

required

The webhooks events

Show child attributes

Example:

`"deployment.created"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-id)

id

string

required

The webhook id

Example:

`"account_hook_GflD6EYyo7F4ViYS"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-url)

url

string

required

A string with the URL of the webhook

Example:

`"https://my-webhook.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-owner-id)

ownerId

string

required

The unique ID of the team the webhook belongs to

Example:

`"ZspSRT4ljIEEmMHgoDwKWDei"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-created-at)

createdAt

number

required

A number containing the date when the webhook was created in in milliseconds

Example:

`1567024758130`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-updated-at)

updatedAt

number

required

A number containing the date when the webhook was updated in in milliseconds

Example:

`1567024758130`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks#response-project-ids)

projectIds

string\[\]

The ID of the projects the webhook is associated with

Example:

```
["prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"]
```

[Delete a Team invite code](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code) [Creates a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/creates-a-webhook)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.