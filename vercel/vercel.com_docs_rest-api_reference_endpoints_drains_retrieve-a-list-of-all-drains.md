---
url: "https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains"
title: "Retrieve a list of all Drains - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

drains

Retrieve a list of all Drains

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


getDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.getDrains({
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

drains

# Retrieve a list of all Drains

Copy page

Allows to retrieve the list of Drains of the authenticated team.

Copy page

GET

/

v1

/

drains

getDrains

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.drains.getDrains({
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

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#parameter-project-id)

projectId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#parameter-include-metadata)

includeMetadata

boolean

default:false

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains)

drains

Option 1 · object\[\]Option 2 · object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-owner-id)

ownerId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-source)

source

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-project-ids)

projectIds

string\[\]

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-schemas)

schemas

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-delivery)

delivery

object

- Option 1

- Option 2

- Option 3

- Option 4


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-sampling)

sampling

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-team-id)

teamId

string \| null

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-status)

status

enum<string>

Available options:

`enabled`,

`disabled`,

`errored`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-disabled-at)

disabledAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`account-plan-downgrade`,

`disabled-by-admin`

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-disabled-by)

disabledBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-first-error-timestamp)

firstErrorTimestamp

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-filter)

filter

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/drains/retrieve-a-list-of-all-drains#response-drains-filter-v2)

filterV2

object

- Option 1

- Option 2


Show child attributes

[Deletes the Integration log drain with the provided \`id\` (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/logdrains/deletes-the-integration-log-drain-with-the-provided-%60id%60-deprecated) [Create a new Drain](https://vercel.com/docs/rest-api/reference/endpoints/drains/create-a-new-drain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.