---
url: "https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc"
title: " Email Authentication - DMARC : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. Email Authentication - DMARC

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

# Email Authentication - DMARC

Modified on: Thu, 25 Jul, 2024 at 8:44 AM

```
Starting February 2024, Gmail and Yahoo will require DKIM and DMARC authentication for emails. We strongly recommends all senders set up DKIM and DMARC.

For more details, check our blog post on Google and Yahoo authentication changes in 2024.
```

**TABLE OF CONTENTS**

- [What is DMARC?](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#What-is-DMARC?)
- [What is DMARC Record?](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#What-is-DMARC-Record?)
- [How does DMARC work?](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#How-does-DMARC-work?)
- [Resolving DMARC Email Failures for Users on LC Email Shared Domains](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc#Resolving-DMARC-Email-Failures-for-Users-on-LC-Email-Shared-Domains%3A)

## **What is DMARC?**

DMARC, or Domain-based Message Authentication Reporting and Conformance, is a technical tool that verifies emails by combining SPF and DKIM methods. It's free to use and helps prevent email fraud like phishing. Introduced in 2012, it enables domain owners to specify how unauthorized use of their email domains should be managed through a policy in the DMARC record (p=).

```
P = NONE
Monitors your email traffic. No further actions are taken.

P = QUARANTINE
Sends unauthorized emails to the spam folder.

P = REJECT
The final policy and the ultimate goal of implementing DMARC. This policy ensures that unauthorized email doesn’t get delivered at all.
```

* * *

## **What is DMARC Record?**

A DMARC record, housed in a TXT-type DNS entry named \_dmarc, outlines policies and preferences for email servers. It's composed of tags assigned with values separated by semicolons.

```
Here's an example of a basic DMARC record:
v=DMARC1; p=none;
```

**Here are the key tags used in setting up a DMARC record:**

**v (DMARC Version):**

- **Default:** DMARC1
- **Translation:** Denotes the DMARC protocol version. Must always be set as "DMARC1". If missing or incorrect, the entire DMARC record is ignored.

**p (Policy):**

- **Default:** none
- **Translation:** Specifies the action for emails failing DMARC checks.
  - none: Collects feedback without impacting existing flows.
  - quarantine: Treats suspicious emails, often directed to the spam folder.
  - reject: Rejects all failing emails outright.

**adkim (DKIM Alignment Mode):**

- **Default:** r
- **Translation:** Specifies the alignment mode for DKIM signatures.
  - "r" (Relaxed Mode): Allows DKIM domains sharing a common Organizational Domain to pass.
  - "s" (Strict Mode): Requires an exact match between DKIM and email header-From domains.

**aspf (SPF Alignment Mode):**

- **Default**: r
- **Translation**: Similar to adkim but for SPF authentication.
  - "r" (Relaxed Mode): Allows SPF domains sharing a common Organizational Domain to pass.
  - "s" (Strict Mode): Requires an exact match between SPF and email header-From domains.

**sp (Sub-domain Policy):**

- **Default:** p= value
- **Translation:** Allows explicit publishing of a policy for sub-domains under this DMARC record.

**fo (Forensic Reporting Options):**

- **Default**: 0
- **Translation**: Determines conditions for generating forensic reports.
  - "0": Generates reports if all underlying authentication mechanisms fail to produce a DMARC pass result.
  - "1": Generates reports if any mechanisms fail.
  - "d": Generates reports if DKIM signature fails.
  - "s": Generates reports if SPF fails.

**ruf (URI for Forensic Reports):**

- **Default**: none
- **Translation:** Specifies where to send Forensic reports (URIs in the form of "mailto:address@example.org").

**rua (URI for XML Feedback):**

- **Default**: none
- **Translation**: Specifies where to send XML feedback reports (URIs in the form of "mailto:address@example.org").

**rf (Reporting Format for Forensic Reports):**

- **Default:** afrf
- **Translation**: Determines the reporting format for individual Forensic reports.

**pct (Percentage):**

- **Default**: 100
- **Transla** tion: Specifies the percentage of email failures for which the policy should be applied. The policy must be "quarantine" or "reject" for the percentage tag to be applied.

**ri (Reporting Interval):**

- **Default**: 86400
- **Translation**: Sets the frequency of receiving aggregate XML reports.

Each tag serves a specific role in defining DMARC policies and mechanisms for authentication and feedback, ensuring email security and proper handling of failed checks.

For assistance in creating a DMARC record, utilizing a [DMARC generator tool](https://dmarcian.com/dmarc-record-wizard/) is recommended.

* * *

## **How does DMARC work?**

**Authentication**:

- SPF/DKIM Check:
  - Receiving servers verify SPF or DKIM authentication methods.
- Domain Alignment:
  - Validates if the SPF domain (Return-Path) or DKIM domain (d=) aligns with the "From" domain in the email header.
- DMARC Policy:
  - Extracts and enforces the DMARC policy from the DNS record of the "From" domain.

```
Example Configurations:

If SPF passes and aligns with the "From" domain, DMARC authentication passes.
`v=DMARC1; p=none; aspf=r;`

If DKIM passes and aligns with the "From" domain, DMARC authentication passes.
`v=DMARC1; p=none; adkim=s;`

If both SPF and DKIM fail, DMARC authentication fails.
`v=DMARC1; p=reject;`
```

**Alignment Modes:**

- Relaxed (r) Mode:
  - Allows subdomains in SPF/DKIM checks, comparing them to the "From" domain.
- Strict (s) Mode:
  - Requires exact matching of SPF/DKIM domains with the "From" domain.

**Reporting:**

- Aggregate Reports:
  - Include pass/fail results in periodic aggregate reports sent via specified email addresses using rua tag.
- Forensic Reports:
  - Detailed failure reports sent to specified addresses (ruf), but many providers avoid sending these due to sensitive information concerns.
- Reporting Interval (ri):
  - Determines the frequency of sending aggregate XML reports.

```
Example Configurations:

Sending aggregate reports every 24 hours:
`v=DMARC1; p=none; rua=mailto:postmaster@mydomain.com; ri=86400;`

Sending forensic reports every 7 days:
`v=DMARC1; p=none; ruf=mailto:postmaster@mydomain.com; ri=604800;`
```

**Conformance (Policy):**

- DMARC Policy (p):
  - Defines how servers handle failed DMARC checks.
- Percentage (pct):
  - Specifies the percentage of message traffic subject to DMARC verification.

```
Example Configurations:

Starting with a quarantine policy and 50% verification for testing:
`v=DMARC1; p=quarantine; pct=50;`

Later, switching to a reject policy and removing the pct tag for full enforcement: `v=DMARC1; p=reject;`
```

Each configuration serves to authenticate emails and define policies for handling failures while allowing flexibility in reporting and enforcement levels based on the sender's requirements and verification stages.

* * *

## **Resolving DMARC Email Failures for Users on LC Email Shared Domains**

```
DMARC is not required to send emails from the shared domains on LeadConnector email system.
```

When you switched to LC email system or not configured your own mailgun / SMTP all your email will be sent through LC shared domain.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029885740/original/XbxWJPF5hf31tJ4qc-FOom23fD_efkCL9A.jpg?1721914780)**

The error message says:

_"The domain in your from address (kate@gohighlevel.com) has a p=reject DMARC policy. Without a dedicated sending domain configured, most inbox providers will reject your messages, resulting in elevated bounces. To avoid elevated bounces, use company emails."_

Your actual DMARC record is: v=DMARC1; p=reject"

**To fix the issue, Temporarily change your DMARC record with your DNS to have a p=none policy**

The DMARC error message above has a p=reject or p=quarantine. This will prevent emails that fail DMARC to be sent to the Inbox folder. To make sure messages are delivered even if DMARC fails, you will want to change the policy in your DMARC to p=none with your DNS provider. Moving to a more relaxed policy is not recommended so this change should be temporary.

* * *

**ADDITIONAL RESOURCES:**

- [Achieving Compliance: Meeting Google and Yahoo's Email Sender Requirements in 2024](https://help.gohighlevel.com/support/solutions/articles/155000001634-achieving-compliance-meeting-google-and-yahoo-s-email-sender-requirements-in-2024)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)

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

- [What is LC Email?](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email)
- [Managing Default Unsubscribe Links in LC Email](https://help.gohighlevel.com/support/solutions/articles/48001225534-managing-default-unsubscribe-links-in-lc-email)
- [What is email Bounce Suspension, and how to avoid it](https://help.gohighlevel.com/support/solutions/articles/48001214786-what-is-email-bounce-suspension-and-how-to-avoid-it)
- [Email Authentication - DMARC](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc)
- [SSL Certificates for Dedicated LC Email Domains](https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains)

## Related Articles

- [Google Postmaster Tools](https://help.gohighlevel.com/support/solutions/articles/155000004150-google-postmaster-tools)
- [Achieving Compliance: Meeting Google and Yahoo's Email Sender Requirements in 2024](https://help.gohighlevel.com/support/solutions/articles/155000001634-achieving-compliance-meeting-google-and-yahoo-s-email-sender-requirements-in-2024)
- [Default Headers for Dedicated Sending Domains](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains)
- [Why Are My Emails Going To Spam?](https://help.gohighlevel.com/support/solutions/articles/48001063372-why-are-my-emails-going-to-spam-)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [Email Error Library for supported SMTPs](https://help.gohighlevel.com/support/solutions/articles/48001209322-email-error-library-for-supported-smtps)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc/hit)