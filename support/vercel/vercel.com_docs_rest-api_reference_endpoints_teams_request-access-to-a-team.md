---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team"
title: "Request access to a team - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

Request access to a team

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


requestAccessToTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.requestAccessToTeam({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      joinedFrom: {
        origin: "github",
        commitId: "f498d25d8bd654b578716203be73084b31130cd7",
        repoId: "67753070",
        repoPath: "jane-doe/example",
        gitUserId: 103053343,
        gitUserLogin: "jane-doe",
      },
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

404

503

Copy

Ask AI

```
{
  "teamSlug": "<string>",
  "teamName": "<string>",
  "confirmed": true,
  "joinedFrom": {
    "origin": "import",
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
  "accessRequestedAt": 123,
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

# Request access to a team

Copy page

Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.

Copy page

POST

/

v1

/

teams

/

{teamId}

/

request

requestAccessToTeam

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.requestAccessToTeam({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    requestBody: {
      joinedFrom: {
        origin: "github",
        commitId: "f498d25d8bd654b578716203be73084b31130cd7",
        repoId: "67753070",
        repoPath: "jane-doe/example",
        gitUserId: 103053343,
        gitUserLogin: "jane-doe",
      },
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

404

503

Copy

Ask AI

```
{
  "teamSlug": "<string>",
  "teamName": "<string>",
  "confirmed": true,
  "joinedFrom": {
    "origin": "import",
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
  "accessRequestedAt": 123,
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#parameter-team-id)

teamId

string

required

The unique team identifier

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from)

joinedFrom

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-origin)

joinedFrom.origin

enum<string>

required

The origin of the request.

Available options:

`import`,

`teams`,

`github`,

`gitlab`,

`bitbucket`,

`feedback`,

`organization-teams`

Example:

`"github"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-commit-id)

joinedFrom.commitId

string

The commit sha if the origin is a git provider.

Example:

`"f498d25d8bd654b578716203be73084b31130cd7"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-repo-id)

joinedFrom.repoId

string

The ID of the repository for the given Git provider.

Example:

`"67753070"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-repo-path)

joinedFrom.repoPath

string

The path to the repository for the given Git provider.

Example:

`"jane-doe/example"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-git-user-id)

joinedFrom.gitUserId

stringnumber

The ID of the Git account of the user who requests access.

Example:

`103053343`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#body-joined-from-git-user-login)

joinedFrom.gitUserLogin

string

The login name for the Git account of the user who requests access.

Example:

`"jane-doe"`

#### Response

200

application/json

Successfuly requested access to the team.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-team-slug)

teamSlug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-team-name)

teamName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-github)

github

object \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-github-login)

github.login

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-gitlab)

gitlab

object \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-gitlab-login)

gitlab.login

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-bitbucket)

bitbucket

object \| null

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-bitbucket-login)

bitbucket.login

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-confirmed)

confirmed

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from)

joinedFrom

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-origin)

joinedFrom.origin

enum<string>

required

Available options:

`import`,

`teams`,

`github`,

`gitlab`,

`bitbucket`,

`feedback`,

`organization-teams`,

`link`,

`mail`,

`saml`,

`dsync`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-commit-id)

joinedFrom.commitId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-repo-id)

joinedFrom.repoId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-repo-path)

joinedFrom.repoPath

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-git-user-id)

joinedFrom.gitUserId

stringnumber

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-git-user-login)

joinedFrom.gitUserLogin

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-sso-user-id)

joinedFrom.ssoUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-sso-connected-at)

joinedFrom.ssoConnectedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-idp-user-id)

joinedFrom.idpUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-dsync-user-id)

joinedFrom.dsyncUserId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-joined-from-dsync-connected-at)

joinedFrom.dsyncConnectedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/request-access-to-a-team#response-access-requested-at)

accessRequestedAt

number

[Invite a user](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user) [Get access request status](https://vercel.com/docs/rest-api/reference/endpoints/teams/get-access-request-status)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.