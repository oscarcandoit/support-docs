---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account"
title: " Workflow Action - Copy Contact To Sub Account : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Copy Contact To Sub Account

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

# Workflow Action - Copy Contact To Sub Account

Modified on: Mon, 2 Sep, 2024 at 5:13 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account#Example)

## Overview

The " **Copy Contact**" action allows you to duplicate a contact from one account to another within your system. This is useful for organisations managing multiple sub-accounts and needing to share contact information seamlessly. It's important to note that this action is a premium feature, meaning it incurs additional charges for each execution.

## Action Name

**Copy Contact**

## Action Description

The "Copy Contact" action copies a selected contact to another specified account. It includes options to copy associated tags, custom fields, and to update the contact if it already exists in the target account. This action helps maintain consistent data across multiple accounts and ensures that contacts are accurately mirrored in selected sub-accounts.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032061758/original/z6mqxDsGGVuimRZ7U_xZ7bBlPJyryUQcnA.png?1725271781)

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Select an Account | Choose the target account where the contact should be copied. | Yes |
| Add Tags to Sub-Account | Optionally select tags that will be added to the copied contact in the sub-account. | No |
| Copy Tags | Toggle this option to copy all tags from the original contact to the copied contact. | No |
| Copy Custom Fields | Toggle this option to include custom fields from the original contact in the copy. | No |
| Update Contact if it Already Exists | If enabled, the action will update the contact in the target account if a duplicate exists. | No |

**How to Configure:**

1. **Select an Account:** Choose the target account where you want to copy the contact. This is a mandatory step.
2. **Add Tags to Sub-Account:** If necessary, select tags that should be added to the contact in the sub-account.
3. **Copy Tags:** Toggle this option if you wish to copy the existing tags from the original contact to the new one in the sub-account.
4. **Copy Custom Fields:** Toggle this if you want custom fields data to be copied over to the new contact.
5. **Update Contact if it Already Exists:** Use this option if you want to update existing contact information in the target account instead of creating a duplicate.

**Some Triggers to Combine with This Action (But not limited to)**

- **Contact Added:** Automatically copy a contact to another account whenever a new contact is added to the main account.
- **Tag Applied:** When a specific tag is applied to a contact, trigger the copy action to duplicate the contact to a sub-account.
- **Contact Updated:** Use this trigger to copy updated contact information to another account, ensuring all accounts have the latest contact data.

## Example

Suppose you run multiple regional offices, each with its own account. When a new lead is added to the main account and tagged as "VIP," you want this contact to be automatically copied to the regional accounts.

**Workflow Configuration Example:**

1. **Trigger:**`Contact Added`
   - **Filters:** Tag = `VIP`
2. **Action:**`Copy Contact`
   - **Select an Account:**`Regional Office Account`
   - **Add Tags to Sub-Account:**`VIP`
   - **Copy Tags:** Enabled
   - **Copy Custom Fields:** Enabled
   - **Update Contact if it Already Exists:** Enabled

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

- [Workflow Action - Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)

## Related Articles

- [How to copy contacts from one sub-account to another sub-account?](https://help.gohighlevel.com/support/solutions/articles/155000001034-how-to-copy-contacts-from-one-sub-account-to-another-sub-account-)
- [SIM-based calling with the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005814-sim-based-calling-with-the-mobile-app)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)
- [How to use the Inbound Webhook Workflow Premium Trigger](https://help.gohighlevel.com/support/solutions/articles/48001237383-how-to-use-the-inbound-webhook-workflow-premium-trigger)
- [Creating Sub-Accounts using Zapier](https://help.gohighlevel.com/support/solutions/articles/48001207048-creating-sub-accounts-using-zapier)
- [Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003272-workflow-action-copy-contact-to-sub-account/hit)