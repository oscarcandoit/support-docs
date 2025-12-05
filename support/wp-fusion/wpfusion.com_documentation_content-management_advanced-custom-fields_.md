---
url: "https://wpfusion.com/documentation/content-management/advanced-custom-fields/"
title: "Connect Advanced Custom Fields to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#content)

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

# Advanced Custom Fields

- Published onJanuary 28, 2016
- Last updated on March 14, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Content Management](https://wpfusion.com/documentation/#content-management)
- /
- Advanced Custom Fields

### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#overview) Overview

WP Fusion can detect user fields created with [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/) and sync field data to your CRM of choice when a user profile is updated.

The sync of data is bi-directional, so WP Fusion can also load data from your CRM into fields created with Advanced Custom Fields.

### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#setup-in-advanced-custom-fields) Setup in Advanced Custom Fields

To create user fields in Advanced Custom Fields, navigate to Custom Fields » Field Groups » Add New. Add your fields, and make sure that the location rules are set to display the fields on **User Form.**

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-1-1024x333.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-1.jpg) Your ACF custom fields must be set to display on the User Form to be synced with WP Fusion.

After saving your field group, you should now see your fields when editing any WordPress user in the admin.

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-2-1024x384.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-2.jpg)

### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#setup-in-wp-fusion) Setup in WP Fusion

Head to Settings » WP Fusion » Contact Fields, and scroll down to the **Advanced Custom Fields** header:

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-3-1024x349.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-3.jpg)

For each ACF user field, you’ll see the field name and field key in your database. In the right column you can select a corresponding field in your CRM from the dropdown.

When the user’s profile is updated, WP Fusion will sync the field value from WordPress to the selected custom field in your CRM.

For more information on syncing contact fields, [see this page](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#field-types) Field types

Generally, the field value synced to your CRM is the value you see when editing the field in the admin. There are a few exceptions to this:

- **Dates:** Date fields will always use the “Return Value” format configured on the ACF field.
- **Images:** Image fields will always sync the “Return Value” configured on the field. For best compatibility it’s recommended to use **Image URL**.
- **Relationships:** ACF normally stores relationship fields as an array of post IDs. WP Fusion will automatically run a `get_the_title()` on each ID so that an array of post titles is synced to the CRM.
- **Users:** If you’re using a User field with the _Multiple_ option enabled, and the field type is set to _Relationship_ in the Contact Fields settings, WP Fusion will convert each of the user IDs to the users’ full names for sync.

#### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#repeaters-and-flexible-content) **Repeaters and Flexible Content**

None of the CRMs WP Fusion integrate with have a true “repeater”-type field that can be synced directly from ACF. However WP Fusion is still capable of syncing repeater data (or flexible content data) to your CRM in a limited fashion.

For example, here we have a repeater, called `repeater`, with a single subfield for `color_option`:

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-setup-1024x615.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-setup.jpg)

Each subfield in a repeater will show up as a single field for sync in the WP Fusion settings.

The meta key is the repeater name, plus the subfield name. In this case, `repeater_color_option`.

The field format will be set to `multiselect` by default.

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeaters-in-settings-1024x235.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeaters-in-settings.jpg)

Then we can add some colors to the repeater on the admin user profile:

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-fields-on-user-1024x350.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-fields-on-user.jpg)

When the profile is saved, all of the repeater “rows” for the `color_option` field are combined into a multiselect format and synced as `repeater_color_option`.

