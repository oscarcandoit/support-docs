---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content"
title: " Workflow Action - Translate Content : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow AI Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000752)
6. Workflow Action - Translate Content

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

# Workflow Action - Translate Content

Modified on: Thu, 7 Aug, 2025 at 9:10 AM

This article will guide you through using the **Translate Content** action in your workflows. You'll learn how to automatically translate text from a source language to a target language, making it easier to personalize communication for a global audience.

# **What is the "Translate Content" Workflow Action?**

"Translate Content" action is a powerful action within the workflow builder that allows you to translate any given text from one language to another. By integrating this action, you can automate multilingual communications. For instance, you can take an incoming message in one language, translate it, and then use that translated text in a subsequent action, like an email, SMS, or internal notification. This ensures contacts receive messages in their preferred language, enhancing customer experience.

# **How to Set Up the "Translate Content" Workflow Action**

Follow these steps to configure the action in your workflow.

### **Step 1: Add the "Translate Content" Action**

### Navigate to your workflow builder and search for "Translate Content" in the actions menu. Add it to your workflow at the point where you want to translate content.    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051129443/original/HX5Q81VgrhrFTexqVVmgzkdCuBKI3u2iew.png?1754574809)

### **Step 2: Configure Settings**

#### **1\. Action name:** Give your action a descriptive name (e.g., "Translate Welcome Email to Spanish")

#### **2\. Select the 'From' Language:**

Input the source language of the text you want to translate. This is the language your original text is written in. (e.g., "English")

#### **3\. Select the 'To' Language:**

Input the target language. This is the language you want the text to be converted into. (e.g., "French")

#### **4\. Input Text**

In the **Input Text** field, enter the content you want to translate. You have two options:

- **Static Value:** Type the text directly into the field.

- **Custom Variables:** Use the tag icon to insert dynamic data from a contact's profile or a previous workflow step.


Once configured, click **Save Action** to add it to your workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051129293/original/ErNtX1JpP1Jzshtl4xXxz2CslOBRTaz31A.png?1754574722)

### **Using the output**

**After configuration, the translated text is available as a custom variable:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051129799/original/osrlMHfVRBq9qKSQjR7kqu8XEnKq-Mnw1w.png?1754574935)**

# **Example Use Case**

### **Example: Translating a Welcome Message**

Imagine a new contact signs up through a form and specifies "French" as their preferred language. The workflow can use this information to send them a welcome email in their chosen language.

- **Trigger**: **Contact Created**

- **Action**: **Translate Content**

  - **Action Name**: Translate Welcome to French

  - **From Language**: English

  - **To Language**: French

  - **Input Text**: `Hello, thank you for signing up!`
- **Action**: **Send Email**

  - **Email Body**: Insert the output from the translation action:

    {{workflow\_ai\_translate\_content.2.response}}

This workflow ensures the new French-speaking contact automatically receives a personalized and correctly translated welcome message.

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
- [GPT-4 in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002331-gpt-4-in-highlevel)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [How to Submit In-App Translation Feedback](https://help.gohighlevel.com/support/solutions/articles/155000006327-how-to-submit-in-app-translation-feedback)
- [AI Powered Email Generation in Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000005516-ai-powered-email-generation-in-workflow-action)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005892-workflow-action-translate-content/hit)