---
url: "https://developer.servicetitan.io/docs/api-resources-memberships/"
title: "527. Docs: Memberships - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-memberships/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-memberships/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-memberships/#)
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

# Memberships APIs

**Membership**

Customers purchase memberships for services performed. Memberships consist of discounts, recurring services, and accounting settings. Memberships can last for a fixed amount of time or they can be ongoing. They can be billed upfront, monthly, quarterly, every other month, biannual, and annually.

Membership Types—The template used when a membership is sold to a customer. Users set up the discounts, recurring services, and other settings that the membership will have.

Customer Memberships—A single instance of a membership type on a customer’s record. Customer Memberships inherit the settings of a membership type but can be customized if needed.

Recurring Service Types—The template used when a recurring service is created for a location. Users set up the job details and how often the recurring service events will take place on a membership.

Location Recurring Services—A single instance of a recurring service type on a location record. Typically created when a membership is sold but can also be added directly to a Location. They inherit the settings of a recurring service type but can be customized if needed.

Recurring Service Events—They are created based on the frequency details of a service location’s recurring services. They are booked into jobs or associated with already existing jobs.

Pricebook items set up as sale or renewal tasks are added to an estimate to initiate a membership. As soon as a sale or renewal task is added to an invoice, that customer is a member. The customer is not considered a member until the estimate is converted to an invoice.

Customer memberships can be viewed on a customer record in ServiceTitan and on the location records they apply to. A customer membership has to be for one or all locations attached to a customer. If a membership is ongoing, that membership does not need to be renewed because it will last until the customer requests to cancel. If a membership is fixed, that membership will expire after the defined amount of time and that customer should be sold a renewal task to renew the membership.

Memberships utilize two different types of invoice templates. Billing templates and recurring service templates. Billing templates are used to bill a member on a set schedule. For example, if the membership is monthly, ServiceTitan will reference a billing template to generate the invoice every month. Recurring service invoice templates are used when recurring service events are booked into jobs.

High level use cases for these APIs:

- Get information about membership types or recurring service types

- Get all memberships using deferred revenue

- Get all recurring service types set to a particular duration type

- Get key information about customer memberships, location recurring services, or recurring service events

- Get all active customer memberships

- Get all active customer memberships within a date range

- Get all customer memberships that expire within a date range

- Get all recurring service events in a particular status

- Sell a membership

- Create a membership sale invoice

- Edit a customer membership or location recurring services

- Update billing templates

- Add or remove services from recurring service invoice templates


• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •