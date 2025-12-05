---
source: https://marketplace.gohighlevel.com/docs/ghl/associations/associations
category: associations
scraped: 2025-10-11T23:16:08.474Z
title: Get Pipelines | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines/index.html#__docusaurus_skipToContent_fallback)

# Get Pipelines

```
GET https://services.leadconnectorhq.com/opportunities/pipelines
```

Get Pipelines

### Requirements

#### Scope(s)

`opportunities.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Example: ve9EPM428h8vShlRW1KT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**pipelines** object\[\]

Array \[\
\
**id** string\
\
Example:`aWdODOBVOlH1RUFKWQke`\
\
**name** string\
\
Example:`new pipeline`\
\
**stages** array\[\]\
\
**showInFunnel** boolean\
\
Example:`false`\
\
**showInPieChart** boolean\
\
Example:`true`\
\
**locationId** string\
\
Example:`dsjddjkndadqaja`\
\
\]

```codeBlockLines_e6Vv
{
  "pipelines": [\
    {\
      "id": "aWdODOBVOlH1RUFKWQke",\
      "name": "new pipeline",\
      "stages": [\
        [\
          null\
        ]\
      ],\
      "showInFunnel": false,\
      "showInPieChart": true,\
      "locationId": "dsjddjkndadqaja"\
    }\
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

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api#authentication)type: httpscopes: opportunities.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/opportunities/pipelines' \
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

locationId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!