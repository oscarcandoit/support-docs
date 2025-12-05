---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003305,"
title: " Workflow Action - Custom webhook : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003305,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Webhooks Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000814)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003305,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Webhooks Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000814)
6. Workflow Action - Custom webhook

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

# Workflow Action - Custom webhook

Modified on: Mon, 11 Aug, 2025 at 8:38 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003305,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003305,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003305,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003305,#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003305,#Example)

## Overview

The Custom Webhook Action  allows you to integrate your with external systems by sending real-time data via HTTP POST, GET, PUT and Delete methods. This action enables seamless automation, data exchange, and interaction with third-party services, APIs, and custom applications without requiring any coding.

## Action Name

Custom webhook

## Action Description

The Custom Webhook Action enables users to send HTTP requests to specified URLs, integrating with external services for automated data exchange. This action supports multiple HTTP methods (POST, GET, PUT, DELETE), customizable headers, query parameters, and authentication options to match the needs of any third-party service.

Supported Features:

- **HTTP Methods:** POST, GET, PUT, DELETE
- **Custom Headers & Query Parameters:** Pass authentication, content-type, or other necessary data
- **Authorization Methods:** Basic Auth, Bearer token, API key and No auth.
  - Basic Auth requires Username and Password
  - Bearer token requires Token of the platform
  - API key requires a key-value pair of the key name and its value ie the API key.
- **Data Mapping:** Autocomplete suggestions to map custom values like contact info, lead status, and more

## Action Details

#### Step-by-Step Guide

1. **Choose the Action Type:**

   - Select "Custom Webhook" from the list of available actions in the workflow builder.
2. **Name Your Action:**

   - Enter a descriptive name, such as "Send Data to External API."
3. **Enter the Webhook URL:**

   - Provide the URL of the external system’s endpoint where the data should be sent (e.g., a CRM, payment gateway, or custom API).
4. **Select HTTP Method:**

   - Choose from POST, GET, PUT, or DELETE depending on the type of data operation required by the external service.
5. **Select Authorization Method (Optional):**

   - Choose the necessary authorization method such as API keys, Bearer Tokens, or Basic Auth to ensure secure communication with the external service.
6. **Configure Headers & Query Parameters (Optional):**

   - Add any required headers like `Authorization: Bearer <API_KEY>` or content-type headers to define the data format (`Content-Type: application/json`).
   - Use query parameters to pass additional information, filter data, or adjust the external API’s response.
7. **Map Data:**

   - Insert relevant data (e.g., contact name, email, phone number) into the request body. You can structure the payload in JSON or another format required by the external system.
     Example Payload:

```javascript

```

JavaScript

1. **Save and Activate the Workflow:**

   - Once set up, activate the workflow. The webhook will trigger and send data in real time based on the workflow conditions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032302044/original/PFAnKNR1PW1eEsV7LkiUV0Fuko7i8XMLjw.png?1725530767)

## Example

**Scenario:** A business wants to send contact information to an external CRM whenever a new lead is created in your system.

1. **Create Workflow Trigger:**

   - Set up a workflow trigger for when a new lead is created.
2. **Add Custom Webhook Action:**

   - Choose "Custom Webhook" and name it "Send Lead Data to CRM."
   - Webhook URL: `https://api.externaltestcrm.com/leads/create`
   - HTTP Method: POST
   - Payload

     ```json
     {
       "first_name": "{{contact.first_name}}",
       "last_name": "{{contact.last_name}}",
       "email": "{{contact.email}}",
       "phone": "{{contact.phone}}"
     }
     ```

   - Headers: Add an API key to authenticate the request
     - `Authorization: Bearer xyz123`
     - `Content-Type: application/json`
3. **Test the Webhook:**

   - Test using a tool like Webhook.site or Postman to confirm the data is correctly sent and received.
4. **Save and Activate:**

   - Once activated, the webhook will automatically send lead data to the CRM whenever a new lead is created.

**Outcome:** Every new lead  is synced with the external CRM, improving automation and reducing manual data entry.

## Frequently Asked Questions

**Q: My third-party service requires a static IP address to whitelist for webhooks. What should I do?**

**A:** The platform does not provide a static IP address or range for whitelisting. This is because the system operates on a dynamic, real-time cloud infrastructure, which is the standard for modern, scalable services.

The correct and more secure method is to authenticate using a secret key or token sent in the request's header.

You should take one of the following two approaches based on your third-party provider's requirements:

**1\. If Your Provider Uses a Standard Authentication Method:**

If your provider uses a common method like a Bearer Token or a standard API Key, you can use the built-in authorization options.

- In the **AUTHORIZATION** dropdown, select the appropriate method (e.g., "Bearer Token" or "API Key").

- Enter the credentials provided by the third-party service.


**2\. If Your Provider Uses a Custom Header for Authentication:**

If the third-party provider requires a unique key and value in the header for verification, follow these steps:

- In the **AUTHORIZATION** dropdown, select **None**.

- Navigate to the **HEADERS** section below.

- Click **Add item** and enter the custom **Key** and **Value** that the third-party service has provided to you.


You should inform your third-party provider that your system uses modern, header-based authentication and ask them for the necessary credentials to send with each request.

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

- [Workflow Action - Webhook (Outbound)](https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-)
- [Workflow Action - Custom webhook](https://help.gohighlevel.com/support/solutions/articles/155000003305-workflow-action-custom-webhook)

## Related Articles

- [Create Appointment Note - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action)
- [Workflow Action - Webhook (Outbound)](https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-)
- [Guide to Custom Webhook Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238167-guide-to-custom-webhook-workflow-action)
- [Workflow Action - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call)
- [How to Use Webhooks in HighLevel (Zapier)](https://help.gohighlevel.com/support/solutions/articles/155000001183-how-to-use-webhooks-in-highlevel-zapier-)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003305,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003305-workflow-action-custom-webhook/hit)