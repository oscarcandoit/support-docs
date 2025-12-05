---
source: https://marketplace.gohighlevel.com/docs/ghl/objects/update-custom-object/index.html
category: objects
scraped: 2025-10-11T23:15:11.866Z
title: Delete User | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user/index.html#__docusaurus_skipToContent_fallback)

# Delete User

```
DELETE https://services.leadconnectorhq.com/users/:userId
```

Delete User

### Requirements

#### Scope(s)

`users.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Agency Token` `Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeded** boolean

Example:`true`

**message** string

Example:`Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes.`

```codeBlockLines_e6Vv
{
  "succeded": true,
  "message": "Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes."
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/users/users-api#authentication)type: httpscopes: users.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/users/:userId' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security Scheme

Agency-AccessLocation-Access

Bearer Token

Parameters

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!