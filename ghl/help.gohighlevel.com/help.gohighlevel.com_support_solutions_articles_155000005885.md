---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005885"
title: " Workflow Action - Intent Detection : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005885#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow AI Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000752)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005885#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow AI Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000752)
6. Workflow Action - Intent Detection

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

# Workflow Action - Intent Detection

Modified on: Wed, 6 Aug, 2025 at 3:42 AM

The Intent Detection action analyzes text to automatically determine sentiment, categorizing it as POSITIVE, NEGATIVE, or NONE. This premium action replaces the legacy intent detection in IF/Else conditions, offering improved accuracy and easier implementation for automating responses based on customer sentiment.

**TABLE OF CONTENTS**

- [What is Intent Detection?](https://help.gohighlevel.com/support/solutions/articles/155000005885#What-is-Intent-Detection?)
- [Key Benefits](https://help.gohighlevel.com/support/solutions/articles/155000005885#Key-Benefits)
- [How to Set Up Intent Detection](https://help.gohighlevel.com/support/solutions/articles/155000005885#How-to-Set-Up-Intent-Detection)

  - [Step 1: Add the Intent Detection Action](https://help.gohighlevel.com/support/solutions/articles/155000005885#Step-1%3A-Add-the-Intent-Detection-Action)
  - [Step 2: Configure the Action](https://help.gohighlevel.com/support/solutions/articles/155000005885#Step-2%3A-Configure-the-Action)
  - [Step 3: Set Up Branch Actions](https://help.gohighlevel.com/support/solutions/articles/155000005885#Step-3%3A-Set-Up-Branch-Actions)
- [Example Use Cases](https://help.gohighlevel.com/support/solutions/articles/155000005885#Example-Use-Cases)

  - [1.Customer Feedback Management](https://help.gohighlevel.com/support/solutions/articles/155000005885#1.Customer-Feedback-Management)
  - [2.Post-Purchase Follow-up](https://help.gohighlevel.com/support/solutions/articles/155000005885#2.Post-Purchase-Follow-up)
- [Pricing](https://help.gohighlevel.com/support/solutions/articles/155000005885#Pricing)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005885#Frequently-Asked-Questions)

# **What is Intent Detection?**

The Intent Detection action is an AI-powered workflow tool that automatically analyzes text input to determine the underlying sentiment or intent. It processes any text—whether from customer messages, survey responses, or form submissions—and categorizes it into three distinct branches:

- **POSITIVE**: Text expressing positive sentiment, satisfaction, or agreement
- **NEGATIVE**: Text conveying negative sentiment, dissatisfaction, or disagreement
- **NONE**: Text with neutral sentiment or when the system cannot confidently categorize it


This action creates three workflow branches automatically, allowing you to build different automation paths based on the detected sentiment.

# **Key Benefits**

- **Automated Sentiment Analysis**: Instantly categorize customer responses without manual review
- **Improved Accuracy**: More reliable than legacy IF/Else intent detection methods
- **Simplified Workflow Design**: Three clear branches eliminate complex conditional logic
- **Real-Time Response**: Trigger appropriate actions immediately based on customer sentiment
- **Enhanced Customer Experience**: Deliver personalized responses tailored to customer emotions
- **Scalable Automation**: Process unlimited messages without human intervention

# **How to Set Up Intent Detection**

### **Step 1: Add the Intent Detection Action**

Navigate to your workflow builder and search for "Intent Detection" in the actions menu. Add it to your workflow at the point where you want to analyze text sentiment.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051001668/original/PqjVo9kOYcfdnBUlOkv57oWux30ytBqB7A.png?1754467927)

### **Step 2: Configure the Action**

1. **Action Name**: Give your action a descriptive name (e.g., "Analyze Feedback Sentiment")
2. **Input Text**: Specify the text to analyze. You have two options:
   - **Static Value**: Enter fixed text directly
   - **Dynamic Variable**: Use the custom value picker to select variables:
     - `{{message.body}}`for incoming messages
     - Any other variable that stores text to be classified

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051002276/original/IkzmGPENr0sYzJIFKATuCR1bJJbRILJofQ.png?1754468246)

### **Step 3: Set Up Branch Actions**

After saving, the action automatically creates three branches:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051002746/original/Ptid_wA1y__CWDV_xxhePY5-Ct7CK53m8A.png?1754468477)

**1.POSITIVE Branch:** Configure actions for positive responses

- Send thank you messages
- Request app store reviews
- Offer loyalty rewards
- Add "satisfied customer" tags

**2.NEGATIVE Branch:** Configure actions for negative responses

- Trigger support escalation
- Send discount codes or coupons
- Schedule follow-up calls
- Add "needs attention" tags

**3.NONE Branch:** Configure actions for neutral/unclear responses

- Send clarification requests
- Route to manual review
- Apply default follow-up sequences

# **Example Use Cases**

### **1.Customer Feedback Management**

**Scenario**: After collecting feedback through surveys

- **POSITIVE Response**: "Your service is amazing!"
  - Action: Send app store review request link
- **NEGATIVE Response**: "Very disappointed with the experience"
  - Action: Send 20% discount coupon for next purchase
- **NONE Response**: "Okay" or "N/A"
  - Action: Send follow-up questions for more details

### **2.Post-Purchase Follow-up**

**Scenario**: After delivery confirmation

- **POSITIVE**: Request product review and testimonial
- **NEGATIVE**: Trigger return/refund workflow
- **NONE**: Send product usage tips

# **Pricing**

- **Cost**: 1 cent ($0.01) per execution
- Part of Premium Actions suite

# **Frequently Asked Questions**

**Q: How is this different from the legacy IF/Else intent detection?**

A: The Intent Detection action uses advanced AI for more accurate sentiment analysis, provides automatic branching, and eliminates the need for complex conditional logic setup.

**Q: Can I use multiple Intent Detection actions in one workflow?**

A: Yes, you can chain multiple Intent Detection actions to analyze different text inputs or create multi-level sentiment analysis workflows.

**Q: What happens if the text contains mixed sentiments?**

A: The system analyzes the overall dominant sentiment. If no clear sentiment is detected, it routes to the NONE branch.

**Q: Can I test the intent detection before going live?**

A: Yes, use the workflow test mode with sample text inputs to verify the sentiment detection accuracy before activating your workflow.

**Q: Can I see why text was categorized a certain way?**

A: Currently, the action provides the categorization result only. Detailed reasoning or confidence scores may be added in future updates.

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

- [Conversation AI: Multiple Messages in One Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003207-conversation-ai-multiple-messages-in-one-workflow-action)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)
- [Workflow Action - Intent Detection](https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-intent-detection)
- [Workflow Action - Summarize Text](https://help.gohighlevel.com/support/solutions/articles/155000005886-workflow-action-summarize-text)
- [Workflow Action - Translate Content](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content)

## Related Articles

- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)
- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [LC - Phone Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941-lc-phone-messaging-policy)
- [Workflow Action - Call](https://help.gohighlevel.com/support/solutions/articles/155000003274-workflow-action-call)
- [Workflow Setting Stop On Response & Call Action Disable Voicemail Detect](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005885)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-intent-detection/hit)