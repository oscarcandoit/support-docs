---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables"
title: "Create one or more environment variables - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projects

Create one or more environment variables

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


createProjectEnv

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.createProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    upsert: "true",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      key: "API_URL",
      value: "https://api.vercel.com",
      type: "plain",
      target: [\
        "preview",\
      ],
      gitBranch: "feature-1",
      comment: "database connection string for production",
      customEnvironmentIds: [\
        "env_1234567890",\
      ],
    },
  });

  console.log(result);
}

run();
```

201

400

401

402

403

404

409

429

500

Copy

Ask AI

```
{
  "created": {
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
  },
  "failed": [\
    {\
      "error": {\
        "code": "<string>",\
        "message": "<string>",\
        "key": "<string>",\
        "envVarId": "<string>",\
        "envVarKey": "<string>",\
        "action": "<string>",\
        "link": "<string>",\
        "value": "<string>",\
        "gitBranch": "<string>",\
        "target": [\
          "production"\
        ],\
        "project": "<string>"\
      }\
    }\
  ]
}
```

projects

# Create one or more environment variables

Copy page

Create one or more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL. If you include `upsert=true` as a query parameter, a new environment variable will not be created if it already exists but, the existing variable’s value will be updated.

Copy page

POST

/

v10

/

projects

/

{idOrName}

/

env

createProjectEnv

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.createProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    upsert: "true",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      key: "API_URL",
      value: "https://api.vercel.com",
      type: "plain",
      target: [\
        "preview",\
      ],
      gitBranch: "feature-1",
      comment: "database connection string for production",
      customEnvironmentIds: [\
        "env_1234567890",\
      ],
    },
  });

  console.log(result);
}

run();
```

201

400

401

402

403

404

409

429

500

Copy

Ask AI

```
{
  "created": {
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
  },
  "failed": [\
    {\
      "error": {\
        "code": "<string>",\
        "message": "<string>",\
        "key": "<string>",\
        "envVarId": "<string>",\
        "envVarKey": "<string>",\
        "action": "<string>",\
        "link": "<string>",\
        "value": "<string>",\
        "gitBranch": "<string>",\
        "target": [\
          "production"\
        ],\
        "project": "<string>"\
      }\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

Example:

`"prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#parameter-upsert)

upsert

string

Allow override of environment variable if it already exists

Example:

`"true"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1 · object

- Option 2 · object

- Option 3 · object\[\]


[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-key)

key

string

required

The name of the environment variable

Example:

`"API_URL"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-value)

value

string

required

The value of the environment variable

Example:

`"https://api.vercel.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-type)

type

enum<string>

required

The type of environment variable

Available options:

`system`,

`secret`,

`encrypted`,

`plain`,

`sensitive`

Example:

`"plain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-target)

target

enum<string>\[\]

required

The target environment of the environment variable

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#parameter)

enum<string>

Available options:

`production`,

`preview`,

`development`

Example:

```
["preview"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-git-branch)

gitBranch

string \| null

If defined, the git branch of the environment variable (must have target=preview)

Maximum length: `250`

Example:

`"feature-1"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-comment)

comment

string

A comment to add context on what this environment variable is for

Maximum length: `500`

Example:

`"database connection string for production"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#body-custom-environment-ids)

customEnvironmentIds

string\[\]

The custom environment IDs associated with the environment variable

#### Response

201

application/json

The environment variable was created successfully

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created)

created

objectobject\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-type)

created.type

enum<string>

required

Available options:

`system`,

`encrypted`,

`plain`,

`sensitive`,

`secret`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-value)

created.value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-key)

created.key

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-target)

created.target

enum<string>\[\]enum<string>

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-sunset-secret-id)

created.sunsetSecretId

string

This is used to identiy variables that have been migrated from type secret to sensitive.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-decrypted)

created.decrypted

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-vsm-value)

created.vsmValue

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-id)

created.id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-configuration-id)

created.configurationId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-created-at)

created.createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-updated-at)

created.updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-created-by)

created.createdBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-updated-by)

created.updatedBy

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-git-branch)

created.gitBranch

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-edge-config-id)

created.edgeConfigId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-edge-config-token-id)

created.edgeConfigTokenId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-content-hint)

created.contentHint

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-internal-content-hint)

created.internalContentHint

object \| null

Similar to `contentHints`, but should not be exposed to the user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-comment)

created.comment

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-custom-environment-ids)

created.customEnvironmentIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-created-system)

created.system

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-failed)

failed

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables#response-failed-error)

error

object

required

Show child attributes

[Retrieve the environment variables of a project by id or name](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name) [Retrieve the decrypted value of an environment variable of a project by id](https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.