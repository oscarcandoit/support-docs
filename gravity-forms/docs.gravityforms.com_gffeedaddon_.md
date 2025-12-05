---
url: "https://docs.gravityforms.com/gffeedaddon/"
title: "GFFeedAddOn - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)        - [GFAddOn](https://docs.gravityforms.com/gfaddon/ "GFAddOn")
        - [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/ "GFFeedAddOn")
        - [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon/ "GFPaymentAddOn")
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# GFFeedAddOn

- [Introduction](https://docs.gravityforms.com/gffeedaddon/#h-introduction)
- [Creating Feed Settings](https://docs.gravityforms.com/gffeedaddon/#h-creating-feed-settings)
- [Feed Settings Fields Example](https://docs.gravityforms.com/gffeedaddon/#h-feed-settings-fields-example)
- [Dynamic Feed Mapping](https://docs.gravityforms.com/gffeedaddon/#h-dynamic-feed-mapping)
- [Adding Columns to Feed List](https://docs.gravityforms.com/gffeedaddon/#h-adding-columns-to-feed-list)
- [Adding Columns to Feed List Example](https://docs.gravityforms.com/gffeedaddon/#h-adding-columns-to-feed-list-example)
- [Processing Feeds](https://docs.gravityforms.com/gffeedaddon/#h-processing-feeds)
- [save\_entry\_feed\_status()](https://docs.gravityforms.com/gffeedaddon/#h-save-entry-feed-status)
- [Parameters](https://docs.gravityforms.com/gffeedaddon/#h-parameters)
- [post\_process\_feed()](https://docs.gravityforms.com/gffeedaddon/#h-post-process-feed)
- [Parameters](https://docs.gravityforms.com/gffeedaddon/#h-parameters-0)
- [fulfill\_entry()](https://docs.gravityforms.com/gffeedaddon/#h-fulfill-entry)
- [Parameters](https://docs.gravityforms.com/gffeedaddon/#h-parameters-1)
- [Implementing a Feed Condition Setting](https://docs.gravityforms.com/gffeedaddon/#h-implementing-a-feed-condition-setting)
- [Feed Condition Field Examples](https://docs.gravityforms.com/gffeedaddon/#h-feed-condition-field-examples)
- [Asynchronous Feed Processing](https://docs.gravityforms.com/gffeedaddon/#h-asynchronous-feed-processing)
- [GFFeedAddOn $\_async\_feed\_processing Property](https://docs.gravityforms.com/gffeedaddon/#h-gffeedaddon-async-feed-processing-property)
- [gform\_is\_feed\_asynchronous Filter](https://docs.gravityforms.com/gffeedaddon/#h-gform-is-feed-asynchronous-filter)
- [Further Reading](https://docs.gravityforms.com/gffeedaddon/#h-further-reading)
- [Sample Feed Add-On](https://docs.gravityforms.com/gffeedaddon/#h-sample-feed-add-on)

## Introduction

The GFFeedAddOn class provides basic functionality for developers when creating new feed-based add-ons for Gravity Forms. It includes all the features of the GFAddOn class with one exception; the Form Settings are replaced by the Feed Settings UI.

Before reading any further please review the documentation for creating a simple add-on using the [GFAddOn](https://docs.gravityforms.com/gfaddon/) class.

- [Settings API](https://docs.gravityforms.com/settings-api)
- [Creating Plugin Settings](https://docs.gravityforms.com/gfaddon/#creating-plugin-settings)
- [Including Scripts And Styles When Using The Add-On Framework](https://docs.gravityforms.com/include-scripts-styles-with-addon-framework/)
- [Including And Using Entry Meta With The Add-On Framework](https://docs.gravityforms.com/using-entry-meta-with-add-on-framework/)
- [Object Locking](https://docs.gravityforms.com/gfaddon/#object-locking-api)
- [Creating a Results Page](https://docs.gravityforms.com/gfaddon/#results-page)
- [Uninstalling](https://docs.gravityforms.com/gfaddon/#uninstalling)

## Creating Feed Settings

The feed settings UI is generated by overriding the feed\_settings\_fields() function and returning an array with the configuration for each of the fields. The configuration array follows the same structure as the form settings configuration. See the [Settings API](https://docs.gravityforms.com/settings-api) for further details on the structure of the array.

### Feed Settings Fields Example

|     |
| --- |
| `public``function``feed_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=>``'Simple Form Settings'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'label'``=>``'My checkbox'``,`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'enabled'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'Enabled'``,`<br>```'name'``=>``'enabled'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'label'``=>``'My checkboxes'``,`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'checkboxgroup'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'First Choice'``,`<br>```'name'``=>``'first'`<br>```),`<br>```array``(`<br>```'label'``=>``'Second Choice'``,`<br>```'name'``=>``'second'`<br>```),`<br>```array``(`<br>```'label'``=>``'Third Choice'``,`<br>```'name'``=>``'third'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'label'``=>``'My Radio Buttons'``,`<br>```'type'``=>``'radio'``,`<br>```'name'``=>``'myradiogroup'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'First Choice'`<br>```),`<br>```array``(`<br>```'label'``=>``'Second Choice'`<br>```),`<br>```array``(`<br>```'label'``=>``'Third Choice'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'label'``=>``'My Horizontal Radio Buttons'``,`<br>```'type'``=>``'radio'``,`<br>```'horizontal'``=> true,`<br>```'name'``=>``'myradiogrouph'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'First Choice'`<br>```),`<br>```array``(`<br>```'label'``=>``'Second Choice'`<br>```),`<br>```array``(`<br>```'label'``=>``'Third Choice'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'label'``=>``'My Dropdown'``,`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'mydropdown'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'First Choice'``,`<br>```'value'``=>``'first'`<br>```),`<br>```array``(`<br>```'label'``=>``'Second Choice'``,`<br>```'value'``=>``'second'`<br>```),`<br>```array``(`<br>```'label'``=>``'Third Choice'``,`<br>```'value'``=>``'third'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'label'``=>``'My Text Box'``,`<br>```'type'``=>``'text'``,`<br>```'name'``=>``'mytext'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'class'``=>``'medium'``,`<br>```'feedback_callback'``=>``array``(``$this``,``'is_valid_setting'``)`<br>```),`<br>```array``(`<br>```'label'``=>``'My Text Area'``,`<br>```'type'``=>``'textarea'``,`<br>```'name'``=>``'mytextarea'``,`<br>```'tooltip'``=>``'This is the tooltip'``,`<br>```'class'``=>``'medium merge-tag-support mt-position-right'`<br>```),`<br>```array``(`<br>```'label'``=>``'My Hidden Field'``,`<br>```'type'``=>``'hidden'``,`<br>```'name'``=>``'myhidden'`<br>```),`<br>```array``(`<br>```'label'``=>``'My Custom Field'``,`<br>```'type'``=>``'my_custom_field_type'``,`<br>```'name'``=>``'my_custom_field'`<br>```),`<br>```array``(`<br>```'type'``=>``'feed_condition'``,`<br>```'name'``=>``'mycondition'``,`<br>```'label'``=> __(``'Opt-In Condition'``,``'simplefeedaddon'``),`<br>```'checkbox_label'``=> __(``'Enable Condition'``,``'simplefeedaddon'``),`<br>```'instructions'``=> __(``'Process this example feed if'``,``'simplefeedaddon'``)`<br>```),`<br>```)`<br>```),`<br>```array``(`<br>```'title'``=> esc_html__(``'This is the title for Section 1'``,``'sometextdomain'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'metaData'``,`<br>```'label'``=> esc_html__(``'Metadata'``,``'sometextdomain'``),`<br>```'type'``=>``'dynamic_field_map'``,`<br>```'limit'``=> 20,`<br>```'exclude_field_types'``=>``'creditcard'``,`<br>```'tooltip'``=>``'<h6>'``. esc_html__(``'Metadata'``,``'sometextdomain'``) .``'</h6>'``. esc_html__(``'You may send custom meta information to [...]. A maximum of 20 custom keys may be sent. The key name must be 40 characters or less, and the mapped data will be truncated to 500 characters per requirements by [...]. '``,``'sometextdomain'``),`<br>```'validation_callback'``=>``array``(``$this``,``'validate_custom_meta'``),`<br>```),`<br>```),`<br>```),`<br>```);`<br>`}` |

The code above will render a Form Settings page for the Simple Add-On similar to this:

[![Form Settings Fields Example](https://docs.gravityforms.com/wp-content/uploads/2014/05/GFFeed_Form_Settings_Fields.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/GFFeed_Form_Settings_Fields.png)

### Dynamic Feed Mapping

Dynamic feed mapping can be used to create fields which automatically map to values in the form. For example, if you need to create a feed that uses information such as a first name and last name, field mapping would be used to map the form fields to those values.

A dynamically mapped field can be implemented just like many of the other feed settings fields and setting the setting field type to **dynamic\_field\_map**. Adding a feed section containing dynamically mapped fields would look something like the following:

|     |
| --- |
| `array``(`<br>```'title'``=> esc_html__(``'This is the title for Section 1'``,``'sometextdomain'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'metaData'``,`<br>```'label'``=> esc_html__(``'Metadata'``,``'sometextdomain'``),`<br>```'type'``=>``'dynamic_field_map'``,`<br>```'limit'``=> 20,`<br>```'exclude_field_types'``=>``'creditcard'``,`<br>```'tooltip'``=>``'<h6>'``. esc_html__(``'Metadata'``,``'sometextdomain'``) .``'</h6>'``. esc_html__(``'You may send custom meta information to [...]. A maximum of 20 custom keys may be sent. The key name must be 40 characters or less, and the mapped data will be truncated to 500 characters per requirements by [...]. '``,``'sometextdomain'``),`<br>```'validation_callback'``=>``array``(``$this``,``'validate_custom_meta'``),`<br>```),`<br>```),`<br>`)` |

More information on the _dynamic\_field\_map_ field type can be found on the [_dynamic\_field\_map_ Field documentation](https://docs.gravityforms.com/dynamic_field_map-field/).

## Adding Columns to Feed List

To add columns to the list of feeds, override the feed\_list\_columns() function and return an array of column keys with their corresponding titles. The values will be rendered to the list automatically, but if you need to customize the value just before it is rendered to the list, declare a function with the name get\_column\_value\_\[column key\] and pass the $feed object as a parameter to the function. The feed object is an associative array with the keys as defined in feed\_settings\_fields() with the corresponding values for the current row.

### Adding Columns to Feed List Example

This example adds two columns to the feed list. The columns are titled “Name” and “My Textbox”. The get\_column\_value\_mytext function returns the value for the “mytext” field as bold text.

|     |
| --- |
| `protected``function``feed_list_columns() {`<br>```return``array``(`<br>```'feedName'``=> __(``'Name'``,``'simplefeedaddon'``),`<br>```'mytext'``=> __(``'My Textbox'``,``'simplefeedaddon'``)`<br>```);`<br>`}`<br>`// customize the value of mytext before it is rendered to the list`<br>`public``function``get_column_value_mytext(``$feed``){`<br>```return``'<b>'``. rgars(``$feed``,``'meta/mytext'``) .``'</b>'``;`<br>`}` |

The code above will render a Feed List page similar to the following:

[![Adding Columns to Feed LIst Example](https://docs.gravityforms.com/wp-content/uploads/2014/05/GFFeed_Adding_Columns_to_Feed_List.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/GFFeed_Adding_Columns_to_Feed_List.png)

## Processing Feeds

Override the process\_feed() method to add code to handle feed processing, such as passing the form entry values to a third-party service.

|     |
| --- |
| `/**`<br>```* Processes feed action.`<br>```*`<br>```* @param array $feed  The Feed Object currently being processed.`<br>```* @param array $entry The Entry Object currently being processed.`<br>```* @param array $form  The Form Object currently being processed.`<br>```*`<br>```* @return void|null|bool|WP_Error|array The returned value determines if the feed status is saved to the "feed_{$feed_id}_status" entry meta.`<br>```*                                       - void or null when the feed status should not be saved.`<br>```*                                       - false or a WP_Error when a failed status should be saved.`<br>```*                                       - true or the entry array when a success status should be saved.`<br>```*/`<br>`public``function``process_feed(``$feed``,``$entry``,``$form``) {}` |

We recommend using get\_field\_value() to retrieve the entry value for a mapped field, e.g.

|     |
| --- |
| `$email``=``$this``->get_field_value(``$form``,``$entry``,``$feed``[``'meta'``][``'listFields_email'``] );` |

### save\_entry\_feed\_status()

|     |
| --- |
| `public``function``save_entry_feed_status(``$result``,``$entry_id``,``$feed_id``,``$form_id``) {}` |

`save_entry_feed_status` was added in Gravity Forms version 2.9.4, It is called by `GFFeedAddOn::maybe_process_feed()` and `GF_Feed_Processor::task()` after the feed has been processed, and is passed the value returned by `process_feed()`.

#### Parameters

- `$result` null\| [bool](https://docs.gravityforms.com/bool/) \| [array](https://docs.gravityforms.com/array/) \|WP\_Error\|Exception

The value returned by `process_feed()`.
- `$entry_id` [int](https://docs.gravityforms.com/int/)

The ID of the entry the feed was processed for.
- `$feed_id` [int](https://docs.gravityforms.com/int/)

The ID of the feed that was processed.
- `$form_id` [int](https://docs.gravityforms.com/int/)

The ID of the form the entry and feed belong to.

### post\_process\_feed()

|     |
| --- |
| `public``function``post_process_feed(``$feed``,``$entry``,``$form``) {}` |

`post_process_feed` was added in Gravity Forms version 2.9.4. It is called by `GFFeedAddOn::maybe_process_feed()` and `GF_Feed_Processor::task()` after the feed has been processed. It contains the [gform\_post\_process\_feed](https://docs.gravityforms.com/gform_post_process_feed/) hooks.

#### Parameters

- `$feed` [array](https://docs.gravityforms.com/array/)

The feed that was processed.
- `$entry` [array](https://docs.gravityforms.com/array/)

The entry the feed was processed for.
- `$form` [array](https://docs.gravityforms.com/array/)

The form the entry and feed belong to.

### fulfill\_entry()

|     |
| --- |
| `public``function``fulfill_entry(``$entry_id``,``$form_id``) {}` |

`fulfill_entry` was added in Gravity Forms version 2.9.4. It is called by `GFFeedAddOn::maybe_process_feed()` and `GF_Feed_Processor::task()` after the feed has been processed. It sets the `{slug}_is_fulfilled` entry meta to `true`.

#### Parameters

- `$entry_id` [int](https://docs.gravityforms.com/int/)

The entry ID.
- `$form_id` [int](https://docs.gravityforms.com/int/)

The form ID.

## Implementing a Feed Condition Setting

A feed condition setting is a feed setting that automatically adds an optional conditional logic setting to the feed. The field is configured just like the other fields (see the [Settings API](https://docs.gravityforms.com/settings-api)) with the the following properties:

- **type** [string](https://docs.gravityforms.com/string/)

‘feed condition’
- **name** [string](https://docs.gravityforms.com/string/)

The name for the setting.
- **label** [string](https://docs.gravityforms.com/string/)

The label for the feed condition setting.
- **checkbox\_label** [string](https://docs.gravityforms.com/string/)

The label that appears to the right of the checkbox used to enable the condition. If this is not set, the default translated string “Enable Condition” is used.
- **instructions** [string](https://docs.gravityforms.com/string/)

The instruction text appears above the conditional logic drop downs, is followed by the All/Any drop down selection, and the translated text “of the following match”. If you do not specify instruction text, the text “Process this feed if” is used.

### Feed Condition Field Examples

This is a simple example that uses the basic settings to create the feed condition field.

|     |
| --- |
| `array``(`<br>```'type'``=>``'feed_condition'``,`<br>```'name'``=>``'sample_condition'``,`<br>```'label'``=>``'Feed Condition'``,`<br>`)` |

The code above will render the feed condition field as follows:

[![Feed Condition Simple Example](https://docs.gravityforms.com/wp-content/uploads/2014/05/Fields_Feed_Condition_Simple_Example.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/Fields_Feed_Condition_Simple_Example.png)

This example includes setting the checkbox\_label and instructions.

|     |
| --- |
| `array``(`<br>```'type'``=>``'feed_condition'``,`<br>```'name'``=>``'mycondition'``,`<br>```'label'``=> __(``'Opt-In Condition'``,``'simplefeedaddon'``),`<br>```'checkbox_label'``=> __(``'Enable Condition'``,``'simplefeedaddon'``),`<br>```'instructions'``=> __(``'Process this example feed if'``,``'simplefeedaddon'``)`<br>`)` |

The code above will render the feed condition field as follows:

[![Settings API Sections Example](https://docs.gravityforms.com/wp-content/uploads/2014/05/Fields_Feed_Condition_Example.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/Fields_Feed_Condition_Example.png)

## Asynchronous Feed Processing

As of Gravity Forms version 2.2, feeds can be loaded asynchronously. This means that instead of processing all of the feeds at once, the feeds will be loaded individually.

### GFFeedAddOn $\_async\_feed\_processing Property

To load a feed asynchronously, set the [$\_async\_feed\_processing](https://docs.gravityforms.com/_async_feed_processing/) property within the _GFFeedAddOn_ class to _true_.

**Example**:

|     |
| --- |
| `class``My_Feed_AddOn``extends``GFFeedAddOn {`<br>```public``$_async_feed_processing``= true;`<br>`}` |

### gform\_is\_feed\_asynchronous Filter

**Example**:

|     |
| --- |
| `add_filter(``'gform_is_feed_asynchronous'``.``'__return_true'``);` |

See [gform\_is\_feed\_asynchronous](https://docs.gravityforms.com/gform_is_feed_asynchronous/)

## Further Reading

The following articles may also be useful:

- [Sending Notifications on Custom Events when using the Add-On Framework](https://docs.gravityforms.com/notifications-custom-events-addon-framework/)
- [Adding a Note to the Entry when using the Add-On Framework](https://docs.gravityforms.com/adding-note-when-using-addon-framework/)
- [Accessing Mapped Field Values During Feed Processing](https://docs.gravityforms.com/mapped-field-values-during-feed-processing/)

## Sample Feed Add-On

A sample feed add-on is available which demonstrates the basic functions of GFFeedAddOn:

- Feed settings including feed conditions
- Plugin page
- Plugin Settings
- Scripts and Styles

[https://github.com/rocketgenius/simplefeedaddon](https://github.com/rocketgenius/simplefeedaddon)

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 19, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gffeedaddon/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)