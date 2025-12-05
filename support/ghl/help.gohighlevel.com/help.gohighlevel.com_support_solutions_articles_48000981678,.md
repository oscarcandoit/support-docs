---
url: "https://help.gohighlevel.com/support/solutions/articles/48000981678,"
title: " Mailgun Setup - GoDaddy Domain Setup : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000981678,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000981678,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
6. Mailgun Setup - GoDaddy Domain Setup

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

# Mailgun Setup - GoDaddy Domain Setup

Modified on: Fri, 14 Apr, 2023 at 12:56 PM

- [Step-by-step Mailgun Setup - GoDaddy Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981678,#Step-by-step-Mailgun-Setup---GoDaddy-Domain-Setup)
  - [To add the 1st TXT record](https://help.gohighlevel.com/support/solutions/articles/48000981678,#To-add-the-1st-TXT-record)
  - [To add the 2nd TXT record](https://help.gohighlevel.com/support/solutions/articles/48000981678,#To-add-the-2nd-TXT-record)
  - [To add the 1st MX records](https://help.gohighlevel.com/support/solutions/articles/48000981678,#To-add-the-1st-MX-records)
  - [To add the 2nd MX records](https://help.gohighlevel.com/support/solutions/articles/48000981678,#To-add-the-2nd-MX-records)
  - [To add the CNAME record](https://help.gohighlevel.com/support/solutions/articles/48000981678,#To-add-the-CNAME-record)
- [A video to recap](https://help.gohighlevel.com/support/solutions/articles/48000981678,#A-video-to-recap%3A)

# Step-by-step Mailgun Setup - GoDaddy Domain Setup

1\. Sign up for [Mailgun.com](https://signup.mailgun.com/new/signup)

2\. Check your email inbox to verify the email address

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3\. Login to Mailgun, Click on **Sending** \> **Add New Domain**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4\. If your domain is companyname.com, you can either set up the main domain or subdomain with Mailgun.

A. Main domain:

- If you are adding the main domain, [it should not be used with Gsuite, or any other email provider](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

    Subdomain:

- To set up the subdomain with Mailgun, you can type **ANYTHING\_HERE**.companyname.com
  - Examples:
    - mg.companyname.com
    - replies.companyname.com
    - support.companyname.com

B. Please set up the domain or subdomain under US, **not EU. not EU. not EU.**

C. Click on **Add domain**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

The next screen that you're taken to will ask you to add DNS records to your domain. Leave this screen open for the next step.

![Screen Shot 2022-09-11 at 6.39.22 PM.png](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

5\. Now log in to your DNS records based on where you get the domain and add the 5 DNS records.

## To add the 1st TXT record

To [Add your first TXT record](https://ca.godaddy.com/help/add-a-txt-record-19232), Sign in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio).

Click on the three dots for the Domain Edit Options next to your domain

Select **Edit DNS**. You may need to scroll down to see the Edit DNS option.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

Click on **Add** to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

A. Type: Select **TXT** from the Type menu options.

B. Host: **DO NOT INCLUDE THE ROOT DOMAIN**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292759996/original/0Cj6mdSJlEYwYG4Qt4KqNjenCcUdx500Tw.png?1681494292)

- Depending on the subdomain you are trying to set up, if you are trying to set up
  - [mg.companyname.com](https://mg.companyname.com/) The host name will be **mg**
  - [replies.companyname.com](https://replies.companyname.com/) The host name will be **replies**
- If you are setting up a **main** domain like companyname.com, the host name will be **@**

C. TXT Value: Same for everyone

- paste the following record **v=spf1 include:mailgun.org ~all**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760093/original/5Gl9rXwkPu648V7b7A73EVcYsiwQjSX3fQ.png?1681494342)

D. Click on **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)**

## To add the 2nd TXT record

Click on **Add** to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

A. Type:

    Select **TXT** from the Type menu options.

B. Host:

    it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT INCLUDE THE ROOT DOMAIN**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760457/original/uKwd7XSYgsN0abFfq-uLghjMc4gYBKFShw.png?1681494446)**

**\*\*Everyone's 2nd TXT record host name and value is different**

Examples: **copy the highlighted part ONLY**

|     |     |
| --- | --- |
| Example 1 using subdomain:<br>Copy mx.\_domainkey.helpdesk as the host name | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945) |
| Example 2 using main domain:<br>Copy mailo.\_domainkey as the host name | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951) |

C. TXT Value: Head back to Mailgun and Copy the 2nd TXT record here **highlighted in the screenshot below**

- Value: paste the 2nd very long copied TXT record here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

D. Click on **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)**

## To add the 1st MX records

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

Click on **Add** to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

If you have a Gsuite account to capture incoming emails for the main domain. Make sure you are using a subdomain for Mailgun. Check out [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

A. Type: Select **MX** from the Type menu options.

B. Host: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761281/original/ilff0N0hrTpB9rOZOLtKWFcpd_pFm1FAAg.png?1681494876)

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](https://mg.companyname.com/) The host name will be **mg**

[replies.companyname.com](https://replies.companyname.com/) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

C. Points to: Same for everyone

    paste the following data **[mxa.mailgun.org](https://mxa.mailgun.org/)**

D. Priority is **10** which is also same for everyone no matter what domain you are trying to set

E. Click on **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

## To add the 2nd MX records

Click on **Add** to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

A. Type: Select **MX** from the Type menu options.

B. Host: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761375/original/qVuzSSON9aWqKQCpGlKX89woV1txgzea3g.png?1681494908)

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](https://mg.companyname.com/) The host name will be **mg**

[replies.companyname.com](https://replies.companyname.com/) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

C. Points to: Same for everyone

    paste the following data **mxb.mailgun.org**

D. Priority is **10** which is also same for everyone no matter what domain you are trying to set

E. Click on **Save**

## To add the CNAME record

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

Click on **Add** to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

A. Type: Select **CNAME** from the Type menu options.

B. Host: Different for everyone

Head back to Mailgun to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761488/original/yTenM0KsBABRkiuopqOQIzy7E_TjKkeVDw.png?1681494956)

Depending on the subdomain you are trying to set up, if you are trying to set up

- mg.companyname.com The host name will be **email** **.** **mg**
- replies.companyname.com The host name will be **email** **.** **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

C. Points to: Same for everyone

        paste the following data **mailgun.org**

D. Click on **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

Now that you have added 5 records, Go back to Mailgun and click on **Verify DNS Settings**

Click the same button to **Verify DNS Settings** again if some records are still not showing the green checkmark

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

# A video to recap:

Custom Mailgun Domain Setup - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[Custom Mailgun Domain Setup](https://www.youtube.com/watch?v=zGOhRHky8kQ)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=zGOhRHky8kQ&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 4:23
•Live

•

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

- [Mailgun - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981677-mailgun-overview)
- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)
- [Mailgun Setup - GoDaddy Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup)
- [MailGun Setup - HostGator Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981679-mailgun-setup-hostgator-domain-setup)
- [Mailgun Setup - Namecheap Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup)
- [Mailgun Setup - CloudFlare Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48001064413-mailgun-setup-cloudflare-domain-setup)

## Related Articles

- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)
- [What will be the order of Email Provider we will use to send emails?](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [GoDaddy Dedicated Sending Domain Setu (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Mailgun - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981677-mailgun-overview)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000981678,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup/hit)