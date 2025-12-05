---
url: "https://docs.gravityforms.com/dynamic_field_map-field/"
title: "Dynamic Field Map Field Type - Gravity Forms Documentation"
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
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)        - [Additional Properties](https://docs.gravityforms.com/additional-properties/ "Additional Properties")
        - [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/ "Basics Of The Settings API")
        - [Create a Custom Field Type](https://docs.gravityforms.com/custom-field-types/ "Create a Custom Field Type")
        - [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/ "Creating a Feed Settings Page")
        - [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/ "Creating a Plugin Settings Page")
        - [Dependency](https://docs.gravityforms.com/dependency/ "Dependency")
        - [Field Properties](https://docs.gravityforms.com/field-properties/ "Field Properties")
        - [List of Settings API Field Types](https://docs.gravityforms.com/field-types/ "List of Settings API Field Types")
        - [List of Settings API Helper Functions](https://docs.gravityforms.com/settings-api-helpers/ "List of Settings API Helper Functions")
        - [Post Select Field Type](https://docs.gravityforms.com/post-select-field-type/ "Post Select Field Type")
        - [Section Properties](https://docs.gravityforms.com/section-properties/ "Section Properties")
        - [User Select Field Type](https://docs.gravityforms.com/user-select-field-type/ "User Select Field Type")
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Dynamic Field Map Field Type

- [Introduction](https://docs.gravityforms.com/dynamic_field_map-field/#h-introduction)
- [Parameters](https://docs.gravityforms.com/dynamic_field_map-field/#h-parameters)
- [Field\_Map](https://docs.gravityforms.com/dynamic_field_map-field/#h-field-map)
- [Parameters](https://docs.gravityforms.com/dynamic_field_map-field/#h-parameters-1)
- [Choices](https://docs.gravityforms.com/dynamic_field_map-field/#h-choices)
- [Parameters](https://docs.gravityforms.com/dynamic_field_map-field/#h-parameters-2)
- [Example](https://docs.gravityforms.com/dynamic_field_map-field/#h-example)
- [Validation](https://docs.gravityforms.com/dynamic_field_map-field/#h-validation)
- [Helpers](https://docs.gravityforms.com/dynamic_field_map-field/#h-helpers)
- [get\_dynamic\_field\_map\_fields()](https://docs.gravityforms.com/dynamic_field_map-field/#h-get-dynamic-field-map-fields)
- [Uses](https://docs.gravityforms.com/dynamic_field_map-field/#h-uses)

## Introduction

**Important:** The **dynamic\_field\_map** type field is deprecated. Please use the `generic_map` field type instead.

The **dynamic\_field\_map** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), allows the user to map their form fields to custom keys (fields), e.g. fields you will be sending to a third-party service such as a CRM.

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **name** | [string](https://docs.gravityforms.com/string) | Required. Name of the field. Use it to retrieve saved data. |
| **label** | [string](https://docs.gravityforms.com/string) | Required. Field label. Will be displayed in the UI |
| **type** | [string](https://docs.gravityforms.com/string) | Required. Field type. Must be set to dynamic\_field\_map for the Dynamic Field Map field. |
| **tooltip** | [string](https://docs.gravityforms.com/string) | Optional. Defaults to blank (no tooltip). Displays a question mark icon and a tooltip next to the field label. |
| **field\_types** | [array](https://docs.gravityforms.com/array) | Optional. Defaults to empty (no filtering). Array of form field types to be available as options when mapping to this field. Only form fields of the specified types will be included in the list of fields.<br>Example: array( ‘text’, ‘name’ ) |
| **exclude\_field\_types** | [array](https://docs.gravityforms.com/array) | Optional. Defaults to empty (no filtering). Array of form field types to be excluded when mapping to this field.<br>Example: array( ‘creditcard’ ) |
| **field\_map** | [array](https://docs.gravityforms.com/array) | Optional. Defaults to empty.<br>By default, the Dynamic Field Map allows users to enter a custom key and map that key to a form field (using the associated form field drop down). See screenshot below:<br>![](https://docs.gravityforms.com/wp-content/uploads/2021/12/dynamic-field-map-1.png)<br>The field\_map property allows the Key field to be presented as a drop down list, where users can select from a set of predefined choices. See screenshot below:<br>![](https://docs.gravityforms.com/wp-content/uploads/2021/12/dynamic-field-map-2.png) |

### Field\_Map

Each item in the **field\_map** array has the following properties:

| Prop | Type | Description |
| --- | --- | --- |
| **label** | [string](https://docs.gravityforms.com/string) | Required. Choice label to be displayed in the key drop down. |
| **value** | [string](https://docs.gravityforms.com/string) | Optional. Defaults to the Label value. Value that will be saved. |

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **choices** | [array](https://docs.gravityforms.com/array) | Optional. Defaults to empty.<br>Creates an option group in the drop down. The label property becomes the Option Group label and the choices defined here become the options under the new group.<br>![](https://docs.gravityforms.com/wp-content/uploads/2021/12/dynamic-field-map-choices.png) |

### Choices

Each item in the **choices** array has the following properties:

| Prop | Type | Description |
| --- | --- | --- |
| **label** | [string](https://docs.gravityforms.com/string) | Required. Choice label that is displayed in the drop down. |
| **value** | [string](https://docs.gravityforms.com/string) | Optional. Defaults to the Label text. Value that is saved. |

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **limit** | [int](https://docs.gravityforms.com/int) | Optional. Defaults to no limit. Defines the number of fields that can be mapped by the user. |
| **enable\_custom\_key** | [bool](https://docs.gravityforms.com/bool) | Optional. Defaults to false. Possible values are true or false. When set to true, allows users to enter a custom value in addition to the options in the drop down field. See screenshot below:![](https://docs.gravityforms.com/wp-content/uploads/2021/12/dynamic-field-map-custom-key.png)<br>Selecting “Add Custom Key” will transform the field into an open text field. See screenshot below:![](https://docs.gravityforms.com/wp-content/uploads/2021/12/dynamic-field-map-custom-key-2.png) |
| **validation\_callback** | (function) | Optional. Defaults to nothing (no callback). Calls a function during validation allow for custom validation logic. The example in the existing documentation page is good. |
| **allow\_duplicate** | [bool](https://docs.gravityforms.com/bool) | Optional. Defaults to false. Controls whether or not the same option in the key field can be mapped multiple times.<br>Note: _This only prevents options from being selected multiple times in the drop down. If custom keys are enabled, users won’t be prevented from typing the same custom option multiple times._ |

## Example

The following example shows how you can allow the user to define a number of custom keys and map them to their form fields, which in this case is limited to twenty. We are also excluding the creditcard field from the drop downs which contain the form fields as choices.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14 | `array``(`<br>```'title'``=> esc_html__(``'This is the title for Section 1'``,``'sometextdomain'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'metaData'``,`<br>```'label'``=> esc_html__(``'Metadata'``,``'sometextdomain'``),`<br>```'type'``=>``'dynamic_field_map'``,`<br>```'limit'``=> 20,`<br>```'exclude_field_types'``=>``'creditcard'``,`<br>```'tooltip'``=>``'<h6>'``. esc_html__(``'Metadata'``,``'sometextdomain'``) .``'</h6>'``. esc_html__(``'You may send custom meta information to [...]. A maximum of 20 custom keys may be sent. The key name must be 40 characters or less, and the mapped data will be truncated to 500 characters per requirements by [...]. '``,``'sometextdomain'``),`<br>```'validation_callback'``=>``array``(``$this``,``'validate_custom_meta'``),`<br>```),`<br>```),`<br>`),` |

The above code would render a field like the following:

[![dynamic_field_map-field](https://docs.gravityforms.com/wp-content/uploads/2016/02/dynamic_field_map-field.png)](https://docs.gravityforms.com/wp-content/uploads/2016/02/dynamic_field_map-field.png)

## Validation

In the above example a validation callback is also specified to ensure that the limit is not exceeded and that the custom keys don’t exceed the character limit defined by the third-party service.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30 | `public``function``validate_custom_meta(``$field``) {`<br>```//Number of keys is limited to 20 - interface should control this, validating just in case`<br>```//key names can only be max of 40 characters`<br>``<br>```$settings``=``$this``->get_posted_settings();`<br>```$metaData``=``$settings``[``'metaData'``];`<br>``<br>```if``(``empty``(``$metaData``) ) {`<br>```return``;`<br>```}`<br>``<br>```//check the number of items in metadata array`<br>```$metaCount``=``count``(``$metaData``);`<br>```if``(``$metaCount``> 20 ) {`<br>```$this``->set_field_error(``array``( esc_html__(``'You may only have 20 custom keys.'``),``'sometextdomain'``) );`<br>``<br>```return``;`<br>```}`<br>``<br>```//loop through metaData and check the key name length (custom_key)`<br>```foreach``(``$metaData``as``$meta``) {`<br>```if``(``empty``(``$meta``[``'custom_key'``] ) && !``empty``(``$meta``[``'value'``] ) ) {`<br>```$this``->set_field_error(``array``(``'name'``=>``'metaData'``), esc_html__(``"A field has been mapped to a custom key without a name. Please enter a name for the custom key, remove the metadata item, or return the corresponding drop down to 'Select a Field'."``,``'sometextdomain'``) );`<br>```break``;`<br>```}``elseif``(``strlen``(``$meta``[``'custom_key'``] ) > 40 ) {`<br>```$this``->set_field_error(``array``(``'name'``=>``'metaData'``), sprintf( esc_html__(``'The name of custom key %s is too long. Please shorten this to 40 characters or less.'``,``'sometextdomain'``),``$meta``[``'custom_key'``] ) );`<br>```break``;`<br>```}`<br>```}`<br>`}` |

## Helpers

The following functions may come in helpful when interacting with the **dynamic\_field\_map** field type during feed processing.

### get\_dynamic\_field\_map\_fields()

Retrieves the individual field\_map fields from the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object) for the supplied field name.

|     |     |
| --- | --- |
| 1 | `$metaData``=``$this``->get_dynamic_field_map_fields(``$feed``,``'metaData'``);` |

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)
The Entry Object to be checked.

- **$name** [string](https://docs.gravityforms.com/string)

The **name** property of the **dynamic\_field\_map** field to retrieve the mapped fields for.

- **Returns** [array](https://docs.gravityforms.com/array)

An array containing the field names or custom keys as the keys to the mapped form field ID or entry meta key.


## Uses

- [settings\_dynamic\_field\_map()](https://docs.gravityforms.com/helper-functions/#settings_dynamic_field_map)

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 11, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/dynamic_field_map-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)