---
source: https://marketplace.gohighlevel.com/docs/ghl/companies/companies-api
category: companies
scraped: 2025-10-11T23:14:18.422Z
title: Check if account has sufficient funds | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds/index.html#__docusaurus_skipToContent_fallback)

# Check if account has sufficient funds

```
GET https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds
```

Check if account has sufficient funds

### Requirements

#### Scope(s)

`charges.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds/index.html\#request "Direct link to Request")

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds/index.html\#responses "Direct link to Responses")

- 200
- 422

Returns fund availability status

- application/json

- Schema
- Example (auto)

**Schema**

**hasFunds** boolean

Example:`true`

```codeBlockLines_e6Vv
{
  "hasFunds": true
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)type: httpscopes: charges.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!