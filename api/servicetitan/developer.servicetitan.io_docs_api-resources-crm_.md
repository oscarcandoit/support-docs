---
url: "https://developer.servicetitan.io/docs/api-resources-crm/"
title: "506. Docs: CRM - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-crm/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-crm/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-crm/#)
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

# CRM APIs

**Leads**

A lead is an opportunity to book a job. A lead is created after an inquiry from a customer doesn’t convert into a job. The inquiry is categorized using a call reason. You can also manually enter a list of leads into ServiceTitan. These are also assigned a call reason, even though there wasn’t an inbound inquiry.

Leads can be assigned a next follow up date, so someone in the office can reach back out about the lead. Leads that don’t require further follow ups are dismissed, and any leads that are followed up on are logged for tracking purposes. If a follow-up on a lead results in a job being booked, the lead is converted to Won.

High level use cases for these APIs:

- Get details about one or more leads

- Find leads that don’t have a customer or location associated with them

- Find leads by status, to follow up on open leads.


**Customers and Locations**

Customers and locations are record types in ServiceTitan. The customer is often the person responsible for paying for a job. The location is where the work is performed. Every customer has at least one location. No Location can have more than one customer. You can create multiple locations for a customer.

Every job in ServiceTitan has a customer responsible for paying the bill and a location. These also appear on the job’s invoice. If they don’t already exist in the system, you’ll need to create a customer and a location before you book a new job. This way, when you book a new job, it has a customer ID and location ID.

Customers and locations each have contacts associated with them. The contacts can be different for the customer and location. It’s important to know that even if the same contact is listed on the customer and the location, it’s two separate records. When you add a contact to a new location record, it’s also copied to the customer record.

If you find duplicate customer records, you can merge them together through the user interface. You can also do this with location records. This action currently isn’t supported with an API. You also cannot deactivate or reactivate customer or location records with an API.

High-level use cases for these APIs:

- Get customer or location records

  -  By name or address to see if they already exist in the system, before creating a new record

  - By Customer ID or Location ID provided from a job
- Create a new customer and location, so that you can book a new job

- Get or update customer contacts

- Get or update location’s contacts

- Update custom fields on a customer record

- Update custom fields on a location record

- Validate a location’s address, or coordinates

- Get information about one or more customers

1. Get information about one or more locations

**Bookings**

Bookings are incoming inquiries that are funneled to the Calls screen in ServiceTitan, enabling customer service representatives (CSRs) to follow up on them. For Bookings to appear on the Calls screen, an account configuration must be turned on. For example, if you’ve built a custom widget on your website for customers to submit requests on, you can use the bookings endpoint to send the information to ServiceTitan. Once a booking is submitted, a CSR follows up and either accepts and books it into a job, or dismisses it. You can also create leads from bookings that don’t immediately convert into a job for future follow-up.

To create a booking, a name and either an address or phone number/email are required. We recommend you require at least one phone number or email address per booking, in addition to the address, so the CSR can quickly contact the prospective customer and increase the chances of converting the booking into a job.

When sending business unit and job type information, if your account is configured to map job types to business units, you’ll need to ensure you’re sending matching values. Otherwise, the dropdown on the Calls screen will not be pre-filled for your CSR.

Booking Provider:  It is possible to create bookings from different sources a.k.a Booking Providers and distinguish between those providers. This is organized as follows: Each Booking Provider can be tagged with some identifiable tag in ServiceTitan.

High-level use cases for these APIs:

- Create a new booking

  - Choose to send a confirmation message to the end-customer

  - Send information like job type, business unit, campaign and more to prefill the Calls page for a CSR
- Update an existing booking. For example, change the contact method.

- Get information about one or more bookings


In order to use the Bookings API endpoints please read and follow the below steps.

Step1) Make sure you have configured your Booking Provider Tags. To configure your Booking Provider Tags: From the ST app UI,  Go To : Settings→Integrations→Booking Provider Tags and provide the Name of the Tag and Description (optional) and save it.

Step2) When you are connecting the App i.e, Go To: Settings→Integrations→API Application Access→Connect App

You will get a drop down of the available Booking Provider Tags that you have configured. Select the appropriate Booking Provider Tag. By doing this you are allowing access to that particular Provider to the below endpoints and operations:

- [{booking\_provider}/bookings](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings/{id}](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings/{id}](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings/{id}/contacts](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_providerr}/bookings/{id}/contacts](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings/{id}/contacts/{contactId}](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{booking\_provider}/bookings/{id}/contacts/{contactId}](https://developer.servicetitan.io/docs/api-resources-crm/#)


The below endpoints are to be used by the Tenant (you) and not by the provider. For calling these endpoints choose ‘No Restriction’ from the drop down in the step2.

- [{tenant}/bookings](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{tenant}/bookings/{id}](https://developer.servicetitan.io/docs/api-resources-crm/#)

- [{tenant}/bookings/{id}/contacts](https://developer.servicetitan.io/docs/api-resources-crm/#)


• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •