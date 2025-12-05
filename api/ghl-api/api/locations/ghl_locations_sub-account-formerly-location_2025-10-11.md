---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location/index.html
category: locations
scraped: 2025-10-11T23:17:36.264Z
title: Uploads File to customFields | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields/index.html#__docusaurus_skipToContent_fallback)

# Uploads File to customFields

```
POST https://services.leadconnectorhq.com/locations/:locationId/customFields/upload
```

Uploads File to customFields

### Requirements

#### Scope(s)

`locations/customFields.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

- multipart/form-data

### Body **required**

**id** string

Id(Contact Id/Opportunity Id/Custom Field Id)

Example:`aWdODOBVOlH1RUFKWQke`

**maxFiles** string

Max number of files

Example:`15`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**uploadedFiles** object

Uploaded files

Example:`{"FileName.csv":"https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"}`

**meta** string\[\]

Meta data of uploaded files

Example:`[{"fieldname":"FileName.csv","originalname":"FileName.csv","encoding":"7bit","mimetype":"text/csv","size":2061,"url":"https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"}]`

```codeBlockLines_e6Vv
{
  "uploadedFiles": {
    "FileName.csv": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
  },
  "meta": [\
    {\
      "fieldname": "FileName.csv",\
      "originalname": "FileName.csv",\
      "encoding": "7bit",\
      "mimetype": "text/csv",\
      "size": 2061,\
      "url": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"\
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)type: httpscopes: locations/customFields.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X POST 'https://services.leadconnectorhq.com/locations/:locationId/customFields/upload' \
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

id

maxFiles

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!