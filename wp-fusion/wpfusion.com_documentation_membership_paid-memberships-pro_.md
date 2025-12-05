---
url: "https://wpfusion.com/documentation/membership/paid-memberships-pro/"
title: "Connect Paid Memberships Pro to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/paid-memberships-pro/#content)

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

# Paid Memberships Pro

- Published onJanuary 28, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- Paid Memberships Pro

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#overview) Overview

WP Fusion works with [Paid Membership Pro](https://wpfusion.com/go/paidmembershipspro) to sync members with any one of  [50+ CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they purchase a membership, apply tags based on membership level and subscription status, and auto-enroll members when tags are applied in your CRM.

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#tagging) Tagging

WP Fusion adds several settings to Paid Memberships Pro, which you can see while editing any membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/01/paidmembershipspro-4-1024x526.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/paidmembershipspro-4.jpg)

You can apply tags (also known as [groups, lists, or segments](https://wpfusion.com/documentation/getting-started/working-with-tags/#overview)) based on the level of membership purchased, as well as optionally apply tags when a membership is canceled or the period expires.

There are several options:

- **Apply Tags:** When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Remove Tags:** If the membership is canceled, expires, or changed, the tags specified in Apply Tags can automatically be removed.
- **Link with Tag:** Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes _linked_ with the membership level. If this tag is applied to a contact, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).
- Linked tags will also be applied and removed if a user is added to / removed from a membership.
- **Apply Tags – Cancelled:** These tags will be applied if a membership is cancelled.
- **Apply Tags – Expired:** For memberships with expiration dates,this option lets you apply tags when a membership expires, allowing you to trigger additional renewal followup automations.
- **Apply Tags – Payment Failed:** For subscription memberships, you can specify tags to be applied when a recurring payment fails. These tags will be removed if a successful payment is received.

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#approvals) Approvals

When the [Approvals addon](https://www.paidmembershipspro.com/add-ons/approval-process-membership/) is active, an additional field `pmpro_approval` will be available for sync, and will be listed in the Contact Fields list.

When active, the approval status (either “pending” or “approved”) will be synced to your CRM when a member registers, changes membership level, or when their approval status is changed.

In addition, you can set this field to value “approved” in your CRM, and the member will be approved in Paid Memberships Pro.

This allows you to manage member approvals by editing contact records in your CRM, or even to automate approvals using an automation or workflow.

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#gift-memberships) Gift memberships

With the Paid Memberships Pro [Gift Membership addon](https://www.paidmembershipspro.com/add-ons/pmpro-gift-levels/), you can configure membership levels as gift memberships, and allow customers to buy memberships for other people.

[![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-gift-memberships-1024x230.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-gift-memberships.jpg)

When a level is configured as a gift membership, a single option for applying tags will be available, allowing you to apply tags to the customer who purchased the gift.

You can then edit the settings on the connected membership to configure which tags to apply to the gift recipient.

When the recipient clicks the link and creates their new gifted account, a contact record will be created in your CRM for the gift recipient, and any tags configured on that membership level will be applied.

As well, any enabled fields, such as **Membership Level** or **Expiration Date** will be synced to the gift recipient’s contact record.

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#syncing-member-data) Syncing member data

WP Fusion can [sync member data provided at checkout to custom fields in your CRM](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), such as name, address and phone number.

These fields can be enabled at Settings » WP Fusion » Contact Fields » Paid Memberships Pro.

[Custom fields added to your registration forms](https://www.paidmembershipspro.com/documentation/user-fields/) will also automatically be detected and can be enabled for sync from the Contact Fields list in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#additional-meta-fields) Additional meta fields

WP Fusion allows you to sync certain internal Paid Memberships Pro fields that aren’t normally available as part of the WordPress user record. Under the Paid Memberships Pro section in the Contact Fields tab, you’ll see a few options.

[![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-meta-fields-1024x186.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-meta-fields.jpg)

- **Membership Level** indicates the title of the member’s current membership level.
- **Membership Status** will either be “active” or “inactive” depending on their status.
- **Payment Method** is synced at checkout and indicates the payment gateway or payment method used to make a purchase.
- **Joined Date** is the start date of the user’s first membership (the date they joined as a member).
- **Membership Start Date** is the start date of the user’s most recent membership.
- **Next Payment Date** is the date of the next scheduled renewal payment. You can use this in in conjunction with date-based triggers in your CRM to automate renewal reminders.
- **Expiration Date** is the date of expiration for the membership (if it has an expiry date).
- **Subscription Price** is the recurring billing amount of the membership.

Membership fields can also be synced on a per-level basis by mapping the fields underneath the WP Fusion tag settings when editing any membership level.

[![screenshot of the wp fusion field mapping screen, displaying options for mapping memberships and subscriptions fields such as status, level, start and expiration date, price, next payment date, and approval status to sync with contact records. perfect for paid memberships pro users.](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-level-specific-field-mapping-1024x617.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-level-specific-field-mapping.jpg)

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#abandoned-cart-tracking) Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the Paid Memberships Pro checkout form and sync them to your CRM before checkout has been completed.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With Paid Memberships Pro, cart abandonment tags can be set in the WP Fusion settings section when editing any membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking-1024x379.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking.jpg)

When a customer begins to check out with the membership level (or fails to complete checkout), the selected tags will be applied in your CRM or email marketing system, and can be used to trigger followup automations, offer discounts, and in your reports.

With Paid Memberships Pro you can also sync a **Cart Recovery URL** to take the user back to the checkout page.

For more information on the available options with abandoned cart tracking and Paid Memberships Pro, see the [Abandoned Cart Tracking documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### [\#](https://wpfusion.com/documentation/membership/paid-memberships-pro/\#batch-operations) Batch operations

For members who registered for your site before you set up WP Fusion, we include a two batch operations tools to bring those historical members up to date.

[![](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-batch-1-1024x465.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/pmpro-batch-1-scaled.jpg)

The two options are:

- **Paid Memberships Pro membership statuses:** This operation will go through all the members on your site and get each member’s most recent status at each membership level (including cancelled and expired members). It will then apply any tags you’ve configured for that membership level.
- **Paid Memberships Pro membership meta:** This operation will query all the members on your site, and for each it will sync any enabled meta fields for that user’s most recent membership, such as Start Date, Expiration Date, Membership Level, and Status. This operation does not modify any tags.

_Keep in mind this process can take some time to complete on sites with a large number of members. You can leave the page and come back later to check on the status._

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Paid Memberships Pro to ActiveCampaign](https://wpfusion.com/connect/connect-paid-memberships-pro-to-activecampaign/)  \|
- [Connect Paid Memberships Pro to AgileCRM](https://wpfusion.com/connect/connect-paid-memberships-pro-to-agilecrm/)  \|
- [Connect Paid Memberships Pro to Autopilot](https://wpfusion.com/connect/connect-paid-memberships-pro-to-autopilot/)  \|
- [Connect Paid Memberships Pro to Bento](https://wpfusion.com/connect/connect-paid-memberships-pro-to-bento/)  \|
- [Connect Paid Memberships Pro to BirdSend](https://wpfusion.com/connect/connect-paid-memberships-pro-to-birdsend/)  \|
- [Connect Paid Memberships Pro to Brevo](https://wpfusion.com/connect/connect-paid-memberships-pro-to-brevo/)  \|
- [Connect Paid Memberships Pro to Capsule](https://wpfusion.com/connect/connect-paid-memberships-pro-to-capsule/)  \|
- [Connect Paid Memberships Pro to Constant Contact](https://wpfusion.com/connect/connect-paid-memberships-pro-to-constant-contact/)  \|
- [Connect Paid Memberships Pro to ConvertKit](https://wpfusion.com/connect/connect-paid-memberships-pro-to-convertkit/)  \|
- [Connect Paid Memberships Pro to ConvesioConvert](https://wpfusion.com/connect/connect-paid-memberships-pro-to-convesioconvert/)  \|
- [Connect Paid Memberships Pro to Copper](https://wpfusion.com/connect/connect-paid-memberships-pro-to-copper/)  \|
- [Connect Paid Memberships Pro to Customer.io](https://wpfusion.com/connect/connect-paid-memberships-pro-to-customer-io/)  \|
- [Connect Paid Memberships Pro to Customerly](https://wpfusion.com/connect/connect-paid-memberships-pro-to-customerly/)  \|
- [Connect Paid Memberships Pro to Drip](https://wpfusion.com/connect/connect-paid-memberships-pro-to-drip/)  \|
- [Connect Paid Memberships Pro to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-paid-memberships-pro-to-dynamics-365-marketing/)  \|
- [Connect Paid Memberships Pro to EmailOctopus](https://wpfusion.com/connect/connect-paid-memberships-pro-to-emailoctopus/)  \|
- [Connect Paid Memberships Pro to EngageBay](https://wpfusion.com/connect/connect-paid-memberships-pro-to-engagebay/)  \|
- [Connect Paid Memberships Pro to Flexie](https://wpfusion.com/connect/connect-paid-memberships-pro-to-flexie/)  \|
- [Connect Paid Memberships Pro to FluentCRM](https://wpfusion.com/connect/connect-paid-memberships-pro-to-fluentcrm/)  \|
- [Connect Paid Memberships Pro to FunnelKit](https://wpfusion.com/connect/connect-paid-memberships-pro-to-funnelkit/)  \|
- [Connect Paid Memberships Pro to Gist](https://wpfusion.com/connect/connect-paid-memberships-pro-to-gist/)  \|
- [Connect Paid Memberships Pro to Groundhogg](https://wpfusion.com/connect/connect-paid-memberships-pro-to-groundhogg/)  \|
- [Connect Paid Memberships Pro to HighLevel](https://wpfusion.com/connect/connect-paid-memberships-pro-to-highlevel/)  \|
- [Connect Paid Memberships Pro to HubSpot](https://wpfusion.com/connect/connect-paid-memberships-pro-to-hubspot/)  \|
- [Connect Paid Memberships Pro to Infusionsoft](https://wpfusion.com/connect/connect-paid-memberships-pro-to-infusionsoft/)  \|
- [Connect Paid Memberships Pro to Intercom](https://wpfusion.com/connect/connect-paid-memberships-pro-to-intercom/)  \|
- [Connect Paid Memberships Pro to Jetpack CRM](https://wpfusion.com/connect/connect-paid-memberships-pro-to-jetpack-crm/)  \|
- [Connect Paid Memberships Pro to Kartra](https://wpfusion.com/connect/connect-paid-memberships-pro-to-kartra/)  \|
- [Connect Paid Memberships Pro to Keap](https://wpfusion.com/connect/connect-paid-memberships-pro-to-keap/)  \|
- [Connect Paid Memberships Pro to Klaviyo](https://wpfusion.com/connect/connect-paid-memberships-pro-to-klaviyo/)  \|
- [Connect Paid Memberships Pro to KlickTipp](https://wpfusion.com/connect/connect-paid-memberships-pro-to-klicktipp/)  \|
- [Connect Paid Memberships Pro to Loopify](https://wpfusion.com/connect/connect-paid-memberships-pro-to-loopify/)  \|
- [Connect Paid Memberships Pro to MailChimp](https://wpfusion.com/connect/connect-paid-memberships-pro-to-mailchimp/)  \|
- [Connect Paid Memberships Pro to MailerLite](https://wpfusion.com/connect/connect-paid-memberships-pro-to-mailerlite/)  \|
- [Connect Paid Memberships Pro to Mailjet](https://wpfusion.com/connect/connect-paid-memberships-pro-to-mailjet/)  \|
- [Connect Paid Memberships Pro to MailPoet](https://wpfusion.com/connect/connect-paid-memberships-pro-to-mailpoet/)  \|
- [Connect Paid Memberships Pro to Maropost](https://wpfusion.com/connect/connect-paid-memberships-pro-to-maropost/)  \|
- [Connect Paid Memberships Pro to Mautic](https://wpfusion.com/connect/connect-paid-memberships-pro-to-mautic/)  \|
- [Connect Paid Memberships Pro to NationBuilder](https://wpfusion.com/connect/connect-paid-memberships-pro-to-nationbuilder/)  \|
- [Connect Paid Memberships Pro to Omnisend](https://wpfusion.com/connect/connect-paid-memberships-pro-to-omnisend/)  \|
- [Connect Paid Memberships Pro to Ontraport](https://wpfusion.com/connect/connect-paid-memberships-pro-to-ontraport/)  \|
- [Connect Paid Memberships Pro to Ortto](https://wpfusion.com/connect/connect-paid-memberships-pro-to-ortto/)  \|
- [Connect Paid Memberships Pro to Pipedrive](https://wpfusion.com/connect/connect-paid-memberships-pro-to-pipedrive/)  \|
- [Connect Paid Memberships Pro to Platformly](https://wpfusion.com/connect/connect-paid-memberships-pro-to-platformly/)  \|
- [Connect Paid Memberships Pro to Quentn](https://wpfusion.com/connect/connect-paid-memberships-pro-to-quentn/)  \|
- [Connect Paid Memberships Pro to Salesflare](https://wpfusion.com/connect/connect-paid-memberships-pro-to-salesflare/)  \|
- [Connect Paid Memberships Pro to Salesforce](https://wpfusion.com/connect/connect-paid-memberships-pro-to-salesforce/)  \|
- [Connect Paid Memberships Pro to Sender](https://wpfusion.com/connect/connect-paid-memberships-pro-to-sender/)  \|
- [Connect Paid Memberships Pro to SendFox](https://wpfusion.com/connect/connect-paid-memberships-pro-to-sendfox/)  \|
- [Connect Paid Memberships Pro to Tubular](https://wpfusion.com/connect/connect-paid-memberships-pro-to-tubular/)  \|
- [Connect Paid Memberships Pro to User.com](https://wpfusion.com/connect/connect-paid-memberships-pro-to-user-com/)  \|
- [Connect Paid Memberships Pro to WP ERP](https://wpfusion.com/connect/connect-paid-memberships-pro-to-wp-erp/)  \|
- [Connect Paid Memberships Pro to Zoho](https://wpfusion.com/connect/connect-paid-memberships-pro-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/paid-memberships-pro/#overview)
- [Tagging](https://wpfusion.com/documentation/membership/paid-memberships-pro/#tagging)
- [Approvals](https://wpfusion.com/documentation/membership/paid-memberships-pro/#approvals)
- [Gift memberships](https://wpfusion.com/documentation/membership/paid-memberships-pro/#gift-memberships)
- [Syncing member data](https://wpfusion.com/documentation/membership/paid-memberships-pro/#syncing-member-data)
- [Additional meta fields](https://wpfusion.com/documentation/membership/paid-memberships-pro/#additional-meta-fields)
- [Abandoned cart tracking](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking)
- [Batch operations](https://wpfusion.com/documentation/membership/paid-memberships-pro/#batch-operations)

### You may also like

[![2474331 using wp fusion + paid memberships pro v2 100224](https://wpfusion.com/wp-content/uploads/2024/09/2474331_Using-WP-Fusion-Paid-Memberships-Pro-_v2_100224-300x158.jpg)](https://wpfusion.com/reviews/paid-memberships-pro-review/)

Reviews

![Jessica Kavalec-Miller](https://secure.gravatar.com/avatar/4e76056caa8ec553ba2fafd20efed7263899fac12dab8472f96d36043e7f225a?s=128&d=mm&r=g)

#### [Paid Memberships Pro Review + Creating a Successful Membership Site with WP Fusion](https://wpfusion.com/reviews/paid-memberships-pro-review/)

When you’re setting up your membership site, there are a lot of questions you’ll be asking yourself. What levels of membership should I create? How much should I charge? How frequently and in what ways should I engage with my users? The list goes on! All of this is really

[![Blue graphic with white text: Membership Plugins for WP Fusion. Surrounding the text are icons of various plugins, each with unique logos, on a blue background with dotted lines connecting them, symbolizing seamless CRM integration.](https://wpfusion.com/wp-content/uploads/2020/11/MembershipPluginsBlogImg-1-300x158.png)](https://wpfusion.com/reviews/best-membership-plugins-for-wp-fusion/)

Reviews

![Jack Arturo](https://secure.gravatar.com/avatar/684f089f623c6e008dec48b6e7bda186b448dc9668090c83d2a81b60a263bdc7?s=128&d=mm&r=g)

#### [Best Membership Plugins for WordPress (2025 edition)](https://wpfusion.com/reviews/best-membership-plugins-for-wp-fusion/)

We often get asked which plugins work best alongside WP Fusion for creating a membership site. While WP Fusion officially integrates with 21 different membership plugins, some work better than others. As well, different membership sites have different requirements in terms of how transactions are processed, groups (or umbrella accounts),

[![illustration of a wordpress dashboard with icons for users, wp fusion, and social sharing, highlighting website management, user registration options, and community features on a light blue background.](https://wpfusion.com/wp-content/uploads/2025/08/user-registration-wordpress-1-300x158.jpg)](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

Tutorials

![Jessica Kavalec-Miller](https://secure.gravatar.com/avatar/4e76056caa8ec553ba2fafd20efed7263899fac12dab8472f96d36043e7f225a?s=128&d=mm&r=g)

#### [Four User Registration Options in WordPress and How to Integrate them with WP Fusion](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

If you’re new to establishing your online presence with your website, having user registration capabilities is a step forward in the right direction.

In this post, we’ll go over what user registration is and its benefits, and how you can enable it on your website using no plugins or with

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