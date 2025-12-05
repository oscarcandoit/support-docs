---
url: "https://docs.gravityforms.com/gform_form_settings_page_view/"
title: "gform_form_settings_page_VIEW - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)        - [gform\_form\_settings\_page\_VIEW](https://docs.gravityforms.com/gform_form_settings_page_view/ "gform_form_settings_page_VIEW")
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)
      - [System Status Actions](https://docs.gravityforms.com/category/developers/hooks/actions/system-status-actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_form\_settings\_page\_VIEW

- [Description](https://docs.gravityforms.com/gform_form_settings_page_view/#h-description)
- [Usage](https://docs.gravityforms.com/gform_form_settings_page_view/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_form_settings_page_view/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_form_settings_page_view/#h-examples)
- [Source Code](https://docs.gravityforms.com/gform_form_settings_page_view/#h-source-code)

## Description

The gform\_form\_settings\_page\_{VIEW} action in Gravity Forms adds custom pages (i.e. “views”) to the Form Settings section. This hook is used by Gravity Forms add-ons to add their settings pages.

## Usage

Specify the view name after the _gform\_form\_settings\_page\__ part of the hook name:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_form_settings_page_VIEW'``,``'my_custom_function'``);` |

## Parameters

There are no parameters for this action.

## Examples

This example demonstrates how to display page content for menu items added via the [gform\_form\_settings\_menu](https://docs.gravityforms.com/gform_form_settings_menu) filter using the [gform\_form\_settings\_page\_view](https://docs.gravityforms.com/gform_form_settings_page_view) hook. Note that the **VIEW** in the hook name is variable and should be replaced by your page name.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `// add a custom menu item to the Form Settings page menu`<br>`add_filter(``'gform_form_settings_menu'``,``'my_custom_form_settings_menu_item'``);`<br>`function``my_custom_form_settings_menu_item(``$menu_items``) {`<br>```$menu_items``[] =``array``(`<br>```'name'``=>``'my_custom_form_settings_page'``,`<br>```'label'``=> __(``'My Custom Form Settings Page'``)`<br>```);`<br>```return``$menu_items``;`<br>`}`<br>`// handle displaying content for our custom menu when selected`<br>`add_action(``'gform_form_settings_page_my_custom_form_settings_page'``,``'my_custom_form_settings_page'``);`<br>`function``my_custom_form_settings_page() {`<br>```GFFormSettings::page_header();`<br>```echo``'My Custom Form Settings!'``;`<br>```GFFormSettings::page_footer();`<br>`}` |

## Source Code

This filter is located in GFFormSettings::form\_settings\_page() _form\_settings.php_.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_form_settings_page_view/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)