---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers
category: articles
type: article
scraped: 2025-10-28T16:07:53.901Z
title:  Pre and Post buffers : LeadConnector 
status_code: 200
---

#  Pre and Post buffers : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Scheduling & Calendars (Bookings)](https://help.leadconnectorhq.com/support/solutions/48000454681) [Calendars](https://help.leadconnectorhq.com/support/solutions/folders/48000689367)

## Pre and Post buffers  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers\# "Print this Article")

Modified on: Wed, 6 Mar, 2024 at 6:57 AM

* * *

**TABLE OF CONTENTS**

- [What are buffers?](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#What-are-buffers?)
- [How to set buffers](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#How-to-set-buffers)
- [How to turn off buffers](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#How-to-turn-off-buffers%C2%A0)
- [Buffer Logic](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#Buffer-Logic)
- [Buffer Duration Affecting Available Slots](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#Buffer-Duration-Affecting-Available-Slots)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers#FAQs)

### What are buffers?

Buffers are additional time that can be added before and/or after an appointment. This feature can be beneficial if you need extra time to get ready before a meeting, travel to an event, or wrap up after a presentation. Buffer settings are customised for each event type, allowing you to fine-tune and optimize them as needed

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

Buffers only apply to events booked through the app. This means that buffers would only be applied to any appointment created within the app. Blocked slots or events synced from third-party calendars (Google, Outlook, iCloud) are not considered when applying buffers.

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

**Question:** Do buffers impact events booked outside of the app?

**Answer:** Buffers are applicable solely to appointments booked through the app. However, there is an exception: if your two-way sync or smart sync feature is enabled (where the system converts third-party calendar events into appointments instead of treating them as blocked slots), buffers would be applied in such scenarios.

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

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000002072-pre-and-post-buffers*  
*Generated on: 2025-10-28T16:07:53.901Z*
