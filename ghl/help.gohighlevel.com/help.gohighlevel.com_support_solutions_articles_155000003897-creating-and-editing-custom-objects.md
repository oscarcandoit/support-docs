---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects"
title: " Create & Edit Custom Objects in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Custom Objects.](https://help.gohighlevel.com/support/solutions/155000000183)
4. [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000000895)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Custom Objects.](https://help.gohighlevel.com/support/solutions/155000000183)
   - [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000000895)
6. Creating and Editing Custom Objects

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

# Creating and Editing Custom Objects

Modified on: Fri, 14 Nov, 2025 at 9:02 AM

Create and manage Custom Objects in HighLevel to model data beyond Contacts and Opportunities—like Properties, Pets, Cases, or Vehicles. This guide shows where Custom Objects are supported across the app, how to set them up step-by-step, plus FAQs and links to related features such as SmartLists, Workflows, and Dashboards.

* * *

**TABLE OF CONTENTS**

- [What is a Custom Object?](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#%E2%80%8B%E2%80%8BWhat-is-a-Custom-Object?)
- [Key Benefits of Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Key-Benefits-of-Custom-Objects)
- [Field Types & Unique Fields](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Field-Types-&-Unique-Fields%C2%A0)
- [Associations & Labels](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Associations-&-Labels)
- [Where You Can Use Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Where-You-Can-Use-Custom-Objects%C2%A0)
- [How To Set Up Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#How-To-Set-Up-Custom-Objects)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects#Related-Articles%C2%A0)

* * *

# **What is a Custom Object?**

Custom Objects let you define brand-new record types—each with its own fields, associations, and automations—so your CRM mirrors your real-world processes. They’re ideal when standard objects aren’t enough (e.g., tracking a “Property” with MLS, Bedrooms, Status; or a “Pet” with Breed, Vaccinations). After you create an object, you can use it across views, filters, and automations.

* * *

## **Key Benefits of Custom Objects**

Understanding the practical upside helps you design data models that stay flexible and future-proof.

- **Flexibility**: define any entity with custom fields, labels, and associations.

- **Automation**: trigger workflows on create/update and run object-specific actions.

- **Insights**: analyze object data via SmartLists and List View, then filter precisely with Advanced Filters.

- **Governance**: maintain integrity with clear ownership—admins manage object definitions.

- **Plan access & limits**: available on all plans; up to 10 Custom Objects per location.


* * *

## **Field Types & Unique Fields**

Choosing the right field types and uniqueness rules keeps your data clean and merge-friendly.

- Supported **unique field types** today: Single Line Text, Multi Line Text, Number, Phone.

- **Limit:** up to **10 unique fields per object**.

- **Scope:** uniqueness is enforced across the sub-account and across all entry points (UI, Workflows, Forms, API).

- **Irreversible change:** if you **downgrade** a unique field to non-unique, you **cannot** make it unique again.


* * *

## **Associations & Labels**

Associations connect records (e.g., Opportunity ↔ Property) to reflect real-world relationships and power cross-object views.

- Define many-to-many or one-to-many links between objects.

- Use associations in SmartLists, filters, and automations.

- **Label limits:** up to **10 unique labels** between any two objects (for clarity like “Buyer Of,” “Listed On”).

- Opportunities now support flexible associations to Custom Objects for a unified pipeline context.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058408189/original/pnh73-mjY_rKd5y0fDNJ9M4E0Wevq4cRQg.gif?1763127609)

* * *

## **Where You Can Use Custom Objects**

Choosing the right surfaces for Custom Objects ensures your build is both powerful and compatible. Use this matrix to see current availability and plan implementations confidently.

| Availability | Features |
| --- | --- |
| **Supported** | Contacts & Opportunities (associations), Workflows (triggers & actions), Forms, Surveys & Quizzes, SmartLists, List View, Advanced Filters, Reporting/Dashboards, APIs, Webhooks, Tasks |
| **Not supported** | Email Campaigns, Bulk Email, Bulk SMS, Conversations UI, Funnels & Websites (dynamic CO data), Calendars & Scheduling, Reputation/Reviews, Payments & Invoicing, Company object internals |
| **Coming soon** | Notes, Funnels & Websites (dynamic binding), AI Knowledgebase, Emails via Workflow to associated contacts |

* * *

## **How To Set Up Custom Objects**

A clean initial setup ensures stable automation and reporting as your model grows. The steps below are sourced from **Creating and Editing Custom Objects** and lightly clarified for readability.

### **Step 1 — Create the Object**

1. Go to **Sub-account → Settings → Objects**.

2. Click **Add Custom Object**.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058405899/original/19muD-f-IgODYh2yNQ--bLnKCPn89sP4Yg.png?1763126731)


### **Step 2 — Add Details about the Object**

1. Enter the **Singular name** (e.g., Pet).

2. Enter the **Plural name** (e.g., Pets).

3. Review the **Internal Name** and **Primary field** (created by default). You can adjust the internal name **during creation** by clicking **</>**.

4. Provide a label for the **Primary display field** (e.g., Pet Name, Pet Identification Number).

5. Choose an **Icon** and add a **Description** to help your team understand the object’s purpose.

6. Click **Create Custom Object**.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406204/original/fgF0GrDpzjlp6BKbCr0R0F-t6lSOdYrBxA.png?1763126831)


