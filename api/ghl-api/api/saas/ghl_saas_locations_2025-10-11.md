---
source: https://marketplace.gohighlevel.com/docs/ghl/saas/locations/index.html
category: saas
scraped: 2025-10-11T23:07:33.796Z
title: Disable SaaS for locations | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas/index.html#__docusaurus_skipToContent_fallback)

# Disable SaaS for locations

```
POST https://services.leadconnectorhq.com/saas/bulk-disable-saas/:companyId
```

Disable SaaS for locations for given locationIds

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**companyId** stringrequired

- application/json

### Body **required**

**locationIds** string\[\]required

Location IDs

Example:`["locationId1","locationId2"]`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas/index.html\#responses "Direct link to Responses")

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
curl -L 'https://services.leadconnectorhq.com/saas/bulk-disable-saas/:companyId' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "locationIds": [\
    "locationId1",\
    "locationId2"\
  ]
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
  ]
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!