---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001019"
title: " Pre and Post buffers : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001019#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Creating Calendars](https://help.gohighlevel.com/support/solutions/folders/48000666396)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001019#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Creating Calendars](https://help.gohighlevel.com/support/solutions/folders/48000666396)
6. Pre and Post buffers

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Pre and Post buffers

Modified on: Tue, 2 Apr, 2024 at 5:48 AM

**TABLE OF CONTENTS**

- [What are buffers?](https://help.gohighlevel.com/support/solutions/articles/155000001019#What-are-buffers?)
- [How to set buffers](https://help.gohighlevel.com/support/solutions/articles/155000001019#How-to-set-buffers)
- [How to turn off buffers](https://help.gohighlevel.com/support/solutions/articles/155000001019#How-to-turn-off-buffers%C2%A0)
- [Buffer Logic](https://help.gohighlevel.com/support/solutions/articles/155000001019#Buffer-Logic)
- [Buffer Duration Affecting Available Slots](https://help.gohighlevel.com/support/solutions/articles/155000001019#Buffer-Duration-Affecting-Available-Slots)
- [FAQs](https://help.gohighlevel.com/support/solutions/articles/155000001019#FAQs)

### What are buffers?

Buffers are additional time that can be added before and/or after a GHL event. This feature can be beneficial if you need extra time to get ready before a meeting, travel to an event, or wrap up after a presentation. Buffer settings are customised for each event type, allowing you to fine-tune and optimize them as needed

### How to set buffers

Here's how to add buffers to your appointments:

- Choose the calendar to which you want to add buffers for appointments.
- If you're creating a new calendar, go to "Advanced Settings." If you're working with an existing calendar, click on "Edit."
- Navigate to the "Availability" section.
- Look for the options labeled "Pre buffer time" and "Post buffer time"
- Specify the duration you want for both the pre and post buffers.
- Don't forget to save your settings.

These buffers will ensure you have the extra time you need before and after your appointments.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008252070/original/Pk23PglvoH7miofggGQhAj0wlNq9uHGckg.png?1695296287)

### How to turn off buffers

- Choose the calendar for which you would want to turn off the buffers and click on edit
- Go to "Availability" and scroll down to the page where you see "Pre and Post buffer"
- Make the values as "0"
- Don't forget to save your settings

This will ensure that going forward any appointment which gets booked on that calendar would not have any buffers

### Buffer Logic

Buffers are only applied to appointments created within the system or through third-party calendars with the 'Allow Contact Creation' feature enabled. However, blocked slots or events synced from third-party calendars (Google, Outlook, iCloud) are considered when applying buffers. This ensures that buffers do not overlap with blocked slots, providing appropriate buffer times for appointments.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008249415/original/Ew_k9fwnbzOx3l7xgYOFgGaaAjPOgYVEfQ.png?1695295311)

### Buffer Duration Affecting Available Slots

Using the example above, if there's a 30-minute event with 15-minute buffers before and after, someone else booking on the same day will see an available slot 30 minutes after the existing booking.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008248682/original/ZynVOHKf4olx_WfqBLTqWcqXZDeSk9T9uw.png?1695295018)

It's important to note that when using both Pre and Post buffers, there are instances where seemingly large free periods in the calendar cannot be booked. This is due to double buffering, where both before and after buffers are applied, resulting in the removal of significant time slots from the scheduling page.

```
To maximize bookable time slots on your scheduling page, consider your event types to use only a single buffer, either pre or post buffer
```

A new event cannot be scheduled if it does not match the buffer criteria for that appointment slot as well as the previous booked slot.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008248759/original/Hx5MxC2ya2FQPzRkH_BdOmFVw-zpDBL3NA.png?1695295045)

```
Note that if you set buffers for an individual schedule event, it will affect the user's availability across other calendars where they are involved as well.
```

- In a round-robin calendar event, individual buffer settings on a user's other calendars can result in an uneven distribution of appointments.

- In a collective calendar event, an individual's buffer settings on their other calendars can block available slots that might otherwise appear free, as the buffer time occupies those slots.

### FAQs

**Question:** Do buffers impact events booked outside of GHL?

**Answer:** Buffers are applicable solely to appointments booked through the GHL app. However, there is an exception: if your two-way sync or smart sync feature is enabled (where the system converts third-party calendar events into appointments instead of treating them as blocked slots), buffers would be applied in such a scenario.

**Question:** How do buffers affect available time slots for scheduling appointments?

**Answer:** Buffers affect available time slots. For example, if a 30-minute event has 15-minute pre and post buffers, the next appointment will be scheduled 30 minutes after the existing booking. Double buffers can limit seemingly free periods in the calendar, removing significant time slots. To maximize bookable time slots, consider using a single buffer (either pre or post).

**Question:** Can I remove or alter a buffer once it's set for a booked appointment?

**Answer:** Once a buffer is set for a booked appointment, it can be removed or altered. Buffers are applied based on the latest settings.

**Question:** What happens if buffer settings are different on an individual's other calendars in a round-robin calendar event?

**Answer:** In a round-robin calendar event, varying buffer settings on an individual's other calendars can result in an uneven distribution of appointments among users.

**Question:** Can buffer settings on an individual's other calendars affect the booking of appointments in a collective calendar event?

**Answer:** Yes, in a collective calendar event, buffer settings on an individual's other calendars can block available slots that may otherwise appear free due to buffer time occupying those slots.

**Question:** What is double buffer?

**Answer:** Double buffering refers to the use of both pre-buffer and post-buffer times before and after an event or appointment. It means that extra time is added both before and after an event, effectively extending the duration of the buffer. This can result in time slots that appear to be free on the calendar but are not available for booking because the double buffering occupies those time slots. Double buffering reduces the number of bookable appointments within a given timeframe.

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [Show seats per slot for Class booking on the booking widget](https://help.gohighlevel.com/support/solutions/articles/155000000956-show-seats-per-slot-for-class-booking-on-the-booking-widget)
- [Pre and Post buffers](https://help.gohighlevel.com/support/solutions/articles/155000001019-pre-and-post-buffers)
- [Consent checkbox for compliance](https://help.gohighlevel.com/support/solutions/articles/155000001032-consent-checkbox-for-compliance)
- [In App Calendar view](https://help.gohighlevel.com/support/solutions/articles/155000001202-in-app-calendar-view)
- [Google Organic Booking](https://help.gohighlevel.com/support/solutions/articles/155000001427-google-organic-booking)
- [Calendar Widget Customization](https://help.gohighlevel.com/support/solutions/articles/155000001529-calendar-widget-customization)

## Related Articles

- [Why Appointment Time Slots Are Missing on Your Calendar](https://help.gohighlevel.com/support/solutions/articles/48001181711-why-appointment-time-slots-are-missing-on-your-calendar)
- [Creating a Booking](https://help.gohighlevel.com/support/solutions/articles/155000006624-creating-a-booking)
- [Editing a Rental Booking](https://help.gohighlevel.com/support/solutions/articles/155000006626-editing-a-rental-booking)
- [Create & Edit Listings](https://help.gohighlevel.com/support/solutions/articles/155000006579-create-edit-listings)
- [Email Notification for Failed Post, Account Expired and Post Approval](https://help.gohighlevel.com/support/solutions/articles/155000002407-email-notification-for-failed-post-account-expired-and-post-approval)
- [Social Media Domination for Mortgage Brokers](https://help.gohighlevel.com/support/solutions/articles/155000005281-social-media-domination-for-mortgage-brokers)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001019)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001019-pre-and-post-buffers/hit)