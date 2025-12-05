---
url: "https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases"
title: "List aliases - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

aliases

List aliases

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


listAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.listAliases({
    domain: "my-test-domain.com",
    from: 1540095775951,
    limit: 10,
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    since: 1540095775941,
    until: 1540095775951,
    rollbackDeploymentId: "dpl_XXX",
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
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

aliases

# List aliases

Copy page

Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.

Copy page

GET

/

v4

/

aliases

listAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.aliases.listAliases({
    domain: "my-test-domain.com",
    from: 1540095775951,
    limit: 10,
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    since: 1540095775941,
    until: 1540095775951,
    rollbackDeploymentId: "dpl_XXX",
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
  ],
  "pagination": {
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-domain)

domain

string\[\]string

Get only aliases of the given domain name

Maximum length: `20`

Example:

`"my-test-domain.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-from)

from

number

deprecated

Get only aliases created after the provided timestamp

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-limit)

limit

number

Maximum number of aliases to list from a request

Example:

`10`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-project-id)

projectId

string

Filter aliases from the given `projectId`

Example:

`"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-since)

since

number

Get aliases created after this JavaScript timestamp

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-until)

until

number

Get aliases created before this JavaScript timestamp

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-rollback-deployment-id)

rollbackDeploymentId

string

Get aliases that would be rolled back for the given deployment

Example:

`"dpl_XXX"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The paginated list of aliases

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases)

aliases

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-alias)

alias

string

required

The alias name, it could be a `.vercel.app` subdomain or a custom domain

Example:

`"my-alias.vercel.app"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-created)

created

string<date-time>

required

The date when the alias was created

Example:

`"2017-04-26T23:00:34.232Z"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-deployment-id)

deploymentId

string \| null

required

The deployment ID

Example:

`"dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-project-id)

projectId

string \| null

required

The unique identifier of the project

Example:

`"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-uid)

uid

string

required

The unique identifier of the alias

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-created-at)

createdAt

number

The date when the alias was created in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-creator)

creator

object

Information of the user who created the alias

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-deleted-at)

deletedAt

number \| null

The date when the alias was deleted in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-deployment)

deployment

object

A map with the deployment ID, URL and metadata

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-redirect)

redirect

string \| null

Target destination domain for redirect when the alias is a redirect

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-redirect-status-code)

redirectStatusCode

enum<number> \| null

Status code to be used on redirect

Available options:

`301`,

`302`,

`307`,

`308`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-updated-at)

updatedAt

number

The date when the alias was updated in milliseconds since the UNIX epoch

Example:

`1540095775941`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-protection-bypass)

protectionBypass

object

The protection bypass for the alias

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-aliases-microfrontends)

microfrontends

object

The microfrontends for the alias including the routing configuration

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-pagination)

pagination

object

required

This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/aliases/list-aliases#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[Assign an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/assign-an-alias) [Get an Alias](https://vercel.com/docs/rest-api/reference/endpoints/aliases/get-an-alias)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.