### **Step 3 — Edit Object Details**

1. After creation, the object appears on the Objects page.

2. Click the object to open and adjust its details.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406333/original/_BTexHTI5lwA1w4QfD8N8itV1YC4bALzAw.jpeg?1763126905)


### **Optional — Delete a Custom Object (Irreversible)**

1. Click the **⋯ (three dots)** next to the object’s name.

2. Choose **Delete**.

3. Type **DELETE** to confirm.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406564/original/DIem8kq3voYpJAFkfcf-oqn43QIQXi24Cg.gif?1763127036)


```
Imp: Deletion removes the object and all records, associations, workflows, and custom fields linked to it; this cannot be recovered.
```

* * *

## **Frequently Asked Questions**

**Q. Who can create or edit Custom Objects?**

Only **admins** at the location level. Regular users have read-only access.

**Q. How many Custom Objects can I create?**

Up to **10 per location** across all plans.

**Q. Can I change the Internal Name or Primary Display Field later?**

No—once the object is created, these fields are **not editable**.

**Q. Where are Custom Objects supported today?**

See the **Support Matrix** table above for current availability and planned surfaces.

**Q. What happens if I delete a Custom Object?**

Deletion is **permanent** and removes the object and **all** related records, associations, workflows, and custom fields.

**Q. How do I automate actions when a Custom Object is created or updated?**

Use **Custom Object triggers and actions** in Workflows (e.g., create/update/clear, find record, webhooks).

* * *

## **Related Articles**

- [Custom Objects In All Plans + Higher Limit](https://help.gohighlevel.com/support/solutions/articles/155000006631-custom-objects-in-all-plans-higher-limit)

- [Using Custom Objects in Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)

- [SmartLists for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000005147-smartlists-for-custom-objects)

- [List View for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000004029-list-view-for-custom-objects)

- [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects?utm_source=chatgpt.com)


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

- [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects)
- [Creating and Editing Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects)
- [Creating and Updating Custom Object Records](https://help.gohighlevel.com/support/solutions/articles/155000004023-creating-and-updating-custom-object-records)
- [Custom Object Case Study : Real Estate](https://help.gohighlevel.com/support/solutions/articles/155000004176-custom-object-case-study-real-estate)
- [Using Custom Objects in Workflow Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)
- [SmartLists for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000005147-smartlists-for-custom-objects)

## Related Articles

- [Custom Objects In All Plans + Higher Limit](https://help.gohighlevel.com/support/solutions/articles/155000006631-custom-objects-in-all-plans-higher-limit)
- [How to use Custom Fields for Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000000521-how-to-use-custom-fields-for-opportunities)
- [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects)
- [Associations Between Opportunities and Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000004033-associations-between-opportunities-and-custom-objects)
- [How to Rename Standard Objects in Your CRM](https://help.gohighlevel.com/support/solutions/articles/155000006674-how-to-rename-standard-objects-in-your-crm)
- [Dashboards: Custom Object Widgets and Insights](https://help.gohighlevel.com/support/solutions/articles/155000006630-dashboards-custom-object-widgets-and-insights)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects/hit)