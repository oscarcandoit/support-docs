---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide
category: articles
type: article
scraped: 2025-10-28T16:23:54.438Z
title:  Connecting Your Domain - A Guide : LeadConnector 
status_code: 200
---

#  Connecting Your Domain - A Guide : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Domains](https://help.leadconnectorhq.com/support/solutions/155000000109) [Domain Connect / Transfer](https://help.leadconnectorhq.com/support/solutions/folders/155000001199)

## Connecting Your Domain - A Guide  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide\# "Print this Article")

Modified on: Tue, 27 May, 2025 at 1:41 AM

* * *

Connecting your domain ensures that your branded presence is consistent across websites, funnels, emails, and client-facing tools. This guide breaks down the process and explains how each product integrates with a connected domain.

**TABLE OF CONTENTS**

- [Step-by-Step Domain Connection Process](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Step-by-Step-Domain-Connection-Process)
  - [1\. Automatic Method (For Supported Providers)](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#1.-Automatic-Method-(For-Supported-Providers))
  - [2\. Manually Adding a Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#2.-Manually-Adding-a-Domain)
- [Manual DNS Setup by Provider](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Manual-DNS-Setup-by-Provider)
  - [Cloudflare](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Cloudflare)
  - [GoDaddy](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#GoDaddy)
  - [Namecheap](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Namecheap)
  - [Squarespace](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Squarespace)
- [Troubleshoot - Connecting Your Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Troubleshoot---Connecting-Your-Domain)
  - [Record Conflicts: Multiple A Records](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Record-Conflicts%3A-Multiple-A-Records)
  - [AAAA Record Conflict](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#AAAA-Record-Conflict)
  - [CAA Record Conflict](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#CAA-Record-Conflict)
  - [DNS Records Do Not Match](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#DNS-Records-Do-Not-Match)
  - [Domain is Connected Elsewhere](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Domain-is-Connected-Elsewhere)
- [Products You Can Connect a Domain To](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Products-You-Can-Connect-a-Domain-To)
  - [Funnel / Website / Store / Webinar / Blog](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Funnel-/-Website-/-Store-/-Webinar-/-Blog)
  - [WordPress](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#WordPress)
  - [Email](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Email)
  - [Branded Domain (for White-Labeling)](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Branded-Domain-(for-White-Labeling))
  - [Client Portal](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Client-Portal)
- [Pro Tips](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Pro-Tips)
- [Helpful Links](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide#Helpful-Links)

* * *

## **Step-by-Step Domain Connection Process**

There are two main ways to connect a domain:

### **1\. Automatic Method (For Supported Providers)**

If your domain is registered with a **supported provider** (like GoDaddy, Google Domains, or Cloudflare), you can connect it automatically via API-based authentication.

**Steps:**

1. Go to Sites > **Settings > Domains** in your account.

2. Choose **“Connect a Domain”**.

3. Choose the product you'd like to connect (e.g., funnel, website, email).![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655018/original/Z3qXa2R-Nk3ULwcMHRurCOPIoxel1AUtng.jpeg?1747285710)

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

3. Choose the product you'd like to connect (e.g., funnel, website, email).![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655020/original/QTIlR-F5qNFttAnb1dVYSTHN32AK-iKEFw.jpeg?1747285710)

4. If you want to connect the domain to a funnel, website, blog or webinar enter the domain name as per the prompt.

5. Click on the add records manually option.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655019/original/Z7h44VmS7sQ1tb6p5RmqJNNpEs-kU3GKUg.png?1747285710)

6. You'll receive specific DNS records (A Records, CNAME, TXT) that need to be added in your domain registrar.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655022/original/bXlA6Canqq8-HPQpq5XnhFoWyD5El-Q2aw.png?1747285711)

7. Log into your domain provider (e.g., Namecheap), and navigate to DNS settings.

8. Add the records exactly as shown.

9. Save changes and wait for DNS propagation (can take up to 24 hours).


> Use this option if your provider is not directly supported.

## **Manual DNS Setup by Provider**

### **Cloudflare**

1. Log in to your Cloudflare dashboard.

2. Select your domain and click on the **DNS** tab.

3. Click **Add Record**.

4. For each required record :

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
4. Enter the **record values exactly** as provided.

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
5. Paste the exact values from your instructions.

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

6. Return to the app and reconnect the domain once changes are saved.


* * *

## **Troubleshoot - Connecting Your Domain**

While connecting your domain either manually or automatically, you could run into a few common issues like -

- ### **Record Conflicts: Multiple A Records**


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#1.-Record-Conflicts%3A-Multiple-A-Records)**

- ### **AAAA Record Conflict**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655026/original/cHQgguyBQaaSSir3GPui2P0Xa8T1OjY-EQ.png?1747285711)


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#2.-AAAA-Record-Conflict)**

- ### **CAA Record Conflict![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655030/original/zXuryY68zjRfdnIm3GCT4pvI9S7tTIFeIA.png?1747285711)**


[**Troubleshooting link**](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#3.-CAA-Record-Conflict)

- ### **DNS Records Do Not Match** **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655024/original/lOsk8ZcAx7Ax992nD1ohbhpVnuaPye3THg.png?1747285711)**


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#4.-DNS-Records-Do-Not-Match)**

- ### **Domain is Connected Elsewhere**


**[Troubleshooting link](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Domain-is-Connected-Elsewhere)**

- ### **Product Conflict: Domain Already Connected to Another Product![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047257422/original/VflEoYd9Gr0XSOpC5yhiOuoBw6KqXnwGZA.png?1748327998)**

[**Troubleshooting Link**](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Product-Conflict%3A-Domain-Already-Connected-to-Another-Product)

* * *

## **Products You Can Connect a Domain To**

### **Funnel / Website / Store / Webinar / Blog**

- Use your domain to **host customer-facing pages** such as funnels, ecommerce stores, webinars, or blogs.


### **WordPress**

- If you're using **WordPress hosting**, point your domain to your WordPress site using provided DNS records.

- The system will auto-detect and validate once DNS setup is complete.


### **Email**

- A domain is required to **authenticate your email sending** (e.g., via SPF, DKIM, DMARC).

- Connecting it improves email deliverability and ensures your messages aren’t flagged as spam.


### **Branded Domain (for White-Labeling)**

- Connect a domain to **white-label** your sub-account or SaaS features.

- This replaces the default `.hlpages.co` URLs with your own branding.


### **Client Portal**

- Use your custom domain to host a **client-facing dashboard**.

- Gives your clients a branded experience when accessing assets, campaigns, or reports.


* * *

## **Pro Tips**

- **DNS Propagation**: Changes can take from a few minutes up to 24 hours to fully propagate.

- **SSL** is automatically provisioned once the domain is connected and records are correct.

- You can manage all connected domains under **Settings > Domains**.

- If your domain says **“Pending”** for over 24 hours, double-check DNS values or reach out to support.


* * *

## **Helpful Links**

- [Troubleshooting Guide - Connecting Your Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain)


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide*  
*Generated on: 2025-10-28T16:23:54.438Z*
