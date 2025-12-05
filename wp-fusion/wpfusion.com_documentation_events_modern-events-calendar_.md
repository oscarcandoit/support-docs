---
url: "https://wpfusion.com/documentation/events/modern-events-calendar/"
title: "Connect Modern Events Calendar to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/modern-events-calendar/#content)

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

# Modern Events Calendar

- Published onJune 21, 2020
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- Modern Events Calendar

### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#overview) Overview

WP Fusion includes an integration with [Modern Events Calendar](https://wordpress.org/plugins/modern-events-calendar-lite/) to sync event attendees with any one of [50+ supported CRMs and marketing automation systems](https://wpfusion.com/documentation/faq/crm-compatibility-table/), as well as apply tags based on bookings, RSVPs, and event check-ins.

### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#ticket-setup) Ticket Setup

When editing any ticket in Modern Events Calendar, you’ll see two options added by WP Fusion. Note that if you’ve just created a new ticket you’ll need to save the event before the settings appear.

[![](https://wpfusion.com/wp-content/uploads/2020/06/modern-events-calendar-ticket-1024x788.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/modern-events-calendar-ticket-scaled.jpg)

The settings are:

- **Apply Tags:** These tags will be applied in your CRM when someone purchases the ticket.
- **Add Attendees:** By default WP Fusion will just sync the first attendee to your CRM at checkout. Check this box to create a contact record and apply the selected tags for every attendee.

#### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#rsvps) RSVPs

If you’re using the [RSVP addon for Modern Events Calendar](https://webnus.net/modern-events-calendar/addons/rsvp-events/), you will see a WP Fusion settings tab in the RSVP configuration metabox.

[![](https://wpfusion.com/wp-content/uploads/2020/06/mec-rsvps-1024x259.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/mec-rsvps.jpg)

Here you can select tags to apply to people who RSVP for events. You can also optionally choose to sync each RSVP to a separate contact record in your CRM.

#### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#event-check-ins) Event Check-ins

The [Ticket and Invoice Addon](https://webnus.net/dox/modern-events-calendar/ticket-and-invoice-addon/) for Modern Events Calendar allows attendees to be checked into events, either via a QR code or by an admin.

When this addon is active you will see an additional setting on the ticket form for Apply Tags – Check In

[![](https://wpfusion.com/wp-content/uploads/2020/06/med-check-in-tags-1024x349.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/med-check-in-tags.jpg)

Any tags selected here will be applied in your CRM when an attendee is checked in to the event.

In addition to applying tags, you also have the option to update custom fields in your CRM when someone is checked in to an event.

[![](https://wpfusion.com/wp-content/uploads/2020/06/mec-check-in-fields-1024x286.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/mec-check-in-fields.jpg)

The two fields are:

- **Event Check-in:** This is a true / false field that will be updated when someone is checked in to an event. It can populate a checkbox in your CRM.
- **Event Check-in – Event Name:** This field will sync the name of the event when anyone is checked in to an event

### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#syncing-event-details) Syncing Event Details

WP Fusion adds a few pseudo-fields related to the event, which can be synced to the contact record of the event attendee in your CRM. These can be enabled at Settings » WP Fusion » Contact Fields.

[![](https://wpfusion.com/wp-content/uploads/2020/06/modern-events-calendar-fields-1024x207.jpg)](https://wpfusion.com/wp-content/uploads/2020/06/modern-events-calendar-fields-scaled.jpg)

When someone registers for an event, the enabled fields will be synced to the corresponding custom fields in your CRM.

#### [\#](https://wpfusion.com/documentation/events/modern-events-calendar/\#zoom) Zoom

If you’re using the [Zoom Integration addon](https://webnus.net/modern-events-calendar/addons/zoom-integration/) for Modern Events Calendar, WP Fusion allows you to sync the Zoom meeting details with custom fields in your CRM.

![](https://wpfusion.com/wp-content/uploads/2020/06/Custom_Fields_SS-I1w7UPRdl-transformed.png)

The available fields are:

- Zoom Meeting ID: The ID of the Zoom meeting.
- Zoom Meeting URL: The URL to join the Zoom meeting.
- Zoom Meeting Password: The password to join the Zoom meeting (if applicable).

Any enabled fields will be synced to your CRM when a new booking is made to an event.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Modern Events Calendar to ActiveCampaign](https://wpfusion.com/connect/connect-modern-events-calendar-to-activecampaign/)  \|
- [Connect Modern Events Calendar to AgileCRM](https://wpfusion.com/connect/connect-modern-events-calendar-to-agilecrm/)  \|
- [Connect Modern Events Calendar to Autopilot](https://wpfusion.com/connect/connect-modern-events-calendar-to-autopilot/)  \|
- [Connect Modern Events Calendar to Bento](https://wpfusion.com/connect/connect-modern-events-calendar-to-bento/)  \|
- [Connect Modern Events Calendar to BirdSend](https://wpfusion.com/connect/connect-modern-events-calendar-to-birdsend/)  \|
- [Connect Modern Events Calendar to Brevo](https://wpfusion.com/connect/connect-modern-events-calendar-to-brevo/)  \|
- [Connect Modern Events Calendar to Capsule](https://wpfusion.com/connect/connect-modern-events-calendar-to-capsule/)  \|
- [Connect Modern Events Calendar to Constant Contact](https://wpfusion.com/connect/connect-modern-events-calendar-to-constant-contact/)  \|
- [Connect Modern Events Calendar to ConvertKit](https://wpfusion.com/connect/connect-modern-events-calendar-to-convertkit/)  \|
- [Connect Modern Events Calendar to ConvesioConvert](https://wpfusion.com/connect/connect-modern-events-calendar-to-convesioconvert/)  \|
- [Connect Modern Events Calendar to Copper](https://wpfusion.com/connect/connect-modern-events-calendar-to-copper/)  \|
- [Connect Modern Events Calendar to Customer.io](https://wpfusion.com/connect/connect-modern-events-calendar-to-customer-io/)  \|
- [Connect Modern Events Calendar to Customerly](https://wpfusion.com/connect/connect-modern-events-calendar-to-customerly/)  \|
- [Connect Modern Events Calendar to Drip](https://wpfusion.com/connect/connect-modern-events-calendar-to-drip/)  \|
- [Connect Modern Events Calendar to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-modern-events-calendar-to-dynamics-365-marketing/)  \|
- [Connect Modern Events Calendar to EmailOctopus](https://wpfusion.com/connect/connect-modern-events-calendar-to-emailoctopus/)  \|
- [Connect Modern Events Calendar to EngageBay](https://wpfusion.com/connect/connect-modern-events-calendar-to-engagebay/)  \|
- [Connect Modern Events Calendar to Flexie](https://wpfusion.com/connect/connect-modern-events-calendar-to-flexie/)  \|
- [Connect Modern Events Calendar to FluentCRM](https://wpfusion.com/connect/connect-modern-events-calendar-to-fluentcrm/)  \|
- [Connect Modern Events Calendar to FunnelKit](https://wpfusion.com/connect/connect-modern-events-calendar-to-funnelkit/)  \|
- [Connect Modern Events Calendar to Gist](https://wpfusion.com/connect/connect-modern-events-calendar-to-gist/)  \|
- [Connect Modern Events Calendar to Groundhogg](https://wpfusion.com/connect/connect-modern-events-calendar-to-groundhogg/)  \|
- [Connect Modern Events Calendar to HighLevel](https://wpfusion.com/connect/connect-modern-events-calendar-to-highlevel/)  \|
- [Connect Modern Events Calendar to HubSpot](https://wpfusion.com/connect/connect-modern-events-calendar-to-hubspot/)  \|
- [Connect Modern Events Calendar to Infusionsoft](https://wpfusion.com/connect/connect-modern-events-calendar-to-infusionsoft/)  \|
- [Connect Modern Events Calendar to Intercom](https://wpfusion.com/connect/connect-modern-events-calendar-to-intercom/)  \|
- [Connect Modern Events Calendar to Jetpack CRM](https://wpfusion.com/connect/connect-modern-events-calendar-to-jetpack-crm/)  \|
- [Connect Modern Events Calendar to Kartra](https://wpfusion.com/connect/connect-modern-events-calendar-to-kartra/)  \|
- [Connect Modern Events Calendar to Keap](https://wpfusion.com/connect/connect-modern-events-calendar-to-keap/)  \|
- [Connect Modern Events Calendar to Klaviyo](https://wpfusion.com/connect/connect-modern-events-calendar-to-klaviyo/)  \|
- [Connect Modern Events Calendar to KlickTipp](https://wpfusion.com/connect/connect-modern-events-calendar-to-klicktipp/)  \|
- [Connect Modern Events Calendar to Loopify](https://wpfusion.com/connect/connect-modern-events-calendar-to-loopify/)  \|
- [Connect Modern Events Calendar to MailChimp](https://wpfusion.com/connect/connect-modern-events-calendar-to-mailchimp/)  \|
- [Connect Modern Events Calendar to MailerLite](https://wpfusion.com/connect/connect-modern-events-calendar-to-mailerlite/)  \|
- [Connect Modern Events Calendar to Mailjet](https://wpfusion.com/connect/connect-modern-events-calendar-to-mailjet/)  \|
- [Connect Modern Events Calendar to MailPoet](https://wpfusion.com/connect/connect-modern-events-calendar-to-mailpoet/)  \|
- [Connect Modern Events Calendar to Maropost](https://wpfusion.com/connect/connect-modern-events-calendar-to-maropost/)  \|
- [Connect Modern Events Calendar to Mautic](https://wpfusion.com/connect/connect-modern-events-calendar-to-mautic/)  \|
- [Connect Modern Events Calendar to NationBuilder](https://wpfusion.com/connect/connect-modern-events-calendar-to-nationbuilder/)  \|
- [Connect Modern Events Calendar to Omnisend](https://wpfusion.com/connect/connect-modern-events-calendar-to-omnisend/)  \|
- [Connect Modern Events Calendar to Ontraport](https://wpfusion.com/connect/connect-modern-events-calendar-to-ontraport/)  \|
- [Connect Modern Events Calendar to Ortto](https://wpfusion.com/connect/connect-modern-events-calendar-to-ortto/)  \|
- [Connect Modern Events Calendar to Pipedrive](https://wpfusion.com/connect/connect-modern-events-calendar-to-pipedrive/)  \|
- [Connect Modern Events Calendar to Platformly](https://wpfusion.com/connect/connect-modern-events-calendar-to-platformly/)  \|
- [Connect Modern Events Calendar to Quentn](https://wpfusion.com/connect/connect-modern-events-calendar-to-quentn/)  \|
- [Connect Modern Events Calendar to Salesflare](https://wpfusion.com/connect/connect-modern-events-calendar-to-salesflare/)  \|
- [Connect Modern Events Calendar to Salesforce](https://wpfusion.com/connect/connect-modern-events-calendar-to-salesforce/)  \|
- [Connect Modern Events Calendar to Sender](https://wpfusion.com/connect/connect-modern-events-calendar-to-sender/)  \|
- [Connect Modern Events Calendar to SendFox](https://wpfusion.com/connect/connect-modern-events-calendar-to-sendfox/)  \|
- [Connect Modern Events Calendar to Tubular](https://wpfusion.com/connect/connect-modern-events-calendar-to-tubular/)  \|
- [Connect Modern Events Calendar to User.com](https://wpfusion.com/connect/connect-modern-events-calendar-to-user-com/)  \|
- [Connect Modern Events Calendar to WP ERP](https://wpfusion.com/connect/connect-modern-events-calendar-to-wp-erp/)  \|
- [Connect Modern Events Calendar to Zoho](https://wpfusion.com/connect/connect-modern-events-calendar-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/modern-events-calendar/#overview)
- [Ticket Setup](https://wpfusion.com/documentation/events/modern-events-calendar/#ticket-setup)
- [RSVPs](https://wpfusion.com/documentation/events/modern-events-calendar/#rsvps)
- [Event Check-ins](https://wpfusion.com/documentation/events/modern-events-calendar/#event-check-ins)
- [Syncing Event Details](https://wpfusion.com/documentation/events/modern-events-calendar/#syncing-event-details)
- [Zoom](https://wpfusion.com/documentation/events/modern-events-calendar/#zoom)

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