---
source: https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms
category: forms
scraped: 2025-10-11T23:15:42.530Z
title: Delete shipping zone | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-zone/index.html#__docusaurus_skipToContent_fallback)

# Delete shipping zone

```
DELETE https://services.leadconnectorhq.com/store/shipping-zone/:shippingZoneId
```

Delete specific shipping zone with Id :shippingZoneId

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-zone/index.html\#request "Direct link to Request")

### Path Parameters

**shippingZoneId** stringrequired

ID of the item that needs to be returned

Example: 6578278e879ad2646715ba9c

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

Example: 6578278e879ad2646715ba9c

**altType** stringrequired

**Possible values:** \[ `location`\]

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-zone/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status** booleanrequired

Status of api action

Example:`true`

**message** string

Success message

Example:`Successfully created`

```codeBlockLines_e6Vv
{
  "status": true,
  "message": "Successfully created"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/store/store-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/store/shipping-zone/:shippingZoneId' \
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

shippingZoneId — pathrequired

altId — queryrequired

altType — queryrequired

\-\-\-location

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!