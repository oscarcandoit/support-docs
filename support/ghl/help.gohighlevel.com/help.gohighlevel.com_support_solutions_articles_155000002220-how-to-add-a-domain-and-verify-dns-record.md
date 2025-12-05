---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record"
title: " Add and Verify Domain DNS Records in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. How to Add a Domain and Verify DNS Record

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

# How to Add a Domain and Verify DNS Record

Modified on: Tue, 16 Sep, 2025 at 7:48 AM

Adding and verifying your domain is an essential step to ensure secure and reliable email delivery. This process protects your brand reputation, prevents spoofing, and increases the chances of your emails landing in the inbox instead of spam. This article will guide you through adding your domain, verifying DNS records, and troubleshooting common issues.

* * *

**TABLE OF CONTENTS**

- [What You’ll Need Before You Start](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#%E2%80%8B%E2%80%8BWhat-You%E2%80%99ll-Need-Before-You-Start)
- [Step 1: Add Your Domain](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Step-1%3A-Add-Your-Domain)
- [Step 2: Verify Your Domain](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Step-2%3A-Verify-Your-Domain)
  - [What DNS Record Types Are Needed & Why](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#What-DNS-Record-Types-Are-Needed-&-Why)
  - [Verifying Your Domain from the Menu](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Verifying-Your-Domain-from-the-Menu)
  - [Checking Your DNS Records](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Checking-Your-DNS-Records)
  - [Option 1: Auto‑Configure via DNS Provider Integration](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Option-1%3A-Auto%E2%80%91Configure-via-DNS-Provider-Integration)
  - [Option 2: Manual DNS Setup](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Option-2%3A-Manual-DNS-Setup)
    - [General Setup Guidelines](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#General-Setup-Guidelines)
  - [Examples by DNS Provider](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Examples-by-DNS-Provider)
- [After Verification](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#After-Verification)
- [Troubleshooting Common Issues](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Troubleshooting-Common-Issues)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record#Frequently-Asked-Questions)

* * *

## **What You’ll Need Before You Start**

Before setting up your domain, make sure you have the following in place:

- Access to your DNS provider’s control panel (Cloudflare, GoDaddy, AWS Route 53, Namecheap, Google Domains, etc.).

- The domain or subdomain you want to use for sending emails.

- Credentials or permissions to add/edit DNS records.

- A basic understanding of DNS record types (SPF, DKIM, DMARC, CNAME, TXT, MX).

* * *

## **Step 1: Add Your Domain**

Adding your domain is the first step toward authentication.

### **Access Dedicated Domains**

Navigate to **Settings > Email Services > Dedicated Domain & IP**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797876/original/QX6-2-QGltHkBgYk-vToXdQZ3T9ECRHWoA.png?1757947789)

### **Add Domain**

Once you are inside, "Dedicated Domains" menu, Click **\+ Add Domain** option at the top right corner.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797941/original/WXqTJ3QH216r_zijFc0qvVi1OVoxJolaeA.png?1757947835)

### **Add Domain Details**

Enter the domain or subdomain you want to use. (We recommend using a subdomain, such as **mail.yourdomain.com**, for better deliverability.)  Click **Add & Verify**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798546/original/rK-bp-KmrNeVDP10evTY13GeeuO5z0gdnw.png?1757948031)

* * *

## **Step 2: Verify Your Domain**

Verification ensures your emails are authenticated and trusted by inbox providers. This involves setting up DNS records for your domain.

### **What DNS Record Types Are Needed & Why**

- **SPF (Sender Policy Framework):** Authorizes which servers can send emails on behalf of your domain.

- **DKIM (DomainKeys Identified Mail):** Adds a digital signature to your emails to prove they haven’t been altered.

- **DMARC (Domain-based Message Authentication, Reporting & Conformance):** Enforces authentication policies and provides reporting on email delivery.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798663/original/XPwCzaCP9KTSX6rsPHTQj5cGnCYT_-PaoA.png?1757948102)

### **Verifying Your Domain from the Menu**

When your domain is added, you can head over to the **three-dot menu** next to it and click **Verify domain**. This is a quick way to tell the system, “I’ve set up my DNS records—go ahead and check them now.”

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053799931/original/nKdX5oSwO0xNf_65ogodozDF6X7vMVHnEw.png?1757948731)

