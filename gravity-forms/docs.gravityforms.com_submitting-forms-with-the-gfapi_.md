---
url: "https://docs.gravityforms.com/submitting-forms-with-the-gfapi/"
title: "Submitting Forms with the GFAPI - Gravity Forms Documentation"
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
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)      - [Creating Forms with the GFAPI](https://docs.gravityforms.com/creating-forms-with-the-gfapi/ "Creating Forms with the GFAPI")
      - [Duplicating Forms with the GFAPI](https://docs.gravityforms.com/duplicating-forms-with-the-gfapi/ "Duplicating Forms with the GFAPI")
      - [Updating Forms with the GFAPI](https://docs.gravityforms.com/updating-forms-with-the-gfapi/ "Updating Forms with the GFAPI")
      - [Getting Forms with the GFAPI](https://docs.gravityforms.com/getting-forms-with-the-gfapi/ "Getting Forms with the GFAPI")
      - [Deleting Forms with the GFAPI](https://docs.gravityforms.com/deleting-forms-with-the-gfapi/ "Deleting Forms with the GFAPI")
      - [Submitting Forms with the GFAPI](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/ "Submitting Forms with the GFAPI")
      - [GFAPI Class](https://docs.gravityforms.com/api-functions/ "GFAPI Class")
      - [Validating Form Submissions with the GFAPI](https://docs.gravityforms.com/validating-forms-with-the-gfapi/ "Validating Form Submissions with the GFAPI")
      - [Creating Entries with the GFAPI](https://docs.gravityforms.com/creating-entries-with-the-gfapi/ "Creating Entries with the GFAPI")
      - [Updating Entries with the GFAPI](https://docs.gravityforms.com/updating-entries-with-the-gfapi/ "Updating Entries with the GFAPI")
      - [Searching and Getting Entries with the GFAPI](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/ "Searching and Getting Entries with the GFAPI")
      - [Deleting Entries with the GFAPI](https://docs.gravityforms.com/deleting-entries-with-the-gfapi/ "Deleting Entries with the GFAPI")
      - [Managing Add-On Feeds with the GFAPI](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/ "Managing Add-On Feeds with the GFAPI")
      - [Sending Notifications with the GFAPI](https://docs.gravityforms.com/sending-notifications-with-the-gfapi/ "Sending Notifications with the GFAPI")
      - [Getting Fields with the GFAPI](https://docs.gravityforms.com/getting-fields-with-the-gfapi/ "Getting Fields with the GFAPI")
      - [Validating Field Submissions with the GFAPI](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/ "Validating Field Submissions with the GFAPI")
      - [Managing Notes with the GFAPI](https://docs.gravityforms.com/managing-notes-with-the-gfapi/ "Managing Notes with the GFAPI")
      - [GFAPI Examples for Forms and Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/ "GFAPI Examples for Forms and Entries")
      - [gf\_has\_action](https://docs.gravityforms.com/gf_has_action/ "gf_has_action")
      - [gf\_has\_filters](https://docs.gravityforms.com/gf_has_filters/ "gf_has_filters")
      - [Helper Functions](https://docs.gravityforms.com/helper-functions/ "Helper Functions")
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Submitting Forms with the GFAPI

- [Introduction](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-introduction)
- [Method Overview](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-source-code)
- [Parameters](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-parameters)
- [Returns](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-returns)
- [Usage Examples](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-usage-examples)
- [Save Progress](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-save-progress)
- [Form Submission](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-form-submission)
- [Multiple submissions in one request](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#multiple-submissions-in-one-request)
- [Skip reCAPTCHA validation for REST API submissions](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-skip-recaptcha-validation-for-rest-api-submissions)

## Introduction

The **GFAPI::submit\_form()** method is used to create an entry by sending input values through the complete form submission process.

This includes the following features and processes:

- Saving progress for the save and continue feature
- Validation
- Configured anti-spam checks e.g. honeypot, captcha ( [see note](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-skip-recaptcha-validation-for-rest-api-submissions)) , Akismet etc.
- Saving the entry to the database
- Add-on feeds
- Notifications
- Confirmations
- All the filters and action hooks triggered by a regular form submission

This is exactly equivalent to submitting a Gravity Forms form [embedded in a post or page](https://docs.gravityforms.com/category/getting-started/add-form-to-site/).

## Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **submit\_form** |
| Parameters | [see below](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-parameters) |
| Returns | [see below](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/#h-returns) |

## Source Code

|     |
| --- |
| `public``static``function``submit_form(``$form_id``,``$input_values``,``$field_values``=``array``(),``$target_page``= 0,``$source_page``= 1 ) {}` |

This method is located in /includes/ _api.php_.

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form this submission belongs to. |
| **$input\_values** | [array](https://docs.gravityforms.com/array) | An associative array containing the values to be saved using the field input names as the keys. <br>The input names expected by this function are identical to the input names found in the form markup so if you have any doubts about the name of an input, just check the form preview. |
| **$field\_values** | [array](https://docs.gravityforms.com/array) | Optional. <br>An array of dynamic population parameter keys with their corresponding values used to populate the fields. |
| **$target\_page** | [integer](https://docs.gravityforms.com/integer) | Optional. <br>Default is `0`. <br>Useful for multi-page forms to indicate which page is to be loaded if the current page passes validation. |
| **$source\_page** | [integer](https://docs.gravityforms.com/integer) | Optional. <br>Default is `1`. <br>Useful for multi-page forms to indicate which page of the form was just submitted. |
| **$initiated\_by** | [integer](https://docs.gravityforms.com/integer) | Optional.<br>The process that initiated the submission. Supported integers<br>`1` for `GFFormDisplay::SUBMISSION_INITIATED_BY_WEBFORM`<br>`2` for `GFFormDisplay::SUBMISSION_INITIATED_BY_API`<br>_Defaults to `GFFormDisplay::SUBMISSION_INITIATED_BY_API`_ |

## Returns

An associative [array](https://docs.gravityforms.com/array) containing the result properties or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an unspecified error occurs.

| Key | Type | Description |
| --- | --- | --- |
| **is\_valid** | [bool](https://docs.gravityforms.com/bool) | The form validation result. Always `false` when the form fails honeypot validation and “Do not create an entry” is the selected action. |
| **is\_spam** | [bool](https://docs.gravityforms.com/bool) | Indicates if the entry has been marked as spam, or failed honeypot validation and “Do not create an entry” is the selected action. |
| **form** | [Form Object](https://docs.gravityforms.com/form-object/) | The form that was processed. |
| **validation\_messages** | [array](https://docs.gravityforms.com/array) | Only present when `is_valid` is `false`. <br>An array of validation messages for the fields that failed validation. |
| **page\_number** | [integer](https://docs.gravityforms.com/integer) | For multi-page forms.<br>The page that should be displayed. |
| **source\_page\_number** | [integer](https://docs.gravityforms.com/integer) | For multi-page forms.<br>The page that was submitted. |
| **confirmation\_message** | [string](https://docs.gravityforms.com/string) | Only present when `is_valid` or `is_spam` is `true`. The resume or confirmation message. |
| **confirmation\_type** | [string](https://docs.gravityforms.com/string) | Only present when `is_valid` or `is_spam` is `true`. The type of confirmation being used for the current submission. <br>`message` or `redirect` |
| **confirmation\_redirect** | [string](https://docs.gravityforms.com/string) | Only present when `is_valid` is `true` and the `confirmation_type` is `redirect`.<br>The URL the submission should redirect to. |
| **entry\_id** | [integer](https://docs.gravityforms.com/integer) | Only present when `is_valid` is `true`.<br>The ID of the entry created by the submission. |
| **resume\_token** | [string](https://docs.gravityforms.com/string) | Only present if `$input_values['gform_save']` was `true`.<br>The token that can be used to repopulate the form with the saved values. |

## Usage Examples

### Save Progress

This example shows how you can submit values for some fields and get a resume token.

|     |
| --- |
| `$form_id``= 52;`<br>`$input_values``=``array``();`<br>`$input_values``[``'input_1'``]    =``'Single line text'``;`<br>`$input_values``[``'input_2_3'``]  =``'First name'``;`<br>`$input_values``[``'input_2_6'``]  =``'Last name'``;`<br>`$input_values``[``'input_5'``]    =``'A paragraph of text.'``;`<br>`$input_values``[``'gform_save'``] = true;`<br>`$result``= GFAPI::submit_form(``$form_id``,``$input_values``);`<br>`if``( ! is_wp_error(``$result``) ) {`<br>```$resume_token``= rgar(``$result``,``'resume_token'``);`<br>```$resume_message``= rgar(``$result``,``'confirmation_message'``);`<br>`}` |

### Form Submission

This example shows how you can submit values and handle the form submission result.

|     |
| --- |
| `$form_id``= 52;`<br>`$input_values``=``array``();`<br>`$input_values``[``'input_1'``]    =``'Single line text'``;`<br>`$input_values``[``'input_2_3'``]  =``'First name'``;`<br>`$input_values``[``'input_2_6'``]  =``'Last name'``;`<br>`$input_values``[``'input_5'``]    =``'A paragraph of text.'``;`<br>`$result``= GFAPI::submit_form(``$form_id``,``$input_values``);`<br>`if``( is_wp_error(``$result``) ) {`<br>```$error_message``=``$result``->get_error_message();`<br>```GFCommon::log_debug(``__METHOD__``.``'(): GFAPI Error Message => '``.``$error_message``);`<br>```// Do something with the error message.`<br>```return``;`<br>`}`<br>`if``( ! rgar(``$result``,``'is_valid'``) ) {`<br>```$error_message``=``'Submission is invalid.'``;`<br>```$field_errors``= rgar(``$result``,``'validation_messages'``,``array``() );`<br>```GFCommon::log_debug(``__METHOD__``.``'(): GFAPI Field Errors => '``. print_r(``$field_errors``) );`<br>```// Do something with the message and errors.`<br>```return``;`<br>`}`<br>`if``( rgar(``$result``,``'confirmation_type'``) ===``'redirect'``) {`<br>```$redirect_url``= rgar(``$result``,``'confirmation_redirect'``);`<br>```GFCommon::log_debug(``__METHOD__``.``'(): GFAPI Redirect URL => '``.``$redirect_url``);`<br>```if``( wp_redirect(``$redirect_url``) ) {`<br>```exit``;`<br>```}`<br>`}``else``{`<br>```$confirmation_message``= rgar(``$result``,``'confirmation_message'``);`<br>```GFCommon::log_debug(``__METHOD__``.``'(): GFAPI Confirmation Message => '``.``$error_message``);`<br>```// Do something with the confirmation message.`<br>`}` |

### Multiple submissions in one request

`GFAPI::submit_form()` isn’t designed to process multiple submissions during a single request, such as in for/foreach loops. It is possible but requires performing some cleanup after each call to ensure the next submission is processed correctly.

|     |
| --- |
| `$form_id``= 52;`<br>`foreach``(``$submissions``as``$input_values``) {`<br>```$result``= GFAPI::submit_form(``$form_id``,``$input_values``);`<br>```$_POST``=``array``();`<br>```GFFormsModel::flush_current_lead();`<br>```GFFormDisplay::``$submission``=``array``();`<br>`}` |

### Skip reCAPTCHA validation for REST API submissions

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `add_filter(``'gform_field_validation'``,``function``(``$result``,``$value``,``$form``,``$field``) {`<br>```if``(``$field``->type ===``'captcha'``&& defined(``'REST_REQUEST'``) && REST_REQUEST ) {`<br>```$result``[``'is_valid'``] = true;`<br>```$result``[``'message'``]  =``''``;`<br>```}`<br>```return``$result``;`<br>`}, 10, 4 );` |

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)