---
url: "https://developer.servicetitan.io/docs/overview/"
title: "200. Docs: Overview - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/overview/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/overview/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/overview/#)
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

# Overview

**[Developer portal](https://developer.servicetitan.io/)**

The ServiceTitan developer portal is a one-stop solution for developers looking to use and integrate with our APIs. Use our portal to discover and get inspired by the catalog of APIs we offer, or read our comprehensive documentation to build your connection to our API services. Our developer portal is set up to address specific needs as you build.

[Docs tab](https://developer.servicetitan.io/docs/welcome) [:](https://developer.servicetitan.io/docs/welcome) Explore this tab to get familiar with all the required details from Getting started to, Creating Users, Creating Application key, Client ID & Secret etc. This section also gives you orientation to our resources which are fundamental to our APIs. The resources in this tab are periodically updated with the most current information.

[API Reference tab](https://developer.servicetitan.io/apis) [:](https://developer.servicetitan.io/apis) Gives you a breakdown of all the APIs in our catalog. You can view all of the endpoints and learn our API structure and parameters to get started right away.

[Release Notes tab](https://developer.servicetitan.io/release-notes) [:](https://developer.servicetitan.io/docs/overview/#) Track all new API additions and updates by release. You can also subscribe to receive updates when new release notes have been published.

[Request Access tab](https://developer.servicetitan.io/request-access) [:](https://developer.servicetitan.io/request-access) Lets you request for integration environment instance access. You need to be established as a registered user in a ServiceTitan instance in the integration environment or production environment by your ServiceTitan admin with your organization. After you become a user, you can 'Login to My apps' tab.

[Login to My Apps tab:](https://developer.servicetitan.io/signin) Once you login you can manage your existing apps, add new apps, choose the API scopes, tenant IDs to whom you want to make your app visible to, generate an app key.

**[Environments](https://developer.servicetitan.io/docs/get-going-environments)**

[Integration environment:](https://developer.servicetitan.io/docs/get-going-environments)All developers and ServiceTitan customers will get access to one instance of the Integration environment for performing development and pre-production activities. Customers can import production data and refresh it periodically. developers will have standard demo data to get started.

[Production environment:](https://developer.servicetitan.io/docs/get-going-environments) Only ServiceTitan customers will have access to the production environment. Your production environment will have your current data. Once you are satisfied with your development and pre-production activities in the integration environment, you can switch to production and go live.

**[Making an API call](https://developer.servicetitan.io/docs/get-going-first-api-call)**

To make a successful API call your app needs to possess:

- A [Client ID & Secret Key](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret#i7dIZ) granted for the application.

- An [Application key](https://developer.servicetitan.io/docs/get-going-create-an-app) (a.k.a App key) generated for the application.

- A Tenant ID whose resources your app will access.


A successful API call is a two step process.

1. Your application calls ServiceTitan [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20) token endpoint and passes Client ID & Secret Key. If the validation is successful, you will get an access token.

2. Your application calls the Resource API endpoint and passes the access token along with the application key. If the validation is successful, then your GET/PUT/POST/DELETE operation will be successful. Note: The access token must be cached and reused during its lifetime of 15-minutes, there is no need to call the token endpoint before each API call.


Application key gets generated after a developer creates an app through the My Apps section in the portal. Application keys generated through an Integration environment login works in production and vice versa.

Client ID & Secret are generated by a ServiceTitan admin (resource owner) within your organization through your organization's instance of the ServiceTitan App and shared with the app developer securely. Client ID and the Secret Key are environment specific. Your ServiceTitan admin has to generate the Client ID and Secret Key separately in the Integration and production environments.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •