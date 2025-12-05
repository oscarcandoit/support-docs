---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001154"
title: " Reverse DNS white labeling - Dedicated IP : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001154#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001154#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. Reverse DNS white labeling - Dedicated IP

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

# Reverse DNS white labeling - Dedicated IP

Modified on: Wed, 11 Oct, 2023 at 2:20 PM

When recipients open your email, it's generally more advantageous to display your company name instead of "Sent by Mailgun" or another third-party service. By configuring reverse DNS (rDNS), mailbox providers can be directed to present your company name in the "From" or "Sender" field. This approach not only elevates the professionalism of your email communications but also strengthens your brand identity.

Furthermore, featuring your company name in the "From" field rather than a third-party service yields enhanced deliverability and tracking benefits. It fosters trust with recipients, diminishes the chance of your emails being flagged as spam, and assures consistent branding across your email campaigns.

In summary, applying your company name via reverse DNS settings presents a more positive, brand-centric method for email communications, enhancing both deliverability and tracking.

* * *

**TABLE OF CONTENTS**

- [What is reverse DNS (rDNS)?](https://help.gohighlevel.com/support/solutions/articles/155000001154#What-is-reverse-DNS-(rDNS)?)
- [Common rDNS mistakes](https://help.gohighlevel.com/support/solutions/articles/155000001154#Common-rDNS-mistakes)
- [How to set up rDNS?](https://help.gohighlevel.com/support/solutions/articles/155000001154#How-to-set-up-rDNS?)

* * *

## **What is reverse DNS (rDNS)?**

Reverse DNS (rDNS) is essentially the reverse of a standard DNS query. Instead of mapping a domain name to an IP address, rDNS translates an IP address to its associated hostname. This process is applicable to both IPv4 and IPv6 addresses and verifies the authenticity of the sending email server.

In practical applications, rDNS converts the IP address of the sending email server into its corresponding hostname (e.g., example.com). This verification affirms that the IP address relates to a legitimate domain. In email marketing, this allows you to use services like Mailgun to display your company as the sender, rather than "Sent by Mailgun.com".

To clarify, this is distinct from masking the CNAME of mailgun.org in your DNS settings. Here, we're focusing on rDNS configuration for your dedicated IP used for emailing. Proper rDNS setup improves your email deliverability and branding by ensuring your company name is showcased as the sender in recipients' inboxes.

* * *

## **Common rDNS mistakes**

Setting rDNS records accurately is vital for email deliverability and upholding a reputable sender status. Some frequent rDNS pitfalls include:

**Incorrect PTR Record:** One common mistake is not having a valid PTR (Pointer) record associated with your IP address. A PTR record is essential for verifying that the sending mail server matches the IP address claimed in the email message. Ensure that your PTR record is set up correctly and returns a hostname for the IP address being queried.

**Mismatched Hostname:** The hostname returned by the PTR record should resolve back to the same IP address. This means that the IP address should point to the hostname, and the hostname should point back to the same IP address. If there's a mismatch, it can lead to rDNS lookup failures. For example, if your PTR record is set to return "mail.yourwebsite.com" for IP address 8.8.8.8, it's crucial that when you perform an rDNS lookup for "mail.yourwebsite.com," it resolves to 8.8.8.8.

**Hostname Resolution Failure:** In some cases, the hostname specified in the PTR record may not resolve at all. This is a significant problem as it can lead to delivery issues and a lack of trust with email providers. To resolve this issue, ensure that the specified hostname resolves to the correct IP address.

In summary, rDNS is a critical component of email authentication and deliverability. To avoid common rDNS mistakes, make sure your PTR records are set up correctly and that the hostname returned by the PTR record accurately maps to the associated IP address. This alignment helps establish trust with email providers and improves the chances of your emails reaching recipients' inboxes.

* * *

## **How to set up rDNS?**

It's important to note that setting up reverse DNS (rDNS) with multiple hostnames can only be done when using a dedicated IP. Shared IPs do not support this functionality, as rDNS can resolve to only one hostname per IP address. Utilizing a dedicated IP for this purpose adds a professional touch to your email communications and can positively influence your reputation with inbox providers.

To set up rDNS with multiple hostnames on your dedicated IP, follow the steps below:

- Input the “A record” into your zone file at your hosting provider. An “A record” will look something like this: A, mail.customer.com, 123.45.67.89

- Navigate to agency settings -> email service.
- In SMTP service tab, Click on the **Dedicated Domain And IP** in LeadConnector section.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009612052/original/IUIljk9XIJS27U3BT_o4jUzNTpWR7LasGg.png?1696855911)
- Go the dedicated IP section and click on the three dots in dedicated IP and click on **Reverse DNS (PTR)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009612160/original/cwkp94jqGl-jc1vsViWXa2bvRMaphEwmkw.png?1696855977)
- Provide the same A record that you have added in the input, and we’ll update the PTR record on our end to match the hostname you’re using.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009613038/original/Oge0tXLX2gyJh_WWlLh5Xdb0TiEVuC-AJA.png?1696856251)

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

- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide)
- [How to create your Whitelabel Community](https://help.gohighlevel.com/support/solutions/articles/155000004156-how-to-create-your-whitelabel-community)
- [Default Headers for Dedicated Sending Domains](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)
- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001154)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001154-reverse-dns-white-labeling-dedicated-ip/hit)