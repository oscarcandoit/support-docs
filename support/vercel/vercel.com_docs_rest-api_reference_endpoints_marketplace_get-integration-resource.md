---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource"
title: "Get Integration Resource - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Get Integration Resource

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


get-integration-resource

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getIntegrationResource({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
  "internalId": "<string>",
  "name": "<string>",
  "status": "ready",
  "productId": "<string>",
  "protocolSettings": {
    "experimentation": {
      "edgeConfigSyncingEnabled": true,
      "edgeConfigId": "<string>",
      "edgeConfigTokenId": "<string>"
    }
  },
  "notification": {
    "level": "error",
    "title": "<string>",
    "message": "<string>",
    "href": "<string>"
  },
  "billingPlanId": "<string>",
  "metadata": {}
}
```

marketplace

# Get Integration Resource

Copy page

Get a resource by its partner ID.

Copy page

GET

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

get-integration-resource

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getIntegrationResource({
    integrationConfigurationId: "<id>",
    resourceId: "<id>",
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
  "internalId": "<string>",
  "name": "<string>",
  "status": "ready",
  "productId": "<string>",
  "protocolSettings": {
    "experimentation": {
      "edgeConfigSyncingEnabled": true,
      "edgeConfigId": "<string>",
      "edgeConfigTokenId": "<string>"
    }
  },
  "notification": {
    "level": "error",
    "title": "<string>",
    "message": "<string>",
    "href": "<string>"
  },
  "billingPlanId": "<string>",
  "metadata": {}
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#parameter-integration-configuration-id)

integrationConfigurationId

string

required

The ID of the integration configuration (installation) the resource belongs to

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#parameter-resource-id)

resourceId

string

required

The ID provided by the 3rd party provider for the given resource

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-id)

id

string

required

The ID provided by the 3rd party provider for the given resource

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-internal-id)

internalId

string

required

The ID assigned by Vercel for the given resource

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-name)

name

string

required

The name of the resource as it is recorded in Vercel

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-product-id)

productId

string

required

The ID of the product the resource is derived from

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-status)

status

enum<string>

The current status of the resource

Available options:

`ready`,

`pending`,

`onboarding`,

`suspended`,

`resumed`,

`uninstalled`,

`error`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-protocol-settings)

protocolSettings

object

Any settings provided for the resource to support its product's protocols

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-protocol-settings-experimentation)

protocolSettings.experimentation

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-notification)

notification

object

The notification, if set, displayed to the user when viewing the resource in Vercel

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-notification-level)

notification.level

enum<string>

required

Available options:

`error`,

`info`,

`warn`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-notification-title)

notification.title

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-notification-message)

notification.message

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-notification-href)

notification.href

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-billing-plan-id)

billingPlanId

string

The ID of the billing plan the resource is subscribed to, if applicable

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-metadata)

metadata

object

The configured metadata for the resource as defined by its product's Metadata Schema

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource#response-metadata-key)

metadata.{key}

stringnumberbooleanstring\[\]number\[\]

[Get Integration Resources](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources) [Import Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/import-resource)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.