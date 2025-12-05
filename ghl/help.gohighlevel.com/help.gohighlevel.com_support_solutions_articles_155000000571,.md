---
url: "https://help.gohighlevel.com/support/solutions/articles/155000000571,"
title: " Marketplace Workflow Actions : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000000571,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [App Marketplace](https://help.gohighlevel.com/support/solutions/155000000049)
4. [Workflow Triggers & Actions](https://help.gohighlevel.com/support/solutions/folders/155000000080)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000000571,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [App Marketplace](https://help.gohighlevel.com/support/solutions/155000000049)
   - [Workflow Triggers & Actions](https://help.gohighlevel.com/support/solutions/folders/155000000080)
6. Marketplace Workflow Actions

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

# Marketplace Workflow Actions

Modified on: Thu, 15 May, 2025 at 12:03 AM

Marketplace Workflow Actions are the customizable workflow actions managed in [Marketplace](https://marketplace.gohighlevel.com/). You will be able to create custom actions to push or pull data from your application/API in a workflow using customized fields and API endpoint.

```
Sign up/ Sign in to Marketplace to manage Marketplace Workflow Actions.

Marketplace Workflow Actions are part of LC Premium Triggers & Actions and are chargeable per execution.

How to enable and rebill LC Premium Triggers & Actions for Workflows?

You should enable Workflow LC Premium Triggers & Actions for the sub-account to access the Actions created in the Marketplace App.

The marketplace workflow actions created in an APP will be listed in the workflow actions only if the sub-account has the APP installed/integrated from the Marketplace.
```

**TABLE OF CONTENTS**

- [Prerequisites](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Prerequisites)

- [Create Action](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Create-Action)

  - [Name](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Name)
  - [Action Information](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Action-Information)
    - [Icon](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Icon)
    - [Name](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Name-1)
    - [Key](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Key)
    - [Short description](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Short-description)
    - [Summary](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Summary)
- [Action Configuration](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Action-Configuration)

  - [Manage Fields](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Manage-Fields)
    - [Create New Field](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Create-New-Field)
    - [Type: Select / Multi Select / Radio](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Select-/-Multi-Select-/-Radio)
      - [Constants](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Constants)
      - [Internal Reference](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Internal-Reference)
      - [External API](https://help.gohighlevel.com/support/solutions/articles/155000000571,#External-API)
    - [Type: Hidden](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Hidden)
    - [Type: Dynamic](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Dynamic)
    - [Validation Rules](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Validation-Rules-4)
- [Multi-branch](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Multi-branch-%C2%A0)
- [Action Execution](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Action-Execution)
  - [API](https://help.gohighlevel.com/support/solutions/articles/155000000571,#API)
  - [Custom code](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Custom-code%C2%A0)
  - [Test and format your Code](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Test-and-format-your-Code)
- [Pause Execution](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Pause-Execution)
- [Manage Custom Variables](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Manage-Custom-Variables)
- [Add Custom Variable](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Add-Custom-Variable)
- [Submit for Review](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Submit-for-Review)
- [Create New Version](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Create-New-Version)
- [Delete Action](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Delete-Action)

## **Prerequisites**

**_Note : workflows.readyonly scope should be turned on to enable actions and triggers._**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

## **Create Action**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617666/original/6dcMrp542QyK9ITxiYd6SP3nDrmXS0H4ng.png?1692595312)**

### **Name**

Enter Action Name

**Key**

A unique identifier for this action, used to reference the action inside the workflow. This value cannot be changed later. Example: {{mycustomaction.data.name}}

# **Action Information**

Add action details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617692/original/ayYzwBxRpcqkChyLHwVUxiYa6SNiuEUpmg.png?1692595399)

### **Icon**

Choose an Icon for this Action. Shown in workflow for this action.

### **Name**

Custom Action Name

### **Key**

A unique identifier for this action, used to reference the action inside the workflow, Ex: {{action\_a.custom\_variable}}. This value cannot be changed later.

### **Short description**

A short description explaining what your action does to help users understand. Shown in workflow as sub-title for this action.

### **Summary**

A detailed information on what your action does to help users understand why they should use this action.

# **Action Configuration**

## **Manage Fields**

Construct form to collect the data required for sending to API

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617794/original/ruqdiXv6Qpyb5koXldxA6IezKmW4Kn4k6A.png?1692595629)

### **Create New Field**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097669/original/K7S7qgH1SPJT2Epd6gu8E37h5aImQ0tPDA.png?1701409848)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654687/original/wlQ-4aQO5LpNdpJbhzMNHN2oNPiD95H3sw.png?1747285021)

**Name**

Enter Field Name

**Type**

Select one of the following field types:

- String
- Numerical
- Textarea
- [Select](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Select-/-Multi-Select-/-Radio)
- [Multiple Select](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Select-/-Multi-Select-/-Radio)
- [Radio](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Select-/-Multi-Select-/-Radio)
- Toggle
- Checkbox
- Attachment
- Rich Text Editor
- [Hidden](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Hidden)
- [Dynamic](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Type%3A-Dynamic)

**Required**

Enable if this is a required field in workflow.

**Reference**

Enter unique reference key. The value of this field will be bind to the provided key. Example: action\_a\_name

**Default Value**

Enter or map a value. The value provided will be used as default value for this field when loaded in workflow.

**Alters Dynamic Field**

If enabled, any changes made to this field value will trigger/ re-trigger loading the dynamic fields to the workflow action configuration UI.

#### **Validation Rules**

Validation Rules let you protect data quality by checking the value a user types into a **form field**, **table cell**, or **configuration input** before it is saved or passed downstream.

If the value fails the check, HighLevel blocks the save/submit action and shows a custom error message that you configure.

Typical use-cases

| Scenario | Example |
| --- | --- |
| Lead-capture form | Require a properly-formatted US phone number |
| Web-hook payload | Ensure a “status” field matches one of several allowed strings |
| Custom action parameter | Block users from entering Handlebar syntax in a plain-text field |

### **Type: Select / Multi Select / Radio**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618327/original/75wTdD-ywGGAzHHCMQ6rSJ74XtVQEivUeQ.png?1692596839)

Option Type is applicable only for Select, Multi Select and Radio field types.

Select one of the following option types:

- Constants
- Internal Reference
- External API

#### **Constants**

Load options by adding custom Label-Value constants

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

#### **Internal Reference**

Load options from HighLevel Internal Modules. Select one of the HighLevel Modules to load options list.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)**Supported HighLevel Modules**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

#### **External API**

Load option from external API endpoint

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

**URL (GET)**

Provide a URL to support GET method and send a valid response as per the sample response structure shared below.

**Headers**

Add headers as per your requirement

**Sample Response Data**

```javascript

```

JavaScript

### **Type: Hidden**

It will be hidden in the action configuration and the mapped data will be sent in the payload. Used to collect essential information such as company\_id, customerid, etc,. from system data or from your custom triggers

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014523897/original/XyGotHxLGe2wMKBEiZA-SPiJUKlT7jy-Kw.png?1701863223)

### **Type: Dynamic**

Dynamic fields are used to build custom fields from an API call. The API call should return the below response structure to construct the fields in the Workflow action configuration form UI. Only one Dynamic type can be created per action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005619479/original/4iG7FjTRJheIDHXNKGKDV3TZKaEtM-xMCg.png?1692598872)

