---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post/index.html
category: social-planner
scraped: 2025-10-11T23:08:00.732Z
title: Get facebook pages | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-facebook-page-group/index.html#__docusaurus_skipToContent_fallback)

# Get facebook pages

```
GET https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/facebook/accounts/:accountId
```

Get facebook pages

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-facebook-page-group/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Account Location Id

Example: w37swmmLbA02zgqKPpxITe2

**accountId** stringrequired

Account Id

Example: w37swmmLbA02zgqKPpxITe

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-facebook-page-group/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response, runs Facebook OAuth and redirects to application

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success or Failure

Example:`true`

**statusCode** numberrequired

Status Code

Example:`200`

**message** stringrequired

Message

Example:`Fetched Facebook Account`

**results** object

Requested Results

**pages** object\[\]

Facebook Pages Details

Array \[\
\
**id** string\
\
Example:`u37swmmLbA02zgqKPpxITe2`\
\
**name** string\
\
Example:`FB Page`\
\
**avatar** string\
\
Example:`u37swmmLbA02zgqKPpxITe2`\
\
**isOwned** boolean\
\
Example:`true`\
\
**isConnected** boolean\
\
Example:`true`\
\
\]

```codeBlockLines_e6Vv
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Facebook Account",
  "results": {
    "pages": [\
      {\
        "id": "u37swmmLbA02zgqKPpxITe2",\
        "name": "FB Page",\
        "avatar": "u37swmmLbA02zgqKPpxITe2",\
        "isOwned": true,\
        "isConnected": true\
      }\
    ]
  }
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/facebook/accounts/:accountId' \
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

locationId — pathrequired

accountId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!