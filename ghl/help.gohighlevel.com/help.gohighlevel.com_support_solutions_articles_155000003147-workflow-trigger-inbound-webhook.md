---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook"
title: " Workflow Trigger - Inbound Webhook : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
6. Workflow Trigger - Inbound Webhook

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

# Workflow Trigger - Inbound Webhook

Modified on: Tue, 8 Apr, 2025 at 4:21 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#Overview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook#Example)

* * *

## **Overview**

The Inbound Webhook Trigger in HighLevel allows users to **initiate workflows** based on incoming data **from external applications**. By leveraging this trigger, you can seamlessly automate processes and integrate HighLevel with various third-party systems.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038188260/original/67OQWezOayG-eUPTmc1KZVQbTX7zBT9Ohw.png?1733981713)

## **Trigger Name**

Inbound Webhook Trigger

* * *

## **Trigger Description**

The Inbound Webhook Trigger captures incoming POST/GET/PUT requests sent to a HighLevel Webhook URL (unique for each trigger). This enables the system to react to events from external applications, such as form submissions, payment notifications, or any other data changes, allowing for real-time updates and automation within HighLevel workflows.

### **How to Configure the Inbound Webhook Trigger**

**1\. Access Workflow Settings**:

- Open or create a new workflow in HighLevel.
- Select "Inbound Webhook" as the Workflow Trigger.


**2\. Generate Webhook URL**: A unique Webhook URL will be generated for your workflow. Copy this URL for use in external applications.

**3\. Set Up External Application**: In the external app (e.g., Zapier, Integromat), create a trigger that will send data to the HighLevel Webhook URL. Configure the action to send a POST request to the copied URL, including the necessary data in JSON format.

**4\. Test the Integration**: Send a test request from the external application to the HighLevel Webhook URL to ensure the integration is functioning correctly.

**5\. Map Incoming Data**: In HighLevel, you can select and map the data received from the external application to relevant fields or variables within your workflow.

**6\. Save the Trigger**: Once configured, click "Save Trigger" to finalize the setup.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031444906/original/44KhZdg6jRYEKvatR44mFrP0Y5lSPRbiIw.png?1724257903)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031444679/original/EMappgdTQdfUdofgJgtHGiUs1oMp0ZndPw.png?1724257643)

## Example

## **Scenario: Integrating a Payment Processor**

**1\. Webhook URL**: You create a workflow in HighLevel and generate a Webhook URL.

**2\. External Application Setup**: In a payment processing application like Stripe, you set up a webhook that triggers when a payment is successful. You configure it to send a POST request to the HighLevel Webhook URL with payment details in JSON format.

**3\. Data Sent**: The JSON payload might look like this

```javascript

```

JavaScript

**4\. Workflow Action**: Upon receiving this data, the HighLevel workflow can be set to:

- Update the lead's status to "Paid."
- Send a confirmation email to the customer.
- Trigger additional follow-up actions based on the payment status.

This integration allows for real-time updates and automations, enhancing the efficiency of your HighLevel CRM processes.

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

- [Workflow Trigger - Video Tracking](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking)
- [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)
- [Workflow Trigger - Number Validation](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)

## Related Articles

- [Workflow Action - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call)
- [Create Appointment Note - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action)
- [How to use the Inbound Webhook Workflow Premium Trigger](https://help.gohighlevel.com/support/solutions/articles/48001237383-how-to-use-the-inbound-webhook-workflow-premium-trigger)
- [How to Use Webhooks in HighLevel (Zapier)](https://help.gohighlevel.com/support/solutions/articles/155000001183-how-to-use-webhooks-in-highlevel-zapier-)
- [Workflow Action - Update Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact)
- [Workflow Actions - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook/hit)