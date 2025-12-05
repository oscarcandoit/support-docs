---
url: "https://developer.servicetitan.io/docs/faqs-developers/"
title: "1040. FAQs: Developers - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/faqs-developers/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Access and Environments](https://developer.servicetitan.io/docs/faqs-environments)
- [APIs, App Keys & Client Keys](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys)
- [Customers Engaging with 3rd Parties](https://developer.servicetitan.io/docs/faqs-customers)
- [Developers](https://developer.servicetitan.io/docs/faqs-developers)
  - [3rd Party App Migration](https://developer.servicetitan.io/docs/faqs-developers-3rd-party-app-migration)
- [Support](https://developer.servicetitan.io/docs/faqs-support)
- [Marketplace](https://developer.servicetitan.io/docs/faqs-marketplace)

# Developers

**I am a third party app developer or integration developer. I want to develop an app/integration using ServiceTitan’s APIs. How can I get started?**

Please visit the [Request Access](https://developer.servicetitan.io/request-access) tab and fill out the form. Once your details are received one of our team members will review your information, if required get in touch with you. Finally you will get access to an integration environment where you can get started.

**As an existing or potential developer will I get access to the [integration environment](https://developer.servicetitan.io/docs/get-going-environments)?**

Yes, all developers will get access to one instance of the integration environment which all of the users in your organization can share.

**As a developer which environments will I have access ? What data will I have access to in the integration environment?**

As a developer you will have access to an integration environment with standard demo data  for your app development and testing activities.

**I am a third-party developer. Can I approach a customer and ask them to create a user within their ServiceTitan Integration or Production instances to create an app?**

No, as a third-party developer, you are required to use only the Integration environment instance provided to you by ServiceTitan, in compliance with our API Terms of Service.

You should develop and create apps exclusively within your assigned Integration environment. Once your app is ready, you can approach customers to connect it to their accounts. After connection, you will generate unique client keys for each customer (identified by their tenant ID).

**As a third-party developer, can I create apps directly within a customer’s ServiceTitan Integration or Production account?**

No, apps should only be created in your designated Integration environment. After developing your app, you can approach customers to connect it to their accounts. Once connected, you must generate a unique client ID & secret keys for each customer (based on their tenant ID).

**What is customer tunneling? As a third party, am I allowed to do this?**

Customer tunneling refers to the practice where a third party bypasses standard procedures by asking a customer to create a user and an app directly within the customer’s ServiceTitan Integration or Production environment.

According to ServiceTitan’s API policy, third parties are strictly prohibited from engaging in customer tunneling. Instead, third-party developers must create users and apps exclusively in their designated Integration environment provided by ServiceTitan. This ensures compliance with API policies and safeguards data integrity.

**I have added the tenant ID in the developer portal and the customer (Tenant Admin) is stating that they do not see this application within their Settings -> Integrations -> API Application Access page. What is causing this?**

This is intended behavior. Initially when a 3rd party developer creates a public application, ServiceTitan will review and approve the application. Once review is complete, that is when the customer will be able to view your application within their API Application Access settings page and be able to allow access to your application. You can continue to add Tenant IDs to your application during the review process.

ServiceTitan performs this approval once a week. Please allow a few business days for the approval. If for some reason we are unable to approve your application, a member from the ServiceTitan team will be reaching out to you. If your application is approved, you will not receive any additional notification.

Note: This is a one time approval only after the application is created. Additional approval is not needed every time you add a Tenant ID or change the API scopes and create a new version.

**Will my app key generated in integration environment work for making calls in production on behalf of the customer?**

The [App key](https://developer.servicetitan.io/docs/get-going-create-an-app) you generate in the integration environment is not environment specific and works when you make calls to access customer resources in production as well.

You will need to obtain the [Client ID & Secret Key](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret) in the integration or production environment accordingly from the ServiceTitan customers who intend to use your app.

**As a developer, do I have visibility into my app usage and metrics?**

Yes, within the "My Apps" tab in your developer portal account you will have access to your "API Usage Report" for each of your apps.

![](https://developer.servicetitan.io/content/Screenshot%202024-09-26%20at%2011.43.14%E2%80%AFAM.png)

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •