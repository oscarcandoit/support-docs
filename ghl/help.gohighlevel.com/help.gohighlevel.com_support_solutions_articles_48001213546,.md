---
url: "https://help.gohighlevel.com/support/solutions/articles/48001213546,"
title: " Contact Tag Workflow Trigger in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001213546,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001213546,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Workflow Trigger - Contact Tag

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

# Workflow Trigger - Contact Tag

Modified on: Mon, 9 Jun, 2025 at 3:31 PM

Tags are a way of categorizing your contacts. You can tag any contact in your contacts list with one or more tags to help you find it again later. Tags are used for searching, browsing, sorting, and organizing content. They also allow you to fire off automation, bulk Emails, SMS, etc. In this article, we will be covering How a Tag can fire off a Workflow.

* * *

**Covered in this Article:**

[**What does the Contact Tag Workflow trigger do?**](https://help.gohighlevel.com/support/solutions/articles/48001213546,#What-does-the-Contact-Tag-Workflow-trigger-do?)

[**What can cause a tag to get added or removed?**](https://help.gohighlevel.com/support/solutions/articles/48001213546,#What-can-cause-a-tag-to-get-added-or-removed?)

[Added/Removed manually via the contacts list (single contact or bulk action):](https://help.gohighlevel.com/support/solutions/articles/48001213546,#Added/Removed-manually-via-the-contacts-list-(single-contact-or-bulk-action)%3A)

[Added/Removed via a workflow:](https://help.gohighlevel.com/support/solutions/articles/48001213546,#Added/Removed-via-a-workflow%3A)

[Added (only) via third-party integration tools like Zapier:](https://help.gohighlevel.com/support/solutions/articles/48001213546,#Added-(only)-via-third-party-integration-tools-like-Zapier%3A)

[Added via a CSV import](https://help.gohighlevel.com/support/solutions/articles/48001213546,#Added-via-a-CSV-import)

* * *

## **What does the Contact Tag Workflow trigger do?**

The contact tag workflow trigger step checks if any tag is added to a contact or removed from a contact.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48215643927/original/NxWCYmWtbjepAgd2ROUG-Rvoomj2nwA94g.png?1649877321)**

You can specify via Filters if you want it to get fired off by a tag getting added or by a tag getting removed. It will fire off for both instances if you do not specify that.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252865701/original/Wz2eN9U-q9b5FwqGLoyJ_xRol2mbx2MNGw.png?1663948521)

* * *

## **What can cause a tag to get added or removed?**

Tags can get added or removed by the following means, and hence fire off a workflow with the trigger step set to Contact Tag with a filter for Tag Added or Tag Removed in case of removals:

### **Added/Removed manually via the contacts list (single contact or bulk action):**

You can add tags to a contact or a group of contacts by going to the Contacts List> Selecting the contact(s) > Clicking on the Add tag button. You can Click the Remove Tag button to remove tags.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252876878/original/adTvReZ-L4adHf_xcda9ps55YmfXj7K8Lw.gif?1663951791)**

**Added/Removed via a workflow:**

Workflow actions can be used to add or remove tags. Leads that enter a published workflow and reach the add or remove tag action get their tag added or removed.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253120218/original/MGuMOlailh9Jmn5kJr0F-ktq3ejUu8GU8A.gif?1664191236)**

**Added (only) via third-party integration tools like Zapier:**

You can use many third-party integration tools to get tags added to your contacts in the CRM. Zapier is one of the most commonly used 3rd party integration tools to make actions happen inside the CRM in response to changes in external apps you may be running. Tags cannot be removed through this method. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253137580/original/3hyA-CiV129r5_T-E-nRbcrNn8N10SVtmQ.gif?1664195112)**

### **Added via a CSV import**

You can add tags during a CSV import process by having a tags column with a tags column header in the CSV and have tags written out for each contact in that column. You can insert commas and multiple tags for each contact in the same cell.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253155778/original/bMA50nptY7VxrlZ4Xn6nuRg6MYuD-_Qecw.gif?1664198566)

You can also add tags during a CSV import by the advanced options of the import process:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253160766/original/dLXRneYYvywN9EzigyuPf2g9vD2bEM61HA.gif?1664199340)

**Please Note:**

```
CSV Imports are also used to update the tags of existing contacts, if Allow Duplicate contacts is turned off and the Email and Phone of the contacts being imported is the same as the already existing ones.
```

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

- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [Workflow Triggers - Note Changed](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed)
- [Workflow Trigger - Note Added](https://help.gohighlevel.com/support/solutions/articles/155000003248-workflow-trigger-note-added)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Workflow Action - Goal Event](https://help.gohighlevel.com/support/solutions/articles/155000003328-workflow-action-goal-event)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001213546,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag/hit)