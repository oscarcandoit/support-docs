---
url: "https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed"
title: " Workflow Triggers - Note Changed : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001337)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001337)
6. Workflow Triggers - Note Changed

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

# Workflow Triggers - Note Changed

Modified on: Fri, 20 Dec, 2024 at 9:07 AM

This article explains the Note Changed workflow trigger, a tool designed to automate actions whenever a note in a contact record is modified. You’ll learn what this trigger is, its benefits, how to configure it step by step, and examples of its practical applications.

* * *

# **What is Note Changed Workflow Trigger**

The Note Changed workflow trigger activates when a note in a contact record is updated or modified. This trigger helps to synchronize contact information and automate workflows based on changes made to notes, making it invaluable for keeping data up to date and initiating follow-ups or additional actions. By using filters like **“Has Tag”** or **“Doesn’t Have Tag,”** you can target specific types of contacts for greater precision in your workflows.

* * *

## **Key Benefits of Using This Trigger**

- **Real-Time Synchronization:** Automatically tracks changes in contact notes, ensuring your system is always updated.

- **Automated Follow-Ups:** Triggers workflows to respond to note changes, such as updating contact statuses or assigning tasks.

- **Enhanced Data Management:** Helps organize and manage contact records by automating responses to note updates.

- **Filter-Based Precision:** Allows workflows to target specific contacts based on tags, ensuring the right action is taken for the right contacts.

- **Increased Productivity:** Reduces manual intervention by automating routine actions triggered by note modifications.

* * *

## **Configuring the Trigger: A Step-by-Step Process**

### **Navigate to Workflow Triggers**

Access the automation or workflow settings in your platform.

### **Select the Trigger**

From the available options, choose the Note Changed trigger under the Contact section.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038703243/original/oxf_ZSQ6GTM-WwtJrT_-1bFs1rbaELegUg.jpeg?1734704330)

### **Name Your Trigger**

Give the trigger a descriptive name.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038704176/original/wr-RX8Dtg372z6F31lF6urhmdlt3c9CibQ.png?1734705019)

**Set Filters**

Set filters to specify conditions that refine when a workflow trigger activates, ensuring precise targeting.

- **Has Tag:** Configure the workflow to trigger only when the contact has the specified tag.

- **Doesn’t Have Tag:** Configure the workflow to trigger only when the contact lacks the specified tag.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038707107/original/sDlYPbAGVWWQON3EmxcKVQ-Umot26tiT3Q.jpeg?1734706748)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038704383/original/C6qZ7mfUzObJhThLnmJ30yjoh9qU-8QPhw.png?1734705137)

* * *

### **Save the Trigger**

Ensure the configuration is saved and linked to the appropriate workflow actions.

### **Test and Publish**

Test the trigger using sample data, then enable the Publish toggle to activate the workflow.

* * *

## **Use Cases**

### **Customer Support Task Assignment**

**Scenario:** A support agent updates a note with details of an ongoing issue. The workflow should assign a task to the relevant specialist.

**Trigger Setup:**

- **Trigger:** Note Changed.

- **Filter:** Has Tag: “High Priority.”

**Outcome:** The workflow assigns the task to a senior support specialist and notifies them immediately.

* * *

### **Membership Renewal Reminders**

**Scenario:** A note is updated to indicate that a member’s renewal date is approaching. This change should trigger a reminder email.

**Trigger Setup:**

- **Trigger:** Note Changed.

- **Filter:** Has Tag: “Member.”

**Outcome:** The workflow sends a personalized renewal reminder email to the member.

* * *

## **Frequently Asked Questions**

**Can the trigger handle multiple note changes in quick succession?**

Yes, the trigger activates each time a note is updated. However, to prevent overlapping workflows, you can add conditions or cooldown periods in the workflow actions.

**How does the filter “Has Tag” affect the workflow?**

The “Has Tag” filter ensures that the workflow only activates for contacts with a specified tag, enabling precise targeting and reducing unnecessary workflow execution.

**Can I combine this trigger with other triggers in the same workflow?**

Yes, the Note Changed trigger can be combined with others, such as “Tag Added” or “Task Completed,” to create more complex workflows.

**What happens if a note is deleted instead of updated?**

This trigger activates only when a note is changed or updated. Deleting a note will not trigger the workflow.

**Is it possible to track changes made to specific types of notes?**

Currently, the trigger applies to all note changes in a contact record. You can use filters like “Has Tag” or “Doesn’t Have Tag” to refine the workflow’s scope based on the type of contact.

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

- [Workflow Trigger - Birthday Reminder](https://help.gohighlevel.com/support/solutions/articles/48000987572-workflow-trigger-birthday-reminder)
- [Workflow Triggers - Note Changed](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed)
- [Workflow Trigger - Task Completed](https://help.gohighlevel.com/support/solutions/articles/155000001166-workflow-trigger-task-completed)
- [Workflow Trigger - Contact Changed](https://help.gohighlevel.com/support/solutions/articles/155000002477-workflow-trigger-contact-changed)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [Workflow Trigger - Contact Created](https://help.gohighlevel.com/support/solutions/articles/155000002486-workflow-trigger-contact-created)

## Related Articles

- [Gamification/ Leaderboard triggers and actions for Community groups](https://help.gohighlevel.com/support/solutions/articles/155000004080-gamification-leaderboard-triggers-and-actions-for-community-groups)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Workflow Trigger - Note Added](https://help.gohighlevel.com/support/solutions/articles/155000003248-workflow-trigger-note-added)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Basecamp – Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows)
- [Workflow Action - Assign User](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed/hit)