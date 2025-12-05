---
url: "https://wpfusion.com/documentation/membership/memberpress/"
title: "Connect MemberPress to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/memberpress/#content)

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

# MemberPress

- Published onNovember 27, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- MemberPress

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#overview) Overview

WP Fusion provides a bi-drectional integration between [MemberPress](https://wpfusion.com/go/memberpress) and any one of [50+ supported CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

When a user checks out on your MemberPress site, their contact details will automatically be added to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/), including support for custom fields.

WP Fusion also supports applying tags in your CRM based on each member’s membership level and subscription status.

As well, WP Fusion can automatically import users from contact records in your CRM and auto-assign membership levels based on tags.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#tagging) Tagging

When configuring a membership level, you can click on the WP Fusion tab to configure any tags you’d like applied when the membership is purchased and when subscription and transaction statuses change.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-3-680x1024.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-3.jpg)

There are quite a few settings here (twelve in total):

- **Apply Tags:** When the customer purchases a membership, these tags will be applied in your CRM. These tags will also be re-applied when an expired membership becomes active again, or if a renewal payment is received and the user no longer has the tags.
- **Remove Tags:** When this setting is checked, the tags applied at registration will be removed when a membership expires or is changed to a different level. The tags applied at registration will be re-applied if the membership is resumed.
- **Link With Tag:** _See below_
- **Apply Tags – Subscription Cancelled:** These tags will be applied immediately when a subscription is cancelled by an admin or a user (even if there is time left in the subscription). They will be removed if the membership is resumed.
- **Apply Tags – Subscription Paused:** These tags will be applied when a subscription is paused. They will be removed when the subscription is reactivated.
- **Apply Tags – Subscription Resumed:** These tags will be applied when a paused subscription is reactivated.
- **Apply Tags – Upgraded:** These tags will be applied when a member upgrades to _this_ membership level.
- **Apply Tags – Downgraded:** These tags will be applied when a member downgrades to _this_ membership level.
- **Apply Tags – Subscription Payment Failed:** These tags will be applied when a payment fails as part of a recurring transaction. They will be removed if a successful payment is made later.
- **Apply Tags – Trial** **:** These tags will be applied when someone signs up for a subscription with a trial period.
- **Apply Tags – Subscription Converted** **:** These tags will be applied when a trial converts to a full subscription (i.e. when a transaction is recorded on the subscription after the trial has ended).
- **Apply Tags – Transaction Refunded:** These tags will be applied when a transaction is refunded.
- **Apply Tags – Transaction Expired:** These tags will be applied when a transaction expires, including when a cancelled subscription reaches the end of its billing cycle. They will be removed if the membership is resumed.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#link-with-tag-membership-auto-enrollment) Link with Tag / Membership Auto-enrollment

Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes _linked_ with the membership level.

If this tag is applied to a user they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership.

This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

When WP Fusion detects that the linked tag has been applied, a free transaction will be created in MemberPress in order to grant access to the membership. When the linked tag is removed the original transaction will be deleted.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#a-note-on-membership-level-changes) A note on membership level changes

With most of WP Fusion’s membership plugin integrations (like [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/) or [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/)), WP Fusion watches for a membership level change for a user, and applies the specified tags at that time.

