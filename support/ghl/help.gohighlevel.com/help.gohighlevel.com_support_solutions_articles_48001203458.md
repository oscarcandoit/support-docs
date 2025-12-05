---
url: "https://help.gohighlevel.com/support/solutions/articles/48001203458"
title: " How to Calculate SMS and MMS Costs : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001203458#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001203458#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. How to Calculate SMS and MMS Costs

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

# How to Calculate SMS and MMS Costs

Modified on: Thu, 11 Sep, 2025 at 10:39 AM

**Overview**

This article provides a comprehensive guide to calculating SMS and MMS costs using HighLevel. It covers the factors influencing costs, step-by-step calculation methods, and tips to manage and reduce messaging expenses effectively.

```
IMPORTANT: This article only shows how to calcuate the SMS and MMS Costs and what factors affect in the calculation. If you want to know the pricing of these costs in your country, please refer to LC Phone Pricing Structure
```

* * *

**TABLE OF CONTENTS**

- [What Determines SMS Costs?](https://help.gohighlevel.com/support/solutions/articles/48001203458#What-Determines-SMS-Costs?)
- [Key Benefits of Understanding SMS and MMS Costs](https://help.gohighlevel.com/support/solutions/articles/48001203458#Key-Benefits-of-Understanding-SMS-and-MMS-Costs)
- [Steps to Estimate Outbound SMS Costs](https://help.gohighlevel.com/support/solutions/articles/48001203458#Steps-to-Estimate-Outbound-SMS-Costs)
- [What is an SMS Segment?](https://help.gohighlevel.com/support/solutions/articles/48001203458#What-is-an-SMS-Segment?)
  - [Step 1: Find the Number of Segments in your Text](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-1%3A%C2%A0Find-the-Number-of-Segments-in-your-Text)
  - [Step 2: Lookup Per-Segment Cost](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-2%3A%C2%A0Lookup-Per-Segment-Cost)
  - [Step 3: Lookup Carrier Fees (≈$0.005)](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-3%3A%C2%A0Lookup-Carrier-Fees-(%E2%89%88%240.005))
  - [Step 4: Calculate](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-4%3A%C2%A0Calculate)
- [SMS Cost Estimator Sheet](https://help.gohighlevel.com/support/solutions/articles/48001203458#SMS-Cost-Estimator-Sheet)
- [Understanding the Factors Impacting SMS Costs](https://help.gohighlevel.com/support/solutions/articles/48001203458#Understanding-the-Factors-Impacting-SMS-Costs)
- [Number of Segments](https://help.gohighlevel.com/support/solutions/articles/48001203458#Number-of-Segments)
- [Carrier Lookup Fees](https://help.gohighlevel.com/support/solutions/articles/48001203458#Carrier-Lookup-Fees)
- [Direction (Inbound/Outbound)](https://help.gohighlevel.com/support/solutions/articles/48001203458#Direction-(Inbound/Outbound))
- [International Messaging](https://help.gohighlevel.com/support/solutions/articles/48001203458#International-Messaging)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001203458#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001203458#Related-Articles)

* * *

## **What Determines SMS Costs?**

There are many factors impacting SMS Costs. Such as the per-segment SMS cost, destination number, direction (inbound or outbound), attaching an image (MMS), emojis, carrier fees, and more. We encourage you to explore all of our SMS Pricing here.  In addition, we outlined most of the factors impacting SMS Costs below in the section "Understanding the Factors Impacting SMS Costs." We recommend reviewing this article and the SMS Pricing in full to better understand [SMS costs and pricing.](https://www.twilio.com/en-us/sms/pricing/us)

* * *

## **Key Benefits of Understanding SMS and MMS Costs**

Grasping the cost structure of SMS and MMS messaging helps in budgeting and optimizing communication strategies.

- Accurate budgeting for messaging campaigns.

- Optimization of message content to reduce costs.

- Enhanced understanding of carrier fees and charges.

- Ability to make informed decisions on using SMS vs. MMS.


* * *

## **Steps to Estimate Outbound SMS Costs**

An SMS is made up of segments, with each segment containing **160 characters**. If your message exceeds this limit, it will be divided into multiple segments, increasing your overall cost.

In cases where an internal error occurs within LC Phone before the message is handed off to the phone provider, you will not be charged. However, **once a delivery attempt has been made,** charges apply regardless of whether the message is successfully delivered. This includes SMS sent from toll-free numbers, A2P numbers, and those that cannot be delivered due to country restrictions or other limitations. We encourage users to carefully review their messages before sending, as **refunds will not be issued for undelivered SMS.**

* * *

## **What is an SMS Segment?**

An **SMS segment** is a unit of measurement used to calculate SMS charges. Each segment consists of **160 characters** if GSM-7 encoding is used. If the message exceeds this limit, it will be broken into multiple segments, increasing the cost.

- **Example:**

  - A message with **160 characters** = **1 segment**.

  - A message with **161 characters** = **2 segments**.

  - The more segments your message contains, the higher the cost.

It is important to know all of the SMS Pricing, however, it is reasonable to assume your highest SMS costs will be related to sending outbound SMS. For this reason, we will walk you step by step through the process of estimating the cost of an outbound SMS.

**There are four steps to estimating the cost of an outbound SMS...**

1. Find the Number of Segments in your Text
2. Lookup Per-Segment Cost
3. Lookup Carrier Fees (≈$0.005)
4. Calculate

As we go to calculate the cost of an SMS, we use our Outbound SMS Cost Equation to estimate the cost of our SMS:

|     |
| --- |
| **Outbound SMS Cost Equation:**<br>**Estimated Cost of Outbound SMS =****\[(Number of Segments)(Per-Segment Cost)\]** **\+ \[(Number of Segments)(Carrier Fees)\]** |

```
PLEASE NOTE: This estimation is for a single outbound SMS sent from a US number to another US number. There are many factors that can change the final cost of an SMS. To learn more about the factors impacting SMS cost, see the section Understanding the Factors Impacting SMS Costs.

See SMS Pricing here, Prices may change from time to time without notice.
```

### **Step 1:** Find the Number of Segments in your Text

After writing the message you want to send, we copy the text message. Then, open the Messaging Segment Calculator and paste the copied text message into the [**Messaging Segment Calculator.**](https://twiliodeved.github.io/message-segment-calculator/) See the "Number of Segments" to locate the number of segments. Keep this available as we continue.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046379999/original/NFyvNSx9-p5vxdoypXnalX8bHUgDT0Ihaw.png?1746786747)

|     |
| --- |
| **Outbound SMS Cost Equation:**<br>Estimated Cost of Outbound SMS = \[(**Number of Segments**)( **Per-Segment Cost**)\] \+ \[(**Number of Segments**)(**Carrier Fees**)\]<br>**Example:**<br>Estimated Cost of Outbound SMS = \[(**5**)(Per-Segment Cost)\] + \[(**5**)(Carrier Fees)\] |

### **Step 2:** Lookup Per-Segment Cost

- Open up the [SMS Pricing page](https://www.twilio.com/en-us/sms/pricing/us). Select the country you are sending outbound messages in (destination country).

- Then scroll down to "SMS/MMS Pricing." Locate your "Per-Segment Costs". In our example, we are sending an outbound SMS for long codes. So we choose $0.0083 for this example.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053585937/original/WDxo_NAILHjloHXdxjemi8WHTSWFEvko5Q.png?1757602633)

|     |
| --- |
| **Outbound SMS Cost Equation:**<br>Estimated Cost of Outbound SMS = \[(**Number of Segments**)( **Per-Segment Cost**)\] \+ \[(**Number of Segments**)(Carrier Fees)\]<br>**Example:**<br>Estimated Cost of Outbound SMS = \[( **5**)(**$0.0083**)\] \+ \[( **5**)(Carrier Fees)\] |

### **Step 3:** Lookup Carrier Fees (≈$0.005)

In the US and Canada, carriers like T-Mobile, AT&T, or Verizon charge you for inbound messages sent to their end users. Prices vary by carrier and change from time to time. To locate the Carrier Fees by carrier, see the [SMS Pricing](https://www.twilio.com/en-us/sms/pricing/us) page. Scroll down to the "Carrier Fees" section and see the inbound SMS column for a specific carrier.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053586106/original/_RTMBPu7GhWUn7C-dOeryj3UwxA-xeO9mg.png?1757602700)

**\*Please note: carrier fee prices vary based on the type of number (long code, toll-free, and shortcode).**

Due to carrier fees being unique to the end user's number, we cannot calculate the cost until we know what carrier we are sending to. To overcome this barrier we can estimate. We suggest using the amount of ≈$0.005 as this is currently the highest carrier charge (as of the last edit to this article). The "≈" symbol stands for approximation, which is an estimated number for this exercise. Feel free to change this approximation to what feels best for your estimates based on the prices available on [SMS Pricing](https://www.twilio.com/en-us/sms/pricing/us).

|     |
| --- |
| **Outbound SMS Cost Equation:**<br>Estimated Cost of Outbound SMS = \[( **Number of Segments**)( **Per-Segment Cost**)\] \+ \[( **Number of Segments**)(**Carrier Fees****)**\]<br>**Example:**<br>Estimated Cost of Outbound SMS = \[( **5**)( **$0.0083**)\] \+ \[( **5**)( **≈$0.005**)\] |

```
IMPORTANT: Carrier fees can change from time to time so always check the SMS Pricing. As of the last time this article was created approximately ≈$0.005 was a good estimator. However, it is always important to check the SMS Pricing for any changes to Carrier fees to better adjust your SMS cost estimations.
```

### **Step 4:** Calculate

We are now ready to calculate the estimated cost of our text message. Let's walk you step by step through the process.

Estimated Cost of Outbound SMS = **\[(5)($0.0083)\]** **+****\[(5)($0.005)\]**

First, let's multiply the "number of segments" (found in Step 1) by the "per-segment costs" (found in Step 2).

Estimated Cost of Outbound SMS = **\[$0.0415\]** **+****\[(5)($0.005)\]**

Now we need to multiply the "Number of Segments" (found in Step 1) by the estimated "Carrier Fees" (found in Step 3).

Estimated Cost of Outbound SMS =**\[$0.0415\]** **+****\[$0.025\]**

Lastly, we add the two sums together to finish our estimation.

**\[$0.0415\]****+ \[$0.025\]** **=****$0.0665**

We finally arrived at the final cost of **6.65**cents for this text.

Estimated Cost of Outbound SMS = **$0.0665 or **6.65** cents**

```
IMPORTANT: This is an estimation. Final price can only be known after sending. Adding an image, hidden characters, emojis and other factors can impact the cost of an SMS. See SMS Pricing.

To understand more of the factors impacting final SMS price, see the section below Understanding the Factors Impacting SMS Costs.
```

* * *

## **SMS Cost Estimator Sheet**

Use our SMS Cost Estimator Sheet to quickly calculate your SMS costs. Make a copy, enter your message details, and let the sheet do the work for you. Open the sheet from the link below and **"Make a Copy"** of it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053587341/original/KrUho7fdGsjOULh4tMf38c8tmuRphaoncA.png?1757603228)

**SMS Cost Estimator Sheet**  \- ( **"Make a Copy"** of this sheet to edit it) - [**Sheet Link**](https://docs.google.com/spreadsheets/d/1rhJKukw4Y8G2KCqpphuhY6Q51zrohNmraCChVh-ETAI/edit?usp=sharing) (it can have old cost values)

```
This is an estimator, final costs will vary based additional factors. Learn more in the section below titled "Understanding the Factors Impacting SMS Costs." See SMS Pricing here.
```

* * *

## **Understanding the Factors Impacting SMS Costs**

Many factors that impact the cost of an SMS. SMS direction (inbound/outbound), destination number,  the number of segments, carrier fees, number validation, adding an image, hidden characters, and more. Below we will walk through the most common factors.

### **Per-Segment Cost**

An SMS consists of 160-character segments, with longer messages split into multiple segments, increasing costs. Emojis, images, and hidden characters can further impact pricing.

To find the per-segment cost, refer to Step 2: Lookup Per-Segment Cost above.

To learn more about segments, see [What The Heck Is A Segment?](https://www.twilio.com/en-us/blog/what-the-heck-is-a-segment-html)

```
IMPORTANT: In the US/Canada, one segments contains 160 characters, however, having between 161 to 320 characters will automatically result in 2 segments... Having between 321 to 480 characters will result in 3 segments... and so on...

Character lengths of segments also vary by countries & regions which will impact final SMS price. Most countries use 160 characters or 70 characters for segment lengths, depending on the encoding type. Generally, most messages use the standard GSM-7 encoding, which gives us our 160 characters per segment.
```

* * *

## **Number of Segments**

SMS costs are based on the number of segments, meaning more segments = higher cost. For example, a 5-segment message costs approximately five times more than a single-segment SMS. Refer to ["The Steps to Estimating Outbound SMS Costs"](https://help.gohighlevel.com/support/solutions/articles/48001203458#Steps-to-Estimating-Outbound-SMS-Costs%E2%80%8B) for a detailed breakdown.

**For example:**

A 5 segment message is...

\[(5)($0.0083)\] + \[(5)($0.005)\] = cost of 5 Segment SMS

\[$.0415\] + \[$0.025\] = $0.0665 or **6.65** cents

However, a 1 segment message is...

\[(1)($0.0083)\] + \[(1)($0.005)\] = cost of 1 Segment SMS

\[$0.0083\] + \[$0.005\] = **$0.0133** or **1.33 cents**

### **Adding an Image (MMS)**

MMS includes media attachments (e.g., images), which are charged differently than SMS. Adding an image shifts the message to [MMS pricing](https://www.twilio.com/en-us/sms/pricing/us), which includes both MMS Message Fees and Carrier Fees.

**For Example:**

For a 5-segment message with an image:

Estimated Cost of MMS Text = \[(Number of Segments)( **Per-Segment****MMS****Cost**)\] \+ \[(Number of Segments)(**MMS****Carrier Fees**)\]

Estimated Cost of MMS Text = \[(5)(**$0.02**)\] \+ \[(5)(**$0.01**)\]

\[$0.10\] + \[$0.05\] =**$0.15** or **15****cents**

Messages sent can include up to 10 media files that have a total size of up to 5MB. Anything over 5 MB is uploaded to your HighLevel media library and a short link is created that you can use to send to the contact to share with your customers. Messages with over 5MB of media will not be accepted.

### **What is UCS-2 Encoding?**

### **UCS-2, which stands for "Universal Character Set 2.** UCS-2 is a fixed-length character encoding where each character is stored in 16 bits (2 bytes). It supports many global languages, symbols, and emojis, but does not cover the entire Unicode range (UTF-16 is used for that).

In SMS, UCS-2 encoding is triggered when a message contains non-GSM-7 characters (e.g., Chinese, Arabic, emojis, or special symbols).

### **How does UCS-2 affect SMS?**

- **Message Length**: SMS messages using UCS-2 can only hold **70 characters** per message, compared to 160 characters with GSM-7.

- **Segmentation**: If the message exceeds 70 characters, it is split into multiple parts. Each segment can carry up to **67 characters**, since space is reserved for concatenation headers.


### **When is UCS-2 used in Highlevel?**

Highlevel automatically switches to **UCS-2 encoding** whenever an SMS includes characters outside the GSM-7 set. This typically happens if your message contains emojis, non-Latin scripts (e.g., Chinese, Arabic), or special symbols that GSM-7 cannot represent.

### **How does emojis affect sms cost calculation**

Emojis can enhance engagement but increase SMS costs by triggering Unicode encoding, which reduces the character limit per segment to 70 instead of 160.

**For example:**

In the example below, we have a 1-segment message if we use the characters alone. However, we added some emojis which increased the number of segments from 1 to 4. Maybe one emoji is enough?

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042421358/original/7quk6dRuZmKnU-bNM8e2Y4gmruX0ttF23w.png?1740740698)

### **Hidden Characters**

Many agencies copy/paste the SMS text body while designing automation. When you copy/paste text from a text editor software like MS Word or Google Docs, sometimes hidden characters get appended in the string. These hidden characters can not be seen by the user, but they are present in the text.

**For Example**

In this example a simple phrase Hey there was copied from a webpage. Usually, it should be just 1 segment. But actually, it contains many hidden characters (empty characters), making this as large as 4 segments.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042421505/original/5wFok9T2iUpRW_T-QK5ezXLaD0WIAeBIEQ.png?1740740833)

You can use [Segment Calculator](https://twiliodeved.github.io/message-segment-calculator/) to check the actual number of segments & character length of your SMS text.

```
Please Note: While pasting contents of an SMS to System text editor it is recommended to use paste as plain text option instead of simple paste.

To plain text paste...

Windows -- Press "Ctrl + Shift + V"
Mac -- Press "Cmd + Shift + V"
```

### **Carrier Fees**

As we reviewed in [Step 3: Lookup Carrier Fees (≈$0.005)](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-3%3A-Lookup-Carrier-Fees-(%E2%89%88%240.005)) above, carrier fees are charged by carriers like Verizon, T-Mobile, and AT&T when you send a message to one of their end-user numbers. You will also notice from the Outbound SMS Cost Equation reviewed above (and included below), that carrier fees are charged by segment. This means that the more segments you have in an SMS will result in higher costs as the number of segments is multiplied by the Carrier Fees.

**Outbound SMS Cost Equation:**

Estimated Cost of Outbound SMS = \[(Number of Segments)(Per-Segment Cost)\] + \[(Number of Segments)(Carrier Fees)\]

\*See how the number of segments is multiplied by the carrier fees. "\[(Number of Segments)(Carrier Fees)\]" meaning a reduction in segments will reduce carrier fees.

Further, remember there is a difference between SMS and MMS carriers.

For non-LC sub-account, please [set up your Business Profile & A2P campaign inside the Twilio console.](https://support.twilio.com/hc/en-us/articles/1260801864489-How-do-I-register-to-use-A2P-10DLC-messaging)

For LC phone sub-account, please set up A2P registration in the [LC Phone System Trust Center.](https://help.gohighlevel.com/support/solutions/articles/48001225526)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042422409/original/grxV3dIpcJ46VS6xQzTUYfVarxbApl_ZWQ.png?1740741523)

## **Carrier Lookup Fees**

Carrier Lookup Fees (CARRIER-LOOKUP-FEES) are incurred on the first SMS you attempt to send to a contact. It is part of the [SMS / Phone Number Validation feature.](https://help.gohighlevel.com/support/solutions/articles/48001153968-sms-phone-number-validation-is-live) This feature will check to see if this number is real and if it can receive SMS/MMS. This saves you money in the long run, as without this, you would risk sending a text to fake numbers incurring full charges for the text. Whereas, with Number Validation, you can check to see if the number is valid before sending. Which is a lot cheaper over time.

* * *

## **Direction (Inbound/Outbound)**

In the example above, we calculated a 5-segment OUTBOUND message. Meaning we are sending a message from our system to a number. However, if you receive a reply from this number, you are charged for inbound messages as well.

For example, open the SMS Pricing page, then locate the "Inbound" column to see the pricing for a particular inbound message. This reveals the Inbound cost of an SMS for a Long Code (10-digit) number.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053590789/original/3tfdi-cbA3AnP-oFRS0WvIKLtoTQQ0KnOg.png?1757604842)

To calculate the cost of an Inbound text, you simply need to change the costs in our equation to the INBOUND cost listed on the SMS Pricing page as seen above. Then you run the calculation.

|     |
| --- |
| **Estimated Cost of INBOUND Text** = \[(Number of Segments)(Per-Segment **INBOUND SMS/MMS Cost**)\] \+ \[(Number of Segments)( **INBOUND SMS/MMS Carrier Fees**)\] |

\*Be sure to reference the "Inbound" column on the [SMS Pricing](https://www.twilio.com/en-us/sms/pricing/us) page, as well as referencing SMS vs. MMS costs when plugging in your variables.

* * *

## **International Messaging**

In the example above, we are sending from a US/Canada Number to another US/Canada Number. However, if you happen to send a text to a non-US/Canada Number, you will be subject to the recipient country's fees. For example, if we send a text from a US/Canada Number to an Australian Number, you will be charged based on the Australian SMS Pricing.

Remember, we can look up the messages for all countries by adjusting the "Messages in" drop-down window and then selecting the country of the recipients you send to. We review this in [Step 2](https://help.gohighlevel.com/support/solutions/articles/48001203458#Step-2%3A-Lookup-Per-Segment-Cost) above.

In this example, the Per-Segment costs in US/Canada might be $.0083 while Australian costs are $.0515, which is roughly 6.5 times the standard rate for US/Canada Numbers. Sending to International numbers can greatly impact SMS costs.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046380814/original/sV7XHBxOZeQlB0sK1XUNO_Ws6KSImPjrKg.jpeg?1746787451)

```
Note: Generally you are only charged the destination country pricing, however, in some cases other fees can apply. Sending a single SMS as a test is a great way to see costs for these cases as final pricing for international numbers vary base on international country rules and regulations.
```

* * *

## **Frequently Asked Questions**

**Q: Am I charged for messages that fail to send?**

If a message fails due to an internal error before reaching the carrier, you are not charged. However, if the message is handed off to the carrier, charges apply regardless of delivery success

**Q. Why Are My SMS Costs So High?**

The most common reason for high SMS costs is an SMS with multiple segments.

SMS pricing is based on segments, meaning more segments = higher cost. For example, a 5-segment message costs 5 times more than a single-segment SMS.

To avoid excessive charges, check The Steps to Estimating Outbound SMS Costs and optimize message length before sending.

**Q. How to reduce the number of segments in your SMS can reduce the SMS cost.**

To do this, open the Segment Calculator and paste your message into it. Work to reduce the "Number of Segments" to lower numbers to reduce the total costs.

**Q. What are the factors that can impact SMS pricing?**

Reducing segment count and not including any images or attachments can help reduce cost but there are other factors to consider. Review Factors Impacting SMS Cost above to better understand more factors in SMS costs. This will help you adjust your SMS to best fit your needs.

* * *

## **Related Articles**

- [LC Phone Pricing Structure](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-structure)
- [Understanding A2P 10DLC Messaging Fees: Registration, Monthly, and Carrier Costs](https://help.gohighlevel.com/support/solutions/articles/155000005200-understanding-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs)

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

- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)
- [Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-)
- [Error: Not a Valid SMS-Capable “From” Number](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-not-a-valid-sms-capable-from-number)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)

## Related Articles

- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [HighLevel Pricing Guide](https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [Understanding A2P 10DLC Messaging Fees: Registration, Monthly, and Carrier Costs](https://help.gohighlevel.com/support/solutions/articles/155000005200-understanding-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs)
- [Forbidden message categories for SMS and MMS in the US and Canada](https://help.gohighlevel.com/support/solutions/articles/48001219617-forbidden-message-categories-for-sms-and-mms-in-the-us-and-canada)
- [Using media in SMS campaign - how will it look on receiver's device?](https://help.gohighlevel.com/support/solutions/articles/48001205243-using-media-in-sms-campaign-how-will-it-look-on-receiver-s-device-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001203458)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001203458-how-to-calculate-sms-and-mms-costs/hit)