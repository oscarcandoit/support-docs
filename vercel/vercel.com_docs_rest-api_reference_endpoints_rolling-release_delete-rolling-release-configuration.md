---
url: "https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration"
title: "Delete rolling release configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

rolling-release

Delete rolling release configuration

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

  - [GET\\
    \\
    Get rolling release billing status](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-billing-status)
  - [GET\\
    \\
    Get rolling release configuration](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-configuration)
  - [DEL\\
    \\
    Delete rolling release configuration](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration)
  - [PATCH\\
    \\
    Update the rolling release settings for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-rolling-release-settings-for-the-project)
  - [GET\\
    \\
    Get the active rolling release information for a project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-the-active-rolling-release-information-for-a-project)
  - [POST\\
    \\
    Update the active rolling release to the next stage for a project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-active-rolling-release-to-the-next-stage-for-a-project)
  - [POST\\
    \\
    Complete the rolling release for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project)
- security

- teams

- webhooks

- aliases

- certs


deleteRollingReleaseConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.rollingRelease.deleteRollingReleaseConfig({
    idOrName: "<value>",
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
{
  "rollingRelease": "<any>"
}
```

rolling-release

# Delete rolling release configuration

Copy page

Disable Rolling Releases for a project means that future deployments will not undergo a rolling release. Changing the config never alters a rollout that’s already in-flight—it only affects the next production deployment. If you want to also stop the current rollout, call this endpoint to disable the feature, and then call either the /complete or /abort endpoint.

Copy page

DELETE

/

v1

/

projects

/

{idOrName}

/

rolling-release

/

config

deleteRollingReleaseConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.rollingRelease.deleteRollingReleaseConfig({
    idOrName: "<value>",
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
{
  "rollingRelease": "<any>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#parameter-id-or-name)

idOrName

string

required

Project ID or project name (URL-encoded)

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/delete-rolling-release-configuration#response-rolling-release)

rollingRelease

any

required

[Get rolling release configuration](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-configuration) [Update the rolling release settings for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/update-the-rolling-release-settings-for-the-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.