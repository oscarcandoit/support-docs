---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots"
title: " Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
6. Conversation AI: Snapshot Support - How to Snapshot Fully...

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

# Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots

Modified on: Thu, 5 Jun, 2025 at 12:27 PM

This article will show you how to create a snapshot of fully configured Conversation AI Bots, including all prompts, actions, and settings. Snapshots make it easy to deploy the same bot across multiple sub-accounts with full consistency and minimal effort.

**TABLE OF CONTENTS**

- [What is the Conversation AI Bot Snapshot Feature?](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#What-is-the-Conversation-AI-Bot-Snapshot-Feature?)
- [Key Benefits of Conversation AI Bot Snapshots](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#Key-Benefits-of-Conversation-AI-Bot-Snapshots)
- [How to Create a Snapshot with Bots](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#How-to-Create-a-Snapshot-with-Bots)
- [Conversation AI Snapshot Options & Behaviors](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#Conversation-AI-Snapshot-Options-&-Behaviors)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#Frequently-Asked-Questions)
- [Next Steps](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots#Next-Steps)

* * *

### **What is the Conversation AI Bot Snapshot Feature?**

The Conversation AI Bot Snapshot feature allows users to clone entire bots—including prompts, actions, and configurations—into a reusable snapshot. This eliminates the need to manually recreate bots across sub-accounts and ensures consistency in customer interactions, training data, and bot logic.

### **Key Benefits of Conversation AI Bot Snapshots**

Creating snapshots of your bots can streamline setup across accounts and reduce human error.

- Capture full bot configurations, including settings, prompts, and actions.

- Eliminate repetitive bot setup in every sub-account.

- Maintain consistency in tone and capabilities across all client accounts.

- Automatically set the imported bot as the primary bot (if one doesn’t already exist).

- Include all bot training data (Web Crawler URLs and FAQs).

- Choose how to handle existing bots in the destination—overwrite or skip them.


### **How to Create a Snapshot with Bots**

To replicate bots across sub-accounts, follow these steps to create a snapshot that includes your Conversation AI configurations.

1. Navigate to the **Account Snapshots** tab in your left-hand navigation menu.

2. Click **Create New Snapshot**.

3. Select the **source sub-account** that contains the bot you want to snapshot.

4. Enter a descriptive **name** for the snapshot.

5. Scroll to the **Conversation AI** section.

6. Review the bots listed. This section will include:

   - Bot names

   - Bot Training Web Crawler URLs

   - Custom Bot Responses (FAQs)
7. Once reviewed, click **Create Snapshot**.


### **Conversation AI Snapshot Options & Behaviors**

Knowing what gets copied and how import rules work ensures a smoother bot migration process.

**Primary Bot Auto-Assignment**

If the destination sub-account doesn’t already have a primary bot, the imported bot from the snapshot will automatically be set as the primary.

**Conflict Handling**

If a bot with the same name already exists in the destination sub-account, you’ll have two options:

- **Overwrite** – Replace the existing bot with the one from the snapshot.

- **Skip** – Keep the existing bot and ignore the one from the snapshot.


**What’s Included in the Snapshot?**

- Complete bot structure: all actions and prompt-response mappings.

- Bot settings and configurations.

- Bot Training Web Crawler URLs.

- Custom FAQ data created via the Bot Training tab.


* * *

### **Frequently Asked Questions**

**Q: What if a bot with the same name already exists in the destination sub-account?**

During import, you’ll be prompted to overwrite the existing bot or skip the new one.

**Q: Will my prompt and action logic be preserved?**

Yes, the snapshot preserves all flows, actions, and responses exactly as configured.

**Q: Can I change the primary bot after importing a snapshot?**

Yes, if the snapshot bot doesn’t become the primary, you can manually assign it as primary from the Conversation AI settings.

**Q: Does this include training data like FAQs and Web Crawler links?**

Yes. All training data—including URLs and FAQs—are included in the snapshot.

**Q: Can I edit a snapshot later?**

No, snapshots are immutable. You must create a new snapshot if you make changes to the original bot.

* * *

### **Next Steps**

- After importing the snapshot, verify that the bot is functioning properly in the new sub-account.

- Manually assign it as the primary bot if it’s not automatically selected.

- Test the bot’s training data to ensure accurate responses.

- Continue building or modifying the bot for specific account needs using the **Bot Training** and **Bot Flow Builder** tools.


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

- [Using Conversation AI on Mobile (HighLevel & LeadConnector)](https://help.gohighlevel.com/support/solutions/articles/155000005184-using-conversation-ai-on-mobile-highlevel-leadconnector-)
- [Bot Status for Individual Contacts](https://help.gohighlevel.com/support/solutions/articles/155000004096-bot-status-for-individual-contacts)
- [Guided Form Based Setup for Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000005382-guided-form-based-setup-for-conversation-ai)
- [Conversation AI Agents Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000005427-conversation-ai-agents-dashboard)
- [Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots)
- [Cancellation and Rescheduling of Appointments in Form Based Bots](https://help.gohighlevel.com/support/solutions/articles/155000005503-cancellation-and-rescheduling-of-appointments-in-form-based-bots)

## Related Articles

- [Setting Up Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)
- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [Primary vs Non-Primary Conversation AI Bots](https://help.gohighlevel.com/support/solutions/articles/155000004414-primary-vs-non-primary-conversation-ai-bots)
- [Managing Granular Permissions For Conversation AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000006054-managing-granular-permissions-for-conversation-ai-agents)
- [Conversations AI Bots can now Respond to Images](https://help.gohighlevel.com/support/solutions/articles/155000006537-conversations-ai-bots-can-now-respond-to-images)
- [Conversation AI - Transfer Bot Action](https://help.gohighlevel.com/support/solutions/articles/155000005371-conversation-ai-transfer-bot-action)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots/hit)