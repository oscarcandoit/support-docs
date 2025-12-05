---
url: "https://wpfusion.com/documentation/faq/changelog/"
title: "Changelog | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/faq/changelog/#content)

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

# Changelog

- Published onJanuary 3, 2016
- Last updated on February 13, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Changelog

**What do the version numbers mean?** We use our own version of [semantic versioning](https://www.baeldung.com/cs/semantic-versioning), where the version numbers indicate how much has changed for each update.

The version numbers are broken into three, and sometimes four parts. For example `3.42.8.1`. The parts are:

1. A major release. Not backwards compatible, and will not be released via automatic update (will require a manual upgrade).
2. A major release. Significant new functionality with potentially breaking changes, but intended to be backwards compatible.
3. A minor release. New functionality and/or fixes, with minimal chance of breaking changes.
4. Patch. A fix for a bug in a previous release. No new functionality.

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-47-3) 3.47.3 - 11/27/2025

- ✨ New Added a [SureForms integration](https://wpfusion.com/documentation/forms/sureforms/)
- ✨ New Added support for bulk editing access rules on Presto Player Media Hub videos
- ⚡️ Improved Transient network errors (cURL timeouts, SSL errors, etc.) are now automatically retried
- ⚡️ Improved Updated Pipedrive integration to use the new public app keys
- 🔧 Fixed Fixed data loaded from the CRM not respecting the visibility setting of BuddyPress XProfile fields
- 🔧 Fixed Fixed dynamic tagging (Create tag(s) from value) not working with Gravity Forms
- 🔧 Fixed Fixed GetResponse integration returning false when no tags are found for a contact, instead of an empty array, causing errors with some integrations
- 🔧 Fixed Fixed notifications getting sent to WPForo forum subscribers when they did not have access to the forum

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-47-2) 3.47.2 - 11/5/2025

- ✨ New Added support for segmenting using [Labels with Pipedrive](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/)
- ✨ New Added support for syncing Omnisend email subscription status (subscribed/unsubscribed/nonSubscribed) in both directions
- ✨ New Added beta support for the new Kit v4 API (faster, requires manual upgrade)
- 🔧 Fixed Fixed "Email Optin Default" (checked vs unchecked) not being respected on the new GiveWP visual donation form builder
- ⚡️ Improved Omnisend webhooks now support URLs without contact\_id parameter (extracts email from request body and looks up contact automatically)
- 🔧 Fixed Fixed WS Forms `datetime` and `datetime-local` fields not syncing to CRMs as Unix timestamps
- 🔧 Fixed Fixed "Unknown" gateway MemberPress transactions created by Uncanny Automator not being processed by WP Fusion
- 🔧 Fixed Fixed fatal error showing post protection status badge in the admin if the post was protected by "Not" tags but not "Required Tags"
- 🔧 Fixed Fixed Pipedrive webhooks not working
- 🔧 Fixed Fixed fatal error if MailPoet integration was called before MailPoet plugin was initialized

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-47-1) 3.47.1 - 10/20/2025

- 🔧 Fixed Fixed MemberPress integration not syncing the membership level name when a user is downgraded to a free tier
- 🔧 Fixed Fixed "Function \_load\_textdomain\_just\_in\_time was called incorrectly" notice with Fluent Forms with WordPress 6.7+
- 🔧 Fixed Fixed Pipedrive webhook registration failing with "Scope and URL mismatch" error by enforcing HTTPS in webhook URLs
- 🔧 Fixed Fixed GS Product Configurator feeds not applying tags for guest users due to missing email field mapping in the new field mapping format

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-47-0) 3.47.0 - 10/14/2025

- ✨ New Added beta support for [FluentCart](https://wpfusion.com/documentation/ecommerce/fluentcart/)
- ⚡️ Improved Skipping non-scalar values when syncing to Klaviyo
- ⚡️ Improved Brevo phone number formatting now uses wpf\_phone\_number\_to\_e164() and respects country field for proper international phone number formatting
- ⚡️ Improved Improved Brevo error handling when the API key does not have sufficient permissions for the request
- ⚡️ Improved WP Remote Users Sync now pushes user meta (including user ID) to CRM when users were created or updated remotely
- ⚡️ Improved Added 18 additional European and international country codes to wpf\_phone\_number\_to\_e164() including Spain (ES)
- 🔧 Fixed Fixed - Brevo incorrectly adding "1" prefix to international phone numbers that didn't start with "1" or "+"
- 🔧 Fixed Fixed EDD Recurring Payments tags being removed immediately when a subscription was cancelled, instead of when the billing period expired
- 🔧 Fixed Fixed - WS Form date fields not converting to Unix timestamps before syncing to CRMs like HubSpot, causing "was not a valid long" errors
- 🔧 Fixed Fixed - BuddyBoss datebox fields only syncing Month and Year values (missing Day) to CRMs due to improper handling of date value format
- 🔧 Fixed Fixed - WPForms date/time fields not properly converting to unix timestamps before syncing to CRMs, resulting in missing or incorrectly formatted date values
- 🔧 Fixed Fixed - Groundhogg (REST API) date fields only syncing Month and Year values (missing Day)
- 🔧 Fixed Fixed - Return After Login not working when post type or taxonomy restrictions were enabled, due to access check running during wp\_login action before user authentication was fully complete

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-15) 3.46.15 - 10/7/2025

- ✨ New Added support for syncing additional fields from the [Event Tickets Additional Fields extension](https://theeventscalendar.com/extensions/additional-fields-for-tickets/)
- ⚡️ Improved Optimized WooCommerce Subscriptions batch operations for better performance with large numbers of subscriptions
- 🔧 Fixed Fixed ticket number only syncing with FooEvents when it was updated, not when it was first created
- 🔧 Fixed Fixed FooEvents attendees created via guest checkout not syncing
- 🔧 Fixed Fixed MemberPress integration creating duplicate contacts if a transaction was processed before a user registration had fully completed processing
- 🔧 Fixed Fixed the Retry API Call button in the activity logs not using the correct content type headers when refreshing an access token
- 🔧 Fixed Fixed check to `$subscription->is_active()` in EDD Recurring Payments setting subscriptions to expired if called during a renewal payment
- 🔧 Fixed Fixed error `Too few arguments to function WPF_API::delete_transient()` when processing HubSpot webhooks with multiple contact IDs
- 🔧 Fixed Fixed FooEvents attendees not syncing when attendee email matches billing email but differs from logged-in user's email

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-14) 3.46.14 - 10/1/2025

- ✨ New Added option to remove tags when MemberPress sub-account is removed from a corporate account
- ✨ New Added support for syncing FooEvents ticket number and QR code details after generation
- ✨ New Added FooEvents Ticket ID fields to available CRM fields
- ⚡️ Improved Standardized checkbox value handling across CRMs to ensure consistent behavior
- 🔧 Fixed Fixed ACF checkbox fields with value 0 incorrectly being cast to false when syncing to Zoho
- 🔧 Fixed Fixed Gravity Forms Entry Date fields failing to sync to Salesforce DateTime fields (deserialize error)
- 🔧 Fixed Fixed - If-So Gutenberg fields now use associative array instead of object to prevent fields showing for all conditions
- 🔧 Fixed Fixed MemberPress creating duplicate contacts in HighLevel when "Allow Duplicate Contacts" is enabled
- 🔧 Fixed Fixed Event Tickets attendees sync status icon showing greyed out even when attendees were synced successfully to the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-13) 3.46.13 - 9/22/2025

- 🔧 Fixed Fixed "Test Connection" button failing with Drip since 3.46.12
- 🔧 Fixed Fixed Drip integration not removing tags with periods in the tag name
- 🔧 Fixed Fixed restricted content message not showing on LearnDash lessons and topics since 3.46.12 (users without access were redirected to the course instead)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-12) 3.46.12 - 9/16/2025

- ✨ New Added support for the Booking Rescheduled trigger with Fluent Booking
- ⚡️ Improved BuddyBoss App LearnDash access controls now properly handle locked lessons and topics
- 🔧 Fixed Fixed custom `last_name` fields not syncing with Fluent Booking
- 🔧 Fixed Fixed EDD Recurring Payments subscription status sync timing issue that could cause subscriptions to appear expired after a renewal payment was processed
- 🔧 Fixed Fixed GetResponse integration not loading more than 100 available tags
- 🔧 Fixed Fixed fatal error marking MemberPress quizzes complete
- 🔧 Fixed Fixed fatal error "call to undefined function affwp\_icon\_tooltip()" with AffiliateWP version 2.29.0
- 🛠️ Dev Refactored BuddyBoss App integration into smaller classes in the /integrations/buddyboss-app/ directory

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-11) 3.46.11 - 9/9/2025

- ✨ New Added - New ["LearnDash Quiz Results" batch operation](https://wpfusion.com/documentation/learning-management/learndash/#quiz-results) to sync quiz scores, points, and category scores to the CRM
- ✨ New Added support for syncing ACF gallery field attachment IDs when updated on the frontend
- ⚡️ Improved Improved error handling for Dynamics 365 API errors
- ⚡️ Improved When updating an Ontraport contact with referrer data (affiliate ID in the `aff_` cookie), sync will bypass the API queue so the referrer is updated before any ecommerce data is synced
- ⚡️ Improved Improved performance for LearnDash batch / export operations, will now only query active LearnDash users instead of all users
- ⚡️ Improved Automatic cleanup of orphaned background batch operations to prevent database bloat
- ⚡️ Improved Added `started` and `updated` timestamps to batch operations for better tracking and cleanup
- 🔧 Fixed Fixed - Activity log timestamps now display in the site's local timezone instead of UTC
- 🔧 Fixed Fixed Groundhogg - User metadata now syncs correctly back to Groundhogg when creating a WordPress user from an existing Groundhogg contact via the Groundhogg funnel action
- 🔧 Fixed Fixed "LearnDash course enrollment statuses" and "LearnDash group enrollment statuses" batch operations not working since v3.46.0
- 🔧 Fixed Fixed - EDD Recurring subscription status sync timing issue that could cause subscriptions to appear expired when they were still active
- 🔧 Fixed Fixed - Paid Memberships Pro discount code tags not being saved due to incorrect nonce verification
- 🔧 Fixed Fixed PHP warning `Undefined array key "apply_tags"` when a user was added to a SureMembers access group and there were no Apply Tags configured on that access group
- 🔧 Fixed Fixed PHP error `Class "EDDRecurringSubscriptionsSubscription" not found` when using EDD Recurring Payments versions below 2.13.0, since 3.46.4
- 🔧 Fixed Fixed fatal error when loading custom fields from Dynamics 365 if the user did not have the `prvReadEntity`, `prvReadAttribute`, or `prvReadEntityDefinition` permissions
- 🔧 Fixed Fixed inconsistent sync of WooCommerce Memberships "Plan Name" field
- 🔧 Fixed Fixed - Reverted to private Pipedrive credentials since the public app is still in review
- 🔧 Fixed Fixed conflict with User Menus plugin: user role checkboxes were not clickable when WP Fusion was active
- 🔧 Fixed Fixed missing headers in license activation and deactivation requests causing 415 status errors
- 🔧 Fixed Fixed PHP warning in GiveWP integration when managing donation forms in the block editor
- 🔧 Fixed Fixed GiveWP integration settings not persisting when using the block editor donation form builder

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-10) 3.46.10 - 8/25/2025

- ✨ New Added support for the email optin checkbox on the Give Visual Donation Form builder
- 🔧 Fixed Fixed filters not working in the Activity Logs page
- 🔧 Fixed Fixed date fields not syncing correctly with FooEvents when the Date Format in WordPress was set to d/m/Y
- 🔧 Fixed Fixed error "Call to undefined function et\_builder\_dynamic\_module\_framework()" in the Divi editor with older versions of Divi

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-9) 3.46.9 - 8/18/2025

- ✨ New Added a setting to apply tags based on [LifterLMS order statuses](https://wpfusion.com/documentation/learning-management/lifterlms/#order-statuses)
- ✨ New Added search box to the tags dropdown in the Bricks Builder integration
- 🔧 Fixed Fixed `phone` field not syncing to Maropost
- 🔧 Fixed Fixed conflict with User Menus plugin: user role checkboxes were not clickable when WP Fusion was active
- 🔧 Fixed Fixed - Constant Contact contact updates now preserve existing field values by loading the complete contact record before updating

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-8) 3.46.8 - 8/11/2025

- ✨ New Added support for the GiveWP Form Field Manager addon with the new visual donation form builder
- ✨ New Added support for the Subscribe to List field in the Maropost integration
- ⚡️ Improved Improved UI on the setup tab for OAuth connections (hidden API tokens, made action buttons more prominent)
- ⚡️ Improved Added a "Disconnect" button to the OAuth connection status section
- ⚡️ Improved When installing WP Fusion from the Klaviyo Marketplace, if WP Fusion is already active, the OAuth flow will start automatically
- ⚡️ Improved When installing WP Fusion from the Klaviyo, if WP Fusion is already active, the OAuth flow will start automatically
- 🔧 Fixed Fixed `0` getting synced for the LearnDash Course Enrollment Expiration Date field if a user enrolled in a course with no expiration date
- 🔧 Fixed Fixed broken pagination in the AccessAlly integration
- 🔧 Fixed Fixed tags configured for WooCommerce order statuses getting applied in real time during bulk status changes instead of via a background process
- 🔧 Fixed Fixed WooCommerce orders not being processed if their status was bulk-edited from a non-paid to a paid order status
- 🛠️ Dev Improved support for disabling / enabling settings in the WP Fusion options page based on the value of other settings
- 🛠️ Dev Added `$update_data` parameter to the `wpf_format_field_value` filter to allow modifying the value of a field before it is synced to the CRM
- 🔧 Fixed Fixed fatal error `Class "EDD\Admin\Downloads\Editor\Section" not found` since 3.46.7 when using Easy Digital Downloads versions below 3.3.6

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-7) 3.46.7 - 8/4/2025

- ✨ New Added individual and bulk log entry deletion functionality in the Activity Logs page
- ✨ New Added time the batch operation was last run to the batch operations list
- ✨ New Added translations for Russian, Japanese, Chinese, and Korean
- Updated Pipedrive integration to use new public app keys
- ⚡️ Improved Moved WP Fusion's Easy Digital Downloads meta box to the new tabbed interface
- ⚡️ Improved Updated Klaviyo integration to the 2025-07-15 API
- ⚡️ Improved Improved Klaviyo error handling
- ⚡️ Improved Added plugin conflict detection for HighLevel OAuth authorization to warn users about interfering plugins
- 🔧 Fixed Fixed nonce validation failing on WSForm submissions when using Form Auto Login
- 🔧 Fixed Fixed fatal error auto-enrolling users into FluentCommunity courses via linked tags when the linked tags had been migrated from the previous settings storage in v3.46.7
- 🔧 Fixed Fixed error "Uncaught TypeError: count(): Argument #1 ($value) must be of type Countable\|array, string given" when tracking events with FluentCRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-6-1) 3.46.6.1 - 7/30/2025

- 🔧 Fixed Fixed incorrect version number in plugin updater (always showed as an update was available)
- 🔧 Fixed Fixed missing "Apply Tags - Complete" setting on FluentCommunity courses since the new v3.46.6 UI
- 🔧 Fixed Fixed Link With Tag setting not automatically migrating to the new FluentCommunity courses / spaces UI

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-6) 3.46.6 - 7/28/2025

- ✨ New Added translations for Spanish, French, German, Italian and Portuguese
- Updated [Fluent Community](https://wpfusion.com/documentation/membership/fluentcommunity/) integration to move settings to individual Spaces and Courses
- ⚡️ Improved Stopped syncing the Billing First Name and Billing Last Name fields to the First Name and Last Name fields in the CRM when processing a WooCommerce order in the admin
- ⚡️ Improved Added caching for the list of WPBakery shortcodes
- 🔧 Fixed Fixed tooltip on WooCommerce orders in the orders list showing the synced time as the current time for pending renewal orders

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-5) 3.46.5 - 7/21/2025

- ⚡️ Improved The WP Download Manager integration now respects the "Hide Archives" setting when using the `wpdm_package` shortcode
- Updated Klaviyo scopes to use `subscriptions:write`
- 🔧 Fixed Fixed auto-login links with Set Current User enabled not working with recent versions of MemberPress Courses
- 🔧 Fixed Fixed level-specific field mapping in Paid Memberships Pro not saving when editing a membership level
- 🔧 Fixed Fixed HubSpot lists showing with "(list)" suffix in the tags select dropdown since 3.46.4
- 🔧 Fixed Fixed error `Cannot use object of type WP_Error as array` when removing an affiliate from a deleted AffiliateWP group since 3.46.3
- 🛠️ Dev Added `$entry_id` parameter to the `wpf_forms_pre_submission` and `wpf_forms_pre_submission_contact_id` filters

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-4) 3.46.4 - 7/14/2025

- ✨ New Added WooCommerce Subscriptions [global tag settings](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#global-tag-settings) to apply tags when a user has any active subscription
- ✨ New Added support for MailPoet Tags in addition to Lists
- ⚡️ Improved Disabled the API queue and user tag cache when connected to MailPoet on the same site
- ✨ New Added Klaviyo segments support for content restriction (read-only access control)
- 🔧 Fixed Fixed error creating new leads in Zoho when a custom layout was configured for contacts
- 🔧 Fixed Fixed PHP warning `Undefined array key "connection_configured"` when loading the WP Fusion settings page during initial setup
- 🔧 Fixed Fixed error testing the initial connection with HighLevel

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-3) 3.46.3 - 7/8/2025

- ✨ New Added dynamic tagging support to Zoho (type new tags into WP Fusion, generate tags based on product names and order statuses)
- 🔧 Fixed Fixed Gravity Forms integration not syncing unchecked checkboxes as null (so they were not un-checking previously checked checkboxes in the CRM)
- 🔧 Fixed Fixed date and datetime fields loaded into Advanced Custom Fields User Fields not being formatted correctly
- 🔧 Fixed Fixed applying and removing tags with Zoho failing with error "Invalid Data error: body" since 3.46.1
- 🔧 Fixed Fixed PHP warning `Undefined $status` when syncing EDD subscription statuses
- 🔧 Fixed Fixed AffiliateWP linked tag functionality not able to create a new affiliate and enroll them in an affiliate group at the same time
- 🔧 Fixed Fixed AffiliateWP integration not auto-enrolling users into affiliate groups via linked tags if they were already enrolled in a different group
- 🔧 Fixed Fixed AffiliateWP integration trying to reapply the same linked tag after a user was just enrolled in an affiliate group by that linked tag
- ⚡️ Improved Improved compatibility with EDD Recurring Payments v2.13.0+

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-2) 3.46.2 - 7/1/2025

- ✨ New Added support for the Consent field type in Gravity Forms
- ✨ New Added support for importing all contacts from Zoho using the import tool (not just by tag)
- ✨ New Added support for validating the site for initiating the API connection directly from the Klaviyo and Pipedrive marketplaces
- ✨ New Added support for revoking Klaviyo OAuth tokens (requirement for the Klaviyo marketplace)
- 🔧 Fixed Fixed WooCommerce Memberships enrollments via linked tags not syncing the membership fields
- 🔧 Fixed Fixed initial connection test with Zoho failing since 3.46.1
- 🔧 Fixed Fixed Zoho access token refreshes failing since 3.46.1
- 🔧 Fixed Fixed MemberPress expiration date not syncing when a sub-account is added to a corporate account
- 🔧 Fixed Fixed duplicate tags being applied to Salesforce contacts when applying tags via a multiselect field to guests
- 🛠️ Dev the `DOING_WPF_WEBHOOK` constant was renamed to `WPF_DOING_WEBHOOK` to meet WordPress.org standards regarding plugin prefixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-1) 3.46.1 - 6/24/2025

- ⚡️ Improved MemberPress grouped memberships with linked tags now properly handle upgrade paths - only the highest tier membership will be enrolled when multiple tags are present
- ⚡️ Improved The Zoho integration has been updated to use the latest API version (v8) to support the new custom field types
- ⚡️ Improved When adding a new tag to a HubSpot multiselect field, the tag will now only be added if it doesn't already exist
- 🔧 Fixed Fixed the Return After Login feature not respecting the "Redirect to" setting if the user does not have access to the requested page after logging in
- 🔧 Fixed Fixed MemberPress expiration date not syncing when a sub-account is removed from a corporate account
- 🔧 Fixed Fixed miniOrange JWT Login integration not working with new user registrations
- 🔧 Fixed Fixed auto-enrollments into Paid Memberships Pro membership levels via linked tags not working since 3.45.0
- 🔧 Fixed Fixed missing phone number field in SureCart integration
- 🔧 Fixed Fixed fatal error when creating a new WordPress user via a Groundhogg flow (same site)
- 🔧 Fixed Fixed subscription status changes not syncing correctly with EDD Recurring Payments v2.13.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-46-0) 3.46.0 - 6/16/2025

- ✨ New Added support for Klaviyo OAuth 2.0 authorization
- ⚡️ Improved The LearnDash integration has been rewritten and modernized for better performance, and some WP Fusion settings from previous versions have been moved to the new LearnDash settings panel
- ⚡️ Improved If a WooCommerce order status is changed and a contact ID does not yet exist, the contact will be created and the status will be synced
- ⚡️ Improved SureCart custom fields are now detected directly from form blocks in the database, eliminating the need for API calls and allowing immediate field availability in WP Fusion settings
- ⚡️ Improved Improved logging for missing or invalid email addresses during user registration
- 🔧 Fixed Fixed new user registrations with the miniOrange JWT Login plugin not properly detecting email addresses
- 🔧 Fixed Fixed WP Download Manager - PDF Viewer addon PDF preview URLs not being checked for access restrictions
- 🔧 Fixed Fixed WP Download Manager not setting the "Return After Login" cookies when direct access to a file is denied
- 🔧 Fixed Fixed auto-enrollments into LearnDash courses via linked tags not working for administrators
- 🔧 Fixed Fixed automatic re-activation of Ultimate Member accounts when the deactivation tag is removed not working since Ultimate Member 2.8.7
- 🔧 Fixed Fixed EDD Recurring Payments WP Fusion settings not being displayed on variable prices with EDD 3.0+
- 🔧 Fixed Fixed course enrollment and expiration dates configured on individual LearnDash courses not being set to "date" type in the WP Fusion settings
- 🛠️ Dev Added `wpf_hubspot_add_engagement` filter to allow modifying the HubSpot engagement body before it is sent
- 🛠️ Dev Updated the HubSpot engagements API to use the new v3 API
- 🛠️ Dev`wp_fusion()->access->template_redirect()` now accepts an optional `$post_id` parameter to allow redirecting based on a specific post ID
- 🛠️ Dev Added `wpf_return_after_login_url` filter to allow modifying the URL a user is redirected to after logging in, using the Return After Login feature

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-12) 3.45.12 - 6/3/2025

- ⚡️ Improved Added support for creating new custom fields in the CRM field select dropdowns even if there's an existing field with a partially matching name
- 🔧 Fixed Fixed fatal error auto-applying WooCommerce coupons if loading the user's tags resulted in an API error
- 🔧 Fixed Fixed error in SureCart "The provider is not installed or unavailable" when adding new Apply Tags integrations, since 3.45.8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-11) 3.45.11 - 5/28/2025

- ✨ New Added an integration with [WP Travel Engine](https://wpfusion.com/documentation/events/wp-travel-engine/)
- ✨ New Added "Next Payment Value" field to the WooCommerce Subscriptions integration
- ✨ New Added logging when unknown tag names or IDs are passed to `wp_fusion()->user->apply_tags()`
- 🔧 Fixed Fixed numeric strings saved to the WP Fusion options having leading zeros removed when loaded
- 🔧 Fixed Fixed PHP warning `Attempt to read property "ID" on null` in the Tribe Tickets integration when enqueuing admin scripts
- 🔧 Fixed Fixed WP Fusion syncing empty user meta back to Groundhogg when a new user was created via a Groundhogg flow (same site)
- 🔧 Fixed Fixed PHP warning `Calling key() on an object is deprecated` when creating a new tag with Groundhogg (REST API)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-10) 3.45.10 - 5/19/2025

- 🔧 Fixed Fixed numeric strings being converted to integers when saving the WP Fusion settings, which removed leading zeros from numeric values
- 🔧 Fixed Fixed new users registered via the Gravity Forms User Registration Add-On being updated twice in the CRM
- 🔧 Fixed Fixed tags applied via a WP Fusion Gravity Forms feed being removed by Gravity Forms User Registration
- 🔧 Fixed Fixed Salesforce integration the default Record Type ID when creating objects (like Leads) that don't have a Record Type
- 🔧 Fixed Fixed PHP warning `Undefined property: stdClass::$plugin` when checking for updates
- 🛠️ Dev switched to using `wp_remote_request()` for Salesforce API calls, rather than `wp_safe_remote_request()`, to make debugging malformed URLs easier

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-9-1) 3.45.9.1 - 5/8/2025

- ⚠️ Attention _Attention HighLevel users:_ For several hours on May 7th, a bug in the HighLevel API caused refresh tokens to be returned in an invalid format. This update allows WP Fusion to use the new Reconnect API to attempt to automatically reestablish the connection and remove any corrupted data.
- 🔧 Fixed Fixed new Gravity Forms field mapping UI not working with Keap and other CRMs that store the remote field type locally
- 🔧 Fixed Fixed "A valid URL was not provided" error with Zoho when using auto login links

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-9) 3.45.9 - 5/7/2025

- ✨ New Added a [Sender.net CRM integration](https://wpfusion.com/crm/sender/)
- ✨ New Added `$gclid` field for sync with Zoho
- ⚡️ Improved The Maropost integration can now load tags from contacts on any list in the account
- 🔧 Fixed Fixed Paid Memberships Pro integration not syncing the membership status fields if a member cancelled a membership and had no remaining memberships
- 🔧 Fixed Fixed warning about Divi Dynamic Module Framework always showing even if it was disabled
- 🔧 Fixed Fixed WP All Import integration not automatically syncing user meta after importing users
- 🔧 Fixed Fixed error "Unable to process feed, no email address found" with Gravity Forms feeds configured using the new field mapping UI

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-8-1) 3.45.8.1 - 4/29/2025

- 🔧 Fixed Fixed new Gravity Forms field mapping not syncing custom merge fields or custom text values

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-8) 3.45.8 - 4/29/2025

- ✨ New Added a [ClickWhale integration](https://wpfusion.com/documentation/affiliates/clickwhale/)
- ✨ New Added ability to export and import the WP Fusion settings as a .csv file
- ✨ New Added support for automatic formatting of non-text field values with Forminator
- ✨ New Added view in CRM links to the Maropost integration
- ⚡️ Improved Added support for field mapping using the [generic field mapping UI in Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#feed-settings)
- ⚡️ Improved The WooCommerce email optin setting will now be disabled if the checkout page does not contain the \[woocommerce\_checkout\] shortcode
- ⚡️ Improved Updated for compatibility with GiveWP 4.0
- ⚡️ Improved Added a warning to the Divi Builder settings if the Dynamic Module Framework is enabled
- 🔧 Fixed Fixed "Apply Groups" not working with SureCart and MailerLite
- 🔧 Fixed Fixed HTTP API logging not working with all Maropost API calls
- 🔧 Fixed Fixed Forminator field mapping settings not showing with CRMs that don't use custom fields vs. standard fields
- 🔧 Fixed Fixed notices "Function \_load\_textdomain\_just\_in\_time was called incorrectly" when loading the WP Fusion settings page in the admin since WordPress 6.8
- 🔧 Fixed Fixed JavaScript error "that is not defined" when adding a new tag in the WP Fusion settings page
- 🔧 Fixed Fixed users' first names being synced as 1 if no name was provided at registration and there was a boolean field in the POSTed data that contained "first"
- 🛠️ Dev Calling `wp_fusion()->crm->add_tag()` will now add the tag and update the local cache of available tags
- 🛠️ Dev Added function `wpf_update_option()` for updating options in the WP Fusion settings page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-7) 3.45.7 - 4/14/2025

- ✨ New Added Booking Rescheduled trigger to [FluentBooking integration](https://wpfusion.com/documentation/events/fluentbooking/)
- ⚡️ Improved The initial HighLevel authorization flow has been updated to use the gray-labelled LeadConnectorHQ Marketplace
- ⚡️ Improved If a contact is deleted or merged in HighLevel, WP Fusion will attempt to look up the contact by email address and retry the API call if a match is found
- ⚡️ Improved If a contact is created or updated in HighLevel, and a "Duplicate Email Address" error is encountered, the existing contact will be updated
- 🔧 Fixed Fixed `get_contact_id()` method with ActiveCampaign returning 403 / unauthorized if called before the `init` hook
- 🔧 Fixed Fixed "Invalid URL provided" error when handling webhooks with Maropost
- 🔧 Fixed Fixed fatal error logging the payment note with EDD if an API error was encountered creating a new contact at checkout
- 🛠️ Dev Added `wpf_get_user_id_by_email()` function for getting a WordPress user ID from an email address

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-6) 3.45.6 - 4/8/2025

- ✨ New Added support for typing new segment names into the "Select List(s)" dropdown when [using a multiselect field for segmentation with HubSpot](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#using-a-multiselect-for-segmentation)
- ✨ New Added `multiselect (values)` field type for syncing MemberPress multiselect data as their values, instead of their labels
- ⚡️ Improved If a user accepts a retention offer to skip a renewal payment with [Cancellation Survey and Offers for Woo Subscriptions](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/), the updated subscription fields will now be synced to the CRM
- 🔧 Fixed Fixed SliceWP registration date field not being synced
- 🔧 Fixed Fixed email address not being synced from the REST API when updating a user
- 🔧 Fixed Fixed custom fields not being synced from the REST API when updating a user
- 🔧 Fixed Fixed auto login links not pulling user meta since 3.44.27
- 🔧 Fixed Fixed PHP warning `undefined array key "status"` when inserting a referral with SliceWP, if the referral had no status

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-5-1) 3.45.5.1 - 4/3/2025

- 🔧 Fixed Fixed fatal error `undefined class "Condition_Base"` when using Elementor Pro versions below 3.19.0 (January 2024 update), since 3.45.5
- 🔧 Fixed Fixed missing tags select dropdown options when editing Elementor Popups conditions since 3.45.5
- 🔧 Fixed Fixed fatal error loading the WooCommerce WP Fusion settings panel when no settings were configured

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-5) 3.45.5 - 3/31/2025

- ✨ New Added an integration with the [Elementor Hotspots element](https://wpfusion.com/documentation/page-builders/elementor/#hotspots)
- ✨ New Added support for [Elementor display conditions](https://wpfusion.com/documentation/page-builders/elementor/#display-conditions)
- ✨ New Added "Required tags (all)" option to the [Divi visibility settings](https://wpfusion.com/documentation/page-builders/divi/)
- ✨ New Added support for importing contacts with GetResponse
- ✨ New Added support for syncing multiselect fields to GetResponse
- ✨ New Added Joined Date field to the Paid Memberships Pro integration
- ⚡️ Improved If a user is synced from a remote site via WP Remote Users Sync, the normal user register / profile update actions will no longer run (i.e. updating the contact in the CRM and applying registration tags)
- ⚡️ Improved If the "Membership Start Date" field is enabled for sync on an individual Paid Memberships Pro membership level, it will now sync the member's start date for that level, instead of the user's general start date
- 🔧 Fixed Fixed missing "Next Payment Date" field in Paid Memberships Pro since 3.45.3
- 🔧 Fixed Fixed membership expiration date not syncing at checkout or after changing a membership level with Paid Memberships Pro
- 🔧 Fixed Fixed custom Paid Memberships Pro checkout fields missing from the Contact Fields list
- 🔧 Fixed Fixed tags select dropdowns not being automatically initialized when adding a new Easy Digital Downloads price variation with EDD 3.3.7
- 🔧 Fixed Fixed MemberPress Transactions Meta batch operation not working since 3.45.0
- 🔧 Fixed Fixed `wordpress_logged_in_wpfusioncachebuster` cookie not being cleared on auto-login logout
- 🔧 Fixed Fixed disabled Paid Memberships Pro - Approvals Addon integration since 3.45.3
- 🔧 Fixed Fixed GetResponse integration not validating the API key during setup
- 🔧 Fixed Fixed loading contacts and pull user meta operations not working with GetResponse
- 🔧 Fixed Fixed API errors with WS Form showing on the frontend and preventing the form submission
- 🔧 Fixed Fixed multi-checkbox fields not syncing with WS Form
- 🔧 Fixed Fixed upsell and downsell tags not being applied with CartFlows for guest checkouts when using the "Add to main order" option

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-4) 3.45.4 - 3/24/2025

- ✨ New Added a [BookingPress integration](https://wpfusion.com/documentation/events/bookingpress/)
- 🔧 Fixed Fixed Maropost integration not loading more than 200 available tags or custom fields
- 🔧 Fixed Fixed error querying contact IDs or tags with Ortto, "incorrect size 0 of fields, minimum 1 and maximum 100 is required"
- 🔧 Fixed Fixed tags not syncing between sites with WP Remote Users Sync when the sites were connected to different CRM modules (i.e. FluentCRM same site vs REST API)
- Updated the `WPFSelect` React component to version 1.1.6

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-3) 3.45.3 - 3/19/2025

- 🔧 Fixed Fixed error `Uncaught TypeError: Argument 2 passed to WPF_Advanced_Ads::check() must be an instance of Advanced_Ads_Ad` with Advanced Ads 2.0
- 🔧 Fixed Fixed ConvertPro integration not saving tag selections on the targeting settings in the editor with CRMs that used numeric tag IDs
- 🔧 Fixed Fixed Subscription Cancelled tags not being applied with MemberPress since 3.45.0
- 🛠️ Dev Paid Memberships Pro integration has been separated into three classes for better readability

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-2-2) 3.45.2.2 - 3/12/2025

- 🔧 Fixed Fixed fatal error loading custom fields from ProfilePress since 3.45.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-2-1) 3.45.2.1 - 3/11/2025

- 🔧 Fixed Fixed fatal error loading custom fields from Checkout Field Editor Pro in the WP Fusion settings when no block-based checkout fields were configured since 3.45.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-2) 3.45.2 - 3/10/2025

- ✨ New Added support for custom checkout fields added to the block-based WooCommerce checkout with Checkout Field Editor Pro
- ⚡️ Improved All custom fields sections in the Contact Fields list now link to their respective documentation pages
- ⚡️ Improved Long tag names in the single-option tags select dropdown in the block editor will now break onto multiple lines for readability
- 🔧 Fixed Fixed HighLevel sub-account access tokens not refreshing automatically
- 🔧 Fixed Fixed not being able to switch from HighLevel agency-level authorization to sub-account authorization via the Reauthorize with HighLevel link
- 🔧 Fixed Fixed new Backup Service Account Key feature with Keap / Infusionsoft not persisting between API calls
- 🔧 Fixed Fixed fatal error listing Paid Memberships Pro custom user fields on the Contact Fields list since PMPro v3.1x
- 🔧 Fixed Fixed MemberPress expiration date field getting saved with `text` type for field mapping when configured on individual membership plans
- 🔧 Fixed Fixed PHP warnings when submitting a Gravity Forms form if a WP Fusion feed was active but had no fields mapped
- 🔧 Fixed Fixed lists not being assigned when updating an existing subscriber with FluentCRM (REST API)
- 🔧 Fixed Fixed REST API updates to user profiles not being synced to the CRM
- 🛠️ Dev Removed compatibility with FluentForms v4.x and lower

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-1) 3.45.1 - 3/3/2025

- ✨ New Added support for tickets and RSVPs configured as blocks with [Event Tickets](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/#ticket-blocks)
- ✨ New Added support for a [backup Service Account Key for Infusionsoft/Keap](https://wpfusion.com/documentation/installation-guides/how-to-connect-infusionsoft-to-wordpress/#backup-service-account-key). If the primary key is throttled, WP Fusion will automatically switch to the backup key until 12am UTC
- ✨ New Added option to update existing user's tags and metadata when importing users via the [import tool](https://wpfusion.com/documentation/tutorials/import-users/)
- ⚡️ Improved The [Memberoni integration](https://wpfusion.com/documentation/learning-management/memberoni/) will now remove any configured tags on the lesson, roadmap step, course, and/or roadmap when a user marks a lesson or roadmap step as incomplete, or when a course/roadmap progress is reset
- ⚡️ Improved Salesforce will now retry the API call if a contact is not found, to allow for updates to deleted or merged contacts
- ⚡️ Improved Added support for membership-level-specific field mapping in the Paid Memberships Pro integration, allowing different CRM fields to be used for each membership level's data
- 🔧 Fixed Fixed - After adding a payment to an order with Keap/Infusionsoft, the `invoice_id` will always be saved. Previously the Job ID was saved, which is usually the same as the Invoice ID, but on some accounts they are no longer in sync
- 🔧 Fixed Fixed import tool with Groundhogg not able to import all contacts if a tag wasn't specified
- 🔧 Fixed Fixed "0" custom field values not being loaded from Keao / Infusionsoft
- 🔧 Fixed Fixed users imported via the import tool without a tag filter showing as "Unknown Tag" in the Import Groups log
- 🔧 Fixed Fixed searching for tags in the "WP Fusion - Remove Tags" SureCart integration not filtering the results by the search term
- 🔧 Fixed Fixed error `WPF_MemberPress_Transactions does not have a method "recurrring_transaction_failed"` since 3.45.0
- 🔧 Fixed Fixed PHP warning in the Salesforce integration when the webhook input was empty

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-0-1) 3.45.0.1 - 2/26/2025

- 🔧 Fixed Fixed error `WPF_MemberPress_Transactions does not have a method "recurrring_transaction_completed"` since 3.45.0
- 🔧 Fixed Fixed the timestamp conversion to midnight with HubSpot sometimes having problems if future dates were after a change to or from Daylight Savings Time (DST)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-45-0) 3.45.0 - 2/24/2025

- ✨ New Added ability to sync MemberPress subscription and transaction fields to separate CRM fields [on a per-product basis](https://wpfusion.com/documentation/membership/memberpress/#syncing-fields-on-a-per-product-basis)
- ✨ New Added support for applying tags based on Roadmap and Roadmap Step completion in the Memberoni integration
- 🔧 Fixed Fixed fatal error `undefined function wpf_logo_svg()` when exporting Event Tickets attendees to a report, since 3.44.26
- 🔧 Fixed Fixed - Removed `@abstract` docblock comment from `WPF_Background_Process` class, since it is not an abstract class, and this was causing validation errors on some servers
- 🔧 Fixed Fixed Infusionsoft invoice ID not being returned and saved for free orders
- 🛠️ Dev To enhance code readability, we are beginning to refactor our larger plugin integrations into smaller classes, starting with MemberPress. If you are making calls to MemberPress methods manually using `wp_fusion()->integrations->memberpress`, you will need to update your code to use the new classes (e.g. `wp_fusion()->integrations->memberpress->transactions`)
- 🛠️ Dev Added `instructions.md` and `./.cursor/rules` files to aid in development with Cursor IDE
- 🛠️ Dev Added `wpf_get_name_from_full_name()` function to split a full name into first and last name components

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-27) 3.44.27 - 2/17/2025

- ✨ New Added historical orders export tool for SureCart
- ⚡️ Improved With [Event Tickets Plus](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/#editing-attendees), if an attendee's email address is changed on the frontend, and "Create New Attendees on Edit" is enabled, a new contact record will be created in the CRM for the new email address and any tags for the event will be applied
- ⚡️ Improved Improved error handling with Klaviyo - if an invalid field is passed, it will be removed from the request body and the request will be retried once
- 🔧 Fixed Fixed error creating temporary user during form auto-login when the CRM is set to Staging
- 🔧 Fixed Fixed Secure Block for Gutenberg not working inside of a column block
- 🔧 Fixed Fixed LearnDash course cloning causing lessons to be lost if the course was protected by WP Fusion and Shared Course Steps was disabled
- 🔧 Fixed Fixed PHP warning `Undefined property: stdClass::$userId` when authorizing a HighLevel account at the agency level
- 🔧 Fixed Fixed: Removed `consented_at` timestamp from Klaviyo marketing consent API calls, as it is only supported for historical imports
- 🔧 Fixed Fixed HighLevel sub-account location tokens not refreshing automatically when the access token expires
- 🛠️ Dev Added `wpf_infusionsoft_query_args` filter to allow overriding the default query arguments for the Infusionsoft contact ID lookup

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-26) 3.44.26 - 2/11/2025

- ✨ New Added support for editing Event Tickets attendees in the admin, and an option to create a new CRM contact record when an attendee's email address is changed
- ✨ New Added (beta) support for authorizing HighLevel at the agency level, and switching between sub-locations within WP Fusion
- ⚡️ Improved Added WP Fusion status column to the Event Tickets attendees list
- ⚡️ Improved The KlickTipp integration now uses the WordPress HTTP API instead of the KlickTipp SDK, for improved logging and error handling
- ⚡️ Improved The KlickTipp integration will now return an error message during setup if the account or account user does not have access to the API
- ⚡️ Improved Improved performance of the WP Fusion tags select component in the block editor
- ⚡️ Improved If the Klaviyo API returns a `duplicate_profile` error during a contact update for a WordPress user, the correct contact ID will now be saved to the user's record in WordPress
- ⚡️ Improved If the Klaviyo API returns a `not_found` error during a contact update for a WordPress user, WP Fusion will attempt to look up the contact ID again by email address and retry the request if a match is found
- 🔧 Fixed Fixed database error in FluentCRM (same site) when adding a contact with an empty email address
- 🔧 Fixed Fixed restricted posts without redirects appearing as password protected if they had comments
- 🔧 Fixed Fixed MemberPress transaction fields not being synced when clicking "Process WP Fusion actions again" on the single transaction edit screen
- 🔧 Fixed Fixed fatal error in the HubSpot integration when applying tags via a multiselect field, if there was an API error loading the current tags
- 🔧 Fixed Fixed bug in HubSpot integration where countries that use Daylight Savings Time (DST) were not being converted to UTC correctly
- 🔧 Fixed Fixed error adding a new WPForms WP Fusion connection in WPForms Lite since 3.44.25
- 🔧 Fixed Fixed: Moved the CRM initialization to `init` priority 1, so it runs before other init actions, like Ultimate Member's account activation.
- 🛠️ Dev Updated the Klaviyo API version to the latest v2025-01-15
- 🛠️ Dev Added function `wpf_get_name_from_full_name()` to split a full name into first and last name components

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-25) 3.44.25 - 2/3/2025

- ✨ New Added support for [retrying failed API calls in the logs](https://wpfusion.com/documentation/getting-started/activity-logs/#retrying-api-calls)
- ✨ New Added support for syncing WPForms payment fields
- ✨ New Added compatibility with the new variable price editor in EDD v3.3.6.1
- ✨ New Added support for syncing dates and dates with times to Klaviyo
- 🔧 Fixed Fixed "Syntax error" API responses with Microsoft Dynamics 365 when looking up the contact ID for a user with an apostrophe in their email address
- ⚡️ Improved The "A valid URL was not provided." HTTP response was not properly logging the request URI since it was being escaped by `esc_url_raw()`. The request URI is now being sanitized with `sanitize_text_field()`
- ⚡️ Improved WP Fusion will no longer update a user's cached tags if they visit an auto-login link, as this was causing issues with the LearnDash BuddyBoss group sync feature triggering notifications for a non-existent user
- ⚡️ Improved With FluentCRM, if a 404 error is encountered while updating a contact or applying tags, WP Fusion will attempt to look up the contact ID again by email address and retry the request if a match is found
- 🔧 Fixed Fixed fatal error connecting to KlickTipp if the account had no tags
- 🛠️ Dev Added `./cursor/rules` file for Cursor IDE
- 🛠️ Dev The [Secure Block for Gutenberg](https://wpfusion.com/documentation/page-builders/gutenberg/) has been updated to `apiVersion 3.0`
- 🛠️ Dev The REST API integrations for FluentCRM, Groundhogg, and FunnelKit will now only use `wp_safe_remote_get()` for the initial connection, rather than all API calls. This helps avoid some legitimate requests occasionally failing `wp_http_validate_url()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-24) 3.44.24 - 1/27/2025

- ✨ New Added support for [multi-level donation forms](https://wpfusion.com/documentation/ecommerce/give/#donation-level-settings) in the new GiveWP visual form builder
- ✨ New Added support for applying tags after offline donations in the new GiveWP visual form builder
- ⚡️ Improved The Subscription Product Name and SKU fields will now be sent as a comma-separated string (or, optionally, an array) for WooCommerce subscriptions with multiple products
- 🔧 Fixed Fixed custom contact fields created by typing a new field name into the CRM field select dropdown not saving if they had apostrophes in the name
- 🔧 Fixed Fixed "Dynamic Tag Selection" with Fluent Forms not applying multiple tags for multiple matching conditions on the same multiselect field
- 🔧 Fixed Fixed fatal error in the Groundhogg integration in PHP 8.2 when syncing array formatted data
- 🔧 Fixed Fixed PHP warning loading custom fields from the SureCart API if the store has no checkouts
- 🔧 Fixed Fixed "Uncaught TypeError: Argument 1 passed to WP\_Fusion\\Includes\\Admin\\WPF\_Tags\_Select\_API::format\_tags\_to\_props() must be an instance of WP\_Fusion\\Includes\\Admin\\mixed, array given" in Give visual form builder integration on PHP 7.4 and below
- Updated EngageBay integration to new API endpoint at [https://api.engagebay.com/](https://api.engagebay.com/)
- 🛠️ Dev Added `wpf_elementor_forms_integration` action hook to allow adding custom integrations with Elementor Forms
- 🛠️ Dev Removed the deprecation notice for the `wp_fusion\secure_blocks_for_gutenberg\API` class until we've had time to update all our addons to the new API endpoint
- 🛠️ Dev Tested for WordPress 6.8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-23) 3.44.23 - 1/20/2025

- ✨ New Added support for [Presto Player Email Capture forms](https://wpfusion.com/documentation/other/presto-player/)
- ✨ New Added support for Forminator 1.39+, Removed legacy v1.30 code.
- ⚡️ Improved If an HTTP API error is encountered while logging an error-level message to the log, the HTTP API error will be logged as well
- ⚡️ Improved The `wc_total_spent` and `wc_order_count` fields can now be exported to the CRM for existing users
- ⚡️ Improved With CRMs that support creating custom properties or attributes via the API, the placeholder text in the CRM field select dropdowns will now show "type to add new" when the field is opened
- ⚡️ Improved When checking in an attendee with Event Tickets, if the attendee email does not match the contact ID created at checkout, WP Fusion will attempt to find the contact ID by email address
- ⚡️ Improved Added logging when Event Tickets attendees are skipped due to Add Attendees being disabled on the ticket
- ⚡️ Improved With Customer.io, when looking up a contact ID by email address, any custom properties will be saved into the WP Fusion CRM fields settings
- ⚡️ Improved Improved performance when using the React based tags select component, the tags will be passed to the component rather than loaded over the REST API
- 🔧 Fixed Fixed PHP warning in the logs when filtering by an invalid user ID
- 🔧 Fixed Fixed infinite loop handling HighLevel 401 errors related to missing scopes
- 🛠️ Dev cleaned up and standardized build processes for React integrations via webpack.config.js

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-22) 3.44.22 - 1/13/2025

- ✨ New Added a link to the CRM contact record [in the attendee details modal with Event Tickets](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/#managing-attendees)
- ⚡️ Improved With FluentCRM, if the email optin checkbox is enabled for WooCommerce, EDD, or GiveWP, the corresponding Status field will be enabled for sync
- ⚡️ Improved Added status icon to Gravity Forms entries list in the admin
- ⚡️ Improved Status icons in entries and orders lists now link to the contact record in the CRM
- ⚡️ Improved Improved error handling for HighLevel authorization
- 🔧 Fixed Fixed HighLevel integration not saving the location ID during initial setup when using the older [API-key based setup method](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/)
- 🔧 Fixed Fixed GiveWP form builder integration only saving the settings you've edited in that session
- 🔧 Fixed Fixed fatal error in the FluentCommunity when tags were modified for a user immediately after they were enrolled in a course or group
- 🛠️ Dev Added `wpf_status_icon()` function for outputting a status icon in the admin

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-21-1) 3.44.21.1 - 1/7/2025

- 🔧 Fixed Fixed missing "else" condition in the `insert_setting_after()` method causing settings panels not to appear in the LearnDash integration
- 🔧 Fixed Fixed new GiveWP form builder integration not displaying saved settings

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-21) 3.44.21 - 1/6/2025

- ✨ New Added (very beta) integration with the new GiveWP visual form builder
- ✨ New Added support for applying lists in supported CRMs from [FluentBooking bookings](https://wpfusion.com/documentation/events/fluentbooking/)
- ✨ New Added support for [creating and updating Accounts along with contacts in ActiveCampaign](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/)
- ✨ New Added "Unsubscribed" as a default status option for new FluentCRM contacts (same site and REST API)
- ✨ New Added option to set new contacts to either Subscribed or Pending in FluentCRM (same site and REST API) when they check the opt-in checkbox on the WooCommerce checkout (default is Subscribed)
- 🔧 Fixed Fixed JavaScript error when clicking the Test Connection button during the initial setup with Mailchimp

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-20) 3.44.20 - 12/31/2024

- ✨ New Added support for [FluentCommunity](https://wpfusion.com/documentation/membership/fluent-community/)
- ⚡️ Improved React select components will now be disabled while the list of available tags is being loaded
- ⚡️ Improved Added a clear selection button to single tag React select components
- ⚡️ Improved If a new MemberPress transaction is set to remove and then reapply the same tags, no tags will be modified
- 🔧 Fixed Fixed fatal error `Class "Forminator_Integration" not found` with Forminator Pro 1.38.0+
- 🔧 Fixed Fixed the Forminator field mapping modal not scrolling if there were too many fields to fit on the screen
- 🔧 Fixed Fixed: removed the Assistant Name and Assistant Phone fields from the Infusionsoft / Keap integration (they are no longer supported by the API)
- 🔧 Fixed Fixed PHP errors displaying the CRM Field select dropdown if the loaded fields are corrupted or contained unexpected data
- 🔧 Fixed Fixed MemberPress integration running on status changes between the same status (i.e. from pending to pending)
- 🔧 Fixed Fixed "Type to add new" message being appended each time you clicked on the Select Tag(s) dropdown in the WP Fusion settings

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-19) 3.44.19 - 12/17/2024

- ✨ New Added ability to [apply tags to Amelia event bookings](https://wpfusion.com/documentation/events/amelia/#syncing-bookings-and-custom-fields) in addition to appointments
- ✨ New Added Event Name and Event Date / Time fields to the Amelia Booking integration
- ✨ New Added Amelia Booking Events batch export operation
- ⚡️ Improved When exporting the activity logs to .csv, any current filters will now be applied to the export
- ⚡️ Improved Settings from non-active CRMs will no longer be saved to the database to reduce the size in the options table
- ⚡️ Improved When linking to a single entry in the logs, the page will now scroll to the correct entry
- ⚡️ Improved Infusionsoft will log a more descriptive error message when a 500 error is returned
- ⚡️ Improved If a registered user makes a booking with Amelia, and does not already have a contact record saved in WordPress, it will be processed as a guest booking
- ⚡️ Improved Updated WooCommerce Subscriptions batch operations to use `wcs_get_subscriptions()` instead of `get_posts()`
- 🔧 Fixed Fixed FluentCRM (REST API and same site) syncing dates in 12-hour format instead of 24-hour format
- 🔧 Fixed Fixed linked tag not being applied on course enrollment with MasterStudy LMS
- 🔧 Fixed Fixed Event Tickets Plus event checkin tags being applied to the user who purchased the ticket, instead of the attendee
- 🔧 Fixed Fixed - MailerLite no longer allows URLs in webhook names, and was returning an error when trying to create a new webhook. The site name is now used instead
- 🔧 Fixed Fixed error "The manual payment amount exceeds the amount due on the invoices being processed" when sending the payments to Infusionsoft if the order total calculation is off by a couple of cents due to taxes and discounts being rounded
- 🔧 Fixed Fixed fatal error in the MailerLite integration when outputting the site tracking script if the MailerLite account was suspended
- 🔧 Fixed Fixed fatal error in the Amelia Booking Appointments batch operation since 3.44.17
- 🔧 Fixed Fixed fatal error processing Amelia bookings without custom fields since 3.44.16

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-18) 3.44.18 - 12/10/2024

- ⚡️ Improved If an invalid attribute is passed to Klaviyo, the request will now be retried without the invalid attribute
- ⚡️ Improved If a WooCommerce customer created by a registered user checks out with an alternate email address, the order details in the sidebar will now show the link to the customer's contact record and not the user's contact record
- 🔧 Fixed Fixed: PHP classes and objects stored to usermeta will be excluded from sync to fix errors with sanitization via `stripslashes_deep()`
- 🔧 Fixed Fixed: stopped adding notes to Amelia appointments processed by WP Fusion, as it was interfering with the Google meetings feature adding its own note
- 🔧 Fixed Fixed MemberPress syncing the details of the failed transaction after a payment failure, potentially overwriting the user's current transaction / membership level in the CRM
- 🔧 Fixed Fixed Infusionsoft field mapping the Leadsource field to the `source_type` field. Will now sync to Lead Source ID
- 🔧 Fixed Fixed bulk edit of WooCommerce coupons erasing the WP Fusion settings on those coupons
- 🔧 Fixed Fixed WooCommerce lifetime value and total order count not syncing accurately during an initial checkout

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-17) 3.44.17 - 12/2/2024

- ✨ New Added option to apply tags when a user accepts a retention offer, and sync the offer title to the CRM, with the [WooCommerce Cancellation Surveys plugin](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/)
- ✨ New Added option to [prevent linked tags from unenrolling users](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) from LearnDash courses in cases of payment failures
- ✨ New Added support for connecting to Agency HighLevel accounts and switching between locations
- ✨ New Added batch operation for tagging refunded EDD orders
- 🔧 Fixed Fixed custom fields not syncing with Amelia event bookings
- 🔧 Fixed Fixed Profile Complete tags with Ultimate Member not being applied if the user's profile was completed before they were approved by an admin
- ⚡️ Improved Restricted posts will now be filtered in the content of RSS feeds
- ⚡️ Improved Updated language in the taxonomy term settings to better indicate that users must be logged in to access content when the "Restrict access" checkboxes are checked
- 🔧 Fixed Fixed PHP warnings in the Klaviyo integration when syncing customer data without a phone number
- 🔧 Fixed Fixed fatal error in the Klick Tipp integration when syncing tags for a contact that didn't have any smart tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-16) 3.44.16 - 11/26/2024

- ✨ New Added support for the "Defer Until Activation" feature to the Registration Options for BuddyPress plugin
- ✨ New Added additional validation on phone numbers for Klaviyo to prevent invalid numbers from blocking the API request
- ⚡️ Improved The `wc_money_spent` field will now be updated with the lifetime value of the customer when an order is refunded or cancelled
- ⚡️ Improved HighLevel webhooks can now read the tags from the webhook payload, saving an API call when using the `update_tags` or `update` endpoints
- 🔧 Fixed Fixed custom fields not syncing with Amelia 7.9
- 🔧 Fixed Fixed Event Espresso integration not applying tags to new contacts created in the Not Approved status
- 🔧 Fixed Fixed some false detections of custom code from the Enhanced Ecommerce addon on the Advanced tab of the settings
- 🔧 Fixed Fixed - If an Ultimate Member profile is completed before the member is approved, the profile complete tags will now be applied when they are approved
- 🔧 Fixed Fixed Klaviyo duplicate profile handling appending the duplicate ID to the request URL instead of replacing the existing ID
- 🔧 Fixed Fixed HighLevel integration reading tags out of webhooks as a single comma-separated string

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-15) 3.44.15 - 11/18/2024

- ✨ New Added support for ConvesioConvert (formerly Growmatik)
- ✨ New Added support for syncing AffiliateWP referral data from Easy Digital Downloads payments
- ⚡️ Improved MemberPress integration will apply tags and sync fields for the previous membership level when a membership expires
- ⚡️ Improved Added a warning when changing the FluentCRM tag format, since it requires resyncing tags for every user
- 🔧 Fixed Fixed ld\_last\_lesson\_completed field accidentally got removed from the field mapping in 3.44.14
- 🔧 Fixed Fixed transaction failed tags configured on individual WooCommerce products not being applied since 3.44.11
- 🔧 Fixed Fixed new tag not being saved in WP Fusion after creating it over the API with FluentCRM (REST API)
- 🔧 Fixed Fixed country code being prepended twice to phone numbers with Klaviyo if the provided number was less than 8 digits
- 🔧 Fixed Fixed warnings in the HubSpot integration about invalid date formats when syncing dates to read only fields
- 🔧 Fixed Fixed PHP warning: Undefined array key "apply\_tags\_converted" in the WooCommerce Subscriptions integration
- 🛠️ Dev Added `wpf_phone_number_to_e164` filter to allow overriding the default country code added to phone numbers when converting to E.164 format
- 🛠️ Dev The apply\_tags(), remove\_tags(), push\_user\_meta(), and user\_register() PHP methods now return a WP\_Error object if there was an error, instead of false, to aid in logging
- 🛠️ Dev The get\_contact\_id() method now returns false if there was an API error, to allow integrations to try to create a new contact as a fallback
- 🛠️ Dev Added `wpf_disable_api_queue()` function to allow bypassing the API queue for a single request
- 🛠️ Dev Added a basic framework for unit testing, with more tests to follow. See readme.md for more information.

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-14) 3.44.14 - 11/12/2024

- ✨ New Added support for [Klaviyo webhooks](https://wpfusion.com/documentation/webhooks/klaviyo-webhooks/)
- ✨ New Added ability to [set a default Record Type](https://wpfusion.com/documentation/installation-guides/how-to-connect-salesforce-to-wordpress/#record-type) for new Salesforce contacts created by WP Fusion
- ✨ New Added option to [switch between tag IDs and slugs](https://wpfusion.com/documentation/installation-guides/how-to-connect-fluentcrm-rest-api-to-wordpress/#tag-format) in the FluentCRM (REST API) integration. Tag IDs will be used by default for new installs.
- ✨ New Added Salesforce compatibility to the [api.php webhook endpoint](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-endpoint-advanced)
- ✨ New Added support for Gravity Forms Product Configurator (feeds will only be processed after the WooCommerce order is processed)
- ✨ New Added Total Order Count and Total Lifetime Value fields for sync with WooCommerce
- ✨ New Added Last Group Enrolled field to the LearnDash integration
- ✨ New Added log indicator when user meta was synced due to the Push All setting
- ⚡️ Improved Improved status indicator on the background worker
- ⚡️ Improved the `wpf_phone_number_to_e164()` function will now remove leading 0s from phone numbers
- ⚡️ Improved slightly reduced the byte size required to store the CRM field mapping in the database
- 🔧 Fixed Fixed - The "Paid Memberships Pro membership meta" batch operation previously synced the member's last membership level even if it was canceled or expired. Now it will sync the member as inactive and clear any membership level fields in the CRM
- 🔧 Fixed Fixed missing third parameter `$lookup_cid` in `wpf_get_tags()`
- 🔧 Fixed Fixed wildcard symbol in the Site Lockout's "Allowed URLs" setting not respecting query parameters
- 🔧 Fixed Fixed batch operations not working on multisite since 3.44.11
- 🔧 Fixed Fixed methods in namespaced integration classes showing as custom code on the Advanced settings tab
- 🔧 Fixed Fixed Brevo webhooks not working when the subscriber already had a WordPress user record that was not linked to a contact ID

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-13) 3.44.13 - 11/1/2024

- ✨ New Added error handling when an invalid contact ID is passed to wp\_fusion()->crm
- ⚡️ Improved Improved error handling for deleted or merged contacts in HubSpot
- ⚡️ Improved Improved labeling in the Event Tickets UI, the Apply Tags setting is now clear that the tags are applied to the attendee, not the purchaser
- 🔧 Fixed Fixed bulk order status changes with WooCommerce being blocked if the order status was not enabled for sync
- 🔧 Fixed Fixed unhandled error recording an entry note in the WPForms Pro integration when the form entry could not be synced to the CRM
- 🔧 Fixed Fixed undefined index notices in the MemberPress integration when resuming a subscription

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-12) 3.44.12 - 10/28/2024

- ✨ New Added a [Cancellation Survey for WooCommerce Subscriptions integration](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/)
- ✨ New Added support for displaying Elementor widgets [dynamically based on the access rules configured on the underlying post](https://wpfusion.com/documentation/page-builders/elementor/#inheriting-access-rules-from-posts)
- ✨ New Added support for displaying Bricks widgets [dynamically based on the access rules configured on the underlying post](https://wpfusion.com/documentation/page-builders/bricks/#inheriting-access-rules-from-posts)
- ✨ New Added support for applying lists in the Fluent Forms integration (with supported CRMs)
- ✨ New Added translations for German, Dutch, Spanish, and Portuguese
- ⚡️ Improved If the full version of WP Fusion is installed, the Lite version will now be deactivated and a notice will be displayed
- ⚡️ Improved CartFlows upsell and downsell orders will no longer be processed asynchronously
- 🔧 Fixed Fixed auto-enrollments into AffiliateWP groups linked with tags being triggered each time the user's tags were updated
- 🔧 Fixed Fixed event fields not not syncing when a Event Tickets ticket was purchased via the Tickets Commerce gateway
- 🔧 Fixed Fixed - If the Billing Company field was hidden on the WooCommerce checkout via the Customizer settings, it did not show as an available field for sync
- 🔧 Fixed Fixed a fatal error loading the user's tags when they weren't saved as an array in the database
- 🔧 Fixed Fixed a fatal error calling `wpf_clean_tags()` when the CRM object wasn't loaded
- 🔧 Fixed Fixed "Process with WP Fusion" bulk action not showing when using legacy (non-HPOS) WooCommerce order storage
- Translators: Updated .pot file, merged similar strings in the plugin, and fixed dozens of cases where strings were not translatable
- 🛠️ Dev Added `wpf_should_do_asynchronous_checkout` filter to allow overriding the default logic for determining if a WooCommerce order should be processed asynchronously

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-11) 3.44.11 - 10/21/2024

- ✨ New Added support for conditional logic when applying tags in Fluent Forms
- ✨ New Added support for dynamic tag selection fields in Fluent Forms
- ⚡️ Improved If a customer opts in to marketing on the WooCommerce or Easy Digital Downloads checkout, the marketing consent will be synced to the ActiveCampaign Deep Data customer record
- ⚡️ Improved A background process will only be started on bulk WooCommerce order status changes if the Order Status field (or order status tags) are enabled
- ⚡️ Improved Added IPv6 debugging information to the activation error message
- ⚡️ Improved added logging when batch operations are completed
- ⚡️ Improved Improved storage of batch operations queue when running on a specific list of WordPress user IDs or WooCommerce order IDs
- 🔧 Fixed Fixed failed WooCommerce renewal orders having their status synced as "failed" instead of "pending" when automatic retries are enabled
- 🔧 Fixed Fixed the new "Process with WP Fusion" bulk action for WooCommerce orders not working
- 🔧 Fixed Fixed CartFlows orders being marked as "not processed by WP Fusion" if "Run on main order accepted" was enabled, and the order status was transitioned to Processing and then Completed
- 🔧 Fixed Fixed a bug since 3.44.8 where canceling a batch operation would cause it to become orphaned in the options table. Added a cleanup operation to clear out any orphaned batch operations
- 🔧 Fixed Fixed queued batch operations being set to autoload in options (not necessary when we're only working on one operation at a time)
- 🔧 Fixed Fixed WooCommerce Memberships' "Membership Status" field on specific membership plans not syncing when a membership status is changed
- 🔧 Fixed Fixed PHP warning: `Undefined variable $parent_group` in BuddyPress integration
- 🔧 Fixed Fixed fatal error recording the contact ID created from a form submission to an entry in WPForms Lite (WPForms Lite does not support entry meta)
- 🛠️ Dev Added method `wp_fusion()->crm->get_marketing_consent_from_email()` to allow retrieving the marketing consent status from an email address (with WooCommerce and Easy Digital Downloads)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-10) 3.44.10 - 10/14/2024

- ✨ New Added support for [webhooks configured via private apps in HubSpot](https://wpfusion.com/documentation/webhooks/hubspot-webhooks/#webhooks-in-private-apps) (works with all HubSpot plans)
- ✨ New Added support for refunds via the Infusionsoft/Keap XMLRPC API (thanks @GBBourdages!!)
- ✨ New Added Region and Time Zone fields to the Klaviyo integration
- ⚡️ Improved Partially reverted the change to Pending Woo order statuses in 3.44.8: now the pending status will be synced as long as the customer already has a contact record (it will still not create a new contact just to sync the status)
- 🔧 Fixed Fixed error `Too few arguments to function WPF_Woocommerce::batch_step_order_statuses()` when running the WooCommerce Order Statuses batch operation via the Advanced settings tab
- 🔧 Fixed Fixed auto-login system trying to start an auto-login session for visitors with a `wpf_contact` cookie set but an empty contact ID
- 🔧 Fixed Fixed PHP warning "foreach() argument must be of type array\|object, string given" when canceling batch operations, since 3.44.8
- 🔧 Fixed Fixed unhandled `WP_Error` response in the Gravity Forms Entries batch operation when the call to `GFAPI::get_entry()` fails
- 🔧 Fixed Fixed fatal error in the Event Espresso Registrations batch operation if a registration didn't have a primary attendee

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-9) 3.44.9 - 10/8/2024

- ⚡️ Improved The new Infusionsoft/Keap API [does not support refunding orders](https://developer.infusionsoft.com/faqs/add-refund-order-api/), so after a refund WP Fusion will record an order note with a link to the order so it can be refunded manually
- 🔧 Fixed Fixed Account Name field not being loaded from ActiveCampaign
- 🔧 Fixed Fixed field mapping not showing on new WPForms forms since 3.44.4
- 🔧 Fixed Fixed auto-applied coupons with WooCommerce not being applied during cart recovery links from the Abandoned Cart addon
- 🔧 Fixed Fixed fatal error visiting an auto-login URL with an invalid contact ID with FunnelKit Automations (same site)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-8) 3.44.8 - 9/30/2024

- ⚡️ Improved Stopped syncing the WooCommerce Order Status field when the order status is "Pending", to prevent duplicate contacts at checkout (especially with the Abandoned Cart addon)
- ⚡️ Improved Numeric states or regions will no longer be synced to Infusionsoft/Keap to prevent an API error
- ⚡️ Improved Improved reliability when canceling background operations via the Cancel button
- ⚡️ Improved Improved logging for auto-login sessions with invalid contact IDs in the URL
- 🔧 Fixed Fixed auto login system trying to start an auto-login session for visitors with a `wpf_contact` cookie set but an empty contact ID
- 🔧 Fixed Fixed background operations started via cron triggring `wp_die()` instead of returning, and blocking subsequent cron jobs
- 🔧 Fixed Fixed profile updates from Ultimate Member not being synced if the profile form did not contain the user's name or email
- 🔧 Fixed Fixed error removing a user from an AffiliateWP group linked to a tag if they were not already an affiliate
- 🔧 Fixed Fixed import tool with Groundhogg (REST API) not loading more than 100 contacts
- 🔧 Fixed Fixed - further checks to ensure tags arrays are re-indexed before being passed to the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-7) 3.44.7 - 9/23/2024

- ✨ New Added support (via code snippet) for [syncing lead source data when updating a contact](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#sync-lead-source-data-for-existing-contacts), instead of just when adding a new contact
- ⚡️ Improved If a tag linked to an AffiliateWP group is applied to a pending affiliate, the affiliate will now be activated before being added to the group
- ⚡️ Improved New auto-login sessions will now record the current URL to the logs
- ⚡️ Improved Added links to CRM-specific setup documentation to the CRM configuration settings section
- ⚡️ Improved Added note to HighLevel setup about logging in to the HighLevel app before attempting the connection
- ⚡️ Improved Moved Mautic tracking script from footer to head to fix some console errors when playing mediaelement.js videos
- ⚡️ Improved Updated the list tags pagination API call with Infusionsoft/Keap to use the new V2 compliant specification
- 🛠️ Dev Added `wpf_api_{$method_name}` filter to allow [bypassing / overriding API calls in the CRM classes](https://wpfusion.com/documentation/filters/wpf_api_method_name/)
- 🔧 Fixed Fixed `user_meta` shortcode not properly converting dates stores as timestamps
- 🔧 Fixed Fixed the tags array API call with Infusionsoft/Keap not being reindexed before being sent, which would cause "Input could not be converted" errors in cases where invalid tags had been removed from the payload
- 🔧 Fixed Fixed error "array\_keys(): Argument #1 ($array) must be of type array, bool given" in LearnDash admin course list when no tags were available in the CRM
- 🔧 Fixed Fixed error "undefined function affwp\_get\_affiliate\_statuses()" with AffiliateWP versions below 2.3

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-6-1) 3.44.6.1 - 9/17/2024

- 🔧 Fixed Fixed inverted logic on EDD version check for discount functions: discounts tagging functionality was disabled on EDD 3.0 and higher, since 3.44.6
- 🔧 Fixed Fixed lockout redirect URLs saved without a trailing slash causing an infinite redirect when a lockout redirect is triggered

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-6) 3.44.6 - 9/16/2024

- ✨ New Added support for resyncing contact IDs and tags by bulk-selecting users from the All Users page
- ✨ New Added support for processing WooCommerce orders in bulk by selecting order IDs from the Orders page
- ✨ New Added a WooCommerce Order Statuses batch operation
- ⚡️ Improved Bulk order status changes with WooCommerce will now start a new background process and display an indicator at the top of the Orders page
- ⚡️ Improved With CRMs that support typing new tags into the tags dropdown, the placholder will update to say "(type to add new)" when the dropdown is open
- ⚡️ Improved The Brevo site tracking feature will now identify visitors to the tracking script after placing a guest order or form submission
- ⚡️ Improved The legacy Infusionsoft/Keap module at `wp_fusion()->crm->app` is now lazy-loaded, so it will only be loaded when needed instead of on every page load
- ⚡️ Improved Disabled discounts features on Easy Digital Downloads versions below 3.0.0, and added a notice to the admin
- 🔧 Fixed Fixed course complete tags not applying with WPComplete when a course with multiple buttons on the same page is marked complete by an admin
- 🔧 Fixed Fixed user role changes after a user's initial registration not being synced to the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-5) 3.44.5 - 9/10/2024

- ✨ New Added support for syncing guest bookings with Amelia
- ⚡️ Improved The Infusionsoft/Keap integration will now convert all two-digit state abbreviations to uppercase
- ⚡️ Improved With Infusionsoft/Keap, if a US state is supplied for an address, and the country code is not provided, the country code will automatically be set to USA
- ⚡️ Improved With Infusionsoft/Keap, if a region code is provided for an address, and the country code is not provided, a notice will be recorded to the logs
- 🔧 Fixed Fixed the `wp_fusion_init_crm` hook not changing the CRM name on the Setup tab (when white-labelling)
- 🔧 Fixed Fixed course complete tags not applying with WPComplete when a course with multiple buttons is marked complete by an admin
- 🔧 Fixed Fixed custom field mapping not working with WS Form and CRMs that use custom field groups
- 🔧 Fixed Fixed PHP warning in the MemberPress integration when registering a new user without a payment method
- 🔧 Fixed Fixed error in the HighLevel integration when removing tags from a deleted contact
- 🔧 Fixed Fixed Infusionsoft/Keap integration logging an error when recording a payment against a free order

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-4) 3.44.4 - 9/3/2024

- ✨ New Added support for [setting a primary connection for field mapping with WPForms](https://wpfusion.com/documentation/lead-generation/wpforms/#conditional-logic), to make it easier to apply tags via conditional logic
- ✨ New Added support for multiple memberships with Restrict Content Pro
- ✨ New Added Last Donation Date field for sync with GiveWP
- ✨ New Added a delay to batch operations with Klaviyo to avoid the 3 requests per second (60 per minute) API limit
- ⚡️ Improved If you attempt to sync an invlalid country name or code with Infusionsoft/Keap, WP Fusion will remove the data from the API call to avoid an API error
- ⚡️ Improved If you attempt to sync an invalid Owner ID with Infusionsoft/Keap, this will crash the API (error code 500). We've added a more descriptive error message to the log to indicate when this field is causing the error
- ⚡️ Improved Improved Infusionsoft/Keap error logging
- ⚡️ Improved Extended the API timeout with Infusionsoft/Keap to 20 seconds
- ⚡️ Improved If an API call to Infusionsoft/Keap fails with a 503 error ("service unavailable"), WP Fusion will now retry the API call after a 2 second delay
- ⚡️ Improved WP Fusion will no longer apply timezone offsets to dates synced to Groundhogg (same site) that don't have a time component
- ⚡️ Improved Improved Salesforce error logging for failed access token refreshes
- 🔧 Fixed Fixed deprecated repeater notices in the JavaScript console with the Elementor Pro Forms integration
- 🔧 Fixed Fixed tags not being applied for WPComplete course / button completion when a course is marked complete in the admin
- 🔧 Fixed Fixed tags applied in FluentCRM (same site) automations, which were triggered by WP Fusion applying a tag, not syncing back to WordPress
- 🔧 Fixed Fixed `wp_capabilities` field not syncing after membership level changes with Paid Memberships Pro
- 🔧 Fixed Fixed error "Cannot use array offset of type string on string" with WPComplete on PHP 8.2
- 🔧 Fixed Fixed logged notices with Infusionsoft/Keap integration saying "Custom field addresses/email\_addresses/phone\_numbers is not a valid custom field"
- 🔧 Fixed Fixed the Nickname field not syncing with Infusionsoft/Keap
- 🔧 Fixed Fixed HighLevel integration not creating contacts added by ThriveCart
- 🔧 Fixed Fixed PHP warning "Automatic conversion of false to array is deprecated" when the shutdown hook runs multiple times
- 🔧 Fixed Fixed PHP error "array\_map(): Argument #2 ($array) must be of type array, string given" in If-Menu integration with PHP 8.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-3) 3.44.3 - 8/26/2024

- ✨ New Added support for [creating and updating Leads from form submissions with Zoho](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/)
- ⚡️ Improved When using [the api.php webhook method](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-endpoint-advanced), you can now define a custom ABSPATH via php.ini or a bootstrap file (for custom WP directory locations)
- ⚡️ Improved Improved support for syncing country and region codes with Infusionsoft/Keap
- ⚡️ Improved With the [`user_meta` shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-user-meta), input strings of 8 characters or less will no longer be treated as timestamps (allows for dates like 2024 or 20240101 to be formatted correctly as dates)
- Improvements to the [add\_object() method in the CRM base class](https://wpfusion.com/documentation/functions/add_object/)
- ⚡️ Improved When a user is [auto-enrolled into an AffiliateWP group via a linked tag](https://wpfusion.com/documentation/affiliates/affiliate-wp/#linking-tags-to-groups), their affiliate account will be automatically set to active
- ⚡️ Improved If Sync Leads is enabled and a user is logged in, has a contact ID, and submits a form, their contact record will be updated, no lead record will be created
- ⚡️ Improved Improved logging when a user is synced to the CRM due to a role change
- 🔧 Fixed Fixed errors syncing to Infusionsoft/Keap custom fields with special characters in the CRM field label (like, ?, !, etc)
- 🔧 Fixed Fixed user registration actions running twice when using the Limit User Roles setting
- 🔧 Fixed Fixed warning "Undefined variable $lists" in ActiveCampaign integration when creating a contact without any lists
- 🔧 Fixed Fixed notice "Add to CRM was not checked, the user will not be synced to the CRM." when adding users manually via the WP Admin
- 🔧 Fixed Fixed user role changes on the admin user profile triggering a sync to the CRM even if the role field is not enabled for sync
- 🔧 Fixed Fixed custom post types created by JetEngine not respecting post access rules
- 🛠️ Dev added functions `wpf_country_to_iso3166()` and `wpf_state_to_iso3166()` to convert country and state codes to ISO 3166-1 alpha-3 and alpha-2 codes
- 🛠️ Dev added filter `wpf_country_to_iso3166` to allow overriding the default country to ISO 3166-1 alpha-3 code conversion
- 🛠️ Dev`wpf_is_field_active()` can now take an array of field IDs, it will return true if any of the fields are active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-2) 3.44.2 - 8/19/2024

- ✨ New Added support for line items (discounts, shipping, taxes, and fees) with the new Infusionsoft/Keap integration
- ✨ New Added support for [webhooks (aka "outbounds") with KlickTipp](https://wpfusion.com/documentation/webhooks/klicktipp-webhooks/)
- ✨ New Added a [visibility indicator on elements protected by WP Fusion access rules in the Bricks editor](https://wpfusion.com/documentation/page-builders/bricks/#visibility-indicator)
- ✨ New Added [AffiliateWP - Referrals batch operation](https://wpfusion.com/documentation/affiliates/affiliate-wp/#export-options) for exporting historical referral data
- ✨ New Added a text search field to the WP Fusion Logs page
- ⚡️ Improved Improved API performance for applying and removing tags with Infusionsoft/Keap
- ⚡️ Improved If an Infusionsoft/Keap API call is throttled due to too many requests, WP Fusion will now wait 2 seconds and try again
- ⚡️ Improved The new Keap/Infusionsoft integration will now append to the existing Person Notes field when syncing notes, instead of replacing it
- ⚡️ Improved With the new Infusionsoft/Keap integration, if a US state is specified for an address, and the country is not provided, the country code will be set to USA
- ⚡️ Improved With the new Infusionsoft/Keap integration, if an invalid locale code is synced to the Language field, a notice will be logged and the field will be removed to avoid API errors
- ⚡️ Improved Improved KlickTipp error handling
- 🔧 Fixed Fixed the Membership Expiration Date field enabled on a specific WooCommerce Membership Level not being set to sync as a Date by default

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-1-1) 3.44.1.1 - 8/15/2024

- ✨ New Added US state name to ISO 3166-2 code conversion for updating billing and shipping addresses with Infusionsoft / Keap
- ⚡️ Improved Disabled syncing of the "Person Notes" field with Infusionsoft / Keap for existing contacts, since Keap now replaces the notes field when notes are synced, instead of appending to it
- ⚡️ Improved Custom fields with Infusionsoft / Keap will now be sorted alphabetically in the WP Fusion field dropdowns
- 🔧 Fixed Fixed "date" type fields (like Birthday) being synced to Infusionsoft / Keap as ISO8601 date-time data since 3.44.1, instead of the `Y-m-d` date format
- 🔧 Fixed Fixed date/time fields with Infusionsoft not being formatted into the WordPress date / time format when loaded
- 🔧 Fixed Fixed missing CRM field labels in WPForms feed settings with CRMs that use custom field categories
- 🔧 Fixed Fixed "Creation of dynamic property" PHP warnings in older CRM integrations with PHP 8.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-1) 3.44.1 - 8/12/2024

- _Note:_ Infusionsoft/Keap have removed the standard "Password" and "Username" fields from the new API, due to security concerns. To avoid errors when syncing passwords and usernames, WP Fusion will log a notice when these fields are detected and remove them from the sync. If you need to sync usernames and passwords, please create new custom text fields to store the data.
- ⚡️ Improved Improved Ontraport error handling for duplicate and not found contacts
- ⚡️ Improved (Infusionsoft / Keap) Added ISO 3166-1 country name conversion for "United States" to "USA" (previously only matched "United States of America")
- 🔧 Fixed Fixed new Infusionsoft integration swapping the Billing and Shipping addresses
- 🔧 Fixed Fixed new Infusionsoft integration not syncing dates in ISO8601 format
- 🔧 Fixed Fixed new Infusionsoft integration not loading more than 10 available products
- 🔧 Fixed Fixed WP Fusion using a pseudo order item "wpf\_rest\_product" when creating blank orders with the new Infusionsoft REST API integration
- 🔧 Fixed Fixed error "PHP error: Uncaught TypeError: array\_flip(): Argument #1 ($array) must be of type array, array given" when syncing new custom fields with the new Infusionsoft REST API integration
- 🔧 Fixed Fixed EDD Subscription End Date field syncing the renewal date, not the subscription end date (for fixed-length subscriptions)
- 🔧 Fixed Fixed "Remove tags specified in 'Apply Tags' if membership is cancelled" setting not working on LifterLMS memberships
- 🔧 Fixed Fixed EDD renewal payments that were processed by WP Fusion not being marked as `wpf_complete` and not displaying the orange success indicator in the EDD orders list
- 🔧 Fixed Fixed Groundhogg (same site) integration immediately loading custom fields that were added when creating a new contact
- 🔧 Fixed Fixed date fields syncing to Groundhogg (REST API) as timestamps instead of dates
- 🔧 Fixed Fixed tags that were removed in a FluentCRM automation (same site) that was triggered by WP Fusion applying a tag not triggering a sync back to the user's tags in WordPress
- 🔧 Fixed Fixed PHP warning "Attempt to read property "post\_type" on null" in the Download Monitor integration
- 🛠️ Dev`add_contact()` will now return a `WP_Error` if no fields are enabled for sync, instead of `false`
- 🛠️ Dev The WP Fusion logs are now sorted by log ID instead of timestamp, to avoid confusion when changing the site's timezone

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-0-2) 3.44.0.2 - 8/6/2024

- 🔧 Fixed Fixed custom fields with spaces in the labels not migrating to the new Infusionsoft API field mapping
- 🔧 Fixed Fixed "Unprocessable entity" errors when syncing custom fields with spaces in the label to Infusionsoft/Keap since 3.44.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-0-1) 3.44.0.1 - 8/6/2024

- 🔧 Fixed Fixed new Keap / Infusionsoft integration not loading more than 1000 each of tags or tag categories
- 🔧 Fixed Fixed Keap / Infusionsoft integration not importing all contacts if no tag was specified for the import

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-44-0) 3.44.0 - 8/5/2024

- Big update: WP Fusion has been updated to use the Infusionsoft REST API, and [Service Account Keys](https://developer.infusionsoft.com/pat-and-sak/) for authentication. Infusionsoft / Keap users will need to update their API credentials to ensure uninterrupted service.
- ⚡️ Improved`wpf_get_iso8601_date()` will now more forcefully use GMT for the time zone instead of the local time
- ⚡️ Improved Added logging if the HubSpot token refresh failed to save
- ⚡️ Improved`wp_fusion()->settings->set()` will now return false if the setting was not successfully saved
- 🔧 Fixed Fixed "Assign Lists" setting with ActiveCampaign applying to all new contacts, not just new user registrations
- 🔧 Fixed Fixed `"generated_password"` field not being synced with WooCommerce when AffiliateWP's "Automatically register new user accounts as affiliates" setting is enabled
- 🔧 Fixed Fixed "Resubscribe unsubscribed subscribers when they are added to new groups" setting not working with MailerLite
- 🔧 Fixed Fixed MailerLite group IDs not saving correctly in the CartFlows UI (floating point values were being saved as integers)
- 🔧 Fixed Fixed missing `crm.schemas.deals.write` scope in the HubSpot integration, which sometimes caused deal properties not to be saved
- 🔧 Fixed Fixed an error processing a WooCommerce renewal order if no valid order was found for the provided order ID
- 🔧 Fixed Fixed fatal error `WPF_AffiliateWP does not have a method "tag_modified"` in the AffiliateWP integration if an affiliate's status was changed and then tags were applied to the affiliate in the same request
- 🔧 Fixed Fixed deprecated use of `DOMNodeInserted` when editing WooCommerce variations
- 🔧 Fixed Fixed PHP warning "Attempt to read property 'referrer' on bool" when syncing AffiliateWP referrer visit data for a recurring payment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-20-1) 3.43.20.1 - 7/30/24

- 🔧 Fixed Fixed PHP warning "Attempt to read property 'date' on null" in the EDD Recurring Payments integration when processing an initial payment for a subscription, since 3.43.20

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-20) 3.43.20 - 7/29/24

- ⚡️ Improved If the Order Date or Next Payment Date are enabled with Easy Digital Downloads Recurring Payments, these will now be synced after each renewal payment
- 🔧 Fixed Fixed saved MemberDash tag settings not loading
- 🔧 Fixed Fixed duplicated tag select UI in MemberDash access options settings
- 🔧 Fixed Fixed fatal error on the post table list when no tags are available in the CRM
- 🔧 Fixed Fixed notice "Function ID was called incorrectly" when viewing customer's CRM contact record ID in the WooCommerce order sidebar
- 🔧 Fixed Fixed PHP warnings during a SureCart checkout if no customer address was provided
- 🔧 Fixed Fixed - removed deprecated use of `\MailPoet\Models\Subscriber` when updating MailPoet subscribers
- 🔧 Fixed Fixed fatal error with PHP 8.2 when an EDD subscription expired if Remove Tags was checked and no tags were specified in the Apply Tags setting

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-19) 3.43.19 - 7/22/2024

- ✨ New Added a [MemberDash integration](https://wpfusion.com/documentation/membership/memberdash/)
- ⚡️ Improved If a `$source` is synced for a Klaviyo subscriber, the same `$source` will be used when opt-ing the subscriber in to marketing
- 🔧 Fixed Fixed "Remove Tags" setting on LearnDash courses and groups not respecting the saved value
- 🔧 Fixed Fixed spaces in tag names not working with If Menu v0.17.0+
- 🔧 Fixed Fixed fatal error adding a member to a WooCommerce Memberships for Teams team on PHP 8.2 when a linked tag was set on the team but no "Apply Tags" were specified

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-18) 3.43.18 - 7/16/2024

- ✨ New Added support for syncing custom Event Tickets fields configured on a single post or page
- Adding Landing Page and Referring URL to the [AffiliateWP referral data](https://wpfusion.com/documentation/affiliates/affiliate-wp/#syncing-referrer-meta-fields)
- ⚡️ Improved With Ontraport [lead source tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/), the any enabled lead source fields will be synced to the corresponding Last Referrer fields when a contact is updated
- ⚡️ Improved WP Fusion will now declare compatibility with the block-based WooCommerce checkout as long as the email optin field is disabled
- ⚡️ Improved If users do not have permission to access a WPForo forum, they will no longer receive forum and topic notifications
- 🔧 Fixed Fixed custom properties with Klaviyo being treated as system properties if they are prefixed with a dollar sign
- 🔧 Fixed Fixed AffiliateWP referrer data not being synced with new WooCommerce guest checkouts
- 🔧 Fixed Fixed error `Uncaught TypeError: array_merge(): Argument #2 must be of type array` when editing a new registration form with Ultimate Member on PHP 8.2
- 🔧 Fixed Fixed error `Call to a member function get_id() on string` when using the WooCommerce mini cart with the Nika theme
- Removed the "Source" field from the Klaviyo integration (was not a system field)
- 🛠️ Dev Added filter `wpf_background_process_memory_utilization_percentage` to allow customizing the memory utilization percentage for the background process

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-17) 3.43.17 - 7/2/2024

- 🔧 Fixed Fixed Elementor Forms integration treating single-option selects as multiselects since 3.43.16
- 🔧 Fixed Fixed JavaScript error with Asynchronous Checkout (for WooCommerce) when another plugin returns an AJAX response before the payment is processed
- 🔧 Fixed Fixed weekly license status check not running
- ✨ New Added a notice in the plugins list when the license key is inactive or expired

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-16) 3.43.16 - 7/1/2024

- ✨ New Added Source field for sync with Klaviyo
- ⚡️ Improved New contacts added to Pipedrive will be automatically have their marketing status set to "subscribed"
- Updated notice for bulk order status changes to mention that the maximum number of orders that can be processed at once is 20
- 🔧 Fixed Fixed tags not being applied for canceled and failing subscriptions with GiveWP since a recent GiveWP update (not sure exactly which)
- 🔧 Fixed Fixed Elementor Forms integration treating commas in select dropdown options as multiple values, since 3.43.12
- 🔧 Fixed Fixed PHP warning `Undefined global variable $product` since 3.43.15
- 🔧 Fixed Fixed "Unknown lists" error when submitting Elementor Forms after switching from a CRM that supports lists to one that doesn't
- 🛠️ Dev Added filter `wpf_bulk_order_actions_max_orders` for modifying the max number of orders status changes that will be processed at once

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-15) 3.43.15 - 6/24/2024

- ✨ New Added support for Filter Queries - Advanced with the Search & Filter Pro plugin
- 🔧 Fixed Fixed fatal error when tracking events with FluentCRM and the event value is empty
- 🔧 Fixed Fixed WooCommerce Order Status field not being synced after a successful renewal order with WooCommerce Subscriptions
- 🔧 Fixed Fixed quantity select input not being hidden on restricted WooCommerce products in Elementor product loops
- 🔧 Fixed Fixed HTTP API logging option not showing with Customer.io
- 🔧 Fixed Fixed user passwords not syncing to the CRM when adding new users via Uncanny LearnDash Groups
- 🛠️ Dev added filter `wpf_show_additional_menu_item_settings` to allow enabling the "Required Tags (all)" and "Required Tags (not)" settings on the admin menu editor
- 🛠️ Dev added property `wp_fusion()->access->filter_queries_priorty` to allow setting Advanced query filtering to a custom priority

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-14) 3.43.14 - 6/17/2024

- ✨ New Added ability to [sync WooCommerce Memberships status and expiration date to separate custom fields per membership plan](https://wpfusion.com/documentation/membership/woocommerce-memberships/#plan-specific-field-mapping)
- ✨ New Added support for lists with Constant Contact (can be configured for new user registrations in the General settings, or with the Gravity Forms or Elementor Forms integrations)
- 🔧 Fixed Fixed the activation key being synced as the user's password instead of the provided password, with BuddyBoss
- 🔧 Fixed Fixed LearnDash course completion date being synced in local time instead of UTC (caused issues with the timezone offset and HubSpot)
- 🔧 Fixed Fixed the "Duplicate and Delete" [feature for email address changes](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/) not working with Mailerlite
- 🔧 Fixed Fixed error "Argument #1 ($json) must be of type string, array given" in the LatePoint integration when creating a booking if no settings are configured on the service

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-13) 3.43.13 - 6/10/2024

- ✨ New Added Last Order Status field for sync with WooCommerce (will be synced whenever the status changes for an order)
- ✨ New Added logging for MemberPress transaction status changes
- ✨ New Added filter `wpf_show_additional_menu_item_settings` to allow enabling the "Required Tags (all)" and "Required Tags (not)" settings on the admin menu editor
- ⚡️ Improved The "Required Tags (not)" setting can now be used on menu items in the admin menu editor when the logged-in condtion is set to Everyone
- 🔧 Fixed Fixed - If Push All was enabled, adding a user from the admin could log a notice "no metadata found for user" if individual usermeta keys were updated before `user_register` was triggered
- 🔧 Fixed Fixed tags not being applied to new ActiveCampaign contacts when the "Account Name" field was enabled for sync
- 🔧 Fixed Fixed MemberPress integration treating empty checkbox values in the database as checked when syncing user meta
- 🔧 Fixed Fixed tags showing up twice in the Select Tags dropdowns with Encharge
- 🔧 Fixed Fixed PHP warning in the SureCart integration when no custom fields were available

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-12) 3.43.12 - 6/3/2024

- ✨ New Added ability to apply lists via form integrations with FluentCRM (same site)
- ⚡️ Improved After a user's WooCommerce Points and Rewards points balance is synced to the CRM by WP Fusion, the `wc_points_balance` usermeta value will also be updated so the points can be displayed
- 🔧 Fixed Fixed Elementor Forms integration not treating dropdowns with multiple values, and checkbox fields with multiple checkboxes, as multiselects
- 🔧 Fixed Fixed WooCommerce auto-generated passwords not being synced with the block-based checkout, since 3.43.11
- 🔧 Fixed Fixed error "Attempt to assign property 'plugin' on bool" when loading the plugins list, if the recent check for updates failed
- 🛠️ Dev the WP Fusion + Paid Membersips Pro level settings will no longer be autoloaded from `wp_options`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-11) 3.43.11 - 5/28/2024

- ✨ New Added support for [Encharge webhooks](https://wpfusion.com/documentation/webhooks/encharge-webhooks/)
- ✨ New Added support for [Drip site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#drip) (was removed at the end of 2022 but Drip has re-enabled it)
- ✨ New Added Total Spent field to the MemberPress integration
- ⚡️ Improved The "Generated Password" field with WooCommerce will now be synced during the initial `user_regiser` action rather than waiting for the `woocommerce_created_customer` hook
- ⚡️ Improved The WooCommerce Points & Rewards integration will now sync the user's points balance when exporting user meta
- ⚡️ Improved If the same tags are specified for "Apply Tags" and "Apply Tags - Refunded" on a WooCommerce product, the tags applied at checkout will not be removed when the order is refunded
- 🔧 Fixed Fixed - If Sync Leads is enabled and a user is logged in, has a contact ID, and submits a form, their contact record will be updated, no lead record will be created
- 🔧 Fixed Fixed tags not being applied for canceled and failing subscriptions with GiveWP since a recent GiveWP update (not sure exactly which)
- 🔧 Fixed Fixed Elementor Forms integration treating commas in select dropdown options as multiple values, since 3.43.12
- 🔧 Fixed Fixed PHP warning `Undefined global variable $product` since 3.43.15
- 🔧 Fixed Fixed "Unknown lists" error when submitting Elementor Forms after switching from a CRM that supports lists to one that doesn't
- 🛠️ Dev Added filter `wpf_bulk_order_actions_max_orders` for modifying the max number of orders status changes that will be processed at once

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-10) 3.43.10 - 5/20/2024

- ✨ New Added an Encharge CRM integration
- 🔧 Fixed Fixed [auto-applied coupons with WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#automatic-discounts) not working on subscription purchases when the current cart total was 0
- 🔧 Fixed Fixed "Points earned for account signup" points with WooCommerce Points & Rewards not syncing during new user registrations
- 🔧 Fixed Fixed missing search box in tags select dropdown for imports, since 3.43.3
- 🔧 Fixed Fixed import tool with Salesforce importing all contacts despite specifying a topic, since 3.43.3
- 🔧 Fixed Fixed users loaded twice by the import tool (i.e. from two different contact records with a matching email) counting twice in the import history table
- 🔧 Fixed Fixed warning "Attempt to read property 'name' on bool" when syncing the MemberPress payment method name on free transactions
- 🔧 Fixed Fixed HubSpot access token getting set to blank if there was a timeout or gateway error while connecting to HubSpot to refresh the token
- 🔧 Fixed Fixed deprecation notices in the Infusionsoft iSDK library when using PHP 8.2
- 🔧 Fixed Fixed date fields in Groundhogg being synced in GMT, not local time, which sometimes caused dates with times to sync as the wrong day
- 🔧 Fixed Fixed - If the user's tags were saved to usermeta as a boolean `true` or `false` instead of an array, this could cause that value to be returned from `wpf_get_tags()`, and cause errors with `array_intersect()` and other array functions
- 🔧 Fixed Fixed Object Sync for Salesforce integration not working with v2.2.9
- 🛠️ Dev Updated Klaviyo API to the `2024-02-15` revision
- 🛠️ Dev Updated the Salesforce API version to `55.0` (Summer 2022 version)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-9) 3.43.9 - 5/13/2024

- ✨ New Added support for Forminator 1.30.0+ (re-enables disabled Forminator integration since 3.43.6.2)
- Updated Constant Contact API token to use new API limits of 250,000 calls per day (was previously 10,000 calls per day) - _Requires re-authorizing the connection via the prompt_
- 🔧 Fixed Fixed import tool with HubSpot importing all contacts despite specifying a list, since 3.43.3

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-8-1) 3.43.8.1 - 5/7/2024

- 🔧 Fixed Fixed ActiveCampaign API error "Error while processing request" when adding a contact to multiple lists at the same time, since 3.43.6

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-8) 3.43.8 - 5/6/2024

- 🔧 Fixed Fixed error adding subscribers to Klaviyo lists with marketing consent when the site timzeone was set to UTC or Sydney (UTC+10)
- 🔧 Fixed Fixed error removing subscribers from Klaviyo lists that were added with explicit consent
- 🔧 Fixed Fixed fatal error handling updating a contact in ActiveCampaign when a "Email address already exists in the system." error is encountered while creating a contact
- 🔧 Fixed Fixed automatic enrollments into AffiliateWP groups via linked tags not working
- 🔧 Fixed Fixed - Log entries will now be saved using `gmdate()` instead of `date()` to avoid timezone conversion shenanigans

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-7) 3.43.7 - 4/29/2024

- ✨ New Added a [Content Control integration](https://wpfusion.com/documentation/membership/content-control/)
- ⚡️ Improved The Elementor Forms integration will now use the field types from the form settings rather than guessing the type based on the submitted value
- ⚡️ Improved If `wpf_get_contact_id()` is called with `$force_update`, and there is an API error, the existing cached contact ID (if any) will be returned instead of false
- ⚡️ Improved The query to find auto-applied discounts with EDD will now be cached for one week for performance reasons
- 🔧 Fixed Fixed Restrict Contact Pro group name and owner's email not syncing to the owner's contact record when an owner created a new group
- 🔧 Fixed Fixed infinite loop when using the "Refresh if access is denied" setting and the API call to look up the user's contact ID fails
- 🔧 Fixed Fixed fatal error running WP All Import imports when WooCommerce is not installed since 3.43.5

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-6-2) 3.43.6.2 - 4/25/2024

- 🔧 Fixed Fixed - Completely disabled the Forminator integration until we can rebuild the integration using their new API
- 🔧 Fixed Fixed HighLevel tags not being converted to lowercase for the `remove_tags()` API call

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-6-1) 3.43.6.1 - 4/24/2024

- 🔧 Fixed Fixed PHP warning: "foreach() argument must be of type array\|object, null given" when processing Contact Form 7 submissions without payment methods since 3.43.5

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-6) 3.43.6 - 4/23/2024

- ✨ New Added support for [resubscribing unsubscribed contacts with ActiveCampaign](https://wpfusion.com/documentation/tutorials/double-opt-ins/#activecampaign) (supports Gravity Forms and Elementor Forms)
- ✨ New Added Apply Tags and Link With Tag settings for individual [Teams for WooCommerce Memberships teams](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/)
- ✨ New Added option to skip already processed entries when running the [Event Tickets Attendees batch operation](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/#exporting-attendees)
- ✨ New Added support for applying ActiveCampaign lists with Elementor forms
- ⚡️ Improved Refactored the Event Tickets integration, removed redundant code and standardized the way the attendees are processed
- ⚡️ Improved Improved HighLevel error handling
- ⚡️ Improved If a `duplicate` error is returned from the ActiveCampaign API, the contact will be looked up again by email address
- 🔧 Fixed Fixed Event Ticket Attendees batch operation not syncing attendees who registered via Tribe Commerce
- 🔧 Fixed Fixed Event Tickets integration not syncing attendees when no settings were configured on the ticket
- 🔧 Fixed Fixed dynamic tags ("Create tag(s) from value") not applying with guest registrations
- 🔧 Fixed Fixed Paid Memberships Pro fields not syncing when a member is cancelled from their final active level
- 🔧 Fixed Fixed date fields enabled for sync on single WooCommerce subscription products getting saved as type `text` and not type `date` for the purposes of formatting for the API
- 🔧 Fixed Fixed event tracking with Klaviyo
- 🔧 Fixed Fixed LearnDash quiz complete tags not applying with GrassBlade xAPI Companion since 3.43.4
- 🔧 Fixed Fixed groups selected in the admin menu editor with MailerLite getting their IDs when they exceeded the PHP max integer value
- 🔧 Fixed Fixed HighLevel integration treating the error "The token does not have access to this location" as an expired access token and requiring a refresh
- 🔧 Fixed Fixed errors not being logged when an invalid contact ID was used as an auto-login URL parameter
- 🔧 Fixed Fixed Klick-Tipp integration storing contacts' smart tags in usermeta (not necessary and was showing up as Unknown Tag(s) in the admin)
- 🔧 Fixed Fixed Save Changes button in the setup not being clickable when using the Staging CRM
- 🔧 Fixed Fixed Groundhogg integration syncing empty dates as 1/1/1970
- 🛠️ Dev added function `wpf_get_iso8601_date()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-5) 3.43.5 - 4/15/2024

- ✨ New Added an integration with the [ZealousWeb payment plugins for Contact Form 7](https://wpfusion.com/documentation/lead-generation/contact-form-7/#payments)
- ⚡️ Improved The Bento webhook handler will now use the `email` field from the payload for lookups of existing users
- ⚡️ Improved Added a warning to the WPForo WP Fusion settings page in the admin to indicate when the forum base page is protected by WP Fusion
- ⚡️ Improved After a WooCommerce order has been imported by WP All Import, "Process Order Actions Again" will be triggered so the complete order data is synced to the CRM
- 🔧 Fixed Fixed fatal errors with Forminator 1.30.0 and higher (but integration is still broken while we wait to hear back from WPMU Dev)
- 🔧 Fixed Fixed missing "Apply tags - Approved" setting on Gravity Forms feeds with GravityView
- 🔧 Fixed Fixed notice `Deprecated: strpos(): Passing null to parameter #1 ($haystack) of type string is deprecated` when other plugins called `__()` without a text domain

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-4-1) 3.43.4.1 - 4/9/2024

- 🔧 Fixed Fixed error `WPF_BuddyPress::groups_access_meta(): Argument #1 ($settings) must be of type array, string given` when accessing a bbPress or BuddyBoss forum topic, since 3.43.4
- 🔧 Fixed Fixed fatal error calling methods that aren't in the WPF\_Staging class, while in staging mode (i.e. `Argument #1 ($callback) must be a valid callback, class WPF_Staging does not have a method "get_connection_id"`)
- ✨ New Added Event Variation SKU field for sync with FooEvents

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-4) 3.43.4 - 4/8/2024

- ✨ New Added ability to [link to individual entries in the activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/#the-logs)
- ⚡️ Improved When using hierarchical groups with BuddyPress / BuddyBoss, child groups with no access rules will now inherit the parent group's access settings
- 🔧 Fixed Fixed quiz complete tags not being applied with LearnDash 4.12.0+
- 🔧 Fixed Fixed missing slug when creating new tags via WP Fusion in FluentCRM (same site) since 3.43.3
- 🔧 Fixed Fixed fatal error `Argument #1 ($array) must be of type array, string given` in the admin post list table with PHP 8.2 when a required tag on a post was saved with invalid data

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-3-1) 3.43.3.1 - 4/3/2024

- 🔧 Fixed Fixed "Unknown tag" warning in the UI with FluentCRM since 3.43.3
- 🔧 Fixed Fixed tags not being applied for MemberPress members added to free memberships via the admin
- 🔧 Fixed Fixed error "TypeError: date(): Argument #2 ($timestamp) must be of type ?int, string given" with EDD Software Licensing and PHP 8.1+
- 🔧 Fixed Fixed fatal error "Call to member function get\_error\_message() on int" when importing users via the async webhook endpoint, since 3.43.3
- 🔧 Fixed Fixed "No tag found with name" error when using the import tool with MailChimp since 3.43.3

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-3) 3.43.3 - 4/2/2024

- ✨ New Added option to remove tags applied at enrollment when a user is unenrolled from a LearnDash course or group
- ✨ New Added Transaction Number field for sync with MemberPress
- ✨ New Added support for importing all contacts from the CRM via the import tool (rather than a specific segment), [with selected platforms](https://wpfusion.com/documentation/tutorials/import-users/)
- ⚡️ Improved While in [staging mode](https://wpfusion.com/documentation/faq/staging-sites/) you can now resync the lists of available tags and fields from the CRM
- ⚡️ Improved Added a warning indicator when an unknown tag (from a previous CRM) is saved to a Select Tag(s) dropdown
- ⚡️ Improved If staging mode is enabled in wp-config.php, the Staging Mode checkbox will be disabled in the settings
- 🔧 Fixed Fixed API calls before the `init` hook not getting logged with HTTP API logging
- 🔧 Fixed Fixed LearnDash Progress Meta batch operation syncing Last Course Completed date as 0 for courses that were started but not yet completed
- 🔧 Fixed Fixed restricted access redirects not working on Thrive Architect landing pages
- 🔧 Fixed Fixed user IDs imported via Salesforce webhooks getting appended to the most recent manual import on the Import Tool tab in the settings
- 🔧 Fixed Fixed Account Name not syncing with ActiveCampaign since the switch to the v3 API in v3.41.36
- 🔧 Fixed Fixed Gravity Forms feeds being processed twice since 3.43.0
- 🔧 Fixed Fixed tags created by WP Fusion in FluentCRM (same site) using the tag label as the slug (instead of the sanitized title)
- 🔧 Fixed Fixed Contact Form 7 integration running on form entries where no fields were mapped
- 🔧 Fixed Fixed pre-selected / default country codes in phone number fields not syncing with Elementor Forms
- Tested up to Elementor (+ Pro) 3.21.0
- 🔧 Fixed Fixed "Uncaught ArgumentCountError: Too few arguments to function WPF\_WPBakery::add\_css\_class()" since 3.43.0
- 🛠️ Dev Developers - `wp_fusion()->user->apply_tags()` and `wp_fusion()->user->remove_tags()` will now attempt to convert tag labels to IDs if the CRM doesn't support adding tags (helps with switching CRMs)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-2) 3.43.2 - 3/25/2024

- ✨ New Added support for connecting to FunnelKit Automations via PHP instead of REST API (signiciantly improved performance when both plugins are on the same site)
- Removed fallback support for legacy `/autonami-admin/` REST API endpoint (was removed from FunnelKit in 2.6.0, Sept 2023)
- ⚡️ Improved If an entry is later edited with Gravity Forms or GravityView, the entry will be processed again and any updated fields will be synced to the CRM
- ⚡️ Improved Query parameters will now be removed from the "Current Page" and "Landing Page" URLs before being synced to the CRM
- 🔧 Fixed Fixed missing settings page with the free ProfilePress plugin
- 🔧 Fixed Fixed missing warning when connecting to FunnelKit and the Pro plugin isn't active
- 🔧 Fixed Fixed conditions on Elementor Popups not working with tags with special characters in them with some CRMs
- 🔧 Fixed Fixed error `Cannot use object of type WP_Error as array` when logging HTTP API errors since 3.43.1

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-1-1) 3.43.1.1 - 3/21/2024

- 🔧 Fixed Fixed error "/wp-fusion/includes/integrations/class-woocommerce-compatibility.php is not a known WordPress plugin" when using the Email Optin checkbox with WooCommerce, since 3.43.1
- ⚡️ Improved WP Fusion now declares itself incompatible with the WooCommerce block-based product editor

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-1) 3.43.1 - 3/19/2024

- ✨ New Added a [MasterStudy LMS integration](https://wpfusion.com/documentation/learning-management/masterstudy/)
- ✨ New Added option to automatically remove [MemberPress corporate account tags](https://wpfusion.com/documentation/membership/memberpress/#corporate-accounts) from sub-account members when the parent membership is cancelled
- ⚡️ Improved When using [HTTP API logging](https://wpfusion.com/documentation/getting-started/activity-logs/#http-api-logging), the amount of time to perform the API call will be recorded to the logs
- ⚡️ Improved When an API error is encountered, the full API call and response will be logged
- ⚡️ Improved When using the Email Optin feature with WooCommerce, WP Fusion will now declare itself incompatible with the new checkout block
- ⚡️ Improved Improved plugin updater - updates will now show even if license key is expired
- ⚡️ Improved When debugging the admin settings page using the `&debug` URL parameter, the contents of `wpf_import_groups` will now be output with the rest of the debug data
- 🔧 Fixed Fixed `List not found with ID` error when adding contacts to Klavio lists with explicit consent
- 🔧 Fixed Fixed `Invalid consent timestamp` error when adding contacts to Klavio lists with explicit consent, with timezone offsets above GMT
- 🔧 Fixed Fixed WPBakery visibility indicator showing up when not in editing mode for users who have the admin bar visible
- 🔧 Fixed Fixed the import tool tracking failed user imports as successful for purposes of the table of historical imports
- 🔧 Fixed Fixed user IDs getting tracked multiple times in the settings table listing user import history, artifically inflating import counts
- 🔧 Fixed Fixed undefined index warning syncing custom fields with Klaviyo
- 🔧 Fixed Fixed array data not being converted to a string when updating Salesforce contacts using the `update_contact()` method

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-43-0) 3.43.0 - 3/12/2024

- The Great Date update. Prior to this version, dates and timezones across integrations and CRMs were inconsistent. Some plugins used UTC (MemberPress) and some used local time (WooCommerce). For some CRMs we converted the time zone back to local time (HubSpot), some we converted to UTC (Ontraport), and some we left as is (ActiveCampaign). This update attempts to standardize the way dates and times are handled by extracting all dates from plugin integrations in UTC, and then converting them back to local time when syncing to CRMs that require it that way. This will result in more predictable handling of time zones, but there may be unexpected behavior in the initial release.
- ✨ New Added a [visibility indicator](https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/#visibility-indicator) to protected elements with the WPBakery frontend editor
- ✨ New Added a [batch export tool for Elementor Forms entries](https://wpfusion.com/documentation/lead-generation/elementor-forms/#syncing-historical-entries)
- ✨ New Added support for custom fields with SureCart
- ✨ New Added support for loading and displaying read-only fields with HubSpot
- ✨ New Added throttling to batch operations with Constant Contact to get around the 4 API calls per second limit
- ⚡️ Improved If a user is a LearnDash Admin or Group Leader and is automatically enrolled in all courses, they will be ignored for the purposes of WP Fusion's course auto-enrollment
- ⚡️ Improved Improved WP Remote Users Sync integration (better reliability for syncing tag changes)
- ⚡️ Improved In the admin settings, setting the logs to "Only Errors" will disable the checkbox for "HTTP API Logging"
- (Potentially) improved performance with EngageBay by removing the leftover and unnecessary `host: api.engagebay.com` header from HTTP requests
- ⚡️ Improved The batch operations list in the admin is now sorted alphabetically
- 🔧 Fixed Fixed notice not being logged when an update webhook was received but no matching user was found
- 🔧 Fixed Fixed dropdown fields with WooCommerce Product Options syncing their internal values instead of the displayed labels
- 🔧 Fixed Fixed Gravity Forms User Registration actions running twice when using Gravity Press and wiping out the local tag cache for the user
- 🔧 Fixed Fixed PHP notices in the Amelia integration
- 🛠️ Dev If a user has a contact ID and no tags, the tags meta will now be deleted from the usermeta table for that user (reduces database size for users with no tags)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-14) 3.42.14 - 2/27/2024

- Updated expired Microsoft Dynamics 365 app secret
- ⚡️ Improved API actions will no longer be queued up for the `shutdown` hook when triggered as part of a cron process (should fix timeouts with WooFunnels and Forcefully Switch Order Statuses)
- ⚡️ Improved Errors during the initial OAuth connection with Dynamics 365 will now be displayed as a banner on the setup screen
- ⚡️ Improved With Klaviyo, the country code will now be prepended to phone numbers if it's missing during a WooCommerce checkout or profile update
- 🔧 Fixed Fixed duplicate review error when submitting reviews with Easy Digital Downloads since 3.42.10
- 🛠️ Dev added function `wpf_phone_number_to_e164()` to convert phone numbers to E.164 format

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-13) 3.42.13 - 2/26/2024

- ✨ New Added support for [If-So block editor conditions](https://wpfusion.com/documentation/other/if-so/#blocks)
- ⚡️ Improved The query to get WooCommerce coupons linked to tags will now be cached in a transient for improved performance
- ⚡️ Improved Improved EngageBay error handling
- ⚡️ Improved Improved EngageBay API performance: will now make calls directly to the account subdomain instead of `https://api.engagebay.com/dev/api/`
- ⚡️ Improved Reduced some duplicate MemberPress meta syncs when creating a transaction and a subscription at the same time
- 🔧 Fixed Fixed tags not applying for MemberPress transactions created as order bumps
- 🔧 Fixed Fixed tags not applying for MemberPress transactions created via Gravity Press
- 🔧 Fixed Fixed Profile Builder Pro syncing the user avatar field as an attachment ID instead of image URL
- 🔧 Fixed Fixed Ninja Forms batch export operation not working on forms that weren't configured to apply tags
- 🔧 Fixed Fixed missing nonce check on search log users AJAX handler
- 🔧 Fixed Fixed - if an Solid Affiliate activation linked tag and group link tag were applied at the same time, the affiliate wouldn't be added to the group

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-12) 3.42.12 - 2/20/2024

- ✨ New Added a [LatePoint integration](https://wpfusion.com/documentation/events/latepoint/)
- ✨ New Added an option with Klaviyo to [subscribe contacts to lists with marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/)
- ✨ New Added support for the Canadian data center with Zoho
- ⚡️ Improved A user auto-enrolled into a BuddyPress group as an organizer will no longer be unenrolled due to missing the group's general linked tag
- ⚡️ Improved Improved error logging when users fail to be unenrolled from BuddyPress groups
- ⚡️ Improved Invalid characters will now be removed from phone numbers synced to Zoho to avoid API errors
- ⚡️ Improved Errors during the initial OAuth connection with Zoho will now be displayed as a banner on the setup screen
- ⚡️ Improved Empty values will never be sent to Salesforce when creating a contact, to fix `Cannot deserialize instance from VALUE_STRING` errors
- ⚡️ Improved Date fields in Salesforce can now be erased by syncing an empty value (previously empty dates were ignored)
- 🔧 Fixed Fixed Easy Digital Downloads discount "apply tags" settings getting lost after the discount was first used
- 🔧 Fixed Fixed calling Easy Digital Downloads' `edd_update_discount()` from outside the discount edit screen removing the WP Fusion settings from the discount
- 🔧 Fixed Fixed filters added on `wpf_format_field_value` before `init` being un-hooked with Zoho
- 🔧 Fixed Fixed a fatal error with Uncanny LearnDashy Groups 6.0.0 when enrolling a user into a group if WooCommerce wasn't active
- 🔧 Fixed Fixed a fatal error syncing a MemberPress transaction to FluentCRM when the Enhanced Ecommerce plugin was active (Enhanced Ecommerce doesn't support FluentCRM)
- 🔧 Fixed Fixed error `Timestamp must be of type int` when syncing string timestamps with Groundhogg (same site)
- 🛠️ Dev updated the Klaviyo API version to `2023-12-15`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-11) 3.42.11 - 2/10/2024

- 🔧 Fixed Fixed for HighLevel API update of Feb 8th (now sending 403 status codes when access tokens expire, was previously 401)
- ⚡️ Improved Improved: Gravity Forms integration will now pass the entry ID to the forms processor class
- 🔧 Fixed Fixed WP Fusion not showing as compatible with WooCommerce High Performance Order Storage until the initial setup was completed
- 🔧 Fixed Fixed Groundhogg (Same site) integration not loading mapped BuddyPress fields automatically when their corresponding custom fields were edited in Groundhogg
- 🔧 Fixed Fixed FluentCRM and ActiveCampaign treating an invalid contact ID when looking up tags as a contact with no tags (caused auto-login links to unlock content for invalid contacts)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-10) 3.42.10 - 2/5/2024

- ✨ New Added an [Amelia booking integration](https://wpfusion.com/documentation/events/amelia/)
- ✨ New Added [Customer.io site tracking scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#customer-io)
- ✨ New Added [Customer.io webhooks](https://wpfusion.com/documentation/webhooks/customer-io-webhooks/)
- ✨ New Added a setting to apply tags when a customer leaves a review with Easy Digital Downloads
- ⚡️ Improved Multi-key FluentCRM events will now be sent JSON-encoded
- ⚡️ Improved The Save Changes button in the settings will now be disabled until the initial CRM connection has been established
- ⚡️ Improved The [JavaScript-based lead source tracking method](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#caching) no longer requires jQuery
- 🔧 Fixed Fixed Formidable Forms fields not showing for mapping in the WP Fusion settings if they had a default value
- 🔧 Fixed Fixed lead source data for new user registrations being synced even if there was an existing contact in the CRM
- 🔧 Fixed Fixed missing CRM field labels in dropdowns with Brevo since 3.42.8
- 🔧 Fixed Fixed PHP warning syncing available custom properties with Omnisend when no custom properties were available
- 🔧 Fixed Fixed error syncing available custom fields with Drip when no custom fields were available
- 🔧 Fixed Fixed missing event value for single key FluentCRM events
- 🔧 Fixed Fixed security vulnerability in the [`user_meta_if` shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-user-meta-values), an editor could potentially execute arbitrary PHP code by passing a function name to the `field_format` parameter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-9) 3.42.9 - 1/30/2024

- ✨ New Added support for the [new FluentCRM event tracking module](https://fluentcrm.com/fluentcrm-2-8-40/#dynamic-contact-activity-tracking) (same site and REST API)
- ⚡️ Improved Updated Omnisend event tracking to use new `/customer-events` endpoint
- ⚡️ Improved Improved HubSpot error handling for failed access token refreshes
- 🔧 Fixed Fixed WP Fusion not showing as compatible with WooCommerce High Performance Order Storage until the initial setup was completed
- 🔧 Fixed Fixed Groundhogg (Same site) integration not loading mapped BuddyPress fields automatically when their corresponding custom fields were edited in Groundhogg
- 🔧 Fixed Fixed FluentCRM and ActiveCampaign treating an invalid contact ID when looking up tags as a contact with no tags (caused auto-login links to unlock content for invalid contacts)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-8-1) 3.42.8.1 - 1/25/2024

- ⚡️ Improved Improved: The background worker will now `return` instead of `exit` when the queue is empty, to prevent the worker from blocking subsequent cron tasks
- ⚡️ Improved Improved HubSpot error handling
- ⚡️ Improved Improved error logging for composite responses with Salesforce
- ⚡️ Improved Improved Omnisend event tracking (numeric values will no longer be sent as strings)
- 🔧 Fixed Fixed refreshing available Ontraport tags resetting the available tags list since 3.42.8
- 🔧 Fixed Fixed WooCommerce order item refunded tags not being logged when a guest checkout order was refunded
- 🔧 Fixed Fixed auto-applied discounts not working with Easy Digital Downloads 3.0
- 🔧 Fixed Fixed fatal error displaying Select Tag(s) dropdowns after resyncing available tags while WP Fusion was in staging mode

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-8) 3.42.8 - 1/22/2024

- ✨ New Added a CRM integation with [Omnisend](https://wpfusion.com/documentation/installation-guides/how-to-connect-omnisend-to-wordpress/)
- ✨ New Added Last Order Shipping Method field for sync with WooCommerce
- ⚡️ Improved Improved Customer.io error handling
- ⚡️ Improved When clicking Process Order Actions Again on a WooCommerce order, the transient that locks the order will be cleared (fixes cases where a prior sync crashed or timed out before finishing)
- 🔧 Fixed Fixed special characters in tag names breaking If-Menu tag condition dropdowns
- 🔧 Fixed Fixed PHP warning `Undefined array key "email"` in Customer.io integration when updating contacts
- 🔧 Fixed Fixed special characters in tags applied by Elementor Forms being synced as HTML entities
- 🔧 Fixed Fixed `Undefined variable $apply_tags` with some CRMs since 3.42.6
- 🔧 Fixed Fixed `Undefined variable $available_tags` with MailPoet integration when loading a subscriber's lists
- 🛠️ Dev changed the `remote_field` and `remote_type` custom field properties introduced in 3.42.5 to `crm_field` and `crm_type` for consistency (is backwards compatible)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-7) 3.42.7 - 1/17/2024

- 🔧 Fixed Fixed integrations with a missing documentation URL getting disabled when the main settings page was saved, since 3.42.6
- 🔧 Fixed Fixed additional undefined array key warnings in the Gravity Forms integration when editing a form feed
- 🛠️ Dev extended the ActiveCampaign API timeout to 20 seconds for loading, applying and removing tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-6) 3.42.6 - 1/15/2024

- ✨ New Added support for the Paid Memberships Pro [Gift Membership Addon](https://wpfusion.com/documentation/membership/paid-memberships-pro/#gift-memberships)
- ✨ New Added an [order status column](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#order-status-column) to the Easy Digital Downloads orders table
- ✨ New Added Apply Tags - Resumed setting to the [MemberPress integration](https://wpfusion.com/documentation/membership/memberpress/#tagging)
- ✨ New Added support for lists with FluentCRM (REST API)
- ✨ New Added Created At field for sync with Customer.io
- ✨ New Added Fatal Error Notify promotional banner to the bottom of the logs page
- Tested for Paid Memberships Pro 3.0
- Tested for FunnelKit Builder 3.0
- ⚡️ Improved If a WooCommerce order is refunded, and the parent subscription is still active, no tags will be removed
- ⚡️ Improved Admin notices from other plugins will be hidden on the logs page
- ⚡️ Improved Individual plugin integrations can now be disabled from the Integrations tab in the settings
- 🔧 Fixed Fixed tags created in FluentCRM (REST API) via WP Fusion being stored as tag IDs and not slugs
- 🔧 Fixed Fixed (for real this time) `update` and `update_tags` webhook endpoints not working with FluentCRM (REST API) 2.8.3+
- 🔧 Fixed Fixed PHP warning when editing a Formidable Forms action and a previously mapped field was deleted
- 🔧 Fixed Fixed menu item restriction not working on the BuddyPress / BuddyBoss profile and account pages
- 🔧 Fixed Fixed Customer.io integration not syncing dates as Unix timestamps

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-5) 3.42.5 - 1/8/2024

- ✨ New Added support for [double opt-ins with Brevo](https://wpfusion.com/documentation/tutorials/double-opt-ins/#brevo)
- ✨ New Added support for [setting a default opt-in status with Groundhogg](https://wpfusion.com/documentation/tutorials/double-opt-ins/#groundhogg) (REST API)
- ✨ New Added support for using Data Driven Segments for content restriction with Customer.io
- ✨ New Added support for saving the field type for each remote field in the CRM. Improves data format conversion (currently just Brevo)
- 🔧 Fixed Fixed `update` and `update_tags` webhook endpoints not working with FluentCRM (REST API) 2.8.3+
- 🔧 Fixed Fixed Ninja Forms integration not showing as loaded on the Integrations tab in the settings
- 🔧 Fixed Fixed Data Driven Segments being loaded as _Unknown Tag_ with Customer.io
- 🔧 Fixed Fixed excerpts being removed from restricted content when accessed over the REST API since 3.42.3
- 🔧 Fixed Fixed undefined array key warnings in the Gravity Forms integration when editing a form feed
- 🛠️ Dev removed an `array_filter()` from the `WPF_User::get_user_meta()` function (was preventing exporting empty values to the CRM)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-4) 3.42.4 - 1/4/2024

- 🔧 Fixed Fixed Elementor Forms text fields being treated as dates since 3.42.3
- 🔧 Fixed Fixed "Order Refunded" tags on WooCommerce products not being applied when orders were fully refunded
- 🔧 Fixed Fixed `WPF_User::get_users_with_contact_ids` incorrectly showing up as custom code in the Status panel of the settings

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-3) 3.42.3 - 1/2/2024

- ⚡️ Improved With BuddyBoss, the forums archive can now be protected by editing the Forums page, rather then via the WP Fusion Integrations settings (prior settings copy over automatically)
- ⚡️ Improved With Brevo, select and multiselect fields will now automatically be synced to their numeric values required by the Brevo API (requires a one-time Refresh Available Tags and Fields via the settings)
- ⚡️ Improved automatic date format detection with Elementor Forms submission will ignore dates prior to 100 years ago (fixes some weird issues with strings like 7015f0000006jqgAAA being treated as 2,000 BC)
- 🔧 Fixed Fixed the BuddyPress / BuddyBoss user profile page being protected if the forums archive was protected
- 🔧 Fixed Fixed Customer.io integration updating the `created_at` parameter for logged in users on each page load, when site tracking was active
- 🔧 Fixed Fixed Customer.io integration not supporting multi-key event tracking

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-2) 3.42.2 - 12/27/2023

- ✨ New Added a Customer.io CRM integration
- ✨ New Added a [SureMembers integration](https://wpfusion.com/documentation/membership/suremembers/)
- ✨ New Added support for [using an API key with HighLevel](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/#overview) instead of OAuth
- ⚡️ Improved Post content restricted by WP Fusion will no longer be accessible over the REST API to unauthorized users
- ⚡️ Improved If a redirect is set on a restricted LearnDash lesson or topic, and Lock Lessons is enabled, the lesson will now be clickable (so the user can be redirected)
- 🔧 Fixed Fixed myCred rank tags not being applied for alternate point types
- 🔧 Fixed Fixed custom fields not syncing with Jetpack CRM
- 🔧 Fixed Fixed fatal error trying to sync array/multiselect data to a text field in Jetpack CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-1) 3.42.1 - 12/18/2023

- ✨ New Added support for [EDD Cancellation Survey](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#cancellation-surveys)
- ✨ New Added an option to apply the current user's CRM tags [as CSS classes to the HTML `<body>` element](https://wpfusion.com/documentation/getting-started/access-control/#protecting-content-via-css)
- 🔧 Fixed Fixed bbPress user profiles inheriting access rules from the first post on the site
- 🔧 Fixed Fixed (changed the `class_exists()` order check for Advanced Shipment Tracking Pro to make sure it takes priority over WooCommerce Shipment Tracking
- 🔧 Fixed Fixed saving the WP Fusion settings page after an OAuth token had been refreshed causing the old token to get saved, and breaking the connection
- 🔧 Fixed Fixed PHP warning `foreach() argument must be of type array|object, bool given` after deleting all taxonomy-based access rules
- 🔧 Fixed Fixed PHP notices on WishList Member settings page
- 🔧 Fixed Fixed fatal error tracking events with FluentCRM when the FluentCRM - Events plugin was deactivated after events had been configured

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-42-0) 3.42.0 - 12/11/2023

- ✨ New Added an integration with [Forminator forms](https://wpfusion.com/documentation/lead-generation/forminator/)
- ✨ New Added an integration with [WP Software License for WooCommerce](https://wpfusion.com/documentation/ecommerce/wp-software-license/)
- ✨ New Added support for [linked tags with Gamipress ranks](https://wpfusion.com/documentation/gamification/gamipress/#ranks)
- ✨ New Added compatibility with Advanced Shipment Tracking Pro (fork of [WooCommerce Shipment Tracking](https://wpfusion.com/documentation/ecommerce/woocommerce-shipment-tracking/))
- ⚡️ Improved With [Fluent Forms](https://wpfusion.com/documentation/lead-generation/fluent-forms/) and [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/), if the lead source cookies are set, the form will no longer be processed asynchronously (to avoid losing the lead source data)
- ⚡️ Improved With Gifting for WooCommerce Subscriptions, if Remove Tags from Customer is checked, they will no longer be removed from the customer if the customer has a separate subscription to the same product
- ⚡️ Improved If staging mode is enabled via wp-config.php (`WPF_STAGING_MODE`) the "It looks like this site has moved or is a duplicate" notice will not be displayed
- ⚡️ Improved Extended the timeout with ActiveCampaign to 15 seconds
- 🔧 Fixed Fixed users who registered without a first name getting their first name synced to the CRM as their username
- 🔧 Fixed Fixed resync tags and pull user meta batch operations not working since 3.41.48
- 🔧 Fixed Fixed [Filter Course Steps with LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps) not working with lesson / topic pagination in the course navigation
- 🔧 Fixed Fixed `wpf_get_user_id( $contact_id )` returning the IDs of temporary auto-login users

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-48) 3.41.48 - 12/5/2023

- ✨ New Added Memberships for Teams Team ID field for sync with WooCommerce Memberships for Teams
- 🔧 Fixed Fixed new pending orders added via the WooCommerce admin not being synced to the CRM despite being registered on the `woocommerce_order_status_pending` hook
- 🔧 Fixed Fixed fatal error calling `wpf_get_tag_id()` before WP Fusion had been connected to a CRM
- 🔧 Fixed Fixed PHP error `Parse error: syntax error, unexpected ')'` when gathering the user metadata for a user in PHP < 7.3
- 🔧 Fixed Fixed `Uncaught TypeError: round(): Argument #1 ($num) must be of type int|float, string given` when calculating GiveWP total donor value with PHP 8.1
- 🔧 Fixed Fixed upgrade message in Lite plugin blocking contact fields when WooCommerce and BuddyPress weren't active
- 🔧 Fixed Fixed WP Fusion attempting to sync Give donors with missing email addresses
- 🔧 Fixed Fixed `wpf_get_setting_enable_queue` showing up under the Custom Code list on the Advanced tab in the settings, with Groundhogg and FluentCRM (same site)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-47) 3.41.47 - 11/27/2023

- 🔧 Fixed Fixed `Uncaught Error: Call to undefined function is_user_logged_in()` on some hosts since 3.41.46

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-46) 3.41.46 - 11/27/2023

- ✨ New Added an integration with [WP User Manager](https://wpfusion.com/documentation/membership/wp-user-manager/)
- ✨ New Added contextual tooltips to some fields in the Contact Fields tab of the WP Fusion settings
- ✨ New Added a Membership Status field for sync with MemberPress
- ✨ New Added Required Tags (not) setting to Divi integration (thanks Ted!)
- ⚡️ Improved The MemberPress Subscription Status field will now be synced any time a subscription status changes, instead of just when it changes to active
- ⚡️ Improved If a user registers with a missing `first_name` and `last_name` but their `display_name` is set, the Display Name will be used for the first and last names
- ⚡️ Improved If you try to sync multiselect or array-formatted data to a text field in HighLevel, WP Fusion will automatically combine the items to prevent an API error
- ⚡️ Improved If you add `define( 'WPF_STAGING_MODE', false );` to wp-config.php, this will disable [automatic staging site detection](https://wpfusion.com/documentation/faq/staging-sites/#automatic-staging-site-detection)
- ⚡️ Improved Improved performance with checking permissions on a post based on access rules configured on a taxonomy term
- 🔧 Fixed Fixed MemberPress transaction expiration dates not syncing when manually edited on the transaction page
- 🔧 Fixed Fixed `apply_tags` parameter in ThriveCart success URL not working for existing users
- 🔧 Fixed Fixed first and last name not being synced for new SureCart customers
- 🔧 Fixed Fixed `PHP Warning:  Undefined array key` when configuring a Remove Tags action on a SureCart product
- 🔧 Fixed Fixed a fatal error `Cannot access offset of type string on string` when updating an ActiveCampaign contact's email to the address of an already existing contact

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-45) 3.41.45 - 11/20/2023

- ✨ New Added support for [Event Tracking with FluentCRM](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/) (REST API and same site)
- ✨ New Added support for [webhooks in Mailchimp journeys](https://wpfusion.com/documentation/webhooks/mailchimp-webhooks/#webhooks-in-journeys)
- ✨ New Added support for syncing multi-part fields (like Name and Address) with Formidable Forms
- ✨ New Added support for the Gravity Perks Product Configurator addon
- ⚡️ Improved Give donation forms will now default to being enabled for sync, unless the form is specifically set to Disabled
- ⚡️ Improved When creating a Salesforce contact, lead, or other object, any missing required fields will be set to `-` to prevent an API error
- ⚡️ Improved The inline scripts to handle conditional logic on Gravity Forms form fields will now only be loaded if the form uses [WP Fusion's conditional logic](https://wpfusion.com/documentation/lead-generation/gravity-forms/#form-field-conditional-logic) (thanks @karlemilnikka)
- 🔧 Fixed Fixed custom fields not syncing with WP Event Manager since WPEM Registrations v1.6.18
- 🔧 Fixed Fixed PHP notices in the Simply Schedule Appointments integration
- 🔧 Fixed Fixed import tool not loading more than 1000 contacts with Mailchimp

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-44) 3.41.44 - 11/13/2023

- ✨ New Added a status metabox to FooEvents tickets showing the contact ID, with a link to re-sync the ticket to the CRM
- ✨ New Added support for syncing to date + time fields with FluentCRM (same site and REST API)
- ⚡️ Improved You can now use "less" and "greater" instead of < and > in the `user_meta_if` shortcode attributes
- ⚡️ Improved Split MemberPress "Order Total" field into "Subscription Total" and "Transaction Total"
- 🔧 Fixed Fixed WP Event Manager integration not loading since WPEM Registrations v1.6.18
- 🔧 Fixed Fixed an empty Phone and/or Company field on the FooEvents attendee form erasing the Phone and Company provided in the billing information
- 🔧 Fixed Fixed tags not being applied on LearnDash quiz pass or fail since v3.41.35
- 🔧 Fixed Fixed a fatal error `Call to a member function get_tags() on null` following a Gridpane magic login link when Login Tags Sync was enabled
- 🛠️ Dev All ConvertKit API calls will now be signed with WP Fusion's `integration_key`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-43) 3.41.43 - 11/6/2023

- ✨ New Added setting Link with Tag - Affiliate Activation to the [Solid Affiliate integration](https://wpfusion.com/documentation/affiliates/solid-affiliate/)
- ✨ New Added Order Total, Transaction Status, and Subscription Status fields [for sync with MemberPress](https://wpfusion.com/documentation/membership/memberpress/#additional-memberpress-fields)
- ✨ New Added View in CRM links with Klaviyo
- ⚡️ Improved The Last Course Progressed field with LearnDash will now be cached and only synced when it changes (rather than every time a course step is completed)
- ⚡️ Improved With ActiveCampaign, if a duplicate record error is encountered while adding a contact, WP Fusion will attempt to look up the contact by email address and update the contact instead
- ⚡️ Improved With Klaviyo, if a duplicate record error is encountered while adding a contact, WP Fusion will instead update the existing contact rather than throwing an error
- 🔧 Fixed Fixed dates synced to ActiveCampaign not respecting the account date format since 3.41.36
- 🔧 Fixed Fixed PHP warning `Undefined variable $did_it` when unenrolling a user from a MemberPress membership using a linked tag
- 🔧 Fixed Fixed broken link to Enable Month View Cache setting in the Tribe Events integration
- 🔧 Fixed Fixed error with Brevo `Error while applying lists: listIds should be type array` when applying lists and a user already had one or more of those lists
- 🔧 Fixed Fixed PHP warning saving AffiliateWP affiliates on AffiliateWP versions below 2.13.0
- 🔧 Fixed Fixed a fatal error resetting the WP Fusion settings with ActiveCampaign after enabling Deep Data (`Call to method get_connection_id() on non object`)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-42) 3.41.42 - 10/30/2023

- ✨ New Added options for applying tags to AffiliateWP affiliates [based on status](https://wpfusion.com/documentation/affiliates/affiliate-wp/#applying-tags)
- ✨ New Added option to auto-activate and deactivate AffiliateWP affiliates using a linked tag
- ✨ New Added `awp_affiliate_status` field for sync with AffiliateWP
- 🔧 Fixed Fixed - With WooCommerce Subscribe All the Things, the tags for "Apply tags when subscribed" will no longer be applied when the product is configured as a "One-off subscription"
- 🔧 Fixed Fixed auto-login links not working with FluentCRM (REST API) since 3.41.19
- 🔧 Fixed Fixed deprecated JavaScript console messages
- 🔧 Fixed Fixed Pipedrive error "Name must be given" when updating a contact and the name field was not present
- 🔧 Fixed Fixed an infinite loop on login with the SUMO Subscriptions plugin
- 🛠️ Dev You can now return `0` from the \[\]`wpf_get_user_id` filter\]( [https://wpfusion.com/documentation/filters/wpf\_get\_user\_id\_filter/](https://wpfusion.com/documentation/filters/wpf_get_user_id_filter/)) to prevent WP Fusion from looking up a user ID based on contact ID
- 🛠️ Dev The `wpf_get_user_id` filter will now only run before the database query, instead of both before and after

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-41) 3.41.41 - 10/23/2023

- ✨ New Added a [GeoDirectory integration](https://wpfusion.com/documentation/other/geodirectory/)
- ✨ New Added support for syncing optin statuses with Infusionsoft and Keap
- ✨ New Added WhatsApp field for sync with Brevo
- ✨ New Added a FooEvents Tickets batch operation
- 🔧 Fixed Fixed + getting prepended to WhatsApp numbers with Brevo and causing sync errors
- 🔧 Fixed Fixed inverted timezone offset for syncing date fields with HubSpot
- 🔧 Fixed Fixed LearnDash course field mappings (still) not properly saving since 3.41.36
- 🔧 Fixed Fixed error `date(): Argument #2 ($timestamp) must be of type ?int, string given` with PHP 8+ and Brevo when syncing date fields
- 🔧 Fixed Fixed a fatal error `Call to a member function get_tags() on null` following a Gridpane magic login link when Login Tags Sync was enabled
- 🛠️ Dev When processing a WooCommerce subscription again via the admin sidebar, the `wpf_woocommerce_product_subscription_active` and `wpf_woocommerce_product_subscription_inactive` hooks will now fire, so addons (like WCS Gifting) are triggered

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-40) 3.41.40 - 10/18/2023

- ⚡️ Improved If "Enable Admin Bar" is un-checked in the settings, the WP Fusion admin bar item to refresh tags will also be hidden in the admin
- 🔧 Fixed Fixed FooEvents integration not applying tags to event attendees with the same email address as the WooCommerce customer since 3.41.39
- 🔧 Fixed Fixed `ld_last_course_progressed` field not syncing when it was only enabled globally and not on specific LearnDash course
- 🔧 Fixed Fixed tags not being applied for variable EDD downloads with a price ID of 0
- 🛠️ Dev You can now return `0` from the \[\]`wpf_get_user_id` filter\]( [https://wpfusion.com/documentation/filters/wpf\_get\_user\_id\_filter/](https://wpfusion.com/documentation/filters/wpf_get_user_id_filter/)) to prevent WP Fusion from looking up a user ID based on contact ID
- 🛠️ Dev The `wpf_get_user_id` filter will now only run before the database query, instead of both before and after

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-39) 3.41.39 - 10/16/2023

- ✨ New Added a [FluentBooking integration](https://wpfusion.com/documentation/events/fluentbooking/)
- ⚡️ Improved Added a notice in the logs when a FooEvents checkout creates a processing order, but FooEvents is configured to only create tickets for Completed orders
- 🔧 Fixed Fixed Test Connection button not working with Mailchimp during initial setup since 3.41.19
- 🔧 Fixed Fixed custom attendee fields not syncing with FooEvents since 3.41.36
- 🔧 Fixed Fixed WooCommerce Subscriptions Trial End Date field being synced as 0 for subscriptions with no trial period
- 🔧 Fixed Fixed fatal error loading meta from ActiveCampaign when two fields in a row were in the multiselect format, since 3.41.36
- 🔧 Fixed Fixed shortcode attributes added to the block editor getting saved with curly quotes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-38) 3.41.38 - 10/11/2023

- 🔧 Fixed Fixed LearnDash course progress field mappings not saving since 3.41.36
- 🛠️ Dev Moved WooCommerce refund actions to the `woocommerce_order_fully_refunded` hook for compatibility with the [WooCommerce Subscriptions - Cancel on Refund extension](https://github.com/woocommerce/woocommerce-subscriptions-cancel-on-refund)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-37) 3.41.37 - 10/10/2023

- ⚡️ Improved The WooCommerce order notes will now indicate when an order was manually re-processed by an admin
- 🔧 Fixed Fixed LearnDash quiz score field mappings not saving since 3.41.36

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-36) 3.41.36 - 10/9/2023

- ✨ New Added support for [LearnDash quiz question categories](https://wpfusion.com/documentation/learning-management/learndash/#quizzes)
- ✨ New Added support for [event check-ins with FooEvents](https://wpfusion.com/documentation/events/fooevents/#event-check-ins)
- ✨ New Added a [Parent and Student Access for LearnDash integration](https://wpfusion.com/documentation/faq/changelog/3)
- ✨ New Added an integration [with Formidable Forms payments](https://wpfusion.com/documentation/lead-generation/formidable-forms/#payments) (trigger WP Fusion actions based on payment status)
- ✨ New Added support for checkbox fields with Salesforce
- ⚡️ Improved Tickets imported with the FooEvents importer will now sync to the CRM
- ⚡️ Improved FooEvents attendees will now be synced when tickets are created or updated, instead of based on the WooCommerce order
- ⚡️ Improved Updated the `add`, `update`, and `load` contact methods with ActiveCampaign to use the new v3 API (should be faster)
- 🔧 Fixed Fixed missing Reset Deep Data checkbox on the advanced tab (with ActiveCampaign)
- 🔧 Fixed Fixed `wpf_get_user_id()` picking up the temporary IDs of auto-login users instead of users' actual IDs
- 🛠️ Dev the `wp_fusion_init` hook has been moved from `init` priority `0` to priority `6` so that `wp_fusion()->crm->init()` has finished

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-35) 3.41.35 - 10/4/2023

- 🔧 Fixed Fixed `wpf_get_user_id()` function returning an empty result since 3.41.33
- 🔧 Fixed Fixed fatal error clicking Process WP Fusion Actions Again on a single WooCommerce subscription since 3.41.33
- 🔧 Fixed Fixed WPForms integration syncing date fields as text instead of dates
- 🔧 Fixed Fixed contact ID lookup with Constant Contact failing for deleted contacts

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-34) 3.41.34 - 10/2/2023

- 🔧 Fixed Fixed fatal error loading WooCommerce Subscriptions subscription status meta box on stores not using HPOS since 3.41.33

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-33) 3.41.33 - 10/2/2023

- Re-added support for syncing empty dates with HighLevel (bug was fixed on their end)
- ⚡️ Improved Improved settings layout on Paid Memberships Pro membership levels
- ⚡️ Improved Adding logging to Groundhogg, FluentCRM, and FunnelKit when the API request is being blocked by a CloudFlare challenge page
- ⚡️ Improved Improved performance when looking up a user ID from a contact ID
- ⚡️ Improved Improved peformance for the LearnDash Course Progress Meta batch operation
- ⚡️ Improved Improved FluentCRM (REST API) error logging
- ⚡️ Improved Improved logging for invalid contact IDs or email addresses being used to start an auto-login session
- ⚡️ Improved If an Elementor form with a WP Fusion action is submitted and no email address field is mapped with the CRM, the first email field on the form will be used as a fallback
- ⚡️ Improved Improved Constant Contact error handling
- 🔧 Fixed Fixed API error with Constant Contact when applying tags and the user already had one of those tags
- 🔧 Fixed Fixed access denied redirects not working on individual LearnDash lessons
- 🔧 Fixed Fixed LearnDash Course Progress Meta batch operation not syncing data for courses the user was not currently enrolled in
- 🔧 Fixed Fixed WP Fusion status metabox missing on WooCommerce Subscriptions 5.0+
- 🔧 Fixed Fixed Gravity Forms Entry Date field being synced as text not a date
- 🔧 Fixed Fixed a bug with HubSpot, MailerLite, and HubSpot whereby auto-login links were not being properly detected on the initial page load (only on the second page load)
- 🔧 Fixed Fixed Paid Memberships Pro membership level fields not being synced to the CRM when the user was auto-enrolled into the membership via a linked tag
- 🔧 Fixed Fixed form feeds with no fields mapped sending an empty payload to the CRM for logged-in users

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-32) 3.41.32 - 9/26/2023

- 🔧 Fixed Fixed tags not loading with ConvertKit since 3.41.31

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-31) 3.41.31 - 9/25/2023

- ✨ New Added "Hide checkbox if consented" setting with [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins) and [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#email-optins): if the customer has previously consented to marketing, the email optin box can be hidden
- ⚡️ Improved Improved performance for syncing LearnDash course progress with the CRM
- ⚡️ Improved The "Admin Permissions" option (only users with `manage_options` can access the WP Fusion settings) will now also apply to the WooCommerce product panel
- ⚡️ Improved With Brevo, the keys `name` and `id` will now show as reserved and can't be used for event tracking
- 🔧 Fixed Fixed fatal error accessing settings page when using AffiliateWP versions below 2.13.0
- 🔧 Fixed Fixed linked tags not auto-enrolling users into AffiliateWP groups
- 🔧 Fixed Fixed typo in FooEvents SKU field, was `skuu` and is now corrected to `sku`
- 🔧 Fixed Fixed fatal error syncing Event Espresso attendees to the CRM when registrations were tied to a deleted event
- 🔧 Fixed Fixed new tags added to ConvertKit creating a fatal error when they were loaded onto a WordPress user since 3.41.16
- 🔧 Fixed Fixed warning `FLUENTCRM_SKIP_TAG_SYNC already defined` when applying tags since 3.41.29, with FluentCRM (same site)
- 🛠️ Dev Developers - Email optin consent checkboxes with WooCommerce and Easy Digital Downloads will now be saved as a timestamp instead of `true`
- 🛠️ Dev Developers - Deprecated filter `learndash_settings_fields_wpf` in favor of `learndash_course_settings_fields_wpf` and `learndash_quiz_settings_fields_wpf`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-30) 3.41.30 - 9/18/2023

- 🔧 Fixed Fixed modified tags adding the user as an AffiliateWP affiliate since 3.41.29

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-29) 3.41.29 - 9/18/2023

- ✨ New Added [order status tagging with Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#order-statuses)
- ✨ New Added Link with Tag setting for AffiliateWP groups
- ✨ New Added Link with Tag setting for Solid Affiliate groups
- ✨ New Added Event SKU field for sync with FooEvents
- ⚡️ Improved Added logging when tags are removed from a user due to switching out of a MemberPress membership level on which Remove Tags was checked
- ⚡️ Improved The HighLevel integration will now also attempt to refresh the access token when it encounters a 401 response
- ⚡️ Improved Improved tags select UI when using the block editor— now supports typing in new tags, tag groups, refreshing tags via an API call, and creating tags via an API call
- 🔧 Fixed Fixed product tags not being applied with FunnelKit when an upsell product was added to the order after the order had been completed by the Forcefully Switch Order Status feature
- 🔧 Fixed Fixed Jan 1st 1970 being synced to the CRM for courses where a user was not enrolled or had free access when running a LearnDash progress meta batch operation
- 🔧 Fixed Fixed Event Espresso registration status changes not being synced to the CRM for registered users (was working for guests)
- 🔧 Fixed Fixed Blockli Streamer integration not detecting the current user to apply tags to
- 🔧 Fixed Fixed accepted WooFunnels upsells no longer triggering Enhanced Ecommerce
- 🔧 Fixed Fixed multi-key/value events accidentally enabled for Groundhogg (REST API)
- 🔧 Fixed Fixed tags applied in FluentCRM (Same site) being immediately synced back to WP Fusion
- 🔧 Fixed Fixed tags applied by FluentCRM automations that were triggered by tags applied by WP Fusion not being synced back
- 🔧 Fixed Fixed fatal error `Argument #1 must be of type array` in PHP 8.1 when a form submission did not apply any tags
- 🛠️ Dev added filter `wpf_hubspot_redirect_uri`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-28) 3.41.28 - 9/11/2023

- ✨ New Added a [Blockli Streamer integration](https://wpfusion.com/documentation/membership/blockli-streamer/)
- ⚡️ Improved If custom fields are enabled for sync with Event Espresso, the custom fields from the primary registrant will be synced to any attendees who didn't specify custom fields
- ⚡️ Improved When activating a Profile Builder account via activation link, WP Fusion will now wait until the `wppb_activate_user` hook (instead of `user_register`) to ensure any custom field data has been saved
- 🔧 Fixed Fixed un-mapped Elementor form fields being synced with empty keys and causing validation errors with Keap / Infusionsoft
- 🔧 Fixed Fixed WooFunnels offer accepted tags not being applied for guest checkouts with the most recent WooFunnels update
- 🔧 Fixed Fixed Event Espresso Registration Status field not being synced to the CRM when a registration status was changed in the admin
- 🔧 Fixed Fixed an issue with activating Profile Builder accounts via activation link and W3 Total Cache: the user cache will now be cleared before syncing data to the CRM
- 🔧 Fixed Fixed Ultimate Member radio fields being synced as single-item arrays instead of strings
- 🔧 Fixed Fixed PHP warning `Undefined property: stdClass::$tags` when loading an ActiveCampaign contact who had no tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-27) 3.41.27 - 9/5/2023

- ✨ New Added Source, Time Zone, and Company Name fields for sync with HighLevel
- ⚡️ Improved If billing information is enabled for sync with Event Espresso, the billing info from the primary registrant will be synced to any attendees who didn't specify an address
- ⚡️ Improved New custom field created in Groundhogg (same site) will now appear immediately in WP Fusion (no Resync Fields required)
- ⚡️ Improved Event Espresso registrations which aren't synced because they aren't the primary attendee on the transaction will now be flagged `wpf_complete` so they no longer show up in the batch export
- 🔧 Fixed Fixed unhandled error when looking up a contact by email address failed during a guest checkout or registration
- 🔧 Fixed Fixed fatal error syncing array-formatted data with WS Form on PHP 8.1+
- 🔧 Fixed Fixed date fields configured for sync on individual EDD recurring downloads being set to `text` format by default instead of `date`
- 🔧 Fixed Fixed duplicate Phone Number field in HighLevel integration
- 🔧 Fixed Fixed not being able to manually test Salesforce webhooks by appending `&contact_id=` to the webhook URL
- 🔧 Fixed Fixed SureCart integration not saving tags with spaces or special characters in them on the product configuration
- 🔧 Fixed Fixed auto login not working with Mailchimp since 3.41.19

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-26) 3.41.26 - 8/23/2023

- ⚡️ Improved Updated to support the new FunnelKit Automations REST API namespace (`autonami-app` instead of `autonami-admin`)
- ⚡️ Improved The "Enable API Queue" setting will be hidden when connected to Groundhogg (Same site), as it's unnecessary when not sending API calls
- ⚡️ Improved Improved logging when attempting to add a contact to the CRM and no fields are enabled for sync
- 🔧 Fixed Fixed tag search not working with SureCart
- 🔧 Fixed Fixed User Created benchmark not being triggered when WP Fusion created a contact from a WordPress user with Groundhogg (same site)
- 🔧 Fixed Fixed Email not enabled for sync by default when using the Staging CRM
- 🔧 Fixed Fixed tagging not working when connected to the Staging CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-25) 3.41.25 - 8/14/2023

- ✨ New Added option to [use a multi-select instead of static lists with HubSpot](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/#using-a-multiselect-for-segmentation)
- ✨ New Added support for tagging based on [offline donations with GiveWP](https://wpfusion.com/documentation/ecommerce/give/#offline-donations)
- ✨ New Added `order_id` field for sync to the FooEvents attendee data
- 🔧 Fixed Fixed Elementor Forms field mapping not showing when no tags were specified, since 3.41.24
- 🔧 Fixed Fixed protected menu items not being hidden in BuddyBoss / BuddyPress groups
- 🔧 Fixed Fixed tags not applying via AJAX for auto-login users since 3.41.22
- 🔧 Fixed Fixed `Invalid argument supplied for foreach()` warning when updating a user's profile via Fluent Forms and BuddyPress was active but no XProfile fields existed
- 🛠️ Dev added optional `remove_tags` parameter to `WPF_Forms_Helper::process_form_data()` args

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-24) 3.41.24 - 8/7/2023

- ⚡️ Improved Refactored Elementor Forms integration. Now easier to use and better performance in the admin
- 🔧 Fixed Fixed bug in HighLevel error handling, errors with a `meta` parameter were triggering a fatal error when logged
- 🔧 Fixed Fixed empty dates synced to HighLevel getting converted to 1-1-1970
- 🔧 Fixed Fixed empty dates synced to ActiveCampaign causing an error
- Misc. HighLevel bugfixes
- ✨ New Added function `wpf_validate_phone_number()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-23) 3.41.23 - 7/31/2023

- ✨ New Added support for [multi-value lookup fields with Dynamics 365](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/#multi-value-lookup-fields)
- ✨ New Added option to sync with Cases instead of Contacts with Dynamics 365
- ✨ New Added WP Fusion status column and filters [to the MemberPress transactions list](https://wpfusion.com/documentation/membership/memberpress/#transaction-management)
- ✨ New Added WP Fusion status section to the MemberPress single transaction page
- ⚡️ Improved With WordPress 6.3+ the [Bento tracking script](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#bento) will now be loaded `async` by default
- ⚡️ Improved The View in CRM links in the logs and elsewhere now work when using custom object types (with CRMs that support custom object types)
- ⚡️ Improved The Bento tracking script will now wait for the `bento:ready` event
- 🔧 Fixed Fixed warning `Attempt to read subscription_id on bool` when loading the Paid Memberships Pro start date or expiration date for a user who doesn't have any memberships
- 🔧 Fixed Fixed event tracking not sending the value (i.e. `details`) to Brevo
- 🔧 Fixed Fixed MailerLite (Classic) integration giving an Unauthorized error when applying groups via a batch operation
- 🔧 Fixed Fixed FluentCRM (same site) processing tags modified by automations before tags edited on the subscriber record, causing the WP user's tag cache to lose the tags applied by the automation

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-22) 3.41.22 - 7/24/2023

- ⚡️ Improved Contacts synced to Ontraport with `bulk_sms` set to no will also be synced with `force_sms_opt_out` set to true, to ensure they are opted out of bulk SMS
- 🔧 Fixed Fixed empty dates syncing to ConvertKit as 1/1/1970
- 🔧 Fixed Fixed ConvertKit integration removing times from date + time fields
- 🔧 Fixed Fixed the Give donation count and total donated not updating when a recurring donation payment was received
- 🔧 Fixed Fixed MailerLite API URL not accessible via `wp_fusion()->crm->api_url` until after the `init` hook, since 3.41.19
- 🛠️ Dev Removed `_nopriv` endpoint for applying and removing tags, increases security (and didn't work for logged out users anyway)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-21) 3.41.21 - 7/18/2023

- ⚡️ Improved The AJAX endpoint for applying tags can now accept form-encoded or JSON encoded data
- ⚡️ Improved If a MemberPress subscription is cancelled, Remove Tags is checked, and the user still has another active subscription to a membership that applies the same tags, [those tags will not be removed](https://wpfusion.com/documentation/membership/memberpress/#concurrent-subscriptions)
- ⚡️ Improved Improved support for detecting email address changes from non-supported plugins (i.e. JetEngine Forms)
- 🔧 Fixed Fixed Klaviyo integration not loading more than ten lists
- 🔧 Fixed Fixed - Calling `sfwd_lms_has_access()` inside the `wpf_user_can_access` filter created an infinite loop since LearnDash 4.7.0
- 🔧 Fixed Fixed warning `Invalid argument supplied for foreach()` when updating a user's profile via Fluent Forms and BuddyPress was active but no XProfile fields existed
- 🔧 Fixed Fixed Filter Queries - Advanced not working with Search & Filter Pro (changed priority from 10 to 100)
- 🛠️ Dev added filter `wpf_dynamics_365_lookup_field`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-20) 3.41.20 - 7/11/2023

- 🔧 Fixed Fixed fatal error `Uncaught TypeError: method_exists(): Argument #1 ($object_or_class) must be of type object|string` when first installing WP Fusion, since 3.41.19

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-19) 3.41.19 - 7/11/2023

- ✨ New Added option with Dynamics 365 to sync with Leads instead of Contacts
- ✨ New Added support for setting the `bulk_mail` and `bulk_sms` fields to Transactional Only with Ontraport
- ⚡️ Improved The Defer Until Activation setting with WP Members now also works when a user confirms their email address
- ⚡️ Improved the WP Fusion section on the admin user profile will now require the `edit_users` capability instead of `manage_options`
- ⚡️ Improved Activating or deactivating a license key will reset license update check lock
- ⚡️ Improved The GetResponse integration can now trigger autoresponders when a contact is added to a list
- ⚡️ Improved The GetResponse integration can now remove tags
- ⚡️ Improved Improved HighLevel error reporting for duplicate contact errors
- 🔧 Fixed Fixed Formidable Forms integration not syncing `0` value fields
- 🔧 Fixed Fixed `user_can_access()` against a specific user ID always returning true if the current user is an admin and Exclude Administrators is checked, since 3.41.18
- 🔧 Fixed Fixed dynamic lists showing as options for import with Dynamics 365
- 🛠️ Dev CRMs with an `init()` method will now run on the `init` action at priority 5, instead of `plugins_loaded`. This makes it easier for custom code added to the theme's `functions.php` to modify CRM parameters such as the API URL or object type

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-18) 3.41.18 - 7/3/2023

- ⚡️ Improved Moved EDD email optin checkbox to the bottom of the checkout form, instead of the Personal Details section
- ⚡️ Improved Fluent Forms integration module will now be set to enabled by default in the Fluent Forms general settings
- ⚡️ Improved With WooCommerce Memberships, if a user's membership plan is deleted, and Remove Tags is checked on the plan settings, the Active Member tags will be removed
- Updated Fluent Forms user registration hook from `fluentform_user_registration_completed` to `fluentform/user_registration_completed`
- 🔧 Fixed Fixed inaccurate group counts and pagination when hiding BuddyPress / BuddyBoss groups using the Filter Queries setting
- 🔧 Fixed Fixed first API call after refreshing a HighLevel access token being treated as an error
- 🔧 Fixed Fixed error "Can only be array or string." when removing tags with HighLevel since 3.41.14
- 🔧 Fixed Fixed Constant Contact integration not loading more than 50 tags
- 🔧 Fixed Fixed a fatal error trying to access the CRM PHP API before it was loaded
- 🔧 Fixed Fixed Expiration Date field with MemberPress syncing the date of the next scheduled subscription payment instead of the date of the end of the trial, when using free trials
- 🔧 Fixed Fixed a fatal error calling `wp_fusion()->user->push_user_meta()` on an invalid user ID
- 🔧 Fixed Fixed - the `wpf_admin_override` filter did not apply to the core `user_can_access()` function

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-17) 3.41.17 - 6/26/2023

- Tested for Fluent Forms v5.0
- Tested for LearnDash 4.7.0
- ⚡️ Improved Improved styling for locked LearnDash lessons and topics when using the BuddyBoss theme and the [Lock Lessons feature](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)
- ⚡️ Improved Improved HubSpot error handling
- 🔧 Fixed Fixed FunnelKit occasionally changing the IDs of tags when they were stored as numbers (tag IDs will now be passed to FunnelKit's UI as strings)
- 🔧 Fixed Fixed restricted BuddyBoss groups not being hidden in the BuddyBoss app when Filter Queries was enabled
- 🔧 Fixed Fixed PHP warnings in SureCart integration
- 🔧 Fixed Fixed PHP warning with BuddyPress groups and Filter Queries since 3.41.17

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-16) 3.41.16 - 6/19/2023

- ✨ New Added option to [subscribe ConvertKit subscribers to a form when applying tags](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/#re-subscribing-unsubscribed-subscribers)
- ✨ New Added option to [use a multi-select for segmentation with Zoho](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/) (instead of tags)
- ✨ New Added error logging for when a BuddyPress / BuddyBoss group auto-enrollment or un-enrollment fails
- ⚡️ Improved If a WooCommerce order status is changed from Pending to Cancelled due to non-payment, the refund actions will no longer run (they will only run when a paid order is cancelled)
- ⚡️ Improved MemberPress subscription status changes from Pending to Cancelled will now be ignored (fixes Cancelled tags being applied during failed initial payments)
- 🔧 Fixed Fixed filter queries not working with BuddyPress / BuddyBoss groups
- 🔧 Fixed Fixed fatal error `Uncaught TypeError: trim(): Argument #1 ($string) must be of type string` when loading empty multiselect fields into BuddyPress / BuddyBoss XProfile fields with PHP 8.1+
- 🔧 Fixed Fixed EDD email optin tags not applying for free download purchases
- 🔧 Fixed Fixed Zoho integration linking users with contact records who had a matching email address on Secondary Email or other email fields than the primary Email field

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-15) 3.41.15 - 6/12/2023

- ✨ New Added a [MemberPress Courses integration](https://wpfusion.com/documentation/membership/memberpress/#memberpress-courses)
- ✨ New Added a [UsersWP integration](https://wpfusion.com/documentation/membership/userswp/)
- ✨ New Added support for automatically embedding [the MailerLite tracking script](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#mailerlite)
- ⚡️ Improved Added a max-height and scrollbar on the tags list when setting up BuddyBoss member access controls
- 🔧 Fixed Fixed "Lock Lessons" setting not working with LearnDash and BuddyBoss theme in Focus Mode
- 🔧 Fixed Fixed "Exclude Administrators" setting not being respected for the site lockout feature
- 🔧 Fixed Fixed unhandled error refreshing access token with Constant Contact
- 🔧 Fixed Fixed Constant Contact refresh token expiring after two refreshes
- 🔧 Fixed Fixed read-only fields being synced back to Salesforce and causing API errors

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-14) 3.41.14 - 6/5/2023

- ⚡️ Improved With Dynamics 365, dynamic marketing lists will now show as Read Only in the WP Fusion UI, and won't be selectable for "Assign Lists"
- 🔧 Fixed Fixed - If a WooCommerce order item is only partially refunded, the tags applied at purchase will no longer be removed
- 🔧 Fixed Fixed View in CRM links in the logs not working correctly with Dynamics 365
- 🔧 Fixed Fixed Restrict Content Pro memberships batch operation only loading a single user
- 🔧 Fixed Fixed some user roles not auto-enrolling via linked tag into hidden BuddyPress / BuddyBoss groups
- 🔧 Fixed Fixed PHP warning `Undefined index "default"` when configuring BuddyBoss activity access controls
- 🔧 Fixed Fixed custom fields not loading with the v2 HighLevel API
- 🔧 Fixed Fixed custom fields not loading with Maropost
- Misc Maropost bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-13) 3.41.13 - 5/30/2023

- ✨ New Added a [Download Manager integration](https://wpfusion.com/documentation/other/download-manager/) for protecting downloadable files
- ✨ New Added a dotted line around widgets protected by WP Fusion access rules [in the Elementor editor](https://wpfusion.com/documentation/page-builders/elementor/#visibility-indicator)
- ✨ New Added Company field for sync with GiveWP
- ✨ New Added a warning when using the Event Espresso Advanced Editor (WP Fusion is currently only compatible with the legacy editor)
- ⚡️ Improved If an Ultimate Member checkbox field only has a single option, the default field format for WP Fusion will be set to `checkbox` instead of `multiselect`
- 🔧 Fixed Fixed groups not applying with the old MailerLite API since 3.41.11
- 🔧 Fixed Fixed user meta comparison NOT IN not working since 3.41.8
- 🔧 Fixed Fixed Ultimate Member checkbox fields not syncing at all if they were empty
- 🔧 Fixed Fixed warning `Undefined array key "remove_tags"` when processing a WooCommerce subscriptions renewal since 3.41.11

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-12) 3.41.12 - 5/24/2023

- ⚡️ Improved With WooCommerce, "Process order actions again" and the orders export tool will now handle refunded and cancelled orders and apply the tags for those statuses (instead of ignoring them)
- ⚡️ Improved If a post type or category/term is protected and configured with a redirect, any redirect on the underlying post will now take priority
- 🔧 Fixed Fixed background worker not working on sites protected by HTTP Basic Authentication
- 🔧 Fixed Fixed "Contact with email already exists" error when updating WordPress user profiles with FluentCRM (same site) since 3.41.11
- 🔧 Fixed Fixed Filter Course Steps only running on one `ld_course_steps` meta key per request since 3.41.11 (caused issues with LD sidebars containing multiple course outlines)
- 🔧 Fixed Fixed "Contact not found" being treated as an error with HighLevel integration since 3.41.11

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-11) 3.41.11 - 5/22/2023

- Updated HighLevel integration to use the 2.0 API (allows us to add Enhanced Ecommerce and UTM tracking)
- ✨ New Added "View in CRM" links to HighLevel
- ✨ New Added [course enrollment date and course enrollment expiry date fields](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) for sync with LearnDash
- ⚡️ Improved Improved API performance while applying groups with MailerLite
- ⚡️ Improved Brevo integration will now use numeric contact IDs instead of email addresses as unique identifiers (backwards compatible with users who are still linked via email)
- ⚡️ Improved Improved Maropost error handling
- ⚡️ Improved Improved error handling for failed access token refreshes with Constant Contact
- ⚡️ Improved Moved Gravity Forms conditional fields logic script to `GFFormDisplay::add_init_script()` (proper way to do it according to Gravity Forms and fixes some compatibility issues)
- ⚡️ Improved Exported logs will now include the error level string instead of numeric ID
- 🔧 Fixed Fixed email address changes via the Gravity Forms User Registration addon not being synced to the CRM
- 🔧 Fixed Fixed an error whereby if the LearnDash course steps were re-generated on the frontend and saved to `ld_course_steps` while a user was viewing a course with filtered steps, the filtered steps would be saved to the database and the hidden content would be removed from the course (thanks @Jason Ioannides for the fix!)
- 🔧 Fixed Fixed WooCommerce Subscriptions fields not syncing after the customer's initial payment attempt failed, but subsequently succeeded
- 🔧 Fixed Fixed undefined index warning when processing optin forms with FunnelKit and PHP 8.1
- 🔧 Fixed Fixed fatal error in the Custom Code section of the main settings page when a static class method had been attached to a `wpf_*` filter
- 🔧 Fixed Fixed Restrict Content Pro Memberships batch operation not working since a recent RCP update

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-10) 3.41.10 - 5/16/2023

- ✨ New Added support for api.php webhooks with Brevo and FluentCRM
- 🔧 Fixed Fixed global webhooks not working with Brevo since 3.41.9
- 🔧 Fixed Fixed custom args passed to `wp_fusion()->batch->batch_init()` being ignored

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-9) 3.41.9 - 5/15/2023

- ✨ New Added a tool for [exporting historical Fluent Forms entries](https://wpfusion.com/documentation/lead-generation/fluent-forms/#syncing-historical-entries)
- ✨ New Added an option to apply tags based on assistant to the [Salon Booking integration](https://wpfusion.com/documentation/ecommerce/salon-booking/)
- ⚡️ Improved [Force killing the background worker](https://wpfusion.com/documentation/tutorials/batch-operations/#cancelling) will now also unlock the process lock so a new operation can be started
- 🔧 Fixed Fixed WP Fusion settings tab not appearing in WP Booking Manager's form settings since WP Booking Manager v2.0
- 🔧 Fixed Fixed active HubSpot lists not available in the dropdown with the WooCommerce auto-apply coupon feature
- 🔧 Fixed Fixed JavaScript bug occasionally blocking render of FunnelKit optin settings in some browsers
- 🔧 Fixed Fixed fatal error connecting to EmailOctopus when there were no lists or tags in the account
- 🔧 Fixed Fixed JavaScript bug on Gravity Forms feed settings that was causing selected CRM lists to get copied into the field mapping
- 🔧 Fixed Fixed error "update webhook received but contact data was not found or in an invalid format" with global webhooks and Brevo (formerly Sendinblue) since 3.41.8
- 🔧 Fixed Fixed import tool not working with Pipedrive

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-8) 3.41.8 - 5/8/2023

- Updated Sendinblue integration to Brevo
- ✨ New Added View in CRM links to Brevo integration
- ✨ New Added a [Modern Events Calendar Zoom Integration addon integration](https://wpfusion.com/documentation/events/modern-events-calendar/#zoom)
- ✨ New Added support for multiple parameters using the `IN` operator with the [`user_meta_if` shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-user-meta-values)
- ✨ New Added an `ALL` operator to the [`user_meta_if` shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-user-meta-values)
- ✨ New Added subscription status, start date, end date, and next payment date fields with [EDD Recurring Payments](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#syncing-subscription-fields)
- ⚡️ Improved Improved performance for applying and removing lists with Brevo (aka Sendinblue)
- ⚡️ Improved Brevo integration will now use numeric contact IDs instead of email addresses as unique identifiers (backwards compatible with users who are still linked via email)
- ⚡️ Improved Improved Maropost error handling
- ⚡️ Improved Improved error handling for failed access token refreshes with Constant Contact
- ⚡️ Improved Moved Gravity Forms conditional fields logic script to `GFFormDisplay::add_init_script()` (proper way to do it according to Gravity Forms and fixes some compatibility issues)
- ⚡️ Improved Exported logs will now include the error level string instead of numeric ID
- 🔧 Fixed Fixed email address changes via the Gravity Forms User Registration addon not being synced to the CRM
- 🔧 Fixed Fixed an error whereby if the LearnDash course steps were re-generated on the frontend and saved to `ld_course_steps` while a user was viewing a course with filtered steps, the filtered steps would be saved to the database and the hidden content would be removed from the course (thanks @Jason Ioannides for the fix!)
- 🔧 Fixed Fixed WooCommerce Subscriptions fields not syncing after the customer's initial payment attempt failed, but subsequently succeeded
- 🔧 Fixed Fixed undefined index warning when processing optin forms with FunnelKit and PHP 8.1
- 🔧 Fixed Fixed fatal error in the Custom Code section of the main settings page when a static class method had been attached to a `wpf_*` filter
- 🔧 Fixed Fixed Restrict Content Pro Memberships batch operation not working since a recent RCP update

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-7) 3.41.7 - 5/1/2023

- ⚡️ Improved will no longer save an empty `wpf-settings-woo` postmeta value on WooCommerce coupons when no settings had been configured on that coupon
- 🔧 Fixed Fixed tags for price IDs always being removed when an EDD subscription status was changed to non-active (regardless of whether or not Remove Tags was checked) since 3.41.6
- 🔧 Fixed Fixed fatal error loading LearnDash course meta box with PHP 8.1+, for existing courses
- 🔧 Fixed Fixed fatal error displaying tags select dropdown with WP Job Manager and PHP 8.1

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-6) 3.41.6 - 4/24/2023

- ✨ New Added an object type dropdown for Salesforce
- ✨ New Added HTTP API logging for applying and removing tags with Drip
- ⚡️ Improved With EDD Recurring Payments, if Remove Tags is checked, [the tags will no longer be removed as soon as the subscription is canceled](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#tracking-cancellations), they will be removed once the subscription's access period expires
- ⚡️ Improved With EDD Recurring Payments, if a cancelled subscription reaches its expiration date, the Expired tags will now be applied at that time
- ⚡️ Improved WP Fusion will move Gamipress `user_register` actions from priority 10 to 25, so that the contact record has already been created in the CRM and tags can be applied
- 🔧 Fixed Fixed - updated deprecated filter `learndash-lesson-row-class` to `learndash_lesson_row_class`
- 🔧 Fixed Fixed fatal error in CartFlows integration trying to apply upsell tags when no tags had been configured for the main checkout or product
- 🔧 Fixed Fixed error `Argument #2 must be of type array, string given` in Toolset Forms integration with PHP 8+
- 🛠️ Dev Developers - Removed redundant check for `wpf_is_user_logged_in()` in the WP Fusion secure block access logic

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-5) 3.41.5 - 4/17/2023

- ⚡️ Improved With the WooCommerce, GiveWP and EDD email optin checkboxes, existing opted-in customers who don't check the opt-in box will no longer be unsubscribed
- 🔧 Fixed Fixed typo "susbcribed" in default optin status for FluentCRM (REST API)
- 🔧 Fixed Fixed CRM Tags conditional logic dropdown labels on Gravity Forms feeds showing as "undefined"
- 🔧 Fixed Fixed error `Call to a member function get() on null` with LifterLMS in the course builder since 3.41.4
- 🔧 Fixed Fixed `api.php` webhook method not properly looking up user IDs from Drip subscriber IDs (was converting them to integers)
- 🔧 Fixed Fixed fatal error `Call to member function is_edit_mode() on null` when using WooCommerce One-Page Checkout with Elementor

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-4) 3.41.4 - 4/10/2023

- ✨ New Added [Filter Course Steps feature for LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#filter-course-steps)
- ✨ New Added a [LifterLMS Memberships Meta export tool](https://wpfusion.com/documentation/learning-management/lifterlms/#batch-operations)
- ✨ New Added "Resubscribe" option with MailerLite— if enabled, and a contact is unsubscribed, they will be resubscribed when they are added to a new group
- ✨ New Added support for Drip webhooks with the [api.php webhook endpoint](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-endpoint-advanced)
- ⚡️ Improved The LearnDash Locked Lesson text [now works with the BuddyBoss app](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)
- ⚡️ Improved Added a warning when a webhook is received when connected to FluentCRM on the same site (webhooks aren't necessary)
- ⚡️ Improved Improved "Redirect if access is denied" dropdown in admin - Will now only search for pages by title, not content, and will validate external URLs
- 🔧 Fixed Fixed redundant syncing of WooCommerce Subscriptions data after a successful renewal payment when the `sub_renewal_date` field was enabled
- 🔧 Fixed Fixed invalid timestamp error when syncing LifterLMS membership start dates to HubSpot
- 🔧 Fixed Fixed membership level removal actions not working since LifterLMS 6.0
- 🔧 Fixed Fixed Elementor Forms integration treating "1" and "0" as `true` and `false` instead of strings
- 🔧 Fixed Fixed Acceptance field on Elementor Forms not being synced as boolean
- 🔧 Fixed Fixed "Lock Lessons" setting with LearnDash not being respected in the BuddyBoss app
- ⚡️ Improved Improved styling of the WP Fusion metabox when using the Gutenberg editor

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-3) 3.41.3 - 4/3/2023

- ✨ New Added support for AccessAlly 4.0 and up: [WP Fusion can now be used when AccessAlly is in "AccessAlly Managed" mode](https://wpfusion.com/documentation/membership/accessally/#accessally-managed-mode)
- ✨ New Added [Membership Level Name and Membership Status fields for sync with LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#syncing-meta-fields)
- ⚡️ Improved When selecting a tag in the AccessAlly tag mapping settings, the row will automatically be enabled for sync, and will be highlighted in green
- ⚡️ Improved Updated [Sendlane integration](https://wpfusion.com/documentation/installation-guides/how-to-connect-sendlane-to-wordpress/) to use the v2 API (requires generating a new access token)
- ⚡️ Improved CRMs that use OAuth will now have the refresh token and access token fields disabled in the settings to prevent browsers from accidentally filling the fields
- ⚡️ Improved When updating a user profile in the admin, the log source will say `user-profile` instead of `unknown`
- 🔧 Fixed Fixed custom fields being synced twice when updating an admin user profile with AccessAlly active
- 🔧 Fixed Fixed fatal error during an Easy Digital Downloads guest checkout, when the API call to look up the contact by email address failed
- 🔧 Fixed Fixed fatal error syncing Event Espresso registrations when the event was associated with a deleted venue
- 🔧 Fixed Fixed a fatal error if the WP Fusion settings were reset in the middle of a batch operation
- 🔧 Fixed Fixed an infinite redirect if a guest tried to access a piece of protected content and "Refresh tags if access is denied" was enabled on that content

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-2) 3.41.2 - 3/27/2023

- ✨ New Added [Ortto CRM integration](https://wpfusion.com/documentation/installation-guides/how-to-connect-ortto-to-wordpress/)
- ✨ New Added option to [completely remove all WP Fusion settings](https://wpfusion.com/documentation/tutorials/switching-crms/#2-reset-wp-fusion) from the database when resetting the main settings page
- ✨ New Added new scopes to HubSpot integration: timeline, crm.objects.custom.read, and crm.objects.custom.write
- ⚡️ Improved Removed redundant `name` and `email` custom fields with Bento
- ⚡️ Improved Thrive Leads and Thrive API integrations will no longer be loaded on versions of Thrive Dashboard less than 3.30.0, to prevent errors with older versions
- 🔧 Fixed Fixed - Pipedrive integration will now use a private app instead of a public app, which will allow setup to complete (previously we were pending a public app review for several months)
- 🔧 Fixed Fixed redirect URI mismatch error with HubSpot (since HubSpot scopes were updated on March 24th)
- 🔧 Fixed Fixed Klaviyo integration sometimes loading "Unknown List" entries from subscribers in cases of deleted or system lists
- 🔧 Fixed Fixed link to edit subscriber in Bento not available immediately after creating a new subscriber
- 🔧 Fixed Fixed GMT calculation with HubSpot dates adding the GMT offset when it should have been subtracing it
- 🔧 Fixed Fixed not being able to sync `active` and `unsubscribed` text values to set the [opt-in status with MailerLite](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/)
- 🔧 Fixed Fixed error `Argument #1 ($str) must be of type string, array given` with Gravity Forms when syncing array-formatted data (multiselects, multi-checkboxes, etc)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-1) 3.41.1 - 3/20/2023

- ✨ New Added Subscription Trial End date field for sync with WooCommerce Subscriptions
- ⚡️ Improved If a WooCommerce order is changed to Cancelled, the tags applied at purchase will now be removed (same as if it were refunded). The "Refunded" tags will still only be applied if the order is actually refunded
- ⚡️ Improved Overhauled FunnelKit (WooFunnels) integration. Should now be more reliable with Asynchronous Checkout and syncing order data at the correct time
- 🔧 Fixed Fixed the Defer Until Activation setting with Ultimate Member not working when using the Limit User Roles setting in WP Fusion
- 🔧 Fixed Fixed Event Tracking not working with Groundhogg (This Site)
- 🔧 Fixed Fixed Event Tracking updating the most recent event instead of creating a new one with Groundhogg (REST API)
- 🔧 Fixed Fixed "Action Failed" error when flushing the logs when WooCommmerce's logging was active in database mode

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-41-0) 3.41.0 - 3/13/2023

- ✨ New Added a [WooCommerce Product Options integration](https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/)
- ✨ New Added option to [refresh a user's tags when access is denied](https://wpfusion.com/documentation/getting-started/working-with-tags/#when-access-is-denied)
- ✨ New Added an [Object Sync for Salesforce integration](https://wpfusion.com/documentation/other/object-sync-for-salesforce/)
- ✨ New Added automatic detection of custom profile fields with WooCommerce Memberships
- ⚡️ Improved The API Queue will now run on the `shutdown` hook at priority -1 instead of 1, to try and get ahead of any potential redirects in WooCommerce payment gateways
- ⚡️ Improved With CRMs that support identifying a visitor to a tracking script via JavaScript, a visitor can now be identified in the same page load as a form submission (instead of requiring a redirect or refresh)
- ⚡️ Improved The "Select a redirect" box in the main WP Fusion metabox can now accept a page or a URL
- ⚡️ Improved You can now set the `WPF_MULTISITE_PREFIX_KEYS` in wp-config.php to turn on [blog ID prefixes for usermeta keys](https://wpfusion.com/documentation/faq/multisite/)
- ⚡️ Improved Moved Push All setting to Advanced settings tab
- 🔧 Fixed Fixed - Updated to support latest versions of Thrive Architect, Leads, and Automator (3.18, 3.16, and 1.9 respectively)
- 🔧 Fixed Fixed - In some cases a FunnelKit order would still be pending when the asynchronous checkout script was loaded, causing it not to fire. We'll now enqueue the async checkout script for pending orders as well
- 🔧 Fixed Fixed missing tag labels in Thrive Automator with some CRMs
- 🔧 Fixed Fixed View in CRM link showing on Gravity Forms entries for CRMs that did not support linking directly to the contact's record
- 🔧 Fixed Fixed loading the metadata from the CRM resetting a user's wpForo usergroup to the default
- 🔧 Fixed Fixed fatal error loading the WP Fusion MemberMouse settings page since MemberMouse

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-59) 3.40.59 - 3/7/2023

- 🔧 Fixed Fixed content not unlocking when an initial auto-login URL was visited, since 3.40.57
- ⚡️ Improved The tag select option on the Messages settings tab with BuddyBoss' member access controls will now be limited to the first 100 tags, to prevent out of memory errors
- 🔧 Fixed Fixed import tool not working with Salesforce picklist-based segmentation

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-58) 3.40.58 - 3/6/2023

- ✨ New Added a [Pretty Links integration](https://wpfusion.com/documentation/affiliates/pretty-links/) for tracking link engagement in your CRM
- ✨ New Added a [ThirstyAffiliates integration](https://wpfusion.com/documentation/affiliates/thirstyaffiliates/) for tracking link engagement in your CRM
- ✨ New Added a [WP All Import integration](https://wpfusion.com/documentation/other/wp-all-import/) for syncing generated passwords with your CRM
- ✨ New Added support for Time fields with Gravity Forms
- ⚡️ Improved When changing the tag type with Salesforce, all users will automatically have their tags resynced from the CRM
- ⚡️ Improved When using a Picklist for Salesforce tags, if an unknown is loaded for a user, it will be added to the dropdown of available options
- ⚡️ Improved The Bento tracking script will now be registered via `wp_enqueue_script()` instead of inline, to play better with caching and optimization plugins
- 🔧 Fixed Fixed Enhanced Ecommerce data not syncing with FunnelKit when an upsell offer was rejected and Asynchronous Checkout was enabled
- 🔧 Fixed Fixed Import Users tool not working with Salesforce picklist-based segmentation
- 🔧 Fixed Fixed Salesforce integration not loading more than 2000 available topics
- 🔧 Fixed Fixed fatal error with Push All when other plugins updated user meta fields before WP Fusion had loaded

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-57) 3.40.57 - 2/27/2023

- ✨ New Added a [WooCommerce Gravity Forms Product Add-ons integration](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/)
- ✨ New Added ability to [apply tags when a new topic or reply are posted](https://wpfusion.com/documentation/forums/bbpress/#forums-activity-tracking) in bbPress (and BuddyBoss) forums and topics
- ✨ New Added support for [updating lookup fields and associated entities with Microsoft Dynamics 365 Marketing](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/)
- ⚡️ Improved When an auto-login session loads the tags for someone who has a user account on the site, those tags will also be saved to their local cache
- ⚡️ Improved Clicking Cancel on a batch operation / export operation will now cancel the next operation in the queue, even if the key is unknown
- ⚡️ Improved Some plugins sloppily trigger `wp_login` twice during a single login. WP Fusion will now only run on the first instance
- ⚡️ Improved Improved error handling with Dynamics 365
- ⚡️ Improved Updated Bento, Engage, and Intercom integrations to support upcoming multi-key event tracking
- 🔧 Fixed Fixed HTML in custom field names being displayed in the Contact Fields list
- 🔧 Fixed Fixed the logs recording an error when a webhook was received from ThriveCart
- 🔧 Fixed Fixed typo "susbcribed" in default optin status for FluentCRM (same site) preventing automation emails from sending since 3.40.40
- 🔧 Fixed Fixed Groundhogg (REST API) integration not loading more than 100 available tags
- 🔧 Fixed Fixed custom fields not syncing with S2Member when using a custom database table prefix
- 🔧 Fixed Fixed a fatal error in FooEvents when a contact ID lookup (by email address) resulted in an error
- 🛠️ Dev If the background worker / exporter goes rogue, [you can now hard cancel everything](https://wpfusion.com/documentation/tutorials/batch-operations/#cancelling) by appending `&wpf-cancel-batch` to the WPF settings page URL

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-56) 3.40.56 - 2/20/2023

- ⚡️ Improved If the MemberDash plugin is active, a warning will be displayed on LearnDash courses about potential conflicts when using two plugins to manage enrollments into the same course
- ⚡️ Improved The cookie to track Bento guest form submissions will only be set for one hour (instead of one year). This is plenty of time for the Bento tracking script to pick it up, and will make it easier to cache pages for identified guests
- 🔧 Fixed Fixed Order Date field not syncing with RestroPress orders in the Processing status
- 🔧 Fixed Fixed error `Undefined function wpf_render_tag_multiselect()` when editing an event on the frontend using the Modern Events Calendar Front-end Event Submission addon
- 🔧 Fixed Fixed warning with Ultimate Member `Attempt to read property "ID" on null` when registering meta boxes on some post types
- 🔧 Fixed Fixed the ActiveCampaign integration intercepting API errors from other CRMs during the initial connection process

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-55) 3.40.55 - 2/13/2023

- ✨ New Added `wpf-refresh` query string parameter [to force a refresh of the user's tags and/or meta from the CRM](https://wpfusion.com/documentation/getting-started/shortcodes/#via-url)
- ✨ New Added a setting to [apply a tag when a specific checkout step is completed in a CartFlows flow](https://wpfusion.com/documentation/ecommerce/cartflows/#checkouts)
- ✨ New Added support for webhooks with the v2 MailerLite API
- ✨ New Added links to the settings page with MailerLite to view and delete all registered webhooks (for debugging purposes)
- ✨ New Added direct link to view a subscriber from WordPress when using the new V2 MailerLite API
- ⚡️ Improved Guest form submissions and checkouts will now pass the guest's email address to the Bento tracking script
- ⚡️ Improved Improved notifications when an error was encountered saving or validating an option in the WP Fusion settings
- ⚡️ Improved Added error logging when registering a MailerLite webhook fails
- ⚡️ Improved Improved MailerLite error handling
- ⚡️ Improved Reverted change from 3.40.54, we found a way to resubscribe unsubscribed subscribers with the V2 MailerLite API
- 🔧 Fixed Fixed Thrive Architect integration syncing leads with an empty email address
- 🔧 Fixed Fixed PHP warning syncing the WooCommerce Memberships user memebership fields when the user's membership was not part of a plan
- 🔧 Fixed Fixed WooCommerce Subscriptions Start date syncing as GMT instead of local time
- 🔧 Fixed Fixed error `Cannot access offset of type string on string` when tracking leadsource data and the visitor's `wpf_leadsource` tracking cookie was an empty string
- 🔧 Fixed Fixed Bento integration returning `false` when a contact had no tags, instead of an empty array. Sometimes caused errors with other integrations.

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-54) 3.40.54 - 2/6/2023

- ⚡️ Improved Using the new V2 MailerLite API, if you attempt to create an Unsubscribed subscriber, [no data will be sent to MailerLite](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#v1-vs-v2-apis)
- 🔧 Fixed Fixed - Tags applied for Pending MemberPress subscriptions were not being removed after a successful checkout using a 100% discount
- 🔧 Fixed Fixed WP Simple Pay actions not running when a new subscription was created via SEPA payment
- 🔧 Fixed Fixed Last Course Enrolled field not syncing when a user was added to a LearnDash course
- 🔧 Fixed Fixed fatal `undefined method` errors with Thrive Architect 3.16+
- 🔧 Fixed Fixed fatal error `Call to undefined function bp_get_member_type_key()` when trying to sync a Member Type field from BuddyPress to the CRM, and the Member Types component was disabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-53) 3.40.53 - 1/30/2023

- ⚡️ Improved WP Simple Pay integration will also run on the `payment_intent.processing` Stripe event to sync data for pending SEPA payments
- ⚡️ Improved ActiveCampaign event tracking API calls updated to use `wp_remote_post()` instead of `wp_safe_remote_post()` to fix occasional `A valid URL was not provided` errors
- ⚡️ Improved After triggering an automated enrollment into a wpForo usergroup, WP Fusion will delete and rebuild the `_wpf_member_obj` cache for the user
- 🔧 Fixed Fixed WooCommerce email opt-in checkbox appearing right-aligned on some themes
- 🔧 Fixed Fixed custom Billing and Shipping fields added via WooCommerce Checkout Field Editor not showing as available for sync
- 🔧 Fixed Fixed fatal error `Cannot use object of type WP_Post as array` with the Tickets Commerce payment gateway (The Events Calendar) when only a single attendee was on the ticket
- 🔧 Fixed Fixed Event Checkin tags not applying with Event Tickets tickets purchased using the Tickets Commerce gateway
- 🔧 Fixed Fixed Event Checkin tags not applying with Event Tickets Plus when attendees were checked in manually via the Event Tickets Plus app
- 🔧 Fixed Fixed missing log entries for updating contacts and applying tags with Event Tickets event check-ins
- 🔧 Fixed Fixed groups not applying for anonymous subscribers when using the new MailerLite API
- 🔧 Fixed Fixed JavaScript based lead source tracking not working with WP Rocket
- 🔧 Fixed Fixed PHP warning `preg_match(): Passing null to parameter #2 ($subject) of type string is deprecated` when syncing a null value to a CRM field since 3.40.52
- 🔧 Fixed Fixed PHP warning `Undefined array key "order_id"` when using asynchronous checkout with PHP 8+

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-52) 3.40.52 - 1/23/2023

- 🔧 Fixed Fixed MemberPress sub-account tags not being applied beyond the first user when importing users from a .csv into a corporate account
- ⚡️ Improved All WP Simple Pay post-payment actions will now be triggered via webhooks from Stripe. This fixes some issues with tags not being applied if the payment success shortcode wasn't present, or if the payment success page was on another site
- ⚡️ Improved Improved status output for batch operations in the console: will now count items processed in the last batch, and available memory is human-readable
- 🔧 Fixed Fixed subscription tag fields not showing when using All Products for WooCommerce Subscriptions
- 🔧 Fixed Fixed Push User Meta / Export Users operations not picking up the MemberPress Corporate Parent Email field
- 🔧 Fixed Fixed LifterLMS course track complete tags not being applied since LifterLMS 7.0
- 🔧 Fixed Fixed some random access keys (like `183e3486`) being treated as scientific notation and converted to 0
- 🔧 Fixed Fixed warning "Attempt to read `cap_key` on bool" when adding or removing roles with a deleted user ID
- 🔧 Fixed Fixed error `Failed to parse XML-RPC request` when syncing HTML in text fields to Infusionsoft / Keap
- 🔧 Fixed Fixed warnings `Return type of X should be compatible with Y` warnings with PHP 8.1 and the XMLRPC library (Infusionsoft/Keap)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-51) 3.40.51 - 1/17/2023

- ✨ New Added Next Payment Date field for sync with Paid Memberships Pro
- ✨ New Added a warning to the LearnDash course settings page when Filter Steps is enabled on a course and the Single Page Courses module is enabled in Uncanny LearnDash Toolkit Pro
- ⚡️ Improved When upgrading or downgrading between grouped MemberPress memberships, tags from the previous level will now be removed if "Remove Tags" is checked on the membership product
- ⚡️ Improved Moved WP Simple Pay post-payment actions to the `simpay_charge_created` hook to avoid syncing data to the CRM for failed payments
- ⚡️ Improved The locking transient will no longer be cleared after a failed incoming webhook
- 🔧 Fixed Fixed LearnDash Quiz Score field syncing the quiz points and not the percentage score.
- 🔧 Fixed Fixed automated enrollments into wpForo usergroups not working since wpForo 2.1
- 🔧 Fixed Fixed Paid Memberships Pro Start Date field not syncing correctly since 3.40.50
- 🔧 Fixed Fixed fatal error syncing string-formatted date timestamps to ActiveCampaign with PHP 8.1
- 🔧 Fixed Fixed Import Users tool with Sendinblue not loading more than 500 subscribers
- 🔧 Fixed Fixed Quentn integration treating a Contact Not Found as a serious error
- 🔧 Fixed Fixed fatal error loading WP Fusion feed settings on Paymattic forms since Paymattic v4.3.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-50) 3.40.50 - 1/9/2023

- ✨ New Added an integration with [YITH WooCommerce Booking](https://wpfusion.com/documentation/events/yith-woocommerce-booking/)
- ✨ New Added an integration with the [Virtual Events addon for The Events Calendar](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/?c#virtual-events)
- ✨ New Added a [`sync_if_empty` parameter](https://wpfusion.com/documentation/getting-started/shortcodes/#sync-if-empty) to the `user_meta` shortcode
- ⚡️ Improved Improved: the `wpf_update_meta` and `wpf_update_tags` shortcodes will now output an HTML comment to help locating them within a page
- ⚡️ Improved Improved: When syncing an optin from a supported ecommerce plugin [to MailerLite](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/#ecommerce-plugins), if the subscriber's status is `active` or `unconfirmed` it will not be changed
- Updated Elementor Forms integration to no longer use deprecated method `add_form_action()` with Elementor Pro v3.5.0+
- 🔧 Fixed Fixed the `wpf_update_meta` shortcode triggering a pull from the CRM multiple times per page load (if used with multiple blank fields)
- 🔧 Fixed Fixed fatal error syncing the membership start date as a member was deleted in Paid Memberships Pro, with PHP 8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-49) 3.40.49 - 1/3/2023

- ✨ New Added multi-key/value event tracking support for CRMs that accept that kind of data (Bento, Drip, Engage, Gist, Groundhogg, Intercom, Klaviyo, Mailchimp, and Sendinblue)
- 🔧 Fixed Fixed Event Tracking not working with a recent ActiveCampaign API update (not sure exactly when it started)
- 🔧 Fixed Fixed date fields not syncing to FluentCRM (REST API)
- 🔧 Fixed Fixed opt-in status always showing as No when editing an EDD order in the admin, since 3.40.45
- 🔧 Fixed Fixed fatal error syncing the membership expiration date as a member was deleted in Paid Memberships Pro, with PHP 8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-48) 3.40.48 - 12/27/2022

- ✨ New Added [SureCart integration](https://wpfusion.com/documentation/ecommerce/surecart/)
- ⚡️ Improved If a user's contact record is deleted, their cached tags will be deleted as well (previously these were left behind and could clutter up the database)
- 🔧 Fixed Fixed fatal error loading the edit order screen in WooCommerce versions below 6.4, since 3.40.45
- 🔧 Fixed Fixed WooCommerce Orders batch operaton picking up `shop_order_refund` type orders since 3.40.45
- 🔧 Fixed Fixed error merging lead source data into guest checkouts when the cookie contained invalid JSON
- 🔧 Fixed Fixed WPF not running on multiple user registrations in the same request
- 🔧 Fixed Fixed BuddyPress custom profile type fields being synced as the type ID not the name
- 🔧 Fixed Fixed ACF user fields not showing up on the Contact Fields list when User Form or User Role wasn't the first location rule
- 🔧 Fixed Fixed fatal error `Cannot use object of type WP_Post as array` displaying LearnDash course navigation with BuddyBoss theme 2.2.2 and PHP 8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-47) 3.40.47 - 12/20/2022

- 🔧 Fixed Fixed fatal error manually adding a new WooCommerce Subscription via the admin since 3.40.45

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-46) 3.40.46 - 12/20/2022

- ✨ New Added a global setting for the Lesson Locked Text with LearnDash (at Settings >> WP Fusion >> Integrations)
- 🔧 Fixed Fixed fatal error on CartFlows order received page when using Asynchronous Checkout, since 3.40.45
- 🔧 Fixed Fixed an unhandled error refreshing the Mautic access token when the user's API credentials had changed

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-45) 3.40.45 - 12/19/2022

- ✨ New Added [Studiocart integration](https://wpfusion.com/documentation/ecommerce/studiocart/)
- ✨ New Added support for [WooCommerce High Performance Order Storage](https://developer.woocommerce.com/2022/09/14/high-performance-order-storage-progress-report/)
- ✨ New Added [Optin Status field for sync with MailerLite](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/) — you can sync a value of `active`, `unconfirmed`, or `unsubscribed` to update the subscriber's status in MailerLite
- ✨ New Added "skip already processed" option to Event Espresso Registrations batch operation
- 🔧 Fixed Fixed BuddyBoss App Segment integration not working with CRMs which use tag IDs
- 🔧 Fixed Fixed batch operations getting stuck on the last record, since 3.40.44
- 🔧 Fixed Fixed Enhanced Ecommerce settings not showing on Gravity Forms feeds since Gravity Forms PayPal 2.4.0
- 🔧 Fixed Fixed GiveWP settings not saving if no tags were selected
- 🔧 Fixed Fixed GiveWP integration not creating a contact record in the CRM if the donation was made by a registered user who didn't already have a contact record
- 🔧 Fixed Fixed updating a user profile in WordPress marking MailerLite subscribers as Active even if they hadn't been confirmed yet
- 🔧 Fixed Fixed Processed / Not Processed order status filter showing up for all post types
- 🛠️ Dev Added filters `wpf_edd_customer_data` and `wpf_give_customer_data`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-44) 3.40.44 - 12/12/2022

- 🔧 Fixed Fixed fatal error `json_decode(): Argument #1 ($json) must be of type string, array given` when parsing leadsource tracking data, since 3.40.43
- ✨ New Added option for default opt-in status when adding new contacts to MailerLite.
- ✨ New Added option to filter WooCommerce orders based on whether or not they've been processed by WP Fusion

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-43) 3.40.43 - 12/12/2022

- ✨ New Added [Breakdance Builder integration](https://wpfusion.com/documentation/page-builders/breakdance/)
- ✨ New Added option to apply tags when a user joins a BuddyPress / BuddyBoss group
- ⚡️ Improved Improved lead source tracking — tracking data will now be stored JSON-encoded inside of a single cookie, instead of across multiple cookies
- ⚡️ Improved Using the `date-format` parameter in the `user_meta` shortcode will now output the date in the site's language (as opposed to English)
- 🔧 Fixed Fixed `timezone-offset` parameter in the `user_meta` shortcode being treated as minutes, not hours
- 🔧 Fixed Fixed fields being synced as empty with MemberPress when an profile was updated and fields set to "Show In Account" were not present on the Account page
- 🔧 Fixed Fixed removing a linked tag not setting the default BuddyPress profile type when the type name didn't match the type key
- 🔧 Fixed Fixed batch operations started on a single multisite showing the status bar on all other sites in the network
- 🔧 Fixed Fixed fatal error displaying a user's tags on the All Users list when a user's tags were stored as a string, with PHP 8
- 🔧 Fixed Fixed mysterious JavaScript error `tipTip is not a function` when editing Gravity Forms feeds on some sites
- 🔧 Fixed Fixed - Moved FluentForms feed processing back to asynchronous (reverted change from 3.40.42)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-42) 3.40.42 - 12/5/2022

- ✨ New Added [Engage CRM integration](https://engage.so/)
- ⚡️ Improved Fluent Forms submissions are no longer processed asynchronously (this fixes lead source tracking and the incorrect form URL showing in the logs)
- 🔧 Fixed Fixed BuddyPress custom profile type fields being synced as the type ID not the name
- 🔧 Fixed Fixed automated profile type un-enrollments with BuddyPress / BuddyBoss not working when the profile type key didn't match the post name
- 🔧 Fixed Fixed API errors syncing multiselect or array data with Gist
- 🔧 Fixed Fixed API errors not being logged when updating an existing contact via a form integration
- 🔧 Fixed Fixed un-checked MemberPress checkboxes not syncing from the admin
- 🔧 Fixed Fixed unenrolling a user from a BuddyPress profile type using a linked tag not working when the type key didn't match the `post_name`
- 🔧 Fixed Fixed HubSpot integration using a 120 second timeout
- 🔧 Fixed Fixed PHP warning during Fluent Forms feed processing when no tags were specified to be applied
- Removed German language translation

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-41) 3.40.41 - 11/29/2022

- ✨ New Added Last Order Type field for sync with WooCommerce Subscriptions
- ✨ New Added German language translation
- ⚡️ Improved Set a `max-height` on the debug output for HTTP API logging in the logs
- ⚡️ Improved Improved logging for when a BuddyBoss / BuddyPress profile type auto-enrollment fails
- 🔧 Fixed Fixed custom fields not syncing with Klaviyo since 3.40.40
- 🔧 Fixed Fixed logs warning with Groundhogg when a user updated their email address to have capital letters in it
- 🔧 Fixed Fixed Salesforce tags picklist field selection not saving in the admin since 3.40.40
- 🔧 Fixed Fixed Fluent Forms integration syncing empty form fields
- 🔧 Fixed Fixed PHP error `Cannot use string offset as array` when importing users with PHP 8
- 🔧 Fixed Fixed Fatal Error manually activating Staging Mode when using ActiveCampaign's Deep Data integration
- 🔧 Fixed Fixed MailPoet integration listing a user's segments as "unknown lists"

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-40) 3.40.40 - 11/21/2022

- ✨ New Added [Intercom event tracking](https://wpfusion.com/documentation/event-tracking/intercom-event-tracking/)
- ✨ New Added [Intercom site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#intercom)
- ✨ New Added [Klaviyo event tracking](https://wpfusion.com/documentation/event-tracking/klaviyo-event-tracking/)
- ✨ New Added option with FluentCRM (REST API and same site) to set the default status for new contacts to either Subscribed or Pending (and trigger a double opt-in email)
- ✨ New Added support for using CRM tags in Gravity Forms feed conditions
- ✨ New Added link to edit the contact in the CRM for HighLevel (requires a Resync Contact IDs operation to load the edit URLs)
- ✨ New Added Previous User Email field for sync (to track email address changes)
- ⚡️ Improved Updated Klaviyo integration to use the new v2022-10-17 API, which will greatly improve performance
- ⚡️ Improved Clicking Process WP Fusion Actions Again on a WooCommerce or EDD order, for a registered user, will force lookup that user's contact ID in the CRM (in case it's changed or been merged)
- ⚡️ Improved Reorganized FooEvents fields in the settings into two groups, Attendee Fields and Event Fields
- ⚡️ Improved When a WooCommerce User Membership is deleted, the user's status will be synced as cancelled, and the expiration date will be set to the current time
- ⚡️ Improved When using the MemberPress offline gateway, and "Admin Must Manually Complete Transactions" is enabled, no tags will be applied until the admin has completed the transaction
- ⚡️ Improved If a contact was created in staging mode, deactvating staging mode will also remove the user's `staging_xxxx` contact ID
- 🔧 Fixed Fixed custom properties created with the core Groundhogg plugin (not the Better Meta extension) not being available for sync
- 🔧 Fixed Fixed error resyncing available fields when the Groundhogg Better Meta plugin was active
- 🔧 Fixed Fixed all phone numbers getting synced to HighLevel with a +1 country code
- 🔧 Fixed Fixed: Removed Drip site tracking code (Drip no longer supports site tracking)
- 🔧 Fixed Fixed being unable to clear out the User dropdown filter in the logs once a user was selected
- 🔧 Fixed Fixed AccessAlly integration not listing more than 1000 available tags
- 🔧 Fixed Fixed Resync Tags and Fields not working with Mautic over OAuth
- 🔧 Fixed Fixed EDD Recurring Payments Statuses batch operation processing subscriptions from newest to oldest
- 🔧 Fixed Fixed Easy Digital Downloads Orders batch operation processing orders from newest to oldest
- 🔧 Fixed Fixed fatal conflict with Thrive Ultimatum
- 🔧 Fixed Fixed fatal error adding new WP Fusion Thrive Leads API connection
- 🛠️ Dev Added filter [wpf\_event\_tickets\_apply\_tags](https://wpfusion.com/documentation/filters/wpf_event_tickets_apply_tags/)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-39) 3.40.39 - 11/14/2022

- ✨ New Added [Thrive Leads integration](https://wpfusion.com/documentation/lead-generation/thrive-leads/)
- ✨ New Added OAuth API integration with Mautic (requires settings reset)
- ⚡️ Improved The tags specified on a WooCommerce product for "Apply tags when initial transaction failed" will no longer be applied during a failed WooCommerce Subscriptions renewal order
- 🔧 Fixed Fixed Defer Until Activation setting with BuddyPress / BuddyBoss causing tags linked to groups not to be applied
- 🔧 Fixed Fixed Gravity Forms conditonal logic scripts getting output when pages were loaded via the REST API (i.e. by Yoast's link indexer)
- 🔧 Fixed Fixed Thrive Automator integration not applying tags with CRMs that use tag IDs
- 🔧 Fixed Fixed Thrive Automator integration not syncing the name field to the CRM
- 🔧 Fixed Fixed WP Fusion integration showing up as an empty box under Thrive Product Manager >> API Integrations
- 🔧 Fixed Fixed Groundhogg (REST API) integration not loading more than 25 available tags
- 🔧 Fixed Fixed fatal error with Thrive Ultimatum `Call to undefined method WPF_Thrive_Autoresponder_Main::get_email_merge_tag()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-38) 3.40.38 - 11/10/2022

- 🔧 Fixed Fixed notice "Subscription status was changed to active, but the user is not currently subscribed to the product. No tags will be applied." with MemberPress since 3.40.36
- 🔧 Fixed Fixed PHP warning `Undefined variable $code` in Zoho integration when handling an API error
- 🔧 Fixed Fixed users with no tags showing in Users Insights as `a:0:{}`
- 🔧 Fixed Fixed tags select not initializing properly when adding a new variable price option in Easy Digital Downloads

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-37) 3.40.37 - 11/7/2022

- ✨ New Added support for [AffiliateWP referrer tracking](https://wpfusion.com/documentation/other/affiliate-wp/#syncing-referrer-meta-fields) with Fluent Forms
- ⚡️ Improved With the [WooCommerce Subscriptions Gifting integration](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/), if a separate shipping address was provided by the customer at checkout, the shipping details will be synced to the gift recipient's contact record
- ⚡️ Improved With CRMs which require an email address for some API calls, WP Fusion will now check to see if the email can be retrieved from a WooCommerce order before making an API call to load the contact (improves performance)
- 🔧 Fixed Fixed both the WooCommerce and WooCommerce Subscriptions applying the same tags on a new subscription order
- 🔧 Fixed Fixed WP Fusion tag select boxes not usable after adding a new price option on a download product with EDD 3.0+
- 🔧 Fixed Fixed membership meta fields not syncing with WooCommerce Memberships when no tags were configured on the membership plan
- 🛠️ Dev Added filter `wpf_get_email_from_contact_id`
- [Updated Growmatik integration](https://github.com/verygoodplugins/wp-fusion-lite/pull/20)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-36) 3.40.36 - 10/31/2022

- Tested for WordPress 6.1.0
- 🔧 Fixed Fixed Groundhogg syncing new user registrations to Groundhogg before WP Fusion
- 🔧 Fixed Fixed WooCommerce Memberships Status field not syncing when a paused membership was reactivated due to a successful subscription payment
- 🔧 Fixed Fixed LearnDash lessons protected by "Required Tags (Not)" not being protected when the parent course was set to apply tags on course completion
- 🔧 Fixed Fixed WP Fusion overriding conditional visibility controls on Bricks Builder elements
- 🔧 Fixed Fixed Staging Mode checkbox not un-checkable when the site was in staging mode due to detecting a change in the site's URL
- 🔧 Fixed Fixed default profile type not being set with BuddyBoss when a linked tag was removed, when the profile type directory key didn't match the type name

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-35) 3.40.35 - 10/24/2022

- ✨ New Added [Group Leader Email and Group Name fields for sync with the Restrict Content Pro Group Accounts addon](https://wpfusion.com/documentation/membership/restrict-content-pro/#groups)
- 🔧 Fixed Fixed automated enrollments into BuddyBoss / BuddyPress profile types not working when the type `directory_slug` didn't match the type `post_name`
- 🔧 Fixed Fixed group license tags not being applied in Uncanny LearnDash Groups when a user was added to a group via an enrollment key
- 🔧 Fixed Fixed JetEngine integration crashing the Listing Grid widget when Elementor wasn't active
- 🔧 Fixed Fixed WooCommerce Subscriptions integration syncing 0 as the end date for subscriptions with no expiration
- 🔧 Fixed Fixed variable price settings not displaying in Easy Digital Downloads since EDD 3.0
- 🔧 Fixed Fixed WooCommerce Shipment Tracking tracking link not syncing for guest checkouts
- 🔧 Fixed Fixed WooCommerce Shipment Tracking tracking link only syncing custom tracking links, not standard carriers
- 🔧 Fixed Fixed WooCommerce Memberships membership status field not syncing when a subscription was reactivated in the user's frontend account area
- 🔧 Fixed Fixed deprecated method `isSequential()` in WishListMember integration
- 🔧 Fixed Fixed PHP warnings in Maropost integration
- Updated Autonami to FunnelKit Automations
- 🛠️ Dev Tested for PHP 8.1.9

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-34) 3.40.34 - 10/17/2022

- 🔧 Fixed Fixed form field mappings not saving in the admin since 3.40.33

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-33) 3.40.33 - 10/17/2022

- ✨ New Added [Pipedrive CRM integration](https://wpfusion.com/documentation/installation-guides/how-to-connect-pipedrive-to-wordpress/)
- ⚡️ Improved Exporting the activity logs will now automatically unserialize any serialized data
- ⚡️ Improved The Refresh Tags and Fields link in the admin toolbar will now only be shown to administrators (`manage_options`)
- ⚡️ Improved Dates will be force to UTC for timestamp conversion before beng synced (fixes issues with other plugins calling `date_default_timezone_set()` and messing up the conversion)
- ⚡️ Improved The tags list in the All Users list now has a max height set, and can be clicked to expand
- 🔧 Fixed Fixed Learnpress course content protection not working since LearnPress 4.1.6.9
- 🔧 Fixed Fixed Filter Queries not working on LearnPress courses
- 🔧 Fixed Fixed the TipTip JS file getting enqueued twice with WooCommerce (made tooltips not automatically close)
- 🔧 Fixed Fixed password resets via Clean Login not being synced to the CRM
- 🔧 Fixed Fixed expiration date not syncing with Paid Memberships Pro when a member was manually added to a level with a custom end date
- 🔧 Fixed Fixed fatal error registering new users in the admin with ACF multiselect repeater data, when BuddyPress was active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-32) 3.40.32 - 10/20/2022

- 🔧 Fixed Fixed access control system broken in 3.40.31

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-31) 3.40.31 - 10/20/2022

- ✨ New Added Refresh Available Tags & Fields button to the admin toolbar
- ✨ New Added support for the Groundhogg White Label Branding extension
- ⚡️ Improved If an Elementor element is protected by an invalid tag (for example a deleted tag, or tag from a prior CRM), the element will no longer be hidden
- 🔧 Fixed Fixed - All links to CRM contact records in the logs will now open in a new browser window
- 🔧 Fixed Fixed Gravity Perks Nested Forms getting processed before the parent entry was synced
- 🔧 Fixed Fixed Event Tracking not working with HubSpot
- 🔧 Fixed Fixed deleting an Event Tickets attendee applying the Deleted tags to the user who made the purchase, not the attendee
- 🔧 Fixed Fixed Invalid JSON Response error when editing pages in Gutenberg and Gravity Forms was active
- 🔧 Fixed Fixed fatal error loading the API Connections panel within Thrive Ovation

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-30) 3.40.30 - 10/3/2022

- ✨ New Added support for the Tickets Commerce payment gateways with Event Tickets and Event Tickets Plus
- ✨ New Added support for guest checkouts with RestroPress
- ✨ New Added Subscription Price field for sync with Paid Memberships Pro
- ✨ New Added Event Ticket ID field for sync with Event Tickets Pro
- ⚡️ Improved The Bento integration will force all email addresses to lowercase, both for syncing and for contact ID lookups
- **Warning** \- Bento users - Note that this change will cause WordPress users to become disconnected from their Bento subscriber records if their email addresses in Bento contain capital letters. To fix this, it's recommended to run a Push User Meta operation one time, and WP Fusion will update all your subscriber records in Bento to use lowercase email addresses
- ⚡️ Improved If Autonami is running on the same site, tag changes will be synced across to WP Fusion immediately, without requiring an API call
- ⚡️ Improved If a MemberPress transaction expires, and the user has another active transaction to the same product, the Transaction Expired tags will not be applied
- 🔧 Fixed Fixed lists not loading with Dynamics Marketing 365
- 🔧 Fixed Fixed staging mode only auto-activating in the admin of the staging site
- 🔧 Fixed Fixed Preview With Tag not working with tags with apostrophes in the tag name
- 🔧 Fixed Fixed the BuddyPress integration syncing the profile type slug instead of profile type name when a user was added to a profile type via a linked tag
- 🔧 Fixed Fixed being unable to remove a saved tag in the "Apply tags when a product with this term is purchased" setting with WooCommerce
- 🔧 Fixed Fixed the Delivery Address fields not syncing with RestroPress
- 🔧 Fixed Fixed Event Check-in tags not being applied with Event Tickets Plus when the ticket was sold via WooCommerce
- 🔧 Fixed Fixed Attendee Deleted tags not being applied with Event Tickets Plus when the ticket was sold via WooCommerce
- 🔧 Fixed Fixed the MailerLite integration logging an error when a subscriber record isn't found for an email address (should just be an info message)
- 🔧 Fixed Fixed PHP warning syncing the Gender field with BuddyPress when it was empty
- 🔧 Fixed Fixed custom fields not loading with Autonami 2.2.0
- 🔧 Fixed Fixed PHP warning loading usermeta fields from Autonami (same site)
- 🔧 Fixed Fixed unhandled fatal error when a HubSpot access token refresh failed
- 🔧 Fixed Fixed fatal error starting an auto login session with Dynamics 365 when the contact wasn't on any lists

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-29) 3.40.29 - 9/26/2022

- ✨ New Added Asynchronous Checkout support to CartFlows
- ✨ New Added support for syncing avatar URLs with wpForo
- ⚡️ Improved Improved Asynchronous Checkout support for WooFunnels
- ⚡️ Improved The HTTP API logs will now be associated with the user who initiaited the API call, instead of "system"
- 🔧 Fixed Fixed address and phone fields not updating with Groundhogg (REST API)
- 🔧 Fixed Fixed wpForo integration not loading since wpForo 2.0
- 🔧 Fixed Fixed Filter Queries - Advanced not working when no post types were specified, since 3.40.28
- 🔧 Fixed Fixed Filter Course Steps with LearnDash not working correctly when steps from multiple courses were listed on the same page
- 🔧 Fixed Fixed error `The entity "ccedil" was referenced, but not declared.` when syncing a country value of `Curaçao` to Infusionsoft
- 🔧 Fixed Fixed fatal error loading the Contact Fields settings tab when the "Remove WooCommerce Billing Address Fields for Free Checkout" plugin was active
- 🔧 Fixed Fixed error `Uncaught Error: Too few arguments to function WPF_WPBakery::shortcode_output()` when using the Accordion shortcode with WPBakery
- 🛠️ Dev Fixed WPF\_Pods::post\_save\_user() running when editing users in the admin (was intended to be for frontend edits only)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-28) 3.40.28 - 9/19/2022

- ✨ New Added Asynchronous Checkout support to WooFunnels
- ✨ New Added "Add to CRM" checkbox on admin Add New User form
- ✨ New Added as-you-type filter to Preview With Tags admin bar dropdown when there are more than 20 available tags
- ✨ New Added [event check-in support to Modern Events Calendar integration](https://wpfusion.com/documentation/events/modern-events-calendar/#event-check-ins)
- ✨ New Added Corporate Account Parent Email field for sync with MemberPress
- ⚡️ Improved Filter Queries Advanced will now take into account any `post__in` arguments when building up the array of post IDs to exclude (improves performance)
- ⚡️ Improved Moved MemberPress transaction expiration process from the `mepr-event-transaction-expired` to the `mepr-txn-expired hook`, should be more reliable
- 🔧 Fixed Fixed Filter Queries - Advanced not working on `post` post type when not speficied as the `post_type` in the `WP_Query` arguments
- 🔧 Fixed Fixed un-selected checkboxes not being loaded from HubSpot
- 🔧 Fixed Fixed PHP warning in Users Insights integration when users did not have a contact record
- 🛠️ Dev When a user's tags are modified, the memory cache at WPF\_Access\_Control::$can\_access\_posts will be cleared
- 🛠️ Dev`wpf_crm_loaded` action will now pass the active CRM as a parameter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-27) 3.40.27 - 9/15/2022

- 🔧 Fixed Fixed WP Fusion overriding Gravity Forms conditional logic for logged in users since 3.40.24

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-26) 3.40.26 - 9/14/2022

- 🔧 Fixed Fixed PHP warning marking content complete in LearnDash integration since 3.40.24
- 🔧 Fixed Fixed missing `use_utm_names` flag with Ontraport when updating existing contacts (prevented lead sources from being set)
- 🔧 Fixed Fixed `WPF_WooCommerce::get_contact_id_from_order()` returning an empty contact ID during guest checkout if the order was just placed
- 🔧 Fixed Fixed MemberPress Membership Statuses batch operation not applying Expired tags for free memberships

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-25) 3.40.25 - 9/12/2022

- 🔧 Fixed Fixed fatal error `Call to undefined method WPF_Thrive_Autoresponder_Main::get_data_for_setup()` when editing pages with Thrive Architect since 3.40.24

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-24) 3.40.24 - 9/12/2022

- ✨ New Added [Thrive Automator integration](https://wpfusion.com/documentation/other/thrive-automator/)
- ✨ New Added [Thrive Apprentice integration](https://wpfusion.com/documentation/learning-management/thrive-apprentice/)
- ✨ New Added [LearnDash Progress Meta batch operation](https://wpfusion.com/documentation/learning-management/learndash/#progress-meta)
- ⚡️ Improved Improved performance when using Filter Queries in Advanced mode and a query is for multiple post types
- ⚡️ Improved Improved staging site automatic detection on hosts that find/replace the site URL throughout the database when copying from live to staging
- ⚡️ Improved Improved and simplified duplicate site and staging site notices in the admin
- ⚡️ Improved Stopped saving LearnDash course progress to the `wp_usermeta` table, it will now just be synced as needed as users progress through courses
- 🔧 Fixed Fixed `?wpf-end-auto-login=true` query parameter not working
- 🔧 Fixed Fixed PHP warning applying LearnDash lesson attributes on LearnDash versions below 4.2.0
- 🔧 Fixed Fixed BuddyPress / BuddyBoss profile type names not syncing when the type was granted by a linked tag
- 🔧 Fixed Fixed Gravity Forms conditional logic not saving the condition in the admin if you don't click on the operator dropdown first
- 🔧 Fixed Fixed PHP error trying to sync the `order_notes` field with RestroPress
- 🔧 Fixed Fixed PHP warning `undefined array key user_id` in PeepSo integration
- 🔧 Fixed Fixed Advanced Ads integration settings not saving

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-23) 3.40.23 - 9/6/2022

- ✨ New Added integration with Subscriptions for WooCommerce
- ✨ New Added integration with YITH WooCommerce Checkout Manager
- ⚡️ Improved Improved support for Lock Lessons feature with LearnDash 4.2.0+ (now works in focus mode)
- ⚡️ Improved When a product is fully refunded from a partially refunded WooCommerce order, the tags applied with that product will be removed, and the refund tags for that product will be applied
- ⚡️ Improved With WooFunnels and Drip + ActiveCampaign, if an upsell is accepted after the order has been processed by Enhanced Ecommerce, it will be processed again (i.e. the existing invoice will be updated)
- ⚡️ Improved Made WP Fusion menu item and settings page title able to be white labelled via the `gettext` filter
- 🔧 Fixed Fixed fatal error viewing WooCommerce order received page, with WooFunnels, using an invalid order ID
- 🔧 Fixed Fixed memory leak when using \[the\_excerpt\] shortcode inside a post's main content area
- 🔧 Fixed Fixed Defer Until Activation setting with WP Members not being respected when using the Limit User Roles feature (in the WP Fusion Advanced settings)
- 🔧 Fixed Fixed fatal error `Too few arguments to function WPF_Access_Control::login_redirect()` with some themes since 3.40.21
- 🔧 Fixed Fixed PHP warning during auto-login session when a Return After Login redirect was attempted

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-22) 3.40.22 - 8/29/2022

- ✨ New Added [tag-based conditional logic to Gravity Forms form fields](https://wpfusion.com/documentation/lead-generation/gravity-forms/#form-field-visibility)
- ✨ New Added support for [syncing custom profile and registration fields with LearnPress](https://wpfusion.com/documentation/learning-management/learnpress/#syncing-meta-fields)
- ✨ New Added an integration with the [Modern Events Calendar RSVP Addon](https://wpfusion.com/documentation/events/modern-events-calendar/#RSVPs)
- ✨ New Added latitude and longitude fields for sync with NationBuilder
- ⚡️ Improved The WooCommerce Subscriptions Statuses batch operation will now retroactively apply the Free Trial Over tag to subscribers who had a free trial
- ⚡️ Improved Improved layout of Gravity Forms feed settings
- ⚡️ Improved Improved styling of EDD order status metabox with EDD 3.0
- 🔧 Fixed Fixed Apply Tags on View functionality not working when "Restrict Content" was disabled in the General settings
- 🔧 Fixed Fixed WP Fusion's access rules sometimes running on content in Elementor's edit mode for non-admin editors
- 🔧 Fixed Fixed connection settings getting overwritten when calling `wp_fusion()->settings->set()` after having switched to another multisite blog
- 🔧 Fixed Fixed Async Checkout sometimes running on pending orders on the Order Confirmed page with WooFunnels
- 🔧 Fixed Fixed fatal error trying to delete import groups that contained `WP_Error`s
- 🔧 Fixed Fixed EDD order status metabox showing incorrect information since EDD 3.0
- 🔧 Fixed Fixed fatal error auto-enrolling users into wpForo usergroups since wpForo 2.0
- 🔧 Fixed Fixed disabling the API queue also disabling staging mode

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-21) 3.40.21 - 8/23/2022

- ✨ New Added Membership Plan Name field for sync with WooCommerce Memberships
- ✨ New Added Status field for sync with JetPack CRM
- ⚡️ Improved Moved WPBakery controls to their own settings tab
- ⚡️ Improved Improved method of hiding content with WPBakery
- ⚡️ Improved Improved Return After Login feature, will also run on the `login_redirect` filter for cases where another plugin takes priority over the login redirect on `wp_login`
- Updated to support Paymattic (used to be WPPayForm Pro), and fixed form feeds not saving
- 🔧 Fixed Fixed creating a new BuddyBoss App Access Group based on a tag processing indefinitely
- 🔧 Fixed Fixed JavaScript lead source tracking not working on some hosts (cookie components were being URI-encoded)
- 🔧 Fixed Fixed PHP warning in Memberoni integration
- 🔧 Fixed Fixed Lesson Locked text not showing with LearnDash 4.3.0+
- 🔧 Fixed Fixed wpForo settings page missing since wpForo 2.0
- 🔧 Fixed Fixed WPBakery tag search returning all tags in the UI

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-20) 3.40.20 - 8/17/2022

- ✨ New Added [Holler Box integration](https://wpfusion.com/documentation/other/holler-box/)
- ✨ New Added Recruiter ID field for sync with NationBuilder
- Addded Avatar URL for sync with FluentCRM (can update the contact's photo by syncing a URL to an image)
- ✨ New Added error handling for the Sendinblue Sales CRM API
- ⚡️ Improved Asynchronous Checkout with WooCommerce will set a cron task for one minute in the future to confirm that the order was synced, for cases where the normal async process fails
- 🔧 Fixed Fixed "Converted" tags not being applied when running the EDD Recurring Payments statuses batch operation
- 🔧 Fixed Fixed Required Tags (Not) setting not working with WPBakery
- 🔧 Fixed Fixed tags displaying as IDs after saving a WPBakery element

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-19) 3.40.19 - 8/8/2022

- ✨ New Added Availability, Support Level, Inferred Support Level, Priority Level, Do Not Call, Mobile Opt-In, and Do Not Contact fields for sync with NationBuilder
- ⚡️ Improved If an EDD Software Licensing license is re-activated, the Expired tags will be removed
- ⚡️ Improved Improved support for syncing user capabilities when using a custom table prefix
- ⚡️ Improved Improved the UI for activating and deactivating the license on the Setup tab

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-18) 3.40.18 - 8/1/2022

- ✨ New Added Voting District fields for sync with NationBuilder
- ⚡️ Improved MemberPress active tags will now also be applied on the `mepr-event-non-recurring-transaction-completed` hook
- 🔧 Fixed Fixed a bug with automatic discounts and WooCommerce, where if the user's tags made them eligible for multiple discounts, navigating to the checkout page would apply an additional discount even when the cart total was already 0
- 🔧 Fixed Fixed If-So integration not working with CRMs that use tag IDs
- 🔧 Fixed Fixed tags not being applied properly when a LearnDash quiz with essay responses was graded in the admin
- 🔧 Fixed Fixed Clean Login integration not syncing user\_login and user\_pass
- 🔧 Fixed Fixed fatal error on the Contact Fields tab with WooCommerce Stripe Gateway 6.5.0
- 🔧 Fixed Fixed removing a user role syncing the user's role as the name of the role that was just removed
- 🛠️ Dev Fixed `wpf_get_setting_{$id}` filter not updating the option inputs on the settings page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-17) 3.40.17 - 7/25/2022

- ✨ New Added an integration with the BuddyBoss App's [new Access Controls component](https://wpfusion.com/documentation/membership/buddyboss/#access-controls)
- ✨ New Added support for Filter Queries on the Jet Engine Listing Grid widget
- ✨ New Added County fields for sync with NationBuilder
- ⚡️ Improved Improved performance when auto-enrolling users into BuddyPress profile types based on tags
- 🔧 Fixed Fixed WP Event Manager integration not syncing registrations when transitioning an attendee from Waiting to Confirmed
- 🔧 Fixed Fixed HubSpot lists showing as "Array" in If-So's Select A Condition dropdown
- 🔧 Fixed Fixed fatal error saving LifterLMS membership plans on PHP 8+, since 3.40.15

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-16) 3.40.16 - 7/19/2022

- 🔧 Fixed Fixed error with Jetpack CRM "Jetpack CRM plugin not active" since 3.40.15
- 🔧 Fixed Fixed staging mode not automatically activating when copying to a staging site on WP Engine and Cloudways
- 🔧 Fixed Fixed tags not loading with MooSend
- 🔧 Fixed Fixed PHP warnings in MooSend integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-15) 3.40.15 - 7/18/2022

- ✨ New Added support for [WP Event Manager's Sell Tickets Addon](https://wpfusion.com/documentation/integrations/wp-event-manager/)
- ⚡️ Improved If the logs are disabled, the logs database table will be dropped
- ⚡️ Improved Groundhogg integration will now log an error when updating a contact's email to an address that is already in use by another contact
- 🔧 Fixed Fixed WP Event Manager integration not syncing registrations added via the admin
- 🔧 Fixed Fixed GiveWP integration not syncing guest donors
- 🔧 Fixed Fixed tags configured on LearnDash groups not being applied when users were self-enrolled in groups via the Uncanny Toolkit Pro Group Sign Up module
- 🔧 Fixed Fixed tags with quotes in them not saving fully on LifterLMS course and membership settings
- 🔧 Fixed Fixed the `read only` HTML flag showing with HubSpot active lists in the Oxygen conditions builder dropdown
- 🔧 Fixed Fixed PHP warning in Contact Form 7 integration when editing the WP Fusion settings and no fields had been added to the form
- 🔧 Fixed Fixed guest registrations not being synced with WP Event Manager 3.1.30+
- 🔧 Fixed Fixed fatal error on WP Fusion settings page when connected to Jetpack CRM and the Jetpack CRM plugin was deactivated
- 🛠️ Dev Developers - Improved: The `validate_field_` filters in the settings will now only run when an option value has changed instead of on every save

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-14) 3.40.14 - 7/12/2022

- ⚡️ Improved Fluent Forms global settings page will now be hidden from the menu since it doesn't do anything
- 🔧 Fixed Fixed tags not being applied to recipient with Gifting for WooCommerce Subscriptions when user\_email and billing\_email were mapped to separate fields
- 🔧 Fixed Fixed fatal conflict with older WPBakery versions (Uncaught ArgumentCountError)
- 🔧 Fixed Fixed PHP notice in Advanced Ads integration on PHP 8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-13) 3.40.13 - 7/7/2022

- 🔧 Fixed Fixed WooCommerce Subscriptions integration disabled since 3.40.12
- 🔧 Fixed Fixed Mautic ignoring empty fields
- 🔧 Fixed Fixed fatal error loading the WP Fusion PeepSo Groups settings subpage when no groups had been configured

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-12) 3.40.12 - 7/5/2022

- ✨ New Added an integration with [WPBakery Page Builder](https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/)
- ✨ New Added an integration with [WooCommerce Payments](https://wpfusion.com/documentation/ecommerce/woocommerce-payments/)
- ✨ New Added Last Topic Completed field for sync with LearnDash
- ⚡️ Improved If a Gravity Forms User Registration Update feed runs, only the submitted usermeta fields will be synced to the CRM (instead of all fields in the database)
- ⚡️ Improved The MemberPress Memberships Statuses batch operation will now apply any tags configured via the Corporate Accounts addon when the user is a member of a sub-account
- 🔧 Fixed Fixed Return After Login feature not working since WordPress 6.0
- 🔧 Fixed Fixed the "Require Admin Permissions" setting (Advanced settings tab) not working
- 🔧 Fixed Fixed conflict with "WooCommerce Fattureincloud Premium" when loading the available WooCommerce checkout fields in the admin
- 🛠️ Dev Developers - Changed the EDD update check from a POST to a GET for improved performance

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-11) 3.40.11 - 6/28/2022

- ✨ New Added [Bricks builder integration](https://wpfusion.com/documentation/page-builders/bricks/)
- ⚡️ Improved If a user registers and has an existing Lead record in Gist, the Lead will be converted to a User
- 🔧 Fixed Fixed custom attendee fields not syncing with Event Tickets Plus v5.5.0+
- 🔧 Fixed Fixed Advanced Custom Fields multi-checkbox fields not syncing when MemberPress was active
- 🔧 Fixed Fixed MemberPress pending tags not being applied for pending transactions
- 🔧 Fixed Fixed Transaction Expired tags not being removed when running a MemberPress Memberships Statuses batch operation
- 🔧 Fixed Fixed Transaction Expired tags not being removed when a new transaction was placed for a membership product that was previously expired
- 🔧 Fixed Fixed some HTML and escaping glitches on the WooCommerce product panel upgrade nag with WP Fusion Lite

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-10) 3.40.10 - 6/20/2022

- ✨ New Added support for WP Global Cart (products configured on Site A will now have their tags applied when purchased on Site B)
- Addded an experimental method for setting the lead source tracking cookies on sites like WP Engine and Flywheel which sanitize UTM parameters out of request URIs
- 🔧 Fixed Fixed calls to `wpf_user_can_access()` failing during a webhook (because the user was not logged in, it was assumed they did not have any tags)
- 🔧 Fixed Fixed fatal error adding a new Solid Affiliate affiliate when the `saff_referral_count` field was enabled for sync
- 🔧 Fixed Fixed special characters in Gravity Forms multiselect options appearing UTF-8 encoded when using the Create Tag(s) from Value option

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-9) 3.40.9 - 6/13/2022

- ⚡️ Improved When searching in the Redirect if Access is Denied dropdown in the main WP Fusion meta box, results will by grouped by post type
- 🔧 Fixed Fixed [WooCommerce automatic discounts](https://wpfusion.com/documentation/ecommerce/woocommerce/#auto-applying-discounts) not applying when logging in using the checkout login form
- 🔧 Fixed Fixed MemberPress membership statuses batch operation not applying tags for expired transactions
- 🔧 Fixed Fixed Gist webhooks not working wih webhooks configured via automation rules
- 🔧 Fixed Fixed CartFlows optin fields not being automatically detected if there was an existing custom checkout field with the same field key
- 🔧 Fixed Fixed incorrect format when syncing dates to Bento

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-8) 3.40.8 - 6/6/2022

- ✨ New Added fields Marital Status and External ID for sync with NationBuilder
- ⚡️ Improved With the `update` and `update_tags` webhook with Drip, the tags will now be read out of the webhook payload, improving performance and saving an API call
- ⚡️ Improved If ActiveCampaign Deep Data responds with an error indicating the connection has been deleted, the saved connection ID will also be cleared out in WP Fusion
- ⚡️ Improved If a timestamp being synced to HubSpot is already a whole date (midnight UTC), it won't be recalculated using the site's timezone offset
- ⚡️ Improved Improved logging with WP Remote User Sync - The remote site that triggered the action will now be added to the log's source trace rather than a separate log entry
- 🔧 Fixed Fixed WP Fusion's LearnDash course settings getting reset when quick editing a LearnDash course in the post list table
- 🔧 Fixed Fixed conflict (`Uncaught ArgumentCountError`) with the auto-register functionality in FluentCRM v2.5.9
- 🔧 Fixed Fixed upsell tags not being applied with CartFlows when Asynchronous Checkout was enabled
- 🔧 Fixed Fixed staging mode activating if the `WPF_STAGING_MODE` constant was defined as `false` since 3.39.5
- 🔧 Fixed Fixed slashes in Mautic API passwords not getting unslashed before saving, and breaking the API connection
- 🔧 Fixed Fixed Ultimate Member integration syncing data back to the CRM after a new user was imported, when Push All was enabled
- 🔧 Fixed Fixed typo in Constant Contact class name

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-7) 3.40.7 - 5/30/2022

- ✨ New Added [`the_excerpt` shortcode for use in the restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-excerpts)
- ✨ New Added Current Page pseudo-field to [lead source tracking fields](https://wpfusion.com/documentation/tutorials/lead-source-tracking/)
- ⚡️ Improved If a

tag is set for a post (or the More block is used), and the Restricted Content Message is being displayed, the post excerpt (above the  tag) will be displayed
- ⚡️ Improved A notice will be logged if a ThriveCart success URL is detected but the ThriveCart Auto Login setting is disabled
- ⚡️ Improved If a WooCommerce subscription status is changed to Pending Cancel, the Next Payment Date field will be erased in the CRM
- ⚡️ Improved If an auto login link is visited, the Return After Login process will be triggered (if enabled)
- ⚡️ Improved User role won't be synced back to the CRM if it was changed by a webhook (improves performance)
- ⚡️ Improved If a form submission is triggering a new user registration (via Gravity Forms User Registration, WPForms User Registration, or similar), the tags applied by the form submission will be passed directly to the new user account (this fixes an issue where the tags may not have been fully saved in the CRM by the time the user is logged in)
- ⚡️ Improved Simplified the language and tooltips in the WP Fusion status meta box on single WooCommerce subscriptions
- Updated to support WPForms User Registration addon v2.0.0+
- 🔧 Fixed Fixed bulk editing access rules not working since WordPress 6.0
- 🔧 Fixed Fixed date fields not syncing to NationBuilder
- 🔧 Fixed Fixed special characters in LearnDash course/lesson/topic titles getting synced to the CRM ASCII-encoded
- 🔧 Fixed Fixed WooCommerce auto-applied discounts not respecting the usage limit per user setting during an auto-login session
- 🔧 Fixed Fixed WPForms multi-select inputs not syncing correctly when set to Create Tag(s) from Value
- 🔧 Fixed Fixed UI saying "Add Topics" instead of "Add Tags" when using a picklist field for tags with Salesforce
- 🔧 Fixed Fixed PHP warning `Expected parameter 2 to be array, null given` when bulk editing WP Fusion access rules and the Merge Changes box was checked
- 🛠️ Dev Added parameters `$event_id` and `$ticket_id` to the [`wpf_event_tickets_attendee_data` filter](https://wpfusion.com/documentation/filters/wpf_event_tickets_attendee_data/)
- 🛠️ Dev Added filter `wpf_loaded_tags` when tags are loaded from the CRM for a user

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-6) 3.40.6 - 5/23/2022

- ✨ New Added option to "skip already processed" to the [Event Tickets attendees batch operation](https://wpfusion.com/documentation/integrations/the-events-calendar-event-tickets/#exporting-attendees)
- 🔧 Fixed Fixed `billing_email` getting synced as a the user's `user_email` when a registered user checked out with WooCommerce
- 🔧 Fixed Fixed fatal error `Class 'WPF_Staging' not found` when trying to sync data to the CRM on a multisite install after calling `switch_to_blog()`
- 🔧 Fixed Fixed the Drip integration not loading custom fields with capital letters in the field keys
- 🛠️ Dev Improved - WP Fusion will not save the main settings if you are currently switched to another blog on a multisite install. This prevents settings from the original site overwriting the site you've switched to.

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-5) 3.40.5 - 5/16/2022

- ✨ New Added [WP Booking System integration](https://wpfusion.com/documentation/events/wp-booking-system/)
- ✨ New Added support for [Sendinblue event tracking](https://wpfusion.com/documentation/event-tracking/sendinblue-event-tracking/)
- ✨ New Added support for [Sendinblue site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/#sendinblue)
- ✨ New Added the ability to [restrict the purchase of LifterLMS access plans using tags](https://wpfusion.com/documentation/learning-management/lifterlms/#access-plans)
- ⚡️ Improved Mobile phone numbers synced to NationBuilder will be set to opted in for SMS by default
- 🔧 Fixed Fixed expiration date not syncing and tags not being applied for the pending cancellation status with the Paid Memberships Pro - Cancel on Next Payment Date addon v0.4
- 🔧 Fixed Fixed PHP warning in EventON integration
- 🔧 Fixed Fixed PHP warning (undefined array key) in Restrict Content Pro integration
- 🔧 Fixed Fixed PHP warning (undefined array key) in Uncanny LearnDash Groups integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-4) 3.40.4 - 5/8/2022

- ✨ New Added Add Attendees option to [EventON integration](https://wpfusion.com/documentation/events/eventon/)
- ✨ New Added option to apply tags when an attendee is checked in to an EventON event
- ⚡️ Improved When a Paid Memberships Pro membership level is cancelled the `pmpro_expiration_date` field will be erased
- ⚡️ Improved When a Paid Memberships Pro membership is cancelled and the Cancel on Next Payment Date addon is active, the next payment date will be synced to the `pmpro_expiration_date` field
- 🔧 Fixed Fixed missing AccessAlly settings submenu page with latest AccessAlly versions
- 🔧 Fixed Fixed CartFlows optin step settings not saving since 3.39.0
- 🔧 Fixed Fixed conflict with Premmerce Permalink Manager for WooCommerce (WP Fusion settings page not saving)
- 🔧 Fixed Fixed logs not properly displaying the results of a value modified by the `wpf_format_field_value` when the input variable was empty
- 🔧 Fixed Fixed custom fields not syncing with Constant Contact
- 🔧 Fixed Fixed phone numbers and addresses not syncing with Constant Contact
- 🔧 Fixed Fixed dates not syncing with Constant Contact
- 🔧 Fixed Fixed empty dates getting synced to Mailchimp as Jan 1st 1970
- 🛠️ Dev added action `wpf_crm_loaded`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-3) 3.40.3 - 4/25/2022

- 🔧 Fixed Fixed all content restricted for logged in users since 3.40.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-2) 3.40.2 - 4/25/2022

- ✨ New Added [EMPTY and NOT EMPTY comparisons](https://wpfusion.com/documentation/getting-started/shortcodes/#empty-and-not-empty) to the `user_meta_if` shortcode
- ✨ New Added Status field for sync with FluentCRM (same site)
- ⚡️ Improved If a contact has been deleted or merged in ActiveCampaign and a "not found" error is triggered, WP Fusion will try to look up the contact again by email address and retry the API call
- ⚡️ Improved If an invalid timestamp is being synced to HubSpot (+/- 1000 years from today) it will be removed from the payload to avoid an API error
- 🔧 Fixed Fixed fatal error applying tags to event attendees with FooEvents when the initial contact record creation failed due to an API error
- 🔧 Fixed Fixed "Apply tags when refunded" tags not being applied when a WooCommerce renewal order was refunded but the subscription was still active
- 🛠️ Dev Fixed the `wp_fusion_init_crm` action running too early for code added to functions.php (moved from `plugins_loaded` to `init`)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-1) 3.40.1 - 4/21/2022

- 🔧 Fixed Fixed `wp_fusion()->crm_base` variable not being initialized since 3.40.0
- 🔧 Fixed Fixed some weirdness with Staging Mode since 3.40.0: tags and contact IDs were getting lost when resyncing
- 🔧 Fixed Fixed bbPress archive restriction running when a redirect was saved in the settings but Restrict Archives not checked
- 🔧 Fixed Fixed "Apply tags when purchased" setting missing on WooCommerce variations when Restrict Content was disabled in the General settings
- 🔧 Fixed Fixed conflict with WooCommerce Anti Fraud (edits to users in the admin were syncing the user's email address to the admin's contact record)
- 🔧 Fixed Fixed PHP warning in `WPF_CRM_Base` when viewing an admin user profile before WP Fusion had been set up
- 🔧 Fixed Fixed error in WeGlot integration since 3.40.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-40-0) 3.40.0 - 4/18/2022

**Heads up!** This update cleans up a lot of old and redundant code in the CRM integration classes. It should be safe for regular users, but if you have any custom code or have created custom CRM modules, please test on a staging site before updating.

- Refactored and simplified CRM class structure: removed calls to wp\_fusion()->crm\_base, removed class `WPF_CRM_Queue`, removed redundancies in calling `WPF_Staging` CRM
- Refactored and simplified [lead source tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking)
- Removed parameter `$map_meta_fields` in CRM classes. Field mapping is now handled in `__call()` magic method in `WPF_CRM_Base` (i.e. `wp_fusion()->crm`)
- ✨ New Added [Constant Contact integration](https://wpfusion.com/documentation/installation-guides/how-to-connect-constant-contact-to-wordpress/)
- ⚡️ Improved WPML, WeGlot, TranslatePress, and GTranslate integrations will now sync the current language preference whenever a contact is created or updated in the CRM (including for guests)
- ⚡️ Improved When processing actions again for WooCommerce, Woo Subscriptions, GiveWP, EDD, and Gravity Forms, any tags will be applied regardless of the cache in WordPress (bypasses the Prevent Reapplying Tags option)
- 🔧 Fixed Fixed Events Manager integration not detecting cancelled bookings when the plugin language was non-English
- 🔧 Fixed Fixed admin users list showing No Contact ID for users who had a contact ID but no tags
- 🔧 Fixed Fixed WooCommerce Memberships for Teams team meta batch operation crashing when trying to access deleted users
- 🔧 Fixed Fixed updates to existing leads not working with Intercom and Gist

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-5) 3.39.5 - 4/13/2022

- 🔧 Fixed Fixed WooCommerce auto-applied coupons not working in AJAX requests since 3.39.3
- ⚡️ Improved MemberPress emails and receipts will no longer be sent when a user is auto-enrolled into a membership via a linked tag
- 🛠️ Dev Developers - Added function `wpf_is_staging_mode()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-4) 3.39.4 - 4/11/2022

- ✨ New Added [WPPayForm integration](https://wpfusion.com/documentation/ecommerce/wppayform/)
- ✨ New Added option to [use a custom picklist field for tags with Salesforce](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/)
- ✨ New Added option to configure form auto-login per form feed with Gravity Forms
- ✨ New Added link to view the donor's record in the CRM to the GiveWP / WP Fusion payment meta box
- ⚡️ Improved Auto login sessions will now be ended on the `set_logged_in_cookie` action instead of `wp_login` and `wp_authenticate` (fixes conflict with Gravity Perks Auto Login)
- ⚡️ Improved Updated NationBuilder add contact API endpoint to `/people/push` instead of `/people` to better handle merging duplicate records
- ⚡️ Improved Improved logging when syncing dates with invalid formats
- ⚡️ Improved Improved handling of European date formats with Advanced Custom Fields
- ⚡️ Improved Improved ActiveCampaign error handling
- ⚡️ Improved Updated Mailchimp `add_contact()` API call to `PUT` instead of `POST` to better handle duplicates
- 🔧 Fixed Fixed orders failing to sync when using Asynchronous Checkout and the WooCommerce PayPal Payments gateway, when payment capture was delayed by PayPal
- 🔧 Fixed Fixed PHP warning trying to apply tags via AJAX when an invalid tag name was provided
- 🔧 Fixed Fixed Gist integration not loading more than 50 available tags
- 🔧 Fixed Fixed user passwords getting recorded in the logs when registering a new user during an active auto-login session
- 🔧 Fixed Fixed date fields on ACF Frontend forms syncing the previous value
- 🔧 Fixed Fixed WooCommerce Subscriptions renewal payments getting processed by Asynchronous Checkout (if enabled)
- 🔧 Fixed Fixed PHP warning in Advanced Custom Fields integration when syncing repeaters
- 🔧 Fixed Fixed fatal error calling `wpf_get_current_user()` before the API was initialized
- 🔧 Fixed Fixed `contact data was not found or in an invalid format` error when receiving webhooks from FluentCRM on the same site
- 🔧 Fixed Fixed broken "Reauthorize with NationBuilder" link on the setup panel
- 🔧 Fixed Fixed (Lite) - Integrations settings tab will now be hidden in WP Fusion Lite

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-3) 3.39.3 - 4/4/2022

- ✨ New Added ACF Frontend integration
- Addded support for tag-based visibility controls with new Elementor Container widget
- ⚡️ Improved Improved Elementor visibility controls: protected sections and columns will now be completely removed from the page instead of hidden via CSS
- ⚡️ Improved WooCommerce automatic discounts will not be applied if the cart total has already been discounted to 0
- 🔧 Fixed Fixed Give email optin checkbox click also selecting the anonymous donation checkbox on donation forms that allow anonymous donations
- 🔧 Fixed Fixed WP Fusion's WooCommerce Subscriptions settings fields showing up on regular (non-subscription) variable products since WooCommerce Subscriptions v4.0.0
- 🔧 Fixed Fixed Capsule integration not returning the contact ID of newly created contacts
- 🔧 Fixed Fixed filtering in the logs not working if headers were already sent by another plugin
- 🔧 Fixed Fixed 401 / unauthorized errors not being correctly handled with Bento
- 🔧 Fixed Fixed dismissing notices on the WPF settings page not being remembered
- 🔧 Fixed Fixed HubSpot integration starting a site tracking session when batch exporting WooCommerce guest orders
- 🔧 Fixed Fixed adding a new list in HubSpot via WP Fusion causing the existing Select A List dropdown to only show `(array)` for each list option
- 🛠️ Dev Added filter `wpf_woocommerce_order_statuses_for_payment_complete`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-2) 3.39.2 - 3/28/2022

- 🔧 Fixed Fixed "contact not found" being treated as an irrecoverable API error with HubSpot, since v3.39.1
- 🔧 Fixed Fixed missing second parameter `$force` in [wpf\_get\_tags() function](https://wpfusion.com/documentation/functions/get_tags/)
- 🔧 Fixed Fixed WooCommerce Subscriptions psuedo fields not being declared as pseudo fields (would try to load subscription data from the CRM and save it in usermeta)
- 🔧 Fixed Fixed unhandled exception when updating a contact's email address to an email address already in use by another contact, with FluentCRM (same site)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-1) 3.39.1 - 3/28/2022

- ✨ New Added License ID and License Key fields for sync with EDD Software Licensing integration
- ✨ New Added "Skip Already Processed" checkbox option to Ninja Forms entry export batch operation
- ⚡️ Improved The tooltip for restricted content in the admin post list table will now show if a redirect has been configured on the post
- ⚡️ Improved Improved HubSpot error handling
- 🔧 Fixed Fixed MemberMouse integration not applying tags for new purchases since v3.37.12
- 🔧 Fixed Fixed webhooks with multiple contact records not being successfully processed with Salesforce and MailerLite since 3.38.31
- 🔧 Fixed Fixed import by tag not working with MailChimp and numeric tag IDs
- 🔧 Fixed Fixed Meta Box fields being registered as pseudo fields (only one-way sync)
- 🔧 Fixed Fixed Sync Tags on Login and Sync Meta on Login running at the start of a ThriveCart auto-login and sometimes erasing the user's cached tags
- 🔧 Fixed Fixed "The link you followed has expired" error when bulk deleting users and the Members plugin is active
- 🔧 Fixed Fixed unclosed tag on the Setup tab when connected to NationBuilder
- 🔧 Fixed Fixed fatal error submitting Elementor Forms when a multiselect or multi-checkbox type field was enabled for sync
- 🔧 Fixed Fixed PHP notice in WPF\_Integrations\_Base::guest\_registration()
- 🔧 Fixed Fixed PHP notice in WPF\_Simply\_Schedule\_Appointments::create\_update\_customer()

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-39-0) 3.39.0 - 3/21/2021

- ✨ New Added [option to completely disable the access control system](https://wpfusion.com/documentation/getting-started/general-settings/#restrict-content)
- ✨ New Added [a WP Fusion status metabox](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#subscription-management) when editing a single WooCommerce subscription
- ✨ New Added support for syncing custom fields added to a CartFlows optin step
- ⚡️ Improved Improved Sendinblue error handling for failed contact record creation
- 🔧 Fixed Fixed first and last name fields not syncing to Bento
- 🔧 Fixed Fixed SliceWP integration syncing the user's last name as the email address
- 🔧 Fixed Fixed SliceWP integration syncing currency symbol with total earnings
- 🔧 Fixed Fixed Gamipress default ranks not being synced during new user registrations
- 🔧 Fixed Fixed Gravity Forms feeds not processing when set to "Process only if payment is successful", and the initial payment was a subscription payment
- 🔧 Fixed Fixed CartFlows upsell settings missing since CartFlows v1.9.0
- 🔧 Fixed Fixed fatal error "Class name must be a valid object or string" when syncing tags to the remote site with WP Remote Users Sync
- 🔧 Fixed Fixed capabilities being saved to the database with `wp_` as the prefix instead of the current blog prefix
- 🔧 Fixed Fixed some unclosed HTML tags in the single taxonomy term settings table

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-46) 3.38.46 - 3/14/2022

- ✨ New Added setting Remove Tags - Cancelled to [Teams for WooCommerce Memberships integration](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#tagging-team-members)
- ✨ New Added Meta Box integration (custom user fields will now be auto-detected and listed for sync)
- ⚡️ Improved "Automatic tags" (i.e. dynamic tags) with WooCommerce will no longer be removed when an order is refunded (never worked properly and is inconsistent with the other general tag settings)
- ⚡️ Improved Improved error handling with ActiveCampaign (403 errors are now properly handled)
- 🔧 Fixed Fixed SliceWP integration only syncing Paid commissions, not Unpaid
- 🔧 Fixed Fixed Push User Meta action not syncing SliceWP fields
- 🔧 Fixed Fixed Subscription in Trial tags not applying with new EDD subscriptions
- 🔧 Fixed Fixed the AffiliteWP Referral Count field counting pending and rejected referrals
- 🔧 Fixed Fixed un-checked checkboxes not syncing with Sendinblue boolean fields
- 🔧 Fixed Fixed FluentCRM (same site) custom fields not being erased when a null value was synced
- 🔧 Fixed Fixed BuddyBoss Profile Complete tags not applying since 3.38.44
- 🔧 Fixed Fixed BuddyBoss Profile Complete tags applying on every other widget view
- 🔧 Fixed Fixed logs not indicating a value was modified by the `wpf_format_field_value` filter when only the type had changed (fixed `!=` to `!==`)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-45) 3.38.45 - 3/7/2022

- ⚡️ Improved The Restrict Forums setting with bbPress will now also apply to forums that are displayed within a BuddyBoss / BuddyPress group's discussion tab
- ⚡️ Improved Bento event tracking can now accept an array for `$event_data`
- ⚡️ Improved Shortened the URL length when filtering data in the activity logs
- 🔧 Fixed Fixed WooCommerce coupon restriction by tags not working when the WooCommerce PDF Vouchers plugin is active
- 🔧 Fixed Fixed dashes in LearnDash course or lesson titles getting synced to the CRM as HTML characters with the Last Lesson Completed, Last Course Completed, and Last Course Progressed fields
- 🔧 Fixed Fixed dates syncing to HubSpot in UTC not local time
- 🔧 Fixed Fixed Give Donations batch operation not working since 3.38.37
- 🔧 Fixed Fixed custom fields not syncing to Autonami
- 🔧 Fixed Fixed fatal error checking if WooCommerce Subscriptions was running on a duplicate site with Woo Subscriptions versions less than 4.0, since 3.38.44
- 🔧 Fixed Fixed Uncanny Groups integration settings hidden on subscription products
- 🔧 Fixed Fixed fatal error clicking Process WP Fusion Actions Again on a Gravity Forms entry from a deleted form
- 🔧 Fixed Fixed Import Tool not working with Mailchimp since 3.38.35
- 🔧 Fixed Fixed Select a CRM Field dropdown hidden on WPForms feeds (z-index was too low)
- 🔧 Fixed Fixed date filter in the logs not working

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-44) 3.38.44 - 2/28/2022

- ✨ New Added Phone 1 Extension, Phone 1 Type, Phone 2, Phone 2 Extension, Phone 2 Type fields for sync with Infusionsoft
- ✨ New Added Reauthorize with Dynamics 365 link to the Setup tab when connected to MS Dynamics 365
- ⚡️ Improved Improved Zoho error handling, and made error messages clearer
- ⚡️ Improved WP Fusion will now track a user's BuddyBoss / BuddyPress profile completion in the database to avoid the complete tags being reapplied every time the widget is loaded
- 🔧 Fixed Fixed gift recipient's contact record getting merged with the gift purchaser with WooCommerce Subscriptions Gifting when the billing\_email was enabled for sync
- 🔧 Fixed Fixed update contact method not working with FluentCRM (REST API)
- 🔧 Fixed Fixed contact updates in FluentCRM (same site) triggering data to be loaded back into WP Fusion right away
- 🔧 Fixed Fixed Approved tags not being applied after a successful Stripe payment with Events Manager
- 🔧 Fixed Fixed Cancelled tags not being applied when a booking was rejected or deleted with Events Manager
- 🔧 Fixed Fixed PHP warning when using LearnDash wtih Filter Course Steps on a course that doesn't have any sections, since 3.38.43
- 🔧 Fixed Fixed Contact Form 7 applying "Submit" as a tag when no other tags were specified
- 🔧 Fixed Fixed use of deprecated function WC\_Subscriptions::is\_duplicate\_site() with WooCommerce Subscriptions 4.0
- 🔧 Fixed Fixed `PHP Notice: register_rest_route was called incorrectly` with Beaver Themer integration
- 🔧 Fixed Fixed AffiliateWP affiliate details not syncing when an affiliate was edited in the admin
- 🔧 Fixed Fixed checkboxes in the addon plugins that should be checked by default not being checked by default
- 🔧 Fixed Fixed MemberPress checkbox fields syncing as "on" instead of `true`
- 🔧 Fixed Fixed MemberPress multiselect fields not syncing
- 🛠️ Dev Developers - Added [wpf\_admin\_override filter](https://wpfusion.com/documentation/filters/wpf_admin_override/)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-43) 3.38.43 - 2/21/2022

- ✨ New Added Microsoft Dynamics 365 CRM integration
- ✨ New Added [SliceWP integration](https://wpfusion.com/documentation/affiliates/slicewp/)
- ✨ New Added Remove Tags and Apply Tags - Cancelled settings [to Events Manager integration](https://wpfusion.com/documentation/events/events-manager/#tagging-attendees)
- ⚡️ Improved Improved (event tracking) - If an event value is sent to Bento [as a valid JSON string](https://wpfusion.com/documentation/event-tracking/bento-event-tracking/#advanced-usage) then that will be used in place of the default `name` and `val` properties in the `details` of the event payload
- ⚡️ Improved Bento Event Tracking will now send events to `event.details.name` and `event.details.val`
- 🔧 Fixed Fixed Gravity Forms feeds not processing if they were set to only run on a successful Stripe payment, and the Payment Collection Method was set to Stripe Credit Card Field in the Gravity Forms settings
- 🔧 Fixed Fixed tags getting removed during a failed WooCommerce Subscriptions renewal payment, if Remove Tags was checked even though the user still has a separate active subscription to the same product, since 3.38.41
- 🔧 Fixed Fixed restricted content message appearing by default on bbPress search results page
- 🔧 Fixed Fixed checkbox fields not syncing with HubSpot
- 🔧 Fixed Fixed tags not applying using Process WP Fusion Actions Again on a WooCommerce order since 3.38.42
- 🔧 Fixed Fixed Import Users tool not working with FluentCRM (same site)
- 🔧 Fixed Fixed Filter Course Steps with LearnDash not correctly calculating the position of sections after lessons had been removed from those sections (maybe not 100% fixed yet)
- 🔧 Fixed Fixed fatal error approving new users in BuddyPress who were registered via Gravity Forms User Registration, while the Defer Until Activation setting was enabled in WP Fusion

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-42) 3.38.42 - 2/14/2022

- ✨ New Added MooSend CRM integration
- ✨ New Added [order sync status column](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-status-column) to WooCommerce orders list table
- ✨ New Added - With HubSpot, Infusionsoft, FluentCRM, and Groundhogg, you can now type new tag names into the Select Tag(s) dropdown, and if the tag doesn't exist WP Fusion can send an API call to create the new tag
- ✨ New Added links to the logs to go directly to the CRM contact record for each user
- ✨ New Added Billing First Name and Billing Last Name fields for sync to Paid Memberships Pro integration
- ⚡️ Improved WooCommerce + WP Fusion order status metabox will now require the `manage_woocommerce` permission (i.e. Shop Manager)
- ⚡️ Improved Logs will now show "user-login" as the source when data was synced due to Login Meta Sync or Login Tags Sync
- ⚡️ Improved The load\_contact() method with ActiveCampaign will now use the v1 API for improved performance
- 🔧 Fixed Fixed new Events Manager bookings with the Approved status not applying the Approved tags
- 🔧 Fixed Fixed - Running Process WP Fusion Actions again on a WooCommerce order will now remove the `order_action=wpf_process` query parameter after it's finished so orders aren't accidentally exported twice

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-41) 3.38.41 - 2/8/2022

- 🔧 Fixed Fixed syntax error with PHP <= 7.2 since 3.38.40
- 🔧 Fixed Fixed redundant WooCommerce integration and WooCommerce Subscriptions integration both applying the same tags for each renewal order
- 🔧 Fixed Fixed - Outgoing API calls to remove and apply the same tag in the same request will be ignored (fixes issue of tag changes getting processed out of order in the CRM)
- 🔧 Fixed Fixed product-specific WooCommerce Subscriptions fields getting orphaned on the main Contact Fields list even after being disabled
- 🔧 Fixed Fixed 422 error with Drip when trying to sync data into a field that had a dash or space in the field ID
- 🔧 Fixed Fixed Defer Until Activation setting with BuddyPress not working when using the Limit User Roles option in the WP Fusion settings
- 🔧 Fixed Fixed error loading Infusionsoft / Keap social media fields
- 🔧 Fixed Fixed failed user\_register actions logging the full user POST data to the logs (including plaintext passwords)
- Extended default ActiveCampaign HTTP timeout to 20 seconds (instead of 15)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-40) 3.38.40 - 2/7/2022

- ✨ New Added [Solid Affiliate integration](https://wpfusion.com/documentation/affiliates/solid-affiliate/)
- ✨ New Added IP Address field to Contact Fields list
- ✨ New Added ability to create new tags via the Select Tag(s) dropdown with Ontraport
- ⚡️ Improved [Staging site detection](https://wpfusion.com/documentation/tutorials/staging-sites/) will now prompt you whether to recognize the new site URL as the main site vs. staying in staging mode (similar to WooCommerce Subscriptions)
- ⚡️ Improved When creating a new lead in Kartra, the user's IP address will be sent by default
- 🔧 Fixed Fixed updated Next Payment Date not syncing when editing a WooCommerce subscription in the admin (was syncing the previous value)
- 🔧 Fixed Fixed some product-specific fields (Name, SKU, Start Date, End Date) not syncing with WooCommerce Subscriptions
- 🔧 Fixed Fixed deleted tags in Mailchimp not being removed from the dropdowns in WP Fusion
- 🔧 Fixed Fixed LearnDash course sections displaying in the wrong positions when using Filter Course Steps.
- 🔧 Fixed Fixed "contact data not found" error receiving Groundhogg REST webhooks
- 🔧 Fixed Fixed Bento event tracking not working when specifying a value
- 🔧 Fixed Fixed Paid Memberships Pro expiration date not syncing when manually edited on the user's profile
- 🔧 Fixed Fixed error `Call to a member function get_title() on bool` when processing a WooCommerce Subscriptions renewal payment for a deleted product

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-39) 3.38.39 - 2/2/2022

- Hopefully fixed the issues with Staging Mode auto-activating since 3.38.35: changes to the home\_url() as well as changes between http:// and https:// will no longer activate staging mode
- ⚡️ Improved Filter Queries will now be bypassed when DOING\_CRON is set to true
- 🔧 Fixed Fixed WP Fusion subscription settings hidden on WooCommerce Subscriptions products with Subscriptions 4.0+
- 🔧 Fixed Fixed event value not syncing with Bento event tracking
- 🔧 Fixed Fixed PHP warning calling wp\_fusion()->user->get\_user\_meta() when not logged in
- 🔧 Fixed Fixed bug in the logs where link to edit a WooCommerce order would be replaced by link to edit the contact in the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-38) 3.38.38 - 1/31/2022

- Additional fixes for staging mode auto-activating when the admin language was changed with WPML and TranslatePress, since 3.38.35
- Tested for WordPress 5.9

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-37) 3.38.37 - 1/31/2022

- ✨ New Added [ARMember integration](https://wpfusion.com/documentation/membership/armember/)
- ✨ New Added [Apply Tags - Check-in setting](https://wpfusion.com/documentation/integrations/the-events-calendar-event-tickets/#event-tickets) to Event Tickets integration
- ✨ New Added support for syncing to Leads with Intercom (enable from the Integrations tab)
- ✨ New Added Subscription Product SKU field for sync with WooCommerce Subscriptions
- ⚡️ Improved Updating subscribers with Bento will now use the UUID as an identifier, not the email address, which fixes issues arising from users changing their email address and getting disconnected from their subscriber record
- ⚡️ Improved ACF User fields with the Multiple option enabled will now sync an array of full user names (not IDs)
- ⚡️ Improved Improved Autonami error handling
- 🔧 Fixed Fixed query filtering running twice on WooCommerce products when Filter Queries was enabled at the same time as Hide Restricted Products
- 🔧 Fixed Fixed private BuddyPress XProfile fields not being exported with the Push User Meta batch operation
- 🔧 Fixed Fixed staging mode auto-activating when the admin language was changed with WPML and TranslatePress, since 3.38.35

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-36) 3.38.36 - 1/25/2022

- 🔧 Fixed Fixed Gravity Forms feed settings menu item not showing since 3.38.35

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-35) 3.38.35 - 1/24/2022

- ✨ New Added social fields for sync with Infusionsoft / Keap (click Refresh Available Fields to load them)
- ✨ New Added dynamic tagging support to Mailchimp integration (requires resetting the settings for existing installs)
- ⚡️ Improved WP Fusion will now run before any Gravity Forms User Registration feeds. This allows for a subscriber to update their email address in the CRM via an auto-login link before registering a new account.
- ⚡️ Improved Improved Mailchimp API performance for applying and removing tags
- ⚡️ Improved Improved Mailchimp contact ID lookup — will now only return exact matches (fixes an issue where tags would be applied to the wrong contact when using sub-inboxes with Gmail)
- ⚡️ Improved The new standalone api.php endpoint will now use wp\_cache\_set() to improve performance when looking up user IDs from contact ID
- ⚡️ Improved If the site URL changes, WP Fusion will automatically enable Staging Mode
- 🔧 Fixed Fixed "Apply Lists" option appearing on Gravity Forms feeds when connected to FluentCRM
- 🔧 Fixed Fixed 5 second timeout loading a contact with Maropost (increased to 20s)
- 🔧 Fixed Fixed fatal error with HTTP API Logging when the HTTP response was a WP\_Error object, since 3.38.34
- 🔧 Fixed Fixed calls to deprecated function GetOption() in WishListMember integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-34) 3.38.34 - 1/18/2022

- ✨ New Added Easy Digital Downloads Checkout Fields Manager integration
- ✨ New Added support for syncing user profile data from [Advanced Custom Fields flexible content fields](https://wpfusion.com/documentation/other/advanced-custom-fields/#repeaters-and-flexible-content)
- ✨ New Added [Apply Tags - Pending option](https://wpfusion.com/documentation/membership/memberpress/#tagging) to MemberPress integration
- ✨ New Added [Link with Tag functionality](https://wpfusion.com/documentation/learning-management/learnpress/) to LearnPress integration
- ✨ New Added View In CRM link to the user action links on the All Users list in the admin
- ⚡️ Improved Auto login will set a cookie `wordpress_logged_in_wpfusioncachebuster` which should bypass caching on most configurations
- ⚡️ Improved If the full WP Fusion is activated, the WP Fusion Lite plugin will be automatically deactivated
- ⚡️ Improved Removed some redundant data in the logs when HTTP API logging is enabled
- ⚡️ Improved HTTP API logging will now show JSON-decoded request and response bodies where applicable
- ⚡️ Improved Improved error handling with ActiveCampaign Deep Data
- ⚡️ Improved Improved HubSpot error handling
- 🔧 Fixed Fixed Active lists not showing up as options in the Select A List dropdown for the Import Users tool with HubSpot
- 🔧 Fixed Fixed If-Menu integration not working with CRMs that use tag categories
- 🔧 Fixed Fixed Required Tags (all) and Required Tags (not) settings displaying on admin menu editor even when User Menus was inactive
- 🔧 Fixed Fixed parse error in ActiveCampaign integration with PHP 7.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-33) 3.38.33 - 1/10/2022

- ✨ New Added [User Menus integration](https://wpfusion.com/documentation/tutorials/menu-item-visibility/#advanced-usage)
- ✨ New Added Status section to WP Fusion settings with status and debug information about the plugin
- ✨ New Added support for Group and [Repeater fields with Advanced Custom Fields](https://wpfusion.com/documentation/other/advanced-custom-fields/#repeaters)
- ✨ New Added notice to HubSpot integration about enabling marketing contacts for the WP Fusion app
- ⚡️ Improved ActiveCampaign integration now fully uses the WordPress HTTP API instead of the ActiveCampaign PHP SDK
- ⚡️ Improved HTML tags will be removed when exporting the activity logs to .csv
- ⚡️ Improved When resetting the main settings page, the cached contact IDs and tags will be deleted for all users (this fixes "Invalid contact ID" errors when switching between CRM accounts)
- 🔧 Fixed Fixed Quiz Failed tags not being applied since LearnDash 3.6.0
- 🔧 Fixed Fixed taxonomy term protections not working since 3.38.32
- 🔧 Fixed Fixed fatal error loading the `role` field with an array value (now the first array value will be used as the role)
- 🔧 Fixed Fixed ActiveCampaign multiselect fields loaded as text being prepended/appended by \|\|
- 🔧 Fixed Fixed missing scope `crm.lists.write` with HubSpot (prevented adding contacts to static lists for OAuth apps connected after December 15th 2021)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-32) 3.38.32 - 1/3/2022

- ✨ New Added support for [Fluent Forms User Registration](https://wpfusion.com/documentation/lead-generation/fluent-forms/#user-registration)
- ✨ New Added option to [sync WooCommerce Subscriptions details to separate custom fields](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#syncing-subscription-fields) in the CRM for each subscription product
- ⚡️ Improved Improved logging of authentication errors with Salesforce
- ⚡️ Improved Stopped ending auto-login sessions on registration (`user_register` hook)
- Updated ActiveCampaign integration to use v3 API for loading contacts
- 🔧 Fixed Fixed the Prevent Reapplying Tags setting not working if at least one of the tags to be applied was new
- 🔧 Fixed Fixed updater license check returning "invalid item ID" message and deactivating license
- 🔧 Fixed Fixed PHP notice "wpdb::prepare was called incorrectly" when checking taxonomy term access rules on posts
- 🔧 Fixed Fixed PHP warning during MemberMouse registration when Advanced Custom Fields is active
- 🔧 Fixed Fixed issue syncing tags with Emercury for subscribers that had upper case letters in their email address

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-31) 3.38.31 - 12/27/2021

- ✨ New Added a new api.php endpoint that [can be used for super fast async webhook processing](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-endpoint)
- Removed old wpf\_post.php file and API endpoint
- ✨ New Added an option to process asynchronous webhooks using a cron job instead of trying to start the background worker with each webhook
- ✨ New Added link to admin user profile to view the logs for that user
- ⚡️ Improved Improved performance when using async=true webhooks. The background worker will no longer attempt to start if it is already running.
- ⚡️ Improved The process lock time for the background worker will now respect the site's PHP `max_execution_time`. The lock time will be the max time + 30 seconds.
- ⚡️ Improved Improved ActiveCampaign error handling so that it now looks at the response code instead of message (some errors were not being caught properly with non-English accounts)
- 🔧 Fixed Fixed Resync Tags for Every User operation not triggering automated course enrollments
- 🔧 Fixed Fixed PHP warning trying to lookup ActiveCampaign Deep Data customer ID when an existing contact was not yet registered as a Deep Data customer
- 🛠️ Dev Added filter `wpf_query_filter_cache_time`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-30) 3.38.30 - 12/20/2021

- ✨ New Added support for [custom objects with HubSpot](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/)
- 🔧 Fixed Fixed new event tracking integration disabled with Gist and Intercom
- 🔧 Fixed Fixed layout glitch on EDD admin customer profile with CRMs with long names
- 🔧 Fixed Fixed fatal error in Woo Memberships for Teams integration when adding an invalid user ID to a team
- 🔧 Fixed Fixed infinite redirect with LearnDash when using Shared Course Steps + Filter Course Steps, and trying to access a topic via permalink

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-29) 3.38.29 - 12/13/2021

- 🔧 Fixed Fixed parse error in Event Tickets integration since 3.38.29
- 🔧 Fixed Fixed missing event value with Gist event tracking

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-28) 3.38.28 - 12/13/2021

- ✨ New Added [If Menu integration](https://wpfusion.com/documentation/other/if-menu/)
- ✨ New Added event tracking support for Gist
- ✨ New Added event tracking support for Intercom
- ⚡️ Improved Invalid characters will now automatically be removed from the event name with ActiveCampaign event tracking
- ⚡️ Improved If HTTP API logging is enabled, event tracking API calls will be sent `'blocking' => true` so that the responses are logged
- ⚡️ Improved Select Tags boxes in Appearance >> Menus editor will now lazy load their tags, for improved menu editing performance
- ⚡️ Improved Stopped syncing user ID when updating Gist subscribers (should cause records to get merged less often)
- ⚡️ Improved Moved LearnDash course settings to standalone settings tab
- 🔧 Fixed Fixed Gravity Forms not pre-filling during an auto-login session when the form was added via the Elementor "form" widget
- 🔧 Fixed Fixed PHP warning in Event Tickets integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-27) 3.38.27 - 12/6/2021

- ✨ New Added user search field to the logs table
- ✨ New Added lock indicator on locked LearnDash topics when Lock Lessons is enabled
- ✨ New Added setting to the batch operations to re-process locked records for WooCommerce orders, Easy Digital Downloads payments, GiveWP donations, and Gravity Forms entries
- ✨ New Added view in CRM link to Easy Digital Downloads customer profile
- ✨ New Added view in CRM links to Mailchimp integration
- ✨ New Added view in CRM links to Bento integration
- ⚡️ Improved Improved support for using Create Tag(s) from Value with multi-checkbox inputs on forms
- ⚡️ Improved If an `email` parameter is provided in a webhook request, WP Fusion will attempt to detect when a contact ID associated with a user may have changed due to a merge
- ⚡️ Improved If a field type is set to "raw" an empty value loaded over the CRM will erase the value saved in WordPress
- 🔧 Fixed Fixed has\_access() check always failing in latest BuddyBoss App versions
- 🔧 Fixed Fixed "The tags must be an array." error message with HighLevel when using Create Tag(s) from Value
- 🔧 Fixed Fixed attendee phone number and company not syncing with FooEvents when the attendee's email is the same as the customer email
- 🔧 Fixed Fixed wpf\_infusionsoft\_safe\_tags filter not stripping invalid characters out of tag category names
- 🛠️ Dev In cases where posts (i.e. orders) were marked with `wpf_complete` set to `true`, `wpf_complete` will now be set to the time (`current_time( 'Y-m-d H:i:s' )`)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-26) 3.38.26 - 11/30/2021

- 🔧 Fixed Fixed CartFlows settings panel not clickable in CartFlows Pro v1.7.2
- 🔧 Fixed Fixed fatal error in MemberPress Memberships Statuses batch operation when trying to apply Cancelled tags based on transaction status

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-25) 3.38.25 - 11/22/2021

- ✨ New Added option to prefix usermeta keys with the current blog prefix to avoid sharing contact IDs and tags across sub-sites on multisite installs (can be enabled from the Advanced settings tab)
- ✨ New Added warning to the settings about applying tags for pending WooCommerce orders
- ✨ New Added [`timezone-offset` attribute](https://wpfusion.com/documentation/getting-started/shortcodes/#user-meta-formatting-timezone-offset) to `user_meta` shortcode
- ✨ New Added logging for when a date failed to sync to the CRM because the input date format couldn't be converted to a timestamp
- ✨ New Added error logging for failed Salesforce access token refreshes
- 🔧 Fixed Fixed Join Date fields not syncing with Restrict Content Pro
- 🔧 Fixed Fixed Notes field not syncing with Restrict Content Pro
- 🔧 Fixed Fixed EDD Orders exporter exporting unpaid orders
- 🔧 Fixed Fixed PHP warning tracking events with HubSpot
- 🔧 Fixed Fixed request to refresh Salesforce access token not being recorded by HTTP API Logging
- 🔧 Fixed Fixed fatal error updating a Bento subscriber without an email
- 🛠️ Dev Added filter `wpf_restricted_terms_for_user`
- 🛠️ Dev Added filter `wpf_taxonomy_rules`
- 🛠️ Dev Added constants `WPF_CONTACT_ID_META_KEY` and `WPF_TAGS_META_KEY`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-24) 3.38.24 - 11/15/2021

- ✨ New Added note to Salesforce setup panel regarding completing the installation of the OAuth app
- ⚡️ Improved Applying tags with Bento will now trigger events using the `add_tag_via_event` command (thanks @jessehanley)
- 🔧 Fixed Fixed EDD Email Optin tags getting applied regardless of email optin consent checkbox being checked
- 🔧 Fixed Fixed PHP warning when using Uncanny Toolkit Pro and FluentCRM or Groundhogg
- 🛠️ Dev Developers - The active CRM object is now passed by reference via the `wp_fusion_init_crm` action and [can be operated on](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/#using-a-custom-client-id-and-authorization-url)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-23) 3.38.23 - 11/8/2021

- ✨ New Added `IN` and `NOT IN` comparisons [to the `user_meta_if` shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#in-and-not-in)
- ✨ New Added Apply Tags - Trialling and Apply Tags - Converted to EDD Recurring Payments integration
- ✨ New Added Export to CSV button to Activity Logs
- ⚡️ Improved Mailchimp Audience select box is moved to the Setup tab and fields and tags can be loaded for a new audience without having to save the settings first
- ⚡️ Improved Mailchimp setup will now show a warning if you try to connect and there are no audiences in your account
- ⚡️ Improved Added a notice to the logs when a new ConvertKit subscriber is being created with a random tag due to no default tag being set
- 🔧 Fixed Fixed WooCommerce order status changes in the admin list table not applying tags when Asynchronous Checkout was enabled
- 🔧 Fixed Fixed LearnDash course progress tags not being applied when the Autocomplete Lessons & Topics Pro module was enabled in Uncanny Toolkit Pro for LearnDash
- 🔧 Fixed Fixed MemberPress Memberships Statuses batch operation not applying tags for cancelled, trial, and expired subscription statuses
- 🔧 Fixed Fixed Subscription Cancelled tags not be applied with MemberPress when a subscription is cancelled after its expiration date
- 🔧 Fixed Fixed new users registered via Gravity Forms User Registration not being synced during an auto-login session
- 🔧 Fixed Fixed Intercom rejecting new subscribers without a last name
- 🔧 Fixed Fixed `unknown class FrmRegEntryHelper` error when registering new users on older versions of Formidable Forms
- 🔧 Fixed Fixed PHP warning loading subscriber with no tags from Intercom
- 🔧 Fixed Fixed upgrade to 3.38.22 not setting autoload = yes on `wpf_taxonomy_rules`, which made content protected by taxonomy rules un-protected until saved again
- 🛠️ Dev Developers - Added `wpf_woocommerce_subscription_sync_fields` filter
- 🛠️ Dev Developers - Added function `wpf_get_current_user_email()`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-22) 3.38.22 - 11/1/2021

- ⚡️ Improved Improved performance with checking post access against taxonomy term restrictions
- ⚡️ Improved If a field type is set to multiselect and it is stored as a comma-separated text value, the value will be synced as an array with supported CRMs
- ⚡️ Improved If a page using an auto-login query string (?cid=) is refreshed, for example due to a form submission, this will no longer force reload the contact's tags from the CRM
- ⚡️ Improved Improved Zoho error handling
- 🔧 Fixed Fixed tags linked to BuddyBoss profile types not being assigned during registration when new user accounts are auto-activated
- 🔧 Fixed Fixed restricted LearnDash lessons not being hidden by Filter Course Steps in Focus Mode with the BuddyBoss theme
- 🔧 Fixed Fixed Lock Lessons with LearnDash outputting lock icon on lessons that were already locked by LearnDash core

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-21) 3.38.21 - 10/26/2021

- 🔧 Fixed Fixed all content being protected when no term taxonomy rules were set since 3.38.20

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-20) 3.38.20 - 10/26/2021

- 🔧 Fixed Fixed SQL warning checking term access restrictions since 3.38.17
- 🔧 Fixed Fixed `wpf_salesforce_auth_url` filter (for connecting to sandboxes) not working with new OAuth integration from 3.38.17
- 🔧 Fixed Fixed WP Affiliate Manager integration not applying Approved tags when affiliates are auto-approved at registration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-19) 3.38.19 - 10/25/2021

- 🔧 Fixed Fixed error with WP Remote Users Sync `Cannot redeclare WPF_WP_Remote_Users_Sync::$slug`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-18) 3.38.18 - 10/25/2021

- 🔧 Fixed Fixed error with Advanced Ads `Cannot redeclare WPF_Advanced_Ads::$slug`
- 🔧 Fixed Fixed - Infusionsoft integration will force all numeric values to sync as text to get around "java.lang.Integer cannot be cast to java.lang.String" errors

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-17) 3.38.17 - 10/25/2021

- ✨ New **Added Salesforce OAuth integration - Salesforce users will need to go to the WP Fusion settings page one time and grant OAuth permissions to use the new API**
- ✨ New Added setting to apply tags when a review is left on a WooCommerce product
- ✨ New Added option to sync total points earned on a LearnDash quiz to a custom field in the CRM
- ⚡️ Improved When using Filter Queries - Advanced, posts protected by taxonomy terms will be properly excluded
- ⚡️ Improved Improved performance for Filter Queries with Elementor posts lists
- ⚡️ Improved If "Create contacts for new users" is disabled, a WooCommerce checkout by a registered user will now correctly apply the product tags directly to the contact record in the CRM
- ⚡️ Improved Removed "old" WooCommerce asynchronous checkout processor via WP Background Processing in favor of an AJAX request bound to the successful payment response from the gateway
- ⚡️ Improved If the LearnDash - WooCommerce plugin triggers an enrollment into a course or group which results in tags being applied, this will be indicated in the logs
- ⚡️ Improved Slowed down batch exporter with Bento to get around API throttling
- ⚡️ Improved When bulk editing more than 20 WooCommerce orders in the admin, WP Fusion will bypass applying any tags to avoid a timeout
- 🔧 Fixed Fixed fatal error `undefined method FacetWP_Settings::get_field_html()` in FacetWP 3.9
- 🔧 Fixed Fixed read only lists not showing on admin user profile with HubSpot since 3.38.16
- 🔧 Fixed Fixed Infusionsoft not loading more than 1000 available tags per category
- 🔧 Fixed Fixed custom fields not syncing when creating a new Bento contact
- 🔧 Fixed Fixed 429 / "API limits exceeded" errors not being logged with Bento
- 🔧 Fixed Fixed Salesforce automatic access token refresh failing when the password contains an ampersand
- 🛠️ Dev Developers — Added `track_event()` method to supported CRMs in advance of the new Event Tracking addon

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-16) 3.38.16 - 10/18/2021

- ✨ New Added support for syncing to Date/Time fields with Keap and Infusionsoft
- ✨ New Added option to sync LearnDash course progress percentage with a custom field in the CRM
- ✨ New Added JetEngine integration
- ⚡️ Improved Read-only tags and lists will no longer show up in Apply Tags dropdowns (only Required Tags dropdowns)
- ⚡️ Improved If a user is auto-enrolled into a course via a linked tag, the tags in the Apply Tags - Enrolled setting will now be applied. This can be used in an automation to confirm that the auto-enrollment was successful
- ⚡️ Improved Dates displayed with the \[\[user\_meta\]\] shortcode will now use the site's current timezone
- ⚡️ Improved WP Remote Users Sync integration will no longer sync tag changes to a remote site when they've just been loaded from a remote site (safeguard against infinite loops)
- ⚡️ Improved WP Remote Users Sync integration will not send updated tags to remote sites more than once per pageload
- ⚡️ Improved A successful API response from Drip for a subscriber will remove the Inactive badge in the admin
- 🔧 Fixed Fixed not being able to de-select a selected pipeline and stage for ecommerce deals in the WooCommerce Order Status Stages section of the WP Fusion settings
- 🔧 Fixed Fixed automatic WooCommerce Subscriptions duplicate site detection not working
- 🔧 Fixed Fixed Prevent Reapplying Tags setting not being respected
- 🔧 Fixed Fixed an empty API response from Drip marking users as Inactive
- 🔧 Fixed Fixed fatal error "Too few arguments to function" when applying BuddyBoss profile type tags since 3.38.14
- 🔧 Fixed Fixed error syncing array values with Sendinblue
- 🔧 Fixed Fixed Sendinblue error "attributes should be an object" when syncing data without any custom fields
- 🔧 Fixed Fixed PHP notice "Trying to access array offset on value of type null" in Uncanny LearnDash Groups integration during group member enrollment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-15-10-11-2021) 3.38.15 -10/11/2021

- ✨ New Added Emercury site tracking
- ✨ New Added safety checks against infinite loops when using LearnDash and BuddyBoss auto-enrollments in conjunction with the Group Sync feature
- 🔧 Fixed Fixed bug since 3.38.14 that could cause content to become restricted if it was associated with a deleted taxonomy term
- 🔧 Fixed Fixed HTML not saving in the Default Restricted Content Message since 3.38.0
- 🔧 Fixed Fixed empty date fields being synced as 0 which could evaluate to January 1st 1970 in some CRMs
- 🔧 Fixed Fixed WooCommerce Product Addons integration not syncing Quantity type fields
- 🔧 Fixed Fixed WooCommerce Product Addons integration not syncing Text type fields
- 🔧 Fixed Fixed Async Checkout (New) for WooCommerce applying tags for On Hold orders (i.e. BACS)
- 🔧 Fixed Fixed dynamic tags with a text prefix not getting automatically removed when a WooCommerce order is refunded
- 🔧 Fixed Fixed WPF trying (and failing) to unenroll BuddyBoss group moderators from groups when they were missing the group member linked tag
- 🔧 Fixed Fixed WPF settings not saving in CPT-UI since CPT-UI v1.10.0
- 🛠️ Dev Developers - Added function `wpf_clean_tags()` (same as `wpf_clean()` but allows special characters)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-14) 3.38.14 - 10/5/2021

- ✨ New Added panel in the WP Fusion settings showing the loaded integrations, with links to the documentation for each
- ⚡️ Improved Improved Mailchimp API performance when loading available tags
- 🔧 Fixed Fixed error `Uncaught Error: Class 'WPF_Plugin_Updater' not found` conflict with WPMU Dev Dashboard v4.11.4
- 🔧 Fixed Fixed "Failed to apply tags - no contact ID" message when a registered user without a contact record filled out a form
- 🔧 Fixed Fixed special characters getting synced to the CRM HTML encoded since 3.38.0
- 🔧 Fixed Fixed Filter Course Steps with LearnDash not working when Shared Course Steps was off
- 🔧 Fixed Fixed category-based tag access rules not working
- 🔧 Fixed Fixed BuddyPress XProfile updates not syncing since BuddyPress v9.1.0
- 🔧 Fixed Fixed linked tags not being removed from the previous profile type when switching a user's profile types in BuddyBoss
- 🔧 Fixed Fixed form submissions during an auto-login session not updating the correct contact record when there was no email address on the form
- 🔧 Fixed Fixed error with Gravity Forms when using "Create tag(s) from value" on a form field and no tags had been configured generally for the feed
- 🔧 Fixed Fixed custom fields not syncing with FooEvents when the customer who purchased the ticket is also an attendee
- 🔧 Fixed Fixed Salesforce integration not accepting a new security token until Refresh Topics and Fields was pressed
- 🔧 Fixed Fixed import tool with Drip not importing unsubscribed subscribers
- 🔧 Fixed Fixed import tool with Drip not importing more than 1000 subscribers
- 🔧 Fixed Fixed countries with e-acute symbol in their name not syncing to the Country field with Infusionsoft
- 🔧 Fixed Fixed date values before 1970 not being synced correctly
- 🔧 Fixed Fixed PHP notice Undefined index: step\_display in LearnDash integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-13) 3.38.13 - 9/22/2021

- 🔧 Fixed Fixed Divi modules not respecting tag access rules with Divi Builder 4.10.8+

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-12) 3.38.12 - 9/21/2021

- ⚡️ Improved Improved WP Remote Users sync integration (can now detect tag changes that aren't part of a profile update)
- 🔧 Fixed Fixed bug since 3.38.11 that could cause content to become restricted if it was associated with a deleted taxonomy term
- 🔧 Fixed Fixed HTML not saving in the Default Restricted Content Message since 3.38.0
- 🔧 Fixed Fixed empty date fields being synced as 0 which could evaluate to January 1st 1970 in some CRMs
- 🔧 Fixed Fixed WooCommerce Product Addons integration not syncing Quantity type fields
- 🔧 Fixed Fixed WooCommerce Product Addons integration not syncing Text type fields
- 🔧 Fixed Fixed Async Checkout (New) for WooCommerce applying tags for On Hold orders (i.e. BACS)
- 🔧 Fixed Fixed dynamic tags with a text prefix not getting automatically removed when a WooCommerce order is refunded
- 🔧 Fixed Fixed WPF trying (and failing) to unenroll BuddyBoss group moderators from groups when they were missing the group member linked tag
- 🔧 Fixed Fixed WPF settings not saving in CPT-UI since CPT-UI v1.10.0
- 🛠️ Dev Developers - Added function `wpf_clean_tags()` (same as `wpf_clean()` but allows special characters)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-11) 3.38.11 - 9/13/2021

- ✨ New Added [WooCommerce Payment Plans integration](https://wpfusion.com/documentation/ecommerce/woocommerce-payment-plans/)
- ⚡️ Improved Filter Course Steps for LearnDash should now be a lot more reliable in terms of course step counts and progress tracking
- ⚡️ Improved If a WooCommerce Memberships membership plan is transferred to another user, the tags will be updated for both the previous and new owners
- ✨ New Added import tool support for Groundhogg (REST API)
- ✨ New Added support for loading multiselect data from Copper
- Removed "Enable Notifications" setting from ConvertKit integration, in favor of the global "Send Welcome Email" setting
- Maropost bugfixes
- Updated Copper API URL
- 🔧 Fixed Fixed access checks sometimes failing when using tag names with HTML special characters in them
- 🔧 Fixed Fixed a bug whereby LearnDash lessons could become detached from a course if LearnDash tried to rebuild the course steps cache while the Restricted Content Message was being displayed in place of the course content
- 🔧 Fixed Fixed custom fields not syncing with Bento
- 🔧 Fixed Fixed multiselect data not syncing to Copper
- 🔧 Fixed Fixed checkbox data not syncing to Copper
- 🔧 Fixed Fixed PHP warning in Emercury integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-10) 3.38.10 - 9/7/2021

- ✨ New Added Groundhogg (REST API) CRM integration
- ✨ New Added [Simply Schedule Appointments integration](https://wpfusion.com/documentation/events/simply-schedule-appointments/)
- ✨ New Added option to disable the sync of guest bookings with Events Manager
- ⚡️ Improved Events Manager dates and times will now be synced in the timezone of the event, not UTC
- 🔧 Fixed Fixed initial REST authentication (Groundhogg, FluentCRM, Autonami) sometimes breaking if there was a trailing slash at the end of the REST URL
- 🔧 Fixed Fixed lookups for ActiveCampaign Deep Data customer IDs sometimes failing (email address in URL wasn't URL encoded)
- 🔧 Fixed Fixed import by tag with ActiveCampaign sometimes importing contacts with the wrong tag ID when the search string matched multiple tags
- 🔧 Fixed Fixed WP Fusion blocking Events Manager registrations when there was an API error creating the attendee contact record
- 🔧 Fixed Fixed ACF return formats not being respected for dates when using a Push User Meta operation
- 🔧 Fixed Fixed - Salesforce dates will now be formatted using gmdate() instead of date() (fixes some time zone issues)
- 🔧 Fixed Fixed - Updated Maropost API calls to use SSL API endpoint
- 🔧 Fixed Fixed admin override not working correctly in wpf\_user\_can\_access() when checking the access for a different user (since 3.38.5)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-9) 3.38.9 - 9/1/2021

- ✨ New Added [Download Monitor integration](https://wpfusion.com/documentation/other/download-monitor/)
- ✨ New Added [BuddyBoss group organizer linked tag option](https://wpfusion.com/documentation/membership/buddypress/#group-organizer-auto-assignment)
- ⚡️ Improved Clicking Process WP Fusion Order Actions Again on a WooCommerce order which contains a subscription renewal will also sync any enabled subscription fields
- ⚡️ Improved HubSpot's site tracking script is now disabled on the WooCommerce My Account page, to prevent the script from trying to sync account edits with the CRM
- 🔧 Fixed Fixed tags with > and < symbols getting loaded from the CRM HTML-encoded
- 🔧 Fixed Fixed PHP warning in class WPF\_User when registering a new user with no first or last name
- 🔧 Fixed Fixed Maropost webhooks not working since 3.38.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-8) 3.38.8 - 8/31/2021

- 🔧 Fixed Fixed apply tags via AJAX endpoints resulting in a 403 error since 3.38.0, with Media Tools and other addons
- ⚡️ Improved Improved logging with Drip, when an email address is changed to an address that already has a subscriber record
- 🔧 Fixed Fixed PHP warning in the admin when editing a page that has child pages

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-4) 3.38.4 - 8/23/2021

- ✨ New Added [Bento marketing automation](https://wpfusion.com/go/bento/) integration
- 🔧 Fixed Fixed updates to existing contacts not working with Klaviyo
- 🔧 Fixed Fixed Bulk Edit box not appearing on LifterLMS lessons
- 🔧 Fixed Fixed JavaScript error with Resync Tags button on admin user profile
- 🔧 Fixed Fixed serialized data not being unserialized during a Push User Meta operation
- 🔧 Fixed Fixed parse error in MemberPress integration on some PHP versions
- 🛠️ Dev Fixed `wpf_get_contact_id()` sometimes returning an empty string instead of `false` when a contact record wasn't found

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-3) 3.38.3 - 8/19/2021

- ⚡️ Improved Stopped setting 'unknown' for missing Address 2, Country and State fields with Mailchimp
- 🔧 Fixed Fixed webhooks not working with Salesforce since 3.38.0
- 🔧 Fixed Fixed links not displaying in the activity logs since 3.38.0
- 🔧 Fixed Fixed syntax error with some PHP configurations since 3.38.0
- 🔧 Fixed Fixed PHP warning in Infusionsoft integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-2) 3.38.2 - 8/18/2021

- 🔧 Fixed Fixed error `Call to undefined function get_current_screen()` since 3.38.0 when performing some admin actions
- 🔧 Fixed Fixed warning about missing redirect showing on LearnDash lessons where the redirect was configured on the parent course

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-1) 3.38.1 - 8/17/2021

- 🔧 Fixed Fixed auto-login links not working since 3.38.0
- 🔧 Fixed Fixed custom fields not syncing during MemberPress registration since 3.38.0
- 🔧 Fixed Fixed Defer Until Activation setting not working with signups from the BuddyBoss app
- 🛠️ Dev Removed WPF\_\* prefix from 3rd party CRM SDK classes (to comply with wordpress.org plugin guidelines)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-38-0) 3.38.0 - 8/16/2021

**Heads up!** This update includes a significant refactor of WP Fusion's admin settings, interfaces, and database storage. We've tested the update extensively, but with 3,500+ changes across 200+ files, there are potentially bugs we've missed. If that sounds scary, you may want to wait until v3.38.1 is released before updating.

If there are bugs, they will most likely affect saving WP Fusion settings in the admin (general settings, access rules, product configurations, etc.) and not affect the existing access rules or sync configuration on your site.

- Big cleanup and refactoring with improvements for security, internationalization, and documentation
- ✨ New Added [If-So Dynamic Content integration](https://wpfusion.com/documentation/other/if-so/)
- ✨ New Added support for syncing the [Zoom meeting ID and join URL with FooEvents](https://wpfusion.com/documentation/events/fooevents/#zoom)
- ✨ New Added View in CRM URL for Jetpack CRM
- ✨ New Added GDPR Consent Date, Agreed to Terms Date, and Marketing Consent Date fields for sync with Groundhogg
- ⚡️ Improved Guest registrations will log whether a contact is being created or updated
- 🔧 Fixed Fixed XProfile fields First Name and Last Name not syncing during a new BuddyBoss user registration
- 🔧 Fixed Fixed filtering by CRM tag not working in Users Insights
- 🔧 Fixed Fixed user profile updates overwriting Jetpack CRM contacts
- 🔧 Fixed Fixed initial default field mapping not being stored after setup until the settings were saved the first time
- 🔧 Fixed Fixed logs getting flushed when hitting Enter in the pagination box
- 🔧 Fixed Fixed expiration date not being synced after a Restrict Content Pro renewal
- 🔧 Fixed Fixed bbPress forum archive not being protected when Filter Queries was on
- Deleted unused XMLRPC modules in the Infusionsoft iSDK
- 🛠️ Dev Added function `wpf_get_option()` (alternative for `wp_fusion()->settings->get()`)
- 🛠️ Dev Added sanitization functionn `wpf_clean()`
- 🛠️ Dev Deprecated `wp_fusion()->settings->get_all()`
- 🛠️ Dev Changed `wp_fusion()->settings->set_all( $options )` to `wp_fusion()->settings->set_multiple( $options )`

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-31) 3.37.31 - 8/9/2021

- ✨ New Added [RestroPress integration](https://wpfusion.com/documentation/ecommerce/restropress/)
- ✨ New Added [Import Trigger tag option for Jetpack CRM](https://wpfusion.com/documentation/webhooks/jetpack-crm-automatic-imports/)
- ✨ New Added option to [sync LearnDash quiz scores to a custom field in the CRM](https://wpfusion.com/documentation/learning-management/learndash/#quizzes)
- ✨ New Added support for WPForms User Registration addon
- ✨ New Added Picture URL field for sync with CapsuleCRM
- ✨ New Added nonce verification to Flush All Logs button (improved security)
- ⚡️ Improved Logs will contain a link to edit the contact record in the CRM after a form submission
- ⚡️ Improved If Add Attendees is enabled for a Tribe Tickets RSVP ticket, and a registered user RSVPs with a different email address, a new contact record will be created (rather than updating their existing contact record)
- 🔧 Fixed Fixed Ultimate Member `role_select` and `role_radio` fields not syncing during registration
- 🔧 Fixed Fixed Gravity Forms Nested Feeds processing not respecting feed conditions
- 🔧 Fixed Fixed custom fields not syncing with Maropost
- 🔧 Fixed Fixed PHP warning updating contacts with Intercom
- 🔧 Fixed Fixed LearnPress course enrollment tags not being applied when there were multiple course products in an order
- 🔧 Fixed Fixed console errors in the Widgets editor since WP 5.8
- 🔧 Fixed Fixed search input not being auto-focused in CRM field select dropdowns with jQuery 3.6.0
- 🛠️ Dev Added helper function \`WPF\_Admin\_Interfaces::sanitize\_tags\_settings( $settings ); for sanitizing tag multiselect data in metaboxes before saving to postmeta
- 🛠️ Dev Improved sanitization of meta box data in admin

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-30) 3.37.30 - 8/2/2021

- ✨ New Added View In CRM links (direct link to the contact record) for all CRMs that support it
- ✨ New Added [email optin checkbox and optin tagging for Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#email-optins)
- ✨ New Added support for [FluentCRM webhooks](https://wpfusion.com/documentation/webhooks/fluentcrm-webhooks/)
- ✨ New Added [email optin setting to GiveWP integration](https://wpfusion.com/documentation/ecommerce/give/#email-optins)
- ✨ New Added Job Title field for sync with Capsule CRM
- ⚡️ Improved Added notice to the setup screen with information on how to connect to Autonami on the same site
- ⚡️ Improved Added warning for admins when viewing a post that has access rules enabled, but no redirect specified
- 🔧 Fixed Fixed Capsule CRM not loading more than 100 tags
- 🔧 Fixed Fixed Events Manager bookings batch operation not detecting past bookings
- 🔧 Fixed Fixed Events Manager bookings batch operation not exporting more than 20 bookings
- 🔧 Fixed Fixed Events Manager not syncing guest bookings
- 🔧 Fixed Fixed Elementor Forms integration treating some country names as dates
- 🔧 Fixed Fixed undefined index PHP warning loading data from ActiveCampaign
- 🔧 Fixed Fixed "Invalid email address" error with Mailerlite when Email Changes setting was set to Duplicate
- 🔧 Fixed Fixed course enrollment tags not being applied when a LearnPress course was purchased using the WooCommerce Payment Methods Integration extension

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-29) 3.37.29 - 7/26/2021

- ✨ New Added Appointment Time field for sync with WooCommerce Appointments
- ✨ New Added [event category tagging for Events Manager events](https://wpfusion.com/documentation/events/events-manager/#event-category-tagging)
- ✨ New Added additional YITH WooCommerce Vendors fields for sync
- ⚡️ Improved Wildcards \* can now be used in the Allowed URLs setting for Site Lockout
- ⚡️ Improved If a Gravity Forms email field is mapped to the primary CRM email address field, this will take priority over other email fields on the form
- 🔧 Fixed Fixed "Hide if access is denied" setting not working with wpForo categories and some forum layouts
- 🔧 Fixed Fixed GP Nested Forms feeds not running when there was no feed configured on the parent form
- 🔧 Fixed Fixed email address changes for existing contacts not working with Autonami
- 🔧 Fixed Fixed error syncing array formatted data to Intercom
- 🔧 Fixed Fixed PHP warnings in the MemberMouse integration
- 🔧 Fixed Fixed custom fields not syncing during a WP Ultimo registration
- 🛠️ Dev Added `wpf_get_lookup_field()` function for getting the API name of the CRM field used for contact lookups (usually Email)
- 🛠️ Dev Added `wpf_infusionsoft_safe_fields` filter (strips out Asian characters loaded over the API in field names to prevent XML parse errors)
- 🛠️ Dev Added `wpf_beaver_builder_access_meta` filter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-28) 3.37.28 - 7/19/2021

- 🔧 Fixed Fixed new contacts created with Autonami not being opted in to receive emails
- 🔧 Fixed Fixed fatal error with Klick-Tip when making API calls using expired credentials

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-27) 3.37.27 - 7/19/2021

- ✨ New Added Event Categories field for sync with Events Manager
- ⚡️ Improved Comments forms will be pre-filled with the temporary user's details during an auto-login session
- ⚡️ Improved Booking dates will be formatted using the sitewide datetime format (set Settings > General) with WooCommerce Bookings and WooCommerce Appointments, when the field format is set to `text`
- ⚡️ Improved Form submissions will record the page URL of the form in the logs
- ⚡️ Improved If a field type is set to `text` then arrays will be converted to comma-separated strings for syncing
- 🔧 Fixed Fixed &send\_notification=false in a webhook URL triggering the new user welcome email
- 🔧 Fixed Fixed datetime fields being synced to ActiveCampaign in 12h format (fixed to 24h format)
- 🔧 Fixed Fixed fatal error trying to sync multidimensional arrays to the CRM
- 🛠️ Dev Developers - added `wpf_get_users_with_tag( $tag )` function
- 🛠️ Dev Developers - added `wpf_get_datetime_format()` function and `wpf_datetime_format` filter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-26) 3.37.26 - 7/12/2021

- ✨ New Added Autonami CRM integration
- ✨ New Added [Upsell Plugin integration](https://wpfusion.com/documentation/ecommerce/upsell-plugin/)
- ✨ New Added [WooCommerce Memberships for Teams team meta batch operation](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#syncing-historical-data)
- ⚡️ Improved Stopped "Unknown Lists" from being loaded from HubSpot
- 🔧 Fixed Fixed CSS classes getting removed from LearnDash lessons in focus mode since v3.37.25
- 🔧 Fixed Fixed profile updates in the BuddyBoss app not syncing to the CRM
- 🔧 Fixed Fixed default fields not being enabled for sync in the settings after first setting up the plugin
- 🔧 Fixed Fixed PHP notice on WooCommerce order received page
- 🔧 Fixed Fixed post types created with Toolset Types bypassing access rules
- 🛠️ Dev Developers - Added wpf\_get\_tags() function
- 🛠️ Dev Developers - Added action wpf\_meta\_box _content_{$post->post\_type}
- 🛠️ Dev Developers - All Beaver Builder nodes will pass through the wpf\_beaver\_builder\_can\_access filter, regardless of if they're protected by WP Fusion or not
- 🛠️ Dev Developers - Refactored user\_can\_access() function for better performance and readability

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-25) 3.37.25 - 7/6/2021

- ✨ New Added support for LifterLMS Custom Fields addon
- ✨ New Added support for applying tags with the default (site title) course with WPComplete
- ✨ New Added Events Manager Registrations batch operation
- ✨ New Added lock icon on LearnDash lessons that are protected by the Filter Course Steps setting
- ⚡️ Improved If a Gravity Forms email field is mapped to the primary CRM email address field, this will take priority over other email fields on the form
- 🔧 Fixed Fixed the default owner for new Zoho contacts overriding a custom owner
- 🔧 Fixed Fixed Apply Tags - Assignment Uploaded setting not saving on LearnDash lessons
- 🔧 Fixed Fixed fatal error in admin with WooFunnels 1.5.0
- 🔧 Fixed Fixed fatal error since v3.37.23 with BuddyBoss and registering a new user via MemberPress, when the Limit User Roles setting was active
- Changed WooCommerce function order\_has\_contact() to get\_contact\_id\_from\_order()

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-24) 3.37.24 - 6/28/2021

- ✨ New Added [Event Tickets attendees batch operation](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/#exporting-attendees)
- ✨ New Added indicator in the logs when a pseudo field or read only field (i.e. user\_registered) has been loaded from the CRM
- ✨ New Added unique\_id field for sync with Ontraport
- ✨ New Added support for syncing user data from Advanced Custom Fields: Extended frontend forms
- ✨ New Added Owner ID field for sync with Intercom
- ✨ New Added Google Analytics fields for sync with Intercom
- ✨ New Added indicator for email optin status to WooCommerce order sidebar meta box
- ⚡️ Improved Contact fields settings will default to suggested usermeta / CRM field pairings
- ⚡️ Improved Improved site tracking with Mautic after guest form submission
- 🔧 Fixed Fixed the default owner for new Zoho contacts overriding a custom owner
- 🔧 Fixed Fixed Apply Tags - Assignment Uploaded setting not saving on LearnDash lessons
- 🔧 Fixed Fixed fatal error in admin with WooFunnels 1.5.0
- 🔧 Fixed Fixed fatal error since v3.37.23 with BuddyBoss and registering a new user via MemberPress, when the Limit User Roles setting was active
- Changed WooCommerce function order\_has\_contact() to get\_contact\_id\_from\_order()

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-23) 3.37.23 - 6/21/2021

- ✨ New Added notification badge on WP Fusion Logs admin menu item to indicate when there are unseen API errors in the logs
- ✨ New Added logging when a site tracking session has been started for a guest, for ActiveCampaign, HubSpot, and EngageBay
- ✨ New Added Designation field for sync with FooEvents
- ⚡️ Improved If the Limit User Roles setting is in use, and a user without a CRM contact record has their role changed to a valid role, a new contact record will be created in the CRM
- 🔧 Fixed Fixed linked tags from LifterLMS courses being applied when a student was added to a membership that contains that course
- 🔧 Fixed Fixed custom fields not syncing with FooEvents v5.5+ (Note: you will need to re-map any custom attendee fields in the WP Fusion settings)
- 🔧 Fixed Fixed WooCommerce Memberships integration not applying tags for membership status when user memberships were edited in the admin
- 🔧 Fixed Fixed async=true in an `update` webhook not loading the user's tags
- 🔧 Fixed Fixed PHP warning in the PulseTechnologyCRM integration
- 🔧 Fixed Fixed fatal error loading WooFunnels custom checkout fields for the WP Fusion settings with WooFunnels 1.4.2
- Removed wp\_fusion()->access->can\_access\_terms cache (was causing more trouble than it was worth)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-22) 3.37.22 - 6/14/2021

- ✨ New Added support for [auto-applied discounts with Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#auto-applied-discounts)
- ⚡️ Improved Return after login cookies will now be set if access is denied and the restricted content message is shown (previously it only worked after a redirect)
- 🔧 Fixed Fixed auto-login loading the user's tags on every page load
- 🔧 Fixed Fixed settings fields not showing on Easy Digital Downloads discounts
- 🔧 Fixed Fixed Gravity Forms feed setting "Add to Lists" not saving correctly since Gravity Forms 2.5
- 🔧 Fixed Fixed Push User Meta and Pull User Meta batch operations not working since v3.37.21
- 🔧 Fixed Fixed +1 as country code option with Elementor Forms being synced to the CRM as a checkbox
- 🔧 Fixed Fixed fatal error when enabling ActiveCampaign site tracking while WP Fusion is in staging mode
- 🔧 Fixed Fixed PHP warning syncing array values with HighLevel
- 🔧 Fixed Fixed PHP notices in Groundhogg integration
- ✨ New Added wpf\_get\_users\_with\_contact\_ids() function

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-21) 3.37.21 - 6/7/2021

- ✨ New Added [Ninja Forms entries batch export tool](https://wpfusion.com/documentation/lead-generation/ninja-forms/#syncing-historical-entries)
- ✨ New Added [PulseTechCRM integration](https://thepulsespot.com/)
- ✨ New Added a Send Welcome Email option in the Imported Users settings
- ✨ New Added WP Fusion icon to Gravity Forms settings menu
- 🔧 Fixed Fixed Gravity Perks Nested Forms feeds not being processed when the main form feed was processed
- 🔧 Fixed Fixed Members integration trying to apply linked tags during registration before the user had been synced to the CRM
- 🔧 Fixed Fixed multi-checkbox fields not syncing from Event Tickets Plus attendee registrations
- 🔧 Fixed Fixed fatal error with Drip SDK and PHP 8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-20) 3.37.20 - 5/31/2021

- ✨ New Added subscription failed tagging to GiveWP integration
- ✨ New Added Affiliate Rejected tagging option to AffiliateWP
- 🔧 Fixed Fixed Last Course Completed Date and Last Lesson Completed Date not syncing correctly with LearnDash
- 🔧 Fixed Fixed LearnDash tags not being applied with Uncanny Toolkit's Autocomplete Lessons feature
- 🔧 Fixed Fixed being unable to deactivate the license key if the license had never been activated on the current site
- 🛠️ Dev removed register\_shutdown\_function() in API queue in favor of the "shutdown" WordPress action

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-19) 3.37.19 - 5/24/2021

- ✨ New Added [WS Form integration](https://wpfusion.com/documentation/lead-generation/ws-form/)
- ✨ New Added support for [WooFunnels custom checkout fields](https://wpfusion.com/documentation/ecommerce/woofunnels/#custom-checkout-fields)
- ✨ New Added option to apply tags when an Event Tickets attendee is deleted from an event
- ✨ New Added error message when connecting to FluentCRM (REST API) and pretty permalinks aren't enabled on the CRM site
- ✨ New Added option with WooFunnels to run WP Fusion actions on the Primary Order Accepted status rather than waiting for completed
- ⚡️ Improved If you have more than 1,000 tags, they will be loaded in the admin via AJAX when you focus on the dropdown (improves admin performance)
- ⚡️ Improved Improved site tracking with EngageBay (logged-in users will now be identified to the tracking script by email address)
- ⚡️ Improved Improved reliability of license activation and deactivation (changed requests to GET to get past CloudFlare's firewall)
- 🔧 Fixed Fixed Event Tickets treating the first attendee email field as the attendee's email address, even if it wasn't enabled for sync
- 🔧 Fixed Fixed WP Fusion settings not saving on new Event Tickets tickets
- 🔧 Fixed Fixed Tickera integration syncing attendees for pending orders
- 🔧 Fixed Fixed Tickera integration not syncing attendees if "Show E-mail for Option For Ticket Owners" was disabled
- 🔧 Fixed Fixed conflict with YITH WooCommerce Frontend Manager trying to access WP Fusion product settings from the frontend
- 🛠️ Dev wp\_fusion\_init action will now only fire if WP Fusion is connected to a CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-18) 3.37.18 - 5/17/2021

- ✨ New Added [Tickera integration](https://wpfusion.com/documentation/events/tickera/)
- ✨ New Added [Give Gift Aid integration](https://wpfusion.com/documentation/ecommerce/give/#gift-aid)
- 🔧 Fixed Fixed error connecting to FluentCRM (REST API) when there were no tags created in FluentCRM
- 🔧 Fixed Fixed PHP warning trying to apply tags on view for deleted taxonomy terms
- ✨ New Added wpf\_get\_users\_with\_contact\_ids() function

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-17) 3.37.17 - 5/14/2021

- Continued bugfixes for Elementor Pro Forms v3.2.0 compatibility — entries from pre-Elementor-3.2 forms sync correctly again, but if you edit the form in Elementor you will still need to re-do the field mapping
- ⚡️ Improved Improved upgrade nags with WP Fusion Lite
- ⚡️ Improved Moved Lite-specific functionality into class WPF\_Lite\_Helper
- 🔧 Fixed Fixed PHP warning in FluentCRM REST API integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-16) 3.37.16 - 5/12/2021

- 🔧 Fixed Fixed tags not applying with FluentCRM since v3.37.14
- 🔧 Fixed Fixed PHP warning in The Events Calendar month view

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-15) 3.37.15 - 5/11/2021

- 🔧 Fixed Fixed fatal error with BuddyPress (not BuddyBoss) when updating profiles, from v3.37.14
- 🔧 Fixed Fixed Elementor Forms field maps not saving on new forms
- EngageBay bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-14) 3.37.14 - 5/10/2021

- ✨ New Added [FluentCRM (REST API) CRM integration](https://wpfusion.com/plugin-updates/introducing-fluentcrm-rest-api/)
- ✨ New Added [WooFunnels integration](https://wpfusion.com/documentation/ecommerce/woofunnels/)
- ✨ New Added support for syncing the WooCommerce Appointments appointment date when an appointment status is changed to Pending or Confirmed
- ✨ New Added notice to the logs when Filter Queries is running on more than 200 posts of a post type in a single request
- ⚡️ Improved Improved WP Simple Pay logging for subscriptions
- 🔧 Fixed Fixed edits to custom fields in FluentCRM not being synced back to the user record automatically
- 🔧 Fixed Fixed First Name and Last Name fields not syncing with BuddyPress frontend profile updates if the XProfile fields hadn't been enabled for sync
- 🔧 Fixed Fixed Gifting for WooCommerce Subscriptions integration setting the name of the gift recipient to the name of the purchaser
- 🔧 Fixed Fixed "Remove tags from customer" setting being treated as enabled by default in Gifting for WooCommerce Subscriptions integration
- 🔧 Fixed Fixed error loading Elementor Pro editor on sites that hadn't yet updated to Elementor Pro v3.2.0+
- 🔧 Fixed Fixed WooCommerce Memberships batch operation getting hung up on deleted memberships
- 🔧 Fixed Fixed EngageBay add tag / remove tag API endpoints
- 🔧 Fixed Fixed fatal error trying to apply tags to a deleted FluentCRM contact
- ✨ New Added action [wp\_fusion\_init](https://wpfusion.com/documentation/actions/wp_fusion_init/)
- ✨ New Added action wp\_fusion\_init\_crm

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-13) 3.37.13 - 5/3/2021

- ✨ New Added Payment Failed and Subscription Cancelled tagging options to WP Simple Pay integration
- ✨ New Added Subscription End Date field for sync with WooCommerce Subscriptions
- ⚡️ Improved user\_registered will now be synced back to the CRM after a user is imported via webhook (if enabled)
- ⚡️ Improved Removed "read only" indicator from HubSpot list name and included it in a label in the select box instead
- 🔧 Fixed Fixed unwanted user meta getting synced back to the CRM when importing users if Push All was enabled
- 🔧 Fixed Fixed feed settings not saving with Gravity Forms 2.5+
- 🔧 Fixed Fixed Next Payment Date not being synced after a successful WooCommerce Subscriptions renewal
- 🔧 Fixed Fixed Elementor Forms integration broken since Elementor Pro v3.2.0 (removed implementation of Fields\_Map::CONTROL\_TYPE) thanks @techjewel
- 🔧 Fixed Fixed BuddyBoss group invites not working when WP Fusion was in use for groups member access controls
- ✨ New Added wpf\_event\_tickets\_attendee\_data filter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-12) 3.37.12 - 4/26/2021

- ✨ New Added Auto Login debug mode
- ✨ New Added support for syncing Gravity Forms meta fields (Embed URL, Entry URL, Form ID, etc) with the CRM
- ✨ New Added LearnDash Groups Enrollment Statuses batch operation d
- ✨ New Added LearnDash Course Progress batch operation
- ✨ New Added WooCommerce Memberships meta batch operation
- ⚡️ Improved If Return After Login is enabled, and a form submission starts an auto-login session, the redirect will be triggered (Elementor Forms and Gravity Forms)
- 🔧 Fixed Fixed Paid Memberships Pro Approval status not syncing when edited on the admin user profile
- 🔧 Fixed Fixed pmpro\_approval field not being picked up by Push User Meta

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-11) 3.37.11 - 4/19/2021

- ✨ New Added support for syncing ACF image fields to the CRM as image URLs instead of attachment IDs
- ⚡️ Improved Improved support for syncing phone numbers with HighLevel
- Reverted change from 3.37.7 - bbPress topics will now use the query filtering mode set in the settings, rather than defaulting to Advanced (for improved performance)
- 🔧 Fixed Fixed Paid Memberships Pro approval\_status field not syncing when a membership level was changed
- 🔧 Fixed Fixed "The link you followed has expired" message when deleting users, with Members active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-10) 3.37.10 - 4/15/2021

- 🔧 Fixed Fixed infinite loop when loading bbPress forums index with Filter Queries set to Advanced and Restrict Forum Archives enabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-9) 3.37.9 - 4/15/2021

- 🔧 Fixed Fixed tags loaded via webhook not triggering automated enrollments since v3.37.8
- ✨ New Added WP Fusion status metabox to WooCommerce order sidebar
- ✨ New Added Add Only option to Contact Form 7 integration
- ⚡️ Improved user\_email and user\_pass will no longer be loaded from the CRM during login if Login Meta Sync is enabled
- ⚡️ Improved Improved error handing with HubSpot
- ⚡️ Improved Filter Queries / Advanced will now limit the post query to the first 200 posts of each post type (for improved performance)
- ⚡️ Improved Filter Queries will be bypassed while WP Fusion is processing a webhook
- Updated EngageBay API URL
- 🔧 Fixed Fixed an empty last\_name field at registration defaulting to last\_updated (with FluentCRM)
- 🔧 Fixed Fixed fatal error trying to install addon plugins before setting up the CRM API connection

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-8) 3.37.8 - 4/12/2021

- ✨ New Added Emercury CRM integration
- ✨ New Added support for Easy Digital Downloads 3.0-beta1
- ✨ New Added a notice to the LearnDash course and group settings panels when the LearnDash - WooCommerce integration plugin is active
- ⚡️ Improved Improved support for Advanced Custom Fields (ACF) date fields
- ⚡️ Improved If a license key is defined in wp-config.php using WPF\_LICENSE\_KEY then the site will be auto-activated for updates
- ⚡️ Improved User-entered fields on the Contact Fields list will now show under their own heading
- 🔧 Fixed Fixed BuddyBoss member type field not syncing during a Push User Meta operation
- 🔧 Fixed Fixed special characters in MemberPress membership level names being synced to the CRM as HTML entities
- 🔧 Fixed Fixed Resync Tags batch operation getting hung up with Ontraport trying to load the tags from a deleted contact
- 🔧 Fixed Fixed fatal error error handling error-level HTTP response code with NationBuilder
- 🔧 Fixed Fixed Capsule not loading more than 50 tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-7) 3.37.7 - 4/5/2021

- ✨ New Added WISDM Group Registration for LearnDash integration
- ✨ New Added support for syncing date-type fields with Elementor forms
- ✨ New Added support for Filter Queries with The Events Calendar events
- ✨ New Added support for Filter Queries - Advanced with bbPress topics
- ✨ New Added WP Fusion logo to Gravity Forms entry note
- ⚡️ Improved Improved Filter Queries performance
- 🔧 Fixed Fixed Filter Queries - Standard not working on search results
- 🔧 Fixed Fixed HTTP API logging not working with MailJet
- 🔧 Fixed Fixed MailJet treating Contact Not Found errors as irrecoverable
- 🔧 Fixed Fixed Email Optin tags not being applied with WooCommerce integration
- 🔧 Fixed Fixed duplicate State field with HighLevel
- 🔧 Fixed Fixed Give donations\_count and total\_donated fields not syncing accurately during the first donation

**Developers:**

- Re-added wp\_fusion()->access->can\_access\_posts cache
- ✨ New Added wpf\_query\_filter\_get\_posts\_args filter
- ✨ New Added wpf\_is\_post\_type\_eligible\_for\_query\_filtering filter
- ✨ New Added wpf\_should\_filter\_query filter
- ⚡️ Improved Third parameter ($post\_id) to wpf\_user\_can\_access filter will now be false if the item being checked is not a post
- Changed wpf\_user\_id filter to wpf\_get\_user\_id
- Removed wpf\_bypass\_filter\_queries filter (in favor of wpf\_should\_filter\_query)
- 🔧 Fixed Fixed PHP notices in class-access-control.php

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-6) 3.37.6 - 4/1/2021

- Removed wp\_fusion()->access->can\_access\_posts cache (was causing a lot of access problems, needs more testing)
- 🔧 Fixed Fixed wpf\_tags\_applied and wpf\_tags\_removed hooks not running when a webhook was received, since 3.37.4

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-5) 3.37.5 - 3/30/2021

- 🔧 Fixed Fixed Filter Course Steps setting with LearnDash integration treating Filter Queries as on, on some hosts
- 🔧 Fixed Fixed url\_to\_postid() causing problems with WPML when Hide From Menus was active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-4) 3.37.4 - 3/29/2021

- ✨ New Added Piotnet Forms integration
- ✨ New Added Lock Lessons option to LearnDash courses
- ✨ New Added Apply Tags - Approved setting to Events Manager events
- ✨ New Added warning during HubSpot setup if site isn't SSL secured
- ✨ New Added additional context to the "Can not operate manually on a dynamic list." error with HubSpot
- ⚡️ Improved Active HubSpot lists will now show as "read only" when selected
- ⚡️ Improved Improved performance with taxonomy term access rules
- 🔧 Fixed Fixed YITH WooCommerce Frontend Manager triggering an error trying to load the WP Fusion settings panel on the frontend
- 🔧 Fixed Fixed Filter Course Steps in LearnDash not properly adjusting the course step count
- 🔧 Fixed Fixed ONTRApages plugin taking redirect priority over WP Fusion
- ✨ New Added wp\_fusion()->access->can\_access\_posts cache
- ✨ New Added wp\_fusion()->access->can\_access\_terms cache
- ✨ New Added filter wpf\_user\_id
- ✨ New Added filter wpf\_restricted\_content\_message

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-3) 3.37.3 - 3/22/2021

- ✨ New **Added / Improved:**
  - Added Members integration
  - ✨ New Added logging for when a linked tag is removed due to a user leaving a BuddyPress group
  - ✨ New Added View in CRM links to admin user profile for FluentCRM and Groundhogg
  - ✨ New Added View in CRM links to Easy Digital Downloads payment sidebar
  - ✨ New Added WP Fusion status metabox to Gravity Forms single entry sidebar
  - ⚡️ Improved Contact records created by guest form submissions or checkouts will now be identified to the ActiveCampaign tracking script
  - ⚡️ Improved Improved upgrade process from pre-3.37 (fixes CRM fields getting lost in admin)
  - ⚡️ Improved WooCommerce Memberships integration will try to avoid modifying any tags during a successful subscription renewal
  - ⚡️ Improved Edits to fields on contact records in FluentCRM will now be synced back to the user record automatically
  - ⚡️ Improved Disabled the "API Queue" with FluentCRM and Groundhogg
  - ⚡️ Improved If a user is already logged in when coming from a ThriveCart success URL, they won't be logged in again
- **Bugfixes:**
  - Fixed Export Users batch operation not respecting Limit User Roles setting
  - 🔧 Fixed Fixed tag changes not being synced back properly from FluentCRM
  - 🔧 Fixed Fixed Member Access Controls with BuddyBoss denying access to all members if no tags were specified
  - 🔧 Fixed Fixed BuddyBoss app notification segment not working with more than one selected tag
  - 🔧 Fixed Fixed SQL error when searching for The Events Calendar events that are protected by tags, when Filter Queries was set to Advanced mode
  - 🔧 Fixed Fixed WooCommerce Subscriptions meta fields not syncing for subscriptions that have no products
  - 🔧 Fixed Fixed being unable to disable First Name and Last Name fields from sync
  - 🔧 Fixed Fixed On-Hold WooCommerce orders from Bank Transfer payment gateway not being synced despite On-Hold being registered as a valid status
  - 🔧 Fixed Fixed MemberPress integration syncing the details from the expiring transaction when switching between two free lifetime memberships
  - 🔧 Fixed Fixed automated unenrollments not working with MemberPress transactions created using the Manual gateway
- 🛠️ Dev **Developer Updates:**
  - Added "wpf\_filtering\_query" property to WP\_Query objects that are being affected by Filter Queries - Advanced
  - ✨ New Added wpf\_leadsource\_cookie\_name filter
  - ✨ New Added wpf\_referral\_cookie\_name filter
  - ✨ New Added wpf\_get\_current\_user() function
  - 🔧 Fixed Fixed fatal error on frontend if you selected Mautic as the CRM in the initial setup and saved the settings without entering API credentials
  - 🔧 Fixed Fixed fatal error when running "EDD Recurring Payments statuses" batch operation
  - 🔧 Fixed Fixed PHP 'WPF\_Lead\_Source\_Tracking' does not have a method 'prepare\_meta\_fields' warning saving the settings
  - 🔧 Fixed Fixed "Warning: Illegal string offset 'crm\_field'"

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-2) 3.37.2 - 3/15/2021

- 🔧 Fixed Fixed fatal error with dynamic tagging and Event Tickets in 3.37.0
- ✨ New Added expiration to cached Filter Queries results (thanks @trainingbusinesspros!)
- ✨ New Added user\_nicename field for sync

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-1) 3.37.1 - 3/15/2021

- 🔧 Fixed Fixed fatal error "Call to undefined function bbapp\_iap()" in 3.37.0 when BuddyBoss App was active with IAP disabled
- ✨ New Added "Default Not Logged-In Redirect" setting
- ✨ New Added logging when wp\_capabilities have been modified by data loaded from the CRM
- 🔧 Fixed Fixed roles or capabilities loaded from the CRM being able to remove roles and/or capabilities from administrators
- 🔧 Fixed Fixed wp\_capabilities field not saved in correct format when loaded from the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-37-0) 3.37.0 - 3/15/2021

- ✨ New **Added / Improved:**
  - Added support for Create Tag(s) from Value with WooCommerce guest checkouts
  - ✨ New Added support for Create Tag(s) from Value with Tribe Events guest registrations
  - ⚡️ Improved When an Event Tickets attendee is moved to another ticket, their custom fields will be synced
  - ⚡️ Improved Updated to support the new CartFlows admin UI
  - ⚡️ Improved Added a safety check to prevent you from selecting the same tag for both Apply Tags - Enrolled and Link With Tag, on courses
  - ⚡️ Improved wpForo usergroups will not be linked to tag changes if the user is an administrator (manage\_options capability)
- **BuddyPress / BuddyBoss / bbPress:**
  - Added In-App Purchases support with BuddyBoss app (beta)
  - ✨ New Added integration with BuddyBoss segments for app push notifications (beta)
  - ⚡️ Improved If the BuddyPress groups directory page is protected, the restricted content message will replace the groups list
  - ⚡️ Improved Added notice to BuddyPress group meta box to indicate when main groups page is protected by a tag
  - 🔧 Fixed Fixed restricted bbPress topics not being hidden by Filter Queries - Advanced
  - 🔧 Fixed Fixed restricted content message not displaying on restricted BuddyPress groups
- **Performance:**
  - Improved - Available tags and available fields have been moved to their own wp\_options keys for improved performance
  - ⚡️ Improved The wpf\_options options key is now set to autoload, for improved performance
  - ⚡️ Improved AJAX'ified the page redirect select in the meta box for improved admin performance
  - ⚡️ Improved Moved the license check from a transient to an option to get around transient caching
  - ⚡️ Improved Removed "Copy to related topics" from LearnDash meta box, for improved performance
  - Removed meta box notice about inheriting permissions from taxonomy terms (for improved performance)
- **Filter Queries:**
  - Improved performance with Filter Queries - Advanced, query results for the same post type will now be cached with wp\_cache\_set()
  - 🔧 Fixed Fixed bbPress public topics being hidden when Filter Queries was set to Advanced
  - 🔧 Fixed Fixed some post types registered by other plugins not showing as options for Filter Queries - Post Types
  - ✨ New Added notice when Filter Queries is enabled on The Events Calendar event post types, and the Events Month Cache is enabled
- **Bugfixes:**
  - Fixed fields after a checkbox field on a Ninja Forms form being synced as boolean values
  - 🔧 Fixed Fixed Create Tag(s) from Value creating errors with NationBuilder
  - 🔧 Fixed Fixed tags not being applied to current user during form submission from 3.36.16
  - 🔧 Fixed Fixed ActiveCampaign integration not treating 429 status code as an error
  - 🔧 Fixed Fixed standard fields not being loaded from Autopilot
  - 🔧 Fixed Fixed Autopilot integration creating new contacts when email address wasn't specified in update data
  - 🔧 Fixed Fixed automatic name detection feature from 3.36.12 treating username as first\_name
  - 🔧 Fixed Fixed errors not being logged correctly while creating / updating GiveWP donors in the CRM
- 🛠️ Dev **Developer Updates:**
  - Removed masking of ?cid= parameter from auto login URL since 3.36.5
  - ✨ New Added wpf\_bypass\_query\_filtering filter
  - ✨ New Added wpf\_query\_filtering\_mode filter
  - ✨ New Added wpf\_configure _setting_{$setting\_id} filter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-16) 3.36.16 - 3/8/2021

- ✨ New Added Filter Course Steps setting with LearnDash 3.4.0+
- ✨ New Added search filter to select boxes in the admin
- ⚡️ Improved If Staging Mode is enabled, site tracking scripts will be turned off with supported CRMs
- ⚡️ Improved Improved EngageBay error handling
- ⚡️ Improved Improved support for Filter Queries on LearnDash lessons in LearnDash v3.4.0 beta
- ⚡️ Improved Elementor Forms integration data upgrades will now only run when the Elementor editor is active
- 🔧 Fixed Fixed individual bbPress topics not respecting global Restrict Forums setting
- 🔧 Fixed Fixed BuddyBoss profile types not being properly set via linked tag when removing and assigning a type in the same action
- 🔧 Fixed Fixed menu items being hidden when Filter Queries was used in Standard mode and limited to specific post types
- 🔧 Fixed Fixed PHP warning in Salesforce integration
- 🔧 Fixed Fixed PHP warning when force-ending an auto login session

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-15) 3.36.15 - 3/2/2021

- 🔧 Fixed Fixed admin metabox settings getting reset when editing pages in Elementor since v3.36.12
- 🔧 Fixed Fixed LifterLMS groups settings page not saving

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-14) 3.36.14 - 3/1/2021

- ✨ New Added Read Only indicator on non-writeable Salesforce fields
- ✨ New Added wpf\_hubspot\_auth\_url filter
- ✨ New Added wpf\_zoho\_auth\_url filter
- ✨ New Added support for Datetime fields with ActiveCampaign
- ✨ New Added Ticket Name field for sync with Tribe Tickets
- ⚡️ Improved Improved support for multiselect fields with EngageBay
- ⚡️ Improved Data will no longer be synced to Salesforce for read-only fields
- ⚡️ Improved Users imported via a ThriveCart success URL will use the firstname and lastname parameters from the URL, if available
- ⚡️ Improved Empty tags will now be filtered out and not applied during a WooCommerce guest checkout
- ⚡️ Improved Custom fields are now separated from standard fields with Drip
- ⚡️ Improved Username format for imported users will be set to FirstnameLastname by default on install if BuddyPress or BuddyBoss is active
- ⚡️ Improved If FirstnameLastname or Firstname12345 are selected for the user import username format, and a user already exists with that username, the username will be randomized further
- 🔧 Fixed Fixed tags from previous (still active) MemberPress memberships being removed when a member purchased a new concurrent membership
- 🔧 Fixed Fixed wpForo custom profile fields not saving when loaded from the CRM
- 🔧 Fixed Fixed ThriveCart success URLs triggering welcome emails to new users
- 🔧 Fixed Fixed Mautic not loading more than 30 tags on some sites
- 🔧 Fixed Fixed Ninja Forms integration using the last email address on a form as the primary email, not the first
- 🔧 Fixed Fixed date-format fields sometimes not syncing correctly to Kartra
- 🔧 Fixed Fixed Add New Field on Contact Fields list not saving when no CRM field was selected

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-13) 3.36.13 - 2/24/2021

- Tested for WooCommerce 5.0.0
- ✨ New Added support for syncing date, checkbox, and and multiselect type fields with Ninja Forms
- ⚡️ Improved Improved error handing with Zoho
- ⚡️ Improved Admin notices from other plugins will be hidden on the WPF settings page
- 🔧 Fixed Fixed "Create tags from value" not working with form submissions
- Tribe Events Tickets RSVP bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-12) 3.36.12 - 2/22/2021

- ✨ New Added tagging based on event registration status with Event Espresso
- ✨ New Added Ticket Name and Registration Status fields for sync with Event Espresso
- ✨ New Added support for the Individual Attendee Collection module in Event Tickets Plus
- ✨ New Added track\_event function to ActiveCampaign integration
- ⚡️ Improved Improved HubSpot error logging
- ⚡️ Improved Improved automatic detection for first\_name and last\_name fields during registration
- ⚡️ Improved Improved performance - wpf-settings postmeta key will now be deleted on post save if there are no WPF settings configured for the post
- ⚡️ Improved get\_customer\_id() in ActiveCampaign integration will now read the customer\_id from a previously created cart, if available
- ⚡️ Improved Log messages will now use the correct custom object type (instead of "contact") when a custom object is being edited
- 🔧 Fixed Fixed query filtering not working on queries that used post\_\_in
- 🔧 Fixed Fixed BuddyPress group visibility rules taking priority over menu item visibility
- 🔧 Fixed Fixed conflict with Woo Credits
- 🔧 Fixed Fixed missing email address with Tribe Tickets guest RSVPs

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-11) 3.36.11 - 2/15/2021

- 🔧 Fixed Fixed PHP warning during login when Login Tags Sync is enabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-10) 3.36.10 - 2/15/2021

- ✨ New Added BuddyBoss Member Access Controls integration
- ✨ New Added Give Funds & Designations integration
- ✨ New Added View in Infusionsoft link to admin user profile
- ✨ New Added support for Users Insights custom fields
- ✨ New Added Home Page and Login Page options to "Redirect when access is denied" dropdown
- ⚡️ Improved Automated membership level changes in Restrict Content Pro will now be logged to the Customer notes
- ⚡️ Improved Login Tags Sync and Login Meta Sync features will now give up after 5 seconds if the CRM API is offline
- ⚡️ Improved Refactored and standardized ConvertKit integration
- ⚡️ Improved ConvertKit API timeout is now extended to 15 seconds
- ⚡️ Improved LearnDash topics will now inherit their parent lesson settings if no access rules have been specified
- ⚡️ Improved Added second argument $user\_meta to wpf\_map\_meta\_fields filter
- 🔧 Fixed Fixed post type rules taking priority over single post access rules for query filtering
- 🔧 Fixed Fixed JavaScript error on settings page when connected to ConvertKit
- 🔧 Fixed Fixed PHP notices in admin
- wpForo bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-9) 3.36.9 - 2/9/2021

- 🔧 Fixed Fixed undefined index PHP notices in v3.36.8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-8) 3.36.8 - 2/8/2021

- ✨ New Added linked tags for LearnDash group leaders (thanks @dlinstedt)
- ✨ New Added WP Fusion sync status meta box to the GiveWP payment admin screen
- ⚡️ Improved Passwords generated by the LearnDash - ThriveCart extension will now be synced to the CRM after a new user is created if Return Password is enabled
- ⚡️ Improved Improved logging for the Gamipress requirements system
- ⚡️ Improved Improved API error logging with Mailchimp
- 🔧 Fixed Fixed Prevent Reapplying Tags setting not saving when un-checked
- 🔧 Fixed Fixed Gamipress Requirements not being triggered when tags were loaded via a webhook
- 🔧 Fixed Fixed menu visibility controls sometimes getting output twice
- 🔧 Fixed Fixed some admin-only interfaces getting loading on the bbPress frontend profile and causing errors
- 🔧 Fixed Fixed some bbPress frontend profile updates not syncing
- 🔧 Fixed Fixed bbPress email address changes not syncing
- 🔧 Fixed Fixed Gutenberg block visibility not respecting auto login sessions
- 🔧 Fixed Fixed fatal error running WooCommerce Subscription Statuses batch operation on deleted subscriptions
- 🔧 Fixed Fixed PHP notice "Constant DOING\_WPF\_BATCH\_TASK already defined"
- 🔧 Fixed Fixed deprecated function notice "WC\_Subscriptions\_Manager::user\_has\_subscription()"
- 🔧 Fixed Fixed LifterLMS engagement settings not saving

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-7) 3.36.7 - 2/1/2021

- ✨ New Added ability to restrict BuddyPress group visibility based on tags and specify a redirect if access is denied
- ✨ New Added BuddyPress User Profile Tabs Creator integration for profile tabs visibility control
- ✨ New Added add\_object() update\_object() and load\_object() methods to Salesforce, HubSpot, and Zoho
- ⚡️ Improved When a user is removed from a BuddyBoss profile type via a linked tag, they will be given the Default Profile Type if one is set
- 🔧 Fixed Fixed WooCommerce Orders batch exporter not recognizing custom "paid" order statuses for export
- 🔧 Fixed Fixed the logs getting flushed if the filter form was submitted using the enter key
- 🔧 Fixed Fixed error viewing AccessAlly settings page when AccessAlly was connected to ActiveCampaign
- 🔧 Fixed Fixed array values not syncing to AgileCRM since v3.36.5

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-6) 3.36.6 - 1/26/2021

- 🔧 Fixed Fixed Gravity Forms integration not loading since v3.36.5
- 🔧 Fixed Fixed tooltips not working in the logs
- 🔧 Fixed Fixed HTTP API logging not showing up for ConvertKit
- 🔧 Fixed Fixed some PHP notices

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-5) 3.36.5 - 1/25/2021

- ✨ New Added \[\[user\_meta\_if\]\] shortcode (thanks @igorbenic!)
- ✨ New Added View In CRM link to admin user profile (at the moment just for ActiveCampaign)
- ✨ New Added option to set default format for usernames for imported users
- ✨ New Added notice in the logs when a user's role was changed via loading a new role from the CRM
- ✨ New Added support for custom order form fields with WPPizza
- ✨ New Added note about .csv imports to Import settings tab for Salesforce
- ⚡️ Improved Divi access controls will now work on all modules (not just Text, Column, and Section)
- ⚡️ Improved Role slug or name can be loaded from the CRM and used to set a user's role
- ⚡️ Improved wpf\_format\_field\_value in WPF\_CRM\_Base will stop imploding arrays (fixes issue syncing picklists options with commas in them to Salesforce and HubSpot)
- ⚡️ Improved Improved Zoho error handling
- ⚡️ Improved The ?cid= parameter will now be removed from the URL in the browser when using an auto login link
- ⚡️ Improved Test Connection / Refresh Available Tags errors will now be shown on the top of the settings page (instead of the Setup tab)
- 🔧 Fixed Fixed Ultimate Member not properly loading Unix timestamps from the CRM into Date type fields
- 🔧 Fixed Fixed linked tag enrollments with Restrict Content Pro triggering additional tag changes in the CRM
- 🔧 Fixed Fixed "Subscription Confirmation" type transactions getting picked up by the MemberPress Transactions Meta batch exporter
- 🔧 Fixed Fixed MemberPress corporate account tags not applying
- 🔧 Fixed Fixed MemberPress Subscriptions Meta batch tool syncing incorrect expiration date
- 🔧 Fixed Fixed On Hold tags getting applied and removed when a WooCommerce Subscription was renewed via early renewal
- 🔧 Fixed Fixed fatal error loading admin user profile when WP Fusion was not connected to a CRM
- 🔧 Fixed Fixed PHP notices in Mailjet integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-4) 3.36.4 - 1/8/2021

- ✨ New Added Webhook Base URL field to general settings tab as a reference
- ✨ New Added "ignoreSendingWebhook" parameter to EngageBay API calls
- ✨ New Added Flush All Logs button at top of logs page
- ✨ New Added debugging message to logs page for when the site runs out of memory building the Users dropdown
- ✨ New Added third parameter $searchfield to wpf\_salesforce\_query\_args filter
- ✨ New Added logging for when WP Remote Users Sync is syncing tags to another connected site
- ✨ New Added warning when curly quotes are detected in shortcode parameters
- ⚡️ Improved Parentheses can now be used in shortcode attributes to match tags with square brackets in the name
- ⚡️ Improved Salesforce webhook handler will now properly send a WSDL false when a webhook fails to be processed
- ⚡️ Improved Logs will now show when an entry was recorded as a part of a batch operation
- ⚡️ Improved Improved admin style for consistency with the rest of WP
- ⚡️ Improved Improved NationBuilder error handling
- 🔧 Fixed Fixed Ultimate Member not respecting custom date format when loading data from the CRM
- 🔧 Fixed Fixed Ultimate Member Profile Completeness tags getting applied on every profile page view
- 🔧 Fixed Fixed imported users not respecting "role" field loaded in user meta
- 🔧 Fixed Fixed Gravity Forms and Formidable Forms integrations not being available in the wp\_fusion()->integrations array
- Auto login bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-3) 3.36.3 - 1/13/2021

- ✨ New Added First Name and Last Name fields for sync with Intercom
- ✨ New Added Restrict Content Pro Joined Date fields for sync
- ✨ New Added support for loading picklist / multiselect fields from Salesforce
- ⚡️ Improved Improved logging for incoming webhooks with missing data
- 🔧 Fixed Fixed broken ThriveCart auto-login from 3.36.1
- 🔧 Fixed Fixed "quick update tags" not working with Mautic and ActiveCa,paign since 3.36.2
- 🔧 Fixed Fixed PHP warning trying to get tag ID from tag label when no tags exist in the CRM
- 🔧 Fixed Fixed returning null from wpf\_woocommerce\_customer\_data marking the order complete

= 3.36.2 - 1/11/2021

- ✨ New Added Apply Tags - Pending Cancellation with the Paid Memberships Pro Cancel on Next Payment Date addon
- ✨ New Added "Quick Update Tags" support for Mautic webhooks (improved performance)
- ✨ New Added indicator in the main access control meta box showing if the post is also protected by a taxonomy term
- ✨ New Added wpf\_woocommerce\_sync\_customer\_data filter
- ⚡️ Improved Customer meta data will no longer be synced during a WooCommerce renewal order
- ⚡️ Improved Improved performance of the "update" and "update\_tags" webhook methods with ActiveCampaign and Mautic
- 🔧 Fixed Fixed HubSpot not converting dates properly
- 🔧 Fixed Fixed contact ID not being passed from WooCommerce to Enhanced Ecommerce addon for registered users (from 3.36.1)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36-1) 3.36.1 - 1/7/2021

- ⚡️ Improved Refactored and optimized WooCommerce integration
- ⚡️ Improved Improved asynchronous checkout for WooCommerce (will now be bypassed during IPN notifications)
- ⚡️ Improved Refactored class WPF\_API / webhooks handler
- ⚡️ Improved Incoming duplicate webhooks will now be blocked
- ⚡️ Improved Deactivating a license key will now also remove the license key from the settings page
- 🔧 Fixed Fixed Cancelled tags not being applied with Paid Memberships Pro since v3.35.20
- 🔧 Fixed Fixed WooCommerce billing details taking priority over user details when adding a new user in the admin
- 🔧 Fixed Fixed bug applying and removing tags with Growmatik
- 🔧 Fixed Fixed Pending tags not being applied for WooCommerce orders
- ✨ New Added wpf\_get\_contact\_id() function

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-36) 3.36 - 1/4/2021

- ✨ New Added HighLevel CRM integration
- ✨ New Added Growmatik CRM integration
- ✨ New Added WP Fusion payment status metabox to Easy Digital Downloads payment sidebar
- ✨ New Added wpf\_woocommerce\_order\_statuses filter
- ✨ New Added wpf\_woocommerce\_subscription\_status\_apply\_tags filter
- ✨ New Added wpf\_woocommerce\_subscription\_status\_remove\_tags filter
- ⚡️ Improved Improved Asynchronous Checkout performance with CartFlows
- wpf\_forms\_pre\_submission\_contact\_id will now run before wpf\_forms\_pre\_submission
- 🔧 Fixed Fixed auto-login session setting user to logged in when the contact ID was invalid
- 🔧 Fixed Fixed PHP warning loading available users from Zoho

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-20) 3.35.20 - 12/28/2020

- ✨ New Added YITH WooCommerce Multi Vendor integration
- ✨ New Added LaunchFlows integration
- ✨ New Added option to limit Filter Queries to specific post types
- ✨ New Added support for the Paid Memberships Pro - Cancel on Next Payment Date addon
- ✨ New Added wpf\_gform\_settings\_after\_field\_select action
- 🔧 Fixed Fixed last name getting saved to first name field during a WooCommerce checkout
- 🔧 Fixed Fixed WP Fusion trying to handle API error responses from ontraport.com that originated with other plugins
- 🔧 Fixed Fixed LifterLMS billing and phone meta field keys

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-19) 3.35.19 - 12/22/2020

- 🔧 Fixed Fixed "Role not enabled for contact creation" notice when users register (from 3.35.17)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-18) 3.35.18 - 12/22/2020

- 🔧 Fixed Fixed error when trying to add an entry to the logs before the CRM connection was configured

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-17) 3.35.17 - 12/21/2020

- ✨ New Added Start Date and End Date filters to the activity logs
- ✨ New Added logging for when an API call to apply a tag isn't sent because the user already has that tag
- ✨ New Added 1 second sleep time to Quentn batch operations to get around API throttling
- ✨ New Added logging when the Import Trigger tags are removed as a part of a ConvertKit webhook
- ✨ New Added additional Standard Fields for sync with Autopilot
- ⚡️ Improved the available CRMs are now loaded on plugins\_loaded to better support custom CRMs modules in other plugins
- ⚡️ Improved Elementor form field values of "true" and "false" will now be treated as boolean with supported CRMs
- 🔧 Fixed Fixed apostrophes getting escaped with slashes before being synced
- 🔧 Fixed Fixed gender pronoun prefix getting synced with BuddyPress Gender-type fields
- 🔧 Fixed Fixed header resync button on settings page not resyncing CRM lists
- 🔧 Fixed Fixed Organizer Email overriding Attendee Email with Event Tickets Plus
- 🔧 Fixed Fixed the No Tags filter in the users list showing all users
- 🔧 Fixed Fixed Create Tags from Value on user\_role conflicting with Limit User Roles setting
- 🔧 Fixed Fixed Add New Field not working since 3.35.16
- 🔧 Fixed Fixed tags not being applied with EDD Free Downloads addon

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-16) 3.35.16 - 12/14/2020

- ✨ New Added Work Address fields for sync with NationBuilder
- ✨ New Added admin notice when logs are set to Only Errors mode
- ✨ New Added link back to main settings page from the logs page
- ✨ New Added "Apply registration tags" batch operation
- ✨ New Added wpf\_api\_preflight\_check filter
- ✨ New Added Referrer's Username field for sync with AffiliateWP
- ✨ New Added Affiliate's Landing Page field for sync
- ⚡️ Improved Significantly reduced the amount of memory required for the main settings storage
- ⚡️ Improved Improved error handling with Groundhogg and FluentCRM when those plugins are deactivated
- ⚡️ Improved Improved support for auto login sessions on custom WooCommerce checkout URLs
- 🔧 Fixed Fixed ActiveCampaign not loading more than 100 lists
- 🔧 Fixed Fixed changed link tag warning appearing multiple times
- 🔧 Fixed Fixed the new async checkout for WooCommerce not working with PayPal
- 🔧 Fixed Fixed typo in the tooltip with the new wpf\_format\_field\_value logging

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-15) 3.35.15 - 12/8/2020

- 🔧 Fixed Fixed "Invalid argument" warning listing custom fields with some CRMs
- 🔧 Fixed Fixed Required Tags (All) in Elementor integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-14) 3.35.14 - 12/7/2020

- Tested and updated for WordPress 5.6
- ✨ New Added additional logging to show when meta values have been modified by wpf\_format\_field\_value before being sent to the CRM
- ✨ New Added "Additional Actions" to admin user profile (Push User Meta, Pull User Meta, and Show User Meta) for debugging purposes
- ✨ New Added AffiliateWP Groups integration
- ✨ New Added Referral Count, Total Earnings, and Custom Slug fields for sync with AffiliateWP
- ✨ New Added functions wpf\_get\_crm\_field(), wpf\_is\_field\_active(), and wpf\_get\_field\_type()
- ⚡️ Improved All forms integrations will now use the first email address on the form as the primary email for lookups
- Updated ZeroBS CRM to Jetpack CRM
- 🔧 Fixed Fixed default group not getting assigned in wpForo when a tag linked to a usergroup was removed
- 🔧 Fixed Fixed Tribe Tickets integration treating the event organizer email as an attendee email
- 🔧 Fixed Fixed importer getting hung up on more than 100 contacts with HubSpot
- 🔧 Fixed Fixed bug with mapping Elementor Form fields when WPML was active
- 🔧 Fixed Fixed WooCommerce auto-applied coupons not respecting Allowed Emails usage restrictions
- 🔧 Fixed Fixed PHP warning in LearnDash 3.3.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-13) 3.35.13 - 11/30/2020

- ✨ New Added new experimental Asynchronous Checkout option (should be more reliable)
- ✨ New Added warning when user\_pass field is enabled for sync
- ✨ New Added wpf\_set\_user\_meta filter
- ⚡️ Improved if no billing name is specified at WooCommerce checkout, the name from the user record will be used instead
- ⚡️ Improved Improved error handling with Drip
- ⚡️ Improved Improved Mailjet error handling
- ⚡️ Improved If a MemberPress membership level has Remove Tags checked, then the tags will be removed when the member changes to a different membership level
- 🔧 Fixed Fixed ArgumentCountError in WPF\_BuddyPress::set\_member\_type()
- 🔧 Fixed Fixed BuddyPress groups not being auto-assigned during a webhook
- 🔧 Fixed Fixed BuddyPress custom fields not being loaded during a new user import
- 🔧 Fixed Fixed user\_registered getting loaded from the CRM when a user was imported
- 🔧 Fixed Fixed Mailjet integration not loading more than 10 custom fields
- 🔧 Fixed Fixed dates not formatted correctly with Mailjet

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-12) 3.35.12 - 11/23/2020

- ✨ New Added support for syncing custom attendee fields from Events Manager Pro
- ✨ New Added warning in the logs for chaining together multiple automated enrollments based on tag changes
- ✨ New Added wpf\_woocommerce\_attendee\_data filter
- ✨ New Added wpf\_pmpro\_membership\_status\_apply\_tags filter
- ✨ New Added wpf\_pmpro\_membership\_status\_remove\_tags filter
- ✨ New Added Re-Authorize With Hubspot button to re-connect via OAuth
- ⚡️ Improved Improved logging for MailerLite webhooks
- ⚡️ Improved MailerLite webhooks will now be deleted when resetting the settings
- 🔧 Fixed Fixed Elementor widget visibility for "Required Tags (not)" bug from v3.35.9
- 🔧 Fixed Fixed usage restriction settings not getting copied when a WooCommerce Smart Coupon was generated from a template
- 🔧 Fixed Fixed PHP warning loading contact data with ActiveCampaign

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-11) 3.35.11 - 11/18/2020

- 🔧 Fixed Fixed Elementor widget visibility bug from v3.35.9
- Removed dynamic tagging support from Groundhogg
- Users Insights bugfixes
- 🔧 Fixed Fixed GiveWP not syncing billing address during the initial payment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-10) 3.35.10 - 11/17/2020

- 🔧 Fixed Fixed Elementor widget visibility bug from v3.35.9
- Removed dynamic tagging support from Groundhogg
- Users Insights bugfixes
- 🔧 Fixed Fixed GiveWP not syncing billing address during the initial payment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-9) 3.35.9 - 11/16/2020

- ✨ New Added WP Remote Users Sync integration
- ✨ New Added support for FooEvents Bookings
- ✨ New Added Apply Tags - Enrolled setting for LearnDash groups
- ✨ New Added Last Order Date field for syncing with Easy Digital Downloads
- ✨ New Added BuddyPress Profile Type field for sync
- ✨ New Added logging for WP Fusion plugin updates
- ✨ New Added Email Optin Default (checked vs un-checked) option for WooCommerce
- Removed "(optional)" string from Email Option checkbox on WooCommerce checkout
- ⚡️ Improved Improved error handling for MailPoet
- ⚡️ Improved Improved Elementor visibility settings migration from pre v3.35.8
- ⚡️ Improved Improved Ninja Forms field mapping interface
- ⚡️ Improved Moved LearnDash groups settings to Settings panel
- 🔧 Fixed Fixed some issues with Sendinblue and email addresses that had capital letters
- 🔧 Fixed Fixed syncing empty multiselects to EngageBay not erasing the selected values in the CRM
- 🔧 Fixed Fixed multiselect fields not loading from EngageBay
- 🔧 Fixed Fixed wpForo custom fields not loading from the CRM if they didn't start with field\_
- 🔧 Fixed Fixed linked tags not being removed when a BuddyPress profile type was changed
- 🔧 Fixed Fixed Apply Tags select on LifterLMS access plans not saving
- Bugfixes for Gravity Forms User Registration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-8) 3.35.8 - 11/9/2020

- ✨ New Added Tag Applied and Tag Removed as triggers for Gamipress points, ranks, and achievements
- ✨ New Added option to sync Gamipress rank names when ranks are earned
- ✨ New Added Required Tags (All) option to Elementor integration
- ✨ New Added Logged In vs Logged Out setting to Elementor visibility controls
- ✨ New Added License Renewal URL field for sync with Easy Digital Downloads Software Licensing
- ✨ New Added paused subscription tagging with MemberPress
- ✨ New Added upgraded subscription tagging with MemberPress
- ✨ New Added downgraded subscription tagging with MemberPress
- ⚡️ Improved Multiselect values loaded from ActiveCampaign will now be loaded as arrays instead of strings
- ⚡️ Improved Easy Digital Downloads Recurring Payment tags will no longer be removed and reapplied during a subscription renewal
- 🔧 Fixed Fixed GiveWP integration not syncing renewal orders
- 🔧 Fixed Fixed PHP warning in EngageBay integration when loading a contact with no custom properties
- 🔧 Fixed Fixed - Updated for compatibility with wpForo User Custom Fields addon v2.x
- 🔧 Fixed Fixed Advanced Custom Fields integration converting dates fields from other integrations

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-7) 3.35.7 - 11/2/2020

- ✨ New Added Owner ID field for sync with Groundhogg
- ✨ New Added support for syncing avatars with BuddyPress and BuddyBoss
- ✨ New Added option to sync field labels instead of values with Gravity Forms
- ✨ New Added billing address fields for sync with GiveWP
- ⚡️ Improved Improved handling of simultaneous LearnDash Course and BuddyPress group auto-enrollments
- ⚡️ Improved Improved asynchronous checkout feature with WooCommerce during simultaneous orders
- ⚡️ Improved Tags will no longer be removed during a refund if a customer has an active subscription to the refunded product
- ⚡️ Improved Cancelled and On Hold subscription statuses with WooCommerce will now be ignored if the customer still has another active subscription to that product
- 🔧 Fixed Fixed users having to log in twice if they tried to log in during an auto-login session
- 🔧 Fixed Fixed auto-enrollments not working correctly with WPML when tags were loaded while the site was on a different language than the linked course or membership
- 🔧 Fixed Fixed AffiliateWP "Approved" tags not being applied during AffiliateWP batch operation
- 🔧 Fixed Fixed taxonomy term settings not saving when trying to remove protection from a term
- 🔧 Fixed Fixed cancelled tags getting applied when an Easy Digital Downloads subscription was upgraded

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-6) 3.35.6 - 10/26/2020

- ✨ New Added email optin consent checkbox for WooCommerce
- ✨ New Added support for custom address fields with Mailchimp
- ✨ New Added Avatar field for sync with Jetpack CRM
- ⚡️ Improved Improved support for syncing First Name and Last Name with Gist
- ⚡️ Improved Post type archives will now respect wpf\_post\_type\_rules access rules
- Updated updater
- 🔧 Fixed Fixed PHP warnings in EDD Recurring Payments integration
- 🔧 Fixed Fixed post-order actions not running on GiveWP renewal payments
- 🔧 Fixed Fixed Gravity Forms syncing empty form fields
- 🔧 Fixed Fixed widget settings not saving
- 🔧 Fixed Fixed Teams for WooCommerce Memberships team name not syncing if the team was created manually
- 🔧 Fixed Fixed error adding new Zoho Leads without a last name
- 🔧 Fixed Fixed EDD Recurring Payments integration getting product tag settings from oldest renewal payment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-5) 3.35.5 - 10/19/2020

- ✨ New Added Profile Picture field for sync with Groundhogg
- ✨ New Added option to disable admin menu editor interfaces
- ✨ New Added wpf\_render\_tag\_multiselect\_args filter
- ✨ New Added gettext support to wpf-admin.js strings and updated .pot file

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-4) 3.35.4 - 10/14/2020

- 🔧 Fixed Fixed tags not saving on Gravity Forms feeds in v3.35.3
- ✨ New Added event location fields for sync to Events Manager integration
- ✨ New Added gettext support to wpf-options.js strings and updated .pot file
- 🔧 Fixed Fixed JS bug when editing taxonomy terms
- Removed AWeber integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-3) 3.35.3 - 10/12/2020

- ✨ New Added Gravity PDF support
- ✨ New Added BuddyBoss profile type statuses batch export tool
- ✨ New Added Phone 3 through Phone 5 fields for syncing with Infusionsoft
- ⚡️ Improved Improved support for Gravity Forms User Registration addon (removed duplicate API call)
- Gravity Forms beta 2.5 bugfixes
- 🔧 Fixed Fixed Import Users tool with FluentCRM
- 🔧 Fixed Fixed some funny stuff when auto-enrolling a user into a LearnDash group and course simultaneously
- 🔧 Fixed Fixed Filter Queries setting not working on WooCommerce Related Products
- 🔧 Fixed Fixed FacetWP JS error when Exclude Restricted Items was enabled
- 🔧 Fixed Fixed settings page requiring an extra refresh after resetting before changing to a new CRM
- Continuing Kartra custom field bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-2) 3.35.2 - 10/6/2020

- ✨ New Added doing\_wpf\_webhook() function
- ✨ New Added additional validation and logging regarding setting user roles during import via webhook
- 🔧 Fixed Fixed Ultimate Member account activation emails not being sent when a user was imported via a webhook
- 🔧 Fixed Fixed "Wrong custom field format" error adding contacts to Kartra
- 🔧 Fixed Fixed loading dropdown and multi-checkbox type fields from Kartra

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35-1) 3.35.1 - 10/5/2020

- ✨ New Added refunded transaction tagging to the MemberPress integration
- ✨ New Added logging for when an invalid role slug was loaded from the CRM
- ✨ New Added datetime field support to Zoho integration
- ✨ New Added support for dropdown and checkbox fields with Kartra
- Removed "Copy to X related lessons and topics" option with LearnDash courses
- 🔧 Fixed Fixed Salesforce not connecting when the password has a slash character in it
- 🔧 Fixed Fixed Gravity Forms PayPal conditional feed running prematurely when set to "Process this feed only if the payment is successful"
- 🔧 Fixed Fixed Pods user forms syncing not detecting the correct user ID
- 🔧 Fixed Fixed tags not applying when a WP E-Signature standalone document was signed
- 🔧 Fixed Fixed FacetWP results filtering not recognizing the current user
- 🔧 Fixed Fixed tags select not saving with FooEvents variations
- 🔧 Fixed Fixed FooEvents event attendee tags not being applied to the WooCommerce customer if the customer was also an attendee
- 🔧 Fixed Fixed Pods data not syncing during frontend form submission
- 🔧 Fixed Fixed custom fields no longer syncing in FooEvents Custom Attendee Fields v1.4.19

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-35) 3.35 - 9/28/2020

- ✨ New Added FluentCRM integration
- ✨ New Added beta support for Mautic v3
- Refactored wpf\_render\_tag\_multiselect()
- ✨ New Added support for EngageBay webhooks
- ✨ New Added conditional logic support to Ninja Forms integration
- ⚡️ Improved WooCommerce checkout fields will now be pre-filled when an auto-login link is used
- ⚡️ Improved Improved FooEvents logging
- ⚡️ Improved Improved error handling for NationBuilder
- Removed Groundhogg < 2.x compatibility code
- 🔧 Fixed Fixed some funny stuff with Ninja Forms applying tags as numbers instead of names
- 🔧 Fixed Fixed ConvertKit removing the Import Trigger tag after a user was imported
- 🔧 Fixed Fixed custom fields not updating with Kartra
- 🔧 Fixed Fixed FooEvent custom fields not syncing when no email address was provided for primary attendee
- 🔧 Fixed Fixed "add" webhook changing user role to subscriber for existing users
- 🔧 Fixed Fixed bbPress forum archive redirects not working for logged-out users
- 🔧 Fixed Fixed Tribe Tickets not syncing first attendee

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-7) 3.34.7 - 9/21/2020

- ✨ New Added Toolset Types integration
- ✨ New Added pre _user_{$field} filter on user data being synced to the CRM
- ⚡️ Improved Improved support for custom fields with Kartra
- 🔧 Fixed Fixed XProfile fields loaded from the CRM not being logged
- 🔧 Fixed Fixed MailerLite importing subscribers during an update\_tags webhook if multiple subscribers were in the payload
- 🔧 Fixed Fixed date fields not syncing properly with Groundhogg
- 🔧 Fixed Fixed ticket name not syncing with Events Manager
- 🔧 Fixed Fixed applying tags on pageview in AJAX request during an auto login session not working on WP Engine

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-6) 3.34.6 - 9/14/2020

- ✨ New Added LifterLMS course track completion tagging
- ✨ New Added linked tag indicators in the admin posts table for LearnDash courses and groups
- ✨ New Added better handling for merged / changed contact IDs to Ontraport
- ⚡️ Improved stopped syncing user meta during an Easy Digital Downloads renewal payment
- 🔧 Fixed Fixed user meta not syncing when Pods user forms were submitted on the frontend
- 🔧 Fixed Fixed JSON formatting error applying tags with AgileCRM
- 🔧 Fixed Fixed import tool with MailerLite
- 🔧 Fixed Fixed Process WP Fusion Actions Again order action showing on WooCommerce Subscriptions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-5) 3.34.5 - 9/7/2020

- ✨ New Added Ticket Name field for sync with Events Manager
- ✨ New Added Required Tags (not) to WooCommerce variations
- ⚡️ Improved Improved support for syncing multi-checkbox fields with Gravity Forms
- Enabled Sequential Upgrade on WishList members added via auto-enrollment tags
- 🔧 Fixed Fixed access controls not working on LearnPress lessons
- 🔧 Fixed Fixed MailerLite integration using a case-sensitive comparison for email address changes
- 🔧 Fixed Fixed Gravity Forms date dropdown-type fields not syncing
- 🔧 Fixed Fixed Contact ID merge field not showing in Gravity Forms notifications editor
- 🔧 Fixed Fixed "update" webhooks being treated as "add" with Salesforce when multiple contacts were in the payload
- 🔧 Fixed Fixed - user\_id will no longer be loaded during user imports
- 🔧 Fixed Fixed - Renamed class WPF\_Options to WP\_Fusion\_Options to prevent conflict with WooCommerce Product Filter

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-4) 3.34.4 - 8/31/2020

- ✨ New Added profile completion tagging option to BuddyBoss
- ✨ New Added LifterLMS course enrollments batch tool
- ✨ New Added a do\_action( 'mepr-signup' ) to the MemberPress auto-enrollment process (for Corporate Accounts Addon compatibility)
- ✨ New Added support for new background\_request flag with the Ontraport API
- 🔧 Fixed Fixed MailEngine SOAP warning when MailEngine wasn't the active CRM
- 🔧 Fixed Fixed unwanted welcome emails with users imported via ConvertKit webhooks

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-3) 3.34.3 - 8/24/2020

- ✨ New Added a Default Account setting for Salesforce
- ⚡️ Improved Improved Hide From Menus setting - will now attempt to get a post ID out of a custom link
- ⚡️ Improved Add to cart button in WooCommerce will now be hidden by default if the product is restricted
- Moved ActiveCampaign tracking scripts to the footer
- 🔧 Fixed Fixed ThriveCart auto login not setting name on new user
- 🔧 Fixed Fixed user\_meta shortcode not displaying field if value was 0
- 🔧 Fixed Fixed PHP warning in WPForo integration
- 🔧 Fixed Fixed Lead Source Tracking not working for guests
- 🔧 Fixed Fixed bbPress / BuddyBoss forum access rules not working when the forum was accessed as a Group Forum

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-2) 3.34.2 - 8/17/2020

- ✨ New Added Events Manager fields for sync
- ✨ New Added "raw" field type
- ✨ New Added WooCommerce Points and Rewards integration
- Removed deactivation hook
- 🔧 Fixed Fixed error registering for events with Events Manager
- 🔧 Fixed Fixed LearnDash course settings getting copied to lessons when using the Builder tab in LearnDash v3.2.2
- 🔧 Fixed Fixed Filter Queries not working on LearnDash courses
- 🔧 Fixed Fixed tags not being applied during EDD checkout for logged in users who didn't yet have a contact record
- 🔧 Fixed Fixed crash with auto login with Set Current User enabled, and BuddyBoss active
- 🔧 Fixed Fixed importer with EngageBay
- 🔧 Fixed Fixed ActiveCampaign not loading more than 100 custom fields

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34-1) 3.34.1 - 8/12/2020

- WordPress 5.5 compatibility updates

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-34) 3.34 - 8/11/2020

- ✨ New Added EngageBay CRM integration
- ✨ New Added support for multiselect fields with Mautic
- ⚡️ Improved Improved support for syncing wp\_capabilities and role fields
- Asynchronous Checkout for WooCommerce will now be bypassed on subscription renewal orders
- Un-hooked MemberPress checkout actions from mepr-event-transaction-completed
- 🔧 Fixed Fixed ActiveCampaign list Auto Responder campaigns not running on contacts added over the API
- 🔧 Fixed Fixed custom WishList Member fields not loading from the CRM
- 🔧 Fixed Fixed Required Tags (All) tags not showing on lock icon tooltip in post tables
- 🔧 Fixed Fixed ActiveCampaign not loading more than 20 custom fields

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-20) 3.33.20 - 8/3/2020

- 🔧 Fixed Fixed broken WishList Member admin menu

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-19) 3.33.19 - 8/3/2020

- ✨ New Added Last Course Progressed field for sync with LearnDash
- ✨ New Added Last Course Completed Date field for sync with LearnDash
- ✨ New Added Last Lesson Completed Date field for sync with LearnDash
- ✨ New Added wpf\_user\_can\_access() function
- ✨ New Added \[\[wpf\_user\_can\_access\]\] shortcode
- ✨ New Added support for quotes around tag names with Fluent Forms
- ✨ New Added cancelled tagging to WishList member
- ⚡️ Improved Improved WishList Member logging
- Updated some ActiveCampaign API calls to v3 API
- 🔧 Fixed Fixed LearnDash course settings getting copied to lessons when using the Builder tab in LearnDash v3.2.2
- 🔧 Fixed Fixed Form Auto Login with Fluent Forms
- 🔧 Fixed Fixed wpForo custom fields not loading from CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-18) 3.33.18 - 7/27/2020

- ✨ New Added HTTP API logging option
- ✨ New Added LifterLMS Groups beta integration
- ✨ New Added LifterLMS voucher tagging support
- ✨ New Added X-Redirect-By headers when WP Fusion performs a redirect
- ✨ New Added unlock utility for re-exporting Event Espresso registrations
- ⚡️ Improved Improved Event Espresso performance
- 🔧 Fixed Fixed Salesforce contact ID lookup failing with emails with + symbols
- 🔧 Fixed Fixed auto-login warning appearing when previewing Gravity Forms forms in the admin

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-17) 3.33.17 - 7/20/2020

- ✨ New Added Organizer fields for syncing with Tribe Events / Event Tickets
- ✨ New Added support for Groundhogg Advanced Custom Meta Fields
- ✨ New Added timezone offset back to Ontraport date field conversion
- ✨ New Added Refresh Tags & Fields button to top of WPF settings page
- ✨ New Added notice when checking out in WooCommerce as an admin
- ✨ New Added automatic detection for Formidable Forms User Registration fields
- ✨ New Added out of memory and script timeout error handling to activity logs
- ✨ New Added Gravity Forms referral support to AffiliateWP integration
- ✨ New Added notice to LearnDash course / lesson / topic meta box showing access rules inherited from course
- Removed job\_title and social fields from core WP fields on Contact Fields list
- ⚡️ Improved Improved performance of update\_tags webhook with ActiveCampaign
- ⚡️ Improved last\_updated usermeta key will be updated via WooCommerce when a user's tags or contact ID are modified (for Metorik compatibility)
- ⚡️ Improved "Active" tags will no longer be removed when a MemberPress subscription is cancelled
- ⚡️ Improved If the user\_meta shortcode is used for a field that has never been loaded from the CRM, WP Fusion will make an API call to load the field value one time
- ⚡️ Improved Updated has\_tag() function to accept an array or a string
- 🔧 Fixed Fixed restricted posts triggering redirects on a homepage set to Your Latest Posts in Settings >> Reading
- 🔧 Fixed Fixed Groundhogg custom fields updated over the REST API not being synced back to the user record
- 🔧 Fixed Fixed undefined function bp\_group\_get\_group\_type\_id() in BuddyPress
- 🔧 Fixed Fixed broken import tool with Drip
- Dynamic tagging bugfixes
- AgileCRM timezone tweaks

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-16) 3.33.16 - 7/13/2020

- ✨ New Added "Resync contact IDs for every user" batch operation
- ✨ New Added "LearnDash course enrollment statuses" batch operation
- ✨ New Added notice if an auto-login link is visited by a logged-in admin
- ⚡️ Improved Improved query filtering on BuddyPress activity stream
- ⚡️ Improved LearnDash courses, lessons, and topics will inherit access permissions from the parent course
- ⚡️ Improved Split Mautic site tracking into two modes (Standard vs. Advanced)
- ⚡️ Improved If API call to get user tags fails or times out, the local tag cache won't be erased
- 🔧 Fixed Fixed a new WooCommerce subscription not removing the payment failed tags from a prior failed subscription for the same product
- 🔧 Fixed Fixed Preview With Tag not working if the user doesn't have a CRM contact record
- 🔧 Fixed Fixed restricted post category redirects not working if no tags was specified
- 🔧 Fixed Fixed Hide Term on post categories hiding terms in the admin when Exclude Administrators was off
- 🔧 Fixed Fixed import tool not loading more than 1,000 contacts with AgileCRM
- 🔧 Fixed Fixed AgileCRM not properly looking up email addresses for some contacts
- 🔧 Fixed Fixed get\_tag\_id() returning tag name with Groundhogg since v3.33.15
- Refactored WooCommerce Subscriptions integration and removed cron task
- Memberoni bugfixes
- Updated .pot file

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-15) 3.33.15 - 7/6/2020

- Updated User.com integration for new API endpoint
- ✨ New Added BuddyPress groups statuses batch operation
- ✨ New Added ability to create new tags in Groundhogg via WP Fusion
- ✨ New Added setting for additional allowed URLs to Site Lockout feature
- ✨ New Added Generated Password field for syncing with WooCommerce
- ✨ New Added Membership Level Name field for syncing with WishList Member
- ⚡️ Improved Improved support for syncing phone numbers with Sendinblue
- Users added to a multisite blog will now be tagged with the Assign Tags setting for that site
- 🔧 Fixed Fixed Zoho field mapping not converting arrays when field type was set to "text"
- 🔧 Fixed Fixed replies from restricted bbPress topics showing up in search results
- 🔧 Fixed Fixed WooCommerce attributes only being detected from first 5 products instead of 100
- 🔧 Fixed Fixed deletion tags not being applied on multisite sites when a user was deleted from a blog
- 🔧 Fixed Fixed MemberPress subscription data being synced when a subscription status changed from Active to Active
- 🔧 Fixed Fixed duplicate tags being applied when a MemberPress subscription and transaction were created from the same registration
- 🔧 Fixed Fixed Filter Queries (Advanced) hiding restricted posts in the admin
- 🔧 Fixed Fixed Contact Form 7 integration running when no feeds were configured
- 🔧 Fixed Fixed Woo Memberships for Teams team name not syncing when a member was added to a team
- 🔧 Fixed Fixed Mautic merging contact records from tracking cookie too aggressively
- 🔧 Fixed Fixed archive restrictions not working if no required tags were specified
- Event Espresso bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-14) 3.33.14 - 6/29/2020

- ✨ New Added priority option for Return After Login
- ✨ New Added option to set a default owner for new contacts with Zoho
- ✨ New Added Membership Status field for sync with WooCommerce Memberships
- ✨ New Added product variation tagging for FooEvents attendees
- ⚡️ Improved Improved multiselect support with Zoho
- ⚡️ Improved Improved support for syncing multi-checkbox fields with Formidable Forms
- 🔧 Fixed Fixed refreshing the logs page after flushing the logs flushing them again
- 🔧 Fixed Fixed Group and Group Type tags not being applied in BuddyPress when an admin accepted a member join request
- GiveWP bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-13) 3.33.13 - 6/23/2020

- 🔧 Fixed Fixed invalid redirect URI connecting to Zoho
- 🔧 Fixed Fixed Loopify and Zoho getting mixed up during OAuth connection process

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-12) 3.33.12 - 6/22/2020

- ✨ New Added Modern Events Calendar integration
- ✨ New Added status indicator for Inactive people in Drip
- ⚡️ Improved Improved support for Mautic site tracking
- ⚡️ Improved Improved translatability and updated pot files
- 🔧 Fixed Fixed updated phone to primary\_phone with Groundhogg
- 🔧 Fixed Fixed Paused tags not getting removed when a WooCommerce membership comes back from Paused status during a Subscriptions renewal
- 🔧 Fixed Fixed "Cancelled" tags getting applied to pending members during MemberPress Membership Statuses batch operation
- 🔧 Fixed Fixed duplicate log entries when updating BuddyPress profiles
- 🔧 Fixed Fixed contact ID not being detected in some Mautic webhooks
- 🔧 Fixed Fixed syncing multi-checkbox fields from WPForms
- 🔧 Fixed Fixes for syncing expiration dates with WooCommerce Memberships
- 🔧 Fixed Fixed PHP warning while submitting Formidable forms with multi-checkbox values

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-11) 3.33.11 - 6/18/2020

- 🔧 Fixed Fixed fatal conflict when editing menu items if other plugins hadn't been updated to the WP 5.4 menu syntax
- 🔧 Fixed Fixed AgileCRM tag name validation false positive on underscore characters
- 🔧 Fixed Fixed logs items per page not saving in WP 5.4.2
- 🔧 Fixed Fixed compatibility with Gifting for WooCommerce Subscriptions v2.1.1

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-10) 3.33.10 - 6/15/2020

- ✨ New Added WooCommerce Appointments integration
- ✨ New Added WP Crowdfunding integration
- ✨ New Added Subscription Status field for syncing with WooCommerce Subscriptions
- ✨ New Added Last Order Payment Method field for syncing with WooCommerce
- ✨ New Added Last Order Total field for syncing with WooCommerce
- ✨ New Added WishList Membership Statuses batch operation
- ✨ New Added wpf\_get\_contact\_id\_email filter
- ✨ New Added wpf\_batch\_objects filter
- ✨ New Added tag name validation to AgileCRM integration
- ✨ New Added super secret WooCommerce Subscriptions debug report
- Reduced the amount of data saved by the background worker to help with max\_allowed\_packet issues
- 🔧 Fixed Fixed address fields not being synced back to WordPress after an admin contact save in Groundhogg
- 🔧 Fixed Fixed bug in loading MemberPress radio field values from the CRM
- 🔧 Fixed Fixed Active tags getting reapplied when a WooCommerce Subscription status changed to Pending Cancel
- 🔧 Fixed Fixed WishList Member v3 custom fields not syncing
- 🔧 Fixed Fixed WishList Member Stripe registration creating contacts with invalid email addresses
- 🔧 Fixed Fixed s2Member custom fields not being synced on profile update

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-9) 3.33.9 - 6/8/2020

- ✨ New Added support for syncing custom event fields with Tribe Events Calendar Pro
- ✨ New Added support for BuddyPress Username Changer addon
- ✨ New Added option to apply tags when a user is added to a BuddyPress group type
- ✨ New Added ld\_last\_course\_enrolled field for syncing with LearnDash
- ✨ New Added tagging based on assignment upload for LearnDash topics
- ✨ New Added customer\_id field for sync with Easy Digital Downloads
- ✨ New Added Remove Tags from Customer setting to Gifting for WooCommerce Subscriptions integration
- 🔧 Fixed Fixed essay-type answers not syncing properly from LearnDash quizzes
- 🔧 Fixed Fixed auto-enrollments not working with TutorLMS paid courses
- 🔧 Fixed Fixed import tool not loading more than 10 contacts with Mailchimp
- 🔧 Fixed Fixed import tool not loading more than 100 contacts with MailerLite
- 🔧 Fixed Fixed Gifting for WooCommerce Subscriptions integration not creating a second contact record for the gift recipient when billing\_email was enabled for sync

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-8) 3.33.8 - 6/2/2020

- WooCommerce Subscribe All the Things tags will now be applied properly during a WooCommerce Subscription Statuses batch operation
- 🔧 Fixed Fixed width of tag select boxes in LearnDash settings panel when Gutenberg was active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-7) 3.33.7 - 6/1/2020

- ✨ New Added Beaver Themer integration
- ✨ New Added global Apply Tags to Group Members setting for Restrict Content Pro
- ✨ New Added support for syncing multiple event attendees with Tribe Tickets
- ✨ New Added Username for sync with Kartra
- ✨ New Added wpf\_salesforce\_lookup\_field filter
- ✨ New Added staging mode notice on the settings page
- Moved LearnDash course settings onto Settings panel
- Refactored WooCommerce Memberships integration and updated tagging logic to match WooCommerce Subscriptions
- Salesforce will now default to the field configured for sync with the user\_email field as the lookup field for records
- ⚡️ Improved Improved logging with Salesforce webhooks
- 🔧 Fixed Fixed WooCommerce billing\_country not converting to full country name when field type was set to "text"
- 🔧 Fixed Fixed auto-login session from form submission ending if Allow URL Login was disabled
- WishList Member bugfixes
- 🔧 Fixed Fixed SSL error connecting to Zoho's Indian data servers

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-6) 3.33.6 - 5/25/2020

- ✨ New Added setting for Prevent Reapplying Tags (Advanced)
- ✨ New Added GiveWP Donors and GiveWP Donations batch operations
- ✨ New Added Total Donated and Donations Count fields for sync with GiveWP
- ✨ New Added Pending Cancellation and Free Trial status tagging for WooCommerce Memberships
- ✨ New Added wpf\_disable\_tag\_multiselect filter
- ✨ New Added CloudFlare detection to webhook testing tool
- ✨ New Added global Apply Tags to Customers setting for Easy Digital Downloads
- GiveWP integration will now only sync donor data for successful payments
- ⚡️ Improved Improved error handling for invalid tag names with Infusionsoft
- ⚡️ Improved Improved support for multiselect fields with Contact Form 7
- 🔧 Fixed Fixed Filter Queries not working on search results in Advanced mode
- 🔧 Fixed Fixed bug causing failed contact ID lookup to crash form submissions
- 🔧 Fixed Fixed Infusionsoft not loading tag names with Hebrew characters
- Klaviyo bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-5) 3.33.5 - 5/18/2020

- ✨ New Added Give Recurring Donations support
- ✨ New Added Pods user fields support
- ✨ New Added Remove Tags option to Restrict Content Pro integration
- ✨ New Added Payment Failed tagging to Paid Memberships Pro
- ✨ New Added "Paid Memberships Pro membership meta" batch operation
- Refactored and optimized Paid Memberships Pro integration
- ⚡️ Improved Improved error handling for Salesforce access token refresh process
- ⚡️ Improved Improved Restrict Content Pro inline documentation
- ⚡️ Improved Improved filtering tool on the All Users list
- Offending file and line number will now be included on PHP error messages in the logs
- ✨ New Added alternate method back to the batch exporter for cases when it's being blocked
- 🔧 Fixed Fixed Cancelled tags getting applied in Paid Memberships Pro when a member expires
- 🔧 Fixed Fixed Filter Queries not working on the blog index page
- Maropost bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-4) 3.33.4 - 5/11/2020

- Facebook OG scraper will now bypass access rules if SEO Show Excerpts is on
- ✨ New Added validation to custom meta keys registered for sync on the Contact Fields list
- ✨ New Added compatibility notices in the admin when potential plugin conflicts are detected
- Updated Fluent Forms integration
- Updated MemberPress membership data batch process to look at transactions in addition to subscriptions
- LearnDash enrollment transients are now cleared when a user is auto-enrolled into a group
- Intercom integration will now force the v1.4 API
- 🔧 Fixed Fixed Spanish characters not showing in Infusionsoft tag names
- 🔧 Fixed Fixed logs showing unenrollments from LearnDash courses granted by LearnDash Groups
- 🔧 Fixed Fixed warning when using Restrict Content Pro and the Groups addon wasn't active
- 🔧 Fixed Fixed guest checkout tags not being applied in Maropost
- 🔧 Fixed Fixed set-screen-option filter not returning $status if column wasn't wpf\_status\_log\_items\_per\_page (thanks @Pebblo)

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-3) 3.33.3 - 5/5/2020

- 🔧 Fixed Fixed an empty WooCommerce Subscriptions Gifting recipient email field on checkout overwriting billing\_email
- 🔧 Fixed Fixed Infusionsoft form submissions starting auto-login sessions even if the setting was turned off

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-2) 3.33.2 - 5/4/2020

- ✨ New Added WP-Members integration
- ✨ New Added Users Insights integration
- ✨ New Added WooCommerce Shipment Tracking integration
- ✨ New Added event check-in and checkout tagging for Event Espresso
- ✨ New Added dynamic tagging support for Event Espresso
- ✨ New Added Remove Tags option for WooCommerce Memberships for Teams integration
- ✨ New Added Team Name field for sync to WooCommerce Memberships for Teams integration
- ✨ New Added support for tagging on Stripe Payment Form payments with Gravity Forms
- 🔧 Fixed Fixed "Remove Tags" setting not being respected during a MemberPress Memberships batch operation
- 🔧 Fixed Fixed Ultimate Member registrations failing to sync data with multidimentional arrays
- 🔧 Fixed Fixed optin\_status getting saved to contact meta with Groundhogg
- 🔧 Fixed Fixed "Cancelled" tags getting applied when a WooCommerce subscription was trashed
- 🔧 Fixed Fixed PHP warning in updater when license wasn't active
- 🔧 Fixed Fixed CRM field labels not showing in Caldera Forms
- 🔧 Fixed Fixed Mautic not importing more than 30 contacts using import tool

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33-1) 3.33.1 - 4/27/2020

- 🔧 Fixed Fixed fatal error in Teams for WooCommerce Memberships settings panel

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-33) 3.33 - 4/27/2020

- ✨ New Added WP ERP CRM integration
- ✨ New Added Gifting for WooCommerce Subscriptions integration
- ✨ New Added Events Manager integration
- ✨ New Added WPComplete tagging for course completion
- ✨ New Added support for WPForo usergroups auto-assignment via tag
- ✨ New Added PHP error handling to logger
- ✨ New Added Double Optin setting to Mailchimp integration
- ✨ New Added Time Zone and Language fields for Infusionsoft
- Badges linked with tags in myCred will now be removed when the linked tag is removed
- Improvements to asynchronous checkout process
- 🔧 Fixed Fixed Hide From Menus filter treating a taxonomy term as a post ID for access control
- 🔧 Fixed Fixed Gravity Forms Entries batch operation not detecting all entries
- 🔧 Fixed Fixed order\_id and order\_date not syncing during a WooCommerce Subscriptions renewal order
- 🔧 Fixed Fixed WooCommerce Subscription product name not being synced when a subscription item is switched
- 🔧 Fixed Fixed email address changes not getting synced after confirmation via the admin user profile

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-32-3) 3.32.3 - 4/20/2020

- ✨ New Added Apply Tags - Profile Complete setting to Ultimate Member
- Updated WishList member integration for v3.x
- Translatepress language code can now be loaded from the CRM
- Removed "Profile Update Tags" setting
- 🔧 Fixed Fixed coupon\_code not syncing with WooCommerce
- 🔧 Fixed Fixed unnecessary contact ID lookup in user import process

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-32-2) 3.32.2 - 4/17/2020

- ✨ New Added wpf\_woocommerce\_user\_id filter
- 🔧 Fixed Fixed MailerLite subscriber IDs not loading properly on servers with PHP\_INT\_MAX set to 32
- 🔧 Fixed Fixed Status field not updating properly with Drip
- 🔧 Fixed Fixed fatal error checking if order\_date field was enabled for sync during a WooCommerce renewal payment

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-32-1) 3.32.1 - 4/13/2020

- ✨ New Added fallback method for background worker in case it gets blocked
- ✨ New Added Filter Queries setting to Beaver Builder Posts module
- ✨ New Added support for defining WPF\_LICENSE\_KEY in wp-config.php
- ✨ New Added debug tool for MailerLite webhooks
- ✨ New Added Status field for syncing with Drip
- ✨ New Added support for wpForo User Custom Fields
- WooCommerce Subscription renewal dates will now be synced when manually edited by an admin
- ⚡️ Improved Improved importer tool with ActiveCampaign
- ⚡️ Improved Improved logging for MailerLite webhooks
- 🔧 Fixed Fixed Ultimate Member registrations failing to sync data with multidimentional arrays
- 🔧 Fixed Fixed optin\_status getting saved to contact meta with Groundhogg
- 🔧 Fixed Fixed "Cancelled" tags getting applied when a WooCommerce subscription was trashed
- 🔧 Fixed Fixed PHP warning in updater when license wasn't active
- 🔧 Fixed Fixed CRM field labels not showing in Caldera Forms
- 🔧 Fixed Fixed Mautic not importing more than 30 contacts using import tool

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-32) 3.32 - 4/6/2020

- ✨ New Added Loopify CRM integration
- ✨ New Added support for Advanced Forms Pro
- ✨ New Added Set Current User option to auto-login system
- ✨ New Added Send Confirmation Emails setting for MailPoet
- ✨ New Added Enable Notifications option for MailerLite import webhooks
- s2Member membership level tags will now be applied when an s2Member role is changed
- Moved logs to the Tools menu
- Removed bulk actions from logs page
- Updated admin menu visibility interfaces for WP 5.4
- 🔧 Fixed Fixed metadata loaded from the CRM into Toolset Types user fields not saving correctly
- 🔧 Fixed Fixed temporary passwords getting synced when a password reset was requested in Ultimate Member
- 🔧 Fixed Fixed sub-menu items not being hidden if parent menu item was hidden
- 🔧 Fixed Fixed Gravity Forms Entries batch operation not detecting all entries
- 🔧 Fixed Fixed order\_id and order\_date not syncing during a WooCommerce Subscriptions renewal order
- 🔧 Fixed Fixed WooCommerce Subscription product name not being synced when a subscription item is switched
- 🔧 Fixed Fixed email address changes not getting synced after confirmation via the admin user profile

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-31) 3.31 - 3/30/2020

- ✨ New Added Quentn CRM integration
- ⚡️ Improved Improved support for multiselect fields in Gravity Forms
- ⚡️ Improved Improved Trial Converted tagging for MemberPress
- 🔧 Fixed Fixed Defer Until Activation not working with Ultimate Member when a registration tag wasn't specified
- 🔧 Fixed Fixed automatic re-activation of Ultimate Member accounts when the deactivation tag is removed not working since Ultimate Member 2.8.7
- 🛠️ Dev Added `wpf_hubspot_add_engagement` filter to allow modifying the HubSpot engagement body before it is sent
- 🛠️ Dev Updated the HubSpot engagements API to use the new v3 API

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-7) 3.29.7 - 3/5/2020

- ✨ New Added support for WooCommerce order status tagging with statuses created by WooCommerce Order Status Manager
- 🔧 Fixed Fixed restricted content message not being output when multiple content areas were on a page
- 🔧 Fixed Fixed New User Benchmark not firing with Groundhogg
- 🔧 Fixed Fixed changed email addresses not syncing to Sendinblue
- 🔧 Fixed Fixed names not syncing with profile updates in BuddyPress

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-6) 3.29.6 - 3/2/2020

- ✨ New Added option to send welcome email to new users imported from ConvertKit
- ✨ New Added Apply Tags - Trial and Apply Tags - Converted settings to MemberPress
- ✨ New Added Coupon Used field for sync with MemberPress
- ✨ New Added Trial Duration field for sync with MemberPress
- ✨ New Added Default Optin Status option for Groundhogg
- New user welcome emails are now sent after tags and meta data have been loaded
- Expired and Cancelled tags will now be removed when someone joins a Paid Memberships Pro membership level
- Removed admin authentication cookies from background worker
- Stopped converting dates to GMT with Ontraport
- 🔧 Fixed Fixed Tags (Not) visibility bug with Beaver Builder

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-5) 3.29.5 - 2/24/2020

- ✨ New Added optin\_status field for syncing with Groundhogg
- ✨ New Added Defer Until Activation setting to BuddyPress
- ✨ New Added Defer Until Activation setting to User Meta Pro
- ✨ New Added wc\_memberships\_for\_teams\_team\_role field for syncing with WooCommerce Memberships for Teams
- ✨ New Added bulk edit support to WP Courseware courses and units
- ✨ New Added wpf\_forms\_args filter to forms integrations
- New contacts added to Groundhogg will be marked Confirmed by default
- ✨ New Added "Apply Tags - Enrolled" setting to LearnDash courses
- 🔧 Fixed Fixed WooCommerce auto applied coupons not respecting coupon usage restrictions
- 🔧 Fixed Fixed Recurring Payment Failed tags not being applied with Restrict Content Pro
- 🔧 Fixed Fixed Mautic not listing more than 30 custom fields
- 🔧 Fixed Fixed Mailchimp not loading more than 200 tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-4) 3.29.4 - 2/17/2020

- ✨ New Added Last Coupon Used field for syncing with WooCommerce
- ✨ New Added support for global addons with WooCommerce Product Addons
- ✨ New Added default fields to MailerLite for initial install
- Leads will now be created in Gist instead of Users if the subscriber doesn't have a user account
- 🔧 Fixed Fixed auto-enrollments not working with more than 20 BuddyBoss groups
- 🔧 Fixed Fixed error with myCRED when the Badges addon was disabled
- 🔧 Fixed Fixed messed up formatting of foreign characters in Gutenberg block
- 🔧 Fixed Fixed conflict between Clean Login and Convert Pro integrations
- 🔧 Fixed Fixed underscores not loading in Infusionsoft tag labels

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-3) 3.29.3 - 2/10/2020

- ✨ New Added support for EDD Custom Prices addon
- ✨ New Added Required Tags (not) setting to access control meta box
- ✨ New Added an alert to the status bar of the background worker if API errors were encountered during data export
- Manually changing a WooCommerce subscription status to On Hold will now immediately apply On Hold tags instead of waiting for renewal payment
- 🔧 Fixed Fixed background worker status check getting interrupted by new WooCommerce orders
- 🔧 Fixed Fixed user\_activation\_key getting reset when importing new users and breaking Better Notifications welcome emails
- 🔧 Fixed Fixed PHP error manually adding a member to a team in WooCommerce Memberships for Teams

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-2) 3.29.2 - 2/4/2020

- ✨ New Added wpf\_auto\_login\_cookie\_expiration filter
- ✨ New Added wpf\_salesforce\_query\_args filter
- 🔧 Fixed Fixed Approved tags getting applied with Event Espresso when registrations are pending
- 🔧 Fixed Fixed tags not applying with Event Espresso

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29-1) 3.29.1 - 2/3/2020

- ✨ New Added WP Ultimo integration
- ✨ New Added notice when linked / auto-enrollment tags are changed on a course or membership
- ✨ New Added wpf\_event\_espresso\_customer\_data filter to Event Espresso
- ✨ New Added option to Event Espresso to sync attendees in addition to the primary registrant
- ✨ New Added additional event and venue fields for syncing with FooEvents
- ✨ New Added additional event and venue fields for syncing with Event Espresso
- ✨ New Added wp\_s2member\_auto\_eot\_time for syncing with s2Member
- 🔧 Fixed Fixed Invalid Data errors when syncing a number to a text field in Zoho
- 🔧 Fixed Fixed "Return After Login" not working with WooCommerce account login
- Maropost bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-29) 3.29 - 1/27/2020

- ✨ New Added Klick-Tipp CRM integration
- Logged in users and form submissions will now be identified to the Gist tracking script
- WooCommerce order status tags will now be applied even if the initial payment wasn't processed by WP Fusion
- WooCommerce Subscriptions v3.0 compatibility updates
- ⚡️ Improved Improved webhooks with MailerLite (can now handle multiple subscribers in a single payload)
- Suppressed HTML5 errors in Gutenberg block
- 🔧 Fixed Fixed tags not getting removed from previous variation when a WooCommerce variable subscription was switched
- Groundhogg bugfixes
- Maropost bugfixes
- Sendinblue bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-6) 3.28.6 - 1/20/2020

- ✨ New Added linked tags to Ranks with myCred
- ✨ New Added BuddyPress Account Deactivator integration
- ✨ New Added Entries Per Page to Screen Options in logs
- 🔧 Fixed Fixed special characters in tag names breaking tags loading with Infusionsoft
- Copper bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-5) 3.28.5 - 1/15/2020

- 🔧 Fixed Fixed notice with ConvertKit when WP\_DEBUG was turned on
- Auto login sessions will now end on the WooCommerce Order Received page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-4) 3.28.4 - 1/13/2020

- ✨ New Added support for myCred ranks
- ✨ New Added Event Start Time field for syncing with Event Espresso
- ⚡️ Improved Improved Paid Memberships Pro logging
- 🔧 Fixed Fixed being unable to remove a saved tag on a single AffiliateWP affiliate
- 🔧 Fixed Fixed special characters not getting encoded properly with Contact Form 7 submissions
- 🔧 Fixed Fixed bug in updater and changelog display
- Slowed down batch operations with ConvertKit to get around API throttling
- ✨ New Added logging for API throttling with ConvertKit
- ✨ New Added support for dropdown-type fields with Copper
- Copper bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-3) 3.28.3 - 1/9/2020

- 🔧 Fixed Fixed ActiveCampaign contact ID lookups returning error message when connected to non-English ActiveCampaign accounts

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-2) 3.28.2 - 1/9/2020

- Performance improvements with LearnDash auto enrollments
- ⚡️ Improved Improved debugging tools for background worker
- Menu item visibility bugfixes
- Gist compatibility updates for changed API methods

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28-1) 3.28.1 - 1/6/2020

- ✨ New Added option for tagging on LearnDash assignment upload
- ✨ New Added Share Logins Pro integration
- Tags will now be removed from previous status when a membership status is changed in WooCommerce Memberships
- ⚡️ Improved Improved handling for email address changes with Sendinblue
- Give integration bugfixes
- GetResponse bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-28) 3.28 - 12/30/2019

- ✨ New Added Zero BS CRM integration
- ✨ New Added MailEngine CRM integration (thanks @pety-dc and @ebola-dc)
- ✨ New Added wpf\_user\_can\_access and wpf\_divi\_can\_access filters to Divi integration
- ✨ New Added option to merge order status into WooCommerce automatic tagging prefix
- Removed extra column in admin list table and moved lock symbol to after the post title
- Ultimate Member roles that are linked with a tag will no longer leave a user with no role if the tag is removed
- ✨ New Added additional WooCommerce Memberships logging
- Menu item visibility bug fixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27-5) 3.27.5 - 12/23/2019

- ✨ New Added option to restrict access to individual menu items
- ✨ New Added FacetWP integration
- ✨ New Added support for AffiliateWP Signup Referrals addon
- ✨ New Added export tool for Event Espresso registrations
- 🔧 Fixed Fixed BuddyPress groups not running auto-enrollments when a webhook was received

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27-4) 3.27.4 - 12/16/2019

- ⚡️ Improved Improved support for custom fields with FooEvents
- ✨ New Added wpf\_aweber\_key and wpf\_aweber\_secret filters
- Logged in users and guest form submissions will now be identified to the Autopilot tracking script
- Event Espresso integration will now sync the event date from the ticket, not the event
- 🔧 Fixed Fixed Elementor Popups triggering on every page for admins
- Autopilot bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27-3) 3.27.3 - 12/11/2019

- ✨ New Added support for WP Event Manager - Sell Tickets addon
- ✨ New Added support for Popup Maker subscription forms
- Improvements to applying tags with Kartra using the new Kartra API endpoints
- 🔧 Fixed Fixed billing address fields not syncing with PayPal checkout in s2Member
- 🔧 Fixed Fixed Restrict Content Pro linked tags being removed when a user cancelled their membership before the end of the payment period
- 🔧 Fixed Fixed missing email addresses causing BirdSend API calls to fail
- 🔧 Fixed Fixed issues with non well-formed HTML content causing errors in inner Gutenberg blocks
- 🔧 Fixed Fixed auto un-enrollment from LearnDash courses not working when course access was stored in user meta
- 🔧 Fixed Fixed Advanced Custom Fields integration overriding date formats from WooCommerce

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27-2) 3.27.2 - 12/3/2019

- 🔧 Fixed Fixed load contact method with Sendinblue
- Gutenberg block will no longer output HTML if there's nothing to display

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27-1) 3.27.1 - 12/2/2019

- ✨ New Added GravityView integration
- ✨ New Added batch tool for Restrict Content Pro members
- ✨ New Added additional built in Gist fields for syncing
- ✨ New Added option to tag customers based on WooCommerce order status
- ✨ New Added support for global webhooks with Sendinblue
- Restrict Content Pro rcp\_status field will now be synced when a membership expires
- WooCommerce Smart Coupons bugfixes
- 🔧 Fixed Fixed ACF date fields not converting to CRM date formats properly
- 🔧 Fixed Fixed bug in Import Tool with Sendinblue
- 🔧 Fixed Fixed BirdSend only loading 15 available tags
- 🔧 Fixed Fixed GMT offset calculation with Ontraport date fields

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-27) 3.27 - 11/25/2019

- ✨ New Added BirdSend CRM integration
- ✨ New Added WP Event Manager integration
- ✨ New Added support for triggering LifterLMS engagements when a tag is applied
- 🔧 Fixed Fixed WPF settings not saving on CPT-UI post type edit screen
- 🔧 Fixed Fixed Woo Memberships for Teams team member tags not being applied with variable product purchases
- Updated Gist API URL
- 🔧 Fixed Fixed import tool not loading more than 50 contacts with Sendinblue
- wpf\_tags\_applied and wpf\_tags\_removed will now run when tags are loaded from the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26-5) 3.26.5 - 11/18/2019

- ✨ New Added Groundhogg company fields for sync
- ✨ New Added Event Name, Event Venue, and Venue Address fields for sync to Event Espresso
- ⚡️ Improved Improved site tracking with HubSpot for guests
- eLearnCommerce login tokens can now be synced on registration
- 🔧 Fixed Fixed refreshing Zoho access token with Australian data server
- ⚡️ Improved Improved support for Country field with Groundhogg
- Style compatibility updates for WP 5.3

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26-4) 3.26.4 - 11/11/2019

- ✨ New Added Toolset Types integration
- ✨ New Added event\_date field to Event Espresso integration
- ✨ New Added signup\_type field to NationBuilder
- Updated LifterLMS auto enrollments to better deal with simultaneous webhooks
- WP E-Signature bugfixes
- Access Key is no longer hidden when connected to MailerLite
- ⚡️ Improved Improved Mautic site tracking
- ⚡️ Improved Improved handling of merged contacts with Mautic
- ⚡️ Improved Improved compatibility with Gravity Forms PayPal Standard addon
- Give integration bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26-3) 3.26.3 - 11/4/2019

- ✨ New Added Fluent Forms integration
- ✨ New Added AffiliateWP affiliates export option to batch tools
- ✨ New Added Australia data server integration to Zoho integration
- Apply Tags on View tags won't be applied for LearnDash lessons that aren't available yet
- Mautic tracking cookie will now be set after a form submission
- Give integration will now only apply tags when a payment status is Complete
- 🔧 Fixed Fixed bug with Intercom API v1.4
- 🔧 Fixed Fixed bug with The Events Calendar Community Tickets addon

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26-2) 3.26.2 - 10/28/2019

- ✨ New Added "capabilties" format for syncing capability fields
- ✨ New Added India data server support to Zoho integration
- ⚡️ Improved Improved handling of multi-select and dropdown field types in PeepSo
- 🔧 Fixed Fixed return after login for redirects on hidden WooCommerce products

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26-1) 3.26.1 - 10/21/2019

- ✨ New Added Memberoni integration
- ⚡️ Improved Improved integration with PilotPress login process
- Woo Subscriptions actions will no longer run on staging sites
- 🔧 Fixed Fixed conflict with ThriveCart auto login and UserPro

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-26) 3.26 - 10/14/2019

- ✨ New Added Klaviyo integration
- 🔧 Fixed Fixed PeepSo multi-checkbox fields syncing values instead of labels
- 🔧 Fixed Fixed Elementor Pro bug when Elementor content was stored serialized

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-17) 3.25.17 - 10/9/2019

- ✨ New Added support for Ranks with Gamipress
- Enabled Import Users tab for Intercom
- ✨ New Added "role" and "send\_notification" parameters for ThriveCart auto login
- Performance improvements and bugfixes for background worker

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-16) 3.25.16 - 10/7/2019

- ✨ New Added custom fields support to Give
- ✨ New Added option to hide restricted wpForo forums
- ✨ New Added "ucwords" formatting option to user\_meta shortcode
- Ultimate Member roles will now be removed when a linked tag is removed
- 🔧 Fixed Fixed special characters getting escaped on admin profile updates

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-15) 3.25.15 - 9/30/2019

- ✨ New Added WP E-Signature integration
- ✨ New Added UserInsights integration
- ✨ New Added option to hide WPF meta boxes from non admins
- ✨ New Added support for syncing multi-input Name fields for WPForms
- ✨ New Added Filter Queries setting to Elementor Pro Posts and Portfolio widgets
- Updated ActiveCampaign site tracking scripts
- 🔧 Fixed Fixed NationBuilder not loading more than 100 available tags
- 🔧 Fixed Fixed GiveWP recurring payments treating the donor as a guest
- 🔧 Fixed Fixed PeepSo first / last name fields not syncing on registration forms
- 🔧 Fixed Fixed fatal error when initializing GetResponse connection
- All site tracking scripts will now recognize auto login sessions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-14) 3.25.14 - 9/23/2019

- ✨ New Added WPPizza integration
- Existing Elementor forms will now update available CRM fields automatically
- ✨ New Added new filters and better session termination to auto login system
- Payment Failed tags will now be removed after a successful payment on a WooCommerce subscription
- Disabled comments during auto login sessions
- 🔧 Fixed Fixed bug with WooCommerce Points and Rewards discounts not applying
- 🔧 Fixed Fixes for HubSpot accounts with over 250 lists
- Sendinblue bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-13) 3.25.13 - 9/18/2019

- Sendinblue bugfixes
- Bugfixes for syncing LearnDash quiz answers

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-12) 3.25.12 - 9/16/2019

- ✨ New Added support for Woo Checkout Field Editor Pro
- ✨ New Added CartFlows upsell tagging
- ✨ New Added support for CartFlows custom fields
- ✨ New Added ability to sync LearnDash quiz answers to custom fields
- 🔧 Fixed Fixed Gravity Forms entries export issue with Create Tag(s) From Value fields
- 🔧 Fixed Fixed Mailchimp contact ID getting disconnected after email address change
- 🔧 Fixed Fixed BuddyPress fields not being detected on custom profile types
- 🔧 Fixed Fixed WooCommerce automatic coupons not being applied properly when a minimum cart total was set
- 🔧 Fixed Fixed NationBuilder Primary address fields not syncing
- 🔧 Fixed Fixed updating email addresses in WooCommerce / My Account creating duplicate subscribers in Drip

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-11) 3.25.11 - 9/9/2019

- ✨ New Added Site Lockout feature
- ✨ New Added Ahoy messaging integration
- ✨ New Added prefix option for WooCommerce automatic tagging
- ✨ New Added additional AffiliateWP fields
- Gravity Forms batch processor can now process all unprocessed entries
- Increased limit on LifterLMS Memberships Statuses batch operation to 5000
- Salon Booking tweaks
- 🔧 Fixed Fixed restricting Woo coupon usage by tag
- 🔧 Fixed Fixed WooCommerce auto-discounts not being applied when cart quantities updated
- 🔧 Fixed Fixed loading CRM data into Ultimate Member multi-checkbox fields
- 🔧 Fixed Fixed Mailchimp compatibility with other Mailchimp plugins
- Copper bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-10) 3.25.10 - 9/4/2019

- 🔧 Fixed Fixed home page not respecting access restrictions in 3.25.8

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-9) 3.25.9 - 9/4/2019

- Changed order of apply and remove tags in Woo Subscriptions
- 🔧 Fixed Fixed Hold and Pending Cancel tags not being removed in Woo Subscriptions after a successful payment
- ⚡️ Improved Improved MemberPress expired tagging
- FooEvents compatibility updates
- 🔧 Fixed Fixed tags not being removed with Ontraport

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-8) 3.25.8 - 9/3/2019

- ✨ New Added Salon Booking integration
- ✨ New Added Custom Post Type UI integration
- ✨ New Added GDPR Consent and Agreed to Terms fields for syncing with Groundhogg
- Enabled welcome email in MailPoet when a contact is subscribed to a list
- WooCommerce will now use the user email address as the primary email for checkouts by registered users
- Made background worker less susceptible to being blocked
- ⚡️ Improved Improved ActiveCampaign eCom customer lookup
- 🔧 Fixed Fixed content protection on blog index page
- 🔧 Fixed Fixed students getting un-enrolled from LearnDash courses if they were enrolled at the group level and didn't have a course linked tag

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-7) 3.25.7 - 8/26/2019

- ✨ New Added Uncanny LearnDash Groups integration
- ✨ New Added event\_name and venue\_name to Event Tickets integration
- Event Tickets bugfixes for RSVP attendees
- 🔧 Fixed Fixed "Create tags from value" option for profile updates
- 🔧 Fixed Fixed initial connection to Groundhogg on Groundhogg < 2.0
- 🔧 Fixed Fixed typo in NationBuilder fields dropdown
- WooCommerce deposits compatibility updates

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-6) 3.25.6 - 8/19/2019

- 🔧 Fixed Fix for error trying to get coupons from WooCommerce order on versions lower than 3.7

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-5) 3.25.5 - 8/19/2019

- ✨ New Added ability to create new user meta fields from the Contact Fields list
- ✨ New Added support for Event Tickets Plus custom fields with WooCommerce
- ✨ New Added ability to sync event check-ins from Event Tickets Plus to a custom field
- ✨ New Added "Create tag from value" option to WPForms integration
- ✨ New Added support for sending full country name in WooCommerce
- ✨ New Added option to restrict WooCommerce coupon usage by tag
- ⚡️ Improved Improved "Source" column in WPF logs
- 🔧 Fixed Fixed event details not syncing on RSVP with Event Tickets
- 🔧 Fixed Fix for Uncanny LearnDash Groups bulk-enrollment adding contacts with multiple names
- 🔧 Fixed Fixed email address changes with Infusionsoft causing opt-outs
- Reverted asynchronous checkouts to use background queue instead of single request
- Performance improvements on sites with Memberium active

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-4) 3.25.4 - 8/12/2019

- ✨ New Added auto-login by email address for MailerLite
- ✨ New Added Portuguese translation (thanks @João Alexandre)
- MailerLite will now re-subscribe subscribers when they submit a form
- ⚡️ Improved Improved OAuth access token refresh process with Salesforce
- Access control meta box now requires the manage\_options capability
- 🔧 Fixed Fixed variable tags not getting removed during Woo subscription hold if no tags were configured for the main product
- Variable tags will now be removed when a Woo subscription is switched and Remove Tags is enabled
- 🔧 Fixed Fix for WooCommerce Orders export process crashing on deleted products

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-3) 3.25.3 - 8/6/2019

- 🔧 Fixed Fixed fatal error in BuddyPress integration when Profile Types module was disabled
- 🔧 Fixed Fixed WooCommerce orders exporter crashing when trying to access a deleted product
- 🔧 Fixed Fixed wpf\_woocommerce\_payment\_complete action not firing on renewal orders

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-2) 3.25.2 - 8/5/2019

- ✨ New Added support for tag linking with BuddyBoss Profile Types
- ✨ New Added support for restricting access to a single bbPress discussion
- Restricted topics in BuddyBoss / bbPress will now be hidden from the Activity Feed if Filter Queries is on
- Performance improvements when editing WooCommerce Variations
- Performance improvements with Drip and WooCommerce guest checkouts
- ✨ New Added additional monitoring tools for background process worker
- Cartflows bugfixes for Enhanced Ecommerce addon
- 🔧 Fixed Fixed WooCommerce variable subscription tags not being removed on Hold status
- 🔧 Fixed Fixed bug with borders being output on restricted Elementor widgets
- 🔧 Fixed Fixed bug when sending a store credit with WooCommerce Smart Discounts

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25-1) 3.25.1 - 7/29/2019

- ✨ New Added CartFlows integration
- Groundhogg 2.0 compatibility
- Drip site tracking will now auto-identify logged in users
- ✨ New Added WooCommerce Order Notes field for syncing
- 🔧 Fixed Fixed "Affiliate Approved" tags not being added when creating an AffiliateWP affiliate via the admin

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-25) 3.25 - 7/22/2019

- ✨ New Added MailPoet integration
- ✨ New Added EDD Software Licensing integration
- ✨ New Added TranslatePress integration
- ✨ New Added support for MemberPress Corporate Accounts addon
- ✨ New Added support for BuddyPress fields to the user\_meta shortcode
- Additional tweaks to Austrailian state abbreviations with Ontraport
- Groundhogg tags now update without manual sync
- 🔧 Fixed Fixed FooEvents tags getting removed during Woo Subscriptions renewal

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-17) 3.24.17 - 7/15/2019

- ✨ New Added Tutor LMS integration
- ✨ New Added option to tag AffiliateWP affiliates on first referral
- WooCommerce integration will no longer apply tags / update meta during a Subscriptions renewal
- Groundhogg will now load tags and meta immediately instead of requiring sync
- 🔧 Fixed Fixed incorrect expiration dates with Paid Memberships Pro
- ⚡️ Improved Improved handling for State fields with Ontraport
- 🔧 Fixed Fixed MemberPress coupon settings not saving
- ✨ New Added LifterLMS membership start date as a field for syncing
- Dynamic name / SKU tags will now be removed when an order is refunded

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-16) 3.24.16 - 7/8/2019

- ✨ New Added GTranslate integration
- ✨ New Added Customerly webhooks
- ✨ New Added social media fields to Kartra
- ✨ New Added option to remove tags when a page is viewed
- ✨ New Added automatic SKU tagging in WooCommerce for supported CRMs
- 🔧 Fixed Fixed notifications going out when using the built in import tool
- Restrict Content Pro beta 3.1 compatibility
- Better handling for missing last names in Salesforce
- When a PMPro membership is cancelled / expired the membership level name will be erased in the CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-15) 3.24.15 - 7/1/2019

- ✨ New Added option to completely hide a taxonomy term based on tags
- ✨ New Added support for built in Ultimate Member fields
- ✨ New Added option to automatically tag customers based on WooCommerce product names
- Capsule bugfixes
- Bugfixes for Preview with Tag feature
- 🔧 Fixed Fixed syncing changed email addresses with BuddyPress

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-14) 3.24.14 - 6/24/2019

- ✨ New Added new default profile fields for Drip
- ✨ New Added support for catching Salesforce outbound messages with multiple contact IDs
- ✨ New Added wpf\_salesforce\_auth\_url filter for Salesforce
- ✨ New Added date\_joined field for Kartra
- ✨ New Added WooCommerce Subscriptions subscription ID field for syncing
- ✨ New Added multiselect support for HubSpot
- ✨ New Added support for File Upload field with Formidable Forms
- 🔧 Fixed Fixed Infusionsoft API errors with addWithDupCheck method
- Bugfixes for Restrict Content Pro 3.0
- Formidable Forms 4.0 compatibility updates
- Slowed down HubSpot batch operations to get around API limits

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-13) 3.24.13 - 6/17/2019

- ✨ New Added option to sync eLearnCommerce auto login token to a custom field
- Mautic performance improvements
- Linked tags from the previous level will now be removed when an RCP membership is manually changed
- 🔧 Fixed Fixed Mautic webhooks failing when the contact ID had changed due to a merge
- Intercom bugfixes
- Groundhogg bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-12) 3.24.12 - 6/14/2019

- ✨ New Added option to enable HubSpot site tracking scripts
- ✨ New Added order\_id field for syncing with WooCommerce
- ⚡️ Improved Improved auto enrollment for LearnDash courses
- Reduced API calls required during EDD checkout
- 🔧 Fixed Fixed ConvertKit contact ID lookup failing
- 🔧 Fixed Fixed tags from WooCommerce product attributes getting applied when the attribute wasn't selected

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-11) 3.24.11 - 6/10/2019

- ✨ New Added better handling for ACF relationship fields
- ✨ New Added password update syncing for MemberPress
- ✨ New Added option to apply tags when an discount is used in Easy Digital Downloads
- ✨ New Added option to restrict usage of discounts by tags in Easy Digital Downloads
- ✨ New Added Last Lesson Completed and Last Course Completed fields for syncing with LifterLMS
- ✨ New Added Last Lesson Completed and Last Course Completed fields for syncing with LearnDash
- ✨ New Added unsubscribe notifications for ConvertKit
- ✨ New Added "wpf\_salesforce\_auth\_url" filter for overriding Salesforce authorization URL
- Restrict Content Pro linked tags will now be removed when a member upgrades
- Improvements to "Return after login" feature
- 🔧 Fixed Fixed creating a contact in Zoho without a last name
- 🔧 Fixed Fixed Beaver Builder elements being hidden from admins
- 🔧 Fixed Fixed Event Tickets Plus tags not applying during WooCommerce checkout
- 🔧 Fixed Fixed Filter Queries "Advanced" mode not working on multiple queries
- 🔧 Fixed Fixed slashes getting added to tags with apostrophes in Mautic
- Tweaks to Filter Queries (Advanced) option
- Prevented linked tags from being re-applied when a Woo membership unenrollment is triggered

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-10) 3.24.10 - 6/3/2019

- ✨ New Added details about configured tags to protected content in post list table
- ✨ New Added ThriveCart auto login / registration
- ✨ New Added Pending Payment tags for Event Espresso
- 🔧 Fixed Fixed settings getting reset when enabling ActiveCampaign site tracking

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-9) 3.24.9 - 5/28/2019

- ✨ New Added Email Changed event for Drip
- 🔧 Fixed Fix for tags sometimes not appearing in settings dropdowns

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-8) 3.24.8 - 5/27/2019

- ✨ New Added dynamic tagging based on field values (for supported CRMs)
- ✨ New Added Is X? fields for NationBuilder
- ✨ New Added GetResponse support
- Enabled Sequential Upgrade for WishList Member
- Preview With Tag now bypasses Exclude Admins setting
- 🔧 Fixed Fixed WooCommerce checkout not applying tags after an auto login session
- 🔧 Fixed Fixed slashes in image URLs with Gravity Forms multi-file upload fields

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-7) 3.24.7 - 5/20/2019

- ✨ New Added WooCommerce Fields Factory integration
- ✨ New Added support for syncing WooCommerce attribute selections to custom fields
- ✨ New Added option to apply tags when an AffiliateWP affiliate is approved
- ✨ New Added option to disable "Preview With Tag" in admin bar
- ✨ New Added support for date fields in User Meta Pro
- 🔧 Fixed Fixed bug with Login Meta Sync
- 🔧 Fixed Fixed MailChimp looking up contacts from other lists
- 🔧 Fixed Fixed redirect causing multiple API calls with contact ID lookup in Mautic
- 🔧 Fixed Fixed empty date type fields sending 1/1/1970 dates
- ✨ New Added WooCommerce order date meta field for syncing

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-6) 3.24.6 - 5/13/2019

- ✨ New Added active lists to list dropdowns with HubSpot
- Removed admin bar JS link rewriting
- 🔧 Fixed Fix for sending 0 in Gravity Forms submissions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-5) 3.24.5 - 5/9/2019

- 🔧 Fixed Fixed tags not applying correctly with Async Checkout when a user registered a new account
- 🔧 Fixed Fixed WooCommerce Subscriptions variation tags not applying
- Toolset fixes for profile updates
- 🔧 Fixed Fix for 3.24.4 turning off Filter Queries setting

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-4) 3.24.4 - 5/6/2019

- ✨ New Added WP Affiliate Manager support
- ✨ New Added customer tagging for AffiliateWP
- ✨ New Added Organisation field for syncing to Capsule
- ✨ New Added "Advanced" mode for Filter Queries setting
- ✨ New Added support for single checkboxes with Formidable Forms
- ✨ New Added ability to modify field data formats via the Contact Fields list
- ✨ New Added IP address when adding new contacts with Mautic
- ✨ New Added "Add Only" option for Elementor forms
- ✨ New Added option to restrict visibility of EDD price options
- Paid Memberships Pro now sends meta data before applying tags
- Deleting a WooCommerce Subscription will no longer apply Cancelled tags
- 🔧 Fixed Fixed auto-enrollments into MemberPress membership levels via webhook not returning passwords
- 🔧 Fixed Fixed "Expired" tags not applying with MemberPress
- 🔧 Fixed Fixed date formatting with HubSpot
- 🔧 Fixed Fixed syncing date fields with Capsule
- Compatibility updates for custom field formatting with Mailerlite

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-3) 3.24.3 - 4/29/2019

- ✨ New Added option to return people to originally requested content after login
- ✨ New Added Contact ID merge field to Gravity Forms
- ⚡️ Improved Improved Preview With Tag functionality
- Auto login with Mailchimp now works with email address
- WooCommerce Transaction Failed tags will now be removed after a successful checkout
- Limit logging table to 10,000 rows
- Copper bugfixes
- 🔧 Fixed Fix for error when using GForms User Registration during an auto login session

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-2) 3.24.2 - 4/22/2019

- ✨ New Added Caldera Forms integration
- ✨ New Added additional status tags for Restrict Content Pro
- Changed Woo taxonomy tagging to just use the Category taxonomy
- Modified async checkouts to use a remote post instead of AJAX
- WPForms bugfixes
- Platform.ly bugfixes
- Consolidated forms functionality into new WPF\_Forms\_Helper class

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24-1) 3.24.1 - 4/16/2019

- 🔧 Fixed Fix for Paid Memberships Pro checkout error

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-24) 3.24 - 4/15/2019

- ✨ New Added Sendlane CRM integration
- ✨ New Added WooCommerce category tagging
- ✨ New Added AgileCRM site tracking scripts
- ✨ New Added support for BuddyPress taxonomy multiselect fields
- 🔧 Fixed Fixed expiration tags in Paid Memberships Pro
- 🔧 Fixed Fixed MemberPress auto-enrollments setting expiration date in the past
- 🔧 Fixed Fixes for multiselects in BuddyPress
- 🔧 Fixed Fixes for XProfile fields on secondary field groups

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-7) 3.23.7 - 4/8/2019

- ✨ New Added account deactivation tag trigger for Ultimate Member
- ✨ New Added WooCommerce Wholesale Lead Capture support
- Toolset forms compatibility updates
- 🔧 Fixed Fixed logic error with "Required Tags (all)" setting
- 🔧 Fixed Fixed Preview With Tag functionality in Beaver Builder
- Updated AWeber subscriber ID lookup to only use selected list

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-6) 3.23.6 - 4/1/2019

- ✨ New Added Teams for WooCommerce Memberships integration
- ✨ New Added unit completion tagging for WP Courseware
- ✨ New Added Organization Name field for ActiveCampaign
- LearnPress compatibility updates
- Better AWeber exception handling
- AccessAlly bug fixes
- Bugfixes for PeepSo and auto login sessions
- 🔧 Fixed Fix for changing email addresses with Drip
- 🔧 Fixed Fix for AffiliateWP affiliate data not being synced when Auto Register Affiliates was enabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-5) 3.23.5 - 3/25/2019

- ✨ New Added LifterLMS quiz tagging (thanks @thomasplevy)
- ✨ New Added ability to restrict usage of EDD discount codes (thanks @pjeby)
- ✨ New Added merge settings option to bulk edit
- ✨ New Added setting to remove "Additional Fields" section from settings
- ✨ New Added "hide" option to Convert Pro targeting rules
- Expired / Cancelled / etc tags will now be removed when an EDD subscription is re-activated
- Popup Maker compatibility updates
- AccessAlly bug fixes
- 🔧 Fixed Fix for failed WooCommerce order blocking tagging on subsequent successful re-try
- 🔧 Fixed Fix for Required Tags (all) option greyed out
- Paid Memberships Pro bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-4) 3.23.4 - 3/18/2019

- ✨ New Added Convert Pro CTA targeting integation
- ✨ New Added FooEvents integration
- ✨ New Added date-format parameter to user\_meta shortcode
- ✨ New Added "Required tags (all)" option to post restriction meta box
- ✨ New Added option for login meta sync
- ✨ New Added option for tagging when WooCommerce orders fail on initial payment
- ⚡️ Improved Improved pagination in WPF logs
- Mailerlite bugfixes
- ⚡️ Improved Improved HubSpot error logging
- MemberPress expired tagging bugfixes
- 🔧 Fixed Fix for restricting BuddyPress pages

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-3) 3.23.3 - 3/1/2019

- 🔧 Fixed Fixed bug in MailerLite integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-2) 3.23.2 - 3/1/2019

- ✨ New Added Event Espresso integration
- Restrict Content Pro v3.0 compatibility fixes
- ✨ New Added additional status triggers for Mailerlite webhooks
- 🔧 Fixed Fixes for wpf\_user\_can\_access filter
- ConvertKit fixes for unconfirmed subscribers

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23-1) 3.23.1 - 2/25/2019

- CoursePress integration
- ✨ New Added incoming webhook test tool
- ✨ New Added WooCommerce Subscriptions Meta batch operation
- ⚡️ Improved Improved Ontraport site tracking script integration
- MemberPress will now remove the payment fail tag when a payment succeeds
- Bugfixes for CartFlows upsells with WooCommerce
- 🔧 Fixed Fix for syncing checkbox fields in Elementor forms
- 🔧 Fixed Fix for MailerLite accounts syncing more than 100 groups
- 🔧 Fixed Fix for syncing profile updates via Gravity Forms
- 🔧 Fixed Fixes for Free Trial Over tags in WooCommerce Subscriptions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-23) 3.23 - 2/18/2019

- ✨ New Added Mailjet CRM integration
- ✨ New Added payment failed tagging for MemberPress
- Javascript bugfix for tags with apostrophes in them
- Changes to WooCommerce variations data storage
- ✨ New Added option to only allow auto-login after form submission
- 🔧 Fixed Fix for email addresses with + sign in MailChimp
- 🔧 Fixed Fix for changed checkout field names in Paid Memberships Pro
- 🔧 Fixed Fix for contact ID lookup with HubSpot
- 🔧 Fixed Fix for background worker when PHP's memory\_limit is set to -1
- ✨ New Added ability to restrict WooCommerce Shop page
- bbPress template compatibility fixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-22-3) 3.22.3 - 2/12/2019

- ✨ New Added tags for Expired status in MemberPress
- ✨ New Added admin users column showing user tags
- ✨ New Added fields for syncing Woo Subscriptions subscription name and next payment date
- Option to hide Woo coupon field on Cart / Checkout (used with auto-applying coupons)
- 🔧 Fixed Fix for restricted WooCommerce products showing "password protected" message

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-22-2) 3.22.2 - 2/5/2019

- Elementor Popups integration
- ✨ New Added ability to auto-apply discounts via tag with WooCommerce
- ✨ New Added option to embed Mautic site tracking scripts
- ✨ New Added Mautic mtc\_id cookie tracking for known contacts
- Additional Woo Memberships statuses for tagging
- Comments are now properly hidden when a post is restricted and no redirects are specified
- Set 1 second sleep time for Drip batch processes to avoid API timeouts
- Platform.ly bugfixes
- Platform.ly webhooks added
- 🔧 Fixed Fix for changing checkout fields in Paid Memberships Pro
- 🔧 Fixed Fix for contact ID lookup with HubSpot
- 🔧 Fixed Fix for background worker when PHP's memory\_limit is set to -1
- ✨ New Added ability to restrict WooCommerce Shop page
- bbPress template compatibility fixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-22-1) 3.22.1 - 1/31/2019

- Groundhogg bugfixes
- Drift tagging bugfixes
- WooCommerce 2.6 compatibility fixes
- Woo Subscriptions tagging bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-22) 3.22 - 1/28/2019

- NationBuilder CRM integration
- Groundhogg CRM integration
- ✨ New Added batch processing tool for WooCommerce Memerships
- ✨ New Added pagination to AccessAlly settings page
- ✨ New Added additional AffiliateWP registration fields for sync
- 🔧 Fixed Fix for Sendinblue not creating contacts if custom attributes weren't present
- 🔧 Fixed Fix for being unable to remove tags from Woo variations
- 🔧 Fixed Fix for Woo variations not saving correctly with Woo Memberships active
- 🔧 Fixed Fix for imports larger than 50 with Capsule

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-21-2) 3.21.2 - 1/21/2019

- ✨ New Added Clean Login support
- ✨ New Added Private Messages integration
- ✨ New Added custom fields support for Kartra
- ✨ New Added AffiliateWP referrer ID field for syncing
- ✨ New Added Toggle field support for Formidable Forms
- ✨ New Added PeepSo VIP Icons support
- ✨ New Added Gist webhooks support
- Moved Formidable Forms settings to "Actions" to support conditions
- 🔧 Fixed Fix for custom fields not syncing with MemberMouse registration
- 🔧 Fixed Fix for missing Ninja Forms settings fields
- 🔧 Fixed Fix for syncing multiselects / picklists with Zoho
- 🔧 Fixed Fix for error when processing Woo Subscriptions payment status hold
- 🔧 Fixed Fix for AJAX applying tags by tag ID
- 🔧 Fixed Fix for wpf\_update\_tags shortcode in auto-login sessions
- 🔧 Fixed Fix for error creating contacts in Intercom without any custom fields
- Additional Capsule fields / Capsule field syncing bugfixes
- Better internationalization support
- ✨ New Added PHP version notice for sites running less than 5.6

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-21-1-1-14-2019) 3.21.1 = 1/14/2019

- Elementor Forms integration
- Advanced Ads support
- WooCommerce Addons v3.0 support
- Additional tagging options for WooCommerce Memberships
- 🔧 Fixed Fix for variation tags sometimes being lost when saving a Woo product
- Support for updating Capsule email/phone/address fields without a type specifier
- ✨ New Added tagging for when a LearnDash essay is submitted
- Allow for using tag labels in link click tracking

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-21) 3.21 - 1/5/2019

- Copper CRM integration
- 🔧 Fixed Fixes for syncing PeepSo account fields
- 🔧 Fixed Fixes for LearnDash quiz results tagging with Essay type questions
- 🔧 Fixed Fix for incomplete address error with MailChimp
- Support for syncing with unsubscribed subscribers in ConvertKit
- 🔧 Fixed Fixes for user IDs in ConvertFox (Gist)
- Bugfix for logged-out behavior in Elementor
- ✨ New Added "Process WP Fusion actions again" option to WooCommerce Order Actions
- PHP 5.4 fixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-20-4) 3.20.4 - 12/22/2018

- 🔧 Fixed Fixed "return value in write context" error in PHP 5.5

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-20-3) 3.20.3 - 12/22/2018

- ✨ New Added logged-out behavior to Elementor
- ✨ New Added support for syncing roles when a user has multiple roles
- ✨ New Added Pull User Meta batch operation
- ✨ New Added support for picklist fields in Zoho
- 🔧 Fixed Fix for syncing MemberPress membership level name during batch process
- Additional logging for WC Subscriptions status changes
- ✨ New Added import by Topic for Salesforce
- Admin settings update to support Webhooks

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-20-2) 3.20.2 - 12/14/2018

- 🔧 Fixed Fix for JS error with Gutenberg block

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-20-1) 3.20.1 - 12/14/2018

- ✨ New Added Gutenberg content restriction block
- Better first name / last name handling for ConvertFox
- 🔧 Fixed Fix for Event Tickets settings not saving

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-20) 3.20 - 12/8/2018

- Autopilot CRM integration
- Customerly CRM integration
- ✨ New Added Ninja Forms integration
- ✨ New Added option for per-post restricted content messages
- ✨ New Added user\_registered date field for syncing
- ✨ New Added option to sync MemberPress membership level name at checkout
- ✨ New Added handling for changed contact IDs with Infusionsoft
- Userengage bugfixes
- 🔧 Fixed Fix for BuddyPress multi-checkbox fields not syncing
- 🔧 Fixed Fix for PeepSo group members not getting fully removed from groups
- 🔧 Fixed Fix for MemberMouse password resets not syncing
- Reverted to earlier method for getting Woo checkout fields to prevent admin errors in WPF settings
- 🔧 Fixed Fixed bug where bulk-editing pages would remove WPF access rules

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-19) 3.19 - 11/29/2018

- Drift CRM integration
- wpForo integration
- "Give" plugin integration
- Bugfixes for MemberPress coupons
- Better support for Gravity Forms User Registration
- UserEngage bugfixes
- 🔧 Fixed Fixed compatibility bugs with other plugins using Zoho APIs
- ✨ New Added wpf\_batch\_sleep\_time filter
- Better user meta handling on auto-login sessions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-7) 3.18.7 - 11/21/2018

- Popup Maker integration
- GamiPress linked tag bugfixes
- ✨ New Added import tool for Mautic
- ✨ New Added support for updating email addresses in Kartra

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-6) 3.18.6 - 11/15/2018

- WPForms integration
- UserEngage bugfixes
- Ability to set WooCommerce product tags to apply at the taxonomy term level
- 🔧 Fixed Fix for incorrect membership start date with Paid Memberships Pro

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-5) 3.18.5 - 11/12/2018

- 🔧 Fixed Fixed bug with WooCommerce that caused WPF settings page not to load

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-4) 3.18.4 - 11/10/2018

- WPComplete integration
- ✨ New Added async method for batch webhook operations
- 🔧 Fixed Fix for restricted WooCommerce variations not showing in admin when Filter Queries is enabled
- Bugfixes for detecting WooCommerce custom checkout fields
- ✨ New Added payment conditions for Stripe and PayPal for Gravity Forms
- Now allows updating PeepSo role by changing field value in CRM

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-3) 3.18.3 - 10/27/2018

- ✨ New Added batch processing tool for Gravity Forms entries
- 🔧 Fixed Fixed outbound message endpoint creating error messages in Salesforce
- Better support for custom checkout fields in WooCommerce
- LifterLMS course/membership auto-enrollment tweaks
- ✨ New Added Payment Failed option to Woo Subscriptions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-2) 3.18.2 - 10/22/18

- ✨ New Added support for Salesforce topics
- ✨ New Added tagging for MemberPress coupons
- ✨ New Added option to sync user tags on login
- ✨ New Added support for multi-checkboxes to Gravity Forms integration
- Capsule bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18-1) 3.18.1 - 10/14/2018

- ✨ New Added Weglot integration
- Restrict Content Pro bugfixes
- Kartra bugfixes for WooCommerce guest checkouts
- Divi integration bugfixes
- More flexible Staging mode

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-18) 3.18 - 10/4/2018

- ✨ New Added Platform.ly support
- ✨ New Added logged in / logged out shortcodes
- ✨ New Added option to choose contact layout for new contacts with Zoho
- 🔧 Fixed Fix for AgileCRM campaign webhooks
- 🔧 Fixed Fixes for checkboxes with Profile Builder
- WooCommerce Addons bugfixes
- ✨ New Added custom fields support for Intercom

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-17-2) 3.17.2 - 9/22/2018

- ✨ New Added Divi page builder support
- ✨ New Added update\_tags endpoint for webhooks
- 🔧 Fixed Fix for "restrict access" checkbox not unlocking inputs correctly
- 🔧 Fixed Fix for import button not working in admin
- Cleaned up WooCommerce settings storage

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-17-1) 3.17.1 - 9/17/2018

- ✨ New Added support for WooCommerce Addons
- ⚡️ Improved Improved leadsource tracking
- ✨ New Added webhooks support for SalesForce
- Bugfixes for ConvertKit with email addresses containing "+" symbol
- Support for syncing passwords generated by EDD Auto Register
- 🔧 Fixed Fix for MailChimp syncing tags limited to 10 tags
- Additional sanitizing of input data

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-17) 3.17 - 9/4/2018

- HubSpot integration
- SendinBlue bugfixes
- Zoho authentication bugfixes
- Profile Builder bugfixes
- ✨ New Added support for Paid Memberships Pro Approvals
- ✨ New Added option for applying a tag when a contact record is updated
- Support for Gravity Forms applying local tags during auto-login session

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-16) 3.16 - 8/27/2018

- ✨ New Added MailChimp integration
- ✨ New Added SendinBlue CRM integration
- Easy Digital Downloads 3.0 support
- Profile Builder Pro bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-15-3) 3.15.3 - 8/23/2018

- ✨ New Added Profile Builder Pro integration
- AccessAlly integration
- WPML integration
- ✨ New Added "wpf\_crm\_object\_type" filter for Salesforce / Zoho / Ontraport
- 🔧 Fixed Fix for date fields with Salesforce
- Improvements to logging display for API errors
- ✨ New Added Elementor controls to sections and columns
- Support for multi-checkbox fields with Formidable Forms

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-15-2) 3.15.2 - 8/12/2018

- 🔧 Fixed Fix for applying tags via Gravity Form submissions with ConvertKit
- 🔧 Fixed Fixed authentication error caused by resyncing tags with Salesforce
- ✨ New Added Job Alerts support for WP Job Manager
- Auto-login session will now end on WooCommerce cart or checkout

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-15-1) 3.15.1 - 8/3/2018

- WooCommerce memberships bugfixes
- 🔧 Fixed Fixed PeepSo groups table limit of 10 groups
- Option to sync expiry date for WooCommerce Memberships
- Beaver Builder fix for visibility issues
- WooCommerce Checkout Field Editor Integration
- ✨ New Added "remove tags" checkbox for EDD recurring price variations
- Maropost CRM integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-15) 3.15 - 7/23/2018

- Tubular CRM integration
- Flexie CRM integration
- ✨ New Added tag links for PeepSo groups
- Elementor integration
- WishList Member bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-14-2) 3.14.2 - 7/15/2018

- ✨ New Added WPLMS support
- ⚡️ Improved Improved syncing of multi-checkboxes with ActiveCampaign
- ✨ New Added support for Paid Memberships Pro Registration Fields Helper add-on

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-14-1) 3.14.1 - 7/3/2018

- Auto-login tweaks for Gravity Forms
- ✨ New Added option to apply tags on LearnDash quiz fail
- LearnDash bugfixes
- Improvements to AgileCRM imports by tag
- Kartra API updates
- Allowed loading PMPro membership start date and end date from CRM
- MemberMouse syncing updates from admin edit member profile

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-14) 3.14 - 6/23/2018

- UserEngage CRM integration
- 🔧 Fixed Fix for auto-login links with AgileCRM
- ✨ New Added refund tags for price IDs in Easy Digital Downloads
- ✨ New Added leadsource tracking support for Gravity Forms form submissions
- ✨ New Added "not" option for Beaver Builder content visibility
- ✨ New Added access controls to bbPress topics

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-13-2) 3.13.2 - 6/17/2018

- ✨ New Added support for tagging on subscription status changes for EDD product variations
- ✨ New Added support for syncing WooCommerce Smart Coupons coupon codes
- 🔧 Fixed Fixed Salesflare address fields not syncing
- Improvements on handling for changed email addresses in MailerLite
- 🔧 Fixed Fix for LifterLMS access plan tags not displaying correctly
- 🔧 Fixed Fix for foreign characters in state names with Mautic

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-13-1) 3.13.1 - 6/10/2018

- Gravity Forms bugfix

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-13) 3.13 - 6/10/2018

- Salesflare CRM integration
- Corrected Kartra App ID
- ✨ New Added option to show excerpts of restricted content to search engines
- 🔧 Fixed Fix for refund tags not being applied in WooCommerce for guest checkouts
- 🔧 Fixed Fix for issues with linked tags not triggering enrollments while running batch processes
- Ability to pause a MemberMouse membership by removing a linked tag
- Bugfixes for empty tags showing up in select
- Better handling for email address changes with MailerLite
- Salesforce bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-9) 3.12.9 - 6/2/2018

- ✨ New Added "apply tags" functionality for Restrict Content Pro
- ✨ New Added tag link for Gamipress achievements
- ✨ New Added points syncing for Gamipress
- ✨ New Added support for WooCommerce Smart Coupons
- 🔧 Fixed Fix for "refund" tags getting applied when a WooCommerce order is set to Cancelled
- 🔧 Fixed Fix for LifterLMS "Tag Link" adding a blank tag
- Removed ability to add tags from within WP for Ontraport
- Gravity Forms bugfix for creating new contacts from form submissions while users are logged in
- Support for Tribe Tickets v4.7.2

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-8) 3.12.8 - 5/27/2018

- ✨ New Added GDPR "Agree to terms" tagging for WooCommerce
- BuddyPress bugfixes
- ✨ New Added ability to apply tags when a coupon is used in Paid Memberships Pro
- Ultimate Member 2.0 fix for tags not being applied at registration
- Bugfix for tags sometimes not saving correctly on widget controls

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-7) 3.12.7 - 5/19/2018

- Beaver Builder integration
- Ultimate Member 2.0 bugfixes
- ✨ New Added delay to Kartra contact creation to deal with slow API performance
- 🔧 Fixed Fix for Kartra applying tags to non-registered users
- Support creating tags from within WP Fusion for Ontraport
- ✨ New Added delay in WooCommerce Subscriptions renewal processing so tags aren't removed and reapplied during renewals
- Changed template\_redirect priority to 15 so it runs after Force Login plugin

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-6) 3.12.6 - 5/16/2018

- Bugfix for errors showing when auto login session starts

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-5) 3.12.5 - 5/15/2018

- ✨ New Added support for WooCommerce Deposits
- ✨ New Added event location syncing for Tribe Tickets Plus
- ✨ New Added BadgeOS points syncing
- WP Courseware settings page fix for version 4.3.2
- ✨ New Added option to only log errors (instead of all activity)
- Bugfix for WooCommerce checkout not working properly during an auto-login session

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-4) 3.12.4 - 5/6/2018

- ✨ New Added event date syncing for Tribe Tickets Plus events with WooCommerce
- 🔧 Fixed Fix for Zoho customers with EU accounts
- Support for syncing passwords automatically generated by LearnDash
- Restrict Content Pro bugfixes
- UM 2.0 bugfixes
- Allowed for auto-login using Drip's native ?\_\_s= tracking link query var
- 🔧 Fixed Fix for syncing to date type custom fields in Ontraport

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-3) 3.12.3 - 4/28/2018

- Bugfix for "undefined constant" message on admin dashboard

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-2) 3.12.2 - 4/28/2018

- Better support for query filtering for restricted posts
- 🔧 Fixed Fixed a bug that caused tags not to be removed properly in Ontraport
- 🔧 Fixed Fixed a bug that caused tags not to apply properly on LifterLMS membership registration
- 🔧 Fixed Fixed a bug with applying tags when achievements are earned in Gamipress
- 🔧 Fixed Fixed a bug with syncing password fields on ProfilePress registration forms
- Additional error handling for import functions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12-1) 3.12.1 - 4/12/2018

- ProfilePress integration
- ✨ New Added option to apply tags when a user is deleted
- ✨ New Added setting for widgets to _hide_ a widget if a user has a tag
- ✨ New Added option to apply tags when a LifterLMS access plan is purchased
- More robust API error handling and reporting
- 🔧 Fixed Fixed a bug in MailerLite where contact IDs wouldn't be returned for new users

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-12) 3.12 - 3/28/2018

- ✨ New Added Zoho CRM integration
- ✨ New Added Kartra CRM integration
- ✨ New Added ConvertFox CRM integration
- ✨ New Added WP Courseware integration
- Changed WooCommerce order locking to use transients instead of post meta values
- ✨ New Added membership role syncing to PeepSo integration
- ✨ New Added User ID as an available field for sync

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-11-1) 3.11.1 - 3/21/2018

- ✨ New Added GamiPress integration
- ✨ New Added PeepSo integration
- ✨ New Added option to just return generated passwords on import, without requiring ongoing password sync
- "Push user meta" batch operation now pushes Paid Memberships Pro meta data correctly
- 🔧 Fixed Fixed bug where ampersands would fail to send in Infusionsoft contact updates
- Cleaned up scripts and styles in admin settings pages

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-11) 3.11 - 3/15/2018

- Capsule CRM integration
- ✨ New Added LearnPress LMS integration
- ✨ New Added batch-resync tool for LifterLMS memberships
- Tags linked to LearnDash courses will now be applied / removed when a user is manually added to / removed from a course
- Bugfixes for export batch operation
- ✨ New Added "Pending Cancellation" tags for WooCommerce Subscriptions
- ⚡️ Improved Improved handling for displaying user meta when using auto-login links
- 🔧 Fixed Fix for AWeber API configuration errors breaking setup tab
- ⚡️ Improved Improved AgileCRM handling for custom fields
- ✨ New Added filter for overriding WPEP course buttons for restricted courses

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-10-1) 3.10.1 - 3/3/2018

- 🔧 Fixed Fixed a bug where sometimes a contact ID wouldn't be associated with an existing contact when a new user registers
- ✨ New Added start date syncing for Paid Memberships Pro

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-10) 3.10 - 2/24/2018

- MailerLite CRM integration
- Bugfixes for auto-login links with Gravity Forms
- MemberMouse bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-9-3) 3.9.3 - 2/19/2018

- ✨ New Added option for auto-login after Gravity Form submission
- Changed auto-login links to use cookies instead of sessions
- Allowed the \[user\_meta\] shortcode to work with auto-login links
- Modified Infusionsoft contact ID lookup to just use primary email field

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-9-2) 3.9.2 - 2/15/2018

- Proper state and country field handling for Mautic
- 🔧 Fixed Fix for malformed saving of Tag Link field in LifterLMS course settings

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-9-1) 3.9.1 - 2/12/2018

- ✨ New Added "Apply Tags - Cancelled" to Paid Memberships Pro settings
- ✨ New Added Ontraport affiliate tracking
- ✨ New Added Ontraport page tracking
- ⚡️ Improved Improved LearnDash content restriction filtering
- Optimized unnecessary contact ID lookups when Push All User Meta was enabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-9) 3.9 - 1/31/2018

- ✨ New Added AWeber CRM integration
- Linked tags now automatically added / removed on LearnDash group assignment
- ✨ New Added auto-enrollment for LifterLMS courses
- ✨ New Added post-checkout process locking for WooCommerce to reduce duplicate transactions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-8-1) 3.8.1 - 1/21/2018

- ✨ New Added \[else\] method to shortcodes
- ✨ New Added loggedout method to shortcodes
- Performance enhancements
- ConvertKit now auto-removes webhook tags
- ✨ New Added option to apply tags when a WooCommerce subscription converts from free to paid

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-8) 3.8 - 1/8/2018

- Intercom CRM integration
- myCRED integration
- ✨ New Added bulk import for Salesforce
- ✨ New Added batch processing for s2Member
- 🔧 Fixed Fixed bug with administrators not being able to view content in a tag-restricted taxonomy

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-6) 3.7.6 - 12/30/2017

- ✨ New Added batch processing tool for MemberPress subscriptions
- ✨ New Added setting to exclude restricted posts from archives / indexes
- ✨ New Added ActiveCampaign site tracking
- ✨ New Added Infusionsoft site tracking
- ✨ New Added Drip site tracking

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-5) 3.7.5 - 12/21/2017

- WooCommerce bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-4) 3.7.4 - 12/15/2017

- Improvements to tag handling with ConvertKit
- ✨ New Added collapsible table headers to Contact Fields table
- 🔧 Fixed Fixed bug in Mautic with applying tags to new contacts
- UserPro bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-3) 3.7.3

- ✨ New Added global setting for tags to apply for all WooCommerce customers
- 🔧 Fixed Fixed issue with restricted WooCommerce variations not being hidden
- 🔧 Fixed Fixed bug with syncing Ultimate Member password updates from the Account screen
- 🔧 Fixed Fixed LifterLMS account updates not being synced

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-2) 3.7.2

- UserPro bugfixes
- 🔧 Fixed Fixed hidden Import tab

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7-1) 3.7.1

- 🔧 Fixed Fix for email addresses not updating on CRED profile forms
- 🔧 Fixed Fix for Hold / Failed / Cancelled tags not being removed on WooCommerce subscription renewal

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-7) 3.7

- ✨ New Added support for the Mautic marketing automation platform
- Toolset CRED integration (for custom registration / profile forms)
- 🔧 Fixed Fix for newly added tags not saving to WooCommerce variations

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-6-1) 3.6.1

- Updated for compatibility with Ontraport API changes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-6) 3.6

- WishList Member integration
- 🔧 Fixed Fixed tag fields sometimes not saving on WooCommerce variations
- ✨ New Added async checkout for EDD purchases

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-5-2) 3.5.2

- Improvements to filtering products in WooCommerce shop
- Significantly sped up and increased reliability of WooCommerce Asynchronous Checkout functionality
- ✨ New Added ability to apply tags when refunded in EDD
- Better Tribe Events integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-5-1) 3.5.1

- Improvements to auto login link system
- ✨ New Added duplicating Gravity Forms feeds
- Restrict Content Pro bugfixes
- ✨ New Added admin tools for resetting wpf\_complete hooks on WooCommerce / EDD orders

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-5) 3.5

- ✨ New Added support for Ultimate Member 2.0 beta
- ✨ New Added Tribe Events Calendar support (including support for Event Tickets and Event Tickets Plus)
- ✨ New Added list selection options for Gravity Forms with ActiveCampaign
- 🔧 Fixed Fixed variable tag fields not saving in WooCommerce
- 🔧 Fixed Fixed new user notification emails sometimes not going out
- ActiveCampaign API performance enhancements

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-4-1) 3.4.1

- Bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-4) 3.4

- ✨ New Added access controls for widgets
- ⚡️ Improved Improved "Preview with Tag" reliability
- WooCommerce now sends country name correctly to Infusionsoft
- ✨ New Added logging support for Woo Subscriptions
- Support for additional BadgeOS achievement types
- Support for switching subscriptions with Woo Subscriptions
- ✨ New Added batch processing options for Paid Memberships Pro
- 🔧 Fixed Fixed issue with shortcodes using some visual page builders

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-3-3) 3.3.3

- ✨ New Added BadgeOS integration
- Staging mode now works with logging tool
- "Apply to children" now applies to nested children
- ✨ New Added backwards compatibility support for WC < 3.0
- Passwords auto-generated by WooCommerce can now be synced
- 🔧 Fixed Fixed issues with MemberPress non-recurring products
- Updated EDDSL plugin updater
- 🔧 Fixed Fixes for Gravity Forms User Registration add-on
- Cleaned up internal fields from Contact Fields screen
- Sped up Import tool for Drip
- Option to disable API queue framework for debugging

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-3-2) 3.3.2

- ConvertKit imports no longer limited to 50 contacts
- Restrict Content Pro improvements
- 🔧 Fixed Fixed bug when adding new tags via tag select dropdown
- 🔧 Fixed Fixed bug with using tag names in wpf shortcode on some CRMs
- Importing users now respects specified role
- 🔧 Fixed Fixed error saving user profile when running BuddyPress with Groups disabled

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-3-1) 3.3.1

- 3.3 bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-3) 3.3

- New features:
  - Added new logging / debugging tools
  - Contact Fields list is now organized by related integration
  - ✨ New Added options for filtering users with no contact ID or no tags
  - ✨ New Added ability to restrict WooCommerce variations by tag
- New Integrations:
  - WooCommerce Memberships
  - Simple Membership plugin integration
  - WP Execution Plan LMS integration
- New Integration Features:
  - MemberMouse memberships can now be linked with a tag
  - Expiration Date field syncing for Restrict Content Pro subscriptions
  - BuddyPress groups can now be linked with a tag
  - ✨ New Added Payment Method field for sync with Paid Memberships Pro
  - Expiration Date can now be synced for Paid Memberships Pro
  - ✨ New Added registration date, expiration date, and payment method for MemberPress subscriptions
  - ✨ New Added "Apply tags when cancelled" field to MemberPress subscriptions
- Bug fixes:
  - Fixed bugs with editing tags via the user profile
  - user\_meta Shortcode now pulls data from wp\_users table correctly
  - "Apply on view" tags will no longer be applied if the page is restricted
  - Link with Tag fields no longer allow overlap with Apply Tags fields in certain membership integrations
  - AgileCRM fixes for address fields
- Enhancements:
  - Optimized many duplicate API calls
  - ✨ New Added Dutch and Spanish translation files

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-2-1) 3.2.1

- Bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-2) 3.2

- Salesforce integration
- 🔧 Fixed Fixed issue with automatically assigning membership levels in MemberPress via webhook
- 🔧 Fixed Fixed incompatibility with Infusionsoft Form Builder plugin
- Improvements to Drip integration
- Improvements to WooCommerce order batch processing tools
- Numerous bugfixes and performance enhancements

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-1-3) 3.1.3

- Drip CRM can now trigger new user creation via webhook
- User roles now update properly when changed via webhook
- Import tool can now import more than 1000 contacts from Infusionsoft
- Gravity Forms bugfixes
- WP Engine compatibility bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-1-2) 3.1.2

- ✨ New Added filter by tag option in admin Users list
- ✨ New Added ability to restrict all posts within a restricted category or taxonomy term
- ✨ New Added ability to restrict all bbPress forums at a global level
- 🔧 Fixed Fixed bug with Ultimate Member's password reset process with Infusionsoft
- ✨ New Added additional Google Analytics fields to contact fields list
- Bugfix to prevent looping when restricted content is set to redirect to itself

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-1-1) 3.1.1

- 🔧 Fixed Fixed inconsistencies with syncing user roles
- Additional bugfixes for WooCommerce 3.0.3

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-1-0) 3.1.0

- ✨ New Added built in user meta shortcode system
- ✨ New Added support for webhooks with ConvertKit
- Updates for WooCommerce 3.0
- Additional built in fields for Agile CRM users
- 🔧 Fixed Fixed bug where incorrect tags would be applied during automated payment renewals
- 🔧 Fixed Fixed debugging log not working

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-9) 3.0.9

- ✨ New Added leadsource tracking to new user registrations for Google Analytics campaigns or custom lead sources
- Link click tracking can now be used on other elements in addition to links
- Agile CRM API improvements
- Misc. bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-8) 3.0.8

- Drip bugfixes
- Agile CRM improvements and bugfixes
- ✨ New Added EDD payments to batch processing tools
- ✨ New Added EDD Recurring Payments to batch processing tools
- Misc. UI improvements
- Bugfixes and speed improvements to batch operations

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-7) 3.0.7

- Integration with User Meta plugin
- 🔧 Fixed Fixed bug where restricted page would be shown if no redirect was specified
- Better support for Ultimate Member "checkboxes" fields

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-6) 3.0.6

- Import tool has been updated to use new background processing system
- ✨ New Added WordPress user role to list of meta fields for sync
- Support for additional Webhooks with Agile CRM
- Bugfix for long load times when getting user tags

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-5) 3.0.5

- New tags will be loaded from the CRM if a user is given a tag that doesn't exist locally
- Resync contact IDs / Tags moved from Resynchronize button process to Batch Operations
- ActiveCampaign integration can now load all tags from account (no longer limited to first 100)
- Bugfix for LifterLMS memberships tag link

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-4) 3.0.4

- Paid Memberships Pro bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-3) 3.0.3

- WP Job Manager integration
- ✨ New Added category / taxonomy archive access restrictions
- Tags can now be added/removed from the edit user screen
- ✨ New Added tooltips with additional information to batch processing tools
- Batch processes now update in real time after reloading WPF settings page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-2) 3.0.2

- Bugfixes for version 3.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0-1) 3.0.1

- Bugfixes for version 3.0

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#3-0) 3.0

- ✨ New Added Formidable Forms integration
- ✨ New Added bulk editing tools for content protection
- New admin column for showing restricted content
- New background worker for batch operations on sites with a large number of users
- Tags are now removed properly when WooCommerce order refunded / cancelled
- ✨ New Added option to remove tags when LifterLMS membership cancelled
- ✨ New Added "Tag Link" capability for Paid Memberships Pro membership levels
- User roles can now be updated via the Update method in a webhook or HTTP Post
- Introduced beta support for Drip webhooks
- Initial sync process for Drip faster and more comprehensive
- All integration functions are now available via wp\_fusion()->integrations
- Updated and improved automatic updates
- Numerous speed optimizations and bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-6) 2.9.6

- ⚡️ Improved Improved integration with Paid Memberships Pro and Contact Form 7
- Bugfix for Radio type fields with Ultimate Member

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-5) 2.9.5

- ✨ New Added "Staging Mode" - all WP Fusion functions available, but no API calls will be sent
- ✨ New Added Advanced settings pane with debugging tools

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-4) 2.9.4

- LifterLMS bugfixes
- Deeper MemberPress integration

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-3) 2.9.3

- Support for Asian character encodings with Infusionsoft
- Improvements to Auto-login links for hosts that don't support SESSION variables

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-2) 2.9.2

- Misc. bugfixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9-1) 2.9.1

- ✨ New Added support for MemberPress
- Updates for WooCommerce Subscriptions 2.x

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-9) 2.9

- AgileCRM CRM support
- ✨ New Added support for Thrive Themes Apprentice LMS
- ✨ New Added support for auto-login links
- ✨ New Added ability to apply tags when a link is clicked

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-8-3) 2.8.3

- Allows shortcodes in restricted content message

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-8-2) 2.8.2

- 🔧 Fixed Fix for users being logged out when syncing password fields
- Ontraport bugifxes and performance tweaks
- Better error handling and debugging information for webhooks

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-8-1) 2.8.1

- ✨ New Added option for customizing restricted product add to cart message
- Misc. bug fixes

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-8) 2.8

- ConvertKit CRM support
- LifterLMS updates to support LLMS 3.0+
- Ability to apply tags for LifterLMS membership levels
- Restricted Woo products can no longer be added to cart via URL

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7-5) 2.7.5

- 🔧 Fixed Fixed Infusionsoft character encoding for foreign characters
- 🔧 Fixed Fixed default field mapping overriding custom field selections

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7-4) 2.7.4

- 🔧 Fixed Fixed bug where tag select boxes on LearnDash courses were limited to one selection

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7-3) 2.7.3

- 🔧 Fixed Fixed bugs where ActiveCampaign lists would be overwritten on contact updates
- Restricted menu items no longer hidden in admin menu editor
- ⚡️ Improved Improved s2Member support
- 🔧 Fixed Fix for applying tags with variable WooCommerce subscriptions

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7-2) 2.7.2

- ✨ New Added s2Member integration
- ✨ New Added support for applying tags when WooCommerce coupons are used
- ✨ New Added support for syncing AffiliateWP affiliate information
- 🔧 Fixed Fixed returning passwords for imported contacts
- Updates for compatibility with plugin integrations

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7-1) 2.7.1

- ✨ New Added LifterLMS support
- 🔧 Fixed Fix for password updates not syncing from UM Account page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-7) 2.7

- ✨ New Added Restrict Content Pro Integration
- Tag mapping for LearnDash Groups
- Can now sync user password from Ultimate Member reset password page

#### [\#](https://wpfusion.com/documentation/faq/changelog/\#2-6-8) 2.6.8

- 🔧 Fixed Fix for contact fields not getting correct defaults on first install
- 🔧 Fixed Fixed wrong lists getting assigned when updating AC contacts
- Significant API performance optimizations

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

### In this chapter

- [Caching](https://wpfusion.com/documentation/faq/caching/ "Caching")
- [CRM Compatibility](https://wpfusion.com/documentation/faq/crm-compatibility-table/ "CRM Compatibility")
- [For plugin developers](https://wpfusion.com/documentation/faq/for-plugin-developers/ "For plugin developers")
- [How does licensing work?](https://wpfusion.com/documentation/faq/how-does-licensing-work/ "How does licensing work?")
- [Is WP Fusion hard to use?](https://wpfusion.com/documentation/faq/is-wp-fusion-hard-to-use/ "Is WP Fusion hard to use?")
- [Misc. FAQ](https://wpfusion.com/documentation/faq/misc-faq/ "Misc. FAQ")
- [Multisite](https://wpfusion.com/documentation/faq/multisite/ "Multisite")
- [Performance](https://wpfusion.com/documentation/faq/performance/ "Performance")
- [Staging Sites](https://wpfusion.com/documentation/faq/staging-sites/ "Staging Sites")
- [What can I do with it?](https://wpfusion.com/documentation/faq/what-can-i-do-with-it/ "What can I do with it?")
- [Who is it for?](https://wpfusion.com/documentation/faq/who-is-it-for/ "Who is it for?")
- [WP Fusion vs....](https://wpfusion.com/documentation/faq/how-are-we-different/ "WP Fusion vs....")
- [Changelog](https://wpfusion.com/documentation/faq/changelog/ "Changelog")

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)