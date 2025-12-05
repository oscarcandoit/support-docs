---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005093-30003-number-unreachable-or-out-of-service-
category: articles
type: article
scraped: 2025-10-28T16:20:56.008Z
title:  30003: Number unreachable or out of service. : LeadConnector 
status_code: 200
---

#  30003: Number unreachable or out of service. : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [Error Code and Warning Dictionary](https://help.leadconnectorhq.com/support/solutions/folders/155000001189)

## 30003: Number unreachable or out of service.  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005093-30003-number-unreachable-or-out-of-service-\# "Print this Article")

Modified on: Mon, 5 May, 2025 at 6:29 AM

* * *

## **ERROR: 30003**

* * *

**Description**

The destination handset you are trying to reach is switched off or otherwise unavailable.

**Possible Causes**

- The destination handset you are trying to reach is switched off or otherwise unavailable.
- The device you are trying to reach does not have sufficient signal
- The device cannot receive SMS (for example, the phone number belongs to a landline)
- There is an issue with the mobile carrier

**Possible Solutions**

In some cases, a delivery error may occur once due to a transient issue downstream of Lead Connector. To test whether the issue occurs again.

If you see similar results, continue troubleshooting with the following checklist:

- Is the destination device powered on?
- Does the device have sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
- Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
- Can the device receive non- LC SMS?
- Can the device receive messages from another Lead Connector number (non-Alphanumeric Sender ID), or with a shorter one-segment (non-concatenated) body?
- Can other devices using the same mobile carrier receive your messages?
- If you can rule out all of the above issues, continue troubleshooting below.

**Messages sent from long codes**

Repeated Error 30003 results on undelivered messages sent from long codes (regular phone numbers) and Toll-Free numbers could be due to carrier filtering.

The rules for carrier filtering vary throughout the industry, making it difficult at times to pin down exactly why a message is being filtered out. For more details including potential workarounds, please see this Help Center article "How Does Carrier Filtering Work?"

**Continued Error 30003 issues**

Lead Connector's Support team can help investigate what went wrong with delivering your message. Please collect 3 or more message examples in your SMS logs from the last 24 hours that were flagged with Error 30003, and open a support request.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005093-30003-number-unreachable-or-out-of-service-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005093-30003-number-unreachable-or-out-of-service-*  
*Generated on: 2025-10-28T16:20:56.008Z*
