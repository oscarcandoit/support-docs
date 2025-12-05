---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005886"
title: " Workflow Action - Summarize Text : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005886#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005886#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow AI Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000752)
6. Workflow Action - Summarize Text

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

# Workflow Action - Summarize Text

Modified on: Thu, 7 Aug, 2025 at 7:00 AM

The Summarize Text action uses AI to automatically condense long content into concise summaries. Simply specify your desired summary length and input text, and the action will generate a shortened version while preserving key information.

# **How It Works**

The action processes your input text through AI to:

1. Identify key points and main ideas
2. Remove redundant information
3. Restructure content to fit your specified length
4. Maintain context and readability

# **Setup Instructions**

### **Step 1: Add the Action**

Search for "Summarize Text" in the workflow actions menu and add it to your workflow.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008324/original/FEX4crjJ7rOgSQOa0l7Orbhm3FtQN4LNnA.png?1754471515)

### **Step 2: Configure Settings**

1. **Action Name**: Give your action a descriptive name (e.g., "Summarize Customer Review")
2. **Max Length Input**: Specify your desired summary length
   - Number of words (e.g., "50 words")
   - Number of characters (e.g., "280 characters")
   - Number of sentences (e.g., "3 sentences")
   - Number of paragraphs (e.g., "1 paragraph")
3. **Input Text**: Provide the text to summarize
   - **Static Value**: Enter text directly
   - **Dynamic Variable**: Use custom value picker for variables
4. **Save**: Click save to complete the setup

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008439/original/1e7ofP9IaVxTxT_vfTfJkAjTBD04fuW49g.png?1754471563)

### **Using the Output**

After configuration, the summarized text is available as a custom variable:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008482/original/snjASHiMkVcFvfH8B9PaDxtB7Oz4Ga7KcA.png?1754471602)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008524/original/-m79U3sAy7YCxxT5PD1nnrSo35QH_goFYQ.png?1754471627)

This variable can be used in subsequent workflow actions such as:

- Sending summary via SMS or email
- Storing in custom fields
- Displaying in notifications
- Passing to other workflow actions

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008553/original/q4CqnxHF7IDOEhbyOLaw0h6-KnCDo_kVgA.png?1754471642)

# **Example Use Cases**

### **SMS-Friendly Appointment Notes**

**Trigger**: Appointment Booked

**Input**: Detailed appointment notes from form

**Max Length**: 160 characters

**Action**: Send confirmation SMS with summary

### **Pipeline Stage Change Summary**

**Trigger**: Opportunity Stage Changed

**Input**: All opportunity notes and activities

**Max Length**: 1 paragraph

**Action**: Email summary to account manager

### **Review Response Summary**

**Trigger**: Review Received (Google/Facebook)

**Input**: Full customer review text

**Max Length**: 50 words

**Action**: Post to team Slack channel

### **Meeting Notes Condensation**

**Input**: Full meeting transcript

**Max Length**: 1 paragraph

**Output**: Executive summary for stakeholders

# **Pricing**

- **Cost:** 1 cent ($0.01) per execution
- Part of Premium Actions suite

# **Frequently Asked Questions**

**Q: Can I summarize multiple messages or concatenated text?**

A: Yes, you can combine multiple text sources using custom values before summarizing.

**Q: Can I chain multiple summarize actions?**

A: Yes, you can progressively summarize content—first to 500 words, then to 100 words in a second action.

**Q: How accurate are the summaries?**

A: The AI maintains high accuracy for key information while removing redundant details. Always test with sample data first.

**Q: Is there a way to exclude certain information from summaries?**

A: Currently, the AI decides what's important. For specific exclusions, consider preprocessing the text with other workflow actions first.

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

- [GPT-4 in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002331-gpt-4-in-highlevel)
- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [Workflow Action - Translate Content](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content)
- [Workflow Action - Intent Detection](https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-intent-detection)
- [Workflow Action - Number Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005886)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005886-workflow-action-summarize-text/hit)