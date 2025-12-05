---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-location-id/index.html
category: social-planner
scraped: 2025-10-11T23:08:00.723Z
title: Get google business locations | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-google-locations/index.html#__docusaurus_skipToContent_fallback)

# Get google business locations

```
GET https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/google/locations/:accountId
```

Get google business locations

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-google-locations/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Account Location Id

Example: w37swmmLbA02zgqKPpxITe2

**accountId** stringrequired

Account Id

Example: w37swmmLbA02zgqKPpxITe

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-google-locations/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success or Failure

Example:`true`

**statusCode** numberrequired

Status Code

Example:`200`

**message** stringrequired

Message

Example:`Fetched Google Business Account`

**results** object

Requested Results

**locations** object

Locations

**location** object

Google Location Details

**name** string

Example:`accounts/114659701071209971352`

**storeCode** string

Example:`w37swmmLbA02zgqKPpxITe`

**title** string

Example:`Location Title`

**metadata** object

Meta data not related to User

Example:`{}`

**storefrontAddress** object

Store front address

Example:`{}`

**relationshipData** object

All locations and chain related to this one

Example:`{}`

**maxLocation** boolean

Example:`true`

**isVerified** boolean

Example:`true`

**isConnected** boolean

Example:`true`

**account** object

Google Account Details

**name** string

Example:`accounts/114659701071209971352`

**accountName** string

Example:`Account Name Test`

**type** string

Example:`PERSONAL`

**verificationState** string

Example:`UNVERIFIED`

**vettedState** string

Example:`NOT_VETTED`

```codeBlockLines_e6Vv
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Google Business Account",
  "results": {
    "locations": {
      "location": {
        "name": "accounts/114659701071209971352",
        "storeCode": "w37swmmLbA02zgqKPpxITe",
        "title": "Location Title",
        "metadata": {},
        "storefrontAddress": {},
        "relationshipData": {},
        "maxLocation": true,
        "isVerified": true,
        "isConnected": true
      },
      "account": {
        "name": "accounts/114659701071209971352",
        "accountName": "Account Name Test",
        "type": "PERSONAL",
        "verificationState": "UNVERIFIED",
        "vettedState": "NOT_VETTED"
      }
    }
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/google/locations/:accountId' \
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

accountId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!