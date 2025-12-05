---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields"
title: " Map Quiz Results Directly to CRM Custom Fields! : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Quizzes](https://help.gohighlevel.com/support/solutions/folders/155000000942)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Quizzes](https://help.gohighlevel.com/support/solutions/folders/155000000942)
6. Map Quiz Results Directly to CRM Custom Fields

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

# Map Quiz Results Directly to CRM Custom Fields

Modified on: Thu, 13 Nov, 2025 at 3:11 PM

**Quiz Result → CRM Field Mapping** allows quiz results to automatically populate into contact-level custom fields in your CRM. This gives you direct, structured access to quiz performance data for each contact which you can use for segmentation, personalization, and automation.

* * *

**TABLE OF CONTENTS**

- [What is Quiz Result → CRM Field Mapping?](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#What-is-Quiz-Result%C2%A0%E2%86%92%C2%A0CRM-Field-Mapping?)
  - [Key Benefits of Quiz Result → CRM Field Mapping](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Key-Benefits-of-Quiz-Result-%E2%86%92-CRM-Field-Mapping)
  - [Auto-Generated Quiz Result Fields](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Auto-Generated-Quiz-Result-Fields)
  - [Default Data Types](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Default-Data-Types)
  - [Real-Time Field Updates on Resubmission](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Real-Time-Field-Updates-on-Resubmission)
  - [Using Quiz Result Fields in Workflows & Automations](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Using-Quiz-Result-Fields-in-Workflows-&-Automations)
  - [How To Setup Quiz Result → CRM Field Mapping](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#How-To-Setup-Quiz-Result-%E2%86%92-CRM-Field-Mapping)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Frequently-Asked-Questions)
  - [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields#Related-Articles)

* * *

# **What is Quiz Result** **→** **CRM Field Mapping?**

**Quiz Result → CRM Field** **Mapping** writes a contact’s quiz outcomes, such as overall score and tier, per‑category scores and tiers, and highest/lowest category details, into contact custom fields in HighLevel. Mapping turns one‑off quiz answers into durable CRM attributes.

This eliminates the need for manual tagging or external tracking tools. It turns every quiz submission into structured CRM data that you can use to create personalized experiences, trigger specific workflows, and segment contacts with precision.

* * *

## **Key Benefits of Quiz Result → CRM Field Mapping**

- **Auto-Generated fields:** Fields for overall score/tier, category scores/tiers, and highest/lowest category details are created for you.

- **Real‑Time Updates:** The latest submission for the same quiz overwrites the same contact’s fields (no duplicates).

- **Automation-Ready:** Use the mapped fields in workflows, branching, and conditional content.

- **Cleaner segmentation:** Build smart lists based on scores, tiers, or winning categories.

- **Personalized Follow‑Ups:** Tailor emails/SMS/pages based on outcome tiers or categories.


* * *

## **Auto-Generated Quiz Result Fields**

HighLevel scans the quiz on first submission and builds contact fields that follow a predictable naming pattern. This structure keeps data tidy and searchable. View the examples below:

- {{quiz\_name}} – Overall Score

- {{quiz\_name}} – Overall Score – Tier

- {{quiz\_name}} – {{category\_name}} – Score

* * *

## **Default Data Types**

- **Scores** are stored as Number fields.

- **Tiers and Category Names** are stored as Text fields.


This makes the data compatible with all standard CRM filters, workflow conditions, and personalization tools.

* * *

## **Real-Time Field Updates on Resubmission**

Every time a contact retakes the same quiz, HighLevel overwrites the existing values instead of creating duplicates. This ensures that automations always reference the latest scores without extra cleanup rules.

* * *

## **Using Quiz Result Fields in Workflows & Automations**

Once quiz data is mapped into the CRM, you can use it in multiple ways:

#### **1\. Segment Contacts**

Filter or group contacts based on their quiz performance.

Example:

- Create a Smart List of users with “Overall Score ≥ 80.”

- Group users by “Fitness Tier = Beginner” for targeted messages.

#### **2\. Personalize Automations**

Use quiz results to tailor follow-up workflows.

Example:

- Send different nurture emails depending on the highest or lowest category.

- Trigger actions when a category score crosses a threshold.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341887/original/PswBIWbnf60aCPzvqQ3xot-yhuO_-B4-2A.png?1763067422)

#### **3\. Power Conditional Logic**

In workflows or campaigns, use mapped fields to create dynamic paths.

Example:

- If “{{quiz\_name}} - Diet Tier = Advanced,” send an advanced guide.

- If “{{quiz\_name}} - Fitness Score < 50,” enroll the contact in a beginner plan.

* * *

## **How To Setup Quiz Result → CRM Field Mapping**

#### **Step 1:** Open a Quiz

- Navigate to **Sites****→****Quizzes**.

- Select an existing Quiz or click the blue **\+ Add Quiz** button to Create a new one.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341494/original/Ry15_2kbZ9LMUiXqzjR04JqIgapH2PblHA.png?1763066854)

#### **Step 2:** Open Results Page

Scroll to the end of the quiz to the **Re** **sults Template**. Click on **Edit Template**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341529/original/AbH7W8JzdprSbSVkSOHkDlS38aZDNb6PKg.png?1763066893)

