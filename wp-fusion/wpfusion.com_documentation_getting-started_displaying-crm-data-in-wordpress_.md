---
url: "https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/"
title: "Displaying CRM Data in WordPress | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#content)

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

# Displaying CRM Data in WordPress

- Published onJuly 15, 2020
- Last updated on February 13, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Displaying CRM Data in WordPress

### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#overview) Overview

With WP Fusion it’s possible to display data from [your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) in WordPress, allowing you to personalize your site for logged-in users using data from their CRM contact record.

For example:

> Welcome back, your next exam date is **9/9/2020**.

Or

> Your assigned advisor is **Jim Jones**, your learning style is **Auditory**.

### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#shortcodes) Shortcodes

Using WP Fusion’s [user\_meta shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-user-meta), you can display any data in your site’s database for the current user.

You can see all the available meta field keys on the Contact Fields list in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-1-1024x513.jpg)](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-1.jpg)

The keys in the **Meta Field** column can be used to display a user’s data without any extra steps. For example to display the current user’s first name, the shortcode would be

```
[user_meta field="first_name"]
```

However, you may have data that only exists in your CRM, not in WordPress. To display that data, you’ll first have to create a place to store the data in WordPress, and then use WP Fusion to load the data from your CRM.

**Note:** While it might sound more convenient to load the data from your CRM every time the page is displayed, this actually can introduce performance problems if you have a lot of users on your site, since an API call needs to be made on every page load. For that reason it’s better to use WP Fusion to load the data into WordPress first, where it can be displayed without requiring an external API call.

### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#managing-custom-fields) Managing custom fields

Before WP Fusion can load a custom field from your CRM, it needs a place to store the data on your site. For an overview on how data is synced between WordPress and your CRM, see [the Syncing Contact Fields documentation](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

An easy way to create a new field is to use a plugin that lets you manage custom fields for users, such as [User Meta Pro](https://wpfusion.com/documentation/membership/user-meta/), or [Advanced Custom Fields](https://wpfusion.com/documentation/other/advanced-custom-fields/). Or if you’re using a membership plugin like BuddyPress or MemberPress, these plugins have options for managing profile fields.

Once you’ve created a field to store your custom data, locate it on the Contact Fields list in the WP Fusion settings, and select a corresponding field in your CRM to enable the field for sync.

[![](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-2-1024x221.jpg)](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-2.jpg)

In this case, we’ve used User Meta Pro to create a field with key `new_user_meta_field`, and linked it to the Test Custom Field Two field in ActiveCampaign.

#### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#managing-custom-fields-without-a-plugin) Managing custom fields without a plugin

It’s also possible to register a new field in your database using just WP Fusion. Scroll down to the bottom of the Contact Fields list, and in the Additional Fields section, enter a unique key for the new field.

[![](https://wpfusion.com/wp-content/uploads/2020/07/contact-fields-add-new-1024x344.jpg)](https://wpfusion.com/wp-content/uploads/2020/07/contact-fields-add-new.jpg)

Select a corresponding custom field in your CRM from the dropdown on the right, and save the settings to enable the new field for sync.

### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#loading-the-data) Loading the data

Now that you have the custom field created and linked with the corresponding CRM field, you need to load the data into WordPress. There are a few ways to do this:

- **Pull user meta:** From the Advanced tab in the WP Fusion settings you can run a Pull User Meta operation, which will load any enabled fields from your CRM into WordPress for all your users. [More info on that here](https://wpfusion.com/documentation/tutorials/exporting-data/#pull-user-meta).
- **Webhooks:** If you’re updating the custom field in your CRM over time, you can create an automation that sends a webhook back to WP Fusion when a contact has been modified, using the `?wpf_action=update` method. This will load the updated values for that specific contact, and they can be displayed in WordPress. [More info on webhooks here](https://wpfusion.com/documentation/#webhooks).
- **User meta shortcode:** By using the `[user_meta]` shortcode with [the parameter](https://wpfusion.com/documentation/getting-started/shortcodes/#sync-if-empty)`sync_if_empty="true"`, WP Fusion will connect to your CRM one time to load updated data for that field in case it encounters an empty value in WordPress.
- **Update meta shortcode:** The [\[wpf\_update\_meta\] shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#updating-data) can also be used to refresh the current user’s stored metadata from their CRM contact record when a page is viewed. To use the shortcode, put it above any `[user_meta]` shortcodes on the page so the data has been loaded by the time those shortcodes are executed. Note that the `[wpf_update_meta]` shortcode will slow down the page load by a few seconds, so it’s recommended to use it sparingly.
- **Update meta URL parameter:** You can append `?wpf-refresh=meta` to any URL on your site to force-load the user’s custom fields from your CRM. For more information, [see the shortcodes documentation](https://wpfusion.com/documentation/getting-started/shortcodes/#via-url).
- **Login meta sync:** You also have an option to load a user’s metadata from your CRM each time they log in, by enabling the option for [Login Meta Sync](https://wpfusion.com/documentation/getting-started/general-settings/#login-meta-sync).

### [\#](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/\#testing) Testing

Whichever method you use to load the data, the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) will show the data being loaded from your CRM into the user’s metadata in WordPress.

[![](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-3-1024x334.jpg)](https://wpfusion.com/wp-content/uploads/2020/07/displaying-user-meta-3.jpg)

In this case, the `new_user_meta_field` we created earlier has loaded a value of `http://test.com` from ActiveCampaign.

Now if we use the \[user\_meta\] shortcode, that value can be output on a page. For example

```
Your personalized results can be found at [user_meta field="new_user_meta_field"]
```

Would be output as

> Your personalized results can be found at **http://test.com**.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#overview)
- [Shortcodes](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#shortcodes)
- [Managing custom fields](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#managing-custom-fields)
- [Managing custom fields without a plugin](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#managing-custom-fields-without-a-plugin)
- [Loading the data](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#loading-the-data)
- [Testing](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/#testing)

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