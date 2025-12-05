---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team"
title: "Delete a Team - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Delete a Team

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


deleteTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.deleteTeam({
    newDefaultTeamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {},
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

409

Copy

Ask AI

```
{
  "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "newDefaultTeamIdError": true
}
```

teams

# Delete a Team

Copy page

Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.

Copy page

DELETE

/

v1

/

teams

/

{teamId}

deleteTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.deleteTeam({
    newDefaultTeamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {},
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

409

Copy

Ask AI

```
{
  "id": "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  "newDefaultTeamIdError": true
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#parameter-team-id)

teamId

string

required

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#parameter-new-default-team-id)

newDefaultTeamId

string

Id of the team to be set as the new default team

Example:

`"team_LLHUOMOoDlqOp8wPE4kFo9pE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#body-reasons)

reasons

object\[\]

Optional array of objects that describe the reason why the team is being deleted.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#body-reasons-slug)

slug

string

required

Idenitifier slug of the reason why the team is being deleted.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#body-reasons-description)

description

string

required

Description of the reason why the team is being deleted.

#### Response

200

application/json

The Team was successfully deleted

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#response-id)

id

string

required

The ID of the deleted Team

Example:

`"team_LLHUOMOoDlqOp8wPE4kFo9pE"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team#response-new-default-team-id-error)

newDefaultTeamIdError

boolean

Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query.

Example:

`true`

[Create a Team](https://vercel.com/docs/rest-api/reference/endpoints/teams/create-a-team) [Delete a Team invite code](https://vercel.com/docs/rest-api/reference/endpoints/teams/delete-a-team-invite-code)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.