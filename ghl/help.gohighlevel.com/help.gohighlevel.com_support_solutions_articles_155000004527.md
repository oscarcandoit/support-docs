---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004527"
title: " Message throughput (MPS) and Trust Scores for A2P 10DLC in the US : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004527#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [A2P registration](https://help.gohighlevel.com/support/solutions/folders/155000000021)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004527#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [A2P registration](https://help.gohighlevel.com/support/solutions/folders/155000000021)
6. Message throughput (MPS) and Trust Scores for A2P 10DLC i...

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

# Message throughput (MPS) and Trust Scores for A2P 10DLC in the US

Modified on: Thu, 6 Feb, 2025 at 5:13 AM

Under the new [A2P 10DLC service](https://help.gohighlevel.com/en/support/solutions/articles/48001238163) for sending messages via 10-digit long code numbers in the United States, there are changes to how message sending throughput is allocated. A2P 10DLC message throughput in the US will now be determined based on your Brand type, Campaign type (use case), and Trust Score (for Standard Brands). This guide gives an overview of these changes, and how throughput is allocated.

T-Mobile will also impose daily message limits toward their subscribers. This is separate from message sending throughput. See [T-Mobile daily message limits for long code messaging with A2P 10DLC for details.](https://help.twilio.com/articles/1260804800549-T-Mobile-daily-message-limits-for-long-code-messaging-with-A2P-10DLC)

**TABLE OF CONTENTS**

- [Throughput overview](https://help.gohighlevel.com/support/solutions/articles/155000004527#Throughput-overview)
- [What is a Trust Score?](https://help.gohighlevel.com/support/solutions/articles/155000004527#What-is-a-Trust-Score?)
- [How is throughput (MPS) allocated for A2P 10DLC?](https://help.gohighlevel.com/support/solutions/articles/155000004527#How-is-throughput-(MPS)-allocated-for-A2P-10DLC?)
- [Current status of message throughput in A2P 10DLC](https://help.gohighlevel.com/support/solutions/articles/155000004527#Current-status-of-message-throughput-in-A2P-10DLC)
- [Declared Use Cases: Message Throughput](https://help.gohighlevel.com/support/solutions/articles/155000004527#Declared-Use-Cases%3A-Message-Throughput)
- [Mixed / Marketing Use Cases: Message Throughput](https://help.gohighlevel.com/support/solutions/articles/155000004527#Mixed-/-Marketing-Use-Cases%3A-Message-Throughput)
- [Sole Proprietor Use Cases: Message Throughput](https://help.gohighlevel.com/support/solutions/articles/155000004527#Sole-Proprietor-Use-Cases%3A-Message-Throughput)

* * *

# **Throughput overview**

Message sending throughput for SMS is measured in **message segments per second (MPS).** Each message segment consists of up to 160 GSM-7 encoded characters, so an SMS with more characters and/or different character encoding can be comprised of multiple segments. For full details, see [What The Heck Is A Segment.](https://www.twilio.com/en-us/blog/what-the-heck-is-a-segment-html?_gl=1%2Ayvfi1g%2A_gcl_au%2AMzAzODAyMTg3LjE3MzU1NTg2MDQ.%2A_ga%2AMjg3Nzk4OTM0LjE3MzUwNDAxMTI.%2A_ga_RRP8K4M4F3%2AMTczNzcxODExOC40OC4xLjE3Mzc3MjIwNDEuMC4wLjA.)

In the past, MPS for US long code numbers was set at a standard 1 MPS per number, shared across all mobile carriers. This rate is changing under the new A2P 10DLC service. Going forward, MPS throughput will be determined based on the sender's Brand type, Campaign type (use case), and Trust Score (for Standard Brands).

# **What is a Trust Score?**

A Trust Score is a score assigned during **Standard Brand** registration with The Campaign Registry (TCR - the 3rd party that administers the US wireless carriers' new registration system). When an A2P Customer Profile registration for US 10DLC messaging is submitted, we send this information to TCR for review. HighLevel also submits the Brand for "secondary vetting," which assigns a score from 0 to 100 and gives access to higher default throughput and message limits toward US mobile carriers.

The Standard Brand registration process uses a reputation algorithm to review specific criteria relating to your company, and then assigns a “Trust Score”. In short, the higher your Trust Score, the higher your messaging throughput (MPS). **Note: Sole Proprietor** and **Low Volume Brands** do not go through "secondary vetting", are not assigned a Trust Score. Throughput is fixed based on their corresponding use case.

**Trust Scores are static and do not automatically change over time.**

T-Mobile will also impose daily message limits toward their subscribers. See [T-Mobile daily message limits for long code messaging with A2P 10DLC for complete details.](https://help.twilio.com/articles/1260804800549-T-Mobile-daily-message-limits-for-long-code-messaging-with-A2P-10DLC)

**What if I am not satisfied with my Trust Score? Can I appeal?**

Low Trust Scores can result from the following:

- Data discrepancies in the information you submitted in your A2P registration, such as a different address than the one associated with your official business registration number (e.g. EIN).
- A small brand footprint

In general, smaller organizations and those with less business presence will receive lower scores.

If you receive a low Trust Score, HighLevel will do our best to offer guidance on possible causes or resolutions for a low score. If this applies to you, please contact HighLevel support.

For more information about resubmitting brands, please see our product documentation on Resubmitting Standard/LVS Brands.

# **How is throughput (MPS) allocated for A2P 10DLC?**

A set maximum MPS is granted for each of your registered campaigns (use cases). This MPS is shared across all US/Canada long code numbers allocated to your campaign, and all wireless carriers. Whether you choose to send messages over a single number to a specific carrier, or split up messages over a collection of local numbers to multiple carriers, the same MPS limit applies.

You will also need to factor in Account Based Rate Limiting, which is an upper MPS limit set at the account level, combined across all senders. For example, if you have an Account Based Rate Limit of 100 MPS, with three A2P 10DLC Campaigns approved on the same account for 75 MPS each, you'll still be limited to 100 MPS combined across all Campaigns. This will not prevent you from sending at a combined 225 MPS to the HighLevel Messaging API in this scenario, but each message segment that exceeds that 100 per second will be placed in queue.

Specific Use Cases (what carriers call “Declared” Campaigns) may receive higher MPS for the same Trust Score than a “Mixed” or Marketing type Use Case.

For a full list of Use Case and Campaign types as defined by carriers, and their respective per-message fees and other considerations, see [List of Campaign Types and Use Case Types for A2P 10DLC registration.](https://help.gohighlevel.com/en/support/solutions/articles/155000000235)

**Is Toll-Free SMS throughput affected?**

No. Toll-Free SMS is not affected by the throughput changes described in this article, nor is it subject to the new campaign registration requirements. A US Toll-Free number has a total of 3 MPS toward all US and Canada carriers by default. You can request higher message throughput for a US Toll-Free number by contacting our Sales team.

**Is messaging to countries other than the United States affected?**

No.

# **Current status of message throughput in A2P 10DLC**

The Trust Score you receive (for Standard Brands), and the Campaign type you select, will dictate the throughput of your long code numbers toward AT&T, Verizon, and T-Mobile. Please review the respective table below based on your selected Campaign type for specific MPS information.

# **Declared Use Cases: Message Throughput**

A Declared use case means you have chosen one specific non-marketing use case (examples: 2FA, Account Notifications, etc.). For a full list, see List of Campaign Types and Use Cases.

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Trust Score** | **Total SMS MPS toward major\* US networks** | **AT&T SMS MPS** | **T-Mobile SMS MPS** | **Verizon SMS MPS** |
| 75 - 100 | 225 | 75 | 75 | 75 |
| 50 - 74 | 120 | 40 | 40 | 40 |
| 1 - 49 | 12 | 4 | 4 | 4 |
| 0 (Low Volume Standard Brand - Skipped Secondary Vetting) | 12 | 4 | 4 | 4 |

\*Your messages toward the US Cellular mobile network will be based on your major network throughput, up to a maximum of 8 MPS; your MPS toward all other **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS per phone number.

# **Mixed / Marketing Use Cases: Message Throughput**

Mixed / Marketing use cases can be registered for customers who want to send messages for multiple use cases from the same set of numbers, or for marketing. Different throughput levels are allocated for Mixed / Marketing use cases than for Declared use cases.

Please note, in addition to the "Mixed / Marketing" use case, there is a separate Campaign use case designated as **"Low Volume Mixed"** – this option has a lower monthly fee than a standard Campaign, but is fixed at the lowest throughput tier below, regardless of your Trust Score.

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| ****Trust Score**** | **Total SMS MPS toward major US networks\*** | **AT&T SMS MPS** | **T-Mobile SMS MPS** | **Verizon SMS MPS** |
| 75 - 100 | 225 | 75 | 75 | 75 |
| 50 - 74 | 120 | 40 | 40 | 40 |
| 1 - 49 | 12 | 4 | 4 | 4 |
| 0 (Low Volume Standard Brand - Skipped Secondary Vetting) | 12 | 4 | 4 | 4 |
| Low Volume Mixed Campaign (regardless of Trust Score) | 3.75 | 1.25 | 1.25 | 1.25 |

\*Your messages toward the US Cellular mobile network will be based on your major network throughput, up to a maximum of 8 MPS; your MPS toward all other **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS per phone number.

# **Sole Proprietor Use Cases: Message Throughput**

Sole Proprietor Brands are available for individuals or small businesses without a tax ID sending low-volume messaging. Sole proprietor brands are limited to 1 Campaign, 1 phone number per Campaign, and a throughput limit of 1 MPS.  Sole Proprietor Campaigns do not have a Trust Score, and have a fixed throughput as well as limits of 1000 msg/day (T-Mobile) and 15 msg/minute (AT&T) per Campaign. If more throughput is desired, the business should be registered as a Standard Brand.

|     |     |     |     |
| --- | --- | --- | --- |
| **Total SMS MPS toward major US networks\*\*** | **AT&T SMS MPS** | **T-Mobile SMS MPS** | ****Verizon SMS MPS**** |
| 2.25 | 0.25 | 1 per number | 1 per number |

\*Your messages toward all **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS.

\\*\\* A Sole Prop Campaign can contain up to 1 US/Canada long code numbers. All numbers will share 0.25 MPS toward AT&T, but each number will get 1 MPS toward T-Mobile and 1 MPS toward Verizon. This adds up to a maximum of 2.25 MPS toward the major US networks.

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

- [Email OTP Verification for Secure A2P Brand Registration](https://help.gohighlevel.com/support/solutions/articles/155000005776-email-otp-verification-for-secure-a2p-brand-registration)
- [Understanding A2P 10DLC Messaging Fees: Registration, Monthly, and Carrier Costs](https://help.gohighlevel.com/support/solutions/articles/155000005200-understanding-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs)
- [Updated Messaging Policies for Canadian 10DLC Numbers: A2P Registration Requirements](https://help.gohighlevel.com/support/solutions/articles/155000004915-updated-messaging-policies-for-canadian-10dlc-numbers-a2p-registration-requirements)
- [Campaign Rejection Reasons and Resolutions](https://help.gohighlevel.com/support/solutions/articles/155000004746-campaign-rejection-reasons-and-resolutions)
- [Campaign Registration Step by Step Guide and FAQs](https://help.gohighlevel.com/support/solutions/articles/155000004539-campaign-registration-step-by-step-guide-and-faqs)
- [Message throughput (MPS) and Trust Scores for A2P 10DLC in the US](https://help.gohighlevel.com/support/solutions/articles/155000004527-message-throughput-mps-and-trust-scores-for-a2p-10dlc-in-the-us)

## Related Articles

- [Understanding A2P 10DLC Messaging Fees: Registration, Monthly, and Carrier Costs](https://help.gohighlevel.com/support/solutions/articles/155000005200-understanding-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs)
- [What is A2P 10 DLC- Brand and Campaign Registration](https://help.gohighlevel.com/support/solutions/articles/155000002380-what-is-a2p-10-dlc-brand-and-campaign-registration)
- [A2P Standard Brand Registration for 10DLC](https://help.gohighlevel.com/support/solutions/articles/48001225526-a2p-standard-brand-registration-for-10dlc)
- [A2P 10DLC Campaign Use Cases](https://help.gohighlevel.com/support/solutions/articles/155000000235-a2p-10dlc-campaign-use-cases)
- [A2P 10DLC Brand Approval Best Practices](https://help.gohighlevel.com/support/solutions/articles/155000000508-a2p-10dlc-brand-approval-best-practices)
- [Unregistered 10DLC Message Fees Will Increase; Register Numbers by June 1, 2023 to Avoid Higher Unregistered Messaging Fees](https://help.gohighlevel.com/support/solutions/articles/48001238099-unregistered-10dlc-message-fees-will-increase-register-numbers-by-june-1-2023-to-avoid-higher-unreg)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004527)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004527-message-throughput-mps-and-trust-scores-for-a2p-10dlc-in-the-us/hit)