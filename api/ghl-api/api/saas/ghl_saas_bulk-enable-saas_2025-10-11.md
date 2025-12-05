---
source: https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-enable-saas/index.html
category: saas
scraped: 2025-10-11T23:07:33.798Z
title: Delete File or Folder | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content/index.html#__docusaurus_skipToContent_fallback)

# Delete File or Folder

```
DELETE https://services.leadconnectorhq.com/medias/:id
```

Deletes specific file or folder from the media storage

### Requirements

#### Scope(s)

`medias.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**id** stringrequired

### Query Parameters

**altType** stringrequired

**Possible values:** \[ `location`\]

AltType

Example: location

**altId** stringrequired

location Id

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content/index.html\#responses "Direct link to Responses")

- 200

Successful response

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)type: httpscopes: medias.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/medias/:id' \
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

altType — queryrequired

\-\-\-location

altId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!