---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity"
title: " Workflow Action - Add Follower(s) to Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Add Follower(s) to Opportunity

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

# Workflow Action - Add Follower(s) to Opportunity

Modified on: Tue, 11 Mar, 2025 at 9:19 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity#Example)

## Overview

The **Add Follower(s) to Opportunity** action allows you to assign one or more users as followers to an existing opportunity. By doing so, these users can access updates and information about any changes to the opportunity. Typically, this action follows a **Find Opportunity** step (or is triggered by an opportunity) so there’s a specific opportunity in context.

## Action Name

**Add Follower(s) to Opportunity**

## Action Description

When triggered, the **Add Follower(s) to Opportunity** action adds each selected user to the opportunity’s list of followers. If a user is already following the opportunity, the system prevents duplication—meaning the same user will not be added twice. If no opportunity is found or triggered, the action is skipped.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043055771/original/tySi1AmkMiOH6ceFWWSrymOKQqU2xqYJzw.png?1741702613)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **Followers** | One or more users to be added as followers. Typically displayed as a dropdown or multi-select list of users (e.g., “pallavi kothari,” “akshay sarma”). | Yes |

### Edge Cases

- **No Opportunity in Context**: If the workflow was not triggered by an opportunity and there is no preceding **Find Opportunity** step, this action does nothing.
- **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest as defined in the Find Opportunity action) is ever updated.
- **Existing Followers**: The system prevents adding a user who is already following or is assigned to the opportunity, so duplicates are not created.

## Example

**Scenario**: You want to keep both a sales manager and a product specialist informed about a high-value opportunity as soon as it’s created or updated.

1. **Trigger**: An opportunity is created or updated and meets certain criteria (e.g., value > 10,000).
2. **Action**: _Find Opportunity_
   - **Filters**:
     - _Opportunity Value_ is greater than `10000`
     - _Status_ is “Open”
3. **Action**: _Add Follower(s) to Opportunity_
   - **Action Name**: “Notify Key Stakeholders”
   - **Followers**: “Sales Manager,” “Product Specialist”

If the **Find Opportunity** step locates a matching opportunity, the “Sales Manager” and “Product Specialist” will be added as followers (unless they already are followers), ensuring they have access to the opportunity’s details and updates.

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

- [Workflow Action - Remove Followers from Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity)
- [Workflow Action - Remove Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000003365-workflow-action-remove-opportunity)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity)
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)
- [Workflow Action - Find Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity/hit)