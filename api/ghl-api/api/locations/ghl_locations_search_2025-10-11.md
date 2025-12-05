---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/search
category: locations
scraped: 2025-10-11T23:17:56.917Z
title: Get Custom Fields | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-fields/index.html#__docusaurus_skipToContent_fallback)

# Get Custom Fields

```
GET https://services.leadconnectorhq.com/locations/:locationId/customFields
```

Get Custom Fields

### Requirements

#### Scope(s)

`locations/customFields.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-fields/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

### Query Parameters

**model** string

**Possible values:** \[ `contact`, `opportunity`, `all`\]

Model of the custom field you want to retrieve

Example: opportunity

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-fields/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customFields** object\[\]

Array \[\
\
**id** string\
\
Example:`3sv6UEo51C9Bmpo1cKTq`\
\
**name** string\
\
Example:`pincode`\
\
**fieldKey** string\
\
Example:`contact.pincode`\
\
**placeholder** string\
\
Example:`Pin code`\
\
**dataType** string\
\
Example:`TEXT`\
\
**position** number\
\
Example:`0`\
\
**picklistOptions** string\[\]\
\
Example:`["first option"]`\
\
**picklistImageOptions** string\[\]\
\
Example:`[]`\
\
**isAllowedCustomOption** boolean\
\
Example:`false`\
\
**isMultiFileAllowed** boolean\
\
Example:`true`\
\
**maxFileLimit** number\
\
Example:`4`\
\
**locationId** string\
\
Example:`3sv6UEo51C9Bmpo1cKTq`\
\
**model** string\
\
Model of the custom field\
\
**Possible values:** \[ `contact`, `opportunity`\]\
\
Example:`opportunity`\
\
\]

```codeBlockLines_e6Vv
{
  "customFields": [\
    {\
      "id": "3sv6UEo51C9Bmpo1cKTq",\
      "name": "pincode",\
      "fieldKey": "contact.pincode",\
      "placeholder": "Pin code",\
      "dataType": "TEXT",\
      "position": 0,\
      "picklistOptions": [\
        "first option"\
      ],\
      "picklistImageOptions": [],\
      "isAllowedCustomOption": false,\
      "isMultiFileAllowed": true,\
      "maxFileLimit": 4,\
      "locationId": "3sv6UEo51C9Bmpo1cKTq",\
      "model": "opportunity"\
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)type: httpscopes: locations/customFields.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/locations/:locationId/customFields' \
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

Show optional parameters

model — query

\-\-\-contactopportunityall

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!