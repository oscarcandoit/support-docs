---
source: https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api/index.html
category: payments
scraped: 2025-10-11T23:08:54.710Z
title: Delete Calendar Resource | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource/index.html#__docusaurus_skipToContent_fallback)

# Delete Calendar Resource

```
DELETE https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id
```

Delete calendar resource by ID

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**resourceType** stringrequired

**Possible values:** \[ `equipments`, `rooms`\]

Calendar Resource Type

**id** stringrequired

Calendar Resource ID

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Calendar resource deleted

- application/json

- Schema
- Example (auto)

**Schema**

**success** boolean

Success

Example:`true`

```codeBlockLines_e6Vv
{
  "success": "true"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id' \
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

resourceType — pathrequired

\-\-\-equipmentsrooms

id — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!