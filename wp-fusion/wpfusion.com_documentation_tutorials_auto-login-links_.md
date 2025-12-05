---
url: "https://wpfusion.com/documentation/tutorials/auto-login-links/"
title: "Auto Login | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/auto-login-links/#content)

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

# Auto Login

- Published onNovember 21, 2016
- Last updated on March 10, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Auto Login

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#overview) Overview

WP Fusion’s auto-login system can load the CRM tags and meta data for a contact record into a temporary WordPress user account. The site visitor is then tracked with a cookie.

This allows you to personalize site content, pre-fill forms, and track activity (by applying tags) even if the contact doesn’t have a WordPress account.

The auto-login process can either be triggered via a link, or via a form submission.

**Note:** This feature does not work properly on WP Engine or other hosts that don’t let you edit your site’s caching settings.

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#auto-login-links) Auto Login Links

Auto login links can be used in an email to grant access to restricted content on your site without requiring a user to log in. You can even grant access to contacts in your CRM that don’t have user accounts on your site.

Keep in mind that the **users will only be logged in for the purposes of WP Fusion’s content restriction** and activity tracking features. For security reasons, users will not be able to access or edit their account details, purchase history, or any other sensitive information. For that they will need to log into your site using their username and password. **All other plugins will see the visitor as a guest.**

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#usage) Usage

To use this feature, first enable it from the Advanced section of the WP Fusion general settings tab.

