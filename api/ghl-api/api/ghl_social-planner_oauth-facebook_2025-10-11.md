---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/oauth-facebook/index.html
scraped: 2025-10-11T22:45:45.460Z
title: Location | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/LocationCreate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a location is created.

> Available only to Agency Level Apps.

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/LocationCreate/index.html\#schema "Direct link to Schema")

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

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/LocationCreate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "LocationCreate",
  "id": "ve9EPM428h8vShlRW1KT",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "name": "Loram ipsum",
  "email": "mailer@example.com",
  "stripeProductId": "prod_xyz123abc"
}

```

## Share your feedback

★★★★★