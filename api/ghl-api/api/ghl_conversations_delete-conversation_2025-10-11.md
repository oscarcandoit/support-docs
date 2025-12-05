---
source: https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation/index.html
scraped: 2025-10-11T22:45:02.424Z
title: Delete a wallet charge | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge/index.html#__docusaurus_skipToContent_fallback)

# Delete a wallet charge

```
DELETE https://services.leadconnectorhq.com/marketplace/billing/charges/:chargeId
```

Delete a wallet charge

### Requirements

#### Scope(s)

`charges.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge/index.html\#request "Direct link to Request")

### Path Parameters

**chargeId** stringrequired

ID of the charge to delete

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge/index.html\#responses "Direct link to Responses")

- 200
- 404
- 422

Charge deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success** boolean

Example:`true`

```codeBlockLines_e6Vv
{
  "success": true
}

```

Charge not found

- application/json

- Schema
- Example (auto)

**Schema**

**message** string

Example:`Charge not found`

**statusCode** number

Example:`404`

```codeBlockLines_e6Vv
{
  "message": "Charge not found",
  "statusCode": 404
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)type: httpscopes: charges.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/marketplace/billing/charges/:chargeId' \
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

chargeId — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!