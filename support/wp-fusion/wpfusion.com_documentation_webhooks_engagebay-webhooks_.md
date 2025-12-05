---
url: "https://wpfusion.com/documentation/webhooks/engagebay-webhooks/"
title: "EngageBay Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#content)

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

# EngageBay Webhooks

- Published onOctober 10, 2020
- Last updated on October 10, 2020

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- EngageBay Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#overview) Overview

You can use webhooks in EngageBay to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in EngageBay, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

There are two ways to manage webhooks in EngageBay, either via an **Automation** or in the **Account Settings.**

### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#automation-method) Automation Method

_(Recommended)_ The automation method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in an automation lets you easily visualize the entire automation flow, and see where individual contacts are in the process.

[![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-3-1024x772.jpg)](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-3.jpg)

You’ll also be able to visualize where a single contact is in the automation, when the webhook was sent, and whether or not it was received successfully. Using webhooks in automations gives you a lot more control and better reporting than using Global Webhooks (see below).

To use webhooks in automations first create an automation and add JSON IO node to it, like in the example above. A modal will appear where you can configure your webhook:

[![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-648x1024.jpg)](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks.jpg)

The settings are:

- **Node Name:** This is just a label in the automation builder, you can set it to whatever you want
- **URL:** This is the URL to your WordPress site. See Webhook URL Parameters below for a description of the options. Your access key can be found at the bottom of the General tab in the WP Fusion settings.
- **Type:** GET
- **Parameters:**`contact_id` needs to be set to `{{Subscriber.id}}`. This identifies the contact to WP Fusion
- **Set output to:** none

Now when the contact reaches the JSON IO step in the automation EngageBay will notify WP Fusion to load the contact’s data.

### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#account-settings-method) Account Settings Method

_(Advanced)_ You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in EngageBay (outside of an automation) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the `add` method, as then every contact in EngageBay will be given a WordPress user account.

To set up a webhook navigate to Account Settings » Webhooks in your EngageBay admin, and click **Add Webhook** to create a new webhook.

[![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-1-1024x553.jpg)](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-1.jpg)

For the Event Type you can select either `contact.update`, or `contact.create`.

[![](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-2-1024x722.jpg)](https://wpfusion.com/wp-content/uploads/2020/10/engagebay-webhooks-2.jpg)

For fields, choose **Select All**.

Keep in mind that, because these webhooks are global to your EngageBay account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the `update` or `update_tags` method it’s not necessary to also include those same webhooks in automations.

### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#webhook-url-parameters) Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from EngageBay for that contact, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following URL:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY`

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true`

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer`

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your EngageBay application, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their EngageBay contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to EngageBay after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in EngageBay where the password should be stored.

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

- [Overview](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#overview)
- [Automation Method](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#automation-method)
- [Account Settings Method](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#account-settings-method)
- [Webhook URL parameters](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#webhook-url-parameters)
- [To update a user's tags](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#to-update-a-users-tags)
- [To update a user's tags and meta data](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/engagebay-webhooks/#user-passwords)

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