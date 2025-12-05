---
source: https://marketplace.gohighlevel.com/docs/ghl/associations/associations-api
category: associations
scraped: 2025-10-11T23:16:08.474Z
title: Delete Association | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association/index.html#__docusaurus_skipToContent_fallback)

# Delete Association

```
DELETE https://services.leadconnectorhq.com/associations/:associationId
```

Delete USER\_DEFINED Association By Id, deleting an association will also all the relations for that association

### Requirements

#### Scope(s)

`associations.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**associationId** stringrequired

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**deleted** booleanrequired

Deletion status

Example:`true`

**id** stringrequired

Association Id

Example:`6d6f6e676f5f6576656e7473`

**message** stringrequired

Example:`Association deleted successfully`

```codeBlockLines_e6Vv
{
  "deleted": true,
  "id": "6d6f6e676f5f6576656e7473",
  "message": "Association deleted successfully"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/associations/associations-api#authentication)type: httpscopes: associations.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/associations/:associationId' \
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

associationId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!