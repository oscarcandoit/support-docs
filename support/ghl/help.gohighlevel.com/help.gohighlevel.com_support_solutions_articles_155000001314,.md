---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001314,"
title: " Conditional Logic in Forms | HighLevel Setup Guide : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001314,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Forms](https://help.gohighlevel.com/support/solutions/folders/48000665899)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001314,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Forms](https://help.gohighlevel.com/support/solutions/folders/48000665899)
6. Conditional Logic V2 in Forms and Surveys!

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

# Conditional Logic V2 in Forms and Surveys!

Modified on: Wed, 8 Oct, 2025 at 5:19 AM

Conditional Logic v2 helps you create smarter, more dynamic forms and surveys. It lets you show or hide fields, redirect users, display messages, disqualify leads, or jump to different slides — all based on how someone answers.

This guide explains how to use Conditional Logic, what’s new in version 2, and which fields are supported.

* * *

## What Is Conditional Logic

Conditional Logic automates actions inside a form or survey based on user input.

You can define conditions like:

- If the answer is “No,” show a message.

- If the score is below 5, disqualify the lead.

- If the date is within a range, redirect to another page.

- In surveys, jump to a specific slide instead of showing all questions.


This creates a more personal and efficient experience for respondents.

* * *

**TABLE OF CONTENTS**

- [What is Conditional Logic in Forms](https://help.gohighlevel.com/support/solutions/articles/155000001314,#What-is-Conditional-Logic-in-Forms)
- [Key Benefits of Conditional Logic in Forms](https://help.gohighlevel.com/support/solutions/articles/155000001314,#Key-Benefits-of-Conditional-Logic-in-Forms)
- [How to Set Up Conditional Logic in Forms](https://help.gohighlevel.com/support/solutions/articles/155000001314,#How-to-Set-Up-Conditional-Logic-in-Forms)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000001314,#Frequently-Asked-Questions)

* * *

### How To Use Conditional Logic in Forms - YouTube                    [Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)       HighLevel    82.1K subscribers            [How To Use Conditional Logic in Forms](https://www.youtube.com/watch?v=cPYLvR304Lw)              HighLevel           Search    Watch later    Share    Copy link          Info    Shopping                          Tap to unmute                                               If playback doesn't begin shortly, try restarting your device.                                                                                                                                                                        More videos    \#\# More videos                                                                                                                                                                                                                                                                                                                    You're signed out    Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.    CancelConfirm                                Share  Include playlist                                  An error occurred while retrieving sharing information. Please try again later.                                          [Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)                                [Watch on](https://www.youtube.com/watch?v=cPYLvR304Lw&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)                                                                                                       0:00                                                   0:00 / 5:25 •Live    •

### More Tutorials From the Community

[https://www.youtube.com/watch?v=mwtDrNimU5o](https://www.youtube.com/watch?v=mwtDrNimU5o)

* * *

## What’s New in v2

- **Simplified 3-Step Builder:** Select Field → Select State → Provide Value

- **“Between” Operator:** For numeric, date, score, and monetary fields

- **Survey Branching (Jump To):** Create slide-to-slide jumps

- **Expanded Field Support:** Checkboxes, multi-dropdowns, TnC1, TnC2, file uploads, and signatures

- **New Show/Hide Targets:** Payment, text, HTML, image, and TnC elements

- **Rule List Filtering (Surveys):** Filter rules by field or slide

- **Cycle Protection:** Prevents loops (Slide A → Slide B → Slide A)

- **Localized & Accessible:** Translated UI with keyboard navigation


* * *

## Available Actions

When you open **Conditional Logic**, you’ll see four action types you can create:

| Action | Description |
| --- | --- |
| **Redirect to URL** | Send users to a specific webpage after submission |
| **Display Custom Message** | Show a personalized message based on answers |
| **Disqualify Lead** | Automatically reject unqualified form submissions |
| **Show/Hide Fields** | Dynamically control which fields appear or hide |

> **All conditions are executed in top-down order.**
>
> Later matching rules override earlier ones when applicable.

* * *

## How to Set Up Conditional Logic

You can add and manage rules directly inside the Form or Survey Builder.

### 1\. Open Conditional Logic

- In the builder, click **Conditional Logic** in the top bar.

- For surveys, you can also open it from a slide’s sidebar alert.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055503478/original/Za8ux2kj4Ir5J_SM_7YmNuv6z30828A2fA.jpeg?1759918382)


### 2\. Add a New Condition

- Click **Add New Condition**.

- Choose an action (Redirect, Message, Disqualify, or Show/Hide).

- The logic builder opens for that action.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055503551/original/Xt1od3MtSIZhhqJP0hV4kKtjTtpLeI4jGQ.jpeg?1759918402)


### 3\. Build the Rule

Follow the guided 3-step flow:

1. **Select Field** – Choose the form field or slide to base the rule on.

2. **Select Field State** – Pick the condition (e.g., _is equal to_, _is empty_).

3. **Provide a Value** – Enter the matching value (text, number, or date).


You can add additional conditions using **AND** or **OR** connectors.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055503789/original/xmA291pqzVdAQg74dSgC9HH3litdUtdAYQ.png?1759918521)

> Some operators don’t require values, like “is empty” or “is checked.”

### 4\. Choose the Action Result

Depending on the action type:

- **Redirect:** Add a valid URL (e.g., `https://example.com`)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055504058/original/ZbWmXmVLNXM9XNrEJt9lpyosZAyOKj6Vqw.jpeg?1759918686)

