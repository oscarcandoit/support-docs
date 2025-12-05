---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006486"
title: " Add Associated Records to Workflow | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006486#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006486#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [CRM Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001360)
6. Workflow Action – Add Associated Records to Workflow

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

# Workflow Action – Add Associated Records to Workflow

Modified on: Mon, 13 Oct, 2025 at 3:31 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006486#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006486#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006486#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006486#Action-Details)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006486#Examples)


## Overview

The Add Associated Records to Workflow action allows users to automatically add records that are associated with the trigger object into another workflow.

The Add Associated Records to Workflow action is available in all workflow types — Contact-based, Company-based, and Custom Object-based workflows. It allows users to automatically add records that are associated with the trigger record into another workflow.

This action extends the functionality of the existing [Add to Workflow action](https://help.gohighlevel.com/en/support/solutions/articles/155000002554). While _Add to Workflow_ only adds the current record (e.g., a contact) to another workflow, Add Associated Records to Workflow enables enrolling associated records (Contacts, Companies, or Custom Objects) based on an association label.

## Action Name

Add Associated Records to Workflow

## Action Description

This action enables workflow users to:

- Select an **object type.**

- **Choose an association label t** hat determines which associated records will be picked. (does not apply to company - contact assocaitions)

- Enroll those associated records directly into another workflow.


This action is possible only after creating custom objects (or using contacts) in the subaccount and ensuring that an association label exists between the trigger record and the associated records.

## Action Details

![Add Associated Records to another Workflow in HighLevel](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054809211/original/AsJo3DMQEwM_1N24PA3G-AYtaD1Dyxju5g.png?1759143523)

- **Select an Object**: Choose which type of record should be added.

- **Association Label**: Required dropdown. Defines which associated records will be included.

- **Workflow**: Select the workflow to which the associated records will be added.


## Examples

#### **Example 1: Car ↔ Dealer (Custom Object Workflow)**

An automotive CRM has **Cars** associated with **Dealers**. When a Car record is updated to status = _Ready for Sale_, the workflow automatically adds all associated Dealers (under the _Assigned Dealer_ label) into a **Dealer Notification Workflow**.

**Setup**

- **Object** → Dealer

- **Association Label** → Assigned Dealer

- **Workflow** → Dealer Notification Workflow


**How It Works**

1. A Car record is updated to _Ready for Sale_.

2. The action finds all associated Dealers under the label _Assigned Dealer_.

3. Each Dealer is enrolled in the **Dealer Notification Workflow**, where they receive automated alerts.


* * *

#### **Example 2: Contact ↔ Contact (Contact Workflow)**

A university manages **Contacts** for both students and guardians. When a new semester starts, the workflow automatically adds all **Parent Contacts** (associated under the _Parent-Child_ label) into a **Semester Start Notification Workflow**.

**Setup**

- **Object** → Contact (Parent)

- **Association Label** → Parent-Child

- **Workflow** → Semester Start Notification


**How It Works**

1. A Student Contact record triggers the workflow at the start of the semester.

2. The action finds all associated Parent Contacts under the _Parent-Child_ label.

3. Those Parents are enrolled in the **Semester Start Notification Workflow**, ensuring they receive timely updates.


* * *

#### **Example 3: Company ↔ Contact (Company Workflow)**

A marketing agency manages **Companies** and their associated **Contacts**. When a Company record is added to the _VIP Client Program_, all associated Contacts are automatically enrolled in a **VIP Communication Workflow**.

**Setup**

- **Object** → Contact

- **Workflow** → VIP Communication Workflow


**How It Works**

1. A Company record is updated with a new status ( _VIP Client_).

2. Those Contacts are enrolled in the **VIP Communication Workflow** to receive VIP-only updates.


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

- [Workflow Action – Remove Associated Records from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)
- [Custom Object and Company Based Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006701-custom-object-and-company-based-workflow-actions-triggers)
- [Using Custom Objects in Workflow Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)
- [Workflow Action - Update an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact)
- [Workflow Action - Create an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact)
- [Tasks Across Multiple Objects](https://help.gohighlevel.com/support/solutions/articles/155000006643-tasks-across-multiple-objects)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006486)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006486-workflow-action-add-associated-records-to-workflow/hit)