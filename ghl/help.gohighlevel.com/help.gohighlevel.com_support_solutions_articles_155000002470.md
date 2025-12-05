---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002470"
title: " Workflow Action - Wait : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002470#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002470#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Internal Tools Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000751)
6. Workflow Action - Wait

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

# Workflow Action - Wait

Modified on: Mon, 23 Jun, 2025 at 4:55 AM

The “Wait” action is a key feature in automation workflows that allows you to control when the next steps in your workflow occur. By pausing an action, you can ensure interactions with your contacts are timely and relevant. This guide will explain how to configure the “Wait” action, provide step-by-step instructions, and include practical examples to help you understand its usefulness.

* * *

**TABLE OF CONTENTS**

- [What Is the “Wait” Action?](https://help.gohighlevel.com/support/solutions/articles/155000002470#What-Is-the-%E2%80%9CWait%E2%80%9D-Action?)
  - [Wait Action Details](https://help.gohighlevel.com/support/solutions/articles/155000002470#Wait-Action-Details)
  - [When Should You Use the “Wait” Action?](https://help.gohighlevel.com/support/solutions/articles/155000002470#When-Should-You-Use-the-%E2%80%9CWait%E2%80%9D-Action?)
  - [Configuring the “Wait” Action](https://help.gohighlevel.com/support/solutions/articles/155000002470#Configuring-the-%E2%80%9CWait%E2%80%9D-Action)
  - [Examples of the “Wait” Action](https://help.gohighlevel.com/support/solutions/articles/155000002470#Examples-of-the-%E2%80%9CWait%E2%80%9D-Action)
    - [Example 1: Welcome Email After Sign-Up](https://help.gohighlevel.com/support/solutions/articles/155000002470#Example-1%3A-Welcome-Email-After-Sign-Up)
    - [Example 2: Follow-Up After a Newsletter Sign-Up](https://help.gohighlevel.com/support/solutions/articles/155000002470#Example-2%3A-Follow-Up-After-a-Newsletter-Sign-Up)
    - [Example 3: Abandoned Cart Recovery](https://help.gohighlevel.com/support/solutions/articles/155000002470#Example-3%3A-Abandoned-Cart-Recovery)

* * *

# **What Is the “Wait” Action?**

The “Wait” action **holds a contact in the workflow** for:

    •    A specified **amount of time** (e.g., 1 day, 1 hour, etc.).

    •    Until a **condition** is met (e.g., a contact replies or a specific event occurs).

    •    During a specified **time window** (e.g., between 9 AM and 5 PM on weekdays).

This feature ensures your communications or processes are timed perfectly to improve efficiency and enhance user experience.

* * *

## **Wait Action Details**

This table contains all of the settings available in the Wait action.

| Wait For | Description | Standard | Advanced |
| --- | --- | --- | --- |
| Time Based - Time Delay | Wait for a particular amount of time or time period | Wait \[number\] \[minutes / hours / days\] | Resume on \[day of week\]<br>Resume \[window\] \[start - end\]<br>Resume \[exact\] \[time\] |
| Time Based - Event/Appointment Time | Wait until before or after event start time or appointment time | Until \[exact time\]<br>After \[months + days + hours + minutes\]<br>Before \[months + days + hours + minutes\] | If already in the past \[next step / specific step / skip all\] |
| Time Based - Overdue | Wait until before or after the invoice due date | Until \[exact time\]<br>After \[months + days + hours + minutes\]<br>Before \[months + days + hours + minutes\] | If already in the past \[next step / specific step / skip all\] |
| CRM Event - Condition | Wait for a particular condition to get satisfied | Multiple Segments (and/or) > Multiple Conditions (and/or)<br>\[field\] \[is / is not / contains / does not contain / is any of (list) / is none of (list) / is not empty / is empty\] | Timeout (on/off)<br>\[number\] \[minutes / hours / days\] |
| CRM Event - Contact Reply | Wait for a reply on certain steps | Reply on channel (email, sms, etc) IF a previous action sent on that channel | Timeout (on/off)<br>\[number\] \[minutes / hours / days\] |
| CRM Event - Trigger Link Clicked | Wait for trigger links to be clicked | Select trigger link | Timeout (on/off)<br>\[number\] \[minutes / hours / days\] |
| CRM Event - Email Events | Wait for email events | Select \[previous email send action\] + \[opened / clicked / unsubscribed / complained (spam) / bounced\] | Timeout (on/off)<br>\[number\] \[minutes / hours / days\] |

* * *

## **When Should You Use the “Wait” Action?**

The “Wait” action is useful in scenarios where:

- **Timely Follow-ups**: Quickly respond to customer enquiries or send an email or SMS at appropriate time.

- **Conditional Triggers**: Hold a contact until a certain condition is met, such as completing a form or making a payment.

- **Controlled Scheduling**: Avoid sending messages during off-hours or weekends by resuming the workflow during specified times.

* * *

## **Configuring the “Wait” Action**

Here’s how you can set up the “Wait” action in your workflow:

Step 1: Add the “Wait” Action to Your Workflow. Go to the "Workflows" area in "Automation" section.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037447851/original/Lxb6k2u8rpcJLYQbYTc4A_lDYWHpQn137g.png?1732872616)

Step 2: Click " + Create Workflow" button at the top right corner. It will open a dropdown menu. Click " + Start from scratch" option.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037449214/original/viFqQbtsDaoyZ6LLRJmrH-NyY2ulXi5LYg.png?1732873492)

Step 3: Set up the Trigger for the workflow. In this example, we have used "Contact created" trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467150/original/aiNa564YNRQapBYvXvZI5Ijqe1BQsR-mVg.jpeg?1732886507)

Step 4: To add the "Wait" step, click the "+" icon. from the actions menu, scroll down or search for "Wait" action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037465597/original/B_UsyHndhF2kjMfTLHOP8YClBpIu-xlrgg.png?1732885199)

Step 5: Name the Action: Provide a descriptive name (e.g., “Wait - 1 Day After Sign-Up”). This helps you identify the action easily when reviewing the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466642/original/HyqwIuwS1M0Txgn6Umg9MJRh8t_OTGvX1w.jpeg?1732886092)

Step 6: Choose the Wait Type Click the dropdown to view and select the type of wait action based on your objective.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037552575/original/8YTpznRRXFBn1HjaxkKARaWXtmre0GCa4w.jpeg?1733127967)

Step 7a: Time Delay:  Specify a fixed duration to wait (e.g., 1 day, 1 hour, 5 minutes).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467551/original/DVi2ajFn44BLkt64A8BVBhgghyfMXIA93Q.jpeg?1732886751)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037550216/original/vv8JqdbyYiXjAgBuDLUnlTqig_5Eb47MQA.png?1733126248)

