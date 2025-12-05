---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004151,"
title: " Microsoft Smart Network Data Services (SNDS) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004151,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004151,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. Microsoft Smart Network Data Services (SNDS)

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

# Microsoft Smart Network Data Services (SNDS)

Modified on: Sun, 10 Nov, 2024 at 11:31 PM

We are excited to offer a new feature for our customers who have purchased IP subscriptions from us— **IP Status Monitoring** through Microsoft SNDS (Smart Network Data Services) integration. This feature allows you to monitor your IP addresses' deliverability health, helping you avoid potential email deliverability issues.

**TABLE OF CONTENTS**

- [What is Microsoft SNDS?](https://help.gohighlevel.com/support/solutions/articles/155000004151,#What-is-Microsoft-SNDS?)
- [How to Use the IP Status Feature](https://help.gohighlevel.com/support/solutions/articles/155000004151,#How-to-Use-the-IP-Status-Feature)
- [Interpreting Key Metrics](https://help.gohighlevel.com/support/solutions/articles/155000004151,#Interpreting-Key-Metrics%E2%80%8B)
- [How to Handle IP Blocking or High Spam Rates](https://help.gohighlevel.com/support/solutions/articles/155000004151,#How-to-Handle-IP-Blocking-or-High-Spam-Rates)

### **What is Microsoft SNDS?**

Microsoft SNDS is a tool that provides insights into the email activity of your IPs on Microsoft platforms, such as Outlook and Hotmail. It offers essential information on IP health, spam complaints, filter results, and blocked status, ensuring that your emails reach the intended recipients.

### **How to Use the IP Status Feature**

1. **Access the IP Status Dashboard**:

   - Navigate to **Settings** \> **Email Services** \> **Postmaster Tools** \> **Microsoft SNDS**.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035109257/original/RkEAgvx1tE7wc_8z2jcSbEll7Q5tyNZNBw.png?1729520424)
2. **Select the IP Address**:

   - You will see a list of IPs with metrics such as:
     - **Filter Results**: Displays the percentage of messages flagged as spam.
     - **Blocked Status**: Shows whether the IP is blocked on Microsoft platforms.
     - **Trap Hits**: Indicates the number of messages flagged by spam traps.
     - **Complaint Rate**: The percentage of users who reported the emails as spam.
3. **IP Health Overview**:

   - Clicking **View Details** provides an in-depth look at the selected IP, including:
     - **Activity Period**: The timeframe of email activity.
     - **RCPT Commands and DATA Commands**: The volume of messages processed.
     - **Spam and Complaint Rates**: Helps you understand the IP reputation.
4. **Download CSV Reports**:

   - For advanced reporting, click on the **Download CSV** button to export the detailed activity for further analysis.

### **Interpreting Key Metrics**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035109530/original/zyeGdoevGu4d1ngOfTqb0vFFXK_V9gaHxQ.png?1729520626)

1. **Filter Results**

   - **Spam < 10%**: Your emails are largely bypassing spam filters. This is a good indicator of a healthy reputation.
   - **10% spam or higher**: Some emails are being classified as spam. Check your sending practices, content, and lists to avoid deliverability issues.
2. **Blocked Status**

   - **No**: Your IP is not blocked. It can send emails without restrictions.
   - **Yes**: Your IP is blocked due to possible spam behavior or policy violations. Immediate steps are required to investigate the root cause and resolve the issue.
3. **Trap Hits**

   - **0 Trap Hits**: Your IP is not interacting with spam traps. This is ideal for maintaining a clean sender reputation.
   - **One or More Trap Hits**: Spam traps are receiving your emails. This suggests that your list may contain invalid or suspicious addresses. Clean your list to prevent further damage to your reputation.
4. **Complaint Rate**

   - **<0.1%**: A complaint rate below 0.1% is excellent and shows that recipients are generally satisfied with your emails.
   - **>0.1%**: A higher complaint rate indicates that recipients are marking your emails as spam. Review your email content and ensure your recipients have opted in.
5. **RCPT Commands**

   - This represents the total number of recipients who received your emails. A higher value indicates heavy email sending activity. Monitor this to ensure your email volume aligns with your expected campaign size.
6. **DATA Commands**

   - This metric tracks the total number of data payloads processed. It reflects the email messages transmitted by your IP address. Ensure the volume is consistent with your planned email campaigns to avoid triggering spam filters.
7. **Trap Message Period**

   - This shows the number of days your emails were detected by spam traps. Ideally, this value should be **0** days. Any non-zero value requires immediate investigation.
8. **Red Days (Filter Result Issues)**

   - **0 Red Days**: Your email filtering metrics are in good standing, and emails are not being flagged as spam.
   - **One or More Red Days**: Indicates that some days had higher spam rates or deliverability issues. Investigate the sending patterns for those periods and adjust accordingly.

### **How to Handle IP Blocking or High Spam Rates**

If your IP is blocked or has a high spam rate:

1. **Review Your Metrics**

   - Analyze recent activities, especially around trap hits and complaints.
2. **Clean Your Mailing Lists**

   - Remove invalid or inactive addresses and ensure all recipients have opted in.
3. **Request IP Delisting**

   - If your IP is blocked, submit a delisting request using the [Microsoft Outlook Support page](https://olcsupport.office.com/).

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

- [Integrating Outlook with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002371-integrating-outlook-with-highlevel-calendars)
- [SmartLists for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000005147-smartlists-for-custom-objects)
- [Smart Send: Best Time Recommendation in Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006754-smart-send-best-time-recommendation-in-email-marketing-campaigns)
- [Smart Send: Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006628-smart-send-email-marketing-campaigns)
- [How to create Customer List Custom Audience](https://help.gohighlevel.com/support/solutions/articles/155000004541-how-to-create-customer-list-custom-audience)
- [Highlevel Security and Compliance Overview](https://help.gohighlevel.com/support/solutions/articles/155000000574-highlevel-security-and-compliance-overview)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004151,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004151-microsoft-smart-network-data-services-snds-/hit)