---
source: https://marketplace.gohighlevel.com/docs/ghl/associations/update-association
category: associations
scraped: 2025-10-11T23:16:08.477Z
title: Remove Followers | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/remove-followers-opportunity/index.html#__docusaurus_skipToContent_fallback)

# Remove Followers

```
DELETE https://services.leadconnectorhq.com/opportunities/:id/followers
```

Remove Followers

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/remove-followers-opportunity/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**id** stringrequired

Opportunity Id

Example: sx6wyHhbFdRXh302Lunr

- application/json

### Body **required**

**followers** string\[\]required

Example:`["sx6wyHhbFdRXh302Lunr","sx6wyHhbFdRXh302Lunr"]`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/remove-followers-opportunity/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**followers** string\[\]

Example:`["sx6wyHhbFdRXh302Lunr","sx6wyHhbFdRXh302LLss"]`

**followersRemoved** string\[\]

Example:`["Mx6wyHhbFdRXh302Luer","Ka6wyHhbFdRXh302LLsAm"]`

```codeBlockLines_e6Vv
{
  "followers": [\
    "sx6wyHhbFdRXh302Lunr",\
    "sx6wyHhbFdRXh302LLss"\
  ],
  "followersRemoved": [\
    "Mx6wyHhbFdRXh302Luer",\
    "Ka6wyHhbFdRXh302LLsAm"\
  ]
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api#authentication)type: httpscopes: opportunities.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/opportunities/:id/followers' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "followers": [\
    "sx6wyHhbFdRXh302Lunr",\
    "sx6wyHhbFdRXh302Lunr"\
  ]
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "followers": [\
    "sx6wyHhbFdRXh302Lunr",\
    "sx6wyHhbFdRXh302Lunr"\
  ]
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!