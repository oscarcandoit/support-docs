---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/create-location
category: locations
scraped: 2025-10-11T23:17:56.912Z
title: Delete Recurring Task | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task/index.html#__docusaurus_skipToContent_fallback)

# Delete Recurring Task

```
DELETE https://services.leadconnectorhq.com/locations/:locationId/recurring-tasks/:id
```

Delete Recurring Task

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**id** stringrequired

Recurring Task Id

Example: sx6wyHhbFdRXh302Lunr

**locationId** stringrequired

Location Id

Example: sx6wyHhbFdRXh302Lunr

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id** stringrequired

Recurring Task Id

Example:`sx6wyHhbFdRXh302Lunr`

**success** booleanrequired

Success

Example:`true`

```codeBlockLines_e6Vv
{
  "id": "sx6wyHhbFdRXh302Lunr",
  "success": true
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/locations/:locationId/recurring-tasks/:id' \
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

locationId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!