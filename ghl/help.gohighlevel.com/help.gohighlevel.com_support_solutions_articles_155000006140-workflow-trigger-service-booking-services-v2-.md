---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-"
title: " Service Booking Workflow Trigger (Services v2) | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Services](https://help.gohighlevel.com/support/solutions/folders/155000000828)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Services](https://help.gohighlevel.com/support/solutions/folders/155000000828)
6. Workflow Trigger – Service Booking (Services v2)

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Workflow Trigger – Service Booking (Services v2)

Modified on: Tue, 18 Nov, 2025 at 9:03 AM

Learn what the **Service Booking (Services v2)** workflow trigger does, when it fires, and how it differs from the appointment status triggers. This article covers the information you need to know to start use the Service Booking Trigger in your workflows.

* * *

**TABLE OF CONTENTS**

- [What is the Service Booking Trigger?](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#What-is-the-Service-Booking-Trigger?)
- [Key Benefits of the Service Booking Trigger](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Key-Benefits-of-the-Service-Booking-Trigger)
- [When It’s Triggered](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#When-It%E2%80%99s-Triggered)
- [Key Differences from Appointment Status Trigger](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Key-Differences-from-Appointment-Status-Trigger)
- [Available Filters](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Available-Filters)
- [Trigger Visibility](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Trigger-Visibility)
- [Order Submission Trigger Behavior with Service Bookings](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Order-Submission-Trigger-Behavior-with-Service-Bookings)
- [Supported Appointment Actions](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Supported-Appointment-Actions)
- [Using Custom Values with Service Bookings](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Using-Custom-Values-with-Service-Bookings)
- [How to Customize It](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#How-to-Customize-It)
- [How to Set Up the Service Booking Workflow Trigger](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#How-to-Set-Up-the-Service-Booking-Workflow-Trigger)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Related-Articles)

* * *

# **What is the Service Booking Trigger?**

The Service Booking trigger lets you automate workflows whenever a Service Booking (which may include multiple services/appointments) is created or updated. Unlike appointment-level triggers (which act on individual calendar appointments), this trigger works at the main booking level. So if a customer books multiple services at once (for example, a haircut, facial, and massage in a single checkout), the workflow is triggered only once for the entire booking — not three times. This helps you avoid duplicate actions while still giving you access to all the service details in one place.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330224/original/74B0X4pUs3yQIxMSbgOcw2RPzUQGq7LZcg.png?1757367116)

* * *

## **Key Benefits of the Service Booking Trigger**

Understanding the benefits helps you decide when to use the Service Booking Workflow Trigger.

- **Avoid Duplicate Messages:** One run per booking keeps communications clean, even when multiple services are purchased.

- **Personalized Communication:** Booking details (service, date/time, duration, staff, add-ons, timezone) help customers understand exactly what they scheduled.

- **Target the Right Audiences:** Filter by status, service, category, tags, location, or who created/modified the booking to send relevant messages to the right people.

- **Multi-Service Summaries:** One confirmation can list every booked service and selected add-ons, reducing confusion and follow-up questions


* * *

## **When It’s Triggered**

The workflow activates whenever a **new Service Booking is created** through:

- **Booking Page:** when a customer self-books online

- **User:** when staff manually create a booking

* * *

## **Key Differences from Appointment Status Trigger**

Avoid mixing up booking-level and appointment-level automation by comparing the core behaviors

- **Appointment Status Trigger** → Works only for calendar appointments.

- **Service Booking Trigger** → Works only for Services (v2) bookings.

- If a booker schedules multiple services (e.g., 5 services) under one Service Booking, the workflow triggers once (not 5 times).




  - Example: If your workflow action is “Send Email,” only one email is sent containing all booked services — provided you use Service Booking custom values.

* * *

## **Available Filters**

Filters narrow down which bookings will start the workflow so your automation stays focused and relevant. The available filters for this trigger include:

- Appointment Status (Unconfirmed, Confirmed, Showed, No Show, Cancelled, Invalid)

- Created By / Modified By

- Has Tag

- In Service (specific service)

- In Service Category (service grouping)

- In Service Location


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330014/original/y59aJF0FVY2oOgYVJvD4v4aBtQbpW2PxDA.png?1757366323)

* * *

## **Trigger Visibility**

This trigger is only visible if Services (v2) is enabled in the sub-account. If Services (v2) is disabled for a sub-account:

- **New workflows** → The Service Booking trigger will not be available for selection.

- **Existing workflows** (that already include this trigger):




  - New bookings will be blocked (the trigger will not fire).

  - Existing bookings → If the booking status is updated, the workflow will still trigger as expected.

* * *

## **Order Submission Trigger Behavior with Service Bookings**

By default, whenever a Service Booking is created, an **Order** is automatically generated. To prevent duplicate automations, the Order Submitted trigger will not fire for the orders created via service-bookings.

However, if you want workflows to also trigger for these orders, you must explicitly add a filter:

- **Order Source = Calendar**

This ensures that **Order-based workflows** only run for service-booking orders when the business explicitly wants them to — by applying the filter **Order Source = Calendar** to the Order Submitted trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330194/original/k1mro9IrxC3iuEYayMYeg3vM26gjCjjsOg.png?1757366998)

* * *

## **Supported Appointment Actions**

| **Action** | **Status** | **Notes** |
| --- | --- | --- |
| Update Appointment Status | ✅ Supported | Based on Service Booking ID |
| Create Appointment Note | ✅ Supported | Based on Service Booking ID. Notes apply to the Service Booking as a whole |
| Book Appointment | Not supported | NA |
| Conversation AI Booking Bot | Not supported | NA |
| Eliza Booking | Not supported | NA |

* * *

## **Using Custom Values with Service Bookings**

When someone books a service, you can automatically include their booking details (like service name, date, time, price, staff, and add-ons) in your emails, texts, or reminders.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058667780/original/9vrckUAOyABBgRrLd8n27INqKg1_B9SqTQ.gif?1763478202)

