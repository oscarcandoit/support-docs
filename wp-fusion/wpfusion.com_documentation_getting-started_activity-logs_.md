---
url: "https://wpfusion.com/documentation/getting-started/activity-logs/"
title: "Activity Logs"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/activity-logs/#content)

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

# Activity Logs

- Published onJune 5, 2018
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Activity Logs

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#overview) Overview

WP Fusion includes a logging tool, which you can enable from the Advanced tab of the options page.

[![](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-1-1-1024x404.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-1-1.jpg)

There are three options:

- **Enable Logging:** This is the default level of logging for WP Fusion. It’s on by default but can be turned off.
- **Only Errors:** With this checked, only error level messages (like API errors or timeouts) will be recorded to the logs.
- **HTTP API Logging:** With most CRMs, WP Fusion utilizes the [WordPress HTTP API](https://developer.wordpress.org/plugins/http-api/) for API calls. If this setting is available you can turn it on and log the raw API requests and responses from your CRM. Note that this will add a lot of extra data to your logs so it’s recommended to only turn this on temporarily for debugging purposes.

When the logs are enabled, you’ll see a new tab appear at the top of the WP Fusion settings page with a link to the activity logs.

The logs can also be accessed in the main WordPress admin menu under Tools » WP Fusion Logs.

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#the-logs) The logs

The activity log will record any API calls sent by WP Fusion, as well as any webhooks received and auto-enrollments that are triggered.

**You can filter the log entries** by severity level, source (plugin integration), and related user by using the dropdowns at the top.

[![](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-2-1024x554.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-2.jpg)

**You can adjust the number of entries displayed per page** by opening the Screen Options panel at the top of the table.

[![](https://wpfusion.com/wp-content/uploads/2018/06/logs-link-to-entry-1024x338.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logs-link-to-entry.jpg)

**You can link to individual log entries** by hovering over the entry row and clicking the blue link icon. Linking to log entries is helpful when [submitting a support ticket](https://wpfusion.com/contact/).

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#field-formatting) Field formatting

When setting up the field sync between WordPress and your CRM in the [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), WP Fusion gives you the option to select a field type for each field.

If a special field type is selected, then the data for that field will pass through a filter before being sent to your connected CRM.

For example many CRMs have require special treatment for date fields, they require the fields to be in a timestamp, and so when a field type is set to “date”, WP Fusion converts the value automatically for you.

[![](https://wpfusion.com/wp-content/uploads/2018/06/logs-field-formats-1024x360.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logs-field-formats.jpg)

In cases where a field value has been modified, the logs will show both the input data and the data that was sent to your CRM.

This can be useful in troubleshooting issues with specific fields not syncing correctly.

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#errors) Errors

The logs will also record any API errors encountered. These will vary depending on your connected CRM, but can be caused by several things— like trying to apply a tag that’s been deleted, API quotas exceeded, or malformed data.

[![Screenshot of the wp fusion activity log interface highlighting activity logs of api requests and responses. the log details an error with no results for a specific model and includes options for filtering logs and viewing screen options.](https://wpfusion.com/wp-content/uploads/2018/06/logs-error-with-debug-info-1024x863.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logs-error-with-debug-info-scaled.jpg)

If you encounter an error in the logs that you don’t understand, please [contact our support team](https://wpfusion.com/support/contact/) so we can resolve the issue for you.

With most CRMs, error messages will be accompanied with debugging information we can use to aid you in troubleshooting the issue.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#retrying-api-calls) Retrying API calls

If an API call fails due to a timeout or error in the API server, you can click the blue _Retry API call_ button to send the same API call again.

[![screenshot of an error log with three entries. the first highlights an error with a retry api call option due to a user profile issue. the second entry shows a completed batch operation, while the third reports no contact found for a specific person in the activity logs.](https://wpfusion.com/wp-content/uploads/2018/06/logs-retry-api-call-1024x196.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logs-retry-api-call.jpg)

Note that this will just re-send the original API call, so if there is an issue with your data like an invalid field ID or tag ID, you may see the same error repeated. In that case see [the section below](https://wpfusion.com/documentation/getting-started/activity-logs/#common-errors) for additional troubleshooting steps, or [contact our support for assistance](https://wpfusion.com/contact/).

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#error-notifications) Error notifications

You may want to receive notifications when WP Fusion has an API error. If so, check out our other plugin, [Fatal Error Notify](https://fatalerrornotify.com/?utm_campaign=wpfusion&utm_source=wpfusion).

It can automatically send you an email or ping you on Slack when WP Fusion has an API error.

[![](https://wpfusion.com/wp-content/uploads/2018/06/wpf-fen-notification-1024x718.png)](https://wpfusion.com/wp-content/uploads/2018/06/wpf-fen-notification.png) The Fatal Error Notify plugin can ping you on Slack when WP Fusion encounters an API error

The notification will include the error message, the affected user, and the page the user was on.

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#http-api-logging) HTTP API logging

With **HTTP API Logging** enabled, WP Fusion will log the raw requests and responses to your CRM over the WordPress HTTP API. This can be used to troubleshoot more complex issues that aren’t captured at the normal level of logging.

[![](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-http-1024x683.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-http-scaled.jpg) HTTP API logging records the raw HTTP requests and responses from your CRM.

Every API call sent to your CRM will be recorded, and each entry will contain the request URL, the time it took to perform the API call, the request parameters, and the raw response.

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#common-errors) Common Errors

These are some common errors, with steps to resolve them:

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#notice-webhook-received-but-no-matching-user-found) Notice: Webhook received but no matching user found

When you’re [using a webhook](https://wpfusion.com/documentation/webhooks/) with the method `?wpf_action=update` or `?wpf_action=update_tags`, WP Fusion will only load data from your CRM if there is already a user on your site with a matching contact ID. If there is no user with a matching contact ID, the webhook will be ignored.

This is intended for cases where you have contacts in your CRM that don’t need to have an account in WordPress, and is generally safe to ignore.

However if you need every contact in your CRM to have a user account, you can change your webhook to `?wpf_action=add`, which will both update existing users and create new users if they don’t already exist.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#notice-no-contact-id-for-user-failed-to-apply-tags) Notice: No contact ID for user, failed to apply tags

This message is triggered when a plugin integration attempts to apply a tag (for example due to a checkout, page view, or membership level change), but WP Fusion was unable to find a contact ID in your CRM for the user.

This could happen because you’ve deleted or merged contacts in your CRM, and so the contact ID that was previously associated with the user has changed. If that’s the case, run a [Resync Contact IDs and Tags operation](https://wpfusion.com/documentation/tutorials/exporting-data/#resync-contact-ids-and-tags) from the Advanced tab in the WP Fusion settings to refresh the cache of contact IDs.

It could also happen if a user wasn’t synced properly to your CRM at registration— either due to an API error, or that user’s role being excluded from sync. In that case you can run an [Export Users batch operation](https://wpfusion.com/documentation/tutorials/exporting-data/#export-users).

It’s also perfectly fine to ignore this notice if the user in question doesn’t need to be tagged in your CRM.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#notice-unable-to-determine-tag-id-from-tag-name) Notice: Unable to determine tag ID from tag name

This notice can be logged when you’re applying a tag via AJAX, either via [link click tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/), or the [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/).

In order to send the API call to apply a tag in your CRM, WP Fusion needs to know the ID of the tag to be applied.

WP Fusion will attempt to take the tag name you’ve entered and convert it to a tag ID, but if it can’t find a matching tag ID then this message will be logged and the tag won’t be applied.

If you’re sure the tag name you’ve entered matches exactly the tag name in your CRM, try clicking **Resynchronize Available Tags & Fields** from the Setup tab in the WP Fusion settings to refresh the cache of available tags.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#error-resource-not-found-contact-not-found-404) Error: Resource not found / contact not found / 404

For performance reasons WP Fusion keeps a cache of the CRM contact ID for every user on your site.

When WP Fusion goes to update a contact record or apply tags over the API, it uses this cached contact ID rather than having to look up the contact record again by email address.

However, if you have deleted, merged, or de-duplicated contact records in your CRM, the cached contact ID may no longer be valid, and API calls to update contacts or apply tags might return a **Resource not found** error.

The best way to fix this is to run a [Resync Contact IDs operation](https://wpfusion.com/documentation/tutorials/exporting-data/#resync-contact-ids) from the Advanced tab in the WP Fusion settings. This will re-lookup every WordPress user on your site by email address in your CRM and refresh the local cache of contact IDs.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#error-curl-error-28-operation-timed-out) Error: cURL error 28 — Operation timed out

Most API calls WP Fusion sends to your CRM should complete within 0.5 to 2 seconds.

However there are situations where your CRM’s API may be offline, in which case WP Fusion includes a built in timeout to avoid breaking the visitor experience on your site. This timeout is set to between 10 and 30 seconds depending on your connected CRM.

If this timeout is reached WP Fusion will give up on waiting for a response from your CRM, a **cURL error 28** error will be logged, and the page will continue to load normally.

When your CRMs API comes back online you may want to run one or more [batch operations](https://wpfusion.com/documentation/tutorials/exporting-data/) to correct for any data that wasn’t synced or tags that weren’t applied during the outage.

If the problem is happening consistently, you could consider using a code snippet to extend the HTTP API timeout for your site. [We have an example here](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/#extends-the-http-timeout-to-60-seconds).

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#system-errors) System Errors

To aid in troubleshooting, the activity logs will also record two types of system errors. While these don’t necessarily come from WP Fusion, they can affect the stability of your website as whole.

[![](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-max-execution-1024x529.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/activity-logs-max-execution.jpg)

Those error types are:

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#out-of-memory-errors) Out of memory errors

An “Allowed memory size exceeded” error occurs when your site runs out of available memory and stops processing a page load. This can be caused by underpowered hosting, or having too many plugins active.

If an out of memory error happens before WP Fusion has sent data to your CRM, this would prevent any data from being synced. Read some info on fixing this error [at WPBeginner](https://www.wpbeginner.com/wp-tutorials/fix-wordpress-memory-exhausted-error-increase-php-memory/).

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#maximum-execution-time-exceeded-errors) Maximum execution time exceeded errors

Most websites will process a single page load for 30 seconds before timing out, and triggering a “Maximum execution time exceeded” error.

As an example, let’s say you have several WooCommerce extensions active, and a single checkout does the following:

- Creates a new WordPress user
- Sends the order invoice data to Xero
- Sends the order shipping information to ShipStation
- Generates a PDF invoice
- Syncs the customer data to ActiveCampaign (via WP Fusion)

Each of these steps takes a few seconds to process. If your site reaches the 30 second timeout limit while it’s still generating the PDF invoice, then this would prevent WP Fusion from sending any data to your CRM.

Preventing these errors involves either increasing your server resources (so each step processes faster), deactivating some plugins (so there are fewer steps to process), or increasing your server’s `max_execution_time` variable.

For more info on this error see [this guide from WPBeginner](https://www.wpbeginner.com/wp-tutorials/how-to-fix-fatal-error-maximum-execution-time-exceeded-in-wordpress/).

### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#logs-performance-and-misc) Logs performance and misc.

The activity logs are stored in their own database table, `{$wpdb->prefix}wpf_logging`, so they generally shouldn’t have any performance affect on the rest of your site. In addition the table is limited to 10,000 entries, after which the oldest entries will be automatically begin to be dropped.

You can flush the logs database at any time by clicking the **Flush Logs** button at the bottom of the logs screen.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#errors-displaying-the-logs) Errors displaying the logs

There are some cases where your site doesn’t have enough resources to actually display the logs table, if there are a lot of entries. You might see an error like this:

[![](https://wpfusion.com/wp-content/uploads/2018/06/logs-error.png)](https://wpfusion.com/wp-content/uploads/2018/06/logs-error.png)

Increasing your available memory will generally fix it, but you can also force clear the logs by appending `&flush-logs=true` to the URL in your browser, and hitting enter.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#logs-max-entries) Logs max entries

If the number of log entries is a recurring problem, you can also limit the total number of log entries using the `wpf_log_max_entries` filter. For example:

```php
add_filter( 'wpf_log_max_entries', function( $max ) {
     return 5000;
} );
```

That code would limit the maximum number of entries to 5,000 instead of the default 10,000.

#### [\#](https://wpfusion.com/documentation/getting-started/activity-logs/\#misc-logs-issues) Misc. logs issues

There are some cases where the logs database table can become corrupted. In this case new log entries might not be saved, or it might not be possible to clear the logs.

To fully reset the logs, go to Settings » WP Fusion » Advanced and un-check **Enable Logging**. Save the settings, then re-enable the option, and save again.

This will delete the logs database table and rebuild, and should fix any issues.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/getting-started/activity-logs/#overview)
- [The logs](https://wpfusion.com/documentation/getting-started/activity-logs/#the-logs)
- [Field formatting](https://wpfusion.com/documentation/getting-started/activity-logs/#field-formatting)
- [Errors](https://wpfusion.com/documentation/getting-started/activity-logs/#errors)
- [Retrying API calls](https://wpfusion.com/documentation/getting-started/activity-logs/#retrying-api-calls)
- [Error notifications](https://wpfusion.com/documentation/getting-started/activity-logs/#error-notifications)
- [HTTP API logging](https://wpfusion.com/documentation/getting-started/activity-logs/#http-api-logging)
- [Common Errors](https://wpfusion.com/documentation/getting-started/activity-logs/#common-errors)
- [Notice: Webhook received but no matching user found](https://wpfusion.com/documentation/getting-started/activity-logs/#notice-webhook-received-but-no-matching-user-found)
- [Notice: No contact ID for user, failed to apply tags](https://wpfusion.com/documentation/getting-started/activity-logs/#notice-no-contact-id-for-user-failed-to-apply-tags)
- [Notice: Unable to determine tag ID from tag name](https://wpfusion.com/documentation/getting-started/activity-logs/#notice-unable-to-determine-tag-id-from-tag-name)
- [Error: Resource not found / contact not found / 404](https://wpfusion.com/documentation/getting-started/activity-logs/#error-resource-not-found-contact-not-found-404)
- [Error: cURL error 28 — Operation timed out](https://wpfusion.com/documentation/getting-started/activity-logs/#error-curl-error-28-operation-timed-out)
- [System Errors](https://wpfusion.com/documentation/getting-started/activity-logs/#system-errors)
- [Out of memory errors](https://wpfusion.com/documentation/getting-started/activity-logs/#out-of-memory-errors)
- [Maximum execution time exceeded errors](https://wpfusion.com/documentation/getting-started/activity-logs/#maximum-execution-time-exceeded-errors)
- [Logs performance and misc.](https://wpfusion.com/documentation/getting-started/activity-logs/#logs-performance-and-misc)
- [Errors displaying the logs](https://wpfusion.com/documentation/getting-started/activity-logs/#errors-displaying-the-logs)
- [Logs max entries](https://wpfusion.com/documentation/getting-started/activity-logs/#logs-max-entries)
- [Misc. logs issues](https://wpfusion.com/documentation/getting-started/activity-logs/#misc-logs-issues)

### You may also like

[![a person in a red wpfusion shirt points excitedly to text reading fixed!! critical error wordpress on a vibrant red background with flame graphics, celebrating the triumph over wordpress errors.](https://wpfusion.com/wp-content/uploads/2025/02/maxresdefault-4-1-300x169.webp)](https://wpfusion.com/videos/tutorials/how-fatal-error-notify-alerts-you-to-major-wordpress-errors/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [How Fatal Error Notify Alerts You to Major WordPress Errors!](https://wpfusion.com/videos/tutorials/how-fatal-error-notify-alerts-you-to-major-wordpress-errors/)

The best way to be prepared when something goes wrong on your WordPress website! Emily shows us how to use Fatal Error Notify to ensure you stay updated with all your website changes! Check it out today here: https://fatalerrornotify.com/

### In this chapter

- [Activity Logs](https://wpfusion.com/documentation/getting-started/activity-logs/ "Activity Logs")
- [Displaying CRM Data in WordPress](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/ "Displaying CRM Data in WordPress")
- [General Settings and Basic Setup](https://wpfusion.com/documentation/getting-started/general-settings/ "General Settings and Basic Setup")
- [Installation Guide](https://wpfusion.com/documentation/getting-started/installation-guide/ "Installation Guide")
- [Restricting Access to Content](https://wpfusion.com/documentation/getting-started/access-control/ "Restricting Access to Content")
- [Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/ "Shortcodes")
- [Showing and Hiding Widgets](https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/ "Showing and Hiding Widgets")
- [Syncing Contact Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/ "Syncing Contact Fields")
- [Tracking User Activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/ "Tracking User Activity")
- [Working with Tags](https://wpfusion.com/documentation/getting-started/working-with-tags/ "Working with Tags")

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