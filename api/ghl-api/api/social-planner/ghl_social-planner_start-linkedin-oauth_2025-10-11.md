---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html
category: social-planner
scraped: 2025-10-11T23:08:00.728Z
title: Starts OAuth For LinkedIn Account | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html#__docusaurus_skipToContent_fallback)

# Starts OAuth For LinkedIn Account

```
GET https://services.leadconnectorhq.com/social-media-posting/oauth/linkedin/start
```

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.

### Sample code to listen to event data: [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html\#sample-code-to-listen-to-event-data "Direct link to Sample code to listen to event data:")

window.addEventListener('message',
function(e) {
if (e.data && e.data.page === 'social\_media\_posting') {
const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
}
},
false)

### Event Data Response: [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html\#event-data-response "Direct link to Event Data Response:")

{
actionType: string, Ex: "close"
page: string, Ex: "social-media-posting"
platform: string, Ex: "linkedin"
placement: string, Ex: "placement"
accountId: string, Ex: "658a9b6833b91e0ecb8f3958"
reconnectAccounts: string\[\]\] Ex: \["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"\]
}

### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API - [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html\#the-accountid-retrieved-from-above-data-can-be-used-to-fetch-linkedin-account-details-using-below-api-- "Direct link to The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -")

API: '/social-media-posting/oauth/linkedin/accounts/:accountId'

Method: GET

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**locationId** stringrequired

Location Id

Example: w37swmmLbA02zgqKPpxITe2

**userId** stringrequired

User Id

Example: u37swmmLbA02zgqKPpxITe2

**page** string

Page

Example: integration

**reconnect** string

Reconnect

Example: integration

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-linkedin-oauth/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful Response

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
curl -L 'https://services.leadconnectorhq.com/social-media-posting/oauth/linkedin/start' \
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

userId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

page — query

reconnect — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!