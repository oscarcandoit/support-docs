---
url: "https://wpfusion.com/documentation/tutorials/import-users/"
title: "Import Users | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/import-users/#content)

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

# Import Users

- Published onJanuary 3, 2016
- Last updated on March 3, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Import Users

### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#overview) Overview

WP Fusion includes an import tool that allows you to import existing contacts from your CRM as new WordPress users, and generate passwords for them.

[![](https://wpfusion.com/wp-content/uploads/2016/01/import-tool-1024x622.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/import-tool.jpg)

To start an import, navigate to the Import Users tab, and select a tag or list in your CRM to use for the import.

With the following platforms, you can also import all contacts without specifying a tag:

- ActiveCampaign
- Drip
- FluentCRM (REST + Same site)
- HighLevel
- HubSpot
- Infusionsoft
- Mailchimp
- Ontraport
- Salesforce

Select a user role for the new users, and click the Import button to begin the import.

**Note:** By default, only new users will be imported. If the contact already has an account on your site, they will be skipped. If you wish to update the tags and metadata for existing users, check the box for **Update Existing Users**.

If the Password field is enabled for sync on the Contact Fields tab, existing passwords can be imported as well. If the password field isn’t selected, a secure password will be automatically generated.

### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#managing-imports) Managing imports

WP Fusion will keep track of the users who were imported with each operation. If something goes wrong with an import and you want to try again, you click the Delete button next to an import group to delete just those users.

### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#import-options) Import options

#### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#welcome-emails) Welcome emails

If you check the box next to **Enable Notifications**, WordPress will send a simple welcome email to the user with their username, and a link to set the password for the new user account.

You can customize this welcome email by using a plugin like [Welcome Email Editor](https://wordpress.org/plugins/welcome-email-editor/) or [Better Notifications for WordPress](https://wordpress.org/plugins/bnfw/).

#### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#generated-passwords) Generated passwords

![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)

You can also leave email notifications disabled and send the user’s password back to your CRM after import. Check the box next to **Return Password** on the main WP Fusion settings tab, and select a field in your CRM in which to store the generated passwords.

After each user is imported, their automatically generated password will now be saved back to their contact record, and you can use a merge field to include it in an email. The username will be the contact’s email address.

**Note:** Before importing a large number of users, first do a test import on your own contact record to ensure that all of the information is imported and the welcome emails are sent correctly.

By default WordPress will send a notification email _to the site owner_ for every user imported. If you’re importing a large number of users you may wish to temporarily disable this using the [Disable New User Notification Emails](https://wordpress.org/plugins/disable-new-user-notifications/) plugin.

#### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#username-format) Username format

By default WP Fusion will set the username for all newly imported users to the contact’s email address.

You may not want the username to be the email address if you’re using a plugin (such as BuddyPress) which shows usernames on the frontend of the site. In that case you can change the default behavior.

This setting is found at the bottom of Settings » WP Fusion » General, in the **Imported Users** section.

[![](https://wpfusion.com/wp-content/uploads/2016/01/imported-users-username-format-1024x408.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/imported-users-username-format.jpg)

The three **Username Format** options are:

- **Email Address:** Usernames will be set to the contact’s emails address
- **FirstnameLastname:** Usernames will be a combination of the contact’s first name and last name (i.e. JaneDoe)
- **Firstname12345:** Usernames will be the contact’s first name, followed by a 5 digit random number (i.e. Jane36808)

For more control over how the usernames are generated, see [the `wpf_import_user` filter](https://wpfusion.com/documentation/filters/wpf_import_user/).

### [\#](https://wpfusion.com/documentation/tutorials/import-users/\#importing-users-via-csv) Importing users via .csv

Because WP Fusion’s import tool loads contacts via your CRM’s API, it can be slow if you have a large number of contacts (for example 100,000+).

This is due to WP Fusion respecting your CRM’s API limits, as well as the resources available on your site. In general WP Fusion will import about one user per second.

For large imports, an alternative approach is to export a .csv file of your contacts directly from your CRM.

**You can then use the WP All Import plugin to import the .csv file** and create new WordPress users. To do this you will need to install [WP All Import](https://wordpress.org/plugins/wp-all-import/) and the [Users Addon](https://www.wpallimport.com/import-wordpress-users/).

WP Fusion includes [an integration with WP All Import](https://wpfusion.com/documentation/other/wp-all-import/) so that generated passwords will automatically be synced to your CRM as users are imported, and their tags and contact IDs will be stored against their user record.

This method takes some additional time to set up since it involves working with .csv files, but it can save time if you need to import many thousands of users.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/import-users/#overview)
- [Managing imports](https://wpfusion.com/documentation/tutorials/import-users/#managing-imports)
- [Import options](https://wpfusion.com/documentation/tutorials/import-users/#import-options)
- [Welcome emails](https://wpfusion.com/documentation/tutorials/import-users/#welcome-emails)
- [Generated passwords](https://wpfusion.com/documentation/tutorials/import-users/#generated-passwords)
- [Username format](https://wpfusion.com/documentation/tutorials/import-users/#username-format)
- [Importing users via .csv](https://wpfusion.com/documentation/tutorials/import-users/#importing-users-via-csv)

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