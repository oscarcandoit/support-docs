---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005132"
title: " Connecting Your Domain on GHL - A Guide : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005132#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
4. [Domain Connect](https://help.gohighlevel.com/support/solutions/folders/155000001184)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005132#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
   - [Domain Connect](https://help.gohighlevel.com/support/solutions/folders/155000001184)
6. Connecting Your Domain on GHL - A Guide

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

# Connecting Your Domain on GHL - A Guide

Modified on: Thu, 8 May, 2025 at 3:28 AM

Connecting your domain to HighLevel ensures that your branded presence is consistent across websites, funnels, emails, and client-facing tools. This guide breaks down the process and explains how each product integrates with a connected domain.

**TABLE OF CONTENTS**

- **TABLE OF CONTENTS**
  - [Step-by-Step Domain Connection Process](https://help.gohighlevel.com/support/solutions/articles/155000005132#Step-by-Step-Domain-Connection-Process)
    - [1\. Automatic Method (For Supported Providers)](https://help.gohighlevel.com/support/solutions/articles/155000005132#1.-Automatic-Method-(For-Supported-Providers))
    - [2\. Manually Adding a Domain](https://help.gohighlevel.com/support/solutions/articles/155000005132#2.-Manually-Adding-a-Domain)
      - [Manual Setup for Namecheap](https://help.gohighlevel.com/support/solutions/articles/155000005132#Manual-Setup-for-Namecheap)
      - [Manual Setup for Bluehost](https://help.gohighlevel.com/support/solutions/articles/155000005132#Manual-Setup-for-Bluehost)
  - [Troubleshoot - Connecting Your Domain](https://help.gohighlevel.com/support/solutions/articles/155000005132#Troubleshoot---Connecting-Your-Domain)
    - [Record Conflicts: Multiple A Records](https://help.gohighlevel.com/support/solutions/articles/155000005132#Record-Conflicts%3A-Multiple-A-Records)
    - [AAAA Record Conflict](https://help.gohighlevel.com/support/solutions/articles/155000005132#AAAA-Record-Conflict)
    - [CAA Record Conflict](https://help.gohighlevel.com/support/solutions/articles/155000005132#CAA-Record-Conflict)
    - [DNS Records Do Not Match](https://help.gohighlevel.com/support/solutions/articles/155000005132#DNS-Records-Do-Not-Match)
    - [Domain is Connected Elsewhere](https://help.gohighlevel.com/support/solutions/articles/155000005132#Domain-is-Connected-Elsewhere)
  - [Products You Can Connect a Domain To](https://help.gohighlevel.com/support/solutions/articles/155000005132#Products-You-Can-Connect-a-Domain-To)
    - [Funnel / Website / Store / Webinar / Blog](https://help.gohighlevel.com/support/solutions/articles/155000005132#%E2%96%B8-Funnel-/-Website-/-Store-/-Webinar-/-Blog)
    - [WordPress](https://help.gohighlevel.com/support/solutions/articles/155000005132#%E2%96%B8-WordPress)
    - [Email](https://help.gohighlevel.com/support/solutions/articles/155000005132#%E2%96%B8-Email)
    - [Branded Domain (for White-Labeling)](https://help.gohighlevel.com/support/solutions/articles/155000005132#%E2%96%B8-Branded-Domain-(for-White-Labeling))
    - [Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000005132#%E2%96%B8-Client-Portal)
  - [Pro Tips](https://help.gohighlevel.com/support/solutions/articles/155000005132#Pro-Tips)
  - [Helpful Links](https://help.gohighlevel.com/support/solutions/articles/155000005132#Helpful-Links)

* * *

## **Step-by-Step Domain Connection Process**

There are two main ways to connect a domain to HighLevel:

### **1\. Automatic Method (For Supported Providers)**

If your domain is registered with a **supported provider** (like GoDaddy, Google Domains, or Cloudflare), you can connect it automatically via API-based authentication.

**Steps:**

1. Go to Sites > **Settings > Domains** in your HighLevel account.

2. Choose **“Connect a Domain”**.

3. Choose the product you'd like to connect (e.g., funnel, website, email).![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)

4. Enter your root domain or subdomain in the provided field. If adding the "www" subdomain as well, you'll see an option to add the root domain.

5. If your domain is with Google Domains, Go Daddy, or Cloudflare, you'll see an "Authorize" button. Click on it to allow Domain Connect to access your DNS settings.

6. Follow the on-screen prompts to complete the authorization process on your domain provider's interface. This will automatically add or connect the required DNS records.

7. Once authorization is complete, close that tab and return to the Domain Connect interface.


> Recommended if your domain is managed by one of our integrated providers.

* * *

### **2\. Manually Adding a Domain**

If your domain is hosted by **Namecheap, Bluehost, or any provider not listed**, you'll need to add DNS records manually.

**Steps:**

1. Navigate to **Sites** \> **Settings > Domains.**

2. Choose **“Connect a Domain.”**

3. Choose the product you'd like to connect (e.g., funnel, website, email).![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)

4. If you want to connect the domain to a funnel, website, blog or webinar enter the domain name as per the prompt.

5. Click on the add records manually option.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491766/original/Z5xJ2bdqGdqayjfdHK7wGVVP5Vs5lKUqiQ.png?1745385962)

6. You'll receive specific DNS records (A Records, CNAME, TXT) that need to be added in your domain registrar.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491792/original/YCI8-DHpBnHtPNr9frNnfoVS4BElSM4SkQ.png?1745385993)

7. Log into your domain provider (e.g., Namecheap), and navigate to DNS settings.

8. Add the records exactly as shown.

9. Save changes and wait for DNS propagation (can take up to 24 hours).


> Use this option if your provider is not directly supported.

## **Manual DNS Setup by Provider**

### **Cloudflare**

1. Log in to your Cloudflare dashboard.

2. Select your domain and click on the **DNS** tab.

3. Click **Add Record**.

4. For each required record from HighLevel:

   - Choose type: A, CNAME, or TXT.

   - **A Record** for `@` (root domain) → Point to the IP address.

   - **CNAME** for `www` or subdomains (if applicable).

   - **TXT** for email verification (e.g., SPF/DKIM).
5. **Important**: Toggle **Proxy status to "DNS Only"** (gray cloud) for A and CNAME records.

6. Click **Save** for each.

7. Wait for propagation (few minutes to 24 hours).


* * *

### **GoDaddy**

1. Log in to your [GoDaddy account](https://www.godaddy.com/).

2. Go to **My Products > Domains**, then click **Manage DNS** next to your domain.

3. Under the **Records** section, click **Add**:

   - Select type: A, CNAME, or TXT.

   - Use `@` for root domain and `www` for subdomain.
4. Enter the **record values exactly** as provided by HighLevel.

5. Click **Save** after adding each record.

6. Allow time for changes to propagate.


* * *

### **Namecheap**

1. Log in to your [Namecheap dashboard](https://www.namecheap.com/).

2. Navigate to **Domain List > Manage** next to your domain.

3. Go to the **Advanced DNS** tab.

4. Under **Host Records**, click **Add New Record**:

   - **A Record** for `@`

   - **CNAME Record** for `www`

   - **TXT Record** for verification or email (e.g., SPF/DKIM)
5. Paste the exact values from your HighLevel instructions.

6. Click **Save All Changes**.

7. Wait up to 24 hours for DNS propagation.


* * *

### **Squarespace**

1. Log in to your [Squarespace account](https://login.squarespace.com/api/1/login/oauth/provider/authorize?client_id=wAHMs0yNCd2CyyoI0Eclva4GmZ1qqRPx&redirect_uri=https%3A%2F%2Fwww.squarespace.com%2Foauth-connect&state=v1.local.JLM4WccEMBU-f2nvZIq9ns5jeSsgpejZ9z-DaQPhTeCbCE8l-DPJR2P_wWBVXXiNNp8mcI4VBtbQToTirX7qs2UwaSXGdAhOzDFT6L3lFfr63ttBwjcpe_F0RIz8gk3gVfiDLJ_f9_buFyAtm2NfyTj9FardYX-jgQck8PDxPQ8aMNMEy6p9q2wLc5Ce6Z_Oqin9qgUEv8rGqIQlvSL5lU0-G8BFrhc8if5LqKK7QMqqtKHJQyylR71zPoL3VO57Z9_DYjoXVhp6fW5mcsn1GYMmjiP855DP1MDbDM-nYDvbewXtI4x49YbVpTRlgdTe1RSntYD4foT20CVVa6Zy_Muc3glEC04bZTK5OWaEKwjeUDxgrA-LJyZLG9dSIq7xPHjbiw&referrer=https%3A%2F%2Fwww.squarespace.com%2F&overrideLocale=en-US&options=%7B%22isCloseVisible%22%3Atrue%2C%22isCreateAccountViewActive%22%3Afalse%7D#/).

2. Go to **Settings > Domains** and select your domain.

3. Click **DNS Settings** (Advanced).

4. Add the following:

   - **A Record** for `@` (use IP provided)

   - **CNAME** for `www` (if required)

   - **TXT** for email verification
5. Click **Save** after each record.

6. Return to HighLevel and reconnect the domain once changes are saved.


* * *

## **Troubleshoot - Connecting Your Domain**

While connecting your domain either manually or automatically, you could run into a few common issues like -

- ### **Record Conflicts: Multiple A Records**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492883/original/-TX2PyjOHmMMB7Tjw2-PgGtYgaORdXTxLA.png?1745387571)


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#1.-Record-Conflicts%3A-Multiple-A-Records)**

- ### **AAAA Record Conflict**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492907/original/663d7TxsvhXmjTPV-eUbvLzzFDUxDkED0A.png?1745387595)


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#2.-AAAA-Record-Conflict)**

- ### **CAA Record Conflict![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045493186/original/m9rQevRuymmHX63WTCZRYzPPI0PNYhbqdw.png?1745388089)**


[**Troubleshooting link**](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#3.-CAA-Record-Conflict)

- ### **DNS Records Do Not Match** **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492971/original/ISi4IULI6PfftWfr-bcq7IBDkZSB9XqFJQ.png?1745387718)**


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#4.-DNS-Records-Do-Not-Match)**

- ### **Domain is Connected Elsewhere**


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Domain-is-Connected-Elsewhere)**

* * *

## **Products You Can Connect a Domain To**

### Funnel / Website / Store / Webinar / Blog

- Use your domain to **host customer-facing pages** such as funnels, ecommerce stores, webinars, or blogs.


### WordPress

- If you're using **HighLevel's WordPress hosting**, point your domain to your WordPress site using provided DNS records.

- The system will auto-detect and validate once DNS setup is complete.

- You can read more about it here - [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)


### Email

- A domain is required to **authenticate your email sending** (e.g., via SPF, DKIM, DMARC).

- Connecting it improves email deliverability and ensures your messages aren’t flagged as spam.

- You can read more about it here - [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)


### Branded Domain (for White-Labeling)

- Connect a domain to **white-label** your HighLevel sub-account or SaaS features.

- This replaces the default `.hlpages.co` URLs with your own branding.

- You can read more about it here - [Branding System-Generated Links (API Domain)](https://help.gohighlevel.com/support/solutions/articles/48001143244-how-to-configure-brand-system-generated-links-api-domain-) and [Why and HOW TO Setup Branded Domains](https://www.youtube.com/watch?v=y8-_fWUqiG8)


### Client Portal

- Use your custom domain to host a **client-facing dashboard**.

- Gives your clients a branded experience when accessing assets, campaigns, or reports.

- You can read more about it here - [How to set up the Client Portal?](https://help.gohighlevel.com/support/solutions/articles/155000000193-how-to-set-up-the-client-portal-)


* * *

## **Pro Tips**

- **DNS Propagation**: Changes can take from a few minutes up to 24 hours to fully propagate.

- **SSL** is automatically provisioned once the domain is connected and records are correct.

- You can manage all connected domains under **Settings > Domains**.

- If your domain says **“Pending”** for over 24 hours, double-check DNS values or reach out to support.


* * *

## **Helpful Links**

- [Troubleshooting Guide - Connecting Your Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain)


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

- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide)

## Related Articles

- [How to build a custom payments integration on the platform](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)
- [How to set up Root Domain/Subdomain for your Funnels/Websites?](https://help.gohighlevel.com/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-)
- [How to create your Whitelabel Community](https://help.gohighlevel.com/support/solutions/articles/155000004156-how-to-create-your-whitelabel-community)
- [How to integrate Razorpay within the CRM](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm)
- [Site Audit: Monitor, Analyze, and Optimize Your Website’s Technical SEO](https://help.gohighlevel.com/support/solutions/articles/155000005162-site-audit-monitor-analyze-and-optimize-your-website-s-technical-seo)
- [Xero Integration with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006078-xero-integration-with-highlevel)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005132)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide/hit)