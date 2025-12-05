---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user"
title: "Invite a user - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Invite a user

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


inviteUserToTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.inviteUserToTeam([\
    {\
      email: "john@example.com",\
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
      ],\
    },\
  ]);

  console.log(result);
}

run();
```

200

400

401

403

503

Copy

Ask AI

```
{
  "uid": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "username": "john-doe",
  "email": "john@user.co",
  "role": "MEMBER",
  "teamRoles": [\
    "MEMBER"\
  ],
  "teamPermissions": [\
    "CreateProject"\
  ]
}
```

teams

# Invite a user

Copy page

Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user to be invited must be specified by email.

Copy page

POST

/

v2

/

teams

/

{teamId}

/

members

inviteUserToTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.inviteUserToTeam([\
    {\
      email: "john@example.com",\
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
      ],\
    },\
  ]);

  console.log(result);
}

run();
```

200

400

401

403

503

Copy

Ask AI

```
{
  "uid": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "username": "john-doe",
  "email": "john@user.co",
  "role": "MEMBER",
  "teamRoles": [\
    "MEMBER"\
  ],
  "teamPermissions": [\
    "CreateProject"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Body

application/json · object\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#body-email)

email

string<email>

required

The email address of the user to invite

Example:

`"john@example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#body-role)

role

enum<string>

default:VIEWER

The role of the user to invite

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

Example:

`"VIEWER"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#body-projects)

projects

object\[\]

Show child attributes

#### Response

200

application/json

The member was successfully added to the team.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-uid)

uid

string

required

The ID of the invited user

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-username)

username

string

required

The username of the invited user

Example:

`"john-doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-email)

email

string

required

The email of the invited user.

Example:

`"john@user.co"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-role)

role

enum<string>

required

The role used for the invitation

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

Example:

`"MEMBER"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-team-roles)

teamRoles

enum<string>\[\]

The team roles of the user

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#parameter)

enum<string>

The team roles of the user

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

Example:

```
["MEMBER"]
```

Example:

```
["MEMBER"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#response-team-permissions)

teamPermissions

enum<string>\[\]

The team permissions of the user

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user#parameter)

enum<string>

The team permissions of the user

Available options:

`IntegrationManager`,

`CreateProject`,

`FullProductionDeployment`,

`UsageViewer`,

`EnvVariableManager`,

`EnvironmentManager`,

`V0Builder`,

`V0Chatter`,

`V0Viewer`

Example:

```
["CreateProject"]
```

Example:

```
["CreateProject"]
```

[List team members](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members) [Request access to a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.