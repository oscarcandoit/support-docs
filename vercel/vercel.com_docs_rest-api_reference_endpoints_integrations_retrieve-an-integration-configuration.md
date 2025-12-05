---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration"
title: "Retrieve an integration configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

Retrieve an integration configuration

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

  - [GET\\
    \\
    List integration billing plans](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans)
  - [POST\\
    \\
    Connect integration resource to project](https://vercel.com/docs/rest-api/reference/endpoints/integrations/connect-integration-resource-to-project)
  - [GET\\
    \\
    Get configurations for the authenticated user or team](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team)
  - [GET\\
    \\
    Retrieve an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration)
  - [DEL\\
    \\
    Delete an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration)
  - [GET\\
    \\
    List products for integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-products-for-integration-configuration)
  - [POST\\
    \\
    Create integration store (free and paid plans)](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans)
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


getConfiguration

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfiguration({
    id: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
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
  "projectSelection": "all",
  "notification": {
    "level": "info",
    "title": "<string>",
    "message": "<string>",
    "href": "<string>"
  },
  "transferRequest": {
    "kind": "transfer-to-marketplace",
    "metadata": {},
    "billingPlan": {
      "id": "<string>",
      "type": "subscription",
      "scope": "installation",
      "name": "<string>",
      "description": "<string>",
      "paymentMethodRequired": true,
      "preauthorizationAmount": 123
    },
    "requestId": "<string>",
    "transferId": "<string>",
    "requester": {
      "name": "<string>",
      "email": "<string>"
    },
    "createdAt": 123,
    "expiresAt": 123,
    "discardedAt": 123,
    "discardedBy": "<string>",
    "approvedAt": 123,
    "approvedBy": "<string>",
    "authorizationId": "<string>"
  },
  "projects": [\
    "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"\
  ],
  "createdAt": 1558531915505,
  "completedAt": 1558531915505,
  "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "slug": "slack",
  "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",
  "updatedAt": 1558531915505,
  "userId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "scopes": [\
    "read:project",\
    "read-write:log-drain"\
  ],
  "disabledAt": 1558531915505,
  "disabledReason": "disabled-by-owner",
  "source": "marketplace",
  "canConfigureOpenTelemetry": true,
  "installationType": "marketplace",
  "deleteRequestedAt": 1558531915505,
  "type": "integration-configuration",
  "deletedAt": 1558531915505
}
```

integrations

# Retrieve an integration configuration

Copy page

Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.

Copy page

GET

/

v1

/

integrations

/

configuration

/

{id}

getConfiguration

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfiguration({
    id: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
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
  "projectSelection": "all",
  "notification": {
    "level": "info",
    "title": "<string>",
    "message": "<string>",
    "href": "<string>"
  },
  "transferRequest": {
    "kind": "transfer-to-marketplace",
    "metadata": {},
    "billingPlan": {
      "id": "<string>",
      "type": "subscription",
      "scope": "installation",
      "name": "<string>",
      "description": "<string>",
      "paymentMethodRequired": true,
      "preauthorizationAmount": 123
    },
    "requestId": "<string>",
    "transferId": "<string>",
    "requester": {
      "name": "<string>",
      "email": "<string>"
    },
    "createdAt": 123,
    "expiresAt": 123,
    "discardedAt": 123,
    "discardedBy": "<string>",
    "approvedAt": 123,
    "approvedBy": "<string>",
    "authorizationId": "<string>"
  },
  "projects": [\
    "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"\
  ],
  "createdAt": 1558531915505,
  "completedAt": 1558531915505,
  "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",
  "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "slug": "slack",
  "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",
  "updatedAt": 1558531915505,
  "userId": "kr1PsOIzqEL5Xg6M4VZcZosf",
  "scopes": [\
    "read:project",\
    "read-write:log-drain"\
  ],
  "disabledAt": 1558531915505,
  "disabledReason": "disabled-by-owner",
  "source": "marketplace",
  "canConfigureOpenTelemetry": true,
  "installationType": "marketplace",
  "deleteRequestedAt": 1558531915505,
  "type": "integration-configuration",
  "deletedAt": 1558531915505
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#parameter-id)

id

string

required

ID of the configuration to check

Example:

`"icfg_cuwj0AdCdH3BwWT4LPijCC7t"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

The configuration with the provided id

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-project-selection)

projectSelection

enum<string>

required

A string representing the permission for projects. Possible values are `all` or `selected`.

Available options:

`selected`,

`all`

Example:

`"all"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-notification)

notification

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-notification-level)

notification.level

enum<string>

required

Available options:

`info`,

`warn`,

`error`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-notification-title)

notification.title

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-notification-message)

notification.message

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-notification-href)

notification.href

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request)

transferRequest

object

required

- Option 1

- Option 2


Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-kind)

transferRequest.kind

enum<string>

required

Available options:

`transfer-to-marketplace`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-request-id)

transferRequest.requestId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-transfer-id)

transferRequest.transferId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-requester)

transferRequest.requester

object

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-created-at)

transferRequest.createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-expires-at)

transferRequest.expiresAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-metadata)

transferRequest.metadata

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-billing-plan)

transferRequest.billingPlan

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-discarded-at)

transferRequest.discardedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-discarded-by)

transferRequest.discardedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-approved-at)

transferRequest.approvedAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-approved-by)

transferRequest.approvedBy

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-transfer-request-authorization-id)

transferRequest.authorizationId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-created-at)

createdAt

number

required

A timestamp that tells you when the configuration was created

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-id)

id

string

required

The unique identifier of the configuration

Example:

`"icfg_3bwCLgxL8qt5kjRLcv2Dit7F"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-integration-id)

integrationId

string

required

The unique identifier of the app the configuration was created for

Example:

`"oac_xzpVzcUOgcB1nrVlirtKhbWV"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-owner-id)

ownerId

string

required

The user or team ID that owns the configuration

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-slug)

slug

string

required

The slug of the integration the configuration is created for.

Example:

`"slack"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-updated-at)

updatedAt

number

required

A timestamp that tells you when the configuration was updated.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-user-id)

userId

string

required

The ID of the user that created the configuration.

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-scopes)

scopes

string\[\]

required

The resources that are allowed to be accessed by the configuration.

Example:

```
["read:project", "read-write:log-drain"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-type)

type

enum<string>

required

Available options:

`integration-configuration`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-projects)

projects

string\[\]

When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.

Example:

```
["prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-completed-at)

completedAt

number

A timestamp that tells you when the configuration was installed successfully

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-team-id)

teamId

string \| null

When the configuration was created for a team, this will show the ID of the team.

Example:

`"team_nLlpyC6RE1qxydlFKbrxDlud"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-disabled-at)

disabledAt

number

A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`disabled-by-admin`,

`original-owner-left-the-team`,

`account-plan-downgrade`,

`original-owner-role-downgraded`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-source)

source

enum<string>

Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.

Available options:

`marketplace`,

`deploy-button`,

`external`,

`v0`,

`resource-claims`

Example:

`"marketplace"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-can-configure-open-telemetry)

canConfigureOpenTelemetry

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-installation-type)

installationType

enum<string>

Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'

Available options:

`marketplace`,

`external`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-delete-requested-at)

deleteRequestedAt

number \| null

A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration#response-deleted-at)

deletedAt

number \| null

A timestamp that tells you when the configuration was deleted.

Example:

`1558531915505`

[Get configurations for the authenticated user or team](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team) [Delete an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/delete-an-integration-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.