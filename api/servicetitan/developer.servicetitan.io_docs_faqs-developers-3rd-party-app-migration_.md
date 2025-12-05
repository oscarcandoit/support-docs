---
url: "https://developer.servicetitan.io/docs/faqs-developers-3rd-party-app-migration/"
title: "1045. FAQs: 3rd Party App Migration - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/faqs-developers-3rd-party-app-migration/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Access and Environments](https://developer.servicetitan.io/docs/faqs-environments)
- [APIs, App Keys & Client Keys](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys)
- [Customers Engaging with 3rd Parties](https://developer.servicetitan.io/docs/faqs-customers)
- [Developers](https://developer.servicetitan.io/docs/faqs-developers)
  - [3rd Party App Migration](https://developer.servicetitan.io/docs/faqs-developers-3rd-party-app-migration)
- [Support](https://developer.servicetitan.io/docs/faqs-support)
- [Marketplace](https://developer.servicetitan.io/docs/faqs-marketplace)

# 3rd Party App Migration

**These are the steps that need to be followed by a 3rd party app developer for successfully migrating their application from a Customer’s ServiceTitan Environment to a Developer (Third-Party’s) ServiceTitan Environment**

1. **Log in to the [ServiceTitan Developer Portal](https://developer.servicetitan.io/signin)**

   - Use the credentials associated with your integration account provided to you by ServiceTitan.

   - Ensure you log in as an “Integration Environment User.”
2. **Create a New Application**

   - Once logged in, [create an application](https://developer.servicetitan.io/docs/get-going-create-an-app) by providing all necessary details and specifying the required API scopes.
3. **Add Tenant IDs to the New Application**

   - Add all previously connected Tenant IDs (and any new Tenant IDs, if applicable) to the new application.

   - Once this is complete, customers will be able to see your app in their ServiceTitan environment and can enable it.
4. **Ask the Customer to Enable Your App**

   - To expedite the process, remind the customer to enable your app by following the steps outlined [here](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret#i7dIZ).
5. **Generate New Client Credentials**

   - Once the app has been enabled by the customer, generate your new Client ID and Client Secret from the Developer Portal, as described [here](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret).
6. **Use the New Credentials**

   - Begin making API calls on behalf of the customer using your Application Key and the individual tenants’ Client ID and Client Secret that you have generated.
7. **Complete the Migration**

   - After the migration is complete, instruct the customer to delete the old application you created along with your old user credentials.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •