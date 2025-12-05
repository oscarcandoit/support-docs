---
url: "https://wpfusion.com/documentation/membership/pilotpress/"
title: "Using PilotPress with WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/membership/pilotpress/#content)

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

# PilotPress

- Published onApril 17, 2020
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- PilotPress

### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#overview) Overview

[PilotPress](https://wordpress.org/plugins/pilotpress/) is a membership plugin [created by Ontraport](https://wpfusion.com/go/ontraport), it lets you build a membership site in WordPress, and you can create a portal where customers can manage their Ontraport orders.

PilotPress also allows you to host a partner center in WordPress, where partners can view their earnings and update their personal information.

[![](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-partner-center-1024x921.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-partner-center-scaled.jpg) The PilotPress partner center page in WordPress

WP Fusion is tested with PilotPress and the two plugins can be used together, but it’s recommended _not to use PilotPress_ if you can avoid it.

### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#difficulties-with-pilotpress) Difficulties with PilotPress

The main problem with PilotPress is that it authenticates user logins against the members portal in Ontraport, not WordPress.

This introduces several complications:

- **Someone can log into WordPress, but not be logged in to PilotPress.** They may have to log in a second time to access their customer portal or partner center.
- **PilotPress can only understand user logins via /wp-login.php** or a page with the \[login\_page\] shortcode on it. If someone logs in via WooCommerce or another membership plugin, PilotPress will not recognize them.
- **PilotPress needs to connect to Ontraport to authenticate logins**, meaning if Ontraport is slow or the API is offline your users won’t be able to log in.
- Because passwords are stored in Ontraport, **your users may end up with two different passwords**, one for WordPress and one for PilotPress. This creates some complicated scenarios with passwords that need to be planned for:

  - If someone resets their password via WooCommerce or another plugin, and tries to log in via a PilotPress login form, their login will fail.
  - If someone resets their password via PilotPress and tries to log in via WooCommerce or another plugin, their login will fail.
  - If people have been logging in via PilotPress and you deactivate the PilotPress plugin, WordPress will revert to handling logins. Because their WordPress password is different than their PilotPress password, users may need to reset their passwords before they can log in again.

[![](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-customer-center-1024x942.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/pilotpress-customer-center-scaled.jpg) A user who logs into WordPress via another plugin may needs to log in again with their Ontraport credentials to access the PilotPress Customer Center

### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#using-wp-fusion-with-pilotpress) Using WP Fusion with PilotPress

There are a few strategies for using PilotPress depending on the complexity of your site.

#### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#very-simple-website) Very simple website

If you have a very simple website, i.e. no ecommerce plugins and no membership plugins, you can let PilotPress manage all user accounts. In this scenario you need to make sure that the only page you’re using for login is either the standard /wp-login.php, or a page with PilotPress’ \[login\_page\] shortcode on it.

Anything that customizes the login process (i.e. LoginPress) will likely interfere with PilotPress. Likewise anything that affects login security (i.e. iThemes Security or WordFence), may prevent password resets from working.

In this scenario all logins are handled by PilotPress and passwords are checked against the members center in Ontraport. To reset a user’s password, you need to reset it in Ontraport via the members center, or the user must click the Forgot Password link on the PilotPress login form.

[![](https://wpfusion.com/wp-content/uploads/2020/04/ontraport-memberships-portal-1024x555.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/ontraport-memberships-portal-scaled.jpg)

Password resets in the WordPress admin or via a WordPress reset password link will not work.

Once the user is logged in they will be able to access their PilotPress Customer Center or Partner Center.

WP Fusion will still recognize a user who has logged in via PilotPress and can [unlock content using Ontraport tags](https://wpfusion.com/documentation/getting-started/access-control/) and apply tags normally as if it were a real WordPress login.

#### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#more-complex-websites) More complex websites

If you’re selling anything on your website via WooCommerce or another ecommerce plugin, delivering courses using an LMS, or running a membership plugin (i.e. BuddyPress) you will probably want to bypass PilotPress’ login process.

The reason is that a user may have one password for PilotPress and another for WordPress. So if they’ve reset their password via the PilotPress \[login\_page\] shortcode and then come back later to make a purchase in WooCommerce, that password won’t allow them to log in to WooCommerce.

They will then reset their password for WooCommerce and the rest of WordPress, but later be unable to log into PilotPress until they reset their password yet another time.

The first question is, **do you need PilotPress at all?**

If you’re not using the PilotPress customer center or partner center, then the best solution is to deactivate PilotPress and let WordPress handle logins.

#### [\#](https://wpfusion.com/documentation/membership/pilotpress/\#if-you-do-need-pilotpress-for-some-features) If you do need PilotPress for some features

If you need PilotPress for some features, first you need to establish control over where people are logging in to avoid passwords getting out of sync.

For example if you’re running a WooCommerce store, you can remove the PilotPress login page and block access to /wp-login.php so people can only log in via WooCommerce’s My Account page.

Then if you need PilotPress in order to let your partners access their partner center and see their earnings, you can send your partners directly to the Affiliate Center page on your site, which includes its own PilotPress login form. This reduces the chances of regular users using the wrong login form.

To simplify things further, one solution is to have a separate contact record in Ontraport for each partner with a unique email address (separate from their normal user account on your site).

Then you can tell your partners that to access their portal they can go directly to the Affiliate Center page on your site and log in with the username and password you generated for them in Ontraport. This way your partners have two accounts: one for your affiliate area and one for the rest of your site, and will hopefully reduce confusion about which account to use on which login form.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/pilotpress/#overview)
- [Difficulties with PilotPress](https://wpfusion.com/documentation/membership/pilotpress/#difficulties-with-pilotpress)
- [Using WP Fusion with PilotPress](https://wpfusion.com/documentation/membership/pilotpress/#using-wp-fusion-with-pilotpress)
- [Very simple website](https://wpfusion.com/documentation/membership/pilotpress/#very-simple-website)
- [More complex websites](https://wpfusion.com/documentation/membership/pilotpress/#more-complex-websites)
- [If you do need PilotPress for some features](https://wpfusion.com/documentation/membership/pilotpress/#if-you-do-need-pilotpress-for-some-features)

### In this chapter

- [AccessAlly](https://wpfusion.com/documentation/membership/accessally/ "AccessAlly")
- [ARMember](https://wpfusion.com/documentation/membership/armember/ "ARMember")
- [Blockli Streamer](https://wpfusion.com/documentation/membership/blockli-streamer/ "Blockli Streamer")
- [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/ "BuddyBoss")
- [BuddyPress](https://wpfusion.com/documentation/membership/buddypress/ "BuddyPress")
- [Content Control](https://wpfusion.com/documentation/membership/content-control/ "Content Control")
- [FluentCommunity](https://wpfusion.com/documentation/membership/fluentcommunity/ "FluentCommunity")
- [MemberDash](https://wpfusion.com/documentation/membership/memberdash/ "MemberDash")
- [MemberMouse](https://wpfusion.com/documentation/membership/membermouse/ "MemberMouse")
- [MemberPress](https://wpfusion.com/documentation/membership/memberpress/ "MemberPress")
- [Members](https://wpfusion.com/documentation/membership/members/ "Members")
- [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/ "Paid Memberships Pro")
- [PeepSo](https://wpfusion.com/documentation/membership/peepso/ "PeepSo")
- [PilotPress](https://wpfusion.com/documentation/membership/pilotpress/ "PilotPress")
- [Profile Builder Pro](https://wpfusion.com/documentation/membership/profile-builder-pro/ "Profile Builder Pro")
- [ProfilePress](https://wpfusion.com/documentation/membership/profilepress/ "ProfilePress")
- [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/ "Restrict Content Pro")
- [s2Member](https://wpfusion.com/documentation/integrations/s2member/ "s2Member")
- [Simple Membership](https://wpfusion.com/documentation/membership/simple-membership/ "Simple Membership")
- [SureMembers](https://wpfusion.com/documentation/membership/suremembers/ "SureMembers")
- [Teams for WooCommerce Memberships](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/ "Teams for WooCommerce Memberships")
- [Toolset User Forms](https://wpfusion.com/documentation/membership/toolset-user-forms/ "Toolset User Forms")
- [Ultimate Member](https://wpfusion.com/documentation/membership/ultimate-member/ "Ultimate Member")
- [User Meta](https://wpfusion.com/documentation/membership/user-meta/ "User Meta")
- [UserPro](https://wpfusion.com/documentation/membership/userpro/ "UserPro")
- [Users Insights](https://wpfusion.com/documentation/membership/users-insights/ "Users Insights")
- [UsersWP](https://wpfusion.com/documentation/membership/userswp/ "UsersWP")
- [WishList Member](https://wpfusion.com/documentation/membership/wishlist-member/ "WishList Member")
- [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/ "WooCommerce Memberships")
- [WP User Manager](https://wpfusion.com/documentation/membership/wp-user-manager/ "WP User Manager")
- [WP-Members](https://wpfusion.com/documentation/membership/wp-members/ "WP-Members")

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