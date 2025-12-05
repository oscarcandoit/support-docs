---
url: "https://wpfusion.com/documentation/tutorials/menu-item-visibility/"
title: "Menu Item Visibility | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#content)

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

# Menu Item Visibility

- Published onMarch 30, 2018
- Last updated on June 7, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Menu Item Visibility

### [\#](https://wpfusion.com/documentation/tutorials/menu-item-visibility/\#automatically-hide-restricted-items) Automatically Hide Restricted Items

You may want to control visibility of WordPress menu items using CRM tags, with WP Fusion.

For example:

- Only show the _Purchase History_ menu item for users who have the _Customer_ tag
- Only show the _Courses_ menu item for users who have the _Active Membership_ tag
- Only show the _My Downloads_ menu item for users with the _Free Download Optin_ tag

The easiest way to do this is to go to the WP Fusion settings and check the box for **Hide From Menus**.

[![](https://wpfusion.com/wp-content/uploads/2018/03/hide-from-menus-1024x339.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/hide-from-menus-scaled.jpg)

This will automatically hide any menu items that a user doesn’t have access to, based on the [access rules](https://wpfusion.com/documentation/getting-started/access-control/) configured for that page.

We prefer hiding menu items using the **Hide From Menus** setting because there is only only place to configure the access rules, on the post / page itself. If the user doesn’t have access to the post, then it’s automatically hidden from the menu.

However, if you need to configure menu item visibility independently from the access rules from the underlying content, you can use per-item menu visibility.

### [\#](https://wpfusion.com/documentation/tutorials/menu-item-visibility/\#per-item-menu-visibility) Per-Item Menu Visibility

WP Fusion also lets you control the visibility of individual menu items using a user’s CRM tags. These settings can be found in the menu editor in the WordPress admin while editing any single menu item.

[![](https://wpfusion.com/wp-content/uploads/2018/03/menu-visibility.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/menu-visibility.jpg)

The _Who can see this menu link?_ dropdown has three options:

- **Everyone:** Everyone will be able to see this menu item (bypasses access restrictions).
- **Logged In Users:** Only logged-in users will be able to see the menu item. You can also specify any number of CRM tags that are required to see the item.
- **Logged Out Users:** The menu item will be hidden from logged-in users and only shown to guests.

#### [\#](https://wpfusion.com/documentation/tutorials/menu-item-visibility/\#advanced-usage) Advanced usage

For more advanced per-item menu visibility controls, install the free [User Menus plugin](https://wordpress.org/plugins/user-menus/).

This will unlock additional options for controlling menu item visibility based on user role, as well as _Required Tags (all)_ and _Required Tags (not)_.

[![](https://wpfusion.com/wp-content/uploads/2018/03/user-menus-additional-settings-765x1024.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/user-menus-additional-settings.jpg) Installing the [User Menus](https://wordpress.org/plugins/user-menus/) plugin unlocks additional options for menu item visibility.

You can also enable the “Required tags (all)” and “Required tags (not)” settings without installing User Menus by adding this line to your functions.php file.

```php
add_filter( 'wpf_show_additional_menu_item_settings', '__return_true' );
```

#### [\#](https://wpfusion.com/documentation/tutorials/menu-item-visibility/\#disabling) Disabling

If the WP Fusion Menu Settings are slowing down the admin menu editor for you, you can disable that feature by un-checking the box for **Menu Item Visibility** at Settings » WP Fusion » Advanced » Interfaces and Settings.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Automatically Hide Restricted Items](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#automatically-hide-restricted-items)
- [Per-Item Menu Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#per-item-menu-visibility)
- [Advanced usage](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#advanced-usage)
- [Disabling](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#disabling)

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