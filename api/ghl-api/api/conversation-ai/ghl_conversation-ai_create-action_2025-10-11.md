---
source: https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action
category: conversation-ai
scraped: 2025-10-11T23:10:08.085Z
title: Create an Agent | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-agent/index.html#__docusaurus_skipToContent_fallback)

# Create an Agent

```
POST https://services.leadconnectorhq.com/conversation-ai/agents
```

Creates a new AI agent for the location. The agent will be created with the specified configuration including name, role, actions, and behavior settings.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-agent/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

- application/json

### Body **required**

**name** stringrequired

Name of the agent.

Example:`John Doe`

**businessName** string

Name of the business the agent represents.

Example:`Tech Corp`

**mode** string

Mode of operation - OFF, SUGGESTIVE, or AUTO\_PILOT

**Possible values:** \[ `off`, `suggestive`, `auto-pilot`\]

**Default value:** `off`

Example:`auto-pilot`

**channels** string\[\]

Communication channels the agent can operate on

**Possible values:** \[ `IG`, `FB`, `SMS`, `WebChat`, `WhatsApp`, `Live_Chat`\]

Example:`["SMS","Live_Chat","WhatsApp"]`

**isPrimary** boolean

Indicates if this agent is a primary agent.

**Default value:** `false`

Example:`true`

**waitTime** number

Wait time before agent responds (max 5 for minutes, 300 for seconds)

**Default value:** `2`

Example:`2`

**waitTimeUnit** string

Unit for wait time - SECONDS or MINUTES

**Possible values:** \[ `minutes`, `seconds`\]

**Default value:** `seconds`

Example:`seconds`

**sleepEnabled** boolean

Indicates if sleep functionality is enabled.

**Default value:** `false`

Example:`false`

**sleepTime** number

Duration of sleep period (required if sleepEnabled is true). (max 2880 for minutes, 172800 for seconds, 48 for hours)

**Default value:** `2`

Example:`2`

**sleepTimeUnit** string

Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true)

**Possible values:** \[ `hours`, `minutes`, `seconds`\]

**Default value:** `hours`

Example:`hours`

**personality** stringrequired

Personality traits of the agent.

Example:`Friendly and helpful`

**goal** stringrequired

The goal of the agent.

Example:`Assist customers with inquiries.`

**instructions** stringrequired

Instructions for the agent.

Example:`Provide  customer service.`

**autoPilotMaxMessages** number

Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 25, min: 1)

**Default value:** `25`

Example:`25`

**knowledgeBaseIds** string\[\]

Array of knowledge base IDs associated with this agent.

**respondToImages** boolean

Allow agent to respond to images

**Default value:** `false`

Example:`true`

**respondToAudio** boolean

Allow agent to respond to audio

**Default value:** `false`

Example:`true`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-agent/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id** stringrequired

Unique identifier for the agent.

Example:`emp_123`

**name** stringrequired

Name of the agent.

Example:`John Doe`

**businessName** string

Name of the business the agent represents.

Example:`Tech Corp`

**mode** stringrequired

Current operating mode of the agent.

**Possible values:** \[ `off`, `suggestive`, `auto-pilot`\]

Example:`auto-pilot`

**channels** string\[\]required

Communication channels the agent operates on.

**Possible values:** \[ `IG`, `FB`, `SMS`, `WebChat`, `WhatsApp`, `Live_Chat`\]

Example:`["SMS","Live_Chat"]`

**waitTime** numberrequired

Wait time before agent responds.

Example:`30`

**waitTimeUnit** stringrequired

Unit for wait time.

**Possible values:** \[ `minutes`, `seconds`\]

Example:`seconds`

**sleepEnabled** booleanrequired

Indicates if sleep functionality is enabled.

Example:`false`

**sleepTime** number

Duration of sleep period.

Example:`2`

**sleepTimeUnit** string

Unit of sleep time.

**Possible values:** \[ `hours`, `minutes`, `seconds`\]

Example:`hours`

**actions** object\[\]required

List of actions associated with this agent.

Array \[\
\
**id** stringrequired\
\
Unique identifier for the action.\
\
Example:`actionId123`\
\
**type** stringrequired\
\
type of action.\
\
**Possible values:** \[ `triggerWorkflow`, `updateContactField`, `appointmentBooking`, `stopBot`, `humanHandOver`, `advancedFollowup`, `transferBot`\]\
\
Example:`triggerWorkflow`\
\
\]

**isPrimary** booleanrequired

Indicates if this agent is a primary agent.

Example:`false`

**autoPilotMaxMessages** numberrequired

Maximum number of messages in auto-pilot mode before requiring human intervention.

Example:`25`

**goal** string

The goal of the agent.

Example:`Assist customers with inquiries`

**personality** string

Personality traits of the agent.

Example:`Friendly and helpful`

**instructions** string

Instructions for the agent.

Example:`Provide excellent customer service`

**knowledgeBaseIds** string\[\]

Array of knowledge base IDs associated with this agent.

Example:`["kb_123","kb_456"]`

```codeBlockLines_e6Vv
{
  "id": "emp_123",
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [\
    "SMS",\
    "Live_Chat"\
  ],
  "waitTime": 30,
  "waitTimeUnit": "seconds",
  "sleepEnabled": false,
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
  "actions": [\
    {\
      "id": "actionId123",\
      "type": "triggerWorkflow"\
    }\
  ],
  "isPrimary": false,
  "autoPilotMaxMessages": 25,
  "goal": "Assist customers with inquiries",
  "personality": "Friendly and helpful",
  "instructions": "Provide excellent customer service",
  "knowledgeBaseIds": [\
    "kb_123",\
    "kb_456"\
  ]
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
curl -L 'https://services.leadconnectorhq.com/conversation-ai/agents' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [\
    "SMS",\
    "Live_Chat",\
    "WhatsApp"\
  ],
  "isPrimary": true,
  "waitTime": 2,
  "waitTimeUnit": "seconds",
  "sleepEnabled": false,
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
  "personality": "Friendly and helpful",
  "goal": "Assist customers with inquiries.",
  "instructions": "Provide  customer service.",
  "autoPilotMaxMessages": 25,
  "knowledgeBaseIds": [\
    "string"\
  ],
  "respondToImages": true,
  "respondToAudio": true
}'

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

Body required

```
{
  "name": "John Doe",
  "businessName": "Tech Corp",
  "mode": "auto-pilot",
  "channels": [\
    "SMS",\
    "Live_Chat",\
    "WhatsApp"\
  ],
  "isPrimary": true,
  "waitTime": 2,
  "waitTimeUnit": "seconds",
  "sleepEnabled": false,
  "sleepTime": 2,
  "sleepTimeUnit": "hours",
  "personality": "Friendly and helpful",
  "goal": "Assist customers with inquiries.",
  "instructions": "Provide  customer service.",
  "autoPilotMaxMessages": 25,
  "knowledgeBaseIds": [\
    "string"\
  ],
  "respondToImages": true,
  "respondToAudio": true
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!