---
source: https://marketplace.gohighlevel.com/docs/ghl/users/get-user-by-location/index.html
scraped: 2025-10-11T22:44:48.807Z
title: Disable SaaS for locations | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas-deprecated/index.html#__docusaurus_skipToContent_fallback)

# Disable SaaS for locations

```
POST https://services.leadconnectorhq.com/saas-api/public-api/bulk-disable-saas/:companyId
```

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Disable SaaS for locations for given locationIds

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas-deprecated/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**companyId** stringrequired

Company ID to disable SaaS for

Example: 5DP4iH6HLkQsiKESj6rh

- application/json

### Body **required**

**locationIds** string\[\]required

Location IDs

Example:`["locationId1","locationId2"]`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/saas/bulk-disable-saas-deprecated/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 404
- 500

SaaS disabled successfully for locations

- application/json

- Schema
- Example (auto)

**Schema**

**data** objectrequired

Response data from the bulk disable SaaS operation

Example:`{"msg":"success"}`

```codeBlockLines_e6Vv
{
  "data": {
    "msg": "success"
  }
}

```

Bad Request

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Status code

Example:`400`

**message** string

Error message

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

Status code

Example:`401`

**message** string

Error message

Example:`Invalid token: access token is invalid`

**error** string

Error message

Example:`Unauthorized`

```codeBlockLines_e6Vv
{
  "statusCode": 401,
  "message": "Invalid token: access token is invalid",
  "error": "Unauthorized"
}

```

Resource not found

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Status code

Example:`404`

**message** string

Error message

Example:`["Contact not found","User not found","Group not found","Channel not found"]`

```codeBlockLines_e6Vv
{
  "statusCode": 404,
  "message": [\
    "Contact not found",\
    "User not found",\
    "Group not found",\
    "Channel not found"\
  ]
}

```

Internal server error

- application/json

- Schema
- Example (auto)

**Schema**

**statusCode** number

Status code

Example:`500`

**message** string

Error message

Example:`Internal Server Error`

```codeBlockLines_e6Vv
{
  "statusCode": 500,
  "message": "Internal Server Error"
}

```

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas/saas-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Company
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
curl -L 'https://services.leadconnectorhq.com/saas-api/public-api/bulk-disable-saas/:companyId' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "locationIds": [\
    "locationId1",\
    "locationId2"\
  ]
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{
  "locationIds": [\
    "locationId1",\
    "locationId2"\
  ]
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!