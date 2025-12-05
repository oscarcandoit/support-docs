---
source: https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection/index.html
category: products
scraped: 2025-10-11T23:10:08.095Z
title: Fetch Product Collections | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection/index.html#__docusaurus_skipToContent_fallback)

# Fetch Product Collections

```
GET https://services.leadconnectorhq.com/products/collections
```

Internal API to fetch the Product Collections

### Requirements

#### Scope(s)

`products/collection.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**limit** number

The maximum number of items to be included in a single page of results

Default value:`10`

Example: 20

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

Example: 0

**altId** stringrequired

Location Id

Example: 6578278e879ad2646715ba9c

**altType** stringrequired

**Possible values:** \[ `location`\]

The type of alt. For now it is only LOCATION

Example: LOCATION

**collectionIds** string

Ids of the collections separated by comma(,) for search purposes

Example: 65d71377c326ea78e1c47df5,65d71377c326ea78e1c47d34

**name** string

Query to search collection based on names

Example: Best Sellers

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data** array\[\]required

Array of Collections

**total** numberrequired

The total count of the collections present, which is useful to calculate the pagination

```codeBlockLines_e6Vv
{
  "data": [\
    [\
      null\
    ]\
  ],
  "total": 0
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
curl -L 'https://services.leadconnectorhq.com/products/collections' \
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

altId — queryrequired

altType — queryrequired

\-\-\-location

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

limit — query

offset — query

collectionIds — query

name — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!