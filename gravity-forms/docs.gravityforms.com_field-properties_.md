---
url: "https://docs.gravityforms.com/field-properties/"
title: "Field Properties - Gravity Forms Documentation"
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

# Field Properties

- [Introduction](https://docs.gravityforms.com/field-properties/#h-introduction)
- [Resources](https://docs.gravityforms.com/field-properties/#h-resources)

## Introduction

Each field in the Settings API is configured with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| type | [string](https://docs.gravityforms.com/string/) | The setting field type. Possible values: text, textarea, hidden, checkbox, radio, select, select\_custom, field\_map, dynamic\_field\_map, field\_select, checkbox\_and\_select, save or a custom type. |
| input\_type | [string](https://docs.gravityforms.com/string/) | The value of the fields input type attribute (e.g. password). Applies to fields of type text. |
| name | [string](https://docs.gravityforms.com/string/) | The setting name. For feed based add-ons this will be used as key to the setting value in the feed meta array. |
| id | [string](https://docs.gravityforms.com/string/) | The value of the id attribute of the element containing this setting. If the id is not specified, then the value from the name property will be used instead. |
| label | [string](https://docs.gravityforms.com/string/) | The setting label. |
| required | [boolean](https://docs.gravityforms.com/boolean/) | Determines whether the field is required to be filled out or not. Use true or false. The indicator for a required field will be displayed next to the label. |
| class | [string](https://docs.gravityforms.com/string/) | The value of the class attribute for the field input |

Note: There are three useful Gravity Form’s classes named “small”, “medium”, and “large” which you may use to control the size of the field generated.

| Property | Type | Description |
| --- | --- | --- |
| tooltip | [string](https://docs.gravityforms.com/string/) | The content to be included in the tooltip for this setting. |
| tooltip\_class | [string](https://docs.gravityforms.com/string/) | The tooltip class; the value to be appended to the class attribute of the element containing this settings tooltip. |
| hidden | [boolean](https://docs.gravityforms.com/boolean/) | Controls the display of the field. If set to true, the html is still created but the field is not visible. The style “display:none” is applied. This functions similarly to the field type of “hidden”. The main difference is that when using the field type of hidden, a hidden text box is generated (). With this property, you can hide any field type. |
| default\_value | [string](https://docs.gravityforms.com/string/) | The default value for the field. Does not apply to the checkbox field. |

For fields of type radio or select, if a default\_value is specified for the field and a matching value is found for a choice, the radio button/dropdown item will be selected. If the choice does not have a value specified but does have a label, the label will be used to find a match.

| Property | Type | Description |
| --- | --- | --- |
| horizontal | boolean | When set to true, the checkboxes or radio buttons will be displayed side-by-side instead of one per line. Applies to fields of type checkbox or radio only. |
| dependency | [string](https://docs.gravityforms.com/string/) \| [array](https://docs.gravityforms.com/array/) | See Dependency above. |
| choices | [array](https://docs.gravityforms.com/array/) | An array of choices. Required for radio, checkbox and select field types. See Choices below. |
| allow\_html | [boolean](https://docs.gravityforms.com/array/) | For Textarea fields only, if set to true, HTML in the textarea won’t be all stripped, it uses wp\_kses() with the post context instead of sanitize\_text\_field(), so any HTML allowed in a post, will be allowed in the textarea, if the property doesn’t exist or is set to false, all HTML tags will be stripped, and other things sanitize\_text\_field() does. |
| use\_editor | [boolean](https://docs.gravityforms.com/array/) | For Textarea fields only, when set to true, it initialize as Rich Text Editor. HTML will be handled just like when allow\_html is set to true. |
| feedback\_callback | [string](https://docs.gravityforms.com/string/) \| [array](https://docs.gravityforms.com/array/) | For text fields only. The function containing the feedback logic e.g. array( $this, ‘is\_valid\_setting’ ). |

The feedback callback function should return true or false and will determine which feedback indicator will be displayed in the UI. At present, the indicator is either a check icon for true or an x icon for false. This display is purely informative and does not prevent the settings from being saved. Check out the API key settings in the MailChimp Add-On for an example.

| Property | Type | Description |
| --- | --- | --- |
| callback | [array](https://docs.gravityforms.com/array/) | Allows you to specify a different function used to create the field html instead of the function associated with the field type. This is the same as if you implemented a custom field type. e.g. array( $this, ‘my\_replacement\_function\_for\_displaying\_field’ ) |
| validation\_callback | [string](https://docs.gravityforms.com/string/) \| [array](https://docs.gravityforms.com/array/) | The function containing the custom validation logic e.g. array( $this, ‘is\_valid\_setting’ ). |
| after\_input | [string](https://docs.gravityforms.com/string/) | The content which is to be appended after the text field. |
| field\_map | [array](https://docs.gravityforms.com/array/) | An array of child fields, such as those used by a third-party service, which the user would map to their form fields. Used by the field\_map and dynamic\_field\_map field types. Each child field is configured using the Field Properties. |

## Resources

- ### [Additional Properties](https://docs.gravityforms.com/additional-properties/)

- ### [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/)

- ### [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/)

- ### [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/)

- ### [Dependency](https://docs.gravityforms.com/dependency/)

- ### [Field Properties](https://docs.gravityforms.com/field-properties/)

- ### [Section Properties](https://docs.gravityforms.com/section-properties/)


- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/field-properties/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)