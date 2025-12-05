---
url: "https://help.gohighlevel.com/support/solutions/articles/48000979925,"
title: " Sending Priority - From Name & Address : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000979925,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [General](https://help.gohighlevel.com/support/solutions/folders/48000665901)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000979925,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [General](https://help.gohighlevel.com/support/solutions/folders/48000665901)
6. Sending Priority - From Name & Address

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

# Sending Priority - From Name & Address

Modified on: Sun, 21 Sep, 2025 at 10:48 AM

Note: Now that Workflows are live in all accounts, you can do everything that Triggers and Campaigns do (and more!), all in one builder! [Click to learn more about Workflows](https://help.gohighlevel.com/support/solutions/articles/48001179678-workflow-builder-overview).

**Covered in this article:**

[**Which sender email should the leads be getting the emails from?**](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Which-configured-sender-email-will-the-leads-be-getting-the-emails-from?)

**[How to check if the contacts are assigned or unassigned](https://help.gohighlevel.com/support/solutions/articles/48000979925,#How-to-check-if-the-contacts-are-assigned-or-unassigned)**

[**Places you can configure the sender email - Manual email**](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Places-you-can-configure-the-sender-email---Manual-email)

- [Conversation tab](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Conversation-tab)

[**Places you can configure the sender email - Automated emai** l](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Places-you-can-configure-the-sender-email---Automated-email)

- [Email template](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Email-template)
- [Bulk action - Send Email](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Bulk-action---Send-Email)
- [Workflow Send Email Action](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Workflow-Send-Email-Action)
- [Campaign configuration](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Campaign-configuration)
- [Triggers - Send email action](https://help.gohighlevel.com/support/solutions/articles/48000979925,#Triggers---Send-email-action)

## **Which sender email should the leads be getting the emails from?**

|     |     |     |     |
| --- | --- | --- | --- |
|  | Cases | Unassigned Contact | Assigned Contact |
| Manual Emails | Logged in user email | 1st priority | 1st priority |
|  | Location Email | N/A | N/A |
|  | Assigned User Email | N/A | N/A |
|  | Agency Email | N/A | N/A |
| Automated Emails | Campaign/workflow settings | 1st priority | 1st priority |
|  | Assigned User Email | N/A | 2nd priority |
|  | Location Email | 2nd priority | 3rd priority |
|  | Agency Email | 3rd priority | 4th priority |
| Review Request Emails | We will always use the **Logged in user email** as the sender email |
| Appointment request emails<br>(calendar settings->3. Confirmation) | We will use [do-not-reply@replies.domain.com](mailto:do-not-reply@replies.domain.com) depending on the Mailgun subdomain you set up for the location, or the SMTP integrated email |

```
Not sure how to connect your SMTP provider? Follow these steps to set it up.
```

If you are using Mailgun/LC Email, we will use the Business email here if the lead is not assigned:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230234/original/LukUd53t-tjwMn_dHkUbmkoiyMFs0MVgSg.png?1758468487)

* * *

## **How to check if the contacts are assigned or unassigned**

Search for the contact in the Smart Lists tab

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230430/original/xV9ahg5895S7bEOtO_x3vpeQJchyHcPkRw.png?1758468592)

Search Conversations -> Click on the icon on the right to view the Contact Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230574/original/xeWmQjJoK1c1CDvcp3ouxStrSEb9_oFCPw.png?1758469037)

Check who is assigned to the contact here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230590/original/WHLGxGLu_lgUbp8VMrPX7Qdu0N2sZvL4ng.png?1758469109)

* * *

## **Places you can configure the sender's email - Manual email**

## **Conversation tab**

The From email will be the user logged in email by default:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230663/original/iOGx-LWFQvZQbd1jviS60WE9MGKlCVQPew.png?1758469162)

However, if you have 2-way email sync set up, the email will show the integrated email:

[How to Set Up Two Way Email Sync for Gmail](https://help.gohighlevel.com/en/support/solutions/articles/48001235216)

[Two Way Email Sync for Outlook](https://help.gohighlevel.com/en/support/solutions/articles/48001229663)

* * *

## **Places you can configure the sender's email - Automated email**

## **Email template**

Click on **Marketing** \> **Emails** \> **Templates** \> **+New**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230722/original/mhcvjez4vv9dDOSLWqm1Mze-o6roXtuMnA.png?1758469252)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230755/original/WfELc367egeqKtFKSioPk9xJheyU7_k2cw.png?1758469342)

