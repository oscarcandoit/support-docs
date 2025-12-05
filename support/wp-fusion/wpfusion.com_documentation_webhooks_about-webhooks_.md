---
url: "https://wpfusion.com/documentation/webhooks/about-webhooks/"
title: "About Webhooks | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/about-webhooks/#content)

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

# About Webhooks

- Published onApril 21, 2022
- Last updated on March 8, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- About Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#overview) Overview

WP Fusion [syncs data to your CRM](https://wpfusion.com/videos/tutorials/mapping-and-syncing-contact-fields/) automatically as profiles are updated in WordPress.

However, you may want to trigger an automatic sync of data _back_ from your CRM to WordPress. For example if a user’s custom fields or tags have changed, or if you want to import a new WordPress user from a CRM contact record.

**A “webhook” is a small piece of data sent from your CRM _to_ WP Fusion**, letting it know that a contact has been edited and the changes need to be loaded back to WordPress.

Webhooks work with most of our supported platforms, for a full list please see the [CRM compatibility table](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#how-a-webhook-is-structured) How a webhook is structured

A webhook is a URL to your site, followed by several URL parameters. Those are:

- `wpf_action` _(required)_: This tells your site that the webhook is meant for WP Fusion. The action can be `update_tags`, `update`, or `add` (for more details see below).
- `access_key` _(required):_ This is the access key from the bottom of the General tab in the WP Fusion settings. This authenticates the webhook.
- `contact_id` _(sometimes required)_: Depending on your CRM, you may need to include a contact ID in the webhook URL to tell WP Fusion which contact to load. Please refer to the documentation for your CRM (see the sidebar navigation) for an example.
- `role` _(optional):_ When using the `add` or `update` method, you can specify a role for the user by setting the `role` query parameter.
- `send_notification` _(optional):_ When using the `add` method, setting `send_notification=true` will send a welcome email to the new user with a link to set their password.

You can test a webhook for a specific content by visiting the URL in your browser. For example `https://mysite.com/?wpf_action=add&access_key=KEY&contact_id=123`

[![](https://wpfusion.com/wp-content/uploads/2022/04/webhooks-add-success-1024x791.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/webhooks-add-success.jpg) When testing webhooks in the browser, a debug page is shown with the data loaded from your CRM.

### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#webhook-strategy) Webhook strategy

While it’s tempting to want to keep everything in sync all the time, it’s also important to keep in mind that processing webhooks requires a fair bit of server resources.

When a webhook is received, WP Fusion needs to connect back to your CRM, load any updated data, save it, and trigger any automated enrollments. This process takes a few seconds to run.

For example, if you’ve configured your webhooks to sync every contact record edit back to WordPress, and you bulk edit a bunch of contacts in your CRM, you can end up temporarily crashing your website while it struggles to deal with all the webhooks.

That’s why we recommend setting up your webhooks so that they run just when data needs to be loaded back into WordPress. For example when a tag is applied that unlocks a new piece of content (as opposed to whenever _any_ tag is applied).

#### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#duplicate-webhooks) Duplicate webhooks

WP Fusion will try to detect when two duplicate webhooks are being received at the same time for the same contact, in order to prevent potential data loss. This will be recorded [to the logs](https://wpfusion.com/documentation/getting-started/activity-logs/) with a yellow notice.

If you see messages in the logs regarding duplicate webhooks, please review your webhook setup to make sure that the same webhook can’t be triggered twice for the same contact.

#### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#loopback-webhooks) Loopback webhooks

It’s important to try to avoid triggering a webhook as a result of something changed by WP Fusion, as this can result in potential data loss.

As an example:

1. A customer checks out via WooCommerce and WP Fusion creates a new contact record in your CRM with the customer’s name and email. The contact doesn’t yet have any tags.
2. You’ve configured a webhook back to WP Fusion for _any_ time any contact is edited, and so this new contact meets the condition and the webhook is sent.
3. At the same time, WP Fusion begins to apply the tags that would enroll the new customer into the course they just purchased.
4. The webhook arrives, indicating that a new contact has been updated and has _no tags._
5. This erases the tags that were applied in Step 3, and the customer loses access to their course.

In this scenario there’s no reason to send a webhook back to WP Fusion telling it a new contact was created— because WP Fusion is what created that contact. As possible solutions you could make your webhook trigger more specific by requiring a tag, or by checking the contact’s creation date.

If you can’t prevent loopback webhooks (for example Gist always sends a webhook whenever WP Fusion applies a tag over the API), you can try this snippet:

This will “lock” a user for one minute every time a tag is applied. While the user is locked, any incoming webhooks will be blocked for that user.

This is still not ideal for performance, since your site is getting hit with redundant webhooks, but it should prevent unexpected data loss.

### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#webhook-troubleshooting) Webhook troubleshooting

Webhooks can sometimes get blocked by your web hosting, or security plugins. For more info, see the [Webhooks not being received by WP Fusion documentation](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### [\#](https://wpfusion.com/documentation/webhooks/about-webhooks/\#how-to-set-up-webhooks-in-your-crm) How to set up webhooks in your CRM

See the navigation at right for CRM specific tutorials on how to configure webhooks.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/webhooks/about-webhooks/#overview)
- [How a webhook is structured](https://wpfusion.com/documentation/webhooks/about-webhooks/#how-a-webhook-is-structured)
- [Webhook strategy](https://wpfusion.com/documentation/webhooks/about-webhooks/#webhook-strategy)
- [Duplicate webhooks](https://wpfusion.com/documentation/webhooks/about-webhooks/#duplicate-webhooks)
- [Loopback webhooks](https://wpfusion.com/documentation/webhooks/about-webhooks/#loopback-webhooks)
- [Webhook troubleshooting](https://wpfusion.com/documentation/webhooks/about-webhooks/#webhook-troubleshooting)
- [How to set up webhooks in your CRM](https://wpfusion.com/documentation/webhooks/about-webhooks/#how-to-set-up-webhooks-in-your-crm)

### In this chapter

- [About Webhooks](https://wpfusion.com/documentation/webhooks/about-webhooks/ "About Webhooks")
- [ActiveCampaign Webhooks](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/ "ActiveCampaign Webhooks")
- [Agile CRM Webhooks](https://wpfusion.com/documentation/webhooks/agile-crm-webhooks/ "Agile CRM Webhooks")
- [Bento Webhooks](https://wpfusion.com/documentation/webhooks/bento-webhooks/ "Bento Webhooks")
- [Brevo Webhooks](https://wpfusion.com/documentation/webhooks/brevo-webhooks/ "Brevo Webhooks")
- [ConvertKit Webhooks](https://wpfusion.com/documentation/webhooks/convertkit-webhooks/ "ConvertKit Webhooks")
- [Copper Webhooks](https://wpfusion.com/documentation/webhooks/copper-webhooks/ "Copper Webhooks")
- [Customer.io Webhooks](https://wpfusion.com/documentation/webhooks/customer-io-webhooks/ "Customer.io Webhooks")
- [Customerly Webhooks](https://wpfusion.com/documentation/webhooks/customerly-webhooks/ "Customerly Webhooks")
- [Drip Webhooks](https://wpfusion.com/documentation/webhooks/drip-webhooks/ "Drip Webhooks")
- [EmailOctopus Webhooks](https://wpfusion.com/documentation/webhooks/emailoctopus-webhooks/ "EmailOctopus Webhooks")
- [Emercury Webhooks](https://wpfusion.com/documentation/webhooks/emercury-webooks/ "Emercury Webhooks")
- [Encharge Webhooks](https://wpfusion.com/documentation/webhooks/encharge-webhooks/ "Encharge Webhooks")
- [Engage Webhooks](https://wpfusion.com/documentation/webhooks/engage-webhooks/ "Engage Webhooks")
- [EngageBay Webhooks](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/ "EngageBay Webhooks")
- [Flexie Webhooks](https://wpfusion.com/documentation/webhooks/flexie/ "Flexie Webhooks")
- [FluentCRM Webhooks](https://wpfusion.com/documentation/webhooks/fluentcrm-webhooks/ "FluentCRM Webhooks")
- [FunnelKit Webhooks](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/ "FunnelKit Webhooks")
- [Gist Webhooks](https://wpfusion.com/documentation/webhooks/gist-webhooks/ "Gist Webhooks")
- [Groundhogg Webhooks](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/ "Groundhogg Webhooks")
- [HighLevel Webhooks](https://wpfusion.com/documentation/webhooks/highlevel-webhooks/ "HighLevel Webhooks")
- [HubSpot Webhooks](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/ "HubSpot Webhooks")
- [Infusionsoft / Keap HTTP Posts](https://wpfusion.com/documentation/webhooks/infusionsoft-http-posts/ "Infusionsoft / Keap HTTP Posts")
- [Intercom Webhooks](https://wpfusion.com/documentation/webhooks/intercom-webhooks/ "Intercom Webhooks")
- [Jetpack CRM Automatic Imports](https://wpfusion.com/documentation/webhooks/jetpack-crm-automatic-imports/ "Jetpack CRM Automatic Imports")
- [Kartra Webhooks](https://wpfusion.com/documentation/webhooks/kartra-webhooks/ "Kartra Webhooks")
- [Klaviyo Webhooks](https://wpfusion.com/documentation/webhooks/klaviyo-webhooks/ "Klaviyo Webhooks")
- [KlickTipp Webhooks](https://wpfusion.com/documentation/webhooks/klicktipp-webhooks/ "KlickTipp Webhooks")
- [Mailchimp Webhooks](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/ "Mailchimp Webhooks")
- [MailerLite Webhooks](https://wpfusion.com/documentation/webhooks/mailerlite-webhooks/ "MailerLite Webhooks")
- [Maropost Webhooks](https://wpfusion.com/documentation/webhooks/maropost/ "Maropost Webhooks")
- [Mautic Webhooks](https://wpfusion.com/documentation/webhooks/mautic-webhooks/ "Mautic Webhooks")
- [MooSend Webhooks](https://wpfusion.com/documentation/webhooks/moosend-webhooks/ "MooSend Webhooks")
- [NationBuilder Webhooks](https://wpfusion.com/documentation/webhooks/nationbuilder-webhooks/ "NationBuilder Webhooks")
- [Omnisend Webhooks](https://wpfusion.com/documentation/webhooks/omnisend-webhooks/ "Omnisend Webhooks")
- [Ontraport Webhooks](https://wpfusion.com/documentation/webhooks/ontraport-webhooks/ "Ontraport Webhooks")
- [Ortto Webhooks](https://wpfusion.com/documentation/webhooks/ortto-webhooks/ "Ortto Webhooks")
- [Pipedrive Webhooks](https://wpfusion.com/documentation/webhooks/pipedrive-webhooks/ "Pipedrive Webhooks")
- [Platform.ly Webhooks](https://wpfusion.com/documentation/webhooks/platformly-webhooks/ "Platform.ly Webhooks")
- [PulseTechnologyCRM Webhooks](https://wpfusion.com/documentation/webhooks/pulsetechnologycrm-webhooks/ "PulseTechnologyCRM Webhooks")
- [Salesforce Outbound Messages](https://wpfusion.com/documentation/webhooks/salesforce-outbound-messages/ "Salesforce Outbound Messages")
- [UserEngage Webhooks](https://wpfusion.com/documentation/webhooks/userengage/ "UserEngage Webhooks")
- [Zoho Webhooks](https://wpfusion.com/documentation/webhooks/zoho-webhooks/ "Zoho Webhooks")

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