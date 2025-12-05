---
url: "https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/"
title: "MailerLite double opt-ins | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#content)

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

# MailerLite double opt-ins

- Published onDecember 16, 2022
- Last updated on April 3, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- MailerLite double opt-ins

### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#overview) Overview

Using WP Fusion with [MailerLite](https://wpfusion.com/go/mailerlite) you have several options for managing your subscribers’ opt-in status.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#default-opt-in-status) Default opt-in status

You can configure WP Fusion’s default status for new subscribers at Settings » WP Fusion » General » Default Optin Status.

[![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-default-optin-status-1024x385.jpg)](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-default-optin-status.jpg)

The options are:

- **Default:** WP Fusion will not specify an opt-in status for new subscribers. This means subscribers will follow the status you’ve configured in MailerLite— either active (by default), or unconfirmed if you’ve enabled [Double opt-in for API and integrations](https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers#new/enable-double-opt-in-for-api).
- **Active:** All subscribers created by WP Fusion will be set to active.
- **Unconfirmed:** All subscribers created by WP Fusion will be set to unconfirmed, and a double opt-in email will be sent.
- **Unsubscribed:** All subscribers created by WP Fusion will be set to unsubscribed. You can still use groups to [grant access to content](https://wpfusion.com/documentation/getting-started/access-control/) in WordPress, but you will not be able to send emails to the subscribers, and they will not count towards your plan limit.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#mailerlite-subscribe-settings) MailerLite subscribe settings

In MailerLite, at Account Settings » Subscribe Settings, you can set your opt-in preference for subscribers added over the API.

[![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-subscribe-settings-1024x396.jpg)](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-subscribe-settings.jpg)

If you enable **Double opt-in for API and integrations** and WP Fusion creates a subscriber either with the status set to “default”, or “unconfirmed”, then MailerLite will send a double op-tin email to confirm their subscription.

If **Double opt-in for API and integrations** is disabled, MailerLite will never send a double opt-in email to subscribers created by WP Fusion— regardless of their status.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#overriding-the-default-status) Overriding the default status

It’s also possible to override the default status, in the case of an ecommerce plugin, or form.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#ecommerce-plugins) Ecommerce plugins

With [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins), [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#email-optins), and [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#email-optins), WP Fusion includes the option to add an email marketing opt-in checkbox to your payment forms.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-1024x615.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin.jpg) With WooCommerce, WP Fusion [includes the option](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins) to add an email marketing opt-in checkbox to the checkout form.

To sync this email opt-in field with MailerLite, first enable it for sync from [the Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), and map it to the Optin Status field in MailerLite.

[![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-woo-optin-field-1024x203.jpg)](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-woo-optin-field.jpg)

The value of this field will override the default opt-in status set in the General settings. The logic works like this:

**For new subscribers:**

- If the opt-in checkbox is _checked_, the subscriber will be created as _unconfirmed_, and a double-opt-in email will be triggered.

  - Unless the default opt-in status in the General settings is _active_. In that case, the subscriber will be created as active.
- If the opt-in checkbox is _un-checked_, the subscriber will be created as _unsubscribed._

**For existing subscribers:**

- If the opt-in checkbox is checked and the subscriber’s current status is _unsubscribed_, their status will be updated to _unconfirmed_(and a confirmation email will be sent).
- If the subscriber’s current status is either _active_ or _unconfirmed_, their status will not be modified, regardless of whether or not the opt-in checkbox is checked.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#form-plugins) Form plugins

Similar to the ecommerce plugins, you can also manage subscriber opt-ins using any one of WP Fusion’s [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

The simplest implementation is to add a checkbox field to your form, and map it with the Optin Status field in MailerLite via WP Fusion’s form feed settings. The logic works the same as when using a checkbox on the checkout form (see above).

However, note that with this method, existing subscribers will not be able to unsubscribe.

For more granular control, you can add a radio, dropdown, or hidden field to your form, using any of the values:

- active
- unsubscribed
- unconfirmed

[![](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-optins-form-settings-1024x446.jpg)](https://wpfusion.com/wp-content/uploads/2022/12/mailerlite-optins-form-settings.jpg) In this screenshot [a Gravity Form](https://wpfusion.com/documentation/lead-generation/gravity-forms/) has a field to allow a subscriber to update their status.

When the form is submitted, the selected value will be synced to MailerLite, and will update the subscriber’s opt-in status.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/\#ignoring-customers-who-dont-opt-in) Ignoring customers who don’t opt in

It’s also possible to completely ignore customers who don’t opt in to marketing. For WooCommerce, this is achieved via the [`wpf_woocommerce_customer_data` filter](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#only-sync-customers-who-opt-in-to-marketing). For more information, see [the WooCommerce documentation](https://wpfusion.com/documentation/ecommerce/woocommerce/#only-sync-confirmed-customers).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#overview)
- [Default opt-in status](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#default-opt-in-status)
- [MailerLite subscribe settings](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#mailerlite-subscribe-settings)
- [Overriding the default status](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#overriding-the-default-status)
- [Ecommerce plugins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#ecommerce-plugins)
- [Form plugins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#form-plugins)
- [Ignoring customers who don't opt in](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#ignoring-customers-who-dont-opt-in)

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