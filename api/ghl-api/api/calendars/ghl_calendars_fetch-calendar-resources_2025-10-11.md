---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/fetch-calendar-resources
category: calendars
scraped: 2025-10-11T23:09:14.966Z
title: Create Note | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment-note/index.html#__docusaurus_skipToContent_fallback)

# Create Note

```
POST https://services.leadconnectorhq.com/calendars/appointments/:appointmentId/notes
```

Create Note

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment-note/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**appointmentId** stringrequired

Appointment ID

- application/json

### Body **required**

**userId** string

Example:`GCs5KuzPqTls7vWclkEV`

**body** stringrequired

Note body

**Possible values:** `<= 5000 characters`

Example:`lorem ipsum`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment-note/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**note** object

**id** string

Example:`HGPcayliwcdoUFzvbTok`

**body** string

Example:`lorem ipsum`

**userId** string

Example:`TUcmRxWrjqzJS8EjkxNK`

**dateAdded** string

Example:`2021-07-08T12:02:11.285Z`

**contactId** string

Example:`TUcmRxWrjqzJS8EjkxNK`

**createdBy** object

**id** string

Example:`TUcmRxWr`

**name** string

Example:`John Doe`

```codeBlockLines_e6Vv
{
  "note": {
    "id": "HGPcayliwcdoUFzvbTok",
    "body": "lorem ipsum",
    "userId": "TUcmRxWrjqzJS8EjkxNK",
    "dateAdded": "2021-07-08T12:02:11.285Z",
    "contactId": "TUcmRxWrjqzJS8EjkxNK",
    "createdBy": {
      "id": "TUcmRxWr",
      "name": "John Doe"
    }
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

## Share your feedback

★★★★★

#### Authorization: Authorization

```
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)type: httpscopes: calendars/events.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/calendars/appointments/:appointmentId/notes' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "userId": "GCs5KuzPqTls7vWclkEV",
  "body": "lorem ipsum"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

appointmentId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{
  "userId": "GCs5KuzPqTls7vWclkEV",
  "body": "lorem ipsum"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!