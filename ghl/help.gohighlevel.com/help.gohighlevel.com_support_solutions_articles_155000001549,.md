---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001549,"
title: " Resolution of Figerprint Issue in Order form on Wordpress : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001549,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001549,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
6. Resolution of Figerprint Issue in Order form on Wordpress

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

# Resolution of Figerprint Issue in Order form on Wordpress

Modified on: Wed, 6 Dec, 2023 at 4:20 AM

If you are facing the fingerprint issue in order form on wordpress. You should be seeing the below error in your order form

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402697/original/cP4v-wGDWhkB1EDZBzxOomxLCCr1SCjEVg.png?1701776525)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402714/original/meJbprQnM-30iC7DGGjKuXAIcMMyHZ3K5w.png?1701776536)

**As of now, there can be two secnarios of fingerprint error.**

- [Scenario 1](https://help.gohighlevel.com/support/solutions/articles/155000001549,#Scenario-1)
- [Scenario 2](https://help.gohighlevel.com/support/solutions/articles/155000001549,#Scenario-2)
- [Steps to add domain in Funnel:](https://help.gohighlevel.com/support/solutions/articles/155000001549,#Steps-to-add-domain-in-Funnel%3A)
- [Steps to fix existing funnel in WordPress:](https://help.gohighlevel.com/support/solutions/articles/155000001549,#Steps-to-fix-existing-funnel-in-WordPress%3A)

### Scenario 1

- If client faced this issue only on some of the customer's browser. It means due to some customer browser settings, we are not able to access cookies (storage). **Solution:** This is very rare chances of this issue. So for a quick fix, guide customer to update  browser settings & enable cookies access. For a long term fix, we will add warning from our side if we won't able to access cookies

### Scenario 2

- If client faced this issue every time on every devices & browsers, it means funnel domain is not configured properly. **Solution:** If website is hosted on WordPress & they are using our order form funnel inside that as separate path, then WordPress website domain & funnel domain should be same but subdomain should be different. Suppose your WordPress website configured with www.example.com , example.com is your domain & www is subdomain. So now you should not use www.example.com  or example.com  as funnel domain. Use different subdomain (e.g. funnels.example.com ) in funnel.

- **Why need same domain?**


           As per our current implementation, we are using iFrame to render funnel page inside WordPress. For payment,               we need web browser cookies (storage) access & web browser doesn't allow access over cross domain.

### Steps to add domain in Funnel:

1\. Go to Settings -> Domains and add the same domain (as WordPress website) with different subdomain. (Make sure there should have not be hosted any other website on that subdomain)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508607/original/DgJefUC8jkG6Dr_9J06vu_KDm1U5yBOJ8Q.png?1701857135)

2\. Go to Funnel Settings (which you want to use in WordPress). Configure the domain and save it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508838/original/TmlC2p8wbnuOjS3cxrgBvf2DUz9cA348pg.png?1701857251)

3\. Verify that funnel is successfully connected & working with that subdomain.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509152/original/ycSfZp9GtFEXROsc8XQm8E-FiHHBS4YZGw.png?1701857392)

### **Steps to fix existing funnel in WordPress:**

1. Goto your LeadConnector WP settings & hard refresh that page if it already opened. Click on API Key save button.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509549/original/irqYmKDulfmiS759GP4nAqUjEe3MJdNyeg.png?1701857523)
2. Goto Click on edit button which funnel page you want to fix![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509862/original/kHIR3tNtMHyeyTQVpOhkaX3-3HY9XTWhxw.png?1701857636)
3. Wait until it stops loading and step will get filled automatically![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014510155/original/qoiNCxQZO6Ac7OzvqVZaUGKNdTsTILXfFQ.png?1701857703)
4. Now you will be able to see the same WordPress website domain (subdomain will be different) in the preview url. So just click on the save button

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509982/original/w6uS76mPd-CZR2eNbjsYmX9TnyG7RTVFeQ.png?1701857677)

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

- [Two-Step Order Form (Step 2: Adding An Up-Sell Product)](https://help.gohighlevel.com/support/solutions/articles/48000980306-two-step-order-form-step-2-adding-an-up-sell-product-)
- [Two-Step Order Form (Step 1)](https://help.gohighlevel.com/support/solutions/articles/48000980307-two-step-order-form-step-1-)
- [Style the Funnel](https://help.gohighlevel.com/support/solutions/articles/48000980309-style-the-funnel)
- [Desktop View VS Mobile View (Funnels)](https://help.gohighlevel.com/support/solutions/articles/48000980310-desktop-view-vs-mobile-view-funnels-)
- [Tracking Scripts/Pixel Code](https://help.gohighlevel.com/support/solutions/articles/48000980311-tracking-scripts-pixel-code)
- [SEO Meta Data](https://help.gohighlevel.com/support/solutions/articles/48000980312-seo-meta-data)

## Related Articles

- [Payment Failure Notifications on WordPress Admin via LC Plugin](https://help.gohighlevel.com/support/solutions/articles/155000005792-payment-failure-notifications-on-wordpress-admin-via-lc-plugin)
- [How to fix Error while displaying webpage after a purchase](https://help.gohighlevel.com/support/solutions/articles/48001212677-how-to-fix-error-while-displaying-webpage-after-a-purchase)
- [WordPress- LC (LeadConnector) Plugin Overview](https://help.gohighlevel.com/support/solutions/articles/155000005560-wordpress-lc-leadconnector-plugin-overview)
- [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted)
- [Create Forms & Surveys Inside the Site Builder](https://help.gohighlevel.com/support/solutions/articles/155000006719-create-forms-surveys-inside-the-site-builder)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001549,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001549-resolution-of-figerprint-issue-in-order-form-on-wordpress/hit)