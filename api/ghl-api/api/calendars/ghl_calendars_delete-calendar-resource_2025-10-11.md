---
source: https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource
category: calendars
scraped: 2025-10-11T23:09:14.963Z
title: Create Block Slot | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-block-slot/index.html#__docusaurus_skipToContent_fallback)

# Create Block Slot

```
POST https://services.leadconnectorhq.com/calendars/events/block-slots
```

Create block slot

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-block-slot/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

- application/json

### Body **required**

**title** string

Title

Example:`Test Event`

**calendarId** stringrequired

Either calendarId or assignedUserId can be set, not both.

Example:`CVokAlI8fgw4WYWoCtQz`

**assignedUserId** string

Either calendarId or assignedUserId can be set, not both.

Example:`CVokAlI8fgw4WYWoCtQz`

**locationId** stringrequired

Location Id

Example:`C2QujeCh8ZnC7al2InWR`

**startTime** string

Start Time

Example:`2021-06-23T03:30:00+05:30`

**endTime** string

End Time

Example:`2021-06-23T04:30:00+05:30`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-block-slot/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id** stringrequired

Id

Example:`0TkCdp9PfvLeWKYRRvIz`

**locationId** stringrequired

Location Id

Example:`C2QujeCh8ZnC7al2InWR`

**title** stringrequired

Title

Example:`My event`

**startTime** objectrequired

Start Time

Example:`2021-06-23T03:30:00+05:30`

**endTime** objectrequired

End Time

Example:`2021-06-23T04:30:00+05:30`

**calendarId** string

Calendar id

Example:`CVokAlI8fgw4WYWoCtQz`

**assignedUserId** string

Assigned User Id

Example:`0007BWpSzSwfiuSl0tR2`

```codeBlockLines_e6Vv
{
  "id": "0TkCdp9PfvLeWKYRRvIz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "title": "My event",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "assignedUserId": "0007BWpSzSwfiuSl0tR2"
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
curl -L 'https://services.leadconnectorhq.com/calendars/events/block-slots' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "title": "Test Event",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "assignedUserId": "CVokAlI8fgw4WYWoCtQz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired

\-\-\-2021-04-15

Body required

```
{
  "title": "Test Event",
  "calendarId": "CVokAlI8fgw4WYWoCtQz",
  "assignedUserId": "CVokAlI8fgw4WYWoCtQz",
  "locationId": "C2QujeCh8ZnC7al2InWR",
  "startTime": "2021-06-23T03:30:00+05:30",
  "endTime": "2021-06-23T04:30:00+05:30"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!