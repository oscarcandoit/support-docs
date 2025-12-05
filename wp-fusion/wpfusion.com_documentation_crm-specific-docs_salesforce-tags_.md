---
url: "https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/"
title: "Salesforce Tags | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#content)

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

# Salesforce Tags

- Published onApril 10, 2022
- Last updated on October 30, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- Salesforce Tags

### [\#](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/\#overview) Overview

Salesforce does not have a built in equivalent to “tags” like WP Fusion would normally use with email marketing CRMs (such as ActiveCampaign).

As such, you have four options for segmenting contact records with WP Fusion:

- Topics
- Picklist
- Personal tags
- Public tags

You can select which method you’d like to use from the **Segment Type** setting on the Setup tab, after configuring your connection to Salesforce.

[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-segment-type-1024x449.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-segment-type.jpg)

After changing the segment type, save the settings to update the available options in the _Select Tag(s)_ dropdowns.

Not sure which to use? We recommend using a [Picklist](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#picklist).

### [\#](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/\#topics) Topics

By default WP Fusion uses [Topics](https://help.salesforce.com/s/articleView?id=sf.basics_topics_records_overview.htm&type=5) in Salesforce to segment contacts. Topics are enabled by default in Salesforce Lightning and can be [manually enabled for Salesforce Classic](https://help.salesforce.com/s/articleView?id=sf.collab_topics_records_admin.htm&type=5).

[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics-1024x484.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics.jpg) Topics can be configured to be displayed on Salesforce contact records and function similarly to tags in other CRMs.[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics-overview-1024x413.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-topics-overview.jpg) Topic detail pages show all contacts who have the topic.

Topics generally work well for segmenting with WP Fusion but there are a few things to note:

1. Salesforce does not allow you to bulk-assign topics to contacts without using an external tool (like [Data Loader](https://help.salesforce.com/s/articleView?id=000338350&type=1)). This makes bulk [auto-enrollments](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [imports](https://wpfusion.com/documentation/tutorials/import-users/) difficult.
2. Because Topics have their own API endpoints separate from the contacts, applying multiple topics requires multiple API calls, which can slow down the visitor or checkout experience (each API call takes ~1 second).
3. Because Topic data is not stored with contact data in the CRM, exports of contacts from Salesforce will not include their topics.
4. Many third party tools can interface with Salesforce contact records and custom contact fields, but few external tools can access Topic data.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/\#picklist) Picklist

As of WP Fusion v3.39.4 (April 2022), you have the option to use a custom picklist field to store “tags” for your contacts.

To set this up, first head to the [Object Manager](https://help.salesforce.com/s/articleView?id=sf.viewing_fields.htm&type=5) in Salesforce and create a new **Picklist (Multi-Select)** field for the Contact object.

[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-picklist-setup-1024x739.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-picklist-setup.jpg)

For the field configuration:

- **Field Label:** Can be whatever you want but we’ll use “Tags” for this example.
- **Values:** Should be “ _Enter values”_, this allows you to use a custom set of tag values instead of the global options. You can optionally enter some tag names into the box, or leave it blank (WP Fusion can create tags later as needed).
- **Display values alphabetically:** It’s recommended to select this to make it easier to view and manage tags when editing contact records.
- **Restrict picklist to the values defined:** You must _un-check_ this setting. Disabling this setting will allow WP Fusion to create new picklist values (i.e. “tags”) over the API.

Once you’ve created your custom field, head back to the WP Fusion setup tab and select _Picklist_ from the **Segment Type** setting.

In the **Tags Picklist** dropdown, begin typing the name of your new field. If a match is not found, click the prompt to resynchronize your fields, and then select your new field once the resync is complete. Save the settings.

You can now type any tag name into the _Select Tag(s)_ dropdowns, and WP Fusion will prompt you to _add new_.

[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-add-new-1024x514.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-add-new.jpg)

Once the new tag is applied to a user, it will show up on their Salesforce contact record, and as an option in the picklist and in the WP Fusion tags select dropdowns.

The Tags field can be added to the contact edit layout, and can be edited just like any other picklist field in Salesforce.

[![](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-as-picklist-1024x509.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/salesforce-tags-as-picklist-scaled.jpg)

Because WP Fusion can create new picklist values over the API, this also lets you use the [automatic tagging features with WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#automatic-tagging), as well as the _Create Tag(s) from Value_ option when [mapping CRM fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#dynamic-tagging) or form fields.

The selected picklists values are available over the normal contacts APIs, and can be included in exports. Using the _Picklist_ option for tags is the most compatible with connecting Salesforce to other third-party apps and services.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/\#personal-and-public-tags) Personal and Public tags

Personal and Public tags are a feature from Salesforce Classic, but aren’t available in Salesforce Lightning.

WP Fusion supports using Personal or Public tags for segmenting contacts for legacy accounts, but it’s recommended to use either Topics or a Picklist for new installs as these options provide the best compatibility with the latest editions of Salesforce.

For more information on tags, see:

- [Enable Tags](https://help.salesforce.com/s/articleView?id=sf.customize_tag_settings.htm&type=5)
- [Personal Tags FAQ](https://help.salesforce.com/s/articleView?id=000325224&type=1)
- [Organize Records with Tags and Topics](https://help.salesforce.com/s/articleView?id=sf.basics_topics_records_overview.htm&type=5)

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#overview)
- [Topics](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#topics)
- [Picklist](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#picklist)
- [Personal and Public tags](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/#personal-and-public-tags)

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