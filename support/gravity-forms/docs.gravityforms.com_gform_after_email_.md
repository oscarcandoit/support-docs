---
url: "https://docs.gravityforms.com/gform_after_email/"
title: "gform_after_email - Gravity Forms Documentation"
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
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)        - [gform\_post\_resend\_notification](https://docs.gravityforms.com/gform_post_resend_notification/ "gform_post_resend_notification")
        - [gform\_post\_resend\_all\_notifications](https://docs.gravityforms.com/gform_post_resend_all_notifications/ "gform_post_resend_all_notifications")
        - [gform\_notification\_disable\_from\_warning](https://docs.gravityforms.com/gform_notification_disable_from_warning/ "gform_notification_disable_from_warning")
        - [gform\_post\_notification\_save](https://docs.gravityforms.com/gform_post_notification_save/ "gform_post_notification_save")
        - [gform\_pre\_notification\_deleted](https://docs.gravityforms.com/gform_pre_notification_deleted/ "gform_pre_notification_deleted")
        - [gform\_pre\_notification\_deactivated](https://docs.gravityforms.com/gform_pre_notification_deactivated/ "gform_pre_notification_deactivated")
        - [gform\_pre\_notification\_activated](https://docs.gravityforms.com/gform_pre_notification_activated/ "gform_pre_notification_activated")
        - [gform\_after\_email](https://docs.gravityforms.com/gform_after_email/ "gform_after_email")
        - [gform\_pre\_process\_async\_notifications](https://docs.gravityforms.com/gform_pre_process_async_notifications/ "gform_pre_process_async_notifications")
        - [gform\_post\_process\_async\_notifications](https://docs.gravityforms.com/gform_post_process_async_notifications/ "gform_post_process_async_notifications")
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

# gform\_after\_email

- [Description](https://docs.gravityforms.com/gform_after_email/#h-description)
- [Usage](https://docs.gravityforms.com/gform_after_email/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_after_email/#h-examples)
- [1\. Retry sending](https://docs.gravityforms.com/gform_after_email/#h-1-retry-sending)
- [2\. Add note to entry](https://docs.gravityforms.com/gform_after_email/#h-2-add-note-to-entry)
- [Placement](https://docs.gravityforms.com/gform_after_email/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_after_email/#h-source-code)

## Description

Use this hook to perform actions after a user or admin notification has been sent.

## Usage

|     |
| --- |
| `add_action(``'gform_after_email'``,``'your_function_name_here'``, 10, 12 );` |

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_after_email'``,``'after_email'``, 10, 12 );` |

## Parameters

- **$is\_success** [bool](https://docs.gravityforms.com/bool)
Indicates whether the wp\_mail function was able to successfully process the mail request without errors.

- **$to** [string](https://docs.gravityforms.com/string)

Email address to which the message is being sent.

- **$subject** [string](https://docs.gravityforms.com/string)

Email subject.

- **$message** [string](https://docs.gravityforms.com/string)

Email body.

- **$headers** [array](https://docs.gravityforms.com/array)

Email headers.

- **$attachments** [array](https://docs.gravityforms.com/array)

Email attachment(s).

- **$message\_format** [string](https://docs.gravityforms.com/string)

Email format: text or html.

- **$from** [string](https://docs.gravityforms.com/string)

From email.

- **$from\_name** [string](https://docs.gravityforms.com/string)

From name.

- **$bcc** [string](https://docs.gravityforms.com/string)

Bcc email.

- **$reply\_to** [string](https://docs.gravityforms.com/string)

Reply to email.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry currently being processed or false if not available.


## Examples

### 1\. Retry sending

This example tries to send the email a second time if the original request was unsuccessful.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `add_action(``'gform_after_email'``,``function``(``$is_success``,``$to``,``$subject``,``$message``,``$headers``,``$attachments``,``$message_format``) {`<br>```if``( !``$is_success``) {`<br>```//sending mail failed, try again one more time`<br>```$try_again``= wp_mail(``$to``,``$subject``,``$message``,``$headers``,``$attachments``);`<br>```if``( !``$try_again``) {`<br>```//still unable to send, do something...perhaps log the failure in a text file`<br>```}`<br>```}`<br>`}, 10, 7 );` |

### 2\. Add note to entry

This example shows how you can add a note to the entry.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_after_email'``,``function``(``$is_success``,``$to``,``$subject``,``$message``,``$headers``,``$attachments``,``$message_format``,``$from``,``$from_name``,``$bcc``,``$reply_to``,``$entry``) {`<br>```$current_user``= wp_get_current_user();`<br>```GFAPI::add_note( rgar(``$entry``,``'id'``),``$current_user``->ID,``$current_user``->display_name,``'the note to be added'``);`<br>`}, 10, 12 );` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action hook is located in GFCommon::send\_email() in _common.php_.

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 29, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_after_email/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)