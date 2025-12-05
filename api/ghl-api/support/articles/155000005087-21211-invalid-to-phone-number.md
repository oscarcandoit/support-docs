---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005087-21211-invalid-to-phone-number
category: articles
type: article
scraped: 2025-10-28T16:19:41.313Z
title:  21211: Invalid 'To' Phone Number : LeadConnector 
status_code: 200
---

#  21211: Invalid 'To' Phone Number : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [Error Code and Warning Dictionary](https://help.leadconnectorhq.com/support/solutions/folders/155000001189)

## 21211: Invalid 'To' Phone Number  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005087-21211-invalid-to-phone-number\# "Print this Article")

Modified on: Mon, 5 May, 2025 at 6:23 AM

* * *

# ERROR: 21211

* * *

**Description**

You attempted to initiate an outbound phone call or send a message, but the To phone number you supplied was not a valid phone number or was incorrectly formatted. Platform accepts phone numbers in [E164](https://en.wikipedia.org/wiki/E.164) format: \[+\] \[country code\] \[subscriber number including area code\].

**Possible Causes**

The formatting of the **To** number you supplied was invalid.

- You attempted to send a message or place a call from a Lead Connector number to itself (i.e. putting the same Lead Connector number in the **To** and **From** parameters).
- You attempted to send a message to Short Code.
- You attempted to send a message to an Alphanumeric Sender ID.
- You attempted to send a message to a **To** number with an invalid prefix using a Messaging Service.

**Possible Solutions**

- Ensure you have formatted your phone numbers in E164 format: \[+\] \[country code\] \[subscriber number including area code\].
- Ensure you have used the correct [country calling code](https://en.wikipedia.org/wiki/List_of_telephone_country_codes#Alphabetical_listing_by_country_or_region) for the phone number you are calling.
- Ensure you are not attempting to call or message from a Lead Connector number to itself.
- Ensure you are not attempting to send messages to Short Codes or Alphanumeric Sender IDs. These sender types cannot receive messages from Lead Connector numbers.
- Review the 'To' number for any typos or incorrect input methods.
- When sending messages using a Messaging Service, instead of formatting a To number with an invalid prefix, remove the prefix and send directly to the To number using E164 format: \[+\] \[country code\] \[subscriber number including area code\]. If the To number is able to accept RCS messages and there is an RCS Agent available in the Messaging Service Sender Pool, it will be selected to send to the given To number.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005087-21211-invalid-to-phone-number/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005087-21211-invalid-to-phone-number*  
*Generated on: 2025-10-28T16:19:41.313Z*
