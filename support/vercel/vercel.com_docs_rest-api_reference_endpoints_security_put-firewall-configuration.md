---
url: "https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration"
title: "Put Firewall Configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

security

Put Firewall Configuration

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


putFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.putFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      firewallEnabled: true,
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
{
  "active": {
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
}
```

security

# Put Firewall Configuration

Copy page

Set the firewall configuration to provided rules and settings. Creates or overwrite the existing firewall configuration.

Copy page

PUT

/

v1

/

security

/

firewall

/

config

putFirewallConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.security.putFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      firewallEnabled: true,
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
{
  "active": {
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
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#parameter-project-id)

projectId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-firewall-enabled)

firewallEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-managed-rules)

managedRules

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-managed-rules-key)

managedRules.{key}

any

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs)

crs

object

Custom Ruleset

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-sd)

crs.sd

object

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-ma)

crs.ma

object

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-lfi)

crs.lfi

object

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-rfi)

crs.rfi

object

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-rce)

crs.rce

object

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-php)

crs.php

object

PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-gen)

crs.gen

object

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-xss)

crs.xss

object

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-sqli)

crs.sqli

object

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-sf)

crs.sf

object

Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-crs-java)

crs.java

object

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules)

rules

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-name)

name

string

required

Maximum length: `160`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-active)

active

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-condition-group)

conditionGroup

object\[\]

required

Maximum length: `25`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-action)

action

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-id)

id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-rules-description)

description

string

Maximum length: `256`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips)

ips

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips-hostname)

hostname

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips-ip)

ip

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips-action)

action

enum<string>

required

Available options:

`deny`,

`challenge`,

`log`,

`bypass`

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips-id)

id

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-ips-notes)

notes

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#body-bot-id-enabled)

botIdEnabled

boolean

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active)

active

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-owner-id)

active.ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-project-key)

active.projectKey

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-id)

active.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-version)

active.version

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-updated-at)

active.updatedAt

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-firewall-enabled)

active.firewallEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-crs)

active.crs

object

required

Custom Ruleset

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-rules)

active.rules

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-ips)

active.ips

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-changes)

active.changes

object\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-managed-rules)

active.managedRules

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/security/put-firewall-configuration#response-active-bot-id-enabled)

active.botIdEnabled

boolean

[Update Attack Challenge mode](https://vercel.com/docs/rest-api/reference/endpoints/security/update-attack-challenge-mode) [Update Firewall Configuration](https://vercel.com/docs/rest-api/reference/endpoints/security/update-firewall-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.