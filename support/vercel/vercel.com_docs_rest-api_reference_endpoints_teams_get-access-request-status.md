---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status"
title: "Get access request status - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Get access request status

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


getTeamAccessRequest

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeamAccessRequest({
    userId: "<id>",
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
  "teamSlug": "my-team",
  "teamName": "My Team",
  "confirmed": false,
  "joinedFrom": {
    "origin": "link",
    "commitId": "<string>",
    "repoId": "<string>",
    "repoPath": "<string>",
    "gitUserId": "<string>",
    "gitUserLogin": "<string>",
    "ssoUserId": "<string>",
    "ssoConnectedAt": 123,
    "idpUserId": "<string>",
    "dsyncUserId": "<string>",
    "dsyncConnectedAt": 123
  },
  "accessRequestedAt": 1588720733602,
  "github": {
    "login": "<string>"
  },
  "gitlab": {
    "login": "<string>"
  },
  "bitbucket": {
    "login": "<string>"
  }
}
```

teams

# Get access request status

Copy page

Check the status of a join request. It’ll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.

Copy page

GET

/

v1

/

teams

/

{teamId}

/

request

/

{userId}

getTeamAccessRequest

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeamAccessRequest({
    userId: "<id>",
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
  "teamSlug": "my-team",
  "teamName": "My Team",
  "confirmed": false,
  "joinedFrom": {
    "origin": "link",
    "commitId": "<string>",
    "repoId": "<string>",
    "repoPath": "<string>",
    "gitUserId": "<string>",
    "gitUserLogin": "<string>",
    "ssoUserId": "<string>",
    "ssoConnectedAt": 123,
    "idpUserId": "<string>",
    "dsyncUserId": "<string>",
    "dsyncConnectedAt": 123
  },
  "accessRequestedAt": 1588720733602,
  "github": {
    "login": "<string>"
  },
  "gitlab": {
    "login": "<string>"
  },
  "bitbucket": {
    "login": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#parameter-user-id)

userId

string

required

The unique user identifier

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#parameter-team-id)

teamId

string

required

The unique team identifier

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Response

200

application/json

Successfully

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-team-slug)

teamSlug

string

required

The slug of the team.

Example:

`"my-team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-team-name)

teamName

string

required

The name of the team.

Example:

`"My Team"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-confirmed)

confirmed

boolean

required

Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`.

Example:

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from)

joinedFrom

object

required

A map that describes the origin from where the user joined.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-origin)

joinedFrom.origin

enum<string>

required

Available options:

`link`,

`mail`,

`import`,

`teams`,

`github`,

`gitlab`,

`bitbucket`,

`saml`,

`dsync`,

`feedback`,

`organization-teams`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-commit-id)

joinedFrom.commitId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-repo-id)

joinedFrom.repoId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-repo-path)

joinedFrom.repoPath

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-git-user-id)

joinedFrom.gitUserId

stringnumber

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-git-user-login)

joinedFrom.gitUserLogin

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-sso-user-id)

joinedFrom.ssoUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-sso-connected-at)

joinedFrom.ssoConnectedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-idp-user-id)

joinedFrom.idpUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-dsync-user-id)

joinedFrom.dsyncUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-joined-from-dsync-connected-at)

joinedFrom.dsyncConnectedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-access-requested-at)

accessRequestedAt

number

required

Timestamp in milliseconds when the user requested access to the team.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-github)

github

object \| null

required

Map of the connected GitHub account.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-github-login)

github.login

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-gitlab)

gitlab

object \| null

required

Map of the connected GitLab account.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-gitlab-login)

gitlab.login

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-bitbucket)

bitbucket

object \| null

required

Map of the connected Bitbucket account.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status#response-bitbucket-login)

bitbucket.login

string

[Request access to a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team) [Join a team](https://vercel.com/docs/rest-api/reference/endpoints/teams/join-a-team)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.