---
url: "https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group"
title: "Creates an access group - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

access-groups

Creates an access group

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


createAccessGroup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.createAccessGroup({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "My access group",
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
      ],
      membersToAdd: [\
        "usr_1a2b3c4d5e6f7g8h9i0j",\
        "usr_2b3c4d5e6f7g8h9i0j1k",\
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

403

Copy

Ask AI

```
{
  "entitlements": [\
    "v0"\
  ],
  "membersCount": 123,
  "projectsCount": 123,
  "name": "my-access-group",
  "createdAt": 1588720733602,
  "teamId": "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  "updatedAt": 1588720733602,
  "accessGroupId": "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  "teamRoles": [\
    "DEVELOPER",\
    "BILLING"\
  ],
  "teamPermissions": [\
    "CreateProject"\
  ]
}
```

access-groups

# Creates an access group

Copy page

Allows to create an access group

Copy page

POST

/

v1

/

access-groups

createAccessGroup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.createAccessGroup({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "My access group",
      projects: [\
        {\
          projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",\
          role: "ADMIN",\
        },\
      ],
      membersToAdd: [\
        "usr_1a2b3c4d5e6f7g8h9i0j",\
        "usr_2b3c4d5e6f7g8h9i0j1k",\
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

403

Copy

Ask AI

```
{
  "entitlements": [\
    "v0"\
  ],
  "membersCount": 123,
  "projectsCount": 123,
  "name": "my-access-group",
  "createdAt": 1588720733602,
  "teamId": "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  "updatedAt": 1588720733602,
  "accessGroupId": "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  "teamRoles": [\
    "DEVELOPER",\
    "BILLING"\
  ],
  "teamPermissions": [\
    "CreateProject"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#body-name)

name

string

required

The name of the access group

Maximum length: `50`

Example:

`"My access group"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#body-projects)

projects

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#body-projects-project-id)

projectId

string

required

The ID of the project.

Maximum length: `256`

Example:

`"prj_ndlgr43fadlPyCtREAqxxdyFK"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#body-projects-role)

role

enum<string> \| null

required

The project role that will be added to this Access Group. "null" will remove this project level role.

Available options:

`ADMIN`,

`PROJECT_VIEWER`,

`PROJECT_DEVELOPER`

Example:

`"ADMIN"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#body-members-to-add)

membersToAdd

string\[\]

List of members to add to the access group.

Example:

```
[\
  "usr_1a2b3c4d5e6f7g8h9i0j",\
  "usr_2b3c4d5e6f7g8h9i0j1k"\
]
```

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-entitlements)

entitlements

enum<string>\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#parameter)

enum<string>

Available options:

`v0`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-members-count)

membersCount

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-projects-count)

projectsCount

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-name)

name

string

required

The name of this access group.

Example:

`"my-access-group"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-created-at)

createdAt

string

required

Timestamp in milliseconds when the access group was created.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-team-id)

teamId

string

required

ID of the team that this access group belongs to.

Example:

`"team_123a6c5209bc3778245d011443644c8d27dc2c50"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-updated-at)

updatedAt

string

required

Timestamp in milliseconds when the access group was last updated.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-access-group-id)

accessGroupId

string

required

ID of the access group.

Example:

`"ag_123a6c5209bc3778245d011443644c8d27dc2c50"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-team-roles)

teamRoles

string\[\]

Roles that the team has in the access group.

Example:

```
["DEVELOPER", "BILLING"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/creates-an-access-group#response-team-permissions)

teamPermissions

string\[\]

Permissions that the team has in the access group.

Example:

```
["CreateProject"]
```

[List access groups for a team, project or member](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-access-groups-for-a-team-project-or-member) [List projects of an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/list-projects-of-an-access-group)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.