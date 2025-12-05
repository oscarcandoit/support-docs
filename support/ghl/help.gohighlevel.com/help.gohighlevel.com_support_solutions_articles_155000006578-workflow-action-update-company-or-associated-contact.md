---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact"
title: " Update Company or Associated Contact | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Company Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001363)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Company Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001363)
6. Workflow Action - Update Company or Associated Contact

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

# Workflow Action - Update Company or Associated Contact

Modified on: Mon, 13 Oct, 2025 at 3:26 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#%E2%80%8B%E2%80%8BOverview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact#Example)

## Overview

The **Update Company or Associated Contact** action allows you to automatically update details for a **Company record** or an **Associated Contact** within a Company-based workflow.

It’s designed to help you maintain accurate CRM data by dynamically updating company or contact information whenever related events or triggers occur—such as webhook updates, form submissions, or record changes.

## Action Name

Update Company or Associated Contact

## Action Description

Use this action to:

- Automatically update an existing **Company record** or an **Associated Contact** linked to a company.

- Map workflow fields, webhook parameters, or fixed text values to update existing CRM fields.

- Correct or enrich company and contact data based on incoming automation triggers.

- Streamline data management across your company-based workflows.


This action modifies existing records—it does **not** create new records.

For creating new entries, use the **Create Company or Associated Contact** action instead.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055521719/original/rq6GvM4emLWOzDVwZ6ENN5cM4OU2mS9QZQ.png?1759928110)

I. **Object Record to Update**

- Choose whether you want to update the:

  - **Company** : to modify the current company record in the workflow.

  - **Associated Contact** : to update contact details for one or more contacts linked to that company.

II. **Field Mapping**

- Map data from workflow sources to the fields you want to update.

- Example mappings:

  - _Company Industry : {{inboundWebhookRequest.body.industry}}_

  - _Contact Phone : {{inboundWebhookRequest.body.phone}}_

  - _Contact Role : {{inboundWebhookRequest.body.role}}_

III. **Dynamic Value Sources**

You can use dynamic values from:

- **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.companyName}}`).

- **Company fields** (from the record that triggered the workflow).

- **Fixed text values** (e.g., “Active”, “Updated by Workflow”).


IV. **Add Field**

- Use **\+ Add Field** to update multiple fields at once.

- Each row represents a field-value pair to be updated.


V. **Update Behavior**

- When updating **Associated Contacts**, the action will only update contacts currently linked to the workflow’s company record.

- If no matching associated contacts exist, the action will skip automatically.


VI. **Save Action**

- Click **Save Action** to confirm.

- When the workflow runs, the selected fields will be updated based on the latest values in the workflow context.


VII. **Edge Cases & Notes**

- This action is **available only in Company-based workflows**.

- It cannot create new records—use **Create Company or Associated Contact** for that.

- Ensure correct field mappings to prevent overwriting critical information.


## Example

#### **Example 1: Update Company Information from Webhook Data**

**Goal:** Automatically update company details whenever new lead data is received from an external integration.

**Setup**

- **Workflow Type:** Company-based

- **Trigger:** Inbound Webhook : Updated company data from CRM integration

- **Object Record to Update:** Company

- **Field Mappings:**

  - Company Name → `{{inboundWebhookRequest.body.company}}`

  - Industry → `{{inboundWebhookRequest.body.industry}}`

  - Domain → `{{inboundWebhookRequest.body.domain}}`

**Flow**

1. Updated company data is sent through webhook.

2. Workflow triggers the update action.

3. The existing company record is updated with new values automatically.


* * *

#### **Example 2: Update Associated Contact Information under a Company**

**Goal:** Automatically update the job title and phone number for a contact linked to a company record.

**Setup**

- **Workflow Type:** Company-based

- **Trigger:** Company Updated or Inbound Webhook → Employee data update

- **Object Record to Update:** Associated Contact

- **Field Mappings:**

  - Job Title → `{{inboundWebhookRequest.body.title}}`

  - Phone → `{{inboundWebhookRequest.body.phone}}`

**Flow**

1. Employee information is updated externally.

2. Workflow identifies the contact linked to the company.

3. The contact’s title and phone number fields are updated automatically.


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

- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)

## Related Articles

- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - Clear Associated Company Fields](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)
- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)
- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)
- [Workflow Action – Remove Associated Records from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)
- [Workflow Action – Create and Associate Company](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact/hit)