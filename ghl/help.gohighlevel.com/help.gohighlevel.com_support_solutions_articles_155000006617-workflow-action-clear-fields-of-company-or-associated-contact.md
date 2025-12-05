---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact"
title: " Clear Company or Contact Fields in Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Company Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001363)
6. Workflow Action - Clear Fields of Company or Associated C...

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

# Workflow Action - Clear Fields of Company or Associated Contact

Modified on: Mon, 13 Oct, 2025 at 3:26 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#Action-Details)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact#Example)

## Overview

The **Clear Fields of Company or Associated Contact** action allows workflow users to **reset or remove field values** from either the **Company record** or the **Contact associated with that company**, directly within a **Company-based workflow**.

This is useful for maintaining clean and accurate CRM data — for example, removing outdated phone numbers, clearing old tags, or resetting a contact’s status when a company’s relationship changes.

## Action Name

Clear Fields of Company or Associated Contact

## Action Description

Use this action to:

- Automatically clear selected fields from either the **Company record** or the **associated Contact(s)** in a Company-based workflow.

- Keep data accurate and up to date by removing stale, incorrect, or obsolete values.

- Simplify cleanup processes by automating data resets during ownership or lifecycle changes.


## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055667745/original/PMxUtpQERhLTeO9uTcmDNhcnV_a8rD8Mrw.png?1760074320)

I. **Clear a Field From the Object Record**

- Choose which object you want to clear fields from:

  - **Company** – Clears fields from the current company record.

  - **Associated Contact** – Clears fields from the contacts associated with that company.

II. **Add Fields**

- Use the dropdown to select one or more fields to clear.

- Supported fields include all editable standard and custom fields on the selected object.

- Use the **\+ Add Field** option to clear multiple fields at once.


III. **Clear Behavior**

- When executed, the selected fields will be reset (emptied) for the chosen record type (Company or Contact).

- If there are no associated contacts, the action will automatically **skip**.

- Clearing does not remove associations or delete related data — only the selected field values are reset.


IV. **Save Action**

- After selecting all fields to be cleared, click **Save Action.**

- When the workflow runs, the chosen fields in the Company or associated Contacts will be cleared automatically.


V. **Edge Cases & Notes**

- Available only in **Company-based workflows.**

- To clear fields in Contact-based workflows, use **Clear Associated Company Fields.**

- If multiple associated contacts exist, all selected fields will be cleared for each of them.


## Examples

#### **Example 1: Reset Contact Status When Company Becomes Inactive**

**Goal:** Automatically reset the status of all contacts associated with a company when that company becomes inactive.

**Setup**

- **Workflow Type:** Company-based

- **Trigger:** Company Changed → Status = Inactive

- **Action:** Clear Fields of Company or Associated Contact

- **Clear a Field From:** Associated Contact

- **Fields to Clear:** Contact Status


**Flow**

1. The company’s status changes to “Inactive.”

2. Workflow triggers the clear action.

3. The status is cleared for all associated contacts.


* * *

#### **Example 2: Clear Company Custom Fields After Contract Expiry**

**Goal:** Reset key custom fields (e.g., Renewal Date, Contract Value) after a company’s contract expires.

**Setup**

- **Workflow Type:** Company-based

- **Trigger:** Company Changed → Contract Expiry Date reached

- **Action:** Clear Fields of Company or Associated Contact

- **Clear a Field From:** Company

- **Fields to Clear:** Renewal Date, Contract Value, Tier


**Flow**

1. The company’s contract expiration date passes.

2. Workflow triggers the action.

3. The selected fields are cleared automatically from the company record.


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

- [Workflow Action - Clear Associated Company Fields](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Company Based Workflows - Company Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000006688-company-based-workflows-company-triggers-actions)
- [Workflow Action – Create and Associate Company](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company)
- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact/hit)