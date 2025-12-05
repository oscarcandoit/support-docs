---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact
category: contacts
scraped: 2025-10-11T23:11:27.842Z
title: Get Note | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note/index.html#__docusaurus_skipToContent_fallback)

# Get Note

```
GET https://services.leadconnectorhq.com/contacts/:contactId/notes/:id
```

Get Note

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**contactId** stringrequired

Contact Id

Example: sx6wyHhbFdRXh302LLNR

**id** stringrequired

Note Id

Example: ocQHyuzHvysMo5N5VsXc

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**note** object

**id** string

Example:`HGPcayliwcdoUFzvbTok`

**body** string

Example:`lorem ipsum`

**userId** string

Example:`TUcmRxWrjqzJS8EjkxNK`

**dateAdded** string

Example:`2021-07-08T12:02:11.285Z`

**contactId** string

Example:`TUcmRxWrjqzJS8EjkxNK`

```codeBlockLines_e6Vv
{
  "note": {
    "id": "HGPcayliwcdoUFzvbTok",
    "body": "lorem ipsum",
    "userId": "TUcmRxWrjqzJS8EjkxNK",
    "dateAdded": "2021-07-08T12:02:11.285Z",
    "contactId": "TUcmRxWrjqzJS8EjkxNK"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/contacts/:contactId/notes/:id' \
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

contactId — pathrequired

id — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!