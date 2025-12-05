---
source: https://marketplace.gohighlevel.com/docs/webhook/PlanChange/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.941Z
title: Location | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a location is updated.

> Available to Agency Level Apps for all sub-accounts or to specific sub-accounts.

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate/index.html\#schema "Direct link to Schema")

```codeBlockLines_e6Vv
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "stripeProductId": {
      "type": "string"
    },
    "companyId": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "LocationUpdate",
  "id": "ve9EPM428h8vShlRW1KT",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "name": "Loram ipsum",
  "email": "mailer@example.com",
  "stripeProductId": "prod_xyz123abc"
}

```

## Share your feedback

★★★★★