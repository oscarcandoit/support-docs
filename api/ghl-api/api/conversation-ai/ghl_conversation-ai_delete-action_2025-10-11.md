---
source: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action
category: conversation-ai
scraped: 2025-10-11T23:10:08.086Z
title: Delete Agent | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent/index.html#__docusaurus_skipToContent_fallback)

# Delete Agent

```
DELETE https://services.leadconnectorhq.com/conversation-ai/agents/:agentId
```

Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**agentId** stringrequired

Conversations AI agent id

Example: EmployeeId123

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent/index.html\#responses "Direct link to Responses")

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

Indicates if the agent was deleted successfully.

Example:`true`

**id** stringrequired

Unique identifier of the deleted agent.

Example:`emp_123`

```codeBlockLines_e6Vv
{
  "success": true,
  "id": "emp_123"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/conversation-ai-api#authentication)type: httpscopes: conversation-ai.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId' \
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

agentId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!