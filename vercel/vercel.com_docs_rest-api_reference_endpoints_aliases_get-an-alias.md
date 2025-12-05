---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias"
title: "Get an Alias - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

Get an Alias

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


getAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.getAlias({
    from: 1540095775951,
    idOrAlias: "example.vercel.app",
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    since: 1540095775941,
    until: 1540095775951,
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
[\
  {\
    "alias": "my-alias.vercel.app",\
    "created": "2017-04-26T23:00:34.232Z",\
    "createdAt": 1540095775941,\
    "creator": {\
      "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",\
      "email": "john-doe@gmail.com",\
      "username": "john-doe"\
    },\
    "deletedAt": 1540095775941,\
    "deployment": {\
      "id": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",\
      "url": "my-instant-deployment-3ij3cxz9qr.now.sh",\
      "meta": {}\
    },\
    "deploymentId": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",\
    "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",\
    "redirect": "<string>",\
    "redirectStatusCode": 301,\
    "uid": "<string>",\
    "updatedAt": 1540095775941,\
    "protectionBypass": {},\
    "microfrontends": {\
      "defaultApp": {\
        "projectId": "<string>"\
      },\
      "applications": [\
        {\
          "fallbackHost": "<string>",\
          "projectId": "<string>"\
        }\
      ]\
    }\
  }\
]
```

aliases

# Get an Alias

Copy page

Retrieves an Alias for the given host name or alias ID.

Copy page

GET

/

v4

/

aliases

/

{idOrAlias}

getAlias

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.getAlias({
    from: 1540095775951,
    idOrAlias: "example.vercel.app",
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    since: 1540095775941,
    until: 1540095775951,
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
[\
  {\
    "alias": "my-alias.vercel.app",\
    "created": "2017-04-26T23:00:34.232Z",\
    "createdAt": 1540095775941,\
    "creator": {\
      "uid": "96SnxkFiMyVKsK3pnoHfx3Hz",\
      "email": "john-doe@gmail.com",\
      "username": "john-doe"\
    },\
    "deletedAt": 1540095775941,\
    "deployment": {\
      "id": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",\
      "url": "my-instant-deployment-3ij3cxz9qr.now.sh",\
      "meta": {}\
    },\
    "deploymentId": "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",\
    "projectId": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",\
    "redirect": "<string>",\
    "redirectStatusCode": 301,\
    "uid": "<string>",\
    "updatedAt": 1540095775941,\
    "protectionBypass": {},\
    "microfrontends": {\
      "defaultApp": {\
        "projectId": "<string>"\
      },\
      "applications": [\
        {\
          "fallbackHost": "<string>",\
          "projectId": "<string>"\
        }\
      ]\
    }\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-id-or-alias)

idOrAlias

string

required

The alias or alias ID to be retrieved

Example:

`"example.vercel.app"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-from)

from

number

deprecated

Get the alias only if it was created after the provided timestamp

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-project-id)

projectId

string

Get the alias only if it is assigned to the provided project ID

Example:

`"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-since)

since

number

Get the alias only if it was created after this JavaScript timestamp

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-until)

until

number

Get the alias only if it was created before this JavaScript timestamp

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The alias information

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-alias)

alias

string

required

The alias name, it could be a `.vercel.app` subdomain or a custom domain

Example:

`"my-alias.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-created)

created

string<date-time>

required

The date when the alias was created

Example:

`"2017-04-26T23:00:34.232Z"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-deployment-id)

deploymentId

string \| null

required

The deployment ID

Example:

`"dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-project-id)

projectId

string \| null

required

The unique identifier of the project

Example:

`"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-uid)

uid

string

required

The unique identifier of the alias

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-created-at)

createdAt

number

The date when the alias was created in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-creator)

creator

object

Information of the user who created the alias

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-deleted-at)

deletedAt

number

The date when the alias was deleted in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-deployment)

deployment

object

A map with the deployment ID, URL and metadata

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-redirect)

redirect

string \| null

Target destination domain for redirect when the alias is a redirect

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-redirect-status-code)

redirectStatusCode

enum<number> \| null

Status code to be used on redirect

Available options:

`301`,

`302`,

`307`,

`308`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-updated-at)

updatedAt

number

The date when the alias was updated in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-protection-bypass)

protectionBypass

object

The protection bypass for the alias

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias#response-microfrontends)

microfrontends

object

The microfrontends for the alias including the routing configuration

Show child attributes

[List aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases) [Delete an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.