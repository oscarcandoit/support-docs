---
url: "https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group"
title: "List members of an access group - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

access-groups

List members of an access group

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

  - [GET\\
    \\
    Reads an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)
  - [POST\\
    \\
    Update an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group)
  - [DEL\\
    \\
    Deletes an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/deletes-an-access-group)
  - [GET\\
    \\
    List members of an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group)
  - [GET\\
    \\
    List access groups for a team, project or member](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-access-groups-for-a-team-project-or-member)
  - [POST\\
    \\
    Creates an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group)
  - [GET\\
    \\
    List projects of an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-projects-of-an-access-group)
  - [POST\\
    \\
    Create an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/create-an-access-group-project)
  - [GET\\
    \\
    Reads an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group-project)
  - [DEL\\
    \\
    Delete an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/delete-an-access-group-project)
  - [PATCH\\
    \\
    Update an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project)
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

- webhooks

- aliases

- certs


listAccessGroupMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.listAccessGroupMembers({
    idOrName: "ag_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    limit: 20,
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

Copy

Ask AI

```
{
  "members": [\
    {\
      "avatar": "<string>",\
      "email": "<string>",\
      "uid": "<string>",\
      "username": "<string>",\
      "name": "<string>",\
      "createdAt": "<string>",\
      "teamRole": "OWNER"\
    }\
  ],
  "pagination": {
    "count": 123,
    "next": "<string>"
  }
}
```

access-groups

# List members of an access group

Copy page

List members of an access group

Copy page

GET

/

v1

/

access-groups

/

{idOrName}

/

members

listAccessGroupMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.listAccessGroupMembers({
    idOrName: "ag_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    limit: 20,
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

Copy

Ask AI

```
{
  "members": [\
    {\
      "avatar": "<string>",\
      "email": "<string>",\
      "uid": "<string>",\
      "username": "<string>",\
      "name": "<string>",\
      "createdAt": "<string>",\
      "teamRole": "OWNER"\
    }\
  ],
  "pagination": {
    "count": 123,
    "next": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-id-or-name)

idOrName

string

required

The ID or name of the Access Group.

Example:

`"ag_pavWOn1iLObbXLRiwVvzmPrTWyTf"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-limit)

limit

integer

Limit how many access group members should be returned.

Required range: `1 <= x <= 100`

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-next)

next

string

Continuation cursor to retrieve the next page of results.

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-search)

search

string

Search project members by their name, username, and email.

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members)

members

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-email)

email

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-uid)

uid

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-username)

username

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-team-role)

teamRole

enum<string>

required

Available options:

`OWNER`,

`MEMBER`,

`DEVELOPER`,

`SECURITY`,

`BILLING`,

`VIEWER`,

`VIEWER_FOR_PLUS`,

`CONTRIBUTOR`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-avatar)

avatar

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-name)

name

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-members-created-at)

createdAt

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-pagination)

pagination

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-pagination-count)

pagination.count

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-members-of-an-access-group#response-pagination-next)

pagination.next

string \| null

required

[Deletes an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/deletes-an-access-group) [List access groups for a team, project or member](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-access-groups-for-a-team-project-or-member)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.