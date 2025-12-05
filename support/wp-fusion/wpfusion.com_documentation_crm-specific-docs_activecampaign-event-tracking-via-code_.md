---
url: "https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/"
title: "ActiveCampaign Event Tracking | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/#content)

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

# ActiveCampaign Event Tracking

- Published onFebruary 22, 2021
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- ActiveCampaign Event Tracking

### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/\#overview) Overview

**Heads up!** This functionality is now included in the [Event Tracking Addon](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/), which is available for download [in your account](https://wpfusion.com/account/) (for Plus and Professional licenses).

ActiveCampaign includes a feature called [Event Tracking](https://www.activecampaign.com/marketing-automation/site-event-tracking) which can be used in addition to [site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#activecampaign) to track additional engagement points on your website, for example video plays, course progress, forum activity, etc.

[![](https://wpfusion.com/wp-content/uploads/2021/02/event-tracking-hero-mobile-639x1024.png)](https://wpfusion.com/wp-content/uploads/2021/02/event-tracking-hero-mobile.png)

WP Fusion’s ActiveCampaign integration includes a helper function to allow you to track events over the ActiveCampaign events API.

To use event tracking with WP Fusion it must first be enabled in your ActiveCampaign account, at Settings » Tracking » Event Tracking.

These examples work with the full version of WP Fusion as well as [WP Fusion Lite](https://wordpress.org/plugins/wp-fusion-lite/).

### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/\#basic-example) Basic example

Events are tracked by making a call to `wp_fusion()->crm->track_event()`, for example:

```php
wp_fusion()->crm->track_event( 'My event' );
```

You can also optionally pass an event description:

```php
wp_fusion()->crm->track_event( 'My event', 'Event description' );
```

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/\#track-learndash-course-progress-as-events) Track LearnDash course progress as events

Tracking data from other plugins can be achieved by calling the `track_event` function while hooked to other plugins’ actions.

For example to send LearnDash course progress to ActiveCampaign as events:

```php
function wpf_track_learndash_events( $data ) {

	if ( doing_action( 'learndash_course_completed' ) ) {
		$post_id = $data['course']->ID;
	} elseif ( doing_action( 'learndash_lesson_completed' ) ) {
		$post_id = $data['lesson']->ID;
	} elseif ( doing_action( 'learndash_topic_completed' ) ) {
		$post_id = $data['topic']->ID;
	} elseif ( doing_action( 'learndash_quiz_completed' ) ) {
		$post_id = $data['quiz']->ID;
	}

	$last_item = get_post( $post_id );

	// Get the post type label

	$post_type = get_post_type_object( $last_item->post_type );
	$label     = $post_type->labels->singular_name;

	wp_fusion()->crm->track_event( 'Completed ' . $label, $last_item->post_title );

	// Quizzes

	if ( isset( $data['quiz'] ) ) {

		if ( true == $data['pass'] ) {
			wp_fusion()->crm->track_event( 'Passed quiz' );
		} else {
			wp_fusion()->crm->track_event( 'Failed quiz' );
		}
	}

}

add_action( 'learndash_course_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_lesson_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_quiz_completed', 'wpf_track_learndash_events', 5 );
add_action( 'learndash_topic_completed', 'wpf_track_learndash_events', 5 );
```

That data then shows up on the student’s contact record in ActiveCampaign like so

[![](https://wpfusion.com/wp-content/uploads/2021/02/activecampaign-learndash-lesson-activity-741x1024.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/activecampaign-learndash-lesson-activity.jpg)

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/#overview)
- [Examples](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/#examples)
- [Basic example](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/#basic-example)
- [Track LearnDash course progress as events](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/#track-learndash-course-progress-as-events)

### You may also like

[![2485777 understandinglists,unsubscribes v1 102824](https://wpfusion.com/wp-content/uploads/2024/11/2485777_Understandinglistsunsubscribes_v1_102824-300x158.jpg)](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [ActiveCampaign Email List, Opt-In Form, Unsubscribe, & Resubscribe Management Guide](https://wpfusion.com/tutorials/activecampaign-email-list-optin-form-unsubscribe-resubscribe/)

Get the most out of ActiveCampaign with our beginner’s guide. Unlock its full marketing potential today!

### In this chapter

- [ActiveCampaign Accounts](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/ "ActiveCampaign Accounts")
- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [ConvertKit Unsubscribes](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/ "ConvertKit Unsubscribes")
- [Custom fields not loading with AgileCRM](https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/ "Custom fields not loading with AgileCRM")
- [Dynamics 365 - Associating entities](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/ "Dynamics 365 - Associating entities")
- [HighLevel white-labelled accounts](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/ "HighLevel white-labelled accounts")
- [HubSpot - How to use lists](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/ "HubSpot - How to use lists")
- [HubSpot Custom Objects](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/ "HubSpot Custom Objects")
- [Inactive / Unsubscribed People in Drip](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/ "Inactive / Unsubscribed People in Drip")
- [Infusionsoft API Goals](https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/ "Infusionsoft API Goals")
- [Klaviyo marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/ "Klaviyo marketing consent")
- [MailerLite double opt-ins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/ "MailerLite double opt-ins")
- [MailerLite email address changes](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/ "MailerLite email address changes")
- [Mautic Points](https://wpfusion.com/documentation/crm-specific-docs/mautic-points/ "Mautic Points")
- [Pipedrive Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/ "Pipedrive Labels")
- [Salesforce Sandbox Accounts](https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/ "Salesforce Sandbox Accounts")
- [Salesforce Tags](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/ "Salesforce Tags")
- [Unexpected Tags with ConvertKit](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/ "Unexpected Tags with ConvertKit")
- [Updating Leads with ConvertFox, Intercom, and Zoho](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/ "Updating Leads with ConvertFox, Intercom, and Zoho")
- [Zoho Tags](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/ "Zoho Tags")

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