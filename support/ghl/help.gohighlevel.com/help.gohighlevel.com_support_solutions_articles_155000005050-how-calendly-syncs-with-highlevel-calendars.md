---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars"
title: " How Calendly Syncs With HighLevel Calendars : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Calendar Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000574)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Calendar Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000574)
6. How Calendly Syncs With HighLevel Calendars

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

# How Calendly Syncs With HighLevel Calendars

Modified on: Tue, 23 Sep, 2025 at 9:48 PM

This article explains how syncing works between HighLevel and Calendly after the integration is connected. You’ll learn what gets synced, how appointments are handled, how contacts are created, and what limitations exist. This helps ensure you’re getting the most out of your Calendly integration inside HighLevel.

* * *

**TABLE OF CONTENTS**

- [Understanding Syncing and Why It Matters](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#%E2%80%8B%E2%80%8BUnderstanding-Syncing-and-Why-It-Matters)
- [What Gets Synced From Calendly?](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#What-Gets-Synced-From-Calendly?)
- [How Does the Calendly Integration Work?](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#How-Does-the-Calendly-Integration-Work?)
- [Contact Creation and Management](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#Contact-Creation-and-Management)
- [Managing Calendars After Setup](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#Managing-Calendars-After-Setup)
- [Known Limitations of the Calendly Integration](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#Known-Limitations-of-the-Calendly-Integration)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars#Frequently-Asked-Questions)

* * *

# **Understanding Syncing and Why It Matters**

Syncing your HighLevel calendar with Calendly means that new events booked through your selected Calendly calendars will automatically appear as appointments inside HighLevel. This enables seamless contact creation and automation triggers based on real-time bookings—eliminating the need for manual data entry. The integration works as a **one-way sync**, meaning events are pulled from Calendly into HighLevel, but not the other way around. Syncing begins only after the integration is connected via **Calendar Settings > Connections**, and it applies exclusively to the calendars you select during setup. If you later deselect a calendar, syncing stops for that calendar, and re-selecting it will not bring in missed events—only new ones going forward will sync. Sync occurs in real-time or near real-time after each Calendly booking.

To ensure a smooth and reliable experience, use a supported Calendly plan, select only relevant calendars, and ensure your event types collect essential guest details like name and email. Understanding how sync behavior is tied to calendar selections helps prevent data conflicts and ensures your workflows operate as intended.

* * *

## **What Gets Synced From Calendly?**

The integration focuses on the core data needed to run CRM workflows and manage appointments effectively.

|     |     |
| --- | --- |
| **Synced** | **Not Synced** |
| Event Date & Time | Phone number or custom Q&A fields from Calendly |
| Guest Name & Email | Cancelled or rescheduled events are not updated in HighLevel |
| Appointment Title | Historical events (created before setup) |
| Source (marked as “Calendly”) | Attachments or notes |
| Calendar the event belongs to |  |

* * *

## **How Does the Calendly Integration Work?**

The Calendly integration works a bit differently from other calendar platforms like Google, Outlook, or iCloud. It’s designed to import events from Calendly into HighLevel, not the other way around, and understanding how this sync operates can help you make the most of it.

### **Calendly Event Syncing**

Once your Calendly account is connected and at least one calendar is selected, HighLevel will begin pulling in new events automatically. Only events created after the integration is set up will sync into your calendar.

If you later remove a calendar from the connection, new events from that calendar will no longer sync into HighLevel. And if you reconnect that calendar in the future, then both upcoming events and past events created within the last 180 days at the time of connecting your Calendly account will be synced. Any appointments made while the calendar was disconnected won’t be imported retroactively.

### **One-Way Syncing**

The Calendly integration is one-way—HighLevel fetches events from Calendly, but not the other way around. That means:

- Events created in HighLevel won’t show up in Calendly.
- Events that come from Calendly can’t be edited within HighLevel—you’ll need to make those changes directly in Calendly to ensure everything stays accurate.

### **Contact Creation from Bookings**

Every new Calendly event that syncs into HighLevel is treated as an appointment (not just a placeholder or blocked time). If the event includes a guest, a contact is automatically created in your system using their name and email. From there, you can trigger automations, add them to workflows, and manage them just like any other contact in your CRM.

### **Who Owns the Appointment?**

Ownership depends on the type of calendar:

- For personal Calendly links, the user who connected their Calendly account will be assigned as the appointment owner.
- For shared calendars (like round-robin or team links), the system will randomly assign the appointment owner from among the connected Calendly users.

### **Contact Assignment**

The contact’s Assigned User field will be automatically updated to match the owner of their most recent appointment. This ensures the right team member is connected to the contact and any follow-up automations go to the correct user.

* * *

## **Contact Creation and Management**

### **When a Calendly booking is synced:**

- A contact is automatically created in HighLevel using the guest’s name and email.
- If the contact already exists, the appointment is added to their record.
- These contacts are eligible for automations triggered by appointment status.

### **Appointment Ownership and User Assignment**

Appointments in HighLevel need an “owner” to properly route tasks, notifications, and automations.

**Appointment Owner**

- **Personal Calendars:** The user who connected Calendly is the owner.
- **Shared Calendars (e.g., round robin):** One user from the connected team is assigned randomly.

**Contact Assigned User**

The Assigned User of a contact is updated to match the owner of their latest appointment. This ensures the contact is properly routed to the user who should follow up.

* * *

## **Managing Calendars After Setup**

You can make changes to your calendar selection anytime:

To update your Calendly calendar selections in HighLevel, start by navigating to **Calendar Settings**, then click on the **Connections** tab. From the list of connected calendars, locate your **Calendly integration**. Click the **Edit icon** next to it to open the calendar selection panel. Here, you can add new calendars that you’d like to sync or remove any that are no longer needed. Once you’ve made your changes, be sure to click **Save** to apply the updates. Keep in mind that only events from the calendars currently selected will sync moving forward.

**Reminder:** Events from newly added calendars will only sync from the time of selection. No historical data will be imported.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045368810/original/Sd3IVLmF7Og57lah3t9HycoVY45KWVqBpA.png?1745157447)

**Deleting Synced Calendly Events**

When disconnecting a calendar or removing Calendly, you’ll be prompted to choose whether to delete the synced events.

**Deleting Events From One Calendar**

You can choose to delete all events synced from a specific calendar.

Deleted events cannot be restored later.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045368934/original/n9wsbf8nBBDNQQVrVGudhhC-fl4wqAOO6A.png?1745157796)

**Shared Calendars**

If multiple users have connected Calendly to the same shared calendar, all of them must choose to delete the events for them to be removed.

If one user keeps the calendar, the shared events will remain visible.

**Disconnecting Calendly Completely**

You’ll be given the option to delete all synced events from all calendars. Deletion is permanent. If Calendly is reconnected, we automatically import both upcoming events and past events created within the last 180 days at the time of connecting your Calendly account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045201240/original/Ehvdkhx6NDqrwojH_sBDEhs3hMxQJNcvwQ.png?1744807503)

* * *

## **Known Limitations of the Calendly Integration**

Here are the key limitations to be aware of when using the Calendly integration:

- One Calendly account per user per subaccount
- Calendly account cannot be shared across different users or subaccounts
- Supported only for Standard, Teams, and Enterprise plans on Calendly
- Free or Essentials Calendly plans are not supported
- Events cannot be edited in HighLevel
- Only name and email of the guest are synced (no Q&A or custom fields)

* * *

## **Frequently Asked Questions**

**Q: Why don’t older Calendly events appear in HighLevel?**

Only events created after the integration was set up and the calendar selected are imported.

**Q: Can I edit or reschedule a Calendly event in HighLevel?**

No. Events must be edited directly inside Calendly.

**Q: What happens if I reconnect a calendar or re-add Calendly?**

Only new events going forward will be synced. Previously missed or disconnected events will not appear.

**Q: Who owns appointments synced from a shared calendar?**

One of the Calendly-connected users will be randomly assigned as the owner for shared calendars.

**Q: Can I connect my Calendly account to multiple HighLevel users or subaccounts?**

Yes. A single Calendly account can be connected to multiple users across different subaccounts.

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

- [Calendar Integration Disconnection Notifications](https://help.gohighlevel.com/support/solutions/articles/155000005130-calendar-integration-disconnection-notifications)
- [Guide To iCloud Calendar Integration](https://help.gohighlevel.com/support/solutions/articles/155000001477-guide-to-icloud-calendar-integration)
- [Hide Third-Party Calendar Details](https://help.gohighlevel.com/support/solutions/articles/155000003545-hide-third-party-calendar-details)
- [How Calendly Syncs With HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars)
- [How to sync HighLevel Calendars With Outlook](https://help.gohighlevel.com/support/solutions/articles/48001188796-how-to-sync-highlevel-calendars-with-outlook)
- [iCloud - How to Integrate iCloud with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002370-icloud-how-to-integrate-icloud-with-highlevel-calendars)

## Related Articles

- [Calendly to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003308-calendly-to-highlevel-migration-guide-)
- [Integrate Calendly with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002373-integrate-calendly-with-highlevel-calendars)
- [Appointment Report](https://help.gohighlevel.com/support/solutions/articles/155000002758-appointment-report)
- [Setting Up Linked Calendars & Conflict Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002374-setting-up-linked-calendars-conflict-calendars)
- [Integrating Google with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002369-integrating-google-with-highlevel-calendars)
- [Integrating Outlook with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002371-integrating-outlook-with-highlevel-calendars)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars/hit)