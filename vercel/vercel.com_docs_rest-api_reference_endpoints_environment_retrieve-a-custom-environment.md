---
url: "https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment"
title: "Retrieve a custom environment - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

environment

Retrieve a custom environment

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


getCustomEnvironment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getCustomEnvironment({
    idOrName: "<value>",
    environmentSlugOrId: "<id>",
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
  "id": "<string>",
  "slug": "<string>",
  "type": "preview",
  "description": "<string>",
  "branchMatcher": {
    "type": "endsWith",
    "pattern": "<string>"
  },
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
  ],
  "currentDeploymentAliases": [\
    "<string>"\
  ],
  "createdAt": 123,
  "updatedAt": 123
}
```

environment

# Retrieve a custom environment

Copy page

Retrieve a custom environment for the project. Must not be named ‘Production’ or ‘Preview’.

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

/

{environmentSlugOrId}

getCustomEnvironment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.getCustomEnvironment({
    idOrName: "<value>",
    environmentSlugOrId: "<id>",
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
  "id": "<string>",
  "slug": "<string>",
  "type": "preview",
  "description": "<string>",
  "branchMatcher": {
    "type": "endsWith",
    "pattern": "<string>"
  },
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
  ],
  "currentDeploymentAliases": [\
    "<string>"\
  ],
  "createdAt": 123,
  "updatedAt": 123
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#parameter-environment-slug-or-id)

environmentSlugOrId

string

required

The unique custom environment identifier within the project

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Internal representation of a custom environment with all required properties

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-id)

id

string

required

Unique identifier for the custom environment (format: env\_\*)

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-slug)

slug

string

required

URL-friendly name of the environment

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-type)

type

enum<string>

required

The type of environment (production, preview, or development)

Available options:

`preview`,

`production`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-created-at)

createdAt

number

required

Timestamp when the environment was created

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-updated-at)

updatedAt

number

required

Timestamp when the environment was last updated

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-description)

description

string

Optional description of the environment's purpose

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-branch-matcher)

branchMatcher

object

Configuration for matching git branches to this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-branch-matcher-type)

branchMatcher.type

enum<string>

required

The type of matching to perform

Available options:

`endsWith`,

`startsWith`,

`equals`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-branch-matcher-pattern)

branchMatcher.pattern

string

required

The pattern to match against branch names

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains)

domains

object\[\]

List of domains associated with this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-apex-name)

apexName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-verified)

verified

boolean

required

`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-redirect)

redirect

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-redirect-status-code)

redirectStatusCode

enum<number> \| null

Available options:

`307`,

`301`,

`302`,

`308`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-git-branch)

gitBranch

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-custom-environment-id)

customEnvironmentId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-domains-verification)

verification

object\[\]

A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment#response-current-deployment-aliases)

currentDeploymentAliases

string\[\]

List of aliases for the current deployment

[Create a custom environment for the current project.](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project) [Remove a custom environment](https://vercel.com/docs/rest-api/reference/endpoints/environment/remove-a-custom-environment)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.