### **Checking Your DNS Records**

After you hit **Verify domain**, you’ll see a list of all the DNS records your domain needs (SPF, DKIM, CNAME, MX, and DMARC). Each one shows whether it’s verified, and you can use the handy **Copy** buttons to paste the values into your DNS provider. Once everything checks out, your domain will be marked as verified.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053867806/original/pRQ-Oa9_dyPPKdZ6l7IEC4rZYNnrihAhJA.png?1758026774)

* * *

### **Option 1: Auto‑Configure via DNS Provider Integration**

This is the simplest method if your DNS provider is supported.

1. After adding your domain, click **Continue**.
2. HighLevel will detect your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap).
3. Log in and authorize (Lead Connector) to configure your DNS records automatically.
4. Once completed, your domain will be marked as **Verified**.

**Note:** If your DNS provider is unsupported, you’ll be prompted to set up records manually.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797760/original/1B4vPtUrNt_fg8-Q06IDWSn4UYSWCAXQgw.png?1757947702)

* * *

### **Option 2: Manual DNS Setup**

If auto‑configure isn’t available, you’ll need to add DNS records manually. HighLevel will provide the exact records you need.

#### General Setup Guidelines

- **Type:** Add records as TXT, CNAME, or MX as instructed.

- **Name/Host:** For root domains, use “@”. For subdomains (e.g., mail.yourdomain.com), enter just the subdomain (e.g., “mail”).

- **Value:** Copy and paste the values exactly as shown in HighLevel.

- **TTL:** Set to 5 minutes where possible.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797699/original/O1xyu5hnbNCZBVZ1ca3aJEQcYMRYLOJJbw.png?1757947671)

* * *

### **Examples by DNS Provider**

**Cloudflare**

1. Log into Cloudflare.

2. Go to your domain’s **DNS** settings.

3. Add the records provided by HighLevel (TXT, CNAME, MX).


**GoDaddy**

1. Log into GoDaddy.

2. Open **Domains > Manage DNS**.

3. Click **Add** and enter each record.


**AWS Route 53**

1. Open the AWS console.

2. Go to **Route 53 > Hosted Zones**.

3. Create the necessary record sets.


**Namecheap**

1. Log into Namecheap.

2. Go to **Domain List > Manage > Advanced DNS**.

3. Add the DNS records from HighLevel.


**Google Domains**

1. Log into Google Domains.

2. Select your domain and go to **DNS settings**.

3. Add the DNS records accordingly.


* * *

## **After Verification**

Once records are verified:

- **SSL Certificate Issued:** This may take 1–10 minutes after verification.

- **Domain Status:** Your domain will show as **Verified/Active** in HighLevel.

- **Test Sending:** Send test emails to confirm SPF and DKIM pass in headers.

- **Monitor Deliverability:** Use DMARC reports and inbox placement testing tools.

* * *

## **Troubleshooting Common Issues**

If verification fails:

- Double-check that each record matches exactly as provided.

- Ensure you selected the correct **record type**(TXT, CNAME, MX).

- Verify that **Host/Name** field is correct (avoid extra “@” or leaving out subdomain).

- Check if **TTL** is too high—set it to 300 seconds (5 minutes) if possible.

- Be patient: DNS propagation can take longer depending on your provider (sometimes 24–48 hours).

- For DMARC: Ensure only one DMARC record exists per domain.

* * *

## **Frequently Asked Questions**

**Q: Should I use a root domain or a subdomain?**

We recommend using a subdomain (e.g., mail.yourdomain.com) to protect your root domain’s reputation.

**Q: How long does domain verification take?**

Typically within 1–10 minutes, but in rare cases, propagation can take up to 24–48 hours.

**Q: What if my DNS provider isn’t supported for auto‑configuration?**

You can always use the manual setup option by entering the provided records directly into your DNS provider.

**Q: Do I need a DMARC record for both my root and subdomain?**

If you already have DMARC set on your root domain, you don’t need to add it again for the subdomain.

**Q: What happens if I misconfigure SPF or DKIM?**

Emails may land in spam or fail authentication checks, reducing deliverability.

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

- [Google Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-)
- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [Siteground Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-)
- [GoDaddy Dedicated Sending Domain Setu (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record/hit)