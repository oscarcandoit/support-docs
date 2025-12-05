---
source: https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content/index.html
category: medias
scraped: 2025-10-11T23:07:33.803Z
title: Get Agency Plans | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/get-agency-plans/index.html#__docusaurus_skipToContent_fallback)

# Get Agency Plans

```
GET https://services.leadconnectorhq.com/saas/agency-plans/:companyId
```

Fetch all agency subscription plans for a given company ID

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/get-agency-plans/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**companyId** stringrequired

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/get-agency-plans/index.html\#responses "Direct link to Responses")

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
curl -L 'https://services.leadconnectorhq.com/saas/agency-plans/:companyId' \
-H 'Authorization: Bearer <TOKEN>'

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

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!