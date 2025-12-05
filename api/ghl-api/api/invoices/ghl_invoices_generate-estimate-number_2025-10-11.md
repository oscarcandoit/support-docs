---
source: https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-estimate-number
category: invoices
scraped: 2025-10-11T23:12:21.766Z
title: Generate Estimate Number | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-estimate-number/index.html#__docusaurus_skipToContent_fallback)

# Generate Estimate Number

```
GET https://services.leadconnectorhq.com/invoices/estimate/number/generate
```

Get the next estimate number for the given location

### Requirements

#### Scope(s)

`invoices/estimate.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token` `Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-estimate-number/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

Example: 6578278e879ad2646715ba9c

**altType** stringrequired

**Possible values:** \[ `location`\]

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/invoices/generate-estimate-number/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**estimateNumber** numberrequired

**traceId** stringrequired

```codeBlockLines_e6Vv
{
  "estimateNumber": 0,
  "traceId": "string"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)type: httpscopes: invoices/estimate.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/invoices/estimate/number/generate' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'

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

altId — queryrequired

altType — queryrequired

\-\-\-location

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!