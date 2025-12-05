---
url: "https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook"
title: "Deletes a webhook - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

webhooks

Deletes a webhook

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


deleteWebhook

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.webhooks.deleteWebhook({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

204

400

401

403

Copy

Ask AI

```
This response has no body data.
```

webhooks

# Deletes a webhook

Copy page

Deletes a webhook

Copy page

DELETE

/

v1

/

webhooks

/

{id}

deleteWebhook

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.webhooks.deleteWebhook({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

204

400

401

403

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook#parameter-id)

id

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

[Get a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-webhook) [List Deployment Aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.