Step 7b: Condition: Set a condition to resume the workflow. In the below example, we have added a condition that the workflow should be fired only if the answer to the question is "Yes"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037470781/original/tsCSvH_Ix_-6ApRCsjTz2YWZ8iI_8YtDsw.png?1732889265)

```
Conditions and Segments

When you select Wait for Condition, you’ll need to define Conditions that determine when the contact can proceed. You can group multiple conditions into Segments, using AND/OR logic to build more complex rules. If any segment evaluates as true, the Wait action is satisfied.

Use Add Condition to build individual rules, and Add Segment to create grouped logic blocks.
```

Step 7c: Contact Reply. Pause until the contact interacts with your email or message.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037471020/original/Jd0LzbUaxtfZGc2MWEZwB9S59MdsGmwP4g.png?1732889428)

Step 7d: Set Advance Window (optional). Use these settings to control the windows of days/times the Wait action will try to activate. For example, if the contact replied on a Saturday, and that would normally trigger the Wait action to proceed, but you only want it to run on weekdays, then you can set the Advance Window to Mon-Fri (excluding Sat-Sun). You can do the same for the times of day.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466877/original/lShOBMNZ0TzwqQxryMyxkCSgv_jX1SogGw.jpeg?1732886282)

Step 7e: Resume On. Choose specific days to resume the action (e.g., weekdays only).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466836/original/vyMu0xTNnDk8_rcGK8t-XNfw5TUURDGa3Q.jpeg?1732886235)

