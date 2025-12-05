---
url: "https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group"
title: "Reads an access group - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

access-groups

Reads an access group

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


readAccessGroup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
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
  "teamPermissions": [\
    "IntegrationManager"\
  ],
  "entitlements": [\
    "v0"\
  ],
  "isDsyncManaged": true,
  "name": "my-access-group",
  "createdAt": 1588720733602,
  "teamId": "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  "updatedAt": 1588720733602,
  "accessGroupId": "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  "membersCount": 5,
  "projectsCount": 2,
  "teamRoles": [\
    "DEVELOPER",\
    "BILLING"\
  ]
}
```

access-groups

# Reads an access group

Copy page

Allows to read an access group

Copy page

GET

/

v1

/

access-groups

/

{idOrName}

readAccessGroup

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
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
  "teamPermissions": [\
    "IntegrationManager"\
  ],
  "entitlements": [\
    "v0"\
  ],
  "isDsyncManaged": true,
  "name": "my-access-group",
  "createdAt": 1588720733602,
  "teamId": "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  "updatedAt": 1588720733602,
  "accessGroupId": "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  "membersCount": 5,
  "projectsCount": 2,
  "teamRoles": [\
    "DEVELOPER",\
    "BILLING"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#parameter-id-or-name)

idOrName

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-is-dsync-managed)

isDsyncManaged

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-name)

name

string

required

The name of this access group.

Example:

`"my-access-group"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-created-at)

createdAt

string

required

Timestamp in milliseconds when the access group was created.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-team-id)

teamId

string

required

ID of the team that this access group belongs to.

Example:

`"team_123a6c5209bc3778245d011443644c8d27dc2c50"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-updated-at)

updatedAt

string

required

Timestamp in milliseconds when the access group was last updated.

Example:

`1588720733602`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-access-group-id)

accessGroupId

string

required

ID of the access group.

Example:

`"ag_123a6c5209bc3778245d011443644c8d27dc2c50"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-members-count)

membersCount

number

required

Number of members in the access group.

Example:

`5`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-projects-count)

projectsCount

number

required

Number of projects in the access group.

Example:

`2`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-team-permissions)

teamPermissions

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#parameter)

enum<string>

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-entitlements)

entitlements

enum<string>\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#parameter)

enum<string>

Available options:

`v0`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group#response-team-roles)

teamRoles

string\[\]

Roles that the team has in the access group.

Example:

```
["DEVELOPER", "BILLING"]
```

[Update an access group](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.