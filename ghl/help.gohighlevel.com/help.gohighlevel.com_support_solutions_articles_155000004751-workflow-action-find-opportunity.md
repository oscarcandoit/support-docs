---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity"
title: " Workflow Action - Find Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Find Opportunity

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

# Workflow Action - Find Opportunity

Modified on: Tue, 11 Mar, 2025 at 10:40 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity#Example)

## Overview

The **Find Opportunity** action allows you to locate an existing opportunity **linked to the contact** that triggered the workflow, based on specific criteria. You can choose to find either the **Earliest** (first created) or the **Latest** (most recently created) matching opportunity for that contact. Once found, this opportunity record becomes the reference for all subsequent opportunity-based actions in your workflow. If no match is found, the workflow branches to an alternate path, enabling you to handle that scenario differently (e.g., create a new opportunity).

> **Important:** If there is no contact in the workflow (for example, in the case of an inbound webhook that does not include contact information), you must configure the **Find Opportunity** filters to map certain fields to the webhook parameters. Otherwise, the action will not be able to locate an opportunity.

## Action Name

Find Opportunity

## Action Description

The **Find Opportunity** action searches for an existing opportunity linked to the contact who entered the workflow, matching the filters you specify. All filters are combined using **AND** logic, meaning **all** specified conditions must be met to return a match. If multiple opportunities satisfy these conditions, only one will be returned—either the earliest or the latest, as configured. If no match is found, the workflow continues along a separate “Opportunity Not Found” branch.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043046868/original/FxNS2rZa7iap2gXiQGTppOlMqFAt7cIDvw.png?1741697609)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A custom label to help you identify this step in your workflow. | Yes |
| **Opportunity to be Found** | Determines whether to retrieve the **Earliest** (first created) or **Latest** (most recently created) opportunity that meets the filter criteria for the contact entering the workflow. | Yes |
| **Filters** | One or more conditions to narrow down the search. <ul><li>All filters use **AND** logic.</li><li>No limit to the number of filters.</li><li>Filters can reference any standard or custom opportunity field (e.g., Opportunity Name, Followers, Status).</li><li>If there is no contact (e.g., inbound webhook), filters must map certain fields to webhook params.</li></ul> | Yes |
| **Multiple Matches** | If multiple records match, **only one** opportunity is returned—either the earliest or latest, depending on your choice. | — |
| **Branching Behavior** | If an opportunity is found, the workflow follows the **Opportunity Found** path. If no match is found, it follows the **Opportunity Not Found** path. | — |

## Example

**Scenario**: A new lead submits a form, and you want to check if an existing opportunity already exists for that lead. If it does, you update the opportunity; if not, you create a new one.

1. **Trigger**: A contact submits a form on your website.
2. **Action**: _Find Opportunity_
   - **Action Name**: “Locate Existing Opportunity”
   - **Opportunity to be Found**: **Latest Opportunity**
   - **Filters**(all conditions must be met):
     - **Opportunity Name** → **Contains** → “Contact\_Email\_Address”
     - **Status** → **Is** → “Open”
3. **Branching**:
   - **Opportunity Found**: Proceed with an _Update Opportunity_ action to modify fields such as Status or add notes.
   - **Opportunity Not Found**: Proceed with a _Create Opportunity_ action to add a new record to your pipeline.

This ensures you’re always referencing the correct existing opportunity if one is available, and only creating a new one when necessary.

If no contact is present (e.g., from an inbound webhook without contact info), ensure your filters map relevant fields to the webhook data.

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

- [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)
- [Workflow Action - Remove Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000003365-workflow-action-remove-opportunity)
- [Workflow Action - Find Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity)
- [Workflow Action - Create Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity)
- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity)
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)

## Related Articles

- [Workflow Action - Remove Owner from Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity)
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)
- [Workflow Action - Remove Followers from Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity)
- [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)
- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity)
- [Workflow Action - Add Follower(s) to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity/hit)