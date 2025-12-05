---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data"
title: "Read active attack data - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Read active attack data

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


getActiveAttackStatus

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getActiveAttackStatus({
    projectId: "<id>",
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

security

# Read active attack data

Copy page

Retrieve active attack data within the last N days (default: 1 day)

Copy page

GET

/

v1

/

security

/

firewall

/

attack-status

getActiveAttackStatus

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getActiveAttackStatus({
    projectId: "<id>",
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#parameter-since)

since

number

Required range: `x >= 1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1

- Option 2


The response is of type `object`.

[Read Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration) [Read System Bypass](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.