---
source: https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas/index.html
category: saas
scraped: 2025-10-11T23:07:33.797Z
title: Get locations by stripeId with companyId | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/locations/index.html#__docusaurus_skipToContent_fallback)

# Get locations by stripeId with companyId

```
GET https://services.leadconnectorhq.com/saas/locations
```

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/locations/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Query Parameters

**customerId** stringrequired

**subscriptionId** stringrequired

**companyId** stringrequired

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/locations/index.html\#responses "Direct link to Responses")

- 200

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
curl -L 'https://services.leadconnectorhq.com/saas/locations' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

customerId — queryrequired

subscriptionId — queryrequired

companyId — queryrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!