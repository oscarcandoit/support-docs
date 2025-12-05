---
url: "https://wpfusion.com/documentation/tutorials/link-click-tracking/"
title: "Link Click Tracking | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/link-click-tracking/#content)

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

# Link Click Tracking

- Published onNovember 21, 2016
- Last updated on August 28, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Link Click Tracking

### [\#](https://wpfusion.com/documentation/tutorials/link-click-tracking/\#overview) Overview

WP Fusion’s link click tracking feature lets you apply tags in your [CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when links (or other elements) are clicked on your website.

To apply or remove tags when a user visits a specific page on your site, the simplest method is to use our [meta box](https://wpfusion.com/documentation/getting-started/meta-box/) in the page settings to configure the tags to apply / remove.

However, you may want to track engagement with external links, file downloads, or other buttons that don’t qualify as separate pages. You can do so using this feature.

### [\#](https://wpfusion.com/documentation/tutorials/link-click-tracking/\#setup) Setup

First enable the feature from the Advanced section of the general WP Fusion settings tab.

![link-tracking](https://wpfusion.com/wp-content/uploads/2016/11/link-tracking-1024x199.jpg)

When creating your links, switch into the “Text” mode of the editor, and structure your link HTML like the following:

`<a href="http://externalsite.com/" data-apply-tags="Tag One, Tag Two">Click Me</a>`

When the link is clicked, the tags will automatically be applied to the user.

To remove tags when a link or button is clicked, use the following:

`<a href="http://externalsite.com/" data-remove-tags="Tag One, Tag Two">Click Me</a>`

#### [\#](https://wpfusion.com/documentation/tutorials/link-click-tracking/\#other-elements) Other Elements

You can also use link click tracking on other elements. For example, to apply a tag when a form is submitted, add the `data-apply-tags` parameter to the submit button like so:

`<input type="submit" value="Submit" data-apply-tags="123,456">`

The `data-apply-tags` attribute can be added to any HTML element.

### [\#](https://wpfusion.com/documentation/tutorials/link-click-tracking/\#with-elementor-pro) With Elementor Pro

Elementor Pro allows you to specify data attributes for any element, which means WP Fusion’s tracking can be used to track clicks. This setting can be found on the Advanced tab while editing any element.

[![](https://wpfusion.com/wp-content/uploads/2016/11/elementor-click-tracking.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/elementor-click-tracking.jpg)

Just enter `data-apply-tags` followed by a pipe `|` and then a comma-separated list of the tags you’d like applied when the element is clicked. For removing tags, use `data-remove-tags`.

### [\#](https://wpfusion.com/documentation/tutorials/link-click-tracking/\#with-gutenberg) With Gutenberg

With the Gutenberg editor, we recommend the [Attributes for Blocks plugin](https://wordpress.org/plugins/attributes-for-blocks/) for adding the data-apply-tags attribute to buttons or other blocks.

[![a wordpress page editor displays a “tell your story” heading, a text block with editing tools, a “learn more” button, and a sidebar highlighting the “data apy tags” text field for easy link click tracking setup.](https://wpfusion.com/wp-content/uploads/2016/11/attributes-for-blocks-1024x505.png)](https://wpfusion.com/wp-content/uploads/2016/11/attributes-for-blocks.png)

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/link-click-tracking/#overview)
- [Setup](https://wpfusion.com/documentation/tutorials/link-click-tracking/#setup)
- [Other Elements](https://wpfusion.com/documentation/tutorials/link-click-tracking/#other-elements)
- [With Elementor Pro](https://wpfusion.com/documentation/tutorials/link-click-tracking/#with-elementor-pro)
- [With Gutenberg](https://wpfusion.com/documentation/tutorials/link-click-tracking/#with-gutenberg)

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