* * *

### **Bulk action - Send Email**

Click Contacts ->Smart Lists -> Select Contacts -> Click Send Email![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230958/original/ChQW9qc8NCaqCoYr44PpauJrgatMH9al2Q.png?1758469438)

Add the **From Name** and **From Email**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230965/original/xc9hiF8uAXelg45ZHErj1zHTKZwQtNzbZg.png?1758469471)

* * *

### **Workflow settings**

Click Automation -> Workflows -> Create Workflow

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231022/original/nIi7qExg8bVqI6mUWWXejs12Dp5xBLFmGQ.png?1758469549)

Select **Start from scratch** and click **Create new workflow**:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231079/original/yf8J13CKvWamnZ9W9o7HBUKnHzBk-fXmEA.png?1758469619)

Click Settings -> Configure Sender Address![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231085/original/Et08a1v65mJKmkImQ3wZ9dD1byc63SKmcQ.png?1758469667)

* * *

## **Workflow Send Email Action**

Click on the **\+ button** \> Select the " **Send Email**" option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231139/original/wV8WhjpkvQj_C9WDKCRPclPpO91043Halg.png?1758469707)

Enter the **From Name** and **From Email**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231144/original/PaXSJLcjoxA2QdrjoDIiKown142mVkbcYQ.png?1758469725)

* * *

## **FAQs**

### **1\. Why is the From email for outlook always look long and strange?**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301042/original/spc9PucOJ-wT0rT3Sf4IBvjR6JcaJn-1QQ.png?1666018222)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301207/original/D6asla-m-OdXThoGwKQTtT1P_GnYyRIpsg.png?1666018251)

This is an issue with how Outlook displays the sender's information. If you send this email to gmail.com, it will show the sender's information correctly in Gsuite.

Learn more about how to [Hide "sent by" information in Outlook](https://stackoverflow.com/questions/35148098/hide-sent-by-information-in-outlook/35149628)

### **2\. How to remove send via information in Gmail?**

Make sure to use the same sender email domain that matches the Mailgun domain you set up. Learn more about [the Extra info next to sender’s name](https://support.google.com/mail/answer/1311182)

* * *

## **Related Articles**

- [Setting Up SMTP Providers](https://help.gohighlevel.com/en/support/solutions/articles/48001059689)

- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/en/support/solutions/articles/155000001021)

- [How to Set Up Two Way Email Sync for Gmail](https://help.gohighlevel.com/en/support/solutions/articles/48001235216)

- [How to Set Up Two Way Email Sync for Outlook](https://help.gohighlevel.com/en/support/solutions/articles/48001229663)

- [Using Custom Email Domains with Mailgun](https://help.gohighlevel.com/en/support/solutions/articles/155000002561)

- [Limitation of using SMTP when emails are not sending](https://help.gohighlevel.com/en/support/solutions/articles/48001203144)


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

- [Sending Priority - From Name & Address](https://help.gohighlevel.com/support/solutions/articles/48000979925-sending-priority-from-name-address)
- [Email Services Configuration - Reply & Forward Settings](https://help.gohighlevel.com/support/solutions/articles/48001155000-email-services-configuration-reply-forward-settings)
- [List of all outgoing system generated emails](https://help.gohighlevel.com/support/solutions/articles/48001209235-list-of-all-outgoing-system-generated-emails)
- [Filter Contacts by Email Stats and Enhanced Filtering Options](https://help.gohighlevel.com/support/solutions/articles/155000000330-filter-contacts-by-email-stats-and-enhanced-filtering-options)
- [Introducing Enhanced Sub-Account Filtering: Manage Email Providers with Ease!](https://help.gohighlevel.com/support/solutions/articles/155000000331-introducing-enhanced-sub-account-filtering-manage-email-providers-with-ease-)
- [Bot Detection Preventing Statistics Increment and Automation Execution](https://help.gohighlevel.com/support/solutions/articles/155000002954-bot-detection-preventing-statistics-increment-and-automation-execution)

## Related Articles

- [Getting Started - Setup Email, Phone, and SMS](https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms)
- [Mailgun Setup - Namecheap Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Mailgun Setup - CloudFlare Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48001064413-mailgun-setup-cloudflare-domain-setup)
- [Mailgun Setup - GoDaddy Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup)
- [Mailgun Setup - Siteground Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981685-mailgun-setup-siteground-domain-setup)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000979925,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000979925-sending-priority-from-name-address/hit)