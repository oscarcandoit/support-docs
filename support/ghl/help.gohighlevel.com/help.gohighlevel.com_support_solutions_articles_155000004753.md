---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004753"
title: " Update Opportunity Action in HighLevel Workflows Explained : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004753#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004753#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001362)
6. Workflow Action - Update Opportunity

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

# Workflow Action - Update Opportunity

Modified on: Thu, 7 Aug, 2025 at 6:13 AM

This article explains how to use the **Update Opportunity** action in HighLevel workflows. You’ll learn how to dynamically update opportunity records—including pipeline stages, opportunity names, and values—based on workflow logic or contact behavior.

* * *

**TABLE OF CONTENTS**

- [What is the Update Opportunity Action?](https://help.gohighlevel.com/support/solutions/articles/155000004753#%E2%80%8B%E2%80%8BWhat-is-the-Update-Opportunity-Action?)
- [Key Benefits of the Update Opportunity Action](https://help.gohighlevel.com/support/solutions/articles/155000004753#Key-Benefits-of-the-Update-Opportunity-Action)
- [How to Use the Update Opportunity Action](https://help.gohighlevel.com/support/solutions/articles/155000004753#How-to-Use-the-Update-Opportunity-ActionLearn-how-to-properly-configure-the-Update-Opportunity-action-and-connect-it-to-your-workflow-logic-for-consistent-and-reliable-updates.)
- [How to Use the Update Opportunity Action](https://help.gohighlevel.com/support/solutions/articles/155000004753#How-to-Use-the-Update-Opportunity-Action)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000004753#Frequently-Asked-Questions)

* * *

# **What is the Update Opportunity Action?**

The **Update Opportunity** workflow action allows you to programmatically modify an existing opportunity in your CRM pipeline. You can change the name, value, pipeline, or stage of the opportunity based on dynamic inputs or other workflow actions like **Find Opportunity**.

* * *

## **Key Benefits of the Update Opportunity Action**

Automatically modifying opportunity records within a workflow makes your sales process more efficient and tailored.

Here’s why this action is a valuable addition to your automation toolkit:

- Automatically move deals to the correct pipeline stage based on triggers or contact activity

- Customize opportunity names using merge fields for better context

- Adjust opportunity values dynamically as lead engagement increases

- Eliminate manual updates to pipeline stages or values

- Maintain accurate CRM records during automated lead follow-up

- Prevent backward movement in pipelines unless explicitly allowed

## **How to Use the Update Opportunity Action**

Learn how to properly configure the Update Opportunity action and connect it to your workflow logic for consistent and reliable updates.

### **Navigate to Workflow Builder**

Start by going to the Automation section in the left-hand menu, then click on the Workflows tab at the top. This opens your Workflow List, where you can view, create, or manage existing automation workflows.

This is the central hub for building automations like the "Update Opportunity" action you'll set up shortly.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051109144/original/-Az8iPkEdOk_d0IvhozSs6ode7plLBWhWQ.png?1754564929)

### **Create or Use Existing Workflow**

Click the **\+ Create Workflow** button in the top-right to start a new automation from scratch or a template. This is ideal if you’re building a new workflow specifically for updating opportunities.

? **Tip:** If you already have a workflow set up (e.g., for lead follow-up), you can simply **select it from the list** instead of creating a new one. Then, add the **Update Opportunity** action into that existing workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102591/original/DJTyqNLE3JHkU7AiCXYzusDFImDMJPZmZw.png?1754561288)

### **Choose Workflow Trigger**

Click **Add New Trigger**, then choose the appropriate trigger from the list. In this example, we have used "Opportunity Status Changed" trigger. This trigger activates the workflow whenever the status of an existing opportunity (deal) is updated.

```
Why this trigger?
We’re using this as an example because it ensures the workflow starts with an opportunity already in context—making it directly compatible with the Update Opportunity action. Since the opportunity that triggered the workflow is known, no extra lookup is required.
```

```
Tip: You’re not limited to this trigger. You can use any trigger of your choice, such as a tag being added or a form being submitted. Just remember: if your trigger isn’t opportunity-based, you’ll need to add a Find Opportunity step early in the workflow to locate the correct deal to update.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102631/original/x_q9oBU9KEV2q5n3326Ar7Em0zEasextTw.png?1754561311)

### **Add the Update Opportunity Action**

After selecting your trigger, click the **\+ icon** under it and search for or scroll to **Update Opportunity** in the Opportunity section of the Actions list.

This action allows you to automatically change key details—like pipeline, stage, value, or name—of the opportunity that triggered the workflow (or the one found by a Find Opportunity step).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102657/original/Ugkl_Hxs6OhpWD8czzju_gsErkCEOA7kRA.png?1754561325)

### **Name the Action Step**

In the **Action Name** field, enter a label that clearly describes what this action is doing (e.g., “Move to Proposal Stage” or “Update Deal Info”).

This name appears in the workflow builder and helps you stay organized—especially in workflows with multiple steps. It’s just for internal use and won’t be visible to contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102667/original/vu8zX9ydjp5jGvJ5lPH-3jigC8ylLyI8ZQ.png?1754561338)

### **Enable/Disable Backward Stage Movement**

Toggle **Allow Opportunity to Move to Any Previous Stage** to ON if you want to move the opportunity to an earlier stage in the pipeline.

By default, opportunities can only move forward or remain in the same stage. Enabling this option gives you more flexibility—especially when reverting deals that were prematurely advanced.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102693/original/DIWtuiHXDv-vsDQd3D3uZT7nImoLBWgOpg.png?1754561352)

### **Duplicate Opportunity Setting**

You’ll notice a **Duplicate Opportunity** toggle inside the Update Opportunity action—but here’s the key: it doesn’t actually create a new opportunity. This action only updates an existing one, so even if this toggle is enabled, nothing new will be created.

When you click the preview icon next to the toggle, you’ll be taken to **Settings > Business Profile**, where you’ll see a prompt to manage duplicate opportunity rules. Clicking **“Go to Opportunity Settings”** brings you to the configuration screen where you can turn on **“Allow Multiple Opportunities per Contact.”** This setting is useful if the same contact might move through the pipeline more than once—like for renewals or repeat purchases. Just keep in mind: **this setting doesn’t affect the behavior of the Update Opportunity action itself—it never creates duplicates.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051108804/original/rrxt6QxcspIBdiyM6-KlSoGFwiUZzs4BLA.gif?1754564749)

### **Add Fields to Update**

Click the **Add field** button to choose which opportunity details you want to modify. You can update fields like pipeline, stage, name, value, and more.

This is where you define exactly what changes the Update Opportunity action will apply. You can also use dynamic merge fields here to personalize values based on contact data.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102738/original/zT8MIoCJ5vxZZGGTqaWAatfVsM9s16bgpg.png?1754561371)

### **Pipeline Filter**

Select the pipeline you want the opportunity to move into. This is helpful when shifting a deal into a different process—like routing renewals or upsells to a dedicated pipeline.

Updating this field helps reorganize your sales flow dynamically without manual pipeline changes.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102801/original/pjdq6rQQMtRdUWNbuAGt33g2S1bRqNcsMg.png?1754561412)

### **Pipeline Stage**

Choose the stage within the selected pipeline where you want the opportunity to go. This helps move deals forward—or even backward if you’ve enabled that option—to reflect their current progress in your sales cycle.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102853/original/tmPABHBvFl86S08WEZD3y3UWrwRBPjJ5Lw.png?1754561435)

### **Status**

Set the opportunity’s current status—like **Open**, **Won**, or **Lost**. Updating this field helps you keep the deal’s progress aligned with real-time changes, which is especially helpful when triggering or advancing workflows.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102894/original/m6Nv95kUl7dbIiPOyXOpd0sNbsO6Tc7mcQ.png?1754561454)

### **Opportunity Source**

Use this field to update or track where the opportunity came from—like a lead form, ad campaign, or specific landing page.

You can set this manually or use a **custom value** like {{contact.source}} to pull dynamic data from the contact record. Just click the **tag icon** next to the input field to browse and insert custom values. This is especially helpful for keeping source data accurate when contacts enter your pipeline from different channels.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051103460/original/wNEAErRrLfk4EmqFebiUMnqckyeQST4DzA.png?1754561787)

### **Opportunity Value**

This field lets you assign or update the monetary value of a deal in your pipeline. You can enter a fixed amount (like 500) or use a **custom value** based on the contact record or other workflow logic (for example, {{contact.quoted\_price}}).

Use this to track potential revenue more accurately and automate pipeline forecasting based on where the opportunity is in the sales cycle.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051103944/original/FoCFRBcDPCudz-Ff3qvvXSj4HxqPrBWbSw.png?1754562087)

### **Save Action**

Once you’ve filled in all the opportunity fields you want to update—like pipeline, stage, status, and more—just click **Save Action** to lock it in. This tells the workflow to apply your updates when the trigger conditions are met.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051104023/original/waKilXqwzRk6ykBf4fqivWoRM-MEGg9pig.png?1754562143)

* * *

## **Frequently Asked Questions**

**Q: What happens if no opportunity exists in the workflow?**

The action is skipped. Ensure your workflow is triggered by or includes a Find Opportunity step.

**Q: Can I move an opportunity backward in the pipeline?**

Yes, but only if the “Allow Opportunity to Move to Any Previous Stage” toggle is enabled.

**Q: What if I use a Create Opportunity action earlier in the workflow — will that opportunity be updated?**

No. Creating an opportunity earlier in the workflow does not automatically provide context for the Update Opportunity step. To update an opportunity later in the workflow, you need to either use a Find Opportunity action to locate the specific record or pass the correct reference through custom values when creating the opportunity. This ensures the update targets the right record with the appropriate context.

**Q: Can I update the owner of the opportunity?**

Not with this action. Use the **Assign User** or **Update Contact** action to modify ownership.

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

- [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)
- [Workflow Action - Find Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004751-workflow-action-find-opportunity)
- [Workflow Trigger - Stale Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002492-workflow-trigger-stale-opportunities)
- [Workflow Trigger - Task Completed](https://help.gohighlevel.com/support/solutions/articles/155000001166-workflow-trigger-task-completed)
- [Multiple Opportunities For The Same Person In The Same Pipeline](https://help.gohighlevel.com/support/solutions/articles/48001066144-multiple-opportunities-for-the-same-person-in-the-same-pipeline)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004753)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity/hit)