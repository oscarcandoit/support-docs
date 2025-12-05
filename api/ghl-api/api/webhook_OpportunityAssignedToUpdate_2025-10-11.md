---
source: https://marketplace.gohighlevel.com/docs/webhook/OpportunityAssignedToUpdate/index.html
scraped: 2025-10-11T22:44:48.808Z
title: Campaign | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/CampaignStatusUpdate/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever a campaign status is updated

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/CampaignStatusUpdate/index.html\#schema "Direct link to Schema")

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
    "status": {
      "type": "string"
    },
    "templateId": {
      "type": "string"
    },
    "replied": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/CampaignStatusUpdate/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "CampaignStatusUpdate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "2hxvXh8Fjc69SvujEWMD",
  "contactId": "CWBf1PR9LvvBkcYqiXlc",
  "status": "paused",
  "templateId": "Y2I9XM7aO1hncuSOlc9L",
  "replied": "Loram ipsum",
  "dateAdded": "2021-11-26T12:41:02.193Z"
}

```

## Share your feedback

★★★★★