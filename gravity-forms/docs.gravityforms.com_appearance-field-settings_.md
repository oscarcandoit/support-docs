---
url: "https://docs.gravityforms.com/appearance-field-settings/"
title: "Appearance Tab - Gravity Forms Documentation"
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
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)      - [Field Classes](https://docs.gravityforms.com/category/developers/php-api/field-framework/field-classes/)
      - [Field Settings](https://docs.gravityforms.com/category/developers/php-api/field-framework/field-framework-settings/)        - [Advanced Tab](https://docs.gravityforms.com/advanced-field-settings/ "Advanced Tab")
        - [Appearance Tab](https://docs.gravityforms.com/appearance-field-settings/ "Appearance Tab")
        - [General Tab](https://docs.gravityforms.com/general-field-settings/ "General Tab")
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Appearance Tab

- [Introduction](https://docs.gravityforms.com/appearance-field-settings/#h-introduction)
- [Settings](https://docs.gravityforms.com/appearance-field-settings/#h-settings)
- [Source Code](https://docs.gravityforms.com/appearance-field-settings/#h-source-code)

## Introduction

The following settings are available for use on a field’s Appearance tab. The [gform\_field\_appearance\_settings](https://docs.gravityforms.com/gform_field_appearance_settings) hook can also be used to add custom settings at the positions indicated below.

Settings can be enabled for a field which extends the [GF\_Field](https://docs.gravityforms.com/gf_field) class by overriding the [get\_form\_editor\_field\_settings()](https://docs.gravityforms.com/gf_field/#get_form_editor_field_settings) method.

## Settings

- **Position:** 0

- **placeholder\_setting**


The **Placeholder** setting allows you to define the value of the placeholder attribute for the field input.

- **Position:** 20

- **placeholder\_textarea\_setting**


The **Placeholder** setting allows you to define the value of the placeholder attribute for the field textarea.

- **Position:** 50

- **input\_placeholders\_setting**


The **Placeholders** setting allows you to define the values of the placeholder attributes for the field inputs.

- **Position:** 100

- **label\_placement\_setting**


This displays a **Field Label Visibility** setting (when enabled by the [gform\_enable\_field\_label\_visibility\_settings](https://docs.gravityforms.com/gform_enable_field_label_visibility_settings) filter) allowing the field label to be hidden and a **Description Placement** setting allowing the field description location to be overridden.

- **Position:** 150

- **sub\_label\_placement\_setting**


The **Sub-Label Placement** setting allows the sub label position to be overridden or hidden (when enabled by the [gform\_enable\_field\_label\_visibility\_settings](https://docs.gravityforms.com/gform_enable_field_label_visibility_settings) filter).

- **Position:** 200

- **error\_message\_setting**


Includes a **Custom Validation Message** setting enabling the field validation message to be overridden. Note: this does not override the message returned when the field fails no duplicates validation.

- **Position:** 250

- **css\_class\_setting**


The **Custom CSS Class** setting allows custom css class names to be added to the field container (the li element which contains the field).

- **Position:** 300

- **enable\_enhanced\_ui\_setting**


Includes a **Enable enhanced user interface** setting allowing the select element used by the Drop Down and Multi Select fields to be enhanced by the chosen.js script.

- **Position:** 400

- **size\_setting**


The **Field Size** setting provides a drop down allowing the field size to be set to small, medium, or large.


## Source Code

The above settings are located in **GFFormDetail::forms\_page()** in form\_detail.php.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 12, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/appearance-field-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)