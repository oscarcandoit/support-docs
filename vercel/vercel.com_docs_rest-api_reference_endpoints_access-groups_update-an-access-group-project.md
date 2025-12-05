---
url: "https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project"
title: "Update an access group project - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

access-groups

Update an access group project

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


updateAccessGroupProject

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.updateAccessGroupProject({
    accessGroupIdOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      role: "ADMIN",
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
  "teamId": "<string>",
  "accessGroupId": "<string>",
  "projectId": "<string>",
  "role": "ADMIN",
  "createdAt": "<string>",
  "updatedAt": "<string>"
}
```

access-groups

# Update an access group project

Copy page

Allows update of an access group project

Copy page

PATCH

/

v1

/

access-groups

/

{accessGroupIdOrName}

/

projects

/

{projectId}

updateAccessGroupProject

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.updateAccessGroupProject({
    accessGroupIdOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      role: "ADMIN",
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
  "teamId": "<string>",
  "accessGroupId": "<string>",
  "projectId": "<string>",
  "role": "ADMIN",
  "createdAt": "<string>",
  "updatedAt": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#parameter-access-group-id-or-name)

accessGroupIdOrName

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#parameter-project-id)

projectId

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#body-role)

role

enum<string>

required

The project role that will be added to this Access Group.

Available options:

`ADMIN`,

`PROJECT_VIEWER`,

`PROJECT_DEVELOPER`

Example:

`"ADMIN"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-team-id)

teamId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-access-group-id)

accessGroupId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-role)

role

enum<string>

required

Available options:

`ADMIN`,

`PROJECT_DEVELOPER`,

`PROJECT_VIEWER`

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-created-at)

createdAt

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/update-an-access-group-project#response-updated-at)

updatedAt

string

required

[Delete an access group project](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/delete-an-access-group-project) [Record an artifacts cache usage event](https://vercel.com/docs/rest-api/reference/endpoints/artifacts/record-an-artifacts-cache-usage-event)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.