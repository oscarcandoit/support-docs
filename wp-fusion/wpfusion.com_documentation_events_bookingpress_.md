---
url: "https://wpfusion.com/documentation/events/bookingpress/"
title: "Connect BookingPress to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/bookingpress/#content)

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

# BookingPress

- Published onMarch 24, 2025
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- BookingPress

### [\#](https://wpfusion.com/documentation/events/bookingpress/\#overview) Overview

WP Fusion includes an integration with [BookingPress](https://wpfusion.com/go/bookingpress) to sync event and appointment bookings to [any one of 50+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and apply tags and lists based on booked services and events.

You can use this data to create segments in your marketing lists or to trigger automations to follow up with customers before and after their appointment time.

### [\#](https://wpfusion.com/documentation/events/bookingpress/\#syncing-bookings) Syncing bookings

To create (and update) contacts in your CRM whenever someone makes a booking in BookingPress, enable the WP Fusion integration from BookingPress » Settings » Opt-Ins » WP Fusion.

[![this screenshot captures the wp fusion settings within a booking system interface. the left sidebar features menu options such as notifications and working hours, while the main area displays fields for email, expiration date, and name settings. a save button sits conveniently at the top right.](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-optins-1024x843.jpg)](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-optins.jpg)

For each field in your CRM, select a corresponding field in BookingPress to enable the field for sync.

You can also optionally apply tags and/or lists (if supported) in your CRM to everyone who makes a booking.

### [\#](https://wpfusion.com/documentation/events/bookingpress/\#tagging-customers) Tagging customers

You can also configure tags when editing any BookingPress service. Select one or more tags (or lists) under the WP Fusion Integration header.

[![the screenshot captures a wordpress interface specifically for bookingpress service editing. fields displayed include service name, category, price, duration, and buffer time, along with start and expiry date options. a save button sits conveniently at the top right for seamless updates.](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-services-1024x664.jpg)](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-services.jpg)

If you have configured tags on a service and have _not_ enabled WP Fusion in the Opt-Ins settings, then contacts will only be created in your CRM for people who book that specific service, as opposed to all bookings.

### [\#](https://wpfusion.com/documentation/events/bookingpress/\#custom-fields) Custom fields

WP Fusion makes several BookingPress fields available for sync from [the Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![screenshot of a bookingpress form setup, showcasing the bookingpress appointment and bookingpress service sections. fields like appointment date, service name, and payment status feature dropdowns for easy selection. some fields are partially filled, illustrating seamless integration with bookingpress.](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-fields-1024x510.jpg)](https://wpfusion.com/wp-content/uploads/2025/03/bookingpress-fields.jpg)

The fields are:

- **Appointment Date / Time:** The date and time of the customer’s booking.
- **Appointment Status:** Either Approved, Pending, Cancelled, Rejected, No-Show, or Completed
- **Payment Status:** Either Paid, Pending, Refunded, Partially Paid, or Partially Refunded
- **Appointment Amount:** The total amount paid
- **Appointment Note:** Any notes provided by the customer
- **Service Name:** The name of the booked service
- **Service Duration:** The duration of the service
- **Service Price:** The price of the booked service
- **Service Category:** The service category

For each, select a corresponding custom field in your connected CRM to enable it for sync.

When an appointment or event is booked any enabled fields will be synced to the customer’s contact record in your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect BookingPress to ActiveCampaign](https://wpfusion.com/connect/connect-bookingpress-to-activecampaign/)  \|
- [Connect BookingPress to AgileCRM](https://wpfusion.com/connect/connect-bookingpress-to-agilecrm/)  \|
- [Connect BookingPress to Autopilot](https://wpfusion.com/connect/connect-bookingpress-to-autopilot/)  \|
- [Connect BookingPress to Bento](https://wpfusion.com/connect/connect-bookingpress-to-bento/)  \|
- [Connect BookingPress to BirdSend](https://wpfusion.com/connect/connect-bookingpress-to-birdsend/)  \|
- [Connect BookingPress to Brevo](https://wpfusion.com/connect/connect-bookingpress-to-brevo/)  \|
- [Connect BookingPress to Capsule](https://wpfusion.com/connect/connect-bookingpress-to-capsule/)  \|
- [Connect BookingPress to Constant Contact](https://wpfusion.com/connect/connect-bookingpress-to-constant-contact/)  \|
- [Connect BookingPress to ConvertKit](https://wpfusion.com/connect/connect-bookingpress-to-convertkit/)  \|
- [Connect BookingPress to ConvesioConvert](https://wpfusion.com/connect/connect-bookingpress-to-convesioconvert/)  \|
- [Connect BookingPress to Copper](https://wpfusion.com/connect/connect-bookingpress-to-copper/)  \|
- [Connect BookingPress to Customer.io](https://wpfusion.com/connect/connect-bookingpress-to-customer-io/)  \|
- [Connect BookingPress to Customerly](https://wpfusion.com/connect/connect-bookingpress-to-customerly/)  \|
- [Connect BookingPress to Drip](https://wpfusion.com/connect/connect-bookingpress-to-drip/)  \|
- [Connect BookingPress to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-bookingpress-to-dynamics-365-marketing/)  \|
- [Connect BookingPress to EmailOctopus](https://wpfusion.com/connect/connect-bookingpress-to-emailoctopus/)  \|
- [Connect BookingPress to EngageBay](https://wpfusion.com/connect/connect-bookingpress-to-engagebay/)  \|
- [Connect BookingPress to Flexie](https://wpfusion.com/connect/connect-bookingpress-to-flexie/)  \|
- [Connect BookingPress to FluentCRM](https://wpfusion.com/connect/connect-bookingpress-to-fluentcrm/)  \|
- [Connect BookingPress to FunnelKit](https://wpfusion.com/connect/connect-bookingpress-to-funnelkit/)  \|
- [Connect BookingPress to Gist](https://wpfusion.com/connect/connect-bookingpress-to-gist/)  \|
- [Connect BookingPress to Groundhogg](https://wpfusion.com/connect/connect-bookingpress-to-groundhogg/)  \|
- [Connect BookingPress to HighLevel](https://wpfusion.com/connect/connect-bookingpress-to-highlevel/)  \|
- [Connect BookingPress to HubSpot](https://wpfusion.com/connect/connect-bookingpress-to-hubspot/)  \|
- [Connect BookingPress to Infusionsoft](https://wpfusion.com/connect/connect-bookingpress-to-infusionsoft/)  \|
- [Connect BookingPress to Intercom](https://wpfusion.com/connect/connect-bookingpress-to-intercom/)  \|
- [Connect BookingPress to Jetpack CRM](https://wpfusion.com/connect/connect-bookingpress-to-jetpack-crm/)  \|
- [Connect BookingPress to Kartra](https://wpfusion.com/connect/connect-bookingpress-to-kartra/)  \|
- [Connect BookingPress to Keap](https://wpfusion.com/connect/connect-bookingpress-to-keap/)  \|
- [Connect BookingPress to Klaviyo](https://wpfusion.com/connect/connect-bookingpress-to-klaviyo/)  \|
- [Connect BookingPress to KlickTipp](https://wpfusion.com/connect/connect-bookingpress-to-klicktipp/)  \|
- [Connect BookingPress to Loopify](https://wpfusion.com/connect/connect-bookingpress-to-loopify/)  \|
- [Connect BookingPress to MailChimp](https://wpfusion.com/connect/connect-bookingpress-to-mailchimp/)  \|
- [Connect BookingPress to MailerLite](https://wpfusion.com/connect/connect-bookingpress-to-mailerlite/)  \|
- [Connect BookingPress to Mailjet](https://wpfusion.com/connect/connect-bookingpress-to-mailjet/)  \|
- [Connect BookingPress to MailPoet](https://wpfusion.com/connect/connect-bookingpress-to-mailpoet/)  \|
- [Connect BookingPress to Maropost](https://wpfusion.com/connect/connect-bookingpress-to-maropost/)  \|
- [Connect BookingPress to Mautic](https://wpfusion.com/connect/connect-bookingpress-to-mautic/)  \|
- [Connect BookingPress to NationBuilder](https://wpfusion.com/connect/connect-bookingpress-to-nationbuilder/)  \|
- [Connect BookingPress to Omnisend](https://wpfusion.com/connect/connect-bookingpress-to-omnisend/)  \|
- [Connect BookingPress to Ontraport](https://wpfusion.com/connect/connect-bookingpress-to-ontraport/)  \|
- [Connect BookingPress to Ortto](https://wpfusion.com/connect/connect-bookingpress-to-ortto/)  \|
- [Connect BookingPress to Pipedrive](https://wpfusion.com/connect/connect-bookingpress-to-pipedrive/)  \|
- [Connect BookingPress to Platformly](https://wpfusion.com/connect/connect-bookingpress-to-platformly/)  \|
- [Connect BookingPress to Quentn](https://wpfusion.com/connect/connect-bookingpress-to-quentn/)  \|
- [Connect BookingPress to Salesflare](https://wpfusion.com/connect/connect-bookingpress-to-salesflare/)  \|
- [Connect BookingPress to Salesforce](https://wpfusion.com/connect/connect-bookingpress-to-salesforce/)  \|
- [Connect BookingPress to Sender](https://wpfusion.com/connect/connect-bookingpress-to-sender/)  \|
- [Connect BookingPress to SendFox](https://wpfusion.com/connect/connect-bookingpress-to-sendfox/)  \|
- [Connect BookingPress to Tubular](https://wpfusion.com/connect/connect-bookingpress-to-tubular/)  \|
- [Connect BookingPress to User.com](https://wpfusion.com/connect/connect-bookingpress-to-user-com/)  \|
- [Connect BookingPress to WP ERP](https://wpfusion.com/connect/connect-bookingpress-to-wp-erp/)  \|
- [Connect BookingPress to Zoho](https://wpfusion.com/connect/connect-bookingpress-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/bookingpress/#overview)
- [Syncing bookings](https://wpfusion.com/documentation/events/bookingpress/#syncing-bookings)
- [Tagging customers](https://wpfusion.com/documentation/events/bookingpress/#tagging-customers)
- [Custom fields](https://wpfusion.com/documentation/events/bookingpress/#custom-fields)

### You may also like

[![illustration showcasing the best wordpress booking plugins: bookingpress, amelia, fluentbooking, latepoint. a clipboard icon sits beside a wordpress logo, with a bold checkmark over a calendar icon. real users trust these solutions, and wpfusion is noted below.](https://wpfusion.com/wp-content/uploads/2025/04/Plugins-1-300x158.png)](https://wpfusion.com/tutorials/best-wordpress-booking-plugins/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [4 Best WordPress Booking Plugins (Recommended by Real Users)](https://wpfusion.com/tutorials/best-wordpress-booking-plugins/)

Learn about the best WordPress booking plugins (BookingPress, Amelia, FluentBooking, and LatePoint) to streamline appointments, accept payments, and grow your service business with smart scheduling solutions.

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