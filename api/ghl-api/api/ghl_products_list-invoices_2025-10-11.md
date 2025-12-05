---
source: https://marketplace.gohighlevel.com/docs/ghl/products/list-invoices/index.html
scraped: 2025-10-11T22:45:34.208Z
title: Delete Account | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account/index.html#__docusaurus_skipToContent_fallback)

# Delete Account

```
DELETE https://services.leadconnectorhq.com/social-media-posting/:locationId/accounts/:id
```

Delete account and account from group

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

**id** stringrequired

Id

Example: 65fac446d599990d1313c1dd

### Query Parameters

**companyId** string

Company ID

Example: sdfdsfdsfEWEsdfsdsW32dd

**userId** string

User ID

Example: sdfdsfdsfEWEsdfsdsW32dd

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account/index.html\#responses "Direct link to Responses")

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

Success or Failure

Example:`true`

**statusCode** numberrequired

Status Code

Example:`200`

**message** stringrequired

Message

Example:`Deleted Account`

**results** object

Requested Results

**locationId** string

Location Id

Example:`ve9EPM428h8vShlRW1KT`

**id** string

Id

Example:`65fac446d599990d1313c1dd`

```codeBlockLines_e6Vv
{
  "success": true,
  "statusCode": 200,
  "message": "Deleted Account",
  "results": {
    "locationId": "ve9EPM428h8vShlRW1KT",
    "id": "65fac446d599990d1313c1dd"
  }
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/:locationId/accounts/:id' \
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

locationId — pathrequired

id — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

companyId — query

userId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!