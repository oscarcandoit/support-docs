---
source: https://marketplace.gohighlevel.com/docs/webhook/RecordUpdate/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.942Z
title: App | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/AppUninstall/index.html#__docusaurus_skipToContent_fallback)

On this page

Called whenever an app is uninstalled

#### Schema [​](https://marketplace.gohighlevel.com/docs/webhook/AppUninstall/index.html\#schema "Direct link to Schema")

```codeBlockLines_e6Vv
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "appId": {
      "type": "string"
    },
    "companyId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  }
}

```

#### Example [​](https://marketplace.gohighlevel.com/docs/webhook/AppUninstall/index.html\#example "Direct link to Example")

- For Location Level App Uninstall

```codeBlockLines_e6Vv
{
  "type": "UNINSTALL",
  "appId": "ve9EPM428h8vShlRW1KT",
  "locationId": "otg8dTQqGLh3Q6iQI55w"
}

```

- For Agency Level App Uninstall

```codeBlockLines_e6Vv
{
  "type": "UNINSTALL",
  "appId": "ve9EPM428h8vShlRW1KT",
  "companyId": "otg8dTQqGLh3Q6iQI55w"
}

```

## Share your feedback

★★★★★