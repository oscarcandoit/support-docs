---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/get-task
category: contacts
scraped: 2025-10-11T23:11:27.842Z
title: Get Duplicate Contact | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact/index.html#__docusaurus_skipToContent_fallback)

# Get Duplicate Contact

```
GET https://services.leadconnectorhq.com/contacts/search/duplicate
```

Get Duplicate Contact.

If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Location Id

Example: sadadya1u12basyhasd

**number** string

Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`

Example: +1423164516

**email** string

Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`

Example: abc@abc.com

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api#authentication)type: httpscopes: contacts.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/contacts/search/duplicate' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

number — query

email — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!