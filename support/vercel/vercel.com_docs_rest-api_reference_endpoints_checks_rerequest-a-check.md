---
url: "https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check"
title: "Rerequest a check - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

checks

Rerequest a check

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

  - [GET\\
    \\
    Retrieve a list of all checks](https://vercel.com/docs/rest-api/reference/endpoints/checks/retrieve-a-list-of-all-checks)
  - [POST\\
    \\
    Creates a new Check](https://vercel.com/docs/rest-api/reference/endpoints/checks/creates-a-new-check)
  - [GET\\
    \\
    Get a single check](https://vercel.com/docs/rest-api/reference/endpoints/checks/get-a-single-check)
  - [PATCH\\
    \\
    Update a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check)
  - [POST\\
    \\
    Rerequest a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check)
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


rerequestCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.rerequestCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
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

404

Copy

Ask AI

```
{}
```

checks

# Rerequest a check

Copy page

Rerequest a selected check that has failed.

Copy page

POST

/

v1

/

deployments

/

{deploymentId}

/

checks

/

{checkId}

/

rerequest

rerequestCheck

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.rerequestCheck({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
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

404

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#parameter-deployment-id)

deploymentId

string

required

The deployment to rerun the check for.

Example:

`"dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#parameter-check-id)

checkId

string

required

The check to rerun

Example:

`"check_2qn7PZrx89yxY34vEZPD31Y9XVj6"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#parameter-auto-update)

autoUpdate

boolean

Mark the check as running

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/checks/rerequest-a-check#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The response is of type `object`.

[Update a check](https://vercel.com/docs/rest-api/reference/endpoints/checks/update-a-check) [Update the data cache feature](https://vercel.com/docs/rest-api/reference/endpoints/projects/update-the-data-cache-feature)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.