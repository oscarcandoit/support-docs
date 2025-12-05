---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company"
title: " Find Custom Object Record & Find Company in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [CRM Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001360)
6. Workflow Action – Find Object Record / Find Company

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

# Workflow Action – Find Object Record / Find Company

Modified on: Mon, 13 Oct, 2025 at 3:31 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#Action-Details)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company#Examples)

## Overview

The Find Object Record action searches your CRM for a specific custom object record using values from an Inbound Webhook trigger. You map fields from the webhook payload to the object’s fields. If your workflow already started with the same object as the trigger, this step is skipped.

This action is also available in company-based workflows as Find Company, allowing you to locate a company record using webhook values (e.g., `companyName`, `domain`).

## Action Name

- Find Object Record (for custom object workflows)

- Find Company (for company-based workflows)


## Action Description

Use this action to:

- Look up a record (custom object or company) by mapping **webhook parameters to object/company fields** in Filters.

- Resolve multiple matches using a tie-breaker ( **Earliest Created / Latest Created**).

- Branch on **Record Found** vs **Record Not Found** for clean, deterministic flows.


**Prerequisite:** An **Inbound Webhook** trigger must exist in the workflow. The action reads values from this trigger’s payload (body, headers).

## Action Details![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054908432/original/septxq0_2MS-iQ7j_xfo58ENs5aLj5gNng.png?1759229495)

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054908468/original/hECJ8s0IdoP0_9Zgyu9ZgWa57IsFUGlD3Q.jpeg?1759229520)

I. **Requires Inbound Webhook**

- Enabled only when the workflow contains an **Inbound Webhook** trigger.

- Values are taken from that trigger’s payload (e.g., `{{inboundWebhookRequest.body.petname}}`, `{{inboundWebhookRequest.body.domain}}`).


II. **Filter On (tie-breaker)**

Choose how to select one record if multiple match:

• **Earliest Created Record**

• **Latest Created Record**

III. **Filters (AND logic)**

- Add one or more rows. All filters use **AND** logic.

- **Left side:** Object/Company field to match (e.g., Record ID, External ID, VIN, Pet Name, Company Name, Domain).

- **Right side (value):** Pick a field from the **Inbound Webhook** trigger (Body, Headers) or type a fixed value.

- **Tips:**

• Prefer unique identifiers (Record ID, External ID, Domain) for deterministic results.

• Add extra filters (status, location, type) to avoid ambiguous matches.


IV. **Outcomes**

- **Record Found:** The matched object becomes the **current record** for downstream actions (Update, Associate, Clear, etc.).

- **Record Not Found:** Use this branch to create a new record, alert a user, or stop the flow.


V. **Skip behavior**

- If the workflow already starts with the same object as its trigger (e.g., “Car created” or “Company created”), this step is skipped automatically.


VI. **Best Practices**

- Ensure the webhook sends clean, typed values (strings/numbers/booleans).

- Normalize casing/whitespace in the source system if you match on names.

- Test with sample payloads in a staging workflow before going live.


## Examples

#### **Example 1: Find a Pet by Name (webhook → lookup)**

**Goal:** A webhook posts `petname = "snowy"`. Find the **Pet** object with that name.

**Setup**

- **Filter On:** Earliest Created Record

- **Filters:**

  - Pet Name = `{{inboundWebhookRequest.body.petname}}`

**Flow**

1. Inbound Webhook triggers with `{ "petname": "snowy" }`.

2. Action finds Pet where Pet Name equals _snowy_.

3. **Record Found:** Update Pet status and notify the owner.

4. **Record Not Found:** Create a Pet record with name = "snowy" and tag for review.


* * *

#### **Example 2: Find a Subscription by External Reference**

**Goal:** Your billing webhook sends `subscription_ref`. Find the **Subscription** object.

**Setup**

- **Filter On:** Latest Created Record

- **Filters:**

  - External Reference = `{{inboundWebhookRequest.body.subscription_ref}}`

  - Status = active (optional safety filter)

**Flow**

1. Webhook arrives with `subscription_ref`.

2. Action selects the latest active Subscription with that reference.

3. **Record Found:** Update plan fields; enqueue renewal emails.

4. **Record Not Found:** Create a placeholder Subscription and alert Finance.


* * *

#### **Example 3: Find a Company by Domain**

**Goal:** A webhook from a lead-gen form passes `companyDomain`. Find the **Company** record with that domain.

**Setup**

- **Filter On:** Latest Created Record

- **Filters:**

  - Domain = `{{inboundWebhookRequest.body.companyDomain}}`

**Flow**

1. Inbound Webhook triggers with `{ "companyDomain": "acme.com" }`.

2. Action finds Company where Domain equals _acme.com_.

3. **Record Found:** Enroll Company in an “Onboarding” workflow.

4. **Record Not Found:** Create a new Company record with domain _acme.com_.


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
- [Workflow Action – Remove Associated Records from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006485-workflow-action-remove-associated-records-from-workflow)
- [Workflow Action – Add Associated Records to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006486-workflow-action-add-associated-records-to-workflow)
- [Workflow Action - Create an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact)
- [Company Object Feature: A Manual Way to Organize Contacts](https://help.gohighlevel.com/support/solutions/articles/48001223777-company-object-feature-a-manual-way-to-organize-contacts)
- [Tasks Across Multiple Objects](https://help.gohighlevel.com/support/solutions/articles/155000006643-tasks-across-multiple-objects)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company/hit)