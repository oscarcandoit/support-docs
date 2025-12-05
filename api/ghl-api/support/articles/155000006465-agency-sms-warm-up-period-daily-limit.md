---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000006465-agency-sms-warm-up-period-daily-limit
category: articles
type: article
scraped: 2025-10-28T16:29:49.034Z
title:  Agency SMS Warm-Up Period & Daily Limit : LeadConnector 
status_code: 200
---

#  Agency SMS Warm-Up Period & Daily Limit : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [LeadConnector Phone](https://help.leadconnectorhq.com/support/solutions/folders/48000689487)

## Agency SMS Warm-Up Period & Daily Limit  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000006465-agency-sms-warm-up-period-daily-limit\# "Print this Article")

Modified on: Wed, 22 Oct, 2025 at 3:42 AM

* * *

### **Overview**

For **new Agencies** (where the agency account is **less than 7 days old**), a warm-up period is applied to control SMS sending limits. This helps ensure compliance and smooth scaling of SMS traffic.

* * *

### **Daily SMS Limit**

During this warm-up period, the **daily SMS limit** is calculated as:

**250 × n**, where:

- **n** = age of the agency in days

- **1 ≤ n ≤ 7**


For example:

| **Day** | **Daily SMS Limit** |
| --- | --- |
| Day 1 | 250 messages |
| Day 2 | 500 messages |
| Day 3 | 750 messages |
| Day 4 | 1000 messages |
| Day 5 | 1250 messages |
| Day 6 | 1500 messages |
| Day 7 | 1750 messages |

* * *

### **Error Message**

When this daily SMS limit is exceeded, the following **customer-friendly message** will be shown:

> **Agency SMS limit reached due to 7-day warm-up period (day {n}/7). Sending resumes at {reset\_time\_local}. \[Learn more\]**

- **{n}** → replaced with the current day of the warm-up period

- **{reset\_time\_local}** → replaced with the local reset time for SMS sending


Note- **After Day 7**: The warm-up period ends, and there is **no SMS sending limit** for the agency.

* * *

### **Troubleshooting Steps**

If you encounter this error:

1. **Check the age of the agency**: Confirm whether the account is still within the first 7 days.

2. **Review the daily SMS usage**: Verify how many messages have already been sent today.

3. **Wait until the reset time**: The error message will show the local time when sending resumes.

4. **Test after reset**: Try sending messages again once the daily limit resets.

5. **After 7 days**: If the error persists beyond the 7-day warm-up period, contact support for further assistance.


Note- If the problem persists or you believe there’s still an issue after completing the steps, you can reach out to our **Support Team** for further assistance.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000006465-agency-sms-warm-up-period-daily-limit/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000006465-agency-sms-warm-up-period-daily-limit*  
*Generated on: 2025-10-28T16:29:49.034Z*
