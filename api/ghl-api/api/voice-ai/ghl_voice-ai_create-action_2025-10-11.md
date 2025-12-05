---
source: https://marketplace.gohighlevel.com/docs/ghl/voice-ai/create-action/index.html
category: voice-ai
scraped: 2025-10-11T23:13:14.547Z
title: Delete Agent Action | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action/index.html#__docusaurus_skipToContent_fallback)

# Delete Agent Action

```
DELETE https://services.leadconnectorhq.com/voice-ai/actions/:actionId
```

Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

### Requirements

#### Scope(s)

`voice-ai-agent-goals.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**actionId** stringrequired

Unique identifier for the action

### Query Parameters

**locationId** stringrequired

Location ID

Example: LOC123456789ABCDEF

**agentId** stringrequired

Agent ID the action is attached to

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action/index.html\#responses "Direct link to Responses")

- 204
- 400
- 401
- 422

Action deleted successfully

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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/voice-ai-api#authentication)type: httpscopes: voice-ai-agent-goals.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/voice-ai/actions/:actionId' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

actionId — pathrequired

locationId — queryrequired

agentId — queryrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!