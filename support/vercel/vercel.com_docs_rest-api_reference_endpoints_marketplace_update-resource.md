---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource"
title: "Update Resource - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Update Resource

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


update-resource

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.updateResource({
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

409

422

Copy

Ask AI

```
{
  "name": "<string>"
}
```

marketplace

# Update Resource

Copy page

This endpoint updates an existing resource in the installation. All parameters are optional, allowing partial updates.

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

update-resource

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.updateResource({
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

409

422

Copy

Ask AI

```
{
  "name": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#parameter-integration-configuration-id)

integrationConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#parameter-resource-id)

resourceId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-ownership)

ownership

enum<string>

Available options:

`owned`,

`linked`,

`sandbox`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-name)

name

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-status)

status

enum<string>

Available options:

`ready`,

`pending`,

`onboarding`,

`suspended`,

`resumed`,

`uninstalled`,

`error`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-metadata)

metadata

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan)

billingPlan

object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-id)

billingPlan.id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-type)

billingPlan.type

enum<string>

required

Available options:

`prepayment`,

`subscription`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-name)

billingPlan.name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-description)

billingPlan.description

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-payment-method-required)

billingPlan.paymentMethodRequired

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-cost)

billingPlan.cost

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-details)

billingPlan.details

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-highlighted-details)

billingPlan.highlightedDetails

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-billing-plan-effective-date)

billingPlan.effectiveDate

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-notification)

notification

objectstring

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-notification-level)

notification.level

enum<string>

required

Available options:

`info`,

`warn`,

`error`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-notification-title)

notification.title

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-notification-message)

notification.message

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-notification-href)

notification.href

string<uri>

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-extras)

extras

object

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-secrets)

secrets

object\[\]object

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-secrets-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-secrets-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-secrets-prefix)

prefix

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#body-secrets-environment-overrides)

environmentOverrides

object

A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.

Show child attributes

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource#response-name)

name

string

required

[Delete Integration Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/delete-integration-resource) [Submit Billing Data](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.