---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code"
title: "Delete a Team invite code - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Delete a Team invite code

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


deleteTeamInviteCode

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.deleteTeamInviteCode({
    inviteId: "2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
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
  "id": "<string>"
}
```

teams

# Delete a Team invite code

Copy page

Delete an active Team invite code.

Copy page

DELETE

/

v1

/

teams

/

{teamId}

/

invites

/

{inviteId}

deleteTeamInviteCode

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.deleteTeamInviteCode({
    inviteId: "2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
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
  "id": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code#parameter-invite-id)

inviteId

string

required

The Team invite code ID.

Example:

`"2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code#parameter-team-id)

teamId

string

required

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Response

200

application/json

Successfully deleted Team invite code.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code#response-id)

id

string

required

ID of the team.

[Delete a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team) [Get a list of webhooks](https://vercel.com/docs/rest-api/reference/endpoints/webhooks/get-a-list-of-webhooks)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.