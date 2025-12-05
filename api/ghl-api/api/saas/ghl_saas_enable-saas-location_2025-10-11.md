---
source: https://marketplace.gohighlevel.com/docs/ghl/saas/enable-saas-location/index.html
category: saas
scraped: 2025-10-11T23:07:33.800Z
title: Bulk Delete / Trash Files or Folders | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects/index.html#__docusaurus_skipToContent_fallback)

# Bulk Delete / Trash Files or Folders

```
PUT https://services.leadconnectorhq.com/medias/delete-files
```

Soft-deletes or trashes multiple files and folders in a single request

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**filesToBeDeleted** object\[\]required

Array of file objects to be deleted or trashed

Array \[\
\
**\_id** stringrequired\
\
Unique identifier of the file or folder to be deleted\
\
Example:`686f630df0d3166d68fbcec2`\
\
\]

**altType** stringrequired

Type of entity that owns the files

**Possible values:** \[ `location`\]

Example:`location`

**altId** stringrequired

Location identifier

Example:`sx6wyHhbFdRXh302LLNR`

**status** stringrequired

Status to set for the files (deleted or trashed)

**Possible values:** \[ `deleted`, `trashed`\]

Example:`deleted`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects/index.html\#responses "Direct link to Responses")

- 200

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

```codeBlockLines_e6Vv
[\
  {\
    "deleted": true,\
    "id": "686f630df0d3166d68fbcec2"\
  }\
]

```

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X PUT 'https://services.leadconnectorhq.com/medias/delete-files' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "filesToBeDeleted": [\
    {\
      "_id": "686f630df0d3166d68fbcec2"\
    }\
  ],
  "altType": "location",
  "altId": "sx6wyHhbFdRXh302LLNR",
  "status": "deleted"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "filesToBeDeleted": [\
    {\
      "_id": "686f630df0d3166d68fbcec2"\
    }\
  ],
  "altType": "location",
  "altId": "sx6wyHhbFdRXh302LLNR",
  "status": "deleted"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!