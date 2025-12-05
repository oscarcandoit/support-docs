---
source: https://marketplace.gohighlevel.com/docs/webhook/TaskDelete/index.html
category: webhooks
scraped: 2025-10-11T23:14:18.418Z
title: Opportunity | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/OpportunityStatusUpdate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever an opportunity's status field is updated

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/OpportunityStatusUpdate/index.html\#schema "Direct link to Schema")

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
    "contactId": {
      "type": "string"
    },
    "monetaryValue": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "pipelineId": {
      "type": "string"
    },
    "pipelineStageId": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/OpportunityStatusUpdate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "OpportunityStatusUpdate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "wWhVuzqpRuOA1ZVWi4FC",
  "assignedTo": "bNl8QNGXhIQJLv8eeASQ",
  "contactId": "cJAWDskpkJHbRbhAT7bs",
  "monetaryValue": 40,
  "name": "Loram ipsu",
  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",
  "pipelineStageId": "e93ba61a-53b3-45e7-985a-c7732dbcdb69",
  "source": "Loram ipsu",
  "status": "open",
  "dateAdded": "2021-11-26T12:41:02.193Z"
}

```

## Share your feedback

★★★★★