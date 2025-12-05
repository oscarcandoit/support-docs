---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api
category: contacts
scraped: 2025-10-11T23:11:04.071Z
title: Add Contact to Workflow | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow/index.html#__docusaurus_skipToContent_fallback)

# Add Contact to Workflow

```
POST https://services.leadconnectorhq.com/contacts/:contactId/workflow/:workflowId
```

Add Contact to Workflow

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**contactId** stringrequired

Contact Id

Example: sx6wyHhbFdRXh302LLNR

**workflowId** stringrequired

Workflow Id

Example: sx6wyHhbFdRXh302LLNR

- application/json

### Body

**eventStartTime** string

Example:`2021-06-23T03:30:00+01:00`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow/index.html\#responses "Direct link to Responses")

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

```codeBlockLines_e6Vv
{
  "succeded": true
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/contacts/:contactId/workflow/:workflowId' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "eventStartTime": "2021-06-23T03:30:00+01:00"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

workflowId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Body

```
{
  "eventStartTime": "2021-06-23T03:30:00+01:00"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!