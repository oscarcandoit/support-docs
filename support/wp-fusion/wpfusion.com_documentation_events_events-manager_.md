---
url: "https://wpfusion.com/documentation/events/events-manager/"
title: "Connect Events Manager to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/events-manager/#content)

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

# Events Manager

- Published onApril 27, 2020
- Last updated on February 28, 2022

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- Events Manager

### [\#](https://wpfusion.com/documentation/events/events-manager/\#overview) Overview

WP Fusion integrates with [Events Manager](https://wordpress.org/plugins/events-manager/) to allow you to add event attendees as contacts to your [CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register for an event. You can also optionally apply CRM tags based on the event the person registered for.

### [\#](https://wpfusion.com/documentation/events/events-manager/\#adding-contacts) Adding contacts

By default WP Fusion will sync any event registrations to your CRM as contacts, with the name and email address provided at registration. If a contact already exists with the same email address they will be updated.

### [\#](https://wpfusion.com/documentation/events/events-manager/\#syncing-custom-fields) Syncing custom fields

WP Fusion registers a few Events Manager custom fields for sync. These can be found on the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2020/04/events-manager-fields-1024x428.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/events-manager-fields.jpg)

When someone registers for an event, any enabled fields will be synced to the corresponding custom fields on their contact record in your CRM.

The available fields are:

- **Event Name:** The name of the event the person registered for
- **Event Date:** The date of the event
- **Event Time:** The start time of the event
- **Event Location Name:** The name of the event location
- **Event Location Address:** The full address of the event location

WP Fusion will also detect any custom fields on your booking forms, and these will show up in the Contact Fields list, where they can be mapped to custom fields in your CRM.

### [\#](https://wpfusion.com/documentation/events/events-manager/\#tagging-attendees) Tagging attendees

WP Fusion adds a meta box to the bottom of any Event post type. Here you can specify tags to be applied in your CRM when someone registers for that event.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20406'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2020/04/events-manager-event-settings.jpg)

There are four options here:

- **Apply Tags:** These tags will be applied in your CRM when someone registers for the event, regardless of their approval status.
- **Remove Tags:** If this box is checked, the tags specified in Apply Tags will be automatically removed if a booking is cancelled, rejected, or deleted.
- **Apply Tags – Approved:** These tags will be applied to the attendee when a booking is approved by an admin, or if a booking is automatically approved as a part of registration.
- **Apply Tags – Cancelled:** These tags will be applied to the attendee when their booking is cancelled, rejected, or deleted.

### [\#](https://wpfusion.com/documentation/events/events-manager/\#exporting-registrations) Exporting registrations

WP Fusion includes a [batch export tool](https://wpfusion.com/documentation/tutorials/batch-operations/) for Events Manager that can retroactively sync event bookings to your CRM from before you installed WP Fusion.

This can be found at Settings » WP Fusion » Advanced » Batch Operations.

Select the **Events Manager bookings** option and click the _Create Background Task_ button to start the export.

WP Fusion will go through every event booking in Events Manager and create/update contact records in your CRM for each event attendee, as well as sync any enabled custom fields. Any tags configured on the corresponding events will also be applied.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Events Manager to ActiveCampaign](https://wpfusion.com/connect/connect-events-manager-to-activecampaign/)  \|
- [Connect Events Manager to AgileCRM](https://wpfusion.com/connect/connect-events-manager-to-agilecrm/)  \|
- [Connect Events Manager to Autopilot](https://wpfusion.com/connect/connect-events-manager-to-autopilot/)  \|
- [Connect Events Manager to Bento](https://wpfusion.com/connect/connect-events-manager-to-bento/)  \|
- [Connect Events Manager to BirdSend](https://wpfusion.com/connect/connect-events-manager-to-birdsend/)  \|
- [Connect Events Manager to Brevo](https://wpfusion.com/connect/connect-events-manager-to-brevo/)  \|
- [Connect Events Manager to Capsule](https://wpfusion.com/connect/connect-events-manager-to-capsule/)  \|
- [Connect Events Manager to Constant Contact](https://wpfusion.com/connect/connect-events-manager-to-constant-contact/)  \|
- [Connect Events Manager to ConvertKit](https://wpfusion.com/connect/connect-events-manager-to-convertkit/)  \|
- [Connect Events Manager to ConvesioConvert](https://wpfusion.com/connect/connect-events-manager-to-convesioconvert/)  \|
- [Connect Events Manager to Copper](https://wpfusion.com/connect/connect-events-manager-to-copper/)  \|
- [Connect Events Manager to Customer.io](https://wpfusion.com/connect/connect-events-manager-to-customer-io/)  \|
- [Connect Events Manager to Customerly](https://wpfusion.com/connect/connect-events-manager-to-customerly/)  \|
- [Connect Events Manager to Drip](https://wpfusion.com/connect/connect-events-manager-to-drip/)  \|
- [Connect Events Manager to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-events-manager-to-dynamics-365-marketing/)  \|
- [Connect Events Manager to EmailOctopus](https://wpfusion.com/connect/connect-events-manager-to-emailoctopus/)  \|
- [Connect Events Manager to EngageBay](https://wpfusion.com/connect/connect-events-manager-to-engagebay/)  \|
- [Connect Events Manager to Flexie](https://wpfusion.com/connect/connect-events-manager-to-flexie/)  \|
- [Connect Events Manager to FluentCRM](https://wpfusion.com/connect/connect-events-manager-to-fluentcrm/)  \|
- [Connect Events Manager to FunnelKit](https://wpfusion.com/connect/connect-events-manager-to-funnelkit/)  \|
- [Connect Events Manager to Gist](https://wpfusion.com/connect/connect-events-manager-to-gist/)  \|
- [Connect Events Manager to Groundhogg](https://wpfusion.com/connect/connect-events-manager-to-groundhogg/)  \|
- [Connect Events Manager to HighLevel](https://wpfusion.com/connect/connect-events-manager-to-highlevel/)  \|
- [Connect Events Manager to HubSpot](https://wpfusion.com/connect/connect-events-manager-to-hubspot/)  \|
- [Connect Events Manager to Infusionsoft](https://wpfusion.com/connect/connect-events-manager-to-infusionsoft/)  \|
- [Connect Events Manager to Intercom](https://wpfusion.com/connect/connect-events-manager-to-intercom/)  \|
- [Connect Events Manager to Jetpack CRM](https://wpfusion.com/connect/connect-events-manager-to-jetpack-crm/)  \|
- [Connect Events Manager to Kartra](https://wpfusion.com/connect/connect-events-manager-to-kartra/)  \|
- [Connect Events Manager to Keap](https://wpfusion.com/connect/connect-events-manager-to-keap/)  \|
- [Connect Events Manager to Klaviyo](https://wpfusion.com/connect/connect-events-manager-to-klaviyo/)  \|
- [Connect Events Manager to KlickTipp](https://wpfusion.com/connect/connect-events-manager-to-klicktipp/)  \|
- [Connect Events Manager to Loopify](https://wpfusion.com/connect/connect-events-manager-to-loopify/)  \|
- [Connect Events Manager to MailChimp](https://wpfusion.com/connect/connect-events-manager-to-mailchimp/)  \|
- [Connect Events Manager to MailerLite](https://wpfusion.com/connect/connect-events-manager-to-mailerlite/)  \|
- [Connect Events Manager to Mailjet](https://wpfusion.com/connect/connect-events-manager-to-mailjet/)  \|
- [Connect Events Manager to MailPoet](https://wpfusion.com/connect/connect-events-manager-to-mailpoet/)  \|
- [Connect Events Manager to Maropost](https://wpfusion.com/connect/connect-events-manager-to-maropost/)  \|
- [Connect Events Manager to Mautic](https://wpfusion.com/connect/connect-events-manager-to-mautic/)  \|
- [Connect Events Manager to NationBuilder](https://wpfusion.com/connect/connect-events-manager-to-nationbuilder/)  \|
- [Connect Events Manager to Omnisend](https://wpfusion.com/connect/connect-events-manager-to-omnisend/)  \|
- [Connect Events Manager to Ontraport](https://wpfusion.com/connect/connect-events-manager-to-ontraport/)  \|
- [Connect Events Manager to Ortto](https://wpfusion.com/connect/connect-events-manager-to-ortto/)  \|
- [Connect Events Manager to Pipedrive](https://wpfusion.com/connect/connect-events-manager-to-pipedrive/)  \|
- [Connect Events Manager to Platformly](https://wpfusion.com/connect/connect-events-manager-to-platformly/)  \|
- [Connect Events Manager to Quentn](https://wpfusion.com/connect/connect-events-manager-to-quentn/)  \|
- [Connect Events Manager to Salesflare](https://wpfusion.com/connect/connect-events-manager-to-salesflare/)  \|
- [Connect Events Manager to Salesforce](https://wpfusion.com/connect/connect-events-manager-to-salesforce/)  \|
- [Connect Events Manager to Sender](https://wpfusion.com/connect/connect-events-manager-to-sender/)  \|
- [Connect Events Manager to SendFox](https://wpfusion.com/connect/connect-events-manager-to-sendfox/)  \|
- [Connect Events Manager to Tubular](https://wpfusion.com/connect/connect-events-manager-to-tubular/)  \|
- [Connect Events Manager to User.com](https://wpfusion.com/connect/connect-events-manager-to-user-com/)  \|
- [Connect Events Manager to WP ERP](https://wpfusion.com/connect/connect-events-manager-to-wp-erp/)  \|
- [Connect Events Manager to Zoho](https://wpfusion.com/connect/connect-events-manager-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/events-manager/#overview)
- [Adding contacts](https://wpfusion.com/documentation/events/events-manager/#adding-contacts)
- [Syncing custom fields](https://wpfusion.com/documentation/events/events-manager/#syncing-custom-fields)
- [Tagging attendees](https://wpfusion.com/documentation/events/events-manager/#tagging-attendees)
- [Exporting registrations](https://wpfusion.com/documentation/events/events-manager/#exporting-registrations)

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)