**URL (POST)**

Enter your API endpoint URL. When executed data is sent to this API endpoint via POST method in the below mentioned payload format and a valid response is expected as per the sample response structure shared below.

**Headers**

Add headers as per your requirement

**Sample Payload:** The form data is sent as payload to the dynamic field API

```javascript

```

JavaScript

**Sample Response Structure:**Sections are used to group the fields in UI

```javascript

```

JavaScript

**Sample structure for each Field Types**

String

```javascript

```

JavaScript

Numeric

```javascript

```

JavaScript

Textarea

```javascript

```

JavaScript

Select

```javascript

```

JavaScript

Multiple Select

```javascript

```

JavaScript

Radio

```javascript

```

JavaScript

Toggle

```javascript

```

JavaScript

Checkbox

```javascript

```

JavaScript

### **Validation Rules**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654729/original/-BqA09IMW6XXljUIMVpOefqpJJ_JkQ2TWg.png?1747285143)

The Validation Rules feature helps app developers ensure data integrity by enforcing input checks on form fields. Developers can choose from three flexible validation methods:

1. **Pre-defined Rules**
   - Easily apply common validations such as email, phone number, URL, numerical values, and handlebar syntax checks.
   - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654763/original/XDtbol7Qdfx4-ahKv5gkVKT415lhZivHPw.png?1747285248)
2. **Regex Support**
   - Use custom regular expressions to validate inputs against specific patterns.
   - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654765/original/mLG5Rv1JMo5y6MlQZVQfNmcY0Wucw3jr5w.png?1747285258)
