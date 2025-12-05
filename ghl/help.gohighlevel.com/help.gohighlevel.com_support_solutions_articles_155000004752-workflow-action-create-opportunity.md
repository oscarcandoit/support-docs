---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity"
title: " Workflow Action - Create Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Create Opportunity

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

# Workflow Action - Create Opportunity

Modified on: Tue, 18 Mar, 2025 at 6:57 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity#Example)

## Overview

The **Create Opportunity** action is used to generate a new opportunity within a specified pipeline and stage. It can automatically populate details such as the opportunity name, source, and status. You can also enable or disable duplicate opportunity creation based on whether another opportunity already exists for the **same contact**. This action is particularly useful for businesses looking to streamline their lead-to-opportunity process by automatically creating opportunities whenever specific workflow conditions are met.

## Action Name

**Create Opportunity**

## Action Description

When triggered, the **Create Opportunity** action adds a new opportunity record to your CRM or sales pipeline. You can configure various fields—like the pipeline, pipeline stage, opportunity name, and source—to ensure the newly created opportunity fits seamlessly into your existing sales process. You also have the flexibility to control whether duplicates are allowed, based on **contact ID**. If a contact already has an existing opportunity and duplicates are disabled, no new opportunity will be created for that contact.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043048688/original/BYV_IHghvGkzOAkHMcQvDRQvcEQ7ydamDA.png?1741698740)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **Pipeline** | The pipeline where the new opportunity will be created (e.g., “Projects,” “Sales,” etc.). | Yes |
| **Pipeline Stage** | The stage within the chosen pipeline in which to place the newly created opportunity (e.g., “New Lead,” “Qualification”). If left blank, it defaults to the first stage in the selected pipeline. | No |
| **Opportunity Name** | The name of the new opportunity. If left blank, it defaults to the **contact’s name** (if available). You can also dynamically generate this from custom values and fields (e.g., `{{contact.first_name}}`). | No |
| **Opportunity Source** | Indicates where the opportunity originated (e.g., “Website,” “Referral,” “Event”). If left blank, there is no default source; it simply remains empty. | No |
| **Status** | The status of the newly created opportunity (e.g., “Open,” “New,” “Pending”). If left blank, it defaults to **“Open.”** | No |
| **Duplicate Opportunity** | Enables or disables the creation of a new opportunity if one already exists for the same **contact ID**. When disabled, no new opportunity is created if one is already linked to that contact. | NA |
| **Opportunity Value** | A numerical field representing the potential value of the opportunity. If left blank, it defaults to **0**. | No |
| **Ownership Settings** | Depending on your **Opportunities & Pipelines** settings, the opportunity owner may automatically become the contact’s owner, or remain unassigned. This behavior can be toggled in your system’s “Customize opportunity settings.” | No |
| **Other Custom Fields** | Any additional custom fields you want to populate when creating the new opportunity. Most fields allow custom values to be selected or entered. | No |

### ``` For any date fields, you can also use custom values like Right Now to add the current date and time in a new opportunity ```

### Edge Cases

- **Missing Contact Fields**: If the contact does not have a first or last name, the system will attempt to use any available contact identifier (e.g., email) for the **Opportunity Name**.
- **No Contact Present**: If there is no contact associated with the workflow (e.g., inbound webhook without contact data), an opportunity cannot be created.
- **Duplicate Check**: Duplicate logic is based on **contact ID**, not the opportunity name. If duplicates are disabled and the same contact triggers this action again, no new opportunity will be created.

## Example

**Scenario**: You want to create a new opportunity for every new lead that fills out a “Project Inquiry” form on your website.

1. **Trigger**: A contact submits a “Project Inquiry” form.
2. **Action**: _Create Opportunity_
   - **Action Name**: “Create Opportunity”
   - **Pipeline**: “Projects”
   - **Pipeline Stage**: “New Lead”
   - **Opportunity Name**: `{{contact.first_name}} - Project Inquiry`
   - **Opportunity Source**: “Website”
   - **Status**: “Open”
   - **Opportunity Value**: 0 (if not specified)
   - **Duplicate Opportunity**: Enabled (to allow the same contact to have multiple project inquiries)

When this action runs, a new opportunity is created in the “Projects” pipeline under the “New Lead” stage. If the same contact submits another inquiry and duplicates are enabled, a second opportunity will be created. If duplicates are disabled, only the first opportunity would be created.

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

- [Workflow Action - Remove Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000003365-workflow-action-remove-opportunity)
- [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)
- [Workflow Action - Find Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity)
- [Workflow Action - Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [Workflow Trigger - Stale Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002492-workflow-trigger-stale-opportunities)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity/hit)