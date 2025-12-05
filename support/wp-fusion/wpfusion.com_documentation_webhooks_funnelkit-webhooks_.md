---
url: "https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/"
title: "Autonami Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#content)

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

# FunnelKit Webhooks

- Published onAugust 2, 2021
- Last updated on December 22, 2022

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- FunnelKit Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#overview) Overview

With [FunnelKit Pro](https://wpfusion.com/go/autonami), you can use webhooks in automations to connect to WP Fusion installed on another site.

Using webhooks you can import new users on your WordPress site based on rules in FunnelKit, or update existing users’ meta data and tags.

For example, you could sell access to a course using WooCommerce and FunnelKit on _Site A_, and using a webhook, WP Fusion on _Site B_ can automatically import the new customer and enroll them in the course they purchased.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#setup) Setup

Navigate to FunnelKit » Automations and create a new automation to handle the webhook. Select a trigger (such as a tag being applied), and click the Add Direct Action button to add a new action.

[![](https://wpfusion.com/wp-content/uploads/2021/08/send-data-http-automation-autonami-1024x730.png)](https://wpfusion.com/wp-content/uploads/2021/08/send-data-http-automation-autonami.png)

In the popup that appears, select Send Data, and then HTTP Request.

In the webhook settings, configure the webhook like in the screenshot below.

[![](https://wpfusion.com/wp-content/uploads/2021/08/autonami-webhooks-1024x683.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/autonami-webhooks.jpg)

The settings should be:

- **Enter URL:** This is the URL to the website where WP Fusion is installed.
- **Method:** Either GET or POST, but sometimes POST requests get blocked by security plugins, so we recommend GET.
- **Data:** At minimum you must have:

  - **contact\_id**: `{{contact_id}}` (this tells WP Fusion which contact to import)
  - **access\_key**: (the access key from the bottom of the General tab in the WP Fusion settings)
  - **wpf\_action**: (see below for options)

### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#webhook-parameters) Webhook parameters

You can format your webhook parameters in a few different ways to customize the behavior. For each you will need to supply your access key, which can be obtained from the bottom of the main settings panel in your WP Fusion settings.

#### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the data parameters should be

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
```

#### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from FunnelKit for that contact, the data parameters for the webhook should look like the following:

```
contact_id = {{contact_id}}
wpf_action = update
access_key = [your access key]
```

#### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following:

```
contact_id = {{contact_id}}
wpf_action = add
access_key = [your access key]
```

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
send_notification = true
```

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

```
contact_id = {{contact_id}}
wpf_action = update_tags
access_key = [your access key]
role = customer
```

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in FunnelKit, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their FunnelKit contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to FunnelKit after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in FunnelKit where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

After a new user is created, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

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

- [Overview](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#overview)
- [Setup](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#setup)
- [Webhook parameters](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#webhook-parameters)
- [To update a user’s tags](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#to-update-a-users-tags)
- [To update a user’s tags and meta data](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/funnelkit-webhooks/#user-passwords)

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