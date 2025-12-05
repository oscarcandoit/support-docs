---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006654"
title: " Overview of Auto Save Feature for Workflows in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006654#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006654#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Workflows - Auto Save

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

# Workflows - Auto Save

Modified on: Wed, 19 Nov, 2025 at 10:05 AM

HighLevel’s Workflow Builder continuously saves your canvas edits to draft, helping you move faster with less risk. Enable it once and keep iterating confidently, nothing goes live until you publish. This article gives an overview of the auto save feature in Workflows.

* * *

**TABLE OF CONTENTS**

- [What is Auto Save in the Workflows?](https://help.gohighlevel.com/support/solutions/articles/155000006654#What-is-Auto-Save-in-the-Workflows?)
- [Key Benefits of Auto Save in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006654#Key-Benefits-of-Auto-Save-in-Workflows)
- [Draft vs. Publish Behavior](https://help.gohighlevel.com/support/solutions/articles/155000006654#Draft-vs.-Publish-Behavior)
- [What Auto Save Captures](https://help.gohighlevel.com/support/solutions/articles/155000006654#What-Auto-Save-Captures)
- [What Auto Save Doesn’t Capture (Configuration Modals)](https://help.gohighlevel.com/support/solutions/articles/155000006654#What-Auto-Save-Doesn%E2%80%99t-Capture-(Configuration-Modals))
- [Version History & Checkpoints](https://help.gohighlevel.com/support/solutions/articles/155000006654#Version-History-&-Checkpoints)
- [Multi‑Editor & Multi‑Tab Behavior](https://help.gohighlevel.com/support/solutions/articles/155000006654#Multi%E2%80%91Editor-&-Multi%E2%80%91Tab-Behavior)
- [How To Setup Auto Save](https://help.gohighlevel.com/support/solutions/articles/155000006654#How-To-Setup-Auto-Save)
  - [Method 1: Using Workflow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006654#Method-1%3A%C2%A0Using-Workflow-Builder)
  - [Method 2: Thorough Global Workflow Settings](https://help.gohighlevel.com/support/solutions/articles/155000006654#Method-2%3A%C2%A0Thorough-Global-Workflow-Settings)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006654#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006654#Related-Articles)

* * *

# **What is Auto Save in the Workflows?**

Auto Save is a Labs feature that continuously saves your workflow **canvas** edits in the background while you build. Your changes are written to the current **draft** so you don’t lose progress; you still control when updates go live by clicking **Publish**.

* * *

## **Key Benefits of Auto Save in Workflows**

- **Zero manual saves**: Canvas edits are captured automatically as you build—no Save button required.

- **Draft safety**: Changes save to draft only; nothing affects live workflows until you click **Publish**.

- **Fewer clicks**: Toggle Auto Save once and move faster without pausing to save.

- **Reliable checkpoints**: Create named milestones any time with **Save Version** so you can return to a known good state.

- **Collaboration awareness**: When multiple people or tabs edit the same workflow, the **most recent auto-save** becomes the current draft version.


* * *

## **Draft vs. Publish Behavior**

Auto Save writes your ongoing edits to the draft state. Publishing is still a deliberate action you take to push changes live.

Understanding draft vs. published behavior prevents accidental changes from impacting active workflows.

- **Auto Save → Draft only:** Edits are preserved in the draft as you work.

- **Publish controls go-live:** Click **Publish** when your draft is ready to run.

- **Safe iteration:** You can make and store many changes without affecting currently published behavior.


* * *

## **What Auto Save Captures**

Knowing exactly what’s captured helps you avoid missing important changes. Auto Save will capture when you:

- Add any **action** or **trigger** to the canvas

- Delete any **action** or **trigger** from the canvas

- Make changes in the **Settings** tab of a workflow

- Edit the **Workflow name**

- Change workflow status ( **Draft** or **Publish**)


* * *

## **What Auto Save Doesn’t Capture (Configuration Modals)**

Auto Save does **not** apply inside individual action/trigger **configuration modals**. Changes inside a modal are not saved until you commit them back to the canvas.

- While editing a step’s settings in a modal, click **Save**/ **Apply** (or the equivalent) to commit changes back to the canvas.

- Once committed to the canvas, Auto Save will capture the update in the draft.

- **Example:** Changing the time in a **Wait** step inside its modal isn’t auto-saved until you click **Save** in the modal to update the canvas.


* * *

## **Version History & Checkpoints**

Each editing session automatically creates entries in **Version History**. You can also use **Save Version** any time to create a named checkpoint.

Version History gives you a recoverable record of progress. Named checkpoints make it easy to roll back to key milestones.

- **Session entries:** Automatic, created as you edit with Auto Save enabled.

- **Save Version:** Manual, creates a named checkpoint you can easily identify later.

- **Restore:** Use Version History to review and restore an earlier state as needed.


* * *

## **Multi‑Editor & Multi‑Tab Behavior**

If multiple users or browser tabs edit the same workflow, the **most recent auto-save becomes the current draft version**.

Coordinating edits prevents overwriting each other’s changes and ensures everyone works from the latest draft.

- Prefer a single editor at a time for critical updates.

- If collaborating, communicate timing to avoid collisions.

- If you return after being idle, refresh to make sure you’re viewing the latest draft.


* * *

## **How To Setup Auto Save**

Proper setup ensures your edits are captured continuously while you work.

### **Method 1:** Using Workflow Builder

1. Login to your sub-account.

2. Go to **Automations → Workflows** and open any workflow.

3. On first open, an onboarding pop-up may appear.

4. Choose **Enable Auto Save Now** to turn it on immediately.

![](https://jumpshare.com/share/qoLpTfNaXNoSMNe4NCst+/GIF+Recording+2025-10-29+at+5.35.15+PM.gif)

### **Method 2:** Thorough Global Workflow Settings

1. Login to your sub-account.

2. Go to **Automations** **→** **Global Workflow Settings.**



![](https://jumpshare.com/share/lHPmnBEquY46XBx14ujH+/Screen+Shot+2025-10-29+at+5.38.13+PM.png)

3. Turn the **Auto Save** and toggle **On**.



![](https://jumpshare.com/share/D9ErbRxbVXjICctHoFTT+/Screen+Shot+2025-10-29+at+5.40.38+PM.png)

4. **Build as usual:** Add, remove, and rearrange steps on the canvas. Your edits will auto-save to the draft.



![](https://jumpshare.com/share/FY4CrU2OoNyZiFg0IqLt+/GIF+Recording+2025-10-29+at+5.43.27+PM.gif)


* * *

## **Frequently Asked Questions**

**Q: Does Auto Save publish my changes automatically?**

No. Auto Save updates the **draft** only. Click **Publish** to push changes live.

**Q: Do I still need to click Save inside step configuration modals?**

Yes. Changes made inside a step’s modal must be **Saved/Applied** to commit to the canvas; then Auto Save captures them.

**Q: What happens if my internet drops while I’m editing?**

When connectivity returns, your canvas can resume saving. If you’re unsure which draft is current, refresh the workflow and review **Version History**.

* * *

## **Related Articles**

- [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)

- [Workflow Version History & Restore](https://help.gohighlevel.com/en/support/solutions/articles/155000006656)

- [Workflows - Undo/Redo & Change History](https://help.gohighlevel.com/en/support/solutions/articles/155000006655)

- [Advanced Builder for Workflows: Visual Canvas for Building Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000006635)

- [Workflow Settings - Overview](https://help.gohighlevel.com/en/support/solutions/articles/48001239875)


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

- [The All-New Contact Detail Page](https://help.gohighlevel.com/support/solutions/articles/155000006651-the-all-new-contact-detail-page)
- [Auto-Save and Version History for Funnels, Websites, and More!](https://help.gohighlevel.com/support/solutions/articles/155000004965-auto-save-and-version-history-for-funnels-websites-and-more-)
- [Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows)
- [Workflows Version History & Restore](https://help.gohighlevel.com/support/solutions/articles/155000006656-workflows-version-history-restore)
- [How to Switch Between Multiple Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006692-how-to-switch-between-multiple-workflows)
- [How to Use Auto-Save on Blog Posts](https://help.gohighlevel.com/support/solutions/articles/155000005665-how-to-use-auto-save-on-blog-posts)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006654)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006654-workflows-auto-save/hit)