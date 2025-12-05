---
url: "https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data"
title: "Submit Billing Data - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

marketplace

Submit Billing Data

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


submit-billing-data

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.submitBillingData({
    integrationConfigurationId: "<id>",
    requestBody: {
      timestamp: new Date("2023-11-26T05:03:03.977Z"),
      eod: new Date("2023-04-14T04:58:49.647Z"),
      period: {
        start: new Date("2023-03-12T13:32:00.895Z"),
        end: new Date("2023-12-15T15:17:13.187Z"),
      },
      billing: [\
        {\
          billingPlanId: "<id>",\
          name: "<value>",\
          price: "694.00",\
          quantity: 228.64,\
          units: "<value>",\
          total: "<value>",\
        },\
      ],
      usage: [\
        {\
          name: "<value>",\
          type: "interval",\
          units: "<value>",\
          dayValue: 5212.43,\
          periodValue: 4147.35,\
        },\
      ],
    },
  });

}

run();
```

201

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

# Submit Billing Data

Copy page

Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour.

Use the `credentials.access_token` we provided in the [Upsert Installation](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#upsert-installation) body to authorize this request.

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

submit-billing-data

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await vercel.marketplace.submitBillingData({
    integrationConfigurationId: "<id>",
    requestBody: {
      timestamp: new Date("2023-11-26T05:03:03.977Z"),
      eod: new Date("2023-04-14T04:58:49.647Z"),
      period: {
        start: new Date("2023-03-12T13:32:00.895Z"),
        end: new Date("2023-12-15T15:17:13.187Z"),
      },
      billing: [\
        {\
          billingPlanId: "<id>",\
          name: "<value>",\
          price: "694.00",\
          quantity: 228.64,\
          units: "<value>",\
          total: "<value>",\
        },\
      ],
      usage: [\
        {\
          name: "<value>",\
          type: "interval",\
          units: "<value>",\
          dayValue: 5212.43,\
          periodValue: 4147.35,\
        },\
      ],
    },
  });

}

run();
```

201

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

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#parameter-integration-configuration-id)

integrationConfigurationId

string

required

#### Body

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-timestamp)

timestamp

string<date-time>

required

Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-eod)

eod

string<date-time>

required

End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. This tells us which day the usage data is for, and also allows for your "end of day" to be different from UTC 00:00:00. eod must be within the period dates, and cannot be older than 24h earlier from our server's current time.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-period)

period

object

required

Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-period-start)

period.start

string<date-time>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-period-end)

period.end

string<date-time>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing)

billing

object\[\]object

required

Billing data (interim invoicing data).

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-billing-plan-id)

billingPlanId

string

required

Partner's billing plan ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-name)

name

string

required

Line item name.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-price)

price

string

required

Price per unit.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-quantity)

quantity

number

required

Quantity of units.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-units)

units

string

required

Units of the quantity.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-total)

total

string

required

Total amount.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-resource-id)

resourceId

string

Partner's resource ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-start)

start

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-end)

end

string<date-time>

Start and end are only needed if different from the period's start/end.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-billing-details)

details

string

Line item details.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage)

usage

object\[\]

required

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-name)

name

string

required

Metric name.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-type)

type

enum<string>

required

\\n Type of the metric.\\n - total: measured total value, such as Database size\\n - interval: usage during the period, such as i/o or number of queries.\\n - rate: rate of usage, such as queries per second.\\n

Available options:

`total`,

`interval`,

`rate`

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-units)

units

string

required

Metric units. Example: "GB"

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-day-value)

dayValue

number

required

Metric value for the day. Could be a final or an interim value for the day.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-period-value)

periodValue

number

required

Metric value for the billing period. Could be a final or an interim value for the period.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-resource-id)

resourceId

string

Partner's resource ID.

[​](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-billing-data#body-usage-plan-value)

planValue

number

The limit value of the metric for a billing period, if a limit is defined by the plan.

[Update Resource](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/update-resource) [Submit Invoice](https://vercel.com/docs/rest-api/reference/endpoints/marketplace/submit-invoice)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.