---
source: https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/web-crawler
category: knowledge-base
scraped: 2025-10-11T23:14:44.266Z
title: Delete an existing knowledge base FAQ | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete/index.html#__docusaurus_skipToContent_fallback)

# Delete an existing knowledge base FAQ

```
DELETE https://services.leadconnectorhq.com/knowledge-bases/faqs/:id
```

Delete an existing knowledge base FAQ

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete/index.html\#request "Direct link to Request")

### Header Parameters

**Authorization** stringrequired

Access Token

Example: Bearer 9c48df2694a849b6089f9d0d3513efe

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**id** stringrequired

faq ID as string

Example: 710KoEzy793Fxubft0bc

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422
- 500

FAQ deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success status of the delete operation

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

Internal Server Error

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Example:`500`

**message** string

Example:`Internal Server Error`

```codeBlockLines_e6Vv
{
  "statusCode": 500,
  "message": "Internal Server Error"
}

```

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/knowledge-base-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/knowledge-bases/faqs/:id' \
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

id — pathrequired

Authorization — headerrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!