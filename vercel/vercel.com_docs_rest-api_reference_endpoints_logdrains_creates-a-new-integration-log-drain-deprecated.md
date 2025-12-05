---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated"
title: "Creates a new Integration Log Drain (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logDrains

Creates a new Integration Log Drain (deprecated)

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


createLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.createLogDrain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "My first log drain",
      secret: "a1Xsfd325fXcs",
      deliveryFormat: "json",
      url: "https://example.com/log-drain",
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

Copy

Ask AI

```
{
  "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",
  "configurationId": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  "createdAt": 1558531915505,
  "id": "ld_nBuA7zCID8g4QZ8g",
  "deliveryFormat": "json",
  "name": "My first log drain",
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "url": "https://example.com/log-drain",
  "sources": [\
    "build",\
    "edge"\
  ],
  "createdFrom": "integration",
  "headers": "{\"Authorization\": \"Bearer 123\"}",
  "environments": [\
    "production"\
  ],
  "branch": "feature/*",
  "samplingRate": 0.5,
  "source": {
    "kind": "self-served"
  }
}
```

logDrains

# Creates a new Integration Log Drain (deprecated)

Copy page

Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.

Copy page

POST

/

v2

/

integrations

/

log-drains

createLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.createLogDrain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "My first log drain",
      secret: "a1Xsfd325fXcs",
      deliveryFormat: "json",
      url: "https://example.com/log-drain",
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

Copy

Ask AI

```
{
  "clientId": "oac_xRhY4LAB7yLhUADD69EvV7ct",
  "configurationId": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  "createdAt": 1558531915505,
  "id": "ld_nBuA7zCID8g4QZ8g",
  "deliveryFormat": "json",
  "name": "My first log drain",
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "projectId": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "projectIds": "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  "url": "https://example.com/log-drain",
  "sources": [\
    "build",\
    "edge"\
  ],
  "createdFrom": "integration",
  "headers": "{\"Authorization\": \"Bearer 123\"}",
  "environments": [\
    "production"\
  ],
  "branch": "feature/*",
  "samplingRate": 0.5,
  "source": {
    "kind": "self-served"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-name)

name

string

required

The name of the log drain

Maximum length: `100`

Example:

`"My first log drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-url)

url

string<uri>

required

The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`.

Example:

`"https://example.com/log-drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-project-ids)

projectIds

string\[\]

Required array length: `1 - 50` elements

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-secret)

secret

string

A secret to sign log drain notification headers so a consumer can verify their authenticity

Maximum length: `100`

Example:

`"a1Xsfd325fXcs"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-delivery-format)

deliveryFormat

enum<string>

The delivery log format

Available options:

`json`,

`ndjson`

Example:

`"json"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-sources)

sources

enum<string>\[\]

Minimum length: `1`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter)

enum<string>

Available options:

`static`,

`lambda`,

`build`,

`edge`,

`external`,

`firewall`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-headers)

headers

object

Headers to be sent together with the request

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-headers-key)

headers.{key}

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#body-environments)

environments

enum<string>\[\]

Minimum length: `1`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter)

enum<string>

Available options:

`preview`,

`production`

#### Response

200

application/json

The log drain was successfully created

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-created-at)

createdAt

number

required

A timestamp that tells you when the log drain was created

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-id)

id

string

required

The unique identifier of the log drain. Always prefixed with `ld_`

Example:

`"ld_nBuA7zCID8g4QZ8g"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-name)

name

string

required

The name of the log drain

Example:

`"My first log drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-owner-id)

ownerId

string

required

The identifier of the team or user whose events will trigger the log drain

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-url)

url

string

required

The URL to call when logs are generated

Example:

`"https://example.com/log-drain"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-source-kind)

source.kind

enum<string>

required

Available options:

`self-served`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-client-id)

clientId

string

The oauth2 client application id that created this log drain

Example:

`"oac_xRhY4LAB7yLhUADD69EvV7ct"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-configuration-id)

configurationId

string

The client configuration this log drain was created with

Example:

`"icfg_3bwCLgxL8qt5kjRLcv2Dit7F"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-delivery-format)

deliveryFormat

enum<string>

The delivery log format

Available options:

`json`,

`ndjson`,

`protobuf`

Example:

`"json"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-project-id)

projectId

string \| null

Example:

`"AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-project-ids)

projectIds

string\[\]

The identifier of the projects this log drain is associated with

Example:

`"AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-sources)

sources

enum<string>\[\]

The sources from which logs are currently being delivered to this log drain.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter)

enum<string>

The sources from which logs are currently being delivered to this log drain.

Available options:

`build`,

`edge`,

`lambda`,

`static`,

`external`,

`firewall`,

`redirect`

Example:

```
["build", "edge"]
```

Example:

```
["build", "edge"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-created-from)

createdFrom

enum<string>

Whether the log drain was created by an integration or by a user

Available options:

`integration`,

`self-served`

Example:

`"integration"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-headers)

headers

object

The headers to send with the request

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-headers-key)

headers.{key}

string

Example:

`"{\"Authorization\": \"Bearer 123\"}"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-environments)

environments

enum<string>\[\]

The environment of log drain

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#parameter)

enum<string>

The environment of log drain

Available options:

`production`,

`preview`

Example:

```
["production"]
```

Example:

```
["production"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-branch)

branch

string

The branch regexp of log drain

Example:

`"feature/*"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-new-integration-log-drain-deprecated#response-sampling-rate)

samplingRate

number

The sampling rate of log drain

Example:

`0.5`

[Retrieves a list of Integration log drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated) [Deletes the Integration log drain with the provided \`id\` (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-the-integration-log-drain-with-the-provided-%60id%60-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.