---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias"
title: "Assign an Alias - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

Assign an Alias

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


assignAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.assignAlias({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      alias: "my-alias.vercel.app",
      redirect: null,
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

Copy

Ask AI

```
{
  "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE",
  "alias": "my-alias.vercel.app",
  "created": "2017-04-26T23:00:34.232Z",
  "oldDeploymentId": "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa"
}
```

aliases

# Assign an Alias

Copy page

Creates a new alias for the deployment with the given deployment ID. The authenticated user or team must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.

Copy page

POST

/

v2

/

deployments

/

{id}

/

aliases

assignAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.assignAlias({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      alias: "my-alias.vercel.app",
      redirect: null,
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

409

Copy

Ask AI

```
{
  "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE",
  "alias": "my-alias.vercel.app",
  "created": "2017-04-26T23:00:34.232Z",
  "oldDeploymentId": "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#parameter-id)

id

string

required

The ID of the deployment the aliases should be listed for

Example:

`"dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#body-alias)

alias

string

The alias we want to assign to the deployment defined in the URL

Example:

`"my-alias.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#body-redirect)

redirect

string \| null

The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307

Example:

`null`

#### Response

200

application/json

The alias was successfully assigned to the deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#response-uid)

uid

string

required

The unique identifier of the alias

Example:

`"2WjyKQmM8ZnGcJsPWMrHRHrE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#response-alias)

alias

string

required

The assigned alias name

Example:

`"my-alias.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#response-created)

created

string<date-time>

required

The date when the alias was created

Example:

`"2017-04-26T23:00:34.232Z"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias#response-old-deployment-id)

oldDeploymentId

string \| null

The unique identifier of the previously aliased deployment, only received when the alias was used before

Example:

`"dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa"`

[List Deployment Aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases) [List aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.