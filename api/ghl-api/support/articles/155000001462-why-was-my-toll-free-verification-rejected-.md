---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-
category: articles
type: article
scraped: 2025-10-28T16:04:36.236Z
title:  Why Was My Toll-Free Verification Rejected? : LeadConnector 
status_code: 200
---

#  Why Was My Toll-Free Verification Rejected? : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [LeadConnector Phone](https://help.leadconnectorhq.com/support/solutions/folders/48000689487)

## Why Was My Toll-Free Verification Rejected?  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-\# "Print this Article")

Modified on: Fri, 24 Nov, 2023 at 4:26 AM

* * *

If your Toll-Free verification request fails for eligible reasons, you can correct and resubmit your request. For a full list of eligible rejection reasons see below.

If eligible, you can resubmit your Toll-Free verification after correcting the identified content violation.

```
[Toll-Free Verification Guide for LC - Phone (US/Canada)](https://help.leadconnectorhq.com/support/solutions/articles/155000000180-toll-free-verification-guide-for-lc-phone-us-canada-)
```

Toll-Free verification submissions that are eligible for resubmission will be left in a Pending state while waiting for the requested information. If no response is received within 7 days, the submissions will expire and you will have to submit a new submission.

* * *

**TABLE OF CONTENTS**

- [Rejection types eligible for resubmission](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#Rejection-types-eligible-for-resubmission)
- [Rejection types ineligible for resubmission](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#Rejection-types-ineligible-for-resubmission)
- [Frequently Asked Questions (FAQs)](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#Frequently-Asked-Questions-(FAQs))
  - [1. What happens to my traffic if my Toll-Free number is rejected?](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#1.%C2%A0What-happens-to-my-traffic-if-my-Toll-Free-number-is-rejected?)
  - [2\. My verification request was rejected, and is ineligible for resubmission - What can I do?](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#2.-My-verification-request-was-rejected,-and-is-ineligible-for-resubmission---What-can-I-do?)
  - [3\. What happens if I don't complete Verification?](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#3.-What-happens-if-I-don't-complete-Verification?)
  - [4\. I am sending the limited allowed amount of segments but messages are still not going through.](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#4.-I-am-sending-the-limited-allowed-amount-of-segments-but-messages-are-still-not-going-through.)
  - [5\. Do I need to be a US business in order to register at a Toll-Free number?](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#5.-Do-I-need-to-be-a-US-business-in-order-to-register-at-a-Toll-Free-number?)
  - [6\. Will I be charged if I encounter an error when sending an SMS?](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-#6.-Will-I-be-charged-if-I-encounter-an-error-when-sending-an-SMS?)

* * *

## **Rejection types eligible for resubmission**

Each of the below rejection codes is eligible for resubmission. To resolve these issues, please take the corrective action(s) outlined in the table below, and then re-submit your Toll-Free Verification request with the updated information.

|     |     |     |     |
| --- | --- | --- | --- |
| Error Code | Rejection category | Rejection reason | Correction needed |
| 30448 | Content Violation - SHAFT - Alcohol with no robust age gate - Eligible for Resubmission with robust age gate | Age gate on site or in submission was similar to:<br>“Are you 18/21+” Click Yes or No | Changing the Age gate to be collecting the Birthday in the form of Month/Day/Year.<br>Example: Please Enter Your Birthday: MM/DD/YYYY |
| 30448 | Campaign Violation - Age Gate Not Present / Not Acceptable - Eligible for Resubmission with Robust Age Gate implemented | Age gate on site or in submission was similar to:<br>“Are you 18/21+” Click Yes or No | Changing the Age gate to be collecting the Birthday in the form of Month/Day/Year.<br>Example: Please Enter Your Birthday: MM/DD/YYYY |
| 30449 | High Risk - Public URL Shortener - correct to branded url domain | Link is a free public domain link associated with high abuse rates | Update link to show brand or paste full unshortened link to website |
| 30449 | High Risk - Non-secured URL - correct to https:// | Rejected for insecure URL in message contents - only secure urls may be sent via A2P | Adding the https protocol |
| 30445 | Invalid Information - Can't Verify Business Information - Correct Business Information / Address / Contact / URL - Eligible for Resubmission | Business information could not be verified, was not provided, is not valid | Provide the end user business information in all fields |
| 30445 | Invalid Information - Can't Validate URL - Website is not accessible / not available - Eligible for Resubmission | Corporate URL/Website provided did not resolve, is not yet live, says “Coming Soon”, password protected, etc | Ensure the Corporate URL/Website is live, working, and publicly accessible |
| 30445 | Invalid Information - ISV Contact Information Provided, Need Assigned End User - Eligible for Resubmission | Business information provided is an ISV or not the end user that will be sending out SMS content | Providing the end-user business name, address, first and last name contact, email address, and URL that will be directly engaging with the SMS subscriber/mobile handset |
| 30446 | Opt-in - Not sufficient for campaign type - Express Consent Required - Eligible for Resubmission | Use case is Marketing/Promotional, but Express consent is not collected | Express Consent is specifically gaining approval from the handset end user to receive marketing messaging. This approval cannot be part of a transaction, terms of service, or privacy policy. It must be a stand alone approval. |
| 30446 | Opt-in - Consent for messaging is a requirement for service - Eligible for Resubmission | Opt in provided does not include language that the mobile user is consenting to receive SMS messaging. Users signing up their email address is not consent for SMS. | Gain approval for sending SMS messaging. This does not include the customer simply providing their phone number as part of a transaction, filling out a form, etc. There must be language the customer understands giving their phone number means they are signing up to receive SMS |
| 30446 | Opt-in - No opt-in provided - Eligible for Resubmission | \*Opt in field was left blank, filled with “N/A”, “see attached” - but not included<br>\*Opt in image/URL does not show where or how the handset end user opts in to receive SMS<br>\*“Opt in” is part of Terms of Service or Privacy Policy<br>\*Opt in links provided are behind login/password secure links<br>\*Opt in links are expired or private such i.e. Google Drive<br>\*Opt in links provided go to a page where information needs to be filled into progress through. I.e Job Application form where information needs to filled in to progress to opt in page<br>\*Opt in field includes only “Online”, “Text to Join”, “Keyword”<br>\*Opt in provided on another internal ticket and not on the Verification Submission<br>\*Opt in image provided was not clear/high resolution enough for consent language to be read<br>\*For bulks - opt in was provided on individual tickets and not on the csv | \*Provide the opt in collected showing the approval and consent from the handset end user to receive SMS<br>\*Provide the opt in collected showing the approval and consent from the handset end user to receive SMS<br>\*Provide updated opt in that is outside of terms or service or privacy policy<br>\*Provide publicly accessible links<br>\*Provide active and publicly accessible links<br>\*Provide a screenshot of the opt in or direct link to where the handset end user opts in<br>\*Provide where online such as a URL or screenshot, provide the keyword and where the handset end user finds this keyword, etc. \*Provide as much detail as possible with screenshots, pictures of POS, pictures of signage with Keywords or other means to show how the handset user opts in<br>\*Provide the opt in from the other ticket/channel in the Verification Submission<br>\*Provide a clear and readable image for opt in assessment<br>\*Provide the opt in on the bulk csv |
| 30446 | Opt-in is shared with 3rd Parties - Remove language for information sharing / Add language that opt-in is not allowed - Eligible for Resubmission | Opt in language includes that SMS will come from business the customer is signing up with but also from other affiliates, partners, etc. | End practice of sharing opt in for multiple businesses and opt in is only a 1:1 for opt in |
| 30447 | Campaign Violation - Single Number Used for Multiple Businesses - please assign a TFN per business - Eligible for resubmission | One number is being used for multiple businesses | Get 1 number for each business |
| 30447 | Additional Information Requested - Justification for more than 5 numbers / business | More than 5 numbers listed with the same business name and address | Explain why 1 business at 1 location/address needs more than 5 numbers. Are they for different agents at one location? Are they used for different departments in a single location? Different locations (like a franchise) - is so, provide the address to each location |

```
Error 30437 - The rejected toll-free verification time window has reached the 7 day expiration. An edit is accepted, but the toll-free number remains unverified and the submission is no longer prioritized, so time to process is similar to a new submission. Effective Nov 8, 2023, messaging traffic on this Toll-Free number is blocked until it’s verified.

Solution - Edit and submit the toll-free verification for the number fixing the rejection reasons. This will be handled as a new submission. And please make sure none of the above/below(Rejection types for eligibleineligible for resubmission) issues are present in the submission info.
```

* * *

## **Rejection types ineligible for resubmission**

Each of the below rejection errors is due to forbidden messaging categories and are therefore ineligible for resubmission. Please note that in addition to Toll-Free Messaging content restrictions, any use cases that violate the Lead Connector Acceptable Use Policy or Messaging Policy are also not allowed on the Lead Connector Phone platform, regardless of number/sender type or destination country.

> Notice: Users who disagree with their rejection can Contact Support to request an appeal. In your request, please include the details of your appeal, and the subject line "Toll-Free Verification Rejection Appeal for (your business name or number)".

|     |     |     |
| --- | --- | --- |
| Error Code | Rejection Category | Rejection reason |
| 30441 | Content Violation - SHAFT - Sex - Not Eligible for Resubmission | Submission included content such as nudity, pornography, sex toys, or other adult content |
| 30441 | Content Violation - SHAFT - Hate - Not Eligible for Resubmission | Submission included speech that is hateful, profanity, violent, incites violence, or similar speech |
| 30441 | Content Violation - SHAFT - Firearms - Not Eligible for Resubmission | Submission included:<br>Firearms, Ammo, Gun Ranges (Common for guns to be sold at Gun Ranges) |
| 30441 | Content Violation - SHAFT - Tobacco / Vape - Not Eligible for Resubmission | Submission included products such as: Cigarettes, Cigars, Tobacco Products (Chew, etc), Vape, Vape Juice, or similar items |
| 30441 | Content Violation - SHAFT - CBD/Marijuana - Not Eligible for Resubmission | Submission included products such as: Cannabis, Marijuana, CBD, THC, Hemp or similar items |
| 30442 | Known Spam Campaign - Not Eligible for Resubmission | Spam/Fraud team has flagged the number/business/traffic for spam or fraud |
| 30443 | Disallowed Content - Loan Marketing - Not Eligible for Resubmission | Submission includes mortgage, auto, student, personal, payday or other loans being marketed |
| 30443 | Disallowed Content - 3rd Party Debt Collection - Not Eligible for Resubmission | First party opt in by nature of the business is not present |
| 30443 | Disallowed Content - Gambling - Not Eligible for Resubmission | Submission includes Casino, Betting, or Gambling |
| 30443 | Disallowed Content - Sweepstakes - Not Eligible for Resubmission | Submission includes sweepstakes, contest, other prize awards |
| 30443 | Disallowed Content - Stock Alerts - Not Eligible for Resubmission | Submission includes information around stock, the stock market, and similar content |
| 30443 | Disallowed Content - Cryptocurrency - Not Eligible for Resubmission | Submission includes Cryptocurrency, NFTs, Block chain and other similar currencies |
| 30443 | Disallowed Content - Risk Investment - Not Eligible for Resubmission | Campaign represents a fiscal transaction where end users are promised a return on initial investment |
| 30443 | Disallowed Content - Debt Reduction - Not Eligible for Resubmission | Submission includes content about consolidating or reducing debt |
| 30443 | Disallowed Content - Credit Repair - Not Eligible for Resubmission | Submission includes content about repairing/improving credit |
| 30443 | Disallowed Content - 3rd Party Lead Generation - Not Eligible for Resubmission | Personal customer information is shared outside of the end business with Partners, Affiliates, 3rd Parties or other businesses the mobile user has not directly opted in to receive SMS or have their information shared with |
| 30443 | Disallowed Content - Federally Illegal Substances - Not Eligible for Resubmission | Any federal illegal substances |
| 30442 | Known Phishing Campaign - Not Eligible for Resubmission | Spam/Fraud team has flagged the number/business/traffic for phishing campaigns |
| 30444 | High Risk - Fraud - Not Eligible for Resubmission | Spam/Fraud team has flagged the number/business/traffic for spam or fraud |
| 30444 | High Risk - Deceptive Marketing - Not Eligible for Resubmission | Campaign was assessed for deceptive marketing tactics |

* * *

## **Frequently Asked Questions (FAQs)**

### **1.****What happens to my traffic if my Toll-Free number is rejected?**

If your Toll-Free number is rejected for one of the reasons listed in the Rejection types eligible for resubmission table above, your Toll-Free number will stay in a Pending state for up to 7 days, which allows your traffic to continue to send while you provide an amended submission with the information / changes requested. After 7 days, if your Toll-Free number submission is not amended, your traffic will move back to Restricted(Not Verified) causing your traffic to be blocked with a 30032 error and you will have to submit a new Toll-Free verification request.

If your Toll-Free number is rejected and is listed in the Rejection types ineligible for resubmission table above, your Toll-Free number will move to a Blocked state and your traffic will be blocked with a 30032 error.

### **2\. My verification request was rejected, and is ineligible for resubmission - What can I do?**

If your Toll-Free Verification request was rejected and is ineligible, you may be able to use another LeadConnector product to reach your recipients.

The LC Email is an option for many of the above use cases. For example, cannabis- or CBD-related messaging may be conducted via email, as long as you have proper age gating in place and are sending toward recipients in a locale where the substance is legal. In addition, the Twilio Programmable Voice product is not subject to the same carrier restrictions as SMS.

### **3\. What happens if I don't complete Verification?**

Starting on November 8, 2023, all unverified (Restricted) Toll-Free numbers will be blocked from sending messages to the US. Restricted Toll-free messaging traffic to Canada continues to remain blocked until verified.

Also, starting on January 31, 2024, all Pending Toll-Free numbers will be blocked from sending messages to the US.

See the table above for messaging sending limits until then.

All restricted and pending traffic filtered for these reasons will be blocked with error code 30032. Using additional Toll-Free numbers to exceed these limits or circumvent filtering isn’t allowed, and will result in the same block and error code. Verification is recommended for all customers regardless of volume.

### **4\. I am sending the limited allowed amount of segments but messages are still not going through.**

When using toll-free numbers, please be aware: Toll-free numbers can have messages filtered or blocked, even under the daily limit. If you see Error 30032, you might've hit a limit or a filter. The stated limits are the maximum the toll-free number can send, but not always guaranteed. For fewer issues, verify the toll-free numbers early as Verified numbers have a lower risk of message filtering.

### **5\. Do I need to be a US business in order to register at a Toll-Free number?**

No, you can use business addresses from other countries to register

### **6\. Will I be charged if I encounter an error when sending an SMS?**

If there's an internal error with LC Phone before the message is handed off to the phone provider, you won't be charged. However, charges apply to every message where a delivery attempt has been made, regardless of the final delivery status. This includes messages sent from toll-free numbers, A2P numbers, and those not deliverable due to country restrictions or other factors. We urge users to be fully informed and cautious before sending messages, as refunds will not be provided for undelivered SMS.

* * *

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000001462-why-was-my-toll-free-verification-rejected-*  
*Generated on: 2025-10-28T16:04:36.236Z*
