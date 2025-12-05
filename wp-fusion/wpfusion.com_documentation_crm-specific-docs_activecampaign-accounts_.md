---
url: "https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/"
title: "ActiveCampaign Accounts | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#content)

[![WP Fusion Logo](https://wpfusion.com/wp-content/uploads/2019/08/logo-top-svg.svg)](https://wpfusion.com/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

# ActiveCampaign Accounts

- Published onJanuary 6, 2025
- Last updated on January 6, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- ActiveCampaign Accounts

### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/\#overview) Overview

As of [WP Fusion v3.44.21](https://wpfusion.com/documentation/faq/changelog/), the ActiveCampaign integration has the ability to create and update [Accounts in ActiveCampaign](https://help.activecampaign.com/hc/en-us/articles/360008034900-How-to-use-Accounts-in-ActiveCampaign), and associate contacts with accounts.

Accounts are normally used for keeping track of business entities and their related contacts.

[![accountactivitystream crm](https://wpfusion.com/wp-content/uploads/2025/01/AccountActivityStream_CRM-1024x502.webp)](https://wpfusion.com/wp-content/uploads/2025/01/AccountActivityStream_CRM.webp) Accounts in ActiveCampaign allow you to keep track of your relationships with businesses and other organizations that may have multiple contacts.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/\#setup) Setup

If you’ve just updated WP Fusion to 3.44.21, first click _Refresh Available Tags and Fields_ in the WP Fusion settings to load your available account fields into the CRM field dropdowns.

[![screenshot](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-account-field-mapping-1024x325.jpg)](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-account-field-mapping.jpg)

The Account Fields will appear in a group at the bottom of the list, beneath Standard Fields and Custom Fields.

WP Fusion supports all the standard account fields in addition to [custom account fields](https://help.activecampaign.com/hc/en-us/articles/360008034920-Custom-account-field-overview).

### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/\#how-it-works) How it works

When a user or customer’s data is synced to ActiveCampaign, WP Fusion will identify any account-related field mappings. An account will then be created or updated as necessary, and the contact will be linked to the account.

The functionality works differently depending on the scenario:

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/\#if-a-contact-is-new-or-not-linked-to-an-account) If **a contact is new or not linked to an account**

If a contact is not linked to an account, WP Fusion will use the Account Name field to attempt to find an existing account with that name. If a match is found, that account will be updated with any provided account fields, and the contact will be linked to the account.

If no match is found, a new account will be created based on the provided data, and the contact will be linked to the new account.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/\#if-a-contact-is-already-linked-to-an-account) If **a contact is already linked to an account**

**If a contact is already linked to an account in ActiveCampaign**, and the Account Name field in the synced data matches the name on the ActiveCampaign account, then the existing account will be updated with any provided account fields or custom fields.

This also applies if the Account Name field is not synced at all— WP Fusion will update the contact’s existing account based on the linked account ID stored on their contact record.

**Tip:** If all your contacts in ActiveCampaign are already linked with accounts, and you just want to update existing account details without accidentally creating new accounts (for example due to a typo), keep the _Account Name_ field sync disabled in the [contact fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

**If the contact is synced with an Account Name that does not match their current account**, WP Fusion will attempt to find an existing account with that name. If a match is found, the contact’s existing account relationship will be deleted, and they will be linked to the new account (ActiveCampaign contacts can only be linked to one account at a time).

The existing account will be updated with any custom account fields supplied with the contact data.

If no match is found, WP Fusion will create a new account based on the Account Name and provided account data, and the contact will be linked to that account.

[![Screenshot shows WP Fusion updating a contact's account association after they supplied a new Billing Company at checkout.](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-accounts-1024x918.jpg)](https://wpfusion.com/wp-content/uploads/2025/01/activecampaign-accounts-scaled.jpg) This example shows WP Fusion updating a contact’s account association after they supplied a new Billing Company at checkout.

In the example above from the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/), you can see WP Fusion updating an existing contact’s account association after they supplied a new Billing Company at checkout.

The new account was created based on the provided data, the contact was un-linked from their previous account, and linked to the new account.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#overview)
- [Setup](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#setup)
- [How it works](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#how-it-works)
- [If **a contact is new or not linked to an account**](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#if-a-contact-is-new-or-not-linked-to-an-account)
- [If **a contact is already linked to an account**](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/#if-a-contact-is-already-linked-to-an-account)

### In this chapter

- [ActiveCampaign Accounts](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/ "ActiveCampaign Accounts")
- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [ConvertKit Unsubscribes](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/ "ConvertKit Unsubscribes")
- [Custom fields not loading with AgileCRM](https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/ "Custom fields not loading with AgileCRM")
- [Dynamics 365 - Associating entities](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/ "Dynamics 365 - Associating entities")
- [HighLevel white-labelled accounts](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/ "HighLevel white-labelled accounts")
- [HubSpot - How to use lists](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/ "HubSpot - How to use lists")
- [HubSpot Custom Objects](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/ "HubSpot Custom Objects")
- [Inactive / Unsubscribed People in Drip](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/ "Inactive / Unsubscribed People in Drip")
- [Infusionsoft API Goals](https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/ "Infusionsoft API Goals")
- [Klaviyo marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/ "Klaviyo marketing consent")
- [MailerLite double opt-ins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/ "MailerLite double opt-ins")
- [MailerLite email address changes](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/ "MailerLite email address changes")
- [Mautic Points](https://wpfusion.com/documentation/crm-specific-docs/mautic-points/ "Mautic Points")
- [Pipedrive Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/ "Pipedrive Labels")
- [Salesforce Sandbox Accounts](https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/ "Salesforce Sandbox Accounts")
- [Salesforce Tags](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/ "Salesforce Tags")
- [Unexpected Tags with ConvertKit](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/ "Unexpected Tags with ConvertKit")
- [Updating Leads with ConvertFox, Intercom, and Zoho](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/ "Updating Leads with ConvertFox, Intercom, and Zoho")
- [Zoho Tags](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/ "Zoho Tags")

MarkCreated with Sketch.

#### WP Fusion

[Home](https://wpfusion.com/)

[Features](https://wpfusion.com/features/)

[Pricing](https://wpfusion.com/pricing/)

[Testimonials](https://wpfusion.com/testimonials/)

[Affiliates](https://wpfusion.com/affiliate-registration/)

[Try Demo](https://wpfusion.com/demo-signup/)

#### Learn

[Blog](https://wpfusion.com/blog/)

[Getting Started](https://wpfusion.com/documentation/)

[Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/)

[Videos and Demos](https://wpfusion.com/videos/)

[Supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

[Plugin Integrations](https://wpfusion.com/documentation/#integrations)

#### Support

[Contact Support](https://wpfusion.com/contact/)

[Documentation](https://wpfusion.com/documentation/)

[Frequently Asked Questions](https://wpfusion.com/documentation/)

[Developers](https://wpfusion.com/documentation/#developer-guides)

[Changelog](https://wpfusion.com/documentation/faq/changelog/)

#### Company

[About Us](https://wpfusion.com/about-us/)

[Contact](https://wpfusion.com/contact/)

[Brand Assets](https://wpfusion.com/brand-assets/)

[Terms and Conditions](https://wpfusion.com/terms-conditions/)

[Privacy Policy](https://wpfusion.com/privacy-policy/)

[Information Security Policy](https://wpfusion.com/information-security-policy/)

[![Very Good Plugins LLC Logo](https://wpfusion.com/wp-content/uploads/2019/08/vgp-logo.png)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)