[![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-settings-1-1024x559.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-settings-1.jpg)

You can now log a user into your site by passing a contact ID in any URL pointed at your site, for example:

`https://mysite.com/my-special-content/?cid=1234`

This sets a cookie and creates a temporary WordPress user with that contact’s tags and other information from your CRM. Any protected content will be accessible if the contact has the correct tags. You can also apply tags and track activity as if the user was logged in.

The auto-login session is valid for 180 days (or until the visitor clears their browser cache). This can be modified with [the `wpf_auto_login_cookie_expiration` filter](https://wpfusion.com/documentation/tutorials/auto-login-links/#modifying-the-cookie-expiration).

You can also use WP Fusion’s [user meta shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-user-meta) to display contact data from your CRM.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#personalization-tags) Personalization tags

Here are some of the personalization tags for our more popular CRM integrations. This list will continue to be updated:

- **ActiveCampaign:**`https://mysite.com/?cid=%CONTACTID%`
- **AgileCRM:**`https://mysite.com/?cid={{id}}`
- **Bento:**`https://mysite.com/?cid={{ visitor.uuid }}`
- **ConvertKit:**`https://mysite.com/?cid={{ subscriber.id }}`
- **Drip:**`https://mysite.com/?cid={{ subscriber.id }}`
- **Dynamics 365 Marketing:** See below
- **FluentCRM**: `https://mysite.com/?cid={{contact.id}}`
- **FunnelKit**: `https://mysite.com/?cid={{contact_id}}`
- **Gist:** _not supported by Gist_
- **Groundhogg:**`https://mysite.com/?cid={id}`
- **HighLevel:**`https://mysite.com/?cid={{contact.id}}`
- **HubSpot:**`https://mysite.com/?cid={{ contact.email }}`
- **Infusionsoft / Keap:**`https://mysite.com/?cid=~Contact.Id~`
- **Mailchimp:**`https://mysite.com/?cid=*|EMAIL|*`
- **MailerLite:**`https://mysite.com/?cid={$email}`
- **Mautic:**`https://mysite.com/?cid={contactfield=id}`
- **NationBuilder:**`https://mysite.com/?cid={{recipient.id}}`
- **Ontraport:**`https://mysite.com/?cid=[Contact ID]`
- **Salesforce:**`https://mysite.com/?cid={{{Recipient.Id}}}`
- **Brevo:**`https://mysite.com/?cid={{ contact.EMAIL }}`
- **Zoho:**`https://mysite.com/?cid=${Contacts.Contact Id}`

**Dynamics 365 Marketing**

With Dynamics 365, you can create an auto-login URL by clicking _Personalization_» _New Dynamic Text,_ and choosing _Contact_ from the available properties.

[![](https://wpfusion.com/wp-content/uploads/2016/11/dynamics-365-dynamic-text-1024x737.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/dynamics-365-dynamic-text.jpg)

**Other CRMs**

For other CRMs you can find the merge field for the contact ID from their merge fields documentation.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#set-current-user) Set Current User

By default auto-logged in users will only be able to access content protected by WP Fusion, and contact data can only be displayed using WP Fusion’s [shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/).

You can enable **Set Current User** to have WP Fusion set the `$current_user` global in WordPress, so other plugins will be tricked into treating the user as logged-in as well.

This works well for pre-filling forms (in plugins like [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/) or [Advanced Custom Fields](https://wpfusion.com/documentation/other/advanced-custom-fields/)) with data from the CRM contact record, allowing you to create profile update forms or subscription preferences forms for your mailing list subscribers.

However this can cause problems with membership plugins (like BuddyBoss) and gamification plugins as they try to trigger notifications or achievements for a non-existent user, and may cause your site to crash when the auto-login link is visited.

If you get a white screen or an error message when visiting an auto-login link, turning off **Set Current User** will likely fix the error.

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#form-auto-login) Form Auto Login

You can also start an auto-login session when a form is submitted with any one of our [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

This is the same as if the visitor had just followed an auto-login link— a cookie is set and then you can customize the site appearance based on the tags and meta data on their contact record.

[![](https://wpfusion.com/wp-content/uploads/2016/11/form-auto-login-1024x196.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/form-auto-login.jpg)

To enable this, check the box for **Form Auto Login** from the Advanced settings tab.

If you’re using Gravity Forms, you also have the option to configure Form Auto Login on individual [form feeds](https://wpfusion.com/documentation/lead-generation/gravity-forms/#https://wpfusion.com/documentation/lead-generation/gravity-forms/#auto-login).

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#ending-auto-login-sessions) Ending auto-login sessions

WP Fusion will attempt to end the auto login session in several situations to prevent unexpected behavior on your site:

- When a user logs into the site with a username and password
- When a visitor reaches a page that contains “login” in the URL
- When a visitor reaches a page that contains “register” in the URL
- When a visitor reaches a page that contains “checkout” in the URL

However you may also want to force the auto-login session to end at a different time, for example when a form is submitted. You can do this by appending `?wpf-end-auto-login=true` to any URL.

You can also achieve this in PHP by calling `wp_fusion()->auto_login->end_auto_login();`

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#troubleshooting-auto-login) Troubleshooting Auto Login

The auto login system is still considered experimental and we can’t guarantee that it will work with all plugins.

If you’re using an auto login link and it doesn’t seem to be working, the first thing to check is if the cookie has been set for the auto login session. You can check your browser’s cookie storage to see if the `wpf_contact` cookie is being set. In Chrome this is found in the developer console under Application » Cookies:

[![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-troubleshooting-1024x358.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-troubleshooting.jpg)

If the `wpf_contact` cookie isn’t set, then the auto login URL wasn’t recognized. You should make sure that you’re using a real contact ID in your auto login URL, and that Auto Login is turned on in the WP Fusion settings.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#caching) Caching

Because auto-login links are visited by guests (people who aren’t logged in), making auto-login links work with caching requires some extra attention.

**Note:** As of v3.38.34 (January 2022), WP Fusion will automatically set a cookie `wordpress_logged_in_wpfusioncachebuster` when an auto-login session is in progress. This should work to automatically bypass caching for mosts hosts and cache plugins, since it looks like the cookie for a regular logged-in user.

For starters, make sure that any URLs with `cid=` in them are excluded from cache. Also add a cookie based cache exclusion for the `wpf_contact` cookie.

Note that URLs with UTM parameters (from Google Analytics) force-enable caching on some hosts. In many cases https://mysite.com/?cid=123 will work, but https://mysite.com/?utm\_campaign=FallNewsletter&cid=123 will not, because the `utm_campaign` parameter triggers caching.

Getting around that is different for every host. For example with Cloudways we’ve had to:

1. In the cache exclusion settings in the Breeze plugin, put in a URL exclusion for the landing page being used with auto-login
2. In the Varnish settings in Cloudways, put in a cache exclusion for the landing page being used with auto-login
3. In the Varnish settings in Cloudways, put in a cache exclusion for the `wpf_contact` cookie.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#debug-mode) Debug Mode

As of WP Fusion v3.37.12, you can enable **Auto Login Debug Mode** from the Advanced tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-debug-mode-1024x508.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/auto-login-debug-mode.jpg)

When enabled, details about the current auto-login session will be output to the HTML comments in the header of your site.

You can use this to troubleshoot issues for a particular auto-login user, for example missing or malformed metadata or tags. This will also show if the `wpf_contact` cookie isn’t being set, for example due to caching.

### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#developer-resources) Developer resources

There are a few filters that allow you to modify the auto-login process.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#using-an-alternate-auto-login-query-variable) Using an alternate auto-login query variable

Instead of using `?cid=` in your URL, you may want to use another variable,  for example if you’re already passing the contact’s ID to a different plugin. You can register an additional custom query variable using the `wpf_auto_login_query_var` filter.

For example to share the contact ID parameter with RightMessage, you’d use:

```php
function alt_auto_login_var( $var ) {
	return 'rm_ac';
}

add_filter( 'wpf_auto_login_query_var', 'alt_auto_login_var' );
```

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#using-an-alternate-auto-login-parameter) Using an alternate auto-login parameter

By default WP Fusion uses a contact ID in your CRM to identify visitors via an auto-login URL. However you can in theory use any contact field as an auto-login parameter, as long as you can create the logic to convert that parameter into a contact ID.

You can modify the contact ID that’s read out of the URL using the `wpf_auto_login_contact_id` filter.

For example, to use a contact’s email address as the auto login parameter, we can use the `get_contact_id()` method to convert the email address from the URL into a contact ID in the CRM.

```php
function use_email_address_as_auto_login_token( $contact_id ) {

	if ( is_email( $contact_id ) ) {
		$contact_id = wp_fusion()->crm->get_contact_id( urldecode( $contact_id ) );
	}

	return $contact_id;

}

add_filter( 'wpf_auto_login_contact_id', 'use_email_address_as_auto_login_token' );
```

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#ending-an-auto-login-session) Ending an auto-login session

You can permanently end an auto-login session and remove any cookies via the `wpf_end_auto_login` filter.

```php
function my_end_auto_login( $end, $contact_data ) {

	if ( wp_fusion()->user->has_tag( 'Payment Failed' ) ) {
		$end = true;
	}

	return $end;
}

add_filter( 'wpf_end_auto_login', 'my_end_auto_login', 10, 2 );
```

There is also a helper filter which allows you to end a session based on a partial URL match, `wpf_end_auto_login_request_uris`:

```php
function my_end_auto_login_uri( $request_uris ) {

	$request_uris[] = 'my-page-slug';

	return $request_uris;
}

add_filter( 'wpf_end_auto_login_request_uris', 'my_end_auto_login_uri' );
```

In this example, if the visitor lands on https://mysite.com/my-page-slug/ (or any URL with my-page-slug in it) the session will end.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#skipping-an-auto-login-session) Skipping an auto-login session

You can skip an auto-login session on a single page via the `wpf_skip_auto_login` filter. The session will be resumed once the visitor navigates to another page.

```php
function my_skip_auto_login( $skip, $contact_data ) {

	if ( is_page( 'my-custom-form' ) ) {
		$skip = true;
	}

	return $skip;
}

add_filter( 'wpf_skip_auto_login', 'my_skip_auto_login', 10, 2 );
```

There is also a helper filter which allows you to skip the session based on a partial URL match, `wpf_skip_auto_login_request_uris`:

```php
function my_skip_auto_login_uri( $request_uris ) {

	$request_uris[] = 'my-page-slug';

	return $request_uris;
}

add_filter( 'wpf_skip_auto_login_request_uris', 'my_skip_auto_login_uri' );
```

In this example, if the visitor lands on https://mysite.com/my-page-slug/ (or any URL with my-page-slug in it) the session will skipped on that page.

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#modifying-the-cookie-expiration) Modifying the cookie expiration

By default the auto login cookie is set to expire after 180 days. You can modify this with the `wpf_auto_login_cookie_expiration` filter.

```php
function change_auto_login_cookie_expiration( $expiration ) {

	return 30 * DAY_IN_SECONDS;

}

add_filter( 'wpf_auto_login_cookie_expiration', 'change_auto_login_cookie_expiration' );
```

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#pass-auto-login-data-to-other-scripts) Pass auto-login data to other scripts

WP Fusion includes a function, [wpf\_get\_current\_user()](https://wpfusion.com/documentation/functions/wpf_get_current_user/), which works the same as the [wp\_get\_current\_user()](https://developer.wordpress.org/reference/functions/wp_get_current_user/) function, except that it also supports auto-login sessions. This can be used to pass data from an auto-login session to a 3rd party tracking script.

Below are two examples, one for [Oribi’s site tracking](https://oribi.io/help/oribi-javascript-api/add-visitors-emails), and one for [Smartlook’s site tracking](https://smartlook.github.io/docs/web/identify-visitor).

```php
function custom_wpf_tracking() {

	if ( ! function_exists( 'wp_fusion' ) || ! wpf_is_user_logged_in() ) {
		return; // WP Fusion needs to be active and the user needs to be identified.
	}

	$user       = wpf_get_current_user(); // Get the details about the current user. This lets you use the email via $user->user_email
	$contact_id = wpf_get_contact_id(); // Or, optionally, you can use the contact ID for tracking.

	?>

	<!-- Start WP Fusion + Custom site tracking. -->

	<!-- Example one: Oribi, using the email address. -->
	<script type="text/javascript">
		ORIBI.api('setUserEmail', '<?php echo $user->user_email; ?>' );
	</script>

	<!-- Example two: Smartlook, using the contact ID. -->
	<script type="text/javascript">
		smartlook( 'identify', '<?php echo $contact_id; ?>' );
	</script>

	<!-- End WP Fusion + Custom Site Tracking -->
	<?php

}

add_action( 'wp_footer', 'custom_wpf_tracking' );
```

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#making-auto-login-more-secure) Making auto-login more secure

The basic auto-login implementation with just the `cid=` parameter is the easiest to set up and the most reliable. However this does mean that a visitor could cycle through random contact IDs in the URL, and potentially gain access to another contact’s content or details.

You can further secure the URL by adding a second parameter that has to pass. In this example, the auto-login URL contains an additional `email=` parameter. If the email doesn’t match the email address on the contact record in the CRM, the auto-login session is cancelled.

To work, the URL would need to be formatted like `https://mysite.com/?cid={contact_id}&email={email_address}`

```php
function verify_wpf_auto_login( $end, $contact_data ) {

	if ( isset( $_GET['cid'] ) ) {

		$contact = wp_fusion()->crm->load_contact( intval( $_GET['cid'] ) );

		if ( is_wp_error( $contact ) ) {
			return true;
		}

		// If there's no &email= parameter in the URL, or the email doesn't match
		// the email in the database, end the auto login session

		if ( ! isset( $_GET['email'] ) ) {
			return true;
		}

		if ( urldecode( $_GET['email'] ) != $contact['user_email'] ) {
			return true;
		}
	}

	return $end;

}

add_filter( 'wpf_end_auto_login', 'verify_wpf_auto_login', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/tutorials/auto-login-links/\#true-auto-login)“True” auto-login

Finally, there are some scenarios where you might need to allow users to log into real (existing) user accounts via a link.

This is not, and never will be, a feature of WP Fusion— because it creates a significant security vulnerability. A determined actor could guess the login URL and steal your real users’ data, or even take over your site.

Please use with caution and make sure you are also protecting your site with a security plugin, and DDoS / brute force protection.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/auto-login-links/#overview)
- [Auto Login Links](https://wpfusion.com/documentation/tutorials/auto-login-links/#auto-login-links)
- [Usage](https://wpfusion.com/documentation/tutorials/auto-login-links/#usage)
- [Personalization tags](https://wpfusion.com/documentation/tutorials/auto-login-links/#personalization-tags)
- [Set Current User](https://wpfusion.com/documentation/tutorials/auto-login-links/#set-current-user)
- [Form Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/#form-auto-login)
- [Ending auto-login sessions](https://wpfusion.com/documentation/tutorials/auto-login-links/#ending-auto-login-sessions)
- [Troubleshooting Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/#troubleshooting-auto-login)
- [Caching](https://wpfusion.com/documentation/tutorials/auto-login-links/#caching)
- [Debug Mode](https://wpfusion.com/documentation/tutorials/auto-login-links/#debug-mode)
- [Developer resources](https://wpfusion.com/documentation/tutorials/auto-login-links/#developer-resources)
- [Using an alternate auto-login query variable](https://wpfusion.com/documentation/tutorials/auto-login-links/#using-an-alternate-auto-login-query-variable)
- [Using an alternate auto-login parameter](https://wpfusion.com/documentation/tutorials/auto-login-links/#using-an-alternate-auto-login-parameter)
- [Ending an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/#ending-an-auto-login-session)
- [Skipping an auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/#skipping-an-auto-login-session)
- [Modifying the cookie expiration](https://wpfusion.com/documentation/tutorials/auto-login-links/#modifying-the-cookie-expiration)
- [Pass auto-login data to other scripts](https://wpfusion.com/documentation/tutorials/auto-login-links/#pass-auto-login-data-to-other-scripts)
- [Making auto-login more secure](https://wpfusion.com/documentation/tutorials/auto-login-links/#making-auto-login-more-secure)
- ["True" auto-login](https://wpfusion.com/documentation/tutorials/auto-login-links/#true-auto-login)

### You may also like

[![A smiling person with long hair gestures with one hand, set against a blue background featuring WP Fusion and AUTO LOGIN LINK! text prominently displayed, showcasing how to use the seamless integration for effortless access.](https://wpfusion.com/wp-content/uploads/2025/01/wp-fusion-auto-login-300x169.jpg)](https://wpfusion.com/videos/tutorials/how-to-use-a-wp-fusion-auto-login-link/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [How to use a WP Fusion Auto Login Link!](https://wpfusion.com/videos/tutorials/how-to-use-a-wp-fusion-auto-login-link/)

In this video, we show you how to use WP Fusion Auto Login Links: where to select auto-login, how to create personalization tags, how to send the links in an email, and how to start an auto-login session after a form submission.

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

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