---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management"
title: " Custom Webhook Action – Secure Credential Management : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Getting Started w/ Workflows](https://help.gohighlevel.com/support/solutions/folders/155000000735)
6. Custom Webhook Action – Secure Credential Management

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

# Custom Webhook Action – Secure Credential Management

Modified on: Mon, 14 Apr, 2025 at 10:07 AM

This guide walks you through the latest improvements to the Custom Webhook action, focusing on enhanced security measures and streamlined credential management.

* * *

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Overview)
- [Key Improvements](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Key-Improvements)
  - [Masked Secret Keys](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Masked-Secret-Keys)
  - [User-Friendly Credential Management](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#User-Friendly-Credential-Management)
- [Why These Updates Matter](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Why-These-Updates-Matter)
- [Getting Started](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Getting-Started)
- [Important Notes](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management#Important-Notes)

* * *

## Overview

The Custom Webhook action now supports masked secret keys for Basic auth, Bearer token, and API key authentication methods. This update helps prevent the accidental exposure of sensitive information and provides an easier way to manage and store credentials.

* * *

## Key Improvements

### Masked Secret Keys

- **Secure Storage**: All secret keys are securely stored and masked in the interface.

- **Supported Auth Methods**: Basic auth, Bearer token, or API key.

- **Reduced Exposure**: Keys are never displayed in plain text, minimizing the risk of leaks.


### User-Friendly Credential Management

- **Key Management**: Select from existing keys or create a new key from a dropdown menu.

- **Restricted Removal**: Only **agency admins** or **the creator of the key** can delete it.

- **Location-Level Security**: Keys are accessible only within the location where they were created.


* * *

## Why These Updates Matter

1. **Enhanced Security**

   - Secret keys are masked to drastically lower the chances of accidental leaks.

   - Keys are identified by name instead of their actual value, reducing risk.
2. **Better Access Control**

   - Sensitive credentials are editable only by users that have created and admins at the location level.

* * *

## Getting Started

Follow these steps to add and configure a new Custom Webhook action in your Automations builder.

1. **Add a Custom Webhook Action**

   - In your Automations builder, select **Custom Webhook** as the action step.
2. **Select Authentication Type**

   - Choose one of the following methods: **Basic auth**, **Bearer token**, or **API key**.
3. **Configure Credentials**

   - Choose **Create New Key**.

   - Enter a **key name** (for identification) and the **key value** (the actual credential).

   - Once saved, the key will be masked, so it won’t appear in plain text.
4. **Monitor & Manage**

   - Use the dropdown menu to select or delete keys as needed.

* * *

## Important Notes

- **Deletion Permissions**: Only agency admins or the key’s creator can delete it.

- **Existing Keys**: Once you update to a new key, old key will be automatically removed.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064373/original/d90fEX1tr4sa9wyPSUWh0U8BQVvguDAx3A.png?1744643159)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064380/original/OzCNzq-qJdDKgQDDKd2d7-XQZtv-6ZU2tw.png?1744643171)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064383/original/BPZy4-09gQZDgA5rETgzBp5cfL2uF-a4MQ.png?1744643181)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064392/original/1SUoBaiQVlKf3CIzrZSPHUG_dZ41O4DkHg.png?1744643191)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064424/original/0OvsqZI1JfmGPxEE5Nnz7WX1ACOuw0Mf3A.png?1744643209)

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

- [Introduction to Workflows and Automations](https://help.gohighlevel.com/support/solutions/articles/155000002445-introduction-to-workflows-and-automations)
- [Workflow Notes, Action Notes & Sticky Notes](https://help.gohighlevel.com/support/solutions/articles/155000003914-workflow-notes-action-notes-sticky-notes)
- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Comprehensive workflow stats](https://help.gohighlevel.com/support/solutions/articles/155000003972-comprehensive-workflow-stats)
- [Workflows - Advanced Filters & Smart List](https://help.gohighlevel.com/support/solutions/articles/155000003974-workflows-advanced-filters-smart-list)
- [Workflow Action - If/Else Upgrad](https://help.gohighlevel.com/support/solutions/articles/155000003975-workflow-action-if-else-upgrad)

## Related Articles

- [HighLevel Custom Shipping Carrier Integration Guide](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide)
- [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace)
- [Workflow Action - Custom webhook](https://help.gohighlevel.com/support/solutions/articles/155000003305-workflow-action-custom-webhook)
- [Workflow Actions - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call)
- [Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions)
- [Workflow Action - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management/hit)