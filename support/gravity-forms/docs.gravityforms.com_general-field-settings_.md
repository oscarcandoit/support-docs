---
url: "https://docs.gravityforms.com/general-field-settings/"
title: "General Tab - Gravity Forms Documentation"
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

# General Tab

- [Introduction](https://docs.gravityforms.com/general-field-settings/#h-introduction)
- [Settings](https://docs.gravityforms.com/general-field-settings/#h-settings)
- [Source Code](https://docs.gravityforms.com/general-field-settings/#h-source-code)

## Introduction

The following settings are available for use on a field’s General tab. The [gform\_field\_standard\_settings](https://docs.gravityforms.com/gform_field_standard_settings) hook can also be used to add custom settings at the positions indicated below.

Settings can be enabled for a field which extends the [GF\_Field](https://docs.gravityforms.com/gf_field) class by overriding the [get\_form\_editor\_field\_settings()](https://docs.gravityforms.com/gf_field/#get_form_editor_field_settings) method.

## Settings

- **Position:** 0

- **label\_setting**


The **Field Label** setting allows the user to define a label for the field.

- **Position:** 10

- **description\_setting**


The **Description** setting allows the user to define the field description.

- **Position:** 20

- **product\_field\_setting**


The **Product Field Mapping** setting allows the user to select which Product field the current Option field is associated with.

- **Position:** 25

- **product\_field\_type\_setting**


The **Field Type** setting allowing the product field to be set to a specific type: Single Product, Drop Down, Radio Buttons, User Defined Price, Hidden, or Calculation.

- **Position:** 37

- **shipping\_field\_type\_setting**


The **Field Type** setting allowing the Shipping field to be set to a specific type: Single Method, Drop Down, Radio Button.

- **Position:** 50

- **base\_price\_setting**


The **Price** setting allows the user to specify the product’s base price.

- **Position:** 75

- **disable\_quantity\_setting**


The **Disable quantity field** setting allows the user to remove the quantity input from the field displayed on the front-end. A default value of 1 will be used, unless a separate Quantity field is added.

- **Position:** 100

- **option\_field\_type\_setting**


The **Field Type** setting allowing the Option field to be set to a specific type: Drop Down, Checkboxes, or Radio Buttons.

- **Position:** 125

- **donation\_field\_type\_setting** – _Deprecated_


The **Field Type** setting allowing the donation field to be set to a specific type: Drop Down, Radio Buttons, or User Defined Price.

- **Position:** 150

- **quantity\_field\_type\_setting**


The **Field Type** setting allowing the quantity field to be set to a specific type: Number, Drop Down, or Hidden.

- **Position:** 200

- **content\_setting**


The **Content** setting allows the user to enter HTML or text to be displayed for the field.

- **Position:** 225

- **next\_button\_setting**


The **Next Button** settings allow different button text or a custom image to be used for the button.

- **Position:** 237

- **previous\_button\_setting**


The **Previous Button** settings allow different button text or a custom image to be used for the button.

- **Position:** 250

- **disable\_margins\_setting**


The **Disable default margins** setting allows the content margins to be set to align the content with other fields.

- **Position:** 300

- **post\_custom\_field\_type\_setting**


The **Field Type** setting allowing the Post Custom field to be set to a specific type: Single line text, Paragraph Text, Drop Down, Multi Select, Number, Checkboxes, Radio Buttons, Hidden, Date, Time, Phone, Website, Email, File Upload, or List.

- **Position:** 350

- **post\_tag\_type\_setting**


The **Field Type** setting allowing the Post tags field to be set to a specific type: Single line text, Drop Down, Checkboxes, or Radio Buttons.

- **Position:** 400

- **captcha\_type\_setting**


The **Type** setting allowing the Captcha field to be set to a specific type: reCAPTCHA, Really Simple CAPTCHA, or Math Challenge.

- **Position:** 450

- **captcha\_size\_setting**


The **Size** setting allowing the Captcha field size to be set to Small, Medium, or Large.

- **Position:** 500

- **captcha\_fg\_setting**


The **Font Color** setting allowing the Captcha fields font colour to be configured using a color picker or by entering the hex code.

- **Position:** 550

- **captcha\_bg\_setting**


The **Background Color** setting allowing the Captcha fields background colour to be configured using a color picker or by entering the hex code.

- **Position:** 600

- **captcha\_theme\_setting**


The **Theme** setting allow the Captcha fields theme to be set to light or dark.

- **Position:** 650

- **post\_custom\_field\_setting**


The **Custom Field Name** setting allowing the user to specify which custom field the submitted value should be stored in.

- **Position:** 700

- **post\_status\_setting**


The **Post Status** setting allowing the user to specify what status the post created from the form submission should be assigned: Draft, Pending Review, or Published.

- **Position:** 750

- **post\_author\_setting**


The **Default Post Author** setting which determines which user should be set as the post author.

- **Position:** 775

- **post\_format\_setting**


The **Post Format** setting which can be used to specify which post format will be used for the post that is created by the form entry.

- **Position:** 800

- **post\_category\_setting**


The **Post Category** setting used to define which category the post created from the form submission should be assigned to.

- **Position:** 825

- **post\_category\_field\_type\_setting**


The **Field Type** setting allowing the Post Category field to be set to a specific type: Drop Down, Checkboxes, Radio Buttons, or Multi Select.

- **Position:** 850

- **post\_category\_checkbox\_setting**


The **Category** setting defines which categories are available for selection by the user. They can choose to display all of them or select individual ones.

- **Position:** 875

- **post\_category\_initial\_item\_setting**


The **Display placeholder** settings enables a placeholder to be configured for the Post Category field.

- **Position:** 900

- **post\_content\_template\_setting**


The **Create content template** setting provides a way for a template to be defined for the post content.

- **Position:** 950

- **post\_title\_template\_setting**


The **Create content template** setting provides a way for a template to be defined for the post title.

- **Position:** 975

- **customfield\_content\_template\_setting**


The **Create content template** setting provides a way for a template to be defined for the post custom field.

- **Position:** 1000

- **post\_image\_setting**


The **Image Metadata** settings are used to enable inputs for the image title, caption and description on the Post Image field.

- **Position:** 1025

- **post\_image\_featured\_image**


The **Set as Featured Image** setting allows the file uploaded via the Post Image field to be set as the post’s featured image.

- **Position:** 1050

- **address\_setting**


This includes the **Address Type** setting, input sub-labels, the ability to show/hide the individual inputs, **Default Country** (if International type is chosen), **Default State** (if United States is chosen), **Default Province** (if Canadian is chosen).

- **Position:** 1100

- **name\_format\_setting** – _Deprecated_


The **Name Format** setting provides the ability to change the Name field configuration from advanced to extended.

- **Position:** 1125

- **name\_setting**


The **Name Fields** settings allow the individual field inputs to be enabled/disabled and the sub-labels configured.

- **Position:** 1150

- **date\_input\_type\_setting**


The **Date Input Type** setting provides a drop down allowing the field to be configured as Date Field, Date Picker, or Date Drop Down.

- **Position:** 1200

- **date\_format\_setting**


The **Date Format** setting provides a list of available date formats from which to choose.

- **Position:** 1225

- **customize\_inputs\_setting**


The **Customize Fields** settings provide a way to customize the input sub-labels and enabled/disable the inputs.

- **Position:** 1250

- **file\_extensions\_setting**


The **Allowed file extensions** setting allows the file extensions which can be uploaded via the file upload field to be restricted.

- **Position:** 1260

- **multiple\_files\_setting**


The **Enable Multi-File Upload** setting determines if the field should use a single file type input or if the plupload scripts should be used to enable multiple files to be uploaded. When enabled you will also be able to limit the number of files which can be uploaded using the field.

- **Position:** 1267

- **file\_size\_setting**


The **Maximum File Size** setting enables the size of files uploaded using the File Upload field to be limited.

- **Position:** 1275

- **columns\_setting**


The **Enable multiple columns** setting is used with the List field to allow multiple columns to be configured instead of the default single column.

- **Position:** 1287

- **maxrows\_setting**


The **Maximum Rows** setting enables the number of rows the user can dynamically add to the front-end List field to be limited.

- **Position:** 1300

- **time\_format\_setting**


The **Time Format** setting allows the field to be set to use the 12 or 24 hour format.

- **Position:** 1325

- **phone\_format\_setting**


The **Phone Format** setting allows the Phone field format to be configured. The default formats are (###) ###-#### (standard) and International. The [gform\_phone\_formats](https://docs.gravityforms.com/gform_phone_formats) filter can be used to add additional formats.

- **Position:** 1350

- **choices\_setting**


This setting allows you to customize the fields available choices, their values and if relevant their prices. It also allows you to choose from a predefined set of data. Without this section, the field is limited to the default choices of “First Choice”, “Second Choice” and “Third Choice”.

- **Position:** 1362

- **other\_choice\_setting**


The **Enable “other” choice** setting can be used to add a final choice to the radio button field with a text input allowing the user to enter their own custom choice text.

- **Position:** 1368

- **email\_confirm\_setting**


The **Enable Email Confirmation** setting allows a second email input to be displayed for confirmation, and also allows custom labels to be configured for each input.

- **Position:** 1375

- **password\_strength\_setting**


The **Enable Password Strength** setting enables a drop down to be displayed allowing the password fields minimum strength to be set.

- **Position:** 1387

- The Password fields **Minimum Strength** drop down will be located here.

- **Position:** 1400

- **number\_format\_setting**


The **Number Format** setting provides a drop down allowing the format to be set to decimal\_dot, decimal\_comma, or currency.

- **Position:** 1415

- **sub\_labels\_setting**


The **Sub-Labels** setting enables the labels for the fields individual inputs to be configured.

- **Position:** 1425

- **Position:** 1430

- **credit\_card\_setting**


The **Supported Credit Cards** setting provides checkboxes for each of the available credit card types allowing the field validation to be configured to only allow certain types.

- **Position:** 1435

- **credit\_card\_style\_setting**


The **Card Icon Style** setting provides a drop down allowing the icon style to be set to use the standard icons or the 3D icons.

- **Position:** 1440

- **input\_mask\_setting**


The **Input Mask** setting allows you to provide a visual guide allowing users to more easily enter data in a specific format such as dates and phone numbers.

- **Position:** 1450

- **maxlen\_setting**


The **Maximum Characters** setting allows you to limit the maximum number of characters which can be entered in a text input or textarea.

- **Position:** 1500

- **range\_setting**


The **Range** setting provides inputs allowing the minimum and maximum values for a number field to be defined.

- **Position:** 1550

- **calculation\_setting**


This setting provides a way to enable calculation support for the field and the calculation formula to be defined.

- **Position:** 1600

- **rules\_setting**


The **Rules** settings allow the field to be set as required and the **duplicate\_setting** to be made available.

- **duplicate\_setting**


The **No Duplicates** setting allows the no duplicates validation to be enabled for the field.

- **Position:** -1


## Source Code

The above settings are located in **GFFormDetail::forms\_page()** in form\_detail.php.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 12, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/general-field-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)