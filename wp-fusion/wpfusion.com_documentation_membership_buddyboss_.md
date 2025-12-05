---
url: "https://wpfusion.com/documentation/membership/buddyboss/"
title: "Connect BuddyBoss to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/buddyboss/#content)

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

# BuddyBoss

- Published onFebruary 16, 2021
- Last updated on July 25, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- BuddyBoss

### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#overview) Overview

WP Fusion automatically syncs your [BuddyBoss](https://wpfusion.com/go/buddyboss) members with leading [CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and allows you to apply tags in your CRM based on member activity, as well as personalize the member experience using tags and automations in your CRM.

- This documentation covers BuddyBoss-specific functionality. For more information on syncing members with CRM contact records and applying tags based on groups and group types, see [the BuddyPress documentation](https://wpfusion.com/documentation/membership/buddypress/).
- For information on WP Fusion’s integration with BuddyBoss Forums, see our [documentation on bbPress](https://wpfusion.com/documentation/forums/bbpress/).

### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#profile-types-auto-assignment) Profile types auto-assignment

[![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-profile-types-1024x283.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-profile-types.jpg)

WP Fusion supports BuddyBoss profile types. You can specify a CRM tag to be “linked” with the profile type.

When the user is given the profile type, the tag will be applied. When the user is removed from the profile type, the tag will be removed.

Likewise, applying this tag to a user in your CRM or from another integration will automatically assign the profile type to the user, and removing the tag will un-assign it.

### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#member-access-controls) Member Access Controls

The [Member Access Controls feature](https://www.buddyboss.com/resources/docs/components/member-access-controls/ref/627/) in the [BuddyBoss Platform Pro](https://wpfusion.com/go/buddyboss) plugin allows you to control which membership components a user can interact with (such as forums, groups, private messaging, etc.) based on their membership level.

WP Fusion integrates with the Member Access Controls system to allow you to use tags (or lists / groups) in your connected CRM to personalize the member experience.

[![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control-1024x547.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control.jpg) In this example, only users who are on the HubSpot list **Paying Member** can join social groups.

Member access controls are currently available for the Social Groups, Activity Feeds, Media Uploading, and Private Messaging components.

To set up, choose WP Fusion from the dropdown of available access conditions, and then select the required tags (or lists / segments).

[![](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control-messages-1024x774.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/buddyboss-access-control-messages.jpg) In this example, only members with the Infusionsoft tag **Premium Member** can send private messages.

**Notes:**

- The Member Access Controls system for social groups only prevents users from _joining_ social groups if they don’t have the correct tag. Removing a tag will not remove anyone from a group or disable their existing group access.
- Due to the way the Messages Access settings are displayed, every available tag in your account has a “specific tags” option with every _other_ available tag, which can potentially result in hundreds of thousands of inputs on the page. To protect the stability of your site, WP Fusion will only load the first 100 available tags. If you experience issues saving the Messages Access settings, you may need to [increase your max\_input\_vars](https://www.a2hosting.com/kb/developer-corner/php/using-php.ini-directives/php-max-input-vars-directive).

### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#buddyboss-app) BuddyBoss App

WP Fusion also includes some features specific to the [BuddyBoss App](https://wpfusion.com/go/buddyboss-app).

#### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#logins) Logins

Using the [Logins Addon](https://wpfusion.com/documentation/logins/overview/) (available to Plus and Professional license holders), you can apply tags when users first log in to your BuddyBoss app, apply tags when users create accounts via [Social Login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/), as well as track the last date they logged in to the app in your CRM.

[![Screenshot of WP Fusion's Logins addon BuddyBoss settings](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration-1024x419.jpg)](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration.jpg) WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) can apply tags in your CRM when users log in to the BuddyBoss app for the first time.

The **Apply Tags – First Login to BuddyBoss App** setting is found at the bottom of the Logins tab in the WP Fusion settings.

[![screenshot](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking-1024x370.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking.jpg)

By enabling the **Last Login – BuddyBoss App** field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), you can track the last time users logged into the app in your CRM. This is a great way to get a sense of your most active app users.

#### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#access-controls) Access Controls

You can create access rules for app content based on tags in your connected CRM. This allows you to restrict parts of the app or app components based on a user’s tags, or revoke access to the app after a subscription cancellation or payment failure.

To set this up, first make sure that [Access Controls are activated](https://www.buddyboss.com/resources/docs/app/access-controls/activating-access-controls/) at BuddyBoss App » Settings » Labs » Enable Access Controls for the BuddyBoss App.

Then go to BuddyBoss App » Access Controls, and click the blue **Access Groups** button to reach the Access Groups page.

From here, add a new group, and for the condition, choose your CRM— in this example we’re using HubSpot lists:

[![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-group-1024x659.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-group.jpg)

Once you’ve added the access group, BuddyBoss will search for any users on your site that have that tag, and you’ll see a count of them in the Access Groups list.

Then head back to the Access Controls settings page. You can now use the new access group as a condition for who can log into your app, or who can access specific app components.

[![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-controls-1024x606.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-access-controls.jpg)

For more information on access control, [see the BuddyBoss documentation](https://www.buddyboss.com/resources/docs/app/access-controls/).

#### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#in-app-purchases) In-App Purchases

You can connect in-app product purchases in the BuddyBoss App to tags (or “lists”, or “groups”) in your connected CRM.

This allows you to apply a tag when an product is purchased in your app, which can unlock content on your site, trigger automated enrollments into courses and memberships, and trigger automations in your marketing automation platform.

To set up, in the WordPress admin, head to BuddyBoss App » In-App Purchases » Products and click Edit Product on your app product.

[![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-iap-1024x585.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-iap.jpg) WP Fusion’s BuddyBoss app integration allows you to sync in-app purchase data with your CRM or marketing automation tool.

From the **Integration Type** menu, select your CRM, and then in the dropdown below, select the tag that should be applied at purchase.

Now when someone purchases your in-app product, a contact record will be created for them in your connected CRM, and the selected tag will be applied.

If the order is cancelled or refunded, the tag will be removed.

#### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#push-notifications) Push Notifications

When sending push notifications to your members, you can segment your members using tags in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-push-notifications-1024x727.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-push-notifications.jpg)

After selecting _Filter members,_ choose _WP Fusion_ from the filters dropdown, and select your CRM.

You can select any number of tags (or lists, groups, or segments, depending on your CRM), and your push notification will only be sent to members who have those tags.

#### [\#](https://wpfusion.com/documentation/membership/buddyboss/\#what-wp-fusion-features-work-with-the-app) What WP Fusion features work with the app?

WP Fusion is generally compatible with the BuddyBoss app because it doesn’t add anything to the frontend of your site— most of the behavior regarding access, enrollments, and personalization happens “behind the scenes”.

**Here are the features we’ve tested and know work with the app:**

- Anything related to syncing data or custom fields bidirectionally with your CRM
- Anything related to an event in another plugin, such as a [WooCommerce purchase](https://wpfusion.com/documentation/ecommerce/woocommerce/) applying a tag, a [LearnDash course completion](https://wpfusion.com/documentation/learning-management/learndash/) applying a tag, a [MemberPress subscription cancellation](https://wpfusion.com/documentation/ecommerce/memberpress/), etc.
- Any “linked tags” or automated enrollments, for example applying a CRM tag to [auto-enroll a user into a social group](https://wpfusion.com/documentation/membership/buddypress/#groups-auto-enrollment), course, or membership level
- Protecting access to content by showing [a restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message)
- Showing and hiding content [using shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-tags)
- Hiding restricted items using [the Filter Queries tool](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries)
- Personalizing LearnDash course content using the [Filter Course Steps feature](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps)
- Locking LearnDash lessons using the [Lock Lessons feature](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)
- Tracking login counts and login dates [via the Logins Addon](https://wpfusion.com/documentation/logins/overview/)

[![](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson-1024x941.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson.jpg) Lessons locked by WP Fusion’s “ [Lock Lessons](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)” setting in LearnDash are displayed as disabled in the BuddyBoss app.

**The features that don’t work with the app** are features that rely on a traditional “browser” experience (though they will work on [web fallback pages](https://www.buddyboss.com/resources/docs/app/app-content/web-fallbacks/)):

- Using WP Fusion to redirect a user to another page if access to a piece of content is denied. This is because the app isn’t a web browser, so redirects won’t work
  - Redirects _do_ work within the app when redirecting from a non-app page (i.e. a regular site URL) to another non-app page
  - This applies to both regular URLs and “ [deep links](https://www.buddyboss.com/resources/docs/app/app-content/how-to-configure-deep-linking-in-the-buddyboss-app/)“
-  Anything requiring JavaScript, like [site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/), [applying tags when a button is clicked](https://wpfusion.com/documentation/tutorials/link-click-tracking/), or [tracking media player engagement](https://wpfusion.com/documentation/media-tools/media-tools-overview/)
- Login redirects with the [Logins Addon](https://wpfusion.com/documentation/logins/overview/)
- Hiding app menu items based on the access rules for the associated content, using the [Hide From Menus feature](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps)
- The [Site Lockout](https://wpfusion.com/documentation/getting-started/general-settings/#site-lockout) feature does not work with the app since it relies on redirects. Instead, you can use [Member Access Controls](https://wpfusion.com/documentation/membership/buddyboss/#access-controls) to control app access via tags

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect BuddyBoss to ActiveCampaign](https://wpfusion.com/connect/connect-buddyboss-to-activecampaign/)  \|
- [Connect BuddyBoss to AgileCRM](https://wpfusion.com/connect/connect-buddyboss-to-agilecrm/)  \|
- [Connect BuddyBoss to Autopilot](https://wpfusion.com/connect/connect-buddyboss-to-autopilot/)  \|
- [Connect BuddyBoss to Bento](https://wpfusion.com/connect/connect-buddyboss-to-bento/)  \|
- [Connect BuddyBoss to BirdSend](https://wpfusion.com/connect/connect-buddyboss-to-birdsend/)  \|
- [Connect BuddyBoss to Brevo](https://wpfusion.com/connect/connect-buddyboss-to-brevo/)  \|
- [Connect BuddyBoss to Capsule](https://wpfusion.com/connect/connect-buddyboss-to-capsule/)  \|
- [Connect BuddyBoss to Constant Contact](https://wpfusion.com/connect/connect-buddyboss-to-constant-contact/)  \|
- [Connect BuddyBoss to ConvertKit](https://wpfusion.com/connect/connect-buddyboss-to-convertkit/)  \|
- [Connect BuddyBoss to ConvesioConvert](https://wpfusion.com/connect/connect-buddyboss-to-convesioconvert/)  \|
- [Connect BuddyBoss to Copper](https://wpfusion.com/connect/connect-buddyboss-to-copper/)  \|
- [Connect BuddyBoss to Customer.io](https://wpfusion.com/connect/connect-buddyboss-to-customer-io/)  \|
- [Connect BuddyBoss to Customerly](https://wpfusion.com/connect/connect-buddyboss-to-customerly/)  \|
- [Connect BuddyBoss to Drip](https://wpfusion.com/connect/connect-buddyboss-to-drip/)  \|
- [Connect BuddyBoss to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-buddyboss-to-dynamics-365-marketing/)  \|
- [Connect BuddyBoss to EmailOctopus](https://wpfusion.com/connect/connect-buddyboss-to-emailoctopus/)  \|
- [Connect BuddyBoss to EngageBay](https://wpfusion.com/connect/connect-buddyboss-to-engagebay/)  \|
- [Connect BuddyBoss to Flexie](https://wpfusion.com/connect/connect-buddyboss-to-flexie/)  \|
- [Connect BuddyBoss to FluentCRM](https://wpfusion.com/connect/connect-buddyboss-to-fluentcrm/)  \|
- [Connect BuddyBoss to FunnelKit](https://wpfusion.com/connect/connect-buddyboss-to-funnelkit/)  \|
- [Connect BuddyBoss to Gist](https://wpfusion.com/connect/connect-buddyboss-to-gist/)  \|
- [Connect BuddyBoss to Groundhogg](https://wpfusion.com/connect/connect-buddyboss-to-groundhogg/)  \|
- [Connect BuddyBoss to HighLevel](https://wpfusion.com/connect/connect-buddyboss-to-highlevel/)  \|
- [Connect BuddyBoss to HubSpot](https://wpfusion.com/connect/connect-buddyboss-to-hubspot/)  \|
- [Connect BuddyBoss to Infusionsoft](https://wpfusion.com/connect/connect-buddyboss-to-infusionsoft/)  \|
- [Connect BuddyBoss to Intercom](https://wpfusion.com/connect/connect-buddyboss-to-intercom/)  \|
- [Connect BuddyBoss to Jetpack CRM](https://wpfusion.com/connect/connect-buddyboss-to-jetpack-crm/)  \|
- [Connect BuddyBoss to Kartra](https://wpfusion.com/connect/connect-buddyboss-to-kartra/)  \|
- [Connect BuddyBoss to Keap](https://wpfusion.com/connect/connect-buddyboss-to-keap/)  \|
- [Connect BuddyBoss to Klaviyo](https://wpfusion.com/connect/connect-buddyboss-to-klaviyo/)  \|
- [Connect BuddyBoss to KlickTipp](https://wpfusion.com/connect/connect-buddyboss-to-klicktipp/)  \|
- [Connect BuddyBoss to Loopify](https://wpfusion.com/connect/connect-buddyboss-to-loopify/)  \|
- [Connect BuddyBoss to MailChimp](https://wpfusion.com/connect/connect-buddyboss-to-mailchimp/)  \|
- [Connect BuddyBoss to MailerLite](https://wpfusion.com/connect/connect-buddyboss-to-mailerlite/)  \|
- [Connect BuddyBoss to Mailjet](https://wpfusion.com/connect/connect-buddyboss-to-mailjet/)  \|
- [Connect BuddyBoss to MailPoet](https://wpfusion.com/connect/connect-buddyboss-to-mailpoet/)  \|
- [Connect BuddyBoss to Maropost](https://wpfusion.com/connect/connect-buddyboss-to-maropost/)  \|
- [Connect BuddyBoss to Mautic](https://wpfusion.com/connect/connect-buddyboss-to-mautic/)  \|
- [Connect BuddyBoss to NationBuilder](https://wpfusion.com/connect/connect-buddyboss-to-nationbuilder/)  \|
- [Connect BuddyBoss to Omnisend](https://wpfusion.com/connect/connect-buddyboss-to-omnisend/)  \|
- [Connect BuddyBoss to Ontraport](https://wpfusion.com/connect/connect-buddyboss-to-ontraport/)  \|
- [Connect BuddyBoss to Ortto](https://wpfusion.com/connect/connect-buddyboss-to-ortto/)  \|
- [Connect BuddyBoss to Pipedrive](https://wpfusion.com/connect/connect-buddyboss-to-pipedrive/)  \|
- [Connect BuddyBoss to Platformly](https://wpfusion.com/connect/connect-buddyboss-to-platformly/)  \|
- [Connect BuddyBoss to Quentn](https://wpfusion.com/connect/connect-buddyboss-to-quentn/)  \|
- [Connect BuddyBoss to Salesflare](https://wpfusion.com/connect/connect-buddyboss-to-salesflare/)  \|
- [Connect BuddyBoss to Salesforce](https://wpfusion.com/connect/connect-buddyboss-to-salesforce/)  \|
- [Connect BuddyBoss to Sender](https://wpfusion.com/connect/connect-buddyboss-to-sender/)  \|
- [Connect BuddyBoss to SendFox](https://wpfusion.com/connect/connect-buddyboss-to-sendfox/)  \|
- [Connect BuddyBoss to Tubular](https://wpfusion.com/connect/connect-buddyboss-to-tubular/)  \|
- [Connect BuddyBoss to User.com](https://wpfusion.com/connect/connect-buddyboss-to-user-com/)  \|
- [Connect BuddyBoss to WP ERP](https://wpfusion.com/connect/connect-buddyboss-to-wp-erp/)  \|
- [Connect BuddyBoss to Zoho](https://wpfusion.com/connect/connect-buddyboss-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/buddyboss/#overview)
- [Profile types auto-assignment](https://wpfusion.com/documentation/membership/buddyboss/#profile-types-auto-assignment)
- [Member Access Controls](https://wpfusion.com/documentation/membership/buddyboss/#member-access-controls)
- [BuddyBoss App](https://wpfusion.com/documentation/membership/buddyboss/#buddyboss-app)
- [Logins](https://wpfusion.com/documentation/membership/buddyboss/#logins)
- [Access Controls](https://wpfusion.com/documentation/membership/buddyboss/#access-controls)
- [In-App Purchases](https://wpfusion.com/documentation/membership/buddyboss/#in-app-purchases)
- [Push Notifications](https://wpfusion.com/documentation/membership/buddyboss/#push-notifications)
- [What WP Fusion features work with the app?](https://wpfusion.com/documentation/membership/buddyboss/#what-wp-fusion-features-work-with-the-app)

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