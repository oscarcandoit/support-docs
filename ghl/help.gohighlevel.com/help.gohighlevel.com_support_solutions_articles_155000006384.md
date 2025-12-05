---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006384"
title: " Custom Objects and Company Objects in Forms, Surveys & Quizzes : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006384#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000001329)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006384#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000001329)
6. Custom Objects and Company Objects in Forms, Surveys &...

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

# Custom Objects and Company Objects in Forms, Surveys & Quizzes

Modified on: Tue, 7 Oct, 2025 at 7:18 AM

**TABLE OF CONTENTS**

- [What They Are](https://help.gohighlevel.com/support/solutions/articles/155000006384#What-They-Are)
- [What You Can Do](https://help.gohighlevel.com/support/solutions/articles/155000006384#What-You-Can-Do)
- [How to Use Them](https://help.gohighlevel.com/support/solutions/articles/155000006384#How-to-Use-Them)
- [Best Practices](https://help.gohighlevel.com/support/solutions/articles/155000006384#Best-Practices)
- [Works Best For](https://help.gohighlevel.com/support/solutions/articles/155000006384#Works-Best-For)
- [Won’t Work For](https://help.gohighlevel.com/support/solutions/articles/155000006384#Won%E2%80%99t-Work-For)
- [Quick Fixes](https://help.gohighlevel.com/support/solutions/articles/155000006384#Quick-Fixes)
- [Examples](https://help.gohighlevel.com/support/solutions/articles/155000006384#Examples)
- [In Short](https://help.gohighlevel.com/support/solutions/articles/155000006384#In-Short)

* * *

## What They Are

**Custom Objects** let you collect structured, business-specific data that doesn’t fit into standard contact fields — for example, **Properties**, **Pets**, or **Vehicles**. This data links back to contacts so you can organize your CRM around what matters most to your business.

The **Company Object** is a built-in object focused on **business-level data** (like client organizations, agencies, or vendors). It helps you connect multiple contacts under one company.

Think of it this way:

- Use **Custom Objects** to track _anything unique to your process or industry_.

- Use the **Company Object** to track _who the contact works for or represents_.


* * *

## What You Can Do

- Add fields from your custom objects (text, number, date, dropdown, etc.).

- Link data directly to contacts (one-to-one, one-to-many, or many-to-many).

- Automatically sync data updates across linked records.

- Use custom object fields in **forms, surveys, and quizzes**.

- Prevent setup issues by limiting each builder to one object type.

- Protect important “primary fields” to avoid breaking associations.


**Company Object specifics:**

- Comes with some default fields like **Name**, **Phone**, and **Email**.

- **Company Name** acts as the primary key automatically.

- Can be used with **Contacts only**, and each contact can have **only one company association**.

- Accessible from contact records, making it easy to see linked company info.


**Custom Object flexibility:**

- You define the fields and the primary field.

- Can support **multiple associations per contact**.

- Lets you model specialized data that doesn’t belong to Companies, Contacts, or Opportunities.


* * *

## How to Use Them

1. Go to **Settings > Custom Objects** to create or manage custom objects.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055414880/original/FLsvSm2c1-_AHg5j2ye5_JJxSrcCzdsBuA.jpeg?1759839015)

2. For Companies, go to **Settings > Companies** (already built-in).![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055415900/original/OxijNS7NS988NmxHy2mP4-GyBXVN1wpDYQ.png?1759839343)

3. Open the **Form, Survey, or Quiz Builder**.

4. You can add fields **within the builder only.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055414942/original/OPxkK7Vw7G9cZ9_d1dQlCXIujqevMSOJPQ.jpeg?1759839039)**

5. Choose how the object connects to the contact (association settings).

6. The system automatically adds the primary field.

7. Add more fields of the same object type.

8. Save and publish — submissions now link the contact and the object.


* * *

## Best Practices

- Use only **one object type per form/survey/quiz**.

- Configure the **association** as soon as you add a custom object field.

- Define a **primary field** for custom objects — the system will use the first one if missing.

- For Companies, remember the primary key (Company Name) is already set.

- Keep object names simple and consistent to avoid confusion.

- Avoid using Company or Custom Object fields together in the same builder.


* * *

## Works Best For

- **Custom Objects:** Industry-specific tracking (e.g., properties, pets, vehicles, cases, or assets).

- **Company Object:** B2B relationships — linking multiple contacts under one business.

- Keeping structured, consistent, and connected data across your CRM.


* * *

## Won’t Work For

- Mixing multiple object types in a single form.

- Bulk updates or advanced reporting (not yet supported).

- Creating or sharing forms/surveys/quizzes with Company or Custom Object fields via the Template Library.

- Sharing custom fields or custom objects across sub-accounts.

- Adding custom values to custom object fields (not supported).


* * *

## Quick Fixes

- **Association not loading?** Check your internet or object setup.

- **Mixed object error?** Remove old object fields before adding new ones.

- **Primary field missing?** Define one in settings; the system uses the first field if none exists.

- **Removed primary field?** All fields will be cleared from the builder — re-add manually.

- **Company not showing under contact?** Make sure the company exists in **Settings > Companies**.


* * *

## Examples

**Real Estate:**

Create a Custom Object for “Properties” to store location, size, and price. Each record can link to multiple contacts (tenants, buyers, or owners).

**Veterinary Clinic:**

Use a Custom Object for “Pets” — each pet record links to the owner’s contact and includes breed, medical notes, and vaccination data.

**Agency or B2B Setup:**

Use the Company Object to store business-level info like company name, phone, and billing address. Then associate multiple client contacts with that company.

* * *

## In Short

**Custom Objects** let you structure your CRM data however your business needs — flexible, scalable, and built for customization.

**The Company Object** is simpler — a fixed structure for managing organizations and their related contacts.

Use both together to get a complete view of your relationships:

- **Custom Objects** for specialized data.

- **Company Object** for business-level connections.


Clean, linked, and purpose-driven CRM data — all in one place.

* * *

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

- [Custom Objects and Company Objects in Forms, Surveys & Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000006384-custom-objects-and-company-objects-in-forms-surveys-quizzes)

## Related Articles

- [How to Rename Standard Objects in Your CRM](https://help.gohighlevel.com/support/solutions/articles/155000006674-how-to-rename-standard-objects-in-your-crm)
- [Creating and Editing Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects)
- [Custom Objects In All Plans + Higher Limit](https://help.gohighlevel.com/support/solutions/articles/155000006631-custom-objects-in-all-plans-higher-limit)
- [Element & Slide Cloning in Quizzes, Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000006541-element-slide-cloning-in-quizzes-forms-and-surveys)
- [Progress Bar for Surveys & Quizzes on Mobile](https://help.gohighlevel.com/support/solutions/articles/155000005707-progress-bar-for-surveys-quizzes-on-mobile)
- [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006384)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006384-custom-objects-and-company-objects-in-forms-surveys-quizzes/hit)