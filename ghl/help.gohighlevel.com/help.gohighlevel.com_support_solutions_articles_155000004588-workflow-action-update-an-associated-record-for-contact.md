---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact"
title: " Workflow Action - Update an Associated Record for Contact : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Custom Object Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001364)
6. Workflow Action - Update an Associated Record for Contact

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

# Workflow Action - Update an Associated Record for Contact

Modified on: Wed, 15 Oct, 2025 at 1:38 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#%E2%80%8B%E2%80%8BOverview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#Action-Details)
- [Example: Tracking Remaining Slots for a Trip](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact#Example%3A-Tracking-Remaining-Slots-for-a-Trip)

### **Overview**

The **Update an Associated Record** action allows users to modify specific fields of a custom object associated with a contact. This ensures that key information remains accurate and up-to-date without manual intervention.

* * *

### **Action Name**

**Update Associated Record for Contact**

* * *

### **Action Description**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041053104/original/i1jCeUn69LXyTgcgnRKn9rEdCkggGSm_tw.png?1738755088)**

This action enables users to update existing custom object records that are associated with a contact. The update can apply to one or multiple records, depending on the [association label selected](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315).

* * *

### **Action Details**

- This action is possible only after creating custom objects in the subaccount and creating an association label between at least one of those objects and contacts.
- Updates one or more fields within the selected records.
- Uses **[association labels to determine which records should be updated](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315)** \- the user can also choose to update all associated records by selecting "All associated records".
- Users can also use custom value and custom fields - merge fields to add the information to the object record

* * *

### **Example: Tracking Remaining Slots for a Trip**

A home appliance company sells products with warranties, and each product has a **Warranty** custom object to track:

- **Warranty Start Date**
- **Warranty Expiry Date**
- **Service History**

When a product is purchased, the **Warranty Start Date** should be set automatically, and when a warranty claim is made, the **Service History** field should be updated.

#### **Example Setup** (For updating warranty information after a service request)

1. **Object to Update** → Warranty
2. **Association Label** → Purchased Product
3. **Fields to Update:**
   - **Service History** → Append service details
   - **Last Service Date** → Set to today’s date

#### **How It Works**

- When a product is purchased, the **Warranty Start Date** is set via the **Create an Associated Record** action.
- If a customer submits a service request, the workflow triggers an **Update Associated Record** action:
  - The **Service History** field is updated with details of the service performed.
  - The **Last Service Date** is set to today’s date.

This helps the company maintain an updated service record for each product, ensuring smooth warranty tracking and claims processing.

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
- [Workflow Action - Clear Associated Company Fields](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)
- [Workflow Action - Clear Fields of Associated Record for Contact](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact)
- [Workflow Action - DND Contact](https://help.gohighlevel.com/support/solutions/articles/155000003270-workflow-action-dnd-contact)
- [How To Delete Contacts and Their Data](https://help.gohighlevel.com/support/solutions/articles/155000000583-how-to-delete-contacts-and-their-data)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact/hit)