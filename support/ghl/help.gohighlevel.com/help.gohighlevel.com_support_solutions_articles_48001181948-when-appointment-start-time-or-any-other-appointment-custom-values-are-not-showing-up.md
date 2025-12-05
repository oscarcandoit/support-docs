---
url: "https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up"
title: " When {{appointment.start_time}} or any other appointment custom values are not showing up : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Troubleshooting Calendars](https://help.gohighlevel.com/support/solutions/folders/155000000689)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Troubleshooting Calendars](https://help.gohighlevel.com/support/solutions/folders/155000000689)
6. When {{appointment.start\_time}} or any other appointment ...

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

# When {{appointment.start\_time}} or any other appointment custom values are not showing up

Modified on: Tue, 27 Apr, 2021 at 6:24 PM

When **{{appointment.start\_time}}** or **any other appointment custom values** are not showing

Or When the appointment reminder campaign is not firing properly according to the appointment start time:

Or when the Add to Google calendar / Add to iCal/Outlook link is not working when sending a test email.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666282/original/q4MMHhuPiMD37Wp6ThVJqi-NqsWQv6AF_Q.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48052844868/original/4JZxe3z0S5CYdKCd8Bi5lBh62aoMBd_66w.png?1596761415)

We will need the **Appointment** or **Customer booked appointment** trigger in order for the **{{appointment.start\_time}}** or **any other appointments custom values** to show up. To test the Custom Values, you will need to book an actual appointment.

If you use the **Pipeline stage changed** as the trigger, HighLevel won't know which appointment it is.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666284/original/Apr7vQ6cP9Pwsre_hMgvqtIO9wQ31k6caA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961455/original/DIXR2nEa75kIzA_3KDdiSjyIa-IonFjyig.png?1591812887)

Same with Workflows:

We need to use **Appointment** or **Customer booked appointment** as the workflow trigger:

To test the Custom Values, you will need to **book an actual appointment**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666389/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1619565768)

If you need to manually add the lead to the **Appointment Reminder** Campaign, you will need to select the **appointment start time** as the **event start date.**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666281/original/J49Z7zBy-fLeedsG7RyZzHAF4thoqgtelA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961457/original/eb744U-ucYRPt_GWsfy1HdfBgbXdkgHO1A.png?1591812887)

To reschedule manually, you could go to the **Appointments** tab on the right and switch **Confirmed** to **Reschedule**. This will automate the process of removing the leads out of the original appointment reminder campaign and re-adding them to the appointment reminder campaign again with the new appointment time.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666283/original/2a6LrAcwyEAM1mTDqVEmoHE4yEv4k8Lh1w.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961458/original/jT-AV5ARigSw3pYBCB-OnQaNDf6h5oocww.png?1591812887)

If you want your leads to be able to reschedule themselves, you could choose the **reschedule link** from the Custom Values in the appointment reminder campaign:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666279/original/B61mleFlU1RUPlPPZjkA_VVNUlOixAtLXg.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961456/original/62vMn961ixYBFsqpWIf1BJ1mzr5jt8eWQg.png?1591812887)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666278/original/qYptao1e4Ky9XNjxR8tbTemyIZp8UvAmpQ.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961453/original/_tApzRr1QjXTOq9gDVBE7-YxuZ6TO4t_aA.png?1591812887)

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

- [Google Calendar Writer Access Error](https://help.gohighlevel.com/support/solutions/articles/48001064575-google-calendar-writer-access-error)
- [How to Re-Integrate Google Calendar for a User](https://help.gohighlevel.com/support/solutions/articles/48001181302-how-to-re-integrate-google-calendar-for-a-user)
- [Why Appointment Time Slots Are Missing on Your Calendar](https://help.gohighlevel.com/support/solutions/articles/48001181711-why-appointment-time-slots-are-missing-on-your-calendar)
- [When {{appointment.start\_time}} or any other appointment custom values are not showing up](https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up)
- [Contact got reassigned to another user when booking an appointment in Group calendar](https://help.gohighlevel.com/support/solutions/articles/48001183358-contact-got-reassigned-to-another-user-when-booking-an-appointment-in-group-calendar)
- [Troubleshoot and Fix Calendar Double Booking in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001183861-troubleshoot-and-fix-calendar-double-booking-in-highlevel)

## Related Articles

- [Business Profile Settings - Business Physical Address](https://help.gohighlevel.com/support/solutions/articles/155000006186-business-profile-settings-business-physical-address)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [How to use Custom Values](https://help.gohighlevel.com/support/solutions/articles/48001161575-how-to-use-custom-values)
- [Workflow Action - GMB](https://help.gohighlevel.com/support/solutions/articles/155000003290-workflow-action-gmb)
- [Workflow - Date/Time Formatter Action](https://help.gohighlevel.com/support/solutions/articles/48001237982-workflow-date-time-formatter-action)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up/hit)