---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/"
title: "The WP Fusion CRM API"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#content)

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

# The WP Fusion CRM API

- Published onMarch 10, 2018
- Last updated on July 26, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- The WP Fusion CRM API

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#overview) Overview

WP Fusion takes a completely original approach to connecting WordPress to our supported CRMs and marketing automation systems. There is no other plugin available that is as flexible or extensible.

Normally, with a plugin like Gravity Forms (for example), you would download one of several available add-ons that connect Gravity Forms to your CRM of choice, like the [ActiveCampaign add-on](https://www.gravityforms.com/add-ons/activecampaign/) or [AgileCRM add-on](https://www.gravityforms.com/add-ons/agile-crm/). These are created from scratch and use code unique to the API in question.

Before WP Fusion, many sites would have to use several different plugins to get a basic level of integration with their CRM. An ActiveCampaign user might need ActiveCampaign add-on for Gravity Forms, [ActiveWoo](https://activewoo.com/) to send WooCommerce order data, and the [official ActiveCampaign plugin](https://wordpress.org/plugins/activecampaign-subscription-forms/) to enable site tracking and embedding forms.

This introduces a lot of unnecessary overlap, with the ActiveCampaign SDK being included multiple times, and redundant API calls being sent.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#how-we-solved-that-problem) How we solved that problem

When designing WP Fusion, we realized that all of these CRM systems offer the same basic functionality: adding new contacts, updating existing contacts, applying and removing tags, and loading contact data from the CRM.

So with that in mind, we created a wrapper class for each CRM, with a standardized set of functions to send and receive data from WordPress, then reformat it according to the rules of each API. Every one of our integrations has at least the following methods:

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#connect) connect()

```php
wp_fusion()->crm->connect( $auth = null, $test = false );
```

The connect() function is called by all the member functions in the class to initialize the connection to the CRM. It’s not necessary to use this in your code, but it can be used to validate an API key or OAuth token by setting `$test` to `true`.

**Parameters:**

- `$auth` _(string) (Optional)_ The API key or other authorization code required to connect. There may be more than one parameter depending on the CRM. If this is left blank, WP Fusion will use the authentication data you entered on the original setup page.
- `$test` _(bool) (Optional)_ If set to true, WP Fusion will also verify the connection by attempting to make an API call.

**Return values:**

- `true` _(bool)_ If the connection was successful
- `$error` _(WP\_Error object)_ If the connection was unsuccessful

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#sync_tags) sync\_tags()

```php
wp_fusion()->crm->sync_tags();
```

Loads all available tags from the CRM and updates the available tags in the tag dropdowns for WP Fusion.

**Return values:**

- `$tags` _(array)_ An array of tags in the CRM
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#sync_crm_fields) sync\_crm\_fields()

```php
wp_fusion()->crm->sync_crm_fields();
```

Loads all available fields and custom fields from the CRM and updates the available fields in the dropdowns for WP Fusion.

**Return values:**

- `$crm_fields` _(array)_ An array of available fields in the CRM
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#get_contact_id) get\_contact\_id()

```php
wp_fusion()->crm->get_contact_id( $email_address );
```

Looks up a contact ID in the CRM by their email address.

**Parameters:**

- `$email_address` _(string)_ The email address to search for a contact by

**Return values:**

- `$contact_id` _(int)_ A contact ID for that email address
- `false` _(bool)_ If no contact ID was found with that email address
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#get_tags) get\_tags()

```php
wp_fusion()->crm->get_tags( $contact_id );
```

Loads a contact’s tags from the CRM.

**Parameters:**

- `$contact_id` _(int)_ The contact ID to load tags for

**Return values:**

- `$tags` _(array)_ An array of tag IDs for the contact (or an empty array if no tags were found)
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#apply_tags) apply\_tags()

```php
wp_fusion()->crm->apply_tags( $tags, $contact_id );
```

Applies one or more tags to a contact.

**Parameters:**

- `$tags` _(array)_ An array of tags to apply
- `$contact_id` _(int)_ The contact ID to apply the tags to

**Return values:**

- `true` _(bool)_ The tags were successfully removed
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#remove_tags) remove\_tags()

```php
wp_fusion()->crm->remove_tags( $tags, $contact_id );
```

Removes one or more tags to a contact.

**Parameters:**

- `$tags` _(array)_ An array of tags to remove
- `$contact_id` _(int)_ The contact ID to remove the tags from

**Return values:**

- `true` _(bool)_ The tags were successfully removed
- `$error` _(WP\_Error object)_ If the API call failed

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#add_contact) add\_contact()

```php
wp_fusion()->crm->add_contact( $contact_data, $map_meta_fields = true );
```

Adds a new contact to the CRM.

**Parameters:**

- `$contact_data` _(array)_ An associative array containing the data for the new contact, with the WordPress field as the key and the data as the value, like `array( 'user_email' => 'email@example.com' );`
- `$map_meta_fields` _(bool)_ If set to true, WP Fusion will convert the field keys from WordPress meta keys into the field names in the CRM. Set to false to bypass this conversion.

**Return values:**

- `$contact_id` _(int)_ The contact ID for the newly created contact
- `$error` _(WP\_Error object)_ If the API call failed or the data was rejected

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#update_contact) update\_contact()

```php
wp_fusion()->crm->update_contact( $contact_id, $contact_data, $map_meta_fields = true );
```

Updates a contact in the CRM.

**Parameters:**

- `$contact_id` _(int)_ The contact ID to update
- `$contact_data` _(array)_ An associative array containing the update data, in the same format as add\_contact();
- `$map_meta_fields` _(bool)_ If set to true, WP Fusion will convert the field keys from WordPress meta keys into the field names in the CRM. Set to false to bypass this conversion.

**Return values:**

- `true` _(bool)_ The contact was successfully updated
- `$error` _(WP\_Error object)_ If the API call failed or the data was rejected

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#load_contact) load\_contact()

```php
wp_fusion()->crm->load_contact( $contact_id );
```

Loads the contact record for a contact ID and returns an associative array of WordPress field / value pairs, based on the WP Fusion “Contact Field” settings.

**Parameters:**

- `$contact_id` _(int)_ The contact to load

**Return values:**

- `$user_meta` _(array)_ Array containing the contact data
- `$error` _(WP\_Error object)_ If the API call failed or the contact was not found

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/\#load_contacts) load\_contacts()

```php
wp_fusion()->crm->load_contacts( $tag_id );
```

Searches the CRM for any contacts with the specified tag and returns an array of contact IDs.

**Parameters:**

- `$tag` _(int or string)_ The tag to search by

**Return values:**

- `$contact_ids` _(array)_ Array of contact IDs returned by the search. Will be an empty array if no results were found
- `$error` _(WP\_Error object)_ If the API call failed

See the next section for more information on how to utilize WP Fusion’s core helper functions while interfacing with your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#overview)
- [How we solved that problem](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#how-we-solved-that-problem)
- [connect()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#connect)
- [sync\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#sync_tags)
- [sync\_crm\_fields()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#sync_crm_fields)
- [get\_contact\_id()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#get_contact_id)
- [get\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#get_tags)
- [apply\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#apply_tags)
- [remove\_tags()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#remove_tags)
- [add\_contact()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#add_contact)
- [update\_contact()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#update_contact)
- [load\_contact()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#load_contact)
- [load\_contacts()](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/#load_contacts)

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