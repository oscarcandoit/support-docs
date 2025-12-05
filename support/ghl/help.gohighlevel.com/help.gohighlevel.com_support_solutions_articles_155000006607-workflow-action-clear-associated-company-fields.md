---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields"
title: " Clear Associated Company Fields in Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Clear Associated Company Fields

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

# Workflow Action - Clear Associated Company Fields

Modified on: Mon, 13 Oct, 2025 at 1:47 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields#Example)

## Overview

The **Clear Associated Company Fields** action allows you to automatically **remove or reset field values** from the **Company record associated with a Contact** in a workflow.

Use this action to clear outdated company information such as tags, addresses, or custom fields that no longer apply.

## Action Name

Clear Associated Company Fields

## Action Description

Use this action to:

- Automatically clear or reset selected **Company fields** linked to a Contact.

- Remove outdated or irrelevant information such as tags, locations, or custom statuses.

- Maintain data accuracy when a contact changes companies or disengages.


This action clears existing values from the specified fields—it **does not delete the company record** or break the association.

For editing field values instead of clearing them, use the **Update Associated Company** action.

## Action Details

I. **Select Fields to Clear**

- Choose one or more fields from the associated Company record that should be cleared.

- You can select standard fields (e.g., _Industry_, _Domain_, _Address_) or custom fields created in your CRM.


II. **Multiple Field Selection**

- You can clear multiple fields in a single action by adding them to the list.

- Example: Clear _Tags_, _Address_, and _Website_ simultaneously.


III. **Clear Behavior**

- The action clears the selected field values for the **Company associated with the Contact** that triggered the workflow.

- If no associated company exists, the action will **be skipped automatically.**


IV. **Save Action**

- After selecting fields, click **Save Action.**

- When the workflow runs, the chosen fields in the linked company record will be reset (emptied).


V. **Edge Cases & Notes**

- Available **only in Contact-based workflows.**

- This action cannot clear contact fields — only company fields linked to the contact.

- If the contact has multiple company associations, the action targets the **primary associated company**


## Example

#### **Clear Old Company Tags When a Contact Changes Company**

**Goal:** Remove irrelevant POC from the previous company when a contact switches organizations.

**Setup**

- **Workflow Type:** Contact-based

- **Trigger:** Contact Changed → Company Name field updated

- **Action:** Clear Associated Company Fields

- **Fields to Clear:** POC


**Flow**

1. A contact updates their company name to a new organization.

2. Workflow triggers this action.

3. POC field is cleared from the old associated company record.


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

- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)
- [Company Based Workflows - Company Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000006688-company-based-workflows-company-triggers-actions)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Workflow Action – Create and Associate Company](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields/hit)