---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code"
title: " Workflow Action - Custom Code : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
6. Workflow Action - Custom Code

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

# Workflow Action - Custom Code

Modified on: Sun, 8 Sep, 2024 at 1:25 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code#Example)

## Overview

The **Custom Code** action allows you to extend your workflow’s functionality by writing and executing custom JavaScript code. You can include properties from previous steps, perform operations, and return the output to be used in subsequent steps.

## Action Name

**Custom Code**

## Action Description

The **Custom Code** action enables the execution of JavaScript code within a workflow, allowing users to extend the system’s functionality. This action can process data and return output that can be used in the workflow’s subsequent steps.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467316/original/J_XDJ_paKZxPI-1e39hRdh68vOEr0s-dbQ.png?1725819732)

### **How to Configure**

1. **Action Name:** Give your custom code step a name that reflects its purpose.
2. **Language:** By default, this is set to JavaScript. Currently, no other languages are supported.
3. **Property to Include in Code:**
   - Add key-value pairs where the key will be used in your code, and the value can either be hardcoded or dynamically mapped from previous workflow steps.
   - Use these key-value pairs within the code by referencing `inputData.<key>`. For example, if the key is `number1`, you can access it in the code as `inputData.number1`.
4. **Code:**
   - Write JavaScript code to process the values mapped in the previous step.
   - Ensure the output is in the form of a JavaScript object or array of objects. Example: `output = { result: sum }`.

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | The name of the action that will be displayed in the workflow. | Yes |
| Language | The programming language used for the custom code (default is JavaScript). | Yes |
| Property To Include In Code | Fields to be used within the code, mapped from previous steps. Use inputData.keyName to access the values within the code. | Yes |
| Code | JavaScript code to perform the desired operation. The output should be a JavaScript object. | Yes |

## Example

```javascript
javascript
Copy code

// This is wrapped in an async function
const sum = inputData.number1 + inputData.number2;

// Return the result as a JavaScript object
output = { result: sum };
```

This example adds two numbers from the mapped properties `number1` and `number2` and outputs their sum.

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

- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)
- [Workflow Action - Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code)
- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)

## Related Articles

- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000002253-workflow-action-custom-code)
- [Workflow Action - Custom Code AI](https://help.gohighlevel.com/support/solutions/articles/155000004709-workflow-action-custom-code-ai)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)
- [Workflow Action - Webhook (Outbound)](https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-)
- [Workflow Action - Manual SMS](https://help.gohighlevel.com/support/solutions/articles/155000003289-workflow-action-manual-sms)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code/hit)