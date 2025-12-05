---
url: "https://help.gohighlevel.com/support/solutions/articles/48001153720"
title: " How to set up Root Domain/Subdomain for your Funnels/Websites? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001153720#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Troubleshooting Funnels](https://help.gohighlevel.com/support/solutions/folders/48000666012)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001153720#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Troubleshooting Funnels](https://help.gohighlevel.com/support/solutions/folders/48000666012)
6. How to set up Root Domain/Subdomain for your Funnels/Webs...

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

# How to set up Root Domain/Subdomain for your Funnels/Websites?

Modified on: Thu, 4 Sep, 2025 at 11:13 PM

Adding a domain to your account enables website and funnel functionalities to be created and utilized. A domain refers to the web address, for example, a root domain like **mydomain.com** or a subdomain like **www.mydomain.com**. To begin, establish a domain with a registrar like Cloudflare, GoDaddy, or others. Afterward, you can integrate the Domain into the system for use.

**Please Note:**

```
This article covers how to manually configure a domain. To learn how to use the automated Domain Connect feature, click here.
```

* * *

#### **Covered in this Article:**

#### [**How to configure Domains for Funnels and Websites?**](https://help.gohighlevel.com/support/solutions/articles/48001153720\#How-to-configure-Domains-for-Funnels-and-Websites?)

- #### [Step 1: (DNS Setup) Add an A record OR a CNAME record:](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Step-1%3A-(DNS-Setup)-Add-an-A-record-OR-a-CNAME-record%3A)

- #### [Step 2: Add the domain/Subdomain in your sub-account:](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Step-2%3A-Add-the-domain/Subdomain-in-your-sub-account%3A)

- #### [Step 3: Associate the Domain to a Funnel/Website:](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Step-3%3A-Associate-the-Domain-to-a-Funnel/Website%3A)


#### [**How to check your DNS records (DNS Lookup Tool)**](https://help.gohighlevel.com/support/solutions/articles/48001153720\#How-to-check-your-DNS-records-(DNS-Lookup-Tool))

#### **[Removing a Domain from the account](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Removing-a-Domain-from-the-account)**

#### [**Troubleshooting**](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Troubleshooting)

- #### [What causes an SSL Error?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#What-causes-an-SSL-Error?)

- #### [What causes the error "CNAME / A record not found."](https://help.gohighlevel.com/support/solutions/articles/48001153720\#What-causes-the-error-)

- #### [404 Error](https://help.gohighlevel.com/support/solutions/articles/48001153720\#404-Error)

- #### [Why do my Cloudflare domains not work with a Proxy?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Why-do-my-Cloudflare-domains-not-work-with-a-Proxy?)


#### [**FAQs**](https://help.gohighlevel.com/support/solutions/articles/48001153720\#FAQs)

- #### [Can I use the same Domain with more than one platform?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Can-I-use-the-same-Domain-with-more-than-one-platform?)

- #### [Can I add the same Domain to more than one account?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Can-I-add-the-same-Domain-to-more-than-one-account?)

- #### [How many domains can I add to one account?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#How-many-domains-can-I-add-to-one-account?)

- #### [Do I have to purchase SSL for the Domain separately?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Do-I-have-to-purchase-SSL-for-the-Domain-separately?)

- #### [Can I buy a domain from you directly?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#Can-I-buy-a-domain-from-you-directly?)

- #### [How many funnels/websites can I connect with one Domain?](https://help.gohighlevel.com/support/solutions/articles/48001153720\#How-many-funnels/websites-can-I-connect-with-one-Domain?)


* * *

## **How to configure Domains for Funnels and Websites?**

To set up your new Domain, adhere to the following instructions:

### **Step 1:**(DNS Setup) Add an A record OR a CNAME record:

You must complete this step within your domain registrar, such as Cloudflare or GoDaddy. Based on your domain host, you can choose one of the following two methods:

**CNAME:**

