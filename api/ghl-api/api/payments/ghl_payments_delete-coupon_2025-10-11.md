---
source: https://marketplace.gohighlevel.com/docs/ghl/payments/delete-coupon/index.html
category: payments
scraped: 2025-10-11T23:08:54.708Z
title: Delete Coupon | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-coupon/index.html#__docusaurus_skipToContent_fallback)

# Delete Coupon

```
DELETE https://services.leadconnectorhq.com/payments/coupon
```

The "Delete Coupon" API allows you to permanently remove a coupon from your system using its unique identifier. Use this endpoint to discontinue promotional offers or clean up unused coupons. Note that this action cannot be undone.

### Requirements

#### Scope(s)

`payments/coupons.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-coupon/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**altId** stringrequired

Location Id

Example:`BQdAwxa0ky1iK2sstLGJ`

**altType** stringrequired

Alt Type

**Possible values:** \[ `location`\]

Example:`location`

**id** stringrequired

Coupon Id

Example:`6241712be68f7a98102ba272`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-coupon/index.html\#responses "Direct link to Responses")

- 200
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Indicates whether the delete was successful

Example:`true`

**traceId** stringrequired

Unique identifier for tracing this API request

Example:`c667b18d-8f5e-44cf-a914`

```codeBlockLines_e6Vv
{
  "success": true,
  "traceId": "c667b18d-8f5e-44cf-a914"
}

```

Unprocessable Entity

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Example:`422`

**message** string\[\]

Example:`["Unprocessable Entity"]`

**error** string

Example:`Unprocessable Entity`

```codeBlockLines_e6Vv
{
  "statusCode": 422,
  "message": [\
    "Unprocessable Entity"\
  ],
  "error": "Unprocessable Entity"
}

```

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)type: httpscopes: payments/coupons.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/payments/coupon' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "altId": "BQdAwxa0ky1iK2sstLGJ",
  "altType": "location",
  "id": "6241712be68f7a98102ba272"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "altId": "BQdAwxa0ky1iK2sstLGJ",
  "altType": "location",
  "id": "6241712be68f7a98102ba272"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!