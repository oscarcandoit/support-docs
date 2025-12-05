---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote"
title: "Gets a list of aliases with status for the current promote - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Gets a list of aliases with status for the current promote

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

  - [PATCH\\
    \\
    Update the data cache feature](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-the-data-cache-feature)
  - [GET\\
    \\
    Retrieve a list of projects](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-a-list-of-projects)
  - [POST\\
    \\
    Create a new project](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-a-new-project)
  - [GET\\
    \\
    Find a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/find-a-project-by-id-or-name)
  - [DEL\\
    \\
    Delete a Project](https://vercel.com/docs/rest-api/reference/endpoints/projects/delete-a-project)
  - [PATCH\\
    \\
    Update an existing project](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-an-existing-project)
  - [GET\\
    \\
    Retrieve project domains by project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-project-domains-by-project-by-id-or-name)
  - [GET\\
    \\
    Get a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/get-a-project-domain)
  - [DEL\\
    \\
    Remove a domain from a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/remove-a-domain-from-a-project)
  - [PATCH\\
    \\
    Update a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain)
  - [POST\\
    \\
    Add a domain to a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/add-a-domain-to-a-project)
  - [POST\\
    \\
    Move a project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/move-a-project-domain)
  - [POST\\
    \\
    Verify project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/verify-project-domain)
  - [GET\\
    \\
    Retrieve the environment variables of a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name)
  - [POST\\
    \\
    Create one or more environment variables](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables)
  - [GET\\
    \\
    Retrieve the decrypted value of an environment variable of a project by id](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id)
  - [DEL\\
    \\
    Remove an environment variable](https://vercel.com/docs/rest-api/reference/endpoints/projects/remove-an-environment-variable)
  - [PATCH\\
    \\
    Edit an environment variable](https://vercel.com/docs/rest-api/reference/endpoints/projects/edit-an-environment-variable)
  - [DEL\\
    \\
    Batch remove environment variables](https://vercel.com/docs/rest-api/reference/endpoints/projects/batch-remove-environment-variables)
  - [GET\\
    \\
    Get client certificates for a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/get-client-certificates-for-a-project)
  - [POST\\
    \\
    Upload client certificate for egress mTLS](https://vercel.com/docs/rest-api/reference/endpoints/projects/upload-client-certificate-for-egress-mtls)
  - [DEL\\
    \\
    Delete client certificate for egress mTLS](https://vercel.com/docs/rest-api/reference/endpoints/projects/delete-client-certificate-for-egress-mtls)
  - [POST\\
    \\
    Create project transfer request](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-project-transfer-request)
  - [PUT\\
    \\
    Accept project transfer request](https://vercel.com/docs/rest-api/reference/endpoints/projects/accept-project-transfer-request)
  - [PATCH\\
    \\
    Update Protection Bypass for Automation](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-protection-bypass-for-automation)
  - [POST\\
    \\
    Points all production domains for a project to the given deploy](https://vercel.com/docs/rest-api/reference/endpoints/projects/points-all-production-domains-for-a-project-to-the-given-deploy)
  - [GET\\
    \\
    Gets a list of aliases with status for the current promote](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote)
  - [POST\\
    \\
    Pause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/pause-a-project)
  - [POST\\
    \\
    Unpause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/unpause-a-project)
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

- certs


listPromoteAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.listPromoteAliases({
    projectId: "<id>",
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
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
{}
```

projects

# Gets a list of aliases with status for the current promote

Copy page

Get a list of aliases related to the last promote request with their mapping status

Copy page

GET

/

v1

/

projects

/

{projectId}

/

promote

/

aliases

listPromoteAliases

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.listPromoteAliases({
    projectId: "<id>",
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
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
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-project-id)

projectId

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-limit)

limit

number

Maximum number of aliases to list from a request (max 100).

Required range: `x <= 100`

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-since)

since

number

Get aliases created after this epoch timestamp.

Example:

`1609499532000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-until)

until

number

Get aliases created before this epoch timestamp.

Example:

`1612264332000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-failed-only)

failedOnly

boolean

Filter results down to aliases that failed to map to the requested deployment

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/gets-a-list-of-aliases-with-status-for-the-current-promote#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1

- Option 2


The response is of type `object`.

[Points all production domains for a project to the given deploy](https://vercel.com/docs/rest-api/reference/endpoints/projects/points-all-production-domains-for-a-project-to-the-given-deploy) [Pause a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/pause-a-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.