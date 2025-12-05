---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003377,"
title: " Workflow Action - Go To : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003377,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003377,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Go To

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

# Workflow Action - Go To

Modified on: Mon, 9 Sep, 2024 at 4:35 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003377,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003377,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003377,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003377,#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003377,#Example)

## Overview

The Go-To event allows you to jump contacts from one place to another in Workflows. This action enables you to direct contacts to specific points in the workflow based on certain criteria or triggers.  By using the "Go To" action, you can streamline your workflows, ensuring that contacts receive tailored experiences based on their interactions or behaviours.

## Action Name

Go To

## Action Description

Using the "Go To" action you can send a contact to another action in the workflow. This action is useful when you want to send the contact through another branch or sending the contact back to few actions if a certain condition is not met.

A point to remember is that the "Go To" action can only be added as a last step of a workflow or a branch. It can't be added between actions.

## How to Configure

#### **Step-b** **y-Step Guide**

1. **Navigate to Workflow Actions:** Access the automation or workflow settings in your platform.
2. **Choose a Workflow Action:** Select "Go To" from the list of available actions.
3. **Name Your Action:** Enter a descriptive name for the trigger, such as "Go to Wait action."
4. **Save:** Click on Save button.
5. **Configure:** All the actions will be highlighted and you can click on the action where you want the contact to proceed.
6. **De-link -** Now what if you want to change the action which was selected earlier. Click on the "Disconnect GoTo" icon under the Go To action and then you can select another action where you want the contact to proceed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032494801/original/6T4ziuakZxJbvLDr-KR0osap6pfhl091zw.png?1725874453)

## Example

Sending Emails to customers who have purchased the items

**Scenario:** An online retailer wants to re-engage customers who have not purchased the items and don't want to send an email to the customers who have already bought.

**Trigger Setup:**

- **Trigger:** Abandoned Checkout
- **Name:** Abandoned Checkout
- **Filters:**
  - **Duration (minutes):** 10 (trigger the workflow if the cart is abandoned for more than 10 minutes)
  - **Cart Value:** Greater than 50 (trigger the workflow only if the cart value exceeds $50)

**Workflow Actions:**

1. **Email Notification:** Send a personalized email to the customer, reminding them of the items left in their cart and offering an incentive (e.g., discount).
2. **Wait:** Wait for 1 day
3. **If/Else:** Add if else condition to check if the user has "Purchased" tag. The contact will go through the first branch if the tag is present and the None branch if tag is not present.
4. **Email (Branch 2):** Send another email to the contact reminding them of the abandoned cart.
5. **Wait (Branch 2):** Add a wait step with a condition if tag added is "Purchased"
6. **Go To (Branch 1):** Add a Go to action that will take the contact directly to the wait step in the second branch

**Outcome:** This automation helps recover potentially lost sales by re-engaging customers who abandoned their carts and do not send an email to the customers who have already purchased the items.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032494587/original/Rtrqp4TltAdaz3-j9_Qomcr-c0n_Wouhow.jpeg?1725874371)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032494687/original/kJ9A12CFzqzpstlRanspr6h5SF3PDCgyPg.png?1725874395)

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

- [Go-To Connections for Triggers: Advanced Builder Workflow](https://help.gohighlevel.com/support/solutions/articles/155000006690-go-to-connections-for-triggers-advanced-builder-workflow)
- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Workflow Action - Send Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts)
- [Workflows- Improved Execution Logs & Enrollment History](https://help.gohighlevel.com/support/solutions/articles/155000003992-workflows-improved-execution-logs-enrollment-history)
- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003377,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003377-workflow-action-go-to/hit)