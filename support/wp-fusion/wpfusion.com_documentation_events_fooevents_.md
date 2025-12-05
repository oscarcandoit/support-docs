---
url: "https://wpfusion.com/documentation/events/fooevents/"
title: "Connect FooEvents to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/fooevents/#content)

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

# FooEvents

- Published onMarch 10, 2019
- Last updated on April 9, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- FooEvents

### [\#](https://wpfusion.com/documentation/events/fooevents/\#overview) Overview

WP Fusion integrates with [FooEvents](https://www.fooevents.com/) to allow you to add event attendees as contacts to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

You can also apply tags based on the event ticket purchased, and sync event details to custom fields in your CRM, such as Event Date, Venue, and Booking Time.

### [\#](https://wpfusion.com/documentation/events/fooevents/\#applying-tags-to-customers) Applying tags to customers

WP Fusion allows you to apply tags in your CRM when someone purchases an event, including support for variable event products.

Because FooEvents is based on WooCommerce, please [see our WooCommerce documentation](https://wpfusion.com/documentation/ecommerce/woocommerce/) for all the options regarding applying tags to customers and syncing customer data with FooEvents.

### [\#](https://wpfusion.com/documentation/events/fooevents/\#syncing-customer-and-attendee-details) Syncing customer and attendee details

By default WP Fusion will add the person who purchases the tickets to your CRM (via the [WooCommerce integration](https://wpfusion.com/documentation/ecommerce/woocommerce/)).

[![](https://wpfusion.com/wp-content/uploads/2019/03/foo-events-1-1024x724.jpg)](https://wpfusion.com/wp-content/uploads/2019/03/foo-events-1.jpg)

To add event attendees as separate contacts, navigate to the WP Fusion tab in the WooCommerce product and check the box for _Add attendees_.

You can also specify tags to be applied just to event attendees.

If an order is later refunded, any tags applied to the event attendees at checkout will be automatically removed.

[![](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-variations-878x1024.jpg)](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-variations.jpg) With variable products, tags for event attendees can be configured when editing each individual variation.

With variable products, tags for event attendees can be configured when editing each individual variation.

#### [\#](https://wpfusion.com/documentation/events/fooevents/\#syncing-attendee-meta) Syncing attendee meta

If you have enabled _Add attendees_ in the WP Fusion settings, and you have enabled _Capture attendee full name and email address?_ [in the FooEvents settings for the event](https://help.fooevents.com/docs/topics/getting-started/#selling-tickets-online), WP Fusion can sync each of your event attendees to separate contact records in your CRM.

To enable this, enable at least the _Attendee Email Address_ field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-attendee-fields-1024x309.jpg)](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-attendee-fields.jpg)

You can optionally enable additional attendee fields for sync.

If you are using the [Custom Attendee Fields](https://www.fooevents.com/products/fooevents-custom-attendee-fields/) addon, any custom fields you’ve added to the checkout will also appear alongside the other attendee fields, and can be enabled for sync by selecting a custom field in your CRM.

#### [\#](https://wpfusion.com/documentation/events/fooevents/\#syncing-event-details) Syncing event details

WP Fusion also lets you sync the event date, time, and venue name from your events to the customer’s contact record in your CRM, so this data can be merged into emails.

[![](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-event-fields-1024x312.jpg)](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-event-fields.jpg)

The available fields are:

- **Event Name:** The name of the event.
- **Event Start Date:** The start date of the event.
- **Event Start Time:** The start time of the event.
- **Event Venue Name:** The name of the event venue.
- **Zoom Meeting ID:** If your event is a [Zoom event](https://help.fooevents.com/docs/topics/events/zoom-meetings-and-webinars/), this will sync the Zoom meeting ID.
- **Zoom Join URL:** If your event is a [Zoom event](https://help.fooevents.com/docs/topics/events/zoom-meetings-and-webinars/), this will sync the URL to join the Zoom meeting.
- **Event Check-in:** This field will be updated when an attendee is checked in to an event. The possible values are: _Not Checked In_, _Checked In_, _Cancelled_, and _Unpaid._
- **Event Check-in Event Name:** This field will sync the event name of the event the attendee was checked in to.

If _Add attendees_ is enabled, the event custom fields will also be synced to each attendee’s contact record as well.

#### [\#](https://wpfusion.com/documentation/events/fooevents/\#bookings) Bookings

If the [FooEvents Bookings](https://www.fooevents.com/products/fooevents-bookings/) extension is active, you will also see two addition fields under the FooEvents header in the Contact Fields list, **Booking Date** and **Booking Time**.

When someone makes a booking via a bookable event, their selected date and time will be synced to the corresponding custom fields in your CRM.

You can then use this data in automations in your CRM to send pre-event and/or followup reminder emails and SMSs to your event attendees.

#### [\#](https://wpfusion.com/documentation/events/fooevents/\#event-check-ins) Event check-ins

FooEvents allows you to check in attendees to an event by editing the Ticket Status field on a ticket.

To track event attendance you can enable the `event_checkin` field for sync from the WP Fusion [contact fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

When the check-in status is updated on a ticket, the status will be synced to the selected custom field in your CRM. The possible values are: _Not Checked In_, _Checked In_, _Cancelled_, and _Unpaid._

#### [\#](https://wpfusion.com/documentation/events/fooevents/\#zoom) Zoom

WP Fusion allows you to sync the Zoom meeting ID and join URL to custom fields in your CRM when an attendee registers for a Zoom event. You can enable the fields **Zoom Meeting ID** and **Zoom Join URL** from the FooEvents section of [the Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

When an attendee buys a ticket or registers for an event that includes a Zoom meeting, the corresponding custom fields will be updated in your CRM.

### [\#](https://wpfusion.com/documentation/events/fooevents/\#exporting-tickets) Exporting tickets

If you already have an existing FooEvents store, you can use WP Fusion to sync all historical tickets to your CRM.

First configure your event products with any tags you’d like to be applied at registration, and enable any fields for sync. Then navigate to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section.

[![](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-batch-operation-1024x499.jpg)](https://wpfusion.com/wp-content/uploads/2019/03/fooevents-batch-operation.jpg)

Select “FooEvents tickets” from the list of options, and click **Create Background Task**.

WP Fusion will go through all of your tickets (from oldest to newest), adding or updating contacts in your CRM, and tagging them based on the event. A status bar will appear at the top of the page indicating the progress.

By default, WP Fusion will only export tickets that weren’t already successfully processed by WP Fusion.

If you un-check _Skip already processed orders_, WP Fusion will export all of the tickets on your site, regardless of whether they’ve already been synced.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect FooEvents to ActiveCampaign](https://wpfusion.com/connect/connect-fooevents-to-activecampaign/)  \|
- [Connect FooEvents to AgileCRM](https://wpfusion.com/connect/connect-fooevents-to-agilecrm/)  \|
- [Connect FooEvents to Autopilot](https://wpfusion.com/connect/connect-fooevents-to-autopilot/)  \|
- [Connect FooEvents to Bento](https://wpfusion.com/connect/connect-fooevents-to-bento/)  \|
- [Connect FooEvents to BirdSend](https://wpfusion.com/connect/connect-fooevents-to-birdsend/)  \|
- [Connect FooEvents to Brevo](https://wpfusion.com/connect/connect-fooevents-to-brevo/)  \|
- [Connect FooEvents to Capsule](https://wpfusion.com/connect/connect-fooevents-to-capsule/)  \|
- [Connect FooEvents to Constant Contact](https://wpfusion.com/connect/connect-fooevents-to-constant-contact/)  \|
- [Connect FooEvents to ConvertKit](https://wpfusion.com/connect/connect-fooevents-to-convertkit/)  \|
- [Connect FooEvents to ConvesioConvert](https://wpfusion.com/connect/connect-fooevents-to-convesioconvert/)  \|
- [Connect FooEvents to Copper](https://wpfusion.com/connect/connect-fooevents-to-copper/)  \|
- [Connect FooEvents to Customer.io](https://wpfusion.com/connect/connect-fooevents-to-customer-io/)  \|
- [Connect FooEvents to Customerly](https://wpfusion.com/connect/connect-fooevents-to-customerly/)  \|
- [Connect FooEvents to Drip](https://wpfusion.com/connect/connect-fooevents-to-drip/)  \|
- [Connect FooEvents to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-fooevents-to-dynamics-365-marketing/)  \|
- [Connect FooEvents to EmailOctopus](https://wpfusion.com/connect/connect-fooevents-to-emailoctopus/)  \|
- [Connect FooEvents to EngageBay](https://wpfusion.com/connect/connect-fooevents-to-engagebay/)  \|
- [Connect FooEvents to Flexie](https://wpfusion.com/connect/connect-fooevents-to-flexie/)  \|
- [Connect FooEvents to FluentCRM](https://wpfusion.com/connect/connect-fooevents-to-fluentcrm/)  \|
- [Connect FooEvents to FunnelKit](https://wpfusion.com/connect/connect-fooevents-to-funnelkit/)  \|
- [Connect FooEvents to Gist](https://wpfusion.com/connect/connect-fooevents-to-gist/)  \|
- [Connect FooEvents to Groundhogg](https://wpfusion.com/connect/connect-fooevents-to-groundhogg/)  \|
- [Connect FooEvents to HighLevel](https://wpfusion.com/connect/connect-fooevents-to-highlevel/)  \|
- [Connect FooEvents to HubSpot](https://wpfusion.com/connect/connect-fooevents-to-hubspot/)  \|
- [Connect FooEvents to Infusionsoft](https://wpfusion.com/connect/connect-fooevents-to-infusionsoft/)  \|
- [Connect FooEvents to Intercom](https://wpfusion.com/connect/connect-fooevents-to-intercom/)  \|
- [Connect FooEvents to Jetpack CRM](https://wpfusion.com/connect/connect-fooevents-to-jetpack-crm/)  \|
- [Connect FooEvents to Kartra](https://wpfusion.com/connect/connect-fooevents-to-kartra/)  \|
- [Connect FooEvents to Keap](https://wpfusion.com/connect/connect-fooevents-to-keap/)  \|
- [Connect FooEvents to Klaviyo](https://wpfusion.com/connect/connect-fooevents-to-klaviyo/)  \|
- [Connect FooEvents to KlickTipp](https://wpfusion.com/connect/connect-fooevents-to-klicktipp/)  \|
- [Connect FooEvents to Loopify](https://wpfusion.com/connect/connect-fooevents-to-loopify/)  \|
- [Connect FooEvents to MailChimp](https://wpfusion.com/connect/connect-fooevents-to-mailchimp/)  \|
- [Connect FooEvents to MailerLite](https://wpfusion.com/connect/connect-fooevents-to-mailerlite/)  \|
- [Connect FooEvents to Mailjet](https://wpfusion.com/connect/connect-fooevents-to-mailjet/)  \|
- [Connect FooEvents to MailPoet](https://wpfusion.com/connect/connect-fooevents-to-mailpoet/)  \|
- [Connect FooEvents to Maropost](https://wpfusion.com/connect/connect-fooevents-to-maropost/)  \|
- [Connect FooEvents to Mautic](https://wpfusion.com/connect/connect-fooevents-to-mautic/)  \|
- [Connect FooEvents to NationBuilder](https://wpfusion.com/connect/connect-fooevents-to-nationbuilder/)  \|
- [Connect FooEvents to Omnisend](https://wpfusion.com/connect/connect-fooevents-to-omnisend/)  \|
- [Connect FooEvents to Ontraport](https://wpfusion.com/connect/connect-fooevents-to-ontraport/)  \|
- [Connect FooEvents to Ortto](https://wpfusion.com/connect/connect-fooevents-to-ortto/)  \|
- [Connect FooEvents to Pipedrive](https://wpfusion.com/connect/connect-fooevents-to-pipedrive/)  \|
- [Connect FooEvents to Platformly](https://wpfusion.com/connect/connect-fooevents-to-platformly/)  \|
- [Connect FooEvents to Quentn](https://wpfusion.com/connect/connect-fooevents-to-quentn/)  \|
- [Connect FooEvents to Salesflare](https://wpfusion.com/connect/connect-fooevents-to-salesflare/)  \|
- [Connect FooEvents to Salesforce](https://wpfusion.com/connect/connect-fooevents-to-salesforce/)  \|
- [Connect FooEvents to Sender](https://wpfusion.com/connect/connect-fooevents-to-sender/)  \|
- [Connect FooEvents to SendFox](https://wpfusion.com/connect/connect-fooevents-to-sendfox/)  \|
- [Connect FooEvents to Tubular](https://wpfusion.com/connect/connect-fooevents-to-tubular/)  \|
- [Connect FooEvents to User.com](https://wpfusion.com/connect/connect-fooevents-to-user-com/)  \|
- [Connect FooEvents to WP ERP](https://wpfusion.com/connect/connect-fooevents-to-wp-erp/)  \|
- [Connect FooEvents to Zoho](https://wpfusion.com/connect/connect-fooevents-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/fooevents/#overview)
- [Applying tags to customers](https://wpfusion.com/documentation/events/fooevents/#applying-tags-to-customers)
- [Syncing customer and attendee details](https://wpfusion.com/documentation/events/fooevents/#syncing-customer-and-attendee-details)
- [Syncing attendee meta](https://wpfusion.com/documentation/events/fooevents/#syncing-attendee-meta)
- [Syncing event details](https://wpfusion.com/documentation/events/fooevents/#syncing-event-details)
- [Bookings](https://wpfusion.com/documentation/events/fooevents/#bookings)
- [Event check-ins](https://wpfusion.com/documentation/events/fooevents/#event-check-ins)
- [Zoom](https://wpfusion.com/documentation/events/fooevents/#zoom)
- [Exporting tickets](https://wpfusion.com/documentation/events/fooevents/#exporting-tickets)

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