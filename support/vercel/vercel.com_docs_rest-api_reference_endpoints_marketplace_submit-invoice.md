---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice"
title: "Submit Invoice - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Submit Invoice

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


submit-invoice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.submitInvoice({
    integrationConfigurationId: "<id>",
    requestBody: {
      invoiceDate: new Date("2023-12-12T13:24:35.882Z"),
      period: {
        start: new Date("2024-10-20T02:46:19.279Z"),
        end: new Date("2025-06-06T21:30:28.107Z"),
      },
      items: [\
        {\
          billingPlanId: "<id>",\
          name: "<value>",\
          price: "469.29",\
          quantity: 3808.42,\
          units: "<value>",\
          total: "<value>",\
        },\
      ],
    },
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

Copy

Ask AI

```
{
  "invoiceId": "<string>",
  "test": true,
  "validationErrors": [\
    "<string>"\
  ]
}
```

marketplace

# Submit Invoice

Copy page

This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel’s billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.

Use the `credentials.access_token` we provided in the [Upsert Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#upsert-installation) body to authorize this request.

There are several limitations to the invoice submission:

1\. A resource can only be billed once per the billing period and the billing plan.

2\. The billing plan used to bill the resource must have been active for this resource during the billing period.

3\. The billing plan used must be a subscription plan.

4\. The interim usage data must be sent hourly for all types of subscriptions. See [Send subscription billing and usage data](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.

Copy page

POST

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

submit-invoice

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.marketplace.submitInvoice({
    integrationConfigurationId: "<id>",
    requestBody: {
      invoiceDate: new Date("2023-12-12T13:24:35.882Z"),
      period: {
        start: new Date("2024-10-20T02:46:19.279Z"),
        end: new Date("2025-06-06T21:30:28.107Z"),
      },
      items: [\
        {\
          billingPlanId: "<id>",\
          name: "<value>",\
          price: "469.29",\
          quantity: 3808.42,\
          units: "<value>",\
          total: "<value>",\
        },\
      ],
    },
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

Copy

Ask AI

```
{
  "invoiceId": "<string>",
  "test": true,
  "validationErrors": [\
    "<string>"\
  ]
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-invoice-date)

invoiceDate

string<date-time>

required

Invoice date. Must be within the period's start and end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-period)

period

object

required

Subscription period for this billing cycle.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-period-start)

period.start

string<date-time>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-period-end)

period.end

string<date-time>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items)

items

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-billing-plan-id)

billingPlanId

string

required

Partner's billing plan ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-price)

price

string

required

Currency amount as a decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-quantity)

quantity

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-units)

units

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-total)

total

string

required

Currency amount as a decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-resource-id)

resourceId

string

Partner's resource ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-start)

start

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-end)

end

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-items-details)

details

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-external-id)

externalId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-memo)

memo

string

Additional memo for the invoice.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts)

discounts

object\[\]

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-billing-plan-id)

billingPlanId

string

required

Partner's billing plan ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-name)

name

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-amount)

amount

string

required

Currency amount as a decimal string.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-resource-id)

resourceId

string

Partner's resource ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-start)

start

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-end)

end

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-discounts-details)

details

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-test)

test

object

Test mode

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-test-validate)

test.validate

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#body-test-result)

test.result

enum<string>

Available options:

`paid`,

`notpaid`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#response-invoice-id)

invoiceId

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#response-test)

test

boolean

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice#response-validation-errors)

validationErrors

string\[\]

[Submit Billing Data](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data) [Get Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/get-invoice)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.