---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/"
title: "The WP Fusion User Class"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#content)

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

# The WP Fusion User Class

- Published onMarch 10, 2018
- Last updated on April 3, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- The WP Fusion User Class

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#overview) Overview

As we discussed in the [first section](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/), WP Fusion achieves its flexibility and extensibility by standardizing the way WordPress communicates with different CRM systems.

The first section covered how to interface with your selected CRM directly by utilizing the `wp_fusion()->crm` object. Those methods are “low level”, they require you to already know the contact ID of the contact you want to edit, and do very little in terms of validation of data or redundancy checking.

So while WP Fusion’s CRM class deals with **_contacts_ and contact data**, the **WPF\_User class deals with WordPress _users_ and user data**.

This class works like a central dispatch, taking incoming events and data from our various plugin integrations and routing it to the appropriate method in your selected CRM.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#a-basic-example-of-how-this-all-works-using-lifterlms) A basic example of how this all works, using LifterLMS

- When a student completes a lesson in LifterLMS, LifterLMS triggers the `'lifterlms_lesson_completed'` action.
- In our LifterLMS integration file, we have a function attached to this hook. This function checks to see if any tags have been configured to be applied when the lesson is marked complete.
- If there are tags to apply, the function then calls:


```php
wp_fusion()->user->apply_tags( $tags, $user_id );
```

- In the `apply_tags()` function, we first check to see if there is a contact ID available for that user. If the user doesn’t have a contact record, then nothing else happens.
- Then we check the user’s current tags and see if the tags being applied are actually new. If the user already has the tag, then we don’t need to send an unnecessary API call.
- Then `apply_tags()` sends the new tags to the [CRM wrapper class](https://wpfusion.com/documentation/advanced-developer-tutorials/how-wp-fusion-interfaces-with-multiple-crms/) (discussed in the previous article), by calling:


```php
wp_fusion()->crm->apply_tags( $tags, $contact_id );
```

- It checks the response from the API call, and if there were any errors, these are recorded in WP Fusion’s error log for troubleshooting purposes.
- Finally we update the tags stored in in the usermeta table for that user, at `'{crm_slug}_tags'` so they can be quickly accessed again in the future.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#the-available-methods-in-the-wpf_user-class) The available methods in the WPF\_User class:

* * *

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#user_register) user\_register()

```php
wp_fusion()->user->user_register( $user_id, $post_data = null, $force = false );
```

This function is triggered whenever a user registers on your site, from any plugin or other source. It can also be manually called to create a new CRM contact from an existing user ID.

**Parameters:**

- `$user_id` _(int) (Required)_ The ID of the user you’d like to use to create the new contact
- `$post_data` _(array) (Optional)_ You can pass in additional data you’d like to be included with the new contact. If this is left blank, WP Fusion will attempt to get as much data as possible out of the database
- `$force` _(bool) (Optional)_ If you have the setting for “Create Contacts” disabled in the WP Fusion settings, then you can set this argument to true to force creating a new contact.

**Return values:**

- `$contact_id` _(int)_ The contact ID of the new contact
- `false` _(bool)_ If there wasn’t enough data available to create a new contact, or if there was an API connection failure

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#get_contact_id) get\_contact\_id()

```php
wp_fusion()->user->get_contact_id( $user_id, $force_update = false );
```

Gets the contact ID for a user from their local user meta, or forces an update of the contact ID by looking up their email address in your CRM.

**Parameters:**

- `$user_id` _(int) (Required)_ The ID of the user you’d like to get the contact ID for
- `$force_update` _(bool) (Optional)_ If set to true, this will force an update of the saved contact ID for the user by looking up their email address in your CRM

**Return values:**

- `$contact_id` _(int)_ The contact ID of the user
- `false` _(bool)_ If the user has no contact ID saved on the site, or if WP Fusion was unable to locate their email address in your CRM

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#get_tags) get\_tags()

```php
wp_fusion()->user->get_tags( $user_id, $force_update = false );
```

Gets the tags for a user from their local user meta, or forces an update of their tags by performing an API call.

**Parameters:**

- `$user_id` _(int) (Required)_ The ID of the user you’d like to get the tags ID for
- `$force_update` _(bool) (Optional)_ If set to true, this will force an update of the saved tags for the user by force-checking their contact ID and then re-loading the user’s tags from your CRM

**Return values:**

- `$user_tags` _(array)_ An array of tag IDs applied to the contact. Will be an empty array if no tags were found
- `false` _(bool)_ If the user has no contact ID saved on the site, or if WP Fusion was unable to locate their email address in your CRM

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#pull_user_meta) pull\_user\_meta()

```php
wp_fusion()->user->pull_user_meta( $user_id );
```

Loads the latest meta data from the CRM contact record for the specified user, and updates their saved data on your site.

**Parameters:**

- `$user_id` _(int) (Required)_ The ID of the user you’d like to load from the CRM

**Return values:**

- `$user_meta` _(array)_ An array of WordPress meta fields and their values that were loaded for the user
- `false` _(bool)_ If the user has no eligible meta to load, or if there was an error loading their contact record

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#push_user_meta) push\_user\_meta()

```php
wp_fusion()->user->push_user_meta( $user_id, $user_meta = false );
```

Pushes meta data for a user from WordPress to your CRM.

**Parameters:**

- `$user_id` _(int) (Required)_ The ID of the user you’d like to update
- `$user_meta` _(array) (Optional)_ An associative array of WordPress meta keys and values to update. If left blank, WP Fusion will send all meta data found for that user in the database.

**Return values:**

- `true` _(bool)_ The contact was successfully updated
- `false` _(bool)_ If the user has no saved contact ID, or there was no eligible meta data to send

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#apply_tags) apply\_tags()

```php
wp_fusion()->user->apply_tags( $tags, $user_id = false );
```

Applies an array of tags to a user.

**Parameters:**

- `$tags` _(array) (Required)_ An array of tag IDs to apply to the user
- `$user_id` _(int) (Optional)_ The user to apply the tags to. Will use the current logged in user if left blank

**Return values:**

- `true` _(bool)_ The tags were successfully applied
- `false` _(bool)_ If no contact ID was found for the user, or if the user already had the specified tags and no API call was needed

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#remove_tags) remove\_tags()

```php
wp_fusion()->user->remove_tags( $tags, $user_id = false );
```

Removes an array of tags from a user.

**Parameters:**

- `$tags` _(array) (Required)_ An array of tag IDs to remove from the user
- `$user_id` _(int) (Optional)_ The user to remove the tags from. Will use the current logged in user if left blank

**Return values:**

- `true` _(bool)_ The tags were successfully removed
- `false` _(bool)_ If no contact ID was found for the user, or if the user didn’t have those tags in the first place

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#import_user) import\_user()

```php
wp_fusion()->user->import_user( $contact_id, $send_notification = false, $role = false );
```

This function imports a contact from your CRM, by contact ID, and creates a new WordPress user. If a user already exists with the same contact ID, that user will just be updated.

New users will be given a randomly generated password. If you have enabled “Return Password” in the WP Fusion settings, this password will be stored back to their contact record.

**Parameters:**

- `$contact_id` _(int) (Required)_ The contact ID to import
- `$send_notification` _(bool) (Optional)_ Whether to send the new user the default WordPress welcome email
- `$role` _(bool / string) (Optional)_ If provided, the new user will be given the specified role. Otherwise they will be created with the site default role.

**Return values:**

- `$user_id` _(int)_ The ID of the new user (or existing user if updated)
- `$error` _(WP Error object)_ If there was an API error importing the user, or if the loaded contact data didn’t contain an email address

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#utility-and-helper-functions) Utility and helper functions:

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#get_user_id) get\_user\_id()

```php
wp_fusion()->user->get_user_id( $contact_id );
```

Looks up a user by their contact ID.

**Parameters:**

- `$contact_id` _(int / string) (Required)_ The contact ID to search by

**Return values:**

- `$user_id` _(int)_ The ID of the user
- `false` _(bool)_ If no user was found with that contact ID

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#has_tag) has\_tag()

```php
wp_fusion()->user->has_tag( $tag, $user_id = false );
```

Checks a given user to see if they have the specified tag.

**Parameters:**

- `$tag` _(int / string) (Required)_ The tag ID or tag label to check for
- `$user_id` _(int) (Optional)_ The user ID to check. Will default to the current user ID if left blank

**Return values:**

- `true` _(bool)_ The user has the tag
- `false` _(bool)_ The user does not have the tag

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#get_tag_id) get\_tag\_id()

```php
wp_fusion()->user->get_tag_id( $tag_label );
```

For CRMs that use internal IDs for their tags (like Infusionsoft), this function will return the tag ID for a given tag label.

**Parameters:**

- `$tag_label` _(string) (Required)_ The tag label to check for

**Return values:**

- `$tag_id` _(int / string)_ The internal ID for the supplied tag label
- `false` _(bool)_ If no tag was found with that label

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/\#get_tag_label) get\_tag\_label()

```php
wp_fusion()->user->get_tag_label( $tag_id );
```

For CRMs that use internal IDs for their tags (like Infusionsoft), this function will return the tag label for a given tag ID.

**Parameters:**

- `$tag_id` _( int / string) (Required)_ The tag ID to check for

**Return values:**

- `$label` _(string)_ The tag label for that ID. If no tag is found, it will return “Unknown Tag:” with the tag ID

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#overview)
- [A basic example of how this all works, using LifterLMS](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#a-basic-example-of-how-this-all-works-using-lifterlms)
- [The available methods in the WPF\_User class:](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#the-available-methods-in-the-wpf_user-class)
- [user\_register()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#user_register)
- [get\_contact\_id()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#get_contact_id)
- [get\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#get_tags)
- [pull\_user\_meta()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#pull_user_meta)
- [push\_user\_meta()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#push_user_meta)
- [apply\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#apply_tags)
- [remove\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#remove_tags)
- [import\_user()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#import_user)
- [Utility and helper functions:](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#utility-and-helper-functions)
- [get\_user\_id()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#get_user_id)
- [has\_tag()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#has_tag)
- [get\_tag\_id()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#get_tag_id)
- [get\_tag\_label()](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/#get_tag_label)

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