---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002374,"
title: " Setting Up Linked Calendars & Conflict Calendars : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002374,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Calendar Settings & Preferences](https://help.gohighlevel.com/support/solutions/folders/155000000688)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002374,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Calendar Settings & Preferences](https://help.gohighlevel.com/support/solutions/folders/155000000688)
6. Setting Up Linked Calendars & Conflict Calendars

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

# Setting Up Linked Calendars & Conflict Calendars

Modified on: Mon, 9 Jun, 2025 at 8:22 AM

HighLevel lets you synchronize external calendars (Google, Office 365, Outlook.com) to keep your availability up to date and prevent double-bookings. Use **Connected Calendars** to authorize HighLevel’s access, **Linked Calendars** to import events and show true availability, and **Conflict Calendars** to automatically block HighLevel slots when you have other commitments.

**TABLE OF CONTENTS**

- [When to Use Connected, Linked & Conflict Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002374,#When-to-Use-Connected,-Linked-&-Conflict-Calendars)
- [Prerequisites](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Prerequisites)
- [Setting up the Linked Calendar](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Setting-up-the-Linked-Calendar)
- [Sync Preferences (Advanced Settings)](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Sync-Preferences-(Advanced-Settings))
- [Conflict Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Conflict-Calendars)
- [How these Calendars Work](https://help.gohighlevel.com/support/solutions/articles/155000002374,#How-these-Calendars-Work)
- [Best Practices & Considerations](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Best-Practices-&-Considerations)
- [Common Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Common-Troubleshooting)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000002374,#Related-Articles)

* * *

## **When to Use Connected, Linked & Conflict Calendars**

- **Connected Calendars**: Grant HighLevel permission to read (and optionally write) events from an external calendar account.

- **Linked Calendars**: Import events and availability into HighLevel so your true busy times display.

- **Conflict Calendars**: Mark certain connected calendars as blockers, automatically making overlapping High-Level booking slots **Unavailable**.


* * *

## **Prerequisites**

- **User Role**: Admin or Manager access in the sub-account.

- **External Calendar Account**: Active Google Calendar, Office 365, or Outlook.com login credentials for each user.


* * *

## **Setting up the Linked Calendar**

### **Step 1:** Access the Connections Tab

In your HighLevel sub-account sidebar, go to **Settings → Calendars,** then click the **Connections** tab at the top to go to **Calendars** and **Connected Calendars**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047943546/original/6nBdgykHgbRT_uGAU8fK9U-OP5Rk7y2HhA.gif?1749472656)

### **Step 2:** Add a Calendar

1. Under **Connected Calendars**, click **\+ Add New**.

2. Select your provider: **Google**, **Outlook, iCloud or Calendly Calendar.**

3. Sign in and grant HighLevel permission to **read** events (and **write**, if you plan to sync bookings back).

4. Once successful, you’ll see your email listed with its provider icon.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047943978/original/stEFOtKQ5zhCQXbs8zNrUfu19JMVsdKWIg.gif?1749473168)

```
Alert: Reconnect Broken Integrations
If you ever see a red banner like “Reconnect your integration” or the calendar tile is outlined in red, your OAuth token has expired or been revoked. Simply click Reconnect and re-authorize HighLevel to restore access.
```

### **Step 3:** Configure Your Linked Calendar

1. In the **Calendar Configuration** section under **Linked Calendar**, click **Add**.

2. Choose one of your **Connected Calendars** to import events into HighLevel.

3. Click **Save**.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047944165/original/cmcw_3LVwMag0rf2j0gu5C_Lz6RqRe47IA.gif?1749473383)

```
IMPORTANT:-

1. Writer's access is required for the user to select a calendar as a linked calendar.

2. The linked calendar is by default added to the conflict calendar. This means any event created on the third-party linked calendar will be fetched in the system, and any event created in the system will be pushed to the third-party linked calendar.

3. You can set your Sync Preferences from the Advanced Settings.
```

* * *

## **Sync Preferences (Advanced Settings)**

### **1\. Default Sync (One Way Sync)**

- Events created on the system will be synced to Linked Calendar (Eg, Google).

- Events created on Linked Calendar (Eg, Google) will be synced to the system.




1. These events are synced as blocked slots.

2. No contact is created for guests in the Linked Calendar (Eg, Google) events.

3. No automations / workflows are triggered.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047945204/original/jZsOK6uuUHRASpqHvscqcdsB6DadEbS_fg.png?1749474582)

### **2\. Two-Way Sync**

- Events created on the system will be synced to Linked Calendar (Eg, Google).

- Events created on Linked Calendar (Eg, Google) will be synced to the system.




1. These events are synced as appointments.

2. Contact is created for the guests found in the Linked Calendar (Eg, Google) events.

3. Automation/workflows can be triggered like any other appointment created in the system.

