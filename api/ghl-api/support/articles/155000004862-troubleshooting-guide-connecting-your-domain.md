---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain
category: articles
type: article
scraped: 2025-10-28T16:19:02.955Z
title:  Troubleshooting Guide: Connecting Your Domain : LeadConnector 
status_code: 200
---

#  Troubleshooting Guide: Connecting Your Domain : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Domains](https://help.leadconnectorhq.com/support/solutions/155000000109) [Domain Connect / Transfer](https://help.leadconnectorhq.com/support/solutions/folders/155000001199)

## Troubleshooting Guide: Connecting Your Domain  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain\# "Print this Article")

Modified on: Thu, 22 May, 2025 at 11:40 PM

* * *

This guide will help you resolve common errors when connecting your domain to your platform. Follow the steps below to troubleshoot issues related to DNS records and domain conflicts.

* * *

**TABLE OF CONTENTS**

- [1\. Record Conflicts: Multiple A Records](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#1.-Record-Conflicts%3A-Multiple-A-Records)
  - [What is an A Record?](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#What-is-an-A-Record?)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution)
- [2\. AAAA Record Conflict](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#2.-AAAA-Record-Conflict)
  - [What is an AAAA Record?](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#What-is-an-AAAA-Record?)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens-1)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution-2)
- [**Important Note (for GoDaddy Users)**](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Important-Note-(for-GoDaddy-Users))
- [3\. CAA Record Conflict](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#3.-CAA-Record-Conflict)
  - [What is a CAA Record?](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#What-is-a-CAA-Record?)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens-3)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution-4)
- [4\. DNS Records Do Not Match](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#4.-DNS-Records-Do-Not-Match)
  - [What Does This Mean?](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#What-Does-This-Mean?)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens-5)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution-6)
- [**Important Note (for GoDaddy Users)**](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Important-Note-(for-GoDaddy-Users)-7)
- [5\. Product Conflict: Domain Already Connected to Another Product](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Product-Conflict%3A-Domain-Already-Connected-to-Another-Product)
  - [What is a Product Conflict?](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#What-is-a-Product-Conflict?)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens-8)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution-9)
- [6\. Domain is Connected Elsewhere](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#6.-Domain-is-Connected-Elsewhere)
  - [When This Happens](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#When-This-Happens-10)
  - [Solution](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Solution-11)
- [Additional Notes](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#Additional-Notes)

* * *

## 1\. Record Conflicts: Multiple A Records

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045733019/original/DIvH4iHNY9DqPOPkav9Mc_1s6mjbbl8msw.png?1745817030)

### What is an A Record?

An A record links your domain name to an IP address. It directs visitors to the correct server where your website is hosted.

### When This Happens

If your domain has multiple A records, the system gets confused about which IP address to use. This can cause issues with your website loading correctly.

### Solution

1. Log in to your domain registrar’s DNS settings (e.g., GoDaddy, Namecheap, Cloudflare).

2. Find the DNS settings for your domain.

3. Look for A records like @ or yourdomain.com that point to an IP address.

   - @ refers to your root domain (e.g., yourdomain.com).
4. Delete any A records that map your domain or subdomains (e.g., www.yourdomain.com) to an IP address.

5. Save changes and wait 1-2 minutes for them to take effect.

6. Reconnect your domain to your platform.


* * *

## 2\. AAAA Record Conflict

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045733029/original/-RNzp0jA3JWzd4QZVqOi5rai-iejIYL9Zw.png?1745817064)

### What is an AAAA Record?

An AAAA record is similar to an A record but is used for IPv6 addresses, which are a newer version of IP addresses.

### When This Happens

- The platform detects an AAAA record for your domain.

- The system only allows IPv4 records. If an AAAA record (IPv6) is present, it conflicts with system requirements, preventing proper domain connection.


### Solution

1. Log in to your domain registrar’s DNS management panel.

2. Locate the AAAA record (usually labeled as AAAA or IPv6).

3. Delete the AAAA record.

4. Save changes and wait 1-2 minutes.

5. Reconnect your domain to your platform.


* * *

## Important Note (for GoDaddy Users)

- If your domain is registered with GoDaddy, ensure that DNS Proxy (also known as DNSSEC or DNS protection) is turned off. GoDaddy's proxy can automatically regenerate AAAA records or interfere with changes. Disabling the proxy ensures your DNS updates take effect properly. Learn more about how to do that [HERE](https://www.godaddy.com/en-in/help/turn-dnssec-on-or-off-6420).

* * *

## 3\. CAA Record Conflict

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045733052/original/RtgRUz9io4MZ7vJqjTtFBqQB-nIQxnVIIQ.png?1745817122)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045733052/original/RtgRUz9io4MZ7vJqjTtFBqQB-nIQxnVIIQ.png?1745817122)

### What is a CAA Record?

A CAA (Certificate Authority Authorization) record specifies which Certificate Authorities (CAs) can issue SSL certificates for your domain. This adds an extra layer of security by restricting certificate issuance to authorized providers.

### When This Happens

If a CAA record exists but does not include the required value (pki.goog), the platform cannot issue an SSL certificate for your domain.

### Solution

#### Recommended (For Most Users)

1. Log in to your domain registrar’s DNS management panel.

2. Locate the CAA record (usually labeled as CAA).

3. Delete the CAA record.

4. Save changes and wait 1-2 minutes.

5. Reconnect your domain to your platform.


#### Advanced Users (Modify Instead of Deleting)

If you prefer to retain a CAA record but need to authorize the platform, add the following value to your existing CAA record:

- pki.goog


This allows the platform to issue SSL certificates for your domain without removing other security settings.

* * *

## 4\. DNS Records Do Not Match

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045733059/original/F56NxP7-Oqt6VC1T0xNvVEB7O70WboJcUA.png?1745817158)

### What Does This Mean?

This error occurs when the DNS settings for your domain do not align with the platform’s requirements. This could be due to:

- Conflicting records

- Incorrect configurations

- Your domain being connected to another service


### When This Happens

- The DNS settings may not be configured correctly.

- Even if DNS settings are correct, propagation delays can occur. Wait a few minutes for changes to reflect.


### Solution

#### 1\. Verify DNS Records

- Use a DNS lookup tool (e.g., DNS Checker) to check for DNS propagation.

- Compare your records with the platform’s required DNS configuration. Most platforms provide specific values (e.g., an IP address for A records or a CNAME record).


#### 2\. Check for Conflicts

- If records match → Wait a few minutes for propagation (can take up to 48 hours).

- If records conflict → Remove or update incorrect entries:

  - Ensure no extra A records exist if an A record is required.

  - If a CNAME record is required, remove conflicting A or AAAA records.

#### 3\. Reconnect Your Domain

1. Save changes and wait 1-2 minutes.

2. Reconnect and verify the domain.


* * *

## Important Note (for GoDaddy Users)

If your domain provider is GoDaddy, ensure that your domain is not parked.

1. Log in to your GoDaddy account.

2. Navigate to My Products > Domains and click Manage DNS next to your domain.

3. Ensure Your Domain is Not Parked:

   - If your domain is parked, GoDaddy is holding it, preventing connections to any service.

   - Unpark your domain by following GoDaddy’s instructions.

* * *

## 5\. Product Conflict: Domain Already Connected to Another Product

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046744361/original/qCyHgP6j6vMpWj-CPVI18stp1mKpr1fyPA.png?1747388058)

### What is a Product Conflict?

A product conflict occurs when **a domain or subdomain is already configured with a different product type within the platform**, such as WordPress, Funnel, Client Portal, or others. Each product type requires exclusive control over the domain to function correctly.

### When This Happens

This issue occurs when you try to connect a domain (e.g., `my.abcabc.com`) to a product like Webinar or Client Portal, but the domain is already connected to a different product (e.g., WordPress).

### Solution

- Use a different domain for the product you are trying to connect.
- Or, remove the domain from the currently connected product
  - Navigate to the agency or location settings in your account.
  - Go to Domains > Manage Domain > Connected Products.
  - Delete the domain association from the existing product (e.g., WordPress, Funnel, etc.).

Note

If the conflicting product exists in the same location, the system will display a “here” link in the error message, directing you to the domain settings to manage the conflict.

* * *

## 6\. Domain is Connected Elsewhere

### When This Happens

Your domain is already connected to another agency or subaccount.

### Solution

- Contact the support team to release the domain if required.


* * *

## Additional Notes

✅ Propagation Time: DNS changes can take 24-48 hours to propagate globally, though they often take effect within minutes. If the issue persists, be patient and recheck your DNS settings.

✅ Double-Check Records: Use a DNS lookup tool to confirm that changes have propagated correctly before reconnecting your domain.

✅ Clear Cache:Clear your browser cache or use incognito mode to avoid seeing outdated DNS information.

* * *

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain*  
*Generated on: 2025-10-28T16:19:02.955Z*
