---
url: "https://wpfusion.com/documentation/integrations/wp-event-manager/"
title: "Connect WP Event Manager to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/integrations/wp-event-manager/#content)

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

# WP Event Manager

- Published onNovember 20, 2019
- Last updated on November 13, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
- /
- WP Event Manager

### [\#](https://wpfusion.com/documentation/integrations/wp-event-manager/\#overview) Overview

WP Fusion integrates with [WP Event Manager](https://wp-eventmanager.com/) to allow you to add event attendees as contacts to your CRM of choice when they register for an event. You can also optionally apply CRM tags based on the event the person registered for.

WP Fusion’s integration is designed to work with the [Registrations Addon](https://wp-eventmanager.com/product/wp-event-manager-registrations/) for WP Event Manager. It also supports the [Sell Tickets Addon](https://wp-eventmanager.com/product/wp-event-manager-sell-tickets/).

### [\#](https://wpfusion.com/documentation/integrations/wp-event-manager/\#syncing-contacts-and-custom-fields) Syncing contacts and custom fields

By default WP Fusion will sync each new event registration to your CRM as a contact, with the buyer’s name and email address provided at registration. If a contact already exists with the same email address they will be updated.

#### [\#](https://wpfusion.com/documentation/integrations/wp-event-manager/\#custom-registration-fields) Custom registration fields

If you’ve created custom registration fields, these will appear under the WP Event Manager section in the Contact Fields tab of the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-1-1024x194.jpg)](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-1.jpg)

For each custom field you can specify a corresponding custom field in your CRM where the data should be synced.

#### [\#](https://wpfusion.com/documentation/integrations/wp-event-manager/\#syncing-event-fields) Syncing event fields

WP Fusion also makes available some fields related to the event for syncing to your CRM. These can also be found in the Contact Fields list in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-3-1024x428.jpg)](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-3.jpg)

If any of these fields are enabled then WP Fusion will load the values from the event in WordPress and sync it along with the registration data to your CRM. You can then merge the values into emails, or use them in automations (for example to send a reminder a day before an event).

### [\#](https://wpfusion.com/documentation/integrations/wp-event-manager/\#applying-tags) Applying tags

If the [Registrations Addon](https://wp-eventmanager.com/product/wp-event-manager-registrations/) is active, WP Fusion adds a meta box to the bottom of any Event post type. Here you can specify tags to be applied in your CRM when someone registers for that event.

[![](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-2-1024x318.jpg)](https://wpfusion.com/wp-content/uploads/2019/11/wp-event-manager-2.jpg)

If you are using the [Sell Tickets Addon](https://wp-eventmanager.com/product/wp-event-manager-sell-tickets/), you can also configure tags on the associated [WooCommerce product](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers).

In this case the tags configured on the product will be applied to the customer (the person who pays for the tickets), and the tags configured on the event will be applied to each event attendee.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WP Event Manager to ActiveCampaign](https://wpfusion.com/connect/connect-wp-event-manager-to-activecampaign/)  \|
- [Connect WP Event Manager to AgileCRM](https://wpfusion.com/connect/connect-wp-event-manager-to-agilecrm/)  \|
- [Connect WP Event Manager to Autopilot](https://wpfusion.com/connect/connect-wp-event-manager-to-autopilot/)  \|
- [Connect WP Event Manager to Bento](https://wpfusion.com/connect/connect-wp-event-manager-to-bento/)  \|
- [Connect WP Event Manager to BirdSend](https://wpfusion.com/connect/connect-wp-event-manager-to-birdsend/)  \|
- [Connect WP Event Manager to Brevo](https://wpfusion.com/connect/connect-wp-event-manager-to-brevo/)  \|
- [Connect WP Event Manager to Capsule](https://wpfusion.com/connect/connect-wp-event-manager-to-capsule/)  \|
- [Connect WP Event Manager to Constant Contact](https://wpfusion.com/connect/connect-wp-event-manager-to-constant-contact/)  \|
- [Connect WP Event Manager to ConvertKit](https://wpfusion.com/connect/connect-wp-event-manager-to-convertkit/)  \|
- [Connect WP Event Manager to ConvesioConvert](https://wpfusion.com/connect/connect-wp-event-manager-to-convesioconvert/)  \|
- [Connect WP Event Manager to Copper](https://wpfusion.com/connect/connect-wp-event-manager-to-copper/)  \|
- [Connect WP Event Manager to Customer.io](https://wpfusion.com/connect/connect-wp-event-manager-to-customer-io/)  \|
- [Connect WP Event Manager to Customerly](https://wpfusion.com/connect/connect-wp-event-manager-to-customerly/)  \|
- [Connect WP Event Manager to Drip](https://wpfusion.com/connect/connect-wp-event-manager-to-drip/)  \|
- [Connect WP Event Manager to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-wp-event-manager-to-dynamics-365-marketing/)  \|
- [Connect WP Event Manager to EmailOctopus](https://wpfusion.com/connect/connect-wp-event-manager-to-emailoctopus/)  \|
- [Connect WP Event Manager to EngageBay](https://wpfusion.com/connect/connect-wp-event-manager-to-engagebay/)  \|
- [Connect WP Event Manager to Flexie](https://wpfusion.com/connect/connect-wp-event-manager-to-flexie/)  \|
- [Connect WP Event Manager to FluentCRM](https://wpfusion.com/connect/connect-wp-event-manager-to-fluentcrm/)  \|
- [Connect WP Event Manager to FunnelKit](https://wpfusion.com/connect/connect-wp-event-manager-to-funnelkit/)  \|
- [Connect WP Event Manager to Gist](https://wpfusion.com/connect/connect-wp-event-manager-to-gist/)  \|
- [Connect WP Event Manager to Groundhogg](https://wpfusion.com/connect/connect-wp-event-manager-to-groundhogg/)  \|
- [Connect WP Event Manager to HighLevel](https://wpfusion.com/connect/connect-wp-event-manager-to-highlevel/)  \|
- [Connect WP Event Manager to HubSpot](https://wpfusion.com/connect/connect-wp-event-manager-to-hubspot/)  \|
- [Connect WP Event Manager to Infusionsoft](https://wpfusion.com/connect/connect-wp-event-manager-to-infusionsoft/)  \|
- [Connect WP Event Manager to Intercom](https://wpfusion.com/connect/connect-wp-event-manager-to-intercom/)  \|
- [Connect WP Event Manager to Jetpack CRM](https://wpfusion.com/connect/connect-wp-event-manager-to-jetpack-crm/)  \|
- [Connect WP Event Manager to Kartra](https://wpfusion.com/connect/connect-wp-event-manager-to-kartra/)  \|
- [Connect WP Event Manager to Keap](https://wpfusion.com/connect/connect-wp-event-manager-to-keap/)  \|
- [Connect WP Event Manager to Klaviyo](https://wpfusion.com/connect/connect-wp-event-manager-to-klaviyo/)  \|
- [Connect WP Event Manager to KlickTipp](https://wpfusion.com/connect/connect-wp-event-manager-to-klicktipp/)  \|
- [Connect WP Event Manager to Loopify](https://wpfusion.com/connect/connect-wp-event-manager-to-loopify/)  \|
- [Connect WP Event Manager to MailChimp](https://wpfusion.com/connect/connect-wp-event-manager-to-mailchimp/)  \|
- [Connect WP Event Manager to MailerLite](https://wpfusion.com/connect/connect-wp-event-manager-to-mailerlite/)  \|
- [Connect WP Event Manager to Mailjet](https://wpfusion.com/connect/connect-wp-event-manager-to-mailjet/)  \|
- [Connect WP Event Manager to MailPoet](https://wpfusion.com/connect/connect-wp-event-manager-to-mailpoet/)  \|
- [Connect WP Event Manager to Maropost](https://wpfusion.com/connect/connect-wp-event-manager-to-maropost/)  \|
- [Connect WP Event Manager to Mautic](https://wpfusion.com/connect/connect-wp-event-manager-to-mautic/)  \|
- [Connect WP Event Manager to NationBuilder](https://wpfusion.com/connect/connect-wp-event-manager-to-nationbuilder/)  \|
- [Connect WP Event Manager to Omnisend](https://wpfusion.com/connect/connect-wp-event-manager-to-omnisend/)  \|
- [Connect WP Event Manager to Ontraport](https://wpfusion.com/connect/connect-wp-event-manager-to-ontraport/)  \|
- [Connect WP Event Manager to Ortto](https://wpfusion.com/connect/connect-wp-event-manager-to-ortto/)  \|
- [Connect WP Event Manager to Pipedrive](https://wpfusion.com/connect/connect-wp-event-manager-to-pipedrive/)  \|
- [Connect WP Event Manager to Platformly](https://wpfusion.com/connect/connect-wp-event-manager-to-platformly/)  \|
- [Connect WP Event Manager to Quentn](https://wpfusion.com/connect/connect-wp-event-manager-to-quentn/)  \|
- [Connect WP Event Manager to Salesflare](https://wpfusion.com/connect/connect-wp-event-manager-to-salesflare/)  \|
- [Connect WP Event Manager to Salesforce](https://wpfusion.com/connect/connect-wp-event-manager-to-salesforce/)  \|
- [Connect WP Event Manager to Sender](https://wpfusion.com/connect/connect-wp-event-manager-to-sender/)  \|
- [Connect WP Event Manager to SendFox](https://wpfusion.com/connect/connect-wp-event-manager-to-sendfox/)  \|
- [Connect WP Event Manager to Tubular](https://wpfusion.com/connect/connect-wp-event-manager-to-tubular/)  \|
- [Connect WP Event Manager to User.com](https://wpfusion.com/connect/connect-wp-event-manager-to-user-com/)  \|
- [Connect WP Event Manager to WP ERP](https://wpfusion.com/connect/connect-wp-event-manager-to-wp-erp/)  \|
- [Connect WP Event Manager to Zoho](https://wpfusion.com/connect/connect-wp-event-manager-to-zoho/)  \|

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/integrations/wp-event-manager/#overview)
- [Syncing contacts and custom fields](https://wpfusion.com/documentation/integrations/wp-event-manager/#syncing-contacts-and-custom-fields)
- [Custom registration fields](https://wpfusion.com/documentation/integrations/wp-event-manager/#custom-registration-fields)
- [Syncing event fields](https://wpfusion.com/documentation/integrations/wp-event-manager/#syncing-event-fields)
- [Applying tags](https://wpfusion.com/documentation/integrations/wp-event-manager/#applying-tags)

### In this chapter

- [AccessAlly](https://wpfusion.com/documentation/membership/accessally/ "AccessAlly")
- [Advanced Ads](https://wpfusion.com/documentation/other/advanced-ads/ "Advanced Ads")
- [Advanced Custom Fields](https://wpfusion.com/documentation/content-management/advanced-custom-fields/ "Advanced Custom Fields")
- [AffiliateWP](https://wpfusion.com/documentation/affiliates/affiliatewp/ "AffiliateWP")
- [Ahoy](https://wpfusion.com/documentation/other/ahoy/ "Ahoy")
- [Amelia](https://wpfusion.com/documentation/events/amelia/ "Amelia")
- [ARMember](https://wpfusion.com/documentation/membership/armember/ "ARMember")
- [AutomatorWP](https://wpfusion.com/documentation/automators/automatorwp/ "AutomatorWP")
- [BadgeOS](https://wpfusion.com/documentation/gamification/badgeos/ "BadgeOS")
- [bbPress](https://wpfusion.com/documentation/forums/bbpress/ "bbPress")
- [Beaver Builder](https://wpfusion.com/documentation/page-builders/beaver-builder/ "Beaver Builder")
- [Bit Integrations](https://wpfusion.com/documentation/automators/bit-integrations/ "Bit Integrations")
- [Blockli Streamer](https://wpfusion.com/documentation/membership/blockli-streamer/ "Blockli Streamer")
- [BookingPress](https://wpfusion.com/documentation/events/bookingpress/ "BookingPress")
- [Breakdance](https://wpfusion.com/documentation/page-builders/breakdance/ "Breakdance")
- [Bricks](https://wpfusion.com/documentation/page-builders/bricks/ "Bricks")
- [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/ "BuddyBoss")
- [BuddyPress](https://wpfusion.com/documentation/membership/buddypress/ "BuddyPress")
- [Caldera Forms](https://wpfusion.com/documentation/lead-generation/caldera-forms/ "Caldera Forms")
- [Cancellation Survey for Woo Subscriptions](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/ "Cancellation Survey for Woo Subscriptions")
- [CartFlows](https://wpfusion.com/documentation/ecommerce/cartflows/ "CartFlows")
- [ClickWhale](https://wpfusion.com/documentation/affiliates/clickwhale/ "ClickWhale")
- [Contact Form 7](https://wpfusion.com/documentation/lead-generation/contact-form-7/ "Contact Form 7")
- [Content Control](https://wpfusion.com/documentation/membership/content-control/ "Content Control")
- [Convert Pro](https://wpfusion.com/documentation/lead-generation/convert-pro/ "Convert Pro")
- [CoursePress](https://wpfusion.com/documentation/learning-management/coursepress/ "CoursePress")
- [Divi](https://wpfusion.com/documentation/page-builders/divi/ "Divi")
- [Download Manager](https://wpfusion.com/documentation/content-management/download-manager/ "Download Manager")
- [Download Monitor](https://wpfusion.com/documentation/content-management/download-monitor/ "Download Monitor")
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/ "Easy Digital Downloads")
- [EDD Recurring Payments](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/ "EDD Recurring Payments")
- [EDD Software Licensing](https://wpfusion.com/documentation/ecommerce/edd-software-licensing/ "EDD Software Licensing")
- [eLearnCommerce](https://wpfusion.com/documentation/learning-management/wpep/ "eLearnCommerce")
- [Elementor](https://wpfusion.com/documentation/page-builders/elementor/ "Elementor")
- [Elementor Forms](https://wpfusion.com/documentation/lead-generation/elementor-forms/ "Elementor Forms")
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/ "Event Espresso")
- [EventON](https://wpfusion.com/documentation/events/eventon/ "EventON")
- [Events Manager](https://wpfusion.com/documentation/events/events-manager/ "Events Manager")
- [FacetWP](https://wpfusion.com/documentation/content-management/facetwp/ "FacetWP")
- [Fluent Forms](https://wpfusion.com/documentation/lead-generation/fluent-forms/ "Fluent Forms")
- [FluentBooking](https://wpfusion.com/documentation/events/fluentbooking/ "FluentBooking")
- [FluentCart](https://wpfusion.com/documentation/ecommerce/fluentcart/ "FluentCart")
- [FluentCommunity](https://wpfusion.com/documentation/membership/fluentcommunity/ "FluentCommunity")
- [FooEvents](https://wpfusion.com/documentation/events/fooevents/ "FooEvents")
- [Formidable Forms](https://wpfusion.com/documentation/lead-generation/formidable-forms/ "Formidable Forms")
- [Forminator](https://wpfusion.com/documentation/lead-generation/forminator/ "Forminator")
- [FunnelKit](https://wpfusion.com/documentation/ecommerce/woofunnels/ "FunnelKit")
- [GamiPress](https://wpfusion.com/documentation/gamification/gamipress/ "GamiPress")
- [GeoDirectory](https://wpfusion.com/documentation/other/geodirectory/ "GeoDirectory")
- [Gifting for WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/ "Gifting for WooCommerce Subscriptions")
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/ "GiveWP")
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/ "Gravity Forms")
- [Gravity PDF](https://wpfusion.com/documentation/lead-generation/gravity-pdf/ "Gravity PDF")
- [GravityView](https://wpfusion.com/documentation/lead-generation/gravityview/ "GravityView")
- [GTranslate](https://wpfusion.com/documentation/multilingual/gtranslate/ "GTranslate")
- [Gutenberg](https://wpfusion.com/documentation/page-builders/gutenberg/ "Gutenberg")
- [HollerBox](https://wpfusion.com/documentation/other/hollerbox/ "HollerBox")
- [If Menu](https://wpfusion.com/documentation/content-management/if-menu/ "If Menu")
- [If-So](https://wpfusion.com/documentation/content-management/if-so/ "If-So")
- [JetEngine](https://wpfusion.com/documentation/content-management/jetengine/ "JetEngine")
- [LatePoint](https://wpfusion.com/documentation/events/latepoint/ "LatePoint")
- [LaunchFlows](https://wpfusion.com/documentation/ecommerce/launchflows/ "LaunchFlows")
- [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/ "LearnDash")
- [LearnPress](https://wpfusion.com/documentation/learning-management/learnpress/ "LearnPress")
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/ "LifterLMS")
- [MasterStudy](https://wpfusion.com/documentation/learning-management/masterstudy/ "MasterStudy")
- [MemberDash](https://wpfusion.com/documentation/membership/memberdash/ "MemberDash")
- [MemberMouse](https://wpfusion.com/documentation/membership/membermouse/ "MemberMouse")
- [Memberoni](https://wpfusion.com/documentation/learning-management/memberoni/ "Memberoni")
- [MemberPress](https://wpfusion.com/documentation/membership/memberpress/ "MemberPress")
- [Members](https://wpfusion.com/documentation/membership/members/ "Members")
- [Meta Box](https://wpfusion.com/documentation/content-management/meta-box/ "Meta Box")
- [Modern Events Calendar](https://wpfusion.com/documentation/events/modern-events-calendar/ "Modern Events Calendar")
- [myCRED](https://wpfusion.com/documentation/gamification/mycred/ "myCRED")
- [Ninja Forms](https://wpfusion.com/documentation/lead-generation/ninja-forms/ "Ninja Forms")
- [Object Sync for Salesforce](https://wpfusion.com/documentation/other/object-sync-for-salesforce/ "Object Sync for Salesforce")
- [OttoKit](https://wpfusion.com/documentation/automators/suretriggers/ "OttoKit")
- [Oxygen](https://wpfusion.com/documentation/page-builders/oxygen/ "Oxygen")
- [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/ "Paid Memberships Pro")
- [Parent and Student Access For LearnDash](https://wpfusion.com/documentation/learning-management/parent-student-access-for-learndash/ "Parent and Student Access For LearnDash")
- [Paymattic](https://wpfusion.com/documentation/ecommerce/paymattic/ "Paymattic")
- [PeepSo](https://wpfusion.com/documentation/membership/peepso/ "PeepSo")
- [PilotPress](https://wpfusion.com/documentation/membership/pilotpress/ "PilotPress")
- [Piotnet Forms](https://wpfusion.com/documentation/lead-generation/piotnet-forms/ "Piotnet Forms")
- [Popup Maker](https://wpfusion.com/documentation/other/popup-maker/ "Popup Maker")
- [Presto Player](https://wpfusion.com/documentation/other/presto-player/ "Presto Player")
- [Pretty Links](https://wpfusion.com/documentation/affiliates/pretty-links/ "Pretty Links")
- [Product Add-Ons for WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/ "Product Add-Ons for WooCommerce")
- [Profile Builder Pro](https://wpfusion.com/documentation/membership/profile-builder-pro/ "Profile Builder Pro")
- [ProfilePress](https://wpfusion.com/documentation/membership/profilepress/ "ProfilePress")
- [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/ "Restrict Content Pro")
- [RestroPress](https://wpfusion.com/documentation/ecommerce/restropress/ "RestroPress")
- [s2Member](https://wpfusion.com/documentation/integrations/s2member/ "s2Member")
- [Salon Booking](https://wpfusion.com/documentation/events/salon-booking/ "Salon Booking")
- [Sensei](https://wpfusion.com/documentation/learning-management/sensei/ "Sensei")
- [Share Logins Pro](https://wpfusion.com/documentation/other/share-logins-pro/ "Share Logins Pro")
- [Simple Membership](https://wpfusion.com/documentation/membership/simple-membership/ "Simple Membership")
- [Simply Schedule Appointments](https://wpfusion.com/documentation/events/simply-schedule-appointments/ "Simply Schedule Appointments")
- [SliceWP](https://wpfusion.com/documentation/affiliates/slicewp/ "SliceWP")
- [Solid Affiliate](https://wpfusion.com/documentation/affiliates/solid-affiliate/ "Solid Affiliate")
- [Studiocart](https://wpfusion.com/documentation/ecommerce/studiocart/ "Studiocart")
- [Subscriptions for WooCommerce](https://wpfusion.com/documentation/ecommerce/subscriptions-for-woocommerce/ "Subscriptions for WooCommerce")
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/ "SureCart")
- [SureForms](https://wpfusion.com/documentation/lead-generation/sureforms/ "SureForms")
- [SureMembers](https://wpfusion.com/documentation/membership/suremembers/ "SureMembers")
- [Teams for WooCommerce Memberships](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/ "Teams for WooCommerce Memberships")
- [The Events Calendar / Event Tickets](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/ "The Events Calendar / Event Tickets")
- [ThirstyAffiliates](https://wpfusion.com/documentation/affiliates/thirstyaffiliates/ "ThirstyAffiliates")
- [Thrive Apprentice](https://wpfusion.com/documentation/learning-management/thrive-apprentice/ "Thrive Apprentice")
- [Thrive Architect](https://wpfusion.com/documentation/page-builders/thrive-architect/ "Thrive Architect")
- [Thrive Automator](https://wpfusion.com/documentation/automators/thrive-automator/ "Thrive Automator")
- [Thrive Leads](https://wpfusion.com/documentation/lead-generation/thrive-leads/ "Thrive Leads")
- [Tickera](https://wpfusion.com/documentation/events/tickera/ "Tickera")
- [Toolset Types](https://wpfusion.com/documentation/content-management/toolset-types/ "Toolset Types")
- [Toolset User Forms](https://wpfusion.com/documentation/membership/toolset-user-forms/ "Toolset User Forms")
- [TranslatePress](https://wpfusion.com/documentation/multilingual/translatepress/ "TranslatePress")
- [Tutor LMS](https://wpfusion.com/documentation/learning-management/tutor-lms/ "Tutor LMS")
- [Ultimate Member](https://wpfusion.com/documentation/membership/ultimate-member/ "Ultimate Member")
- [Uncanny Automator](https://wpfusion.com/documentation/automators/uncanny-automator/ "Uncanny Automator")
- [Uncanny LearnDash Groups](https://wpfusion.com/documentation/learning-management/uncanny-learndash-groups/ "Uncanny LearnDash Groups")
- [Upsell Plugin](https://wpfusion.com/documentation/ecommerce/upsell-plugin/ "Upsell Plugin")
- [User Meta](https://wpfusion.com/documentation/membership/user-meta/ "User Meta")
- [UserPro](https://wpfusion.com/documentation/membership/userpro/ "UserPro")
- [Users Insights](https://wpfusion.com/documentation/membership/users-insights/ "Users Insights")
- [UsersWP](https://wpfusion.com/documentation/membership/userswp/ "UsersWP")
- [Weglot](https://wpfusion.com/documentation/multilingual/weglot/ "Weglot")
- [WISDM Group Registration for LearnDash](https://wpfusion.com/documentation/learning-management/wisdm-group-registration-learndash/ "WISDM Group Registration for LearnDash")
- [WishList Member](https://wpfusion.com/documentation/membership/wishlist-member/ "WishList Member")
- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/ "WooCommerce")
- [WooCommerce All Products for Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-all-products-for-subscriptions/ "WooCommerce All Products for Subscriptions")
- [WooCommerce Appointments (BookingWP)](https://wpfusion.com/documentation/events/woocommerce-appointments/ "WooCommerce Appointments (BookingWP)")
- [WooCommerce Bookings](https://wpfusion.com/documentation/events/woocommerce-bookings/ "WooCommerce Bookings")
- [WooCommerce Deposits](https://wpfusion.com/documentation/ecommerce/woocommerce-deposits/ "WooCommerce Deposits")
- [WooCommerce Gravity Forms Product Add-ons](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/ "WooCommerce Gravity Forms Product Add-ons")
- [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/ "WooCommerce Memberships")
- [WooCommerce Payment Plans](https://wpfusion.com/documentation/ecommerce/woocommerce-payment-plans/ "WooCommerce Payment Plans")
- [WooCommerce Payments](https://wpfusion.com/documentation/ecommerce/woocommerce-payments/ "WooCommerce Payments")
- [WooCommerce Product Options](https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/ "WooCommerce Product Options")
- [WooCommerce Shipment Tracking](https://wpfusion.com/documentation/ecommerce/woocommerce-shipment-tracking/ "WooCommerce Shipment Tracking")
- [WooCommerce Smart Coupons](https://wpfusion.com/documentation/ecommerce/woocommerce-smart-coupons/ "WooCommerce Smart Coupons")
- [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/ "WooCommerce Subscriptions")
- [WP Affiliate Manager](https://wpfusion.com/documentation/affiliates/wp-affiliate-manager/ "WP Affiliate Manager")
- [WP All Import](https://wpfusion.com/documentation/content-management/wp-all-import/ "WP All Import")
- [WP Booking System](https://wpfusion.com/documentation/events/wp-booking-system/ "WP Booking System")
- [WP Courseware](https://wpfusion.com/documentation/learning-management/wp-courseware/ "WP Courseware")
- [WP Crowdfunding](https://wpfusion.com/documentation/ecommerce/wp-crowdfunding/ "WP Crowdfunding")
- [WP E Signature](https://wpfusion.com/documentation/other/e-signature/ "WP E Signature")
- [WP Event Manager](https://wpfusion.com/documentation/events/wp-event-manager/ "WP Event Manager")
- [WP Job Manager](https://wpfusion.com/documentation/other/wp-job-manager/ "WP Job Manager")
- [WP Remote Users Sync](https://wpfusion.com/documentation/other/wp-remote-users-sync/ "WP Remote Users Sync")
- [WP Simple Pay](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/ "WP Simple Pay")
- [WP Software License](https://wpfusion.com/documentation/ecommerce/wp-software-license/ "WP Software License")
- [WP Travel Engine](https://wpfusion.com/documentation/events/wp-travel-engine/ "WP Travel Engine")
- [WP Ultimo](https://wpfusion.com/documentation/ecommerce/wp-ultimo/ "WP Ultimo")
- [WP User Manager](https://wpfusion.com/documentation/membership/wp-user-manager/ "WP User Manager")
- [WP-Members](https://wpfusion.com/documentation/membership/wp-members/ "WP-Members")
- [WPBakery Page Builder](https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/ "WPBakery Page Builder")
- [WPComplete](https://wpfusion.com/documentation/learning-management/wpcomplete/ "WPComplete")
- [WPForms](https://wpfusion.com/documentation/lead-generation/wpforms/ "WPForms")
- [wpForo](https://wpfusion.com/documentation/forums/wpforo/ "wpForo")
- [WPLMS](https://wpfusion.com/documentation/learning-management/wplms/ "WPLMS")
- [WPML](https://wpfusion.com/documentation/multilingual/wpml/ "WPML")
- [WPPizza](https://wpfusion.com/documentation/ecommerce/wppizza/ "WPPizza")
- [WS Form](https://wpfusion.com/documentation/lead-generation/ws-form/ "WS Form")
- [YITH WooCommerce Booking](https://wpfusion.com/documentation/events/yith-woocommerce-booking/ "YITH WooCommerce Booking")
- [YITH WooCommerce Multi Vendor](https://wpfusion.com/documentation/ecommerce/yith-woocommerce-multi-vendor/ "YITH WooCommerce Multi Vendor")

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

Message us ··· Chatra


Message us



J


![](https://ucarecdn.com/fafe0fbc-7534-4e06-8c45-fc4190c6dc9c/-/crop/570x571/382,215/-/preview/-/resize/200x200/)

Jack


A


![](https://ucarecdn.com/bbbe6782-c9b6-4419-b40d-eb09b0641bde/-/resize/200x200/)

Ace


Active less than an hour ago


Ask us anything – we’ll get back to you here or by email.




More...




[We run on\\
Chatra](https://chatra.com/?utm_source=logo_p&utm_campaign=PE_wpfusion.com&utm_medium=selfie_en_get)

[We run on\\
Chatra](https://chatra.com/?utm_source=logo_p&utm_campaign=PE_wpfusion.com&utm_medium=selfie_en_get)

StripeM-Inner