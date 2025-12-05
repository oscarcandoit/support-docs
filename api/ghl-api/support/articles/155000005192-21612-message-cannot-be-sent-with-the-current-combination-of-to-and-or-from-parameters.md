---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005192-21612-message-cannot-be-sent-with-the-current-combination-of-to-and-or-from-parameters
category: articles
type: article
scraped: 2025-10-28T16:22:12.263Z
title:  21612: Message cannot be sent with the current combination of "To" and/or "From" parameters : LeadConnector 
status_code: 200
---

#  21612: Message cannot be sent with the current combination of "To" and/or "From" parameters : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [Error Code and Warning Dictionary](https://help.leadconnectorhq.com/support/solutions/folders/155000001189)

## 21612: Message cannot be sent with the current combination of "To" and/or "From" parameters  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005192-21612-message-cannot-be-sent-with-the-current-combination-of-to-and-or-from-parameters\# "Print this Article")

Modified on: Mon, 5 May, 2025 at 6:41 AM

* * *

## **ERROR: 21612**

* * *

**Description**

Message cannot be sent with the current combination of "To" and/or "From" parameters.

**Possible Causes**

**Number formatting:** The format you used for the "To" or "From" number may not be formatted using the [E.164 format.](https://www.twilio.com/docs/glossary/what-e164) LeadConnector standardises numbers using the E.164 format. If the "To" or "From" number of this message were altered by LeadConnector in a way that you didn't expect, try re-submitting the message with E.164 formatted addresses.

**Destinations where LeadConnector does not have connectivity:** It is possible that LeadConnector does not yet have service with the carrier you are trying to reach. Contact Support.

**Sender ID restrictions in the destination country:** Many countries limit which numbers, short-codes, and/or alphanumeric senders can be used in that region. Consult the [SMS guidelines for the destination region](https://www.twilio.com/en-us/guidelines/sms).

**Possible Solutions**

Consult the linked documentation for each cause. You can also try sending again with a different "To" and "From" combination.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005192-21612-message-cannot-be-sent-with-the-current-combination-of-to-and-or-from-parameters/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005192-21612-message-cannot-be-sent-with-the-current-combination-of-to-and-or-from-parameters*  
*Generated on: 2025-10-28T16:22:12.263Z*
