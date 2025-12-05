---
url: "https://developer.servicetitan.io/docs/api-resources-job-planning/"
title: "521. Docs: Job Planning - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/api-resources-job-planning/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/api-resources-job-planning/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/api-resources-job-planning/#)
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

# Job Planning and Management

**Jobs and Appointments**

Before a technician can be dispatched to a location for any reason, a job must be booked in ServiceTitan. Jobs show up on the schedule and dispatch board which are visible to office employees, and also on the ServiceTitan mobile application used by technicians.

Jobs—Jobs in ServiceTitan provide a record for the work done or a reason for the visit to a location.

Appointments—Appointments are the schedule of a job. Specifically, who is going out, and when they are going.

Location—The job’s location can also be called the job site. This is where work is being performed.

Bill-to customer—The person listed as the bill-to customer is the one who is responsible for paying for the job.

To book a job in ServiceTitan you add a location where the work is being performed, and a bill-to customer, which is the party responsible for payment. A job always has at least one appointment, which is automatically created when the job is booked. Appointments are the schedule for the job. Each appointment has a date, time, and assigned technicians. You can add more appointments to a job, if necessary. Technicians are assigned to each job’s appointment. Assigning technicians is optional when booking a job or adding additional appointments, they can be added later. A technician must be assigned to an appointment before it can be started.

Things to know:

- Before you can book a job, you’ll need a customer ID and location ID. Create them if necessary before booking the job.

- Jobs, appointments, and technician assignments each have their own set of statuses

- Jobs cannot be deleted, only canceled if no longer necessary

- You cannot cancel an individual appointment, you should delete it if it’s no longer necessary

- Limited job status transitions are allowed via API. For example, you can:

  - Transitioning a job to Hold, using hold reasons

  - Transitioning a job to Canceled, using cancel reasons
- You cannot transition technician statuses on appointments via API

- You cannot transition appointment statuses via API

  - Appointment statuses are transitioned automatically when you dispatch or arrive technicians. They also transition as technicians leave appointments, and when the job is completed.
- You cannot mark an individual appointment as done

- You can put a single appointment on hold

- You can delete an appointment under certain conditions

  - You cannot delete the only appointment on a job

  - You cannot delete appointments that have timesheets associated with them
- Almost no adjustments can be made to a job’s appointments after that job’s invoice has been exported or posted

- There are some settings and account configurations that the APIs support, like required fields for custom fields on call booking, and arrival windows. Not all account configurations are supported at this time.

- To get estimate or invoice related information, please see their respective endpoints and pass the Job ID as a parameter

- When sending business unit and job type information, if your account is configured to map job types to business units, then you’ll need to ensure you’re sending matching values. Otherwise, the dropdown on the calls page will not be pre filled for your CSR.


High level use cases for these APIs:

- Retrieve information about a single job or many jobs

  - Find all jobs that have work scheduled within a given date range

  - Find all jobs completed within a date range

  - Find all jobs related to a project
- Retrieve information about one appointment or many appointments

  - Find all of a job’s appointments

  - Find all of a project’s appointments
- Book a job

- Update core job details. For example:

  - Bill-To customer

  - Summary
- Reschedule an appointment to a later date

- Add or update special-instructions for an appointment

- Assign or un-assign technicians from jobs

- Leave a note on a job, or retrieve notes from a job

- Understand why a job was canceled or put on hold


**Projects**

A project is a way to group a set of jobs that are related to one another and happen at the same location. Think of them as a project folder.

Project—A project is a collection of related jobs happening at the same location. In other words it is the file folder that keeps related jobs together.

Jobs—Jobs in ServiceTitan represent the record for work.

Location—The job’s location can also be called the job site. This is where work is being performed.

Bill-to customer—The person listed as the bill-to customer is the one who is responsible for paying for the jobs.

Typically, projects are created to keep track of multi-day jobs like equipment replacements, new installations, or jobs that require a technician to return when a special part arrives.

High level use cases for these APIs:

- Get details about one or more projects

- Get projects scheduled to complete within a date range

- Get projects scheduled to start within a date range

- Get the project a job belongs to

- Get jobs related to a particular project


To get job or appointment related information, please see their respective endpoints and pass the Project ID as a parameter.

• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •