---
source: https://marketplace.gohighlevel.com/docs/ghl/custom-fields/update-custom-field-folder
category: custom-fields
scraped: 2025-10-11T23:18:23.821Z
title: Delete Custom Field Folder | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/delete-custom-field-folder/index.html#__docusaurus_skipToContent_fallback)

# Delete Custom Field Folder

```
DELETE https://services.leadconnectorhq.com/custom-fields/folder/:id
```

Create Custom Field Folder

info

Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.

### Requirements

#### Scope(s)

`locations/customFields.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/delete-custom-field-folder/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**id** stringrequired

### Query Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/delete-custom-field-folder/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeded** booleanrequired

Example:`true`

**id** stringrequired

Example:`3v34PM428h8vShlRW1KT`

**key** stringrequired

Example:`custom_object.pet.name`

```codeBlockLines_e6Vv
{
  "succeded": true,
  "id": "3v34PM428h8vShlRW1KT",
  "key": "custom_object.pet.name"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/custom-fields/custom-fields-v-2-api#authentication)type: httpscopes: locations/customFields.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/custom-fields/folder/:id' \
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

id — pathrequired

locationId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!