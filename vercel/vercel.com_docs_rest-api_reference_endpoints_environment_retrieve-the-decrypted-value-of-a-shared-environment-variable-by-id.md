---
url: "https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id"
title: "Retrieve the decrypted value of a Shared Environment Variable by id. - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

environment

Retrieve the decrypted value of a Shared Environment Variable by id.

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

  - [GET\\
    \\
    Lists all Shared Environment Variables for a team](https://vercel.com/docs/rest-api/reference/endpoints/environment/lists-all-shared-environment-variables-for-a-team)
  - [POST\\
    \\
    Create one or more shared environment variables](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-one-or-more-shared-environment-variables)
  - [DEL\\
    \\
    Delete one or more Env Var](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var)
  - [PATCH\\
    \\
    Updates one or more shared environment variables](https://vercel.com/docs/rest-api/reference/endpoints/environment/updates-one-or-more-shared-environment-variables)
  - [GET\\
    \\
    Retrieve the decrypted value of a Shared Environment Variable by id.](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id)
  - [PATCH\\
    \\
    Disconnects a shared environment variable for a given project](https://vercel.com/docs/rest-api/reference/endpoints/environment/disconnects-a-shared-environment-variable-for-a-given-project)
  - [GET\\
    \\
    Retrieve custom environments](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments)
  - [POST\\
    \\
    Create a custom environment for the current project.](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project)
  - [GET\\
    \\
    Retrieve a custom environment](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment)
  - [DEL\\
    \\
    Remove a custom environment](https://vercel.com/docs/rest-api/reference/endpoints/environment/remove-a-custom-environment)
  - [PATCH\\
    \\
    Update a custom environment](https://vercel.com/docs/rest-api/reference/endpoints/environment/update-a-custom-environment)
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


getSharedEnvVar

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getSharedEnvVar({
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

Copy

Ask AI

```
{
  "created": "2021-02-10T13:11:49.180Z",
  "key": "my-api-key",
  "ownerId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "id": "env_XCG7t7AIHuO2SBA8667zNUiM",
  "createdBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "deletedBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "updatedBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "createdAt": 1609492210000,
  "deletedAt": 1609492210000,
  "updatedAt": 1609492210000,
  "value": "<string>",
  "projectId": [\
    "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",\
    "prj_2WjyKQmM8ZnGcJsPWMrasEFg"\
  ],
  "type": "encrypted",
  "target": "production",
  "applyToAllCustomEnvironments": true,
  "decrypted": true,
  "comment": "<string>",
  "lastEditedByDisplayName": "<string>"
}
```

environment

# Retrieve the decrypted value of a Shared Environment Variable by id.

Copy page

Retrieve the decrypted value of a Shared Environment Variable by id.

Copy page

GET

/

v1

/

env

/

{id}

getSharedEnvVar

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getSharedEnvVar({
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

Copy

Ask AI

```
{
  "created": "2021-02-10T13:11:49.180Z",
  "key": "my-api-key",
  "ownerId": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "id": "env_XCG7t7AIHuO2SBA8667zNUiM",
  "createdBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "deletedBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "updatedBy": "2qDDuGFTWXBLDNnqZfWPDp1A",
  "createdAt": 1609492210000,
  "deletedAt": 1609492210000,
  "updatedAt": 1609492210000,
  "value": "<string>",
  "projectId": [\
    "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",\
    "prj_2WjyKQmM8ZnGcJsPWMrasEFg"\
  ],
  "type": "encrypted",
  "target": "production",
  "applyToAllCustomEnvironments": true,
  "decrypted": true,
  "comment": "<string>",
  "lastEditedByDisplayName": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#parameter-id)

id

string

required

The unique ID for the Shared Environment Variable to get the decrypted value.

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-created)

created

string<date-time>

The date when the Shared Env Var was created.

Example:

`"2021-02-10T13:11:49.180Z"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-key)

key

string

The name of the Shared Env Var.

Example:

`"my-api-key"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-owner-id)

ownerId

string \| null

The unique identifier of the owner (team) the Shared Env Var was created for.

Example:

`"team_LLHUOMOoDlqOp8wPE4kFo9pE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-id)

id

string

The unique identifier of the Shared Env Var.

Example:

`"env_XCG7t7AIHuO2SBA8667zNUiM"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-created-by)

createdBy

string \| null

The unique identifier of the user who created the Shared Env Var.

Example:

`"2qDDuGFTWXBLDNnqZfWPDp1A"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-deleted-by)

deletedBy

string \| null

The unique identifier of the user who deleted the Shared Env Var.

Example:

`"2qDDuGFTWXBLDNnqZfWPDp1A"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-updated-by)

updatedBy

string \| null

The unique identifier of the user who last updated the Shared Env Var.

Example:

`"2qDDuGFTWXBLDNnqZfWPDp1A"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-created-at)

createdAt

number

Timestamp for when the Shared Env Var was created.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-deleted-at)

deletedAt

number

Timestamp for when the Shared Env Var was (soft) deleted.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-updated-at)

updatedAt

number

Timestamp for when the Shared Env Var was last updated.

Example:

`1609492210000`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-value)

value

string

The value of the Shared Env Var.

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-project-id)

projectId

string\[\]

The unique identifiers of the projects which the Shared Env Var is linked to.

Example:

```
[\
  "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",\
  "prj_2WjyKQmM8ZnGcJsPWMrasEFg"\
]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-type)

type

enum<string>

The type of this cosmos doc instance, if blank, assume secret.

Available options:

`encrypted`,

`sensitive`,

`system`,

`plain`

Example:

`"encrypted"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-target)

target

enum<string>\[\]

environments this env variable targets

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#parameter)

enum<string>

environments this env variable targets

Available options:

`production`,

`preview`,

`development`

Example:

`"production"`

Example:

`"production"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-apply-to-all-custom-environments)

applyToAllCustomEnvironments

boolean

whether or not this env varible applies to custom environments

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-decrypted)

decrypted

boolean

whether or not this env variable is decrypted

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-comment)

comment

string

A user provided comment that describes what this Shared Env Var is for.

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id#response-last-edited-by-display-name)

lastEditedByDisplayName

string

The last editor full name or username.

[Updates one or more shared environment variables](https://vercel.com/docs/rest-api/reference/endpoints/environment/updates-one-or-more-shared-environment-variables) [Disconnects a shared environment variable for a given project](https://vercel.com/docs/rest-api/reference/endpoints/environment/disconnects-a-shared-environment-variable-for-a-given-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.