---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/"
title: "How to use a custom client ID for authentication | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#content)

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

# How to use a custom client ID for authentication

- Published onSeptember 7, 2021
- Last updated on July 21, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- How to use a custom client ID for authentication

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/\#overview) Overview

With some CRMs, WP Fusion is registered as an app via those platforms’ developer programs. Because of this, you need an account on our site and a WP Fusion license to complete the initial authentication process with your CRM.

This applies to:

- BirdSend
- Drift
- HubSpot
- Klaviyo
- NationBuilder
- Salesforce
- Zoho

There may be scenarios where you want to use your own client ID or API key for authentication, and not the WP Fusion client ID. For example if you have a created a custom branded app via your CRM’s developer program, or if you don’t have a WP Fusion license.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/\#using-a-custom-client-id-and-authorization-url) Using a custom client ID and authorization URL

The client ID and client secret are public properties on each CRM’s [integration class](https://wpfusion.com/feature-requests/queue-update-requests-before-calling-crm-api/). You can override them by hooking into the `wp_fusion_init_crm` action, which passes the CRM object by reference.

For example with Zoho:

```php
function set_custom_zoho_app( &$crm ) {

	$crm->client_id        = '1000.XXXXXXXXXXXXXXXXXXXXX';
	$crm->client_secret_us = '08dccXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_zoho_app' );
```

To override the initial authorization request URI for the “Authorize” button in the WP Fusion settings, use the `wpf_{$crm}_auth_url` filter, for example with Zoho:

```php
function set_custom_zoho_auth_url() {

	return "https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.READ,ZohoCRM.org.READ &response_type=code&access_type=offline&redirect_uri=https%3A%2F%2Fmysite.com%2Fzoho.php&prompt=consent&client_id=XXXX";

}

add_action( 'wpf_zoho_auth_url', 'set_custom_zoho_auth_url' );
```

Note that in this example you must have registered https://mysite.com/zoho.php as the redirect URI for your app, and must have a script running at that location which is capable of listening for the authorization response and redirecting back to the WP Fusion settings page with the `&code=` parameter in the URL.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/\#hubspot-example) HubSpot example

To set your own custom HubSpot client ID, secret, and app ID:

```php
function set_custom_hubspot_app( &$crm ) {

	$crm->client_id     = '959bd865-5a24-4a43-a8bf-XXXXXXXXXXXX';
	$crm->client_secret = '959bd865-5a24-4a43-a8bf-XXXXXXXXXXXX';
	$crm->app_id        = 123456;

}

add_action( 'wp_fusion_init_crm', 'set_custom_hubspot_app' );
```

To override the initial OAuth authorization URL on the “Authorize with HubSpot” button:

```php
function set_custom_hubspot_auth_url() {

	$args = array(
		'client_id'     => wp_fusion()->crm->client_id,
		'redirect_uri'  => admin_url( 'options-general.php?page=wpf-settings&crm=hubspot' ),
		'scope'         => 'contacts automation oauth e-commerce crm.lists.read crm.objects.contacts.read crm.objects.contacts.write crm.schemas.contacts.read crm.lists.write crm.objects.companies.read crm.objects.deals.read crm.objects.deals.write crm.schemas.companies.read crm.schemas.deals.read crm.objects.owners.read',
	);

	$url = add_query_arg( $args, 'https://app.hubspot.com/oauth/authorize' );

	return $url;

}

add_action( 'wpf_hubspot_auth_url', 'set_custom_hubspot_auth_url' );
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/\#klaviyo-example) Klaviyo example

The simplest way to connect WP Fusion to a Klaviyo account without using WP Fusion’s app ID is to [create a private API key](https://help.klaviyo.com/hc/en-us/articles/7423954176283).

The required scopes for WP Fusion are `accounts:read`, `profiles:read`, `profiles:write`, `lists:read`, `lists:write`, `segments:read`, `events:write`, and `subscriptions:write`.

To use your custom API key with WP Fusion, add the following snippet to your theme’s functions.php file, or to a snippet plugin:

```php
add_filter( 'wpf_get_setting_klaviyo_key', function( $key ) {
     return 'XYZ';
} );
```

This will replace the OAuth buttons in the settings with a simple input containing your API key, and a Test Connection button.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/\#salesforce-example) Salesforce example

To set your own custom Salesforce client ID and secret:

```php
function set_custom_salesforce_app( &$crm ) {

	$crm->client_id     = '3MVG9CEn_O3jvv0xMf5rhesocm_5czidz9CFtu_qNZ2V0Zw.bmL0LTRRylD5fhkAKYwGxRDDRXXXXXXXXXXXX';
	$crm->client_secret = '9BB0BD5237B1EA6ED8AFE2618053XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_salesforce_app' );
```

To override the initial OAuth authorization URL:

```php
function set_custom_salesforce_auth_url() {

	$args = array(
		'client_id'     => wp_fusion()->crm->client_id,
		'redirect_uri'  => admin_url( 'options-general.php?page=wpf-settings&crm=salesforce' ) ),
		'response_type' => 'code',
		'scope'         => 'api refresh_token offline_access',
	);

	$url = add_query_arg( $args, 'https://login.salesforce.com/services/oauth2/token' );

	return $url;

}

add_action( 'wpf_salesforce_auth_url', 'set_custom_salesforce_auth_url' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#overview)
- [Using a custom client ID and authorization URL](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#using-a-custom-client-id-and-authorization-url)
- [HubSpot example](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#hubspot-example)
- [Klaviyo example](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#klaviyo-example)
- [Salesforce example](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#salesforce-example)

### In this chapter

- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [Additional Code Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/ "Additional Code Examples")
- [Applying and Removing Tags with JavaScript](https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/ "Applying and Removing Tags with JavaScript")
- [Connecting to two different ActiveCampaign accounts](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/ "Connecting to two different ActiveCampaign accounts")
- [Contributing integration modules](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/ "Contributing integration modules")
- [Creating Custom CRM Modules](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/ "Creating Custom CRM Modules")
- [Deleting Users via Webhooks](https://wpfusion.com/documentation/advanced-developer-tutorials/deleting-users-via-webhooks/ "Deleting Users via Webhooks")
- [Detecting and Syncing Additional Fields](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/ "Detecting and Syncing Additional Fields")
- [How To Submit A Job On Codeable For Custom Development](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-submit-a-job-on-codeable-for-custom-development/ "How To Submit A Job On Codeable For Custom Development")
- [How to use a custom client ID for authentication](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/ "How to use a custom client ID for authentication")
- [Registering Custom Batch Operations](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/ "Registering Custom Batch Operations")
- [Scheduled Synchronization Using Cron](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/ "Scheduled Synchronization Using Cron")
- [Sending data to two different CRMs (Intercom Example)](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/ "Sending data to two different CRMs (Intercom Example)")
- [The WP Fusion CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/ "The WP Fusion CRM API")
- [The WP Fusion User Class](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/ "The WP Fusion User Class")
- [White Labelling WP Fusion](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/ "White Labelling WP Fusion")

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