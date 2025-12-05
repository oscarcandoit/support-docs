---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain"
title: "Update a project domain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Update a project domain

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


updateProjectDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.updateProjectDomain({
    idOrName: "<value>",
    domain: "www.example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      gitBranch: null,
      redirect: "foobar.com",
      redirectStatusCode: 307,
    },
  });

  console.log(result);
}

run();
```

200

400

401

403

409

Copy

Ask AI

```
{
  "name": "<string>",
  "apexName": "<string>",
  "projectId": "<string>",
  "redirect": "<string>",
  "redirectStatusCode": 307,
  "gitBranch": "<string>",
  "customEnvironmentId": "<string>",
  "updatedAt": 123,
  "createdAt": 123,
  "verified": true,
  "verification": [\
    {\
      "type": "<string>",\
      "domain": "<string>",\
      "value": "<string>",\
      "reason": "<string>"\
    }\
  ]
}
```

projects

# Update a project domain

Copy page

Update a project domain’s configuration, including the name, git branch and redirect of the domain.

Copy page

PATCH

/

v9

/

projects

/

{idOrName}

/

domains

/

{domain}

updateProjectDomain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.updateProjectDomain({
    idOrName: "<value>",
    domain: "www.example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      gitBranch: null,
      redirect: "foobar.com",
      redirectStatusCode: 307,
    },
  });

  console.log(result);
}

run();
```

200

400

401

403

409

Copy

Ask AI

```
{
  "name": "<string>",
  "apexName": "<string>",
  "projectId": "<string>",
  "redirect": "<string>",
  "redirectStatusCode": 307,
  "gitBranch": "<string>",
  "customEnvironmentId": "<string>",
  "updatedAt": 123,
  "createdAt": 123,
  "verified": true,
  "verification": [\
    {\
      "type": "<string>",\
      "domain": "<string>",\
      "value": "<string>",\
      "reason": "<string>"\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#parameter-domain)

domain

string

required

The project domain name

Example:

`"www.example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#body-git-branch)

gitBranch

string \| null

Git branch to link the project domain

Maximum length: `250`

Example:

`null`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#body-redirect)

redirect

string \| null

Target destination domain for redirect

Example:

`"foobar.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#body-redirect-status-code)

redirectStatusCode

enum<integer> \| null

Status code for domain redirect

Available options:

`301`,

`302`,

`307`,

`308`

Example:

`307`

#### Response

200

application/json

The domain was updated successfuly

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-apex-name)

apexName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verified)

verified

boolean

required

`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-redirect)

redirect

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-redirect-status-code)

redirectStatusCode

enum<number> \| null

Available options:

`307`,

`301`,

`302`,

`308`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-git-branch)

gitBranch

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-custom-environment-id)

customEnvironmentId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verification)

verification

object\[\]

A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verification-type)

type

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verification-domain)

domain

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verification-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-a-project-domain#response-verification-reason)

reason

string

required

[Remove a domain from a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/remove-a-domain-from-a-project) [Add a domain to a project](https://vercel.com/docs/rest-api/reference/endpoints/projects/add-a-domain-to-a-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.