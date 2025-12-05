---
source: https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-value
category: locations
scraped: 2025-10-11T23:17:56.915Z
title: Delete Sub-Account (Formerly Location) | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-location/index.html#__docusaurus_skipToContent_fallback)

# Delete Sub-Account (Formerly Location)

```
DELETE https://services.leadconnectorhq.com/locations/:locationId
```

Delete a Sub-Account (Formerly Location) from the Agency

### Requirements

#### Scope(s)

`locations.internal-access-only`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-location/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

Example: ve9EPM428h8vShlRW1KT

### Query Parameters

**deleteTwilioAccount** booleanrequired

Boolean value to indicate whether to delete Twilio Account or not

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-location/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success status of the API

Example:`true`

**message** stringrequired

Success message of the API

Example:`Deleted location with id: ve9EPM428h8vShlRW1KT`

```codeBlockLines_e6Vv
{
  "success": true,
  "message": "Deleted location with id: ve9EPM428h8vShlRW1KT"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)type: httpscopes: locations.internal-access-onlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/locations/:locationId' \
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

locationId — pathrequired

deleteTwilioAccount — queryrequired

\-\-\-truefalse

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!