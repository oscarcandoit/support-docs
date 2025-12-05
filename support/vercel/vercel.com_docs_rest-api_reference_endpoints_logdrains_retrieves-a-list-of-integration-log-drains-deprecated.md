---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated"
title: "Retrieves a list of Integration log drains (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logDrains

Retrieves a list of Integration log drains (deprecated)

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

  - [GET\\
    \\
    Retrieves a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-configurable-log-drain-deprecated)
  - [DEL\\
    \\
    Deletes a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated)
  - [GET\\
    \\
    Retrieves a list of all the Log Drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated)
  - [POST\\
    \\
    Creates a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated)
  - [GET\\
    \\
    Retrieves a list of Integration log drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated)
  - [POST\\
    \\
    Creates a new Integration Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated)
  - [DEL\\
    \\
    Deletes the Integration log drain with the provided \`id\` (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-the-integration-log-drain-with-the-provided-%60id%60-deprecated)
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


getIntegrationLogDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.getIntegrationLogDrains({
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

Copy

Ask AI

```
[\
  {\
    "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",\
    "configurationId": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",\
    "createdAt": 1558531915505,\
    "id": "ld_nBuA7zCID8g4QZ8g",\
    "deliveryFormat": "json",\
    "name": "My first log drain",\
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",\
    "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",\
    "url": "https://example.com/log-drain",\
    "sources": [\
      "build",\
      "edge"\
    ],\
    "createdFrom": "integration",\
    "headers": "{\"Authorization\": \"Bearer 123\"}",\
    "environments": [\
      "production"\
    ],\
    "branch": "feature/*",\
    "samplingRate": 0.5,\
    "source": {\
      "kind": "self-served"\
    }\
  }\
]
```

logDrains

# Retrieves a list of Integration log drains (deprecated)

Copy page

Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.

Copy page

GET

/

v2

/

integrations

/

log-drains

getIntegrationLogDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.getIntegrationLogDrains({
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

Copy

Ask AI

```
[\
  {\
    "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",\
    "configurationId": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",\
    "createdAt": 1558531915505,\
    "id": "ld_nBuA7zCID8g4QZ8g",\
    "deliveryFormat": "json",\
    "name": "My first log drain",\
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",\
    "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",\
    "url": "https://example.com/log-drain",\
    "sources": [\
      "build",\
      "edge"\
    ],\
    "createdFrom": "integration",\
    "headers": "{\"Authorization\": \"Bearer 123\"}",\
    "environments": [\
      "production"\
    ],\
    "branch": "feature/*",\
    "samplingRate": 0.5,\
    "source": {\
      "kind": "self-served"\
    }\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

A list of log drains

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-created-at)

createdAt

number

required

A timestamp that tells you when the log drain was created

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-id)

id

string

required

The unique identifier of the log drain. Always prefixed with `ld_`

Example:

`"ld_nBuA7zCID8g4QZ8g"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-name)

name

string

required

The name of the log drain

Example:

`"My first log drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-owner-id)

ownerId

string

required

The identifier of the team or user whose events will trigger the log drain

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-url)

url

string

required

The URL to call when logs are generated

Example:

`"https://example.com/log-drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-client-id)

clientId

string

The oauth2 client application id that created this log drain

Example:

`"oac_xRhY4LAB7yLhUADD69EvV7ct"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-configuration-id)

configurationId

string

The client configuration this log drain was created with

Example:

`"icfg_3bwCLgxL8qt5kjRLcv2Dit7F"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-delivery-format)

deliveryFormat

enum<string>

The delivery log format

Available options:

`json`,

`ndjson`,

`protobuf`

Example:

`"json"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-project-id)

projectId

string \| null

Example:

`"AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-project-ids)

projectIds

string\[\]

The identifier of the projects this log drain is associated with

Example:

`"AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-sources)

sources

enum<string>\[\]

The sources from which logs are currently being delivered to this log drain.

Show child attributes

Example:

```
["build", "edge"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-created-from)

createdFrom

enum<string>

Whether the log drain was created by an integration or by a user

Available options:

`integration`,

`self-served`

Example:

`"integration"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-headers)

headers

object

The headers to send with the request

Show child attributes

Example:

`"{\"Authorization\": \"Bearer 123\"}"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-environments)

environments

enum<string>\[\]

The environment of log drain

Show child attributes

Example:

```
["production"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-branch)

branch

string

The branch regexp of log drain

Example:

`"feature/*"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated#response-sampling-rate)

samplingRate

number

The sampling rate of log drain

Example:

`0.5`

[Creates a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated) [Creates a new Integration Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.