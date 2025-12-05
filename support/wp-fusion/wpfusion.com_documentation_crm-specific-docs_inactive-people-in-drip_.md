---
url: "https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/"
title: "Inactive / Unsubscribed People in Drip | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/#content)

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

# Inactive / Unsubscribed People in Drip

- Published onJune 22, 2020
- Last updated on October 14, 2020

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- Inactive / Unsubscribed People in Drip

### [\#](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/\#overview) Overview

When someone unsubscribes from marketing emails in Drip, their status becomes Inactive. This affects how WP Fusion can interact with those records over the API.

You can view your inactive subscribers in Drip under People » Inactive.

[![](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-1024x754.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-scaled.jpg)

### [\#](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/\#with-wp-fusion) With WP Fusion

If you don’t “Activate” the inactive people, WP Fusion is affected in a few ways:

- If you run a [Resync Contact IDs and Tags operation](https://wpfusion.com/documentation/tutorials/exporting-data/), or click Resync Tags on an individual user’s profile, their contact ID and tags will be lost. You’ll see a _No Contact Record Found_ message. The user will lose access to any content protected by tags.
- If the user updates their profile, this data will not be synced to Drip. A message will be logged to the WP Fusion logs saying _“Person has unsubscribed from marketing. Updates may not have been saved.”_
- Tags can still be applied to and removed from the person, but the person will not show up in Drip when you search by those tags.

To view a list of all inactive users, head to Users » All Users in the WordPress admin, and choose _(Inactive in Drip)_ from the Filter By Tag dropdown.

[![](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-search-1024x449.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/drip-inactive-search-scaled.jpg)

### [\#](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/\#re-subscribing-people) Re-subscribing people

It is also possible to use WP Fusion to re-subscribe unsubscribed people. To do that, pass a value of “active” for the “Status” field, which you can select from WP Fusion’s _Select A CRM Field_ dropdown.

For example, we can do this with [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/) by creating a hidden form field with the value “active”.

[![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-1-1024x645.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-1.jpg)

And then via the WP Fusion feed settings, linking that hidden field with the Status field in Drip.

[![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-2-1024x509.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-2.jpg)

Now when the form is submitted, the person will be re-activated.

Note that you can also unsubscribe people, by passing a value of “unsubscribed”. As another example, instead of a hidden field, we can use a Radio type field, with the input values set to match the Drip subscriber statuses:

[![](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-3-1024x833.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/drip-reactivate-subscriber-3.jpg)

It doesn’t matter which type of field you use, or which plugin, as long as the value “active” is sent over the API for the Status field, the subscriber will be activated. You can see the data that WP Fusion is sending to Drip by checking [the Activity Logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/#overview)
- [With WP Fusion](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/#with-wp-fusion)
- [Re-subscribing people](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/#re-subscribing-people)

### In this chapter

- [ActiveCampaign Accounts](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/ "ActiveCampaign Accounts")
- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [ConvertKit Unsubscribes](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/ "ConvertKit Unsubscribes")
- [Custom fields not loading with AgileCRM](https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/ "Custom fields not loading with AgileCRM")
- [Dynamics 365 - Associating entities](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/ "Dynamics 365 - Associating entities")
- [HighLevel white-labelled accounts](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/ "HighLevel white-labelled accounts")
- [HubSpot - How to use lists](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/ "HubSpot - How to use lists")
- [HubSpot Custom Objects](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/ "HubSpot Custom Objects")
- [Inactive / Unsubscribed People in Drip](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/ "Inactive / Unsubscribed People in Drip")
- [Infusionsoft API Goals](https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/ "Infusionsoft API Goals")
- [Klaviyo marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/ "Klaviyo marketing consent")
- [MailerLite double opt-ins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/ "MailerLite double opt-ins")
- [MailerLite email address changes](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/ "MailerLite email address changes")
- [Mautic Points](https://wpfusion.com/documentation/crm-specific-docs/mautic-points/ "Mautic Points")
- [Pipedrive Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/ "Pipedrive Labels")
- [Salesforce Sandbox Accounts](https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/ "Salesforce Sandbox Accounts")
- [Salesforce Tags](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/ "Salesforce Tags")
- [Unexpected Tags with ConvertKit](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/ "Unexpected Tags with ConvertKit")
- [Updating Leads with ConvertFox, Intercom, and Zoho](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/ "Updating Leads with ConvertFox, Intercom, and Zoho")
- [Zoho Tags](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/ "Zoho Tags")

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