---
url: "https://wpfusion.com/documentation/tutorials/switching-crms/"
title: "Switching CRMs | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/switching-crms/#content)

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

# Switching CRMs

- Published onApril 13, 2019
- Last updated on May 25, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Switching CRMs

### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#overview) Overview

The time may come when you need to move from one marketing automation platform to another. Thankfully WP Fusion makes this pretty easy. Here are the steps:

### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#1-move-your-data) 1\. Move your data

To ensure that no data gets lost in the transfer, the best way to move your contacts over is to do an export of all contacts from your old CRM and import that data into the new CRM.

Make sure that your contacts’ tags get transferred over, as WP Fusion can’t migrate contact tags between platforms.

### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#2-reset-wp-fusion) 2\. Reset WP Fusion

Go to Settings » WP Fusion » Advanced and check the box at the bottom for _Reset Settings_.

[![](https://wpfusion.com/wp-content/uploads/2019/04/reset-settings-1024x245.jpg)](https://wpfusion.com/wp-content/uploads/2019/04/reset-settings.jpg)

It’s also recommended to check the box for _Reset All_. This will delete any WP Fusion settings configured on:

- Posts, pages, and other content (i.e. access rules)
- Memberships
- Courses
- Products
- And everywhere else in the database (currently limited to the `wp_options` and `wp_postmeta` tables)

However, if you are switching between two CRMs that support dynamic tagging (see below), you can elect not to check Reset All, and in this case the tags configured on the rest of your content will be saved and can be used with your new CRM (the only settings that will be reset are the main options page).

### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#3-connect) 3\. Connect

Select your new CRM from the dropdown, enter your API credentials, and click Test Connection. Once it’s connected save the settings.

WP Fusion will continue to work in the background on matching up your existing users with their new contact IDs in your new CRM, and loading their tags.

### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#4-update-your-settings) 4\. Update your settings

You’ll want to go through those and re-associate any WordPress fields with custom fields in your new CRM, and generally make sure everything is configured how you’d like.

If you are using any of our form integrations, like Gravity Forms, make sure you edit your form feeds to use the new custom fields as well.

The next part depends on what you’re switching from, and what you’re switching to, and has to do with whether the CRM stores tags as IDs (i.e. each tag name has a tag ID), or just as tag names.

- For example in switching from ActiveCampaign to Drip, no additional configuration is required. Your products, membership levels, and courses will all continue to use the same tags from ActiveCampaign.
- If you’re switching from a CRM with numeric tag IDs, like Infusionsoft or Ontraport, to one without, like Drip, then you will need to go through and update all of your tagging settings across all of your content. Until you do you will continue to see numeric IDs applied as tags instead of the new tag names. To troubleshoot any mystery tags being applied we recommend turning on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/).
- If you’re switching between CRMs with numeric tag IDs, like from Infusionsoft to Ontraport, you will also need to update all your tagging settings.

If you’re unsure if your CRM uses tag IDs, you can inspect the HTML of the `<select>` element next to any of the tag dropdowns, and check the `value=` parameter.

[![](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-text-tags-1024x565.jpg)](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-text-tags-scaled.jpg) Encharge does not use IDs for tags, and so saved tags will copy over when switching to another CRM that also stores tags as text.[![](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-id-tags-1024x591.jpg)](https://wpfusion.com/wp-content/uploads/2019/04/crm-with-id-tags-scaled.jpg) Infusionsoft uses internal IDs for tags, and so saved tags will not copy over when connecting to another CRM.

Switching between any two platforms that use text tag names does not require any additional reconfiguring of your products or access rules— all of your tags will copy over automatically (as long as _Reset All_ isn’t selected when doing the reset).

[![](https://wpfusion.com/wp-content/uploads/2019/04/error-unknown-tags-1024x450.jpg)](https://wpfusion.com/wp-content/uploads/2019/04/error-unknown-tags.jpg) Switching between CRMs with incompatible tag types will show a warning message on the _Select tags_ dropdown, to help pinpoint any settings that still need to be copied over.

If you are switching between CRMs with tag IDs, like Infusionsoft or HubSpot, then you will need to update your settings to use the new tags. If unknown tags are saved to a setting, the dropdown will be highlighted in red and the data from the database will be displayed in a banner beneath to help in debugging.

#### [\#](https://wpfusion.com/documentation/tutorials/switching-crms/\#switching-to-a-self-hosted-crm) Switching to a self-hosted CRM

If you are switching from a cloud to a self-hosted CRM like [Groundhogg](https://wpfusion.com/documentation/installation-guides/how-to-connect-groundhogg-to-wordpress/), [FluentCRM](https://wpfusion.com/documentation/installation-guides/how-to-connect-fluentcrm-to-wordpress/), [FunnelKit](https://wpfusion.com/documentation/installation-guides/how-to-connect-funnelkit-to-wordpress/), or [Mautic](https://wpfusion.com/documentation/installation-guides/how-to-connect-mautic-to-wordpress/), you have some extra flexibility when moving your tags and access rules, since you have access to the database.

[![](https://wpfusion.com/wp-content/uploads/2019/04/fcrm-tags-1024x399.jpg)](https://wpfusion.com/wp-content/uploads/2019/04/fcrm-tags.jpg) In this case, we’ve imported existing Infusionsoft tags directly to the `wp_fc_tags` database table, keeping their original IDs. Since the IDs haven’t changed, there’s nothing that needs to be updated in the WP Fusion settings.

If you can export a list of tag names and their IDs from your source CRM, you can then import these to the tags database table in the destination CRM, preserving the IDs. As long as the tag IDs stay the same, you won’t need to update any WP Fusion settings.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/switching-crms/#overview)
- [1\. Move your data](https://wpfusion.com/documentation/tutorials/switching-crms/#1-move-your-data)
- [2\. Reset WP Fusion](https://wpfusion.com/documentation/tutorials/switching-crms/#2-reset-wp-fusion)
- [3\. Connect](https://wpfusion.com/documentation/tutorials/switching-crms/#3-connect)
- [4\. Update your settings](https://wpfusion.com/documentation/tutorials/switching-crms/#4-update-your-settings)
- [Switching to a self-hosted CRM](https://wpfusion.com/documentation/tutorials/switching-crms/#switching-to-a-self-hosted-crm)

### In this chapter

- [Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/ "Auto Login")
- [Batch Operations / Exporting Data](https://wpfusion.com/documentation/tutorials/batch-operations/ "Batch Operations / Exporting Data")
- [Double Opt-Ins](https://wpfusion.com/documentation/tutorials/double-opt-ins/ "Double Opt-Ins")
- [Import Users](https://wpfusion.com/documentation/tutorials/import-users/ "Import Users")
- [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/ "Lead Source Tracking")
- [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/ "Link Click Tracking")
- [Menu Item Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/ "Menu Item Visibility")
- [Site Tracking Scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/ "Site Tracking Scripts")
- [Switching CRMs](https://wpfusion.com/documentation/tutorials/switching-crms/ "Switching CRMs")
- [Sync Users Between Sites](https://wpfusion.com/documentation/tutorials/sync-user-accounts/ "Sync Users Between Sites")
- [ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/ "ThriveCart")

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