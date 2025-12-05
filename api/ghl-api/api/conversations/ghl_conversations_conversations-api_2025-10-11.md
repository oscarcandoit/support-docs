---
source: https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api
category: conversations
scraped: 2025-10-11T23:17:03.267Z
title: Cancel a scheduled message. | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message/index.html#__docusaurus_skipToContent_fallback)

# Cancel a scheduled message.

```
DELETE https://services.leadconnectorhq.com/conversations/messages/:messageId/schedule
```

Post the messageId for the API to delete a scheduled message.

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**messageId** stringrequired

Message Id

Example: ve9EPM428h8vShlRW1KT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

The scheduled message was cancelled successfully

- application/json

- Schema
- Example (auto)

**Schema**

**status** numberrequired

HTTP Status code of the request

Example:`404`

**message** stringrequired

Error message of the request

Example:`Failed cancel the scheduled message`

```codeBlockLines_e6Vv
{
  "status": 404,
  "message": "Failed cancel the scheduled message"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)type: httpscopes: conversations/message.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/messages/:messageId/schedule' \
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

messageId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!