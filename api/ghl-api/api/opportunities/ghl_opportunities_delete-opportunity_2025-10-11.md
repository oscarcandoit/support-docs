---
source: https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-opportunity/index.html
category: opportunities
scraped: 2025-10-11T23:16:08.480Z
title: Upsert Opportunity | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity/index.html#__docusaurus_skipToContent_fallback)

# Upsert Opportunity

```
POST https://services.leadconnectorhq.com/opportunities/upsert
```

Upsert Opportunity

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**pipelineId** stringrequired

pipeline Id

Example:`bCkKGpDsyPP4peuKowkG`

**locationId** stringrequired

locationId

Example:`CLu7BaljjqrEjBGKTNNe`

**contactId** stringrequired

contactId

Example:`LiKJ2vnRg5ETM8Z19K7`

**name** string

name

Example:`opportunity name`

**status** string

**Possible values:** \[ `open`, `won`, `lost`, `abandoned`, `all`\]

**pipelineStageId** string

Example:`7915dedc-8f18-44d5-8bc3-77c04e994a10`

**monetaryValue** number

Example:`220`

**assignedTo** string

Example:`082goXVW3lIExEQPOnd3`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**opportunity** objectrequired

Updated / New Opportunity

**new** booleanrequired

Example:`true`

```codeBlockLines_e6Vv
{
  "opportunity": {},
  "new": true
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api#authentication)type: httpscopes: opportunities.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/opportunities/upsert' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "pipelineId": "bCkKGpDsyPP4peuKowkG",
  "locationId": "CLu7BaljjqrEjBGKTNNe",
  "contactId": "LiKJ2vnRg5ETM8Z19K7",
  "name": "opportunity name",
  "status": "open",
  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
  "monetaryValue": 220,
  "assignedTo": "082goXVW3lIExEQPOnd3"
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

\-\-\-2021-07-28

Body required

```
{
  "pipelineId": "bCkKGpDsyPP4peuKowkG",
  "locationId": "CLu7BaljjqrEjBGKTNNe",
  "contactId": "LiKJ2vnRg5ETM8Z19K7",
  "name": "opportunity name",
  "status": "open",
  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
  "monetaryValue": 220,
  "assignedTo": "082goXVW3lIExEQPOnd3"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!