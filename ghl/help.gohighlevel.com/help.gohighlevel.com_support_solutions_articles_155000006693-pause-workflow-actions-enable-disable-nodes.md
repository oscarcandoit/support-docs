---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes"
title: " Pause Workflow Actions: Enable/Disable Nodes : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Pause Workflow Actions: Enable/Disable Nodes

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

# Pause Workflow Actions: Enable/Disable Nodes

Modified on: Tue, 11 Nov, 2025 at 10:01 AM

Temporarily disable any action in a workflow without deleting or disconnecting it. This makes testing, debugging, and iterating safer and faster—then re-enable the step when you’re ready.

* * *

**TABLE OF CONTENTS**

- [What are Pause Workflow Actions?](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#What-are-Pause-Workflow-Actions?)
- [Key Benefits of Pause Workflow Actions](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Key-Benefits-of-Pause-Workflow-Actions)
- [Enable/Disable Toggle](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Enable/Disable-Toggle)
- [Visual Indicators & Execution Behavior](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Visual-Indicators-&-Execution-Behavior)
- [Builder Compatibility & Limitations](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Builder-Compatibility-&-Limitations)
- [How does the Pause Workflow Action Work](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#How-does-the-Pause-Workflow-Action-Work)
- [Key TakeAways](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Key-TakeAways)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes#Frequently-Asked-Questions)

* * *

## **What are Pause Workflow Actions?**

Pause Workflow Actions lets you temporarily turn workflow nodes on or off inside the Advanced Builder. Disabled nodes are skipped during execution, allowing you to debug, A/B-test, or iterate without losing your original setup.

- **Pause without breaking:** Turn off individual nodes to test variations or isolate issues.

- **Non-destructive:** Your wiring stays intact—no need to remove or rebuild connections.

- **Clear visuals:** Disabled steps are dimmed on the canvas and are skipped at run time.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058115752/original/l7hK1mWhqghCmoxUdCk2pvosCcf4X6vJkg.gif?1762876501)

* * *

## **Key Benefits of Pause Workflow Actions**

Pause Workflow Actions delivers powerful quality-of-life upgrades:

- **Faster testing:** Disable a step, run the workflow, and re-enable instantly.

- **Zero rebuilds:** Your configurations stay intact; no need to re-map paths.

- **Clean execution:** HighLevel automatically skips disabled nodes so contacts never stall.

- **Safer iteration:** Debug or A/B-test without affecting production logic.

* * *

## **Enable/Disable Toggle**

Hover over any node in the Advanced Builder to reveal an Enable/Disable switch. Toggling it off greys-out the node and adds a “Disabled” label; toggling back on restores normal color and execution. Disabled nodes are fully ignored during live runs.

* * *

## **Visual Indicators & Execution Behavior**

- Appears greyed out with a Disabled tag.

- **Disabled nodes**: Are skipped automatically even when they’re the only forward path—so downstream actions still fire.

- **Enabled nodes**: Execute exactly as configured after reactivation.

* * *

## **Builder Compatibility & Limitations**

Pause Workflow Actions is available only in the Advanced Builder. Before switching back to the Standard Builder you must delete or re-enable any disabled nodes (and other Advanced-only items like Go-To or delinked nodes).

* * *

## **How does the Pause Workflow Action Work**

- **Enable/Disable toggle:** Hover a node and click on the pause icon.

- **Canvas cues:** Disabled nodes appear dimmed to signal they won’t run.

- **Execution:** Disabled nodes are skipped during workflow execution.

- **Downstream logic:** If a disabled node is part of the only path to later actions, the workflow will skip the disabled node(s) and continue executing any active downstream nodes reachable by the current path.

* * *

## **Key TakeAways**

- **Advanced Builder only:** Pause Actions is present only in the advanced builder at launch.

- **Switching back to Standard Builder:** Remove Advanced-only features ( **Disabled nodes**, **Trigger Go-To**, **Delinked nodes**) before switching.

- **Session tools:** Enable/Disable is a **canvas edit**—it works with **Undo/Redo & Change History** for your current editing session.


* * *

## **Frequently Asked Questions**

**Q: Will contacts get stuck at a disabled node?**

No. HighLevel automatically skips disabled nodes and continues down any active path.

**Q: Can I disable an entire branch?**

Yes, toggle off each node in that branch. All disabled nodes will be skipped until re-enabled.

**Q: Is this the same as the “Pause Workflows on Certain Dates” feature?**

No. Pause Workflow Actions pauses individual steps inside a single workflow, while Pause Workflows on Certain Dates pauses entire published workflows for date ranges.

**Q: What happens if I switch to the Standard Builder with disabled nodes still present?**

You’ll be prompted to delete or re-enable those nodes before the builder can load.

**Q: Do disabled nodes count toward execution limits?**

No, because they’re skipped, they do not consume executions.

**Q: Can I bulk-enable or disable nodes?**

At launch, toggling is done one node at a time. Bulk actions are not yet supported.

**Q: Will logs show skipped nodes?**

Yes. Execution logs mark disabled nodes as Skipped, providing clear traceability during testing.

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

- [Create Task Event In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147413-create-task-event-in-campaigns)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)
- [Workflow Action - Update Contact Field - Date type field](https://help.gohighlevel.com/support/solutions/articles/48001216170-workflow-action-update-contact-field-date-type-field)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)

## Related Articles

- [Pause Workflows on Certain Dates](https://help.gohighlevel.com/support/solutions/articles/155000003850-pause-workflows-on-certain-dates)
- [Advanced Builder for Workflows: Visual Canvas for Building Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006635-advanced-builder-for-workflows-visual-canvas-for-building-workflows)
- [Workflow Trigger - Coupon Redemption Limit Reached](https://help.gohighlevel.com/support/solutions/articles/155000005660-workflow-trigger-coupon-redemption-limit-reached)
- [WhatsApp V2 Action](https://help.gohighlevel.com/support/solutions/articles/155000005577-whatsapp-v2-action)
- [Conversation AI - Human Handover Action](https://help.gohighlevel.com/support/solutions/articles/155000005615-conversation-ai-human-handover-action)
- [Marketplace Workflow Actions](https://help.gohighlevel.com/support/solutions/articles/155000000571-marketplace-workflow-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes/hit)