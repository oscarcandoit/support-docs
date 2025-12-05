---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/calendar-notifications/index.html
scraped: 2025-10-11T22:45:16.353Z
title: Delete a knowledge base | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base/index.html#__docusaurus_skipToContent_fallback)

# Delete a knowledge base

```
DELETE https://services.leadconnectorhq.com/knowledge-bases/:knowledgeBaseId
```

Delete a knowledge base

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base/index.html\#request "Direct link to Request")

### Header Parameters

**Authorization** stringrequired

Access Token

Example: Bearer 9c48df2694a849b6089f9d0d3513efe

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**knowledgeBaseId** stringrequired

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Knowledge base deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

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
curl -L -X DELETE 'https://services.leadconnectorhq.com/knowledge-bases/:knowledgeBaseId' \
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

knowledgeBaseId — pathrequired

Authorization — headerrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!