You can add a CNAME record for your subdomains using the value **sites.ludicrous.cloud**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261333/original/Cebw5DDhzZj8UIMgk3c4edx26VHIbmaVDw.png?1710970081)**

```
Instructions on Adding a CNAME record to various Domain Registrars:

Namecheap instructions
Godaddy instructions
Cloudflare instrucions
Wix instructions
Hostinger instructions
BlueHost instructions
```

**Please Note:**

```
If you are using Cloudflare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy.
```

**A Record**

Alternatively, you can add an A record for your root domain or subdomain, directing it to **162.159.140.166**

```
Namecheap instructions
Godaddy instructions
Cloudflare instructions
Wix instructions
Hostinger instructions
Bluehost instructions
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261352/original/zVAN7Kexv39pqBfSdapgoVA-q9oOMRblBA.png?1710970171)

**Please Note:**

```
If you are using Cloudflare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy.
```

After adding your Domain to the Domain Registrar, it might take some time for the DNS settings to propagate, so if it doesn't work immediately, give it some time (up to 24 hours) and try again.

### **Step 2:** Add a Domain/Subdomain to your sub-account:

Go to **Settings** in the left navigation menu

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025447474/original/kwCso7zgEzLgmI9sNfrMcRnS3fU7UxgLcw.png?1714693641)

Next, go to **Domains** & **URL Redirects** \> click the **\+ Connect a domain** button

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146928/original/Rr-LrDGD5yQGkJQyvXnSyNiJk2_zvX7JUA.png?1757042712)

Click on **Connect** for the Option **Funnel/Website/Store/Blog/Webinar**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146937/original/8GP-x7idWWh_vqjLNejiCYs9GE5sNHRDxg.png?1757042789)

Type in the **Domain or Subdomain** and click on **Continue**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147160/original/8fIohGOKHPn3q5xl3h90Qfd1GmNmh3NUPQ.png?1757043498)**

### For Root Domains (e.g mydomain.com):

**Enter your domain in the** **Domain URL** field **(use the root domain, not the subdomain) then click the** **Add record manually** link.

- **By default, the system will enable adding the** **www** subdomain in addition to the root domain.
- This option will also enable a [301 redirect](https://help.gohighlevel.com/en/support/solutions/articles/48001202713) so that all traffic to the **www** subdomain will be sent to the root domain.


**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147097/original/bFAPLFMv-wHky3TCQPSV-MKqAWjagoeumA.png?1757043369)**

```
Note: Clicking the Continue button will initiate the "Domain Connect" feature which will lookup where the domain is registered and attempt to authorize a connection to automatically add the necessary DNS records. If your registrar is not supported yet, you will be prompted to manually add the DNS records with your domain registrar. click here for more information about that process.
```

### For Subdomains (e.g sub.mydomain.com)

**Enter your subdomain in the** **Domain URL** field ****then click the** **Add record manually** link.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147125/original/V44hZD23aoMqw3JydS9fsm8VvO7dfnHwiQ.png?1757043401)**

```
Note: If you want a funnel step / website page to open without a path (domain.com instead of domain.com/home), you can select that page as the default page for that domain. A default page can be selected from Settings > Domains & URL Redirects > Manage Domain> Edit Domain
```

### **Step 3:** Associate the Domain to a Funnel/Website:

Once the DNS records have been verified, you will be presented with a screen where you can choose which funnel or website you'd like to link.

- First, choose the **funnel or website**.

- Then, you'll be presented with an choice of which **funnel step or page of a website** you'd like to be the default landing page.

- Finally, click the **Link Domain** button. This will complete the process and add an SSL certificate automatically. Please note that it will take a few minutes to complete on the backend.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025452367/original/lClR_V1asFvnVRVhCCXuU87lJmoq_UwCyA.png?1714712472)

* * *

## **How to check your DNS records (DNS Lookup Tool)**

MXtoolbox is a popular online tool that can help you check your Domain's DNS records. Follow these steps to use MXtoolbox for checking DNS records:

Go to the MXtoolbox website at [https://mxtoolbox.com](https://mxtoolbox.com/).

On the homepage, you will see a dropdown menu with options like MX Lookup, DNS Lookup, Blacklists, etc. Click on the dropdown menu and select the type of DNS record you want to check. Some common options include: standard.

- **MX Lookup:** Check your Domain's mail exchange (MX) records.

- **DNS Lookup:** Check various DNS records like A, AAAA, CNAME, NS, etc.

- **TXT Lookup:** Check the text (TXT) records for your Domain, which often contain information like SPF, DKIM, and DMARC records.

- **CNAME Lookup:** Check your Domain's canonical name (CNAME) records.


After selecting the appropriate option from the dropdown menu, enter your domain name (e.g., example.com) in the input field next to the dropdown menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935422/original/r72y28SyHztkt_csEjGTLTlBNqdYLMo5KQ.png?1679074391)

Click the  **"DNS Lookup"** button to initiate the search.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935621/original/Jee5ALw6wFToCaVxUh33b6uN4_85Davtuw.png?1679074464)

The tool will then display the DNS records for the Domain you entered. You may need to scroll down to see all the results.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935711/original/5jh9-FmFM0N9r0A47VHncXsYKMskKnAz-Q.png?1679074511)

Remember that the DNS records might not be updated instantly if you've recently changed your Domain's configuration. The changes can take some time to propagate across the internet, typically up to 24-48 hours.

* * *

## **Removing a Domain from the account**

To remove a domain from your account, go to **Settings > Domains & URL Redirects > Manage**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147213/original/5iOelPRWyawebJengpt6NOhogujTD6vnMw.png?1757043821)**

Click on the **three dots** \> Delete > confirm your choice on the confirmation dialog box.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147479/original/bbTbTx4Vn2h0xpKaQdWR_Y5CV0XgIGjG_g.png?1757045182)

* * *

## **Troubleshooting**

### **What causes an SSL Error?**

An SSL (Secure Sockets Layer) error occurs when there is a problem with the SSL certificate or the SSL/TLS (Transport Layer Security) configuration on a website. SSL/TLS is a security protocol that provides encryption and secure communication between a user's browser and the web server. SSL errors can result from various issues, often indicating that the connection between the user's browser and the web server is insecure.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940333/original/HV9QUGCMKridl3Wqc_xjtsWJcRNBYYXMEA.png?1679076664)**

If your Domain is showing a privacy/SSL error, it can be due to one of the following reasons:

- Multiple DNS (A or CNAME) records exist for the same domain/subdomain. One Domain or subdomain can only work with one platform/server at a time, and that's why you need to have only one DNS record set up for that domain/subdomain.so

- There is no DNS record added for the Domain

- The Domain has an AAAA added, other than the A/CNAME record

### **What causes the error "CNAME / A record not found."**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940786/original/TN2a5AUm6BajuKFNhh417MByzKsFzoVHng.png?1679076918)

This error occurs if your DNS record is not set up properly or they are added to the incorrect domain host. Use the DNS lookup tool to discover where your Domain is hosted (GoDaddy, CloudFlare, Namecheap, etc.). Make sure to add the DNS record properly and add it to the correct domain host.

### **404 Error**

A 404 error, also known as "404 Not Found," is a standard HTTP status code that indicates the requested web page or resource could not be found on the server. This error typically occurs when a user tries to access a non-existent URL or when the requested page has been deleted or moved to a different location without proper redirection.

If your Domain without any path shows a 404 error, e.g., mydomain.com, you need to go to Settings > Domains > Edit Domain> Select a default page. In case it is already selected, try saving it again.

If your Domain shows a 404 error despite having a default path, e.g., mydomain.com/home, then you need to make sure that one of the funnels/websites that are connected has the same path added in page settings. If the path is already added and it still does not work, then go to the funnel/website settings > remove the Domain> Save> add the Domain again and save.

If your Domain shows a 404 error intermittently, then you might be using the www/root domain with your funnel/website. In that case, ensure you have [added a redirect from www to the non-www (root) domain or from the non-www Domain to www.](https://help.gohighlevel.com/support/solutions/articles/48001065407-how-to-redirect-highlevel-domains-www-to-non-www-)

### **Why do my Cloudflare domains not work with a Proxy?**

Suppose your DNS setup is accurate, but you're still getting a privacy error, your funnel/website is not showing images, or you cannot add the Domain. In that case, you need to make sure you've set the proxy status inside CloudFlare to "DNS Only."

When the CNAME/A record has proxy status set to "proxied," it shows an error.

CloudFlare proxy status is only to be set to "proxied" when setting up a redirect (only use this by following the exact instruction mentioned in the steps to set up a redirect)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287943055/original/1zb6HOqouP5jryqoxYDQtxIEge6E0W6PiQ.png?1679077947)

* * *

## **Frequently Asked Questions**

**Q: Can I use the same Domain with more than one platform?**

No, one domain/subdomain can only be used with one platform/server at a time (WordPress, Wix, etc.)

If you already use mydomain.com with WordPress, use site.mydomain.com with our system or a different domain.

Also, if you're using a domain/subdomain with funnels/websites, it can't be used with memberships or some other feature hosted on a different server.

**Q: Can I add the same Domain to more than one account?**

Yes, you can add the same Domain to multiple sub-accounts within the same agency.

**Q: How many domains can I add to one account?**

You can add as many as needed. There is no limit.

**Q: Do I have to purchase SSL for the Domain separately?**

No, our system generates SSL automatically once you've added the Domain successfully. You don't need to purchase it separately.

**Q: Can I buy a domain from you directly?**

Yes! You can now purchase domains directly through HighLevel using our integrated Domain Marketplace. [Learn how to purchase a domain through HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000003610)

**Q: How many funnels/websites can I connect with one Domain?**

You can connect as many as needed within the same agency. There is no limit.

* * *

## **Related Articles**

- [How to Add a Domain and Verify DNS Record](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)

- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000005132)

- [Domains: Complete Overview and Centralized Management!](https://help.gohighlevel.com/en/support/solutions/articles/155000005134)

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

- [Instant Redirect Page - Funnel Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/48000980323-instant-redirect-page-funnel-troubleshooting)
- [How to set up Root Domain/Subdomain for your Funnels/Websites?](https://help.gohighlevel.com/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-)
- [Stripe Troubleshooting \| Why does my funnel product show 'null' in the Stripe Plan dropdown?](https://help.gohighlevel.com/support/solutions/articles/48001158591-stripe-troubleshooting-why-does-my-funnel-product-show-null-in-the-stripe-plan-dropdown-)
- [Script not working? - Custom Javascript / HTML Code Validation Error Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/48001159729-script-not-working-custom-javascript-html-code-validation-error-troubleshooting)
- [Why does my Domain not show the Edit Button?](https://help.gohighlevel.com/support/solutions/articles/48001161158-why-does-my-domain-not-show-the-edit-button-)
- [SEO Metadata troubleshooting for GoHighLevel Pages](https://help.gohighlevel.com/support/solutions/articles/48001162060-seo-metadata-troubleshooting-for-gohighlevel-pages)

## Related Articles

- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Getting Started - Launch A Funnel](https://help.gohighlevel.com/support/solutions/articles/155000005057-getting-started-launch-a-funnel)
- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide)
- [Configure & Connect Purchased Domains](https://help.gohighlevel.com/support/solutions/articles/155000004674-configure-connect-purchased-domains)
- [Domains - Transfer-In Process](https://help.gohighlevel.com/support/solutions/articles/155000006329-domains-transfer-in-process)
- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001153720)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-/hit)