---
url: "https://docs.gravityforms.com/field-object/"
title: "Field Object - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)    - [Button Object](https://docs.gravityforms.com/button/ "Button Object")
    - [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object/ "Conditional Logic Object")
    - [Confirmations Object](https://docs.gravityforms.com/confirmations-object/ "Confirmations Object")
    - [Entry Object](https://docs.gravityforms.com/entry-object/ "Entry Object")
    - [Field Object](https://docs.gravityforms.com/field-object/ "Field Object")
    - [Form Object](https://docs.gravityforms.com/form-object/ "Form Object")
    - [Notifications Object](https://docs.gravityforms.com/notifications-object/ "Notifications Object")
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Field Object

- [Introduction](https://docs.gravityforms.com/field-object/#h-introduction)
- [Usage](https://docs.gravityforms.com/field-object/#h-usage)
- [Properties](https://docs.gravityforms.com/field-object/#h-properties)
- [Choice Properties](https://docs.gravityforms.com/field-object/#h-choice-properties)
- [Input Properties](https://docs.gravityforms.com/field-object/#h-input-properties)
- [Field (input) Types](https://docs.gravityforms.com/field-object/#h-field-input-types)
- [Post Fields](https://docs.gravityforms.com/field-object/#h-post-fields)
- [Add-On Fields](https://docs.gravityforms.com/field-object/#h-add-on-fields)
- [Field JSON](https://docs.gravityforms.com/field-object/#h-field-json)

## Introduction

The Field object contains all settings for a particular field. It is part of the [Form Object](https://docs.gravityforms.com/form-object) and is available in most Gravity Forms hooks. It can be manipulated to dynamically change the way the field is displayed.

## Usage

|     |     |
| --- | --- |
| 1<br>2 | `// returns the label of the first field on the form`<br>`$form``[``'fields'``][0]->label;` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `// displays the types of every field in the form`<br>`foreach``(``$form``[``'fields'``]``as``$field``) {`<br>```echo``$field``->type .``'<br/>'``;`<br>`}` |

## Properties

The following properties are common to multiple field types.

| Property | Type | Description |
| --- | --- | --- |
| **adminLabel** | [string](https://docs.gravityforms.com/string) | When specified, the value of this property will be used on the admin pages instead of the _label_. It is useful for fields with long labels.<br>_Applies to:_ All fields |
| **adminOnly** | [bool](https://docs.gravityforms.com/bool) | Determines if this field should only visible on the administration pages. A value of 1 will mark the field as admin only and will hide it from the public form. Useful for fields such as “status” that help with managing entries, but don’t apply to users filling out the form. _Applies to:_ All fields |
| **allowsPrepopulate** | [bool](https://docs.gravityforms.com/bool) | Determines if the field’s value can be pre-populated dynamically. 1 to allow field to be pre-populated, 0 otherwise. _Applies to:_ All fields |
| **choices** | [array](https://docs.gravityforms.com/array) | An array of choices.<br>See [Choice Properties](https://docs.gravityforms.com/field-object/#h-choice-properties) for how each choice in the array should be defined.<br>_Applies to:_ checkboxes, radio, select, and post\_category |
| **[Conditional Logic](https://docs.gravityforms.com/conditional-logic-object/)** | [array](https://docs.gravityforms.com/array) | Controls the visibility of the field based on values selected by the user. |
| **content** | [string](https://docs.gravityforms.com/string) | Content of an HTML block field to be displayed on the form <br>_Applies to:_ html |
| **cssClass** | [string](https://docs.gravityforms.com/string) | Custom CSS class to be added to the <li> tag that contains the field. Useful to apply custom formatting to specific fields. <br>_Applies to:_ All fields |
| **defaultValue** | [string](https://docs.gravityforms.com/string) | Contains the default value for the field. When specified, the field’s value will be populated with the contents of this property when the form is displayed. <br>_Applies to:_ hidden, text, website, phone, number, date, textarea, email, post\_title, post\_content, post\_excerpt, post\_tags, post\_custom\_field |
| **description** | [string](https://docs.gravityforms.com/string) | Field description. <br>_Applies to:_ All fields |
| **enableChoiceValue** | [bool](https://docs.gravityforms.com/bool) | Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user <br>_Applies to:_ checkbox, select and radio |
| **errorMessage** | [string](https://docs.gravityforms.com/string) | Contains the message that is displayed for fields that fail validation <br>_Applies to:_ All fields except html, section and hidden |
| **id** | [integer](https://docs.gravityforms.com/integer) | Field id |
| **inputName** | [string](https://docs.gravityforms.com/string) | Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when _allowsPrepopulate_ is set to 1.<br>_Applies to:_ All fields except section and captcha |
| `inputs` | [array](https://docs.gravityforms.com/array) | An array of inputs.<br>See [Input Properties](https://docs.gravityforms.com/field-object/#h-input-properties) for how each input should be defined. <br>_Applies to:_ name, address, checkbox.<br>Note: For checkbox fields, there should be an input for each choice. |
| **isRequired** | [bool](https://docs.gravityforms.com/bool) | Determines if the field requires the user to enter a value. 1 marks the field as required, 0 marks the field as not required. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it.<br>_Applies to:_ All fields except section, html and captcha |
| **label** | [string](https://docs.gravityforms.com/string) | Field label that will be displayed on the form and on the admin pages<br>_Applies to:_ All fields |
| **noDuplicates** | [bool](https://docs.gravityforms.com/bool) | Determines if the field allows duplicate submissions. 1 to prevent users from submitting the same value more than once, 0 to allow duplicate values.<br>_Applies to:_ hidden, text, website, phone, number, date, time, textarea, select, radio, email, post\_custom\_field |
| **size** | [string](https://docs.gravityforms.com/string) | Determines the size of the field when displayed on the page _Applies to:_ All fields except html, section and captcha<br>_Possible values:_ small, medium, large |
| **type** | [string](https://docs.gravityforms.com/string) | The type of field to be displayed<br>_Applies to:_ All fields<br>_Possible values:_ html, hidden, section, text, website, phone, number, date, time, textarea, select, checkbox, radio, name, address, fileupload, email, post\_title, post\_content, post\_excerpt, post\_tags, post\_category, post\_image, post\_custom\_field, captcha |
| **placeholder** | [string](https://docs.gravityforms.com/string) | Use the Placeholder to give a hint at the expected value or format.<br>Applies to: All fields except section, HTML, captcha, hidden, radio buttons, checkbox, multiple choice, image choice, page |
| **choiceAlignment** | [string](https://docs.gravityforms.com/string) | The alignment for choices<br>Applies to: multiple choice field<br>Possible values: horizontal, vertical |

### Choice Properties

| Property | Type | Description |
| --- | --- | --- |
| `text` | [strin](https://docs.gravityforms.com/string) [g](https://docs.gravityforms.com/string) | The text to be displayed to the user when displaying this choice. |
| `value` | [strin](https://docs.gravityforms.com/string) [g](https://docs.gravityforms.com/string) | The value to be stored in the database when this choice is selected. |
| `isSelected` | [bool](https://docs.gravityforms.com/bool) | Indicates if the choice should be selected by default when the field is displayed. |
| `price` | [strin](https://docs.gravityforms.com/string) [g](https://docs.gravityforms.com/string) | The price of the item. Used by Product, Option, and Shipping type fields. |

|     |     |
| --- | --- |
| 1<br>2<br>3 | `$choices``=``$field``->choices;`<br>`$choices``[0][``'text'``] =``'Drop down item 1'``;`<br>`$field``->choices =``$choices``;` |

### Input Properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | [strin](https://docs.gravityforms.com/string) [g](https://docs.gravityforms.com/string) | The input ID. Following the following naming convention: `FIELDID.NUMBER` (i.e. 5.1), where `FIELDID` is the `id` of the containing field, and `NUMBER` is a unique value that does not end with `0`.<br>For example, inputs for the name field are numbered as follows:<br>**FIELDID.2** Name Prefix input id (i.e. 4.2)<br>**FIELDID.3** First Name input id (i.e. 4.3)<br>**FIELDID.6** Last Name input id (i.e. 4.6)<br>**FIELDID.8** Name Suffix input id (i.e. 4.8) |
| `label` | [strin](https://docs.gravityforms.com/string) [g](https://docs.gravityforms.com/string) | The input label. |
| `name` | [bool](https://docs.gravityforms.com/bool) | The input parameter name for use with dynamic population. |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `$inputs``=``$field``->inputs;`<br>`$inputs``[0][``'label'``] =``'First Name'``;`<br>`//sets the label for the first input`<br>`$field``->inputs =``$inputs` |

## Field (input) Types

For field type-specific properties, see the properties sections of the following articles:

- [Address](https://docs.gravityforms.com/gf_field_address/#h-properties)
- [Calculation (Product)](https://docs.gravityforms.com/gf_field_calculation/#h-properties)
- [CAPTCHA](https://docs.gravityforms.com/gf_field_captcha/#h-properties)
- [Checkboxes](https://docs.gravityforms.com/gf_field_checkbox/#h-properties)
- [Consent](https://docs.gravityforms.com/gf_field_consent/#h-properties)
- [Credit Card (deprecated)](https://docs.gravityforms.com/gf_field_creditcard/#h-properties)
- [Date](https://docs.gravityforms.com/gf_field_date/#h-properties)
- [Email](https://docs.gravityforms.com/gf_field_email/#h-properties)
- [File Upload](https://docs.gravityforms.com/gf_field_fileupload/#h-properties)
- [Hidden](https://docs.gravityforms.com/gf_field_hidden/#h-properties)
- [Hidden (Product)](https://docs.gravityforms.com/gf_field_hiddenproduct/#h-properties)
- [HTML](https://docs.gravityforms.com/gf_field_html/#h-properties)
- [Image Choice](https://docs.gravityforms.com/?p=43466)
- [List](https://docs.gravityforms.com/gf_field_list/#h-properties)
- [Multi Select](https://docs.gravityforms.com/gf_field_multiselect/#h-properties)
- [Multiple Choice](https://docs.gravityforms.com/?p=43351)
- [Name](https://docs.gravityforms.com/gf_field_name/#h-properties)
- [Number](https://docs.gravityforms.com/gf_field_number/#h-properties)
- [Page](https://docs.gravityforms.com/gf_field_page/#h-settings-and-properties)
- [Password](https://docs.gravityforms.com/gf_field_password/#h-properties)
- [Phone](https://docs.gravityforms.com/gf_field_phone/#h-properties)
- [Radio](https://docs.gravityforms.com/gf_field_radio/#h-settings-and-properties)
- [Section](https://docs.gravityforms.com/gf_field_section/#h-properties)
- [Select (Drop Down)](https://docs.gravityforms.com/gf_field_select/#h-properties)
- [Single Product](https://docs.gravityforms.com/gf_field_singleproduct/#h-properties)
- [Single Shipping](https://docs.gravityforms.com/gf_field_singleshipping/#h-properties)
- [Text](https://docs.gravityforms.com/gf_field_text/#h-properties)
- [Textarea (Paragraph)](https://docs.gravityforms.com/gf_field_textarea/#h-properties)
- [Time](https://docs.gravityforms.com/gf_field_time/#h-properties)
- [Total](https://docs.gravityforms.com/gf_field_total/#h-properties)
- [User Defined Price](https://docs.gravityforms.com/gf_field_price/#h-properties)
- [Website](https://docs.gravityforms.com/gf_field_website/#h-properties)

### Post Fields

| Property | Type | Description |
| --- | --- | --- |
| **postCustomFieldName** | [string](https://docs.gravityforms.com/string) | The name of the Post Custom Field that the submitted value should be assigned to. _Applies to:_ post\_custom\_field |
| **displayAllCategories** | [bool](https://docs.gravityforms.com/bool) | Determines if all categories should be displayed on the Post Category drop down. 1 to display all categories, 0 otherwise. If this property is set to 1 (display all categories), the Post Category drop down will display the categories hierarchically. _Applies to:_ post\_category |
| **displayCaption** | [bool](https://docs.gravityforms.com/bool) | Controls the visibility of the caption metadata for Post Image fields. 1 will display the caption field, 0 will hide it. _Applies to:_ post\_image |
| **displayDescription** | [bool](https://docs.gravityforms.com/bool) | Controls the visibility of the description metadata for Post Image fields. 1 will display the description field, 0 will hide it. _Applies to:_ post\_image |
| **displayTitle** | [bool](https://docs.gravityforms.com/bool) | Controls the visibility of the title metadata for Post Image fields. 1 will display the title field, 0 will hide it. _Applies to:_ post\_image |
| **inputType** | [string](https://docs.gravityforms.com/string) | Contains a field type and allows a field type to be displayed as another field type. A good example is the Post Custom Field, that can be displayed as various different types of fields. _Applies to:_ post\_custom\_field |

## Add-On Fields

See the following pages for details about fields added by add-ons:

- [Coupon](https://docs.gravityforms.com/field-object/GF_Field_Coupon)
- [Dropbox Upload](https://docs.gravityforms.com/field-object/GF_Field_Dropbox)

## Field JSON

This example shows how a field object would look when formatted as JSON for use by the [Gravity Forms CLI Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/wp-cli-add-on/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16 | `{`<br>```"type": "select",`<br>```"label": "My Dropdown",`<br>```"choices": [{`<br>```"text": "Choice 1",`<br>```"value": "one"`<br>```}, {`<br>```"text": "Choice 2",`<br>```"value": "two"`<br>```}],`<br>```"id": "2",`<br>```"visibility": "visible",`<br>```"formId": "14",`<br>```"pageNumber": 1,`<br>```"isRequired": false`<br>`}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/field-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)