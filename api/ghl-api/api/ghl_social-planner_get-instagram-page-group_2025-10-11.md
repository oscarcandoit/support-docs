---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-instagram-page-group/index.html
scraped: 2025-10-11T22:45:16.355Z
title: Conversation | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/ConversationUnreadWebhook/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a conversations unread status is updated

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/ConversationUnreadWebhook/index.html\#schema "Direct link to Schema")

```codeBlockLines_e6Vv
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "unreadCount": {
      "type": "number"
    },
    "inbox": {
      "type": "boolean"
    },
    "starred": {
      "type": "boolean"
    },
    "deleted": {
      "type": "boolean"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/ConversationUnreadWebhook/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "ConversationUnreadUpdate",
  "locationId": "ADVlSQnPsdq3hinusd6C3",
  "id": "MzKIpg0rEIH2ZUGKf6BS",
  "contactId": "zsYhPBOUsEHtrK508Wm9",
  "deleted": false,
  "inbox": false,
  "starred": true,
  "unreadCount": 0
}

```

## Share your feedback

★★★★★