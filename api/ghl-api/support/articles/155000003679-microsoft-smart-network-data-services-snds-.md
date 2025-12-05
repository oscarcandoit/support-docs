---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-
category: articles
type: article
scraped: 2025-10-28T16:13:30.432Z
title:  Microsoft Smart Network Data Services (SNDS) : LeadConnector 
status_code: 200
---

#  Microsoft Smart Network Data Services (SNDS) : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/48000454677) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/folders/48000687936)

## Microsoft Smart Network Data Services (SNDS)  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-\# "Print this Article")

Modified on: Mon, 21 Oct, 2024 at 11:33 PM

* * *

We are excited to offer a new feature for our customers who have purchased IP subscriptions from us— **IP Status Monitoring** through Microsoft SNDS (Smart Network Data Services) integration. This feature allows you to monitor your IP addresses' deliverability health, helping you avoid potential email deliverability issues.

**TABLE OF CONTENTS**

- [What is Microsoft SNDS?](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-#What-is-Microsoft-SNDS?)
- [How to Use the IP Status Feature](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-#How-to-Use-the-IP-Status-Feature)
- [Interpreting Key Metrics](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-#Interpreting-Key-Metrics%E2%80%8B)
- [How to Handle IP Blocking or High Spam Rates](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-#How-to-Handle-IP-Blocking-or-High-Spam-Rates)

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

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003679-microsoft-smart-network-data-services-snds-*  
*Generated on: 2025-10-28T16:13:30.432Z*
