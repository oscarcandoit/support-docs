---
url: "https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/"
title: "Groundhogg Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#content)

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

# Groundhogg Webhooks

- Published onSeptember 16, 2021
- Last updated on November 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- Groundhogg Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#overview) Overview

You can use webhooks in Groundhogg to sync contact data back to WP Fusion installed on another website.

Webhooks can be used to automatically import Groundhogg contacts as new WordPress users, or trigger an update of existing users’ metadata and tags.

**Note:** This tutorial only applies if you are using WP Fusion to connect to Groundhogg on another site, over the REST API. If WP Fusion and Groundhogg are installed on the same site, edits in Groundhogg are synced back to WP Fusion automatically (there’s no need for webhooks).

Webhooks in Groundhogg require the [Advanced Features](https://www.groundhogg.io/downloads/advanced-features/?aff=124) addon.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#getting-started) Getting Started

Open a funnel (or create a new one) and create a new trigger.

For example, to trigger WP Fusion to sync a contact when a tag is applied, choose the Tag Applied trigger. Then add a new step, add a Webhook action.

[![a dashboard interface featuring tabs for triggers, actions, logic, and all. in actions, categories such as delay, communications, crm, wordpress, and groundhogg display green icons for automation tasks like “webhooks.”.](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-action.png)](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-action.png)

Choose **POST** as Method, and in the **Target URL** field, put the URL to your website.

In the **Payload Format**, select “x-www-form-urlencoded”

[![screenshot of groundhogg webhooks settings using the post method to https://mysite.com/. payload format is x www form urlencoded, displaying contact id, wpf action, and access key fields with example values.](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-setting1-1024x647.png)](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-flow-webhook-setting1.png)

The values in the **Payload** section depend on the type of webhook you want to send. See below for examples.

For each you will need to supply your access key, which can be obtained from the bottom of the General tab in the WP Fusion settings:

![](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-webhook-access-key-1024x367.jpeg)

#### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the Groundhogg contact record, under Params, you should have:

```
contact_id = {id}
wpf_action = update_tags
access_key = [your access key]
```

#### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Groundhogg for that contact, under Params, you should have:

```
contact_id = {id}
wpf_action = update
access_key = [your access key]
```

#### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#create-a-new-user) Create a new user

Using this method, you can register a new user on your website when a contact is created in Groundhogg. Under Params, you should have:

```
contact_id = {id}
wpf_action = add
access_key = [your access key]
```

There are two additional options, which you can leave out if you don’t need them.

```
send_notification = true
role = subscriber
```

If you set `send_notification` to `true`, the user will be sent a welcome email with their username, password, and a link to log in on your site.

You can also set the `role` parameter to assign users a specific role on your site. By default users will be imported with the role set in the WordPress’ Settings » General “New User Default Role” field, but sometimes you may want to create users with a different role depending on conditions in your campaign sequence.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Groundhogg, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their Groundhogg contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Groundhogg after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Groundhogg where the password should be stored.

![](https://wpfusion.com/wp-content/uploads/2021/09/Groundhogg-Return-password.jpeg)

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

- [Overview](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#overview)
- [Getting Started](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#getting-started)
- [To update a user’s tags](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#to-update-a-users-tags)
- [To update a user’s tags and meta data](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/groundhogg-webhooks/#user-passwords)

### You may also like

[![2527747 groundhoggreviewcopy 011425](https://wpfusion.com/wp-content/uploads/2024/12/2527747_GroundhoggReviewCopy_011425-300x158.jpg)](https://wpfusion.com/reviews/groundhogg-crm-marketing-automation-review/)

Reviews

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [Groundhogg Review: Is this the Best CRM & Marketing Automation For WordPress? (Find Out)](https://wpfusion.com/reviews/groundhogg-crm-marketing-automation-review/)

Groundhogg stands out as a top-tier CRM and marketing automation tool for WordPress. Learn about its robust set of features, pricing, and how its seamless WP Fusion integration can transform your WordPress site’s marketing capabilities.

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