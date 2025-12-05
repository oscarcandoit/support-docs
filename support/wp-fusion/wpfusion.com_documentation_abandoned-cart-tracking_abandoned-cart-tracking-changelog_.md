---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/"
title: "Abandoned Cart Tracking Changelog | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/#content)

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

# Abandoned Cart Tracking Changelog

- Published onJune 12, 2018
- Last updated on May 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- Abandoned Cart Tracking Changelog

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-7) 2.0.7 - 8/26/2025

- ✨ New Added support for CheckoutWC
- 🔧 Fixed Fixed abandoned cart tags not being applied with MemberPress when using the Abandoned Cart Delay option
- 🔧 Fixed Fixed fatal error auto-applying WooCommerce coupons during an auto-login session if loading the user's tags resulted in an API error

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-6) 2.0.6 - 3/10/2025

- ⚡️ Improved When recovering a cart with EDD, the ?wpfrc= query var will be removed from the URL and the user will be redirected to properly set up the session
- 🔧 Fixed Fixed "Undefined array key 0" warning when syncing shipping methods with WooCommerce and WooCommerce Multivendor Marketplace
- 🔧 Fixed Fixed warning `Undefined array key "mepr_product_id"` when saving MemberPress carts
- 🔧 Fixed Fixed some rare cases where a cart would get saved without an email address, WP Fusion would try to process it every 15 minutes
- 🔧 Fixed Fixed error "Object of class stdClass could not be converted to string" with Paid Memberships Pro when logged in users switched memberships
- 🛠️ Dev Added `wpf_abandoned_cart_saved` action hook

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-5) 2.0.5 - 10/15/2024

- 🔧 Fixed Fixed abandoned cart tags not applying for WooCommerce guest checkouts since 2.0.4

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-4) 2.0.4 - 10/2/2024

- ✨ New Added support for syncing shipping total and method with WooCommerce and ActiveCampaign
- ✨ New Added support for recovering discounts that were applied to the WooCommerce cart, when the recovery link is visited
- ⚡️ Improved If the cart recovery URL isn't enabled for sync, and the CRM doesn't support cart recovery, no pending cart will be saved to the database
- ⚡️ Improved If a logged in Paid Memberships Pro member reaches the checkout and doesn't have a saved contact ID, an API call will be made to look up their contact ID in the CRM
- 🔧 Fixed Fixed multiple coupons on a WooCommerce cart being each being synced with the total cart discount, instead of their individual discount amounts

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-3) 2.0.3 - 8/26/2024

- ✨ New Added cart product name(s) as an available field for sync
- ⚡️ Improved Abandoned cart tags will now be removed after every successful checkout, even if the current cart was not yet considered abandoned
- ⚡️ Improved If creating a contact fails when using the delay option, the cart will be deleted instead of retried
- ⚡️ Improved Declared compatibility with the WooCommerce block-based checkout to avoid "Incompatible plugin" notices in the admin
- 🔧 Fixed Fixed uncaught error if adding a contact to the CRM failed during the initial abandoned cart sync
- 🔧 Fixed Fixed fatal error recovering EDD carts when multiple discounts were applied
- 🔧 Fixed Fixed broken link to the Abandoned Cart documentation on the WP Fusion website

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-2) 2.0.2 - 7/18/2024

- ⚡️ Improved Now supports custom email fields on the WooCommerce (classic) checkout, instead of just "billing\_email"
- 🔧 Fixed Fixed unhandled error when processing abandoned carts using the delay option, if the API call to create a contact failed
- 🔧 Fixed Fixed fatal error "Call to member function get\_cart() on null" when logging in over the REST API

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-1) 2.0.1 - 6/3/2024

- ⚡️ Improved Registered users that have their carts synced after a delay will now have their user ID recorded to the logs
- 🔧 Fixed Fixed fatal error "Uncaught Error: Call to a member function get\_cart() on null" when editing posts in the admin with the block editor, since 2.0.0

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#2-0-0) 2.0.0 - 5/31/2024

- **Heads up! This is a major update! We have tested it thorughly but there may still be gremlins. Please [contact support](https://wpfusion.com/contact/) if you run into any issues.**
- Major refactor and standardization of all integrations
- ✨ New Added support for [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking)
- ✨ New Added support for delaying the sync of contact data, tags, and cart data for a specified number of minutes. If the customer completes their purchase in the meantime, no abandoned cart data will be synced.
- ✨ New Added support for the block-based checkout in WooCommerce
- ✨ New Added a metabox showing the cart contents of the saved cart post type
- 🔧 Fixed Fixed ActiveCampaign error "The ecomOrder with externalcheckoutid already exists in the system" when an existing checkout session started checkout a second time
- 🔧 Fixed Fixed error "Call to a member function get() on null" when calling woocommerce\_form\_field() outside of the WooCommerce checkout (i.e. on the Account page registration form)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-9-0) 1.9.0 - 5/6/2024

- ✨ New Added option to delay sending any abandoned cart details to the CRM until after a delay period (experimental, currently just for WooCommerce)
- ✨ New Added option to enable progressive updates with the WooCommerce checkout fields (previously it was on by default)
- ✨ New Added Requires Plugins header for WordPress 6.5
- ⚡️ Improved High Performance Order Storage for WooCommerce is now declared regardless of whether or not WP Fusion has been connected to the CRM
- ⚡️ Improved With WooCommerce, no cart data will be sent until at least a first name and email have been entered on the checkout
- 🔧 Fixed Fixed Drip and ActiveCampaign integrations not sending the correct order totals when the Cart Value field was not enabled for sync (cart value was not being recalculated early enough)
- 🔧 Fixed Fixed deprecated use of `get_page_by_title()`
- 🔧 Fixed Fixed errors related to visiting a cart recovery URL inside the WordPress admin

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-8-0) 1.8.0 - 6/30/2023

- ⚡️ Improved Guest sessions will now be tracked in WooCommerce's session storage, and cart updates can sync in real time to the CRM (ActiveCampaign or Drip) when cart contents are modified (previously this only worked for registered users)
- ⚡️ Improved If a user registers or logs in and has items in their cart, and Trigger on Add to Cart is enabled, the cart contents will be synced at that time
- ⚡️ Improved If a WooCommerce cart is completely emptied, the corresponding Deep Data cart will be deleted in ActiveCampaign
- 🔧 Fixed Fixed abandoned cart tags not being removed after a MemberPress customer had signed up for a new free trial
- 🔧 Fixed Fixed PHP warning `Undefined array key "line_subtotal"` with free WooCommerce products

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-7-4) 1.7.4 - 2/20/2023

- ✨ New Added support for [WooCommerce High Performance Order Storage](https://woocommerce.wordpress.com/2021/03/02/high-performance-order-storage-in-woocommerce-5-5/)
- ⚡️ Improved The checkout scripts will now wait 5 seconds before watching inputs for changes, to prevent auto-filled customer data from being synced
- ⚡️ Improved The `email_optin` field will no longer be synced with the abandoned cart data
- ⚡️ Improved The Trigger On Submit option with MemberPress is now disabled when using Single Page Checkout
- 🔧 Fixed Fixed abandoned carts not syncing with MemberPress Single Page Checkout
- 🔧 Fixed Fixed abandoned cart tags not applying when MemberPress checkout forms were embedded in other pages

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-7-3) 1.7.3 - 11/1/2022

- Tested for WordPress 6.1.0
- ⚡️ Improved If a registered user completes checkout and doesn't have abandoned cart tags, they will be removed directly from the CRM. This fixes an issue whereby if someone completed checkout before the API calls had finished processing to apply the tags, then the tags wouldn't be removed.
- ⚡️ Improved Improved handling for "Could not process request: Duplicate entry" errors with ActiveCampaign
- ⚡️ Improved Product descriptions will now use the Short Description field instead of the excerpt
- ⚡️ Improved Moved cart storage to postmeta instead of post content (fixes a weird infinite loop issue with Divi and `wp_insert_post()`)
- 🔧 Fixed Fixed infinite loop error when using Divi to build a checkout page with FunnelKit (WooFunnels)
- 🔧 Fixed Fixed variable price settings not displaying in Easy Digital Downloads since EDD 3.0
- 🔧 Fixed Fixed carts not being updated in the CRM when a logged-in user updated a cart item quantity
- 🔧 Fixed Fixed PHP warning `Undefined array key 0` in EDD integration when checking out with a license renewal discount

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-7-2) 1.7.2 - 2/7/2022

- ✨ New Added option to trigger MemberPress abandoned cart actions only when the first checkout step has been submitted
- ⚡️ Improved If the cart total is updated on the WooCommerce cart page it will be synced to the CRM (for logged in users)
- ⚡️ Improved Cart updates on the checkout page (i.e. via WooFunnels, CartFlows, etc) will now trigger a sync of the updated cart total to the CRM
- 🔧 Fixed Fixed notice `WP_Scripts::localize was called incorrectly`

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-7-1) 1.7.1 - 1/6/2022

