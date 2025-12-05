---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation"
title: "Update Installation - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Update Installation

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


update-installation

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInstallation({
    integrationConfigurationId: "<id>",
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
This response has no body data.
```

marketplace

# Update Installation

Copy page

This endpoint updates an integration installation.

Copy page

PATCH

/

v1

/

installations

/

{integrationConfigurationId}

update-installation

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.updateInstallation({
    integrationConfigurationId: "<id>",
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
This response has no body data.
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan)

billingPlan

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-id)

billingPlan.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-type)

billingPlan.type

enum<string>

required

Available options:

`prepayment`,

`subscription`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-name)

billingPlan.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-description)

billingPlan.description

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-payment-method-required)

billingPlan.paymentMethodRequired

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-cost)

billingPlan.cost

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-details)

billingPlan.details

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-highlighted-details)

billingPlan.highlightedDetails

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-billing-plan-effective-date)

billingPlan.effectiveDate

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-notification)

notification

objectstring

A notification to display to your customer. Send `null` to clear the current notification.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-notification-level)

notification.level

enum<string>

required

Available options:

`info`,

`warn`,

`error`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-notification-title)

notification.title

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-notification-message)

notification.message

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-installation#body-notification-href)

notification.href

string<uri>

[Create integration store (free and paid plans)](https://vercel.com/docs/rest-api/reference/endpoints/integrations/create-integration-store-free-and-paid-plans) [Get Account Information](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-account-information)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.