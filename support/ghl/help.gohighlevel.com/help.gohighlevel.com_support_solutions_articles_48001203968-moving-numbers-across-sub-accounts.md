---
url: "https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts"
title: " Moving Numbers across Sub-Accounts (Same Agency) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Phone numbers](https://help.gohighlevel.com/support/solutions/folders/48000691614)
6. Moving Numbers across Sub-Accounts (Same Agency)

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

# Moving Numbers across Sub-Accounts (Same Agency)

Modified on: Fri, 26 Sep, 2025 at 8:36 AM

This guide shows how to move phone numbers between sub‑accounts inside a single Agency using the built‑in Move Numbers tool in Settings → Phone Integration. It covers LC Phone → LC Phone and Twilio → Twilio (same master account) moves, plus common errors and what to do if the in‑app move isn’t available (see [Moving Phone Numbers: Migration Guide](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide)).

* * *

**TABLE OF CONTENTS**

- [What is Move Numbers?](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#What-is-Move-Numbers?)
- [Before You Begin](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Before-You-Begin)
- [Move Numbers Between Sub‑Accounts](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Move-Numbers-Between-Sub%E2%80%91Accounts)
  - [Step 1: Move Numbers](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Step-1%3A%C2%A0Move-Numbers)
  - [Step 2: Select Source and Destination Sub-account and Phone Numbers to Move](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Step-2%3A-Select-Source-and-Destination-Sub-account-and-Phone-Numbers-to-Move)
- [Troubleshooting & Known Limitations](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Troubleshooting-&-Known-Limitations)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts#Frequently-Asked-Questions%E2%80%8B)

* * *

## **What is Move Numbers?**

Move Numbers is an in‑app workflow in Settings → Phone Integration that reassigns existing phone numbers from a **source** sub‑account to a **destination** sub‑account **within the same Agency**. Eligibility at a glance:

- **LC Phone ↔ LC Phone (same Agency):** Supported in-app.

- **Twilio ↔ Twilio (same Master Twilio account):** Supported in-app.

- **Different Master Twilio accounts:** Not supported in-app—contact **Twilio Support**.

- **Geography:** The in-app tool currently supports **US & Canada** numbers. For other countries, please open a **HighLevel Support** ticket.

- **A2P:** A2P status is at the sub‑account level and **does not move** with the phone number; reattach the correct brand/campaign after moving.


* * *

## **Before You Begin**

- Make sure you have admin access to the **source** and **destination** sub‑accounts.

- Identify the **destination Location ID** (a.k.a. Sub‑account ID): **Settings → Business Profile**.

- Confirm which phone system the number uses today:

  - **LC Phone** (LeadConnector)

  - **Twilio** connected at the Agency level

* * *

## **Move Numbers Between Sub‑Accounts**

### **Step 1:** Move Numbers

Navigate to the **Agency Settings → Phone Integration.** Under Sub-account Settings **,** click on **Move Numbers**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054686537/original/1dFVtkd41G6bPk1bHpYSwn3bBHjHlTSbGg.png?1758893164)

### **Step 2:** Select Source and Destination Sub-account and Phone Numbers to Move

Choose the destination sub‑account (search by name or paste the Location ID).  Select the phone number(s) you want to move.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054686910/original/pPuOpFCGTIs7tpQeQM2smfPcuSnqgEMocQ.png?1758893369)**

```
Please Note: Review the summary and click Move Numbers to start the transfer. Numbers will appear in the destination sub‑account once complete. After the move, re‑check number‑level settings (forwarding, recordings, whispers, etc.). Verify call/SMS flows, automations, and user assignments as needed.
```

* * *

## **Troubleshooting & Known Limitations**

If the **Move Numbers** action is unavailable or fails, common causes include:

1. **Different Twilio master accounts:** Numbers under a different Twilio master can’t be moved in‑app. Contact Twilio Support in this case.

2. **Missing regulatory configuration (international):** Some countries (e.g., AU +61) require approved **Regulatory Bundles** and an **Address SID** in the **destination**. Configure those first, then follow the relevant migration guide.

3. **Provider mismatch:** If you’re converting **Twilio ↔ LC Phone**, follow the dedicated [conversion articles](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide) rather than the in‑app move.

4. **Country support (US & Canada in-app):** The in-app tool currently moves **US & Canada** numbers. For other countries, please create a **HighLevel Support** ticket.


* * *

## **Frequently Asked Questions**

**Q. Can I move multiple numbers at once?**

Yes—select multiple numbers in **Move Numbers**.

**Q. Do I need to contact Twilio?**

Not for in‑app sub‑account moves. For inter‑Agency moves or provider conversions, follow the linked guides and contact HighLevel Support.

**Q. Do A2P/Toll‑Free approvals transfer automatically?**

After the move, verify the number is attached to the correct brand/campaign or Toll‑Free verification in the destination.

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
- [Moving Phone Numbers across accounts (US and International)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-)
- [How do I migrate my agency and sub-account over to LC Phone?](https://help.gohighlevel.com/support/solutions/articles/48001204027-how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [How to Disable LC Phone System for Subaccount/Location (LC to Twilio)](https://help.gohighlevel.com/support/solutions/articles/48001231698-how-to-disable-lc-phone-system-for-subaccount-location-lc-to-twilio-)
- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts-same-agency-/hit)