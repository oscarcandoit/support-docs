---
source: https://marketplace.gohighlevel.com/docs/webhook/ContactDndUpdate/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.937Z
title: Plan Change | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/PlanChange/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever user changes the plan for a paid app.

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/PlanChange/index.html\#schema "Direct link to Schema")

```codeBlockLines_e6Vv
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "example": "PLAN_CHANGE"
    },
    "appId": {
      "type": "string",
      "example": "ve9EPM428h8vShlRW1KT"
    },
    "locationId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "companyId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "userId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "currentPlanId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    },
    "newPlanId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/PlanChange/index.html\#example "Direct link to Example")

```codeBlockLines_e6Vv
{
  "type": "PLAN_CHANGE",
  "appId": "ve9EPM428h8vShlRW1KT",
  "locationId": "otg8dTQqGLh3Q6iQI55w",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "userId": "otg8dTQqGLh3Q6iQI55w",
  "currentPlanId": "66a0419a0dffa47fb5f8b22f",
  "newPlanId": "66a0419a0dffa47fb5f8b22f"
}

```

## Share your feedback

★★★★★