---
url: "https://help.gohighlevel.com/support/solutions/articles/48001153968"
title: " Number Intelligence: number validity, detect spam calls and look up unknown caller name : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001153968#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001153968#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [General](https://help.gohighlevel.com/support/solutions/folders/48000665896)
6. Number Intelligence - Number Validation, Spam Detection, ...

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

# Number Intelligence - Number Validation, Spam Detection, and Unknown Caller

Modified on: Tue, 29 Apr, 2025 at 9:10 AM

Number Intelligence is a bundle of best-practice phone number checks. It ensures that using the phone for calls and texts works as expected, keeps costs under control, and protects reputation.

* * *

**TABLE OF CONTENTS**

- [What Is Number Intelligence](https://help.gohighlevel.com/support/solutions/articles/48001153968#What-Is-Number-Intelligence)
- [Benefits of Number Intelligence](https://help.gohighlevel.com/support/solutions/articles/48001153968#Benefits-of-Number-Intelligence)
- [How to Enable or Disable Number Intelligence](https://help.gohighlevel.com/support/solutions/articles/48001153968#How-to-Enable-or-Disable-Number-Intelligence)
- [Number Intelligence Pricing](https://help.gohighlevel.com/support/solutions/articles/48001153968#Number-Intelligence-Pricing)
- [Call Handling with Spam Detection](https://help.gohighlevel.com/support/solutions/articles/48001153968#Call-Handling-with-Spam-Detection)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001153968#Frequently-Asked-Questions)

* * *

## **What Is Number Intelligence**

Number Intelligence is a bundle of functions that clarify details about how phone calls and SMS are expected to work:

- **Spam Detection:** detects and flags risky incoming calls from unknown USA numbers. If flagged, calls are tagged as “Spam Likely” in call logs and conversations. This information can be used in automations and by your team to improve operations.

- **Name Lookup:** fetches the name of unknown USA callers. With the caller name the CRM will have complete records and your team can personalize call handling.

- **Number Validation:** verifies the validity of a number worldwide before sending the first SMS to ensure deliverability. Validation is only performed when an SMS is queued before sending, not during Contact Import/Creation. If the number is identified as a landline number, we will not send even the first message to the carriers.

* * *

## **Benefits of Number Intelligence**

- **Reduce wasted time** because your team won't respond to spam calls.

- **Increase call answer rates** by redirecting your team's attention from spam calls to real calls.

- **Improve customer satisfaction** by greeting incoming leads with their name.

- **Increase SMS delivery rate** and maintain healthy metrics by ensuring messages are only sent to valid numbers.

* * *

## **How to Enable or Disable Number Intelligence**

To enable or disable Number Intelligence on the web app, go to Settings > Phone Numbers > Advanced Settings > Number Intelligence. Toggle the switch to enable or disable the feature. When enabled, **all three components are activated/deactivated together**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037843831/original/akHzXuztsYanBhBsWVlinDTVUZb9X4rygA.png?1733424186)

* * *

## **Number Intelligence Pricing**

Number Intelligence is charged to the Agency Wallet at these prices. The Subaccount wallet is charged according to the SaaS Rebilling you setup.

- **Spam Detection:** $0.005 per call from unknown U.S. numbers. This checks all incoming calls from unknown USA numbers. "Unknown" means the number is not saved to a contact.

- **Name Lookup:** $0.01 per call from unknown U.S. numbers. This looks up the name for all incoming calls from unknown USA numbers. "Unknown" means the number is not saved to a contact that has a completed name field. So this will trigger when the number is not saved OR when it is a contact but the name field is empty.

- **Number Validation:** $0.005 per validation. This applies to all numbers worldwide and is not charged when the phone number is added to the contact but before the first SMS is sent. If it fails, the SMS is not sent.

* * *

## **Call Handling with Spam Detection**

Incoming calls that fail Spam Detection are marked “Spam Likely” on the web dialer when you receive the call and shown with a tag in the Contacts tab for transparency.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037834499/original/DPOZ1lBojoeHqHEG3SzqyjtLwv181zY5-A.png?1733413915)

* * *

## **Frequently Asked Questions**

**Q: What happens if I disable Number Intelligence?**

When disabled, spam calls, name lookups, and SMS validations will no longer be performed. Calls and SMS will proceed as usual, but spam may not be flagged, names on unknown callers will not show up. SMS delivery rate may reduce because you may end up trying to send SMS to phone numbers incapable of receiving SMS.

**Q: Can I customize which features of Number Intelligence are enabled?**

As of Dec 5th, 2024, all three features (Spam Detection, Name Lookup, and Number Validation) are activated or deactivated together.

**Q: Does this feature work outside USA?**

Spam Detection and Name lookup currently applies only to calls from phone numbers from USA. The location of the sub-account or their phone number does not matter. SMS validation works worldwide.

**Q: How does the system handle spam calls?**

Spam calls are flagged as “Spam Likely” and can still appear in call logs and conversations. You can later add these numbers to an inbound DND list for further blocking.

**Q: Will I be notified of spam calls?**

Yes, spam calls will appear in your call logs and the Contacts tab, tagged as “Spam Likely.”

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

- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [Physical VoIP Deskphones (SIP)](https://help.gohighlevel.com/support/solutions/articles/155000005487-physical-voip-deskphones-sip-)
- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)
- [Local Presence Dialing with the HighLevel Phone System](https://help.gohighlevel.com/support/solutions/articles/155000005896-local-presence-dialing-with-the-highlevel-phone-system)
- [Local Presence Dialing in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000006736-local-presence-dialing-in-the-mobile-app)
- [Remediate 'Spam Likely' on your Caller ID using Free Caller Registry](https://help.gohighlevel.com/support/solutions/articles/155000005891-remediate-spam-likely-on-your-caller-id-using-free-caller-registry)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001153968)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001153968-number-intelligence-number-validation-spam-detection-and-unknown-caller/hit)