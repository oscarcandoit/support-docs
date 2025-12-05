---
url: "https://help.gohighlevel.com/support/solutions/articles/48001218068,"
title: " Troubleshooting Workflow Executions - Race Conditions : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001218068,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001218068,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Troubleshooting Workflow Executions - Race Conditions

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

# Troubleshooting Workflow Executions - Race Conditions

Modified on: Thu, 5 Dec, 2024 at 10:17 AM

A Race Condition is when two (or more) updates happen at the same time (in the same second). The two changes "race" and they might execute in a different order than they should, or one might signal that it executed but it really didn't.

* * *

**TABLE OF CONTENTS**

- [Example Race Condition: Add Tag Executed But Not Added](https://help.gohighlevel.com/support/solutions/articles/48001218068,#Example-Race-Condition%3A-Add-Tag-Executed-But-Not-Added)
- [How To Prevent a Race Condition](https://help.gohighlevel.com/support/solutions/articles/48001218068,#How-To-Prevent-a-Race-Condition)

* * *

## **Example Race Condition: Add Tag Executed But Not Added**

In this example, we can see that the tag was added successfully to this contact in the workflow execution logs.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237097817/original/pPEyoJgImK3T2gGbzJKB67cfk97rECsmrQ.png?1657131948)

However, when we check the contact record, there is no sign of the tag.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237098616/original/QV-c-v9lQ1vmsqrWFtQJxnTd9FnvBUttZQ.png?1657132211)

Lets go back to the execution log and pay attention to the time. The "Add to workflow" and "Add Tag" action fired at the same time within the exact same second, which is a race condition.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237097905/original/PtKVYprrQGKLzBww-ZXcYyVETqRuSFn5pg.png?1657131977)

* * *

## **How To Prevent a Race Condition**

To fix the race condition, just add a Wait action of 1 minute.

[https://www.loom.com/share/f4adf9e14dab429da0cc2fedbb7e5e36](https://www.loom.com/share/f4adf9e14dab429da0cc2fedbb7e5e36)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771738/original/aZsqCC0OAIfQkSQqUbLor31c9DWXbFaYeg.png?1733350591)

With a Wait 1 minute action, there is no chance of the race condition occurring.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771768/original/dfxKTUGbzhTGDHHNdPEUqtvKhpVqmyF86A.png?1733350650)

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

- [Create Task Event In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147413-create-task-event-in-campaigns)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)
- [Workflow Action - Update Contact Field - Date type field](https://help.gohighlevel.com/support/solutions/articles/48001216170-workflow-action-update-contact-field-date-type-field)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)

## Related Articles

- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Workflows pro plan - Black friday & Cyber monday promotion](https://help.gohighlevel.com/support/solutions/articles/155000004296-workflows-pro-plan-black-friday-cyber-monday-promotion)
- [Workflow Trigger - Scheduler](https://help.gohighlevel.com/support/solutions/articles/155000006653-workflow-trigger-scheduler)
- [Guide to Custom Webhook Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238167-guide-to-custom-webhook-workflow-action)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else)
- [How to enable and rebill Premium Features for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005678-how-to-enable-and-rebill-premium-features-for-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001218068,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001218068-troubleshooting-workflow-executions-race-conditions/hit)