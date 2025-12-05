---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow"
title: " Remove Associated Records from Workflow | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [CRM Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001360)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [CRM Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001360)
6. Workflow Action – Remove Associated Records from Workflow

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

# Workflow Action – Remove Associated Records from Workflow

Modified on: Mon, 13 Oct, 2025 at 3:31 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#Action-Details)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow#Example)

## Overview

The Remove Associated Records from Workflow action is available in all workflow types — Contact-based, Company-based, and Custom Object-based workflows. It automatically **removes records that are associated to the trigger record** (via a selected object + label) from another workflow. This ensures clean unenrollment of related contacts, companies, or custom object records when conditions change.

This action is different from the existing [Remove from Workflow action](https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow) which only removes the current record (e.g., a contact) from a workflow. Remove Associated Records from Workflow instead allows you to unenroll associated records (Contacts, Companies, or Custom Objects) based on an association label.

## Action Name

Remove Associated Records From Workflow

## Action Description

This action enables workflow users to:

- Select an **object type**

- Choose an **association label** to target which associated records should be removed.

- Pick the **workflow** the associated records will be removed from.


This action is possible only after creating custom objects (or using contacts/companies) in the sub-account and ensuring that an **association label** exists between the trigger record and the records to be removed. This includes **contact-to-contact** and **company-to-contact** associations.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054812396/original/5fxj8Jwe5eWzFilNjCjFCjgaPgYdH7KDig.png?1759145373)

- **Select an object**: Choose the type of associated records to remove (e.g., Contacts, Dealers, Properties).

- **Association Label** (required): Determines which associated records qualify for removal. (does not apply on company - contact associations)

- **Workflow**: Select the target workflow the associated records will be **removed from**.

- **Edge cases & notes**:

  - At least one matching association (by label) must exist; otherwise, no records are removed.

  - Removals are immediate; if you need to re-enroll later, use **Add Associated Records to Workflow** action or a separate automation.

## Examples

#### **Example 1: Car ↔ Dealer (Custom Object Workflow)**

When a **Car** record’s status changes to _Sold_, remove its associated **Dealers** (label: _Assigned Dealer_) from the **Dealer Notification Workflow** so they stop receiving updates.

**Setup**

- **Object** → Dealer

- **Association Label** → Assigned Dealer

- **Workflow** → Dealer Notification Workflow


**How It Works**

1. Car status becomes _Sold_ (workflow trigger).

2. Action finds Dealers associated to the Car via _Assigned Dealer_.

3. Those Dealers are removed from the _Dealer Notification Workflow_.


* * *

#### **Example 2: Contact ↔ Contact (Parent–Child, Contact Workflow)**

When a **Student Contact** graduates, remove all **Parent Contacts** (label: _Parent-Child_) from the **Semester Start Notification** workflow.

**Setup**

- **Object** → Contact (Parent)

- **Association Label** → Parent-Child

- **Workflow** → Semester Start Notification


**How It Works**

1. Student record triggers the workflow on _Graduated_.

2. Action finds Parents associated via _Parent-Child_.

3. Those Parents are removed from the _Semester Start Notification_ workflow.


* * *

#### **Example 3: Company ↔ Contact (Company Workflow)**

When a **Company** record’s status changes to _Inactive_, remove all **Contacts** from the **Active Clients Communication Workflow**.

**Setup**

- **Object** → Contact

- **Workflow** → Active Clients Communication Workflow


**How It Works**

1. Company record is updated to _Inactive_.

2. Those Contacts are removed from the _Active Clients Communication Workflow_.


* * *

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

- [Workflow Action – Find Object Record / Find Company](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company)
- [Workflow Action – Remove Associated Records from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)
- [Workflow Action – Add Associated Records to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006486-workflow-action-add-associated-records-to-workflow)
- [Custom Object and Company Based Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006701-custom-object-and-company-based-workflow-actions-triggers)

## Related Articles

- [Custom Object and Company Based Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006701-custom-object-and-company-based-workflow-actions-triggers)
- [Workflow Action – Add Associated Records to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006486-workflow-action-add-associated-records-to-workflow)
- [Tasks Across Multiple Objects](https://help.gohighlevel.com/support/solutions/articles/155000006643-tasks-across-multiple-objects)
- [Using Custom Objects in Workflow Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)
- [Workflow Action - Update an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact)
- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow/hit)