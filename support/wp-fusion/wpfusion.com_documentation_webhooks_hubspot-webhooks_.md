---
url: "https://wpfusion.com/documentation/webhooks/hubspot-webhooks/"
title: "HubSpot Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#content)

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

# HubSpot Webhooks

- Published onSeptember 4, 2018
- Last updated on February 13, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- HubSpot Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#overview) Overview

You can use [webhooks in HubSpot](https://knowledge.hubspot.com/articles/kcs_article/workflows/how-do-i-use-webhooks-with-hubspot-workflows) to send data back to your WordPress site using WP Fusion. Using these webhooks, you can create new users on your WordPress site, or update existing users’ meta data and lists.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#webhooks-in-workflows) Webhooks in Workflows

Workflows offer a visual way to configure your webhooks, and allow for custom triggers such as list assignment changes. Workflows are available in the following HubSpot editions:

- Marketing Hub Professional
- Marketing Hub Enterprise
- Sales Hub Enterprise

Webhooks are managed in HubSpot by going to **Automation » Workflows** from the top navigation menu.

For this tutorial, we’ll be showing you how to create a new WordPress user when a contact is added to a specific HubSpot list. See below for additional options when configuring the workflow action.

First create a new workflow, and then add an enrollment trigger. Here we’ve set workflow to run whenever someone is added to the static list “Membership Trial.”

[![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-1-1024x742.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-1.jpg)

Click the + symbol to add a new action to the workflow, and from the Actions panel, select **Update WordPress**.

[![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-2-1024x503.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-2.jpg)

A panel will appear where you can configure the webhook to your WordPress site.

[![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-3-1024x629.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-workflow-actions-3.jpg)

In this example, we’ve set the action to **Add user**, and disabled the welcome email that is sent to new users.

Now, every time a contact is added to this list, a new WordPress user will be created based on their contact data in HubSpot. If the user already exists on the site, they will be updated (no duplicate users will be created).

The available options in the workflow action are:

**URL to your WordPress site:** This is the URL to the site where you have WP Fusion installed.

**Your access key:** This is the access key from the bottom of the General tab in the WP Fusion settings. This helps to secure your webhook URL.

**Action:** There are three options:

- **Update user’s lists:** If a user already exists on your site for this contact, their lists will be loaded from their HubSpot contact record.
- **Update user’s metadata lists:** If a user already exists on your site for this contact, their lists and custom field values will be loaded from their HubSpot contact record.
- **Add user:** This will import the contact as a new WordPress user. If a user already exists with that contact ID, their lists and custom field values will be loaded from HubSpot.

**Send a welcome email to new users:** If your webhook action is set to Add, you can choose whether or not to send a welcome email to new users. If you select Yes, the default WordPress welcome email will be sent to any newly imported users, containing a link to reset their password.

**Note:** New user accounts will be created with the default user role for the site, which is usually Subscriber. If you want to set a custom role, you can do so by configuring a webhook in a [private app](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#webhooks-in-private-apps) and setting the `&role=` parameter.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in HubSpot, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their HubSpot contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#example-syncing-changed-email-addresses) Example – syncing changed email addresses

As an example, to sync changes in a contact’s email address (or any other custom field) back to WordPress automatically, choose **Contact properties** for the trigger filter type, and then choose **Email** and **is known**.

[![](https://wpfusion.com/wp-content/uploads/2018/09/hubspt-webhooks-email-changed-1024x548.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspt-webhooks-email-changed-scaled.jpg)

Then click on the **Re-enrollment** tab, and select _Email is known_ as a re-enrollment trigger.

[![](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-re-enrollment.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-re-enrollment.jpg) Finally, add an **Update WordPress** action following the guide above, and select **Update user’s metadata lists** as the webhook action.

Now, any time a contact’s email address is updated, the workflow will be triggered and the new address will be synced back to WordPress automatically.

For more information on re-enrollment triggers and the **is known** condition, [see the HubSpot documentation](https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow).

### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#webhooks-in-private-apps) Webhooks in private apps

Another option for configuring webhooks with WP Fusion is to use a [private app](https://developers.hubspot.com/docs/api/create-and-edit-webhook-subscriptions-in-private-apps). Private apps are supported on all HubSpot plans, though they are less flexible than workflows since they can only be triggered when a contact is created or updated (whereas workflows can use conditional logic, and list-based triggers).

To set up a private app and configure webhooks, navigate to Settings » Integrations » Private Apps and create a new private app.

[![Creating a private app in HubSpot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-basic-info-1024x535.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-basic-info-scaled.jpg) Give your app a descriptive name, such as “WP Fusion” and the name of your site.

Give your app a descriptive name, and click on the Scopes tab to add scopes.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-scopes-1024x654.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-scopes-scaled.jpg)

The only required scope for the webhook is `crm.objects.contacts.read`, you can select it from the Scopes list under the CRM header. Then click the Webhooks tab to configure your webhook.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-setup-1-1024x665.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-setup-1-scaled.jpg)

Enter the URL to your site, following the URL parameters guide in the next section. In this example we are using `&wpf_action=update` to update the corresponding WordPress user whenever a contact’s properties are updated in HubSpot.

Click _Create subscription_ to select the triggers for the webhook.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-subscriptions-1024x547.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hs-webhooks-private-app-subscriptions-scaled.jpg) The HubSpot webhook subscription settings allow you to choose which updates should trigger the webhook.

For the object type, select **Contact**.

For _Listen for which events?_ you can either choose **Contact created** or **Property changed**. In this example we’ve chosen Property changed.

For _Which properties?_ select the property updates you’d like to trigger the webhook. In this case we will trigger an update in WordPress when the contact’s address, “checkbox\_field”, or “membership\_level” are changed.

Save and publish the private app, and then proceed to edit one of the selected properties on one of your contacts.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-private-app-webhook-logs-1024x681.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-private-app-webhook-logs-scaled.jpg) The HubSpot webhook logs show whenever a webhook was sent to WP Fusion on your WordPress site.

Under Logs » Webhooks in the private app settings, you should see the outgoing webhooks triggered by your contact property updates.

In the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) on your WordPress site you will see the incoming webhook, as well as the updated data that was loaded from HubSpot.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-logs-1024x580.jpg)](https://wpfusion.com/wp-content/uploads/2018/09/hubspot-webhooks-logs.jpg) The WP Fusion logs show that a webhook was received from HubSpot, as well as the updated properties and lists that were loaded.

That’s it! Contact property updates in HubSpot will now sync back to WordPress automatically 🎉

### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#webhook-url-parameters) Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior. Your access key can be found in the [Webhooks settings section](https://wpfusion.com/documentation/webhooks/about-webhooks/) on the General tab in the WP Fusion settings.

#### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#to-update-a-users-lists) To update a user’s lists

To update an existing WordPress user’s lists from the contact record, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#to-update-a-users-lists-and-meta-data) To update a user’s lists and meta data

To update a user’s lists and pull any new meta data from HubSpot for that contact, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following URL:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY`

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true`

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer`

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your HubSpot application, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their HubSpot contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to HubSpot after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in HubSpot where the password should be stored.

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

- [Overview](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#overview)
- [Webhooks in Workflows](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#webhooks-in-workflows)
- [Example - syncing changed email addresses](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#example-syncing-changed-email-addresses)
- [Webhooks in private apps](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#webhooks-in-private-apps)
- [Webhook URL parameters](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#webhook-url-parameters)
- [To update a user's lists](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#to-update-a-users-lists)
- [To update a user's lists and meta data](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#to-update-a-users-lists-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#user-passwords)

### You may also like

[![2501696 hubspot integration v1 111924](https://wpfusion.com/wp-content/uploads/2024/11/2501696_Hubspot-Integration_v1_111924-300x158.jpg)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [HubSpot-WordPress Integration: How to Connect (Step-by-Step Guide)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

HubSpot is a full-spectrum inbound marketing and automation platform that makes it easy for businesses to execute, manage, and measure their inbound marketing efforts.

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