Step 7f: Resume Between Hours. Define the time window for resuming the action (e.g., 9 AM to 5 PM).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467210/original/CLCvJGXUPSDoJnFkuj48AYaCnBYn7ZYD6Q.jpeg?1732886567)

Step 7g: Additional Filters. Add more granular conditions, such as holding a contact until a specific year, months and date to fire some personalized workflows such as sending birthday wish on a specific date of the year.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466921/original/_DSLkKZgVXBLiavIpd6yH-E2MRwGjRP_Eg.jpeg?1732886332)

Step 8: Save and Test. Save the workflow and test it to ensure the “Wait” action performs as expected.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037565186/original/6FOxmtPS7UApe0Y8Ajn-Tts2qiIcxaVbBQ.png?1733135197)**Examples of the “Wait” Action**

### **Example 1: Welcome Email After Sign-Up**

Scenario: A new customer signs up on your website.

1. Trigger: The automation starts when a new contact is added.

2. Wait: Add a 1-day delay before sending the email.

3. Action: Send a personalized welcome email.


Result: The delay gives the new customer a moment to explore your brand before receiving the email, making the interaction feel thoughtful and intentional.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037480366/original/lHUnqUmfIr_iGmjx6AYZHbdlBZv0CNz2tg.jpeg?1732897920)

* * *

### **Example 2: Follow-Up After a Newsletter Sign-Up**

Scenario: A lead signs up for your newsletter.

1. Trigger : The automation begins when a lead subscribes.

2. Wait: Hold for 1 minute before sending the first email.

3. Action: Send a “Thank You for Signing Up” email with a link to your latest newsletter.


Result: The brief delay ensures your email doesn’t appear robotic or instant, creating a more humanized experience.

* * *

### **Example 3: Abandoned Cart Recovery**

Scenario: A customer adds items to their cart but doesn’t complete the purchase.

1. Trigger: A cart is abandoned.

2. Wait: Pause for 20 minutes to give the customer time to reconsider.

3. Action: Send a gentle reminder email with a discount offer.


Result: The strategically timed follow-up increases the likelihood of conversion.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037552570/original/rQvrw9_n6nyTB-X1vzBVKMGsnPmeypzAzA.png?1733127966)

* * *

## **Frequently Asked Questions**

**Q: What’s the difference between Segments and Conditions in a Wait action? How should I use them?**

In a Wait action, Conditions are individual rules like “Contact’s Job Title is CEO” or “Contact is in the ‘High-Value’ Tag.” Segments are groups of these conditions, evaluated together using AND/OR logic. A contact exits the Wait step when any one segment is satisfied.

For example, you may want the workflow to continue if a contact is highly engaged or meets specific criteria. Segment 1 might check if the contact opened a proposal email and is a “Decision-Maker,” while Segment 2 checks if they attended a strategy call and have an approved budget.

If either segment is satisfied, the wait ends—allowing your automation to adapt to different but equally qualified user behaviors.

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

- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Workflow Action - Go To](https://help.gohighlevel.com/support/solutions/articles/155000003377-workflow-action-go-to)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)
- [WhatsApp - Workflow Integration](https://help.gohighlevel.com/support/solutions/articles/155000001624-whatsapp-workflow-integration)
- [Workflow Action - GPT History](https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history)
- [Workflow Action - Send SMS](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002470)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002470-workflow-action-wait/hit)