- ⚡️ Improved Will now try to remove malformed `utm_*` variables that may have gotten appended to the cart recovery link by the ESP, and are preventing the contact ID from being read
- 🔧 Fixed Fixed cached carts being publicly queryable on the frontend
- 🔧 Fixed Fixed fatal error resulting from unhandled WP\_Error when the initial contact creation failed
- Tested for WooCommerce 6.0.0

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-7-0) 1.7.0 - 7/2/2021

- Moved cart storage out of transients and into a custom post type
- ✨ New Added support for auto-applied discounts with EDD when using cart recovery URLs
- ⚡️ Improved Abandoned cart tracking at checkout will also identify the visitor to site tracking scripts with supported CRMs
- ⚡️ Improved Cart recovery links with WooCommerce and EDD will identify the visitor to site tracking scripts with supported CRMs
- 🔧 Fixed Fixed Sendinblue contacts with + symbols in their email address not working with cart recovery URLs
- 🔧 Fixed Fixed errors recovering carts when both WooCommerce and Easy Digital Downloads are active at the same time

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-8) 1.6.8 - 5/28/2021

- 🔧 Fixed Fixed cart recovery not working with WooCommerce 5.2.x
- 🔧 Fixed Fixed errors when WP Fusion wasn't connected to a CRM

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-7) 1.6.7 - 3/10/2021

- ✨ New Added support for syncing cart discounts to ActiveCampaign (Deep Data) from Easy Digital Downloads and WooCommerce
- ✨ New Added Cart Discount Code and Cart Discount Amount fields for sync
- ✨ New Added wpf\_abandoned\_cart\_apply\_tags filter
- ✨ New Added wpf\_abandoned\_cart\_data filter
- ⚡️ Improved Cart fields have been moved to the Contact Fields settings tab
- EDD cart recovery will now restore cart discounts, fees, and the selected payment gateway
- EDD cart recovery will now pre-fill customer information

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-6) 1.6.6 - 2/22/2021

- ⚡️ Improved customer\_id created by an ActiveCampaign cart will now be passed to the Enhanced Ecommerce addon at checkout
- 🔧 Fixed Fixed error adding products to cart with ActiveCampaign and Deep Data categories being generated from product attributes
- 🔧 Fixed Fixed Easy Digital Downloads cart tracking not working when only one payment gateway was active
- 🔧 Fixed Fixed fatal error activating the Abandoned Cart addon with WP Fusion Lite

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-5) 1.6.5 - 1/8/2021

- ✨ New Added download image URL to cart data with Easy Digital Downloads
- ✨ New Added product description to cart data with Easy Digital Downloads and WooCommerce

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-4) 1.6.4 - 9/28/2020

- ⚡️ Improved Improved pre-filling the checkout fields when using the recovery link
- 🔧 Fixed Fixed compatibility bug with WP Multilang
- 🔧 Fixed Fixed some bugs when syncing a cart during an active auto-login session
- Updated for tags select compatibility with WP Fusion 3.35

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-3) 1.6.3 - 8/11/2020

- 🔧 Fixed Fixed abandoned cart actions not running when EDD payment gateway was changed
- ✨ New Added .pot file

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-2) 1.6.2 - 5/11/2020

- 🔧 Fixed Fixed fatal error with EDD getting cart recovery URL

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6-1) 1.6.1 - 4/28/2020

- 🔧 Fixed Fixed cart recovery URL not working with CRMs without cart support

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-6) 1.6 - 4/22/2020

- ✨ New Added LifterLMS abandoned cart tracking
- ✨ New Added Sync Carts support for Easy Digital Downloads
- ActiveCampaign integration will now update an existing cart if one exists instead of creating a new one
- 🔧 Fixed Fixed MemberPress trying to sync carts during WooCommerce checkout
- 🔧 Fixed Fixed MemberPress assigning an empty tag if no abandoned cart tag was specified

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-5-4) 1.5.4 - 2/24/2020

- ✨ New Added support for currencies other than USD with ActiveCampaign Deep Data
- 🔧 Fixed Fixed cart recovery links not restoring variation IDs

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-5-3) 1.5.3 - 2/17/2020

- ✨ New Added per-product abandoned cart tagging to MemberPress
- ✨ New Added option to sync selected product attributes to categories in Drip
- WooCommerce integration will now inherit store settings regarding product prices being inclusive vs exclusive of tax
- 🔧 Fixed Fixed MemberPress abandoned cart tags not being applied to logged in users

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-5-2) 1.5.2 - 1/23/2020

