---
url: "https://developer.servicetitan.io/docs/api-resources-scheduling-pro/"
title: "537. Docs: Scheduling Pro - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-scheduling-pro/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-scheduling-pro/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-scheduling-pro/#)
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

# Scheduling Pro APIs

Scheduling Pro is a ServiceTitan Pro Product that allows your customers to easily book jobs or make booking requests via a customizable online scheduler. This scheduler is integrated with your ServiceTitan account to interface with other parts of your account setup, including job types, business units, campaigns, technicians and tags. You can add Scheduling Pro to your company website and/or Google through a “Book Online” link on your Google Business Profile. These jobs or bookings will appear in your ServiceTitan account, either on your Dispatch Board in the “Unassigned” section, or as a booking request on the Calls>Bookings screen, for you to review.

**Schedulers**

Within Scheduling Pro, you can create multiple schedulers on a single account. This allows you to create schedulers for different audiences and use cases, or segment your schedulers by brand. This can be useful if you are building different booking experiences for member versus nonmember web pages, testing the effectiveness of different scheduler workflows or managing separately-branded companies under a single tenant.

Every scheduler within Scheduling Pro is named and has its own independent Scheduler ID. This, combined with a brand-specific data API key for the company the scheduler is created under, can be used to install that specific scheduler on a customer-facing website. Additionally, each company/brand can have a scheduler registered as default. This controls the default scheduler shown to customers when cross-scheduler routing is enabled and which scheduler may appear in other future integrations such as Customer Portal.

High-level use cases for these APIs:

- Get a list of all schedulers set up in Scheduling Pro

- Get information about when schedulers on your account were created and/or updated

- Get scheduler and data API keys per scheduler for web install purposes

- Get information on which scheduler is registered as the default scheduler for each company/brand


**Sessions**

Every interaction with a scheduler in Scheduling Pro is stored as a session. This might include a full customer booking experience resulting in a job, an abandoned lead where a customer leaves the scheduler just shy of booking, or sessions where the customer simply opens the scheduler and immediately decides not to book.

Scheduling Pro stores numerous details about these sessions for your review. This includes any information that the customer provides about their service need, timestamps for when sessions are created and/or updated, marketing attribution information and more.

High-level use cases for these APIs:

- Get a list of customers by name, phone number and/or email address that either completed their request to book through Scheduling Pro or stopped short of fully booking for further follow-up

- Get a list of all sessions and review trends in customer behavior, such as dropoff points or commonly selected trade/service needs

- Get a list of all attribution information for all sessions to determine the effectiveness of your various marketing campaigns and lead sources

- Get a list of completed sessions to determine your daily, weekly or monthly booking volume


**Performance**

This API allows you to quickly look at the performance of a specific scheduler overall. This includes key metrics, such as:

- Completion rate: Both opened completion rate (number of jobs booked versus number of sessions opened) and engaged completion rate (number of jobs booked versus number of sessions where the customer provided any info). This helps you evaluate the effectiveness of your scheduler to book jobs.

- Customer Contacts Captured: Some businesses refer to these as “leads”, or the total number of unique customer names captured during the booking process.

- Total jobs or total bookings: Depending on your scheduler settings, you may create jobs, bookings or both from your scheduler.

- Abandoned sessions sent as bookings: If enabled, you may send customer dropoff sessions to your Bookings screen.

- Total Sessions: The number of unique scheduler sessions started with your scheduler on live websites.

- Milestones: How often customers reach certain steps in your scheduler. You can use these to look at key dropoff points.


These metrics will help you consider the volume of jobs booked through Scheduling Pro, your effectiveness at getting customers through the process and overall behavior of your customers when booking online.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •