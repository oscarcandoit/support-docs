---
url: "https://wpfusion.com/documentation/events/eventon/"
title: "Connect EventON to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/eventon/#content)

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

# EventON

- Published onAugust 30, 2021
- Last updated on October 7, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- EventON

### [\#](https://wpfusion.com/documentation/events/eventon/\#overview) Overview

WP Fusion integrates with [EventON](https://www.myeventon.com/) to allow you to add event attendees as contacts to your [CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they purchase a ticket using the [Event Tickets addon](https://www.myeventon.com/addons/event-tickets/).

You can also sync event details to custom fields in your CRM, and apply CRM tags based on the event ticket purchased (via [the WooCommerce integration](https://wpfusion.com/documentation/ecommerce/woocommerce/)).

### [\#](https://wpfusion.com/documentation/events/eventon/\#syncing-custom-fields) Syncing custom fields

WP Fusion registers a few EventON custom fields for sync. These can be found on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2021/08/eventon-fields-1-1024x382.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/eventon-fields-1.jpg)

When someone registers for an event, any enabled fields will be synced to the corresponding custom fields on their contact record in your CRM.

The available fields are:

- **Event Name:** The name of the event the person registered for.
- **Event Start Date:** The start date of the event.
- **Event Start Time:** The start time of the event.
- **Event End Date:** The end date of the event.
- **Event End Time:** The end time of the event.
- **Event Check-in:** This field will be synced as _true_ (i.e. to update a checkbox field) when an attendee is checked in to an event.
- **Event Check-in Event Name:** This field will sync the event name of the event the attendee was checked in to.

### [\#](https://wpfusion.com/documentation/events/eventon/\#tagging-contacts) Tagging contacts

Because the Event Tickets addon uses WooCommerce to sell tickets, these settings are configured via WP Fusion’s [WooCommerce integration](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers).

After creating your EventON ticketed event, head to WooCommerce » Products in the WordPress admin, and click Edit on the corresponding ticket product.

[![](https://wpfusion.com/wp-content/uploads/2021/08/eventon-woo-product-panel-1-1024x677.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/eventon-woo-product-panel-1.jpg)

In the WP Fusion tab of the WooCommerce settings metabox you can configure tags to apply in your CRM when a ticket is purchased for that event. For more information, [see the WooCommerce documentation](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers).

In the EventON section of the WooCommerce panel there are two options:

- **Add attendees:** By default only the customer who purchased the ticket will be synced to your CRM. Enable this setting to sync each event attendee to your CRM as a separate contact record. Note that you must enable Additional Guest Checkout fields from Settings » EventON » Tickets.
- **Apply tags to event attendees:** Used with the **Add attendees** option, this allows you to select tags to apply to each event attendee.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect EventON to ActiveCampaign](https://wpfusion.com/connect/connect-eventon-to-activecampaign/)  \|
- [Connect EventON to AgileCRM](https://wpfusion.com/connect/connect-eventon-to-agilecrm/)  \|
- [Connect EventON to Autopilot](https://wpfusion.com/connect/connect-eventon-to-autopilot/)  \|
- [Connect EventON to Bento](https://wpfusion.com/connect/connect-eventon-to-bento/)  \|
- [Connect EventON to BirdSend](https://wpfusion.com/connect/connect-eventon-to-birdsend/)  \|
- [Connect EventON to Brevo](https://wpfusion.com/connect/connect-eventon-to-brevo/)  \|
- [Connect EventON to Capsule](https://wpfusion.com/connect/connect-eventon-to-capsule/)  \|
- [Connect EventON to Constant Contact](https://wpfusion.com/connect/connect-eventon-to-constant-contact/)  \|
- [Connect EventON to ConvertKit](https://wpfusion.com/connect/connect-eventon-to-convertkit/)  \|
- [Connect EventON to ConvesioConvert](https://wpfusion.com/connect/connect-eventon-to-convesioconvert/)  \|
- [Connect EventON to Copper](https://wpfusion.com/connect/connect-eventon-to-copper/)  \|
- [Connect EventON to Customer.io](https://wpfusion.com/connect/connect-eventon-to-customer-io/)  \|
- [Connect EventON to Customerly](https://wpfusion.com/connect/connect-eventon-to-customerly/)  \|
- [Connect EventON to Drip](https://wpfusion.com/connect/connect-eventon-to-drip/)  \|
- [Connect EventON to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-eventon-to-dynamics-365-marketing/)  \|
- [Connect EventON to EmailOctopus](https://wpfusion.com/connect/connect-eventon-to-emailoctopus/)  \|
- [Connect EventON to EngageBay](https://wpfusion.com/connect/connect-eventon-to-engagebay/)  \|
- [Connect EventON to Flexie](https://wpfusion.com/connect/connect-eventon-to-flexie/)  \|
- [Connect EventON to FluentCRM](https://wpfusion.com/connect/connect-eventon-to-fluentcrm/)  \|
- [Connect EventON to FunnelKit](https://wpfusion.com/connect/connect-eventon-to-funnelkit/)  \|
- [Connect EventON to Gist](https://wpfusion.com/connect/connect-eventon-to-gist/)  \|
- [Connect EventON to Groundhogg](https://wpfusion.com/connect/connect-eventon-to-groundhogg/)  \|
- [Connect EventON to HighLevel](https://wpfusion.com/connect/connect-eventon-to-highlevel/)  \|
- [Connect EventON to HubSpot](https://wpfusion.com/connect/connect-eventon-to-hubspot/)  \|
- [Connect EventON to Infusionsoft](https://wpfusion.com/connect/connect-eventon-to-infusionsoft/)  \|
- [Connect EventON to Intercom](https://wpfusion.com/connect/connect-eventon-to-intercom/)  \|
- [Connect EventON to Jetpack CRM](https://wpfusion.com/connect/connect-eventon-to-jetpack-crm/)  \|
- [Connect EventON to Kartra](https://wpfusion.com/connect/connect-eventon-to-kartra/)  \|
- [Connect EventON to Keap](https://wpfusion.com/connect/connect-eventon-to-keap/)  \|
- [Connect EventON to Klaviyo](https://wpfusion.com/connect/connect-eventon-to-klaviyo/)  \|
- [Connect EventON to KlickTipp](https://wpfusion.com/connect/connect-eventon-to-klicktipp/)  \|
- [Connect EventON to Loopify](https://wpfusion.com/connect/connect-eventon-to-loopify/)  \|
- [Connect EventON to MailChimp](https://wpfusion.com/connect/connect-eventon-to-mailchimp/)  \|
- [Connect EventON to MailerLite](https://wpfusion.com/connect/connect-eventon-to-mailerlite/)  \|
- [Connect EventON to Mailjet](https://wpfusion.com/connect/connect-eventon-to-mailjet/)  \|
- [Connect EventON to MailPoet](https://wpfusion.com/connect/connect-eventon-to-mailpoet/)  \|
- [Connect EventON to Maropost](https://wpfusion.com/connect/connect-eventon-to-maropost/)  \|
- [Connect EventON to Mautic](https://wpfusion.com/connect/connect-eventon-to-mautic/)  \|
- [Connect EventON to NationBuilder](https://wpfusion.com/connect/connect-eventon-to-nationbuilder/)  \|
- [Connect EventON to Omnisend](https://wpfusion.com/connect/connect-eventon-to-omnisend/)  \|
- [Connect EventON to Ontraport](https://wpfusion.com/connect/connect-eventon-to-ontraport/)  \|
- [Connect EventON to Ortto](https://wpfusion.com/connect/connect-eventon-to-ortto/)  \|
- [Connect EventON to Pipedrive](https://wpfusion.com/connect/connect-eventon-to-pipedrive/)  \|
- [Connect EventON to Platformly](https://wpfusion.com/connect/connect-eventon-to-platformly/)  \|
- [Connect EventON to Quentn](https://wpfusion.com/connect/connect-eventon-to-quentn/)  \|
- [Connect EventON to Salesflare](https://wpfusion.com/connect/connect-eventon-to-salesflare/)  \|
- [Connect EventON to Salesforce](https://wpfusion.com/connect/connect-eventon-to-salesforce/)  \|
- [Connect EventON to Sender](https://wpfusion.com/connect/connect-eventon-to-sender/)  \|
- [Connect EventON to SendFox](https://wpfusion.com/connect/connect-eventon-to-sendfox/)  \|
- [Connect EventON to Tubular](https://wpfusion.com/connect/connect-eventon-to-tubular/)  \|
- [Connect EventON to User.com](https://wpfusion.com/connect/connect-eventon-to-user-com/)  \|
- [Connect EventON to WP ERP](https://wpfusion.com/connect/connect-eventon-to-wp-erp/)  \|
- [Connect EventON to Zoho](https://wpfusion.com/connect/connect-eventon-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/eventon/#overview)
- [Syncing custom fields](https://wpfusion.com/documentation/events/eventon/#syncing-custom-fields)
- [Tagging contacts](https://wpfusion.com/documentation/events/eventon/#tagging-contacts)

### In this chapter

- [Amelia](https://wpfusion.com/documentation/events/amelia/ "Amelia")
- [BookingPress](https://wpfusion.com/documentation/events/bookingpress/ "BookingPress")
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/ "Event Espresso")
- [EventON](https://wpfusion.com/documentation/events/eventon/ "EventON")
- [Events Manager](https://wpfusion.com/documentation/events/events-manager/ "Events Manager")
- [FluentBooking](https://wpfusion.com/documentation/events/fluentbooking/ "FluentBooking")
- [FooEvents](https://wpfusion.com/documentation/events/fooevents/ "FooEvents")
- [LatePoint](https://wpfusion.com/documentation/events/latepoint/ "LatePoint")
- [Modern Events Calendar](https://wpfusion.com/documentation/events/modern-events-calendar/ "Modern Events Calendar")
- [Salon Booking](https://wpfusion.com/documentation/events/salon-booking/ "Salon Booking")
- [Simply Schedule Appointments](https://wpfusion.com/documentation/events/simply-schedule-appointments/ "Simply Schedule Appointments")
- [The Events Calendar / Event Tickets](https://wpfusion.com/documentation/events/the-events-calendar-event-tickets/ "The Events Calendar / Event Tickets")
- [Tickera](https://wpfusion.com/documentation/events/tickera/ "Tickera")
- [WooCommerce Appointments (BookingWP)](https://wpfusion.com/documentation/events/woocommerce-appointments/ "WooCommerce Appointments (BookingWP)")
- [WooCommerce Bookings](https://wpfusion.com/documentation/events/woocommerce-bookings/ "WooCommerce Bookings")
- [WP Booking System](https://wpfusion.com/documentation/events/wp-booking-system/ "WP Booking System")
- [WP Event Manager](https://wpfusion.com/documentation/events/wp-event-manager/ "WP Event Manager")
- [WP Travel Engine](https://wpfusion.com/documentation/events/wp-travel-engine/ "WP Travel Engine")
- [YITH WooCommerce Booking](https://wpfusion.com/documentation/events/yith-woocommerce-booking/ "YITH WooCommerce Booking")

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