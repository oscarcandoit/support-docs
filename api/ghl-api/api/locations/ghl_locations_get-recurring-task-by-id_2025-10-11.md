---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/get-recurring-task-by-id
category: locations
scraped: 2025-10-11T23:17:56.916Z
title: Get Custom Value | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-value/index.html#__docusaurus_skipToContent_fallback)

# Get Custom Value

```
GET https://services.leadconnectorhq.com/locations/:locationId/customValues/:id
```

Get Custom Value

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-value/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

**id** stringrequired

Custom Value Id

Example: kOBjMVAJhFuUeYIojVet

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-value/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**customValue** object

**id** string

Example:`rWQ709Pb62syqGLceg1x`

**name** string

Example:`Custom Field`

**fieldKey** string

Example:`{{ custom_values.custom_field }}`

**value** string

Example:`Value`

**locationId** string

Example:`rWQ709Pb6dasyqGLceg1x`

```codeBlockLines_e6Vv
{
  "customValue": {
    "id": "rWQ709Pb62syqGLceg1x",
    "name": "Custom Field",
    "fieldKey": "{{ custom_values.custom_field }}",
    "value": "Value",
    "locationId": "rWQ709Pb6dasyqGLceg1x"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/locations/:locationId/customValues/:id' \
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

id — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!