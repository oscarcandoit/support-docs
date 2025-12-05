---
url: "https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated"
title: "Retrieves a list of all the Log Drains (deprecated) - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

logDrains

Retrieves a list of all the Log Drains (deprecated)

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


getAllLogDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.getAllLogDrains({
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
  "drains": [\
    {\
      "id": "<string>",\
      "ownerId": "<string>",\
      "name": "<string>",\
      "createdAt": 123,\
      "updatedAt": 123,\
      "projectIds": [\
        "<string>"\
      ],\
      "schemas": {\
        "log": {},\
        "trace": {},\
        "analytics": {},\
        "speed_insights": {}\
      },\
      "delivery": {\
        "type": "http",\
        "endpoint": "<string>",\
        "encoding": "json",\
        "compression": "gzip",\
        "headers": {},\
        "secret": "<string>"\
      },\
      "sampling": [\
        {\
          "type": "head_sampling",\
          "rate": 123,\
          "env": "production",\
          "requestPath": "<string>"\
        }\
      ],\
      "teamId": "<string>",\
      "status": "enabled",\
      "disabledAt": 123,\
      "disabledReason": "disabled-by-owner",\
      "disabledBy": "<string>",\
      "firstErrorTimestamp": 123,\
      "source": {\
        "kind": "self-served"\
      },\
      "filter": "<string>",\
      "filterV2": {\
        "version": "v1"\
      }\
    }\
  ]
}
```

logDrains

# Retrieves a list of all the Log Drains (deprecated)

Copy page

Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.

Copy page

GET

/

v1

/

log-drains

getAllLogDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.logDrains.getAllLogDrains({
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
  "drains": [\
    {\
      "id": "<string>",\
      "ownerId": "<string>",\
      "name": "<string>",\
      "createdAt": 123,\
      "updatedAt": 123,\
      "projectIds": [\
        "<string>"\
      ],\
      "schemas": {\
        "log": {},\
        "trace": {},\
        "analytics": {},\
        "speed_insights": {}\
      },\
      "delivery": {\
        "type": "http",\
        "endpoint": "<string>",\
        "encoding": "json",\
        "compression": "gzip",\
        "headers": {},\
        "secret": "<string>"\
      },\
      "sampling": [\
        {\
          "type": "head_sampling",\
          "rate": 123,\
          "env": "production",\
          "requestPath": "<string>"\
        }\
      ],\
      "teamId": "<string>",\
      "status": "enabled",\
      "disabledAt": 123,\
      "disabledReason": "disabled-by-owner",\
      "disabledBy": "<string>",\
      "firstErrorTimestamp": 123,\
      "source": {\
        "kind": "self-served"\
      },\
      "filter": "<string>",\
      "filterV2": {\
        "version": "v1"\
      }\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#parameter-project-id)

projectId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#parameter-include-metadata)

includeMetadata

boolean

default:false

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#parameter-project-id-or-name)

projectIdOrName

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- object

- object\[\]


[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains)

drains

Option 1 · object\[\]Option 2 · object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-project-ids)

projectIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-schemas)

schemas

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-delivery)

delivery

object

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-sampling)

sampling

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-team-id)

teamId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-status)

status

enum<string>

Available options:

`enabled`,

`disabled`,

`errored`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-disabled-at)

disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`account-plan-downgrade`,

`disabled-by-admin`

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-disabled-by)

disabledBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-first-error-timestamp)

firstErrorTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-filter)

filter

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/retrieves-a-list-of-all-the-log-drains-deprecated#response-drains-filter-v2)

filterV2

object

- Option 1

- Option 2


Show child attributes

[Deletes a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-a-configurable-log-drain-deprecated) [Creates a Configurable Log Drain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/creates-a-configurable-log-drain-deprecated)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.