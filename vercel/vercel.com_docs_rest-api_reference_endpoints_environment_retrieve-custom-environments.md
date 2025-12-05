---
url: "https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments"
title: "Retrieve custom environments - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

environment

Retrieve custom environments

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


get\_/v9/projects/{idOrName}/custom-environments

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getV9ProjectsIdOrNameCustomEnvironments({
    idOrName: "<value>",
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
  "accountLimit": {
    "total": 123
  },
  "environments": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "type": "preview",\
      "description": "<string>",\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
      "domains": [\
        {\
          "name": "<string>",\
          "apexName": "<string>",\
          "projectId": "<string>",\
          "redirect": "<string>",\
          "redirectStatusCode": 307,\
          "gitBranch": "<string>",\
          "customEnvironmentId": "<string>",\
          "updatedAt": 123,\
          "createdAt": 123,\
          "verified": true,\
          "verification": [\
            {\
              "type": "<string>",\
              "domain": "<string>",\
              "value": "<string>",\
              "reason": "<string>"\
            }\
          ]\
        }\
      ],\
      "currentDeploymentAliases": [\
        "<string>"\
      ],\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ]
}
```

environment

# Retrieve custom environments

Copy page

Retrieve custom environments for the project. Must not be named ‘Production’ or ‘Preview’.

Copy page

GET

/

v9

/

projects

/

{idOrName}

/

custom-environments

get\_/v9/projects/{idOrName}/custom-environments

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getV9ProjectsIdOrNameCustomEnvironments({
    idOrName: "<value>",
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
  "accountLimit": {
    "total": 123
  },
  "environments": [\
    {\
      "id": "<string>",\
      "slug": "<string>",\
      "type": "preview",\
      "description": "<string>",\
      "branchMatcher": {\
        "type": "endsWith",\
        "pattern": "<string>"\
      },\
      "domains": [\
        {\
          "name": "<string>",\
          "apexName": "<string>",\
          "projectId": "<string>",\
          "redirect": "<string>",\
          "redirectStatusCode": 307,\
          "gitBranch": "<string>",\
          "customEnvironmentId": "<string>",\
          "updatedAt": 123,\
          "createdAt": 123,\
          "verified": true,\
          "verification": [\
            {\
              "type": "<string>",\
              "domain": "<string>",\
              "value": "<string>",\
              "reason": "<string>"\
            }\
          ]\
        }\
      ],\
      "currentDeploymentAliases": [\
        "<string>"\
      ],\
      "createdAt": 123,\
      "updatedAt": 123\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#parameter-git-branch)

gitBranch

string

Fetch custom environments for a specific git branch

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-account-limit)

accountLimit

object

required

The maximum number of custom environments allowed either by the team's plan type or a custom override.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-account-limit-total)

accountLimit.total

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments)

environments

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-id)

id

string

required

Unique identifier for the custom environment (format: env\_\*)

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-slug)

slug

string

required

URL-friendly name of the environment

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-type)

type

enum<string>

required

The type of environment (production, preview, or development)

Available options:

`preview`,

`production`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-created-at)

createdAt

number

required

Timestamp when the environment was created

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-updated-at)

updatedAt

number

required

Timestamp when the environment was last updated

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-description)

description

string

Optional description of the environment's purpose

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-branch-matcher)

branchMatcher

object

Configuration for matching git branches to this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-domains)

domains

object\[\]

List of domains associated with this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments#response-environments-current-deployment-aliases)

currentDeploymentAliases

string\[\]

List of aliases for the current deployment

[Disconnects a shared environment variable for a given project](https://vercel.com/docs/rest-api/reference/endpoints/environment/disconnects-a-shared-environment-variable-for-a-given-project) [Create a custom environment for the current project.](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.