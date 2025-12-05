---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/timezone/index.html
category: locations
scraped: 2025-10-11T23:17:56.911Z
title: Create Custom Field | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-field/index.html#__docusaurus_skipToContent_fallback)

# Create Custom Field

```
POST https://services.leadconnectorhq.com/locations/:locationId/customFields
```

Create Custom Field

### Requirements

#### Scope(s)

`locations/customFields.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-field/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

- application/json

### Body **required**

**name** stringrequired

Example:`Custom Field`

**dataType** stringrequired

Example:`TEXT`

**placeholder** string

Example:`Placeholder Text`

**acceptedFormat** string\[\]

Example:`[".pdf",".docx",".jpeg"]`

**isMultipleFile** boolean

Example:`false`

**maxNumberOfFiles** number

Example:`2`

**textBoxListOptions** object\[\]

Array \[\
\
anyOf\
\
- textBoxListOptionsSchema\
- textBoxListOptionsSchema\
\
**label** string\
\
Example:`First`\
\
**prefillValue** string\
\
Example:``\
\
**label** string\
\
Example:`First`\
\
**prefillValue** string\
\
Example:``\
\
\]

**position** number

**Default value:** `0`

Example:`0`

**model** string

Model of the custom field you want to create

**Possible values:** \[ `contact`, `opportunity`\]

Example:`opportunity`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-field/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customField** object

**id** string

Example:`3sv6UEo51C9Bmpo1cKTq`

**name** string

Example:`pincode`

**fieldKey** string

Example:`contact.pincode`

**placeholder** string

Example:`Pin code`

**dataType** string

Example:`TEXT`

**position** number

Example:`0`

**picklistOptions** string\[\]

Example:`["first option"]`

**picklistImageOptions** string\[\]

Example:`[]`

**isAllowedCustomOption** boolean

Example:`false`

**isMultiFileAllowed** boolean

Example:`true`

**maxFileLimit** number

Example:`4`

**locationId** string

Example:`3sv6UEo51C9Bmpo1cKTq`

**model** string

Model of the custom field

**Possible values:** \[ `contact`, `opportunity`\]

Example:`opportunity`

```codeBlockLines_e6Vv
{
  "customField": {
    "id": "3sv6UEo51C9Bmpo1cKTq",
    "name": "pincode",
    "fieldKey": "contact.pincode",
    "placeholder": "Pin code",
    "dataType": "TEXT",
    "position": 0,
    "picklistOptions": [\
      "first option"\
    ],
    "picklistImageOptions": [],
    "isAllowedCustomOption": false,
    "isMultiFileAllowed": true,
    "maxFileLimit": 4,
    "locationId": "3sv6UEo51C9Bmpo1cKTq",
    "model": "opportunity"
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
curl -L 'https://services.leadconnectorhq.com/locations/:locationId/customFields' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "name": "Custom Field",
  "dataType": "TEXT",
  "placeholder": "Placeholder Text",
  "acceptedFormat": [\
    ".pdf",\
    ".docx",\
    ".jpeg"\
  ],
  "isMultipleFile": false,
  "maxNumberOfFiles": 2,
  "textBoxListOptions": [\
    {\
      "label": "First",\
      "prefillValue": ""\
    },\
    {\
      "label": "First",\
      "prefillValue": ""\
    }\
  ],
  "position": 0,
  "model": "opportunity"
}'

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

```
{
  "name": "Custom Field",
  "dataType": "TEXT",
  "placeholder": "Placeholder Text",
  "acceptedFormat": [\
    ".pdf",\
    ".docx",\
    ".jpeg"\
  ],
  "isMultipleFile": false,
  "maxNumberOfFiles": 2,
  "textBoxListOptions": [\
    {\
      "label": "First",\
      "prefillValue": ""\
    },\
    {\
      "label": "First",\
      "prefillValue": ""\
    }\
  ],
  "position": 0,
  "model": "opportunity"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!