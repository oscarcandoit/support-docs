---
url: "https://docs.gravityforms.com/the-simple_condition-helper/"
title: "The simple_condition Helper - Gravity Forms Documentation"
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

# The simple\_condition Helper

- [Introduction](https://docs.gravityforms.com/the-simple_condition-helper/#h-introduction)
- [Include the custom setting](https://docs.gravityforms.com/the-simple_condition-helper/#h-include-the-custom-setting)
- [Define custom\_logic\_type field markup](https://docs.gravityforms.com/the-simple_condition-helper/#h-define-custom_logic_type-field-markup)
- [Populate the fields drop down](https://docs.gravityforms.com/the-simple_condition-helper/#h-populate-the-fields-drop-down)
- [Evaluate the rules](https://docs.gravityforms.com/the-simple_condition-helper/#h-evaluate-the-rules)

## Introduction

When using the [Settings API](https://docs.gravityforms.com/settings-api) there may be times when you need a field type which allows the user to define a simple conditional logic rule, that’s where the simple\_condition() function helps.

[![simple_condition_example](https://docs.gravityforms.com/wp-content/uploads/2016/09/simple_condition_example.png)](https://docs.gravityforms.com/wp-content/uploads/2016/09/simple_condition_example.png)

## Include the custom setting

Because there isn’t an actual simple\_condition field type you would need to create your own [Custom Field Type](https://docs.gravityforms.com/custom-field-type). In this example our custom field type will be named **custom\_logic\_type**, it is defined in the settings fields array like so:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `array``(`<br>```'label'``=> esc_html__(``'Simple condition'``,``'simpleaddon'``),`<br>```'type'``=>``'custom_logic_type'``,`<br>```'name'``=>``'custom_logic'``,`<br>`),` |

## Define custom\_logic\_type field markup

Now the setting has been included we need to define the markup for the custom\_logic\_type field type so it can be displayed on the settings page.

Because we don’t want the simple condition settings to be used all the time we will add a checkbox which can be used to enable/disable them. An onlclick event will be added to the checkbox to show/hide the div containing the simple condition settings.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32 | `public``function``settings_custom_logic_type(``$field``,``$echo``= true ) {`<br>```// Get the setting name.`<br>```$name``=``$field``[``'name'``];`<br>```// Define the properties for the checkbox to be used to enable/disable access to the simple condition settings.`<br>```$checkbox_field``=``array``(`<br>```'name'``=>``$name``,`<br>```'type'``=>``'checkbox'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'Enabled'``,``'simpleaddon'``),`<br>```'name'``=>``$name``.``'_enabled'``,`<br>```),`<br>```),`<br>```'onclick'``=>``"if(this.checked){jQuery('#{$name}_condition_container').show();} else{jQuery('#{$name}_condition_container').hide();}"``,`<br>```);`<br>```// Determine if the checkbox is checked, if not the simple condition settings should be hidden.`<br>```$is_enabled``=``$this``->get_setting(``$name``.``'_enabled'``) ==``'1'``;`<br>```$container_style``= !``$is_enabled``?``"style='display:none;'"``:``''``;`<br>```// Put together the field markup.`<br>```$str``= sprintf(``"%s<div id='%s_condition_container' %s>%s</div>"``,`<br>```$this``->settings_checkbox(``$checkbox_field``, false ),`<br>```$name``,`<br>```$container_style``,`<br>```$this``->simple_condition(``$name``)`<br>```);`<br>```echo``$str``;`<br>`}` |

## Populate the fields drop down

We need to define which fields are to be available for selection in the simple condition settings fields drop down.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `public``function``get_conditional_logic_fields() {`<br>```$form``=``$this``->get_current_form();`<br>```$fields``=``array``();`<br>```foreach``(``$form``[``'fields'``]``as``$field``) {`<br>```if``(``$field``->is_conditional_logic_supported() ) {`<br>```$inputs``=``$field``->get_entry_inputs();`<br>```if``(``$inputs``) {`<br>```$choices``=``array``();`<br>```foreach``(``$inputs``as``$input``) {`<br>```if``( rgar(``$input``,``'isHidden'``) ) {`<br>```continue``;`<br>```}`<br>```$choices``[] =``array``(`<br>```'value'``=>``$input``[``'id'``],`<br>```'label'``=> GFCommon::get_label(``$field``,``$input``[``'id'``], true )`<br>```);`<br>```}`<br>```if``( !``empty``(``$choices``) ) {`<br>```$fields``[] =``array``(``'choices'``=>``$choices``,``'label'``=> GFCommon::get_label(``$field``) );`<br>```}`<br>```}``else``{`<br>```$fields``[] =``array``(``'value'``=>``$field``->id,``'label'``=> GFCommon::get_label(``$field``) );`<br>```}`<br>```}`<br>```}`<br>```return``$fields``;`<br>`}` |

## Evaluate the rules

To evaluate the rules the user configured for the custom\_logic setting we will need to create a custom helper function. In this example the setting is being used on a form settings page so we need to retrieve them from the form settings. If the settings are being used on a feed settings page you would need to retrieve them from the $feed\[‘meta’\].

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26 | `public``function``is_custom_logic_met(``$form``,``$entry``) {`<br>```$settings``=``$this``->get_form_settings(``$form``);`<br>```$name``=``'custom_logic'``;`<br>```$is_enabled``= rgar(``$settings``,``$name``.``'_enabled'``);`<br>```if``( !``$is_enabled``) {`<br>```// The setting is not enabled so we handle it as if the rules are met.`<br>```return``true;`<br>```}`<br>```// Build the logic array to be used by Gravity Forms when evaluating the rules.`<br>```$logic``=``array``(`<br>```'logicType'``=>``'all'``,`<br>```'rules'``=>``array``(`<br>```array``(`<br>```'fieldId'``=> rgar(``$settings``,``$name``.``'_field_id'``),`<br>```'operator'``=> rgar(``$settings``,``$name``.``'_operator'``),`<br>```'value'``=> rgar(``$settings``,``$name``.``'_value'``),`<br>```),`<br>```)`<br>```);`<br>```return``GFCommon::evaluate_conditional_logic(``$logic``,``$form``,``$entry``);`<br>`}` |

This helper can then be used wherever you need to evaluate the rules, in the [sample add-on available on GitHub](https://github.com/rocketgenius/simpleaddon) the helper is used to determine if a custom action should be performed at the end of the form submission process.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `public``function``after_submission(``$entry``,``$form``) {`<br>```// Evaluate the rules configured for the custom_logic setting.`<br>```$result``=``$this``->is_custom_logic_met(``$form``,``$entry``);`<br>```if``(``$result``) {`<br>```// Do something awesome because the rules were met.`<br>```}`<br>`}` |

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 9, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/the-simple_condition-helper/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)