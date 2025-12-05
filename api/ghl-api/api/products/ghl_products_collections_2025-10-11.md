---
source: https://marketplace.gohighlevel.com/docs/ghl/products/collections/index.html
category: products
scraped: 2025-10-11T23:10:38.986Z
title: Get Details about individual product collection | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id/index.html#__docusaurus_skipToContent_fallback)

# Get Details about individual product collection

```
GET https://services.leadconnectorhq.com/products/collections/:collectionId
```

Get Details about individual product collection

### Requirements

#### Scope(s)

`products/collection.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**collectionId** stringrequired

Collection Id

Example: 65d71377c326ea78e1c47df5

### Query Parameters

**altId** stringrequired

Location Id

Example: 3SwdhCsvxI8Au3KsPJt6

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data** objectrequired

Collection Data

**status** booleanrequired

Status of the operation

Example:`true`

```codeBlockLines_e6Vv
{
  "data": {},
  "status": true
}

```

Bad Request

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Example:`400`

**message** string

Example:`Bad Request`

```codeBlockLines_e6Vv
{
  "statusCode": 400,
  "message": "Bad Request"
}

```

Unauthorized

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Example:`401`

**message** string

Example:`Invalid token: access token is invalid`

**error** string

Example:`Unauthorized`

```codeBlockLines_e6Vv
{
  "statusCode": 401,
  "message": "Invalid token: access token is invalid",
  "error": "Unauthorized"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)type: httpscopes: products/collection.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/products/collections/:collectionId' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

collectionId — pathrequired

altId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!