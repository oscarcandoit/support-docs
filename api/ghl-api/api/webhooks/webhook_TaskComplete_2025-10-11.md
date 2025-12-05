---
source: https://marketplace.gohighlevel.com/docs/webhook/TaskComplete/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.943Z
title: Task | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/TaskComplete/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a task is completed

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/TaskComplete/index.html\#schema "Direct link to Schema")

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

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/TaskComplete/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "TaskComplete",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "5HrB1IbmnKMBXloldFuP",
  "assignedTo": "bNl8QNGXhIQJLv8eeASQ",
  "body": "testing",
  "contactId": "WFwVrSSjZ2CNHbZThQX2",
  "dateAdded": "2021-11-29T13:37:28.304Z",
  "dueDate": "2021-12-22T06:55:00.000Z",
  "title": "test"
}

```

## Share your feedback

★★★★★