3. **Arrow Function**
   - Write custom arrow functions that receive the input value and return true or false based on whether the validation passes or fails.
   - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654766/original/wEHzLmsCVVTfrMXMrTKEHB9Wii3yvBXn_Q.png?1747285266)

For every validation rule, a **custom error message** must be provided to display meaningful feedback when validation fails.

# Multi-branch

The Multi-Branch Feature enables the creation of branches that can dynamically adjust based on various predefined conditions. By allowing multiple branches within a workflow each contact can directed down the appropriate path based on their interactions or status.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332890/original/Z0b9pEdrE-DG_za1m0tD-ZmEWFfJnSY3sg.png?1727069887)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332901/original/t75w0vc7umALitmmtlZaay_6fJTRh8DIwA.png?1727069912)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332913/original/tBcj_nSW1LIskT9KT_TedDHBqPl92qgMTA.png?1727069931)

- **Branch Section:** Defines the name or identifier for the specific branch section.
- **Branch Section Description:** Provides a brief description or details about the branch section.
- **Branch Name Label:** Specifies the label that will be displayed for the branch name.
- **Branch Name Helptext:** Offers additional information related to the branch name.
- **Delete Branch Title:** Sets the title or label used when deleting a branch.
- **Delete Branch Description:** Describes when a branch is deleted.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032480643/original/rq82aq6pm8EaxX8Na_ebjGAmRp129bzkWw.png?1725867015)

- **Allow New Branches:** Enables users to add new branches within the action.

- **Is Predefined Branches Editable**: Allows users to edit predefined branches within the action.


- **Show Branches Section:** Displays the branch section details to the user.

**Disabled Allow new branch**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332933/original/J0rhJoECnALYR39Y3b0WSBxRUOIKFbbc8A.png?1727069981)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332974/original/ZLeZZHyChomMGQNgfpqiAz8J3G4UEZqOGg.png?1727070044)

**Pre-defined branch is editable**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333000/original/YoCdmA4wy15bf8TiPG_wyPMIhLblouPGKQ.png?1727070083)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333041/original/RNSq7KP-b7whUKZx_weaXqk29UkYY91mDw.png?1727070133)

**Hide branch**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333116/original/ReCSVS39jy8eUqGbi14v7qicF0nKdyEO6Q.png?1727070243)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333104/original/SEal4s-9lkEbiyUrkv4PuHAHfYaaBjb2zw.png?1727070234)**

**Sample payload for branches**

```javascript

```

JavaScript

## **Action Execution**

Allows you to choose between an API or a custom code.

### API

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032480310/original/vH_JLcjEpQJuLJ6A3uQ0b3FUZ-AfgZHipg.png?1725866757)

**URL (POST)**

Enter your API endpoint URL. When this action is executed data is sent to this API endpoint via POST method in the below mentioned payload format.

**Headers**

Add required header data that has to be included while sending data to the API endpoint

**Sample Payload:** The form data is sent as payload to the Send Data URL

```javascript

```

JavaScript

### **Custom code**

Custom Code allows users to create custom logic they want to achieve. This provides flexibility and control beyond the pre-built APIs, enabling users to automate complex tasks and integrate with various services not supported by API.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033359936/original/wB9t6ma8X3QDc3MPVASJwbbwjpbazkMzHw.png?1727087419)

**Code Editor**

You can write the code in the Code Editor

You can input HTTP requests like Get, Put, Post, Delete etc via the button.

You can also use cutom values using the picker.

Output should be a JavaScript Object or Array of Objects.

## **Test and format your Code**

- Testing the code is a mandatory step, if the test is not done then user will not be able to use the output of the code in the subsequent steps.
- To test the code click on the "Test Code" button.
- Post clicking on Run test button, if there are no errors in the code them it will show "Test Result Success" and if there is an error in code then the result will be "Test Result Failed" and you would have to recheck the code to remove the error.
- You can also format the code using "Format code" button.

## Pause Execution

- This toggle is used the contact will be held at this action unless resume webhook is requested.
- If this toggle is true then provided extras object needs to be pass as body payload for resume workflow endpoint.
- Show API details button shows a sample response to be passed onto to the webhook for Success Execution and Failed Execution.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032481365/original/S2CljnH1PD8X0I5hAnHPIb_xpHXMMLNWPg.png?1725867420)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032481330/original/LYFLB1fldHF3ZL6miWM-dM82K7O_7fLCrA.png?1725867393)