### **What details are available?**

For each booked service, you can display:

- **Service Name:** e.g., “Haircut” or “Massage”

- **Price:** the cost of the service

- **Duration:** how long the service lasts (e.g., 60 minutes)

- **Date & Time:** when the appointment is scheduled

- **Timezone:** the customer’s local timezone

- **Assigned Staff:** which team member the appointment is with

- **Add-ons:** any extras the customer selected (with prices)


If multiple services are booked together, each service (and its add-ons) will be listed one after another.

### **Example: How it looks in your template**

```
{{#each serviceBooking.services}}
  {{this.name}} - {{this.duration}} | Price: {{this.price}}
  Date: {{this.startDate}} at {{this.startTime}} ({{this.timezone}})
  With: {{this.assignedUser}}

  {{#if addOns}}
    Add-ons:
    {{#each addOns}}
      - {{this.addonName}} ({{this.addonPrice}})
    {{/each}}
  {{/if}}
{{/each}}
```

**What this does:**

- The `{{#each serviceBooking.services}} ... {{/each}}` block repeats everything inside it for each booked service.

- So if a customer books 3 services, this section will repeat 3 times (once for each service).

- Add-ons (if selected) will be listed under the respective service.


```
Looking for more information on custom values? Check out How to use Custom Values
```

* * *

## **How to Customize It**

If you want to show additional information (like a staff member’s full name), simply place your cursor inside the block and add the extra placeholder.

**Example with staff name included:**

```
{{#each serviceBooking.services}}
  {{this.name}} - {{this.duration}} | Price: {{this.price}}
  Staff User: {{this.user.name}}
  Date: {{this.startDate}} at {{this.startTime}} ({{this.timezone}})
  With: {{this.assignedUser}}
{{/each}}
```

This way, you can fully personalize confirmation emails or reminders with the exact service details your customer booked.

* * *

## **How to Set Up the Service Booking Workflow Trigger**

A proper setup ensures your workflow runs at the right time, targets the right bookings, and communicates the right details.

#### **Step 1:** Create or Open a Workflow

- Select the **Automation** tab in the left-side navigation bar

- To open an existing workflow, click on the workflow name

- To create a new Workflow, use the **\+ Create New Workflow** button


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330552/original/8mnO8MtsgUsvrH1FulZYq5FAXczERNnRRQ.png?1757368242)

#### **Step 2:** Add the Trigger

- Create a new trigger by clicking **\+ Add New Trigger**

- Using the search bar, select the **Service Booking** trigger


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330579/original/jPqZY7tm_rQ5-XszfSXqlLvZ4_oTosnmcQ.png?1757368385)

#### **Step 3:** Add Filters

- Configure the trigger to your needs using the necessary filters. [Click here for more information on the available filters.](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-#Available-Filters)

- Once fully configured, save your changes using the blue **Save Trigger** button


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330615/original/EXx6UxQFcMR3aBDIhp2i5BldgCcArKyP9w.png?1757368482)

* * *

## **Frequently Asked Questions**

**Q: How do I make the Service Booking trigger available in my sub-account?**

Ensure Services (v2) is enabled. If Services is disabled, the trigger will not be available for new workflows. [Click here for more information on enabling Services](https://help.gohighlevel.com/en/support/solutions/articles/155000006240)

**Q: Can I include staff details in my confirmations or reminders?**

Yes. You can use customer values to reference the assigned staff member (or other information such as price, date, location, etc) in your communications.

* * *

## **Related Articles**

- [Services - Overview & How to Get Started](https://help.gohighlevel.com/en/support/solutions/articles/155000006240)

- [Global Settings in Services](https://help.gohighlevel.com/en/support/solutions/articles/155000003546)

- [How to Create Services](https://help.gohighlevel.com/en/support/solutions/articles/155000005330)

- [Configuring Staff in Services](https://help.gohighlevel.com/en/support/solutions/articles/155000005331)

- [Categories in Services](https://help.gohighlevel.com/en/support/solutions/articles/155000003547)

- [Resources in Services](https://help.gohighlevel.com/en/support/solutions/articles/155000003505)

- [How to use Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/48001161575)

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [Services - Overview & How to Get Started](https://help.gohighlevel.com/support/solutions/articles/155000006240-services-overview-how-to-get-started)
- [How to Create Services?](https://help.gohighlevel.com/support/solutions/articles/155000005330-how-to-create-services-)
- [Categories in Services](https://help.gohighlevel.com/support/solutions/articles/155000003547-categories-in-services)
- [Configuring Staff in Services](https://help.gohighlevel.com/support/solutions/articles/155000005331-configuring-staff-in-services)
- [Resources in Services](https://help.gohighlevel.com/support/solutions/articles/155000003505-resources-in-services)
- [Add-ons in Services](https://help.gohighlevel.com/support/solutions/articles/155000003506-add-ons-in-services)

## Related Articles

- [Workflow Action: Book Appointment](https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment)
- [Taxes and Processing Fees for Services (v2)](https://help.gohighlevel.com/support/solutions/articles/155000006661-taxes-and-processing-fees-for-services-v2-)
- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [How To Duplicate A Calendar](https://help.gohighlevel.com/support/solutions/articles/155000005894-how-to-duplicate-a-calendar)
- [Services - Overview & How to Get Started](https://help.gohighlevel.com/support/solutions/articles/155000006240-services-overview-how-to-get-started)
- [Coupon Codes in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000006097-coupon-codes-in-calendars)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-/hit)