---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification
category: calendars
scraped: 2025-10-11T23:09:14.962Z
title: Delete Event | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-event/index.html#__docusaurus_skipToContent_fallback)

# Delete Event

```
DELETE https://services.leadconnectorhq.com/calendars/events/:eventId
```

Delete event by ID

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-event/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**eventId** stringrequired

Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

Examples:

- example1
- example2

Event ID

Example: `ocQHyuzHvysMo5N5VsXc`

Recurring Instance ID

Example: `ocQHyuzHvysMo5N5VsXc_1729821600000_1800`

- application/json

### Body **required**

object

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-event/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded** boolean

Example:`true`

```codeBlockLines_e6Vv
{
  "succeeded": true
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/events/:eventId' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

eventId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!