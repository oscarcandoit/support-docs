---
url: "https://developer.servicetitan.io/docs/get-going-create-an-app/"
title: "315. Docs: Create an App - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/get-going-create-an-app/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/get-going-create-an-app/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/get-going-create-an-app/#)
  - [Accounting](https://developer.servicetitan.io/docs/api-resources-accounting)
  - [CRM](https://developer.servicetitan.io/docs/api-resources-crm)
  - [Dispatch](https://developer.servicetitan.io/docs/api-resources-dispatch)
  - [Equipment Systems](https://developer.servicetitan.io/docs/api-resources-equipment-systems)
  - [Inventory](https://developer.servicetitan.io/docs/api-resources-inventory)
  - [Job Planning](https://developer.servicetitan.io/docs/api-resources-job-planning)
  - [Marketing](https://developer.servicetitan.io/docs/api-resources-marketing)
  - [Memberships](https://developer.servicetitan.io/docs/api-resources-memberships)
  - [Payroll](https://developer.servicetitan.io/docs/api-resources-payroll)
  - [Pricebook](https://developer.servicetitan.io/docs/api-resources-pricebook)
  - [SalesTech](https://developer.servicetitan.io/docs/api-resources-salestech)
  - [Scheduling Pro](https://developer.servicetitan.io/docs/api-resources-scheduling-pro)
  - [Service Agreements](https://developer.servicetitan.io/docs/api-resources-service-agreements)
  - [Settings](https://developer.servicetitan.io/docs/api-resources-settings)
  - [Task Management](https://developer.servicetitan.io/docs/api-resources-task-management)
  - [Telecom](https://developer.servicetitan.io/docs/api-resources-telecom)

# Create an Application, API scopes and an App key

[Login to My Apps](https://developer.servicetitan.io/) tab on the [dev portal](https://developer.servicetitan.io/). From here you can manage your existing apps, add new apps, choose the API scopes, add tenant IDs for anyone you want to make your app visible to and subscribe to and generate an app key.

New apps

To add new apps:

1. Click New Apps.

2. Enter an application name, organization name, the home page URL of your organization and Tenant IDs.

3. If you are a 3rd Party developer, choose:

   - **Public App** if you are creating an application that will cater to multiple disparate customers. Note: Tenants (customers) will only see your application after ServiceTitan has approved it. The approval process will occur a few business days after you have created your application. Please review the [FAQs](https://developer.servicetitan.io/docs/faqs-developers) section for additional information.

   - **Private App** if you are creating an application to only one single customer.

Add Tenant IDs

You should add tenant IDs of the customers (a.k.a tenants) that you want to make your app visible. You can add/delete tenant IDs anytime. Every ServiceTitan customer will have at-least one tenant ID. If you do not know your tenant ID, please reach out to your ST admin with your organization.

API scopes

Choose the list of API scopes that your application uses. Your app can use View or Modify or View and Modify as options. The scopes that you have selected will be displayed to the app subscriber also known as a resource owner who can be the ServiceTitan admin of your organization. This admin after viewing the app details and API scopes, can generate and share the Client ID and Secret Key with your app.

App key

After completing the steps to add a new app, your application key will be generated. ServiceTitan identifies your application by the app key. You need to embed the application key into your app and pass it along with an access token to make a successful API call.

Note: App key is not environment specific. Your app key generated in the integration environment works for production calls and vice versa.

Change API Scopes

To add or remove API scopes after you have created the app:

1. Go to the My Apps page.

2. Click Edit for the app to which you want to add or remove API scopes.

3. Check (to add new) or uncheck (to remove the existing ) API scopes.

4. When finished, click Save.


Note: After changing the API scopes, a new ‘App key’ will not be generated. You also need not replace the tenant Client ID & Secret key. However, your tenant admin should log into the ServiceTitan main app and upgrade to the new version. New API scopes will come into play only after the tenant admin successfully upgrades the app version. If need be, please reach out to your tenants and request them to upgrade the version.

Version

After selecting API scopes for the first time as a part of new app creation or every time you make changes to the previously added API scopes for an app, a new incremental version will be automatically generated. The first version of the App will always be 1 and the next versions will be 2,3,4 and so on.

Version history

Version history will show you the API scopes of the previous versions with the created on and user stamp. Through version history you can view which API scopes were added or removed in each version.

View Connections

View connections will show you which tenants are accessing your app and are on which version and what API scopes are currently in play for that tenant.

Delete Application

If you delete an application, your app key also gets deleted and ServiceTitan will no longer identify your app.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •