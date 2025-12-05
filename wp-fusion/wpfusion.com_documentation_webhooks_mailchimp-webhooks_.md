---
url: "https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/"
title: "MailChimp Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#content)

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

# Mailchimp Webhooks

- Published onAugust 25, 2018
- Last updated on November 16, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- Mailchimp Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#overview) Overview

You can use [webhooks in Mailchimp](https://mailchimp.com/help/set-up-webhooks/) to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

There are two ways to configure webhooks in Mailchimp, either **globally to your account** (available on all plans), or using the **journey builder** (available with the Standard plan and higher).

### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#global-webhooks) Global webhooks

Global webhooks are managed in Mailchimp by going to your list and clicking **Settings » Webhooks**.

For this tutorial, we’ll be showing you how to create a new WordPress user when a contact is added to your Mailchimp list. See below for additional options when constructing the URL parameters.

First, click **Create New Webhook**. Then enter the URL to your WordPress site, including `?wpf_action=add` and your access key, like in the screenshot below.

![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-webhooks-870x1024.jpg)

For the triggers we’ve selected “Subscribes” and “Profile Updates”.

Now, every time a subscriber joins this list, a new WordPress user will be created based on their contact data in Mailchimp. If the user already exists on the site, they will be updated (no duplicate users will be created).

Since we’ve enabled “Profile Updates”, the user in WordPress will also be updated whenever their profile is modified within Mailchimp.

**Note:** The _Profile Updates_ trigger will only send a webhook when a subscriber’s fields have been edited, not their tags. To sync tag changes back to WordPress, you will need to create a webhook in a Journey.

### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#webhooks-in-journeys) Webhooks in journeys

With a Mailchimp Standard plan or higher, you can add webhooks to [journeys](https://mailchimp.com/help/about-customer-journeys/). This gives you more control over the webhook targeting.

For example you can:

- Import a WordPress user only when a specific tag is applied.
- Only import WordPress users after free trial customers have reached the end of their trial.
- Trigger an update of a WordPress user’s cached tags when a tag is applied in Mailchimp.

First, create a journey, and select your trigger. In this case we are using a _Tag Applied_ trigger.

[![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-overview-1024x590.jpg)](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-overview-scaled.jpg)

For the next step, add a Webhook action.

[![](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-webhook-overview-1024x741.jpg)](https://wpfusion.com/wp-content/uploads/2018/08/mailchimp-journey-webhook-overview-scaled.jpg)

Configure the webhook like so:

- **Webhook name:** Pick any name that will help you remember what the webhook does.
- **URL destination:** Enter the webhook URL to your site, following the examples below. You can also copy/paste your webhook URL out of the Webhooks section on the General tab in the WP Fusion settings.
- **Authentication:** None.
- **Headers:** None.
- **Content:** copy and paste the code below into the **Payload** field:

```json
{
  "contact_id": "*|EMAIL|*"
}
```

Finally, save and publish your journey.

Now when the selected tag is applied in Mailchimp, a user will automatically be imported in WordPress.

### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#webhook-url-methods) Webhook URL methods

WP Fusion supports several URL methods for webhooks:

#### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Mailchimp for that contact, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following URL:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY`

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true`

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer`

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in Mailchimp, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their Mailchimp contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Mailchimp after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Mailchimp where the password should be stored.

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

- [Overview](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#overview)
- [Global webhooks](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#global-webhooks)
- [Webhooks in journeys](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#webhooks-in-journeys)
- [Webhook URL methods](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#webhook-url-methods)
- [To update a user’s tags](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#to-update-a-users-tags)
- [To update a user’s tags and meta data](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#user-passwords)

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