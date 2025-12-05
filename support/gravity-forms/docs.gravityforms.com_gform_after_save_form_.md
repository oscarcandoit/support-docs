---
url: "https://docs.gravityforms.com/gform_after_save_form/"
title: "gform_after_save_form - Gravity Forms Documentation"
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
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)        - [gform\_after\_delete\_form](https://docs.gravityforms.com/gform_after_delete_form/ "gform_after_delete_form")
        - [gform\_after\_save\_form](https://docs.gravityforms.com/gform_after_save_form/ "gform_after_save_form")
        - [gform\_before\_delete\_form](https://docs.gravityforms.com/gform_before_delete_form/ "gform_before_delete_form")
        - [gform\_post\_form\_activated](https://docs.gravityforms.com/gform_post_form_activated/ "gform_post_form_activated")
        - [gform\_post\_form\_deactivated](https://docs.gravityforms.com/gform_post_form_deactivated/ "gform_post_form_deactivated")
        - [gform\_post\_form\_duplicated](https://docs.gravityforms.com/gform_post_form_duplicated/ "gform_post_form_duplicated")
        - [gform\_post\_form\_restored](https://docs.gravityforms.com/gform_post_form_restored/ "gform_post_form_restored")
        - [gform\_post\_form\_trashed](https://docs.gravityforms.com/gform_post_form_trashed/ "gform_post_form_trashed")
        - [gform\_post\_form\_views\_deleted](https://docs.gravityforms.com/gform_post_form_views_deleted/ "gform_post_form_views_deleted")
        - [gform\_post\_update\_form\_meta](https://docs.gravityforms.com/gform_post_update_form_meta/ "gform_post_update_form_meta")
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)
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

# gform\_after\_save\_form

- [Description](https://docs.gravityforms.com/gform_after_save_form/#h-description)
- [Usage](https://docs.gravityforms.com/gform_after_save_form/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_after_save_form/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_after_save_form/#h-examples)
- [1\. Log form creation/update](https://docs.gravityforms.com/gform_after_save_form/#h-1-log-form-creation-update)
- [2\. Add default fields on form creation](https://docs.gravityforms.com/gform_after_save_form/#h-2-add-default-fields-on-form-creation)
- [3\. Set default notification properties](https://docs.gravityforms.com/gform_after_save_form/#h-3-set-default-notification-properties)
- [Source Code](https://docs.gravityforms.com/gform_after_save_form/#h-source-code)

## Description

Use this action hook to perform actions right after a form is created or updated.

## Usage

|     |
| --- |
| `add_action(``'gform_after_save_form'``,``'log_form_save'``, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

Current form.
- **$is\_new** [bool](https://docs.gravityforms.com/bool)

True if this is a new form being created. False if this is an existing form being updated.

## Examples

### 1\. Log form creation/update

This example adds a log file entry when a form is updated or created.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_action(``'gform_after_save_form'``,``'log_form_saved'``, 10, 2 );`<br>`function``log_form_saved(``$form``,``$is_new``) {`<br>```$log_file``= ABSPATH .``'/gf_saved_forms.log'``;`<br>```$f``=``fopen``(``$log_file``,``'a'``);`<br>```$user``= wp_get_current_user();`<br>```if``(``$is_new``) {`<br>```fwrite(``$f``,``date``(``'c'``) .``" - Form created by {$user->user_login}. Form ID: {$form['id']}. \n"``);`<br>```}``else``{`<br>```fwrite(``$f``,``date``(``'c'``) .``" - Form updated by {$user->user_login}. Form ID: {$form['id']}. \n"``);`<br>```}`<br>```fclose(``$f``);`<br>`}` |

### 2\. Add default fields on form creation

This example shows how you can add some default fields to the form when creating new forms.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `add_action(``'gform_after_save_form'``,``'add_default_fields'``, 10, 2 );`<br>`function``add_default_fields(``$form``,``$is_new``) {`<br>```if``(``$is_new``) {`<br>```$form``[``'fields'``] =``array``(`<br>```array``(`<br>```'type'``=>``'hidden'``,`<br>```'label'``=>``'First Name'``,`<br>```'id'``=> 1,`<br>```'defaultValue'``=>``'{user:first_name}'``,`<br>```'formId'``=>``$form``[``'id'``],`<br>```),`<br>```array``(`<br>```'type'``=>``'hidden'``,`<br>```'label'``=>``'Email'``,`<br>```'id'``=> 2,`<br>```'defaultValue'``=>``'{user:user_email}'``,`<br>```'formId'``=>``$form``[``'id'``],`<br>```),`<br>```);`<br>```GFAPI::update_form(``$form``);`<br>```}`<br>`}` |

### 3\. Set default notification properties

This example shows how you can set the default notification properties when creating new forms.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `add_action(``'gform_after_save_form'``,``'set_default_notification_to'``, 10, 2 );`<br>`function``set_default_notification_to(``$form``,``$is_new``) {`<br>```if``(``$is_new``) {`<br>```foreach``(``$form``[``'notifications'``]``as``&``$notification``) {`<br>```$notification``[``'to'``] =``'name@domain.com'``;`<br>```}`<br>```$form``[``'is_active'``] =``'1'``;`<br>```GFAPI::update_form(``$form``);`<br>```}`<br>`}` |

## Source Code

This action hook is located in GFFormDetail::save\_form\_info() in _form\_detail.php_.

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 31, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_after_save_form/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)