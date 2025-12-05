---
url: "https://developer.servicetitan.io/docs/transactional-and-export-apis/"
title: "450. Transactional & Export APIs - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/transactional-and-export-apis/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/transactional-and-export-apis/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/transactional-and-export-apis/#)
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

# Transactional APIs & Data Export APIs

ServiceTitan has two sets of APIs to solve the consumer use cases better. Historically ST supported only Transactional APIs and now we are adding new Data Export APIs.

**Transactional APIs:** The Transactional API is a lightweight API. It is meant for moving targeted, small loads of data in and out of ServiceTitan.

HTTP methods supported: GET, PUT, POST, DEL, PATCH

When to use Transaction APIs:

- When you have to create, update and delete data.

- When you have to pull small amounts of data out of ServiceTitan. Say for a limited time interval and or when you want to apply filters.


**Data Export APIs:** When you want to pull loads of data out of ServiceTitan frequently. The URL structure will have /export in the path to indicate that it is a data export API.

Example: GET /memberships/v2/tenant/{tenant}/export/recurring-services

HTTP methods supported: GET

When to use Data Export APIs:

- When you want a full snapshot of the data and refresh it as frequently as you want. These APIs will return active, inactive, deleted data with no filters applied and for more historical data pull outs from ServiceTitan.

- When you have data warehousing needs using these APIs will be more efficient.


Note: Only few highly adopted APIs have these data export endpoints and not all. When there is no data export API, you can use the regular GET endpoints as needed. We will periodically keep adding new data export endpoints as needed.

**How Export APIs Work:**

API Call

- Begin by running a GET call one of the available Export APIs


Available Parameters

- from (Not Required)

- includeRecentChanges (Not Required)


Note: If nothing is passed in the parameters, the endpoint will begin exporting all data beginning with the first record. If a date is passed in the from parameter, the endpoint will begin pulling records beginning on that date (date is referring to the modifiedOn field of the record).

API Response

- The API response should return both a hasMore value as well as a continueFrom token

  - hasMore - This field will return false if no follow up API call is needed to export more data. It will return true if there is more data to export.

    - If true, pass the token that is returned in the continueFrom field from the previous call in the from parameter to continue the data export.
- The continueFrom token can be stored and used for future data exports from the specific endpoint that it was generated from. The token will allow you to continue to pull any new/updated data as it becomes available


Note: New/updated data becomes available to pull 15 minutes after the record is created or updated, unless the includeRecentChanges parameter is set to true in which records become instantly available. Setting the includeRecentChanges parameter to true may cause the same results to appear multiple times on consecutive requests. If used, please account for the possibility of duplicate records being returned.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •