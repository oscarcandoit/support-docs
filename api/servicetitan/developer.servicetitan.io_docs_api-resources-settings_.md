---
url: "https://developer.servicetitan.io/docs/api-resources-settings/"
title: "539. Docs: Settings - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-settings/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-settings/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-settings/#)
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

# Settings API

**Employees:**

Employees are Non-Managed Technicians who use ServiceTitan (users of ServiceTitan). Typically this includes roles like CSR, Dispatcher and Bookkeeper.

High- level use cases for these APIs:

GET Employee contact information (email or phone)

GET All “active” Employees

GET Validate/Search for an Employee with a specific “name”

**Technicians:**

Technicians are employees who work in the field and leverage ServiceTitan on a daily basis using either the web based interface or more commonly the ServiceTitan Mobile Application.

High- level use cases for these APIs:

GET Technician contact information (email, phone, or address)

GET Technician goal information

GET Technician ID

GET All “managed” Technicians

GET Validate/Search for a Technician with a specific “name”

**Business Units:**

In ServiceTitan, a business unit is generally a division within your business. For example, if you run a business that has multiple departments, such as install and sales, classify each department as a unit in ServiceTitan. When there’s revenue or tasks completed for each, you can track performance separately in reports. After you set up all your business units, you can track and report on them. If you have multiple locations, you can assign business units to those, too.

High- level use cases for these APIs:

GET Business Unit contact information (email, phone, or address)

GET Tenant information (Tenant ID)

GET Authorization Paragraph

GET Acknowledgement Paragraph

**Tag Types:**

Adding tags helps you flag anything from customers, jobs, and locations, easily highlighting key items when using your ServiceTitan account to run your business. You can also add tags to identify customer membership types, types of equipment they have, and supplies needed for a job associated with a job for a customer. When creating tags, keep them short and sweet! This will make it easier for you and your team to identify them. Tag names should be 30 characters or less.

High- level use cases for these APIs:

GET a list of all Tags (and IDs)

**User Roles:**

User Provisioning APIs will allow to create Employee and Technician, Edit Employee and Technician and change the status between active/deactivated from external systems (e.g. HRIS)

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •