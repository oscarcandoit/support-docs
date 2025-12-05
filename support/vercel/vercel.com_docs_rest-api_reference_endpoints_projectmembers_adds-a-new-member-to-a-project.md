---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project"
title: "Adds a new member to a project. - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projectMembers

Adds a new member to a project.

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

  - [GET\\
    \\
    List project members](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members)
  - [POST\\
    \\
    Adds a new member to a project.](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project)
  - [DEL\\
    \\
    Remove a Project Member](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/remove-a-project-member)
- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


addProjectMember

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projectMembers.addProjectMember({
    idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      uid: "ndlgr43fadlPyCtREAqxxdyFK",
      username: "example",
      email: "entity@example.com",
      role: "ADMIN",
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

500

Copy

Ask AI

```
{
  "id": "<string>"
}
```

projectMembers

# Adds a new member to a project.

Copy page

Adds a new member to the project.

Copy page

POST

/

v1

/

projects

/

{idOrName}

/

members

addProjectMember

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projectMembers.addProjectMember({
    idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      uid: "ndlgr43fadlPyCtREAqxxdyFK",
      username: "example",
      email: "entity@example.com",
      role: "ADMIN",
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

500

Copy

Ask AI

```
{
  "id": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#parameter-id-or-name)

idOrName

string

required

The ID or name of the Project.

Example:

`"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2

- Option 3


[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#body-uid)

uid

string

required

The ID of the team member that should be added to this project.

Maximum length: `256`

Example:

`"ndlgr43fadlPyCtREAqxxdyFK"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#body-role)

role

enum<string>

required

The project role of the member that will be added.

Available options:

`ADMIN`,

`PROJECT_DEVELOPER`,

`PROJECT_VIEWER`

Example:

`"ADMIN"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#body-username)

username

string

The username of the team member that should be added to this project.

Maximum length: `256`

Example:

`"example"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#body-email)

email

string<email>

The email of the team member that should be added to this project.

Example:

`"entity@example.com"`

#### Response

200

application/json

Responds with the project ID on success.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project#response-id)

id

string

required

[List project members](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members) [Remove a Project Member](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/remove-a-project-member)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.