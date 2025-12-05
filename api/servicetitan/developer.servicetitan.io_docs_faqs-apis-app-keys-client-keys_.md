---
url: "https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/"
title: "1010. FAQs: APIs, App Keys & Client Keys - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Access and Environments](https://developer.servicetitan.io/docs/faqs-environments)
- [APIs, App Keys & Client Keys](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys)
- [Customers Engaging with 3rd Parties](https://developer.servicetitan.io/docs/faqs-customers)
- [Developers](https://developer.servicetitan.io/docs/faqs-developers)
  - [3rd Party App Migration](https://developer.servicetitan.io/docs/faqs-developers-3rd-party-app-migration)
- [Support](https://developer.servicetitan.io/docs/faqs-support)
- [Marketplace](https://developer.servicetitan.io/docs/faqs-marketplace)

# APIs, App Keys & Client Keys

**What's required to [make a successful API call](https://developer.servicetitan.io/docs/get-going-first-api-call) ?**

You need your app key generated from the integration or production environments. App keys are NOT environment specific.

You need to obtain an environment specific Client ID and Secret Key from the ServiceTitan admins in our customer’s organization. For making calls in the integration environment you need to obtain a Client ID & Secret Key generated in the integration environment.

For making calls in the production environment you need to obtain a Client ID & Secret Key generated in the production environment.

**Are you planning to launch V2 webhooks?**

Yes, V2 webhooks are currently being developed and we will communicate its release as soon as possible.

**Can I still subscribe to the existing version of webhooks?**

At the moment we are restricting new subscriptions to the current version of webhooks. You have to wait for a few months until we launch the new V2 webhooks. If you have already subscribed you should not have any impact and will continue to receive the events.

**Are you implementing any rate limiting on API calls ?**

Yes. Our current default is 60 calls per second per application per tenant for all APIs except reporting APIs. For reporting APIs, the limit is 5 of the same report per minute per tenant. Please contact us if you have any concerns about this. We will evaluate on a case by case basis.

**How do I login to the My apps tab ?**

In order to login to the My Apps tab of the dev portal, your ServiceTitan admin needs to establish you as a user in your organization's integration environment or the production environment instances. Once you are established with user credentials, you can use those credentials to login to the My Apps tab.

**How is the [app key generated](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#)?**

After you login to the My Apps tab of the dev portal, you will create an app, add tenant IDs, and choose API scopes. Once these steps are completed and saved, your app key is generated.

**Who and how should the [Client ID & Secret Key](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#) be generated ?**

User with admin permissions (that is who has the 'Manage API Application Access' permission) will review applications requesting access to the resources and will generate a Client ID and Secret Key for that app and then share it with the developer of that application.

Application manager can also self-generate the Client ID and Client Secret pair by configuring the application following the steps outlined in the API Documentation [here](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#).

**I created my App previously. Can I want to add new API endpoints to my previously created App ?**

Yes. Please log into the developer portal. Choose the App you want to add/remove API scopes by clicking the Edit button. Add/Remove the API scopes. Click Save. Note: Each time the API scopes are edited a new version number of the App is generated. New API scopes will come into effect only after the Tenant admin Accepts the new version of the App.  There is no need to update the App key or Client ID & Secret key.

**Do I need to recreate the App if I am adding new API endpoints to my App ?**

No. Please log into the developer portal. Choose the App you want to add/remove API scopes by clicking the Edit button. Add/Remove the API scopes. Click Save. Note: Each time the API scopes are edited a new version number of the App is generated. New API scopes will come into effect only after the Tenant admin Accepts the new version of the App.  There is no need to update the App key or Client ID & Secret key.

**I** **am a ServiceTitan customer and have multiple tenants. Can a single pair of Client ID & Secret work for all tenants ?**

Yes, if your organization uses Enterprise Hub. In Enterprise Hub, via API Credentials Management Portal, customers can create networks of tenants that will share a single Client ID & Client Secret pair.

As of today, Enterprise hub is only offered to ServiceTitan customers and **not** to the 3rd party partners and developers.

**Multiple ServiceTitan customers will use the app I am creating. Will the same app key, Client ID and Secret Key work for all of them ?**

Since the app key represents the application, you can use the same key for multiple customers/tenants. Since Client ID & Secret Key are unique to each ServiceTitan tenant, you need to obtain an application and tenant specific Client ID & Secret Key from the ServiceTitan admin of each customer/tenant. For example, if you have an application that will be used by 10 ServiceTitan customers/tenants, you need to obtain 10 Client IDs & Secrets Keys but can use the same app key.

**Why are Tenant IDs added while creating an app ?**

As an application developer you need to add the Tenant IDs of the customers whom you want to let to use your app. By adding Tenant IDs, ServiceTitan admins at the customer organizations can discover your app and would be able to generate and enable the Client ID & Secret Key and share it with you. You can add any number of tenant IDs, and can add and remove tenant IDs at any time even after the app has been created.

**Does ServiceTitan follow [OAuth 2.0 protocol](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#)?**

Yes, with the advent of V2 APIs ServiceTitan now uses the OAuth 2.0 machine to machine client credentials grant flow.

**As an app developer, am I able to manage my tenant’s Client ID and Client Secret through the developer portal?**

Yes. You have the option to self-generate a tenant’s Client ID and Client Secret by configuring your app for self-service under your app details page in your developer portal. Follow the instructions under [Docs → Client ID & Secret](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#) section of the developer portal for more details.

**I currently receive the Client ID and Client Secret directly from the tenant admin, am I able to update my app to the self-service client option?**

Yes. You can update how you receive the Client ID and Client Secret by updating your existing app to allow for self-service. Follow the instructions under [Docs → Client ID & Secret](https://developer.servicetitan.io/docs/faqs-apis-app-keys-client-keys/#) section of the developer portal for more details.

**I do not see the ability to generate the Client Secret key and it says 'Not Connected Yet'. What should I do?**

In order to generate the Client Secret for a tenant, a tenant admin first needs to connect to your app under Settings → API Application Access → Connect New App within their account. If they have not yet connected, you will see the “Not Connected Yet” message for the tenant under your app connections.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •