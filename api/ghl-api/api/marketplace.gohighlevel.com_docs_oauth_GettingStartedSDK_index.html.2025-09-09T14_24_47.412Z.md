[Skip to main content](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#__docusaurus_skipToContent_fallback)

On this page

The official TypeScript/JavaScript SDK for HighLevel provides a comprehensive interface to interact with all HighLevel API endpoints with built-in authentication, error handling, and automatic token management.

## Installation [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#installation "Direct link to Installation")

You can install it directly from our GitHub repository:

- npm
- yarn

```codeBlockLines_e6Vv
npm i @gohighlevel/api-client

```

## Quick Start [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#quick-start "Direct link to Quick Start")

### Import and Initialize [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#import-and-initialize "Direct link to Import and Initialize")

- JavaScript
- TypeScript

```codeBlockLines_e6Vv
const HighLevel = require('@gohighlevel/api-client');

const ghl = new HighLevel({
  clientId: 'your_client_id_here',
  clientSecret: 'your_client_secret_here'
});

```

## Authentication Methods [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#authentication-methods "Direct link to Authentication Methods")

The SDK supports two primary authentication methods:

### 1\. Private Integration Token (PIT) [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#1-private-integration-token-pit "Direct link to 1. Private Integration Token (PIT)")

```codeBlockLines_e6Vv
const ghl = new HighLevel({
  privateIntegrationToken: 'your_pit_token'
});

```

### 2\. OAuth 2.0 Flow [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#2-oauth-20-flow "Direct link to 2. OAuth 2.0 Flow")

Required for marketplace apps and public integrations:

```codeBlockLines_e6Vv
const ghl = new HighLevel({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret'
});

```

**Key Points:**

- The SDK automatically handles authentication for each API call
- locationId or companyId is required to handle the automatic authentication
- SDK will auto refresh the token whenever it is expired

## Examples [​](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html\#examples "Direct link to Examples")

For practical examples and complete sample applications showing how to use the HighLevel SDK, check out our examples repository:

**📚 [HighLevel SDK Examples](https://github.com/GoHighLevel/ghl-sdk-examples)**

This repository contains:

- Complete Node.js applications with OAuth implementation
- Step-by-step guides for common use cases
- Best practices for SDK integration

## Share your feedback

★★★★★

- [Installation](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#installation)
- [Quick Start](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#quick-start)
  - [Import and Initialize](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#import-and-initialize)
- [Authentication Methods](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#authentication-methods)
  - [1\. Private Integration Token (PIT)](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#1-private-integration-token-pit)
  - [2\. OAuth 2.0 Flow](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#2-oauth-20-flow)
- [Examples](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK/index.html#examples)