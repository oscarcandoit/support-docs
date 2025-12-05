---
url: "https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation"
title: " When email replies are not showing up in Conversation : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. When email replies are not showing up in Conversation

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

# When email replies are not showing up in Conversation

Modified on: Fri, 27 Sep, 2024 at 2:30 PM

This guide troubleshoots issues with email replies not appearing in conversations. This could be due to several factors like incorrect Mailgun setup, faulty MX records, or issues with domain providers like WIX. Follow these steps to diagnose and resolve the issues efficiently.

**TABLE OF CONTENTS**

[**Troubleshooting When email replies are not coming back to the Conversation**](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#Troubleshooting-When-email-replies-are-not-coming-back-to-the-Conversation)

[1\. Check if Mailgun Receiving Route is set up. If you are on LC Email, move on to Step 2](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#1.-Check-if-Mailgun-Receiving-Route-is-set-up.-If-you-are-on-LC-Email,-move-on-to-Step-2)

[2\. How to check MX records](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#2.-How-to-check-MX-records)

[3\. Check if you are using the Root domain with Google Workspace and Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#3.-Check-if-you-are-using-the%C2%A0Root-domain-with-Google-Workspace-and-Mailgun)

[4\. Double-check DNS records](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B4.-Double-check-DNS-records)

[5\. If you are using an SMTP provider instead of Mailgun/LC Email](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#5.-If-you-are-using-an-SMTP-provider-instead-of-Mailgun/LC-Email)

[6\. If you are using WIX as your Domain DNS provider](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#6.-If-you-are-using-WIX-as-your-Domain-DNS-provider)

- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation#Related-Articles)

* * *

# **Troubleshooting When email replies are not coming back to the Conversation**

### **1\. Check if Mailgun Receiving Route is set up. If you are on LC Email, move on to Step 2**

[How to setup Replies in MailGun](https://help.gohighlevel.com/en/support/solutions/articles/48000987293)

### **2\. How to check MX records**

The MX record is essential for Mailgun to track the replies tracking.

1\. Switch to agency view > **Settings** \> **Email Services** \> **Location Settings** > Copy the domain/subdomain set up for the sub-account

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710730/original/336fiUo3ihzu_yI4uP56rIgrHdF3mahwKA.jpg?1727465017)

2\. Go to [Mxtoolbox](https://mxtoolbox.com/) to look up the MX record for the subdomain/domain you copied

Depending on the subdomain you set up with Mailgun,

For example:

- If you set up companyname.com,
You will look up the MX record for [companyname.com](https://companyname.com/)


- If you set up replies.companyname.com,

You will look up the MX record for [replies.companyname.com](https://replies.companyname.com/)

- to see if two records point to mxa.mailgun.org and mxb.mailgun.org.
- If they are missing, We must add **mxa.mailgun.org** and **mxb.mailgun.org** and set priority 10 for both MX records.

- Suppose other records point to other email servers like (e.g., Google Workspace). We can only choose one here, so you must either set up a subdomain for Mailgun or not use the domain for other email servers like (e.g., Google Workspace).



More information:



[Can I Use the Same Domain Name for Mailgun and Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)


**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710796/original/FM2Sxy9BQzzbC3CnquDFbcq0gzPPlYBQZw.jpg?1727465126)**

If it's still not working, please share a screenshot of all the DNS records in your domain provider and [reach out to our support here](https://help.gohighlevel.com/en/support/solutions/articles/48001204857) (GoDaddy, Namecheap, etc.). You can also check with your domain provider's support and see what is missing.

### **3\. Check if you are using the** **Root domain with Google Workspace and Mailgun**

If you are setting up a root domain to use with Mailgun, Ensure it is not pointing to somewhere else like Google Workspace, as it might contradict Google Workspace or Outlook, where you use the same domain for work emails. More information on [Can I Use the Same Domain Name for Mailgun and Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

If you use the Mxtoolbox to look up the MX record for the root domain, it is pointing to Mailgun, as shown in the screenshot below, **and other email servers** (e.g., Google Workspace). We can only choose either one here, so you will need to either set up a **subdomain** for Mailgun or don't use the domain for other email servers like (e.g., Google Workspace)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710845/original/rGC1BTGGbHk5MNi82nlWRVyA9Di8s7ocRA.jpg?1727465286)

### **4\. Double-check DNS records**

Log in to [Mailgun](https://login.mailgun.com/login/) -

1\. Expand **Sending** tab

2\. Click the last menu item, **Domain Settings**

3\. Make sure you select the correct domain/subdomain for the location on top

4\. Click **DNS records** on the top middle

5\. Click **Verify DNS settings** and see if all 5 DNS records, especially the MX record, have a green checkmark?

Sometimes it might show if they have all green checkmarks, but it might not be the case; you will need to click the Verify DNS Settings button again to refresh the record:

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710882/original/n5TrO-ghOMdCcUoKy1eLVCyu09YJz5OnAA.jpg?1727465373)**

### **5\. If you are using an SMTP provider instead of Mailgun/LC Email**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283738240/original/iuhABh85E9KeBQj_tREvrShtALdHnMmXAA.png?1677272715)**

### **6\. If you are using WIX as your Domain DNS provider**

Check out [Mailgun replies not working when using WIX as the domain provider](https://help.gohighlevel.com/support/solutions/articles/48001188738-mailgun-replies-not-working-when-using-wix-as-the-domain-provider).

* * *

# **Frequently Asked Questions**

- **Can I customize the email address from which replies are sent?** Yes, you can usually customize the "reply-to" email address in your settings. This allows you to ensure that replies go to a specific address, which can help manage communications more effectively.

- **How can I integrate other email providers with HighLevel to improve reply visibility?** Integration with other email providers can often enhance functionality. Check the platform’s integration options to connect services like Gmail or Outlook, which may provide better tracking and visibility for email replies.

- **What should I do if the issue persists despite troubleshooting?** If troubleshooting does not resolve the issue, consider reaching out to HighLevel’s support team for further assistance. They can provide insights specific to your account and help identify any underlying issues.


* * *

# **Related Articles**

- [How to send a test email in conversations](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
- [Troubleshooting when conversations are glitching](https://help.gohighlevel.com/support/solutions/articles/48001184861-troubleshooting-when-conversations-are-glitching)

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

- [Email Error Library for supported SMTPs](https://help.gohighlevel.com/support/solutions/articles/48001209322-email-error-library-for-supported-smtps)
- [How to check logs for a specific email in Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun)
- [How to fix links in the email that do not open?](https://help.gohighlevel.com/support/solutions/articles/48001151622-how-to-fix-links-in-the-email-that-do-not-open-)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [LC Email / Mailgun replies not working when using WIX as the domain provider](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider)
- [Troubleshooting Warning: Please contact your agency to change email settings](https://help.gohighlevel.com/support/solutions/articles/48001207525-troubleshooting-warning-please-contact-your-agency-to-change-email-settings)

## Related Articles

- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Cold Email Inbound Setup Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup-mailgun)
- [How to send a test email in the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
- [Email Services Configuration - Reply & Forward Settings](https://help.gohighlevel.com/support/solutions/articles/48001155000-email-services-configuration-reply-forward-settings)
- [Conversations - How to Setup & Track SLAs](https://help.gohighlevel.com/support/solutions/articles/155000006745-conversations-how-to-setup-track-slas)
- [Workflow Action - Facebook Interactive Messenger](https://help.gohighlevel.com/support/solutions/articles/155000004661-workflow-action-facebook-interactive-messenger)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation/hit)