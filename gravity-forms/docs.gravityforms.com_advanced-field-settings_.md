---
url: "https://docs.gravityforms.com/advanced-field-settings/"
title: "Advanced Tab - Gravity Forms Documentation"
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

# Advanced Tab

- [Introduction](https://docs.gravityforms.com/advanced-field-settings/#h-introduction)
- [Settings](https://docs.gravityforms.com/advanced-field-settings/#h-settings)
- [Source Code](https://docs.gravityforms.com/advanced-field-settings/#h-source-code)

## Introduction

The following settings are available for use on a field’s Advanced tab. The [gform\_field\_advanced\_settings](https://docs.gravityforms.com/gform_field_advanced_settings) hook can also be used to add custom settings at the positions indicated below.

Settings can be enabled for a field which extends the [GF\_Field](https://docs.gravityforms.com/gf_field) class by overriding the [get\_form\_editor\_field\_settings()](https://docs.gravityforms.com/gf_field/#get_form_editor_field_settings) method.

## Settings

- **Position:** 0

- **admin\_label\_setting**


The **Admin Field Label** setting allows the user to define an admin label for the field.

- **Position:** 25

- **Position:** 35

- **Position:** 50

- **Position:** 100

- **Position:** 125

- **default\_value\_setting**


The **Default Value** setting allows a default value to be defined for the field using a text input.

- **Position:** 150

- **default\_value\_textarea\_setting**


The **Default Value** setting allows a default value to be defined for the field using a textarea.

- **Position:** 155

- **name\_prefix\_choices\_setting**


The **Prefix Choices** setting allows the choices for the Name field prefix input to be customized.

- **Position:** 175

- **default\_input\_values\_setting**


The **Default Value** setting allowing default values of the field inputs to be defined.

- **Position:** 185

- **copy\_values\_option**


This setting provides the ability to allow the user to use the values they entered into another address field to populate the current field during form submission. Example: Copying Billing Address to the Mailing Address field.

- **Position:** 200

- **Position:** 225

- **Position:** 250

- **captcha\_language\_setting**


The **Language** setting provides a drop down allowing the reCaptcha language to be set.

- **Position:** 300

- **Position:** 325

- **add\_icon\_url\_setting**


The **Add Icon URL** setting allows an image URL to be defined for use with the List field add row button.

- **Position:** 337

- **delete\_icon\_url\_setting**


The **Delete Icon URL** setting allows an image URL to be defined for use with the List field delete row button.

- **Position:** 350

- **password\_field\_setting**


The **Enable Password Input** setting configures the field to use a password type input.

- **Position:** 375

- **force\_ssl\_field\_setting**


Includes a **Force SSL** setting which allows the page containing the form to be forced to be secure when this field exists.

- **Position:** 400

- **visibility\_setting**


The **Visibility** settings allow the field to be displayed on the front-end form or only on the entry detail page when editing the entry.

- **Position:** 425

- **rich\_text\_editor\_setting**


Provides a **Use the Rich Text Editor** setting allowing the RTE to be enabled for the Paragraph and Post Body fields.

- **Position:** 450

- **prepopulate\_field\_setting**


This setting allows dynamic population to be enabled for the field and parameter names to be configured for the relevant field inputs.

- **Position:** 500

- **conditional\_logic\_field\_setting**


This setting allows conditional logic to be enabled for the field and the individual rules to be defined.

- **Position:** 525

- **conditional\_logic\_page\_setting**


This setting allows conditional logic to be enabled for the page and the individual rules to be defined.

- **Position:** 550

- **conditional\_logic\_nextbutton\_setting**


This setting allows conditional logic to be enabled for the next button and the individual rules to be defined.

- **Position:** -1


## Source Code

The above settings are located in **GFFormDetail::forms\_page()** in form\_detail.php.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 10, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/advanced-field-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)