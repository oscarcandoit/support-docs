---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated"
title: " Automate Post-Call Workflows with Transcript Trigger : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/48000666397)
6. Workflow Trigger - Transcript Generated

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

# Workflow Trigger - Transcript Generated

Modified on: Sun, 2 Nov, 2025 at 4:33 AM

The **Transcript Generated** workflow trigger enables intelligent post-call automation by activating workflows the moment a call transcript becomes available. It works across **Voice AI**, **IVR**, and **LC Phone** calls, allowing you to automate follow-ups, update CRM data, create tasks, and leverage insights from real conversation content — all without manual intervention.

* * *

**TABLE OF CONTENTS**

- [What Is the Transcript Generated Trigger?](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#%E2%80%8B%E2%80%8BWhat-Is-the-Transcript-Generated-Trigger?)
- [Key Benefits of the Transcript Generated Trigger](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#Key-Benefits-of-the-Transcript-Generated-Trigger)
- [How to Set Up the Transcript Generated Trigger](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#How-to-Set-Up-the-Transcript-Generated-Trigger)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated#Frequently-Asked-Questions)

* * *

# **What Is the Transcript Generated Trigger?**

The **Transcript Generated** trigger automatically activates a workflow as soon as HighLevel finishes transcribing a recorded call. Once fired, it passes a rich set of call details including the full transcript, duration, direction, caller location, timestamps, and more into your automation so you can launch downstream actions immediately.

This trigger supports:

- **Voice AI Calls** – Transcription is enabled by default.

- **LC Phone Calls** – Requires transcription to be enabled in Phone Settings.

- **IVR Calls** – Requires transcription to be enabled in IVR Settings.

By connecting call intelligence with workflow automation, this trigger helps businesses respond faster, personalize communication, and reduce administrative workload.

* * *

## **Key Benefits of the Transcript Generated Trigger**

- **Instant Post-Call Automation:** Trigger follow-up actions seconds after a call ends, eliminating manual delays.

- **AI-Powered Personalization:** Feed transcript data into AI Decision Maker or GPT Actions to tailor next steps based on sentiment, intent, or key phrases.

- **Actionable Insight Capture:** Automatically record buying intent, objections, or keywords directly in the contact record.

- **Comprehensive Data Access:** Use call metadata (duration, direction, timestamps, location, and user info) for precise automation logic.

- **Omnichannel Support:** Works seamlessly across Voice AI, IVR, and standard LC Phone calls.

- **Operational Efficiency:** Streamline repetitive post-call admin tasks and let your team focus on meaningful engagement.

* * *

## **How to Set Up the Transcript Generated Trigger**

### **Step 1: Create or Edit a Workflow**

Navigate to **Automation > Workflows**, and click **\+ Create Workflow**.

Choose _Start from Scratch_ or open an existing workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057196440/original/R2uoEFMc0ZtxbpO1rTnLxEj-TK2V0rYg3A.png?1761822044)

### **Step 2: Add the Transcript Generated Trigger**

Click **Add New Trigger** and select **Transcript Generated** from the trigger list.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057211567/original/fm0Aa6OyMltWIvGPQGTW52HBY3msd44aRw.png?1761828147)

### **Step 3: Enable Transcription**

Transcription must be enabled for the trigger to function.

- **Voice AI:** Enabled by default.

- **LC Phone:** Click the CTA link within the trigger configuration to enable transcription in **Phone Settings**.

- **IVR:** Click the CTA link within the trigger configuration to enable transcription in **IVR Settings**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057212911/original/h7sPks6XiNcRkTY01MgNQszmaO2-ztAr2Q.png?1761828696)

```
If transcription is not enabled, the workflow will display a prompt to go to settings and enable it.
```

### **Step 4: Apply Filters**

Fine-tune when your workflow fires by applying filters such as:

- **Call Type:** Choose Voice AI, IVR, or Normal Calls.

- **Call Direction (Optional):** Filter by inbound or outbound calls.

- **Call Duration (Optional):** Set a minimum duration to exclude short or incomplete calls (e.g., greater than 30 seconds).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057379567/original/Ram6nqDg85MgHTnOAxmFW0b_Sy5tQe2y7w.png?1762079186)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057379613/original/bq6MRmWvzwbBTGhW346UUSUgcpJAUvy0Fw.png?1762079354)

### **Step 5: Save and Publish**

Once configured, click **Save Trigger**, add your desired workflow actions, and toggle the workflow from _Draft_ to _Publish_ to activate it.

* * *

## **Frequently Asked Questions**

**Q: What happens if transcription fails or only partial audio is available?**

If a call fails to transcribe completely (e.g., poor audio quality, missing recording segment), the **Transcript Generated** trigger will not fire. HighLevel only fires this trigger when the system confirms a successful transcript is generated. For partial transcripts, the workflow fires normally, but missing text segments appear as blank in the {{full transcript}} custom value.

**Q: Can multiple workflows use the same transcript event simultaneously?**

Yes. The “Transcript Generated” event can trigger multiple workflows if each has its own condition (e.g., different filters or call directions). However, ensure filters don’t overlap unnecessarily to avoid redundant automations, such as duplicate emails being sent.

**Q: How is transcript data stored and secured?**

Transcripts are securely stored within HighLevel’s infrastructure and associated only with the corresponding contact record. Access is governed by user permissions. Admins can view, delete, or export transcripts. Transcript text is not exposed externally unless shared through workflow actions (like sending it via email or webhook).

**Q: Can this trigger work with calls imported or synced from third-party systems (like Twilio or custom Voice AI integrations)?**

No. The trigger only works for **calls recorded and transcribed within the HighLevel ecosystem**. Imported call logs or external system transcripts do not activate this workflow trigger because they bypass the internal transcription pipeline.

**Q: What happens if the same contact has multiple transcripts generated in a short period?**

Each transcript event (per call) fires independently. HighLevel processes them in chronological order, so simultaneous events are queued sequentially. This ensures that automation actions (like tagging or updating contact fields) execute consistently without data collision.

**Q: Is there a limit to how large a transcript can be for workflow processing?**

Yes. Workflow execution can reference transcripts up to **16 KB** when stored in custom fields. For longer conversations, use a **note field** or **file URL storage** (via webhook or CRM action) to avoid truncation. The workflow itself can still execute based on the full transcript, even if not stored in a field.

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

- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Workflow Trigger for New Prospects in the Prospecting Tool](https://help.gohighlevel.com/support/solutions/articles/155000004634-workflow-trigger-for-new-prospects-in-the-prospecting-tool)
- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted)
- [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006632-workflow-trigger-transcript-generated/hit)