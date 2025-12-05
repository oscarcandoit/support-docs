---
source: https://marketplace.gohighlevel.com/docs/ghl/saas/get-saas-locations/index.html
category: saas
scraped: 2025-10-11T23:07:33.798Z
title: Pause location | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/pause-location/index.html#__docusaurus_skipToContent_fallback)

# Pause location

```
POST https://services.leadconnectorhq.com/saas/pause/:locationId
```

Pause Sub account for given locationId

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/pause-location/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**locationId** stringrequired

- application/json

### Body **required**

**paused** booleanrequired

Paused

Example:`true`

**companyId** stringrequired

Company ID

Example:`companyId1`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/pause-location/index.html\#responses "Direct link to Responses")

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
curl -L 'https://services.leadconnectorhq.com/saas/pause/:locationId' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "paused": true,
  "companyId": "companyId1"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{
  "paused": true,
  "companyId": "companyId1"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!