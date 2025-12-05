---
source: https://marketplace.gohighlevel.com/docs/ghl/social-planner/oauth-linked-in/index.html
scraped: 2025-10-11T22:45:02.422Z
title: Task | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/TaskCreate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a task is created

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/TaskCreate/index.html\#schema "Direct link to Schema")

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
    "assignedTo": {
      "type": "string"
    },
    "body": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    },
    "dueDate": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/TaskCreate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "TaskCreate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "UlRWGLSXh0ji5qbiGu4i",
  "assignedTo": "63e4qiWDsFJjOYAC8phG",
  "body": "Loram ipsum",
  "contactId": "CWBf1PR9LvvBkcYqiXlc",
  "title": "Loram ipsum",
  "dateAdded": "2021-11-26T12:41:02.193Z",
  "dueDate": "2021-11-26T12:41:02.193Z"
}

```

## Share your feedback

★★★★★