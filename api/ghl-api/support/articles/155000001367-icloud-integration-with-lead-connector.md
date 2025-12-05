---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector
category: articles
type: article
scraped: 2025-10-28T16:04:24.042Z
title:  iCloud Integration with Lead Connector : LeadConnector 
status_code: 200
---

#  iCloud Integration with Lead Connector : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Scheduling & Calendars (Bookings)](https://help.leadconnectorhq.com/support/solutions/48000454681) [Calendars](https://help.leadconnectorhq.com/support/solutions/folders/48000689367)

## iCloud Integration with Lead Connector  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector\# "Print this Article")

Modified on: Fri, 24 Nov, 2023 at 1:23 AM

* * *

**In this Article**

- [Overview](https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector#Overview)
- [Data Flow: Lead Connector to iCloud](https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector#Data-Flow%3A-Lead-Connector-to-iCloud)
- [Data Flow: iCloud to Lead Connector](https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector#Data-Flow%3A-iCloud-to-Lead-Connector)

**Related Article**

- [How to connect iCloud with Lead Connector?](https://help.leadconnectorhq.com/en/support/solutions/articles/155000001478)

* * *

### **Overview**

Before diving into the details of iCloud integration, it's essential to note a few key points:

- The iCloud Calendar integration is specifically designed for Round Robin, Collective, Class Booking, and Service Calendar.
- Two-way event syncs are possible with iCloud integration: events created in Lead Connector can sync to iCloud, and events created in iCloud can sync to Lead Connector.

```
iCloud Integration is not supported for Simple Calendars
```

* * *

### **Data Flow: Lead Connector (LC) to iCloud**

When events are created in Lead Connector and synced to iCloud:

- Any changes made in Lead Connector will be reflected in the connected iCloud calendar for the user.
- Any changes made in iCloud calendar will be reflected in the Lead Connector calendar **(excluding event deletions)**.

This ensures that events created or modified in the LC app are seamlessly pushed to your iCloud calendar, and vice versa.

```
If an event is deleted in iCloud calendar then it is not updated on the Lead Connector Calendar. This is a limitation with iCloud Integration.

Blocked off slot created in LC calendar will not sync to iCloud
```

### **Data Flow: iCloud to Lead Connector**

When events are created in iCloud and pushed to Lead Connector:

- Any changes made in iCloud calendar will be reflected in the LC calendar
- Any changes made in LC calendar will be reflected in iCloud.

For example, if you create an appointment in iCloud, such as "Pick John from school," it will also be synced and shown in the LC calendar, and any subsequent changes made in iCloud will be mirrored in the LC Calendar application.

```
Important Information specifically for iCloud Integration

Contact creation from iCloud events to LC is not supported. Which also means that all the events coming in from iCloud would be treated as Blocked Slots and not appointments.

If a Blocked Slot is created in the LC calendar for a user, that would not sync to the iCloud Calendar
```

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector*  
*Generated on: 2025-10-28T16:04:24.042Z*
