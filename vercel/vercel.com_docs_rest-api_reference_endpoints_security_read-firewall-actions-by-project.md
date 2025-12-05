---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project"
title: "Read Firewall Actions by Project - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Read Firewall Actions by Project

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


get\_/v1/security/firewall/events

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.security.getV1SecurityFirewallEvents({
    projectId: "<id>",
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

500

Copy

Ask AI

```
{
  "actions": [\
    {\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "isActive": true,\
      "action_type": "<string>",\
      "host": "<string>",\
      "public_ip": "<string>",\
      "count": 123\
    }\
  ]
}
```

security

# Read Firewall Actions by Project

Copy page

Retrieve firewall actions for a project

Copy page

GET

/

v1

/

security

/

firewall

/

events

get\_/v1/security/firewall/events

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel();

async function run() {
  const result = await vercel.security.getV1SecurityFirewallEvents({
    projectId: "<id>",
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

500

Copy

Ask AI

```
{
  "actions": [\
    {\
      "startTime": "<string>",\
      "endTime": "<string>",\
      "isActive": true,\
      "action_type": "<string>",\
      "host": "<string>",\
      "public_ip": "<string>",\
      "count": 123\
    }\
  ]
}
```

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#parameter-start-timestamp)

startTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#parameter-end-timestamp)

endTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#parameter-hosts)

hosts

string

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions)

actions

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-start-time)

startTime

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-end-time)

endTime

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-is-active)

isActive

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-action-type)

action\_type

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-host)

host

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-public-ip)

public\_ip

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-actions-by-project#response-actions-count)

count

number

required

[Remove System Bypass Rule](https://vercel.com/docs/rest-api/reference/endpoints/security/remove-system-bypass-rule) [List team members](https://vercel.com/docs/rest-api/reference/endpoints/teams/list-team-members)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.