MemberPress is a bit different in that by default, it supports [multiple memberships](https://memberpress.com/blog/membership-multiplicity/). That means that a user isn’t “at” one membership level. Instead, when they try to access something, MemberPress looks at their history of transactions and subscriptions and determines in real time whether the member has the necessary permissions.

This gives you a lot more flexibility than a “traditional” membership plugin, but it can make WP Fusion hard to work with because tag changes aren’t necessary tied to membership level changes.

As an example, let’s say a member is a _Premium Member_, and their access expires so they revert to a _Free Member_. In this case, the _Apply Tags – Transaction Expired_ tags will be applied for the _Premium Member_ level, but no tags from the _Free Member_ level will be applied.

That’s because the customer didn’t actually make a purchase, register, or start a new subscription on the _Free Member_ membership— it’s just the level they have when no other level is taking priority.

With that in mind, it’s helpful to understand exactly when WP Fusion can apply tags and sync member data:

- When a member signs up for a new account at a membership level
- When a subscription status changes (to/from `active`, `cancelled`, and `suspended`)
- When a recurring transaction fails
- When a transaction expires (usually when a subscription isn’t renewed and the access period ends)
- When a transaction is made to upgrade a subscription
- When a transaction is made to downgrade a subscription

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#concurrent-subscriptions) Concurrent subscriptions

To prevent a customer from potentially losing access to purchased products, WP Fusion handles concurrent subscriptions in two ways:

- If a customer’s subscription is canceled and they still have another active subscription to the same membership, the status change will be ignored.
- If a customer’s subscription is canceled, put on hold, or expired, and Remove Tags is checked on the membership, WP Fusion will first check their other active memberships to see if they apply the same tags. Any tags applied by memberships where the customer still has an active subscription will not be removed.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#corporate-accounts) Corporate Accounts

WP Fusion also supports the [Corporate Accounts addon](https://memberpress.com/add-ons/corporate-accounts/) for MemberPress. When this addon is detected a new setting will appear at the bottom of the WP Fusion settings when editing any membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-corporate-accounts-1-1024x512.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-corporate-accounts-1.jpg)

Here you can specify tags to be applied to members who are added as sub-accounts to the corporate account.

You can check the **Remove tags** checkbox to have the selected tags automatically removed from sub-account members if the parent membership is cancelled.

In addition to applying tags, you can also sync the email address of the corporate account parent to the contact record for new sub-accounts, by enabling the **Corporate Account Parent Email** field for sync from the Contact Fields settings.

This can be used to quickly identify the account parent while looking at a sub-account’s contact record in your CRM.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#transaction-management) Transaction management

When editing any MemberPress transaction in the admin, you will see a section indicating that transaction’s status with WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-single-transaction-wpf-details-1024x551.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-single-transaction-wpf-details.jpg) WP Fusion adds a section to your MemberPress transaction details with links to the member’s record in your CRM, and invoice ID (when using Enhanced Ecommerce).

The meta box will show whether or not the transaction was processed by WP Fusion, and the customer’s contact ID in your CRM.

If you’re using the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) you will also see the corresponding invoice ID (or order ID) in your CRM’s sales pipeline.

To manually process a transaction again (for example to fix an invalid field value), click the **Process WP Fusion actions again** button.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#transaction-status-column) Transaction status column

WP Fusion adds a status column to the MemberPress transactions table. Hovering over the icon will display a tooltip which tells you when the order was processed by WP Fusion, and also gives you a link to view the customer’s contact record in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transactions-list-1024x499.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transactions-list-scaled.jpg)

The icon can change colors depending on the status of the sync with your CRM:

- If the icon is orange, the transaction was fully processed by WP Fusion.
- If the icon is grey, the transaction was not processed by WP Fusion
- If the icon is half-filled, this means that a contact record was created, but the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) didn’t successfully process the order.

If you don’t want to see transaction sync statuses in the table, you can disable it by un-checking the **WP Fusion Status** checkbox in the Screen Options menu at the top of the page.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#coupons) Coupons

WP Fusion also allows to to apply tags to the new contact when a specific coupon is used at checkout.

![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-coupons-1024x257.jpg)

You’ll see the new settings box when editing any MemberPress coupon.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#syncing-memberpress-fields) Syncing MemberPress fields

With MemberPress installed, you’ll see additional fields under the MemberPress section in the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-fields-1-1024x693.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-fields-1.jpg)

Here you will see all of the standard MemberPress registration fields, **as well as any custom registration fields or profile fields**.

