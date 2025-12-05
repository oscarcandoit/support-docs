---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows"
title: " Basecamp Actions & Triggers in HighLevel Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
6. Basecamp – Actions & Triggers in Workflows

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

# Basecamp – Actions & Triggers in Workflows

Modified on: Mon, 13 Oct, 2025 at 2:09 PM

## 1\. Introduction

The Basecamp integration in HighLevel enables seamless automation between your workflows and Basecamp’s project management platform. Whether you’re coordinating client projects, collaborating with teams, or tracking tasks, this integration connects HighLevel automation with Basecamp’s to-dos, messages, and documents.

### Why It Matters

With this integration, agencies, marketers, and SMBs can:

- Automatically create to-dos, projects, and schedules in Basecamp directly from HighLevel events.

- Keep project collaboration in sync with CRM updates and client interactions.

- Save time by reducing manual setup and communication tasks.


## 2\. Triggers and Actions

### Triggers (Basecamp → HighLevel)

These are events in Basecamp that can initiate workflows in HighLevel:

| Trigger Name | Description |
| --- | --- |
| **New To-do** | Fires when a new to-do is created in Basecamp. |
| **New Comment Added** | Fires when a comment is added to a to-do or message. |
| **New Document** | Fires when a new document is created. |
| **New Activity** | Fires when there is new activity in a Basecamp project. |
| **New Message Posted** | Fires when a new message is posted in Basecamp. |
| **New To-do List** | Fires when a new to-do list is created. |

* * *

### Actions (HighLevel → Basecamp)

These are actions HighLevel can execute in Basecamp through workflows:

| **Action Name** | **Description** |
| --- | --- |
| **Create To-Do List** | Creates a new to-do list inside a specific BaseCamp project. Useful for grouping related tasks. |
| **Create To-Do** | Adds a new to-do item within an existing to-do list in BaseCamp. Ideal for assigning specific work items. |
| **Create Message** | Posts a message in a BaseCamp project’s message board for team-wide communication. |
| **Create Campfire Message** | Sends a message in a BaseCamp Campfire chat room for real-time discussion. |
| **Update To-Do** | Updates the details of an existing to-do (e.g., title, due date, assignee, or status). |
| **Add Person To Project** | Adds a new person (team member or client) to a specific BaseCamp project. |
| **Create Document** | Creates a new document (text note or file entry) within a BaseCamp project. |
| **Find To-Do** | Searches for a specific to-do item by name, ID, or filters like status and project. |
| **Find Project** | Locates a specific BaseCamp project based on name or ID for use in later steps. |
| **Find To-Do List** | Searches for a specific to-do list in BaseCamp by name or project reference. |
| **Create Project** | Creates a new project in BaseCamp, optionally from a template or blank setup. |
| **Find Person** | Searches for a person (team member or client) in your BaseCamp account by name or email. |
| **Find Document** | Finds an existing document or file stored within a BaseCamp project. |

## 3\. Getting Started

1. **Search in Workflows**

Open your HighLevel workflow builder and search for any Basecamp actions or triggers you’d like to add.

2. **Connect Your Account**

   - If your Basecamp account is already connected, you’ll see the configuration options immediately.

   - If not, click **Connect Now** and complete the integration setup.
3. **Alternative Method**

Navigate to **Settings → Integrations**, find **Basecamp**, and complete the authorization process.


Once connected, you’ll be able to seamlessly add Basecamp triggers and actions to your automations.

* * *

## 4\. How Basecamp Triggers Work

Basecamp triggers rely on webhooks through Basecamp’s API. When a trigger condition is met (like a new to-do or a new message), HighLevel immediately processes the event and initiates the workflow.

**Setup Instructions:**

1. Choose a trigger (e.g., _New To-do_).

2. Name your trigger and click **Test Trigger**.

3. HighLevel will fetch metadata from Basecamp to enable field mapping in your workflow actions.


* * *

## 5\. Common Use Cases

Use Case 1: Create Basecamp To-do and Project Document from HighLevel Form Submissions

**Goal:** Automatically create a Basecamp To-do and a supporting document when a form is submitted, and notify the internal team.

- **Trigger:** Form Submitted
- **Filter:** Form Name = “Project Intake Form”
- **Actions:** Create To-do (Basecamp), Create Document (Basecamp), Internal Notification

**Example:**

When a client submits the **Project Intake Form**, a new **To-do** is created in Basecamp (e.g., “Set up project workspace for Client XYZ”).

Immediately after, a **Basecamp Document** is generated containing all project details captured from the form—such as goals, requirements, and timeline preferences.

