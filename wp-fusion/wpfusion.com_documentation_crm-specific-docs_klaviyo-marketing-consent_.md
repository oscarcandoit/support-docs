---
url: "https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/"
title: "Klaviyo marketing consent | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#content)

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

# Klaviyo marketing consent

- Published onFebruary 14, 2024
- Last updated on February 14, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- Klaviyo marketing consent

### [\#](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/\#overview) Overview

With Klaviyo, subscribers can be added to lists with either implicit or explicit marketing consent. You will only be able to send marketing emails to subscribers who have given their explicit consent to receive email marketing.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/\#understanding-explicit-vs-implicit-consent) Understanding explicit vs. implicit consent

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/\#implicit-consent) Implicit consent

**Implicit consent** is when someone gives you their contact information (e.g., email address, phone number, etc.) but does not explicitly say they want to receive marketing messages from your brand.

These profiles will have the consent status `NEVER_SUBSCRIBED`. A common example of implicit consent is when a customer makes a purchase and provides their email at checkout. They have not explicitly said they want to receive marketing messages from the brand, but it can be inferred that they have an interest in relevant content. In this case, you have their information, but they haven’t agreed to receive marketing communications.

These profiles are able to receive emails, but you should exercise caution when contacting them. Depending on your local regulations, you may (or may not) be permitted to email these profiles if you believe they have implied consent. Read [Understanding explicit vs. implicit consent](https://help.klaviyo.com/hc/en-us/articles/4404203889947) to learn more, and make sure to check your local laws and regulations regarding implicit consent.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/\#explicit-consent) Explicit consent

**Explicit consent** occurs when someone directly tells you that they want to receive marketing messages from your brand. You can get express consent when they:

- Sign up through a form
- Give you their information on an in-person mailing list (in your store or at a booth)
- Tell you verbally that they want to get marketing messages from you and provide you with their contact information
- Opt in to a push notifications through a permission prompt when opening the app
- With explicit consent, the subscriber must knowingly consent to receive marketing messages.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/\#marketing-permissions-with-wp-fusion) Marketing permissions with WP Fusion

By default WP Fusion adds subscribers to Klaviyo lists with the `NEVER_SUBSCRIBED` status. This means subscribers can receive emails, but they will not show as confirmed for marketing.

You can choose to add subscribers to specific lists with marketing consent by selecting the alternate _(opt-in to marketing)_ list name in the WP Fusion Select Lists dropdown.

[![](https://wpfusion.com/wp-content/uploads/2024/02/klaviyo-marketing-consent-lists-1024x596.jpg)](https://wpfusion.com/wp-content/uploads/2024/02/klaviyo-marketing-consent-lists.jpg)

In this case the subscriber will be added to the list as `SUBSCRIBED`. The current timestamp will be used as the date of consent, and the marketing consent source will be recorded as `WP Fusion`.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#overview)
- [Understanding explicit vs. implicit consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#understanding-explicit-vs-implicit-consent)
- [Implicit consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#implicit-consent)
- [Explicit consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#explicit-consent)
- [Marketing permissions with WP Fusion](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/#marketing-permissions-with-wp-fusion)

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