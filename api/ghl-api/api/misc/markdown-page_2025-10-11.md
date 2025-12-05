---
source: https://marketplace.gohighlevel.com/docs/markdown-page
category: misc
scraped: 2025-10-11T23:19:25.971Z
title: Changelog | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/Changelog/index.html#__docusaurus_skipToContent_fallback)

On this page

## 2025-08-26 [​](https://marketplace.gohighlevel.com/docs/Changelog/index.html\#2025-08-26 "Direct link to 2025-08-26")

**Conversations**:

Added:

- response body field `chatWidgetId` added in `getMessage` method (optional)
- response body array item field `messages.messages[].chatWidgetId` added in `getMessages` method (optional)

**Marketplace**:

Added:

- request body field `price` added in `charge` method (optional)

Modified:

- method `getInstallerDetails` endpoint changed from GET /marketplace/app/{appId}/installer-details to GET /marketplace/app/{appId}/installations

**Users**:

Added:

- path param `userId` is added in `getUser` method (required)

- [2025-08-26](https://marketplace.gohighlevel.com/docs/Changelog/index.html#2025-08-26)