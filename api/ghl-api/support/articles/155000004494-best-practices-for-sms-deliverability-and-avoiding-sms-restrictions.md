---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004494-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions
category: articles
type: article
scraped: 2025-10-28T16:17:45.222Z
title:  Best Practices for SMS deliverability and Avoiding SMS Restrictions : LeadConnector 
status_code: 200
---

#  Best Practices for SMS deliverability and Avoiding SMS Restrictions : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [LeadConnector Phone](https://help.leadconnectorhq.com/support/solutions/folders/48000689487)

## Best Practices for SMS deliverability and Avoiding SMS Restrictions  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004494-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions\# "Print this Article")

Modified on: Thu, 16 Jan, 2025 at 6:32 AM

* * *

# **Error and Opt-out Rate Monitoring**

- We are focused on helping our customers deliver trusted communications. To make sure that the carrier does not block or suspend the account permanently based on bad usage.

- We will be monitoring the delivery rate of the overall account and be taking proactive measures(as mentioned below) to keep the delivery rate in check:
  - **Violation Email**-We will send out an email notification as soon as the subaccount hits the error rate of 8% and opt-out rate of 2%.
  - **Temporary Account Restriction -** We will send out a suspension email as the subaccount hits the error rate of 12.5% and opt-out rate of 3%.

**Please Note:**

```
As soon as the account will hit the temporary suspension all upcoming outbound SMS will be failed till 00:00 AM UTC.
```

### **What should we do when we get a violation email?**

1. ### Stop all your workflows, campaigns, triggers, and/or bulk actions to contacts who have not explicitly opted in to receive messages from the sub-account.

2. Enable and customize the Opt Out language and SenderID message as per your use case so that all the upcoming messages are not flagged.

3. Please discuss this with your client to make no bulk communication or messages blast or cold prospecting message campaigns are sent in the near future before we receive your reply to this ticket.

### **What are error and opt-out rates and good to have a threshold?**

- A **High Opt-Out Rate** indicates that contacts receiving your messages have objected, generated complaints, or marked your SMS as spam. **A good opt-out rate is typically in the range of 0—1%. Once the opt-out rate hits 2%, the sub-account will be locked for sending text messages for 24 hours.**
- A **High Delivery Error Rate** indicates that you are sending SMS to contacts that are no longer in service, are unreachable, or use a non-SMS-capable device such as a landline. This may also mean that external carrier filters are refusing to deliver your SMS due to bad sending behavior in the past. **A good error rate is typically in the range of 0—6%. Once the error rate hits 12%, the sub-account will be locked for sending text messages for 24 hours.**


### **What do I do to get the subaccount suspension removed early?**

- The subaccount suspension will be lifted in 24 hours. However, If the sub-account is permanently suspended. Please refer to the articleWhy is your account suspended to unsuspend the sub-account.


**How to prevent future SMS suspension**

The sub-account should be able to send SMS after 00:01 AM UTC the next day after you received the non-compliant email. You can check the best practices below on how to reduce the error rate:

1\. [**_Add Opt Out language (reply STOP to unsubscribe)_**](https://highlevel.canny.io/changelog/lc-phone-release-features-enhancement-and-optimisations-1) in all the first SMS sent to a new contact -

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039922164/original/FehTT8eijZnPelnxrUxSOxw2mJo91h9Cvg.png?1737013057)](https://help.gohighlevel.com/support/solutions/articles/48001213941-isv-messaging-policy#3.-Opt-Out-Language-addition)

2\. [**_Add Sender information (Introduction of yourself/company)_**](https://highlevel.canny.io/changelog/lc-phone-release-features-enhancement-and-optimisations-1) in all the first SMS sent to a new contact-

3\. Do not send messages to SMS-incapable devices like landlines, **_Enable the Number Validation feature_** for this. This feature will look up the number before sending out the message and enable and temporary DND on the contact.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039922166/original/5oP1oLsl249tRXp2FSF86tBhdLxn4BgwSg.png?1737013058)

4. **_Avoid sending URLs shortened using a public URL shortener_** like bit.ly or rb.gy, instead send the original fill link.

5\. **_Make sure the Business Profile, A2P Brand and campaign are registered_** as the messaging world is moving towards the direction where with these registrations no messages will be delivered. You can view the trust centre tab once the sub-account country is set to US

If the country is not set to US, you can still use the system following the best practices so that the delivery rate is high and the SMS is not flagged. A2P campaign is just a more enhanced safety net for delivery but that doesn't mean you cannot use the system without it.

**Note** \- Campaign Verification can take up to 6-7 weeks if it is not approved after the 7th week, please raise a support ticket with us to escalate the request to TCR.

6. **_For future website form opt-in setup, please include a checkbox to ensure the lead gives consent when filling out_** the form if that's where the leads opt-in.

You can type something like this I just grabbed it from another client as an example:

_By providing your name and contact information you are expressly consenting to receive communications from COMPANY\_NAME or one of their licensed agents, which may include phone calls (including to any wireless number that you provide) including automatic telephone dialling systems or by artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services including health, medicare and life insurance plans. By providing your information, you understand that your consent is not a condition of the purchase of any product or services, and carrier messaging and data rates may apply. You may revoke this consent at any time by calling us at 1-800-000-000 or by emailing us at EMAIL\_HERE to be placed on our do-not-call list._

7\. Good to Have: The first message should have the source of how your leads opt in.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039922165/original/w-uopj5ps46iFcgKxETnJfh6CdLQWzQcWg.png?1737013057)

8\. Good to Have: Add Opt-in language so contacts are actively double opt-in via sms and web form checkbox (reply 1 to subscribe)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004494-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004494-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions*  
*Generated on: 2025-10-28T16:17:45.222Z*
