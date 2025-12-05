---
url: "https://wpfusion.com/documentation/tutorials/site-tracking-scripts/"
title: "Site Tracking Scripts | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#content)

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

# Site Tracking Scripts

- Published onJanuary 6, 2018
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Site Tracking Scripts

### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#overview) Overview

For your convenience, WP Fusion includes bundled copies of the site tracking scripts for:

- [ActiveCampaign](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#activecampaign)
- [AgileCRM](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#agilecrm)
- [Bento](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#bento)
- [Brevo](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#brevo)
- [Customer.io](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#customer-io)
- [Drip](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#drip)
- [Emercury](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#emercury)
- [Encharge](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#encharge)
- [EngageBay](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#engagebay)
- [HubSpot](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#hubspot)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#infusionsoft)
- [Intercom](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#intercom)
- [MailerLite](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mailerlite)
- [Mautic](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mautic)
- and [Ontraport](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#ontraport)

To enable site tracking, check the box on the main WP Fusion settings page, on the General settings tab.

![](https://wpfusion.com/wp-content/uploads/2018/01/site-tracking-setting-1024x160.jpg)

Once enabled, visitors and users will be tracked using each CRM’s tracking methods, and tracking data will appear on contact records in your CRM.

### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#how-it-works) How it works

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#activecampaign) ActiveCampaign

![](https://wpfusion.com/wp-content/uploads/2018/01/ac-site-tracking-1024x454.png)Site tracking data shown in the ActiveCampaign contact record.

In addition to loading the ActiveCampaign site tracking script in the footer of your site, WP Fusion will also identify any logged in users to the tracking script by email address. This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

In cases where a guest (not logged-in) makes a purchase or fills out a form using a [supported form plugin](https://wpfusion.com/documentation/#lead-generation), WP Fusion will try to set a cookie `wpf_guest`, containing the person’s email address.

When this cookie is present, the email address in the cookie will also be passed to the ActiveCampaign site tracking script. This makes it possible to start tracking a site visitor after a guest checkout or form submission, despite them not having a user account on the site,

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#agilecrm) AgileCRM

![](https://wpfusion.com/wp-content/uploads/2018/01/agilecrm-site-tracking-1024x488.jpg)Site tracking data shown in the AgileCRM contact record.

In addition to loading the AgileCRM site tracking script in the footer of your site, WP Fusion will also identify any logged in users to the tracking script by email address. This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#bento) Bento

[![](https://wpfusion.com/wp-content/uploads/2018/01/bento-site-tracking-1024x536.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/bento-site-tracking.jpg) With Bento site tracking enabled, you’ll be able to see your visitors pageviews in Bento, as well as initial landing page and geo location.

In addition to loading the [Bento](https://wpfusion.com/go/bento) site tracking script in the header of your site, WP Fusion will also identify any logged in users to the tracking script by email address.

This also works with auto login links and [form auto login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login).

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#brevo) Brevo

To enable Brevo’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking-1024x231.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking.jpg)

You will need your client key, which can be found in the [Automation settings of your Brevo account](https://automation.sendinblue.com/parameters).

[![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-client-key-1024x743.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-client-key.jpg)

Once enabled, WP Fusion will output the Brevo tracking code in the header of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Brevo contact record.

[![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking-contact-1024x533.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-site-tracking-contact.jpg) Pageviews tracked by the tracking script can be seen in the sidebar when viewing a contact record in Brevo.[![](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-tracking-logs-1024x502.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/sendinblue-tracking-logs.jpg) Tracking data is also recorded in [the Brevo event logs](https://automation.sendinblue.com/log/events) and can be used in automations.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#customer-io) Customer.io

To enable [Customer.io site tracking](https://customer.io/docs/sdk/web/getting-started/), check the box for **Site Tracking** on the General tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking-1024x149.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking.jpg)

WP Fusion will automatically output the Customer.io site tracking scripts in the footer of every page on your site.

[![](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking-history-1024x486.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/customer-io-site-tracking-history.jpg) The user’s page views are shown on their contact record, alongside [events](https://wpfusion.com/documentation/event-tracking/customer-io-event-tracking/) and other activities.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also [identify the user](https://customer.io/docs/sdk/web/identify/) to the tracking script, and their site activity will be displayed on their Customer.io record.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#drip) Drip

To enable Drip site tracking, check the box for **Site Tracking** on the General tab in the WP Fusion settings.

WP Fusion will automatically output the [Drip tracking code](https://help.drip.com/hc/en-us/articles/4424702539789-Install-Your-JavaScript-Snippet) in the footer of every page of your site. When someone logs in, makes a purchase, or submits a form, WP Fusion will automatically [identify them](https://help.drip.com/hc/en-us/articles/4424702605453-Identified-People) to the tracking script.

[![](https://wpfusion.com/wp-content/uploads/2018/01/drip-website-sessions-1024x508.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/drip-website-sessions.jpg) Screenshot

Visits to your website will automatically show up on the [Website Sessions tab](https://help.drip.com/hc/en-us/articles/4424702617485-Website-Sessions) on the Drip subscriber record.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#emercury) Emercury

To enable Emercury site tracking, check the box for **Site Tracking** on the General tab in the WP Fusion settings.

Note that you must be on a Pro or Scale plan with Emercury to use site tracking. If site tracking is not available for your account, WP Fusion will display an error message when you attempt to enable site tracking.

For site tracking to work you need to add your site’s domain inside the [site tracking settings](https://panel.emercury.net/#settings/tracking/) of your Emercury account. For more information on how site tracking works with Emercury, [see this guide](http://help.emercury.net/en/articles/5121464-site-event-tracking-in-emercury).

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Emercury contact record.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#encharge) Encharge

To enable Encharge’s [site tracking](https://app.encharge.io/settings/site-tracking), first check the box for **Site Tracking** in the WP Fusion settings.

[![WP Fusion's Encharge site tracking features](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-key-2-1024x232.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-key-2.jpg)

You will need your **Write Key** which can be found [in your Encharge account](https://app.encharge.io/account/info).

[![Finding your Encharge site tracking Write Key](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-write-key-1024x570.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/encharge-site-tracking-write-key-scaled.jpg) Your Write Key is required for site tracking, and can be found in your Encharge account.

Once enabled, WP Fusion will output the Encharge tracking scripts in the header of every page on your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/) or form submission) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Encharge contact record.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#engagebay) EngageBay

To enable EngageBay’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/engagebay-site-tracking-1-1024x300.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/engagebay-site-tracking-1.jpg)

You will need your JavaScript API Key, which can be found in your EngageBay account.

[![](https://wpfusion.com/wp-content/uploads/2018/01/7c3e9a89-19c8-46ca-bda7-5a3afd5e8dfd-1024x458.png)](https://wpfusion.com/wp-content/uploads/2018/01/7c3e9a89-19c8-46ca-bda7-5a3afd5e8dfd.png) You can find your EngageBay JavaScript API key in your account under Admin Settings » API and Tracking Code

Once enabled, WP Fusion will output the EngageBay tracking code in the header of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding EngageBay contact record.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#hubspot) HubSpot

If site tracking is enabled for HubSpot, WP Fusion will load the site tracking scripts into the header of your site. WP Fusion will also identify any logged in users to the tracking script, by email address.

If a guest visitor submits a form or makes a checkout, WP Fusion will also identify the guest to the tracking script by email address, which allows the anonymous tracking data to be merged retroactively with the guest’s contact record.

[![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-1-1024x871.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-1.jpg) Site tracking data is shown on a contact’s Activity stream in HubSpot, including pages visited and forms submitted.[![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-2-1024x739.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-2.jpg) The visitor’s page views are tracked and recorded up to the time of submitting the lead form.

HubSpot’s tracking scripts are a little more sophisticated than our other supported CRMs. They will automatically detect when a form is on a page, and try to sync the submitted form values to HubSpot.

[![](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-3-1024x781.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/hubspot-site-tracking-3.jpg) Submitted forms on your website are automatically displayed on the contact’s Activity stream.

This generally works quite well, but can sometimes cause problems. For example the WooCommerce “Billing Email” can get synced to HubSpot and overwrite the customer’s account email. To improve the reliability of tracking, WP Fusion will automatically disable the site tracking scripts on the WooCommerce “My Account” page.

However this is not a 100% reliable solution to the problem, as the HubSpot script is always watching all inputs on your site to attempt to detect a profile form and/or email address change.

[![](https://wpfusion.com/wp-content/uploads/2018/01/non-hubspot-forms-1024x514.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/non-hubspot-forms-scaled.jpg) HubSpot’s **Support for Non-HubSpot Forms** feature can sometimes cause unexpected email address changes for contacts. If you experience issues with unexpected data in HubSpot, you can disable this feature in the HubSpot marketing settings.

If you encounter unexpected property changes in HubSpot, you disable **Support for Non-HubSpot Forms** in your HubSpot account settings, under Settings » Tools » Marketing » Forms.

**Note:** If you’re using the [HubSpot for WordPress plugin](https://wordpress.org/plugins/leadin/), then the tracking scripts are already loaded on your site. In that case you should keep site tracking disabled in WP Fusion.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#infusionsoft) Infusionsoft

![](https://wpfusion.com/wp-content/uploads/2018/01/infusionsoft-CRM-lead-activity-tracking.png)Site tracking data shown in the Web Profile tab for an Infusionsoft contact.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#intercom) Intercom

To enable Intercom’s site tracking, first check the box for **Site Tracking** in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking-1024x243.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking.jpg)

Once enabled, WP Fusion will output the Intercom tracking code in the footer of every page of your site.

If your users are logged in or otherwise identified to WP Fusion (for example via submitting a form, or visiting an [Auto Login Link](https://wpfusion.com/documentation/tutorials/auto-login-links/)) WP Fusion will also pass the user’s email address to the tracking script, which will associate their activity with their corresponding Intercom contact record.

[![](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking-2-1024x828.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/intercom-site-tracking-2.jpg) Tracked page views appear on the contact record in Intercom

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#mailerlite) MailerLite

You can enable MailerLite site tracking by checking the box on the General tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-site-tracking-1024x401.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-site-tracking.jpg)

When the setting is enabled, the [MailerLite tracking script](https://developers.mailerlite.com/guides/ecommerce.html#e-commerce-campaign-tracking) will be loaded into the header of every page on your site.

The MailerLite tracking script is necessary for tracking ecommerce performance from email campaigns with the [Enhanced Ecommerce Addon for MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/).

[![](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-ecom-showing-campaign-revenue-1024x693.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/mailerlite-ecom-showing-campaign-revenue-scaled.jpg) When the tracking script is enabled, you can view ecommerce performance from your automations and campaigns on subscribers in MailerLite.

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#mautic) Mautic

Mautic site tracking is a little more complicated than site tracking with our other supported CRMs.

Set up properly it can be very effective, but it can also cause problems with misidentified contacts, or contact records getting merged.

**Note:** Mautic site tracking will not work if you are currently logged into Mautic as a user with the same email address as your WordPress user email. To test Mautic site tracking always use an incognito browser window.

**Note:** For Mautic site tracking to work correctly, you must have configured [Cross-Origin Resource Sharing (CORS)](https://kb.mautic.org/knowledgebase/installation/configuration#:~:text=Cors%20Settings,the%20%E2%80%9CValid%20Domains%E2%80%9D%20box.).

[![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-settings-1024x255.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-settings.jpg) WP Fusion’s two options for site tracking with Mautic

WP Fusion includes two options for Mautic site tracking:

- **Site Tracking:** Enabling this option includes [the Mautic tracking script](https://docs.mautic.org/en/contacts/manage-contacts/contact-monitoring#javascript-js-tracking) in the footer of your page and sends a `mt('send', 'pageview');` event with each page view. This is the same as if you were using the [WP Mautic plugin](https://wordpress.org/plugins/wp-mautic/), or had added the tracking code manually.
- **Advanced Site Tracking:** Enabling this option activates some additional tracking methods unique to WP Fusion. When **Advanced Site Tracking** is active:

  - If an anonymous visitor on your site is being tracked in Mautic, and later registers an account, submits a form, or makes a purchase, WP Fusion will merge the anonymous tracking data with the new contact record. This gives you a more complete picture of the visitor’s history on your site before they provided an email address.
  - If a user is logged in to your site, WP Fusion will send a `mt('send', 'pageview', {"email":"EMAILADDRESS"} );` event to Mautic’s tracking script, to track pageviews for logged in users in cases where they default Mautic tracking can’t properly identify them.

Where you need to be careful with **Advanced Site Tracking** is caching.

If _jane@gmail.com_ is logged into your site, and the Mautic tracking script is output to the footer of your page with Jane’s email address, then this could become cached.

If _steve@gmail.com_ later visits the same cached page, the tracking script would send a `mt('send', 'pageview', {"email":"jane@gmail.com"} );` event.

This would update Steve’s contact ID in Mautic with Jane’s email. Since the email address field in Mautic must be unique, this would merge the two contact records and delete Steve’s data and tags.

[![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-1-1024x582.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-1.jpg) With Mautic site tracking enabled, anonymous visitors are tracked in Mautic.[![](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-2-1024x905.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/mautic-site-tracking-2.jpg) When a visitor registers an account, makes a purchase, or submits a form, their tracking data is merged into the new contact record (using Advanced Site Tracking).

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#omnisend) Omnisend

To use site tracking with Omnisend, enable the setting for **Site Tracking** from the General tab in the WP Fusion settings, and enter your Brand ID.

[![](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-site-tracking-1024x231.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-site-tracking.jpg)

Your brand ID can be found in your Omnisend [store settings](https://app.omnisend.com/settings/store/pricing-plan).

[![](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-brand-ID-1024x556.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/omnisend-brand-ID.jpg) The Omnisend brand ID is found in your Store Settings.

When site tracking is enabled, WP Fusion will automatically output the [Omnisend tracking script](https://api-docs.omnisend.com/reference/javascript-snippet) in the footer of all your pages.

If the current user is logged in, or if a guest submits a form or makes a purchase, WP Fusion will identify them to the tracking script by email address.

For more information on the tracking script, see the [Omnisend documentation](https://api-docs.omnisend.com/reference/javascript-snippet).

#### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#ontraport) Ontraport

Ontraport’s site tracking can be enabled by checking the **Site Tracking** checkbox on the General tab in the WP Fusion settings. This will output [the Ontraport site tracking script](https://ontraport.com/university/Getting-started/Set-up/Add-the-Ontraport-tracking-script-to-your-site) in the footer of every page on your site.

### [\#](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/\#developers) Developers

Site tracking will automatically be disabled when WP Fusion is set to Staging Mode (on the Advanced settings tab).

If needed you can also conditionally load the site tracking scripts via the `wpf_get_setting_site_tracking` filter.

For example, to disable site tracking for logged in administrators:

```php
function disable_site_tracking() {

	if ( current_user_can( 'manage_options' ) ) {
		add_filter( 'wpf_get_setting_site_tracking', '__return_false' );
	}

}

add_action( 'init', 'disable_site_tracking' );
```

Or to disable site tracking on a specific page:

```php
function disable_site_tracking() {

	if ( is_page( 'login' ) ) {
		add_filter( 'wpf_get_setting_site_tracking', '__return_false' );
	}

}

add_action( 'init', 'disable_site_tracking' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#overview)
- [How it works](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#how-it-works)
- [ActiveCampaign](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#activecampaign)
- [AgileCRM](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#agilecrm)
- [Bento](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#bento)
- [Brevo](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#brevo)
- [Customer.io](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#customer-io)
- [Drip](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#drip)
- [Emercury](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#emercury)
- [Encharge](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#encharge)
- [EngageBay](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#engagebay)
- [HubSpot](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#hubspot)
- [Infusionsoft](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#infusionsoft)
- [Intercom](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#intercom)
- [MailerLite](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mailerlite)
- [Mautic](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mautic)
- [Omnisend](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#omnisend)
- [Ontraport](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#ontraport)
- [Developers](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#developers)

### You may also like

[![2501696 hubspot integration v1 111924](https://wpfusion.com/wp-content/uploads/2024/11/2501696_Hubspot-Integration_v1_111924-300x158.jpg)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [HubSpot-WordPress Integration: How to Connect (Step-by-Step Guide)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

HubSpot is a full-spectrum inbound marketing and automation platform that makes it easy for businesses to execute, manage, and measure their inbound marketing efforts.

[![2485777 understandinglists,unsubscribes v1 102824](https://wpfusion.com/wp-content/uploads/2024/11/2485777_Understandinglistsunsubscribes_v1_102824-300x158.jpg)](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [ActiveCampaign Email List, Opt-In Form, Unsubscribe, & Resubscribe Management Guide](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Get the most out of ActiveCampaign with our beginner’s guide. Unlock its full marketing potential today!

### In this chapter

- [Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/ "Auto Login")
- [Batch Operations / Exporting Data](https://wpfusion.com/documentation/tutorials/batch-operations/ "Batch Operations / Exporting Data")
- [Double Opt-Ins](https://wpfusion.com/documentation/tutorials/double-opt-ins/ "Double Opt-Ins")
- [Import Users](https://wpfusion.com/documentation/tutorials/import-users/ "Import Users")
- [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/ "Lead Source Tracking")
- [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/ "Link Click Tracking")
- [Menu Item Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/ "Menu Item Visibility")
- [Site Tracking Scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/ "Site Tracking Scripts")
- [Switching CRMs](https://wpfusion.com/documentation/tutorials/switching-crms/ "Switching CRMs")
- [Sync Users Between Sites](https://wpfusion.com/documentation/tutorials/sync-user-accounts/ "Sync Users Between Sites")
- [ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/ "ThriveCart")

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