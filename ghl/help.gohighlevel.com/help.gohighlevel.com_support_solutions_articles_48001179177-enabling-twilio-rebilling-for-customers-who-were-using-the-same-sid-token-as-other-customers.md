---
url: "https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers"
title: " Enabling Twilio Rebilling For Customers Who Were Using The Same SID/Token As Other Customers : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
4. [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [SaaS Configurator](https://help.gohighlevel.com/support/solutions/48000453216)
   - [Saas Mode](https://help.gohighlevel.com/support/solutions/folders/48000676654)
6. Enabling Twilio Rebilling For Customers Who Were Using Th...

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

# Enabling Twilio Rebilling For Customers Who Were Using The Same SID/Token As Other Customers

Modified on: Mon, 16 Sep, 2024 at 12:21 PM

This help article provides detailed instructions for enabling Twilio rebilling for customers who were previously using the same SID and token as other customers. It addresses the process of separating and configuring individual Twilio accounts to ensure accurate and distinct billing for each customer. By following the outlined steps, you'll be able to successfully transition from a shared Twilio account setup to a rebilling system, improving billing accuracy and client account management. The article is designed to help you manage this transition smoothly and ensure each customer's Twilio usage is tracked and billed appropriately.

**TABLE OF CONTENTS**

- [Step 1: Log into your Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#Step-1%3A-Log-into-your-Twilio-account-%3E-click-the-Gear-Icon-%3E-select-sub-accounts-%3E-click-the-red-+-icon-to-create-a-new-sub-account-and-name-it-to-match-the-client-you-want-to-activate-Twilio-Rebilling-for)
- [Step 2: Log into your HighLevel account](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#Step-2%3A-Log-into-your-HighLevel-account-%3E-go-to-Agency-Settings-%3E-Twilio-%3E-scroll-down-to-your-client-%3E-click-the-three-dots-icon-to-the-right-of-their-account-name-%3E-select-)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers#Related-Articles)

* * *

In order for Twilio Rebilling to work, your customer's sub-account in HighLevel needs to be connected to a corresponding sub-account in your Twilio account.

**If the client you want to activate rebilling for was using the same SID/Token as another client**, you'll need to follow the following steps before activating Twilio Rebilling in SaaS mode:

## **Step 1:** Log into your Twilio account > click the Gear Icon > select sub-accounts > click the red + icon to create a new sub-account and name it to match the client you want to activate Twilio Rebilling for

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960554/original/nWDvCQNZrK642hnp_Q1X5d9yqGz3og9j-Q.jpg?1726507199)

## **Step 2:** Log into your HighLevel account > go to Agency Settings > Twilio > scroll down to your client > click the three dots icon to the right of their account name > select "Update Credentials" and replace the SID and Auth Token values with the new SID and Token values from the new sub-account in your Twilio account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960573/original/8xoTXozHJbk99WD5h7bwGZ5MGxA-dT4qOQ.jpg?1726507231)

You can obtain the new SID and Token by logging into your Twilio account > click the gear icon at the top right > select Sub-accounts > Click the name of your client and you will see those two fields:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960592/original/rD-zcXx_yWF_Q7qNgq2IVHMjx9bYGY7Ykw.jpg?1726507259)

* * *

# **Frequently Asked Questions**

- **How can I verify that each customer’s Twilio billing is accurately reflected after the transition?**



To verify that each customer’s Twilio billing is accurate after transitioning from a shared SID and token, review the billing reports and usage statistics in both HighLevel and Twilio dashboards. Compare these reports to ensure that charges are correctly allocated to each customer’s individual account. Regular monitoring and cross-checking of these details can help ensure that billing remains accurate.

- **Can I revert to the shared SID and token setup if I encounter issues with the new configuration?**



Reverting to the shared SID and token setup is possible but not recommended if it affects billing accuracy and account management. If you encounter issues with the new configuration, it’s advisable to troubleshoot and resolve the problems rather than reverting. If needed, consult HighLevel or Twilio support for guidance on resolving specific issues before considering a reversion.


* * *

# **Related Articles**

- [Enabling Twilio Rebilling For Cu](https://help.gohighlevel.com/support/solutions/articles/48001178719-enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account) stomers Who Want Use Their Own Twilio Account

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

- [SaaS Mode - Full Setup Guide + FAQ](https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq)
- [Activate SaaS Mode, Request Payment, and Configure Phone Rebilling](https://help.gohighlevel.com/support/solutions/articles/48001177740-activate-saas-mode-request-payment-and-configure-phone-rebilling)
- [SaaS Mode Sub-Accounts Are Not Being Generated](https://help.gohighlevel.com/support/solutions/articles/48001183981-saas-mode-sub-accounts-are-not-being-generated)
- [SaaS User Level Permissions Vs Sub-Account Level Permissions](https://help.gohighlevel.com/support/solutions/articles/48001184431-saas-user-level-permissions-vs-sub-account-level-permissions)
- [Using Stripe Checkout Pages For SaaS Mode Plans](https://help.gohighlevel.com/support/solutions/articles/48001187056-using-stripe-checkout-pages-for-saas-mode-plans)
- [Convert Existing Sub-Account to SaaS Mode Subscription Plan](https://help.gohighlevel.com/support/solutions/articles/48001188055-convert-existing-sub-account-to-saas-mode-subscription-plan)

## Related Articles

- [Enabling Twilio Rebilling For Customers Who Want Use Their Own Twilio Account](https://help.gohighlevel.com/support/solutions/articles/48001178719-enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account)
- [Email Re-Billing on the Unlimited (297/2970) and Pro (497/4970) Plans](https://help.gohighlevel.com/support/solutions/articles/48001188579-email-re-billing-on-the-unlimited-297-2970-and-pro-497-4970-plans)
- [Season of AI Promotion Ending Information & FAQ's](https://help.gohighlevel.com/support/solutions/articles/155000004420-season-of-ai-promotion-ending-information-faq-s)
- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [SaaS Mode - Full Setup Guide + FAQ](https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq)
- [Activate SaaS Mode, Request Payment, and Configure Phone Rebilling](https://help.gohighlevel.com/support/solutions/articles/48001177740-activate-saas-mode-request-payment-and-configure-phone-rebilling)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers/hit)