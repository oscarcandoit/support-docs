---
url: "https://help.gohighlevel.com/support/solutions/articles/48001227438"
title: " SSL Certificates for Dedicated LC Email Domains : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001227438#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001227438#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. SSL Certificates for Dedicated LC Email Domains

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

# SSL Certificates for Dedicated LC Email Domains

Modified on: Wed, 11 Sep, 2024 at 10:41 AM

SSL certificates (Secure Sockets Layer) ensure that any links included in the email are secure and accessible by encrypting tracking URLs, open URLs, and click URLs in your emails. Without an SSL certificate, links in your emails will break, resulting in recipients encountering errors when trying to open them.

When a dedicated domain is added and verified in the email system, an SSL certificate is issued automatically. There are three possible SSL statuses for your domain:

1. **SSL Issued:** The SSL certificate has been successfully created.
2. **SSL Pending:** The SSL certificate is in the process of being generated.
3. **SSL Unknown:** The SSL certificate has not been generated or issued.

* * *

**TABLE OF CONTENTS**

- [Why Do I Need an SSL Certificate?](https://help.gohighlevel.com/support/solutions/articles/48001227438#Why-Do-I-Need-an-SSL-Certificate?)

- [Where to See SSL Certificates](https://help.gohighlevel.com/support/solutions/articles/48001227438#Where-to-See-SSL-Certificates)

- [How To Setup SSL Certificates For LC Email Domains](https://help.gohighlevel.com/support/solutions/articles/48001227438#How-To-Setup-SSL-Certificates-For-LC-Email-Domains)

- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001227438#Frequently-Asked-Questions)


* * *

## **Why Do I Need an SSL Certificate?**

Without a valid SSL certificate, recipients may see broken links or security warnings, which could harm your sender reputation and reduce engagement with your emails. Ensuring the SSL is issued and valid is critical to successful email campaigns and maintaining a secure digital presence.

- **Prevent Broken Links:** SSL certificates ensure links in your emails are functional and prevent the dreaded "This site can’t provide a secure connection" error.

- **Enhance Security:** They secure communication between your domain and the recipient, ensuring encrypted links that inspire trust.

- **Maintain Engagement:** Preventing errors means higher engagement with your email campaigns, as users can easily access your content without security warnings or disruptions.

* * *

## **Where to See SSL Certificates**

To access SSL management for your custom email domain, follow these steps:

1. Navigate to **Location** **Settings**.
2. Select **Email Services**.
3. On the right side, click the **Dedicated Domain And IP** button.


This will bring up the domain management screen, where you can check the status of your SSL certificate and take action if needed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685878/original/KpOIuYa-wAWeMlovftKhUZ22a_CPT3yJ0w.jpg?1726063683)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685971/original/f-IR_ph9PrvRzNEdzHK_OIJnoKQstusv3g.jpg?1726063742)

* * *

## **How To Setup SSL Certificates For LC Email Domains**

Setting up or resolving SSL issues for your custom domain is straightforward. Below are the steps to ensure your SSL certificate is issued or reissued.  By following these steps, you ensure that your custom domain and email campaigns are secure, functional, and trustworthy.

### **Step 1:** Verify the Domain

- Navigate to **Settings** \> **Email Services** \> **Dedicated Domain And IP**.

- Click the **Verify Now** button next to your domain.

- You will be redirected to your domain DNS page. Ensure all DNS records are correctly set up and verified.

```
DNS Instructions for Common DNS Providers:
GoDaddy
Google Domains
Hostgator
Hover
Namecheap
Squarespace
AWS
Cloudflare
Bluehost
Hostinger
InMotion
Hostwinds
```

- Once your DNS records are verified, click the **Verify domain** button to issue or reissue your SSL certificate.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685638/original/_xOi8GDwehFPSNgObxk2fnYzk3M092RvKg.png?1726063543)

### **Step 2:** Check SSL Status

- **SSL Issued:** No further action is required; your domain is secured.

- **SSL Pending:** Reverify the domain by following the steps above. This ensures the SSL certificate is generated successfully.

- **SSL Unknown:** Follow the domain verification process again. If SSL remains unknown after verification, review your DNS records and retry issuing the SSL certificate.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685791/original/fvZ-XxXyOUUiH8CamxriFOGDlmTle4T8oQ.png?1726063609)

* * *

## **Frequently Asked Questions**

**Q: What should I do if my email link URL gets broken?**

Go to your domain's settings and verify the domain again to reissue the SSL certificate.

**Q: What does "This site can’t provide a secure connection" mean?**

This error indicates that the SSL certificate for your domain is not properly issued. You should verify the domain again to resolve the issue.

**Q: What should I do when the SSL is Pending or Unknown?**

Reverify the domain by following the domain verification steps. This will prompt the system to generate a new SSL certificate if it has not been issued or if there’s an error in the process.

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

- [Email Tracking for LC Email](https://help.gohighlevel.com/support/solutions/articles/155000003213-email-tracking-for-lc-email)
- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)
- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [Google Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-)
- [Manage Sub-account Email Settings and Migration in LC Email](https://help.gohighlevel.com/support/solutions/articles/155000002222-manage-sub-account-email-settings-and-migration-in-lc-email)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001227438)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains/hit)