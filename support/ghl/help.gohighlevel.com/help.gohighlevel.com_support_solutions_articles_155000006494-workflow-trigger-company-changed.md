---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed"
title: " Company Changed Workflow Trigger | HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Company Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001339)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Company Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001339)
6. Workflow Trigger - Company Changed

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

# Workflow Trigger - Company Changed

Modified on: Mon, 13 Oct, 2025 at 3:25 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#%E2%80%8B%E2%80%8BOverview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#How-to-Configure)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed#Examples)


## Overview

The **Company Changed** trigger starts a workflow whenever selected fields in a **Company record** are updated. This trigger allows you to react instantly to changes in company details, ensuring that automations stay in sync with the most up-to-date data.

## Trigger Name

Company Changed

## Trigger Description

This trigger runs when:

- A **Company record** is updated.

- The update matches one or more field conditions you configure in the trigger.


You can choose **specific fields** to monitor (e.g., Industry, Status, Domain). When those fields change, the workflow automatically begins.

## How to Configure

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055005957/original/2jOQH3Y4U0-yFKxL8sniERm7idQUxcGW4A.png?1759320818)

- **Add the Trigger**

  - Choose **Company Changed** as your workflow trigger.
- **Select Fields to Monitor**

  - Pick one or more Company fields (standard or custom) to track for changes.

  - Example: Industry, Domain, Status.
- **Apply Operators**

  - For each field, choose an operator:

    - **Is not empty** – fires when the field has any value.

    - **Contains Phrase** – fires when the field value contains a specified keyword/phrase.
- **Add Multiple Filters (Optional)**

  - Combine filters using **AND logic** (all conditions must be met for the trigger to fire).
- **Save the Trigger**

  - Once saved, the workflow will automatically enroll Companies whenever they meet your configured conditions.

## Examples

#### **Example 1: Track Industry Changes**

**Goal:** Trigger onboarding when a Company’s Industry contains “Healthcare.”

**Setup**

- **Filter:** Industry → Contains Phrase → Healthcare

- **Action:** Enroll in Healthcare Onboarding Workflow


**How It Works**

1. Company Industry field is updated to “Healthcare Providers.”

2. Workflow triggers.

3. The Company is enrolled into the Healthcare-specific workflow.


* * *

#### **Example 2: Ensure Domain Is Captured**

**Goal:** Notify a team member whenever a Company record is created or updated without an empty domain.

**Setup**

- **Filter:** Domain → Is not empty

- **Action:** Send Internal Notification


**How It Works**

1. Company Domain field is populated with a value.

2. Workflow triggers.

3. Internal notification is sent to the sales team.


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

- [Workflow Trigger - Company Changed](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed)
- [Workflow Trigger - Company Created](https://help.gohighlevel.com/support/solutions/articles/155000006609-workflow-trigger-company-created)

## Related Articles

- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)
- [Company Based Workflows - Company Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000006688-company-based-workflows-company-triggers-actions)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - Clear Associated Company Fields](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed/hit)