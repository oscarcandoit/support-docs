---
source: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-action
category: conversation-ai
scraped: 2025-10-11T23:10:08.089Z
title: Update Inventory | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory/index.html#__docusaurus_skipToContent_fallback)

# Update Inventory

```
POST https://services.leadconnectorhq.com/products/inventory
```

The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

### Requirements

#### Scope(s)

`products/prices.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token` `Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**altId** stringrequired

Location Id or Agency Id

Example:`6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[ `location`\]

**items** object\[\]required

Array of items to update in the inventory.

Array \[\
\
**priceId** stringrequired\
\
The unique identifier for the price, in MongoDB ID format.\
\
Example:`5e9f8f8f8f8f8f8f8f8f8f8`\
\
**availableQuantity** number\
\
The available quantity of the item.\
\
Example:`10`\
\
**allowOutOfStockPurchases** boolean\
\
Whether to continue selling the item when out of stock.\
\
Example:`false`\
\
\]

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status** booleanrequired

Status of api action

Example:`true`

**message** string

Success message

Example:`Successfully created`

```codeBlockLines_e6Vv
{
  "status": true,
  "message": "Successfully created"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)type: httpscopes: products/prices.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/products/inventory' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "items": [\
    {\
      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",\
      "availableQuantity": 10,\
      "allowOutOfStockPurchases": false\
    }\
  ]
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security Scheme

Location-AccessAgency-Access

Bearer Token

Parameters

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "items": [\
    {\
      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",\
      "availableQuantity": 10,\
      "allowOutOfStockPurchases": false\
    }\
  ]
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!