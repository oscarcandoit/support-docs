[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token/index.html#__docusaurus_skipToContent_fallback)

# Get Location Access Token from Agency Token

```
POST https://services.leadconnectorhq.com/oauth/locationToken
```

This API allows you to generate locationAccessToken from AgencyAccessToken

### Requirements

#### Scope(s)

`oauth.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Agency Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/x-www-form-urlencoded

### Body **required**

**companyId** stringrequired

Company Id of location you want to request token for

**locationId** stringrequired

The location ID for which you want to obtain accessToken

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**access\_token** string

Location access token which can be used to authenticate & authorize API under following scope

Example:`ab12dc0ae1234a7898f9ff06d4f69gh`

**token\_type** string

Example:`Bearer`

**expires\_in** number

Time in seconds remaining for token to expire

Example:`86399`

**scope** string

Scopes the following accessToken have access to

Example:`conversations/message.readonly conversations/message.write`

**locationId** string

Location ID - Present only for Sub-Account Access Token

Example:`l1C08ntBrFjLS0elLIYU`

**planId** string

Plan Id of the subscribed plan in paid apps.

Example:`l1C08ntBrFjLS0elLIYU`

**userId** stringrequired

USER ID - Represent user id of person who performed installation

Example:`l1C08ntBrFjLS0elLIYU`

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name: Authorizationtype: httpscopes: oauth.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Agency.
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
curl -L -X POST 'https://services.leadconnectorhq.com/oauth/locationToken' \
-H 'Content-Type: application/x-www-form-urlencoded' \
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

Version — headerrequired

\-\-\-2021-07-28

Body required

companyIdrequired

locationIdrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!