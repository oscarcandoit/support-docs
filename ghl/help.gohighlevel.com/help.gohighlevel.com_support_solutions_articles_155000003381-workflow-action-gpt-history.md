---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history"
title: " Workflow Action - GPT History : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - GPT History

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

# Workflow Action - GPT History

Modified on: Mon, 9 Sep, 2024 at 5:56 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Action-Name)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Action-Details)
- [Type of History](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Type-of-History)
- [How to use?](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#How-to-use?)
- [Advanced options](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Advanced-options)
- [Points to be Noted](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Points-to-be-Noted)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history#Example)

## Overview

Using this feature in the GPT action user can save the history of the GPT actions. The GPT actions will be able to produce more relevant and personlized responses based on the past interactions with GPT actions.

## Action Name

GPT Powered by OpenAI

## Action Details

## **Type of History**

There are 5 types of History that can be stored

- This Sub Account - Remembers all GPT conversation across all workflows in the sub account where the History type is "This Sub Account"
- This Workflow - Remembers all GPT conversation within the workflow where the History type is "This Workflow"
- Per Execution - Remembers all GPT conversation within the workflow for a single execution where the History type is "Per Execution"
- This Step - Remembers all GPT conversation for the specific action across multiple executions where the History type is "This Step"
- Custom - Let's the user create a custom History type that can be used within the same workflow or multiple workflows

## **How to use?**

- Enable the option in Labs
- Select the "GPT Powered By OpenAI" action
- Switch on "Enable history"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497467/original/5xEmqYPpkG34-uQFcJPMPoJ36su16U_17A.png?1725875666)

- Select the "History for" from the dropdown

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497464/original/THDiOtWyK24H_G32R-emMvKlIxGdqDFJZg.jpeg?1725875666)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497463/original/7fsuxw5cXSfQ0CMPkfFT5xdMO8jOq77IUA.jpeg?1725875666)

- Add system instructions

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497468/original/w_5xFjUniSYzXVGtEilPCFXewbZ5LamE0w.png?1725875666)

## Advanced options

- System Instructions - User can add Instructions if required to give more information to GPT action to get more specific and desired output. These are the rules that can be added which will be followed by all the GPT actions.
- Exclude instructions from history - This toggle can be used when user wants to exclude the System Instructions from the "history"
- Exclude responses from history - If this is turned on then responses of this action will not be stored in the history. This is useful when the responses are sentiment (positive or negative) or any analytics that were received as output.

## Points to be Noted

- If Enable History is switched on then by default GPT 4 models will be selected.
- History will only work for "Custom" action type
- History will be independent for each contact

## Example

**Sending recommendations to Current customers**

**Scenario:** Have a conversation with the customers based on their previous purchase, recommend them new items and check if they are interested in any other products.

**Trigger Setup:**

- **Trigger:** Order Placed
- **Name:** Order Placed

**Workflow Actions:**

1. **GPT Powered by OpenAI: Add the GPT actions. All the actions will have History enabled and will have context of each others prompts and outputs. The action will be used to prepare the email and check the sentiment of the customer reply.**
2. **Email: The email action will be used to send the output of GPT actions to the customers**
3. **Wait: Wait will be added to check if the customer has replied to the email or not.**
4. **If/Else: The branches will be based on the sentiment of reply of the customer. If the sentiment is positive then we will continue the conversation and if not then contact will exit the workflow.**

**Outcome:** This automation helps recover potentially engaging the customer in the email, sending personlized responses to the customer to increase the chance of a Sale.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504268/original/nxs8BHRW_3fTg5FNFftUkWaVwfg5m2iXkw.png?1725879284)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504331/original/SnVn5ecddD4vCtdub3CQScWQusVu7I-y0g.png?1725879318)

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

- [Workflow Action - Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)

## Related Articles

- [History for GPT actions (AI Memory Key)](https://help.gohighlevel.com/support/solutions/articles/155000003026-history-for-gpt-actions-ai-memory-key-)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [GPT-5 in HighLevel Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005919-gpt-5-in-highlevel-workflows)
- [AI Tools in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002166-ai-tools-in-highlevel)
- [GPT-4 in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002331-gpt-4-in-highlevel)
- [Facebook comments + Workflow AI](https://help.gohighlevel.com/support/solutions/articles/155000002351-facebook-comments-workflow-ai)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history/hit)