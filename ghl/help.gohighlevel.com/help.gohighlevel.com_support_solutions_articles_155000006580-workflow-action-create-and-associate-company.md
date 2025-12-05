---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company"
title: " Create Associated Company | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action – Create and Associate Company

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

# Workflow Action – Create and Associate Company

Modified on: Mon, 13 Oct, 2025 at 1:47 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company#Example)

## Overview

The **Create and Associate Company** action allows you to automatically create a new **Company record** and associate it with the trigger **Contact** in your workflow.

This action helps eliminate manual data entry by linking Contacts and Companies automatically, keeping your CRM structured and up-to-date.

## Action Name

Create and Associate Company

## Action Description

Use this action to:

- Automatically create a **new Company record** from a Contact workflow.

- Link the newly created Company to the **trigger Contact** through an association.

- Map fields dynamically using data from the contact record, workflow variables, or inbound webhooks.

- Maintain organized company-contact relationships without manual creation.


This action ensures that each contact is linked to a relevant company, making it especially useful for B2B onboarding, form submissions, or enrichment workflows.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055523318/original/AqE8q-f_AeqTkh_iP73zxthxtgiktxGC5w.png?1759928801)

I. **Field Mapping**

- Map workflow variables or fixed values to populate the new Company’s fields.

- Example mappings:

  - Company Name → `{{contact.company_name}}`

  - Domain → `{{inboundWebhookRequest.body.domain}}`

  - Industry → `{{contact.industry}}`

II. **Dynamic Value Sources**

You can map values from:

- **Contact fields** (e.g., First Name, Company Name, Email).

- **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.company}}`).

- **Fixed text values** (e.g., “New Lead Company”).


III. **Association Behavior**

- The new Company record created by this action will automatically be **associated with the Contact** that triggered the workflow.

- The relationship will appear under both the **Contact’s “Associated Companies”** section and the **Company’s “Associated Contacts”** section in the CRM.


IV. **Add Field**

- Use **\+ Add Field** to map additional Company fields.

- Each row represents a field–value pair that defines how the Company record is created.


V. **Save Action**

- Once all required mappings are set, click **Save Action**.

- When the workflow runs, it will create the new Company record and associate it with the Contact automatically.


VI. **Edge Cases & Notes**

- This action is **only available in Contact-based workflows.**

- If the Contact already has a linked Company, this will create an additional Company but will not be associated with the contact


## Example

**Goal:** Automatically create a new Company record when a new Contact is added to the CRM.

**Setup**

- **Workflow Type:** Contact-based

- **Trigger:** Contact Created

- **Action:** Create Associated Company

- **Field Mappings:**

  - Company Name → `{{contact.company_name}}`

  - Domain → `{{contact.email}}` (parsed domain if applicable)

  - Industry → “Lead Company”

**Flow**

1. A new Contact is created in the CRM.

2. Workflow triggers the action.

3. A Company record is created with the mapped fields.

4. The new Company is automatically associated with that Contact.


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

- [Workflow Action – Find Object Record / Find Company](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - Create an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Company Based Workflows - Company Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000006688-company-based-workflows-company-triggers-actions)
- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company/hit)