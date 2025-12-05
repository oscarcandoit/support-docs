---
url: "https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var"
title: "Delete one or more Env Var - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

environment

Delete one or more Env Var

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


deleteSharedEnvVariable

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.deleteSharedEnvVariable({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      ids: [\
        "env_abc123",\
        "env_abc124",\
      ],
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

Copy

Ask AI

```
{
  "deleted": [\
    "<string>"\
  ],
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

environment

# Delete one or more Env Var

Copy page

Deletes one or many Shared Environment Variables for a given team.

Copy page

DELETE

/

v1

/

env

deleteSharedEnvVariable

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.deleteSharedEnvVariable({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      ids: [\
        "env_abc123",\
        "env_abc124",\
      ],
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

Copy

Ask AI

```
{
  "deleted": [\
    "<string>"\
  ],
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#body-ids)

ids

string\[\]

required

IDs of the Shared Environment Variables to delete

Example:

```
["env_abc123", "env_abc124"]
```

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#response-deleted)

deleted

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#response-failed)

failed

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/delete-one-or-more-env-var#response-failed-error)

error

object

required

Show child attributes

[Create one or more shared environment variables](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-one-or-more-shared-environment-variables) [Updates one or more shared environment variables](https://vercel.com/docs/rest-api/reference/endpoints/environment/updates-one-or-more-shared-environment-variables)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.