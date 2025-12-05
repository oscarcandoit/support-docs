---
source: https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message
category: conversations
scraped: 2025-10-11T23:17:03.266Z
title: Delete Conversation | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation/index.html#__docusaurus_skipToContent_fallback)

# Delete Conversation

```
DELETE https://services.leadconnectorhq.com/conversations/:conversationId
```

Delete the conversation details based on the conversation ID

### Requirements

#### Scope(s)

`conversations.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**conversationId** stringrequired

Conversation ID as string

Example: tDtDnQdgm2LXpyiqYvZ6

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Boolean value as the API response.

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

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)type: httpscopes: conversations.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/:conversationId' \
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

conversationId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!