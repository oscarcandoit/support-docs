---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000006546-google-contacts-actions-triggers-in-workflows
category: articles
type: article
scraped: 2025-10-28T16:30:21.465Z
title:  Google Contacts Actions & Triggers in workflows : LeadConnector 
status_code: 200
---

#  Google Contacts Actions & Triggers in workflows : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Google Contacts Actions & Triggers in workflows  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000006546-google-contacts-actions-triggers-in-workflows\# "Print this Article")

Modified on: Mon, 6 Oct, 2025 at 11:33 PM

* * *

## 1\. Introduction

The **Google Contacts integration** enables seamless synchronization of contact data between your CRM and your Google ecosystem. With this integration, you can automatically create, update, and organize contacts in Google Contacts whenever changes occur in workflows—and vice versa.

### Why It’s Valuable

This integration ensures that your team’s contact lists across Gmail and other Google services remain accurate and up to date.

* * *

## 2\. Available Triggers & Actions

### Triggers

These are events in Google Contacts that can initiate a workflow in workflows:

| **Trigger Name** | **Description** |
| --- | --- |
| New Contact | Triggered when a new contact is created. |
| New Group | Triggered when a new group is created. |

> **Note**: All triggers use polling. We regularly check Google Contacts (every ~5 minutes) for updates and retrieves the latest data to initiate workflows.

### Actions

These are actions that workflows can perform within Google Contacts:

| **Action Name** | **Description** |
| --- | --- |
| Create Contact | Creates a new contact in Google Contacts. |
| Create Group | Creates a new group. |
| Find or Create Contact | Searches for a contact and creates one if it doesn’t exist. |
| Add Contact to Groups | Adds an existing contact to one or more groups. |
| Update Contact | Updates details of an existing contact. |
| Find Contact | Searches for a contact by name, email, or phone number. |

* * *

## 3\. Getting Started with Google Contacts

1. **Search in Workflows**

   - In the workflow builder, search for Google Contacts triggers or actions (e.g., “Find Contact,” “Create Contact”).
2. **Connect Your Account**

   - If Google Contacts is already connected, you’ll be able to configure fields right away.

   - If not, click **Connect Now** and log in with your Google account.
3. **Alternative Method**

   - Go to **Settings → Integrations**.

   - Locate **Google Contacts** and authorize access.

Once connected, you’ll be able to sync, find, and update contacts seamlessly in your workflows.

### 4.How Do Google Contacts Triggers Work?

Google Contacts triggers are powered by **polling**. Workflows sends a request to Google at regular intervals (usually every 15 minutes) to check for any new contact or group additions. Based on the response, workflows are triggered accordingly.

**Setup Steps:**

1. Choose a trigger (e.g., **New Contact** or **New Group**).

2. Provide a name for the trigger and click **Test Trigger**.

3. Testing is required to pull metadata that can be used in subsequent actions through custom values.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050791794/original/y_177zbdKV1fLYzkZi7ccEYnfq-NwcJhEA.png?1754047030)

* * *

## 4\. Common Use Cases

### 1\. Save Contacts from Appointments

**Use Case:**

Automatically add clients to Google Contacts when they book an appointment and organize them into relevant groups (e.g., "Consults", "Demos").

**Workflow Configuration:**

- **Trigger:** Appointment Booked

- **Filter:** Calendar = "Demo Calls"

- **Actions:**

  - Find or Create Contact (Google Contacts)

  - Add Contact to Groups → e.g., "Demo Leads"

**Example:**

When a demo is booked via the “Demo Calls” calendar → Workflows checks if the contact exists → If not found, creates it → Adds the contact to the "Demo Leads" group in google contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792392/original/l1odR_4jNjfQJfjGP1KgOOaz1TX3YjWc7w.png?1754047501)

* * *

### 2\. Turn Form Submissions into Google Contacts

**Use Case:**

Capture lead data from form submissions and sync it into Google Contacts for smooth follow-ups.

**Workflow Configuration:**

- **Trigger:** Form Submitted

- **Filter:** Form Name = "Website Lead Form"

- **Actions:**

  - Find or Create Contact

  - Update Contact (for resubmissions with new info)

**Example:**

A user submits the “Website Lead Form” → Workflows checks Google Contacts by email → Updates if found; creates a new one if not.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792533/original/lbb35nWl1pI8V3oh60PFqgAMm_AU4o_7Xw.png?1754047591)

* * *

### 3\. Create Google Contacts from Notion Records

**Use Case:**

Automatically create Google Contacts from new records in Notion.

**Workflow Configuration:**

- **Trigger:** Notion - New Database item

- **Databse:** "New users data"

- **Actions:**

  - Find record in database

  - Create Contact

  - Add Contact to Groups

**Example:**

A new contact is created in Google Contacts whenever a new record is added to a Notion database. When a new record is added, the workflow checks if the record includes the comment "New user". If the comment is present, a new contact is automatically created in Google Contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793042/original/KypZFs5mTPaa5274d712bhC4KdyEZOdWSQ.png?1754047933)

* * *

## 5\. FAQs

**Q: Can I update contacts already in Google Contacts?**

A: Yes, use the "Update Contact" action to modify existing contact records.

**Q: Do I need a paid Google account for this to work?**

A: No. The integration works with any Gmail account that has access to Google Contacts.

**Q: Can I group contacts dynamically based on tags or pipeline stages?**

A: Absolutely. Use conditional logic and map tags to Google Groups to dynamically segment synced contacts.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000006546-google-contacts-actions-triggers-in-workflows/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000006546-google-contacts-actions-triggers-in-workflows*  
*Generated on: 2025-10-28T16:30:21.465Z*
