---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/remove-tags
category: contacts
scraped: 2025-10-11T23:11:27.844Z
title: Update Task Completed | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed/index.html#__docusaurus_skipToContent_fallback)

# Update Task Completed

```
PUT https://services.leadconnectorhq.com/contacts/:contactId/tasks/:taskId/completed
```

Update Task Completed

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**contactId** stringrequired

Contact Id

Example: sx6wyHhbFdRXh302LLNR

**taskId** stringrequired

Task Id

Example: ocQHyuzHvysMo5N5VsXc

- application/json

### Body **required**

**completed** booleanrequired

Example:`true`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**task** object

**id** string

Example:`lJpzYrWdpkC2hX6t2yue`

**title** string

Example:`test`

**body** string

Example:`testing`

**assignedTo** string

Example:`tesTUcmRxWrjqzJS8EjkxNKting`

**dueDate** string

Example:`2021-07-08T02:30:00.000Z`

**completed** boolean

Example:`true`

**contactId** string

Example:`lJpzYrWdpkC2hX6t2yue`

```codeBlockLines_e6Vv
{
  "task": {
    "id": "lJpzYrWdpkC2hX6t2yue",
    "title": "test",
    "body": "testing",
    "assignedTo": "tesTUcmRxWrjqzJS8EjkxNKting",
    "dueDate": "2021-07-08T02:30:00.000Z",
    "completed": true,
    "contactId": "lJpzYrWdpkC2hX6t2yue"
  }
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
curl -L -X PUT 'https://services.leadconnectorhq.com/contacts/:contactId/tasks/:taskId/completed' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "completed": true
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

taskId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "completed": true
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!