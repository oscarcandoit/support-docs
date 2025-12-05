---
source: https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing
category: conversations
scraped: 2025-10-11T23:17:03.270Z
title: Cancel a scheduled email message. | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message/index.html#__docusaurus_skipToContent_fallback)

# Cancel a scheduled email message.

```
DELETE https://services.leadconnectorhq.com/conversations/messages/email/:emailMessageId/schedule
```

Post the messageId for the API to delete a scheduled email message.

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message/index.html\#request "Direct link to Request")

### Path Parameters

**emailMessageId** stringrequired

Email Message Id

Example: ve9EPM428h8vShlRW1KT

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message/index.html\#responses "Direct link to Responses")

- 200

The scheduled email message was cancelled successfully

- application/json

- Schema
- Example (auto)

**Schema**

**status** numberrequired

HTTP Status code of the request

Example:`404`

**message** stringrequired

Error message of the request

Example:`Failed cancel the scheduled message`

```codeBlockLines_e6Vv
{
  "status": 404,
  "message": "Failed cancel the scheduled message"
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
curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/messages/email/:emailMessageId/schedule' \
-H 'Accept: application/json'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

emailMessageId — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!