---
url: "https://wpfusion.com/documentation/getting-started/tracking-user-activity/"
title: "Tracking User Activity | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#content)

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

# Tracking User Activity

- Published onFebruary 4, 2017
- Last updated on December 9, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Tracking User Activity

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#tracking-user-activity) Tracking User Activity

WP Fusion includes many options for tracking user and customer engagement with your site by applying tags in your CRM. Most of those options are available via the [various plugin integrations](https://wpfusion.com/documentation/#integrations), but there are a few global options as well.

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#meta-box) Meta Box

The WP Fusion [meta box](https://wpfusion.com/documentation/getting-started/meta-box/) that’s added to every post and page on your site includes an option to either apply or remove tags when that page is viewed.

This can be used to confirm when someone has viewed a page (like when a student starts a course), or to gauge interest in a piece of content by applying a tag after a delay— for example if a user looks at a product for longer than 10 seconds.

[![](https://wpfusion.com/wp-content/uploads/2017/02/meta-box-apply-tags-516x1024.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/meta-box-apply-tags-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#apply-tags) Apply tags

In this example we’ve configured the page to apply the tag _Webinar Interest_ if a user views the page for 10 seconds. This tag could then be used as a trigger to send a followup email from your CRM.

Note that if a page is restricted via WP Fusion, the tags will only be applied if the user has the correct permissions to view the page.

**Note:** The delay before applying tags relies on JavaScript, which means the tags will only be applied if the user _stays on the page_ for the specified period of time. If they leave or reload the page, the timer will be reset.

#### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#remove-tags) Remove tags

There is also an option for **Remove tags when a user views this page.** An example use case for this might be tagging someone as _Profile Incomplete_ when they register on your site, and then removing that tag when they view their profile page.

#### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#delay) Delay

You can specify a delay in milliseconds before any tags are applied or removed. In the screenshot above, 10,000 milliseconds equals 10 seconds.

#### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#apply-tags-after-x-visits) Apply tags after X visits

It’s also possible to apply tags only after a visitor has viewed a post a certain number of times.

Because this has the potential to fill up your database with a lot of tracking data, we don’t include it as part of WP Fusion core, but it’s available [via our custom snippets library here](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/#applies-a-tag-when-a-user-has-viewed-specific-posts-or-pages-more-than-x-times).

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#category-term-settings) Category / term settings

In the same way that you can apply tags whenever a single post or page is viewed, you can also set up any taxonomy term on your site to apply tags when a post with that term is viewed. That can be Categories, Post Tags, or a custom taxonomy.

These settings are accessed by editing any individual taxonomy term.

[![](https://wpfusion.com/wp-content/uploads/2017/02/apply-tags-term-viewed-1024x778.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/apply-tags-term-viewed.jpg)

In this example we have a post tag called “News”, and WP Fusion is configured to apply the tag _Viewed Post in Category “News”_ whenever any post with that post tag is viewed.

For more information on the rest of these settings see [the access control documentation](https://wpfusion.com/documentation/getting-started/access-control/#restricting-access-to-archives).

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#click-tracking) Click Tracking

WP Fusion includes an option where you can apply tags when a link, button, or any other HTML element is clicked. That’s covered in the [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/) documentation.

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#advanced-tracking) Advanced Tracking

WP Fusion also includes a JavaScript API that lets you apply tags and sync data to your CRM with your own JavaScript code. Using this you can create more complex setups such as tagging people based on progress in a video player or based on a quiz score. That’s covered in the [JavaScript API tutorial](https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/).

### [\#](https://wpfusion.com/documentation/getting-started/tracking-user-activity/\#site-tracking) Site tracking

With some CRMs that support page view tracking, WP Fusion bundles the scripts required to enable that functionality. When enabled, all page views are synced to your CRM. More info on that in the [Site Tracking documentation](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Tracking User Activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#tracking-user-activity)
- [Meta Box](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#meta-box)
- [Apply tags](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#apply-tags)
- [Remove tags](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#remove-tags)
- [Delay](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#delay)
- [Apply tags after X visits](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#apply-tags-after-x-visits)
- [Category / term settings](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#category-term-settings)
- [Click Tracking](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#click-tracking)
- [Advanced Tracking](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#advanced-tracking)
- [Site tracking](https://wpfusion.com/documentation/getting-started/tracking-user-activity/#site-tracking)

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