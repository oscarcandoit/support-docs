---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide"
title: " Moving Phone Numbers: Migration Guide : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [General](https://help.gohighlevel.com/support/solutions/folders/48000665896)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [General](https://help.gohighlevel.com/support/solutions/folders/48000665896)
6. Moving Phone Numbers: Migration Guide

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

# Moving Phone Numbers: Migration Guide

Modified on: Fri, 19 Sep, 2025 at 9:25 AM

This article helps you move an existing phone number to the right place so calls and SMS keep working with HighLevel. Use the decision tree below to choose your path, then follow the steps.  Use this guide to:

- Understand what you’ll need for **US** vs **International** numbers

- See how the **two-step** process works at a glance.

- Jump to the correct **case article** for concise, step-by-step instructions


```
IMPORTANT: You no longer need to open a Twilio Support ticket. HighLevel Support coordinates migrations end-to-end.
```

* * *

**TABLE OF CONTENTS**

- [Moving phone numbers](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Moving-phone-numbers)
- [Case 1:  LC → Twilio](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Case-1%3A-%C2%A0LC-%E2%86%92-Twilio)
- [Case 2: Twilio → LC (LeadConnector)](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Case-2%3A-Twilio-%E2%86%92-LC-(LeadConnector))
- [Case 3: LC → LC (sub-accounts in different agencies)](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Case-3%3A-LC-%E2%86%92-LC%C2%A0(sub-accounts-in-different-agencies))
- [Case 4: LC → LC (sub-accounts in same agency)](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Case-4%3A-LC-%E2%86%92-LC-(sub-accounts-in-same-agency))
- [Case 5: Port a non-Twilio phone number into HighLevel (LC)](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Case-5%3A-Port-a-non-Twilio-phone-number-into-HighLevel-(LC))
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide#Frequently-Asked-Questions)

* * *

## **Moving phone numbers**

This guide covers all number-move possibilities in HighLevel—LC→Twilio, Twilio→LC, LC→LC (same agency), LC→LC (different agencies), and porting a non-Twilio carrier number into LC—and explains the essentials in one place: you’ll gather the right identifiers (US: Twilio Account SID, gaining for LC→Twilio, losing for Twilio→LC—plus the destination sub-account ID; International: Regulatory Bundle SID and Address SID), and open a HighLevel Support ticket; we manage coordination end-to-end, there may be a brief cutover interruption.

Collect the required IDs and number(s), then open a HighLevel Support ticket with those details and your preferred cutover window. We coordinate the migration and confirm when traffic is live. After completion, place quick inbound/outbound call and SMS tests.  We cover five cases:

1. LC (LeadConnector) → Twilio

2. Twilio → LC (LeadConnector)

3. LC → LC (both sub‑accounts in the different agencies)

4. LC → LC (sub‑accounts in same agency)

5. Porting a non‑Twilio phone number into HighLevel

```
Before you start:

US numbers: Have the relevant Twilio Account SID (gaining for LC→Twilio, losing for Twilio→LC), the destination sub-account ID, and the phone number(s).

International numbers: Have the Regulatory Bundle SID, Address SID, and the phone number(s) (include country).
```

* * *

## **Case 1:  LC → Twilio**

Use this when you’re moving a number from LeadConnector (LC) to your own Twilio. **For US numbers**, include the gaining Twilio Account SID, the destination subaccount (if used), and the phone number(s).

For **International numbers**, provide the Regulatory Bundle SID and Address SID instead of the Account SID, plus the phone number(s). Open a HighLevel Support ticket with these details and your preferred cutover window; we’ll coordinate the migration and confirm once traffic is live on Twilio.

