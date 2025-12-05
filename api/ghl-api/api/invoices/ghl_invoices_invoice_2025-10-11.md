---
source: https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice
category: invoices
scraped: 2025-10-11T23:12:21.767Z
title: Delete template | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template/index.html#__docusaurus_skipToContent_fallback)

# Delete template

```
DELETE https://services.leadconnectorhq.com/invoices/template/:templateId
```

API to update an template by template id

### Requirements

#### Scope(s)

`invoices/template.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token` `Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**templateId** stringrequired

Template Id

Example: 6578278e879ad2646715ba9c

### Query Parameters

**altId** stringrequired

location Id / company Id based on altType

Example: 6578278e879ad2646715ba9c

**altType** stringrequired

**Possible values:** \[ `location`\]

Alt Type

Example: location

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

success

Example:`true`

```codeBlockLines_e6Vv
{
  "success": true
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)type: httpscopes: invoices/template.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/invoices/template/:templateId' \
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

templateId — pathrequired

altId — queryrequired

altType — queryrequired

\-\-\-location

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!