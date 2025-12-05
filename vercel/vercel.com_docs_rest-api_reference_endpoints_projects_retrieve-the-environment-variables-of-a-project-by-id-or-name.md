---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name"
title: "Retrieve the environment variables of a project by id or name - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Retrieve the environment variables of a project by id or name

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


filterProjectEnvs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.filterProjectEnvs({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    gitBranch: "feature-1",
    decrypt: "true",
    source: "vercel-cli:pull",
    customEnvironmentId: "env_123abc4567",
    customEnvironmentSlug: "my-custom-env",
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

Copy

Ask AI

```
{
  "target": [\
    "production"\
  ],
  "type": "system",
  "sunsetSecretId": "<string>",
  "decrypted": true,
  "value": "<string>",
  "vsmValue": "<string>",
  "id": "<string>",
  "key": "<string>",
  "configurationId": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "createdBy": "<string>",
  "updatedBy": "<string>",
  "gitBranch": "<string>",
  "edgeConfigId": "<string>",
  "edgeConfigTokenId": "<string>",
  "contentHint": {
    "type": "redis-url",
    "storeId": "<string>"
  },
  "internalContentHint": {
    "type": "flags-secret",
    "encryptedValue": "<string>"
  },
  "comment": "<string>",
  "customEnvironmentIds": [\
    "<string>"\
  ],
  "system": true
}
```

projects

# Retrieve the environment variables of a project by id or name

Copy page

Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.

Copy page

GET

/

v10

/

projects

/

{idOrName}

/

env

filterProjectEnvs

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.filterProjectEnvs({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    gitBranch: "feature-1",
    decrypt: "true",
    source: "vercel-cli:pull",
    customEnvironmentId: "env_123abc4567",
    customEnvironmentSlug: "my-custom-env",
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

Copy

Ask AI

```
{
  "target": [\
    "production"\
  ],
  "type": "system",
  "sunsetSecretId": "<string>",
  "decrypted": true,
  "value": "<string>",
  "vsmValue": "<string>",
  "id": "<string>",
  "key": "<string>",
  "configurationId": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "createdBy": "<string>",
  "updatedBy": "<string>",
  "gitBranch": "<string>",
  "edgeConfigId": "<string>",
  "edgeConfigTokenId": "<string>",
  "contentHint": {
    "type": "redis-url",
    "storeId": "<string>"
  },
  "internalContentHint": {
    "type": "flags-secret",
    "encryptedValue": "<string>"
  },
  "comment": "<string>",
  "customEnvironmentIds": [\
    "<string>"\
  ],
  "system": true
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

Example:

`"prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-git-branch)

gitBranch

string

If defined, the git branch of the environment variable to filter the results (must have target=preview)

Maximum length: `250`

Example:

`"feature-1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-decrypt)

decrypt

enum<string>

deprecated

If true, the environment variable value will be decrypted

Available options:

`true`,

`false`

Example:

`"true"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-source)

source

string

The source that is calling the endpoint.

Example:

`"vercel-cli:pull"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-custom-environment-id)

customEnvironmentId

string

The unique custom environment identifier within the project

Example:

`"env_123abc4567"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-custom-environment-slug)

customEnvironmentSlug

string

The custom environment slug (name) within the project

Example:

`"my-custom-env"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The list of environment variables for the given project

- Option 1

- Option 2

- Option 3


[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-type)

type

enum<string>

required

Available options:

`system`,

`encrypted`,

`plain`,

`sensitive`,

`secret`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-key)

key

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-target)

target

enum<string>\[\]enum<string>

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#parameter)

enum<string>

Available options:

`production`,

`preview`,

`development`,

`preview`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-sunset-secret-id)

sunsetSecretId

string

This is used to identiy variables that have been migrated from type secret to sensitive.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-decrypted)

decrypted

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-vsm-value)

vsmValue

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-id)

id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-configuration-id)

configurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-created-by)

createdBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-updated-by)

updatedBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-git-branch)

gitBranch

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-edge-config-id)

edgeConfigId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-edge-config-token-id)

edgeConfigTokenId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-content-hint)

contentHint

object

- Option 1

- Option 2

- Option 3

- Option 4

- Option 5

- Option 6

- Option 7

- Option 8

- Option 9

- Option 10

- Option 11

- Option 12

- Option 13

- Option 14

- Option 15


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-content-hint-type)

contentHint.type

enum<string>

required

Available options:

`redis-url`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-content-hint-store-id)

contentHint.storeId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-internal-content-hint)

internalContentHint

object \| null

Similar to `contentHints`, but should not be exposed to the user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-internal-content-hint-type)

internalContentHint.type

enum<string>

required

Available options:

`flags-secret`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-internal-content-hint-encrypted-value)

internalContentHint.encryptedValue

string

required

Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-comment)

comment

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-custom-environment-ids)

customEnvironmentIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name#response-system)

system

boolean

[Verify project domain](https://vercel.com/docs/rest-api/reference/endpoints/projects/verify-project-domain) [Create one or more environment variables](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.