---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post/index.html
category: social-planner
scraped: 2025-10-11T23:07:33.807Z
title: Bulk Enable SaaS | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-enable-saas/index.html#__docusaurus_skipToContent_fallback)

# Bulk Enable SaaS

```
POST https://services.leadconnectorhq.com/saas/bulk-enable-saas/:companyId
```

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-enable-saas/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**companyId** stringrequired

- application/json

### Body **required**

**locationIds** string\[\]required

Array of location IDs to enable SaaS for

Example:`["locationId1","locationId2"]`

**isSaaSV2** booleanrequired

Indicates if the SaaS is V2

Example:`true`

**actionPayload** object

Action payload for the bulk enable SaaS operation

**priceId** string

Price ID for the SaaS plan

Example:`price_1QDPY5FpU9DlKp7RQ8BXfywx`

**stripeAccountId** string

Stripe account ID

Example:`acct_1QDPY5FpU9DlKp7RQ8BXfywx`

**saasPlanId** stringrequired

SaaS plan ID

Example:`66c4d36534f21f900dc2a265`

**providerLocationId** string

Provider location ID

Example:`r06mdj4OrrERzYDvsOdh`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-enable-saas/index.html\#responses "Direct link to Responses")

- 201

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas/saas-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Company
```

- curl
- nodejs
- python
- php
- java
- go
- ruby
- powershell

- CURL

```openapi-explorer__code-block-lines openapi-explorer__code-block-lines-numbering
curl -L 'https://services.leadconnectorhq.com/saas/bulk-enable-saas/:companyId' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "locationIds": [\
    "locationId1",\
    "locationId2"\
  ],
  "isSaaSV2": true,
  "actionPayload": {
    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",
    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
    "saasPlanId": "66c4d36534f21f900dc2a265",
    "providerLocationId": "r06mdj4OrrERzYDvsOdh"
  }
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{
  "locationIds": [\
    "locationId1",\
    "locationId2"\
  ],
  "isSaaSV2": true,
  "actionPayload": {
    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",
    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
    "saasPlanId": "66c4d36534f21f900dc2a265",
    "providerLocationId": "r06mdj4OrrERzYDvsOdh"
  }
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!