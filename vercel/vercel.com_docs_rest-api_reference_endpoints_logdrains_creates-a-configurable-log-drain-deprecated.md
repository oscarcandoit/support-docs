---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated"
title: "Creates a Configurable Log Drain (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logDrains

Creates a Configurable Log Drain (deprecated)

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


createConfigurableLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.createConfigurableLogDrain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      deliveryFormat: "json",
      url: "https://wavy-meander.net",
      sources: [],
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
{}
```

logDrains

# Creates a Configurable Log Drain (deprecated)

Copy page

Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)

Copy page

POST

/

v1

/

log-drains

createConfigurableLogDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.createConfigurableLogDrain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      deliveryFormat: "json",
      url: "https://wavy-meander.net",
      sources: [],
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
{}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-delivery-format)

deliveryFormat

enum<string>

required

The delivery log format

Available options:

`json`,

`ndjson`

Example:

`"json"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-url)

url

string<uri>

required

The log drain url

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-sources)

sources

enum<string>\[\]

required

Minimum length: `1`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#parameter)

enum<string>

Available options:

`static`,

`lambda`,

`build`,

`edge`,

`external`,

`firewall`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-headers)

headers

object

Headers to be sent together with the request

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-headers-key)

headers.{key}

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-project-ids)

projectIds

string\[\]

Required array length: `1 - 50` elements

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-environments)

environments

enum<string>\[\]

Minimum length: `1`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#parameter)

enum<string>

Available options:

`preview`,

`production`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-secret)

secret

string

Custom secret of log drain

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-sampling-rate)

samplingRate

number

The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points

Required range: `0.01 <= x <= 1`Must be a multiple of `0.01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated#body-name)

name

string

The custom name of this log drain.

#### Response

200

application/json

The response is of type `object`.

[Retrieves a list of all the Log Drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated) [Retrieves a list of Integration log drains (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-integration-log-drains-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.