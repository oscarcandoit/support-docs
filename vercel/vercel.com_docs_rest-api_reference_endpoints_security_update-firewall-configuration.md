---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration"
title: "Update Firewall Configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Update Firewall Configuration

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


updateFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.updateFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      action: "ip.remove",
      id: "<id>",
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

500

Copy

Ask AI

```
{}
```

security

# Update Firewall Configuration

Copy page

Process updates to modify the existing firewall config for a project

Copy page

PATCH

/

v1

/

security

/

firewall

/

config

updateFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.updateFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      action: "ip.remove",
      id: "<id>",
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

500

Copy

Ask AI

```
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2

- Option 3

- Option 4

- Option 5

- Option 6

- Option 7

- Option 8

- Option 9

- Option 10

- Option 11

- Option 12

- Option 13


Enable Firewall

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#body-action)

action

enum<string>

required

Available options:

`firewallEnabled`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#body-value)

value

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration#body-id)

id

any

#### Response

200

application/json

The response is of type `object`.

[Put Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration) [Read Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.