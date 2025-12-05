---
url: "https://help.gohighlevel.com/support/solutions/articles/48001077108,"
title: " Contact Date Of Birth Field (Birthday) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001077108,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
4. [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001077108,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
   - [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
6. Contact Date Of Birth Field (Birthday)

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

# Contact Date Of Birth Field (Birthday)

Modified on: Fri, 29 Aug, 2025 at 8:01 AM

The Birthday field in HighLevel allows you to personalize communications, build automation campaigns based on contact birthdays, and filter contacts by age within Smart Lists. This article explains how to utilize the Birthday field effectively.

* * *

**TABLE OF CONTENTS**

- [What is the Birthday Field?](https://help.gohighlevel.com/support/solutions/articles/48001077108,#What-is-the-Birthday-Field?)
- [How to Build Birthday Reminder Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001077108,#How-to-Build-Birthday-Reminder-Campaigns)
- [How to Filter Contacts by Age in Smart Lists](https://help.gohighlevel.com/support/solutions/articles/48001077108,#How-to-Filter-Contacts-by-Age-in-Smart-Lists)
- [Best Practices](https://help.gohighlevel.com/support/solutions/articles/48001077108,#Best-Practices)
- [Common Issues and Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/48001077108,#Common-Issues-and-Troubleshooting)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001077108,#Related-Articles)

* * *

## **What is the Birthday Field?**

The Birthday field is a standard system field that captures a contact's birth date (Month/Day/Year).

It can be populated through:

- Manual entry

- Form submissions

- CSV Imports

- API integrations


This field enables automation triggers based on birthdays and helps segment contacts by age.

* * *

## **How to Build Birthday Reminder Campaigns**

You can automate birthday reminders or offers by setting up birthday workflows.

### **Step 1:** Configure the Birthday Trigger

- Navigate to **Workflows** \> **Create New Workflow**.

- Set the **Trigger** to **Birthday**.

- Choose the trigger condition:





  - On the birthday

  - Before the birthday (e.g., 7 days before)

  - After the birthday (e.g., 1 day later)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948330/original/A-EJmS-eU8slwJQO8xWd4wXGOcnUm1t4yg.gif?1749477876)

### **Step 2:** Define Actions

- **Send Email**: Personalized birthday greetings or offers.

- **Send SMS**: Short birthday wishes or coupon codes.

- **Assign Task**: Alert internal teams to follow up manually if needed.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948420/original/dY-FvszUwlOsrnpiCsrWVS72Ety5D6TVsw.gif?1749478000)

### **Example Workflow Structure**

| Step | Action |
| --- | --- |
| 1 | Trigger on Birthday |
| 2 | Send Birthday SMS |
| 3 | Send Birthday Email |
| 4 | (Optional) Notify the internal team |

* * *

## **How to Filter Contacts by Age in Smart Lists**

Using the Birthday field, you can segment your contacts based on their age for targeted communication.

### **Steps to Filter by Age**

1. Go to **Contacts** \> **Smart Lists**.

2. Apply a **Filter** using the Birthday field's **Age** condition.

3. Select the appropriate comparison:


| Filter Condition | Use Case Example |
| --- | --- |
| Age is greater than X | Target seniors aged 50+ |
| Age is less than X | Promotions for young audiences under 25 |
| Age is between X and Y | Target specific age groups, e.g., 30–40 years |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948100/original/rQKJ6HKR4-6qSRJEDZATqZb2GlEdLXwR6A.gif?1749477612)

The system calculates age dynamically based on the current date and the stored birthday.

* * *

## **Best Practices**

- **Capture Birthdays Early**: Include a Birthday field in lead capture forms to gather the information upfront.

- **Validate Date Formats**: Use MM/DD/YYYY format to ensure automation triggers work correctly.

- **Test Automation**: Always test birthday workflows with sample contacts before making them live.

- **Consider Time Zones**: Be aware that workflows may use contact-specific time zones if configured.


* * *

## **Common Issues and Troubleshooting**

| Issue | Solution |
| --- | --- |
| Birthday automation is not triggering | Ensure the Birthday field is populated with a complete and correctly formatted date. |
| Incorrect age calculation | Confirm that the birth year is correctly entered. Missing or incorrect years can cause errors. |
| SMS or email was not sent on the birthday | Double-check workflow timing, trigger configuration, and contact timezone settings. |

* * *

## **Related Articles**

- [Workflow Trigger - Birthday Reminder](https://help.gohighlevel.com/support/solutions/articles/155000002670-workflow-trigger-birthday-reminder)
- [Workflow Trigger - Custom Date Reminder](https://help.gohighlevel.com/support/solutions/articles/155000002674-workflow-trigger-custom-date-remimder)

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

- ["Add Contact" Form Upgrade and Customizations](https://help.gohighlevel.com/support/solutions/articles/155000006513--add-contact-form-upgrade-and-customizations)
- [Adding Files To Contacts using a Custom Field](https://help.gohighlevel.com/support/solutions/articles/48001171922-adding-files-to-contacts-using-a-custom-field)
- [Adding Multiple Phone Numbers for a Contact](https://help.gohighlevel.com/support/solutions/articles/155000000448-adding-multiple-phone-numbers-for-a-contact)
- [AND/OR Filters](https://help.gohighlevel.com/support/solutions/articles/155000001247-and-or-filters)
- [Automatically Merge Facebook Messenger Contacts With Lead Ad Contacts](https://help.gohighlevel.com/support/solutions/articles/48001146104-automatically-merge-facebook-messenger-contacts-with-lead-ad-contacts)
- [Company Object Feature: A Manual Way to Organize Contacts](https://help.gohighlevel.com/support/solutions/articles/48001223777-company-object-feature-a-manual-way-to-organize-contacts)

## Related Articles

- [Workflow Trigger - Birthday Reminder](https://help.gohighlevel.com/support/solutions/articles/155000002670-workflow-trigger-birthday-reminder)
- [Workflow Trigger - Birthday Reminder](https://help.gohighlevel.com/support/solutions/articles/48000987572-workflow-trigger-birthday-reminder)
- [Workflow Trigger - Custom Date Remimder](https://help.gohighlevel.com/support/solutions/articles/155000002674-workflow-trigger-custom-date-remimder)
- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Send Recurring Invoice action - Setup guide](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide)
- [A List of Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000002292-a-list-of-workflow-triggers)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001077108,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001077108-contact-date-of-birth-field-birthday-/hit)