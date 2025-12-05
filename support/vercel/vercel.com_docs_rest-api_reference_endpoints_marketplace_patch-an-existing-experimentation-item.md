---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item"
title: "Patch an existing experimentation item - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Patch an existing experimentation item

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

  - [PATCH\\
    \\
    Update Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation)
  - [GET\\
    \\
    Get Account Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information)
  - [GET\\
    \\
    Get Member Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-member-information)
  - [POST\\
    \\
    Create Event](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event)
  - [GET\\
    \\
    Get Integration Resources](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources)
  - [GET\\
    \\
    Get Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource)
  - [PUT\\
    \\
    Import Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/import-resource)
  - [DEL\\
    \\
    Delete Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-integration-resource)
  - [PATCH\\
    \\
    Update Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource)
  - [POST\\
    \\
    Submit Billing Data](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data)
  - [POST\\
    \\
    Submit Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice)
  - [GET\\
    \\
    Get Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice)
  - [POST\\
    \\
    Invoice Actions](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/invoice-actions)
  - [POST\\
    \\
    Submit Prepayment Balances](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-prepayment-balances)
  - [PUT\\
    \\
    Update Resource Secrets (Deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets-deprecated)
  - [PUT\\
    \\
    Update Resource Secrets](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource-secrets)
  - [POST\\
    \\
    Create one or multiple experimentation items](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-one-or-multiple-experimentation-items)
  - [DEL\\
    \\
    Delete an existing experimentation item](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-an-existing-experimentation-item)
  - [PATCH\\
    \\
    Patch an existing experimentation item](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item)
  - [PUT\\
    \\
    Push data into a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/push-data-into-a-user-provided-edge-config)
  - [HEAD\\
    \\
    Get the data of a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-the-data-of-a-user-provided-edge-config)
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


patch\_/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInstallationIntegrationConfiguration({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });

}

run();
```

204

400

401

403

404

Copy

Ask AI

```
This response does not have an example.
```

marketplace

# Patch an existing experimentation item

Copy page

Patch an existing experimentation item

Copy page

PATCH

/

v1

/

installations

/

{integrationConfigurationId}

/

resources

/

{resourceId}

/

experimentation

/

items

/

{itemId}

patch\_/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInstallationIntegrationConfiguration({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
    itemId: "<id>",
  });

}

run();
```

204

400

401

403

404

Copy

Ask AI

```
This response does not have an example.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#parameter-integration-configuration-id)

integrationConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#parameter-resource-id)

resourceId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#parameter-item-id)

itemId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-slug)

slug

string

required

Maximum length: `1024`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-origin)

origin

string

required

Maximum length: `2048`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-name)

name

string

Maximum length: `1024`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-category)

category

enum<string>

Available options:

`experiment`,

`flag`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-description)

description

string

Maximum length: `1024`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-is-archived)

isArchived

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-created-at)

createdAt

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/patch-an-existing-experimentation-item#body-updated-at)

updatedAt

number

#### Response

204

The item was updated

[Delete an existing experimentation item](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-an-existing-experimentation-item) [Push data into a user-provided Edge Config](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/push-data-into-a-user-provided-edge-config)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.