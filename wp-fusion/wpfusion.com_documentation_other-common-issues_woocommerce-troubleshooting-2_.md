---
url: "https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/"
title: "WooCommerce Troubleshooting | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#content)

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

# WooCommerce Troubleshooting

- Published onMarch 1, 2023
- Last updated on March 1, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Common Issues](https://wpfusion.com/documentation/#other-common-issues)
- /
- WooCommerce Troubleshooting

WP Fusion’s integration with WooCommerce is quite complex, and while it’s generally very reliable occasionally things can go wrong, especially with more complex configurations— for example combinations of subscriptions, deposits, variations, attributes, and auto-login sessions.

This guide will walk you through some troubleshooting steps to help solve the most common WooCommerce issues.

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#use-a-test-user) Use a test user

When testing WooCommerce checkouts, it’s best to use a test customer in either an incognito browser window, or logged in to your site as a non-admin user.

If a user is logged in, **WP Fusion will sync the checkout data and apply any tags to the contact record of the user who made the purchase**— regardless of the email entered on the checkout form. This is to help prevent creating duplicate contact records and fragmented data in your CRM.

Some people test their checkout while logged in as an administrator and then don’t see a new contact record created or any tags applied for the customer. This is because the tags are being applied to their own contact record in the CRM.

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#turn-on-logging) Turn on logging

If you haven’t already, enable WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) from the Advanced settings menu:

[![](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-1-1024x276.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-1.jpg)

The logs will show any API calls that are being made by WP Fusion, including any field updates, tags being removed or applied, and automated course and membership enrollments.

Here’s a typical WooCommerce order recorded in the WP Fusion logs:

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-1-1024x302.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-1.jpg)

If you’re using the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) you’ll also see additional data related to the ecommerce data:

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-2-1024x667.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-2.jpg)

If there are any errors these will also be marked in the logs in orange:

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-3-1024x330.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-logs-3.jpg)

If you can include the error details with your [support ticket](https://wpfusion.com/contact/) it will help us to diagnose the issue more quickly.

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#check-order-notes) Check order notes

Even if you don’t have logging turned on, WP Fusion will still record some information to the order notes for each WooCommerce order.

These can be viewed in the sidebar when editing any single order:

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-order-notes-532x1024.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-order-notes.jpg)

Any API errors will also be added to the order as notes.

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#process-order-actions-again) Process order actions again

If for some reason an order didn’t get sent to your CRM, or you’d like to process an order again with logging turned on, you can manually process an order again by choosing **Process WP Fusion actions again** from the **Order Actions** menu:

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-process-again.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-process-again.jpg)

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#disable-asynchronous-checkout) Disable asynchronous checkout

WP Fusion includes an option for WooCommerce called **Asynchronous Checkout**, which is enabled by default. When this setting is enabled WP Fusion processes all API calls in the background, which speeds up the checkout process.

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-async-1024x281.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-async.jpg)

While this works fine on 95% of sites, it can sometimes be blocked by security plugins or firewall rules. If your customers are checking out but no data is being sent to your CRM then turning off this setting is a good diagnostic step.

If turning off Asynchronous Checkout fixes the checkout process then it’s quite likely the background process is being blocked.

- If you’re using **WordFence**: Putting the WordFence firewall into “learning mode” temporarily has been known to fix the issue
- You can also [contact support](https://wpfusion.com/contact/) for additional assistance

### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#default-settings) Default settings

When you first install WP Fusion the settings are initialized with some default options. These defaults are sufficient for the majority of sites and don’t need to be changed.

Some things we’ve seen changed that have caused problems are:

#### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#create-contacts) Create Contacts

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-defaults-1-1024x563.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-defaults-1.jpg)

If you un-check the setting for **Create Contacts** then WP Fusion will _not create contact records_ in your CRM when someone makes a purchase in WooCommerce. It will only apply tags to existing contacts. It is recommended to leave this setting on.

#### [\#](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/\#limit-user-roles) Limit user roles

[![](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-defaults-2-1024x365.jpg)](https://wpfusion.com/wp-content/uploads/2019/09/woo-troubleshooting-defaults-2.jpg)

WP Fusion includes a setting to limit contact record creation to certain user roles. In the screenshot above the “Subscriber” role has been specified. This _will not work_ with WooCommerce, since WooCommerce creates users with the role Customer.

It is recommended to leave this setting blank so contact records are created for all new users.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Use a test user](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#use-a-test-user)
- [Turn on logging](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#turn-on-logging)
- [Check order notes](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#check-order-notes)
- [Process order actions again](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#process-order-actions-again)
- [Disable asynchronous checkout](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#disable-asynchronous-checkout)
- [Default settings](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#default-settings)
- [Create Contacts](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#create-contacts)
- [Limit user roles](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/#limit-user-roles)

### In this chapter

- [Batch Export Not Detecting All Users](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/ "Batch Export Not Detecting All Users")
- [Settings Page Not Saving Fully](https://wpfusion.com/documentation/other-common-issues/settings-page-not-saving-fully/ "Settings Page Not Saving Fully")
- [Webhooks not being received by WP Fusion](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/ "Webhooks not being received by WP Fusion")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting/ "WooCommerce Troubleshooting")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/ "WooCommerce Troubleshooting")

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