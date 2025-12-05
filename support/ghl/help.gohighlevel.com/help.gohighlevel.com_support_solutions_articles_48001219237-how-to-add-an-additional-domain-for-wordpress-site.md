---
url: "https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site"
title: " How to add an Additional Domain for WordPress site : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
6. How to add an Additional Domain for WordPress site

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

# How to add an Additional Domain for WordPress site

Modified on: Tue, 21 Mar, 2023 at 12:24 PM

This article will help you add an additional domain for your WordPress site hosted through us.

# Instructions to add an additional domain     - [**Step 1: Click on the 'Add domain or sub-domain button**](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site\#Step-1%3A-Click-on-the-'Add-domain-or-sub-domain-button) - **[Step 2: Add CNAME record for your domain](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site\#Step-2%3A-Add-CNAME-record-for-your-domain%C2%A0)** - **[Step 3: Create an A record for your domain now](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site\#Step-3%3A-Create-an-A-record-for-your-domain-now)**

### **Step 1: Click on the 'Add domain or sub-domain button**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241451628/original/0pyp8k6UCxrx-a4r_Tv8BymxwJyg9w9dtA.png?1658945882)

### **Step 2: Add CNAME record for your domain**

- Enter the domain name which you want to use
- Click the 'Generate CNAME' button
- Copy the system generated Key and Value
- Add a CNAME record based on these values

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453423/original/MB0cSKfLzkPl7jZebMd_P18yIL5E3xXUgA.jpeg?1658946532)

- Check the box stating you've added a CNAME
- Hit 'Verify and Create Certificate'

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241452662/original/koU5cVomDZ5NXPJYr2bE1wRO3cGN5LvrVg.png?1658946225)

```
Please note: The value of the CNAME and A record might be different (wp1.msgsndr.com, wp2.msgsndr.com, etc.) for you. Please ensure you check the value from your screen before adding the record.
```

### **Step 3: Create an A record for your domain now**

- Copy the value from the popup and add an A record in the domain settings

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453781/original/FnIWxx-fVO7jvAHMDHRYIz2HH3rSIiNPcg.png?1658946659)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453826/original/0DTFtugrrIC_xSnBs2lFA8X6gUtlX-q0ZQ.png?1658946682)

```
Please note: The value of the CNAME and A record might be different (wp1.msgsndr.com, wp2.msgsndr.com, etc.) for you. Please ensure you check the value from your screen before adding the record.
```

That's it. Now once the DNS records have propagated successfully, you can set your new domain as primary domain from the WordPress Dashboard.

### Linked Articles for some Domain Registrars

1. [How to add a CNAME Record in CloudFlare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
2. [How to add a CNAME Record in Domain.com](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
3. [How to add a CNAME Record in BlueHost](https://my.bluehost.com/hosting/help/resource/714)
4. [How to add a CNAME Record in HostGator](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
5. [How to add a CNAME Record in GoDaddy](https://ca.godaddy.com/help/add-a-cname-record-19236)
6. [How to add a CNAME Record in NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

```
Some domain providers take 24 - 48 hours to propagate DNS changes while others are instant. You can use tools like https://dnschecker.org/ to check if your DNS changes are propagated or not.
```

* * *

### Domain Not Adding Troubleshooting

This can happen due to a few reasons

1. There is a typo in your domain name \[ _like in the example above_\]

In this scenario fixing the typo will resolve your issue

2. Your DNS changes haven't propagated yet

In this case you need to wait longer and try again after a few hours or the next day to see if it works

3. Your DNS configuration is not setup correctly

Please reach out to your Domain Provider and discuss the errors with their support team

4. Maybe you have conflicting records for the same subdomain \[ _for example if [blog.mydomain.com](https://blog.mydomain.com/) has a CNAME record pointing to [wp1.msgsndr.com](https://wp1.msgsndr.com/) but it also has an A record pointing to some other provider_\]

In such cases removing the other duplicate record will fix your issue


```
In most cases with your DNS setup, HighLevel support teams will not be able to assist you and you may need to reach out to your domain provider.
```

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

- [WordPress: Single Sign On Admin](https://help.gohighlevel.com/support/solutions/articles/155000004154-wordpress-single-sign-on-admin)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [Cloning Wordpress Websites in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004189-cloning-wordpress-websites-in-highlevel)
- [How to Disable SEO Indexing for WordPress Sites](https://help.gohighlevel.com/support/solutions/articles/155000005158-how-to-disable-seo-indexing-for-wordpress-sites)
- [How to Select Country Server Location for WordPress Hosting](https://help.gohighlevel.com/support/solutions/articles/155000005816-how-to-select-country-server-location-for-wordpress-hosting)
- [Payment Failure Notifications on WordPress Admin via LC Plugin](https://help.gohighlevel.com/support/solutions/articles/155000005792-payment-failure-notifications-on-wordpress-admin-via-lc-plugin)

## Related Articles

- [Getting Started with WordPress \| Client side setup guide](https://help.gohighlevel.com/support/solutions/articles/48001199648-getting-started-with-wordpress-client-side-setup-guide)
- [WordPress - Adding Domains for your site](https://help.gohighlevel.com/support/solutions/articles/48001237041-wordpress-adding-domains-for-your-site)
- [How to Add Domains in the WordPress Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000002547-how-to-add-domains-in-the-wordpress-dashboard)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [WordPress - Custom HTML Pages](https://help.gohighlevel.com/support/solutions/articles/155000006571-wordpress-custom-html-pages)
- [WordPress - Disk Space Add-on](https://help.gohighlevel.com/support/solutions/articles/155000006787-wordpress-disk-space-add-on)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site/hit)