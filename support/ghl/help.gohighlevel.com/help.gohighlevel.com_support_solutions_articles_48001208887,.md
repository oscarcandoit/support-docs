---
url: "https://help.gohighlevel.com/support/solutions/articles/48001208887,"
title: " How to send a test email in the Conversation : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001208887,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001208887,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. How to send a test email in the Conversation

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

# How to send a test email in the Conversation

Modified on: Wed, 24 Jul, 2024 at 10:51 AM

**TABLE OF CONTENTS**

- [Creating a test contact](https://help.gohighlevel.com/support/solutions/articles/48001208887,#Creating-a-test-contact)
- [Sending the test email](https://help.gohighlevel.com/support/solutions/articles/48001208887,#Sending-the-test-email)
- [Configuring the sender email](https://help.gohighlevel.com/support/solutions/articles/48001208887,#Configuring-the-sender-email)
  - [If you are using Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001208887,#If-you-are-using-Mailgun)
  - [If you are using SMTP integration](https://help.gohighlevel.com/support/solutions/articles/48001208887,#If-you-are-using-SMTP-integration)
- [Troubleshooting email delivery](https://help.gohighlevel.com/support/solutions/articles/48001208887,#Troubleshooting-email-delivery)
- [If email replies are not coming back](https://help.gohighlevel.com/support/solutions/articles/48001208887,#If-email-replies-are-not-coming-back)

## **Creating a test contact**

- Click on **Click here to switch** on the top left once you are in the agency view
- Click the subaccount you want to test in
- Click on **Contacts**

![](https://i.ibb.co/zNV0S4V/2023-1-24-11-50-37.gif)

Click on **Add Contact**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821714/original/3CoAFhjjyHDlYZmB19SN0T_TqAK1e37VWA.jpg?1721834838)

**Fill out the First name and email and click Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821818/original/I96Iz9MiMb85t_HZYfAbvYtTFXY5aptZcw.jpg?1721834890)

## **Sending the test email**

It should automatically redirect you to the conversation page, click **Send Email** below

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821920/original/mO1ZsfTekzCkLub_fVoTZq3HSilwgaU1Rg.jpg?1721834939)

## **Configuring the sender's email**

The highlighted part is where we can configure the sender's email address. [Check here to see how to configure the sender email address when sending bulk emails.](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000979925-masking-campaign-emails-from-name-address) By default, it will show the user logged in as the sender's email address.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822266/original/ooUl9-PlqUjmPxfLAtVJujfPR5tACZMRDg.jpg?1721835184)

### **If you are using Mailgun**

If I mask the sender email like testing@gmail.com, the reply-to address will show as testing@replies.subdomain.com, which is the Mailgun subdomain we set up for the sub-account in agency Settings-> Email Services > Location Settings. Replies will still appear correctly in the HighLevel sub-account's Conversation tab.

e.g. my Mailgun subdomain is [subdomain.gohighlevel.com](https://subdomain.gohighlevel.com/) so the reply-to email address will show kate@subdomain.gohighlevel.com

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822829/original/sIHHts5GEbn1g0b-ruhREN619Is0x-QMkA.jpg?1721835508)

We can set [testing@subdomain.com](mailto:testing@subdomain.com) as the sender's email address to enhance email deliverability as the reply-to address domain will match the sender's email address.

You can also set up [cold inbound email](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup) to capture any emails going to emails ending with @replies.subdomain.com

### **If you are using SMTP integration:**

Go to Sub-account **Settings** -\> Email Services

Copy the highlighted email that's integrated as the SMTP and use that as the sender email in the conversation tab

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029823782/original/2kuSUuG1Pr11ztYDcKVm960c_D1TdBV7PQ.jpg?1721836209)

Depending on what is the SMTP integration you are using, you could set up an alias/verify sender to send from other emails

\- [Setting up an alias for Google SMTP](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)

\- [Setting up an alias for Zoho SMTP](https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider)

\- [Verifying sender email with Sendgrid](https://docs.sendgrid.com/ui/sending-email/senders)

## **Troubleshooting email delivery:**

Once you send the email and if you are not able to receive it, be sure to check the spam folder.

For the error that we display in the Conversation view, we will fetch the error we got from the Mailgun API/ SMTP server and display it. If you click on the error icon to view the full error message, it should provide detail on why the email is not able to send.

If the error is not helpful, please open a support ticket with the SMTP provider so they can provide the delivery status on that email.

If you are using Mailgun, you can [check the Mailgun logs](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun) and check out our [email not sending help doc](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000981687-emails-not-sending).

## **If email replies are not coming back**

Once you receive the email, you can reply to the email and see if the reply will show up in the Conversation tab. If not, please check what you could do [When email replies are not coming back to the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation).

* * *

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

- [Email Signatures](https://help.gohighlevel.com/support/solutions/articles/48000982598-email-signatures)
- [Email Services Configuration - Reply & Forward Settings](https://help.gohighlevel.com/support/solutions/articles/48001155000-email-services-configuration-reply-forward-settings)
- [How to Install HighLevel's Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)
- [Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions)
- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)
- [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001208887,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation/hit)