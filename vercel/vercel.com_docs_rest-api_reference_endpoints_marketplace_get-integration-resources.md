---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources"
title: "Get Integration Resources - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Get Integration Resources

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


get-integration-resources

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getIntegrationResources({
    integrationConfigurationId: "<id>",
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
  "resources": [\
    {\
      "partnerId": "<string>",\
      "internalId": "<string>",\
      "name": "<string>",\
      "status": "ready",\
      "productId": "<string>",\
      "protocolSettings": {\
        "experimentation": {\
          "edgeConfigSyncingEnabled": true,\
          "edgeConfigId": "<string>",\
          "edgeConfigTokenId": "<string>"\
        }\
      },\
      "notification": {\
        "level": "error",\
        "title": "<string>",\
        "message": "<string>",\
        "href": "<string>"\
      },\
      "billingPlanId": "<string>",\
      "metadata": {}\
    }\
  ]
}
```

marketplace

# Get Integration Resources

Copy page

Get all resources for a given installation ID.

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

get-integration-resources

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getIntegrationResources({
    integrationConfigurationId: "<id>",
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
  "resources": [\
    {\
      "partnerId": "<string>",\
      "internalId": "<string>",\
      "name": "<string>",\
      "status": "ready",\
      "productId": "<string>",\
      "protocolSettings": {\
        "experimentation": {\
          "edgeConfigSyncingEnabled": true,\
          "edgeConfigId": "<string>",\
          "edgeConfigTokenId": "<string>"\
        }\
      },\
      "notification": {\
        "level": "error",\
        "title": "<string>",\
        "message": "<string>",\
        "href": "<string>"\
      },\
      "billingPlanId": "<string>",\
      "metadata": {}\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources)

resources

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-partner-id)

partnerId

string

required

The ID provided by the partner for the given resource

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-internal-id)

internalId

string

required

The ID assigned by Vercel for the given resource

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-name)

name

string

required

The name of the resource as it is recorded in Vercel

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-product-id)

productId

string

required

The ID of the product the resource is derived from

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-status)

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-protocol-settings)

protocolSettings

object

Any settings provided for the resource to support its product's protocols

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-notification)

notification

object

The notification, if set, displayed to the user when viewing the resource in Vercel

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-billing-plan-id)

billingPlanId

string

The ID of the billing plan the resource is subscribed to, if applicable

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resources#response-resources-metadata)

metadata

object

The configured metadata for the resource as defined by its product's Metadata Schema

Show child attributes

[Create Event](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/create-event) [Get Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-integration-resource)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.