---
url: "https://wpfusion.com/documentation/events/event-espresso/"
title: "Connect Event Espresso to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/events/event-espresso/#content)

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

# Event Espresso

- Published onFebruary 28, 2019
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Events](https://wpfusion.com/documentation/#events)
- /
- Event Espresso

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#overview) Overview

WP Fusion integrates with [Event Espresso](https://eventespresso.com/) to allow you to add contacts to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register for an event. You can also optionally apply tags based on the ticket used at registration.

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#syncing-contact-records) Syncing contact records

To sync new event registrations to your CRM, head to Settings » WP Fusion and scroll down to the Event Espresso section on the Contact Fields tab.

![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-2-1024x594.jpg)

For each Event Espresso field you can select a corresponding field in your CRM in which to store the data.

WP Fusion will detect any custom questions on your registration forms, and these can be synced to custom fields in your CRM as well.

If there are multiple attendees entered on the same registration form, these will be added as separate contacts.

#### [\#](https://wpfusion.com/documentation/events/event-espresso/\#event-fields) Event Fields

In addition to the attendee fields, WP Fusion can sync several “pseudo” fields related to the event and venue to the attendee’s contact record in your CRM.

This data can then be used in your CRM to create segments of your event attendees, trigger automations, or be merged into followup emails.

Those fields are:

- Event Name
- Event Start Date
- Event Start Time
- Venue Name
- Venue Address
- Venue City
- Venue State
- Venue Country
- Venue Postal Code

#### [\#](https://wpfusion.com/documentation/events/event-espresso/\#other-fields) Other fields

WP Fusion can sync the purchased ticket name to a custom field in your CRM, by enabling the **Ticket Name** field. This can be used to create segments of attendees based on the name of the purchased ticket.

By enabling the **Registration Status** field, WP Fusion will sync the attendee’s registration status to your CRM when the registration is created, and each time the registration status is updated. This can be used to trigger automations based on the status of someone’s registration, for example _Wait List_ or _Approved_.

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#ticket-settings) Ticket Settings

WP Fusion includes a few options for applying CRM tags to your Event Espresso registrants and attendees. These can be accessed by clicking the _Advanced Settings_ button (the gear icon) on any Event Espresso ticket.

**Note:** WP Fusion is not currently compatible with the Event Espresso Advanced Editor. To access the WP Fusion ticket settings, you will need to make sure Legacy Editor is selected under Events » Default Settings. [![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-advanced-editor-1024x633.jpg)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-advanced-editor.jpg)

#### [\#](https://wpfusion.com/documentation/events/event-espresso/\#multiple-attendees) Multiple Attendees

By default WP Fusion will sync just the customer who purchased the ticket to your CRM. To sync each event attendee as a separate contact, enable the checkbox for **Add Attendees**.

[![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-ticket-settings-915x1024.png)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-ticket-settings.png)

Each event attendee will be synced to your CRM with the details provided for that attendee at checkout, and any tags specified on the ticket settings will be applied to the event attendees as well as the person who purchased the tickets.

#### [\#](https://wpfusion.com/documentation/events/event-espresso/\#registration-tagging) Registration tagging

The ticket settings panel also includes options for applying tags in your CRM based on the status of an event registration.

[![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-1-1024x612.jpg)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-1.jpg)

There are two settings:

- **Apply Tags – Pending:** These tags will be applied to the attendee after they’ve submitted their details but before a payment has been made.
- **Apply Tags – Approved:** These tags will be applied when a payment has been received or an attendee is manually approved.

#### [\#](https://wpfusion.com/documentation/events/event-espresso/\#event-check-ins) Event check-ins

WP Fusion can also detect when an attendee is checked in our checked out of an event in Event Espresso, and apply tags in your CRM. This setting is found on with the other WP Fusion settings when editing an event ticket.

[![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-check-in-1024x493.jpg)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-check-in-scaled.jpg)

When you manually mark an event attendee as checked-in or checked-out of an event, these tags will be applied to that attendee’s contact record in your CRM.

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#general-settings) General Settings

WP Fusion includes some general settings for Event Espresso. These can be found at Settings » WP Fusion » Integrations » Event Espresso.

[![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-registration-status-tagging-1024x568.jpg)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-registration-status-tagging.jpg)

For each registration status you can select tags to be applied in your CRM.

When a registration is created or a registration status changes, the specified tags will be applied to the registrant’s contact record in your CRM.

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#enhanced-ecommerce) Enhanced Ecommerce

WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) (available to Plus and Professional license holders) can sync Event Espresso transactions to supported CRMs and email marketing platforms.

[![](https://wpfusion.com/wp-content/uploads/2018/12/event-espresso-enhanced-ecommerce-hubspot-1024x597.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/event-espresso-enhanced-ecommerce-hubspot.jpg) The Event Espresso transaction synced to HubSpot as a deal, including the contact who made the registration, and a line item (in the right sidebar) indicating the ticket purchased.

With Event Espresso, the Ecommerce Addon will send enhanced ecommerce data for all purchases of tickets in Event Espresso.

In CRMs that have Products as separate entities from Orders, you can associate your Event Espresso tickets with CRM products by selecting them from the product dropdown while editing the ticket.

[![](https://wpfusion.com/wp-content/uploads/2016/06/event-espresso-ecommerce-1024x409.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/event-espresso-ecommerce.jpg)

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

### [\#](https://wpfusion.com/documentation/events/event-espresso/\#exporting-registrations) Exporting Registrations

WP Fusion includes a batch exporter tool for Event Espresso registrations. This can be found under Settings » WP Fusion » Advanced.

[![](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-export-1024x662.jpg)](https://wpfusion.com/wp-content/uploads/2019/02/event-espresso-export-scaled.jpg)

Running the **Event Espresso registrations** operation will find any “Approved” Event Espresso registrations that have not yet been processed by WP Fusion, and sync them to your CRM as if they just happened. This will create / update contact records based on the provided registration data, and apply any tags you’ve configured for your events.

You can choose _Skip already processed_ to ignore registrations that were already processed by WP Fusion.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Event Espresso to ActiveCampaign](https://wpfusion.com/connect/connect-event-espresso-to-activecampaign/)  \|
- [Connect Event Espresso to AgileCRM](https://wpfusion.com/connect/connect-event-espresso-to-agilecrm/)  \|
- [Connect Event Espresso to Autopilot](https://wpfusion.com/connect/connect-event-espresso-to-autopilot/)  \|
- [Connect Event Espresso to Bento](https://wpfusion.com/connect/connect-event-espresso-to-bento/)  \|
- [Connect Event Espresso to BirdSend](https://wpfusion.com/connect/connect-event-espresso-to-birdsend/)  \|
- [Connect Event Espresso to Brevo](https://wpfusion.com/connect/connect-event-espresso-to-brevo/)  \|
- [Connect Event Espresso to Capsule](https://wpfusion.com/connect/connect-event-espresso-to-capsule/)  \|
- [Connect Event Espresso to Constant Contact](https://wpfusion.com/connect/connect-event-espresso-to-constant-contact/)  \|
- [Connect Event Espresso to ConvertKit](https://wpfusion.com/connect/connect-event-espresso-to-convertkit/)  \|
- [Connect Event Espresso to ConvesioConvert](https://wpfusion.com/connect/connect-event-espresso-to-convesioconvert/)  \|
- [Connect Event Espresso to Copper](https://wpfusion.com/connect/connect-event-espresso-to-copper/)  \|
- [Connect Event Espresso to Customer.io](https://wpfusion.com/connect/connect-event-espresso-to-customer-io/)  \|
- [Connect Event Espresso to Customerly](https://wpfusion.com/connect/connect-event-espresso-to-customerly/)  \|
- [Connect Event Espresso to Drip](https://wpfusion.com/connect/connect-event-espresso-to-drip/)  \|
- [Connect Event Espresso to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-event-espresso-to-dynamics-365-marketing/)  \|
- [Connect Event Espresso to EmailOctopus](https://wpfusion.com/connect/connect-event-espresso-to-emailoctopus/)  \|
- [Connect Event Espresso to EngageBay](https://wpfusion.com/connect/connect-event-espresso-to-engagebay/)  \|
- [Connect Event Espresso to Flexie](https://wpfusion.com/connect/connect-event-espresso-to-flexie/)  \|
- [Connect Event Espresso to FluentCRM](https://wpfusion.com/connect/connect-event-espresso-to-fluentcrm/)  \|
- [Connect Event Espresso to FunnelKit](https://wpfusion.com/connect/connect-event-espresso-to-funnelkit/)  \|
- [Connect Event Espresso to Gist](https://wpfusion.com/connect/connect-event-espresso-to-gist/)  \|
- [Connect Event Espresso to Groundhogg](https://wpfusion.com/connect/connect-event-espresso-to-groundhogg/)  \|
- [Connect Event Espresso to HighLevel](https://wpfusion.com/connect/connect-event-espresso-to-highlevel/)  \|
- [Connect Event Espresso to HubSpot](https://wpfusion.com/connect/connect-event-espresso-to-hubspot/)  \|
- [Connect Event Espresso to Infusionsoft](https://wpfusion.com/connect/connect-event-espresso-to-infusionsoft/)  \|
- [Connect Event Espresso to Intercom](https://wpfusion.com/connect/connect-event-espresso-to-intercom/)  \|
- [Connect Event Espresso to Jetpack CRM](https://wpfusion.com/connect/connect-event-espresso-to-jetpack-crm/)  \|
- [Connect Event Espresso to Kartra](https://wpfusion.com/connect/connect-event-espresso-to-kartra/)  \|
- [Connect Event Espresso to Keap](https://wpfusion.com/connect/connect-event-espresso-to-keap/)  \|
- [Connect Event Espresso to Klaviyo](https://wpfusion.com/connect/connect-event-espresso-to-klaviyo/)  \|
- [Connect Event Espresso to KlickTipp](https://wpfusion.com/connect/connect-event-espresso-to-klicktipp/)  \|
- [Connect Event Espresso to Loopify](https://wpfusion.com/connect/connect-event-espresso-to-loopify/)  \|
- [Connect Event Espresso to MailChimp](https://wpfusion.com/connect/connect-event-espresso-to-mailchimp/)  \|
- [Connect Event Espresso to MailerLite](https://wpfusion.com/connect/connect-event-espresso-to-mailerlite/)  \|
- [Connect Event Espresso to Mailjet](https://wpfusion.com/connect/connect-event-espresso-to-mailjet/)  \|
- [Connect Event Espresso to MailPoet](https://wpfusion.com/connect/connect-event-espresso-to-mailpoet/)  \|
- [Connect Event Espresso to Maropost](https://wpfusion.com/connect/connect-event-espresso-to-maropost/)  \|
- [Connect Event Espresso to Mautic](https://wpfusion.com/connect/connect-event-espresso-to-mautic/)  \|
- [Connect Event Espresso to NationBuilder](https://wpfusion.com/connect/connect-event-espresso-to-nationbuilder/)  \|
- [Connect Event Espresso to Omnisend](https://wpfusion.com/connect/connect-event-espresso-to-omnisend/)  \|
- [Connect Event Espresso to Ontraport](https://wpfusion.com/connect/connect-event-espresso-to-ontraport/)  \|
- [Connect Event Espresso to Ortto](https://wpfusion.com/connect/connect-event-espresso-to-ortto/)  \|
- [Connect Event Espresso to Pipedrive](https://wpfusion.com/connect/connect-event-espresso-to-pipedrive/)  \|
- [Connect Event Espresso to Platformly](https://wpfusion.com/connect/connect-event-espresso-to-platformly/)  \|
- [Connect Event Espresso to Quentn](https://wpfusion.com/connect/connect-event-espresso-to-quentn/)  \|
- [Connect Event Espresso to Salesflare](https://wpfusion.com/connect/connect-event-espresso-to-salesflare/)  \|
- [Connect Event Espresso to Salesforce](https://wpfusion.com/connect/connect-event-espresso-to-salesforce/)  \|
- [Connect Event Espresso to Sender](https://wpfusion.com/connect/connect-event-espresso-to-sender/)  \|
- [Connect Event Espresso to SendFox](https://wpfusion.com/connect/connect-event-espresso-to-sendfox/)  \|
- [Connect Event Espresso to Tubular](https://wpfusion.com/connect/connect-event-espresso-to-tubular/)  \|
- [Connect Event Espresso to User.com](https://wpfusion.com/connect/connect-event-espresso-to-user-com/)  \|
- [Connect Event Espresso to WP ERP](https://wpfusion.com/connect/connect-event-espresso-to-wp-erp/)  \|
- [Connect Event Espresso to Zoho](https://wpfusion.com/connect/connect-event-espresso-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/events/event-espresso/#overview)
- [Syncing contact records](https://wpfusion.com/documentation/events/event-espresso/#syncing-contact-records)
- [Event Fields](https://wpfusion.com/documentation/events/event-espresso/#event-fields)
- [Other fields](https://wpfusion.com/documentation/events/event-espresso/#other-fields)
- [Ticket Settings](https://wpfusion.com/documentation/events/event-espresso/#ticket-settings)
- [Multiple Attendees](https://wpfusion.com/documentation/events/event-espresso/#multiple-attendees)
- [Registration tagging](https://wpfusion.com/documentation/events/event-espresso/#registration-tagging)
- [Event check-ins](https://wpfusion.com/documentation/events/event-espresso/#event-check-ins)
- [General Settings](https://wpfusion.com/documentation/events/event-espresso/#general-settings)
- [Enhanced Ecommerce](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [Exporting Registrations](https://wpfusion.com/documentation/events/event-espresso/#exporting-registrations)

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