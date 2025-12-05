---
url: "https://developer.servicetitan.io/docs/api-resources-salestech/"
title: "536. Docs: Sales & Estimates - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-salestech/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-salestech/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-salestech/#)
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

# Sales & Estimates APIs

**Estimates**

Before any work is done on a job, an estimate is built. Estimates consist of different items from a user’s pricebook such as services, equipment, and materials. If a customer accepts an estimate then the status of the estimate will be updated to Sold and the appropriate person will get credit for the sale. One or multiple estimates can be provided depending on the situation.

Services—Services are what technicians are doing while on a job. For example, replacing a capacitor or installing an emergency valve.

Materials—Materials are the items used by a technician to complete a service. In the previous example the materials would be the capacitor and the emergency valve.

Equipment—Large ticket items that will be installed. For example, condensers or furnaces are equipment.

Status—Status is used to track where the estimate stands. Whether it has been sold, dismissed, or still open.

Sold By—Sold by keeps track of which managed technician sold the estimate. Unmanaged technicians cannot sell estimates.

When a technician arrives at a location, they will diagnose the issue then add items to an estimate, or estimates. Customers can accept or decline the estimate. If the customer accepts and the technician can do the work quoted at that time then they will perform the work on the same job. If they do not have the ability/parts then another job will be booked by a CSR to perform the work quoted at a later time. If an estimate is not accepted it can be followed up on at a later time. If, when following up, it is determined a sale cannot be made the estimate is dismissed.

High level use cases for these APIs:

- Add an estimate to a job

- Add items to an estimate

- Mark an estimate as sold

  - A managed technician sold by is required when performing this request

  - If marked as sold via API then it will automatically be marked to perform work later and a CSR will have to book the job
- Mark an estimate as dismissed

- Unsell an estimate

  - Can only unsell if no signature has been collected and if the estimate hasn’t been booked out into a job
- Retrieve a list of all estimates by these filters:

  - Job Id

  - Sold By

  - Status

  - Sold On Date Range

  - Total Amount Range

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •