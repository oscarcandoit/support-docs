---
url: "https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-"
title: " Moving Phone Numbers across accounts (US and International) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Phone numbers](https://help.gohighlevel.com/support/solutions/folders/48000691614)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Phone numbers](https://help.gohighlevel.com/support/solutions/folders/48000691614)
6. Moving Phone Numbers across accounts (US and International)

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

# Moving Phone Numbers across accounts (US and International)

Modified on: Fri, 19 Sep, 2025 at 10:20 AM

This guide explains how to move numbers from LC Phone to Twilio, from Twilio to LC, and from LC to LC when the agencies are different. It uses a simple two-step process handled through HighLevel Support (no Twilio ticket required).

```
IMPORTANT: Same process for all three cases:

Presently, LC→Twilio, Twilio→LC, and LC→LC (different agencies) follow the same process. Customers provide the appropriate Twilio Account SID—the gaining SID when moving into Twilio or the losing SID when moving out of Twilio—plus the destination sub-account ID and the phone number(s). For International numbers, provide the Regulatory Bundle SID and Address SID instead of the Account SID. HighLevel Support coordinates the migration end-to-end.
```

```
IMPORTANT: You no longer need to open a Twilio Support ticket. HighLevel Support coordinates migrations end-to-end.
```

* * *

**TABLE OF CONTENTS**

- [Before Moving Your Number](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Before-Moving-Your-Number)
- [Moving  US Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Moving-%C2%A0US-Phone-Numbers)
  - [Step 1: Gather Twilio credentials (when required)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Step-1%3A-Gather-Twilio-credentials-(when-required))
  - [Step 2: Obtain the Location ID consisting the phone number (or where to transfer the phone number)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Step-2%3A-Obtain-the-Location-ID-consisting-the-phone-number-(or-where-to-transfer-the-phone-number))
  - [Step 3: Open a HighLevel Support ticket](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Step-3%3A-%E2%80%8BOpen-a-HighLevel-Support-ticket)
- [Moving International (Non-US) Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Moving-International-(Non-US)-Numbers)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-#Frequently-Asked-Questions)

* * *

## **Before Moving Your Number**

Ensure you have the following information and access:

**US numbers:**

- **Twilio Account SID** (gaining for LC→Twilio, losing for Twilio→LC)

- **Destination sub-account ID** (where the number will live)

- **Phone number(s)** in E.164 format (e.g., +1XXXXXXXXXX)

**International numbers:**

- **Regulatory Bundle SID** (instead of Account SID)

- **Address SID**

- **Destination sub-account ID** (if applicable)

- **Phone number(s)** with country


* * *

## **Moving  US Phone Numbers**

The three moves— **LC→Twilio**, **Twilio→LC**, and **LC→LC (different agencies)**—follow the **same flow**. First, collect the Twilio credentials that prove ownership/target for your specific case; then open a **HighLevel Support** ticket with your details and a cutover window. We’ll coordinate the migration end-to-end; you don’t need a Twilio ticket.

```
Before you start:

US numbers: Have the relevant Twilio Account SID (gaining for LC→Twilio, losing for Twilio→LC), the destination sub-account ID, and the phone number(s).

International numbers: Have the Regulatory Bundle SID, Address SID, and the phone number(s) (include country).
```

### **Step 1:** Gather Twilio credentials (when required)

These can be found in the Twilio Console under the Account Info section.

- **LC → Twilio**: Gaining Twilio Account SID (destination Twilio).

- **Twilio → LC**: Losing Twilio Account SID (current Twilio).

- **LC → LC (different agencies)**: You don't need Twilio credentials in this case.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054160307/original/o5oSPy13Wa2SCDElTiah8rlKOI8s74LdwQ.jpeg?1758293602)

### **Step 2:** Obtain the Location ID consisting the phone number (or where to transfer the phone number)

Navigate to Settings → Business Profile in your HighLevel account to locate the Sub-account ID (also known as Location ID) of the LC Phone Sub-account holding the phone number(s).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054160913/original/MuHzpQF5_gS-jMkoIU47bJNg2hvRs4tLqA.png?1758293832)

### **Step 3:** Open a HighLevel Support ticket

This ticket kicks off the migration—include the numbers, the relevant gaining/losing Twilio Account SID, the destination sub-account ID, and your preferred cutover window. HighLevel Support schedules and coordinates everything, then confirms when the number is live (no Twilio ticket needed).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045972735/original/ruMK9XOl0NIlCzM2UaF8MuauyxRqZpVpiw.gif?1746109415)

* * *

## **Moving International (Non-US) Numbers**

International moves follow the same two-step flow as US moves, but instead of a Twilio Account SID, you’ll use Regulatory credentials. Collect the Regulatory Bundle SID and Address SID that apply to the number’s country and number type (local or toll-free), then follow the same process as mentioned above.

**Pre-checks (recommended):** Ensure the bundle is approved & current, documents are valid, and any country-specific sender ID/registration (e.g., Alphanumeric Sender ID, local onboarding, emergency address) is in place for the destination.

```
Note: We do have a Migration guide for reference. For more, visit Moving Phone Numbers: Migration Guide
```

* * *

## **Frequently Asked Questions**

**Q. How long will my migration take?**

1–2 business days from the time HighLevel Support has all required IDs (gaining/losing Twilio Account SID, destination sub-account ID) and the number list. We’ll confirm the cutover window and notify you when the number is live.

**Q. Can I move multiple numbers at once?**

Yes. Include a single list (CSV or inline) in your ticket and validate each number after cutover.

**Q. Do A2P/Toll-Free approvals transfer automatically?**

Not always. After the move, confirm numbers are attached to the correct **brand/campaign** or **Toll-Free verification**.

**Q. Do past recordings/voicemails migrate?**

No. Future assets follow the number after cutover. Download any historical items you need to retain.

**Q. What if I need to roll back?**

Reply to the ticket immediately during the cutover window; feasibility depends on the carrier and timing.

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

- [Moving Phone Numbers across accounts (US and International)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-)
- [Moving Numbers across Sub-Accounts (Same Agency)](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts-same-agency-)
- [Buying a Twilio Number in Your Own Twilio Account Connected to HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001219820-buying-a-twilio-number-in-your-own-twilio-account-connected-to-highlevel)
- [Overview of Phone Number Configuration Options](https://help.gohighlevel.com/support/solutions/articles/48001229976-overview-of-phone-number-configuration-options)
- [How to buy a toll free number inside GHL?](https://help.gohighlevel.com/support/solutions/articles/48001204834-how-to-buy-a-toll-free-number-inside-ghl-)
- [Porting your phone number (non-Twilio number) to a location/subaccount](https://help.gohighlevel.com/support/solutions/articles/48001211919-porting-your-phone-number-non-twilio-number-to-a-location-subaccount)

## Related Articles

- [Moving Phone Numbers: Migration Guide](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide)
- [Moving Numbers across Sub-Accounts (Same Agency)](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts-same-agency-)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [How do I migrate my agency and sub-account over to LC Phone?](https://help.gohighlevel.com/support/solutions/articles/48001204027-how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-)
- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)
- [Migrating International Numbers(Twilio to LC Phone)](https://help.gohighlevel.com/support/solutions/articles/155000005131-migrating-international-numbers-twilio-to-lc-phone-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-/hit)