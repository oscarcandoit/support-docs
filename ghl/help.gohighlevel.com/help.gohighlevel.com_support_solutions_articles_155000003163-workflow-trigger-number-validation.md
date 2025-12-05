---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation"
title: " Workflow Trigger - Number Validation : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
6. Workflow Trigger - Number Validation

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

# Workflow Trigger - Number Validation

Modified on: Tue, 8 Apr, 2025 at 4:22 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#Overview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation#Example)

## Overview

The Number Validation Trigger in HighLevel enables users to automate workflows based on the validation status of phone numbers. This feature is crucial for ensuring that SMS messages are sent only to valid numbers, thereby reducing costs associated with undeliverable messages and improving overall communication efficiency.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031482161/original/X-YyITC2qEIdXYmaSyI4evUEozntaA-5TQ.png?1724319130)

## Trigger Name

Number Validation

## Trigger Description

Triggered based on the number validation feature (if enabled) and checks whether the contact number is landline or invalid before sending the first message

## How to Configure

To enable the Number Validation Trigger you need to:

- Go to your agency settings.
- Navigate to Phone integration settings and enable number validation for each location.
- Configure workflows that utilize the validation trigger to respond appropriately to different validation outcomes

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031483049/original/X3Fs4ydaAoSWBqKxOqqHaitOlfeuFay_0g.png?1724319617)

### **Please note:**

Number Validation Trigger only works on the basis of the validation settings. This runs when a contact is created and a validation is run against the contact's number in the CRM. It does not fire based on your Twillio Error Codes.

Filters Breakdown

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031485166/original/N5E0lBxTzK4pCSBT1gAhR8DdWW_K-ydJzQ.png?1724320772)

|     |     |     |
| --- | --- | --- |
| **Filter name** | **Description** | **Mandatory** |
| Number is | Pick the validation status for which you want to fire the trigger | No |

## Example

1. **SMS Campaign Management**: When a phone number is validated and found to be SMS-capable, the trigger can automatically add the contact to an active SMS campaign. Conversely, if the number is invalid or not SMS-capable, the trigger can remove that contact from the campaign to prevent wasted resources on undeliverable messages.
2. **Lead Qualification**: If a lead submits a phone number through a form, the validation trigger can check the number's status. If the number is invalid, the lead can be tagged as "invalid" or removed from the database. This helps maintain a clean and effective lead list.
3. **Error Notifications**: The trigger can be set up to notify the marketing team whenever a validation error occurs. For instance, if a number fails validation due to being a landline, an automated message can be sent to the team to review the lead's information and take appropriate action.
4. **Compliance Management**: In scenarios where compliance with regulations like the TCPA is critical, the validation trigger can prevent sending messages to numbers that are flagged as invalid. This helps mitigate risks associated with sending unsolicited messages and ensures that the communication strategy adheres to legal standards.
5. **Automated Tagging**: Upon validation, the trigger can automatically tag contacts based on the validation result. For example, numbers that are confirmed as invalid can be tagged as "Do Not Contact," allowing for easier management of outreach efforts.

* * *

**Frequently Asked Questions**

### **1\. How does the Number Validation Trigger improve lead management in CRM?**

The Number Validation Trigger enhances lead management by ensuring that only valid phone numbers are used for communication. By automatically removing invalid numbers from campaigns and tagging them for review, users can maintain a clean and effective contact list, leading to better engagement and conversion rates.

### **2\. What are the benefits of using the Number Validation Trigger in CRM?**

Using the Number Validation Trigger in CRM offers several benefits, including:

- **Improved communication efficiency** by sending messages only to valid numbers.
- **Reduced costs** associated with undeliverable messages.
- **Streamlined lead management** through automated actions based on validation results.
- **Enhanced compliance** with regulations by preventing messages to invalid numbers.

### **3\. How can the Number Validation Trigger help with compliance in CRM?**

The Number Validation Trigger helps with compliance by preventing messages from being sent to invalid or non-SMS-capable numbers. This reduces the risk of unsolicited communications and ensures adherence to regulations like the Telephone Consumer Protection Act (TCPA). By maintaining a clean contact list, users can avoid potential legal issues and protect their brand reputation.

### **4\. Can the Number Validation Trigger be customized in CRM?**

Yes, the Number Validation Trigger in CRM allows for the creation of custom workflows based on validation outcomes. Users can set specific conditions and actions to tailor the trigger's behavior to their unique business needs. This flexibility ensures that the trigger can be optimized for maximum efficiency and effectiveness in lead management.

### **5\. How does the Number Validation Trigger compare to manual number validation in CRM?**

Compared to manual number validation, the Number Validation Trigger in CRM offers several advantages:

- **Automated validation process** saves time and reduces the risk of human error.
- **Consistent application** of validation rules across all leads.
- **Ability to trigger actions** based on validation results, streamlining lead management workflows.
- **Real-time validation** ensures that only valid numbers are used for communication.

### **6\. What types of phone numbers can be validated using the Number Validation Trigger in CRM?**

The Number Validation Trigger in CRM can validate various types of phone numbers, including mobile, landline, and VoIP numbers. The validation process determines if a number is capable of receiving SMS messages, ensuring that communication efforts are directed towards valid and reachable contacts.

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

- [Workflow Trigger - Video Tracking](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking)
- [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)
- [Workflow Trigger - Number Validation](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)

## Related Articles

- [Workflow Trigger - Messaging Error Code - SMS](https://help.gohighlevel.com/support/solutions/articles/155000003201-workflow-trigger-messaging-error-code-sms)
- [Workflow Trigger - Task Reminder](https://help.gohighlevel.com/support/solutions/articles/155000003261-workflow-trigger-task-reminder)
- [Workflow Trigger - Product Completed](https://help.gohighlevel.com/support/solutions/articles/155000003258-workflow-trigger-product-completed)
- [Workflow Trigger - Start IVR Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003203-workflow-trigger-start-ivr-trigger)
- [Workflow Builder: Learn More Using AI](https://help.gohighlevel.com/support/solutions/articles/155000005631-workflow-builder-learn-more-using-ai)
- [Trigger Statistics for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006809-trigger-statistics-for-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation/hit)