---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url"
title: "Update the protection bypass for a URL - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

Update the protection bypass for a URL

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


patchUrlProtectionBypass

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.patchUrlProtectionBypass({
    id: "<id>",
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

409

428

500

Copy

Ask AI

```
{}
```

aliases

# Update the protection bypass for a URL

Copy page

Update the protection bypass for the alias or deployment URL (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).

Copy page

PATCH

/

aliases

/

{id}

/

protection-bypass

patchUrlProtectionBypass

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.patchUrlProtectionBypass({
    id: "<id>",
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

409

428

500

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#parameter-id)

id

string

required

The alias or deployment ID

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2

- Option 3


[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#body-ttl)

ttl

number

Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire.

Required range: `x <= 63072000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#body-revoke)

revoke

object

Optional instructions for revoking and regenerating a shareable link

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#body-revoke-secret)

revoke.secret

string

required

Sharebale link to revoked

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/update-the-protection-bypass-for-a-url#body-revoke-regenerate)

revoke.regenerate

boolean

required

Whether or not a new shareable link should be created after the provided secret is revoked

#### Response

200

application/json

The response is of type `object`.

[Delete an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias) [Get cert by id](https://vercel.com/docs/rest-api/reference/endpoints/certs/get-cert-by-id)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.