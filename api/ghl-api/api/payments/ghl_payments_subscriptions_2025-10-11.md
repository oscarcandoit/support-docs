---
source: https://marketplace.gohighlevel.com/docs/ghl/payments/subscriptions/index.html
category: payments
scraped: 2025-10-11T23:08:28.463Z
title: Upload CSV | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv/index.html#__docusaurus_skipToContent_fallback)

# Upload CSV

```
POST https://services.leadconnectorhq.com/social-media-posting/:locationId/csv
```

Upload CSV

### Requirements

#### Scope(s)

`socialplanner/csv.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

- multipart/form-data

### Body **required**

**file** binary

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success or Failure

Example:`true`

**statusCode** numberrequired

Status Code

Example:`201`

**message** stringrequired

Message

Example:`Uploaded CSV`

**results** object

Requested Results

**filePath** string

Example:`omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv`

**rowsCount** number

Example:`6`

**fileName** string

Example:`CSV Import Sample - CSV Import Sample.csv`

```codeBlockLines_e6Vv
{
  "success": true,
  "statusCode": 201,
  "message": "Uploaded CSV",
  "results": {
    "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",
    "rowsCount": 6,
    "fileName": "CSV Import Sample - CSV Import Sample.csv"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)type: httpscopes: socialplanner/csv.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X POST 'https://services.leadconnectorhq.com/social-media-posting/:locationId/csv' \
-H 'Content-Type: multipart/form-data' \
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

Version — headerrequired

\-\-\-2021-07-28

Body required

file

file

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!