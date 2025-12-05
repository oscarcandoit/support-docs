---
source: https://marketplace.gohighlevel.com/docs/ghl/forms/forms-api
category: forms
scraped: 2025-10-11T23:15:42.530Z
title: Upload files to custom fields | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields/index.html#__docusaurus_skipToContent_fallback)

# Upload files to custom fields

```
POST https://services.leadconnectorhq.com/forms/upload-custom-files
```

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom\_field\_id >\_< file\_id >".

Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid)

There is support for multiple file uploads as well. Have multiple fields in the format mentioned.

File size is limited to 50 MB.

The allowed file types are:

- PDF
- DOCX
- DOC
- JPG
- JPEG
- PNG
- GIF
- CSV
- XLSX
- XLS
- MP4
- MPEG
- ZIP
- RAR
- TXT
- SVG

The API will return the updated contact object.

### Requirements

#### Scope(s)

`forms.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**contactId** stringrequired

Contact ID to upload the file to.

Example: dtEv6KtI27yF92YPm3Zz

**locationId** stringrequired

Location ID of the contact.

Example: quXmPY59n1zgGBabY1bZ

- multipart/form-data

### Body **required**

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/forms/forms-api#authentication)type: httpscopes: forms.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X POST 'https://services.leadconnectorhq.com/forms/upload-custom-files' \
-H 'Content-Type: multipart/form-data' \
-H 'Authorization: Bearer <TOKEN>' \
-d ''

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security Scheme

bearerLocation-Access

Bearer Token

Parameters

contactId — queryrequired

locationId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Body required

```

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!