---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002547,"
title: " How to Add Domains in the WordPress Dashboard : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002547,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002547,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
6. How to Add Domains in the WordPress Dashboard

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

# How to Add Domains in the WordPress Dashboard

Modified on: Fri, 31 May, 2024 at 4:30 AM

Adding a domain to a WordPress site is necessary to make the website accessible to the public through that Domain. A domain serves as the website's address, and visitors can use it to access the site.

The article provides step-by-step instructions for adding a primary domain and additional domains to a WordPress site.

**TABLE OF CONTENTS**

- [Adding Primary Domain in WordPress Dashboard:](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Adding-Primary-Domain-in-WordPress-Dashboard%3A)
  - [Step 1: Add Your Domain Name](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Step-1%3A-Add-Your-Domain-Name)
  - [Step 2: Configure SSL Certificate](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Step-2%3A-Configure-SSL-Certificate)
  - [Step 3: Update DNS](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Step-3%3A-Update-DNS)
- [Adding Sub Domain in WordPress Dashboard:](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Adding-Sub-Domain-in-WordPress-Dashboard%3A)
  - [Step 1: Add Your Sub-Domain Name](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Step-1%3A-Add-Your-Sub-Domain-Name)
  - [Step 2: Update CNAME and A record with your DNS provider](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Step-2%3A-Update-CNAME-and-A-record-with-your-DNS-provider)
- [Comprehensive Domain/Sub-Domain Dashboard:](https://help.gohighlevel.com/support/solutions/articles/155000002547,#Comprehensive-Domain/Sub-Domain-Dashboard%3A)

* * *

# **Adding Primary Domain in WordPress Dashboard:**

Go to your Sub-Account-> Sites-> WordPress Dashboard. In the Dashboard you will see a section for adding Domains/subdomain. Click on 'Add Domain' Button to proceed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026889582/original/EkpDv21hmqThD--EwH4M4I-hE4W9csSwyg.png?1717145194)

## **Step 1: Add Your Domain Name**

1. Navigate to the domain management section in your WordPress hosting dashboard.
2. Enter your desired domain name.
3. Our system will automatically verify if the domain is already associated with another location or agency.
4. If the domain is available, proceed to the next step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026889970/original/MjTA50ZL_e_Aq63xDr01v_2X3Bek64IQFA.png?1717145448)

## **Step 2: Configure SSL Certificate**

1. After your domain is verified, you will need to configure your SSL certificate.
2. Add the provided TXT records to your DNS provider.
3. Once the TXT records are successfully added and verified, you can move on to the final step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026890081/original/jvDFyZPA87UqHBxsEtgj1B8l9Ct5TZujug.png?1717145549)

```
1. While most SSL Records propagate within an hour, global updates take upto 48 hours.
2. Configure your TTL Value to 600 ms or the lowest value possible for optimal ssl record propagation.
```

## **Step 3: Update DNS**

1. In this step, you will need to update your DNS settings.
2. Add the provided CNAME and A records to your DNS provider.
3. Once the records are successfully added click on 'Verify DNS Records' button.
4. Go to the dashboard and Mark your Domain as Primary.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026890939/original/bana4qsBHqDH63yLMHi0ge7E275iKgY3iA.png?1717146143)

```
1. If your DNS Provider is Cloudflare, please turn off Proxy Settings
2. While most DNS updates activate within an hour, global updates take upto 48 hours.
3. Configure your TTL Value to 600 ms or the lowest value possible for optimal DNS record propagation.
```

# **Adding Sub Domain in WordPress Dashboard:**

Adding sub-domain is similar to adding your Domain. The SSL certificate for additional domains will be Verified in the Update DNS step and hence adding the TXT records is not required.

## **Step 1: Add Your Sub-Domain Name**

1. Navigate to the domain management section in your WordPress hosting dashboard and enter your desired domain name.
2. Our system will automatically verify if the domain is already associated with another location or agency. If the domain is available, proceed to the final step of updating DNS records.

## **Step 2: Update CNAME and A record with your DNS provider**

1. Add the provided CNAME and A records to your DNS provider.
2. Once the records are successfully added click on 'Verify DNS Records' button.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026892143/original/cDKrS-1v1iSnRRwt6-b5ZuBDGu75RefZ9w.png?1717147061)

# **Comprehensive Domain/Sub-Domain Dashboard:**

Our new dashboard offers a comprehensive overview of domain management.

- **SSL Issuance Status:** Monitor the status of your SSL certificate issuance to ensure it is properly configured using the 'SSL issued/ SSL Not Issued' tags.
- **DNS Record Verification:** Check the verification status of your DNS records to confirm they are correctly set up using the 'Verified/ Not Verified' tags.
- **Domain Management:** You can add up to 5 domains or sub-domains. Designate one as your primary domain for better organisation.
- **Easy Prefix Adjustment:** Easily switch between www and non-www prefixes with a simple adjustment in the dashboard using the 'Change prefix to WWW/ Remove WWW Prefix' option.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026892814/original/S-oyWWLKWjNB7CPKvMB6GC8XSmGRHD_6KQ.png?1717147478)

```
If you need to delete and re-add a domain, please note that this process might take some time.
```

* * *

Our enhanced domain management flow ensures that adding and managing your domains is as smooth and efficient as possible. With the new streamlined steps and a powerful dashboard, you can enjoy greater control and simplicity in managing your WordPress hosting services.

For further assistance or if you have any questions, please contact our support team. Enjoy the new domain management experience!

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

- [WordPress - Adding Domains for your site](https://help.gohighlevel.com/support/solutions/articles/48001237041-wordpress-adding-domains-for-your-site)
- [Getting Started with WordPress \| Client side setup guide](https://help.gohighlevel.com/support/solutions/articles/48001199648-getting-started-with-wordpress-client-side-setup-guide)
- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [WordPress Hosting: Step-by-Step Migration Guide](https://help.gohighlevel.com/support/solutions/articles/155000005010-wordpress-hosting-step-by-step-migration-guide)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002547,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002547-how-to-add-domains-in-the-wordpress-dashboard/hit)