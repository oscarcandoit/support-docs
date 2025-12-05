---
source: https://marketplace.gohighlevel.com/docs/webhook/VoiceAiCallEnd/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.935Z
title: Note | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/NoteUpdate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a note is updated

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/NoteUpdate/index.html\#schema "Direct link to Schema")

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
    "body": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/NoteUpdate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "NoteUpdate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "otg8dTQqGLh3Q6iQI55w",
  "body": "Loram ipsum",
  "contactId": "CWBf1PR9LvvBkcYqiXlc",
  "dateAdded": "2021-11-26T12:41:02.193Z"
}

```

## Share your feedback

★★★★★