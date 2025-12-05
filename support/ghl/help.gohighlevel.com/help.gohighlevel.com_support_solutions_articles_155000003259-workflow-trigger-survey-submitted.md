---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted"
title: " Using the Survey Submitted Workflow Trigger in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Forms and Surveys Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000807)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Forms and Surveys Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000807)
6. Workflow Trigger - Survey Submitted

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

# Workflow Trigger - Survey Submitted

Modified on: Wed, 18 Jun, 2025 at 1:28 PM

This article will show you how to use the "Survey Submitted" workflow trigger! This trigger allows you to automate actions when a contact submits a specific survey. From follow-up emails to tagging and lead qualification, this trigger helps streamline post-survey workflows.

* * *

**TABLE OF CONTENTS**

- [What is the Survey Submitted Workflow Trigger?](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#What-is-the-Survey-Submitted-Workflow-Trigger?)
- [Key Benefits of the Survey Submitted Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#Key-Benefits-of-the-Survey-Submitted-Trigger)
- [How to Configure the Survey Submitted Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#How-to-Configure-the-Survey-Submitted-Trigger)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#Example)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted#Related-Articles)

* * *

# **What is the Survey Submitted Workflow Trigger?**

This trigger is activated when a contact submits a survey. You can configure it with specific filters to target particular surveys or survey responses, allowing for tailored automation based on the contact's feedback. The Survey Submitted trigger allows you to initiate a workflow whenever a contact submits a survey. This can be useful for automating follow-up actions based on survey responses, such as sending a thank-you email, updating contact information, or adding tags based on the survey results.

* * *

## **Key Benefits of the Survey Submitted Trigger**

This trigger allows you to automate responses to survey submissions, reducing manual work and increasing the efficiency of lead processing and customer engagement.

- Filters qualified and disqualified leads automatically

- Enables workflow branching based on survey type or conditions

- Saves time and ensures consistent communication

- Personalizes the post-survey experience


* * *

## **How to Configure the Survey Submitted Trigger**

1. **Choose a Workflow Trigger**: Select **Survey Submitted** from the list of available triggers.

2. **Workflow Trigger Name**: Enter a descriptive name for your trigger, such as "Survey Submitted."

3. **Filters**: Use filters to refine when the trigger should activate. This allows you to specify which survey submissions should start the workflow.


|     |     |     |
| --- | --- | --- |
| Value | Description | Mandatory |
| Disqualified | Indicates if the survey response disqualifies the contact. Options are is true or is false. | No |
| Survey is | Selects specific surveys to trigger the workflow. You can choose one or multiple surveys from the list. | No |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022350/original/kqFxG4OUFG8-l2VypGm6BDl-PuIKNZW9uA.png?1725188871)

* * *

## **Example**

You want to create a workflow that triggers when a contact submits a feedback survey and is not disqualified. The workflow will then send a follow-up email thanking the contact for their participation.

- **Workflow Trigger Name**: "Feedback Survey Submitted"

- **Filters**:




  - **Disqualified**: `is false` (Only trigger if the contact is not disqualified)

  - **Survey is**: "Customer Satisfaction Survey"

**Workflow Steps**:

1. **Trigger**: Survey Submitted (as configured above)

2. **Action**: Send Email - "Thank you for your feedback!"

3. **Action**: Update Contact Field - Mark the survey as "Completed."

* * *

## **Frequently Asked Questions**

**Q: Can I trigger a workflow from any survey?**

Yes. Leave the “Survey is” filter blank to trigger from any survey, or choose a specific one.

**Q: Can I use logic based on survey answers?**

While this trigger doesn’t directly evaluate answers, you can use custom fields or tags applied via survey to build logic.

**Q: Will this work if the survey is in a funnel?**

Yes. The trigger works for surveys embedded in funnels, websites, or externally shared links.

* * *

## **Related Articles**

- [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)

- [Getting Started with Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)

- [A List of Workflow Triggers](https://help.gohighlevel.com/en/support/solutions/articles/155000002292)

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

- [Workflow Trigger - Survey Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted)
- [Workflow Trigger - Funnel/Website Page View](https://help.gohighlevel.com/support/solutions/articles/155000003498-workflow-trigger-funnel-website-page-view)

## Related Articles

- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [How to send a Meta Conversion API action for Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted/hit)