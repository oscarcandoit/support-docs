---
url: "https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project"
title: "Create a custom environment for the current project. - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

environment

Create a custom environment for the current project.

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


createCustomEnvironment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.createCustomEnvironment({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
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

500

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

# Create a custom environment for the current project.

Copy page

Creates a custom environment for the current project. Cannot be named ‘Production’ or ‘Preview’.

Copy page

POST

/

v9

/

projects

/

{idOrName}

/

custom-environments

createCustomEnvironment

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.environment.createCustomEnvironment({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
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

500

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-slug)

slug

string

The slug of the custom environment to create.

Maximum length: `32`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-description)

description

string

Description of the custom environment. This is optional.

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-branch-matcher)

branchMatcher

object

How we want to determine a matching branch. This is optional.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-branch-matcher-type)

branchMatcher.type

enum<string>

required

Type of matcher. One of "equals", "startsWith", or "endsWith".

Available options:

`equals`,

`startsWith`,

`endsWith`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-branch-matcher-pattern)

branchMatcher.pattern

string

required

Git branch name or portion thereof.

Maximum length: `100`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#body-copy-env-vars-from)

copyEnvVarsFrom

string

Where to copy environment variables from. This is optional.

#### Response

201

application/json

Internal representation of a custom environment with all required properties

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-id)

id

string

required

Unique identifier for the custom environment (format: env\_\*)

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-slug)

slug

string

required

URL-friendly name of the environment

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-type)

type

enum<string>

required

The type of environment (production, preview, or development)

Available options:

`preview`,

`production`,

`development`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-created-at)

createdAt

number

required

Timestamp when the environment was created

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-updated-at)

updatedAt

number

required

Timestamp when the environment was last updated

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-description)

description

string

Optional description of the environment's purpose

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-branch-matcher)

branchMatcher

object

Configuration for matching git branches to this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-branch-matcher-type)

branchMatcher.type

enum<string>

required

The type of matching to perform

Available options:

`endsWith`,

`startsWith`,

`equals`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-branch-matcher-pattern)

branchMatcher.pattern

string

required

The pattern to match against branch names

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains)

domains

object\[\]

List of domains associated with this environment

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-apex-name)

apexName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-verified)

verified

boolean

required

`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-redirect)

redirect

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-redirect-status-code)

redirectStatusCode

enum<number> \| null

Available options:

`307`,

`301`,

`302`,

`308`

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-git-branch)

gitBranch

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-custom-environment-id)

customEnvironmentId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-updated-at)

updatedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-domains-verification)

verification

object\[\]

A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/environment/create-a-custom-environment-for-the-current-project#response-current-deployment-aliases)

currentDeploymentAliases

string\[\]

List of aliases for the current deployment

[Retrieve custom environments](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-custom-environments) [Retrieve a custom environment](https://vercel.com/docs/rest-api/reference/endpoints/environment/retrieve-a-custom-environment)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.