```
For Example: John has created a google event from 1:00 pm to 2:00 pm called 'Doctor's Appointment with Dr. Mark' and has added Dr. Mark as a guest in his google calendar.

Default Sync (One-way Sync): Only a blocked time from 1:00 pm to 2:00 pm will be added in the system so that no one can book during that time.

Two-way Sync: An appointment is created in the system from 1:00 pm to 2:00 pm so that no one can book during that time. A new contact for Dr. Mark is created in the system. If any workflows are created, they would get triggered for Dr. Mark.
```

* * *

## **Conflict Calendars**

Events from third-party calendars added as conflict calendars are synced to the system, blocking your availability for the event's duration. As the name suggests, we read all the events from the selected calendar and block off the timings when the user is not available. The availability is blocked only if the event is marked as 'BUSY' in the third-party calendar. For events marked as 'FREE', the events are fetched in the system but the availability remains open.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047945538/original/sckXVuIxwCrhketzFQDkdTzL8lhoedKrbg.gif?1749474918)

This ensures accurate availability and avoids double bookings. You can add multiple calendars to be checked to prevent double bookings. In the Conflict Calendars section, we do not create any appointments, instead we just block off the time for any event already scheduled in your third party calendar.

* * *

## **How these Calendars Work**

1. **Booking Requests**

   - When a client requests an appointment, HighLevel checks both your **Linked** and **Conflict** calendars. Any overlapping events render those slots **Unavailable**.
2. **Two-Way Sync**

   - If you enable **Write Back Appointments**, HighLevel will write new bookings into your external calendar.

   - Cancellations or reschedules in HighLevel also update your external calendar.
3. **Calendar View**

   - In the **Calendar** tab, external events display as shaded blocks, High-Level bookings as colored events, and blocked slots as **Unavailable** marking.

* * *

## **Best Practices & Considerations**

- **Limit Write-Back**: Enable write-back on only your primary work calendar to avoid duplicate entries.

- **Block Personal Events**: Link personal calendars as **Conflict Calendars** so family or personal commitments auto-block booking slots.

- **Align Time Zones**: Ensure your external calendar’s time zone matches your HighLevel profile to prevent mismatches.

- **Periodic Reauthorization**: If you change your external account password or security settings, reauthorize HighLevel to prevent broken integrations.


* * *

## **Common Troubleshooting**

| Issue | Cause | Resolution |
| --- | --- | --- |
| **Integration shows as broken (red banner)** | OAuth token expired or revoked | Under **Settings → Calendars → Connections**, click **Reconnect** and re-authorize. |
| **Events not appearing in HighLevel** | No Linked Calendar selected or sync disabled | In **Calendar Configuration → Linked Calendar**, click **Edit**, ensure **Sync Events** is on. |
| **Slots are still bookable during external events** | Conflict Calendar is not enabled | Under **Conflict Calendars**, click **Edit**, toggle **Use as Conflict Calendar**, then **Save**. |
| **High-level appointments are not writing back** | Write-Back toggle is off | Edit your Linked Calendar settings to enable **Write Back Appointments**, then **save**. |
| **Duplicate external events** | Multiple calendars have write-back enabled | Disable write-back on secondary calendars or unlink extras you don’t need. |

* * *

## **Related Articles**

- [Calendar Scheduling Conflicts](https://help.gohighlevel.com/support/solutions/articles/155000003548-calendar-scheduling-conflicts)

- [Round Robin Calendars: The Setup Guide](https://help.gohighlevel.com/support/solutions/articles/155000001485-round-robin-calendars-the-setup-guide)

- [How to Re-Integrate Google Calendar with HighLevel for a User](https://help.gohighlevel.com/support/solutions/articles/48001181302-how-to-re-integrate-google-calendar-with-highlevel-for-a-user)


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

- [Setting Up Linked Calendars & Conflict Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002374-setting-up-linked-calendars-conflict-calendars)
- [Calendar: Email, In-App, SMS & Whatsapp Appointment Notifications](https://help.gohighlevel.com/support/solutions/articles/155000003441-calendar-email-in-app-sms-whatsapp-appointment-notifications)
- [Calendar Scheduling Conflicts](https://help.gohighlevel.com/support/solutions/articles/155000003548-calendar-scheduling-conflicts)
- [Assigning a Primary Calendar](https://help.gohighlevel.com/support/solutions/articles/155000002263-assigning-a-primary-calendar)
- [Collecting Payments in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000000875-collecting-payments-in-calendars)
- [Custom URL for Unassigned Calendars](https://help.gohighlevel.com/support/solutions/articles/155000003549-custom-url-for-unassigned-calendars)

## Related Articles

- [Guide To iCloud Calendar Integration](https://help.gohighlevel.com/support/solutions/articles/155000001477-guide-to-icloud-calendar-integration)
- [Integrating Google with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002369-integrating-google-with-highlevel-calendars)
- [iCloud - How to Integrate iCloud with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002370-icloud-how-to-integrate-icloud-with-highlevel-calendars)
- [Integrating Outlook with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002371-integrating-outlook-with-highlevel-calendars)
- [PayPal in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000006712-paypal-in-calendars)
- [Integrating Zoom with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002372-integrating-zoom-with-highlevel-calendars)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002374,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002374-setting-up-linked-calendars-conflict-calendars/hit)