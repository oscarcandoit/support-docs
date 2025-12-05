---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001034,"
title: " How to copy contacts from one sub-account to another sub-account? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001034,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001034,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. How to copy contacts from one sub-account to another sub-...

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

# How to copy contacts from one sub-account to another sub-account?

Modified on: Thu, 10 Jul, 2025 at 3:13 PM

Learn how to use HighLevel's 'Copy Contact' workflow action to duplicate contacts between sub-accounts, including tags and custom fields, while maintaining data integrity.

* * *

How To Copy Contacts From One Sub-Account To Another - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How To Copy Contacts From One Sub-Account To Another](https://www.youtube.com/watch?v=8_bPjMYPJLQ)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=8_bPjMYPJLQ&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 3:05
•Live

•

### Additional Tutorial Videos:

[https://www.youtube.com/watch?v=deI0HZ2HcAQ](https://www.youtube.com/watch?v=deI0HZ2HcAQ)

[https://www.youtube.com/watch?v=nqCFyLRiols](https://www.youtube.com/watch?v=nqCFyLRiols)

[https://www.youtube.com/watch?v=wZ85Ej6VnKc](https://www.youtube.com/watch?v=wZ85Ej6VnKc)

* * *

## **Prerequisites for Using 'Copy Contact'**

- Agencies must be on any High-Level plan ($97, $297, $497, or their annual equivalents).
- LC Premium Triggers & Actions must be enabled via Agency Settings.
- Existing and new sub-accounts will have 100 free executions once Premium Actions & Triggers are enabled.
- To avoid execution costs for existing sub-accounts, rebilling needs to be enabled manually for each sub-account within the Agency view.
- If premium actions are enabled on the SaaS Configurator, new sub-accounts generated will automatically be enrolled in LC Premium Actions & Triggers, requiring no further action by the agency.

* * *

## **Steps for Copying a Contact**

1\. Navigate to the Workflow Builder in your HighLevel dashboard and create a new workflow or edit an existing one.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683643/original/eP2hToI_4TLeO8vY2qpceI0Gn2YqPIwScw.png?1752177408)

2\. Add the 'Copy Contact to Sub-Account' workflow action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683666/original/mqdIFP8q7BBzdMNkhD1J1-6OhAkuENLVYQ.png?1752177469)

3\. Configure the action by selecting the target sub-account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683973/original/dLRWwP6Caa7r6a2N_l09_5BMsc8beEhJ1Q.png?1752178137)

4\. Optionally, enable the following settings:

- **Copy Tags**: To duplicate tags from the source contact. Organize your contacts effectively by adding multiple tags to newly copied contacts in your selected sub-account. You can choose tags from the source contact information or even create new ones manually.

- **Copy Custom Fields**: To duplicate custom fields, provided they exist in the target sub-account.

- **Update Contact if it Already Exists**: To update existing contacts in the target sub-account.

- **Skip Copy if Contact Lacks Email and Name**: To prevent copying incomplete contacrecords.


**Copy Custom Fields**

#### If enabled, contact custom fields will be copied to the selected account. The custom field value will be copied only if that field exists in the selected account.

#### **Toggle : Update contact if it already exists**

- If this is enabled and if the contact already exists in the selected sub-account then the contact will be updated in the sub account.

- If the contact is not existing in the sub account then new contact will be created.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018335574/original/NQ-ywFOUEi4ny-4WBP0pGjrX1S84B1-fwg.png?1705925986)

#### Skip Copy Contact if Contact does not have Email and Name

If a contact does not have an Email or a Name then the contact won’t be copied and will be skipped.

#### **What will be copied?**

Below fields will be copied when Copy Contact action is used -

- Contact info
- General info
- Tags (Copy tags toggle must be turned on in the Copy contact action)
- Custom fields **(Copy Custom fields toggle must be turned on in the Copy contact action and same custom field should be available in the sub account) (The custom field type should be same in both accounts)**

#### **What will  not be copied?**

Details such as Conversations, Activity, Notes, Tasks, Appointments, Documents and Payments will not be copied.

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

- [Workflow Action - Copy Contact To Sub Account](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account)
- [How to Copy Workflow to another Sub-Account?](https://help.gohighlevel.com/support/solutions/articles/155000001229-how-to-copy-workflow-to-another-sub-account-)
- [Company Object Automation](https://help.gohighlevel.com/support/solutions/articles/48001228591-company-object-automation)
- [Allow Duplicate Contacts (Contact Deduplication Preferences)](https://help.gohighlevel.com/support/solutions/articles/48001181714-allow-duplicate-contacts-contact-deduplication-preferences-)
- [Copy Workflow Actions Across Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006081-copy-workflow-actions-across-workflows)
- [Contacts - Export as CSV Upgrade](https://help.gohighlevel.com/support/solutions/articles/48001238482-contacts-export-as-csv-upgrade)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001034,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001034-how-to-copy-contacts-from-one-sub-account-to-another-sub-account-/hit)