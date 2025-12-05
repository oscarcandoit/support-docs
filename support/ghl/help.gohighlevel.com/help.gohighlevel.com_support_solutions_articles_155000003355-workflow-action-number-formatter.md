---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter"
title: " Workflow Action - Number Formatter : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000731)
6. Workflow Action - Number Formatter

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

# Workflow Action - Number Formatter

Modified on: Sat, 7 Sep, 2024 at 7:15 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter#Example)

## Overview

The **Number Formatter** workflow action is used to format and generate numeric fields. It includes several functionalities like converting text to numbers, formatting numbers, formatting phone numbers, formatting currency, and generating random numbers.

## Action Name

**Number Formatter**

## Action Details

### Text to Number

Converts text representations of numbers into numeric format. For example, "$12,345.67" to 12345.67.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444844/original/gQMRG6tJfZ6hZNRMhH63SfFLy1uiA5aOHw.png?1725710234)

### Action Details:

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, which can be customized. | Yes |
| Action Type | Defines the action, set as Text to Number. | Yes |
| Select Field | Choose the field containing the text representation of a number. | Yes |
| Input Decimal Mark | Specifies how the decimal is marked in the input (e.g., period). | Yes |

### Example Workflow Configuration:

- **Trigger:** Form Submitted
- **Action:** Convert text to number to process payment data accurately.

\-\-\--------------------------------------------------------------------------------------------------------------------

### Format Number

Formats a number according to the defined settings, such as decimal places and thousands separators.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444854/original/dnFaP_6cfkINQQDk-mw24WbLN76-c3SPhg.png?1725710280)

### Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, which can be customized. | Yes |
| Action Type | Defines the action, set as Format Number. | Yes |
| Select Field | Choose the field containing the number. | Yes |
| Input Decimal Mark | Defines the current decimal mark used in the input number. | Yes |
| To Format | The desired output format for the number (e.g., period). | Yes |

### Example Workflow Configuration:

- **Trigger:** Trigger link clicked
- **Action:** Format number for displaying statistical data in messages.

\-\-\--------------------------------------------------------------------------------------------------------------------

### Format Phone Number

Standardises a phone number into the desired format (e.g., (123) 456-7890).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444859/original/419_JP_zpjRBHacVlD2xJiT6EGUaYHhR7A.png?1725710312)

### Action Details:

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, which can be customized. | Yes |
| Action Type | Defines the action, set as Format Phone Number. | Yes |
| Select Field | Choose the field containing the phone number. | Yes |
| To Format | The desired format for the phone number (e.g., E.164). | Yes |
| Phone Number Country Code | Specifies the country for the phone number. | Yes |

### Example Workflow Configuration:

- **Trigger:** Appointment Booked
- **Action:** Format the contact's phone number for outbound calls.

\-\-\--------------------------------------------------------------------------------------------------------------------

### Format Currency

Formats a numeric value as currency, taking into account locale-specific settings.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444872/original/pH52nzLK7Onyn_kOPmXka47rSrGcJGpx8w.png?1725710337)

### Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, which can be customized. | Yes |
| Action Type | Defines the action, set as Format Currency. | Yes |
| Select Field | Choose the field containing the numeric value. | Yes |
| Currency | The currency type (e.g., USD, EUR). | Yes |
| Currency Locale | The locale format for the currency (e.g., en-US). | Yes |

### Example Workflow Configuration:

- **Trigger:** Payment Received
- **Action:** Format currency for generating accurate receipts.

\-\-\--------------------------------------------------------------------------------------------------------------------

### Random Number

Generates a random number within a specified range.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444877/original/bq9cnzChFLQ4_z0uujoqQsN8iSqWpJtNEQ.png?1725710371)

### Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, which can be customized. | Yes |
| Action Type | Defines the action, set as Random Number. | Yes |
| Lower Range | The minimum value of the generated random number. | Yes |
| Upper Range | The maximum value of the generated random number. | Yes |
| Decimal Points | Defines how many decimal points are allowed. | No |

### Example Workflow Configuration:

- **Trigger:** Email Opened
- **Action:** Generate a random number for A/B testing purposes.

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
- [Text Formatter - How to format text the way you want](https://help.gohighlevel.com/support/solutions/articles/155000002065-text-formatter-how-to-format-text-the-way-you-want)
- [Workflow - Date/Time Formatter Action](https://help.gohighlevel.com/support/solutions/articles/48001237982-workflow-date-time-formatter-action)
- [How to enable and rebill Premium Features for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005678-how-to-enable-and-rebill-premium-features-for-workflows)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter/hit)