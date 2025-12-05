---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis"
title: " Documents & Contracts: Public APIs : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Documents & Contracts](https://help.gohighlevel.com/support/solutions/48000453974)
   - [Documents and Contracts](https://help.gohighlevel.com/support/solutions/folders/155000000203)
6. Documents & Contracts: Public APIs

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

# Documents & Contracts: Public APIs

Modified on: Mon, 15 Sep, 2025 at 7:26 AM

Documents & Contracts: Public APIs empower you to automate document workflows directly within HighLevel. With these APIs, you can seamlessly list, send, and manage documents and templates, eliminating manual processes and streamlining integrations with external systems.

* * *

**TABLE OF CONTENTS**

- [What is Documents & Contracts: Public APIs?](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#What-is-Documents-&-Contracts%3A-Public-APIs?)
- [Key Benefits of Documents & Contracts: Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#Key-Benefits-of-Documents-&-Contracts%3A-Public-APIs)
- [List Documents](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#List-Documents)
- [Send Document](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#Send-Document)
- [List Templates](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#List-Templates)
- [Send Template](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#Send-Template)
- [How To Set Up Documents & Contracts: Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#How-To-Set-Up-Documents-&-Contracts%3A-Public-APIs)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis#Frequently-Asked-Questions)

* * *

## **What is Documents & Contracts: Public APIs?**

Documents & Contracts: Public APIs provide developers with programmatic access to core document and contract features in HighLevel. They allow you to fetch documents, send them to contacts, access templates, and even generate and send documents in one step. By integrating these APIs, you can automate workflows, ensure consistency, and scale document management across your business applications.

* * *

## **Key Benefits of Documents & Contracts: Public APIs**

Harnessing these APIs delivers efficiency and automation that improve how you manage document workflows.

- **Document listings**: Retrieve a complete list of documents for accurate tracking.

- **Automated sending**: Send documents directly to contacts without manual intervention.

- **Template access**: Quickly fetch available templates to generate documents faster.

- **One-step creation & sending**: Create and send documents from templates with a single API call.

- **Seamless integration**: Connect document workflows with other apps and systems to reduce friction.


* * *

## **List Documents**

The List Documents endpoint lets you retrieve all documents within a specific HighLevel location. This is useful for syncing document records across your CRM, dashboards, or custom apps. For more, refer to [List Documents.](https://highlevel.stoplight.io/docs/integrations/60ec57df068f6-list-documents)

- Pull a full list of documents tied to your account.

- Keep document records updated in real time.

- Enable integrations that rely on document metadata.


* * *

## **Send Document**

With the Send Document endpoint, you can automatically dispatch an existing document to one or multiple contacts. This reduces time spent manually sending documents and ensures a consistent process. For more, refer to [Send Document.](https://highlevel.stoplight.io/docs/integrations/f7326427fcf70-send-document)

- Select an existing document for sending.

- Choose one or more contact recipients.

- Automate document delivery to improve response times.


* * *

## **List Templates**

The List Templates endpoint provides access to all available templates in your HighLevel location. This enables developers to fetch templates dynamically when building automated workflows or integrations. For more, refer to [List Templates](https://highlevel.stoplight.io/docs/integrations/da393f098cd9e-list-templates).

- Fetch a central list of templates.

- Identify the right template for any use case.

- Power integrations with up-to-date template availability.


* * *

## **Send Template**

The Send Template endpoint combines template-based document creation and sending into a single API call. This reduces the workflow to one action, making it easier to build automation at scale. For more, refer to [Send Template.](https://highlevel.stoplight.io/docs/integrations/c2be6fd51f42c-send-template)

- Generate a new document from a template.

- Immediately send it to designated contacts.

- Simplify your process with fewer steps.


* * *

## **How To Set Up Documents & Contracts: Public APIs**

Correctly setting up API access ensures your integrations run smoothly, securely, and at scale. Follow the steps below to configure your HighLevel account for API usage:

### **Step 1:** Obtain API Credentials

Go to **Agency** **Settings > Private Integrations** in your HighLevel account and create a **Private Integration token** (recommended over API keys for enhanced security and access control).

```
IMPORTANT: Scopes determine the permissions that the third-party app has to access your account data or perform actions. It's recommended to grant as few scopes as necessary for better account security.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053781481/original/4c1yU4D8Qr94ycqumFEQMR0ig3l8TO6SgQ.gif?1757939075)

### **Step 2:** Review API Documentation

Visit the [Public API documentation portal.](https://highlevel.stoplight.io/docs/integrations/7d92ac20e1355-documents-and-contracts-api) Identify which endpoints your workflow requires (List Documents, Send Document, List Templates, Send Template).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053781579/original/PW18r5Ci6TL3FisjacnDXoBp7fCWwHi-UA.png?1757939149)

### **Step 3:** Test API Calls

Use a tool like Postman to make sample requests. Set your authentication header as `Authorization: Bearer <your-token>`. Enter required parameters (document ID, template ID, contact IDs).

### **Step 4:** Validate Responses

Review the JSON output from each call. Confirm that documents or templates are returned and sent successfully.

### **Step 5:** Integrate with Your Workflow

Embed API calls into your CRM, automation scripts, or backend processes. Optionally connect with HighLevel workflows that trigger based on document actions (e.g., “Document Sent” or “Document Signed”).

### **Step 6:** Deploy Securely

Store your API tokens securely, rotate them periodically, and monitor API usage to avoid hitting rate limits.

* * *

## **Frequently Asked Questions**

**Q: What endpoints are included in Documents & Contracts: Public APIs?**

You can use endpoints for listing documents, sending documents, listing templates, and sending templates.

**Q: Where do I find the official API documentation?**

Full documentation is available at the [HighLevel Public API portal](https://highlevel.stoplight.io/docs/integrations/7d92ac20e1355-documents-and-contracts-api).

**Q: Do I need specific permissions to access these APIs?**

Yes, valid API credentials (preferably Private Integration tokens) are required for access.

**Q: How can I test the APIs safely?**

Use Postman or a similar API client with sample data before moving to production.

**Q: Is there a difference between using a document and using a template?**

Yes. A document refers to an existing file in your account, while a template is a predefined structure that can be used to generate and send new documents.

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

- [HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)
- [Documents & Contracts Templates with Opportunity Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values)
- [Voice AI Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis)
- [Public Document Links for E-Signing](https://help.gohighlevel.com/support/solutions/articles/155000006143-public-document-links-for-e-signing)
- [How to use Documents & Contracts?](https://help.gohighlevel.com/support/solutions/articles/155000000594-how-to-use-documents-contracts-)
- [Documents & Contracts - Content Library](https://help.gohighlevel.com/support/solutions/articles/155000006763-documents-contracts-content-library)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006323-documents-contracts-public-apis/hit)