---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003378,"
title: " Workflow Action - Course Grant Offer : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003378,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Memberships & Communities Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000761)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003378,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Memberships & Communities Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000761)
6. Workflow Action - Course Grant Offer

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

# Workflow Action - Course Grant Offer

Modified on: Wed, 23 Apr, 2025 at 5:47 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003378,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003378,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003378,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003378,#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003378,#Example)

## Overview

The **Course Grant Offer** action allows you to automate the process of granting access to specific courses for your contacts with or without a payment gateway. This action is particularly useful for managing educational content, onboarding clients, or providing exclusive training programs, ensuring that the right users gain access based on their actions or conditions within a workflow.

## Action Name

Course Grant Offer

## Action Description

The **Course Grant Offer** action is designed to streamline the process of providing course access to contacts. It automatically enrolls users in a designated course, removing the need for manual intervention. This can be triggered by specific events or conditions, such as contact created.

**Key Features:**

- Automate course enrollment for contacts based on workflow triggers.
- Customize course offerings based on user actions or predefined conditions.
- Simplify the onboarding process by ensuring timely access to educational content.

## Action Details

##### Step-by-Step Guide

1. **Choose the Action Type:**

   - In your workflow, select "Course Grant Offer" from the list of available actions.
2. **Name Your Action:**

   - Enter a descriptive name for the action, such as "Grant Access to Beginner's Course."
3. **Select the Offer:**

   - Choose the specific offer that you want to grant access to. This offer should could contain a discount or a free access to a course that is created. This could be a behind a payment gateway as well.
4. **Configure Access Settings:**

   - Customize the course under Memberships>products where the course can be created along with the details, theme, offers etc.
   - Create an offer either behind a paywall or not to allow access to the course.
5. **Set Triggers and Conditions:**

   - Determine the conditions that will trigger this action. This could include actions like completing a registration form, achieving a specific milestone, or creating a new contact.
6. **Additional Options:**

   - Optionally, set up additional parameters such as sending a notification email to the contact upon enrollment with the details of the course and a CTA button to the course.

## **Example**

**Scenario:** You want to automatically enroll a user in an "Advanced Marketing Strategies" course after a new contact is created. You also want to send an email to the contact with the course details.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497378/original/fr1fIP9kTZ8fAkKv5wL7hvpUISQg1ZxxOw.png?1725875621)

**Workflow Setup:**

- **Trigger:** Contact created
- **Action:** Course Grant Offer
  - **Name:** "Course Grant Offer"
  - **Offer:** "Monthly subscription![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497068/original/29bqofi9_iCCNmSR7FNZ8_UQYudxVaVwFQ.png?1725875459)

**Note** : This offer will have to be created seperately under Memberships>offers.

- **Action:** Send email
  - **Subject:** "Elevate your Brand with strategic marketing"
  - **Template:** "Advanced Marketing Strategies"
  - **From email and Name:** Location's email and Name by default

**Note** : This email template will have to be created separately in the email builder.

**Outcome:** When a new contact is created, a new course offer is created for the contact and same is sent over email.

* * *

## **Frequently Asked Questions**

**Q: What happens if access is granted again to a contact who already has it?**

If a contact is granted access to the same course offer more than once, HighLevel won’t duplicate the enrollment or reset their progress. The contact will retain their existing access without any disruption. However, any follow-up actions in the workflow—like sending an email—will still run unless conditions are added to prevent that.

**Q: Can I grant access to a course without a payment gateway?**

Yes, you can grant access to a course without requiring payment by creating an offer with no paywall under **Memberships > Offers**. This is useful for free training, onboarding, or internal educational content.

**Q: Do I need to create the offer before using the Course Grant Offer action?**

Yes, the offer must be created in advance under **Memberships > Offers**. The Course Grant Offer action references existing offers—you cannot create a new offer directly from the workflow.

**Q: Will contacts receive login details automatically after access is granted?**

Not automatically. If you want contacts to receive login instructions or course access links, you’ll need to add an email step in the workflow after the Course Grant Offer action using a prebuilt email template.

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

- [Workflow Action - Course Grant Offer](https://help.gohighlevel.com/support/solutions/articles/155000003378-workflow-action-course-grant-offer)
- [Workflow Action - Course Revoke Offer](https://help.gohighlevel.com/support/solutions/articles/155000003382-workflow-action-course-revoke-offer)

## Related Articles

- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Kajabi to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003315-kajabi-to-highlevel-migration-guide-)
- [Workflow Action - Course Revoke Offer](https://help.gohighlevel.com/support/solutions/articles/155000003382-workflow-action-course-revoke-offer)
- [How to Grant Access to Membership Courses Using Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002845-how-to-grant-access-to-membership-courses-using-workflows)
- [Workflow Trigger & Action - Grant/Revoke Private Channel Access](https://help.gohighlevel.com/support/solutions/articles/155000003681-workflow-trigger-action-grant-revoke-private-channel-access)
- [Gamification/ Leaderboard triggers and actions for Community groups](https://help.gohighlevel.com/support/solutions/articles/155000004080-gamification-leaderboard-triggers-and-actions-for-community-groups)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003378,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003378-workflow-action-course-grant-offer/hit)