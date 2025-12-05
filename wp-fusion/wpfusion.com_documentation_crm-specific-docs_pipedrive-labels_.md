---
url: "https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/"
title: "Pipedrive Labels | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#content)

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

# Pipedrive Labels

- Published onNovember 4, 2025
- Last updated on November 4, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- Pipedrive Labels

## Overview

Pipedrive offers a built-in [Labels](https://support.pipedrive.com/en/article/contact-labels) system for organizing and segmenting your contacts. For the purposes of segmenting contacts, [restricting access to content](https://wpfusion.com/documentation/getting-started/access-control/), and [tracking user activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/) on your site, WP Fusion can use either Labels or a custom multiselect field.

## Labels vs. Custom Fields

### [\#](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/\#when-to-use-labels) When to Use Labels

Pipedrive’s built-in Labels system is the recommended approach for most WP Fusion users. Benefits include:

- **Native integration:** Labels are a core Pipedrive feature with full platform support
- **Visual organization:** Each label can have its own color for easy visual identification
- **Better performance:** Labels are optimized for filtering and searching in Pipedrive
- **No setup required:** Works out of the box without creating custom fields
- **Mobile support:** Labels display properly in Pipedrive’s mobile apps

### [\#](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/\#when-to-use-a-custom-multiselect-field) When to Use a Custom Multiselect Field

In some cases, you may prefer to use a custom multiselect field instead of labels:

- **Migration from existing setup:** If you’re already using a custom field for segmentation
- **Custom field requirements:** When you need segmentation data to appear in custom reports or specific views
- **Label limit concerns:** If you’re approaching Pipedrive’s label limits and need separate tracking
- **Integration requirements:** When other tools or integrations expect a specific custom field

## Configuration

### [\#](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/\#default-setup-labels) Default Setup (Labels)

When you first connect WP Fusion to Pipedrive, the integration will automatically detect and use the `label_ids` field for segmentation. You can verify this in **WP Fusion » Settings » Setup** under the **Segmentation Field** setting.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/\#custom-field-tags) Custom Field (“Tags”)

To use a custom field for segmenting contacts with Pipedrive, open Pipedrive and head to Settings » Data Fields.

[![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-2-1024x606.jpg)](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-2.jpg)

Click **Add custom field**, and choose _Multiple Options_ as the field type.

[![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-1024x599.jpg)](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags.jpg)

Now you can enter your available tags into the options list.

If you name the field “Tags”, WP Fusion will detect it and load the available tags automatically once the connection to Pipedrive is initialized.

If you use a different name, you can also manually select the desired tags field from the Setup tab.

[![](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-3-1024x689.jpg)](https://wpfusion.com/wp-content/uploads/2022/10/pipedrive-tags-3.jpg)

After changing the segmentation type, click Refresh Available Tags & Fields in the WP Fusion settings to load the updated options.

## Managing Labels in Pipedrive

Labels in Pipedrive are managed centrally and can be applied to any person record:

1. In Pipedrive, go to **Settings » Data fields » Labels**
2. Create new labels with descriptive names and colors
3. Apply labels to person records as needed

WP Fusion will automatically sync these labels to WordPress when you click **Resync Tags** in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/\#read-only-labels) Read-Only Labels

**Important:** WP Fusion can apply and remove existing labels from contact records, but it cannot create new labels in Pipedrive through the API. All labels must be created in Pipedrive first, then synced to WP Fusion.

This is by design—it ensures your label taxonomy remains organized and prevents automatic creation of unwanted or duplicate labels.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#overview)
- [Labels vs. Custom Fields](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#labels-vs-custom-fields)
- [When to Use Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#when-to-use-labels)
- [When to Use a Custom Multiselect Field](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#when-to-use-a-custom-multiselect-field)
- [Configuration](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#configuration)
- [Default Setup (Labels)](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#default-setup-labels)
- [Custom Field ("Tags")](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#custom-field-tags)
- [Managing Labels in Pipedrive](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#managing-labels-in-pipedrive)
- [Read-Only Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/#read-only-labels)

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