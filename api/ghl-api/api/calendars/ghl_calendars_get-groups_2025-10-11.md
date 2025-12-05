---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups
category: calendars
scraped: 2025-10-11T23:09:42.922Z
title: Get Groups | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups/index.html#__docusaurus_skipToContent_fallback)

# Get Groups

```
GET https://services.leadconnectorhq.com/calendars/groups
```

Get all calendar groups in a location.

### Requirements

#### Scope(s)

`calendars/groups.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Query Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**groups** object\[\]

Array \[\
\
**locationId** stringrequired\
\
Example:`ocQHyuzHvysMo5N5VsXc`\
\
**name** stringrequired\
\
Example:`group a`\
\
**description** stringrequired\
\
Example:`group description`\
\
**slug** stringrequired\
\
Example:`15-mins`\
\
**isActive** boolean\
\
Example:`true`\
\
**id** string\
\
Example:`ocQHyuzHvysMo5N5VsXc`\
\
\]

```codeBlockLines_e6Vv
{
  "groups": [\
    {\
      "locationId": "ocQHyuzHvysMo5N5VsXc",\
      "name": "group a",\
      "description": "group description",\
      "slug": "15-mins",\
      "isActive": true,\
      "id": "ocQHyuzHvysMo5N5VsXc"\
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

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)type: httpscopes: calendars/groups.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/calendars/groups' \
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

locationId — queryrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!