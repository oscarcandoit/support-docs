---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter"
title: " Workflow Action - Dare/Time Formatter : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000731)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000731)
6. Workflow Action - Dare/Time Formatter

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

# Workflow Action - Dare/Time Formatter

Modified on: Sat, 7 Sep, 2024 at 5:59 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter#Example)

## Overview

The **Date/Time Formatter** action allows you to format and compare date fields within workflows. This action helps transform or evaluate dates to better suit specific conditions or outputs.

## Action Name

**Date/Time Formatter**

## Action Description

### 1\. Format Date

- **Description**: This action converts a date field from one format to another within a workflow. For example, you can convert a date from "MM/DD/YYYY" to "YYYY-MM-DD" to standardize dates for consistent reporting or communication.

- **Use Case**: Useful when you need to ensure a uniform date format across various systems or reports.


### 2\. Format Date and Time

- **Description**: This action converts both date and time fields from one format to another. This action is especially useful for timestamps that include both date and time components.

- **Use Case**: Great for workflows that deal with appointments or timestamps, where both date and time need to be reformatted.


### 3\. Compare Dates

- **Description**: This action compares two dates and evaluates which date is earlier, later, or whether the dates are equal. This can be used to trigger actions based on whether one date is within a specific time range of another date.

- **Use Case**: Ideal for workflows where you want to compare registration dates with event dates or any other form of time-sensitive comparison.


## Action Details

### **Format Date**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032443696/original/EB9x6SiLjUy0ebJ5-CPftaRAP5VX_ypYEA.png?1725706090)

### Action Details

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | The unique name you want to assign to this action. | Yes |
| Action Type | Choose the type of formatting action (Format Date, Compare Dates). | Yes |
| Field | Select the date field you want to format or compare. | Yes |
| From Format | Define the existing format of the date field. | Yes |
| To Format | Define the desired format for the date field. | Yes |

### Example Workflow:

- ### **Trigger**: Form Submission

- **Action**: Format the date of submission to YYYY-MM-DD format for further usage in reporting.

\-\-\--------------------------------------------------------------------------------------------------------------------

### **Format Date and Time**

### **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032443743/original/am1uX2LJ2wO4kfQ5sfTOEDOE-nFqnmsApg.png?1725706267)**

### Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name you assign to this specific action. | Yes |
| Action Type | Selected as “Format Date and Time.” | Yes |
| Field | The field containing the date and time to be formatted. | Yes |
| From Format | The current format of the date and time (e.g., DD/MM/YYYY HH:mm). | Yes |
| To Format | The desired format for both date and time (e.g., MM-DD-YYYY HH). | Yes |

### Example Workflow:

- ### **Trigger**: Appointment Created

- **Action**: Format the appointment date and time from Unix timestamp to readable format for notifications.

\-\-\--------------------------------------------------------------------------------------------------------------------

### **Compare Dates**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032443775/original/KT6ZVL-Tn7GpI94F2E6NzyP0_YFrkDyjdw.png?1725706406)**

### Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name you assign to this specific action. | Yes |
| Action Type | Selected as “Compare Dates.” | Yes |
| Start Date | The first date field you want to compare. | Yes |
| Start Date Format | The format of the first date (e.g., MM-DD-YYYY). | Yes |
| End Date | The second date field to compare. | Yes |
| End Date Format | The format of the second date (e.g., DD/MM/YYYY). | Yes |

### Example Workflow:

- ### **Trigger**: Event Registration

- **Action**: Compare registration date with the event date to send reminders if the event is within 3 days.

## Date and Time Format Supported

|     |     |
| --- | --- |
| Format Type | Example Output |
| YYYY-MM-DD | 45281 |
| MM-DD-YYYY | 45281 |
| MM/DD/YYYY | 45281 |
| MM/DD/YY | 45281 |
| DD-MM-YYYY | 21-12-2023 |
| DD/MM/YYYY | 21/12/2023 |
| DD/MM/YY | 21/12/23 |
| DD MMM YYYY | 45281 |
| D MMMM YYYY | 45281 |
| MMMM D, YYYY | 45281 |
| MMM DD, YYYY | 45281 |
| MMMM Do YYYY | December 21st, 2023 |
| X (Unix Timestamp) | 1703176259 |

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

- [Workflow Action - Goal Event](https://help.gohighlevel.com/support/solutions/articles/155000003328-workflow-action-goal-event)
- [Workflow Action - Dare/Time Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter)
- [Workflow Action - Number Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter)
- [Conversation AI Post-Appointment Booking Actions](https://help.gohighlevel.com/support/solutions/articles/155000003421-conversation-ai-post-appointment-booking-actions)
- [How to send Email using AI in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005505-how-to-send-email-using-ai-in-workflows)
- [Copy Workflow Actions Across Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006081-copy-workflow-actions-across-workflows)

## Related Articles

- [Workflow Action - Text Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003361-workflow-action-text-formatter)
- [Guide to Date/Time Formatter Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238249-guide-to-date-time-formatter-workflow-action)
- [Workflow Action: Book Appointment](https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment)
- [Text Formatter - How to format text the way you want](https://help.gohighlevel.com/support/solutions/articles/155000002065-text-formatter-how-to-format-text-the-way-you-want)
- [Workflow - Date/Time Formatter Action](https://help.gohighlevel.com/support/solutions/articles/48001237982-workflow-date-time-formatter-action)
- [Workflow Action - Number Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter/hit)