---
source: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/agents
category: conversation-ai
scraped: 2025-10-11T23:09:42.930Z
title: Search Agents | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent/index.html#__docusaurus_skipToContent_fallback)

# Search Agents

```
GET https://services.leadconnectorhq.com/conversation-ai/agents/search
```

Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.

### Requirements

#### Scope(s)

`conversation-ai.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Query Parameters

**startAfter** string

Start after is the agent id to start after, Serving as skip, send empty when first page

Example: Exampleee123

**limit** number

Records per page

Example: 1

**query** string

query to search on agent name, must be provided in lowercase

Example: booking

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**agents** object\[\]required

List of agents matching the search criteria.

Array \[\
\
**id** stringrequired\
\
Unique identifier for the agent.\
\
Example:`emp_123`\
\
**name** stringrequired\
\
Name of the agent.\
\
Example:`John Doe`\
\
**businessName** string\
\
Name of the business the agent represents.\
\
Example:`Tech Corp`\
\
**mode** stringrequired\
\
Current operating mode of the agent.\
\
**Possible values:** \[ `off`, `suggestive`, `auto-pilot`\]\
\
Example:`auto-pilot`\
\
**channels** string\[\]required\
\
Communication channels the agent operates on.\
\
Example:`["SMS","LIVE_CHAT"]`\
\
**waitTime** numberrequired\
\
Wait time before agent responds.\
\
Example:`30`\
\
**waitTimeUnit** stringrequired\
\
Unit for wait time.\
\
**Possible values:** \[ `minutes`, `seconds`\]\
\
Example:`seconds`\
\
**sleepEnabled** booleanrequired\
\
Indicates if sleep functionality is enabled.\
\
Example:`false`\
\
**sleepTime** number\
\
Duration of sleep period.\
\
Example:`2`\
\
**sleepTimeUnit** string\
\
Unit of sleep time.\
\
**Possible values:** \[ `hours`, `minutes`, `seconds`\]\
\
Example:`hours`\
\
**actions** object\[\]required\
\
List of actions associated with this agent.\
\
Example:`[{"id":"action_123","type":"triggerWorkflow"}]`\
\
**isPrimary** booleanrequired\
\
Indicates if this agent is a primary agent. (First agent created for a location is primary by default)\
\
Example:`false`\
\
**autoPilotMaxMessages** numberrequired\
\
Maximum number of messages in auto-pilot mode before requiring human intervention.\
\
Example:`25`\
\
**goal** object\
\
Goal configuration for the agent.\
\
Example:`{"prompt":"Assist customers","type":"custom","actionId":null}`\
\
**knowledgeBaseIds** string\[\]\
\
Array of knowledge base IDs associated with this agent.\
\
Example:`["kb_123","kb_456"]`\
\
**createdAt** stringrequired\
\
Timestamp when the agent was created.\
\
Example:`2024-01-01T00:00:00Z`\
\
**updatedAt** stringrequired\
\
Timestamp when the agent was last updated.\
\
Example:`2024-01-01T00:00:00Z`\
\
\]

**totalCount** numberrequired

Total number of agents in the location (unfiltered count).

Example:`100`

**count** numberrequired

Number of agents in the current response (filtered/paginated count).

Example:`25`

```codeBlockLines_e6Vv
{
  "agents": [\
    {\
      "id": "emp_123",\
      "name": "John Doe",\
      "businessName": "Tech Corp",\
      "mode": "auto-pilot",\
      "channels": [\
        "SMS",\
        "LIVE_CHAT"\
      ],\
      "waitTime": 30,\
      "waitTimeUnit": "seconds",\
      "sleepEnabled": false,\
      "sleepTime": 2,\
      "sleepTimeUnit": "hours",\
      "actions": [\
        {\
          "id": "action_123",\
          "type": "triggerWorkflow"\
        }\
      ],\
      "isPrimary": false,\
      "autoPilotMaxMessages": 25,\
      "goal": {\
        "prompt": "Assist customers",\
        "type": "custom",\
        "actionId": null\
      },\
      "knowledgeBaseIds": [\
        "kb_123",\
        "kb_456"\
      ],\
      "createdAt": "2024-01-01T00:00:00Z",\
      "updatedAt": "2024-01-01T00:00:00Z"\
    }\
  ],
  "totalCount": 100,
  "count": 25
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/conversation-ai-api#authentication)type: httpscopes: conversation-ai.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/conversation-ai/agents/search' \
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

Version — headerrequired

\-\-\-2021-04-15

Show optional parameters

startAfter — query

limit — query

query — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!