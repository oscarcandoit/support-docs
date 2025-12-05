---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode"
title: "Update Attack Challenge mode - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Update Attack Challenge mode

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

  - [POST\\
    \\
    Update Attack Challenge mode](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode)
  - [PUT\\
    \\
    Put Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration)
  - [PATCH\\
    \\
    Update Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration)
  - [GET\\
    \\
    Read Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration)
  - [GET\\
    \\
    Read active attack data](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data)
  - [GET\\
    \\
    Read System Bypass](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass)
  - [POST\\
    \\
    Create System Bypass Rule](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule)
  - [DEL\\
    \\
    Remove System Bypass Rule](https://vercel.com/docs/rest-api/reference/endpoints/security/remove-system-bypass-rule)
  - [GET\\
    \\
    Read Firewall Actions by Project](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project)
- teams

- webhooks

- aliases

- certs


updateAttackChallengeMode

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.updateAttackChallengeMode({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      projectId: "<id>",
      attackModeEnabled: false,
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

Copy

Ask AI

```
{
  "attackModeEnabled": true,
  "attackModeUpdatedAt": 123
}
```

security

# Update Attack Challenge mode

Copy page

Update the setting for determining if the project has Attack Challenge mode enabled.

Copy page

POST

/

v1

/

security

/

attack-mode

updateAttackChallengeMode

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.updateAttackChallengeMode({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      projectId: "<id>",
      attackModeEnabled: false,
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

Copy

Ask AI

```
{
  "attackModeEnabled": true,
  "attackModeUpdatedAt": 123
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#body-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#body-attack-mode-enabled)

attackModeEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#body-attack-mode-active-until)

attackModeActiveUntil

number \| null

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#response-attack-mode-enabled)

attackModeEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode#response-attack-mode-updated-at)

attackModeUpdatedAt

number

required

[Complete the rolling release for the project](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/complete-the-rolling-release-for-the-project) [Put Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.