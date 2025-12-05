---
url: "https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions"
title: " Best Practices for SMS deliverability and Avoiding SMS Restrictions : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Best Practices for SMS deliverability and Avoiding SMS Re...

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

# Best Practices for SMS deliverability and Avoiding SMS Restrictions

Modified on: Tue, 23 Sep, 2025 at 3:34 AM

**Overview**

This article outlines essential best practices to help you improve SMS deliverability and avoid carrier restrictions. By following these guidelines, you can ensure your messages reach your audience reliably and stay compliant with carrier policies.

* * *

**TABLE OF CONTENTS**

- [Error and Opt-out Rate Monitoring](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#Error-and-Opt-out-Rate-Monitoring)
- [What should we do when we get a violation email?](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#What-should-we-do-when-we-get-a-violation-email?)
- [What are error and opt-out rates and good to have a threshold?](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#What-are-error-and-opt-out-rates-and-good-to-have-a-threshold?)
- [What do I do to get the sub-account suspension removed early?](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#What-do-I-do-to-get-the-sub-account-suspension-removed-early?)
- [How to prevent future SMS suspension](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions#How-to-prevent-future-SMS-suspension)

* * *

# **Error and Opt-out Rate Monitoring**

- We are focused on helping our customers deliver trusted communications. To make sure that the carrier does not block or suspend the account permanently based on bad usage.

- We will be monitoring the delivery rate of the overall account and be taking proactive measures(as mentioned below) to keep the delivery rate in check:




  - **Violation Email**-We will send out an email notification as soon as the subaccount hits the error rate of 6% and opt-out rate of 2%.
  - **Temporary Account Restriction -** We will send out a suspension email as the subaccount hits the error rate of 10% and opt-out rate of 3%.

```
Please Note: As soon as the account hits the temporary suspension, all upcoming outbound SMS will fail till 00:00 AM UTC.
```

* * *

# **What should we do when we get a violation email?**

1. Stop all your workflows, campaigns, triggers, and/or bulk actions to contacts who have not explicitly opted in to receive messages from the sub-account.

2. Enable and customise the Opt Out language and SenderID message as per your use case so that all the upcoming messages are not flagged.

3. Please discuss this with your client to ensure that no bulk communication or message blasts or cold prospecting message campaigns are sent in the near future before we receive your reply to this ticket.

* * *

# **What are error and opt-out rates and good to have a threshold?**

- A High Opt-Out Rate indicates that **contacts receiving your messages have objected, generated complaints, or marked your SMS as spam**. A good opt-out rate is typically in the range of 0—1%. Once the opt-out rate hits 2%, the sub-account will be locked for sending text messages for 24 hours.

- A High Delivery Error Rate indicates that you are **sending SMS to contacts that are no longer in service, are unreachable, or use a non-SMS-capable device such as a landline**. This may also mean that external carrier filters are refusing to deliver your SMS due to bad sending behavior in the past. A good error rate is typically in the range of 0—6%. Once the error rate hits 10%, the sub-account will be locked for sending text messages for 24 hours.

* * *

# **What do I do to get the sub-account suspension removed early?**

- The sub-account suspension will be lifted in 24 hours. However, If the sub-account is permanently suspended. Please refer to the article [Why is your account suspended](https://help.gohighlevel.com/en/support/solutions/articles/48001207676) to unsuspend the sub-account.

* * *

# **How to prevent future SMS suspension**

The sub-account should be able to send SMS after 00:01 AM UTC the next day after you received the non-compliant email. You can check the best practices below on how to reduce the error rate:

1\. **Add Opt Out language (reply STOP/ Cancel to unsubscribe)** in all the first SMS sent to a new contact -

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053555932/original/omypVzpD4ZIFIAoXgerZHkjna_VbAoHDZQ.png?1757587829)

2\. **Add Sender information (Introduction of yourself/company)**  in all the first SMS sent to a new contact-

3\. Do not send messages to SMS-incapable devices like landlines, **Enable the Number intelligence** for this. This feature will look up the number before sending out the message and enable and temporary DND on the contact.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053555971/original/BzX61Sff9VPH5IMu3UyqRuZVxlLfb7ASwQ.png?1757587862)

4\. **Avoid sending URLs shortened using a public URL shortener**

Using public URL shorteners like bit.ly or tinyurl.com can harm SMS deliverability. Carriers—especially T-Mobile and AT&T—flag these as high risk due to their association with spam and phishing.

- **T-Mobile** prohibits URL cycling and multiple redirects. Messages using such tactics may be blocked.

- **AT&T** outright blocks public shorteners.


**Best Practices:**

- Use **custom** or **branded** short URLs linked to your business domain.

- Limit redirects to **no more than one**, and avoid cloaking link destinations.

- When possible, include the **full URL** to boost transparency (even if it takes extra characters).

Improving your URL practices can prevent filtering and ensure your messages reach their audience.

5\. **Make sure the Business Profile, A2P Brand and campaign are registered:** As the messaging world is moving towards the direction where without these registrations no messages will be delivered. You can view the trust centre tab once the sub-account country is set to US:

- [Trust Center Support Doc](https://help.gohighlevel.com/support/solutions/articles/48001225526-lc-phone-system-trust-center)

- [A2P Campaign Registration Best Practices](https://help.gohighlevel.com/support/solutions/articles/48001229784-a2p-10dlc-campaign-approval-best-prac)

If the country is not set to US, you can still use the system following the best practices so that the delivery rate is high and the SMS is not flagged. A2P campaign is just a more enhanced safety net for delivery but that doesn't mean you cannot use the system without it.

```
Note - Campaign Verification can take up to 1 week if it is not approved after a week, please raise a support ticket with us to escalate the request to TCR.
```

6. **For future website form opt-in setup, please include a checkbox to ensure the lead gives consent when filling out** the form if that's where the leads opt-in.

**Below are examples of Web form Opt-In flow.**

When **Phone Number** field is **Mandatory** in Web form OPT-IN.

- Consent checkboxes should be separated for both Marketing and Non-Marketing Messages.
- Consent **checkboxes cannot be pre-selected** and **should be optional** when **Phone Number is required.**
- SMS notifications cannot be forced in the form. Meaning **you cannot require BOTH consent and the phone number to proceed.**
- **Privacy Policy** and **TnC** at footer.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053553662/original/iBGY55JFy31DvcfgnDu5_game_nyPB1SmQ.png?1757586670)

When **Phone Number** field not **Mandatory** in Web form OPT-IN.

- Consent checkbox not required when Phone Number field is not mandatory.
- **Privacy Policy** and **TnC** at footer.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053553965/original/1jHn9-YOPznYisf4_S9772eWc4kkWtdzgw.png?1757586746)

7\. **Good to Have:** The first message should have the source of how your leads opt in.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000318313/original/CdbUV4IqS1HJ_BfgCsqAOrDLVhYquft4Yw.png?1685694447)

8\. **Good to Have:** Add Opt-in language so contacts are actively double opt-in via sms and web form checkbox (reply 1 to subscribe)

Also, sharing a [Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941) which will help you further on this.

**Related Article**

- **[Understanding the Potential Delivery Issues of Text Messages with Shortened URLs](https://help.gohighlevel.com/support/solutions/articles/48001240115-understanding-the-potential-delivery-issues-of-text-messages-with-shortened-urls)**

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

- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)
- [Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-)
- [Error: Not a Valid SMS-Capable “From” Number](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-not-a-valid-sms-capable-from-number)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)

## Related Articles

- [How to Configure SMS Compliance Settings](https://help.gohighlevel.com/support/solutions/articles/155000004684-how-to-configure-sms-compliance-settings)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [Getting Started - Launch an SMS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000005065-getting-started-launch-an-sms-campaign)
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)
- [Set Up Automatic Opt-Out and Sender Info Updates in Messaging Compliance](https://help.gohighlevel.com/support/solutions/articles/155000006771-set-up-automatic-opt-out-and-sender-info-updates-in-messaging-compliance)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions/hit)