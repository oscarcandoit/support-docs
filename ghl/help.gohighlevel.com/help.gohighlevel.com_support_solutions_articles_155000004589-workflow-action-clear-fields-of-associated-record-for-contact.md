---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact"
title: " Workflow Action - Clear Fields of Associated Record for Contact : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Custom Object Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001364)
6. Workflow Action - Clear Fields of Associated Record for C...

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

# Workflow Action - Clear Fields of Associated Record for Contact

Modified on: Wed, 15 Oct, 2025 at 1:38 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact#Example)


## Overview

The **Clear Fields of an Associated Record** action allows users to reset specific fields within a custom object associated with a contact. This is useful for clearing outdated information, resetting form entries, or handling special conditions in workflows.

## Action Name

**Clear Fields of Associated Record for Contact**

## Action Description  ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041054690/original/EJDSgBhbWPet8kBhbbJeTCWWriARecUORQ.jpeg?1738756190)

This action lets users select specific fields within a custom object and clear their values while keeping the record intact. The [associated label](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315) determines which records should have their fields cleared.

## Action Details

- This action is possible only after creating custom objects in the subaccount and creating an association label between at least one of those objects and contacts.
- Needs at least [one association](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315) between the custom object and the contact for the action to work
- Users can select multiple fields to be reset.
- The action does **not delete** the record, only the selected fields.

## Example

A retail business tracks **customer loyalty points** using a **Loyalty Program** custom object. When a customer redeems their points for rewards, the **Loyalty Points** field should be cleared to reflect the redemption.

Since workflows cannot trigger on specific dates, this action will be executed when a related **event occurs**, such as when a **redemption request is processed**.

#### **Example Setup**

1. **Object to Update** → Loyalty Program
2. **Association Label** → Customer Rewards
3. **Fields to Clear:**
   - **Loyalty Points**
   - **Last Redemption Date**

#### **How It Works**

- When a **customer redeems their points**, a workflow is triggered to **clear the Loyalty Points** field.
- The **Last Redemption Date** is also reset, ensuring accurate tracking of future redemptions.
- This prevents redeemed points from being mistakenly available for reuse while keeping the customer’s loyalty record intact.

This helps businesses **accurately track loyalty redemptions** and ensure that customers cannot reuse points after redemption.

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

- [Workflow Action - Clear Associated Company Fields](https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields)
- [Workflow Action - Clear Fields of Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact)
- [Guide to Google Sheets Premium Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238162-guide-to-google-sheets-premium-workflow-action)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [Workflow Action – Create and Associate Company](https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact/hit)