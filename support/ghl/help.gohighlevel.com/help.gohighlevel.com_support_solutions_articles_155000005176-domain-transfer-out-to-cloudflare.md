---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare"
title: " Transfer Domain from HighLevel to Cloudflare : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
4. [Domain Purchase / Transfer](https://help.gohighlevel.com/support/solutions/folders/155000001185)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
   - [Domain Purchase / Transfer](https://help.gohighlevel.com/support/solutions/folders/155000001185)
6. Domain Transfer-out to Cloudflare

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

# Domain Transfer-out to Cloudflare

Modified on: Thu, 5 Jun, 2025 at 10:47 AM

# **Overview**

This article outlines the steps required to transfer a domain to a different Cloudflare account. It consists of a pre-requisite, preparation steps, and the transfer process:

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Overview)
  - [Pre-requisite](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Pre-requisite)
  - [Prepare to Transfer](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Prepare-to-Transfer)
    - [Step 1](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Step-1%3A-Add-the-Domain-as-a-Website-to-the-New-Account-and-Select-a-Plan)
    - [Step 2](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Step-2%3A-Obtain-the-Account-ID-and-Share-with-Us)
  - [Transfer](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#Transfer)
- [⚠️ Note: “Invalid Nameservers” Status](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare#%E2%9A%A0%EF%B8%8F-Note%3A-%E2%80%9CInvalid-Nameservers%E2%80%9D-Status)

* * *

## **Pre-requisite**

A Cloudflare account where domains has to be transferred should exist and you should have access to it.

* * *

## **Prepare to Transfer**

### **Step 1: Add the Domain as a Website to the New Account and Select a Plan**

- Login to your Cloudflare account where you want to transfer your domain.

- Click **'Connect a domain'** after clicking **'\+ Add'**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811288/original/OcRROmlY2bMj43Pi1MqTbYbxCLU32QrH7g.png?1749127748)

- Enter the domain name to be transferred and click **'Continue'**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811300/original/vEht9_njEH4gcTeKiEJKw_GNo_-74pEN4w.png?1749127750)

- Select the **'Free'** plan or a **'Paid'** plan.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811304/original/yYeQxBpkXITNzpEYw7ljebdWbujxIMOUog.jpeg?1749127750)

- Cross-check your scanned DNS records with your current DNS records. You can find your current DNS records here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811299/original/hJ7CF4vMJzOqGN6aXVXT5vomA6m_C_9sbA.jpeg?1749127749)

- If the scanned records match with the existing records, then hit **'Continue to Activation'.If not, manually add/remove the scanned records to match existing records.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811303/original/M1T3hEv6_kKVQMlDCEyIdRrDmh5Zyk_inQ.jpeg?1749127750)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811305/original/mL2XBDK5LByLMLYkvSwDOTAHXgn1RzBsxQ.jpeg?1749127750)**


> **⚠️****Please ensure proxy is turned OFF for all records before clicking 'Continue to Activation'.**

- There isn't a need a change nameservers at this step.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811302/original/yh-c3eIaMQNpANrfsaul2xBvxYLZp0TWwQ.jpeg?1749127750)

* * *

### **Step 2: Obtain the Account ID and Share with Us**

- Once you have completed all above process, obtain the **account ID** of your Cloudflare account and share it with us.

- To obtain the account ID, follow this process:

Extract the alphanumeric value from the URL.

**Example:** In this case, this is the account ID:

`0d2031c4bcda5980204101c44294740c`


* * *

## **Transfer**

Once all 2 steps above are completed, we will initiate the transfer process from our end. You can expect the transfer to get completed within **24 hours** after we initiate it. Then you need to approve the transfer by following these steps:

- Go to 'Manage Domains' under 'Domain Registration' in the left navigation menu and click on 'Manage' button for the given domain.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811301/original/MVf7yWRDJHpfzgtEVS06FY-hgt7whLtJ6g.jpeg?1749127750)
- Accept the transfer request. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811290/original/E4iZUac4Kc_FnAc0E06Y16fetCbZQJ2C5w.png?1749127749)
- You can expect the transfer to get completed within 24 hours after you accept it. Once transfer is successful, status will turn to 'Active' for that domain under 'Manage Domains'. If you find 'Invalid Nameserver' status in 'Account Home' for that domain, please wait for a few hours and then check again.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811296/original/za0Cq3HD6jSmVEm7MaQFIXh3JLb-if94SA.jpeg?1749127749)

* * *

# ⚠️ Note: “Invalid Nameservers” Status

After the transfer has been accepted, the domain may temporarily show **“Invalid Nameservers”** in the **Account Home** section **Don’t worry** \- this is expected behavior.

This warning typically resolves itself **automatically within 24 hours** post-transfer. No action is needed from your side.

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

- [Configure & Connect Purchased Domains](https://help.gohighlevel.com/support/solutions/articles/155000004674-configure-connect-purchased-domains)
- [Domain Transfer-out to Cloudflare](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare)
- [How to Enable and Rebill Domain Purchase?](https://help.gohighlevel.com/support/solutions/articles/155000003454-how-to-enable-and-rebill-domain-purchase-)
- [How to Purchase Domain Step by Step](https://help.gohighlevel.com/support/solutions/articles/155000003610-how-to-purchase-domain-step-by-step)
- [Get Additional Domain Extensions While Buying or Managing Domains](https://help.gohighlevel.com/support/solutions/articles/155000006055-get-additional-domain-extensions-while-buying-or-managing-domains)
- [LC Domain: Multiple Year Domain Purchase](https://help.gohighlevel.com/support/solutions/articles/155000005705-lc-domain-multiple-year-domain-purchase)

## Related Articles

- [Domains - Transfer-In Process](https://help.gohighlevel.com/support/solutions/articles/155000006329-domains-transfer-in-process)
- [How to set up Root Domain/Subdomain for your Funnels/Websites?](https://help.gohighlevel.com/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-)
- [How to use the Domain Connect feature?](https://help.gohighlevel.com/support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [How to Add a Domain and Verify DNS Record](https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare/hit)