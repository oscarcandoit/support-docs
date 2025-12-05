---
url: "https://help.gohighlevel.com/support/solutions/articles/48001240481,"
title: " Google Dedicated Sending Domain Setup (LC Email) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001240481,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [LC Email Dedicated Domain and IP](https://help.gohighlevel.com/support/solutions/folders/155000000789)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001240481,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email Dedicated Domain and IP](https://help.gohighlevel.com/support/solutions/folders/155000000789)
6. Google Dedicated Sending Domain Setup (LC Email)

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

# Google Dedicated Sending Domain Setup (LC Email)

Modified on: Tue, 10 Sep, 2024 at 11:05 AM

**Covered in this article**

- [Step-by-step LC Email Dedicated Domain Setup - Google Domain](https://help.gohighlevel.com/support/solutions/articles/48001240481,#Step-by-step-LC-Email-Dedicated-Domain-Setup---Google-Domain)
  - [To add the 1st TXT record](https://help.gohighlevel.com/support/solutions/articles/48001240481,#To-add-the-1st-TXT-record)
  - [To add the 2nd TXT record](https://help.gohighlevel.com/support/solutions/articles/48001240481,#To-add-the-2nd-TXT-record)
  - [To add the MX records, click Create new record](https://help.gohighlevel.com/support/solutions/articles/48001240481,#To-add-the-MX-records,-click-Create-new-record)
  - [To add the CNAME record, click Create new record](https://help.gohighlevel.com/support/solutions/articles/48001240481,#To-add-the-CNAME-record,-click-Create-new-record)

* * *

# Step-by-step LC Email Dedicated Domain Setup - Google Domain

1\. Once you are in the sub-account > Click on **Settings** \> **Email Services** \> **Dedicated Domain** > **\+ Add Domain**

Check out [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001222501)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

2\. If your Domain is companyname.com, you can set up the main Domain or sub-domain with LC-email.

Check out [How to move a sending domain from Mailgun to LeadConnector?](https://help.gohighlevel.com/support/solutions/articles/48001226115-how-to-set-up-a-dedicated-sending-domain-lc-email-#How-to-move-sending-domain-from-Mailgun-to-LeadConnector?)

Main Domain:

- If you are adding the main Domain, [it should not be used with Gsuite or any other email provider](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

Sub-domain:

- To set up the dedicated subdomain within LC-email, you can type **ANYTHING\_HERE**.companyname.com
  - Examples:
    - **replies.companyname.com**
    - **support**.companyname.com

3\. Click on **Add & Verify**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png?1681497266)

The next screen that you're taken to will ask you to add DNS records to your Domain. Leave this screen open for the next step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png?1681838621)

4\. Now log in to your DNS records based on where you get the Domain and add the 5 DNS records.

## To add the 1st TXT record

1. Log in to [domains.google.com](https://domains.google.com/)
2. Click into the domain you are trying to set up
3. Click DNS on the left panel, we are going to add 5 DNS records

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273463/original/nvtEdnUCOa_aEuQG29TmvxEc8zT-TEDQbw.png?1685008255)

Host name: **DO NOT INCLUDE THE ROOT DOMAIN**

- Depending on the subdomain you are trying to set up, if you are trying to set up
  - **lc**.companyname.com - The host name will be **lc**
  - **replies**.companyname.com - The host name will be **replies**
- If you are setting up a **main** domain like companyname.com, the hostname will be **@**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273966/original/QyOvl4oeTZwm5vxk_Qr4E9axVI_3VmGQbQ.png?1685008372)

Type: Select **TXT** from the Type menu options.

Data: Same for everyone

- paste the following record **v=spf1 include:mailgun.org ~all**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png?1681497695)

Don't click save yet, 4 more new records to add

Once you are done with the 1st record, click **Create new record**

## **To add the 2nd TXT record**

Type: Select **TXT** from the dropdown

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274267/original/tgkjiuJTNQWqB0YufpMnGh7eGG8ju2BhYQ.png?1685008457)

Host name:

it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **do not copy the main domain**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274349/original/QZx8yVWaSu8EU88v7eBp1CPDH4P80GKGXg.png?1685008484)

**\*\*Everyone's 2nd TXT record hostname and value is different**

Examples: **copy the highlighted part ONLY**

|     |     |
| --- | --- |
| Example 1 using subdomain:<br>Copy **mx.\_domainkey.helpdesk** as the hostname | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513) |
| Example 2 using **main Domain**:<br>Copy **mailo.\_domainkey** as the hostname | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537) |

Data:

Copy the 2nd TXT record here, **highlighted in the screenshot below**

- Value: paste the 2nd copied TXT record here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png?1681498466)

## To add the MX records, click **Create new record**

Depending on the subdomain you are trying to set up, if you are trying to set up

- **lc**.companyname.com - The host name will be **lc**
- **replies**.companyname.com - The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003027/original/5aF_dZ_ziXuTz59XlBASIHTyI7uQ7bOo_g.png?1685262791)**

If you have a Google Workspace account for receiving and sending emails on your root domain (user@example.com). In this case, make sure you are using a subdomain for your LC email dedicated domain. Check out the article: [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

Type: Select **MX** from the dropdown

Data: paste the following data

- Copy and paste **10** [**mxa.mailgun.org**](https://mxa.mailgun.org/)
- Click **+Add more to this record**
  - Copy and paste **10 mxb.mailgun.org**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003013/original/7ZgVLhVdhJ7tXtoJ_8k_TFkrR5RA2pUb4g.png?1685262753)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003080/original/w3lgIZMfVu8zipEIyYvMh72IQgpl6HADcA.png?1685262904)

## To add the CNAME record, click **Create new record**

Depending on the subdomain you are trying to set up, if you are trying to set up

- lc.companyname.com The host name will be **email.** **lc**
- replies.companyname.com The host name will be **email.** **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

Type: Select **CNAME** from the dropdown

Data: copy and paste **mailgun.org**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003126/original/UjjcYWc_abbbgStIJ5Q7rOwoXfIFdaAT4g.png?1685263000)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003129/original/4CjEilgb6jZy-PnRXT7Eyoxf94_AeHGPcw.png?1685263026)

Now that you have added 5 DNS records, click "Save"

Next, go back to the Email Services tab and click "Verify Domain"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png?1681499820)

Click the same button to "Verify Domain" again if some records are still not showing the green checkmark

Once you add all the DNS records and verify, you can make sure the [SSL Certificate for Dedicated Sending Domain (LC - Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001227438) is all set.

Finally, be sure to send a test email to ensure emails are being sent properly. [Click here to learn How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

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

- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup)
- [Google Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-)
- [GoDaddy Dedicated Sending Domain Setu (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-)
- [Siteground Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)

## Related Articles

- [Siteground Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-)
- [GoDaddy Dedicated Sending Domain Setu (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-)
- [What will be the order of Email Provider we will use to send emails?](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-)
- [LC Email / Mailgun replies not working when using WIX as the domain provider](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider)
- [Default Headers for Dedicated Sending Domains](https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains)
- [Email Tracking for LC Email](https://help.gohighlevel.com/support/solutions/articles/155000003213-email-tracking-for-lc-email)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001240481,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-/hit)