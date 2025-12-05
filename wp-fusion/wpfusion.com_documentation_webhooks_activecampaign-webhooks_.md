---
url: "https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/"
title: "ActiveCampaign Webhooks"
---

[Skip to content](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#content)

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

# ActiveCampaign Webhooks

- Published onApril 17, 2016
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks](https://wpfusion.com/documentation/#webhooks)
- /
- ActiveCampaign Webhooks

### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#overview) Overview

You can use webhooks in ActiveCampaign to send data back to your WordPress site using WP Fusion. Using webhooks you can create new users on your WordPress site based on automations in ActiveCampaign, or update existing users’ meta data and tags.

**Note:** SiteGround’s anti-bot captcha system automatically blocks all incoming ActiveCampaign webhooks. If webhooks aren’t working on SiteGround, contact SiteGround support and ask for the bot protection to be turned off for your account.

Having trouble receiving webhooks? [Check out our troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/).

There are two ways to manage webhooks in ActiveCampaign, either via an **Automation** or in the **Developer Settings.**

### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#automation-method) Automation method

**Note:** Automation webhooks are no longer available on the ActiveCampaign _Starter_ plan. To use webhooks in automations you will need to upgrade to the _Plus_ plan or higher.

_(Recommended)_ The automation method is best if you need to send a webhook to create or update a WordPress user as part of a specific process. For example:

- Tag “Website Access” is added
- Send webhook to create WordPress user
- Send welcome email
- Wait 3 days
- Apply tag “Unlock Course Two”
- Send webhook to update tags

Using a webhook in an automation lets you easily visualize the entire automation flow, and see where individual contacts are in the process.

[![](https://wpfusion.com/wp-content/uploads/2016/04/ac-automation-webhook-password-1024x989.jpg)](https://wpfusion.com/wp-content/uploads/2016/04/ac-automation-webhook-password-scaled.jpg)

You’ll also be able to visualize where a single contact is in the automation, when the webhook was sent, and whether or not it was received successfully. Using webhooks in automations gives you a lot more control and better reporting than using Global Webhooks (see below).

To use webhooks in automations first create an automation and add a webhook to it, like in the example above. You have three options for the webhook, **update**, **update\_tags** and **add**(explained below). For each you will need to supply your access key, which can be obtained from the main panel in your WP Fusion settings.

![ac-webhook2](https://wpfusion.com/wp-content/uploads/2016/04/ac-webhook2.jpg)

When the contact reaches the webhook step in the automation ActiveCampain will notify WP Fusion to load the contact’s data from ActiveCampaign.

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#a-note-on-failed-webhooks) A note on “failed” webhooks

When viewing automation reports you may see your webhooks being marked as “failed” by ActiveCampaign, like in the screenshot below.

[![](https://wpfusion.com/wp-content/uploads/2016/04/Image-2020-10-22-at-4.02.54-PM.png)](https://wpfusion.com/wp-content/uploads/2016/04/Image-2020-10-22-at-4.02.54-PM.png)

This does _not necessarily mean that the webhook failed_. ActiveCampaign will mark any webhook as failed if your server takes longer than 5 seconds to respond.

Since there’s a fair deal of processing involved in receiving a webhook ( [see some average timings here](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#webhook-performance)), it’s not uncommon for your server to take longer than 5 seconds, especially with shared hosting.

For a definitive answer as to whether the webhook was processed, you can [check the WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

If you’d prefer not to see the _Failed_ symbol in the automation reports, you can also set your webhooks to [run asynchronously](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-method).

This does not speed up the time required to process the webhook, or make webhooks more reliable, it just means that WP Fusion will immediately respond to ActiveCampaign that every webhook was successful, and then actually process the webhook a few seconds later.

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#verifying-that-webhooks-worked) Verifying that webhooks worked

There are some cases where a webhook to import a new user might fail— like if your site is briefly unavailable while installing updates, or ActiveCampaign’s API takes too long to load the data for the new user, and times out.

If you’re experiencing unreliable webhooks you may want to set up a notification and/or an automatic retry. Take a look at the example below, or [click here to load the example template into your ActiveCampaign account](https://tplshare.com/L8sbbb9).

[![](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback-1024x1011.jpg)](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback.jpg) This ActiveCampaign automation sends a notification and retries the webhook if a user import fails.

Since we’re generating a password and syncing it back to ActiveCampaign, you can check against the value of this field to see if the webhook worked (you could also check against a tag, or the User ID field).

In this automation we have a 5 minute wait after sending the webhook. If the contact’s Password field is blank, the automation first sends a notification to an admin, and then retries the webhook.

The _User Imported_ [goal](https://help.activecampaign.com/hc/en-us/articles/218813777-How-to-use-the-Goal-automation-action) is set up like so:

[![](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback-goal-1024x605.jpg)](https://wpfusion.com/wp-content/uploads/2016/04/ac-import-webhook-with-fallback-goal.jpg)

Using the condition _Password is not blank_ means that if any time the contact’s password is updated, they will immediately jump to the goal, and then proceed on to the next step which sends a welcome email.

This means that if everything is running properly, the new user will be imported and a welcome email sent within a few seconds. But if there are any delays or errors, a notification will be sent to an admin within five minutes— you can then investigate the contact to see why they weren’t imported successfully (i.e. an invalid email address) or let the retry cycle run the webhook again.

### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#developer-settings-method) Developer settings method

_(Advanced)_ You can also set up webhooks which are global to your account. This is best if you’re manually editing contact records in ActiveCampaign (outside of an automation) and need these changes synced to WordPress.

**Note:** It’s not recommended to set up global webhooks with the `add` method, as then every contact in ActiveCampaign will be given a WordPress user account.

To set up a webhook navigate to Developer » Webhooks in your ActiveCampaign admin settings, and click Add to create a new webhook.

[![ActiveCampaign webhook modal](https://wpfusion.com/wp-content/uploads/2016/04/activecampaign-webhooks-2023-1024x737.jpg)](https://wpfusion.com/wp-content/uploads/2016/04/activecampaign-webhooks-2023.jpg)

For **URL** enter the URL to your site with your access key following the patterns [in the next section](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#webhook-url-parameters).

Under **Events** select the events that should trigger the webhook:

- _Contact Updated_ will be triggered whenever a contact is edited, as well as when tags are applied or removed.
- _Contact Tag Added_ and _Contact Tag Removed_ will only be triggered when tags are edited, not when a contact’s custom fields change.

For **Initialize From**, select which types of events should trigger the webhook. ActiveCampaign [has a description of the types here](https://help.activecampaign.com/hc/en-us/articles/115001403484-Working-with-webhooks).

You shouldn’t enable _By the API_ as this will send a webhook after WP Fusion sends an API call to apply a tag, which is redundant.

Note that, despite the descriptions in the ActiveCampaign help portal, we have tested and found that tags applied in automations will trigger a global webhook if it is set to **By any user**. If you’re experiencing unexpected webhooks or a high volume of webhooks, it’s recommended to disable that trigger.

**Note:** November 21st, 2023. We have confirmed with ActiveCampaign support that **_By any user_** is also triggered by API calls. This means it is not currently possible to trigger webhooks based on manual contact edits without also triggering them based on API activity.

This is acknowledged as a bug, but they are only releasing the fix on an account-by-account basis. If you want to sync manual contact edits back to WordPress using global webhooks, you should [contact ActiveCampaign support](https://help.activecampaign.com/hc/en-us/requests/new) and ask for this fix to be enabled on your account— so that **_By any user_** webhooks are _only_ triggered by users and not API activity.

Keep in mind that, because these webhooks are global to your ActiveCampaign account, bulk editing contacts will trigger webhooks to be sent to your site for every edited contact, which may make your WordPress site temporarily unstable.

**Note:** If you’ve set up global webhooks with the `update` or `update_tags` method it’s not necessary to also include those same webhooks in automations.

### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#webhook-url-parameters) Webhook URL parameters

You can format your webhook URL in a few different ways to customize the behavior:

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#to-update-a-users-tags) To update a user’s tags

To update an existing WordPress user’s tags from the contact record, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update_tags&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#to-update-a-users-tags-and-meta-data) To update a user’s tags and meta data

To update a user’s tags and pull any new meta data from ActiveCampaign for that contact, the URL for the webhook should look like the following:

`https://mydomain.com/?wpf_action=update&access_key=YOURACCESSKEY`

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#create-a-new-user) Create a new user

To create a new user, use the following URL:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY`

You can also specify additional parameters in user creation. For example, to send the user a welcome email containing a link to log in on your site, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&send_notification=true`

You can also specify a specific user role to be assigned to the new user. For example, to set the new user to the “customer” role, use the following:

`https://mydomain.com/?wpf_action=add&access_key=YOURACCESSKEY&role=customer`

Note that you have to have registered a “customer” role on your site for this to work. By default users will be assigned the role of “subscriber”.

The add method **will update a user** if an existing user already exists. It will not create a duplicate user.

**Note:** By default, user accounts will be created with their email address as the username and a randomly generated password. However, if you have created a custom username field and password field in your ActiveCampaign application, and enabled these fields in WP Fusion for sync with `user_login` and `user_pass` on your website, the new users will be given the usernames and passwords stored in their ActiveCampaign contact record.

#### [\#](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/\#user-passwords) User passwords

New user accounts will be created with an automatically generated password. If you’d like to use this password in your email marketing, you can send the password back to ActiveCampaign after it has been generated.

In the Webhooks section of the General settings tab, check the box for Return Password, and select a field in ActiveCampaign where the password should be stored.

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

- [Overview](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#overview)
- [Automation method](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#automation-method)
- [A note on "failed" webhooks](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#a-note-on-failed-webhooks)
- [Verifying that webhooks worked](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#verifying-that-webhooks-worked)
- [Developer settings method](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#developer-settings-method)
- [Webhook URL parameters](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#webhook-url-parameters)
- [To update a user's tags](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#to-update-a-users-tags)
- [To update a user's tags and meta data](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#to-update-a-users-tags-and-meta-data)
- [Create a new user](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#create-a-new-user)
- [User passwords](https://wpfusion.com/documentation/webhooks/activecampaign-webhooks/#user-passwords)

### You may also like

[![2485777 understandinglists,unsubscribes v1 102824](https://wpfusion.com/wp-content/uploads/2024/11/2485777_Understandinglistsunsubscribes_v1_102824-300x158.jpg)](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [ActiveCampaign Email List, Opt-In Form, Unsubscribe, & Resubscribe Management Guide](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Get the most out of ActiveCampaign with our beginner’s guide. Unlock its full marketing potential today!

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