---
url: "https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-"
title: " Trigger/workflow - Email/SMS Notifications to Client/Yourself (New Lead) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
6. Trigger/workflow - Email/SMS Notifications to Client/Your...

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

# Trigger/workflow - Email/SMS Notifications to Client/Yourself (New Lead)

Modified on: Wed, 6 Jul, 2022 at 4:09 PM

Note: Now that Workflows are live in all accounts, you can do everything that Triggers and Campaigns do (and more!), all in one builder! [Click to learn more about Workflows](https://help.gohighlevel.com/support/solutions/articles/48001179678-workflow-builder-overview).

Send an email and/or SMS notification to your client(s) and/or yourself when a lead is added to a campaign:

**TABLE OF CONTENTS**

- [How to send internal notifications for workflows](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-#How-to-send-internal-notifications-for-workflows%3A)
- [Rate limiting on Workflow Notifications](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-#Rate-limiting-on-Workflow-Notifications)

Loom \| Free Screen & Video Recording Software \| Loom

# Video not found

The video does not exist or has been deleted.

[Go to Homepage](https://www.loom.com/) [Check System Status](https://www.loomstatus.com/)

# How to send internal notifications for workflows:

## Set up a new workflow:

Click on Start from scratch

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187640982/original/W7N53A7jRYMkfovt68Zl0xwCszrwqCnfwA.png?1644273935)

Click on Create workflow

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641014/original/Ym9ONXpNJz1suApJvg8ScOvgMnLaDQ3AGA.png?1644273948)

Click on Add New Workflow Trigger

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641031/original/wg8dhPS7alLIU9mtDZK2IiqjrACR883CNw.png?1644273963)

Once you configured the workflow trigger:

Click on Add your first Action

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641108/original/InuuOM18OGY_aAIMlGibQLf_YB9IqehKBA.png?1644274015)

Click on Send Internal Notification

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641189/original/KC-4voBjEE-7ueP_CUBYergYsq3TBABUlg.png?1644274083)

Choose the type of notification:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641355/original/cZ3gsmOHHLQvxqoTAlx_CldWwKwXhpJRzw.png?1644274196)

Email notification

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641351/original/rndkpAofMfCcWWyaCSjPSeHW97FVIQl1kA.png?1644274188)

Internal notification:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641339/original/viF9OCdPD7JRG0C96GaaVSqKrPBSCupE1w.png?1644274180)

SMS notification

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641412/original/BM0tnQY0tkOKGt4tP9ArIMKKzykAO7bHeg.png?1644274226)

# Rate limiting on Workflow Notifications

We have added Rate Limiting for Internal Notification action of workflows.

The current rate limits are

- 500 notifications / 5mins for each user (Per workflow)
  - In the case of email, its 500 notifications per 5 mins, per user email
  - In the case of SMS, its 500 notifications per 5 mins, per user's phone
  - In the case of in-app notifications, its 500/5mins per user Id

We will skip any notifications that are sent after breaching this limit.

Why was this done, and how will this help?

- Because no limit was enforced, there were several updates made to a specific conversation of a user.
  - Let's say you put 300k contacts into a workflow
  - And in the internal notification you are sending a mail to a particular user (in most cases we have seen customers set up to send a notification to themselves)
  - Now this particular user mail, will get 300k emails.
  - Because of this, the conversation of this user will be updated 300k times, within a few seconds/minutes.
  - This introduced an overall delay in processing workflow actions.

The rate-limiting should have good gatekeeping for these events, and also prevent customers to send bulk emails to a particular user

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

- [Triggers - Overview](https://help.gohighlevel.com/support/solutions/articles/48000982202-triggers-overview)
- [Airtable – Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005674-airtable-actions-triggers-in-workflows)
- [Workflow Action - Slack Message](https://help.gohighlevel.com/support/solutions/articles/155000003273-workflow-action-slack-message)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [A List of Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000002292-a-list-of-workflow-triggers)
- [Trigger - Note Added -> Workflow Trigger - Note Added](https://help.gohighlevel.com/support/solutions/articles/155000003205-trigger-note-added-workflow-trigger-note-added)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-/hit)