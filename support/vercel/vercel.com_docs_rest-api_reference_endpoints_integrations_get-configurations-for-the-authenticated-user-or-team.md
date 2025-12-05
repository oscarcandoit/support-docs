---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team"
title: "Get configurations for the authenticated user or team - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

Get configurations for the authenticated user or team

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


getConfigurations

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfigurations({
    view: "account",
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
    "completedAt": 1558531915505,\
    "createdAt": 1558531915505,\
    "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",\
    "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",\
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "projects": [\
      "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"\
    ],\
    "source": "marketplace",\
    "slug": "slack",\
    "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",\
    "type": "integration-configuration",\
    "updatedAt": 1558531915505,\
    "userId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "scopes": [\
      "read:project",\
      "read-write:log-drain"\
    ],\
    "disabledAt": 1558531915505,\
    "deletedAt": 1558531915505,\
    "deleteRequestedAt": 1558531915505,\
    "disabledReason": "disabled-by-owner",\
    "installationType": "marketplace"\
  }\
]
```

integrations

# Get configurations for the authenticated user or team

Copy page

Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.

Copy page

GET

/

v1

/

integrations

/

configurations

getConfigurations

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getConfigurations({
    view: "account",
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
    "completedAt": 1558531915505,\
    "createdAt": 1558531915505,\
    "id": "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",\
    "integrationId": "oac_xzpVzcUOgcB1nrVlirtKhbWV",\
    "ownerId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "projects": [\
      "prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"\
    ],\
    "source": "marketplace",\
    "slug": "slack",\
    "teamId": "team_nLlpyC6RE1qxydlFKbrxDlud",\
    "type": "integration-configuration",\
    "updatedAt": 1558531915505,\
    "userId": "kr1PsOIzqEL5Xg6M4VZcZosf",\
    "scopes": [\
      "read:project",\
      "read-write:log-drain"\
    ],\
    "disabledAt": 1558531915505,\
    "deletedAt": 1558531915505,\
    "deleteRequestedAt": 1558531915505,\
    "disabledReason": "disabled-by-owner",\
    "installationType": "marketplace"\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#parameter-view)

view

enum<string>

required

Available options:

`account`,

`project`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#parameter-installation-type)

installationType

enum<string>

Available options:

`marketplace`,

`external`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#parameter-integration-id-or-slug)

integrationIdOrSlug

string

ID of the integration

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

- Option 1 · object\[\]

- Option 2 · object\[\]


The list of configurations for the authenticated user

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-completed-at)

completedAt

number

A timestamp that tells you when the configuration was installed successfully

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-created-at)

createdAt

number

A timestamp that tells you when the configuration was created

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-id)

id

string

The unique identifier of the configuration

Example:

`"icfg_3bwCLgxL8qt5kjRLcv2Dit7F"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-integration-id)

integrationId

string

The unique identifier of the app the configuration was created for

Example:

`"oac_xzpVzcUOgcB1nrVlirtKhbWV"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-owner-id)

ownerId

string

The user or team ID that owns the configuration

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-projects)

projects

string\[\]

When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.

Example:

```
["prj_xQxbutw1HpL6HLYPAzt5h75m8NjO"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-source)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-slug)

slug

string

The slug of the integration the configuration is created for.

Example:

`"slack"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-team-id)

teamId

string \| null

When the configuration was created for a team, this will show the ID of the team.

Example:

`"team_nLlpyC6RE1qxydlFKbrxDlud"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-type)

type

enum<string>

Available options:

`integration-configuration`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-updated-at)

updatedAt

number

A timestamp that tells you when the configuration was updated.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-user-id)

userId

string

The ID of the user that created the configuration.

Example:

`"kr1PsOIzqEL5Xg6M4VZcZosf"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-scopes)

scopes

string\[\]

The resources that are allowed to be accessed by the configuration.

Example:

```
["read:project", "read-write:log-drain"]
```

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-disabled-at)

disabledAt

number

A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-deleted-at)

deletedAt

number \| null

A timestamp that tells you when the configuration was deleted.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-delete-requested-at)

deleteRequestedAt

number \| null

A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.

Example:

`1558531915505`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-disabled-reason)

disabledReason

enum<string>

Available options:

`disabled-by-owner`,

`feature-not-available`,

`disabled-by-admin`,

`original-owner-left-the-team`,

`account-plan-downgrade`,

`original-owner-role-downgraded`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/get-configurations-for-the-authenticated-user-or-team#response-installation-type)

installationType

enum<string>

Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'

Available options:

`marketplace`,

`external`

[Connect integration resource to project](https://vercel.com/docs/rest-api/reference/endpoints/integrations/connect-integration-resource-to-project) [Retrieve an integration configuration](https://vercel.com/docs/rest-api/reference/endpoints/integrations/retrieve-an-integration-configuration)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.