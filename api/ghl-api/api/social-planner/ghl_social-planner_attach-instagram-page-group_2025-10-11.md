---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/attach-instagram-page-group/index.html
category: social-planner
scraped: 2025-10-11T23:08:00.726Z
title: Get Twitter profile | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-twitter-profile/index.html#__docusaurus_skipToContent_fallback)

# Get Twitter profile

```
GET https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/twitter/accounts/:accountId
```

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-twitter-profile/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

### Path Parameters

**locationId** stringrequired

Account Location Id

Example: w37swmmLbA02zgqKPpxITe2

**accountId** stringrequired

Account Id

Example: w37swmmLbA02zgqKPpxITe

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-twitter-profile/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Success or Failure

Example:`true`

**statusCode** numberrequired

Status Code

Example:`200`

**message** stringrequired

Message

Example:`Fetched Twitter Account`

**results** object

Requested Results

**profile** object\[\]

Twitter Profile Details

Array \[\
\
**id** string\
\
ID of profile\
\
Example:`ZHl1OWpfZEMyeWc5UjJOOU51RVNOal`\
\
**name** string\
\
Name of profile\
\
Example:`Twitter Account name`\
\
**username** string\
\
Username of profile\
\
Example:`sample_user`\
\
**avatar** string\
\
Avatar of profile\
\
Example:`ZHl1OWpfZEMyeWc5UjJOOU51RVNOal`\
\
**protected** boolean\
\
Is protected\
\
Example:`true`\
\
**verified** boolean\
\
Is verified\
\
Example:`true`\
\
**isConnected** boolean\
\
Is connected\
\
Example:`true`\
\
\]

```codeBlockLines_e6Vv
{
  "success": true,
  "statusCode": 200,
  "message": "Fetched Twitter Account",
  "results": {
    "profile": [\
      {\
        "id": "ZHl1OWpfZEMyeWc5UjJOOU51RVNOal",\
        "name": "Twitter Account name",\
        "username": "sample_user",\
        "avatar": "ZHl1OWpfZEMyeWc5UjJOOU51RVNOal",\
        "protected": true,\
        "verified": true,\
        "isConnected": true\
      }\
    ]
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
curl -L 'https://services.leadconnectorhq.com/social-media-posting/oauth/:locationId/twitter/accounts/:accountId' \
-H 'Accept: application/json'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

locationId — pathrequired

accountId — pathrequired

Version — headerrequired

\-\-\-2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!