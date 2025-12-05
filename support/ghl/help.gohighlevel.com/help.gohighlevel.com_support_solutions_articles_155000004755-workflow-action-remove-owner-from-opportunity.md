---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity"
title: " Workflow Action - Remove Owner from Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Remove Owner from Opportunity

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

# Workflow Action - Remove Owner from Opportunity

Modified on: Tue, 11 Mar, 2025 at 9:12 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity#Example)

## Overview

The **Remove Owner from Opportunity** action allows you to clear the assigned owner of an existing opportunity, effectively leaving it unassigned. This can be useful in workflows where you need to temporarily remove ownership (e.g., when redistributing leads or resetting ownership after a deal is closed).

## Action Name

**Remove Owner from Opportunity**

## Action Description

When triggered, the **Remove Owner from Opportunity** action unassigns the current owner of the opportunity. As a result, the opportunity becomes ownerless unless a subsequent step reassigns ownership. If your system settings sync contact and opportunity owners, the contact owner may also be removed—depending on those sync settings.

> **Important:** This action depends on having an opportunity in context—either because the workflow was triggered by an opportunity or because a prior **Find Opportunity** step located one. If no opportunity is in context, this action does nothing.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043054966/original/Gm7vpPUr_Y31Hs3MpU6hB463IdcUFKPLjA.png?1741702121)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **Opportunity to Unassign** | The opportunity that triggered the workflow or the one found by a preceding **Find Opportunity** step. If both exist, the **Find Opportunity** result takes precedence. | — |

### Sync Settings

- If **contact and opportunity owners are synced** (configured in **Opportunity Settings**), removing the opportunity owner may also remove the contact owner.
- If **contact and opportunity owners are _not_ synced**, only the opportunity owner is removed.

### Edge Cases

- **No Opportunity in Context**: If the workflow was not triggered by an opportunity and there is no preceding **Find Opportunity** step, this action is skipped.
- **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest) is ever updated, leaving the rest unchanged.
- **Already Unassigned**: If the opportunity already has no owner, this action effectively makes no changes.

## Example

**Scenario**: A workflow detects that an opportunity is closed and needs to be reassigned or left unassigned for administrative processing.

1. **Trigger**: Opportunity status changes to “Closed.”
2. **Action**: _Remove Owner from Opportunity_
   - **Action Name**: “Unassign Closed Deal”

If the workflow was triggered by a specific opportunity (or a **Find Opportunity** step identifies one), this action removes its owner, leaving the opportunity unassigned. If your system syncs contact ownership with the opportunity, the contact’s owner may also be cleared.

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
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)
- [Workflow Action - Remove Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000003365-workflow-action-remove-opportunity)
- [Workflow Actions - Remove Contact Follower](https://help.gohighlevel.com/support/solutions/articles/155000003426-workflow-actions-remove-contact-follower)
- [Workflow Action - Remove Assigned User](https://help.gohighlevel.com/support/solutions/articles/155000003268-workflow-action-remove-assigned-user)
- [How to Decouple Owners for Contacts and Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002270-how-to-decouple-owners-for-contacts-and-opportunities)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity/hit)