**Note:** With multiselect and multi-checkbox custom fields, WP Fusion will sync the selected option labels by default. If your CRM supports multiselect fields with separate label and value properties, you can change the field type to _multiselect (values)_ in the field type dropdown in the [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

Each field can be synced to your CRM by selecting a corresponding custom field in the dropdown in the right column.

In addition to the standard fields, WP Fusion can sync several pseudo-fields relevant to a member’s membership level. Those are:

- **Membership Level Name:** The name of the current membership level (if users have multiple memberships this will be the name of the most recent membership).
- **Membership Status:** This will be either `Active`, `Inactive`, or `None` based on the member’s current subscriptions and transactions.
- **Subscription Status:** This will be either `pending`, `active`, `suspended`, or `cancelled` and will be synced whenever a subscription’s status changes.
- **Subscription Total:** The recurring subscription total.
- **Transaction Status:** This will be either `pending`, `complete`, `failed`, or `refunded` and will be synced whenever a transaction is created or its status changes.
- **Transaction Number:** The transaction number, for example `mp-txn-64c1239786f80` or `bbapp_3MYV2vH1J3FRLhcC1DGUMHEu`
- **Transaction Total:** The transaction total.
- **Order Total:** This will be the total amount of the member’s most recent transaction.
- **Registration Date:** The date of the member’s most recent subscription or transaction.
- **Expiration Date:** The membership’s expiration date, or scheduled renewal date in the case of subscriptions. Will be updated with each renewal payment.
- **Trial Duration (days):** If a subscription is purchased with a free trial, the number of days in the trial will be synced.
- **Payment Method:** The name of the payment method used for the member’s most recent transaction.
- **Coupon Used:** If the member signed up with a coupon, the name of the coupon will be synced.
- **Total Spent:** The member’s lifetime value.

By syncing this data to your CRM you can trigger email sequences to follow up with a member as their expiration date is approaching, or create rewards for members who have been with you for a long time.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#syncing-fields-on-a-per-product-basis) Syncing fields on a per-product basis

You can also map membership-related fields to separate custom fields in your CRM on a per-product basis. This can be configured on the WP Fusion Fields tab when editing any membership product.

[![screenshot of a membership options settings page showing fields like membership level, status, registration date, subscription status, transaction total, payment method, and more, with dropdowns for selection under wp fusion fields tab.](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-product-fields-1024x813.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-product-fields.jpg)

This feature allows you to keep track of start dates, expiration dates, and other membership details even when users have multiple concurrent memberships.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#memberpress-courses) MemberPress Courses

WP Fusion supports applying tags to your CRM based on a member’s progress in a course with MemberPress Courses.

While editing any course, lesson, or quiz, you will see the WP Fusion settings alongside the MemberPress access settings for the content.

![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-screenshot-1.jpg)WP Fusion settings on MemberPress courses.![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-lesson-feature-screenshot.jpg)WP Fusion settings on MemberPress lessons.![](https://wpfusion.com/wp-content/uploads/2023/06/mpcs-quiz-feature-screenshot.jpg)WP Fusion settings on MemberPress quizzes.

The available settings are are:

- **Course Complete:** Applies the selected tag(s) when the course is completed.
- **Lesson Complete:** Applies the selected tag(s) when the lesson is completed.
- **Quiz Pass:** Applies the selected tag(s) when the member scores 50% or higher on the quiz.
- **Quiz Fail:** Applies the selected tag(s) when the member scores less than 50% on the quiz.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#abandoned-cart-tracking) Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the MemberPress checkout form and sync them to your CRM before checkout has been completed.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With MemberPress, cart abandonment tags can be set on the WP Fusion tab when editing any membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-1024x634.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#general-settings) General settings

With MemberPress you also have the option to delay WP Fusion’s abandoned cart actions until after the first step of the checkout has been submitted.

This can be enabled by selecting **Trigger on Submit** at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

[![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings-1024x203.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings.jpg)

This is designed to fix situations where a user’s browser might autofill an incorrect email address on the checkout, which then triggers the abandoned cart actions.

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#enhanced-ecommerce) Enhanced Ecommerce

WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) (available to Plus and Professional license holders) can sync MemberPress transactions to [supported CRMs and email marketing platforms](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/).

[![](https://wpfusion.com/wp-content/uploads/2023/07/MemberPress-transactions-Drip.png)](https://wpfusion.com/wp-content/uploads/2023/07/MemberPress-transactions-Drip.png) MemberPress transctions are shown in the Drip subscriber’s orders feed

With MemberPress, the Ecommerce Addon will send enhanced ecommerce data for all transactions, including recurring subscription payments.

**Note:** If you wish to disable syncing free transactions with your CRM (for example, a membership that is automatically granted to all users at registration), check the box for **Ignore Free Transactions** at Settings » WP Fusion » Enhanced Ecommerce.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#products) Products

In CRMs that have Products as separate entities from Orders, you can associate your MemberPress membership products with CRM products by selecting them from the product dropdown while editing the membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-ecom-1024x549.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-ecom-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#sales-pipelines) Sales pipelines

With CRMs that support sales pipelines, like Brevo, HighLevel, HubSpot and Zoho, you can also map MemberPress transaction statuses with individual pipelines and stages.

This can be found under the [Enhanced Ecommerce settings](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/).

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transaction-statuses-1024x463.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-transaction-statuses.jpg) Map MemberPress transaction statuses to HubSpot pipelines with WP Fusion.

When the transaction status is updated in MemberPress, the deal stage will be updated in your CRM.

#### [\#](https://wpfusion.com/documentation/membership/memberpress/\#supported-platforms) Supported platforms

The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)

### [\#](https://wpfusion.com/documentation/membership/memberpress/\#batch-operations) Batch Operations

WP Fusion includes a few MemberPress-specific batch operations, these can be found on the Advanced tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-batch-ops-1024x521.jpg)](https://wpfusion.com/wp-content/uploads/2016/11/memberpress-batch-ops-scaled.jpg)

These are useful for syncing member data to your CRM from before you installed WP Fusion, or to retroactively tag all your members based on the current tag configuration.

The available options are:

- **MemberPress subscription data:** Syncs the registration date, expiration date, and membership level name for all existing MemberPress subscriptions. Does not modify tags or create new contact records.
- **MemberPress transaction data:** Syncs the registration date, expiration date, payment method, and membership level name for all existing MemberPress transactions. Does not modify tags or create new contact records.
- **MemberPress memberships statuses:** Updates the tags for all members based on their current membership status. Does not create contact records.
- **MemberPress transactions (Ecommerce addon):** With the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#memberpress), this operation syncs historical transactions as orders (or deals, invoices, etc.) to your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect MemberPress to ActiveCampaign](https://wpfusion.com/connect/connect-memberpress-to-activecampaign/)  \|
- [Connect MemberPress to AgileCRM](https://wpfusion.com/connect/connect-memberpress-to-agilecrm/)  \|
- [Connect MemberPress to Autopilot](https://wpfusion.com/connect/connect-memberpress-to-autopilot/)  \|
- [Connect MemberPress to Bento](https://wpfusion.com/connect/connect-memberpress-to-bento/)  \|
- [Connect MemberPress to BirdSend](https://wpfusion.com/connect/connect-memberpress-to-birdsend/)  \|
- [Connect MemberPress to Brevo](https://wpfusion.com/connect/connect-memberpress-to-brevo/)  \|
- [Connect MemberPress to Capsule](https://wpfusion.com/connect/connect-memberpress-to-capsule/)  \|
- [Connect MemberPress to Constant Contact](https://wpfusion.com/connect/connect-memberpress-to-constant-contact/)  \|
- [Connect MemberPress to ConvertKit](https://wpfusion.com/connect/connect-memberpress-to-convertkit/)  \|
- [Connect MemberPress to ConvesioConvert](https://wpfusion.com/connect/connect-memberpress-to-convesioconvert/)  \|
- [Connect MemberPress to Copper](https://wpfusion.com/connect/connect-memberpress-to-copper/)  \|
- [Connect MemberPress to Customer.io](https://wpfusion.com/connect/connect-memberpress-to-customer-io/)  \|
- [Connect MemberPress to Customerly](https://wpfusion.com/connect/connect-memberpress-to-customerly/)  \|
- [Connect MemberPress to Drip](https://wpfusion.com/connect/connect-memberpress-to-drip/)  \|
- [Connect MemberPress to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-memberpress-to-dynamics-365-marketing/)  \|
- [Connect MemberPress to EmailOctopus](https://wpfusion.com/connect/connect-memberpress-to-emailoctopus/)  \|
- [Connect MemberPress to EngageBay](https://wpfusion.com/connect/connect-memberpress-to-engagebay/)  \|
- [Connect MemberPress to Flexie](https://wpfusion.com/connect/connect-memberpress-to-flexie/)  \|
- [Connect MemberPress to FluentCRM](https://wpfusion.com/connect/connect-memberpress-to-fluentcrm/)  \|
- [Connect MemberPress to FunnelKit](https://wpfusion.com/connect/connect-memberpress-to-funnelkit/)  \|
- [Connect MemberPress to Gist](https://wpfusion.com/connect/connect-memberpress-to-gist/)  \|
- [Connect MemberPress to Groundhogg](https://wpfusion.com/connect/connect-memberpress-to-groundhogg/)  \|
- [Connect MemberPress to HighLevel](https://wpfusion.com/connect/connect-memberpress-to-highlevel/)  \|
- [Connect MemberPress to HubSpot](https://wpfusion.com/connect/connect-memberpress-to-hubspot/)  \|
- [Connect MemberPress to Infusionsoft](https://wpfusion.com/connect/connect-memberpress-to-infusionsoft/)  \|
- [Connect MemberPress to Intercom](https://wpfusion.com/connect/connect-memberpress-to-intercom/)  \|
- [Connect MemberPress to Jetpack CRM](https://wpfusion.com/connect/connect-memberpress-to-jetpack-crm/)  \|
- [Connect MemberPress to Kartra](https://wpfusion.com/connect/connect-memberpress-to-kartra/)  \|
- [Connect MemberPress to Keap](https://wpfusion.com/connect/connect-memberpress-to-keap/)  \|
- [Connect MemberPress to Klaviyo](https://wpfusion.com/connect/connect-memberpress-to-klaviyo/)  \|
- [Connect MemberPress to KlickTipp](https://wpfusion.com/connect/connect-memberpress-to-klicktipp/)  \|
- [Connect MemberPress to Loopify](https://wpfusion.com/connect/connect-memberpress-to-loopify/)  \|
- [Connect MemberPress to MailChimp](https://wpfusion.com/connect/connect-memberpress-to-mailchimp/)  \|
- [Connect MemberPress to MailerLite](https://wpfusion.com/connect/connect-memberpress-to-mailerlite/)  \|
- [Connect MemberPress to Mailjet](https://wpfusion.com/connect/connect-memberpress-to-mailjet/)  \|
- [Connect MemberPress to MailPoet](https://wpfusion.com/connect/connect-memberpress-to-mailpoet/)  \|
- [Connect MemberPress to Maropost](https://wpfusion.com/connect/connect-memberpress-to-maropost/)  \|
- [Connect MemberPress to Mautic](https://wpfusion.com/connect/connect-memberpress-to-mautic/)  \|
- [Connect MemberPress to NationBuilder](https://wpfusion.com/connect/connect-memberpress-to-nationbuilder/)  \|
- [Connect MemberPress to Omnisend](https://wpfusion.com/connect/connect-memberpress-to-omnisend/)  \|
- [Connect MemberPress to Ontraport](https://wpfusion.com/connect/connect-memberpress-to-ontraport/)  \|
- [Connect MemberPress to Ortto](https://wpfusion.com/connect/connect-memberpress-to-ortto/)  \|
- [Connect MemberPress to Pipedrive](https://wpfusion.com/connect/connect-memberpress-to-pipedrive/)  \|
- [Connect MemberPress to Platformly](https://wpfusion.com/connect/connect-memberpress-to-platformly/)  \|
- [Connect MemberPress to Quentn](https://wpfusion.com/connect/connect-memberpress-to-quentn/)  \|
- [Connect MemberPress to Salesflare](https://wpfusion.com/connect/connect-memberpress-to-salesflare/)  \|
- [Connect MemberPress to Salesforce](https://wpfusion.com/connect/connect-memberpress-to-salesforce/)  \|
- [Connect MemberPress to Sender](https://wpfusion.com/connect/connect-memberpress-to-sender/)  \|
- [Connect MemberPress to SendFox](https://wpfusion.com/connect/connect-memberpress-to-sendfox/)  \|
- [Connect MemberPress to Tubular](https://wpfusion.com/connect/connect-memberpress-to-tubular/)  \|
- [Connect MemberPress to User.com](https://wpfusion.com/connect/connect-memberpress-to-user-com/)  \|
- [Connect MemberPress to WP ERP](https://wpfusion.com/connect/connect-memberpress-to-wp-erp/)  \|
- [Connect MemberPress to Zoho](https://wpfusion.com/connect/connect-memberpress-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/memberpress/#overview)
- [Tagging](https://wpfusion.com/documentation/membership/memberpress/#tagging)
- [Link with Tag / Membership Auto-enrollment](https://wpfusion.com/documentation/membership/memberpress/#link-with-tag-membership-auto-enrollment)
- [A note on membership level changes](https://wpfusion.com/documentation/membership/memberpress/#a-note-on-membership-level-changes)
- [Concurrent subscriptions](https://wpfusion.com/documentation/membership/memberpress/#concurrent-subscriptions)
- [Corporate Accounts](https://wpfusion.com/documentation/membership/memberpress/#corporate-accounts)
- [Transaction management](https://wpfusion.com/documentation/membership/memberpress/#transaction-management)
- [Transaction status column](https://wpfusion.com/documentation/membership/memberpress/#transaction-status-column)
- [Coupons](https://wpfusion.com/documentation/membership/memberpress/#coupons)
- [Syncing MemberPress fields](https://wpfusion.com/documentation/membership/memberpress/#syncing-memberpress-fields)
- [Syncing fields on a per-product basis](https://wpfusion.com/documentation/membership/memberpress/#syncing-fields-on-a-per-product-basis)
- [MemberPress Courses](https://wpfusion.com/documentation/membership/memberpress/#memberpress-courses)
- [Abandoned cart tracking](https://wpfusion.com/documentation/membership/memberpress/#abandoned-cart-tracking)
- [General settings](https://wpfusion.com/documentation/membership/memberpress/#general-settings)
- [Enhanced Ecommerce](https://wpfusion.com/documentation/membership/memberpress/#enhanced-ecommerce)
- [Products](https://wpfusion.com/documentation/membership/memberpress/#products)
- [Sales pipelines](https://wpfusion.com/documentation/membership/memberpress/#sales-pipelines)
- [Supported platforms](https://wpfusion.com/documentation/membership/memberpress/#supported-platforms)
- [Batch Operations](https://wpfusion.com/documentation/membership/memberpress/#batch-operations)

### You may also like

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