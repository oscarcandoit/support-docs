---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/"
title: "Sending data to two different CRMs (Intercom Example)"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#content)

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

# Sending data to two different CRMs (Intercom Example)

- Published onMarch 10, 2018
- Last updated on March 15, 2018

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Sending data to two different CRMs (Intercom Example)

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#overview) Overview

In the last case study, [we explored a solution](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/) for a customer who wanted WP Fusion to segment his site users into two different ActiveCampaign accounts, depending on their user role.

In this article, we’ll be dealing with a slightly different problem. This customer uses both Intercom and ActiveCampaign, with ActiveCampaign as his primary CRM (because of the lack of marketing automation features in Intercom).

To keep WP Fusion easy to learn and configure, we don’t natively support connecting your WordPress site to more than one CRM at a time. In fact it’s generally better for your business if you can keep all of your contact data in one system, instead of having it fragmented across several platforms.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#the-objective) The objective

But there are some exceptions to the rule. In this case, the customer would like to **use ActiveCampaign as their primary CRM**, but also be able to simultaneously **tag contacts in Intercom for certain events.**

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#the-solution) The solution

As we discussed in the [introduction to WP Fusion’s CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), all communication with your CRM is done via interfacing with the `wp_fusion()->crm` object. In this case, WP Fusion is configured to connect to ActiveCampaign.

But it’s also possible to create and interface with a secondary CRM instance by simply including the appropriate file and passing in your connection details.