Finally, an **internal notification** is sent to the project or operations team, alerting them that a new client project has been added and documented in Basecamp, ready for review and execution.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055319221/original/M2TlFONy6bd2iXep6WjtRR-e1MxEsS_w5g.png?1759753423)

* * *

Use Case 2: Generate Basecamp Documents Automatically When an Opportunity Stage Changes

**Goal:** Automatically generate a Basecamp document using AI when a deal stage changes in HighLevel, and notify the internal team.

- **Trigger:** Opportunity Changed
- **Filter:** Opportunity Stage = “Closed Won”
- **Actions:** GPT (OpenAI), Create Document (Basecamp), Internal Notification

**Example:**

When an opportunity moves to “Closed Won,” GPT (powered by OpenAI) automatically generates a **project summary or client brief** based on the opportunity details (e.g., client name, services sold, project scope).

This AI-generated summary is then used to **create a new document in Basecamp**—for instance, a “Project Kickoff Summary.”

Finally, an **internal notification** is sent to the project management or onboarding team, alerting them that a new client project has been documented and is ready for setup in Basecamp.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055318995/original/7p6XlTLzcR5JbVYdH70jqs7QjIa9Hd4urQ.png?1759753307)

* * *

Use Case 3: Create Basecamp To-do List and Task from HighLevel Form Submissions

**Goal:** Automatically create a Basecamp To-do List and a corresponding task when a form is submitted in HighLevel.

- **Trigger:** Form Submitted
- **Filter:** None
- **Actions:** Create To-do List (Basecamp), Conditional Check, Create Task (Basecamp)

**Example:**

When a client submits a project request form, a new **To-do List** is created in Basecamp (e.g., “Website Redesign - Client ABC”).

The workflow then checks if the To-do List was successfully created.

If successful, a **Task** (e.g., “Assign designer and prepare kickoff call”) is automatically added under that To-do List, ensuring the team can start execution immediately.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055318521/original/-5BimFTie_FjCehoncRx-mU_tB9w3bxImw.png?1759753128)

* * *

## 6\. FAQs

**Q: Are Basecamp triggers instant or delayed?**

A: Basecamp triggers are **instant**, powered by webhooks. This means workflow automations are triggered immediately when events like “New To-Do Created” or “Project Completed” occur.

**Q: Can I sync data both ways between Basecamp and HighLevel?**

A: The integration currently supports **one-way sync**. You can trigger workflows when events happen in Basecamp or perform actions in Basecamp from HighLevel. For full bi-directional syncing, use middleware platforms like Make or Zapier.

**Q: Do I need a paid Basecamp plan to use this integration?**

A: No, the integration works with Basecamp’s **free and paid plans**. However, features like multiple projects or team management may require a paid Basecamp subscription.

**Q: Are Basecamp actions and triggers billed?**

A: Yes. All Basecamp triggers and actions are **premium** and will be billed according to your HighLevel automation plan’s standard action usage rates.

**Q: What kind of actions can I perform in Basecamp via HighLevel?**

A: You can automate workflows with actions like **Create To-Do**, **Create Project**, **Find To-Do by ID**, **Add Comment**, and **Complete To-Do** — helping teams streamline project management.

**Q: Can I trigger workflows from Basecamp messages or comments?**

A: Yes. Events like **New Comment Added** or **New Message Created** can serve as workflow triggers to notify teams, create CRM activities, or update project records in other tools.

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

- [Introduction to Workflows and Automations](https://help.gohighlevel.com/support/solutions/articles/155000002445-introduction-to-workflows-and-automations)
- [Workflow Notes, Action Notes & Sticky Notes](https://help.gohighlevel.com/support/solutions/articles/155000003914-workflow-notes-action-notes-sticky-notes)
- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Comprehensive workflow stats](https://help.gohighlevel.com/support/solutions/articles/155000003972-comprehensive-workflow-stats)
- [Workflows - Advanced Filters & Smart List](https://help.gohighlevel.com/support/solutions/articles/155000003974-workflows-advanced-filters-smart-list)
- [Workflow Action - If/Else Upgrad](https://help.gohighlevel.com/support/solutions/articles/155000003975-workflow-action-if-else-upgrad)

## Related Articles

- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Workflows pro plan - Black friday & Cyber monday promotion](https://help.gohighlevel.com/support/solutions/articles/155000004296-workflows-pro-plan-black-friday-cyber-monday-promotion)
- [Airtable – Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005674-airtable-actions-triggers-in-workflows)
- [Issue Certificates: Triggers and Actions](https://help.gohighlevel.com/support/solutions/articles/155000002376-issue-certificates-triggers-and-actions)
- [Typeform – Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006676-typeform-actions-triggers-in-workflows)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows/hit)