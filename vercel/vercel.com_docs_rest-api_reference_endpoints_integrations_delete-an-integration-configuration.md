---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration"
title: "Delete an integration configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

Delete an integration configuration

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

  - [GET\\
    \\
    List integration billing plans](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans)
  - [POST\\
    \\
    Connect integration resource to project](https://vercel.com/docs/rest-api/reference/endpoints/integrations/connect-integration-resource-to-project)
  - [GET\\
    \\
    Get configurations for the authenticated user or team](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team)
  - [GET\\
    \\
    Retrieve an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration)
  - [DEL\\
    \\
    Delete an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration)
  - [GET\\
    \\
    List products for integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration)
  - [POST\\
    \\
    Create integration store (free and paid plans)](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans)
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


deleteConfiguration

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.integrations.deleteConfiguration({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

integrations

# Delete an integration configuration

Copy page

Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.

Copy page

DELETE

/

v1

/

integrations

/

configuration

/

{id}

deleteConfiguration

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.integrations.deleteConfiguration({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

}

run();
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration#parameter-id)

id

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

204

The configuration was successfully removed

[Retrieve an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration) [List products for integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.