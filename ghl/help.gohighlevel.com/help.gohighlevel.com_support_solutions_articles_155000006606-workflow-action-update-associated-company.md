---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company"
title: " Update Associated Company in Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Update Associated Company

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

# Workflow Action - Update Associated Company

Modified on: Thu, 9 Oct, 2025 at 6:13 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#%E2%80%8B%E2%80%8BOverview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company#Example)


## Overview

The **Update Associated Company** action allows you to automatically update the details of the **Company linked to a Contact** in a Contact-based workflow.

It’s available **only in Contact-based workflows** and helps you keep company data synchronized whenever related contact information changes, or when new data is received through webhooks or forms.

If no company is associated with the Contact, the action will be skipped automatically.

* * *

## Action Name

Update Associated Company

## Action Description

Use this action to:

- Automatically update fields in the **Company** associated with the Contact triggering the workflow.

- Map workflow variables, contact fields, or webhook data to company fields (e.g., Company Name, Domain, Industry).

- Keep both contact and company data up to date without manual editing.


This action updates existing company records — it **does not create new companies**.

For creating a new associated company, use the **Create Associated Company** action instead.

## Action Details

I. **Field Mapping**

- Map the company fields you want to update using workflow data or static values.

- Example mappings:

  - Company Name → `{{contact.company_name}}`

  - Industry → `{{inboundWebhookRequest.body.industry}}`

  - Domain → `{{contact.email}}` (to extract domain automatically)

II. **Dynamic Value Sources**

You can use values from:

- **Contact fields** (e.g., company\_name, email, city).

- **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.domain}}`).

- **Fixed text values** (e.g., “Active Client”).


III. **Add Field**

- Use **\+ Add Field** to update multiple company properties at once.

- Each field-value pair represents one update operation.


IV. **Update Behavior**

- The action updates the **primary company associated** with the Contact.

- If the Contact is not linked to any Company, the action will **be skipped automatically**.


V. **Save Action**

- After mapping fields, click **Save Action**.

- When the workflow runs, it updates the associated company record with the configured values.


VI. **Edge Cases & Notes**

- Available **only in Contact-based workflows.**

- The action cannot create new companies — use _Create Associated Company_ for that.

- The workflow will skip execution if the contact has no associated company.


## Example

#### **Update Company Address When Contact Moves**

**Goal:** Automatically reflect address changes at the company level.

**Setup**

- **Trigger:** Contact Changed → Address field updated

- **Action:** Update Associated Company

- **Field Mappings:**

  - Address → `{{contact.address}}`

  - City → `{{contact.city}}`

  - State → `{{contact.state}}`

**Flow**

1. A contact updates their address.

2. Workflow triggers the update.

3. The associated company’s address fields are automatically updated.


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

- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)
- [Workflow Action – Remove Associated Records from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)
- [Workflow Action – Add Associated Records to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006486-workflow-action-add-associated-records-to-workflow)
- [Company Based Workflows - Company Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000006688-company-based-workflows-company-triggers-actions)
- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company/hit)