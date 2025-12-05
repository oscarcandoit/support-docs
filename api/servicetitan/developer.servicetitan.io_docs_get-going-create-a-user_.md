---
url: "https://developer.servicetitan.io/docs/get-going-create-a-user/"
title: "310. Docs: Create a User - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/get-going-create-a-user/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/get-going-create-a-user/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/get-going-create-a-user/#)
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

# Create a user

**​Important Information**

**For Customers:** Please contact the admin within your organization to add you as a user in ServiceTitan, either in the Integration or Production environment.

**⚠️** Security Reminder

Exercise caution when managing access to your Integration or Go environments. Do not add third-party users outside your organization with Admin Access or Generate API Key permissions. Before granting any external access, contact integrations@servicetitan.com for guidance.

**For 3rd Party developers:** Create a user in the Integration environment instance provided to your organization by ServiceTitan. Avoid requesting customers to create a user in their Integration or Production environments as per our API terms of service.

To create a user, ST admin with your organization has to perform the below steps from ServiceTitan App.

1. Sign in to [integration instance](https://integration.servicetitan.com/) or [production instance](https://go.servicetitan.com/) as an administrator.

2. Go to the navigation bar and click Settings.

3. In the side panel, click People > Employees.

4. In Employees, click Add **.**


![Picture](https://developer.servicetitan.io/content/1.png)

5.In Add an Employee, click the Details.

6.Using the New Account Status dropdown select send an email for username and password creation or create username and password. If you select the email option, the user will get an email to create their login credentials.

![Picture](https://developer.servicetitan.io/content/2.png)

7.Click the Permissions tab and select from the below permissions:

Manage API Application Access

i) Users with this permission can see the screen Settings > Integrations > API Application Access, which allows them to create Client IDs and Secrets, necessary to enable applications to call the V2 APIs.

Generate API Application Key

ii) Users with this permission may SSO into the V2 API developer portal, and have access to the My Apps tab, which allows them to create App Keys. These App Keys will be shared by any other user in this tenant that has this permission.

![Picture](https://developer.servicetitan.io/content/Screenshot%202024-09-26%20at%2011.16.15%E2%80%AFAM.png)

8\. Once the user is created and the username and password are established, the user can sign in to the 'Login to My apps' section of the [developer porta](https://developer.servicetitan.io/) [l](https://developer.servicetitan.io/docs/get-going-create-a-user/#) **.**

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •