---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases"
title: "List Deployment Aliases - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

List Deployment Aliases

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


listDeploymentAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.listDeploymentAliases({
    id: "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa",
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
  "aliases": [\
    {\
      "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE",\
      "alias": "my-alias.vercel.app",\
      "created": "2017-04-26T23:00:34.232Z",\
      "redirect": "<string>",\
      "protectionBypass": {}\
    }\
  ]
}
```

aliases

# List Deployment Aliases

Copy page

Retrieves all Aliases for the Deployment with the given ID. The authenticated user or team must own the deployment.

Copy page

GET

/

v2

/

deployments

/

{id}

/

aliases

listDeploymentAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.listDeploymentAliases({
    id: "dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa",
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
  "aliases": [\
    {\
      "uid": "2WjyKQmM8ZnGcJsPWMrHRHrE",\
      "alias": "my-alias.vercel.app",\
      "created": "2017-04-26T23:00:34.232Z",\
      "redirect": "<string>",\
      "protectionBypass": {}\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#parameter-id)

id

string

required

The ID of the deployment the aliases should be listed for

Example:

`"dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The list of aliases assigned to the deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases)

aliases

object\[\]

required

A list of the aliases assigned to the deployment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases-uid)

uid

string

required

The unique identifier of the alias

Example:

`"2WjyKQmM8ZnGcJsPWMrHRHrE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases-alias)

alias

string

required

The alias name, it could be a `.vercel.app` subdomain or a custom domain

Example:

`"my-alias.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases-created)

created

string<date-time>

required

The date when the alias was created

Example:

`"2017-04-26T23:00:34.232Z"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases-redirect)

redirect

string \| null

Target destination domain for redirect when the alias is a redirect

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-deployment-aliases#response-aliases-protection-bypass)

protectionBypass

object

The protection bypass for the alias

Show child attributes

[Deletes a webhook](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/deletes-a-webhook) [Assign an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.