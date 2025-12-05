---
url: "https://wpfusion.com/documentation/lead-generation/formidable-forms/"
title: "Connect Formidable Forms to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/lead-generation/formidable-forms/#content)

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

# Formidable Forms

- Published onJanuary 22, 2017
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Lead Generation](https://wpfusion.com/documentation/#lead-generation)
- /
- Formidable Forms

### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#overview) Overview

WP Fusion integrates with [Formidable Forms](https://formidableforms.com/) to add contacts to your [CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they submit a form on your site. You can also tag contacts based on the form that was submitted.

### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#setup) Setup

After creating your form, go to the form settings and click on Actions & Notifications. From the actions row, click the WP Fusion icon to add a new form action.

[![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action-1024x616.jpg)](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action.jpg)

Then the WP Fusion form action panel will appear.

[![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action-1-1024x979.jpg)](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-action-1.jpg)

For each field on your form, you can select a corresponding contact field in your CRM to save the data. You can also specify tags to be applied to the contact when they fill out the form.

If you are using Formidable Forms Pro and [conditional logic](https://formidableforms.com/knowledgebase/using-add-form-actions/#kb-conditional-logic), you can create multiple WP Fusion form actions to apply different tags based on your conditional logic rules.

### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#payments) Payments

If you’re using a payment gateway addon for Formidable Forms (or the free Stripe integration with Formidable Forms Lite), you can also optionally trigger your WP Fusion actions based on payment or subscription status.

[![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-payment-statuses-1024x438.jpg)](https://wpfusion.com/wp-content/uploads/2017/01/formidable-forms-payment-statuses.jpg)

These options will appear in the _Trigger this action when_ dropdown when editing the WP Fusion actions on any payment form.

**Note:** The _Payment Failed_ trigger refers to a failed recurring payment. A failed initial payment will trigger the _Entry is created_ trigger but will not fire any of the other triggers.

For more information [see the Formidable Forms documentation](https://formidableforms.com/knowledgebase/stripe/#kb-trigger-actions-after-payment).

### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#user-registration) User Registration

If you’re using the [User Registration addon for Formidable Forms](https://formidableforms.com/user-registration/), WP Fusion can also sync user registrations and profile updates to your connected CRM.

In this case it’s not necessary to set up a WP Fusion form action.

#### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#action-setup) Action Setup

After creating your registration or profile form, add a User Register action under the Actions and Notifications panel in the Formidable Forms settings.

[![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-1-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-1.jpg)

For each form entry you’d like to save to the user record, create a meta name, and select the corresponding form field.

For more information on the User Registration action setup, [see the Formidable Forms documentation](https://formidableforms.com/knowledgebase/user-registration/#kb-create-registration-form).

#### [\#](https://wpfusion.com/documentation/lead-generation/formidable-forms/\#syncing-the-fields-to-your-crm) Syncing the fields to your CRM

Once you’ve configured the User Registration action, head to the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings and scroll down to the **Formidable Forms Registration** section.

[![](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-2-1024x293.jpg)](https://wpfusion.com/wp-content/uploads/2017/01/formidable-registration-2.jpg)

For each registration field you’ll be able to select a corresponding field in your CRM to store the data.

When a user registers or updates their profile, the selected fields will be synced to your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Formidable Forms to ActiveCampaign](https://wpfusion.com/connect/connect-formidable-forms-to-activecampaign/)  \|
- [Connect Formidable Forms to AgileCRM](https://wpfusion.com/connect/connect-formidable-forms-to-agilecrm/)  \|
- [Connect Formidable Forms to Autopilot](https://wpfusion.com/connect/connect-formidable-forms-to-autopilot/)  \|
- [Connect Formidable Forms to Bento](https://wpfusion.com/connect/connect-formidable-forms-to-bento/)  \|
- [Connect Formidable Forms to BirdSend](https://wpfusion.com/connect/connect-formidable-forms-to-birdsend/)  \|
- [Connect Formidable Forms to Brevo](https://wpfusion.com/connect/connect-formidable-forms-to-brevo/)  \|
- [Connect Formidable Forms to Capsule](https://wpfusion.com/connect/connect-formidable-forms-to-capsule/)  \|
- [Connect Formidable Forms to Constant Contact](https://wpfusion.com/connect/connect-formidable-forms-to-constant-contact/)  \|
- [Connect Formidable Forms to ConvertKit](https://wpfusion.com/connect/connect-formidable-forms-to-convertkit/)  \|
- [Connect Formidable Forms to ConvesioConvert](https://wpfusion.com/connect/connect-formidable-forms-to-convesioconvert/)  \|
- [Connect Formidable Forms to Copper](https://wpfusion.com/connect/connect-formidable-forms-to-copper/)  \|
- [Connect Formidable Forms to Customer.io](https://wpfusion.com/connect/connect-formidable-forms-to-customer-io/)  \|
- [Connect Formidable Forms to Customerly](https://wpfusion.com/connect/connect-formidable-forms-to-customerly/)  \|
- [Connect Formidable Forms to Drip](https://wpfusion.com/connect/connect-formidable-forms-to-drip/)  \|
- [Connect Formidable Forms to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-formidable-forms-to-dynamics-365-marketing/)  \|
- [Connect Formidable Forms to EmailOctopus](https://wpfusion.com/connect/connect-formidable-forms-to-emailoctopus/)  \|
- [Connect Formidable Forms to EngageBay](https://wpfusion.com/connect/connect-formidable-forms-to-engagebay/)  \|
- [Connect Formidable Forms to Flexie](https://wpfusion.com/connect/connect-formidable-forms-to-flexie/)  \|
- [Connect Formidable Forms to FluentCRM](https://wpfusion.com/connect/connect-formidable-forms-to-fluentcrm/)  \|
- [Connect Formidable Forms to FunnelKit](https://wpfusion.com/connect/connect-formidable-forms-to-funnelkit/)  \|
- [Connect Formidable Forms to Gist](https://wpfusion.com/connect/connect-formidable-forms-to-gist/)  \|
- [Connect Formidable Forms to Groundhogg](https://wpfusion.com/connect/connect-formidable-forms-to-groundhogg/)  \|
- [Connect Formidable Forms to HighLevel](https://wpfusion.com/connect/connect-formidable-forms-to-highlevel/)  \|
- [Connect Formidable Forms to HubSpot](https://wpfusion.com/connect/connect-formidable-forms-to-hubspot/)  \|
- [Connect Formidable Forms to Infusionsoft](https://wpfusion.com/connect/connect-formidable-forms-to-infusionsoft/)  \|
- [Connect Formidable Forms to Intercom](https://wpfusion.com/connect/connect-formidable-forms-to-intercom/)  \|
- [Connect Formidable Forms to Jetpack CRM](https://wpfusion.com/connect/connect-formidable-forms-to-jetpack-crm/)  \|
- [Connect Formidable Forms to Kartra](https://wpfusion.com/connect/connect-formidable-forms-to-kartra/)  \|
- [Connect Formidable Forms to Keap](https://wpfusion.com/connect/connect-formidable-forms-to-keap/)  \|
- [Connect Formidable Forms to Klaviyo](https://wpfusion.com/connect/connect-formidable-forms-to-klaviyo/)  \|
- [Connect Formidable Forms to KlickTipp](https://wpfusion.com/connect/connect-formidable-forms-to-klicktipp/)  \|
- [Connect Formidable Forms to Loopify](https://wpfusion.com/connect/connect-formidable-forms-to-loopify/)  \|
- [Connect Formidable Forms to MailChimp](https://wpfusion.com/connect/connect-formidable-forms-to-mailchimp/)  \|
- [Connect Formidable Forms to MailerLite](https://wpfusion.com/connect/connect-formidable-forms-to-mailerlite/)  \|
- [Connect Formidable Forms to Mailjet](https://wpfusion.com/connect/connect-formidable-forms-to-mailjet/)  \|
- [Connect Formidable Forms to MailPoet](https://wpfusion.com/connect/connect-formidable-forms-to-mailpoet/)  \|
- [Connect Formidable Forms to Maropost](https://wpfusion.com/connect/connect-formidable-forms-to-maropost/)  \|
- [Connect Formidable Forms to Mautic](https://wpfusion.com/connect/connect-formidable-forms-to-mautic/)  \|
- [Connect Formidable Forms to NationBuilder](https://wpfusion.com/connect/connect-formidable-forms-to-nationbuilder/)  \|
- [Connect Formidable Forms to Omnisend](https://wpfusion.com/connect/connect-formidable-forms-to-omnisend/)  \|
- [Connect Formidable Forms to Ontraport](https://wpfusion.com/connect/connect-formidable-forms-to-ontraport/)  \|
- [Connect Formidable Forms to Ortto](https://wpfusion.com/connect/connect-formidable-forms-to-ortto/)  \|
- [Connect Formidable Forms to Pipedrive](https://wpfusion.com/connect/connect-formidable-forms-to-pipedrive/)  \|
- [Connect Formidable Forms to Platformly](https://wpfusion.com/connect/connect-formidable-forms-to-platformly/)  \|
- [Connect Formidable Forms to Quentn](https://wpfusion.com/connect/connect-formidable-forms-to-quentn/)  \|
- [Connect Formidable Forms to Salesflare](https://wpfusion.com/connect/connect-formidable-forms-to-salesflare/)  \|
- [Connect Formidable Forms to Salesforce](https://wpfusion.com/connect/connect-formidable-forms-to-salesforce/)  \|
- [Connect Formidable Forms to Sender](https://wpfusion.com/connect/connect-formidable-forms-to-sender/)  \|
- [Connect Formidable Forms to SendFox](https://wpfusion.com/connect/connect-formidable-forms-to-sendfox/)  \|
- [Connect Formidable Forms to Tubular](https://wpfusion.com/connect/connect-formidable-forms-to-tubular/)  \|
- [Connect Formidable Forms to User.com](https://wpfusion.com/connect/connect-formidable-forms-to-user-com/)  \|
- [Connect Formidable Forms to WP ERP](https://wpfusion.com/connect/connect-formidable-forms-to-wp-erp/)  \|
- [Connect Formidable Forms to Zoho](https://wpfusion.com/connect/connect-formidable-forms-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/lead-generation/formidable-forms/#overview)
- [Setup](https://wpfusion.com/documentation/lead-generation/formidable-forms/#setup)
- [Payments](https://wpfusion.com/documentation/lead-generation/formidable-forms/#payments)
- [User Registration](https://wpfusion.com/documentation/lead-generation/formidable-forms/#user-registration)
- [Action Setup](https://wpfusion.com/documentation/lead-generation/formidable-forms/#action-setup)
- [Syncing the fields to your CRM](https://wpfusion.com/documentation/lead-generation/formidable-forms/#syncing-the-fields-to-your-crm)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

[![a person with long, curly hair is pointing to a tablet displaying the text members only! with the wpfusion logo visible in the corner. the rooms decor hints at exclusivity, much like paywall content often seen on wordpress sites.](https://wpfusion.com/wp-content/uploads/2025/02/Screenshot-2025-02-04-at-15.04.42-300x167.png)](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Freemium or Paywall Content in WordPress](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

Create a Freemium Blog with paywall content! Emily uses Elementor to set up a template and shows us how to create an archive of paid content with WP Fusion. 🧡

### In this chapter

- [Caldera Forms](https://wpfusion.com/documentation/lead-generation/caldera-forms/ "Caldera Forms")
- [Contact Form 7](https://wpfusion.com/documentation/lead-generation/contact-form-7/ "Contact Form 7")
- [Convert Pro](https://wpfusion.com/documentation/lead-generation/convert-pro/ "Convert Pro")
- [Elementor Forms](https://wpfusion.com/documentation/lead-generation/elementor-forms/ "Elementor Forms")
- [Fluent Forms](https://wpfusion.com/documentation/lead-generation/fluent-forms/ "Fluent Forms")
- [Formidable Forms](https://wpfusion.com/documentation/lead-generation/formidable-forms/ "Formidable Forms")
- [Forminator](https://wpfusion.com/documentation/lead-generation/forminator/ "Forminator")
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/ "Gravity Forms")
- [Gravity PDF](https://wpfusion.com/documentation/lead-generation/gravity-pdf/ "Gravity PDF")
- [GravityView](https://wpfusion.com/documentation/lead-generation/gravityview/ "GravityView")
- [Ninja Forms](https://wpfusion.com/documentation/lead-generation/ninja-forms/ "Ninja Forms")
- [Piotnet Forms](https://wpfusion.com/documentation/lead-generation/piotnet-forms/ "Piotnet Forms")
- [SureForms](https://wpfusion.com/documentation/lead-generation/sureforms/ "SureForms")
- [Thrive Leads](https://wpfusion.com/documentation/lead-generation/thrive-leads/ "Thrive Leads")
- [WPForms](https://wpfusion.com/documentation/lead-generation/wpforms/ "WPForms")
- [WS Form](https://wpfusion.com/documentation/lead-generation/ws-form/ "WS Form")

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