#### **Step 3:** Enable Custom Fields

- Click the **Settings** button in the upper right corner and expand the **Custom Fields** dropdown to see the automatically created custom fields.

- Under **Custom Fields**, turn on the toggles for the fields you want to sync, such as:





  - Overall Score

  - Overall Score Tier

  - Category-wise Scores and Tiers

  - Highest and Lowest Scoring Categories
- The system will automatically assign a **Custom Field Name** and **Unique Key** for each enabled field.

- Click **Save** once you’ve enabled the fields.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341562/original/qmEabdjiJeLEIy7jy6CProFIqLq2V9WQsw.png?1763066973)

#### **Step 4:** Contact Submits a Quiz

When a user completes a quiz, their scores and tiers are automatically captured.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341621/original/zePgg7fj2FGHmtt2M2lngOhSHYq8aXd5Mw.png?1763067123)

#### **Step 5:** Data is Written to CRM Fields

After a quiz is submitted, the selected fields are created and updated in the contact record.

Example field names:

- {{quiz\_name}} - Overall Score

- {{quiz\_name}} - {{category\_name}} - Tier

- {{quiz\_name}} - Highest Category - Score

If a contact retakes the same quiz, the existing data is overwritten — not duplicated. This keeps contact records clean and accurate.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341782/original/ojRojOGaIAx4WaTqpV5WK0ZE4Qk7cbyiGQ.png?1763067237)

* * *

## **Frequently Asked Questions**

**Q: Can I rename or delete the auto-generated fields?**

You can rename or move them into groups, but deleting a field removes historical quiz data from all contacts.

**Q: Does the feature work with existing quizzes?**

Yes, as long as the custom fields are toggled on within the quiz settings. Once a contact submits any quiz (new or old), HighLevel creates the fields on the fly.

**Q: Are these contact or opportunity fields?**

They are Contact Custom Fields, making them usable in forms, Smart Lists, and contact workflows.

**Q: Can I export quiz fields to CSV?**

Absolutely! Exporting contacts includes every custom field, including quiz scores and tiers.

* * *

## **Related Articles**

- [Quiz Builder Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000004126)

- [Customizing Quiz Result Pages](https://help.gohighlevel.com/en/support/solutions/articles/155000006615)

- [How to Use Custom Fields](https://help.gohighlevel.com/en/support/solutions/articles/48001161579)

- [How to Create & Manage Smart Lists](https://help.gohighlevel.com/en/support/solutions/articles/48001062094)

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)

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

- [Quiz Builder Guide](https://help.gohighlevel.com/support/solutions/articles/155000004126-quiz-builder-guide)
- [Workflow Trigger - Quiz Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004437-workflow-trigger-quiz-submitted)
- [How to Assign Categories and Scoring in Quizzes With Dynamic Result Messages - A Complete Guide!](https://help.gohighlevel.com/support/solutions/articles/155000004750-how-to-assign-categories-and-scoring-in-quizzes-with-dynamic-result-messages-a-complete-guide-)
- [Quiz Template Library: Create Quizzes Faster with Pre-Built Templates](https://help.gohighlevel.com/support/solutions/articles/155000005124-quiz-template-library-create-quizzes-faster-with-pre-built-templates)
- [Setting Up Personality-Style Quizzes (Highest/Lowest Category)](https://help.gohighlevel.com/support/solutions/articles/155000006492-setting-up-personality-style-quizzes-highest-lowest-category-)
- [Customizing Quiz Result Pages](https://help.gohighlevel.com/support/solutions/articles/155000006615-customizing-quiz-result-pages)

## Related Articles

- [Rating Element for Forms, Surveys & Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000005509-rating-element-for-forms-surveys-quizzes)
- [Workflow Trigger - Quiz Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004437-workflow-trigger-quiz-submitted)
- [Custom Objects and Company Objects in Forms, Surveys & Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000006384-custom-objects-and-company-objects-in-forms-surveys-quizzes)
- [Setting Up Personality-Style Quizzes (Highest/Lowest Category)](https://help.gohighlevel.com/support/solutions/articles/155000006492-setting-up-personality-style-quizzes-highest-lowest-category-)
- [Quiz Builder Guide](https://help.gohighlevel.com/support/solutions/articles/155000004126-quiz-builder-guide)
- [Element & Slide Cloning in Quizzes, Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000006541-element-slide-cloning-in-quizzes-forms-and-surveys)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields/hit)