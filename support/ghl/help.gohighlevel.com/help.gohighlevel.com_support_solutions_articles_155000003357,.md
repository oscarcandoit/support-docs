---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003357,"
title: " Workflow Action - Event Start Date : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003357,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Data Management](https://help.gohighlevel.com/support/solutions/folders/155000000817)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003357,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Data Management](https://help.gohighlevel.com/support/solutions/folders/155000000817)
6. Workflow Action - Event Start Date

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

# Workflow Action - Event Start Date

Modified on: Sat, 7 Sep, 2024 at 7:50 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003357,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003357,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003357,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003357,#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003357,#Example)

## Overview

The **Event Start Date** action in the workflow allows you to set a specific date and time to trigger Wait events or other future actions. It ensures that subsequent events are based on a specific time or day, enhancing control over the timing of follow-up actions.

## Action Name

**Event Start Date**

## Action Description

The **Event Start Date** action sets a specific date, time, or a custom field value as the reference point for subsequent workflow actions, particularly **Wait** events. This action ensures that actions are paused or triggered based on the set event time, making it useful for automating follow-ups, reminders, or other scheduled tasks.

## Action Details

### Specific Day

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445509/original/iwafksQDf_H0H5RLys6FTyLMe12XPHXRmg.png?1725713040)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445558/original/NF4KiMa2-WOZCmfGmjoWXszo7CKkD3JY5w.png?1725713140)

### Custom Field![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445534/original/Jv63PBvwYkS7K6_OMyoB6eLJW8nSljqA6Q.png?1725713083)

### Specific Date and Time

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445569/original/lnBfAlpPR6O72bkGrAG9ycyxviTT5JWDTg.png?1725713232)

### **How to Configure**:

1. **Action Name**: Enter a name that describes this action, e.g., "Event Start Time for Webinar".
2. **Type**: Choose from the following options:
   - **Specific Day**: Select if you want to set a specific recurring day (e.g., day of the month or day of the week).
   - **Specific Date/Time**: Use this when you want to set an exact date and time (e.g., Sept 14, 2024, 10:30 AM).
   - **Custom Field**: This pulls the date from a custom field (e.g., a field capturing "Event Registration Date").
3. **Select Custom Field** (only visible for **Custom Field** type): Choose the relevant custom field that stores the date.
4. **Select Date** (only visible for **Specific Date/Time** type): Pick a date and time from the calendar picker.
5. **Current Day of Month/Week** (only visible for **Specific Day** type): Select whether the event starts based on the current day of the month or the current day of the week.

### **Field Details:**

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | The label or title for the action in your workflow. | Yes |
| Type | Choose between Specific Day, Specific Date/Time, or Custom Field. | Yes |
| Select Custom Field | This field appears if Custom Field type is selected. It picks a custom date field. | No |
| Select Date | This field appears if Specific Date/Time type is selected. Select the date from a calendar picker. | No |
| Current Day of Month/Week | This appears if Specific Day type is selected, allowing you to choose day or week-based triggers. | Yes |

## Example

- **Type: Specific Date/Time**

  - Use Case: If you want to trigger a follow-up email one week after an event that was scheduled on a particular date.
  - Example Setup: Select the date `September 14, 2024` to mark the event start. The workflow will use this as the reference point for all subsequent timed actions.
- **Type: Custom Field**

  - Use Case: You want to set a follow-up action based on a custom date field like "Event Registration Date".
  - Example Setup: The workflow pulls the date from the custom field `Event Registration Date` to trigger subsequent actions like reminder emails or task assignments based on that date.
- **Type: Specific Day**

  - Use Case: For recurring events or tasks, you want to automate actions based on the current day of the week or month.
  - Example Setup: Select "Current Day of Month" to set recurring reminders every first of the month.

## Additional Notes

- **Date Format**: Ensure the date and time are in the correct format (e.g., MM-DD-YYYY HH). This prevents errors in workflow timing.
- **Use Cases**: Perfect for automating reminders, follow-ups, or any action that is contingent on a specific date.
- **Triggering**: Combine this action with **Wait** events to hold contacts until a specific date or time before proceeding to the next action.

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

- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/155000003356-workflow-action-math-operation)
- [Workflow Action - Event Start Date](https://help.gohighlevel.com/support/solutions/articles/155000003357-workflow-action-event-start-date)
- [Workflow Action - Text Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003361-workflow-action-text-formatter)

## Related Articles

- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Workflow Action - Dare/Time Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [If/Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [Send Recurring Invoice action - Setup guide](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003357,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003357-workflow-action-event-start-date/hit)