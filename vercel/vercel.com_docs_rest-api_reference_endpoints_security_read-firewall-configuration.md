---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration"
title: "Read Firewall Configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Read Firewall Configuration

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


getFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
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
  "ownerId": "<string>",
  "projectKey": "<string>",
  "id": "<string>",
  "version": 123,
  "updatedAt": "<string>",
  "firewallEnabled": true,
  "crs": {
    "sd": {
      "active": true,
      "action": "deny"
    },
    "ma": {
      "active": true,
      "action": "deny"
    },
    "lfi": {
      "active": true,
      "action": "deny"
    },
    "rfi": {
      "active": true,
      "action": "deny"
    },
    "rce": {
      "active": true,
      "action": "deny"
    },
    "php": {
      "active": true,
      "action": "deny"
    },
    "gen": {
      "active": true,
      "action": "deny"
    },
    "xss": {
      "active": true,
      "action": "deny"
    },
    "sqli": {
      "active": true,
      "action": "deny"
    },
    "sf": {
      "active": true,
      "action": "deny"
    },
    "java": {
      "active": true,
      "action": "deny"
    }
  },
  "rules": [\
    {\
      "id": "<string>",\
      "name": "<string>",\
      "description": "<string>",\
      "active": true,\
      "conditionGroup": [\
        {\
          "conditions": [\
            {\
              "type": "host",\
              "op": "re",\
              "neg": true,\
              "key": "<string>",\
              "value": "<string>"\
            }\
          ]\
        }\
      ],\
      "action": {\
        "mitigate": {\
          "action": "deny",\
          "rateLimit": {\
            "algo": "fixed_window",\
            "window": 123,\
            "limit": 123,\
            "keys": [\
              "<string>"\
            ],\
            "action": "deny"\
          },\
          "redirect": {\
            "location": "<string>",\
            "permanent": true\
          },\
          "actionDuration": "<string>",\
          "bypassSystem": true\
        }\
      }\
    }\
  ],
  "ips": [\
    {\
      "id": "<string>",\
      "hostname": "<string>",\
      "ip": "<string>",\
      "notes": "<string>",\
      "action": "deny"\
    }\
  ],
  "changes": [\
    {}\
  ],
  "managedRules": {
    "bot_protection": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    },
    "ai_bots": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    },
    "owasp": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    }
  },
  "botIdEnabled": true
}
```

security

# Read Firewall Configuration

Copy page

Retrieve the specified firewall configuration for a project. The deployed configVersion will be `active`

Copy page

GET

/

v1

/

security

/

firewall

/

config

/

{configVersion}

getFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.getFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
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
  "ownerId": "<string>",
  "projectKey": "<string>",
  "id": "<string>",
  "version": 123,
  "updatedAt": "<string>",
  "firewallEnabled": true,
  "crs": {
    "sd": {
      "active": true,
      "action": "deny"
    },
    "ma": {
      "active": true,
      "action": "deny"
    },
    "lfi": {
      "active": true,
      "action": "deny"
    },
    "rfi": {
      "active": true,
      "action": "deny"
    },
    "rce": {
      "active": true,
      "action": "deny"
    },
    "php": {
      "active": true,
      "action": "deny"
    },
    "gen": {
      "active": true,
      "action": "deny"
    },
    "xss": {
      "active": true,
      "action": "deny"
    },
    "sqli": {
      "active": true,
      "action": "deny"
    },
    "sf": {
      "active": true,
      "action": "deny"
    },
    "java": {
      "active": true,
      "action": "deny"
    }
  },
  "rules": [\
    {\
      "id": "<string>",\
      "name": "<string>",\
      "description": "<string>",\
      "active": true,\
      "conditionGroup": [\
        {\
          "conditions": [\
            {\
              "type": "host",\
              "op": "re",\
              "neg": true,\
              "key": "<string>",\
              "value": "<string>"\
            }\
          ]\
        }\
      ],\
      "action": {\
        "mitigate": {\
          "action": "deny",\
          "rateLimit": {\
            "algo": "fixed_window",\
            "window": 123,\
            "limit": 123,\
            "keys": [\
              "<string>"\
            ],\
            "action": "deny"\
          },\
          "redirect": {\
            "location": "<string>",\
            "permanent": true\
          },\
          "actionDuration": "<string>",\
          "bypassSystem": true\
        }\
      }\
    }\
  ],
  "ips": [\
    {\
      "id": "<string>",\
      "hostname": "<string>",\
      "ip": "<string>",\
      "notes": "<string>",\
      "action": "deny"\
    }\
  ],
  "changes": [\
    {}\
  ],
  "managedRules": {
    "bot_protection": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    },
    "ai_bots": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    },
    "owasp": {
      "active": true,
      "action": "deny",
      "updatedAt": "<string>",
      "userId": "<string>",
      "username": "<string>"
    }
  },
  "botIdEnabled": true
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#parameter-config-version)

configVersion

string

required

The deployed configVersion for the firewall configuration

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-project-key)

projectKey

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-version)

version

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-updated-at)

updatedAt

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-firewall-enabled)

firewallEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs)

crs

object

required

Custom Ruleset

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-sd)

crs.sd

object

required

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-ma)

crs.ma

object

required

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-lfi)

crs.lfi

object

required

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-rfi)

crs.rfi

object

required

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-rce)

crs.rce

object

required

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-php)

crs.php

object

required

PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-gen)

crs.gen

object

required

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-xss)

crs.xss

object

required

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-sqli)

crs.sqli

object

required

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-sf)

crs.sf

object

required

Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-crs-java)

crs.java

object

required

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules)

rules

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-active)

active

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-condition-group)

conditionGroup

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-action)

action

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-rules-description)

description

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips)

ips

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips-hostname)

hostname

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips-ip)

ip

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips-action)

action

enum<string>

required

Available options:

`deny`,

`log`,

`challenge`,

`bypass`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-ips-notes)

notes

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-changes)

changes

object\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-managed-rules)

managedRules

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-managed-rules-bot-protection)

managedRules.bot\_protection

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-managed-rules-ai-bots)

managedRules.ai\_bots

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-managed-rules-owasp)

managedRules.owasp

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/read-firewall-configuration#response-bot-id-enabled)

botIdEnabled

boolean

[Update Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration) [Read active attack data](https://vercel.com/docs/rest-api/reference/endpoints/security/read-active-attack-data)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.