- ✨ New Added Deep Data / Shopper Activity support for MemberPress abandoned cart tracking
- 🔧 Fixed Fixed not detecting email field properly on some MemberPress checkouts

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-5-1) 1.5.1 - 11/20/2019

- 🔧 Fixed Fixed time zone calculation in ActiveCampaign cart data

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-5) 1.5 - 11/11/2019

- ✨ New Added MemberPress integration
- ✨ New Added support for WooCommerce product variations in cart data with Drip and ActiveCampaign
- ✨ New Added option to send prices tax-inclusive with WooCommerce
- 🔧 Fixed Fixed time zone calculation for occurred\_at with Drip
- 🔧 Fixed Fixed tags not applying for guest checkouts with EDD

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-4-1) 1.4.1 - 9/19/2019

- ✨ New Added option to select cart image size for Drip and ActiveCampaign
- ✨ New Added progressive updates for checkout form data

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-4) 1.4 - 6/12/2019

- ✨ New Added Deep Data Abandoned Cart support for ActiveCampaign
- ✨ New Added support for auto-applied coupons during cart recovery
- Recovered abandoned carts will now pre-fill the name and email address at checkout
- 🔧 Fixed Fixed Drip Shopper Activity cart recovery URL not syncing if URL was also being sent to a custom field

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-3-1) 1.3.1 - 6/4/2019

- 🔧 Fixed Fixed product variations breaking Shopper Activity abandoned carts with Drip

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-3) 1.3 - 4/22/2019

- ✨ New Added Shopper Activity API support for Drip
- ✨ New Added option to change the cart recovery URL destination

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-2) 1.2 - 4/16/2019

- ✨ New Added option for syncing total cart value to a custom field

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-1) 1.1 - 3/18/2019

- 🔧 Fixed Fixes for tags sometimes not applying when "On Add to Cart" setting was enabled
- Abandoned cart async actions will only run once per checkout form

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#1-0) 1.0 - 1/25/2019

- Fallback for when product ID isn't present on variation cart items
- 🔧 Fixed Fix for sending cart recovery URL for logged in users

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-9) 0.9 - 9/23/2018

- Bugfixes

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-8) 0.8 - 9/22/2018

- Updated WooCommerce settings storage

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-7) 0.7 - 8/16/2018

- ✨ New Added cart recovery URL for WooCommerce

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-6) 0.6 - 12/22/2017

- ✨ New Added abandoned cart tags for Woo / EDD product variations

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-5) 0.5

- 🔧 Fixed Fixed issues where sometimes duplicate contacts would be created

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-4) 0.4

- Compatibility updates for WPF v3.3
- WooCommerce 3.0 fixes

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-3) 0.3

- 🔧 Fixed Fixed checkout errors

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-2) 0.2

- ✨ New Added support for per-product tagging
- ✨ New Added option to apply tags on Add To Cart for logged in users

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/\#0-1) 0.1

- Initial release

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Plus

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

### In this chapter

- [Abandoned Cart Tracking Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/ "Abandoned Cart Tracking Overview")
- [ActiveCampaign Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/ "ActiveCampaign Abandoned Cart Tracking")
- [AgileCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/agilecrm-abandoned-cart/ "AgileCRM Abandoned Cart Tracking")
- [Automatic Discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/ "Automatic Discounts")
- [Brevo Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/brevo-abandoned-cart/ "Brevo Abandoned Cart Tracking")
- [ConvertKit Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/convertkit-abandoned-cart/ "ConvertKit Abandoned Cart Tracking")
- [Drip Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/ "Drip Abandoned Cart Tracking")
- [FluentCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/fluentcrm-abandoned-cart-tracking/ "FluentCRM Abandoned Cart Tracking")
- [HighLevel Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/highlevel-abandoned-cart-tracking/ "HighLevel Abandoned Cart Tracking")
- [HubSpot Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/ "HubSpot Abandoned Cart Tracking")
- [Infusionsoft / Keap Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/infusionsoft-abandoned-cart/ "Infusionsoft / Keap Abandoned Cart Tracking")
- [Mautic Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/mautic-abandoned-cart/ "Mautic Abandoned Cart Tracking")
- [Ontraport Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/ "Ontraport Abandoned Cart Tracking")
- [Other CRMs](https://wpfusion.com/documentation/abandoned-cart-tracking/other-crms/ "Other CRMs")
- [Abandoned Cart Tracking Changelog](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/ "Abandoned Cart Tracking Changelog")

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