- **Display Message:** Enter your message text![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055503989/original/o4-6O2Ow5nz5RatX4WwZ6ijD765rkgmpew.jpeg?1759918653)

- **Show/Hide Fields:** Pick which fields appear or hide![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055504019/original/bFRfxJVNhE6N6D3znTmcIPqm_-pkAPfaAA.jpeg?1759918668)

- **Disqualify Lead:** The form stops submission when matched

- **Jump To (Surveys only):** Choose the target slide or question


### 5\. Save

- The **Save** button activates only after all required inputs are valid.

- The system checks for missing values and prevents loops automatically.

- Rules run **top-down**, and later matches override earlier ones.


* * *

## Supported Fields

Conditional Logic v2 supports more field types than before.

**Personal Info**

- First Name

- Last Name

- Email

- Phone


**Form Fields**

- Single Line

- Multi Line

- Number

- Monetary

- Score

- Date Picker

- Dropdown (Single)

- Dropdown (Multi)

- Radio Select

- Checkbox

- Terms & Conditions (TnC1 / TnC2)

- File Upload

- Signature


**Content & Payment Elements**

- Text

- HTML

- Image

- Payment


> **Note:** Calendar fields are not yet supported.

* * *

## Supported Operators by Field Type

| Field Type | Operators |
| --- | --- |
| **Text (single/multi line)** | equal to, not equal to, contains, does not contain, starts with, ends with, is empty, is filled |
| **Phone / Email** | equal to, not equal to, contains, starts with, ends with, is empty, is filled |
| **Number / Score / Monetary** | equal to, not equal to, greater than, less than, between, is empty, is filled |
| **Date** | equal to, before, after, between, is empty, is filled |
| **Dropdown (single)** | is equal to, is not equal to, is empty, is filled |
| **Multi Dropdown / Checkbox** | is equal to {Option}, is not equal to {Option}, is empty, is filled |
| **TnC1 / TnC2** | is checked, is not checked |
| **File Upload / Signature** | is empty, is filled |

* * *

## **Survey-Specific Features**

### Jump To Logic

- **IF Basis:** Field or Slide

- **THEN Action:** Jump to a slide or question

- **Evaluation:** Happens when the user clicks “Next”

- **Conflict Handling:** If multiple Jump To rules match, the first one runs

- **Protection:** Prevents self-loops and slide-to-slide cycles automatically


### Rule Filtering

In surveys, you can filter rules by:

- **Field:** Show all rules related to a field

- **Slide:** Show all rules that affect or belong to that slide


* * *

## **Behavior & Evaluation**

- Rules execute **top-down** in order.

- For **Redirect, Message, Disqualify**, only the **first matching rule** runs.

- For **Show/Hide**, later matches override earlier ones.

- For **multi-selects**, “is equal to {Option}” checks if the option is selected.

- Text logic ignores case and extra spaces.

- Dates use the account’s timezone.


* * *

## Tips

- Use **Between** for number or date ranges (inclusive).

- Try date presets like **Today** or **This Week**.

- The **“Radio Other”** option appears only if enabled for that field.

- Always preview the form or survey to verify rule behavior.


* * *

## FAQs

**1\. Can I mix AND and OR in the same rule?**

No. Each rule must use one type of connector — either AND or OR.

**2\. Can I have multiple rules in the same form?**

Yes. Each rule works independently.

**3\. What happens if more than one condition matches?**

For submission actions, the first match wins. For Show/Hide, later rules override earlier ones.

**4\. Can I create loops in Jump To logic?**

No. The builder prevents loops and shows an error message if detected.

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

- [Where Do Form Responses Show Up?](https://help.gohighlevel.com/support/solutions/articles/48000979916-where-do-form-responses-show-up-)
- [Exporting Form answers to Google Sheets](https://help.gohighlevel.com/support/solutions/articles/48000979918-exporting-form-answers-to-google-sheets)
- [Sticky Contact in Forms, Surveys, and Calendars](https://help.gohighlevel.com/support/solutions/articles/48000979919-sticky-contact-in-forms-surveys-and-calendars)
- [No Slide Button in Survey](https://help.gohighlevel.com/support/solutions/articles/48001175185-no-slide-button-in-survey)
- [Gain Consent With Custom Checkboxes In Forms (GDPR Compliance)](https://help.gohighlevel.com/support/solutions/articles/48001185523-gain-consent-with-custom-checkboxes-in-forms-gdpr-compliance-)
- [Conditional Logic V2 in Forms and Surveys!](https://help.gohighlevel.com/support/solutions/articles/155000001314-conditional-logic-v2-in-forms-and-surveys-)

## Related Articles

- [Create Forms & Surveys Inside the Site Builder](https://help.gohighlevel.com/support/solutions/articles/155000006719-create-forms-surveys-inside-the-site-builder)
- [Conditional Logic in Surveys (v2)](https://help.gohighlevel.com/support/solutions/articles/155000005564-conditional-logic-in-surveys-v2-)
- [Math Calculation v2 in Forms & Surveys](https://help.gohighlevel.com/support/solutions/articles/155000005824-math-calculation-v2-in-forms-surveys)
- [Math Calculations in Forms/Surveys](https://help.gohighlevel.com/support/solutions/articles/155000003634-math-calculations-in-forms-surveys)
- [Element & Slide Cloning in Quizzes, Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000006541-element-slide-cloning-in-quizzes-forms-and-surveys)
- [One Question at a Time (Survey Builder)](https://help.gohighlevel.com/support/solutions/articles/155000005354-one-question-at-a-time-survey-builder-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001314,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001314-conditional-logic-v2-in-forms-and-surveys-/hit)