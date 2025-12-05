---
url: "https://wpfusion.com/documentation/lead-generation/fluent-forms/"
title: "Connect Fluent Forms to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/lead-generation/fluent-forms/#content)

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

# Fluent Forms

- Published onOctober 31, 2019
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Lead Generation](https://wpfusion.com/documentation/#lead-generation)
- /
- Fluent Forms

### [\#](https://wpfusion.com/documentation/lead-generation/fluent-forms/\#overview) Overview

WP Fusion integrates with [Fluent Forms](https://wordpress.org/plugins/fluentform/) to sync form submissions to any one of [50+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

When a Fluent Forms form is filled out a contact record will be created (or updated) in your CRM, with support for any number of custom fields. You can also apply tags to contacts in your CRM based on the form that was submitted, including support for conditional logic.

### [\#](https://wpfusion.com/documentation/lead-generation/fluent-forms/\#setup) Setup

First navigate to Fluent Forms » Integrations in the WordPress admin and ensure the WP Fusion module is enabled:

[![](https://wpfusion.com/wp-content/uploads/2019/10/enable-fluent-forms-integration-1024x583.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/enable-fluent-forms-integration-scaled.jpg)

After creating your form, go to the form settings and open the **Configure Integrations** tab. Click Add New Integration, and choose “WP Fusion Integration” from the dropdown:

[![](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-2-300x191.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-2.jpg)

For each field on your form, you can select a corresponding contact field in your CRM to save the data.

[![](https://wpfusion.com/wp-content/uploads/2019/10/Fluent-Forms-WP-Fusion-Integration-Feed-1024x550.png)](https://wpfusion.com/wp-content/uploads/2019/10/Fluent-Forms-WP-Fusion-Integration-Feed.png)

You can also optionally specify tags to be applied to the contact when they fill out the form:

[![screenshot](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-tags-1024x428.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-tags.jpg)

#### [\#](https://wpfusion.com/documentation/lead-generation/fluent-forms/\#conditional-tags) Conditional tags

By checking the _Enable Dynamic Tag Selection_ box, you can conditionally apply tags based on the submitted form values.

[![screenshot](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-conditional-tags-1024x657.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/fluentforms-conditional-tags.jpg)

### [\#](https://wpfusion.com/documentation/lead-generation/fluent-forms/\#user-registration) User registration

The setup instructions above work with any version of Fluent Forms (including the [free version](https://wordpress.org/plugins/fluentform/)).

This treats the form submission like a “lead”, or “opt in”— the data is synced directly to your CRM, one time.

If you are using [Fluent Forms Pro](https://wpfusion.com/go/fluent-forms), with the [User Registration module](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/how-to-create-a-wordpress-user-registration-form-with-wp-fluent-forms/), the setup is different. First, create your form, and add a User Registration module [following this tutorial](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/how-to-create-a-wordpress-user-registration-form-with-wp-fluent-forms/).

Add any custom fields to the user registration feed as User Meta.

[![User Meta entry on a Fluent Forms user registration feed](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-feed-1024x171.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-feed.jpg)

Since your form fields are _user_ fields, not _lead_ fields, they will appear for mapping under [the main Contact Fields list](https://wpfusion.com/videos/tutorials/mapping-and-syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-fields-map-1024x367.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/fluent-forms-user-reg-fields-map.jpg)

For each form field, you can select a custom field in your CRM. The data will be synced to the selected custom field when a user registers or updates their profile.

You can also enable the **Generated Password** field to sync any generated passwords to your CRM (one time) when users register via Fluent Forms.

### [\#](https://wpfusion.com/documentation/lead-generation/fluent-forms/\#syncing-historical-entries) Syncing historical entries

If you already have existing Fluent Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First configure your form feeds. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

[![](https://wpfusion.com/wp-content/uploads/2023/05/fluent-forms-export.png)](https://wpfusion.com/wp-content/uploads/2023/05/fluent-forms-export.png)

Select “ **Fluent Forms entries**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the feeds set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Fluent Forms to ActiveCampaign](https://wpfusion.com/connect/connect-fluent-forms-to-activecampaign/)  \|
- [Connect Fluent Forms to AgileCRM](https://wpfusion.com/connect/connect-fluent-forms-to-agilecrm/)  \|
- [Connect Fluent Forms to Autopilot](https://wpfusion.com/connect/connect-fluent-forms-to-autopilot/)  \|
- [Connect Fluent Forms to Bento](https://wpfusion.com/connect/connect-fluent-forms-to-bento/)  \|
- [Connect Fluent Forms to BirdSend](https://wpfusion.com/connect/connect-fluent-forms-to-birdsend/)  \|
- [Connect Fluent Forms to Brevo](https://wpfusion.com/connect/connect-fluent-forms-to-brevo/)  \|
- [Connect Fluent Forms to Capsule](https://wpfusion.com/connect/connect-fluent-forms-to-capsule/)  \|
- [Connect Fluent Forms to Constant Contact](https://wpfusion.com/connect/connect-fluent-forms-to-constant-contact/)  \|
- [Connect Fluent Forms to ConvertKit](https://wpfusion.com/connect/connect-fluent-forms-to-convertkit/)  \|
- [Connect Fluent Forms to ConvesioConvert](https://wpfusion.com/connect/connect-fluent-forms-to-convesioconvert/)  \|
- [Connect Fluent Forms to Copper](https://wpfusion.com/connect/connect-fluent-forms-to-copper/)  \|
- [Connect Fluent Forms to Customer.io](https://wpfusion.com/connect/connect-fluent-forms-to-customer-io/)  \|
- [Connect Fluent Forms to Customerly](https://wpfusion.com/connect/connect-fluent-forms-to-customerly/)  \|
- [Connect Fluent Forms to Drip](https://wpfusion.com/connect/connect-fluent-forms-to-drip/)  \|
- [Connect Fluent Forms to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-fluent-forms-to-dynamics-365-marketing/)  \|
- [Connect Fluent Forms to EmailOctopus](https://wpfusion.com/connect/connect-fluent-forms-to-emailoctopus/)  \|
- [Connect Fluent Forms to EngageBay](https://wpfusion.com/connect/connect-fluent-forms-to-engagebay/)  \|
- [Connect Fluent Forms to Flexie](https://wpfusion.com/connect/connect-fluent-forms-to-flexie/)  \|
- [Connect Fluent Forms to FluentCRM](https://wpfusion.com/connect/connect-fluent-forms-to-fluentcrm/)  \|
- [Connect Fluent Forms to FunnelKit](https://wpfusion.com/connect/connect-fluent-forms-to-funnelkit/)  \|
- [Connect Fluent Forms to Gist](https://wpfusion.com/connect/connect-fluent-forms-to-gist/)  \|
- [Connect Fluent Forms to Groundhogg](https://wpfusion.com/connect/connect-fluent-forms-to-groundhogg/)  \|
- [Connect Fluent Forms to HighLevel](https://wpfusion.com/connect/connect-fluent-forms-to-highlevel/)  \|
- [Connect Fluent Forms to HubSpot](https://wpfusion.com/connect/connect-fluent-forms-to-hubspot/)  \|
- [Connect Fluent Forms to Infusionsoft](https://wpfusion.com/connect/connect-fluent-forms-to-infusionsoft/)  \|
- [Connect Fluent Forms to Intercom](https://wpfusion.com/connect/connect-fluent-forms-to-intercom/)  \|
- [Connect Fluent Forms to Jetpack CRM](https://wpfusion.com/connect/connect-fluent-forms-to-jetpack-crm/)  \|
- [Connect Fluent Forms to Kartra](https://wpfusion.com/connect/connect-fluent-forms-to-kartra/)  \|
- [Connect Fluent Forms to Keap](https://wpfusion.com/connect/connect-fluent-forms-to-keap/)  \|
- [Connect Fluent Forms to Klaviyo](https://wpfusion.com/connect/connect-fluent-forms-to-klaviyo/)  \|
- [Connect Fluent Forms to KlickTipp](https://wpfusion.com/connect/connect-fluent-forms-to-klicktipp/)  \|
- [Connect Fluent Forms to Loopify](https://wpfusion.com/connect/connect-fluent-forms-to-loopify/)  \|
- [Connect Fluent Forms to MailChimp](https://wpfusion.com/connect/connect-fluent-forms-to-mailchimp/)  \|
- [Connect Fluent Forms to MailerLite](https://wpfusion.com/connect/connect-fluent-forms-to-mailerlite/)  \|
- [Connect Fluent Forms to Mailjet](https://wpfusion.com/connect/connect-fluent-forms-to-mailjet/)  \|
- [Connect Fluent Forms to MailPoet](https://wpfusion.com/connect/connect-fluent-forms-to-mailpoet/)  \|
- [Connect Fluent Forms to Maropost](https://wpfusion.com/connect/connect-fluent-forms-to-maropost/)  \|
- [Connect Fluent Forms to Mautic](https://wpfusion.com/connect/connect-fluent-forms-to-mautic/)  \|
- [Connect Fluent Forms to NationBuilder](https://wpfusion.com/connect/connect-fluent-forms-to-nationbuilder/)  \|
- [Connect Fluent Forms to Omnisend](https://wpfusion.com/connect/connect-fluent-forms-to-omnisend/)  \|
- [Connect Fluent Forms to Ontraport](https://wpfusion.com/connect/connect-fluent-forms-to-ontraport/)  \|
- [Connect Fluent Forms to Ortto](https://wpfusion.com/connect/connect-fluent-forms-to-ortto/)  \|
- [Connect Fluent Forms to Pipedrive](https://wpfusion.com/connect/connect-fluent-forms-to-pipedrive/)  \|
- [Connect Fluent Forms to Platformly](https://wpfusion.com/connect/connect-fluent-forms-to-platformly/)  \|
- [Connect Fluent Forms to Quentn](https://wpfusion.com/connect/connect-fluent-forms-to-quentn/)  \|
- [Connect Fluent Forms to Salesflare](https://wpfusion.com/connect/connect-fluent-forms-to-salesflare/)  \|
- [Connect Fluent Forms to Salesforce](https://wpfusion.com/connect/connect-fluent-forms-to-salesforce/)  \|
- [Connect Fluent Forms to Sender](https://wpfusion.com/connect/connect-fluent-forms-to-sender/)  \|
- [Connect Fluent Forms to SendFox](https://wpfusion.com/connect/connect-fluent-forms-to-sendfox/)  \|
- [Connect Fluent Forms to Tubular](https://wpfusion.com/connect/connect-fluent-forms-to-tubular/)  \|
- [Connect Fluent Forms to User.com](https://wpfusion.com/connect/connect-fluent-forms-to-user-com/)  \|
- [Connect Fluent Forms to WP ERP](https://wpfusion.com/connect/connect-fluent-forms-to-wp-erp/)  \|
- [Connect Fluent Forms to Zoho](https://wpfusion.com/connect/connect-fluent-forms-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/lead-generation/fluent-forms/#overview)
- [Setup](https://wpfusion.com/documentation/lead-generation/fluent-forms/#setup)
- [Conditional tags](https://wpfusion.com/documentation/lead-generation/fluent-forms/#conditional-tags)
- [User registration](https://wpfusion.com/documentation/lead-generation/fluent-forms/#user-registration)
- [Syncing historical entries](https://wpfusion.com/documentation/lead-generation/fluent-forms/#syncing-historical-entries)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

[![a person with long, curly hair is pointing to a tablet displaying the text members only! with the wpfusion logo visible in the corner. the rooms decor hints at exclusivity, much like paywall content often seen on wordpress sites.](https://wpfusion.com/wp-content/uploads/2025/02/Screenshot-2025-02-04-at-15.04.42-300x167.png)](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Freemium or Paywall Content in WordPress](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

Create a Freemium Blog with paywall content! Emily uses Elementor to set up a template and shows us how to create an archive of paid content with WP Fusion. 🧡

### In this chapter

- [Caldera Forms](https://wpfusion.com/documentation/lead-generation/caldera-forms/ "Caldera Forms")
- [Contact Form 7](https://wpfusion.com/documentation/lead-generation/contact-form-7/ "Contact Form 7")
- [Convert Pro](https://wpfusion.com/documentation/lead-generation/convert-pro/ "Convert Pro")
- [Elementor Forms](https://wpfusion.com/documentation/lead-generation/elementor-forms/ "Elementor Forms")
- [Fluent Forms](https://wpfusion.com/documentation/lead-generation/fluent-forms/ "Fluent Forms")
- [Formidable Forms](https://wpfusion.com/documentation/lead-generation/formidable-forms/ "Formidable Forms")
- [Forminator](https://wpfusion.com/documentation/lead-generation/forminator/ "Forminator")
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/ "Gravity Forms")
- [Gravity PDF](https://wpfusion.com/documentation/lead-generation/gravity-pdf/ "Gravity PDF")
- [GravityView](https://wpfusion.com/documentation/lead-generation/gravityview/ "GravityView")
- [Ninja Forms](https://wpfusion.com/documentation/lead-generation/ninja-forms/ "Ninja Forms")
- [Piotnet Forms](https://wpfusion.com/documentation/lead-generation/piotnet-forms/ "Piotnet Forms")
- [SureForms](https://wpfusion.com/documentation/lead-generation/sureforms/ "SureForms")
- [Thrive Leads](https://wpfusion.com/documentation/lead-generation/thrive-leads/ "Thrive Leads")
- [WPForms](https://wpfusion.com/documentation/lead-generation/wpforms/ "WPForms")
- [WS Form](https://wpfusion.com/documentation/lead-generation/ws-form/ "WS Form")

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