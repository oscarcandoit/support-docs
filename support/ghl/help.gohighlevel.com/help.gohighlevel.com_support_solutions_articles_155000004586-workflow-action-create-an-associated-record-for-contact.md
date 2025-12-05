---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact"
title: " Workflow Action - Create an Associated Record for Contact : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Custom Object Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001364)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Custom Object Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001364)
6. Workflow Action - Create an Associated Record for Contact

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

# Workflow Action - Create an Associated Record for Contact

Modified on: Wed, 15 Oct, 2025 at 1:38 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#%E2%80%8B%E2%80%8BOverview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact#Example)

## Overview

The **Create an Associated Record** action in Contact-based workflows allows users to create a new custom object record and associate it with a contact. This feature is useful when managing related entities such as properties, contracts, or any other custom object tied to a contact.

## Action Name

**Create Associated Record for Contact**

## Action Description

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041052361/original/3dCs8bbLAWbHlPfWuwNbASA2jKu2OBKKfg.png?1738754630)This action enables users to create a new custom object record directly from a workflow and associate it with a contact. The available objects for creation depend on the custom objects configured within the sub-account.

## Action Details

- This action is possible only after creating custom objects in the subaccount and creating an association label between at least one of those objects and contacts.
- It allows defining multiple fields for the new object record.
- Users can specify an **[association label](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315)** to categorize the relationship between the contact and the custom object.
- The newly created record is automatically linked to the contact using the selected label.
- Users can also use custom value and custom fields - merge fields to add the information to the object

## Example

A solar company needs to track crucial dates for installations, such as:

- **Site Survey Date**
- **Install Date**

When an **Opportunity** is marked as "Won," the system should **automatically create an "Install" custom object record** for tracking these dates.

**Example Setup:**

1. **Object Record to Create** → Install
2. **Fields:**
   - **Site Survey Date** → Auto-filled with today’s date
   - **Install Date** → Auto-filled based on scheduling
3. **Association Label** → Installation Scheduled


When triggered, the workflow creates an **Install** record and links it to the contact for seamless tracking.

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

- [Workflow Action - Create an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact)
- [Workflow Action - Update an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact)
- [Workflow Action - Clear Fields of Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact)

## Related Articles

- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Actions - Delete Contact](https://help.gohighlevel.com/support/solutions/articles/155000003423-workflow-actions-delete-contact)
- [Workflow Action - Update an Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact)
- [How To Delete Contacts and Their Data](https://help.gohighlevel.com/support/solutions/articles/155000000583-how-to-delete-contacts-and-their-data)
- [Workflow Action - Create Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004752-workflow-action-create-opportunity)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004586-workflow-action-create-an-associated-record-for-contact/hit)