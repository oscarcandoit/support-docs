---
url: "https://wpfusion.com/documentation/webhooks/zoho-webhooks/"
title: "Zoho Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#content)

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

# Zoho Webhooks

- Published onMarch 25, 2018
- Last updated on September 12, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- Zoho Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#overview) Overview

You can use webhooks in Zoho to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on workflow rules in Zoho, or update existing users’ meta data and tags.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

#### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#getting-started) Getting started

Webhooks are managed in Zoho under **Setup >> Workflow Rules**. If you’re already logged into your Zoho account, you should be able to access this page by [following this link](https://crm.zoho.com/crm/ShowSetup.do?tab=automate&subTab=workflow&step=showAllRules).

For this tutorial, we’ll be showing you how to create a new WordPress user when a specific tag is applied to a Zoho contact. See below for additional options when constructing the URL parameters.

From the Workflow Rules screen, first create a new **Workflow Rule**:

[![](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-create-workflow-rule.png)](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-create-workflow-rule.png)

The module should be **Contacts**. You can specify a rule name and description to help organize your Workflow Rules.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20435'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-workflow-trigger.png)

The first step, **When**, specifies when the Workflow Rule should apply. Select “Record action”, and choose “Edit” as in the screenshot above.

For the field to be used as the trigger, select “Tag”, and then press **Done** to move on to the next step.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20321'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-workflow-condiion.png)

Create a condition, so that the rule is only processed when the desired tag is applied. In this case, we’re using the tag **Import to WordPress**. Then click **Next**.

For the first action, create an action to remove the tag **Import to WordPress**. This will stop the workflow from running multiple times on contacts who have already been imported. Then add a Webhook action:

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20836'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-webhook-setup2.png)

The **URL to Notify** should be the URL to your WordPress site, followed by `?wpf_action=add` and `&access_key=ACCESSKEY`, where `ACCESSKEY` is the access key provided at the bottom of the **General Settings** tab in the WP Fusion settings on your site.

Then, under **URL Parameters** add a parameter for contact\_id, and select Contacts and Contact Id from the dropdowns to the right. This will send the contact ID of the contact to be imported. Then click **Save and Associate** to continue.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20587'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2018/03/Zoho-workflow-setup.png)

After setting everything up, your Workflow Rule should look like the screenshot above. Go ahead and save the Workflow Rule.

Now, every time the tag **Import to WordPress** is applied to a contact, a new WordPress user will be created based on their contact data in Zoho. If the user already exists on the site, they will be updated (no duplicate users will be created).

Zoho provides a wide variety of options for triggering a Workflow Rule. You can send webhooks when tags are applied, when contacts are added, when contacts are updated, and using date triggers. For a full list of options in structuring the webhook URL, see the sections below:

#### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from Zoho for that contact, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following URL:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY`

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true`

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer`

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your Zoho application, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their Zoho contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/zoho-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to Zoho after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in Zoho where the password should be stored.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20130'%3E%3C/svg%3E)

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

- [Overview](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#overview)
- [Getting started](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#getting-started)
- [To update a user’s tags](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#to-update-a-users-tags)
- [To update a user’s tags and meta data](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/zoho-webhooks/#user-passwords)

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)