I **n case of Sync Execution**

When the pause execution is turned off along with branching support, the contact will be moved to provided branch using \`branchId\` property from API response or from Custom Code using return statement. The branchId here will be the branch through with the contact will move forward.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032512093/original/HJeogTLz5tgbQvMiQXG4d87nJw1vzH2bAA.png?1725883517)

**In case of Async Execution**

When the pause execution is turned off, the branch ID needs to be sent to the webhook for resuming which is present in "show API details" button. More info present in [Pause functionality.](https://help.gohighlevel.com/support/solutions/articles/155000000571,#Pause-Execution)

## **Response Data**

Add sample response data to configure custom variables.

**Add sample response**

Enter a valid sample response JSON structure that will be sent as a response to the Send Data API endpoint.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620618/original/v5u2ptIftb-EkjoHz08EEx6aEKrwGKOJQA.png?1692600088)

Arrays are supported in response data. This data can be utilized in custom variables based on references and is available for use in Array Functions, Custom Code, and Custom Webhooks.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032655648/original/Pc1x8-hDu4dy5yCpl1qTJSmVbcz-4zc4GA.png?1726046226)

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032655669/original/5VumbMNRtvIV_UOJ4IpzyyzW3GLher5F4A.png?1726046238)

A new dropdown option allows users to select between a standard value or a custom value picker.

- Standard Values: Users can input data based on the field type (e.g., date, dropdown, tag).
- Custom Value Picker: Users can input data from custom fields, such as values from an inbound webhook trigger or other custom fields.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033144422/original/hiDL0BOJXspAcojkoZKz9dTngO6FL0lARw.png?1726732532)

## **Manage Custom Variables**

Add Custom variables using sample response data, for users to use in workflows

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620750/original/Q49PfGpsX05fiHc_6o29AMbOe8rtSuA4Sw.png?1692600268)

## **Add Custom Variable**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620775/original/l4xln2C5D1jyZxTEv-jahSqBadZkpCvuzA.png?1692600290)

**Name**

Enter label name

**Reference**

Select a reference key from the sample response saved to Response Data.

## **Submit for Review**

The action version will be in draft state by default. After updating the action information and configuration the action version should be submitted for review.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

Click on **Submit for review** and add required **changelog** information for the submitted version.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622232/original/Xrf9qOywJo8Vovd-7Cjgm5mtglHrtYUP_Q.png?1692601503)

Once approved the version submitted for review will be published live to all Sub-accounts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

## **Create New Version**

Click on  **\+ New Version** to create a new version for the action

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

On clicking **\+ New Version** It will create a new draft version with all the previously published data prefilled.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

## **Delete Action**

Once an Action is deleted, it will be deleted permanently and cannot be restored. The deleted action will be removed from Marketplace App and Workflow Action list. If a deleted action is part of any workflow the action execution will be skipped.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097127/original/mHtzZ8zfmpagivsX-3J84PV73HpFmvvnpw.png?1701408996)**

**Enter action name to confirm delete** **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097165/original/niXVvIBTbQIo0_tYJGqglh99njIMQUOGog.png?1701409041)**

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

- [Marketplace Workflow Actions](https://help.gohighlevel.com/support/solutions/articles/155000000571-marketplace-workflow-actions)
- [Marketplace Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000001024-marketplace-workflow-triggers)
- [Marketplace Apps - Managing External Connections](https://help.gohighlevel.com/support/solutions/articles/155000004585-marketplace-apps-managing-external-connections)
- [Experiment: Waiving Premium Action/Trigger Charges for Selected Marketplace Apps](https://help.gohighlevel.com/support/solutions/articles/155000004719-experiment-waiving-premium-action-trigger-charges-for-selected-marketplace-apps)

## Related Articles

- [New Discover button - Workflows](https://help.gohighlevel.com/support/solutions/articles/155000004025-new-discover-button-workflows)
- [Installing Marketplace Apps Directly from the Workflow Builder](https://help.gohighlevel.com/support/solutions/articles/155000005791-installing-marketplace-apps-directly-from-the-workflow-builder)
- [Marketplace Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000001024-marketplace-workflow-triggers)
- [Workflows Pro Plan - New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)
- [Usage Based Pricing on App Markeptlace](https://help.gohighlevel.com/support/solutions/articles/155000005111-usage-based-pricing-on-app-markeptlace)
- [Typeform – Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006676-typeform-actions-triggers-in-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000000571,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000000571-marketplace-workflow-actions/hit)