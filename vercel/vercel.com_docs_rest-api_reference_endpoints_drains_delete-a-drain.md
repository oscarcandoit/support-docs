---
url: "https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain"
title: "Delete a drain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

drains

Delete a drain

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

  - [GET\\
    \\
    Retrieve a list of all Drains](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains)
  - [POST\\
    \\
    Create a new Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain)
  - [GET\\
    \\
    Find a Drain by id](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id)
  - [DEL\\
    \\
    Delete a drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain)
  - [PATCH\\
    \\
    Update an existing Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/update-an-existing-drain)
  - [POST\\
    \\
    Validate Drain delivery configuration](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration)
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


deleteDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.drains.deleteDrain({
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

404

Copy

Ask AI

```
This response has no body data.
```

drains

# Delete a drain

Copy page

Delete a specific Drain by passing the drain id in the URL.

Copy page

DELETE

/

v1

/

drains

/

{id}

deleteDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.drains.deleteDrain({
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

404

Copy

Ask AI

```
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain#parameter-id)

id

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

[Find a Drain by id](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id) [Update an existing Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/update-an-existing-drain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.