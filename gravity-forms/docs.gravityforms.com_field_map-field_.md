---
url: "https://docs.gravityforms.com/field_map-field/"
title: "Field Map Field Type - Gravity Forms Documentation"
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

# Field Map Field Type

- [Introduction](https://docs.gravityforms.com/field_map-field/#h-introduction)
- [Parameters](https://docs.gravityforms.com/field_map-field/#h-parameters)
- [Field\_Map](https://docs.gravityforms.com/field_map-field/#h-field-map)
- [Example](https://docs.gravityforms.com/field_map-field/#h-example)
- [Helpers](https://docs.gravityforms.com/field_map-field/#h-helpers)
- [get\_field\_map\_fields()](https://docs.gravityforms.com/field_map-field/#h-get-field-map-fields)
- [get\_field\_value()](https://docs.gravityforms.com/field_map-field/#h-get-field-value)
- [Uses](https://docs.gravityforms.com/field_map-field/#h-uses)

## Introduction

The **field\_map** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), allows the user to map their form fields to fields you define, e.g. fields you will be sending to a third-party service such as a CRM.

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **name** | [string](https://docs.gravityforms.com/string) | Required. Name of the field. Use it to retrieve saved data. |
| **label** | [string](https://docs.gravityforms.com/string) | Required. Field label. Will be displayed in the UI |
| **type** | [string](https://docs.gravityforms.com/string) | Required. Field type. Must be set to field\_map for the Field Map field |
| **tooltip** | [string](https://docs.gravityforms.com/string) | Optional. Defaults to blank (no tooltip). Displays a question mark icon and a tooltip next to the field label. |
| **field\_map** | [array](https://docs.gravityforms.com/array) | Required. Array that defines the fields to be mapped. |
| **validation\_callback** | (function) | Optional. Defaults to nothing (no callback). Calls a function during validation allow for custom validation logic. The example in the existing documentation page is good. |

### Field\_Map

Each item in the **field\_map** array has the following properties:

| Prop | Type | Description |
| --- | --- | --- |
| **name** | [string](https://docs.gravityforms.com/string) | Required. Name of the field to be mapped. To be used when retrieving the selected value. |
| **label** | [string](https://docs.gravityforms.com/string) | Required. Label to be displayed in the UI. |
| **required** | [bool](https://docs.gravityforms.com/bool) | Optional. Defaults to false. Possible values are true or false. Marks this field as required, which means it must be mapped to a form field. |
| **default\_value** | [string](https://docs.gravityforms.com/string) | Optional. Defaults to blank (nothing is pre-selected). Allowed values are field IDs. When specified, the form field drop down is pre-selected with the appropriate field. |

## Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `array``(`<br>```'title'``=> esc_html__(``'This is the title for Section 1'``,``'sometextdomain'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'contactStandardFields'``,`<br>```'label'``=> esc_html__(``'Map Fields'``,``'sometextdomain'``),`<br>```'type'``=>``'field_map'``,`<br>```'field_map'``=>``$this``->standard_fields_for_feed_mapping(),`<br>```'tooltip'``=>``'<h6>'``. esc_html__(``'Map Fields'``,``'sometextdomain'``) .``'</h6>'``. esc_html__(``'Select which Gravity Form fields pair with their respective third-party service fields.'``,``'sometextdomain'``)`<br>```),`<br>```),`<br>`),` |

Here’s the function being used to define the fields for the **field\_map** property.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25 | `public``function``standard_fields_for_feed_mapping() {`<br>```return``array``(`<br>```array``(`<br>```'name'``=>``'first_name'``,`<br>```'label'``=> esc_html__(``'First Name'``,``'sometextdomain'``),`<br>```'required'``=> true,`<br>```'field_type'``=>``array``(``'name'``,``'text'``,``'hidden'``),`<br>```'default_value'``=>``$this``->get_first_field_by_type(``'name'``, 3 ),`<br>```),`<br>```array``(`<br>```'name'``=>``'last_name'``,`<br>```'label'``=> esc_html__(``'Last Name'``,``'sometextdomain'``),`<br>```'required'``=> true,`<br>```'field_type'``=>``array``(``'name'``,``'text'``,``'hidden'``),`<br>```'default_value'``=>``$this``->get_first_field_by_type(``'name'``, 6 ),`<br>```),`<br>```array``(`<br>```'name'``=>``'email_address'``,`<br>```'label'``=> esc_html__(``'Email Address'``,``'sometextdomain'``),`<br>```'required'``=> true,`<br>```'field_type'``=>``array``(``'email'``,``'hidden'``),`<br>```'default_value'``=>``$this``->get_first_field_by_type(``'email'``),`<br>```),`<br>```);`<br>`}` |

The above code would render the following:

[![field_map-field](https://docs.gravityforms.com/wp-content/uploads/2016/02/field_map-field.png)](https://docs.gravityforms.com/wp-content/uploads/2016/02/field_map-field.png)

## Helpers

The following functions may come in helpful when interacting with the **field\_map** field type during feed processing.

### get\_field\_map\_fields()

Retrieves the individual field\_map fields from the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object) for the supplied field name.

|     |     |
| --- | --- |
| 1 | `$contact_standard_fields``=``$this``->get_field_map_fields(``$feed``,``'contactStandardFields'``);` |

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)
The Entry Object to be checked.

- **$name** [string](https://docs.gravityforms.com/string)
The **name** property of the **field\_map** field to retrieve the mapped fields for.

- **Returns** [array](https://docs.gravityforms.com/array)

An array containing the field names as the keys to the mapped form field ID or entry meta key.


### get\_field\_value()

Retrieves the specified form field or entry meta value. See [Accessing Mapped Field Values During Feed Processing](https://docs.gravityforms.com/mapped-field-values-during-feed-processing/) for more details.

|     |     |
| --- | --- |
| 1 | `$first_name``=``$this``->get_field_value(``$form``,``$entry``,``$contact_standard_fields``[``'first_name'``] );` |

## Uses

- [settings\_field\_map()](https://docs.gravityforms.com/helper-functions/#settings_field_map)
- [field\_map\_table\_header()](https://docs.gravityforms.com/helper-functions/#field_map_table_header)
- [field\_map\_title()](https://docs.gravityforms.com/helper-functions/#field_map_title)
- [get\_mapped\_field\_name()](https://docs.gravityforms.com/helper-functions/#get_mapped_field_name)
- [settings\_field\_map\_select()](https://docs.gravityforms.com/helper-functions/#settings_field_map_select)
- [get\_field\_map\_choices()](https://docs.gravityforms.com/helper-functions/#get_field_map_choices)

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 28, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/field_map-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)