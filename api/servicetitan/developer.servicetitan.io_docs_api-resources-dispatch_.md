---
url: "https://developer.servicetitan.io/docs/api-resources-dispatch/"
title: "509. Docs: Dispatch - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-dispatch/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-dispatch/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-dispatch/#)
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

# Dispatch APIs

**Capacity**

Capacity is real time data about total capacity and availability to add jobs. Capacity is increased by adding technician shifts. Capacity is decreased by booking those technicians on jobs. ServiceTitan’s Adjustable Capacity Planning feature calculates real-time availability and the results can be provided via API.

Capacity—The number of labor hours scheduled.

Availability—The number of hours available or free from commitment. Availability equals capacity minus hours of work booked for a given time period.

High level use cases for these APIs:

- Retrieve real time availability

- Use in conjunction with the Jobs API and Appointments API to retrieve real time availability and create bookings


**Technician shifts**

Shifts keep track of which technicians are working and when, which technicians are off and when, and which technicians are on-call for emergencies and when. Shifts can span one calendar day or go overnight.

Available—A technician is working and available to be assigned to jobs.

On-call—Technician is not active but can be called in if there is a need for them. For example, there is an emergency or demand spikes unexpectedly.

Time off—Technician is not available to be assigned for jobs or in case of an emergency.

High level use cases for these APIs:

- Chosen providers will have full visibility into your technician's schedules

  - Third party scheduling software can retrieve data on your technician’s shifts

  - Outside payroll providers can retrieve data on your technician’s shifts

**Non-Job Events**

Non-job events serve to block technician’s time for activities that are not customer facing. Non-job events are frequently created to record time off, shop time, vehicle maintenance, etc. This API enables you to retrieve already existing non-job events or create brand new ones for specific technicians. By providing a timesheet code with every created event you can also seamlessly push pay information to payroll.

Terms to know:

Non-Job Event - non-job related events that a company can create in order to keep track of employee non-productive time. Examples include meetings, shop time, and training.

Timesheet codes - preset types of non-job related events that help with identifying which rate to pay for which event.

High Level Use Cases:

- Reserve time on technician schedules for non-job related activities

- Retrieve non-job related activities for use in third party calendar or payroll software


**GPS**

Keep track of your technician locations at any time. If you use third party GPS devices this API accepts GPS coordinates that are then plotted on the Dispatch Map.

Terms to know:

Dispatch Map - map located underneath the Dispatch Board in the Dispatch tab of the main navigation.

Technician coordinates - geographical coordinates of technician’s current location.

High Level Use Cases:

- Map technicians on the Dispatch Map to monitor their activity


In order to use GPS, please make sure your admin has completed the below steps from the ST UI:

Step1) Make sure you have configured your GPS Providers. To configure your GPS Providers: From the ST app UI,  Go To : Settings→Integrations→GPS . Click Add: Select the GPS provider from the available dropdown list, add Account ID, Username and password and other optional details and Save.

Step2): Next, Select the Activate button and choose the GPS provider and activate. Similarly, you can Deactivate a chosen GPS provider as well.

Step3) When you are connecting the App i.e, Go To: Settings→Integrations→API Application Access→Connect App

You will get a drop down of the GPS Providers that you have configured. Select the appropriate GPS Provider. By doing this you are allowing access to that particular provider via API.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •