---
url: "https://docs.gravityforms.com/gform_after_submission/"
title: "gform_after_submission - Gravity Forms Documentation"
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

# gform\_after\_submission

- [Description](https://docs.gravityforms.com/gform_after_submission/#h-description)
- [Usage](https://docs.gravityforms.com/gform_after_submission/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_after_submission/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_after_submission/#h-examples)
- [1\. Update post after its creation](https://docs.gravityforms.com/gform_after_submission/#h-1-update-post-after-its-creation)
- [2\. Perform a custom action after creating posts with the Advanced Post Creation add-on](https://docs.gravityforms.com/gform_after_submission/#h-2-perform-a-custom-action-after-creating-posts-with-the-advanced-post-creation-add-on)
- [3\. Send entry data to third-party](https://docs.gravityforms.com/gform_after_submission/#h-3-send-entry-data-to-third-party)
- [4\. Access the entry by looping through the form fields](https://docs.gravityforms.com/gform_after_submission/#h-4-access-the-entry-by-looping-through-the-form-fields)
- [5\. Create a ticket in WSDesk](https://docs.gravityforms.com/gform_after_submission/#h-5-create-a-ticket-in-wsdesk)
- [6\. Submit entries to Tripleseat](https://docs.gravityforms.com/gform_after_submission/#h-6-submit-entries-to-tripleseat)
- [7\. Submit entries to SharpSpring](https://docs.gravityforms.com/gform_after_submission/#h-7-submit-entries-to-sharpspring)
- [8\. Create an Events Calendar plugin event](https://docs.gravityforms.com/gform_after_submission/#h-8-create-an-events-calendar-plugin-event)
- [9\. Check entry spam status](https://docs.gravityforms.com/gform_after_submission/#h-9-check-entry-spam-status)
- [Placement](https://docs.gravityforms.com/gform_after_submission/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_after_submission/#h-source-code)

## Description

The gform\_after\_submission action hook is executed at the end of the submission process (after form validation, notification, and entry creation). Use this hook to perform actions after the entry has been created (i.e. feed data to third party applications).

The [Entry Object](https://docs.gravityforms.com/entry-object) is available to this hook and contains all submitted values.

This hook also runs for entries which are marked as spam.

## Usage

Applies to all forms.

|     |
| --- |
| `add_action(``'gform_after_submission'``,``'after_submission'``, 10, 2 );` |

Applies to a specific form. In this case, form id 5.

|     |
| --- |
| `add_action(``'gform_after_submission_5'``,``'after_submission'``, 10, 2 );` |

## Parameters

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry that was just created.
- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The current form.

## Examples

### 1\. Update post after its creation

This example uses the gform\_after\_submission hook to change the post content, adding values from submitted fields, including an image field, to the post created as a result of the form submission. This is only applicable to posts created by the built-in legacy post creation feature.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_action(``'gform_after_submission'``,``'set_post_content'``, 10, 2 );`<br>`function``set_post_content(``$entry``,``$form``) {`<br>```// Get the post`<br>```$post``= get_post(``$entry``[``'post_id'``] );`<br>```// Log the original post`<br>```GFCommon::log_debug(``'gform_after_submission: Original post => '``. print_r(``$post``, true ) );`<br>```// Replace post content with this instead`<br>```$post``->post_content =``'Blender Version:'``. rgar(``$entry``,``'7'``) .``"<br/> <img src='"``. rgar(``$entry``, '8``' ) . "'``> <br/> <br/> " . rgar(``$entry``,``'13'``) .``" <br/> <img src='"``. rgar(``$entry``, '5``' ) . "'``>";`<br>```// Update post`<br>```wp_update_post(``$post``);`<br>`}` |

### 2\. Perform a custom action after creating posts with the Advanced Post Creation add-on

This example shows how to get the post IDs when using the Advanced Post Creation Add-On. Note: this might not work when the APC feeds are processed in the background. A better hook to use is [gform\_advancedpostcreation\_post\_after\_creation](https://docs.gravityforms.com/gform_advancedpostcreation_post_after_creation/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `add_action(``'gform_after_submission'``,``'custom_action_after_apc'``, 10, 2 );`<br>`function``custom_action_after_apc(``$entry``,``$form``) {`<br>```//if the Advanced Post Creation add-on is used, more than one post may be created for a form submission`<br>```//the post ids are stored as an array in the entry meta`<br>```$created_posts``= gform_get_meta(``$entry``[``'id'``],``'gravityformsadvancedpostcreation_post_id'``);`<br>```foreach``(``$created_posts``as``$post``)`<br>```{`<br>```$post_id``=``$post``[``'post_id'``];`<br>```// Do your stuff here.`<br>```}`<br>`}` |

### 3\. Send entry data to third-party

This example demonstrates a simple approach to posting submitted entry data to a third party application.

Note: The [Webhooks Add-On](https://www.gravityforms.com/add-ons/webhooks/) can be used to perform requests like this with little or no coding required. See the [Triggering Webhooks On Form Submissions](https://docs.gravityforms.com/triggering-webhooks-form-submissions/) article.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14 | `add_action(``'gform_after_submission'``,``'post_to_third_party'``, 10, 2 );`<br>`function``post_to_third_party(``$entry``,``$form``) {`<br>```$endpoint_url``=``'https://thirdparty.com'``;`<br>```$body``=``array``(`<br>```'first_name'``=> rgar(``$entry``,``'1.3'``),`<br>```'last_name'``=> rgar(``$entry``,``'1.6'``),`<br>```'message'``=> rgar(``$entry``,``'3'``),`<br>```);`<br>```GFCommon::log_debug(``'gform_after_submission: body => '``. print_r(``$body``, true ) );`<br>```$response``= wp_remote_post(``$endpoint_url``,``array``(``'body'``=>``$body``) );`<br>```GFCommon::log_debug(``'gform_after_submission: response => '``. print_r(``$response``, true ) );`<br>`}` |

### 4\. Access the entry by looping through the form fields

This example demonstrates a simple approach to accessing the field values in the entry when you don’t know the field ids.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_action(``'gform_after_submission'``,``'access_entry_via_field'``, 10, 2 );`<br>`function``access_entry_via_field(``$entry``,``$form``) {`<br>```foreach``(``$form``[``'fields'``]``as``$field``) {`<br>```$inputs``=``$field``->get_entry_inputs();`<br>```if``(``is_array``(``$inputs``) ) {`<br>```foreach``(``$inputs``as``$input``) {`<br>```$value``= rgar(``$entry``, (string)``$input``[``'id'``] );`<br>```// do something with the value`<br>```}`<br>```}``else``{`<br>```$value``= rgar(``$entry``, (string)``$field``->id );`<br>```// do something with the value`<br>```}`<br>```}`<br>`}` |

### 5\. Create a ticket in WSDesk

See the [How to use WSDesk create ticket API with third-party forms and plugins?](https://elextensions.com/knowledge-base/use-wsdesk-create-ticket-api-third-party-forms-plugins/) article for an example showing how to use the gform\_after\_submission hook to create WSDesk tickets.

See the [Creating Tickets in WSDesk using the Webhooks Add-On](https://docs.gravityforms.com/create-wsdesk-tickets-using-webhooks-addon/) article if you would prefer not to use custom code.

### 6\. Submit entries to Tripleseat

See the [Using the API Lead Form with Gravity Forms in WordPress](https://tripleseat.zendesk.com/hc/en-us/articles/219006788-Using-the-API-Lead-Form-with-Gravity-Forms-in-Wordpress) article by Tripleseat for an example showing how to use the gform\_after\_submission hook.

### 7\. Submit entries to SharpSpring

See the [Integrating Gravity Forms](https://help.sharpspring.com/hc/en-us/articles/115002343768-Integrating-Gravity-Forms) article by SharpSpring for an example showing how to use the gform\_after\_submission hook, they also have a tool for generating the code snippet for your form.

### 8\. Create an Events Calendar plugin event

This example demonstrates how the gform\_after\_submission hook and the [tribe\_create\_event](https://theeventscalendar.com/function/tribe_create_event/) function can be used to create an event in the [Events Calendar](https://theeventscalendar.com/product/wordpress-events-calendar/) plugin.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27 | `add_action(``'gform_after_submission'``,``function``(``$entry``) {`<br>```if``( ! function_exists(``'tribe_create_event'``) ) {`<br>```return``;`<br>```}`<br>```$start_date``= rgar(``$entry``,``'4'``);`<br>```$start_time``= rgar(``$entry``,``'5'``);`<br>```$end_date``= rgar(``$entry``,``'6'``);`<br>```$end_time``= rgar(``$entry``,``'7'``);`<br>```$args``=``array``(`<br>```'post_title'``=> rgar(``$entry``,``'1'``),`<br>```'post_content'``=> rgar(``$entry``,``'2'``),`<br>```'EventAllDay'``=> (bool) rgar(``$entry``,``'3.1'``),`<br>```'EventHideFromUpcoming'``=> (bool) rgar(``$entry``,``'3.2'``),`<br>```'EventShowInCalendar'``=> (bool) rgar(``$entry``,``'3.3'``),`<br>```'feature_event'``=> (bool) rgar(``$entry``,``'3.4'``),`<br>```'EventStartDate'``=>``$start_date``,`<br>```'EventStartTime'``=>``$start_time``? Tribe__Date_Utils::reformat(``$start_time``,``'H:i:s'``) : null,`<br>```'EventEndDate'``=>``$end_date``,`<br>```'EventEndTime'``=>``$end_time``? Tribe__Date_Utils::reformat(``$end_time``,``'H:i:s'``) : null,`<br>```);`<br>```GFCommon::log_debug(``'gform_after_submission: tribe_create_event args => '``. print_r(``$args``, 1 ) );`<br>```$event_id``= tribe_create_event(``$args``);`<br>```GFCommon::log_debug(``'gform_after_submission: tribe_create_event result => '``. var_export(``$event_id``, 1 ) );`<br>`} );` |

### 9\. Check entry spam status

This example shows how you can check if the entry has been marked as spam and prevent the rest of your function from running.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `add_action(``'gform_after_submission'``,``'action_gform_after_submission_spam_check'``, 10, 2 );`<br>`function``action_gform_after_submission_spam_check(``$entry``,``$form``) {`<br>```if``( rgar(``$entry``,``'status'``) ===``'spam'``) {`<br>```return``;`<br>```}`<br>```// The code that you want to run for submissions which aren't spam.`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action hook is located in GFFormDisplay::process\_form() in _form\_display.php_.

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 31, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_after_submission/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)