---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies"
title: " Understanding Workflow Behaviour with SMS and Customer Replies : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Understanding Workflow Behaviour with SMS and Customer Re...

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

# Understanding Workflow Behaviour with SMS and Customer Replies

Modified on: Wed, 22 May, 2024 at 8:37 AM

## Scenario:

A contact is in a workflow and an automated SMS is sent to them. The workflow includes a wait step that pauses until the "Customer Reply" is received. However, what happens if a user manually sends an SMS to the contact after the automated SMS?

## Explanation:

If a user manually sends an SMS to the contact while the contact is still in the workflow, this action can disrupt the workflow's ability to correctly attribute the customer's reply. Here's why:

- **Attribution Challenge**: The workflow system does not have a way to associate the customer's reply with a specific SMS when multiple SMS messages are involved. Unlike email, which operates in threads allowing replies to be easily linked to specific messages, SMS messages do not have this threading capability.
- **Breaking the Chain**: When a manual SMS is sent after the automated SMS, any reply from the contact may not be correctly attributed to the automated SMS. As a result, the workflow's wait step will not recognize the reply, causing the contact to be stuck at the wait step.
- **Stuck at Wait Step**: Because the system cannot attribute the reply to the specific automated SMS, the contact will remain at the wait step, even if they have replied.

## Recommendations:

- ## **Avoid Manual SMS**: Do not send manual SMS to contacts who are currently in a workflow with a "Wait for Customer Reply" step for SMS.


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

- [Getting Started - Launch an SMS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000005065-getting-started-launch-an-sms-campaign)
- [Conversations - How to Setup & Track SLAs](https://help.gohighlevel.com/support/solutions/articles/155000006745-conversations-how-to-setup-track-slas)
- [Workflow Trigger - Customer Replied](https://help.gohighlevel.com/support/solutions/articles/155000002677-workflow-trigger-customer-replied)
- [Guide to Quick Replies for Facebook & Instagram](https://help.gohighlevel.com/support/solutions/articles/155000004035-guide-to-quick-replies-for-facebook-instagram)
- [Workflow Action - Instagram Interactive Messenger](https://help.gohighlevel.com/support/solutions/articles/155000004662-workflow-action-instagram-interactive-messenger)
- [How to Use Do Not Disturb (DND)](https://help.gohighlevel.com/support/solutions/articles/48001214849-how-to-use-do-not-disturb-dnd-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies/hit)