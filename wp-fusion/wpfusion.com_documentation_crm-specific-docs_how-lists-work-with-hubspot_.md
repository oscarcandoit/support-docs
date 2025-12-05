---
url: "https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/"
title: "HubSpot - How to use lists | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#content)

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

# HubSpot – How to use lists

- Published onJanuary 5, 2022
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- HubSpot – How to use lists

### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#overview) Overview

With most marketing automation platforms, WP Fusion uses _tags_ to segment your subscribers, trigger workflows, and control access to content in WordPress.

HubSpot doesn’t have tags, instead it has _lists_. When you connect WP Fusion to HubSpot, you will see the interfaces update to read “lists” instead of “tags”.

For example in the general settings here:

[![](https://wpfusion.com/wp-content/uploads/2022/01/settings-read-as-lists-1024x210.jpg)](https://wpfusion.com/wp-content/uploads/2022/01/settings-read-as-lists.jpg) When connected to HubSpot (or Brevo, SendFox, MailJet), the WP Fusion interfaces update to read “Lists” instead of “Tags”

**This is just a labeling difference—** the functionality with WP Fusion is the same, and everything you see in our documentation works the same way with Lists as it does with Tags.

You can apply lists based on events in WordPress, and also use lists to [restrict access to content](https://wpfusion.com/documentation/getting-started/access-control/).

### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#active-vs-static-lists) Active vs Static Lists

HubSpot is unique among our supported platforms in that it has two types of lists: **Active Lists** and **Static Lists**.

You can see the active lists marked as _(read only)_ when viewing a user’s CRM lists in the admin.

[![](https://wpfusion.com/wp-content/uploads/2022/01/active-vs-static-lists-in-the-admin-1024x324.jpg)](https://wpfusion.com/wp-content/uploads/2022/01/active-vs-static-lists-in-the-admin.jpg) The WP Fusion admin interfaces will indicate whether a list is Static or Active (aka read only)

What’s the difference?

- **Active lists:** These lists are managed by HubSpot, based on [the criteria](https://knowledge.hubspot.com/lists/determine-your-list-criteria) you set when creating the list. As contacts meet the criteria, HubSpot will add them to the list. And when they no longer meet the criteria they will be removed from the list. You cannot manually add a contact to an Active list, and WP Fusion cannot add someone to an Active list over the API.
- **Static lists:** These lists are not updated by HubSpot. You can add contacts to these lists manually, including over the API (via WP Fusion).

For a more detailed explanation, see [the HubSpot documentation](https://knowledge.hubspot.com/lists/what-is-the-difference-between-saved-filters-smart-lists-and-static-lists).

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#how-it-works-with-wp-fusion) How it works with WP Fusion

Because Active Lists are managed by HubSpot, they are “read only”, i.e. you can see if someone is on a list, _but you cannot use WP Fusion to add someone to an active list_, or you’ll get an error.

For that reason, Active lists can only be used for access control to your content. For example in the main WP Fusion meta box when editing any post or page:

[![](https://wpfusion.com/wp-content/uploads/2022/01/using-active-lists-for-access-control-1024x555.png)](https://wpfusion.com/wp-content/uploads/2022/01/using-active-lists-for-access-control.png)

Active lists cannot be selected anywhere that WP Fusion is going to _apply_ those lists— for example as part of a product purchase, or course progress.

Trying to apply an active list over the API will result in an error saying “You cannot operate manually on an active list”.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#active-lists-for-auto-enrollments) Active lists for auto-enrollments

If you’re using WP Fusion to auto-enroll users into courses or groups (i.e. with [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#course-auto-enrollment)) based on lists in HubSpot, you might be wondering why you only see static lists in the dropdowns.

[![](https://wpfusion.com/wp-content/uploads/2022/01/static-lists-course-enrollment-1024x591.jpg)](https://wpfusion.com/wp-content/uploads/2022/01/static-lists-course-enrollment.jpg) WP Fusion only allows you to select static lists to use as “linked lists” for auto-enrollment triggers.

The reason is that the linked list is also an _un-enrollment_ trigger, i.e. if someone is removed from the list, they will be removed from the course.

Imagine this scenario, using an active list for the Link with List setting:

1. A friend or family member is interested in taking your course, and so you manually give them a user account and add them to the course via the LearnDash admin
2. WP Fusion sends an API call to add the contact to the linked active list in HubSpot
3. The API call fails with a “Can not operate manually on a dynamic list” error
4. The next time the user logs in, WP Fusion sees that they are not on the list, and **they are unenrolled from the course**

For this reason, we recommend only using static lists for automated enrollments, as it’s the only way we can ensure that users will stay properly enrolled.

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#enabling-active-lists-for-auto-enrollments) Enabling active lists for auto-enrollments

If you understand the risks and want to proceed with using active lists for auto-enrollments anyway, you can do so by adding this snippet to your functions.php file (or via a [code snippets plugin](https://wordpress.org/plugins/code-snippets/)).

```php
add_filter(
	'wpf_render_tag_multiselect_args',
	function( $args ) {
		$args['read_only'] = true;
		return $args;
	}
);
```

This will update the UI so that active lists can be selected and used for auto-enrollments.

**However**, by using active lists for auto-enrollments, you will lose the ability to manually manage course and enrollments inside of WordPress. Any time you need to add a user to a course or group, you will have to first log into HubSpot and make sure they are on the correct active list.

For this reason we recommend always using static lists for automatic course and group enrollments.

### [\#](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/\#using-a-multiselect-for-segmentation) Using a multiselect for segmentation

In most cases, Lists are the best way to segment contacts with HubSpot.

However, HubSpot has a limit of 1,000 static lists per account. If you need to create more than 1,000 segments, WP Fusion supports using a multiselect field instead of lists. Multiselect fields can support up to 5,000 options.

To set this up, first create a multiselect field in HubSpot and add your options (i.e. segments). From the setup tab in the WP Fusion settings, select Multiselect under **Segment Type**.

Select your desired multi-select field, save the settings, and click Refresh Available Lists & Fields to load your available multiselect options into the dropdowns.

[![](https://wpfusion.com/wp-content/uploads/2022/01/hubspot-multi-select-for-segments-1024x463.jpg)](https://wpfusion.com/wp-content/uploads/2022/01/hubspot-multi-select-for-segments.jpg)

Once this is set up, WP Fusion will stop updating contact lists, and will instead select and deselect multiselect options from the selected field for each contact.

You can optionally use the selected values in the conditions editor for creating Active Lists.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#overview)
- [Active vs Static Lists](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#active-vs-static-lists)
- [How it works with WP Fusion](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#how-it-works-with-wp-fusion)
- [Active lists for auto-enrollments](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#active-lists-for-auto-enrollments)
- [Enabling active lists for auto-enrollments](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#enabling-active-lists-for-auto-enrollments)
- [Using a multiselect for segmentation](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#using-a-multiselect-for-segmentation)

### You may also like

[![2501696 hubspot integration v1 111924](https://wpfusion.com/wp-content/uploads/2024/11/2501696_Hubspot-Integration_v1_111924-300x158.jpg)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [HubSpot-WordPress Integration: How to Connect (Step-by-Step Guide)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

HubSpot is a full-spectrum inbound marketing and automation platform that makes it easy for businesses to execute, manage, and measure their inbound marketing efforts.

[![2474279 howtoconnectlearndashwithhubspot 093024](https://wpfusion.com/wp-content/uploads/2024/09/2474279_HowtoConnectLearnDashWithHubSpot_093024-300x158.jpg)](https://wpfusion.com/tutorials/how-to-connect-learndash-with-hubspot/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Connect LearnDash With HubSpot (Step-by-Step Integration Guide)](https://wpfusion.com/tutorials/how-to-connect-learndash-with-hubspot/)

LearnDash helps you create course content and apply access restriction, but it doesn’t include a ton of marketing or segmentation features. With WP Fusion, you can connect LearnDash to HubSpot to create targeted segments and better optimize your marketing efforts.

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