---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/"
title: "Creating Custom CRM Modules"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#content)

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

# Creating Custom CRM Modules

- Published onSeptember 25, 2018
- Last updated on January 18, 2022

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Creating Custom CRM Modules

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#overview) Overview

WP Fusion can be extended to connect to additional CRMs or other contact databases outside of our [included integrations](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

WP Fusion’s integration modules are standardized across all our supported CRMs. Once the integration module is complete, it allows [100+ of the most popular WordPress plugins](https://wpfusion.com/documentation/#integrations) to communicate bidirectionally with your CRM or marketing automation platform. In most cases this is significantly faster and cheaper than developing custom CRM integrations one plugin at a time.

For a bootstrap to get you started, download this [example plugin from GitHub](https://github.com/verygoodplugins/wp-fusion-custom-crm).

**Not sure where to start?** We recommend [Codeable](https://wpfusion.com/go/codeable).

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#requirements) Requirements

While WP Fusion is pretty flexible, it does not work with all platforms.

For WP Fusion to work properly, your CRM or marketing automation tool must at minimum have API methods for:

- Get all available tags (or “segments”, “groups”, “static lists”, aka whatever is going to be used for segmenting contacts)
- Get all available contact custom fields (or “attributes”, “properties”, etc.)
- Search for a contact ID by email address
- Load the tags for a contact, by ID
- Apply tags to a contact, by contact ID
- Remove tags from a contact, by contact ID
- Add a new contact, and return a contact ID
- Update a contact by ID
- Load a contact and all their properties, by contact ID
- (optional) Search for contacts by tag name or ID. This is required for the [Import Tool](https://wpfusion.com/documentation/tutorials/import-users/) to work.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#setting-up-a-custom-crm-module) Setting up a custom CRM module

First [download the starter plugin](https://github.com/verygoodplugins/wp-fusion-custom-crm). Then do a find and replace (case sensitive) on two strings:

- “custom”: This is the slug for the integration. Change it to something like “my\_crm\_name”
- “Custom”: This is the title for the integration, and is also used for the class names. Change it to something like “My\_CRM\_Name”

Also change the file names to reflect the new slug.

Then you can go through each of the methods in class-wpf-custom.php and update them with the API calls specific to your integration, [following the guide here](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/).

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#file-structure) File structure

There are three important files:

- **wp-fusion-custom-crm.php:** This is the base plugin file. It defines the plugin name, loads the dependencies, and adds the custom CRM to the dropdown in WP Fusion’s setup tab.
- **class-wpf-custom.php:** This is the base class for custom module. It includes all API calls and methods relating to sending and retrieving data.
- **class-wpf-custom-admin.php:** This file is only loaded in the WordPress admin. It defines the settings required to establish a connection, and contains any additional admin functionality.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#notes) Notes

`$supports`: This variable declares some CRM-specific features to other aspects of WP Fusion. If the CRM supports “add\_tags”, then WP Fusion’s tag dropdowns will support typing in a new tag name on the fly. If the platform uses tag IDs, or requires tags to be registered before they’re used, don’t declare support for “add\_tags”.

“add\_fields” works similarly to “add\_tags”. If the CRM supports “add\_fields”, users will be able to enter custom fields on the fly. Don’t use this if the platform requires field IDs.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/\#contribution-guidelines) Contribution guidelines

For contribution and style guidelines, [see this doc](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#contributing-to-wp-fusion).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#overview)
- [Requirements](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#requirements)
- [Setting up a custom CRM module](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#setting-up-a-custom-crm-module)
- [File structure](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#file-structure)
- [Notes](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#notes)
- [Contribution guidelines](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/#contribution-guidelines)

### In this chapter

- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [Additional Code Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/ "Additional Code Examples")
- [Applying and Removing Tags with JavaScript](https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/ "Applying and Removing Tags with JavaScript")
- [Connecting to two different ActiveCampaign accounts](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/ "Connecting to two different ActiveCampaign accounts")
- [Contributing integration modules](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/ "Contributing integration modules")
- [Creating Custom CRM Modules](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/ "Creating Custom CRM Modules")
- [Deleting Users via Webhooks](https://wpfusion.com/documentation/advanced-developer-tutorials/deleting-users-via-webhooks/ "Deleting Users via Webhooks")
- [Detecting and Syncing Additional Fields](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/ "Detecting and Syncing Additional Fields")
- [How To Submit A Job On Codeable For Custom Development](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-submit-a-job-on-codeable-for-custom-development/ "How To Submit A Job On Codeable For Custom Development")
- [How to use a custom client ID for authentication](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/ "How to use a custom client ID for authentication")
- [Registering Custom Batch Operations](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/ "Registering Custom Batch Operations")
- [Scheduled Synchronization Using Cron](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/ "Scheduled Synchronization Using Cron")
- [Sending data to two different CRMs (Intercom Example)](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/ "Sending data to two different CRMs (Intercom Example)")
- [The WP Fusion CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/ "The WP Fusion CRM API")
- [The WP Fusion User Class](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/ "The WP Fusion User Class")
- [White Labelling WP Fusion](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/ "White Labelling WP Fusion")

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