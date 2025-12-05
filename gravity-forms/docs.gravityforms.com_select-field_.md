---
url: "https://docs.gravityforms.com/select-field/"
title: "Select Field Type - Gravity Forms Documentation"
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

# Select Field Type

- [Introduction](https://docs.gravityforms.com/select-field/#h-introduction)
- [Example](https://docs.gravityforms.com/select-field/#h-example)
- [Uses](https://docs.gravityforms.com/select-field/#h-uses)

## Introduction

The **select** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), allows the user to select a choice from a drop down.

## Example

The following example shows a section with two **select** type fields. The first is a simple select with two choices. The second select field has two choices with the first choice having sub-choices (an option group).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50 | `array``(`<br>```'title'``=>``'Select Field'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'myselect_one'``,`<br>```'label'``=> esc_html__(``'This is a basic select'``,``'sometextdomain'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'my first choice'``,``'sometextdomain'``),`<br>```'value'``=>``'1'`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'my second choice'``,``'sometextdomain'``),`<br>```'value'``=>``'2'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'myselect_two'``,`<br>```'label'``=> esc_html__(``'This is a select with an optgroup'``,``'sometextdomain'``),`<br>```'default_value'``=>``'third'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'This is an optgroup.'``,``'sometextdomain'``),`<br>```'value'``=>``'first'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'A first choice in the optgroup.'``,``'sometextdomain'``),`<br>```'value'``=>``'first'`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'A second choice in the optgroup.'``,``'sometextdomain'``),`<br>```'value'``=>``'second'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'A third choice in the optgroup.'``,``'sometextdomain'``),`<br>```'value'``=>``'third'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'This is a fourth choice option.'``,``'sometextdomain'``),`<br>```'value'``=>``'fourth'``,`<br>```),`<br>```),`<br>```)`<br>```)`<br>`)` |

The code above will render the select fields similar to the following:

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/image-9-1024x313.png)

## Uses

- [settings\_select()](https://docs.gravityforms.com/helper-functions/#settings_select)
- [get\_select\_options()](https://docs.gravityforms.com/helper-functions/#get_select_options)
- [get\_select\_option()](https://docs.gravityforms.com/helper-functions/#get_select_option)

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 12, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/select-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)