---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005131"
title: " Migrating International Numbers(Twilio to LC Phone) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005131#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005131#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Phone numbers](https://help.gohighlevel.com/support/solutions/folders/48000691614)
6. Migrating International Numbers(Twilio to LC Phone)

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

# Migrating International Numbers(Twilio to LC Phone)

Modified on: Mon, 11 Aug, 2025 at 5:39 AM

**Overview**

If you're attempting to migrate international Twilio numbers to LC Phone and the process appears stuck, this guide will walk you through the steps required to complete the migration **manually**. This is a temporary process until we release an upgraded version of the migration feature.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327391/original/HGQgiI84RMzA0lHZdWrT-hnh-uGiuGzbWw.png?1754908671)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051327183/original/vaj_MhszJm_4Mllnb8d3U0ted4pKffEhIg.png?1754908549)

* * *

## ✅ **Step-by-Step: Manual Migration Process**

### **1\.** **Migrate the Sub-Account to LC Phone**

Initiate the migration through the Phone Integration settings in your HighLevel account. You’ll see a status update like “Migration in Progress.”

> ? _Note: If the migration stalls, continue with the steps below._

* * *

### **2.****Create a Regulatory Bundle and Address - [**How to create Regulatory Bundle ?**](https://www.twilio.com/en-us/guidelines/regulatory)**

This is required for compliance with Twilio regulations:

- Navigate to your Twilio Console.

- Create a **Regulatory Bundle** for the country/region matching the phone number.

- Add a **Regulatory Address** associated with the bundle.

- Ensure the bundle is approved for the correct **Number Type** (e.g., Mobile, Local, Toll-Free).


* * *

### **3.******Request Key Details from HighLevel Support****

Reach out to HighLevel Support or your partner contact and request the following:

- **Gaining Account SID**

- **Regulatory Bundle SID**

- **Regulatory Address SID**


* * *

### **4\.** **Initiate a Manual Transfer in Twilio**

Use Twilio's support ticketing system to manually initiate the number move:

- Log in to your Twilio Console.

- Create a **Support Ticket** requesting number transfer from the current account to the provided **Gaining Account SID**.

- **CC:**`migration@leadconnectorhq.com` in the ticket.

- Include the LOA, Bundle SID, and Address SID in your request.


* * *

## ⚠️**Common Issues**

| Issue | Explanation |
| --- | --- |
| **"Migration in Progress" stuck** | Often occurs when regulatory requirements aren't completed. |
| **Missing Regulatory Approval** | The bundle must be fully approved before initiating manual migration. |
| **Wrong Number Type on Bundle** | Match the bundle to the number type (Local, Mobile, Toll-Free). |

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

- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)
- [How do I migrate my agency and sub-account over to LC Phone?](https://help.gohighlevel.com/support/solutions/articles/48001204027-how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Moving Phone Numbers across accounts (US and International)](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-across-accounts-us-and-international-)
- [Moving Phone Numbers: Migration Guide](https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide)
- [New Sub-Accounts List UI for $97 & $297 Agency Plans](https://help.gohighlevel.com/support/solutions/articles/155000005749-new-sub-accounts-list-ui-for-97-297-agency-plans)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005131)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005131-migrating-international-numbers-twilio-to-lc-phone-/hit)