---
url: "https://docs.gravityforms.com/custom-field-types/"
title: "Create a Custom Field Type - Gravity Forms Documentation"
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

# Create a Custom Field Type

- [Introduction](https://docs.gravityforms.com/custom-field-types/#h-introduction)
- [Examples](https://docs.gravityforms.com/custom-field-types/#h-examples)

## Introduction

When using the [Settings API](https://docs.gravityforms.com/settings-api/) you can define a custom field **type** by creating a function called settings\_{your\_custom\_field\_type}. The text after the first underscore will be what you decided to name your type. The function will run for every field of that type.

Important: The Settings API is not used to create custom form fields. To create custom form fields you would need to extend the [GF\_Field](https://docs.gravityforms.com/gf_field) class, part of the [Field Framework](https://docs.gravityforms.com/category/field-framework/).

## Examples

The following example renders the field for the field type _my\_custom\_field\_type_. This function creates two text box fields.:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34 | `public``function``plugin_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=>``'My Custom Field'``,`<br>```'description'``=>``'This is a description of the purpose of Section 1'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'label'``=>``'My Custom Field'``,`<br>```'type'``=>``'my_custom_field_type'``,`<br>```'name'``=>``'my_custom_field'``,`<br>```)`<br>```)`<br>```),`<br>```);`<br>`}`<br>`public``function``settings_my_custom_field_type() {`<br>``<br>```$this``->settings_text(`<br>```array``(`<br>```'label'``=>``'Item 1'``,`<br>```'name'``=>``'my_custom[1]'``,`<br>```'default_value'``=>``'Item 1'`<br>```)`<br>```);`<br>```$this``->settings_text(`<br>```array``(`<br>```'label'``=>``'Item 2'``,`<br>```'name'``=>``'my_custom[2]'``,`<br>```'default_value'``=>``'Item 2'`<br>```)`<br>```);`<br>`}` |

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/image-2-1024x253.png)Custom field with two text boxes

The following example has a custom field type named “text\_with\_checkbox”. This custom type creates a text box field and a checkbox field.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39 | `public``function``plugin_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=>``'Custom Text with Checkbox'``,`<br>```'description'``=>``'This is a description of the purpose of Section 1'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'label'``=>``'Text box with a checkbox'``,`<br>```'type'``=>``'text_with_checkbox'``,`<br>```'name'``=>``'text_checkbox'``,`<br>```)`<br>```)`<br>```),`<br>```);`<br>`}`<br>`// This is a custom field type which will create a text box and a check box`<br>`public``function``settings_text_with_checkbox() {`<br>``<br>```$this``->settings_text(`<br>```array``(`<br>```'label'``=>``'Text Box'``,`<br>```'name'``=>``'txt_cbx[1]'``,`<br>```'default_value'``=>``'Item 1'`<br>```)`<br>```);`<br>```$this``->settings_checkbox(`<br>```array``(`<br>```'label'``=>``'Checkbox'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'Checkbox'``,`<br>```'name'``=>``'txt_cbx[2]'`<br>```)`<br>```)`<br>```)`<br>```);`<br>`}` |

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/image-3-1024x250.png)Custom field with text box and checkbox

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 12, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/custom-field-types/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)