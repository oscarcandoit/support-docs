---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/update-note
category: contacts
scraped: 2025-10-11T23:11:27.845Z
title: Delete Redirect By Id | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/funnels/delete-redirect-by-id/index.html#__docusaurus_skipToContent_fallback)

# Delete Redirect By Id

```
DELETE https://services.leadconnectorhq.com/funnels/lookup/redirect/:id
```

The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.

### Requirements

#### Scope(s)

`funnels/redirect.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/funnels/delete-redirect-by-id/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**id** stringrequired

### Query Parameters

**locationId** stringrequired

Example: 6p2RxpgtMKQwO3E6IUaT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/funnels/delete-redirect-by-id/index.html\#responses "Direct link to Responses")

- 200
- 422

Successful response - URL redirect deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**data** objectrequired

Status of the delete operation

Example:`{"status":"ok"}`

```codeBlockLines_e6Vv
{
  "data": {
    "status": "ok"
  }
}

```

Unprocessable Entity - The provided data is invalid or incomplete

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/funnels/funnels-api#authentication)type: httpscopes: funnels/redirect.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/funnels/lookup/redirect/:id' \
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