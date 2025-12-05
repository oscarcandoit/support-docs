---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity"
title: " Workflow Action: Add Owner to Opportunity in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Add Owner to Opportunity

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

# Workflow Action - Add Owner to Opportunity

Modified on: Wed, 14 May, 2025 at 4:54 PM

## **Overview**

The **Add Owner to Opportunity** action in workflows allows you to automatically assign the owner of an existing opportunity. This ensures that opportunity ownership stays aligned with contact ownership as the contact progresses through your pipeline. This action is useful for ensuring that each opportunity has a designated owner who can manage the opportunity’s progress through the sales pipeline.

* * *

**TABLE OF CONTENTS**

- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Example)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity#Related-Articles)

* * *

## **Action Name**

**"Add Owner to Opportunity"**

This is the label that appears in the workflow builder when you add this action.

* * *

## **Action Description**

When triggered, **the Add Owner to Opportunity** action sets the **User** you select as the new owner of the opportunity. If your platform settings are configured to sync the contact owner with the opportunity owner, then the contact’s ownership is also updated automatically. You can optionally choose to apply this assignment only to opportunities that are currently unassigned; otherwise, any existing owner will be overridden.

```
Important: This action depends on having an opportunity in context—either because the workflow was triggered by an opportunity or because a prior Find Opportunity step located one. If no opportunity is in context, this action does nothing.
```

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046648790/original/EzP31RPCOyWA5XC4K_kOLRXnM9Bmm2YdQA.jpeg?1747259450)**

* * *

## **Action Details**

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **User** | The user to be assigned as the opportunity’s owner. Typically a dropdown listing your account’s users. | Yes |
| **Only Apply to Unassigned Opportunities** | A toggle that, when enabled, restricts the ownership assignment to opportunities that currently have **no owner**. If the opportunity already has an owner, it remains unchanged. When disabled, any existing owner is overridden. | No |

### **Sync Settings**

- If **contact and opportunity owners are synced** (configured in **Opportunity Settings**), changing the opportunity owner here will also change the contact’s owner.

- If **contact and opportunity owners are _not_ synced**, only the opportunity owner is changed.


### **Edge Cases**

- **Multiple Opportunities**: Even if a **Find Opportunity** step finds multiple potential matches, only **one** (earliest or latest as selected in the Find Opportunity) is ever updated.

- **No Opportunity in Context**: If no opportunity is found or triggered, the action is skipped.

* * *

## **Example**

**Scenario**: A workflow identifies high-value leads (via a **Find Opportunity** action) and assigns them to a specific user for priority follow-up.

1. **Trigger**: A lead qualifies as high-value based on form submission data.

2. **Action**: _Find Opportunity_
   - **Filters**: _Opportunity Value_ is greater than `5000`
3. **Action**: _Add Owner to Opportunity_
   - **Action Name**: “Assign High-Value Lead to Senior Sales Rep”

   - **User**: “Senior Sales Rep”

   - **Only Apply to Unassigned Opportunities**: **Disabled** (to override any existing owner)

With this configuration, all opportunities matching the “high-value” criteria found by the **Find Opportunity** step will be assigned to the “Senior Sales Rep,” ensuring immediate attention and follow-up. If the system is set to sync contact and opportunity owners, the contact owner will also be updated accordingly.

* * *

## **Frequently Asked Questions**

**Q: Does this action overwrite the current opportunity owner?**

Yes. If the contact has an assigned user, this action will replace the current opportunity owner with that user — even if someone else is already assigned.

**Q: What if I want to assign a different user to the opportunity manually?**

Use the Update Opportunity workflow action instead. That action lets you manually select a specific user to assign to the opportunity.

**Q: Will users see the opportunity after being assigned?**

Only if their permissions allow it. If your account enforces "Only Assigned Data" rules, users will need permission to access the opportunity’s pipeline to view or manage the record.

* * *

## **Related Articles**

- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/en/support/solutions/articles/155000004753)

- [Workflow Action - Remove Owner from Opportunity](https://help.gohighlevel.com/en/support/solutions/articles/155000004755)

- [How to Decouple Owners for Contacts and Opportunities](https://help.gohighlevel.com/en/support/solutions/articles/155000002273)

- [User Permissions, Assigned Data, and Owners](https://help.gohighlevel.com/en/support/solutions/articles/48000982601)


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

- [How to Decouple Owners for Contacts and Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002270-how-to-decouple-owners-for-contacts-and-opportunities)
- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Getting Started with Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)
- [Workflow Action - Remove from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow)
- [Getting Started - Setup Pipelines and Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000005062-getting-started-setup-pipelines-and-opportunities)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity/hit)