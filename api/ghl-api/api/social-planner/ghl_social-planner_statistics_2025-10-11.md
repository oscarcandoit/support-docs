---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/statistics/index.html
category: social-planner
scraped: 2025-10-11T23:07:33.806Z
title: Update Rebilling | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/update-rebilling/index.html#__docusaurus_skipToContent_fallback)

# Update Rebilling

```
POST https://services.leadconnectorhq.com/saas/update-rebilling/:companyId
```

Bulk update rebilling for given locationIds

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/update-rebilling/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**companyId** stringrequired

- application/json

### Body **required**

**product** stringrequired

The product to update rebilling for

**Possible values:** \[ `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `EmailNotification`, `whatsApp`, `reviewsAI`, `VERIFIED_CALLER_ID`, `WALLET_SALES_TAX`, `NOTIFICATION_SMS`, `EmailSmtp`, `EmailVerification`, `autoCompleteAddress`, `funnelAI`, `domainPurchase`, `Phone`, `Email`\]

Example:`contentAI`

**locationIds** string\[\]required

Array of location IDs to update rebilling for

Example:`["zzyG7A4x6bRJl5SlhQhH","Vygq7VgXCDfg3xnl8TBR"]`

**config** objectrequired

Configuration for rebilling settings

**optIn** boolean

Enable the product for the locations

Example:`true`

**enabled** boolean

Enable the rebilling for the locations

Example:`true`

**markup** number

Additional value to be added in terms of percentage. For example, if the product price is $100 and the markup is 5, the amount charged to will be $105.

Example:`5`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/update-rebilling/index.html\#responses "Direct link to Responses")

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
curl -L 'https://services.leadconnectorhq.com/saas/update-rebilling/:companyId' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "product": "contentAI",
  "locationIds": [\
    "zzyG7A4x6bRJl5SlhQhH",\
    "Vygq7VgXCDfg3xnl8TBR"\
  ],
  "config": {
    "optIn": true,
    "enabled": true,
    "markup": 5
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
  "product": "contentAI",
  "locationIds": [\
    "zzyG7A4x6bRJl5SlhQhH",\
    "Vygq7VgXCDfg3xnl8TBR"\
  ],
  "config": {
    "optIn": true,
    "enabled": true,
    "markup": 5
  }
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!