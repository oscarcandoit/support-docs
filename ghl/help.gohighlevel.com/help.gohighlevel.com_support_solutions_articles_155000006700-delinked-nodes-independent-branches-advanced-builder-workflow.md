---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow"
title: " Delinked Nodes (Independent Branches): Advanced Builder Workflow : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
6. Delinked Nodes (Independent Branches): Advanced Builder W...

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

# Delinked Nodes (Independent Branches): Advanced Builder Workflow

Modified on: Tue, 11 Nov, 2025 at 9:36 AM

**Delinked Nodes** let you build **independent branches** (mini-flows) on the canvas that aren’t wired into a single main line. Use them to design parallel paths side-by-side and start each branch from the trigger you choose.

* * *

**TABLE OF CONTENTS**

- [What are Delinked Nodes?](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#What-are-Delinked-Nodes?)
- [Key Benefits of Delinked Nodes](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Key-Benefits-of-Delinked-Nodes)
- [Key behaviors & visuals](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Key-behaviors-&-visuals)
- [Set up Delinked Nodes](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Set-up-Delinked-Nodes)
- [Best practices](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Best-practices)
- [Important Takeaways](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Important-Takeaways)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow#Frequently-Asked-Questions)

* * *

## **What are Delinked Nodes?**

Delinked nodes are actions laid out as independent clusters that don’t have to connect to your “main” chain.

They do not run on their own—you must route a trigger (or another node) to the first action in the cluster.

- **Build in multiple clusters:** Place actions anywhere to create independent clusters (no need to chain everything together).

- **Route explicitly**: Start any cluster by pointing a trigger to it using Trigger Go-To (dashed connector).

- **Stay readable:** Separate branches are easier to scan, document, and evolve.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058113152/original/Q-JCiftpB3M8uT6cADeMDaNu8esdvraMXQ.png?1762875291)

* * *

## **Key Benefits of Delinked Nodes**

Delinked Nodes bring several user-focused advantages:

- **Visual clarity:** Design side-by-side branches instead of long vertical chains.

- **Faster testing:** Isolate and debug one branch without disturbing others.

- **Single source of truth:** Keep related automations together rather than creating separate workflows.

- **Flexible scaling:** Add or remove clusters without redrawing the main flow.

- **Advanced Builder exclusivity:** Pair with Go-To connections, sticky notes, and color-coding for pro-level organization.

* * *

## **Key behaviors & visuals**

- **Independent clusters:** You can position and format clusters anywhere on the canvas.

- **Trigger with go-to connection required:** Use the dashed Go-To connector from a trigger to the cluster’s first action to make it executable.

- **Execution:** Each routed branch runs independently in the same workflow context.

* * *

## **Set up Delinked Nodes**

Leverage these steps to add delinked branches to a workflow

1\. Choose a trigger on the canvas.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058112735/original/CXkVDrJEKplfIECZ77E7QN3ux9h0Oy7Y0Q.gif?1762875059)

2\. Drag the dashed Go-To connector from the trigger to the first action of the delinked cluster you want to start.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058112972/original/XaSSE1XuZwqh0FzjoyLSY2V9z-4Dd_2W9g.png?1762875199)

3\. (Optional) Add sticky notes and colors to label branches for teammates. Save and publish to make the behavior live.

* * *

## **Best practices**

- **Name clusters with sticky notes**: e.g., “VIP Onboarding,” “Ops Sync,” “Trial Nurture.”

- **Keep first actions obvious:** Place the intended entry node at the top/left of each cluster.

- **Minimize crossings**: Use Tidy/Format and spacing so dashed Go-To lines are easy to read.

* * *

## **Important Takeaways**

- **Advanced Builder only:** The delinked nodes are available only in the advanced builder.

- **Single enrollment per contact:** A contact will not run through multiple branches concurrently in the same workflow.

- **Explicit routing**: A delinked cluster won’t execute unless at least one trigger is connected to it.

- **Switching back to Standard Builder**: Remove Delinked Nodes (and other Advanced-only features like Trigger Go-To or Disabled nodes) before switching.

* * *

## **Frequently Asked Questions**

**Q: Can contacts run through two delinked branches at the same time?**

No. The workflow enforces single enrollment per contact, so a contact can proceed down only one branch concurrently.

**Q: Will delinked nodes break if I clone the workflow?**

No. Cloning preserves all clusters and Go-To links exactly as designed. Just test triggers in the new location.

**Q: Do I need Premium Features to use delinked nodes?**

Delinked Nodes themselves are free in the Advanced Builder. Premium Features are required only for certain external-integration actions.

**Q: Can I connect one branch to another later in the flow?**

Yes. You can draw a standard workflow connection from any action in one cluster to the start of another, effectively merging paths when needed.

**Q: What happens if I remove a Go-To link?**

The branch becomes inactive until you reconnect it to a trigger or another step; unpublished branches will not run.

**Q: Is there a performance impact with many delinked clusters?**

No noticeable impact for typical automations—workflow execution is still event-driven and lightweight. Very large workflows may load slightly slower in the editor.

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

- [Introduction to Workflows and Automations](https://help.gohighlevel.com/support/solutions/articles/155000002445-introduction-to-workflows-and-automations)
- [Workflow Notes, Action Notes & Sticky Notes](https://help.gohighlevel.com/support/solutions/articles/155000003914-workflow-notes-action-notes-sticky-notes)
- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Comprehensive workflow stats](https://help.gohighlevel.com/support/solutions/articles/155000003972-comprehensive-workflow-stats)
- [Workflows - Advanced Filters & Smart List](https://help.gohighlevel.com/support/solutions/articles/155000003974-workflows-advanced-filters-smart-list)
- [Workflow Action - If/Else Upgrad](https://help.gohighlevel.com/support/solutions/articles/155000003975-workflow-action-if-else-upgrad)

## Related Articles

- [Advanced Builder for Workflows: Visual Canvas for Building Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006635-advanced-builder-for-workflows-visual-canvas-for-building-workflows)
- [Go-To Connections for Triggers: Advanced Builder Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow)
- [Pause Workflow Actions: Enable/Disable Nodes](https://help.gohighlevel.com/support/solutions/articles/155000006693-pause-workflow-actions-enable-disable-nodes)
- [Keyboard Shortcuts in Workflow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006694-keyboard-shortcuts-in-workflow-builder)
- [How to Switch Between Multiple Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006692-how-to-switch-between-multiple-workflows)
- [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006700-delinked-nodes-independent-branches-advanced-builder-workflow/hit)