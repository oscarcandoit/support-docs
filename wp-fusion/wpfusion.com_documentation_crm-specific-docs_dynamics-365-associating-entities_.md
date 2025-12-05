---
url: "https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/"
title: "Dynamics 365 - Associating entities | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#content)

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

# Dynamics 365 – Associating entities

- Published onFebruary 27, 2023
- Last updated on July 28, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- Dynamics 365 – Associating entities

### [\#](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/\#overview) Overview

Dynamics 365 Marketing supports linking records with each other via the use of lookup fields— for example linking a Contact to an Account, or associating an Account with an Owner.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/\#mapping-lookup-fields) Mapping lookup fields

When [mapping fields between WordPress and Dynamics](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) via the WP Fusion settings, lookup fields will be indicated in the dropdowns with a _Lookup Field_ badge.

[![](https://wpfusion.com/wp-content/uploads/2023/02/lookup-fields-in-settings-1024x412.jpg)](https://wpfusion.com/wp-content/uploads/2023/02/lookup-fields-in-settings.jpg)

### [\#](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/\#updating-lookup-fields) Updating lookup fields

You can update a lookup field to link a contact to another entity. The syntax for this is the entity name, followed by the entity’s ID in parenthesis. For example

- `/systemusers(5cfb32d8-dbb4-ed11-9885-6045bd01004c)`: To set a contact’s owner
- `/accounts(bb49b790-c3b6-ed11-83fe-002248041c09)`: To set a contact’s account

If you try to sync a value with a lookup field that does not match this pattern, WP Fusion will record a notice to the logs, and the data will be removed from the payload being sent to the CRM (to avoid an API error).

[![](https://wpfusion.com/wp-content/uploads/2023/02/dynamics-lookup-fields-error-1024x286.jpg)](https://wpfusion.com/wp-content/uploads/2023/02/dynamics-lookup-fields-error.jpg)

For more information on working with lookup fields and associated entities, see [Associate and disassociate entities using the web API](https://learn.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/mt607875(v=crm.8)).

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/\#multi-value-lookup-fields) Multi-value lookup fields

As of [v3.41.23](https://wpfusion.com/documentation/faq/changelog/#3-41-23), WP Fusion also supports updating multi-value lookup fields (for example the Customer field on the Case object).

Multi-value lookup fields can accept multiple object types for their relationships, and this is reflected in the WP Fusion UI.

In the CRM field dropdown, you’ll see each of the supported lookup values for the field next to the field name.

[![](https://wpfusion.com/wp-content/uploads/2023/02/d365-multi-value-lookup-fields-1024x396.jpg)](https://wpfusion.com/wp-content/uploads/2023/02/d365-multi-value-lookup-fields.jpg)

In this example, if we selected the first option, **Customer (Lookup Field » Account)**, we could sync a value of `/accounts(bb49b790-c3b6-ed11-83fe-002248041c09)` to set the Case’s Customer field to be linked to an account with that ID.

Or, we could select **Customer (Lookup Field » Contact)** and sync a value of `/contacts(cb49b790-c3b6-ed11-83fe-002248041c09)` to link the Case with the customer of that ID.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#overview)
- [Mapping lookup fields](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#mapping-lookup-fields)
- [Updating lookup fields](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#updating-lookup-fields)
- [Multi-value lookup fields](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#multi-value-lookup-fields)

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