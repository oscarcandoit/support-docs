---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005564"
title: " Conditional Logic in Surveys : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005564#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Surveys](https://help.gohighlevel.com/support/solutions/folders/48000665898)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005564#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Surveys](https://help.gohighlevel.com/support/solutions/folders/48000665898)
6. Conditional Logic in Surveys (v2)

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

# Conditional Logic in Surveys (v2)

Modified on: Wed, 8 Oct, 2025 at 5:35 AM

Conditional Logic v2 helps you create smarter, more dynamic **surveys** in HighLevel.

It lets you show or hide slides, display messages, redirect users, disqualify responses, or jump between slides — all based on how someone answers.

This guide explains how to use Conditional Logic in surveys, what’s new in v2, and which fields are supported.

* * *

### ⚠️ IMPORTANT

Conditional Logic v2 is available **only for newly created or cloned surveys**.

Logic rules **do not transfer** when an account snapshot is created.

* * *

**TABLE OF CONTENTS**

- [What Is Conditional Logic in Surveys](https://help.gohighlevel.com/support/solutions/articles/155000005564#What-Is-Conditional-Logic-in-Surveys)
- [What’s New in v2](https://help.gohighlevel.com/support/solutions/articles/155000005564#What%E2%80%99s-New-in-v2)
- [Available Actions](https://help.gohighlevel.com/support/solutions/articles/155000005564#Available-Actions)
- [How to Set Up Conditional Logic in Surveys](https://help.gohighlevel.com/support/solutions/articles/155000005564#How-to-Set-Up-Conditional-Logic-in-Surveys)
- [Supported Fields](https://help.gohighlevel.com/support/solutions/articles/155000005564#Supported-Fields)
- [Supported Operators by Field Type](https://help.gohighlevel.com/support/solutions/articles/155000005564#Supported-Operators-by-Field-Type)
- [Survey-Specific Features](https://help.gohighlevel.com/support/solutions/articles/155000005564#Survey-Specific-Features)
- [Behavior & Evaluation](https://help.gohighlevel.com/support/solutions/articles/155000005564#Behavior-&-Evaluation)
- [Tips](https://help.gohighlevel.com/support/solutions/articles/155000005564#Tips)
- [FAQs](https://help.gohighlevel.com/support/solutions/articles/155000005564#FAQs)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000005564#Related-Articles)

* * *

## What Is Conditional Logic in Surveys

Conditional Logic automates actions inside your survey based on user input.

You can define conditions like:

- If the answer is “No,” show a custom message.

- If the score is below 5, disqualify the lead.

- If the date is within a range, redirect to another page.

- Jump users to a specific slide instead of showing all slides.


This makes your surveys more interactive, relevant, and efficient.

* * *

## What’s New in v2

- **Simplified 3-Step Builder:** Select Field → Select State → Provide Value

- **“Between” Operator:** For number, score, monetary, and date fields

- **Jump To Branching:** Create slide-to-slide jumps inside surveys

- **Expanded Field Support:** Checkboxes, multi-dropdowns, TnC1/TnC2, file uploads, signatures

- **New Show/Hide Targets:** Text, HTML, Image, TnC elements

- **Rule List Filtering:** Filter rules by field or slide

- **Cycle Protection:** Prevents loops (Slide A → Slide B → Slide A)

- **Localized & Accessible:** Keyboard navigation and translated labels


* * *

## Available Actions

When you open Conditional Logic, you’ll see the available action types:

| **Action** | **Description** |
| --- | --- |
| **Show/Hide Fields** | Dynamically show or hide questions or slides. |
| **Display Custom Message** | Show personalized instructions or messages. |
| **Redirect to URL** | Send respondents to a custom webpage after submission. |
| **Disqualify Lead** | Automatically mark unqualified responses. |
| **Jump To (Slide)** | Skip or branch to another slide based on answers. _(Surveys only)_ |

> **Rules are executed top-to-bottom.**
>
> **Later matches override earlier ones when applicable.**

* * *

## How to Set Up Conditional Logic in Surveys

You can add and manage rules directly inside the Survey Builder.

### 1\. Open Conditional Logic

- In the survey builder, click **Conditional Logic** in the top bar.

- Or open it from the right-sidebar **Conditional Logic** link.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055505701/original/_r54-LIqjTPUsHKiGGV61zG1YvSEQPIbLA.png?1759919572)


### 2\. Add a New Condition

- Click **Add New Condition**.

- Choose an action (Show/Hide, Message, Redirect, Disqualify, or Jump To).

- The 3-step logic builder opens.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055505810/original/2AklOvUBEagY-NTHR7Q9L1En-vfvVMpX_A.png?1759919604)


### 3\. Build the Rule

Follow the guided flow:

1. **Select Field** – Choose the survey field or slide to base the rule on.

2. **Select State** – Pick the operator (e.g., _is equal to_, _is empty_).

3. **Provide Value** – Enter the value (text, number, date, option).


You can add multiple conditions in the same rule using **AND** or **OR** connectors.

- **AND** = all conditions must be true.

- **OR** = any condition can be true.


> Switching between AND and OR updates all conditions in the block.

Some operators don’t require values (e.g., _is empty_, _is checked_).

### 4\. Choose the Action Result

Depending on your selection:

- **Redirect to URL:** Enter a valid link (e.g., `https://example.com`)

- **Display Message:** Add your custom message text

- **Show/Hide Fields:** Select fields to display or hide

- **Disqualify Lead:** Automatically stop submission

- **Jump To (Surveys only):** Select the target slide or question


### 5\. Save the Rule

- The **Save** button activates only after all required inputs are filled.

- The system checks for missing values and prevents looping logic.

- Rules run **top-down** in the list.


* * *

## Supported Fields

Conditional Logic v2 supports a wide range of survey fields.

**Survey Fields**

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


**Static Elements**

- Text

- HTML

- Image


> **Note:** Calendar fields are not supported in Conditional Logic.

* * *

## Supported Operators by Field Type

| **Field Type** | **Operators** |
| --- | --- |
| Text (single/multi line) | equal to, not equal to, contains, does not contain, starts with, ends with, is empty, is filled |
| Number / Score / Monetary | equal to, not equal to, greater than, less than, between, is empty, is filled |
| Date | equal to, before, after, between, is empty, is filled |
| Dropdown (Single) / Radio | is equal to, is not equal to, is empty, is filled |
| Multi Dropdown / Checkbox | is equal to {Option}, is not equal to {Option}, is empty, is filled |
| TnC1 / TnC2 | is checked, is not checked |
| File Upload / Signature | is empty, is filled |

* * *

## Survey-Specific Features

### Jump To Logic

- **IF Basis:** Field or Slide

- **THEN Action:** Jump to a slide or question

- **When It Runs:** On click of **Next**

- **Conflict Handling:** If multiple Jump To rules match, the first runs

- **Protection:** Prevents loops (Slide A ↔ Slide B)


### Rule Filtering

In surveys, filter rules for easier editing:

- **By Field:** Shows rules linked to a specific field

- **By Slide:** Shows rules that affect or target a selected slide


* * *

## Behavior & Evaluation

- Rules run **top-down** in order.

- **Redirect / Message / Disqualify:** Only the first matching rule executes.

- **Show/Hide:** Later rules override earlier ones.

- **Jump To:** Evaluated on slide transition (Next button).

- Text matching is case-insensitive and ignores extra spaces.

- Date logic uses the account timezone.


* * *

## Tips

- Use **Between** for numeric or date ranges (inclusive).

- Try quick date presets like **Today** or **This Week**.

- “Radio Other” appears only if custom input is enabled.

- Always preview your survey to verify logic and Jump To flow.


* * *

## FAQs

**1\. Can I mix AND and OR in the same rule?**

No. Each rule must use only one type of connector.

**2\. Can I have multiple rules in the same survey?**

Yes. Each rule runs independently.

**3\. What happens if more than one condition matches?**

For Redirect, Message, or Disqualify actions, the first match wins.

For Show/Hide, later rules override earlier ones.

**4\. Can I create loops in Jump To logic?**

No. The builder blocks loops and displays a warning if detected.

**5\. Why can’t I select fields in the IF dropdown?**

Check that each survey field has a unique Query Key, then refresh the panel.

* * *

## **Related Articles**

- [Math Calculations in Forms/Surveys](https://help.gohighlevel.com/support/solutions/articles/155000003634-math-calculations-in-forms-surveys)
- [Survey Create Contact on Partial Completion](https://help.gohighlevel.com/support/solutions/articles/155000004191-survey-create-contact-on-partial-completion)
- [Workflow Trigger - Survey Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted)

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

- [Exporting Survey Answers to Google Sheets](https://help.gohighlevel.com/support/solutions/articles/48000979917-exporting-survey-answers-to-google-sheets)
- [Where Do Survey Answers Show Up](https://help.gohighlevel.com/support/solutions/articles/48000979915-where-do-survey-answers-show-up)
- [How to Create a Stylized Survey](https://help.gohighlevel.com/support/solutions/articles/48001165941-how-to-create-a-stylized-survey)
- [New Footer in Surveys](https://help.gohighlevel.com/support/solutions/articles/155000001316-new-footer-in-surveys)
- [Survey Create Contact on Partial Completion](https://help.gohighlevel.com/support/solutions/articles/155000004191-survey-create-contact-on-partial-completion)
- [Payments Integration in Surveys \| Collect Payments & Sell Products](https://help.gohighlevel.com/support/solutions/articles/155000004641-payments-integration-in-surveys-collect-payments-sell-products)

## Related Articles

- [Conditional Logic V2 in Forms and Surveys!](https://help.gohighlevel.com/support/solutions/articles/155000001314-conditional-logic-v2-in-forms-and-surveys-)
- [Math Calculations in Forms/Surveys](https://help.gohighlevel.com/support/solutions/articles/155000003634-math-calculations-in-forms-surveys)
- [Analytics for Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000004181-analytics-for-forms-and-surveys)
- [Element & Slide Cloning in Quizzes, Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000006541-element-slide-cloning-in-quizzes-forms-and-surveys)
- [Survey Create Contact on Partial Completion](https://help.gohighlevel.com/support/solutions/articles/155000004191-survey-create-contact-on-partial-completion)
- [Workflow Trigger - Survey Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003259-workflow-trigger-survey-submitted)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005564)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005564-conditional-logic-in-surveys-v2-/hit)