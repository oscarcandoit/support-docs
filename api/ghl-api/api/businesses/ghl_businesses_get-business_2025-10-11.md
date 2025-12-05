---
source: https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business
category: businesses
scraped: 2025-10-11T23:18:50.242Z
title: Get Businesses by Location | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-businesses-by-location/index.html#__docusaurus_skipToContent_fallback)

# Get Businesses by Location

```
GET https://services.leadconnectorhq.com/businesses/
```

Get Businesses by Location

### Requirements

#### Scope(s)

`businesses.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-businesses-by-location/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Example: 5DP4iH6HLkQsiKESj6rh

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-businesses-by-location/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**businesses** object\[\]required

Business Response

Array \[\
\
**id** stringrequired\
\
Business Id\
\
Example:`63771dcac1116f0e21de8e12`\
\
**name** stringrequired\
\
Business Name\
\
Example:`Microsoft`\
\
**phone** string\
\
phone number\
\
**email** string\
\
email\
\
Example:`abc@microsoft.com`\
\
**website** string\
\
website\
\
Example:`microsoft.com`\
\
**address** string\
\
address\
\
**city** string\
\
city\
\
**description** string\
\
description\
\
**state** string\
\
state\
\
**postalCode** string\
\
postal code\
\
**country** string\
\
country\
\
Example:`united states`\
\
**updatedBy** object\
\
updated By\
\
**locationId** stringrequired\
\
locaitonId\
\
**createdBy** object\
\
Created By\
\
**createdAt** date-time\
\
Creation Time\
\
**updatedAt** date-time\
\
Last updation time\
\
\]

```codeBlockLines_e6Vv
{
  "businesses": [\
    {\
      "id": "63771dcac1116f0e21de8e12",\
      "name": "Microsoft",\
      "phone": "string",\
      "email": "abc@microsoft.com",\
      "website": "microsoft.com",\
      "address": "string",\
      "city": "string",\
      "description": "string",\
      "state": "string",\
      "postalCode": "string",\
      "country": "united states",\
      "updatedBy": {},\
      "locationId": "string",\
      "createdBy": {},\
      "createdAt": "2024-07-29T15:51:28.071Z",\
      "updatedAt": "2024-07-29T15:51:28.071Z"\
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/businesses/business-api#authentication)type: httpscopes: businesses.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/businesses/' \
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

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!