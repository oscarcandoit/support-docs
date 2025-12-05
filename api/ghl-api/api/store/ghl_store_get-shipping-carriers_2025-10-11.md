---
source: https://marketplace.gohighlevel.com/docs/ghl/store/get-shipping-carriers/index.html
category: store
scraped: 2025-10-11T23:15:42.528Z
title: Get all relations By record Id | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/associations/get-relations-by-record-id/index.html#__docusaurus_skipToContent_fallback)

# Get all relations By record Id

```
GET https://services.leadconnectorhq.com/associations/relations/:recordId
```

Get all relations by record Id

### Requirements

#### Scope(s)

`associations/relation.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/associations/get-relations-by-record-id/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**recordId** stringrequired

### Query Parameters

**locationId** stringrequired

Your Sub Account's ID

Example: clF1LD04GTUKN3b3XuOj

**skip** numberrequired

Example: 10

**limit** numberrequired

Example: 100

**associationIds** string\[\]

Association Ids

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/associations/get-relations-by-record-id/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**locationId** stringrequired

Example:`string`

**id** stringrequired

Example:`ve9EPM428h8vShlRW1KT`

**key** stringrequired

First Objects Association Label (custom\_objects.children)

Example:`student`

**firstObjectLabel** objectrequired

First Objects Association Label (custom\_objects.children)

Example:`student`

**firstObjectKey** objectrequired

First Objects Key

Example:`custom_objects.children`

**secondObjectLabel** objectrequired

Second Object Association Label (contact)

Example:`Teacher`

**secondObjectKey** objectrequired

Second Objects Key

Example:`contact`

**associationType** objectrequired

Association Type can be USER\_DEFINED or SYSTEM\_DEFINED

Example:`USER_DEFINED`

```codeBlockLines_e6Vv
{
  "locationId": "string",
  "id": "ve9EPM428h8vShlRW1KT",
  "key": "student",
  "firstObjectLabel": "student",
  "firstObjectKey": "custom_objects.children",
  "secondObjectLabel": "Teacher",
  "secondObjectKey": "contact",
  "associationType": "USER_DEFINED"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/associations/associations-api#authentication)type: httpscopes: associations/relation.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/associations/relations/:recordId' \
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

recordId — pathrequired

locationId — queryrequired

skip — queryrequired

limit — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

associationIds — query

Add item

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!