---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains"
title: " Default Headers for Dedicated Sending Domains : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [LC Email Dedicated Domain and IP](https://help.gohighlevel.com/support/solutions/folders/155000000789)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email Dedicated Domain and IP](https://help.gohighlevel.com/support/solutions/folders/155000000789)
6. Default Headers for Dedicated Sending Domains

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

# Default Headers for Dedicated Sending Domains

Modified on: Wed, 29 Oct, 2025 at 8:16 AM

A “default header” provides a fallback From Name and From Email for outbound messages sent via a dedicated sending domain for all emails. This ensures deliverability and brand consistency.

* * *

**TABLE OF CONTENTS**

- [When to Use Default Headers](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#When-to-Use-Default-Headers)
- [Prerequisites](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#Prerequisites)
- [Setting Default Headers (From Name & From Email)](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#Setting-Default-Headers-(From-Name-&-From-Email))
- [How Default Headers Work in Practice](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#How-Default-Headers-Work-in-Practice)
- [Best Practices & Considerations](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#Best-Practices-&-Considerations)
- [Common Troubleshooting Scenarios](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains#Common-Troubleshooting-Scenarios)

* * *

## **When to Use Default Headers**

- **Fallback for DMARC Failures**: If a campaign’s “From” address does not align with your dedicated sending domain’s DKIM/SPF records, HighLevel will use default header so that the message is still authenticated.

- **Maintain Consistent Branding**: Even if a typo or misconfiguration causes a non-aligned “From,” recipients will see your brand’s domain in the From field rather than a rejected address.

- **Regulatory/Compliance Requirements**: Industries requiring strict email authentication (finance, healthcare, etc.) should configure default headers to avoid DMARC rejections or quarantines.


* * *

## **Prerequisites**

Before you can configure default headers, ensure that:

1. **You’re in a Sub-Account**

   - Only sub-accounts can add and manage dedicated sending domains and set default headers. Agency-level domains do not support per-sub-account default headers.
2. **Dedicated Sending Domain Is Added and Validated**

   - You have completed DNS setup (CNAME, DKIM, and SPF) for your custom sending domain (e.g., `email.yourbrand.com`).

   - HighLevel displays a green checkmark indicating your domain is validated under **Settings → Email Service → SMTP Service → Dedicated Domain and IP**

* * *

## **Setting Default Headers (From Name & From Email)**

You can set up default "From address and Email" for dedicated domains under your account only for the Sub-account created domains.

Navigate to **Sub-account Settings - Email Service -> SMTP Service -> Dedicated Domain and IP -> Set headers under dedicated domain.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044882641/original/l67IXG1nmKTdfTeM8aYyho5Bi4sdRCZDsw.png?1744290467)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044882742/original/u4kpWwg9k_Mdzc7Ts-PGYh3_0vTOcvXr5w.png?1744290526)

```
The designated header will be applied to emails sent through the dedicated domain when DMARC alignment fails.
```

## **How Default Headers Work in Practice**

1. **Campaign Configuration**

   - When creating a broadcast or workflow email, you can set a campaign-level “From Name” and “From Email.”

   - If you intentionally use a different “From Email” (e.g., `sales@differentdomain.com`) that does not align with your dedicated domain (`email.yourbrand.com`), DMARC will fail.
2. **DMARC Check & Fallback**

   - At send time, HighLevel checks DMARC alignment between the campaign’s “From” address and the sending domain’s DKIM/SPF records.

   - **If alignment passes**: The email goes out with the campaign’s chosen “From.”

   - **If alignment fails**: HighLevel use the default header you configured under that dedicated domain.
3. **Recipient Experience**

   - Recipients see a valid “From Name” and “From Email” that matches your authenticated sending domain.

   - The email remains DMARC-compliant and is less likely to be rejected or flagged as spam.

* * *

## **Best Practices & Considerations**

1. **Configure Default Headers Before Sending:** Always set up your fallback header prior to launching major campaigns. If DNS or DMARC misconfiguration occurs, your default header will kick in automatically.

2. **Monitor Replies:** The default “From Email” can be any address at your sending domain, but ensure mailboxes or aliases are monitored (e.g., `support@yourbrand.com` forwarding to the correct team).

3. **Test Before Scaling:** Send a small internal test using a non-aligned “From” address to confirm HighLevel defaults properly. Check both inbox placement and DMARC status.

4. **Understand Propagation Delays:** Changing DNS (especially DKIM/SPF/TXT records) can take up to 48 hours to fully propagate. Without default headers, messages sent during propagation may be rejected.

5. **Segregate by Sub-Account:** If you manage multiple brands or departments, create separate sub-accounts—each with its own dedicated domain and default headers—for isolated control.


* * *

## **Common Troubleshooting Scenarios**

| Issue | Possible Cause | Resolution |
| --- | --- | --- |
| **“Set headers” option is not visible** | You’re in an agency-level view or the domain is not validated under a sub-account. | Switch to the correct sub-account. Add/validate a dedicated domain in Settings → Email Service → SMTP Service → Dedicated Domain and IP. |
| **Emails still failing to send after fallback** | DNS records (DKIM/SPF) are incomplete or incorrectly formatted. | Double-check DNS entries for your sending domain. Use online DKIM/SPF validators. Wait for propagation. |
| **Fallback header not applied when expected** | Campaign “From” address aligns with the sending domain (even if unintended). | Verify the campaign’s “From Email” is genuinely non-aligned (e.g., domain mismatch). Check DMARC reports to confirm failures. |
| **Recipients see the wrong “From Name” or “From Email”** | The campaign or workflow may hard-code a display name that overrides expectations. | Edit the campaign/workflow “From Name” and “From Email.” Ensure fallback is correctly spelled and free of stray spaces. |
| **SSL certificate not issued for the sending domain** | Missing or incorrect CNAME/DNS records for domain validation. | In Settings → Dedicated Domain, click “Edit DNS Info” and follow the instructions exactly. Wait for propagation before retrying. |

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

- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)
- [Google Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-)
- [GoDaddy Dedicated Sending Domain Setu (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-)
- [Siteground Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)

## Related Articles

- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Domain Warmup: How It Works (Fixed-Stage Model)](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-)
- [What will be the order of Email Provider we will use to send emails?](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-)
- [Email Authentication - DMARC](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains/hit)