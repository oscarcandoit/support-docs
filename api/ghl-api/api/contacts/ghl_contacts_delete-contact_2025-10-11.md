---
source: https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact
category: contacts
scraped: 2025-10-11T23:11:04.072Z
title: Add/Remove Contacts From Business | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business/index.html#__docusaurus_skipToContent_fallback)

# Add/Remove Contacts From Business

```
POST https://services.leadconnectorhq.com/contacts/bulk/business
```

Add/Remove Contacts From Business . Passing a `null` businessId will remove the businessId from the contacts

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business/index.html\#request "Direct link to Request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[ `2021-07-28`\]

API Version

- application/json

### Body **required**

**locationId** stringrequired

Example:`PX8m5VwxEbcpFlzYEPVG`

**ids** string\[\]required

**Possible values:** `<= 50 characters`

Example:`["IDqvFHGColiyK6jiatuz","pOC0uJ97VYOKH2m3fkMD"]`

**businessId** stringnullablerequired

Example:`63b7ec34ea409a9a8bd2a4ff`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business/index.html\#responses "Direct link to Responses")

- 200
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success** booleanrequired

Example:`true`

**ids** string\[\]required

Example:`["pOC0uJ97VYOKH2m3fkMD"]`

```codeBlockLines_e6Vv
{
  "success": true,
  "ids": [\
    "pOC0uJ97VYOKH2m3fkMD"\
  ]
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
curl -L 'https://services.leadconnectorhq.com/contacts/bulk/business' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
  "locationId": "PX8m5VwxEbcpFlzYEPVG",
  "ids": [\
    "IDqvFHGColiyK6jiatuz",\
    "pOC0uJ97VYOKH2m3fkMD"\
  ],
  "businessId": "63b7ec34ea409a9a8bd2a4ff"
}'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

Version — headerrequired

\-\-\-2021-07-28

Body required

```
{
  "locationId": "PX8m5VwxEbcpFlzYEPVG",
  "ids": [\
    "IDqvFHGColiyK6jiatuz",\
    "pOC0uJ97VYOKH2m3fkMD"\
  ],
  "businessId": "63b7ec34ea409a9a8bd2a4ff"
}

```

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!