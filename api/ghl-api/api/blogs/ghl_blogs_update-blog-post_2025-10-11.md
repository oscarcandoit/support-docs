---
source: https://marketplace.gohighlevel.com/docs/ghl/blogs/update-blog-post
category: blogs
scraped: 2025-10-11T23:15:11.873Z
title: Check url slug | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists/index.html#__docusaurus_skipToContent_fallback)

# Check url slug

```
GET https://services.leadconnectorhq.com/blogs/posts/url-slug-exists
```

The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

### Requirements

#### Scope(s)

`blogs/check-slug.readonly`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Query Parameters

**urlSlug** stringrequired

**locationId** stringrequired

Example: ve9EPM428h8vShlRW1KT

**postId** string

Example: 66f429b8afdce84227a4610d

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**exists** booleanrequired

Indicates whether the url slug exists or not

```codeBlockLines_e6Vv
{
  "exists": true
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)type: httpscopes: blogs/check-slug.readonlyscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/blogs/posts/url-slug-exists' \
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

urlSlug — queryrequired

locationId — queryrequired

Version — headerrequired

\-\-\-2021-07-28

Show optional parameters

postId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!