---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars/index.html
scraped: 2025-10-11T22:45:45.462Z
title: Get Surveys | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/surveys/get-surveys/index.html#__docusaurus_skipToContent_fallback)

# Get Surveys

```
GET https://services.leadconnectorhq.com/surveys/
```

Get Surveys

### Requirements

#### Scope(s)

`surveys.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/surveys/get-surveys/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Example: ve9EPM428h8vShlRW1KT

**skip** number

Example: 0

**limit** number

Limit Per Page records count. will allow maximum up to 50 and default will be 10

Default value:`10`

Example: 20

**type** string

Example: folder

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/surveys/get-surveys/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**surveys** object\[\]

Array \[\
\
**id** string\
\
Example:`I5GFa3d3cKjojpe4VVUx`\
\
**name** string\
\
Example:`Survey 1`\
\
**locationId** string\
\
Example:`ve9EPM428h8vShlRW1KT`\
\
\]

**total** number

Number of surveys

Example:`20`

```codeBlockLines_e6Vv
{
  "surveys": [\
    {\
      "id": "I5GFa3d3cKjojpe4VVUx",\
      "name": "Survey 1",\
      "locationId": "ve9EPM428h8vShlRW1KT"\
    }\
  ],
  "total": 20
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/surveys/surveys-api#authentication)type: httpscopes: surveys.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/surveys/' \
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

skip — query

limit — query

type — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!