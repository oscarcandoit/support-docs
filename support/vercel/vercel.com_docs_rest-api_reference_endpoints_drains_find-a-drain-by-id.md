---
url: "https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id"
title: "Find a Drain by id - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

drains

Find a Drain by id

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


getDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.getDrain({
    id: "<id>",
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

# Find a Drain by id

Copy page

Get the information for a specific Drain by passing the drain id in the URL.

Copy page

GET

/

v1

/

drains

/

{id}

getDrain

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.getDrain({
    id: "<id>",
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#parameter-id)

id

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-source-kind)

source.kind

enum<string>

required

Available options:

`self-served`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-project-ids)

projectIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-schemas)

schemas

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-schemas-log)

schemas.log

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-schemas-trace)

schemas.trace

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-schemas-analytics)

schemas.analytics

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-schemas-speed-insights)

schemas.speed\_insights

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery)

delivery

object

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-type)

delivery.type

enum<string>

required

Available options:

`http`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-endpoint)

delivery.endpoint

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-encoding)

delivery.encoding

enum<string>

required

Available options:

`json`,

`ndjson`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-headers)

delivery.headers

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-compression)

delivery.compression

enum<string>

Available options:

`gzip`,

`none`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-delivery-secret)

delivery.secret

stringobject

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-sampling)

sampling

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-sampling-type)

type

enum<string>

required

Available options:

`head_sampling`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-sampling-rate)

rate

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-sampling-env)

env

enum<string>

Available options:

`production`,

`preview`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-sampling-request-path)

requestPath

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-team-id)

teamId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-status)

status

enum<string>

Available options:

`enabled`,

`disabled`,

`errored`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-disabled-at)

disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`account-plan-downgrade`,

`disabled-by-admin`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-disabled-by)

disabledBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-first-error-timestamp)

firstErrorTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-filter)

filter

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-filter-v2)

filterV2

object

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/find-a-drain-by-id#response-filter-v2-version)

filterV2.version

enum<string>

required

Available options:

`v1`

[Create a new Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain) [Delete a drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/delete-a-drain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.