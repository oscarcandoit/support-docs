---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values"
title: " Leveraging Opportunity Custom Values in Document Templates : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Documents & Contracts](https://help.gohighlevel.com/support/solutions/48000453974)
4. [Documents and Contracts](https://help.gohighlevel.com/support/solutions/folders/155000000203)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Documents & Contracts](https://help.gohighlevel.com/support/solutions/48000453974)
   - [Documents and Contracts](https://help.gohighlevel.com/support/solutions/folders/155000000203)
6. Documents & Contracts Templates with Opportunity Cust...

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

# Documents & Contracts Templates with Opportunity Custom Values

Modified on: Mon, 28 Jul, 2025 at 2:51 PM

In Document & Contract Templates you can include Opportunity Custom Values using merge fields.

* * *

**TABLE OF CONTENTS**

- [What Are Opportunity Custom Values in Documents & Contracts Templates?](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#What-Are-Opportunity-Custom-Values-in-Documents-&-Contracts-Templates?)
- [Use Opportunity Custom Values in Documents & Contracts Templates](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#Use-Opportunity-Custom-Values-in-Documents-&-Contracts-Templates)
- [Use Documents & Contracts Template with Opportunity Custom Values in Workflow](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#Use-Documents-&-Contracts-Template-with-Opportunity-Custom-Values-in-Workflow)
- [Automate Documents & Contracts Sending In Opportunity Pipeline](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values#Automate-Documents-&-Contracts-Sending-In-Opportunity-Pipeline)

* * *

## **What Are Opportunity Custom Values in Documents & Contracts Templates?**

Documents & Contracts are like emails or websites, except they produce a document/contract which lays out the particulars of a deal and can be signed to seal the deal.

Documents & Contracts Templates are reusable files with "fill in the blanks" sections which can even be filled automatically in workflows.

```
NOTE: This article is about Templates, not individual Documents & Contracts. To view and edit Templates use the Payments > Documents & Contracts dropdown and select Templates. Make sure the title of the page includes Templates and you're on the Templates tab.

In the Documents & Contracts editor, look for the word "templates" in the URL bar. That will confirm that you are editing a Template, not an individual Document/Contract.
```

* * *

## **Use Opportunity Custom Values in Documents & Contracts Templates**

1. Navigate to **Payments -> Documents & Contracts Templates -> New template**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198849/original/kEJEEXCPOJiuSNCC7lr_K3BZRbbq5Di4TQ.png?1737467636)**

2. Drag a text box or table where you wish to populate opportunity custom values/fields. Either directly type the exact merge field into the text area ex: {{opportunity.xyz}} OR use the merge fields menu. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198929/original/6HozCmIyeocMbl1ahr4ZMlIMm1gjpbtDSg.png?1737467697)**

3. In the **Merge Fields menu**: Go to Contact -> Custom fields -> Opportunity Details -> Select a field name that is dynamic






|     |     |     |     |
| --- | --- | --- | --- |
| **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199078/original/V0wYrL-eUekZf_gQ_NHvQPwyNwup_W50tg.png?1737467786)** | **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199106/original/-aCciUWXyiHx3XnbJlcYt9f-r-T_751YZw.png?1737467799)** | **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199134/original/KEGOo2JKmEq9vr6fiaOQANLre5WWNaIkgA.png?1737467810)** | **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199153/original/5E4j-Mir_ZMv1Yml3wKsyzY3pmP-nd5vzA.png?1737467824)** |

4. **Review**: In the text area, double check that the merge field displays in the correct location. The merge field will be automatically replaced with the personalized data when the automation is run. Make sure to **save**.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199289/original/RITNDKTg1I2uEd3OVJQaeDqYIy6s-oNgwQ.png?1737467923)**

* * *

## **Use Documents & Contracts Template with Opportunity Custom Values in Workflow**

1. Navigate to **Automation > Workflows > create or edit a Workflow**. Within the Workflow editor use the **Send Documents & Contracts Action**. Within the action, choose the Template you want to populate and save as draft or send.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199882/original/5sa4KEqttINY-2v28dLzboXFdd4TdiJVfg.png?1737468347)**

* * *

## **Automate Documents & Contracts Sending In Opportunity Pipeline**

If you want to automatically send a Template Document/Contract at a certain Opportunity Pipeline stage, you can do that with a few Triggers and Actions in a Workflow.

**Step 1: Create Workflow**

Navigate to Automation > Workflow > create or edit a workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199677/original/OfyRxM02UTuWPY2uxxqdwvrNpW-dUPKGDQ.png?1737468195)

**Step 2: Add Trigger**

A couple good options for Opportunity/Pipeline triggers are: Pipeline Stage Changed or Opportunity Status Changed. Set the Trigger's filters to the relevant Pipeline, Stage, Opportunity, etc.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199505/original/Orf2J4JrEQskwivAp85qZj342ciV81msNw.png?1737468099)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199807/original/y30822cRiC0OU_xRZixkGgLs4iZ9aL7S2A.png?1737468289)

**Step 3: Add Action**

Next add the Send Documents & Contracts Action to the workflow and choose the appropriate Template (given the previous instructions). The merge fields in the Template will automatically pull the Opportunity Custom Values into the file before sending it. Remember to **Save**.

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

- [How to use Documents & Contracts?](https://help.gohighlevel.com/support/solutions/articles/155000000594-how-to-use-documents-contracts-)
- [Documents & Contracts: Email Templates and Team Notifications Setup](https://help.gohighlevel.com/support/solutions/articles/155000001298-documents-contracts-email-templates-and-team-notifications-setup)
- [Automatically Generate Invoices from Signed Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001299-automatically-generate-invoices-from-signed-documents-contracts)
- [Multiple recipient support on Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001300-multiple-recipient-support-on-documents-contracts)
- [How to Create and Send Document or Contract Templates Automatically in a Workflow](https://help.gohighlevel.com/support/solutions/articles/155000001301-how-to-create-and-send-document-or-contract-templates-automatically-in-a-workflow)
- [Workflow Trigger - Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001491-workflow-trigger-documents-contracts)

## Related Articles

- [Workflow Action - Internal Notification](https://help.gohighlevel.com/support/solutions/articles/155000003202-workflow-action-internal-notification)
- [How to Create and Send Document or Contract Templates Automatically in a Workflow](https://help.gohighlevel.com/support/solutions/articles/155000001301-how-to-create-and-send-document-or-contract-templates-automatically-in-a-workflow)
- [Link Custom Values to Text and Date fields: Documents and Contracts](https://help.gohighlevel.com/support/solutions/articles/155000004040-link-custom-values-to-text-and-date-fields-documents-and-contracts)
- [Capture Feedback and Automate Follow-Ups With Decline Documents Feature](https://help.gohighlevel.com/support/solutions/articles/155000006304-capture-feedback-and-automate-follow-ups-with-decline-documents-feature)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [Documents & Contracts - Content Library](https://help.gohighlevel.com/support/solutions/articles/155000006763-documents-contracts-content-library)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values/hit)