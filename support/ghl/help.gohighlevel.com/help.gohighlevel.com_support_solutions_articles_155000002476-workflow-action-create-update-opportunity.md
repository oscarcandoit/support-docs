---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity"
title: " Workflow Action - Create/Update Opportunity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Create/Update Opportunity

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

# Workflow Action - Create/Update Opportunity

Modified on: Tue, 8 Apr, 2025 at 4:08 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity#Example)

## Overview

The "Create or Update Opportunity" action in your automation workflow is designed to manage opportunities within your sales pipeline. This feature allows you to automatically create or update opportunities based on predefined criteria, ensuring that your sales process is organised and efficient.

## Action Name

Create Opportunity

## Action Description

The "Create or Update Opportunity" action creates a new opportunity or updates an existing one within the selected pipeline and pipeline stage. This action helps in tracking leads and managing potential sales through different stages of your sales process.

However, **this action does not leverage**:

- **Opportunities that trigger the workflow** (i.e., it does not automatically update the opportunity that caused the workflow to start).
- **Any “Find Opportunity” step** (i.e., it does not use the opportunity found by a prior “Find Opportunity” action).

## Action Details

The details for configuring the "Create or Update Opportunity" action are as follows:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038428191/original/FL0knisuSnMYjK8PkXZ3pLdWt054jH15jQ.png?1734370334)

|     |     |     |
| --- | --- | --- |
| Value Name | Description | Mandatory |
| Action Name | The name you assign to this action for easy identification in your workflow. | Yes |
| In Pipeline | The specific sales pipeline where the opportunity will be created or updated. | Yes |
| In Pipeline Stage | The stage within the selected pipeline where the opportunity will be placed. | Yes |
| Opportunity Name | The name assigned to the opportunity for easy identification. | Yes |
| Opportunity Source | The source of the opportunity, indicating where the lead came from. | Yes |
| Lead Value | The estimated value of the lead (optional). | No |
| Status | The current status of the opportunity (e.g., open, closed). | Yes |
| Allow Opportunity to Move to Any Previous Stage in Pipeline | Allows the opportunity to be moved to any previous stage in the pipeline if needed. | No |
| Allow Duplicate Opportunities | Allows the creation of duplicate opportunities if a similar opportunity already exists. | No |

### Important Note

- **Deprecation**: The **"Create or Update Opportunity"** action is being phased out. It is recommended to use **Create Opportunity** or **Update Opportunity** actions instead, which offer more granular control and support additional features (e.g., leveraging a “Find Opportunity” step or updating the triggering opportunity).

```
We’re gradually deprecating the combined action—but only for new workflows. Existing workflows using the combined action will continue to work as is.
```

- **No “Find Opportunity” or Triggered Opportunity Support**: This action does not update the opportunity that triggered the workflow nor does it use any opportunity found via a **Find Opportunity** action. It operates solely on its own logic to either locate an existing opportunity or create a new one.

## Example: Managing New Leads from a Calendar Appointment Funnel

**Scenario:** Your business wants to create an opportunity in the sales pipeline whenever a new lead comes in from the calendar appointment funnel. This ensures that every lead is tracked and managed properly through your sales process.

**Solution using the "Create or Update Opportunity" action:**

**Trigger:** The workflow starts when a new lead is generated from the calendar appointment funnel.

**Action 1:** Create Opportunity action to create a new opportunity in the pipeline.

**Steps to Implement:**

- Add the Create Opportunity action to your workflow to be triggered when a new lead is generated.
- Set the Action Name to "Create Opportunity".
- Select the appropriate sales pipeline from the In Pipeline dropdown (e.g., "YOUR PROMOTION Pipeline").
- Choose the initial stage for the opportunity from the In Pipeline Stage dropdown (e.g., "New Leads").
- Set the Opportunity Name to something descriptive, such as "Deal 251 Opportunity".
- Define the Opportunity Source to indicate where the lead came from, e.g., "Lead from Calendar Appointment Funnel".
- Optionally, you can fill in the Lead Value if you have an estimated value for the lead.
- Set the Status to "open".
- Configure additional settings as needed:
- Enable Allow Opportunity to Move to Any Previous Stage in Pipeline if you want the flexibility to move opportunities backward in the pipeline.
- Enable Allow Duplicate Opportunities if your process allows for creating duplicate opportunities for similar leads.

**Outcome:** This automation ensures that every new lead from the calendar appointment funnel is automatically tracked as an opportunity in your sales pipeline. This helps in organising and managing your sales process effectively, ensuring no lead is overlooked.

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

- [Multiple Opportunities For The Same Person In The Same Pipeline](https://help.gohighlevel.com/support/solutions/articles/48001066144-multiple-opportunities-for-the-same-person-in-the-same-pipeline)
- [Getting Started - Setup Pipelines and Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000005062-getting-started-setup-pipelines-and-opportunities)
- [Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity/hit)