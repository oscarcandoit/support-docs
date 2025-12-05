---
url: "https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain"
title: "Create a new Drain - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

drains

Create a new Drain

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

  - [GET\\
    \\
    Retrieve a list of all Drains](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains)
  - [POST\\
    \\
    Create a new Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain)
  - [GET\\
    \\
    Find a Drain by id](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id)
  - [DEL\\
    \\
    Delete a drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain)
  - [PATCH\\
    \\
    Update an existing Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/update-an-existing-drain)
  - [POST\\
    \\
    Validate Drain delivery configuration](https://vercel.com/docs/rest-api/reference/endpoints/drains/validate-drain-delivery-configuration)
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


createDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.createDrain({
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
{
  "id": "<string>",
  "ownerId": "<string>",
  "name": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "projectIds": [\
    "<string>"\
  ],
  "schemas": {
    "log": {},
    "trace": {},
    "analytics": {},
    "speed_insights": {}
  },
  "delivery": {
    "type": "http",
    "endpoint": "<string>",
    "encoding": "json",
    "compression": "gzip",
    "headers": {},
    "secret": "<string>"
  },
  "sampling": [\
    {\
      "type": "head_sampling",\
      "rate": 123,\
      "env": "production",\
      "requestPath": "<string>"\
    }\
  ],
  "teamId": "<string>",
  "status": "enabled",
  "disabledAt": 123,
  "disabledReason": "disabled-by-owner",
  "disabledBy": "<string>",
  "firstErrorTimestamp": 123,
  "source": {
    "kind": "self-served"
  },
  "filter": "<string>",
  "filterV2": {
    "version": "v1"
  }
}
```

drains

# Create a new Drain

Copy page

Create a new Drain with the provided configuration.

Copy page

POST

/

v1

/

drains

createDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.createDrain({
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
{
  "id": "<string>",
  "ownerId": "<string>",
  "name": "<string>",
  "createdAt": 123,
  "updatedAt": 123,
  "projectIds": [\
    "<string>"\
  ],
  "schemas": {
    "log": {},
    "trace": {},
    "analytics": {},
    "speed_insights": {}
  },
  "delivery": {
    "type": "http",
    "endpoint": "<string>",
    "encoding": "json",
    "compression": "gzip",
    "headers": {},
    "secret": "<string>"
  },
  "sampling": [\
    {\
      "type": "head_sampling",\
      "rate": 123,\
      "env": "production",\
      "requestPath": "<string>"\
    }\
  ],
  "teamId": "<string>",
  "status": "enabled",
  "disabledAt": 123,
  "disabledReason": "disabled-by-owner",
  "disabledBy": "<string>",
  "firstErrorTimestamp": 123,
  "source": {
    "kind": "self-served"
  },
  "filter": "<string>",
  "filterV2": {
    "version": "v1"
  }
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-projects)

projects

enum<string>

required

Available options:

`some`,

`all`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-schemas)

schemas

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-schemas-key)

schemas.{key}

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-project-ids)

projectIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-filter)

filter

stringobject

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery)

delivery

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-type)

delivery.type

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-endpoint)

delivery.endpoint

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-encoding)

delivery.encoding

enum<string>

required

Available options:

`json`,

`ndjson`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-headers)

delivery.headers

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-compression)

delivery.compression

enum<string>

Available options:

`gzip`,

`none`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-delivery-secret)

delivery.secret

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-sampling)

sampling

object\[\]

Maximum length: `10`

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-sampling-type)

type

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-sampling-rate)

rate

number

required

Sampling rate from 0 to 1 (e.g., 0.1 for 10%)

Required range: `0 <= x <= 1`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-sampling-env)

env

enum<string>

Environment to apply sampling to

Available options:

`production`,

`preview`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-sampling-request-path)

requestPath

string

Request path prefix to apply the sampling rule to

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-transforms)

transforms

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-transforms-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-source)

source

object

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-source-external-resource-id)

source.externalResourceId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#body-source-kind)

source.kind

string

default:integration

#### Response

200

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-source-kind)

source.kind

enum<string>

required

Available options:

`self-served`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-project-ids)

projectIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-schemas)

schemas

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-schemas-log)

schemas.log

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-schemas-trace)

schemas.trace

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-schemas-analytics)

schemas.analytics

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-schemas-speed-insights)

schemas.speed\_insights

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery)

delivery

object

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-type)

delivery.type

enum<string>

required

Available options:

`http`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-endpoint)

delivery.endpoint

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-encoding)

delivery.encoding

enum<string>

required

Available options:

`json`,

`ndjson`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-headers)

delivery.headers

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-compression)

delivery.compression

enum<string>

Available options:

`gzip`,

`none`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-delivery-secret)

delivery.secret

stringobject

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-sampling)

sampling

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-sampling-type)

type

enum<string>

required

Available options:

`head_sampling`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-sampling-rate)

rate

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-sampling-env)

env

enum<string>

Available options:

`production`,

`preview`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-sampling-request-path)

requestPath

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-team-id)

teamId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-status)

status

enum<string>

Available options:

`enabled`,

`disabled`,

`errored`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-disabled-at)

disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`account-plan-downgrade`,

`disabled-by-admin`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-disabled-by)

disabledBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-first-error-timestamp)

firstErrorTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-filter)

filter

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-filter-v2)

filterV2

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain#response-filter-v2-version)

filterV2.version

enum<string>

required

Available options:

`v1`

[Retrieve a list of all Drains](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains) [Find a Drain by id](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.