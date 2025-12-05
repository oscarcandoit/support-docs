---
url: "https://wpfusion.com/documentation/faq/misc-faq/"
title: "Misc. FAQ | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/faq/misc-faq/#content)

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

# Misc. FAQ

- Published onNovember 11, 2018
- Last updated on June 28, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Misc. FAQ

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#can-i-generate-an-invoice-provide-my-vat-number) Can I generate an invoice / provide my VAT number?

Yes you can generate an invoice within [your account area](https://wpfusion.com/account/) on our site. In the Purchases & Subscriptions section click _Generate Invoice_ next to your order, and you’ll be able to provide your invoice details.

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#does-wp-fusion-work-on-wordpress-multisite) Does WP Fusion work on WordPress multisite?

Yes, WP Fusion works on multisite WordPress installs. It is installed and configured at the site level, not the network level.

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#is-wp-fusion-gdpr-compliant) Is WP Fusion GDPR compliant?

Yes! Unlike third-party integration tools like Zapier, WP Fusion integrates your WordPress website _directly_ with your CRM over your CRM’s API.

That means no data is stored on or passes through our servers at any time. All data is securely encrypted and sent directly to your CRM.

Please note that if you are using a platform that supports [site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/), you will need to obtain permission from your visitors before tracking their page views.

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#can-i-connect-wp-fusion-to-multiple-crms) Can I connect WP Fusion to multiple CRMs?

The short answer is **no.**

Because WP Fusion provides a bi-directional sync between your WordPress site and your CRM, it’s not practical to connect to multiple CRMs simultaneously.

In an ideal setup, your CRM or marketing automation platform is the hub of your business online, and the master record of your contacts and their data. Your WordPress site is a spoke connected to your CRM via WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2018/11/CRM-Setup-Good@2x-1024x609.png)](https://wpfusion.com/wp-content/uploads/2018/11/CRM-Setup-Good@2x.png) A good configuration

When you connect multiple platforms bi-directionally with WP Fusion, your WordPress site becomes responsible for keeping data in sync between your other services. For example an email address change in Intercom gets synced to WordPress, and then WP Fusion needs to sync it onwards to ActiveCampaign.

This will quickly overwhelm your website since it’s not optimized for routing data in real time between third-party services. For something like that Zapier is much more appropriate.

[![](https://wpfusion.com/wp-content/uploads/2018/11/CRM-Setup-Bad@2x-1024x562.png)](https://wpfusion.com/wp-content/uploads/2018/11/CRM-Setup-Bad@2x.png) A bad configuration with multiple external services routing data through WordPress

#### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#what-are-my-options) What are my options?

WP Fusion works best when it’s connected to your marketing automation platform, since it’s syncing data related to individual customers and contacts.

If you need to use an additional service in addition to this (for example Pipedrive to manage sales pipelines), it’s best to connect it directly to your marketing automation tool, with Zapier or another integration tool. Then you can trigger an opportunity to be created in your sales automation platform based on activity in your marketing automation platform.

In some cases you may want to trigger an outside service directly from WordPress. Using WP Fusion’s [Webhooks / Zapier Addon](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/) you can ping an external URL based on user activity on your site, such as completing a course or making a purchase. Since this is a one-way sync of data, it doesn’t impact performance or create a risk of data loss.

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#why-cant-i-use-multiple-tags-for-auto-enrollments-link-with-tag) Why can’t I use multiple tags for auto-enrollments / Link With Tag?

WP Fusion includes a feature with most LMS and membership plugins that we call “ _Link with Tag_“. This lets you specify a CRM tag that can be used as a trigger to auto-enroll someone into a course or membership.

When the tag is applied the user is enrolled, and when the tag is removed the user is unenrolled.

[![](https://wpfusion.com/wp-content/uploads/2018/11/ld-course-tag-mapping-1024x446.jpg)](https://wpfusion.com/wp-content/uploads/2018/11/ld-course-tag-mapping-scaled.jpg) Auto-enrollment settings on a LearnDash course

The link with tag setting is **limited to one tag**, if you try to select more than one tag you will see a message saying “ _You can only select one item_“.

#### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#why-cant-you-select-multiple-tags) Why can’t you select multiple tags?

The reason you can only select one tag is comes from the fact that the linked tag is also used as an un-enrollment trigger.

Look at the following example:

[![](https://wpfusion.com/wp-content/uploads/2018/11/ld-linked-tag-bad-1024x451.jpg)](https://wpfusion.com/wp-content/uploads/2018/11/ld-linked-tag-bad-scaled.jpg)

In this example, someone is selling access to courses individually by applying the **Course A – Active** tag, and also selling bundled course access by applying the **All Courses Bundle Purchase** tag.

Imagine a scenario where an admin needs to manually add a user to the course, or course access is granted by another plugin like WooCommerce or Uncanny Automator:

- The user is enrolled in the course. However, if the linked tag isn’t applied, the user will be immediately removed from the course, since the linked tag is also an un-enrollment trigger
- To keep the user from being unenrolled, WP Fusion must apply the linked tags whenever a user is added to a course, from any source
- This applied _both_ tags **Course A – Active** and **All Courses Bundle Purchase**
- The **All Courses Bundle Purchase** tag is also linked with 4 other courses, this triggers the user to be enrolled in all of those courses as well
- When the user is enrolled in those courses, they are auto-assigned _those_ linked tags, **Course B – Active, Course C – Active, Course D – Active,** and **Course E – Active**
- Now the user has access to all of the courses on your site and a bunch of undesired tags
- In situations where you have a lot of courses or memberships linked together (i.e. 20+) this can also cause your website to crash, as the user is enrolled in everything on your site simultaneously and dozens of API calls are sent to your CRM

For this reason WP Fusion doesn’t allow you to use multiple tags for auto-enrollment triggers.

#### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#how-can-i-sell-bundled-courses-using-auto-enrollment-tags) **How can I sell bundled courses using auto-enrollment tags?**

A simple way to auto-enroll people into multiple courses is to simply apply all of the linked tags when a bundle purchase is made. Then by looking at a contact’s tags in your CRM you can easily see exactly which courses they are in. Removing a linked tag will unenroll them from that course, and a refund or subscription cancellation will remove all the linked tags and unenroll them from all the associated courses.

That works fine with a small bundle of two or three courses, but it ends up being a lot of tags if you have a large bundle, and becomes hard to manage.

There is a great alternative to that if you’re using either LearnDash or LifterLMS:

**LearnDash**

With LearnDash you can create a Group for your course bundle, and [set a linked tag on this group](https://wpfusion.com/documentation/learning-management/learndash/#groups).

In our example above, the **All Courses Bundle Purchase** tag would be associated with an _All Access_ group. When the tag is applied the user will be added to the group, which then grants access to all courses, even though the user doesn’t have the linked tags from any of the individual courses.

Removing the linked tag removes the user from that group, and their course access is revoked.

**LifterLMS**

Likewise, with LifterLMS you can create a Membership for your course bundle, and [set a linked tag on this membership](https://wpfusion.com/documentation/learning-management/lifterlms/#memberships).

In our example above, the **All Courses Bundle Purchase** tag would be associated with an _All Courses_ membership. When the tag is applied the user will be added to the membership, which then grants access to all courses, even though the user doesn’t have the linked tags from any of the individual courses.

By using Groups or Memberships as an extra level of access control, you can create different overlapping bundles of access to your courses which still use a single linked tag for auto-enrollment.

### [\#](https://wpfusion.com/documentation/faq/misc-faq/\#how-do-i-use-external-shopping-carts-with-wp-fusion) How do I use external shopping carts with WP Fusion?

Any external system that connects to your CRM, like ThriveCart or SamCart, can be used with WP Fusion. The principles are universal, but at right you can see an example workflow using Drip.

The purchase in ThriveCart triggers the automation. Then a tag is applied to the new subscriber. This is the tag that you will use to unlock content in WordPress. Or it can be used to trigger an automated enrollment in any of our supported [membership](https://wpfusion.com/documentation/#integrations) or [LMS](https://wpfusion.com/documentation/#integrations) plugins.

After the tag is applied, [a webhook](https://wpfusion.com/documentation/#webhooks) is sent to your site. This tells WP Fusion to create a new WordPress user and load their tags. WP Fusion generates a password and stores it back in a custom field in Drip.

The final step is sending a welcome email with the subscriber’s password included. When they log into your site, they’ll be able to access their content right away.

![](https://wpfusion.com/wp-content/uploads/2018/08/thrivecart-purchase-810x1024.jpg)

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Can I generate an invoice / provide my VAT number?](https://wpfusion.com/documentation/faq/misc-faq/#can-i-generate-an-invoice-provide-my-vat-number)
- [Does WP Fusion work on WordPress multisite?](https://wpfusion.com/documentation/faq/misc-faq/#does-wp-fusion-work-on-wordpress-multisite)
- [Is WP Fusion GDPR compliant?](https://wpfusion.com/documentation/faq/misc-faq/#is-wp-fusion-gdpr-compliant)
- [Can I connect WP Fusion to multiple CRMs?](https://wpfusion.com/documentation/faq/misc-faq/#can-i-connect-wp-fusion-to-multiple-crms)
- [What are my options?](https://wpfusion.com/documentation/faq/misc-faq/#what-are-my-options)
- [Why can't I use multiple tags for auto-enrollments / Link With Tag?](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-i-use-multiple-tags-for-auto-enrollments-link-with-tag)
- [Why can't you select multiple tags?](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-you-select-multiple-tags)
- [**How can I sell bundled courses using auto-enrollment tags?**](https://wpfusion.com/documentation/faq/misc-faq/#how-can-i-sell-bundled-courses-using-auto-enrollment-tags)
- [How do I use external shopping carts with WP Fusion?](https://wpfusion.com/documentation/faq/misc-faq/#how-do-i-use-external-shopping-carts-with-wp-fusion)

### In this chapter

- [Caching](https://wpfusion.com/documentation/faq/caching/ "Caching")
- [CRM Compatibility](https://wpfusion.com/documentation/faq/crm-compatibility-table/ "CRM Compatibility")
- [For plugin developers](https://wpfusion.com/documentation/faq/for-plugin-developers/ "For plugin developers")
- [How does licensing work?](https://wpfusion.com/documentation/faq/how-does-licensing-work/ "How does licensing work?")
- [Is WP Fusion hard to use?](https://wpfusion.com/documentation/faq/is-wp-fusion-hard-to-use/ "Is WP Fusion hard to use?")
- [Misc. FAQ](https://wpfusion.com/documentation/faq/misc-faq/ "Misc. FAQ")
- [Multisite](https://wpfusion.com/documentation/faq/multisite/ "Multisite")
- [Performance](https://wpfusion.com/documentation/faq/performance/ "Performance")
- [Staging Sites](https://wpfusion.com/documentation/faq/staging-sites/ "Staging Sites")
- [What can I do with it?](https://wpfusion.com/documentation/faq/what-can-i-do-with-it/ "What can I do with it?")
- [Who is it for?](https://wpfusion.com/documentation/faq/who-is-it-for/ "Who is it for?")
- [WP Fusion vs....](https://wpfusion.com/documentation/faq/how-are-we-different/ "WP Fusion vs....")
- [Changelog](https://wpfusion.com/documentation/faq/changelog/ "Changelog")

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