---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity"
title: " Workflow Action - Remove Followers from Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Remove Followers from Opportunity

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

# Workflow Action - Remove Followers from Opportunity

Modified on: Tue, 11 Mar, 2025 at 9:22 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity#Example)

## Overview

The **Remove Follower(s) From Opportunity** action allows you to remove specific user(s) from an opportunity’s follower list or remove **all** followers at once. This action typically follows a **Find Opportunity** step (or an opportunity-triggered workflow) so there’s a specific opportunity in context. If no opportunity is in context, the action will be skipped.

## Action Name

**Remove Follower(s) From Opportunity**

## Action Description

When triggered, the **Remove Follower(s) From Opportunity** action takes the user(s) you specify and removes them from the opportunity’s list of followers. If **Remove All Followers** is enabled, every follower on the opportunity is removed, regardless of the user list. This is useful for cleaning up follower lists or ensuring only relevant team members remain assigned to an opportunity.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043056240/original/tsf8_kOR2lhxJQfLXWtjXf7695S2uBoNkg.png?1741702837)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label to help you identify this step in your workflow. | Yes |
| **Users** | One or more users to be removed from the opportunity’s follower list (e.g., “Account User”). If a user is not currently a follower, no change is made for that user. | No (unless “Remove All Followers” is disabled) |
| **Remove All Followers** | A toggle that, when enabled, removes **all** followers from the opportunity, regardless of which users are specified in the **Users** field. | No |

### Edge Cases

- **No Opportunity in Context**: If there is no opportunity in the workflow context (neither triggered nor found via **Find Opportunity**), this action is skipped.
- **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest) is ever affected.
- **Non-Followers**: If a specified user is not currently following the opportunity, no change is made for that user.
- **Remove All vs. Specific Users**: If **Remove All Followers** is enabled, the system ignores the specific user list and removes everyone.

## Example

**Scenario**: A workflow unassigns a group of users from a completed opportunity so that only the record owner remains as a follower.

1. **Trigger**: An opportunity moves to the “Closed” stage.
2. **Action**: _Find Opportunity_
   - **Filters**:
     - _Status_ is “Closed”
3. **Action**: _Remove Follower(s) From Opportunity_
   - **Action Name**: “Clear Followers from Closed Deal”
   - **Users**: “Sales Team A,” “Sales Team B”
   - **Remove All Followers**: Disabled (so only the specified users are removed)

In this example, once the **Find Opportunity** step locates the closed opportunity, the **Remove Follower(s) From Opportunity** action removes the specified users from the follower list. If you needed to remove everyone, you would enable **Remove All Followers**.

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

- [Workflow Actions - Remove Contact Follower](https://help.gohighlevel.com/support/solutions/articles/155000003426-workflow-actions-remove-contact-follower)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow - Adding and Removing Followers for Contacts](https://help.gohighlevel.com/support/solutions/articles/155000002109-workflow-adding-and-removing-followers-for-contacts)
- [Workflow Action - Add Follower(s) to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity)
- [Workflow Action - Remove Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000003365-workflow-action-remove-opportunity)
- [Workflow Action - Remove Owner from Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity/hit)