---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004691"
title: " Subscription Settings Failed Payment Retries for HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004691#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Orders, Subscriptions, and Transactions](https://help.gohighlevel.com/support/solutions/folders/155000000902)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004691#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Orders, Subscriptions, and Transactions](https://help.gohighlevel.com/support/solutions/folders/155000000902)
6. Subscription Settings - Failed Payment Retries

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

# Subscription Settings - Failed Payment Retries

Modified on: Tue, 2 Sep, 2025 at 11:19 AM

How to Set Up Automatic Retries for Failed Payments - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Set Up Automatic Retries for Failed Payments](https://www.youtube.com/watch?v=Lh8IzzkTa_s)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=Lh8IzzkTa_s&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:23
•Live

•

**TABLE OF CONTENTS**

- [What is Failed Payment Retry Configuration?](https://help.gohighlevel.com/support/solutions/articles/155000004691#What-is-Failed-Payment-Retry-Configuration?)
- [Key Benefits of Failed Payment Retry Configuration](https://help.gohighlevel.com/support/solutions/articles/155000004691#Key-Benefits-of-Failed-Payment-Retry-Configuration)
- [How to Configure Failed Payment Retries](https://help.gohighlevel.com/support/solutions/articles/155000004691#How-to-Configure-Failed-Payment-Retries)
- [Example Scenario](https://help.gohighlevel.com/support/solutions/articles/155000004691#Example-Scenario)
- [Supported Payment Providers](https://help.gohighlevel.com/support/solutions/articles/155000004691#Supported-Payment-Providers)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000004691#Frequently-Asked-Questions)

# **What is Failed Payment Retry Configuration?**

With the latest update, businesses can now configure automatic payment retries in case of a payment failure for subscriptions. This feature allows greater flexibility in managing payment failures and ensures a smoother subscription renewal process.

## **Key Benefits of Failed Payment Retry Configuration**

Configuring failed payment retries provides several advantages:

- **Customizable Retry Attempts**– Define up to 3 retries based on business needs, with configurable gaps of 1, 3, 5, or 7 days between each retry.

- **Default Retry Setup**– By default, the system is configured to attempt 3 retries with a gap of 1 day each, but this can be modified as needed.

- **Impact on Existing and New Subscriptions**– Changes in retry settings will apply to both new and existing subscriptions, ensuring uniformity across all transactions.

- **Subscription Handling on Failure**– If all retries fail, users have the option to either keep the subscription in an ‘Unpaid’ state or automatically move it to a ‘Cancelled’ state by selecting a checkbox in the settings.


## **How to Configure Failed Payment Retries**

Configuring payment retries is simple and can be done in a few steps:

1. **Navigate to Subscription Settings**– Go to`Payments > Settings > Subscription`in your account.

2. **Define Retry Attempts**– Select the number of retries (up to 3) based on your business requirements.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042231191/original/InXm5z2v6ePnNtu1kOWfhv6Kc4hKvEYwoA.png?1740504381)

3. **Set Retry Gaps**– Choose the gap duration between retries (1, 3, 5, or 7 days).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042231211/original/U7jBHLSHg9jX4ef-JIfXT2BL966335N1RA.png?1740504421)

4. **Modify Existing Configurations**– Any changes to retry settings will be applied to both new and ongoing subscription retries.

5. **Manage Subscription Status on Final Failure**– Enable or disable the option to move failed subscriptions to the ‘Cancelled’ state automatically.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042231228/original/pcfrThpO9U5E6fh0dkusXXOGQgOtUnL3QA.png?1740504467)

6. **Save Settings**– Once configured, save your settings to apply changes immediately.


## **Example Scenario**

If a subscription is set to ‘3 retries with a gap of 3 days for each retry’ and one retry has already been attempted, but before the second retry, the settings are updated to ‘2 retries with a gap of 3 and 5 days respectively,’ then:

- The second retry will occur after 5 days instead of 3.

- No third retry will take place.


## **Supported Payment Providers**

This feature is available for the following payment providers:

- **NMI**

- **Authorize.net**

- **Square**


* * *

## **Frequently Asked Questions**

**Q: How many retries can I configure for a failed payment?**

A: You can configure up to 3 retries, with gaps of 1, 3, 5, or 7 days between each retry.

**Q: Will changes in retry settings apply to existing subscriptions?**

A: Yes, changes will be applied to both new and ongoing subscriptions, including those already in the retry process.

**Q: What happens if all retries fail?**

A: You can choose to either keep the subscription in the ‘Unpaid’ state or automatically move it to the ‘Cancelled’ state by selecting the appropriate option in settings.

**Q: Where can I configure failed payment retries?**

A: Navigate to`Payments > Settings > Subscription`to access the retry configuration options.

**Q: Which payment providers support this feature?**

A: Currently, this feature is supported by NMI, Authorize.net, and Square.

* * *

## Related Articles

- [How to Set Up Subscription Payments](https://help.gohighlevel.com/support/solutions/articles/155000004064-create-or-schedule-subscriptions-and-send-invoice-within-contact-details-page)

- [Managing Payment Failures in Subscriptions](https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-)


## Next Steps

Ensure your failed payment retries are configured correctly to maintain seamless subscription payments. Navigate to`Payments > Settings > Subscription`and customize the retry settings based on your business needs today!

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

- [Payments - What is listed on the Subscriptions page?](https://help.gohighlevel.com/support/solutions/articles/48001225935-payments-what-is-listed-on-the-subscriptions-page-)
- [Subscription & Refund trigger for payments](https://help.gohighlevel.com/support/solutions/articles/155000002213-subscription-refund-trigger-for-payments)
- [Subscription Settings - Failed Payment Retries](https://help.gohighlevel.com/support/solutions/articles/155000004691-subscription-settings-failed-payment-retries)
- [Pause and Resume Subscriptions](https://help.gohighlevel.com/support/solutions/articles/155000004138-pause-and-resume-subscriptions)
- [Import Transactions and Orders using CSV files](https://help.gohighlevel.com/support/solutions/articles/155000005544-import-transactions-and-orders-using-csv-files)
- [How to Modify Existing Subscriptions](https://help.gohighlevel.com/support/solutions/articles/155000006066-how-to-modify-existing-subscriptions)

## Related Articles

- [What happens in case of a payment failure for a Subscription?](https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-)
- [Reselling - Paywall Payment Error Handling Improvements](https://help.gohighlevel.com/support/solutions/articles/155000006507-reselling-paywall-payment-error-handling-improvements)
- [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)
- [Payments - What is listed on the Subscriptions page?](https://help.gohighlevel.com/support/solutions/articles/48001225935-payments-what-is-listed-on-the-subscriptions-page-)
- [Authorize.net integration for processing payments](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)
- [How to make agency subscription payments with 3DS cards?](https://help.gohighlevel.com/support/solutions/articles/155000001685-how-to-make-agency-subscription-payments-with-3ds-cards-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004691)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004691-subscription-settings-failed-payment-retries/hit)