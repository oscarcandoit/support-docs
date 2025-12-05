---
url: "https://docs.gravityforms.com/select_custom-field/"
title: "Select Custom Field Type - Gravity Forms Documentation"
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

# Select Custom Field Type

- [Introduction](https://docs.gravityforms.com/select_custom-field/#h-introduction)
- [Example](https://docs.gravityforms.com/select_custom-field/#h-example)
- [Uses](https://docs.gravityforms.com/select_custom-field/#h-uses)

## Introduction

The **select\_custom** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), allows the user to select a choice in a drop down or enter their own custom value in a text input.

## Example

This field will output a select field containing the specified choices. In this example [get\_field\_map\_choices()](https://docs.gravityforms.com/field_map-field/#get_field_map_choices) is used to return an array of choices containing the date type fields from the current form.

It will also have an extra choice appended to the end of the list which when selected will hide the select field and display a text field allowing the user to enter a custom choice.

The content from the **after\_input** property will appear after the text input, it will be hidden when the select is displayed.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13 | `array``(`<br>```'title'``=>``'Select Field w/ Option for Custom Value'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'cardDueDate'``,`<br>```'type'``=>``'select_custom'``,`<br>```'label'``=> esc_html__(``'Due Date'``,``'sometextdomain'``),`<br>```'after_input'``=>``' '``. esc_html__(``'days after today'``,``'sometextdomain'``),`<br>```'choices'``=>``$this``->get_field_map_choices( rgget(``'id'``),``'date'``),`<br>```'required'``=> true,`<br>```),`<br>```)`<br>`)` |

The code above will render the select field similar to the following. When the “Add Custom Due Date” choice is selected the select will be hidden and a text input is displayed.

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/Screen-Capture-on-2022-07-13-at-10-40-53.gif)

## Uses

- [settings\_select\_custom()](https://docs.gravityforms.com/helper-functions/#settings_select_custom)
- [settings\_select()](https://docs.gravityforms.com/helper-functions/#settings_select)
- [settings\_text()](https://docs.gravityforms.com/helper-functions/#settings_text)

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 13, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/select_custom-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)