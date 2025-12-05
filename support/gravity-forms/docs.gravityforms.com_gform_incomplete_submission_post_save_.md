---
url: "https://docs.gravityforms.com/gform_incomplete_submission_post_save/"
title: "gform_incomplete_submission_post_save - Gravity Forms"
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

# gform\_incomplete\_submission\_post\_save

- [Description](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-description)
- [Usage](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-examples)
- [1\. Basic usage](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-1-basic-usage)
- [2\. Trigger Mailchimp feed](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-2-trigger-mailchimp-feed)
- [3\. Save token to current user](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-3-save-token-to-current-user)
- [Placement](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_incomplete_submission_post_save/#h-source-code)

## Description

Triggered after an incomplete form submission is saved.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_incomplete_submission_post_save'``,``'my_function'``, 10, 4 );` |

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$submission** | [array](https://docs.gravityforms.com/array) | The submission data that was submitted. |
| **$resume\_token** | [string](https://docs.gravityforms.com/string) | Resume token that is being used for this partial entry. |
| **$form** | [array](https://docs.gravityforms.com/array) | Contains an array of information regarding the form. |
| **$entry** | [array](https://docs.gravityforms.com/array) | Contains the partial entry that was created. |

## Examples

### 1\. Basic usage

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `function``my_function(``$submission``,``$resume_token``,``$form``,``$entry``) {`<br>```// Do something here`<br>`}`<br>`add_action(``'gform_incomplete_submission_post_save'``,``'my_function'``, 10, 4 );` |

### 2\. Trigger Mailchimp feed

This example shows how you can trigger the processing of a specific feed when an incomplete submission is saved.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `add_action(``'gform_incomplete_submission_post_save'``,``function``(``$submission``,``$resume_token``,``$form``,``$entry``) {`<br>```if``( function_exists(``'gf_mailchimp'``) ) {`<br>```$feed``= gf_mailchimp()->get_feed(``'40'``);`<br>```if``( !``empty``(``$feed``) ) {`<br>```gf_mailchimp()->process_feed(``$feed``,``$entry``,``$form``);`<br>```}`<br>```}`<br>`}, 10, 4 );` |

### 3\. Save token to current user

This example shows how you can the resume token to the currently logged in users profile when an incomplete submission is saved.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_incomplete_submission_post_save'``,``function``(``$submission``,``$resume_token``,``$form``,``$entry``) {`<br>```if``( is_user_logged_in() ) {`<br>```update_user_meta( get_current_user_id(),``'_gf_resume_token'``,``$resume_token``);`<br>```}`<br>`}, 10, 4 );` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This action hook is located in _forms\_model.php_.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 21, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_incomplete_submission_post_save/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)