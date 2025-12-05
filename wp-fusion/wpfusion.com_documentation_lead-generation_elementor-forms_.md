---
url: "https://wpfusion.com/documentation/lead-generation/elementor-forms/"
title: "Connect Elementor Forms to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/lead-generation/elementor-forms/#content)

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

# Elementor Forms

- Published onDecember 13, 2018
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Lead Generation](https://wpfusion.com/documentation/#lead-generation)
- /
- Elementor Forms

### [\#](https://wpfusion.com/documentation/lead-generation/elementor-forms/\#overview) Overview

Using WP Fusion with the Forms element in [Elementor Pro](https://elementor.com/) allows you to send form submissions to any one of of [40+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### [\#](https://wpfusion.com/documentation/lead-generation/elementor-forms/\#setup) Setup

After creating a form, open the Actions After Submit pane and select WP Fusion from the dropdown of available actions.

![](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-1.jpg)

A new panel will appear where you can specify any tags that should be applied in your CRM when the form is submitted, as well as set up field mapping between fields on your form and fields in your CRM.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-mapping.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-mapping.jpg)

If your CRM supports lists in addition to tags, you will see an option to **Apply Lists** to contacts who submit the form.

You can also check **Add Only** if you want the form submission to only create new contacts, not update existing ones. If Add Only is enabled and an existing contact is found in your CRM (with the same email address), no data will be synced.

### [\#](https://wpfusion.com/documentation/lead-generation/elementor-forms/\#return-after-login) Return after login

It’s possible to require an email optin via an Elementor form in order to access protected content on your site.

To set this up, first go into the post you’d like to protect, and in the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/), enable **Users must be logged in to view this content.** You can optionally specify some required tags. For the **Redirect if access is denied**, select the page with your Elementor form from the dropdown.

