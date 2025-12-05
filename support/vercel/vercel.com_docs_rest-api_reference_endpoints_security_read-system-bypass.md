---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass"
title: "Read System Bypass - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Read System Bypass

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


getBypassIp

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getBypassIp({
    projectId: "<id>",
    limit: 10,
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

500

Copy

Ask AI

```
{
  "result": [\
    {\
      "OwnerId": "<string>",\
      "Id": "<string>",\
      "Domain": "<string>",\
      "Ip": "<string>",\
      "Action": "block",\
      "ProjectId": "<string>",\
      "IsProjectRule": true,\
      "Note": "<string>",\
      "CreatedAt": "<string>",\
      "ActorId": "<string>",\
      "UpdatedAt": "<string>",\
      "UpdatedAtHour": "<string>",\
      "DeletedAt": "<string>",\
      "ExpiresAt": 123\
    }\
  ],
  "pagination": {
    "OwnerId": "<string>",
    "Id": "<string>"
  }
}
```

security

# Read System Bypass

Copy page

Retrieve the system bypass rules configured for the specified project

Copy page

GET

/

v1

/

security

/

firewall

/

bypass

getBypassIp

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getBypassIp({
    projectId: "<id>",
    limit: 10,
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

500

Copy

Ask AI

```
{
  "result": [\
    {\
      "OwnerId": "<string>",\
      "Id": "<string>",\
      "Domain": "<string>",\
      "Ip": "<string>",\
      "Action": "block",\
      "ProjectId": "<string>",\
      "IsProjectRule": true,\
      "Note": "<string>",\
      "CreatedAt": "<string>",\
      "ActorId": "<string>",\
      "UpdatedAt": "<string>",\
      "UpdatedAtHour": "<string>",\
      "DeletedAt": "<string>",\
      "ExpiresAt": 123\
    }\
  ],
  "pagination": {
    "OwnerId": "<string>",
    "Id": "<string>"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-limit)

limit

number

Required range: `x <= 256`

Example:

`10`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-source-ip)

sourceIp

string

Filter by source IP

Maximum length: `49`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-domain)

domain

string

Filter by domain

Maximum length: `2544`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-project-scope)

projectScope

boolean

Filter by project scoped rules

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-offset)

offset

string

Used for pagination. Retrieves results after the provided id

Maximum length: `2560`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result)

result

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-owner-id)

OwnerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-id)

Id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-domain)

Domain

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-ip)

Ip

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-created-at)

CreatedAt

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-updated-at)

UpdatedAt

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-updated-at-hour)

UpdatedAtHour

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-action)

Action

enum<string>

Available options:

`block`,

`bypass`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-project-id)

ProjectId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-is-project-rule)

IsProjectRule

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-note)

Note

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-actor-id)

ActorId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-deleted-at)

DeletedAt

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-result-expires-at)

ExpiresAt

number \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-pagination)

pagination

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-pagination-owner-id)

pagination.OwnerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass#response-pagination-id)

pagination.Id

string

required

[Read active attack data](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data) [Create System Bypass Rule](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.