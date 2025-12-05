---
url: "https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members"
title: "List team members - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

teams

List team members

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


getTeamMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeamMembers({
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
    role: "OWNER",
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
  "members": [\
    {\
      "avatar": "123a6c5209bc3778245d011443644c8d27dc2c50",\
      "confirmed": true,\
      "email": "jane.doe@example.com",\
      "github": {\
        "login": "<string>"\
      },\
      "gitlab": {\
        "login": "<string>"\
      },\
      "bitbucket": {\
        "login": "<string>"\
      },\
      "role": "OWNER",\
      "uid": "zTuNVUXEAvvnNN3IaqinkyMw",\
      "username": "jane-doe",\
      "name": "Jane Doe",\
      "createdAt": 1588720733602,\
      "accessRequestedAt": 1588820733602,\
      "joinedFrom": {\
        "origin": "teams",\
        "commitId": "<string>",\
        "repoId": "<string>",\
        "repoPath": "<string>",\
        "gitUserId": "<string>",\
        "gitUserLogin": "<string>",\
        "ssoUserId": "<string>",\
        "ssoConnectedAt": 123,\
        "idpUserId": "<string>",\
        "dsyncUserId": "<string>",\
        "dsyncConnectedAt": 123\
      },\
      "projects": [\
        {\
          "name": "<string>",\
          "id": "<string>",\
          "role": "ADMIN"\
        }\
      ]\
    }\
  ],
  "emailInviteCodes": [\
    {\
      "accessGroups": [\
        "<string>"\
      ],\
      "id": "<string>",\
      "email": "<string>",\
      "role": "OWNER",\
      "teamRoles": [\
        "OWNER"\
      ],\
      "teamPermissions": [\
        "IntegrationManager"\
      ],\
      "isDSyncUser": true,\
      "createdAt": 123,\
      "expired": true,\
      "projects": {},\
      "entitlements": [\
        "<string>"\
      ]\
    }\
  ],
  "pagination": {
    "hasNext": true,
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

teams

# List team members

Copy page

Get a paginated list of team members for the provided team.

Copy page

GET

/

v3

/

teams

/

{teamId}

/

members

getTeamMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.teams.getTeamMembers({
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
    role: "OWNER",
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
  "members": [\
    {\
      "avatar": "123a6c5209bc3778245d011443644c8d27dc2c50",\
      "confirmed": true,\
      "email": "jane.doe@example.com",\
      "github": {\
        "login": "<string>"\
      },\
      "gitlab": {\
        "login": "<string>"\
      },\
      "bitbucket": {\
        "login": "<string>"\
      },\
      "role": "OWNER",\
      "uid": "zTuNVUXEAvvnNN3IaqinkyMw",\
      "username": "jane-doe",\
      "name": "Jane Doe",\
      "createdAt": 1588720733602,\
      "accessRequestedAt": 1588820733602,\
      "joinedFrom": {\
        "origin": "teams",\
        "commitId": "<string>",\
        "repoId": "<string>",\
        "repoPath": "<string>",\
        "gitUserId": "<string>",\
        "gitUserLogin": "<string>",\
        "ssoUserId": "<string>",\
        "ssoConnectedAt": 123,\
        "idpUserId": "<string>",\
        "dsyncUserId": "<string>",\
        "dsyncConnectedAt": 123\
      },\
      "projects": [\
        {\
          "name": "<string>",\
          "id": "<string>",\
          "role": "ADMIN"\
        }\
      ]\
    }\
  ],
  "emailInviteCodes": [\
    {\
      "accessGroups": [\
        "<string>"\
      ],\
      "id": "<string>",\
      "email": "<string>",\
      "role": "OWNER",\
      "teamRoles": [\
        "OWNER"\
      ],\
      "teamPermissions": [\
        "IntegrationManager"\
      ],\
      "isDSyncUser": true,\
      "createdAt": 123,\
      "expired": true,\
      "projects": {},\
      "entitlements": [\
        "<string>"\
      ]\
    }\
  ],
  "pagination": {
    "hasNext": true,
    "count": 20,
    "next": 1540095775951,
    "prev": 1540095775951
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-limit)

limit

number

Limit how many teams should be returned

Required range: `x >= 1`

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-since)

since

number

Timestamp in milliseconds to only include members added since then.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-until)

until

number

Timestamp in milliseconds to only include members added until then.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-search)

search

string

Search team members by their name, username, and email.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-role)

role

enum<string>

Only return members with the specified team role.

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

`"OWNER"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-exclude-project)

excludeProject

string

Exclude members who belong to the specified project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#parameter-eligible-members-for-project-id)

eligibleMembersForProjectId

string

Include team members who are eligible to be members of the specified project.

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members)

members

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-confirmed)

confirmed

boolean

required

Boolean that indicates if this member was confirmed by an owner.

Example:

`true`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-email)

email

string

required

The email of this member.

Example:

`"jane.doe@example.com"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-role)

role

enum<string>

required

Role of this user in the team.

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

`"OWNER"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-uid)

uid

string

required

The ID of this user.

Example:

`"zTuNVUXEAvvnNN3IaqinkyMw"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-username)

username

string

required

The unique username of this user.

Example:

`"jane-doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-created-at)

createdAt

number

required

Timestamp in milliseconds when this member was added.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-avatar)

avatar

string

ID of the file for the Avatar of this member.

Example:

`"123a6c5209bc3778245d011443644c8d27dc2c50"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-github)

github

object

Information about the GitHub account for this user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-gitlab)

gitlab

object

Information about the GitLab account of this user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-bitbucket)

bitbucket

object

Information about the Bitbucket account of this user.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-name)

name

string

The name of this user.

Example:

`"Jane Doe"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-access-requested-at)

accessRequestedAt

number

Timestamp in milliseconds for when this team member was accepted by an owner.

Example:

`1588820733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-joined-from)

joinedFrom

object

Map with information about the members origin if they joined by requesting access.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-members-projects)

projects

object\[\]

Array of project memberships

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-pagination)

pagination

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-pagination-has-next)

pagination.hasNext

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-pagination-count)

pagination.count

number

required

Amount of items in the current page.

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-pagination-next)

pagination.next

number \| null

required

Timestamp that must be used to request the next page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-pagination-prev)

pagination.prev

number \| null

required

Timestamp that must be used to request the previous page.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes)

emailInviteCodes

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-is-d-sync-user)

isDSyncUser

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-access-groups)

accessGroups

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-email)

email

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-role)

role

enum<string>

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-team-roles)

teamRoles

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-team-permissions)

teamPermissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-expired)

expired

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-projects)

projects

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members#response-email-invite-codes-entitlements)

entitlements

string\[\]

[Read Firewall Actions by Project](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project) [Invite a user](https://vercel.com/docs/rest-api/reference/endpoints/teams/invite-a-user)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.