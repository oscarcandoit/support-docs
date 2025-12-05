---
url: "https://wpfusion.com/documentation/getting-started/syncing-contact-fields/"
title: "Syncing Contact Fields | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#content)

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

# Syncing Contact Fields

- Published onJanuary 3, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Syncing Contact Fields

### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#overview) Overview

In addition to applying tags in your CRM, a core feature of WP Fusion is the ability to sync data bidirectionally between WordPress user records and CRM contact records.

This is managed from the Contact Fields tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-1-1024x722.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-1-scaled.jpg)

**In the left column** are all the fields that WP Fusion has detected in WordPress. To help finding fields easier these are grouped into collapsable sections based on the plugin that registered the field.

**In the right column** are dropdowns where you can select a corresponding custom field in your CRM.

**Note:** If you’ve just added a new custom field in your CRM, it may not appear in the dropdown of available fields. Begin typing the name of the new field, and if no matches are found, click the “Resynchronize” link that appears in the dropdown. The new custom field will be loaded from the CRM and you should see it appear once you re-type the name.

### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#which-fields-are-available) Which fields are available

The fields that are available for sync depend on the plugins you have installed. Each of WP Fusion’s [plugin integrations](https://wpfusion.com/documentation/#integrations) has the ability to detect the fields for that plugin.

The fields WP Fusion can sync with your CRM relate to a specific user on your site, not a custom post type or other related content.

Generally these would be **standard fields** (like _Billing Address_ with [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/)), as well as **custom fields** (for example custom fields you’ve added to a registration form using [Ultimate Member](https://wpfusion.com/documentation/membership/ultimate-member/)).

In addition to that, WP Fusion will scan the database (the `wp_usermeta` table) for your own admin user to try and find any other fields that might not have been detected, or might come from a plugin we don’t officially support. These will be listed at the bottom of the Contact Fields list in [the Additional Fields section](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#additional-fields).

**Note:** If you are trying to sync fields from a plugin that WP Fusion doesn’t have an integration with, it’s recommended to enable Push All on the Advanced settings tab. This will tell WP Fusion to directly watch the database for any changes to user meta that might need to be synced.

#### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#previous-user-email) Previous user email

In addition to the core WordPress fields, WP Fusion can sync a user’s _previous_ email address to your CRM when the email address on their account is changed.

To enable this, enable the **Previous User Email** field for sync by mapping it to a custom field in your CRM.

_Do not_ map the **Previous User Email** field to the standard **Email** field in your CRM, or this will prevent email address changes from being synced to your CRM, which could cause your users to lose their tags and access when they change their email address.

The previous email field is useful for sending out automated email address change notifications, as well as creating a task to check for conflicting contact records in your CRM after email address updates.

#### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#pseudo-fields) Pseudo-fields

With some plugins, WP Fusion has been designed to sync some **pseudo fields** with your CRM. These are fields that don’t exist in any one place in your database, but WP Fusion can calculate them and sync them as part of a specific process, for example a checkout or membership level status change.

Some examples:

- [WooCommerce order data](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-fields)
- [LearnDash course progress](https://wpfusion.com/documentation/learning-management/learndash/#meta-fields)
- [MemberPress current membership details](https://wpfusion.com/documentation/membership/memberpress/#additional-memberpress-fields)

If the data you’re trying to sync with your CRM isn’t related to a specific user, or is coming from a plugin not currently supported by WP Fusion, you can also extend WP Fusion to detect and sync additional fields. For more info on that, [see this tutorial](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/).

#### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#additional-fields) Additional Fields

At the bottom of the Contact Fields list is a section called **Additional Fields**.

This contains any meta fields that were found in your database but aren’t associated with a particular plugin integration.

**Note:** To build the list of Additional Fields, for performance reasons WP Fusion only scans the usermeta of your own admin user. If you’ve just added a new field and it’s not showing, try saving some data in that field for your own admin user.

For the most part you can leave this section alone, but if you’re trying to sync data to your CRM from a plugin that WP Fusion doesn’t have an official integration with, you may find the field keys here.

[![](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-additional-1024x439.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-additional-scaled.jpg)

If you’re not using the Additional Fields you can hide them completely by checking the box for **Hide Additional Fields** on the Advanced settings tab.

If you’re a developer and are creating custom registration or profile forms, you can also type in new field keys into the _Add new field_ line. The field you enter here should match the input name on your form. When the form is submitted, if WP Fusion detects an input with the matching name, then the value will be synced to the corresponding field in your CRM.

By default any enabled Additional Fields will only be synced if those fields are found on a submitted profile form.

If you find the fields aren’t syncing, you can enable **Push All** from the Advanced settings tab. This causes WP Fusion to run on the `added_user_meta` and `updated_user_meta` hooks, and will also sync the field values any time those keys are updated in the `wp_usermeta` table.

### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#how-data-is-synced) How data is synced

WP Fusion can either “push” data from WordPress to your CRM, or “pull” data from your CRM to WordPress.

A “push” happens when someone registers a user account, updates their profile, or a [batch operation](https://wpfusion.com/documentation/tutorials/batch-operations/) is run. Any available WordPress fields from the left column are synced to their corresponding CRM custom fields from the right column.

A “pull” can happen in a few scenarios:

- When a [webhook](https://wpfusion.com/documentation/#webhooks) is received
- When someone logs in and **Login Meta Sync** is enabled
- When a page is loaded that has the \[\[wpf\_update\_meta\]\] [shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/) on it

When that happens any fields that are enabled in the right column on the Contact Fields list are loaded via an API call and saved to their corresponding WordPress fields in the database.

**Note:** By default WP Fusion will not send an empty field to your CRM, or load an empty field from your CRM into WordPress. This is to avoid overwriting any valid data with a blank value. This can be overridden by setting the field type to `raw` in the dropdown.

#### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#field-types) Field types

For each field there is a **Type** dropdown where you can tell WP Fusion how to treat the data in that field. These are detected automatically for most plugin integrations and don’t usually need to be changed, but if needed you can click on the type and select a new type from a dropdown to override the defaults.

[![](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-types-1024x458.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/settings-contact-fields-types-scaled.jpg)

Generally _text_ type fields are the most compatible. What the other types do depend on your connected CRM. For example:

- If a field type is set to _checkbox_ then the value will be converted to a boolean “true” or “false” when the API call is sent to supported CRMs.
- If a field type is set to _multiselect_ then array-formatted data sent to ActiveCampaign will be separated with pipes \|\| to properly update ActiveCampaign list box and checkbox fields.
- If a field type is set to _country_ then a country abbreviation will be sent to your CRM, which is compatible with the Country dropdowns in Infusionsoft, Mautic, and others. If it’s set to _text_ the full country name will be sent instead.
- If a field type is set to _date_ then a date sent to HubSpot will be converted to a Unix timestamp to properly update a HubSpot datepicker field.
- If a field type is set to _raw_ then WP Fusion will not perform any additional checks or formatting on the field data. Fields set to _raw_ will also be synced to your CRM even if they are empty, which has a potential for data loss.

### [\#](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/\#dynamic-tagging) Dynamic Tagging

With [some platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/), WP Fusion can dynamically convert a user meta value into tags in the CRM. To set this up, select **Create tag(s) from value** from any **Select a field** dropdown.

When WP Fusion goes to sync the metadata to your CRM, it will convert the value into a tag. If the value is in an array format (like a multiselect or checkboxes field), then the selected values will be converted into multiple tags.

This should be _used with caution_ as it can result in WP Fusion generating many hundreds or thousands of new tags.

For a list of platforms that support dynamic tagging, see the column **Add New Tags in WordPress** on the [CRM Compatibility Table](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#overview)
- [Which fields are available](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#which-fields-are-available)
- [Previous user email](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#previous-user-email)
- [Pseudo-fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#pseudo-fields)
- [Additional Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#additional-fields)
- [How data is synced](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#how-data-is-synced)
- [Field types](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#field-types)
- [Dynamic Tagging](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#dynamic-tagging)

### You may also like

[![illustration of a wordpress dashboard with icons for users, wp fusion, and social sharing, highlighting website management, user registration options, and community features on a light blue background.](https://wpfusion.com/wp-content/uploads/2025/08/user-registration-wordpress-1-300x158.jpg)](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

Tutorials

![Jessica Kavalec-Miller](https://secure.gravatar.com/avatar/4e76056caa8ec553ba2fafd20efed7263899fac12dab8472f96d36043e7f225a?s=128&d=mm&r=g)

#### [Four User Registration Options in WordPress and How to Integrate them with WP Fusion](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

If you’re new to establishing your online presence with your website, having user registration capabilities is a step forward in the right direction.

In this post, we’ll go over what user registration is and its benefits, and how you can enable it on your website using no plugins or with

### In this chapter

- [Activity Logs](https://wpfusion.com/documentation/getting-started/activity-logs/ "Activity Logs")
- [Displaying CRM Data in WordPress](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/ "Displaying CRM Data in WordPress")
- [General Settings and Basic Setup](https://wpfusion.com/documentation/getting-started/general-settings/ "General Settings and Basic Setup")
- [Installation Guide](https://wpfusion.com/documentation/getting-started/installation-guide/ "Installation Guide")
- [Restricting Access to Content](https://wpfusion.com/documentation/getting-started/access-control/ "Restricting Access to Content")
- [Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/ "Shortcodes")
- [Showing and Hiding Widgets](https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/ "Showing and Hiding Widgets")
- [Syncing Contact Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/ "Syncing Contact Fields")
- [Tracking User Activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/ "Tracking User Activity")
- [Working with Tags](https://wpfusion.com/documentation/getting-started/working-with-tags/ "Working with Tags")

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