---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule"
title: "Create System Bypass Rule - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Create System Bypass Rule

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


addBypassIp

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.addBypassIp({
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

500

Copy

Ask AI

```
{
  "ok": true,
  "result": [\
    {\
      "OwnerId": "<string>",\
      "Id": "<string>",\
      "Domain": "<string>",\
      "Ip": "<string>",\
      "ProjectId": "<string>",\
      "Note": "<string>",\
      "IsProjectRule": true\
    }\
  ],
  "pagination": "<any>"
}
```

security

# Create System Bypass Rule

Copy page

Create new system bypass rules

Copy page

POST

/

v1

/

security

/

firewall

/

bypass

addBypassIp

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.addBypassIp({
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

500

Copy

Ask AI

```
{
  "ok": true,
  "result": [\
    {\
      "OwnerId": "<string>",\
      "Id": "<string>",\
      "Domain": "<string>",\
      "Ip": "<string>",\
      "ProjectId": "<string>",\
      "Note": "<string>",\
      "IsProjectRule": true\
    }\
  ],
  "pagination": "<any>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-domain)

domain

string

required

Maximum length: `2544`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-project-scope)

projectScope

boolean

If the specified bypass will apply to all domains for a project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-source-ip)

sourceIp

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-all-sources)

allSources

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-ttl)

ttl

number

Time to live in milliseconds

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#body-note)

note

string

Maximum length: `500`

#### Response

200

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-ok)

ok

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result)

result

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-owner-id)

OwnerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-id)

Id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-domain)

Domain

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-project-id)

ProjectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-note)

Note

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-is-project-rule)

IsProjectRule

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-result-ip)

Ip

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/create-system-bypass-rule#response-pagination)

pagination

any

required

[Read System Bypass](https://vercel.com/docs/rest-api/reference/endpoints/security/read-system-bypass) [Remove System Bypass Rule](https://vercel.com/docs/rest-api/reference/endpoints/security/remove-system-bypass-rule)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.