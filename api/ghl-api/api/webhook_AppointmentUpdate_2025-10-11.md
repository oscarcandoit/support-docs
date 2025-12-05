---
source: https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate/index.html
scraped: 2025-10-11T22:45:34.207Z
title: Create a new template | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template/index.html#__docusaurus_skipToContent_fallback)

# Create a new template

```
POST https://services.leadconnectorhq.com/emails/builder
```

Create a new template

### Requirements

#### Scope(s)

`emails/builder.write`

#### Auth Method(s)

`OAuth Access Token` `Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**locationId** stringrequired

Example:`ve9EPM428h8vShlRW1KT`

**title** string

Example:`template title`

**type** stringrequired

**Possible values:** \[ `html`, `folder`, `import`, `builder`, `blank`\]

**updatedBy** string

Example:`zYy3YOUuHxgomU1uYJty`

**builderVersion** string

**Possible values:** \[ `1`, `2`\]

**Default value:** `2`

**name** string

Example:`Template1`

**parentId** string

Example:`zYy3YOUuHxgomU1uYJty`

**templateDataUrl** string

Example:``

**importProvider** stringrequired

**Possible values:** \[ `mailchimp`, `active_campaign`, `kajabi`\]

**importURL** string

Example:`https://tplshare.com/fhYJ3Mi`

**templateSource** string

Example:`template_library`

**isPlainText** boolean

Example:`false`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template/index.html\#responses "Direct link to Responses")

- 201
- 400
- 401
- 404
- 422

Success

- application/json

- Schema
- Example (auto)

**Schema**

**redirect** stringrequired

template id

Example:`66e811229245fc098765590`

**traceId** stringrequired

trace id

Example:`0c52e980-41f6-4be7-8c4b-e2c5a13dc3c2`

```codeBlockLines_e6Vv
{
  "redirect": "66e811229245fc098765590",
  "traceId": "0c52e980-41f6-4be7-8c4b-e2c5a13dc3c2"
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

Not Found

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
name:  [Authorization](https://marketplace.gohighlevel.com/docs/ghl/emails/email-api#authentication)type: httpscopes: emails/builder.writescheme: bearerbearerFormat: JWTin: headerdescription: Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.
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
curl -L 'https://services.leadconnectorhq.com/emails/builder' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "title": "template title",
  "type": "html",
  "updatedBy": "zYy3YOUuHxgomU1uYJty",
  "builderVersion": "2",
  "name": "Template1",
  "parentId": "zYy3YOUuHxgomU1uYJty",
  "templateDataUrl": "",
  "importProvider": "mailchimp",
  "importURL": "https://tplshare.com/fhYJ3Mi",
  "templateSource": "template_library",
  "isPlainText": false
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

\-\-\-2021-07-28

Body required

```
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "title": "template title",
  "type": "html",
  "updatedBy": "zYy3YOUuHxgomU1uYJty",
  "builderVersion": "2",
  "name": "Template1",
  "parentId": "zYy3YOUuHxgomU1uYJty",
  "templateDataUrl": "",
  "importProvider": "mailchimp",
  "importURL": "https://tplshare.com/fhYJ3Mi",
  "templateSource": "template_library",
  "isPlainText": false
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!