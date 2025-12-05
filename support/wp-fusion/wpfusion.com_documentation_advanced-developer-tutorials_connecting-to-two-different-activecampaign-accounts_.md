---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/"
title: "Using WP Fusion with two ActiveCampaign accounts"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#content)

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

# Connecting to two different ActiveCampaign accounts

- Published onMarch 10, 2018
- Last updated on March 10, 2018

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Connecting to two different ActiveCampaign accounts

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#overview) Overview

This is an case study in how we’ve use the classes and methods discussed earlier in this section to help a customer solve a very unique problem. This customer is using ActiveCampaign as his CRM, and has a very large contact list (over 25,000 contacts).

This customer had two types of WordPress users he needed to track in ActiveCampaign: Customers, and Affiliates. For his small group of affiliates, he needed the pipeline automation and sales attribution features that come with [ActiveCampaign’s Professional plan](https://www.activecampaign.com/pricing/). But a Professional plan for 25,000 contacts would cost $599 a month.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#the-approach) The approach

It didn’t make sense to be paying for the Professional package when those features were only needed for a small subset of his contacts. So we proposed **to set up two ActiveCampaign accounts**— one on the Lite plan for his primary list, and a second Professional account for his affiliates and partners.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#the-solution) The solution

Out of the box, WP Fusion can only connect to one CRM at a time. But the flexibility of WP Fusion’s framework makes it easy to solve even very complex requirements like this. You can see the [finished plugin file on GitHub](https://gist.github.com/verygoodplugins/39b82f3cc8559c92305e36263620729c) here, or continue reading below for a more detailed explanation.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#setting-things-up) Setting things up

As we discussed in the [introduction to WP Fusion’s CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), all communication with your CRM is done via interfacing with the `wp_fusion()->crm` object. In this case, it was configured to connect to the main ActiveCampaign account, the one with all of the customers.

**Let’s call that Account A — Customers**

What we want to do is create a new `wp_fusion()->crm` object, this time connected to the AC account for affiliates and partners.

**We’ll call that Account B — Affiliates**

When an affiliate registers or updates their account, we’ll temporarily swap the CRM objects, so the contact data is sent to the right place.

```php
define( 'ACCOUNT_TWO_URL', 'https://account2.api-us1.com' );
define( 'ACCOUNT_TWO_KEY', 'APIKEY' );

define( 'WPF_DISABLE_QUEUE', true );

global $wpf_ac_app_swap;
global $wpf_ac_switched;

$wpf_ac_app_swap	= false;
$wpf_ac_switched	= false;
```

In the first lines of the plugin, we’re defining two constants, `ACCOUNT_TWO_URL`, and `ACCOUNT_TWO_KEY`. This will be used to initialize the connection to the second account.

We also need to disable WP Fusion’s API queue in this case, because it doesn’t play nicely with swapping the active CRM multiple times on a page load.

Finally, we set two globals:

- **$wpf\_ac\_app\_swap**: When we swap the `wp_fusion()->crm` object from Account A to Account B, this global will hold onto Account A until we’re ready to switch back.
- **$wpf\_ac\_app\_switched**: This will provide an easy way to check whether we’re connected to Account A or Account B. When we switch to Account B, `$wpf_ac_switched` is set to “true”. And when we switch back, it’s returned to “false”

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#determining-when-to-switch) Determining when to switch

```php
function wpf_is_account_two( $user_id ) {

	$roles = array( 'deals_contributor' );
	$user = get_userdata( $user_id );

	if ( affwp_is_affiliate( $user_id ) ) {
		return true;
	}

	foreach ( $roles as $role ) {
		if ( 'deals_contributor' === $user->role ) {
			return true;
		}
	}

	return false;
}
```

In order to know when the accounts need to be switched, we have this helper function at the top of the plugin. It accepts a user ID, and if the user has a role “deals\_contributor”, or if they’re a registered AffiliateWP affiliate, then **the user has to go to Account B**.

If the user doesn’t meet those criteria, the function returns false, and **the data is sent to Account A**.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#switching-from-account-a-to-account-b) Switching from **Account A** to **Account B**

We’ve included add\_action()’s for every relevant function [in the WPF\_User class](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/), and set `wpf_maybe_switch_to_account_two()` as the callback. These actions are triggered at the start of each function, before any data has been sent. We’ll use this to determine if the account needs to be switched.

```php

function wpf_maybe_switch_to_account_two( $user_id ) {

	global $wpf_ac_app_swap;
	global $wpf_ac_switched;

	if( wpf_is_account_two( $user_id ) && $wpf_ac_switched == false ) {

		// If user should be sent to second app, and the first app is currently active
		if( $wpf_ac_app_swap == false ) {

			// If apps haven't been swapped yet, move first app into swap variable
			$wpf_ac_app_swap = wp_fusion()->crm->app;

			// And initialize second app connection
			wp_fusion()->crm->connect( ACCOUNT_TWO_URL, ACCOUNT_TWO_KEY, true );

		} else {

			// If second app is already saved in the swap, move it to a temp var
			$temp_second_app = $wpf_ac_app_swap;

			// Store first app in swap
			$wpf_ac_app_swap = wp_fusion()->crm->app;

			// Put second app back into use
			wp_fusion()->crm->app = $temp_second_app;

		}

		// Set $wpf_ac_switched to true to indicate we're using the second app
		$wpf_ac_switched = true;

	}
}

add_action( 'wpf_user_register_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_get_contact_id_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_pre_pull_user_meta', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_get_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_apply_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_remove_tags_start', 'wpf_maybe_switch_to_account_two' );
add_action( 'wpf_push_user_meta_start', 'wpf_maybe_switch_to_account_two' );
```

**This function works as follows:**

- We first load up the globals for `$wpf_ac_app_swap` and `$wpf_ac_switched` so the function is aware of the current state of things.
- The function then checks to see if the user in question should be sent to **Account B**, by calling our `wpf_is_account_two()` function.
- It then confirms that `$wpf_ac_switched` is false. Because if we’ve already switched to **Account B** somewhere else, we don’t want to do it again.
- If the user passes those checks, we check the `$wpf_ac_app_swap` global to see if it’s already been set up and connected to Account B, perhaps because we’ve already swapped the accounts earlier in the registration process.

  - If there’s nothing in the `$wpf_ac_app_swap` variable, that means we need to set up the new `wp_fusion()->crm` object and configure it with the **Account B** API credentials.
  - But first, we move the currently active **Account A** CRM object into the `$wpf_ac_app_swap` variable, so it can easily be put back later.
  - Then we call up `wp_fusion()->crm->connect()` with the **Account B** connection credentials.
  - After this point, any data sent to the CRM object will now be directed to **Account B.**
- On the other hand, if `$wpf_ac_app_swap` isn’t empty, then we don’t need to initialize the connection all over again. The **Account B** CRM object is already there waiting for us.

  - We first move the Account B CRM object into a temporary variable so it’s not overwritten.
  - Then we set the `$wpf_ac_app_swap` to contain the CRM object for **Account A**, so we can put it back it again later.
  - And finally we set the **Account B** CRM object we’d stored in the temporary variable.
- And as the very last step, we set `$wpf_ac_switched` to “true” to indicate that WP Fusion is now connected to **Account** **B.**

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#switching-from-account-b-back-to-account-a) Switching from **Account B** back to **Account A**

Switching the accounts back follows the same basic logic in the function above, except we’re now using action hooks that fire at the _end_ of each function, after the data has been sent. The code looks like this:

```php
function wpf_maybe_switch_back( $user_id ) {

	global $wpf_ac_app_swap;
	global $wpf_ac_switched;

	if( $wpf_ac_switched == true ) {

		// If the second app is active, move the first app from the swap to a temp variable
		$temp_first_app = $wpf_ac_app_swap;

		// Store second app in swap
		$wpf_ac_app_swap = wp_fusion()->crm->app;

		// Put first app back into use
		wp_fusion()->crm->app = $temp_first_app;

		// Set $wpf_ac_switched to false
		$wpf_ac_switched = false;

	}
}

add_action( 'wpf_user_created', 'wpf_maybe_switch_back' );
add_action( 'wpf_got_contact_id', 'wpf_maybe_switch_back' );
add_action( 'wpf_user_updated', 'wpf_maybe_switch_back' );
add_action( 'wpf_tags_modified', 'wpf_maybe_switch_back' );
```

This should be pretty clear to follow if you’ve read the more detailed walkthrough above. It’s basically the same process as switching from **Account A** to **Account** **B**, but in reverse.

Though the **Account** **B** CRM object is no longer needed at this point, we still store it in the `$wpf_ac_app_swap` variable, so it can easily be be accessed in a future process, without having to set up the connection again from scratch.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/\#in-summary) In summary

Obviously this is a very niche problem that we’ve solved, and likely only applicable to this one customer.

But it hopefully demonstrates how WP Fusion, as a framework, can be extended to accommodate even the most complex business requirements.

If you view the [Gist on GitHub](https://gist.github.com/verygoodplugins/39b82f3cc8559c92305e36263620729c), you’ll see we did all of this in just 56 lines of code.

We really enjoy coming up with these kinds of solutions for our customers. If you’re interested in discussing implementation ideas for your own project, [send us a message](https://wpfusion.com/support/contact/), we’d love to hear from you!

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#overview)
- [The approach](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#the-approach)
- [The solution](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#the-solution)
- [Setting things up](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#setting-things-up)
- [Determining when to switch](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#determining-when-to-switch)
- [Switching from **Account A** to **Account B**](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#switching-from-account-a-to-account-b)
- [Switching from **Account B** back to **Account A**](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#switching-from-account-b-back-to-account-a)
- [In summary](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/#in-summary)

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