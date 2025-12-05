---
source: https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-agent/index.html
category: voice-ai
scraped: 2025-10-11T23:13:14.548Z
title: CustomJS | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#__docusaurus_skipToContent_fallback)

On this page

## Wrapper functions [​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html\#wrapper-functions "Direct link to Wrapper functions")

HighLevel provides functions to render contextual data & some utilities that can help developers customize experience for the user.

### 1\. Local Storage and Cookies Management: [​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html\#1-local-storage-and-cookies-management "Direct link to 1. Local Storage and Cookies Management:")

This feature provides utility methods to interact with localStorage and cookies efficiently.

**Local Storage Wrapper:**

- Store data with a maximum size of 5KB per entry.
- The wrapper automatically prefixes keys to prevent key collisions with `custom_`.
- Stored data is automatically cleaned up when the Vue instance is destroyed.

_Usage:_

```codeBlockLines_e6Vv
await  AppUtils.Storage.setData(key,  value); //  Store  data
await  AppUtils.Storage.getData(key); //  Retrieve  data

```

**Cookies Wrapper:**

- Store data with a maximum size of 5KB per entry.
- Set cookies with optional expiration (maximum of 2 days from the time of creation).
- The wrapper automatically prefixes keys to prevent key collisions with `custom_`.

_Usage:_

```codeBlockLines_e6Vv
await AppUtils.Storage.setCookie(key, value, expiryInHours)
//or
await AppUtils.Storage.setCookie(key, value) // Store data in a cookie

await AppUtils.Storage.getCookie(key) // Retrieve cookie value

```

* * *

### 2\. Custom Events: [​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html\#2-custom-events "Direct link to 2. Custom Events:")

You can listen to custom application events for specific lifecycle hooks or activities.

**Events:**

- **routeLoaded**: Emitted when the first route is loaded after application startup.
- **routeChangeEvent**: Emitted on every route change after the initial route load.

_Usage:_

```codeBlockLines_e6Vv
window.addEventListener('routeLoaded',callback)
window.addEventListener('routeChangeEvent',callback)

```

* * *

### 3\. Routing Methods: [​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html\#3-routing-methods "Direct link to 3. Routing Methods:")

Custom scripts can now control routing within the application via exposed methods.

**Methods:**

- **getCurrentRoute()**: Get the current route info.
- **navigate(options:INavigationOptions)**: Allows you to navigate to a different route via name or path.

```codeBlockLines_e6Vv
 interface INavigationOptions{
  name?: string
  path?: string
  params?: Record<string,  string>
  query?: Record<string,  string>
  replace?: boolean
  append?: boolean
}

```

_Usage:_

```codeBlockLines_e6Vv
await AppUtils.RouteHelper.navigate({name: 'integrations-settings-v2'}); // Navigate to integrations page on current location

const path = '/integration'
await AppUtils.RouteHelper.navigate({path}) // Navigates to marketplace apps page

const currentRoute = await AppUtils.RouteHelper.getCurrentRoute();
console.log(currentRoute); // Logs current route information {fullPath, name, params, path, query}

```

* * *

### 4\. Utility Methods: [​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html\#4-utility-methods "Direct link to 4. Utility Methods:")

A set of utility methods is now available to provide essential contextual data for custom scripts.

**Methods:**

- User Info: `getCurrentUser()` – Retrieves current user's information.
- Current Location: `getCurrentLocation()` – Retrieves data about the user's current location.
- Company Info: `getCompany()` – Retrieves information about the current company.

_Usage:_

```codeBlockLines_e6Vv
const userInfo = await AppUtils.Utilities.getCurrentUser();//{id, name, firstName, lastName, email, type, role}

const currentLocation = await AppUtils.Utilities.getCurrentLocation();//{id, name, address: {address, city, country}}

const companyInfo = AppUtils.Utilities.getCompany();//{id, name}

```

## Share your feedback

★★★★★

- [Wrapper functions](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#wrapper-functions)
  - [1\. Local Storage and Cookies Management:](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#1-local-storage-and-cookies-management)
  - [2\. Custom Events:](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#2-custom-events)
  - [3\. Routing Methods:](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#3-routing-methods)
  - [4\. Utility Methods:](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js/index.html#4-utility-methods)