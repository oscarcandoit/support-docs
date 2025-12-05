---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member"
title: "Update a Team Member - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Update a Team Member

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

- connect

- rolling-release

- security

- teams

  - [GET\\
    \\
    List team members](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members)
  - [POST\\
    \\
    Invite a user](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user)
  - [POST\\
    \\
    Request access to a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team)
  - [GET\\
    \\
    Get access request status](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status)
  - [POST\\
    \\
    Join a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/join-a-team)
  - [DEL\\
    \\
    Remove a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/remove-a-team-member)
  - [PATCH\\
    \\
    Update a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member)
  - [GET\\
    \\
    Get a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team)
  - [PATCH\\
    \\
    Update a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team)
  - [GET\\
    \\
    List all teams](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-all-teams)
  - [POST\\
    \\
    Create a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/create-a-team)
  - [DEL\\
    \\
    Delete a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team)
  - [DEL\\
    \\
    Delete a Team invite code](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code)
- webhooks

- aliases

- certs


updateTeamMember

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.updateTeamMember({
    uid: "ndfasllgPyCtREAqxxdyFKb",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      confirmed: true,
      role: "VIEWER",
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
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

404

409

500

Copy

Ask AI

```
{
  "id": "<string>"
}
```

teams

# Update a Team Member

Copy page

Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.

Copy page

PATCH

/

v1

/

teams

/

{teamId}

/

members

/

{uid}

updateTeamMember

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.updateTeamMember({
    uid: "ndfasllgPyCtREAqxxdyFKb",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      confirmed: true,
      role: "VIEWER",
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
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

404

409

500

Copy

Ask AI

```
{
  "id": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#parameter-uid)

uid

string

required

The ID of the member.

Example:

`"ndfasllgPyCtREAqxxdyFKb"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#parameter-team-id)

teamId

string

required

The unique team identifier

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-confirmed)

confirmed

boolean

Accept a user who requested access to the team.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-role)

role

string

default:MEMBER

The role in the team of the member.

Example:

`"VIEWER"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-projects)

projects

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-projects-project-id)

projectId

string

required

The ID of the project.

Maximum length: `256`

Example:

`"prj_ndlgr43fadlPyCtREAqxxdyFK"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-projects-role)

role

enum<string> \| null

required

The project role of the member that will be added. "null" will remove this project level role.

Available options:

`ADMIN`,

`PROJECT_VIEWER`,

`PROJECT_DEVELOPER`

Example:

`"ADMIN"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-joined-from)

joinedFrom

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#body-joined-from-sso-user-id)

joinedFrom.ssoUserId

any

#### Response

200

application/json

Successfully updated the membership.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/update-a-team-member#response-id)

id

string

required

ID of the team.

[Remove a Team Member](https://vercel.com/docs/rest-api/reference/endpoints/teams/remove-a-team-member) [Get a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-a-team)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.