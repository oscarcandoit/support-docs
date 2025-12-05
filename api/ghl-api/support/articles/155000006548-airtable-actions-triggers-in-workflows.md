---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000006548-airtable-actions-triggers-in-workflows
category: articles
type: article
scraped: 2025-10-28T16:30:26.356Z
title:  Airtable – Actions & Triggers in Workflows : LeadConnector 
status_code: 200
---

#  Airtable – Actions & Triggers in Workflows : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Airtable – Actions & Triggers in Workflows  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000006548-airtable-actions-triggers-in-workflows\# "Print this Article")

Modified on: Mon, 6 Oct, 2025 at 11:37 PM

* * *

**TABLE OF CONTENTS**

- [1\. Introduction](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#1.-Introduction)
  - [Why It Matters](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Why-It-Matters)
- [2\. Triggers and Actions](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#2.-Triggers-and-Actions)
  - [Triggers (Airtable → Workflows)](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Triggers-(Airtable-%E2%86%92-HighLevel))
  - [Actions (Workflows → Airtable)](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Actions-(HighLevel-%E2%86%92-Airtable))
- [3.Getting Started with Airtable](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#3.Getting-Started-with-Airtable)
- [4\. How Airtable Triggers Work](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#4.-How-Airtable-Triggers-Work)
  - [Setup Steps:](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Setup-Steps%3A)
- [5\. Common Use Cases](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#5.-Common-Use-Cases)
  - [Use Case 1: Send Internal Notifications](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Use-Case-1%3A-Send-Internal-Notifications)
  - [Use Case 2: Update Data in Multiple Places](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Use-Case-2%3A-Update-Data-in-Multiple-Places)
  - [Use Case 3: Use AI to Create Tasks and Save to ClickUp](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#Use-Case-3%3A-Use-AI-to-Create-Tasks-and-Save-to-ClickUp)
- [6\. Frequently Asked Questions](https://help.gohighlevel.com/a/solutions/articles/155000005674?portalId=48000045315#6.-Frequently-Asked-Questions)

## 1\. Introduction

The Airtable integration enables seamless automation between your workflows and Airtable’s flexible databases. Whether you’re tracking client projects, syncing CRM records, or managing fulfillment pipelines, this integration eliminates manual effort and enhances collaboration.

### Why It Matters

With this integration, agencies, marketers, and businesses can:

- Automatically sync structured data into Airtable from Workflows

- Create or update Airtable records based on workflow events

- Use Airtable as a dynamic project tracker connected to communication and automation


## 2\. Triggers and Actions

### Triggers (Airtable → Workflows)

These are events in Airtable that can initiate workflows :

| **Trigger Name** | **Description** |
| --- | --- |
| New Record | Fires when a new record is added to a table |
| Updated Record | Fires when a record is updated in a table |

### Actions (Workflows → Airtable)

These are actions that can execute in Airtable through workflows:

| **Action Name** | **Description** |
| --- | --- |
| Create Record | Creates a new record in a specified table |
| Update Record | Updates fields in an existing Airtable record |
| Find Record | Finds a record based on search fields (e.g., ID, email) |
| Delete Record | Deletes an existing record from a table |

## 3.Getting Started with **Airtable**

1. **Search in Workflows**

   - In the workflow builder, search for Airtable triggers or actions (e.g., “Find Record,” “Create Record”).
2. **Connect Your Account**

   - If your Airtable account is already connected, configuration options will be available.

   - If not, click **Connect Now** and log in with your Airtable API key or OAuth (depending on setup).
3. **Alternative Method**

   - Go to **Settings → Integrations**.

   - Find **Airtable** and authorize your workspace.

Once connected, you can fetch, create, or update records from Airtable tables as part of your automations.

## 4\. How Airtable Triggers Work

Airtable triggers are powered by polling. Workflows sends a request to Airtable at regular intervals (usually every **5 minutes**) to check for any new or updated records. Based on the response, workflows are triggered accordingly.

### Setup Steps:

1. **Choose a trigger** (e.g., New Record Created or Updated Record).

2. **Provide a name** for the trigger and click **Test Trigger**.

3. **Test Trigger** is required to pull metadata that can be used in subsequent workflow actions through custom values.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055370816/original/CUpKVvHYSTOxqKl5f5G0mslely4Fe9g0ag.jpeg?1759811755)

## 5\. Common Use Cases

### Use Case 1: Send Internal Notifications

**Goal:** Notify teams when a new Airtable record is created or updated.

**Workflow Setup:**

- **Trigger:** Airtable → New Record

- **Actions:**

  - Find Record (Airtable)

  - Internal Notification → Email

**Example:**

A new client project is added in Airtable → Workflow finds the record → An internal email is sent to the project manager saying:

“New Airtable record created. Project ID: {{record.id}}. Please review the details.”

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055370813/original/fbEZvgAoO9Yg0avXkyqbT-FTU78KAjjFGw.png?1759811754)

### Use Case 2: Update Data in Multiple Places

**Goal:** Keep Airtable in sync with contacts or leads created in GHL and external tools.

**Workflow Setup:**

- **Triggers:**

  - Contact Changed (with Tag = “New”)

  - Contact Created (Type = Lead)

  - Facebook Lead Form Submitted (Form = “Form 1”)
- **Actions:**

  - Find Record (Airtable)

  - If found → Update Record

  - If not found → Create Record

**Example:**

A Facebook lead form is submitted → Workflow checks if the lead exists in Airtable → If found, record is updated with the latest phone/email → If not found, a new Airtable record is created.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055370815/original/Y9Od4z3iB3KNq8rg8_a_061ZwvffKWpkVA.jpeg?1759811755)

### Use Case 3: Use AI to Create Tasks and Save to ClickUp

**Goal:** Auto-generate task descriptions from Airtable data using AI and save them into ClickUp.

**Workflow Setup:**

- **Trigger:** Airtable → New Record (in “Content Briefs” table)

- **Actions:**

  - Find Record (Airtable)

  - Generate draft using ChatGPT (e.g., “Write social media content for {{airtable.record.title}}”)

  - Create Task in ClickUp → “Onboarding for {{recordID}}” and add details.

**Example:**

A new content brief titled _“September Instagram Campaign”_ is added to Airtable → Workflow sends the data to ChatGPT → ChatGPT generates captions → Workflow creates a task in ClickUp called “Onboarding – September Campaign” with for captions and infomration.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055370814/original/eQphjttEVfk82GOCDdGh6iEU5RyhTmWzWg.png?1759811755)

## 6\. Frequently Asked Questions

**Q: Can I sync data in both directions between Airtable and Workflows?**

A: No, the integration supports one-way sync (triggered by Airtable or executed by workflows).

**Q: How often does Workflows check Airtable for new records?**

A: Airtable triggers are powered by polling. Workflows checks Airtable every **5 minutes** for new or updated records and triggers workflows accordingly.

**Q: Do I need a paid Airtable plan to use this integration?**

A: No, the integration works with Airtable’s free plans. However, advanced features (like larger record limits, automations, or workspaces with multiple collaborators) may require a paid Airtable plan.

**Q: What happens if the same record exists in both Airtable and HighLevel?**

A: You can use the **Find Record** action first. If the record exists, it can be updated. If not, the workflow can create a new record. This ensures no duplicates are created.

**Q: Are these actions and triggers paid?**

**A:** Yes. These are premium actions and triggers and will be billed at the standard rates. If you’re on a Pro plan , usage will be billed at the plan’s default rates.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000006548-airtable-actions-triggers-in-workflows/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000006548-airtable-actions-triggers-in-workflows*  
*Generated on: 2025-10-28T16:30:26.356Z*
