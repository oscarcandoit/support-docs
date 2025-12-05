---
url: "https://docs.gravityforms.com/gform_pre_submission/"
title: "gform_pre_submission - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)        - [gform\_after\_submission](https://docs.gravityforms.com/gform_after_submission/ "gform_after_submission")
        - [gform\_incomplete\_submission\_post\_save](https://docs.gravityforms.com/gform_incomplete_submission_post_save/ "gform_incomplete_submission_post_save")
        - [gform\_post\_process](https://docs.gravityforms.com/gform_post_process/ "gform_post_process")
        - [gform\_pre\_submission](https://docs.gravityforms.com/gform_pre_submission/ "gform_pre_submission")
        - [gform\_use\_post\_value\_for\_conditional\_logic\_save\_entry](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/ "gform_use_post_value_for_conditional_logic_save_entry")
      - [System Status Actions](https://docs.gravityforms.com/category/developers/hooks/actions/system-status-actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_pre\_submission

- [Description](https://docs.gravityforms.com/gform_pre_submission/#h-description)
- [Usage](https://docs.gravityforms.com/gform_pre_submission/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_pre_submission/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_pre_submission/#h-examples)
- [1\. Populate a field](https://docs.gravityforms.com/gform_pre_submission/#h-1-populate-a-field)
- [2\. Populate a field using the value from another field](https://docs.gravityforms.com/gform_pre_submission/#h-2-populate-a-field-using-the-value-from-another-field)
- [3\. Populate a field with the age](https://docs.gravityforms.com/gform_pre_submission/#h-3-populate-a-field-with-the-age)
- [Placement](https://docs.gravityforms.com/gform_pre_submission/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_pre_submission/#h-source-code)

## Description

This action hook is executed after form validation, but before any notifications are sent and the entry is stored. This action can be used to modify the posted values prior to creating the entry.

## Usage

Applies to all forms.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_pre_submission'``,``'pre_submission'``);` |

Applies to a specific form. In this case, form id 5.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_pre_submission_5'``,``'pre_submission'``);` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)
The current form.


## Examples

### 1\. Populate a field

This example changes the post variable for field 14:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_pre_submission'``,``'pre_submission_handler'``);`<br>`function``pre_submission_handler(``$form``) {`<br>```$_POST``[``'input_14'``] =``'new value for field 14'``;`<br>`}` |

### 2\. Populate a field using the value from another field

This example changes the post variable for field 14 to the value of field 5 for a form with id 1:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `// Change 1 on the following to your form id number.`<br>`add_action(``'gform_pre_submission_1'``,``'pre_submission_handler'``);`<br>`function``pre_submission_handler(``$form``) {`<br>```// Change 14 and 5 to the id number of your fields.`<br>```$_POST``[``'input_14'``] = rgpost(``'input_5'``);`<br>`}` |

### 3\. Populate a field with the age

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16 | `add_action(``'gform_pre_submission_5'``,``function``(``$form``) {`<br>```// Get the date field.`<br>```$date_field_id``=``'10'``;`<br>```$date_field``= GFAPI::get_field(``$form``,``$date_field_id``);`<br>```// Get the date field value.`<br>```$value``=``$date_field``->get_value_submission(``array``() );`<br>```$date_value``= GFFormsModel::prepare_date(``$date_field``->dateFormat,``$value``);`<br>```// Get the DateTime object representing the difference between the date field value and today.`<br>```$today``=``new``DateTime();`<br>```$diff``=``$today``->diff(``new``DateTime(``$date_value``) );`<br>```// Populate field 11 with the age.`<br>```$_POST``[``'input_11'``] =``$diff``->y;`<br>`} );` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action hook is located in GFFormDisplay::process\_form() in _form\_display.php_.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 29, 2020

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_pre_submission/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)