Then in the main [WP Fusion settings](https://wpfusion.com/documentation/getting-started/general-settings/), enable the option for [Form Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login). This will start a tracking session whenever your Elementor form is submitted.

Finally, enable the setting for [Return After Login](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login).

Now, when a visitor tries to access the protected content, they will be redirected to the page with your Elementor optin form on it. When the form is submitted, a contact record will be created in your connected CRM, and any specified tags will be applied.

This will start [an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/), which unlocks any content protected by WP Fusion. Finally, the Return After Login feature will redirect the lead back to the post or page they’d previously tried to access.

### [\#](https://wpfusion.com/documentation/lead-generation/elementor-forms/\#site-tracking-scripts) Site tracking scripts

When a visitor submits an Elementor form, **WP Fusion will automatically identify them to your CRM’s tracking script** ( [with supported platforms](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/)). This allows you to track page views and interactions on your site, including activity from before the form was submitted.

However, the tracking scripts are triggered each time a new page is _loaded_.

Because Elementor forms are submitted in a background request (the page does not fully reload), the form submission itself will not identify the contact. **They will be identified on the next page they visit** on your site.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/12/brevo-site-tracking-logs-1024x566.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/brevo-site-tracking-logs.jpg) The [event log in Brevo](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#brevo) shows contacts who were identified after submitting an Elementor form. Their activity is also shown on their contact record.

If you want to ensure that all contacts are immediately identified to the site tracking scripts after a form is submitted, you can [configure a redirect action on your form](https://elementor.com/help/redirect-visitors-after-they-submit-a-form/).

By redirecting visitors to a new page with a confirmation message, this will trigger a new page view, and they will be immediately identified to the tracking script.

### [\#](https://wpfusion.com/documentation/lead-generation/elementor-forms/\#syncing-historical-entries) Syncing historical entries

If you already have existing Elementor Forms entries from before you installed WP Fusion, you can use a batch processing tool to export all of those entries to your CRM.

First [configure your forms with WP Fusion actions](https://wpfusion.com/documentation/lead-generation/elementor-forms/#setup). Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

[![](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-batch-ops-1024x616.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/elementor-forms-batch-ops.jpg)

Select “ **Elementor Forms submissions**” from the list of options, and click Create Background Task.

WP Fusion will go through all of your historical entries, processing each according to the actions set up on the corresponding form. A status bar will appear at the top of the page indicating the progress.

After each entry is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Elementor Forms to ActiveCampaign](https://wpfusion.com/connect/connect-elementor-forms-to-activecampaign/)  \|
- [Connect Elementor Forms to AgileCRM](https://wpfusion.com/connect/connect-elementor-forms-to-agilecrm/)  \|
- [Connect Elementor Forms to Autopilot](https://wpfusion.com/connect/connect-elementor-forms-to-autopilot/)  \|
- [Connect Elementor Forms to Bento](https://wpfusion.com/connect/connect-elementor-forms-to-bento/)  \|
- [Connect Elementor Forms to BirdSend](https://wpfusion.com/connect/connect-elementor-forms-to-birdsend/)  \|
- [Connect Elementor Forms to Brevo](https://wpfusion.com/connect/connect-elementor-forms-to-brevo/)  \|
- [Connect Elementor Forms to Capsule](https://wpfusion.com/connect/connect-elementor-forms-to-capsule/)  \|
- [Connect Elementor Forms to Constant Contact](https://wpfusion.com/connect/connect-elementor-forms-to-constant-contact/)  \|
- [Connect Elementor Forms to ConvertKit](https://wpfusion.com/connect/connect-elementor-forms-to-convertkit/)  \|
- [Connect Elementor Forms to ConvesioConvert](https://wpfusion.com/connect/connect-elementor-forms-to-convesioconvert/)  \|
- [Connect Elementor Forms to Copper](https://wpfusion.com/connect/connect-elementor-forms-to-copper/)  \|
- [Connect Elementor Forms to Customer.io](https://wpfusion.com/connect/connect-elementor-forms-to-customer-io/)  \|
- [Connect Elementor Forms to Customerly](https://wpfusion.com/connect/connect-elementor-forms-to-customerly/)  \|
- [Connect Elementor Forms to Drip](https://wpfusion.com/connect/connect-elementor-forms-to-drip/)  \|
- [Connect Elementor Forms to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-elementor-forms-to-dynamics-365-marketing/)  \|
- [Connect Elementor Forms to EmailOctopus](https://wpfusion.com/connect/connect-elementor-forms-to-emailoctopus/)  \|
- [Connect Elementor Forms to EngageBay](https://wpfusion.com/connect/connect-elementor-forms-to-engagebay/)  \|
- [Connect Elementor Forms to Flexie](https://wpfusion.com/connect/connect-elementor-forms-to-flexie/)  \|
- [Connect Elementor Forms to FluentCRM](https://wpfusion.com/connect/connect-elementor-forms-to-fluentcrm/)  \|
- [Connect Elementor Forms to FunnelKit](https://wpfusion.com/connect/connect-elementor-forms-to-funnelkit/)  \|
- [Connect Elementor Forms to Gist](https://wpfusion.com/connect/connect-elementor-forms-to-gist/)  \|
- [Connect Elementor Forms to Groundhogg](https://wpfusion.com/connect/connect-elementor-forms-to-groundhogg/)  \|
- [Connect Elementor Forms to HighLevel](https://wpfusion.com/connect/connect-elementor-forms-to-highlevel/)  \|
- [Connect Elementor Forms to HubSpot](https://wpfusion.com/connect/connect-elementor-forms-to-hubspot/)  \|
- [Connect Elementor Forms to Infusionsoft](https://wpfusion.com/connect/connect-elementor-forms-to-infusionsoft/)  \|
- [Connect Elementor Forms to Intercom](https://wpfusion.com/connect/connect-elementor-forms-to-intercom/)  \|
- [Connect Elementor Forms to Jetpack CRM](https://wpfusion.com/connect/connect-elementor-forms-to-jetpack-crm/)  \|
- [Connect Elementor Forms to Kartra](https://wpfusion.com/connect/connect-elementor-forms-to-kartra/)  \|
- [Connect Elementor Forms to Keap](https://wpfusion.com/connect/connect-elementor-forms-to-keap/)  \|
- [Connect Elementor Forms to Klaviyo](https://wpfusion.com/connect/connect-elementor-forms-to-klaviyo/)  \|
- [Connect Elementor Forms to KlickTipp](https://wpfusion.com/connect/connect-elementor-forms-to-klicktipp/)  \|
- [Connect Elementor Forms to Loopify](https://wpfusion.com/connect/connect-elementor-forms-to-loopify/)  \|
- [Connect Elementor Forms to MailChimp](https://wpfusion.com/connect/connect-elementor-forms-to-mailchimp/)  \|
- [Connect Elementor Forms to MailerLite](https://wpfusion.com/connect/connect-elementor-forms-to-mailerlite/)  \|
- [Connect Elementor Forms to Mailjet](https://wpfusion.com/connect/connect-elementor-forms-to-mailjet/)  \|
- [Connect Elementor Forms to MailPoet](https://wpfusion.com/connect/connect-elementor-forms-to-mailpoet/)  \|
- [Connect Elementor Forms to Maropost](https://wpfusion.com/connect/connect-elementor-forms-to-maropost/)  \|
- [Connect Elementor Forms to Mautic](https://wpfusion.com/connect/connect-elementor-forms-to-mautic/)  \|
- [Connect Elementor Forms to NationBuilder](https://wpfusion.com/connect/connect-elementor-forms-to-nationbuilder/)  \|
- [Connect Elementor Forms to Omnisend](https://wpfusion.com/connect/connect-elementor-forms-to-omnisend/)  \|
- [Connect Elementor Forms to Ontraport](https://wpfusion.com/connect/connect-elementor-forms-to-ontraport/)  \|
- [Connect Elementor Forms to Ortto](https://wpfusion.com/connect/connect-elementor-forms-to-ortto/)  \|
- [Connect Elementor Forms to Pipedrive](https://wpfusion.com/connect/connect-elementor-forms-to-pipedrive/)  \|
- [Connect Elementor Forms to Platformly](https://wpfusion.com/connect/connect-elementor-forms-to-platformly/)  \|
- [Connect Elementor Forms to Quentn](https://wpfusion.com/connect/connect-elementor-forms-to-quentn/)  \|
- [Connect Elementor Forms to Salesflare](https://wpfusion.com/connect/connect-elementor-forms-to-salesflare/)  \|
- [Connect Elementor Forms to Salesforce](https://wpfusion.com/connect/connect-elementor-forms-to-salesforce/)  \|
- [Connect Elementor Forms to Sender](https://wpfusion.com/connect/connect-elementor-forms-to-sender/)  \|
- [Connect Elementor Forms to SendFox](https://wpfusion.com/connect/connect-elementor-forms-to-sendfox/)  \|
- [Connect Elementor Forms to Tubular](https://wpfusion.com/connect/connect-elementor-forms-to-tubular/)  \|
- [Connect Elementor Forms to User.com](https://wpfusion.com/connect/connect-elementor-forms-to-user-com/)  \|
- [Connect Elementor Forms to WP ERP](https://wpfusion.com/connect/connect-elementor-forms-to-wp-erp/)  \|
- [Connect Elementor Forms to Zoho](https://wpfusion.com/connect/connect-elementor-forms-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/lead-generation/elementor-forms/#overview)
- [Setup](https://wpfusion.com/documentation/lead-generation/elementor-forms/#setup)
- [Return after login](https://wpfusion.com/documentation/lead-generation/elementor-forms/#return-after-login)
- [Site tracking scripts](https://wpfusion.com/documentation/lead-generation/elementor-forms/#site-tracking-scripts)
- [Syncing historical entries](https://wpfusion.com/documentation/lead-generation/elementor-forms/#syncing-historical-entries)

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