You can see the [finished code on GitHub](https://gist.github.com/verygoodplugins/8ac75415dc9528d0ea9df368a67f0f36) here, or continue reading below for a more detailed explanation:

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#setting-things-up) Setting things up

```php
define( 'INTERCOM_ACCESS_TOKEN', 'aG9tOjyIyZmMxZDc2X2YxMzBfNDBhZV9hOTVjXzRhZDRlNzBiZWMyMzoxOjA=' );

global $intercom;
```

At the top of the file, we have a place to define your Intercom access token. This will be used later when we first set up the Intercom CRM object.

We also declare `$intercom` as a global, so that it can be re-used across functions while only having to be initialized once.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#initializing-the-intercom-crm-object-and-configuring-the-connection) Initializing the Intercom CRM object and configuring the connection

```php
function wpf_connect_to_intercom() {

	global $intercom;

	if( is_object( $intercom ) ) {
		return $intercom;
	}

	require_once WPF_DIR_PATH . 'includes/crms/intercom/class-intercom.php';

	$intercom = new WPF_Intercom;
	$intercom->get_params( INTERCOM_ACCESS_TOKEN );

	return $intercom;

}
```

This function is responsible for setting up the Intercom CRM object, so it can be used in the other functions. **Here’s how it works:**

- The first thing we do is check the global `$intercom` variable. If it’s already been set up, then nothing more needs to be done.
- If Intercom hasn’t been set up yet, we include WP Fusion’s Intercom integration class, and enable the API connection by providing it with your access token.
- Now the Intercom CRM object is ready to go (it’s that easy!), and you have access to [all the available methods we covered earlier](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/) when looking at the WP Fusion CRM API.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#a-helper-function-to-make-it-easier-to-deal-with-intercom-contact-ids) A helper function to make it easier to deal with Intercom contact IDs

This second function isn’t essential, but since we’ll be applying tags to Intercom contacts, which have their own contact IDs, I’ve included it to help reduce the number of API calls.

By storing the contact IDs for any users with known Intercom contact records, we won’t have to look them up again when we want to apply tags.

```php
function wpf_get_intercom_contact_id( $user_id ) {

	$contact_id = get_user_meta( $user_id, 'wpf_intercom_contact_id', true );

	if( ! empty( $contact_id ) ) {

		return $contact_id;

	} else {

		$intercom = wpf_connect_to_intercom();

		$user = get_user_by( 'id', $user_id );
		$contact_id = $intercom->get_contact_id( $user->user_email );

		if( ! is_wp_error( $contact_id ) && $contact_id != false ) {

			update_user_meta( $user_id, 'wpf_intercom_contact_id', $contact_id );
			return $contact_id;

		} else {

			return false;

		}

	}

}
```

**Here’s what we’re doing:**

- First check the WordPress user’s meta data for an Intercom contact ID. If one is found, we can use it right away.
- If there is no contact ID saved, then use the Intercom API to look up the user based on their email address.
- If there were no errors, and a contact ID was found, then we update the user’s metadata for future usage.
- If no contact exists, return false.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#sending-new-user-registrations-to-intercom-in-addition-to-activecampaign) Sending new user registrations to Intercom, in addition to ActiveCampaign

This next function shows how you can create new Intercom contacts at user registration, after they’ve been added to ActiveCampaign.

```php
function wpf_add_to_intercom( $user_id, $contact_id, $post_data ) {

	// Get the Intercom CRM object
	$intercom = wpf_connect_to_intercom();

	// Check if there's already a contact record in Intercom
	$contact_id = $intercom->get_contact_id( $post_data['user_email'] );

	if( ! is_wp_error( $contact_id ) && $contact_id == false ) {

		// If there's no existing contact, let's create one

		// You have to manually specify Intercom internal fields here
		// since the WPF Settings >> Contact fields tab is configured for ActiveCampaign

		$contact_data = array(
			'email'		=> $post_data['user_email'],
			'name'		=> $post_data['first_name'] . ' ' . $post_data['last_name']
		);

		// "false" in the second parameter tells it not to use the field mapping set up in the WP Fusion settings
		$contact_id = $intercom->add_contact( $contact_data, false );

	}

	// Save the contact ID for later reference
	update_user_meta( $user_id, 'wpf_intercom_contact_id', $contact_id );

	// Now you can apply tags
	$intercom->apply_tags( array( 'Tag One', 'Tag 2' ), $contact_id );

}

add_action( 'wpf_user_created', 'wpf_add_to_intercom', 10, 3 );
```

This function is hooked to the `'wpf_user_created'` action, which is triggered whenever a user registers on your site and a new CRM contact has been created (in this case in ActiveCampaign).

**Here’s what we’re doing:**

- First we get the Intercom CRM object, either by creating it and configuring the access token, or by retrieving the existing CRM object from the global if it already exists.
- Next, we use the `wpf_get_intercom_contact_id()` function (above) to see if we can get a contact ID for the new user. Even though they just registered on the site, they may already be in Intercom… so we check that to avoid creating duplicate contacts.
- If there was no error in looking up the contact ID, and a contact ID doesn’t exist, we proceed to create a new contact:
  - Because WP Fusion is configured for ActiveCampaign, the settings under WP Fusion >> Contact Fields won’t be accurate here.
  - In this case I’ve used Intercom’s internal `'email'` and `'name'` fields to create the contact. But any contact data can be added in this way.

    - See here for a list of [the internal field names for an Intercom contact record](https://developers.intercom.com/v2.0/reference#user-model).
  - Finally, we utilize the Intercom CRM object to create the new contact, by calling `$intercom->add_contact( $contact_data, false );`
  - This will return the contact ID of the newly created Intercom contact.
- After the contact has been created, we save the contact ID to their user meta for future use.
- And now, with a contact ID available, you can apply any tags that you’d like to be added at registration.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#applying-tags-in-intercom-when-theyre-applied-in-activecampaign) Applying tags in Intercom when they’re applied in ActiveCampaign

This function follows a similar format as the previous one, but this time we’re using the `'wpf_tags_applied'` hook, which is fired whenever a tag has been applied by WP Fusion.

In this case, any tags that have been applied in ActiveCampaign will be applied simultaneously in Intercom.

```php
function wpf_apply_tags_in_intercom( $user_id, $tags ) {

	$intercom = wpf_connect_to_intercom();

	$contact_id = wpf_get_intercom_contact_id( $user_id );

	if( $contact_id !== false ) {
		$intercom->apply_tags( $tags, $contact_id );
	}

}

add_action( 'wpf_tags_applied', 'wpf_apply_tags_in_intercom', 10, 2 );
```

**Here’s what we’re doing:**

- As before, we’re either creating or retrieving an existing CRM object to make our requests to.
- We look up the contact ID, using the `wpf_get_intercom_contact_id()` function from earlier.
- If the user does have a contact ID in Intercom, we use the CRM object to apply the relevant tags.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/\#in-summary) In summary

Obviously this is a very niche example, and it could be customized to be even more specific. For example, to only add contacts to Intercom when a Gravity Form is submitted, or to only tag contacts in Intercom when a lesson is marked complete.

But it hopefully demonstrates how WP Fusion, as a framework, can be extended to accommodate even the most complex business requirements. And the methods we’ve explored here should serve as a foundation for any more specific scenarios you’d like to implement.

And, importantly, WP Fusion gives you a system where these kinds of complex API operations can be executed with a minimal amount of custom code. If you return to view the full [Gist on GitHub](https://gist.github.com/verygoodplugins/8ac75415dc9528d0ea9df368a67f0f36), you’ll see we did all of this in just 51 lines of code.

We really enjoy coming up with these kinds of solutions for our customers. If you’re interested in discussing implementation ideas for your own project, [send us a message](https://wpfusion.com/support/contact/), we’d love to hear from you!

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#overview)
- [The objective](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#the-objective)
- [The solution](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#the-solution)
- [Setting things up](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#setting-things-up)
- [Initializing the Intercom CRM object and configuring the connection](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#initializing-the-intercom-crm-object-and-configuring-the-connection)
- [A helper function to make it easier to deal with Intercom contact IDs](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#a-helper-function-to-make-it-easier-to-deal-with-intercom-contact-ids)
- [Sending new user registrations to Intercom, in addition to ActiveCampaign](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#sending-new-user-registrations-to-intercom-in-addition-to-activecampaign)
- [Applying tags in Intercom when they're applied in ActiveCampaign](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#applying-tags-in-intercom-when-theyre-applied-in-activecampaign)
- [In summary](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/#in-summary)

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