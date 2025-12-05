---
url: "https://docs.gravityforms.com/settings-api-helpers/"
title: "List of Settings API Helper Functions - Gravity Forms Documentation"
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

# List of Settings API Helper Functions

- [Introduction](https://docs.gravityforms.com/settings-api-helpers/#h-introduction)
- [add\_field\_before()](https://docs.gravityforms.com/settings-api-helpers/#h-add-field-before)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters)
- [add\_field\_before() Example](https://docs.gravityforms.com/settings-api-helpers/#h-add-field-before-example)
- [add\_field\_after()](https://docs.gravityforms.com/settings-api-helpers/#h-add-field-after)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-0)
- [add\_field\_after() Example](https://docs.gravityforms.com/settings-api-helpers/#h-add-field-after-example)
- [remove\_field()](https://docs.gravityforms.com/settings-api-helpers/#h-remove-field)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-1)
- [remove\_field() Example](https://docs.gravityforms.com/settings-api-helpers/#h-remove-field-example)
- [replace\_field()](https://docs.gravityforms.com/settings-api-helpers/#h-replace-field)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-1)
- [replace\_field() Example 1 - Adding Donation to Transaction Type Drop Down](https://docs.gravityforms.com/settings-api-helpers/#h-replace-field-example-1-adding-donation-to-transaction-type-drop-down)
- [replace\_field() Example 2 - Adding First and Last Name to Billing Information for Mapping](https://docs.gravityforms.com/settings-api-helpers/#h-replace-field-example-2-adding-first-and-last-name-to-billing-information-for-mapping)
- [get\_field()](https://docs.gravityforms.com/settings-api-helpers/#h-get-field)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-2)
- [get\_field() Example](https://docs.gravityforms.com/settings-api-helpers/#h-get-field-example)
- [settings\_text()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-text)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-3)
- [settings\_textarea()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-textarea)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-4)
- [settings\_hidden()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-hidden)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-5)
- [settings\_radio()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-radio)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-6)
- [choices\_have\_icon()](https://docs.gravityforms.com/settings-api-helpers/#h-choices-have-icon)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-7)
- [get\_choice\_attributes()](https://docs.gravityforms.com/settings-api-helpers/#h-get-choice-attributes)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-8)
- [settings\_checkbox()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-checkbox)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-9)
- [checkbox\_item()](https://docs.gravityforms.com/settings-api-helpers/#h-checkbox-item)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-10)
- [checkbox\_input()](https://docs.gravityforms.com/settings-api-helpers/#h-checkbox-input)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-11)
- [checkbox\_input\_{$choice\_name}()](https://docs.gravityforms.com/settings-api-helpers/#h-checkbox-input-choice-name)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-12)
- [settings\_select()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-select)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-13)
- [get\_select\_options()](https://docs.gravityforms.com/settings-api-helpers/#h-get-select-options)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-14)
- [get\_select\_option()](https://docs.gravityforms.com/settings-api-helpers/#h-get-select-option)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-15)
- [settings\_select\_custom()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-select-custom)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-16)
- [settings\_field\_map()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-field-map)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-17)
- [field\_map\_table\_header()](https://docs.gravityforms.com/settings-api-helpers/#h-field-map-table-header)
- [field\_map\_title()](https://docs.gravityforms.com/settings-api-helpers/#h-field-map-title)
- [get\_mapped\_field\_name()](https://docs.gravityforms.com/settings-api-helpers/#h-get-mapped-field-name)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-15)
- [settings\_field\_map\_select()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-field-map-select)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-16)
- [get\_field\_map\_choices()](https://docs.gravityforms.com/settings-api-helpers/#h-get-field-map-choices)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-17)
- [settings\_field\_select()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-field-select)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-18)
- [get\_form\_fields\_as\_choices()](https://docs.gravityforms.com/settings-api-helpers/#h-get-form-fields-as-choices)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-19)
- [settings\_checkbox\_and\_select()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-checkbox-and-select)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-19)
- [settings\_dynamic\_field\_map()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-dynamic-field-map)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-14)
- [settings\_save()](https://docs.gravityforms.com/settings-api-helpers/#h-settings-save)
- [Parameters](https://docs.gravityforms.com/settings-api-helpers/#h-parameters-15)

## Introduction

These helper functions may be used to remove, modify, and add fields when working with the [Settings API](https://docs.gravityforms.com/settings-api)

## add\_field\_before()

|     |     |
| --- | --- |
| 1 | `$this->add_field_before( $name, $fields, $settings );` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$name** | [string](https://docs.gravityforms.com/string) | The **name** property of the field these fields should be inserted before. |
| **$fields** | [array](https://docs.gravityforms.com/array) | An array of fields to be inserted. |
| **$settings** | [array](https://docs.gravityforms.com/array) | The array of sections containing their current fields. |

### add\_field\_before() Example

This example uses the same code as the add field after example, with the only change being calling the add\_field\_before function and specifying the field to place it before as transactionType. This results in the same placement on the page as the other example.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30 | `public``function``feed_settings_fields() {`<br>```$default_settings``= parent::feed_settings_fields();`<br>```//--add PayPal Email Address field`<br>```$fields``=``array``(`<br>```array``(`<br>```'name'``=>``'paypalEmail'``,`<br>```'label'``=> __(``'PayPal Email Address '``,``'gravityformspaypal'``),`<br>```'type'``=>``'text'``,`<br>```'class'``=>``'medium'``,`<br>```'required'``=> true,`<br>```'tooltip'``=>``'<h6>'``. __(``'PayPal Email Address'``,``'gravityformspaypal'``) .``'</h6>'``. __(``'Enter the PayPal email address where payment should be received.'``,``'gravityformspaypal'``)`<br>```),`<br>```array``(`<br>```'name'``=>``'mode'``,`<br>```'label'``=> __(``'Mode'``,``'gravityformspaypal'``),`<br>```'type'``=>``'radio'``,`<br>```'choices'``=>``array``(`<br>```array``(``'id'``=>``'gf_paypal_mode_production'``,``'label'``=> __(``'Production'``,``'gravityformspaypal'``),``'value'``=>``'production'``),`<br>```array``(``'id'``=>``'gf_paypal_mode_test'``,``'label'``=> __(``'Test'``,``'gravityformspaypal'``),``'value'``=>``'test'``),`<br>```),`<br>```'horizontal'``=> true,`<br>```'default_value'``=>``'production'``,`<br>```'tooltip'``=>``'<h6>'``. __(``'Mode'``,``'gravityformspaypal'``) .``'</h6>'``. __(``'Select Production to receive live payments. Select Test for testing purposes when using the PayPal development sandbox.'``,``'gravityformspaypal'``)`<br>```),`<br>```);`<br>```$default_settings``=``$this``->add_field_before(``'transactionType'``,``$fields``,``$default_settings``);`<br>```return``$default_settings``;`<br>`}` |

## add\_field\_after()

|     |     |
| --- | --- |
| 1 | `$this``->add_field_after(``$name``,``$fields``,``$settings``);` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$name** | [string](https://docs.gravityforms.com/string) | The **name** property of the field these fields should be inserted after. |
| **$fields** | [array](https://docs.gravityforms.com/array) | An array of fields to be inserted. |
| **$settings** | [array](https://docs.gravityforms.com/array) | The array of sections containing their current fields. |

### add\_field\_after() Example

This example creates two new fields, PayPal Email Address and Mode, and places them right after the Feed Name field.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40 | `public``function``feed_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Feed Settings'``,``'simpleaddon'``),`<br>```'description'``=> esc_html__(``'Configure the feed settings below'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'text'``,`<br>```'name'``=>``'feedName'``,`<br>```'label'``=> esc_html__(``'Feed Name'``,``'simpleaddon'``),`<br>```'required'``=> true,`<br>```'class'``=>``'medium'`<br>```),`<br>```array``(`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'feedAction'``,`<br>```'label'``=> esc_html__(``'Action'``,``'simpleaddon'``),`<br>```'required'``=> true,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Action'``,``'simpleaddon'``),`<br>```'value'``=>``'first'`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Action'``,``'simpleaddon'``),`<br>```'value'``=>``'second'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'type'``=>``'field_select'``,`<br>```'name'``=>``'mappedField'``,`<br>```'label'``=> esc_html__(``'Map to Field'``,``'simpleaddon'``),`<br>```'tooltip'``=> esc_html__(``'Select which field to map'``,``'simpleaddon'``),`<br>```'required'``=> true`<br>```)`<br>```)`<br>```)`<br>```);`<br>```}` |

The code above produces output similar to the following:

[![Image showing add-on settings](https://docs.gravityforms.com/wp-content/uploads/2025/04/image-30-1024x473.png)](https://docs.gravityforms.com/wp-content/uploads/2025/04/image-30.png)

## remove\_field()

When extending the [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon) you may want to remove some of the default fields from your add-ons feed configuration page.

|     |     |
| --- | --- |
| 1 | `$this``->remove_field(``$name``,``$settings``);` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$name** | [string](https://docs.gravityforms.com/string) | The **name** property of the field to be removed. |
| **$settings** | [array](https://docs.gravityforms.com/array) | The array of sections containing their current fields. |

### remove\_field() Example

This example removes the Setup Fee field.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `public``function``feed_settings_fields() {`<br>```$default_settings``= parent::feed_settings_fields();`<br>```// Hide default display of setup fee`<br>```$default_settings``=``$this``->remove_field(``'setupFee'``,``$default_settings``);`<br>```return``$default_settings``;`<br>`}` |

## replace\_field()

Instead of removing a field, you may replace it with a modified version. When using replace\_field, you do not need to worry about the placement on the page because the field will remain in the same location.

|     |     |
| --- | --- |
| 1 | `$this``->replace_field(``$name``,``$fields``,``$settings``);` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$name** | [string](https://docs.gravityforms.com/string) | The **name** property of the field to be replaced. |
| **$fields** | [array](https://docs.gravityforms.com/array) | An array of fields to be inserted. |
| **$settings** | [array](https://docs.gravityforms.com/array) | The array of sections containing their current fields. |

### replace\_field() Example 1 – Adding Donation to Transaction Type Drop Down

This example adds Donation as a choice in the Transaction Type drop down by replacing the transaction type field with an altered version of it. You could also achieve this by removing the field and adding a new version of it and placing it in the correct location on the page.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25 | `public``function``feed_settings_fields() {`<br>```$default_settings``= parent::feed_settings_fields();`<br>```//--add donation to transaction type drop down`<br>```$transaction_type``=``$this``->get_field(``'transactionType'``,``$default_settings``);`<br>```$choices``=``$transaction_type``[``'choices'``];`<br>```$add_donation``= true;`<br>```foreach``(``$choices``as``$choice``) {`<br>```//add donation option if it does not already exist`<br>```if``(``$choice``[``'value'``] ==``'donation'``) {`<br>```$add_donation``= false;`<br>```}`<br>```}`<br>```if``(``$add_donation``) {`<br>```//add donation transaction type`<br>```$choices``[] =``array``(``'label'``=> __(``'Donations'``,``'gravityformspaypal'``),``'value'``=>``'donation'``);`<br>```}`<br>```$transaction_type``[``'choices'``] =``$choices``;`<br>```$default_settings``=``$this``->replace_field(``'transactionType'``,``$transaction_type``,``$default_settings``);`<br>```return``$default_settings``;`<br>`}` |

### replace\_field() Example 2 – Adding First and Last Name to Billing Information for Mapping

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31 | `public``function``feed_settings_fields() {`<br>```$default_settings``= parent::feed_settings_fields();`<br>```//--get billing info section and add customer first/last name`<br>```$billing_info``=``$this``->get_field(``'billingInformation'``,``$default_settings``);`<br>```$billing_fields``=``$billing_info``[``'field_map'``];`<br>```$add_first_name``= true;`<br>```$add_last_name``= true;`<br>```foreach``(``$billing_fields``as``$mapping``) {`<br>```//add first/last name if it does not already exist in billing fields`<br>```if``(``$mapping``[``'name'``] ==``'firstName'``) {`<br>```$add_first_name``= false;`<br>```}``else``if``(``$mapping``[``'name'``] ==``'lastName'``) {`<br>```$add_last_name``= false;`<br>```}`<br>```}`<br>```if``(``$add_last_name``) {`<br>```//add last name`<br>```array_unshift``(``$billing_info``[``'field_map'``],``array``(``'name'``=>``'lastName'``,``'label'``=> __(``'Last Name'``,``'gravityformspaypal'``),``'required'``=> false ) );`<br>```}`<br>```if``(``$add_first_name``) {`<br>```//add first name`<br>```array_unshift``(``$billing_info``[``'field_map'``],``array``(``'name'``=>``'firstName'``,``'label'``=> __(``'First Name'``,``'gravityformspaypal'``),``'required'``=> false ) );`<br>```}`<br>```$default_settings``=``$this``->replace_field(``'billingInformation'``,``$billing_info``,``$default_settings``);`<br>```return``$default_settings``;`<br>`}` |

## get\_field()

|     |     |
| --- | --- |
| 1 | `$this``->get_field(``$name``,``$settings``);` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$name** | [string](https://docs.gravityforms.com/string) | The **name** property of the field to be retrieved. |
| **$settings** | [array](https://docs.gravityforms.com/array) | The array of sections containing the current fields. |

### get\_field() Example

See the [replace\_field()](https://docs.gravityforms.com/settings-api-helpers/#replace_field) examples above.

## settings\_text()

Renders and initializes a text input based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_text(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_textarea()

Renders and initializes a textarea element based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_textarea(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_hidden()

Renders and initializes a hidden input based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_hidden(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_radio()

Renders and initializes one or more radio type inputs based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_radio(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## choices\_have\_icon()

Determines if any of the choices for this field have an icon.

|     |     |
| --- | --- |
| 1 | `public``function``choices_have_icon(``$choices``=``array``() ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choices** | [array](https://docs.gravityforms.com/array) | The array containing the field choices. |

## get\_choice\_attributes()

Parses the properties of the $choice array and returns a new array containing a set of HTML attributes to be added to the HTML element.

|     |     |
| --- | --- |
| 1 | `protected``function``get_choice_attributes(``$choice``,``$field_attributes``,``$default_choice_attributes``=``array``() ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choice** | [array](https://docs.gravityforms.com/array) | The choice properties. |
| **$field\_attributes** | [array](https://docs.gravityforms.com/array) | The field’s attributes. |
| **$default\_choice\_attributes** | [array](https://docs.gravityforms.com/array) | The choices default attributes. Default is an empty array. |

## settings\_checkbox()

Renders and initializes one or more checkbox type inputs based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_checkbox(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## checkbox\_item()

Returns the markup for an individual checkbox item for the given choice array.

|     |     |
| --- | --- |
| 1 | `protected``function``checkbox_item(``$choice``,``$horizontal_class``,``$attributes``,``$value``,``$tooltip``,``$error_icon``=``''``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choice** | [array](https://docs.gravityforms.com/array) | The array containing the choice properties. |
| **$horizontal\_class** | [string](https://docs.gravityforms.com/string) | The CSS class to style the checkbox items horizontally. |
| **$attributes** | [string](https://docs.gravityforms.com/string) | The attributes to be added to the input element. |
| **$value** | [string](https://docs.gravityforms.com/string) | Indicates if the current choice is selected (1 if field has been checked, 0 or null otherwise). |
| **$tooltip** | [string](https://docs.gravityforms.com/string) | The tooltip for this choice. |

## checkbox\_input()

Returns the markup for an individual checkbox input and label for the given choice array.

|     |     |
| --- | --- |
| 1 | `protected``function``checkbox_input(``$choice``,``$attributes``,``$value``,``$tooltip``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choice** | [array](https://docs.gravityforms.com/array) | The array containing the choice properties. |
| **$attributes** | [string](https://docs.gravityforms.com/string) | The attributes to be added to the input element. |
| **$value** | [string](https://docs.gravityforms.com/string) | Indicates if the current choice is selected (1 if field has been checked. 0 or null otherwise). |
| **$tooltip** | [string](https://docs.gravityforms.com/string) | The tooltip for this choice. |

## checkbox\_input\_{$choice\_name}()

Define a custom **checkbox\_input\_** function ending with a specific choice name to return a custom checkbox input and label markup for that choice.

|     |     |
| --- | --- |
| 1 | `public``function``checkbox_input_{``$choice_name``}(``$choice``,``$attributes``,``$value``,``$tooltip``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choice** | [array](https://docs.gravityforms.com/array) | The array containing the choice properties. |
| **$attributes** | [string](https://docs.gravityforms.com/string) | The attributes to be added to the input element. |
| **$value** | [string](https://docs.gravityforms.com/string) | Indicates if the current choice is selected (1 if field has been checked. 0 or null otherwise). |
| **$tooltip** | [string](https://docs.gravityforms.com/string) | The tooltip for this choice. |

## settings\_select()

Renders and initializes a drop down field based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_select(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## get\_select\_options()

Prepares an HTML string of options for a drop down field.

|     |     |
| --- | --- |
| 1 | `public``function``get_select_options(``$choices``,``$selected_value``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choices** | [array](https://docs.gravityforms.com/array) | The array containing the field choices. |
| **$selected\_value** | [string](https://docs.gravityforms.com/string) | The value currently selected for the field. |

## get\_select\_option()

Prepares an HTML string for a single drop down field option.

|     |     |
| --- | --- |
| 1 | `public``function``get_select_option(``$choice``,``$selected_value``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$choice** | [array](https://docs.gravityforms.com/array) | The array containing the choice properties. |
| **$selected\_value** | [string](https://docs.gravityforms.com/string) | The value currently selected for the field. |

## settings\_select\_custom()

Renders and initializes a drop down field with a input field for custom input based on the $field array.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_select_custom(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_field\_map()

Returns the field markup.

|     |     |
| --- | --- |
| 1 | `public``function``settings_field_map(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the parent field’s properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## field\_map\_table\_header()

Returns the thead element with the column headers.

|     |     |
| --- | --- |
| 1 | `public``function``field_map_table_header() {}` |

## field\_map\_title()

Returns the title to be displayed in the left column of the table, the column containing the labels of the child fields. Defaults to **Field**; override this function to return a custom title.

|     |     |
| --- | --- |
| 1 | `protected``function``field_map_title() {}` |

## get\_mapped\_field\_name()

Returns the key for this field as used in the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object). e.g. contactStandardFields\_first\_name

|     |     |
| --- | --- |
| 1 | `public``function``get_mapped_field_name(``$parent_field``,``$field_name``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$parent\_field** | [array](https://docs.gravityforms.com/array) | The array containing the parent fields properties. |
| **$field\_name** | [string](https://docs.gravityforms.com/string) | The **name** property of the **field\_map** child field. |

## settings\_field\_map\_select()

Returns the markup for the drop down containing the form fields and entry meta choices.

|     |     |
| --- | --- |
| 1 | `public``function``settings_field_map_select(``$field``,``$form_id``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the child field properties. |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the current form. |

## get\_field\_map\_choices()

Returns an array of form field and entry meta choices.

|     |     |
| --- | --- |
| 1 | `public``static``function``get_field_map_choices(``$form_id``,``$field_type``= null,``$exclude_field_types``= null ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the current form. |
| **$field\_type** | [string](https://docs.gravityforms.com/string) \| [array](https://docs.gravityforms.com/array) | The type of fields to be included. |
| **$exclude\_field\_types** | [string](https://docs.gravityforms.com/string) \| [array](https://docs.gravityforms.com/array) | The type of fields to be excluded. |

## settings\_field\_select()

Renders a drop down field containing the form fields as choices.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_field_select(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## get\_form\_fields\_as\_choices()

Retrieve an array of choices containing the form fields.

|     |     |
| --- | --- |
| 1 | `public``function``get_form_fields_as_choices(``$form``,``$args``=``array``() ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$form** | [Form Object](https://docs.gravityforms.com/form-object) | The current form. |
| **$args** | [array](https://docs.gravityforms.com/array) | Additional settings to check for (field and input types to include, callback for applicable input type). |

## settings\_checkbox\_and\_select()

Renders and initializes a checkbox field that displays a select field when checked.

|     |     |
| --- | --- |
| 1 | `protected``function``settings_select(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the field properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_dynamic\_field\_map()

Returns the field markup for the dynamic\_field\_map type field.

|     |     |
| --- | --- |
| 1 | `public``function``settings_dynamic_field_map(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the parent field’s properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

## settings\_save()

Returns the markup for the save button.

|     |     |
| --- | --- |
| 1 | `public``function``settings_save(``$field``,``$echo``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$field** | [array](https://docs.gravityforms.com/array) | The array containing the parent field’s properties. |
| **$echo** | [boolean](https://docs.gravityforms.com/boolean) | Default is true. Indicates whether the field markup should be echoed to the page. |

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 21, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/settings-api-helpers/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)