For more, refer to [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

* * *

## **Case 2: Twilio → LC (LeadConnector)**

Use this when you’re moving a number from your Twilio into LeadConnector (LC). For **US numbers**, include the losing Twilio Account SID, the destination HighLevel sub-account ID, and the phone number(s).

For **International numbers**, include the Regulatory Bundle SID and Address SID instead of the Account SID, plus the phone number(s). Open a HighLevel Support ticket with those details and your preferred cutover window; we’ll handle the move and let you know when it’s ready to test.

For more, refer to  [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

* * *

## **Case 3: LC → LC** **(sub-accounts in different agencies)**

Use this when you’re moving a number between two different HighLevel agencies. Provide the relevant Twilio Account SID for US moves (or Regulatory Bundle SID + Address SID for International), the destination agency and sub-account ID, and the phone number(s). Open a HighLevel Support ticket with these details and your preferred cutover window; we’ll coordinate the inter-agency move and confirm when the number is live in the destination account.

For more, refer to  [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

```
IMPORTANT: Presently, Case 1 (LC→Twilio), Case 2 (Twilio→LC), and Case 3 (LC→LC — agency is different) follow the same process. Customers only need to provide the appropriate Twilio Account SID—the gaining SID when moving into Twilio or the losing SID when moving out of Twilio—plus the destination sub-account ID and the phone number(s). HighLevel Support will coordinate the migration end-to-end. For international numbers, provide the Regulatory Bundle SID and Address SID instead of the Account SID.
```

* * *

## **Case 4: LC → LC (sub-accounts in same agency)**

Use this when you’re transferring a number between two LC sub-accounts inside one HighLevel agency. Inside HighLevel, the Move Numbers tool (Settings → Phone Integration) lets you pick the source number(s), choose the destination sub-account, and complete the transfer. It supports LC Phone↔LC Phone and transfers involving Twilio-connected sub-accounts under the same Twilio master, with notes on common blockers like mismatched Twilio masters or missing regulatory bundles/addresses; if the built-in tool fails for LC Phone→LC Phone, contact HighLevel Support with the source and destination location IDs so we can assist.

For more, refer to  [Moving Numbers across sub-accounts](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts)

* * *

## **Case 5: Port a non-Twilio phone number into HighLevel (LC)**

Use this when your number is with a non-Twilio carrier and you want it managed in LeadConnector (LC). Gather the number(s) and any carrier paperwork requested in the linked guide, then open a HighLevel Support ticket with your desired cutover window. We’ll manage the porting process and notify you when it’s ready to test.

For more, refer to [Porting your phone number (non-Twilio number) to a location/subaccount](https://help.gohighlevel.com/support/solutions/articles/48001211919-porting-your-phone-number-non-twilio-number-to-a-location-subaccount)

* * *

## **Frequently Asked Questions**

**Q. Will my contacts, conversations, or analytics move with the number?**

No. The migration changes the number ownership/routing only. Export/download data you need to keep before cutover.

**Q. Do past call recordings and voicemails migrate?**

No. Future recordings/voicemails follow the number after cutover. Download any historical assets you need to retain.

**Q. Do A2P/Toll-Free approvals transfer automatically?**

Not always. After the move, confirm your numbers are attached to the correct **brand/campaign** or **Toll-Free verification**.

**Q. Can I move multiple numbers at once?**

Yes. Include a single list (CSV or inline) in your ticket and validate each number after cutover.

**Q. What if I need to roll back?**

Reply to the ticket immediately during the window; rollback options depend on the carrier and timing.

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

- [Number Intelligence - Number Validation, Spam Detection, and Unknown Caller](https://help.gohighlevel.com/support/solutions/articles/48001153968-number-intelligence-number-validation-spam-detection-and-unknown-caller)
- [How to use Custom CSS to hide the Twilio error banner](https://help.gohighlevel.com/support/solutions/articles/48001232032-how-to-use-custom-css-to-hide-the-twilio-error-banner)
- [Setting up webhooks to receive incoming calls, messages and status updates for calls (for Twilio users)](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user)
- [Call Forwarding to Your HighLevel Phone Number](https://help.gohighlevel.com/support/solutions/articles/155000004201-call-forwarding-to-your-highlevel-phone-number)
- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)
- [How to Create and Use Call Scripts in Web & App Dialers](https://help.gohighlevel.com/support/solutions/articles/155000004935-how-to-create-and-use-call-scripts-in-web-app-dialers)

## Related Articles

- [Moving Phone Numbers across accounts (US and International)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-)
- [Moving Numbers across Sub-Accounts (Same Agency)](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts-same-agency-)
- [How do I migrate my agency and sub-account over to LC Phone?](https://help.gohighlevel.com/support/solutions/articles/48001204027-how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [Migrating International Numbers(Twilio to LC Phone)](https://help.gohighlevel.com/support/solutions/articles/155000005131-migrating-international-numbers-twilio-to-lc-phone-)
- [How to Disable LC Phone System for Subaccount/Location (LC to Twilio)](https://help.gohighlevel.com/support/solutions/articles/48001231698-how-to-disable-lc-phone-system-for-subaccount-location-lc-to-twilio-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide/hit)