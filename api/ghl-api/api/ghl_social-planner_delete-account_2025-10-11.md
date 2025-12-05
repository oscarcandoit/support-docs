---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account/index.html
scraped: 2025-10-11T22:45:34.209Z
title: Get transcription by Message ID | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-transcription/index.html#__docusaurus_skipToContent_fallback)

# Get transcription by Message ID

```
GET https://services.leadconnectorhq.com/conversations/locations/:locationId/messages/:messageId/transcription
```

Get the recording transcription for a message by passing the message id

### Requirements

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-transcription/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-04-15`\]

API Version

### Path Parameters

**locationId** stringrequired

Location ID as string

Example: tDtDnQdgm2LXpyiqYvZ6

**messageId** stringrequired

Message ID as string

Example: tDtDnQdgm2LXpyiqYvZ6

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-transcription/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401

Gives the attached recording transcription to the message

- application/json

- Schema
- Example (auto)

**Schema**

**mediaChannel** numberrequired

Media channel describes the user interaction channel

Example:`1`

**sentenceIndex** numberrequired

Index of the sentence in the transcription

Example:`1`

**startTime** numberrequired

Start time of the sentence in milliseconds

Example:`34`

**endTime** numberrequired

End time of the sentence in milliseconds

Example:`45`

**transcript** stringrequired

Transcript of the sentence

Example:`This call may be recorded for quality assurance purposes.`

**confidence** numberrequired

Confidence of the transcription

Example:`0.5`

```codeBlockLines_e6Vv
{
  "mediaChannel": "1",
  "sentenceIndex": "1",
  "startTime": "34",
  "endTime": "45",
  "transcript": "This call may be recorded for quality assurance purposes.",
  "confidence": "0.5"
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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)type: httpscheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/conversations/locations/:locationId/messages/:messageId/transcription' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security Scheme

bearerLocation-Access

Bearer Token

Parameters

locationId — pathrequired

messageId — pathrequired

Version — headerrequired

\-\-\-2021-04-15

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!