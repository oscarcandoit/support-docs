---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias"
title: "Delete an Alias - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

Delete an Alias

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

- aliases

  - [GET\\
    \\
    List Deployment Aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases)
  - [POST\\
    \\
    Assign an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias)
  - [GET\\
    \\
    List aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases)
  - [GET\\
    \\
    Get an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias)
  - [DEL\\
    \\
    Delete an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias)
  - [PATCH\\
    \\
    Update the protection bypass for a URL](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url)
- certs


deleteAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.deleteAlias({
    aliasId: "<id>",
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
  "status": "SUCCESS"
}
```

aliases

# Delete an Alias

Copy page

Delete an Alias with the specified ID.

Copy page

DELETE

/

v2

/

aliases

/

{aliasId}

deleteAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.deleteAlias({
    aliasId: "<id>",
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
  "status": "SUCCESS"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#parameter-alias-id)

aliasId

string

required

The ID or alias that will be removed

Example:

`"2WjyKQmM8ZnGcJsPWMrHRHrE"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The alias was successfully removed

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#response-status)

status

enum<string>

required

Available options:

`SUCCESS`

[Get an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias) [Update the protection bypass for a URL](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.