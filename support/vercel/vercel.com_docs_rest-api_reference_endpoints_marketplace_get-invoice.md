---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice"
title: "Get Invoice - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Get Invoice

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


get-invoice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getInvoice({
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
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
  "test": true,
  "invoiceId": "<string>",
  "externalId": "<string>",
  "state": "draft",
  "invoiceNumber": "<string>",
  "invoiceDate": "<string>",
  "period": {
    "start": "<string>",
    "end": "<string>"
  },
  "memo": "<string>",
  "items": [\
    {\
      "billingPlanId": "<string>",\
      "resourceId": "<string>",\
      "start": "<string>",\
      "end": "<string>",\
      "name": "<string>",\
      "details": "<string>",\
      "price": "<string>",\
      "quantity": 123,\
      "units": "<string>",\
      "total": "<string>"\
    }\
  ],
  "discounts": [\
    {\
      "billingPlanId": "<string>",\
      "resourceId": "<string>",\
      "start": "<string>",\
      "end": "<string>",\
      "name": "<string>",\
      "details": "<string>",\
      "amount": "<string>"\
    }\
  ],
  "total": "<string>",
  "refundReason": "<string>",
  "refundTotal": "<string>",
  "created": "<string>",
  "updated": "<string>"
}
```

marketplace

# Get Invoice

Copy page

Get Invoice details and status for a given invoice ID.

See Billing Events with Webhooks documentation on how to receive invoice events. This endpoint is used to retrieve the invoice details.

Copy page

GET

/

v1

/

installations

/

{integrationConfigurationId}

/

billing

/

invoices

/

{invoiceId}

get-invoice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.getInvoice({
    integrationConfigurationId: "<id>",
    invoiceId: "<id>",
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
  "test": true,
  "invoiceId": "<string>",
  "externalId": "<string>",
  "state": "draft",
  "invoiceNumber": "<string>",
  "invoiceDate": "<string>",
  "period": {
    "start": "<string>",
    "end": "<string>"
  },
  "memo": "<string>",
  "items": [\
    {\
      "billingPlanId": "<string>",\
      "resourceId": "<string>",\
      "start": "<string>",\
      "end": "<string>",\
      "name": "<string>",\
      "details": "<string>",\
      "price": "<string>",\
      "quantity": 123,\
      "units": "<string>",\
      "total": "<string>"\
    }\
  ],
  "discounts": [\
    {\
      "billingPlanId": "<string>",\
      "resourceId": "<string>",\
      "start": "<string>",\
      "end": "<string>",\
      "name": "<string>",\
      "details": "<string>",\
      "amount": "<string>"\
    }\
  ],
  "total": "<string>",
  "refundReason": "<string>",
  "refundTotal": "<string>",
  "created": "<string>",
  "updated": "<string>"
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#parameter-integration-configuration-id)

integrationConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#parameter-invoice-id)

invoiceId

string

required

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-invoice-id)

invoiceId

string

required

Vercel Marketplace Invoice ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-state)

state

enum<string>

required

Invoice state.

Available options:

`draft`,

`pending`,

`scheduled`,

`invoiced`,

`paid`,

`notpaid`,

`refund_requested`,

`refunded`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-invoice-date)

invoiceDate

string

required

Invoice date. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-period)

period

object

required

Subscription period for this billing cycle. ISO 8601 timestamps.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-period-start)

period.start

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-period-end)

period.end

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items)

items

object\[\]

required

Invoice items.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-billing-plan-id)

billingPlanId

string

required

Partner's billing plan ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-name)

name

string

required

Invoice item name.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-price)

price

string

required

Item price. A dollar-based decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-quantity)

quantity

number

required

Item quantity.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-units)

units

string

required

Units for item's quantity.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-total)

total

string

required

Item total. A dollar-based decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-resource-id)

resourceId

string

Partner's resource ID. If not specified, indicates installation-wide item.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-start)

start

string

Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-end)

end

string

Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-items-details)

details

string

Additional item details.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-total)

total

string

required

Invoice total amount. A dollar-based decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-created)

created

string

required

System creation date. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-updated)

updated

string

required

System update date. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-test)

test

boolean

Whether the invoice is in the testmode (no real transaction created).

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-external-id)

externalId

string

Partner-supplied Invoice ID, if applicable.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-invoice-number)

invoiceNumber

string

User-readable invoice number.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-memo)

memo

string

Additional memo for the invoice.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts)

discounts

object\[\]

Invoice discounts.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-billing-plan-id)

billingPlanId

string

required

Partner's billing plan ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-name)

name

string

required

Discount name.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-amount)

amount

string

required

Discount amount. A dollar-based decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-resource-id)

resourceId

string

Partner's resource ID. If not specified, indicates installation-wide discount.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-start)

start

string

Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-end)

end

string

Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-discounts-details)

details

string

Additional discount details.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-refund-reason)

refundReason

string

The reason for refund. Only applicable for states "refunded" or "refund\_request".

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice#response-refund-total)

refundTotal

string

Refund amount. Only applicable for states "refunded" or "refund\_request". A dollar-based decimal string.

[Submit Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice) [Invoice Actions](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/invoice-actions)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.