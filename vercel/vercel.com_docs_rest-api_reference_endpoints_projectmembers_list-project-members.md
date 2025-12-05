---
url: "https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members"
title: "List project members - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

projectMembers

List project members

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

  - [GET\\
    \\
    List project members](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members)
  - [POST\\
    \\
    Adds a new member to a project.](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project)
  - [DEL\\
    \\
    Remove a Project Member](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/remove-a-project-member)
- connect

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


getProjectMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projectMembers.getProjectMembers({
    idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
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
{}
```

projectMembers

# List project members

Copy page

Lists all members of a project.

Copy page

GET

/

v1

/

projects

/

{idOrName}

/

members

getProjectMembers

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projectMembers.getProjectMembers({
    idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
    limit: 20,
    since: 1540095775951,
    until: 1540095775951,
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
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-id-or-name)

idOrName

string

required

The ID or name of the Project.

Example:

`"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-limit)

limit

integer

Limit how many project members should be returned

Required range: `1 <= x <= 100`

Example:

`20`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-since)

since

integer

Timestamp in milliseconds to only include members added since then.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-until)

until

integer

Timestamp in milliseconds to only include members added until then.

Example:

`1540095775951`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-search)

search

string

Search project members by their name, username, and email.

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/list-project-members#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

Paginated list of members for the project.

- Option 1

- Option 2


The response is of type `object`.

[Get logs for a deployment](https://vercel.com/docs/rest-api/reference/endpoints/logs/get-logs-for-a-deployment) [Adds a new member to a project.](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/adds-a-new-member-to-a-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.