---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002471"
title: " Using If/Else Workflow Action to Automate Decision-Making : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002471#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Internal Tools Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000751)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002471#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Internal Tools Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000751)
6. Workflow Action - If/Else

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

# Workflow Action - If/Else

Modified on: Fri, 30 May, 2025 at 3:57 PM

The "If/Else Condition" action in your automation workflow allows you to fork the contact's journey based on specific conditions. This is useful for creating personalized and dynamic workflows that adapt to your contact's behaviours.

* * *

**TABLE OF CONTENTS**

- [What is the If/Else Workflow Action?](https://help.gohighlevel.com/support/solutions/articles/155000002471#What-is-the-If/Else-Workflow-Action?)
- [Key Benefits of the If/Else Action](https://help.gohighlevel.com/support/solutions/articles/155000002471#Key-Benefits-of-the-If/Else-Action)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000002471#Action-Details)
- [Example: Follow-Up Based on Email Engagement](https://help.gohighlevel.com/support/solutions/articles/155000002471#Example%3A-Follow-Up-Based-on-Email-Engagement)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002471#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000002471#Related-Articles)

* * *

# **What is the If/Else Workflow Action?**

The If/Else action allows you to evaluate contact-specific data and route workflow automation based on whether the contact meets certain criteria. It creates two or more logical branches inside a workflow depending on whether a condition is true or false. his enables you to tailor subsequent actions according to the contact’s engagement or characteristics.

* * *

## **Key Benefits of the If/Else Action**

Use conditional logic to tailor each contact's journey inside your automation flows.

- **Conditional Logic**: Send contacts down different paths based on their behavior, status, or attributes.

- **Automation Efficiency**: Prevent manual sorting by automating responses to common triggers.

- **Scalable Segmentation**: Segment contacts dynamically using tag presence, appointment status, and more.

- **Visual Clarity**: Instantly see workflow logic splits for easy debugging and optimization.


* * *

## **How to Use the If/Else Action**

### **Step 1:** Add the If/Else Action

Place the If/Else action wherever you want to split contacts based on a condition.

- Open your workflow

- Click the **+** icon to add a new action

- Select **If/Else** from the action list


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047518230/original/1qTcyRHmBKwW1FJaqLb1fI7W_f9ORZpuMg.png?1748635908)

### **Step 2:** Choose a Logic Setup Method

You can either:

- Build from scratch by clicking **"Build My Own"**, or

- Use a **prebuilt recipe** that includes common conditional branches (e.g., country, tag).


### **Step 3** **:** Fill Out the Inputs for the First Branch

The first branch appears automatically. Define your condition(s):

- Use the dropdown to select the **field**, **operator**, and **value** you want to evaluate.





  - Example: Current Day of Week → Is → Monday
- Click **Add Segment** to add more condition rows.

- Use **AND** or **OR** to control how conditions are grouped:





  - **AND** = all conditions must be true

  - **OR** = only one condition must be true

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047518611/original/z6eSqM2LK90mKVrK8l4yOgu-YQXMVElKxA.png?1748637174)

### **Step 4:** Add Additional Branches (If Needed)

- Click **Add Branch** at the bottom of the panel to define another condition group.

- You can create as many branches as needed to cover all your logic scenarios.


Example:

- Branch 1: Current Day of Week → Is → Monday

- Branch 2: Current Day of Week → Is → Friday


Each branch will direct contacts to a separate path inside your workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047518670/original/zMXmvAurWNJDM5bwNmRoo6rhcuLKoMxobg.png?1748637341)

### **Step 5:** Configure the “None” (Else) Branch

The **None** branch is automatically created and is used when a contact doesn't meet the conditions of any defined branches.

- This branch does **not** require or support conditions.

- You can only **name the branch** — no logic setup is needed.

- Add any fallback workflow actions under this branch (e.g., notifications, default messaging, tags).


_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047518723/original/D-XWM9zrR2OyJyCNJWdUfNXVEkfCvVRcuQ.png?1748637496)_

* * *

## **Action Details**

|     |     |     |
| --- | --- | --- |
| Value Name | Description | Mandatory |
| Action Name | The name you assign to this action for easy identification in your workflow. | Yes |
| Condition | The specific condition that is evaluated (e.g., if an email was opened, if a form was submitted). | Yes |
| Branches | The paths that the contact will take based on the condition's outcome (e.g., Yes, No). | Yes |
| Segments | Segments let you group multiple conditions using AND/OR logic to create complex rules within a branch.<br>[Click here for more info on segments and operators](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else) | No |

* * *

## **Example: Follow-Up Based on Email Engagement**

**Scenario:** Your business sends a promotional email to customers, and you want to follow up differently based on whether they opened the email or not.

**Solution using the "If/Else Condition" action**:

- **Trigger:** The workflow starts when a promotional email is sent.

- **Action 1:** If/Else Condition to check if the email was opened.

- **Condition:** Email Event is Opened.

- **Yes Branch:** If the email was opened, send a thank-you email with a special offer.

- **No Branch:** If the email was not opened, resend the promotional email with a different subject line.


**Steps to Implement:**

- Add the If/Else Condition action to your workflow after sending the promotional email.

- Set the Condition to "Email Event is Opened".

- Configure the Yes Branch to follow up with a thank-you email and a special offer.

- Configure the No Branch to resend the promotional email with a different subject line.


This approach ensures that you engage customers based on their interaction with your initial email, making your follow-up more relevant and effective.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038078934/original/YOeKdr4jCP7ZZDcLF_85tgDe6fgL1MMvAA.png?1733841498)

* * *

## **Frequently Asked Questions**

**Q: How can I control how long the workflow waits before evaluating the If/Else condition?**

To make sure your If/Else condition evaluates only after giving the contact enough time to take action (like opening an email), you should insert a **Wait step** _before_ the If/Else action. Use the wait step’s **“Wait for event OR timeout”** configuration — for example, “Wait until the email is opened OR 1 day passes.” This means the workflow will pause and wait for the event to happen but will automatically continue after the set duration if it doesn’t. Once the wait condition is met (either by the event or by timeout), the workflow moves on to the If/Else condition to check whether the event actually occurred. This setup ensures your condition is evaluated at the right moment and helps you manage what happens if the event doesn’t happen at all.

**Q: Can I edit a branch’s logic after it’s created?**

Yes. You can update fields, operators, and values any time before or after publishing.

**Q: Is the None branch required?**

Yes, and it’s created automatically. You can rename it, but not remove it.

* * *

## **Related Articles**

- [If Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/en/support/solutions/articles/155000004050)

- [Workflow Action - If Else New Features](https://help.gohighlevel.com/en/support/solutions/articles/155000001641)

- [If Else Conditions - using AND or OR conditions](https://help.gohighlevel.com/en/support/solutions/articles/48001202137)

- [Workflow Action - Wait](https://help.gohighlevel.com/en/support/solutions/articles/155000002470)

- [Action - Goal Event](https://help.gohighlevel.com/en/support/solutions/articles/155000003328)


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

- [Workflow Action - Wait](https://help.gohighlevel.com/support/solutions/articles/155000002470-workflow-action-wait)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)
- [Workflow Action - Remove from Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else)

## Related Articles

- [If/Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options)
- [Workflow Action - Split](https://help.gohighlevel.com/support/solutions/articles/155000003304-workflow-action-split)
- [Workflow Action - If/Else Upgrad](https://help.gohighlevel.com/support/solutions/articles/155000003975-workflow-action-if-else-upgrad)
- [Workflow Action - Intent Detection](https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-intent-detection)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)
- [Getting Started with Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002471)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else/hit)