In [the logs](https://wpfusion.com/documentation/getting-started/activity-logs/) this looks like:

[![](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-synced-in-logs-1024x400.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/acf-repeater-synced-in-logs.jpg)

And in the CRM (in this case ActiveCampaign), the multi-checkbox field is updated so that those four colors are selected.

Using this, you can create one custom multi-select (or checkboxes / picklist) field in your CRM for each sub-field in your ACF repeater, and the custom field will be updated with the combined values of the repeater sub-fields when the user’s profile is updated.

### [\#](https://wpfusion.com/documentation/content-management/advanced-custom-fields/\#fontend-forms) Fontend forms

WP Fusion can also sync ACF user profile updates from forms on the frontend of your site. WP Fusion includes compatibility for the [Advanced Forms Pro](https://hookturn.io/downloads/advanced-forms-pro/) and [ACF Frontend](https://wordpress.org/plugins/acf-frontend-form-element/) plugins.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Advanced Custom Fields to ActiveCampaign](https://wpfusion.com/connect/connect-advanced-custom-fields-to-activecampaign/)  \|
- [Connect Advanced Custom Fields to AgileCRM](https://wpfusion.com/connect/connect-advanced-custom-fields-to-agilecrm/)  \|
- [Connect Advanced Custom Fields to Autopilot](https://wpfusion.com/connect/connect-advanced-custom-fields-to-autopilot/)  \|
- [Connect Advanced Custom Fields to Bento](https://wpfusion.com/connect/connect-advanced-custom-fields-to-bento/)  \|
- [Connect Advanced Custom Fields to BirdSend](https://wpfusion.com/connect/connect-advanced-custom-fields-to-birdsend/)  \|
- [Connect Advanced Custom Fields to Brevo](https://wpfusion.com/connect/connect-advanced-custom-fields-to-brevo/)  \|
- [Connect Advanced Custom Fields to Capsule](https://wpfusion.com/connect/connect-advanced-custom-fields-to-capsule/)  \|
- [Connect Advanced Custom Fields to Constant Contact](https://wpfusion.com/connect/connect-advanced-custom-fields-to-constant-contact/)  \|
- [Connect Advanced Custom Fields to ConvertKit](https://wpfusion.com/connect/connect-advanced-custom-fields-to-convertkit/)  \|
- [Connect Advanced Custom Fields to ConvesioConvert](https://wpfusion.com/connect/connect-advanced-custom-fields-to-convesioconvert/)  \|
- [Connect Advanced Custom Fields to Copper](https://wpfusion.com/connect/connect-advanced-custom-fields-to-copper/)  \|
- [Connect Advanced Custom Fields to Customer.io](https://wpfusion.com/connect/connect-advanced-custom-fields-to-customer-io/)  \|
- [Connect Advanced Custom Fields to Customerly](https://wpfusion.com/connect/connect-advanced-custom-fields-to-customerly/)  \|
- [Connect Advanced Custom Fields to Drip](https://wpfusion.com/connect/connect-advanced-custom-fields-to-drip/)  \|
- [Connect Advanced Custom Fields to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-advanced-custom-fields-to-dynamics-365-marketing/)  \|
- [Connect Advanced Custom Fields to EmailOctopus](https://wpfusion.com/connect/connect-advanced-custom-fields-to-emailoctopus/)  \|
- [Connect Advanced Custom Fields to EngageBay](https://wpfusion.com/connect/connect-advanced-custom-fields-to-engagebay/)  \|
- [Connect Advanced Custom Fields to Flexie](https://wpfusion.com/connect/connect-advanced-custom-fields-to-flexie/)  \|
- [Connect Advanced Custom Fields to FluentCRM](https://wpfusion.com/connect/connect-advanced-custom-fields-to-fluentcrm/)  \|
- [Connect Advanced Custom Fields to FunnelKit](https://wpfusion.com/connect/connect-advanced-custom-fields-to-funnelkit/)  \|
- [Connect Advanced Custom Fields to Gist](https://wpfusion.com/connect/connect-advanced-custom-fields-to-gist/)  \|
- [Connect Advanced Custom Fields to Groundhogg](https://wpfusion.com/connect/connect-advanced-custom-fields-to-groundhogg/)  \|
- [Connect Advanced Custom Fields to HighLevel](https://wpfusion.com/connect/connect-advanced-custom-fields-to-highlevel/)  \|
- [Connect Advanced Custom Fields to HubSpot](https://wpfusion.com/connect/connect-advanced-custom-fields-to-hubspot/)  \|
- [Connect Advanced Custom Fields to Infusionsoft](https://wpfusion.com/connect/connect-advanced-custom-fields-to-infusionsoft/)  \|
- [Connect Advanced Custom Fields to Intercom](https://wpfusion.com/connect/connect-advanced-custom-fields-to-intercom/)  \|
- [Connect Advanced Custom Fields to Jetpack CRM](https://wpfusion.com/connect/connect-advanced-custom-fields-to-jetpack-crm/)  \|
- [Connect Advanced Custom Fields to Kartra](https://wpfusion.com/connect/connect-advanced-custom-fields-to-kartra/)  \|
- [Connect Advanced Custom Fields to Keap](https://wpfusion.com/connect/connect-advanced-custom-fields-to-keap/)  \|
- [Connect Advanced Custom Fields to Klaviyo](https://wpfusion.com/connect/connect-advanced-custom-fields-to-klaviyo/)  \|
- [Connect Advanced Custom Fields to KlickTipp](https://wpfusion.com/connect/connect-advanced-custom-fields-to-klicktipp/)  \|
- [Connect Advanced Custom Fields to Loopify](https://wpfusion.com/connect/connect-advanced-custom-fields-to-loopify/)  \|
- [Connect Advanced Custom Fields to MailChimp](https://wpfusion.com/connect/connect-advanced-custom-fields-to-mailchimp/)  \|
- [Connect Advanced Custom Fields to MailerLite](https://wpfusion.com/connect/connect-advanced-custom-fields-to-mailerlite/)  \|
- [Connect Advanced Custom Fields to Mailjet](https://wpfusion.com/connect/connect-advanced-custom-fields-to-mailjet/)  \|
- [Connect Advanced Custom Fields to MailPoet](https://wpfusion.com/connect/connect-advanced-custom-fields-to-mailpoet/)  \|
- [Connect Advanced Custom Fields to Maropost](https://wpfusion.com/connect/connect-advanced-custom-fields-to-maropost/)  \|
- [Connect Advanced Custom Fields to Mautic](https://wpfusion.com/connect/connect-advanced-custom-fields-to-mautic/)  \|
- [Connect Advanced Custom Fields to NationBuilder](https://wpfusion.com/connect/connect-advanced-custom-fields-to-nationbuilder/)  \|
- [Connect Advanced Custom Fields to Omnisend](https://wpfusion.com/connect/connect-advanced-custom-fields-to-omnisend/)  \|
- [Connect Advanced Custom Fields to Ontraport](https://wpfusion.com/connect/connect-advanced-custom-fields-to-ontraport/)  \|
- [Connect Advanced Custom Fields to Ortto](https://wpfusion.com/connect/connect-advanced-custom-fields-to-ortto/)  \|
- [Connect Advanced Custom Fields to Pipedrive](https://wpfusion.com/connect/connect-advanced-custom-fields-to-pipedrive/)  \|
- [Connect Advanced Custom Fields to Platformly](https://wpfusion.com/connect/connect-advanced-custom-fields-to-platformly/)  \|
- [Connect Advanced Custom Fields to Quentn](https://wpfusion.com/connect/connect-advanced-custom-fields-to-quentn/)  \|
- [Connect Advanced Custom Fields to Salesflare](https://wpfusion.com/connect/connect-advanced-custom-fields-to-salesflare/)  \|
- [Connect Advanced Custom Fields to Salesforce](https://wpfusion.com/connect/connect-advanced-custom-fields-to-salesforce/)  \|
- [Connect Advanced Custom Fields to Sender](https://wpfusion.com/connect/connect-advanced-custom-fields-to-sender/)  \|
- [Connect Advanced Custom Fields to SendFox](https://wpfusion.com/connect/connect-advanced-custom-fields-to-sendfox/)  \|
- [Connect Advanced Custom Fields to Tubular](https://wpfusion.com/connect/connect-advanced-custom-fields-to-tubular/)  \|
- [Connect Advanced Custom Fields to User.com](https://wpfusion.com/connect/connect-advanced-custom-fields-to-user-com/)  \|
- [Connect Advanced Custom Fields to WP ERP](https://wpfusion.com/connect/connect-advanced-custom-fields-to-wp-erp/)  \|
- [Connect Advanced Custom Fields to Zoho](https://wpfusion.com/connect/connect-advanced-custom-fields-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#overview)
- [Setup in Advanced Custom Fields](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#setup-in-advanced-custom-fields)
- [Setup in WP Fusion](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#setup-in-wp-fusion)
- [Field types](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#field-types)
- [**Repeaters and Flexible Content**](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#repeaters-and-flexible-content)
- [Fontend forms](https://wpfusion.com/documentation/content-management/advanced-custom-fields/#fontend-forms)

### In this chapter

- [Advanced Custom Fields](https://wpfusion.com/documentation/content-management/advanced-custom-fields/ "Advanced Custom Fields")
- [Download Manager](https://wpfusion.com/documentation/content-management/download-manager/ "Download Manager")
- [Download Monitor](https://wpfusion.com/documentation/content-management/download-monitor/ "Download Monitor")
- [FacetWP](https://wpfusion.com/documentation/content-management/facetwp/ "FacetWP")
- [If Menu](https://wpfusion.com/documentation/content-management/if-menu/ "If Menu")
- [If-So](https://wpfusion.com/documentation/content-management/if-so/ "If-So")
- [JetEngine](https://wpfusion.com/documentation/content-management/jetengine/ "JetEngine")
- [Meta Box](https://wpfusion.com/documentation/content-management/meta-box/ "Meta Box")
- [Toolset Types](https://wpfusion.com/documentation/content-management/toolset-types/ "Toolset Types")
- [WP All Import](https://wpfusion.com/documentation/content-management/wp-all-import/ "WP All Import")

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