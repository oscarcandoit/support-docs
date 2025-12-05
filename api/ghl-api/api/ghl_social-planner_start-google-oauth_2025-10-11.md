---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-google-oauth/index.html
scraped: 2025-10-11T22:45:45.459Z
title: Get Campaigns | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns/index.html#__docusaurus_skipToContent_fallback)

# Get Campaigns

```
GET https://services.leadconnectorhq.com/campaigns/
```

Get Campaigns

### Requirements

#### Scope(s)

`campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Example: ve9EPM428h8vShlRW1KT

**status** string

Example: draft

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**campaigns** object\[\]

Array \[\
\
**id** string\
\
Example:`mIVALPYuTD7YjUHnFEx4`\
\
**name** string\
\
Example:`test`\
\
**status** string\
\
Example:`published`\
\
**locationId** string\
\
Example:`ve9EPM428h8vShlRW1KT`\
\
\]

```codeBlockLines_e6Vv
{
  "campaigns": [\
    {\
      "id": "mIVALPYuTD7YjUHnFEx4",\
      "name": "test",\
      "status": "published",\
      "locationId": "ve9EPM428h8vShlRW1KT"\
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/campaigns/campaigns-api#authentication)type: httpscopes: campaigns.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/campaigns/' \
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

Show optional parameters

status — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!