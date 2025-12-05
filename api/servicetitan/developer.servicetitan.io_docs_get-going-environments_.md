---
url: "https://developer.servicetitan.io/docs/get-going-environments/"
title: "325. Docs: Environments - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/get-going-environments/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/get-going-environments/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/get-going-environments/#)
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

# Environments

**Integration Environment**

All developers and ServiceTitan customers get access to one instance in the integration environment, similar to your access to NEXT for performing your development and pre production activities.

[Customers](https://developer.servicetitan.io/docs/welcome) Will get their latest copy of production data into integration environment by default. And can request for a refresh periodically by contacting integrations@servicetitan.com.

[Developers](https://developer.servicetitan.io/docs/welcome) will have standard sample data to get started.

For making API calls in the integration environment:

- You need your app key generated in the developer portal.

- You need your Client & Secret Key generated for the integration environment by the ServiceTitan admin within your organization.

- Tenant ID against which you want to retrieve the data.

- Environment endpoint details.


_api-integration.servicetitan.io_ is the domain for accessing APIs in  the Integration environment.

_auth-integration.servicetitan.io/connect/token_ is the OAuth 2.0 token endpoint of the integration environment.

**Production environment**

Only ServiceTitan customers have access to a production environment.

For making API calls in the production environment:

- You need your application key generated for the integration or production environment.

- You need Client ID & Secret Key generated for the production environment only by the ServiceTitan admin within your organization. If you are a developer marketing your app to a ServiceTitan customer, you need to ask the ServiceTitan customer to enable your app and securely share Client ID & Secret Key details with you.

- Tenant ID against which you want to retrieve the data.

- Production environment endpoints:


_api.servicetitan.io_ is the domain for accessing APIs in  the Integration environment.

_auth.servicetitan.io/connect/token_ is theOAuth 2.0 token endpoint of the production environment.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •