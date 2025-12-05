---
url: "https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans"
title: "List integration billing plans - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

integrations

List integration billing plans

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


getBillingPlans

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getBillingPlans({
    integrationIdOrSlug: "<value>",
    productIdOrSlug: "<value>",
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
  "plans": [\
    {\
      "type": "prepayment",\
      "description": "<string>",\
      "id": "<string>",\
      "name": "<string>",\
      "scope": "installation",\
      "paymentMethodRequired": true,\
      "preauthorizationAmount": 123,\
      "initialCharge": "<string>",\
      "minimumAmount": "<string>",\
      "maximumAmount": "<string>",\
      "maximumAmountAutoPurchasePerPeriod": "<string>",\
      "cost": "<string>",\
      "details": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],\
      "highlightedDetails": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],\
      "quote": [\
        {\
          "line": "<string>",\
          "amount": "<string>"\
        }\
      ],\
      "effectiveDate": "<string>",\
      "disabled": true\
    }\
  ]
}
```

integrations

# List integration billing plans

Copy page

Get a list of billing plans for an integration and product.

Copy page

GET

/

v1

/

integrations

/

integration

/

{integrationIdOrSlug}

/

products

/

{productIdOrSlug}

/

plans

getBillingPlans

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.integrations.getBillingPlans({
    integrationIdOrSlug: "<value>",
    productIdOrSlug: "<value>",
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
  "plans": [\
    {\
      "type": "prepayment",\
      "description": "<string>",\
      "id": "<string>",\
      "name": "<string>",\
      "scope": "installation",\
      "paymentMethodRequired": true,\
      "preauthorizationAmount": 123,\
      "initialCharge": "<string>",\
      "minimumAmount": "<string>",\
      "maximumAmount": "<string>",\
      "maximumAmountAutoPurchasePerPeriod": "<string>",\
      "cost": "<string>",\
      "details": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],\
      "highlightedDetails": [\
        {\
          "label": "<string>",\
          "value": "<string>"\
        }\
      ],\
      "quote": [\
        {\
          "line": "<string>",\
          "amount": "<string>"\
        }\
      ],\
      "effectiveDate": "<string>",\
      "disabled": true\
    }\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#parameter-integration-id-or-slug)

integrationIdOrSlug

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#parameter-product-id-or-slug)

productIdOrSlug

string

required

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#parameter-metadata)

metadata

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans)

plans

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-type)

type

enum<string>

required

Available options:

`prepayment`,

`subscription`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-description)

description

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-id)

id

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-scope)

scope

enum<string>

required

Available options:

`installation`,

`resource`

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-payment-method-required)

paymentMethodRequired

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-preauthorization-amount)

preauthorizationAmount

number

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-initial-charge)

initialCharge

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-minimum-amount)

minimumAmount

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-maximum-amount)

maximumAmount

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-maximum-amount-auto-purchase-per-period)

maximumAmountAutoPurchasePerPeriod

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-cost)

cost

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-details)

details

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-highlighted-details)

highlightedDetails

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-quote)

quote

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-effective-date)

effectiveDate

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/integrations/list-integration-billing-plans#response-plans-disabled)

disabled

boolean

[Delete User Account](https://vercel.com/docs/rest-api/reference/endpoints/user/delete-user-account) [Connect integration resource to project](https://vercel.com/docs/rest-api/reference/endpoints/integrations/connect-integration-resource-to-project)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.