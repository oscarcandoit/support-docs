---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow"
title: " Go-To Connections for Triggers: Advanced Builder Workflow : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
6. Go-To Connections for Triggers: Advanced Builder Workflow

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

# Go-To Connections for Triggers: Advanced Builder Workflow

Modified on: Fri, 31 Oct, 2025 at 9:50 AM

Go-To connections for triggers lets you point each trigger to the exact action where its path should begin—right on the canvas. It keeps complex entry logic tidy without duplicating workflows or building giant if/else stacks.

```
Please Note: Connect node to node
Click the small connector dot on the trigger, drag to the connector dot on the action, and release.
```

* * *

**TABLE OF CONTENTS**

- [What are Go-To Connections for Triggers?](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#What-are-Go-To-Connections-for-Triggers?)
- [Key Benefits of Go-To Connections for Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#Key-Benefits-of-Go-To-Connections-for-Triggers)
- [How do Go-To Connections for Triggers work](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#How-do-Go-To-Connections-for-Triggers-work)
- [Connection Rules (Builder)](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#Connection-Rules-(Builder))
- [Enrollment Rules (How Contacts Enter)](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#Enrollment-Rules-(How-Contacts-Enter))
- [Key Behavior of the Go-To Connection Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#Key-Behavior-of-the-Go-To-Connection-Triggers)
- [How to Use Go-To Connections for Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#How-to-Use-Go-To-Connections-for-Triggers)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow#Frequently-Asked-Questions)

* * *

## **What are Go-To Connections for Triggers?**

Go-To Connections for Triggers are special dashed connectors that let you choose a unique “first action” for every trigger on the workflow canvas. When a trigger matches, the contact jumps directly to the connected action and the workflow continues from there—no detours, no duplicate workflows. You can now set a start action per trigger. Drag Go-To connections from the trigger to any action on the canvas - this means no more single entry path, you can define the entry path for each of your triggers!

```
IMPORTANT NOTES:

1. Advanced Builder only: Go-To Connections for Triggers are exclusive to Advanced Builder.
2. Every trigger must connect once. Unassigned triggers auto-connect to Root, but you should explicitly set the correct start action.
3. Single enrollment per contact. A contact won’t run concurrently down multiple branches in the same workflow.
4. Switching back to Standard Builder. Remove Advanced-only features (Trigger Go-To, Delinked nodes, Disabled nodes) before switching views.
```

* * *

## **Key Benefits of Go-To Connections for Triggers**

- **One trigger, one journey**—design multiple entry paths within a single workflow.

- **Cleaner logic**—eliminate giant if/else branches and keep the canvas easy to scan.

- **Faster execution**—contacts skip unnecessary steps and start exactly where they should.

- **Easy maintenance**—drag a new dashed line to repoint any trigger in seconds.

* * *

## **How do Go-To Connections for Triggers work**

1. **Set a start action per trigger**: Drag a dashed Go-To connection from the trigger to the action where that trigger should begin.

2. **Clean visual routing:** Trigger Go-To links are dashed with an arrowhead; normal sequential paths stay solid.

3. **D** **irect execution**:  When a trigger matches, the workflow jumps directly to its connected start action and continues from there.

**Example:**

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056924928/original/ZRUi1pvTFhi31ZJFBDjnKW3knuBkxa19SA.png?1761577705)_

You can set multiple Go-To connections for each trigger, allowing you to define exactly where a contact should start when that specific trigger fires.

* * *

## **Connection Rules (Builder)**

- **1:1 connections only:** Each trigger can connect to one next action, and each action can have one incoming connection (from a trigger or a previous action).

- **No branching from a single action:** an action can have only one “Next step.” If an action already points to a next step, connecting it to another action will overwrite the existing link (i.e., the previous connection is removed).

* * *

## **Enrollment Rules (How Contacts Enter)**

**One trigger per enrollment:** A contact enters a workflow once per run, and that entry is attributed to the single trigger that fired. Narration and statistics reflect that trigger.

- If multiple triggers could qualify around the same time, the workflow still records **one** enrollment for that moment (tied to one trigger).

- If your workflow **allows re-entry** (per your settings), the **same contact may enter again later** when another trigger fires—each run is still initiated by exactly one trigger.


* * *

## **Key Behavior of the Go-To Connection Triggers**

- **Dashed connector:** Trigger Go-To appears as a **dashed line with an arrowhead** from the trigger to its start action.

- **Default (“dangling”) behavior:** If a trigger has no Go-To set, it **auto-connects to the Root (first) action**.

- **Save rule:** **Every trigger must connect to exactly one action** to save the workflow; reassign any time by dragging the dashed connector.

- **Execution:** When the trigger matches, the contact is sent straight to the target action; the rest of the path runs normally.


* * *

## **How to Use Go-To Connections for Triggers**

1\. Open your workflow in Advanced Builder.

2\. Add/position your triggers and actions.

3\. From each trigger, drag the dashed Go-To connection to the action where it should start.

4\. Reassign later by dragging the same connector to a new node.

5\. Save → Publish when ready.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057324071/original/17rDcNZfnHtHoM3lA08b7f2PsqdaKUN6VA.png?1761921956)

* * *

## **Frequently Asked Questions**

**Q: Can a trigger have more than one Go-To connection?**

No. Each trigger must connect to exactly one action to keep execution deterministic.

**Q: What happens if I delete the action that a trigger points to?**

The Go-To link becomes invalid, so the trigger will automatically reconnect to the Root action until you assign a new target.

**Q: Will contacts already in the workflow follow the new route after I republish?**

No. Routing changes apply only to contacts who enter the workflow after you’ve published the update.

**Q: Can I export a workflow with Trigger Go-Tos in a snapshot?**

Yes. Snapshots retain all Advanced Builder features, including Trigger Go-Tos.

**Q: Does this feature work in the Standard Builder?**

Not yet. You’ll need to stay in Advanced Builder or remove the dashed links before switching.

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

- [Triggers - Overview](https://help.gohighlevel.com/support/solutions/articles/48000982202-triggers-overview)
- [Duplicating Triggers](https://help.gohighlevel.com/support/solutions/articles/48000982205-duplicating-triggers)
- [Trigger/workflow - Email/SMS Notifications to Client/Yourself (New Lead)](https://help.gohighlevel.com/support/solutions/articles/48000982203-trigger-workflow-email-sms-notifications-to-client-yourself-new-lead-)
- [Send Contact Info To Google Sheets Via Webhooks & Zapier](https://help.gohighlevel.com/support/solutions/articles/48001062709-send-contact-info-to-google-sheets-via-webhooks-zapier)
- [Workflow Trigger - Exact Match & Contains Phrase](https://help.gohighlevel.com/support/solutions/articles/48001142886-workflow-trigger-exact-match-contains-phrase)
- [How to Create A Task Event and Task Reminder in Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147410-how-to-create-a-task-event-and-task-reminder-in-campaigns)

## Related Articles

- [Advanced Builder for Workflows: Visual Canvas for Building Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006635-advanced-builder-for-workflows-visual-canvas-for-building-workflows)
- [Delinked Nodes (Independent Branches): Advanced Builder Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow)
- [Pause Workflow Actions: Enable/Disable Nodes](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes)
- [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)
- [Workflow AI Builder](https://help.gohighlevel.com/support/solutions/articles/155000006100-workflow-ai-builder)
- [Getting Started with Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow/hit)