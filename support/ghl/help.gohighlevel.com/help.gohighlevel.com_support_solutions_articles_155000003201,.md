---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003201,"
title: " Workflow Trigger - Messaging Error Code - SMS : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003201,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003201,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
6. Workflow Trigger - Messaging Error Code - SMS

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

# Workflow Trigger - Messaging Error Code - SMS

Modified on: Tue, 27 May, 2025 at 6:29 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003201,#Overview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000003201,#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000003201,#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003201,#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003201,#Example)

* * *

## **Overview**

The "Messaging Error - SMS" trigger allows you to initiate workflows automatically whenever a SMS has resulted in undelivered state and returned one of the below-mentioned error code.

## **Trigger Name**

Messaging Error - SMS

## **Trigger Description**

This trigger activates a WorkFlow based on the error received for an undelivered message. This can be used for taking relevant measures to clean the contact list eventually improving the delivery rate.

## **How to Configure**

1. **Choose a Workflow Trigger:**

   - **Select "Messaging Error - SMS" from the dropdown list.**
2. **Workflow Trigger Name:**

   - **Provide a descriptive name for the trigger to identify it within your workflow easily.**
3. **Filters:**

   - **You can add filters to narrow down the trigger to specific error codes mentioned below:**

|     |     |     |
| --- | --- | --- |
| Code | Description |
| 30007 | Carrier Violation |
| 30034 | A2P Registration Pending on Number |  |
| 30032 | Toll Free Number not Verified |
| 30005 | User Inactive/Number does not exist |
| 30003 | Unreachable/Out of Service Number |
| 30004 | Do not want SMS/DND enabled |
| 30006 | Landline/Incapable to receive SMS |
| 30023 | US A2P 10DLC - Daily Message Cap Reached |
| 21408 | Permission to Send SMS Not Enabled for Region |
| 30008 | Unknown Error |
| 21606 | Invalid 'From' Phone Number |
| 21211 | Invalid 'To' Phone Number |
| 21614 | To' Number Is Not a Valid Mobile Number |
| 21610 | User Replied with STOP (Opted Out) |
| 30011 | MMS Not Supported by Recipient Number or Region |
| 30033 | A2P Campaign Suspended or Deleted |
| 21661 | From' Number Is Not SMS-Capable |
| 21635 | To' Number Cannot Be a Landline |
| 30037 | Outbound Messaging Disabled |
| 30002 | Sub-Account Suspended |

## **Example**

**Let’s say you are running an SMS campaign to promote a new product, and you want to automatically remove contacts who have a high chance on not getting the messages next time or want to add a tag to re trigger them an SMS after sometime.some time**

1. **Choose a Workflow Trigger:**

   - **Trigger: Messaging Error - SMS**
2. **Workflow Trigger Name:**

   - **Name: Messaging Error - SMS**
3. **Filters:**

   - **Filter Type: Error Code is**
   - **Error Name: 30007 - Carrier Violation**

     **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033086504/original/iv8aR4ZsYOgRmu7gfYc1HJCccorQpor0dQ.jpeg?1726659711)**
4. **Further, this can be created into if else if different actions is needed as shown below:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033086528/original/vGMb8HREi0nL0poEZYc-KF4Qw_uRJHKyBQ.jpeg?1726659731)**

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

- [Triggers - Overview](https://help.gohighlevel.com/support/solutions/articles/48000982202-triggers-overview)
- [Duplicating Triggers](https://help.gohighlevel.com/support/solutions/articles/48000982205-duplicating-triggers)
- [Trigger/workflow - Email/SMS Notifications to Client/Yourself (New Lead)](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-)
- [Send Contact Info To Google Sheets Via Webhooks & Zapier](https://help.gohighlevel.com/support/solutions/articles/48001062709-send-contact-info-to-google-sheets-via-webhooks-zapier)
- [Workflow Trigger - Exact Match & Contains Phrase](https://help.gohighlevel.com/support/solutions/articles/48001142886-workflow-trigger-exact-match-contains-phrase)
- [How to Create A Task Event and Task Reminder in Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147410-how-to-create-a-task-event-and-task-reminder-in-campaigns)

## Related Articles

- [Getting Started - Launch an SMS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000005065-getting-started-launch-an-sms-campaign)
- [How to Install HighLevel's Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)
- [Phone System Messaging Analytics Overview](https://help.gohighlevel.com/support/solutions/articles/155000002625-phone-system-messaging-analytics-overview)
- [LC - Phone Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941-lc-phone-messaging-policy)
- [Workflow Trigger - Abandoned Checkout](https://help.gohighlevel.com/support/solutions/articles/155000002618-workflow-trigger-abandoned-checkout)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003201,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003201-workflow-trigger-messaging-error-code-sms/hit)