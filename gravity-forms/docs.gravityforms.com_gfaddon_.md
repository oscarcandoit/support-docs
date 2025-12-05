---
url: "https://docs.gravityforms.com/gfaddon/"
title: "GFAddOn - Gravity Forms Documentation"
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
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)        - [GFAddOn](https://docs.gravityforms.com/gfaddon/ "GFAddOn")
        - [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/ "GFFeedAddOn")
        - [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon/ "GFPaymentAddOn")
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# GFAddOn

- [Introduction](https://docs.gravityforms.com/gfaddon/#h-introduction)
- [Getting Started](https://docs.gravityforms.com/gfaddon/#h-getting-started)
- [The Class Variables](https://docs.gravityforms.com/gfaddon/#h-the-class-variables)
- [Activating Features](https://docs.gravityforms.com/gfaddon/#h-activating-features)
- [Requiring Dependencies](https://docs.gravityforms.com/gfaddon/#h-requiring-dependencies)
- [Initialization](https://docs.gravityforms.com/gfaddon/#h-initialization)
- [Settings API](https://docs.gravityforms.com/gfaddon/#h-settings-api)
- [Creating Form Settings](https://docs.gravityforms.com/gfaddon/#h-creating-form-settings)
- [Accessing Form Settings](https://docs.gravityforms.com/gfaddon/#h-accessing-form-settings)
- [Adding Custom Settings to the Main Form Settings Tab](https://docs.gravityforms.com/gfaddon/#h-adding-custom-settings-to-the-main-form-settings-tab)
- [Creating Plugin Settings](https://docs.gravityforms.com/gfaddon/#h-creating-plugin-settings)
- [Accessing Plugin Settings](https://docs.gravityforms.com/gfaddon/#h-accessing-plugin-settings)
- [Enqueuing Scripts and Styles](https://docs.gravityforms.com/gfaddon/#h-enqueuing-scripts-and-styles)
- [Custom Add-On Icons](https://docs.gravityforms.com/gfaddon/#h-custom-add-on-icons)
- [get\_menu\_icon()](https://docs.gravityforms.com/gfaddon/#h-get-menu-icon)
- [get\_icon\_namespace()](https://docs.gravityforms.com/gfaddon/#h-get-icon-namespace)
- [Using GFCommon::get\_icon\_markup()](https://docs.gravityforms.com/gfaddon/#h-using-nbsp-gfcommon-get-icon-markup)
- [Results Page](https://docs.gravityforms.com/gfaddon/#h-results-page)
- [Entry Meta](https://docs.gravityforms.com/gfaddon/#h-entry-meta)
- [Object Locking API](https://docs.gravityforms.com/gfaddon/#h-object-locking-api)
- [Uninstalling](https://docs.gravityforms.com/gfaddon/#h-uninstalling)
- [Sample Add-On](https://docs.gravityforms.com/gfaddon/#h-sample-add-on)

## Introduction

The GFAddOn class provides basic functionality for developers when creating new add-ons for Gravity Forms. It facilitates the following:

- Initialization
- Enforcing Gravity Forms minimum version requirement
- Creating settings pages (add-on and form settings)
- Permissions and integration with the Members plugin
- Conditional script enqueuing including no-conflict mode integration
- Adding custom meta fields to the entry object
- Creating a results page
- Integration with the Gravity Forms Locking API
- Standardization of UI elements and styles
- Automatic clean uninstall

## Getting Started

These are the first steps you’ll need to take to create an add-on using the Add-On Framework:

- Create two PHP files. The first file handles registering your add-on. The second file will contain your add-on’s functionality. See [A Simple Add-On](https://docs.gravityforms.com/add-on-framework/#a-simple-add-on) in the [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework) article for an example.
- In the second PHP file you would include the Add-On Framework files by calling the following:

|     |     |
| --- | --- |
| 1 | `GFForms::include_addon_framework();` |

- Inherit the Add-On Framework by creating a new class which extends GFAddOn:

|     |     |
| --- | --- |
| 1 | `class``GFSimpleAddOn``extends``GFAddOn {}` |

- Add [the class variables](https://docs.gravityforms.com/gfaddon/#h-the-class-variables) to configure the add-on.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `protected``$_version``=``'1.0'``;`<br>`protected``$_min_gravityforms_version``=``'1.9'``;`<br>`protected``$_slug``=``'simpleaddon'``;`<br>`protected``$_path``=``'simpleaddon/simpleaddon.php'``;`<br>`protected``$_full_path``=``__FILE__``;`<br>`protected``$_title``=``'Gravity Forms Simple Add-On'``;`<br>`protected``$_short_title``=``'Simple Add-On'``;` |

- Add support for getting an instance of the add-on.



When Gravity Forms is loading it initializes the add-ons; it does this by looping through each registered add-on and calling its get\_instance function. Adding a get\_instance function also helps other developers integrate with your add-on.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16 | `/**`<br>```* @var object|null $_instance If available, contains an instance of this class.`<br>```*/`<br>`private``static``$_instance``= null;`<br>`/**`<br>```* Returns an instance of this class, and stores it in the $_instance property.`<br>```*`<br>```* @return object $_instance An instance of this class.`<br>```*/`<br>`public``static``function``get_instance() {`<br>```if``( self::``$_instance``== null ) {`<br>```self::``$_instance``=``new``self();`<br>```}`<br>```return``self::``$_instance``;`<br>`}` |

## The Class Variables

- **$\_version** [string](https://docs.gravityforms.com/string)

The version of this add-on.

- **$\_min\_gravityforms\_version** [string](https://docs.gravityforms.com/string)

The version of Gravity Forms required for this add-on, failing to meet this version prevents the add-on from loading.

- **$\_min\_compatible\_gravityforms\_version** [string](https://docs.gravityforms.com/string)

The minimum version of Gravity Forms that is compatible with all the add-on features, failing to meet this version will still allow the add-on to load and work, but some features will not work as expected or will be disabled.

- **$\_slug** [string](https://docs.gravityforms.com/string)

A short, lowercase, URL-safe unique identifier for the add-on. This will be used in option keys, filter, actions, URLs, and text-domain localization. The maximum size allowed for the slug is 33 characters.

- **$\_path** [string](https://docs.gravityforms.com/string)

Relative path to the plugin from the plugins folder. Example “gravityforms/gravityforms.php”

- **$\_full\_path** [string](https://docs.gravityforms.com/string)

The physical path to the main plugin file. Set this to \_\_FILE\_\_

- **$\_title** [string](https://docs.gravityforms.com/string)

The complete title of the Add-On.

- **$\_short\_title** [string](https://docs.gravityforms.com/string)

The short title of the Add-On to be used in limited spaces.


## Activating Features

The Add-On Framework contains many features that can be activated by overriding functions in the base class (GFAddOn). To override a function, add a function with the same name (and arguments) as the function in the base class.

A good example of this is the plugin page. If you take a look at the code in GFAddOn you’ll see an empty function called plugin\_page() that looks like this:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `/**`<br>```* Override this function to create a custom plugin page`<br>```*/`<br>`protected``function``plugin_page() {}` |

This function in GFAddOn does nothing; it’s just a placeholder with documentation explaining how to use it. To activate the plugin page and add a menu link for your add-on to the Forms menu, add the following function to the add-on:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `/**`<br>```* Creates a custom page for this add-on.`<br>```*/`<br>`public``function``plugin_page() {`<br>```echo``'This page appears in the Forms menu'``;`<br>`}` |

Now the function in the base class has been overridden, the feature has been activated, and the link to the page will appear in the Forms menu.

There are many features like this in the Add-On Framework. Please read through the documentation on this page for further details of the features and how to activate them.

### Requiring Dependencies

If your Gravity Forms add-on has any requirements that might not be present everywhere, it’s a good idea to define those dependencies using the _minimum\_requirements()_ class method. Within this class method, you will be able to define things such as Gravity Forms/WordPress/PHP versions, other Gravity Forms add-ons, PHP modules, and even other plugins that your Gravity Forms add-on might require.

**Example**:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59 | `array``(`<br>```// Require WordPress version 4.6.2 or higher.`<br>```'wordpress'``=>``array``(`<br>```'version'``=>``'4.6.2'`<br>```),`<br>```// Require PHP version 5.3 or higher.`<br>```'php'``=>``array``(`<br>```'version'``=>``'5.3'``,`<br>```// Require specific PHP extensions.`<br>```'extensions'``=>``array``(`<br>```// Require cURL version 1.0 or higher.`<br>```'curl'``=>``array``(`<br>```'version'``=>``'1.0'`<br>```),`<br>```// Require any version of mbstring.`<br>```'mbstring'``,`<br>```),`<br>```// Require specific functions to be available.`<br>```'functions'``=>``array``(`<br>```'openssl_random_pseudo_bytes'``,`<br>```'mcrypt_create_iv'`<br>```),`<br>```),`<br>```// Require other add-ons to be present.`<br>```'add-ons'``=>``array``(`<br>```// Require any version of the Mailchimp add-on.`<br>```'gravityformsmailchimp'``,`<br>```// Require the Stripe add-on and ensure the name matches.`<br>```'gravityformsstripe'``=>``array``(`<br>```'name'``=>``'Gravity Forms Stripe Add-On'`<br>```),`<br>```// Require the PayPal add-on version 5.0 or higher.`<br>```'gravityformspaypal'``=>``array``(`<br>```'version'``=>``'5.0'`<br>```),`<br>```),`<br>```// Required plugins.`<br>```'plugins'``=>``array``(`<br>```// Require the REST API.`<br>```'rest-api/plugin.php'``,`<br>```// Require Jetpack and ensure the name matches.`<br>```'jetpack/jetpack.php'``=>``'Jetpack by WordPress.com'``,`<br>```),`<br>```// Any additional custom requirements via callbacks.`<br>```array``(``$this``,``'custom_requirement'``),`<br>`);` |

## Initialization

The Add-On Framework provides the following functions to help with initialization and to help organize your code:

- pre\_init()

Override this function to perform any tasks that need to be done before the WordPress action “init” fires

- init()

Override this function to perform tasks during WordPress initialization

- init\_admin()

Override this function to perform tasks only in the admin back-end

- init\_frontend()

Override this function to perform tasks only in the front-end

- init\_ajax()

Override this function to perform tasks only while processing ajax requests


IMPORTANT: call the parent function first. e.g. parent::init();

Example:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30 | `GFForms::include_addon_framework();`<br>`class GFSimpleAddOn extends GFAddOn {`<br>```// [snip: class variables]`<br>```public function pre_init() {`<br>```parent::pre_init();`<br>```// add tasks or filters here that you want to perform during the class constructor - before WordPress has been completely initialized`<br>```}`<br>```public function init() {`<br>```parent::init();`<br>```// add tasks or filters here that you want to perform both in the backend and frontend and for ajax requests`<br>```}`<br>```public function init_admin() {`<br>```parent::init_admin();`<br>```// add tasks or filters here that you want to perform only in admin`<br>```}`<br>```public function init_frontend() {`<br>```parent::init_frontend();`<br>```// add tasks or filters here that you want to perform only in the front end`<br>```}`<br>```public function init_ajax() {`<br>```parent::init_ajax();`<br>```// add tasks or filters here that you want to perform only during ajax requests`<br>```}`<br>`}` |

## Settings API

The Add-On Framework includes a Settings API that can be used to create form and plugin settings pages. The API provides the mechanisms for rendering field UIs and saving values automatically. It supports standard field types like radio buttons, text boxes, and checkboxes and also custom field types.

See the [Settings API](https://docs.gravityforms.com/settings-api) for details about how to define sections of fields.

See the following articles for implementation examples of the various field types.

- [Text](https://docs.gravityforms.com/text-field/) (‘type’ => ‘text’)
- [Textarea Field](https://docs.gravityforms.com/textarea-field) (‘type’ => ‘textarea’)
- [Hidden Field](https://docs.gravityforms.com/hidden-field) (‘type’ => ‘hidden’)
- [Radio Field](https://docs.gravityforms.com/radio-field) (‘type’ => ‘radio’)
- [Checkbox Field](https://docs.gravityforms.com/checkbox-field) (‘type’ => ‘checkbox’)
- [Select Field](https://docs.gravityforms.com/select-field) (‘type’ => ‘select’)
- [Select\_Custom Field](https://docs.gravityforms.com/select_custom-field) (‘type’ => ‘select\_custom’)
- [Field\_Map Field](https://docs.gravityforms.com/field_map-field) (‘type’ => ‘field\_map’)
- [Field\_Select Field](https://docs.gravityforms.com/field_select-field) (‘type’ => ‘field\_select’)
- [Dynamic\_Field\_Map Field](https://docs.gravityforms.com/dynamic_field_map-field) (‘type’ => ‘dynamic\_field\_map’)
- [Checkbox\_And\_Select Field](https://docs.gravityforms.com/checkbox_and_select/) (‘type’ => ‘checkbox\_and\_select’)
- [Save Button](https://docs.gravityforms.com/save-button) (‘type’ => ‘save’)
- [Custom Field Type](https://docs.gravityforms.com/custom-field-type)

There are also a number of [Helper Functions](https://docs.gravityforms.com/helper-functions) available for use when rendering custom settings.

### Creating Form Settings

To create a tab on the Form Settings page, override the form\_settings\_fields() function returning an array with the configuration for the settings.

Complete example with all field types:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>155<br>156<br>157<br>158<br>159<br>160<br>161<br>162<br>163<br>164<br>165<br>166<br>167<br>168<br>169<br>170<br>171<br>172 | `/**`<br>```* Configures the settings which should be rendered on the Form Settings > Simple Add-On tab.`<br>```*`<br>```* @return array`<br>```*/`<br>`public``function``form_settings_fields(``$form``) {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Simple Form Settings'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'My checkbox'``,``'simpleaddon'``),`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'enabled'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'Enabled'``,``'simpleaddon'``),`<br>```'name'``=>``'enabled'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My checkboxes'``,``'simpleaddon'``),`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'checkboxgroup'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'first'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'second'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'third'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Radio Buttons'``,``'simpleaddon'``),`<br>```'type'``=>``'radio'``,`<br>```'name'``=>``'myradiogroup'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Horizontal Radio Buttons'``,``'simpleaddon'``),`<br>```'type'``=>``'radio'``,`<br>```'horizontal'``=> true,`<br>```'name'``=>``'myradiogrouph'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Dropdown'``,``'simpleaddon'``),`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'mydropdown'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'first'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'second'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'third'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Text Box'``,``'simpleaddon'``),`<br>```'type'``=>``'text'``,`<br>```'name'``=>``'mytext'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'class'``=>``'medium'``,`<br>```'feedback_callback'``=>``array``(``$this``,``'is_valid_setting'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Text Area'``,``'simpleaddon'``),`<br>```'type'``=>``'textarea'``,`<br>```'name'``=>``'mytextarea'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'class'``=>``'medium merge-tag-support mt-position-right'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Hidden Field'``,``'simpleaddon'``),`<br>```'type'``=>``'hidden'``,`<br>```'name'``=>``'myhidden'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Custom Field'``,``'simpleaddon'``),`<br>```'type'``=>``'my_custom_field_type'``,`<br>```'name'``=>``'my_custom_field'``,`<br>```'args'``=>``array``(`<br>```'text'``=>``array``(`<br>```'label'``=> esc_html__(``'A textbox sub-field'``,``'simpleaddon'``),`<br>```'name'``=>``'subtext'``,`<br>```'default_value'``=>``'change me'``,`<br>```),`<br>```'checkbox'``=>``array``(`<br>```'label'``=> esc_html__(``'A checkbox sub-field'``,``'simpleaddon'``),`<br>```'name'``=>``'my_custom_field_check'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'Activate'``,``'simpleaddon'``),`<br>```'name'``=>``'subcheck'``,`<br>```'default_value'``=> true,`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```);`<br>`}`<br>`/**`<br>```* Define the markup for the my_custom_field_type type field.`<br>```*`<br>```* @param array $field The field properties.`<br>```*/`<br>`public``function``settings_my_custom_field_type(``$field``) {`<br>```echo``'<div>'``. esc_html__(``'My custom field contains a few settings:'``,``'simpleaddon'``) .``'</div>'``;`<br>```// get the text field settings from the main field and then render the text field`<br>```$text_field``=``$field``[``'args'``][``'text'``];`<br>```$this``->settings_text(``$text_field``);`<br>```// get the checkbox field settings from the main field and then render the checkbox field`<br>```$checkbox_field``=``$field``[``'args'``][``'checkbox'``];`<br>```$this``->settings_checkbox(``$checkbox_field``);`<br>`}`<br>`/**`<br>```* The feedback callback for the 'mytextbox' setting on the plugin settings page and the 'mytext' setting on the form settings page.`<br>```*`<br>```* @param string $value The setting value.`<br>```*`<br>```* @return bool`<br>```*/`<br>`public``function``is_valid_setting(``$value``) {`<br>```return``strlen``(``$value``) > 10;`<br>`}` |

The code above will create a tab on the Form Settings page for the Simple Add-On and look similar to the following:

[![Form Settings Fields Example ](https://docs.gravityforms.com/wp-content/uploads/2014/05/Form_Settings_Fields_Example.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/Form_Settings_Fields_Example.png)

#### Accessing Form Settings

The form settings for the current add-on can be accessed easily by using the function get\_form\_settings($form). This returns an associative array with the settings for the current add-on for the given form.

Example:

|     |     |
| --- | --- |
| 1 | `$settings``=``$this``->get_form_settings(``$form``);` |

#### Adding Custom Settings to the Main Form Settings Tab

To add a custom setting to the main form settings tab, please consult the documentation for the [gform\_form\_settings](https://docs.gravityforms.com/gform_form_settings) hook. Here’s a quick example of how you’d implement it with the Add-On Framework:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26 | `GFForms::include_addon_framework();`<br>`class``GFSimpleAddOn``extends``GFAddOn {`<br>```// [snip: class variables]`<br>```public``function``init() {`<br>```parent::init();`<br>```add_filter(``'gform_form_settings'``,``array``(``$this``,``'my_custom_form_setting'``), 10, 2 );`<br>```add_filter(``'gform_pre_form_settings_save'``,``array``(``$this``,``'save_my_custom_form_setting'``) );`<br>```}`<br>```function``my_custom_form_setting(``$settings``,``$form``) {`<br>```$settings``[``'Form Basics'``][``'my_custom_setting'``] = '`<br>```<tr>`<br>```<th><label``for``=``"my_custom_setting"``>My Custom Label</label></th>`<br>```<td><input value=``"' . rgar( $form, 'my_custom_setting' ) . '"``name=``"my_custom_setting"``></td>`<br>```</tr>';`<br>```return``$settings``;`<br>```}`<br>```function``save_my_custom_form_setting(``$form``) {`<br>```$form``[``'my_custom_setting'``] = rgpost(``'my_custom_setting'``);`<br>```return``$form``;`<br>```}`<br>`}` |

### Creating Plugin Settings

Plugin settings pages appear in a tab in the Gravity Forms settings page. To create a settings page, override the plugin\_settings\_fields() function using the same array structure as described above for the form settings.

Example:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `/**`<br>```* Configures the settings which should be rendered on the add-on settings tab.`<br>```*`<br>```* @return array`<br>```*/`<br>`public``function``plugin_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Simple Add-On Settings'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'mytextbox'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'label'``=> esc_html__(``'This is the label'``,``'simpleaddon'``),`<br>```'type'``=>``'text'``,`<br>```'class'``=>``'small'``,`<br>```'feedback_callback'``=>``array``(``$this``,``'is_valid_setting'``),`<br>```)`<br>```)`<br>```)`<br>```);`<br>`}`<br>`[/php]` |

#### Accessing Plugin Settings

The plugin settings for the current add-on can be accessed easily by using the following functions:

- get\_plugin\_settings()

returns all plugin settings in an associative array

- get\_plugin\_setting( $setting\_name )

returns a single setting with the given setting name e.g. “my\_setting\_name”


Example:

|     |     |
| --- | --- |
| 1<br>2 | `$all_plugin_settings = $this->get_plugin_settings();`<br>`$text                = $this->get_plugin_setting( 'mytextbox');` |

## Enqueuing Scripts and Styles

See the [Including Scripts and Styles When Using the Add-on Framework](https://docs.gravityforms.com/include-scripts-styles-with-addon-framework/) article.

## Custom Add-On Icons

### get\_menu\_icon()

This method should return the full class name for your add-on’s icon, including the namespace and icon name. The class string is typically formatted as `myaddon-icon--icon-name`. This method defaults to:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `public function get_menu_icon() {`<br>```return``'gform-icon--cog'``;`<br>`}` |

### get\_icon\_namespace()

This method allows you to specify the namespace for your font icon kit. This namespace should match the prefix used in your icon class names **without** the `-icon` suffix. For example, if your icon class is `myaddon-icon--check`, the namespace would be `myaddon`.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `class``My_Addon``extends``GFFeedAddOn {`<br>```public``function``get_menu_icon() {`<br>```return``'myaddon-icon--settings'``;`<br>```}`<br>```public``function``get_icon_namespace() {`<br>```return``'myaddon'``;`<br>```}`<br>`}` |

The updated GFCommon::get\_icon\_markup() utility uses these methods to consistently output icon HTML across Gravity Forms views, such as the admin sidebar, uninstall view, and settings headers.

### Using GFCommon::get\_icon\_markup()

You can programmatically generate your custom icon markup using GFCommon::get\_icon\_markup():

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `$icon``=``array``(`<br>```'icon'``=>``$this``->get_menu_icon(),`<br>```'icon_namespace'``=>``$this``->get_icon_namespace(),`<br>`);`<br>`$icon_markup``= GFCommon::get_icon_markup(``$icon``,``'dashicons-admin-generic'``);` |

If the custom icon is not found, the fallback icon (e.g. dashicons-admin-generic) will be used instead.

**Note:** This feature assumes your font icon kit uses a class structure similar to Gravity Forms (gform-icon gform-icon–icon-name).

## Results Page

To add a results page, override the get\_results\_page\_config() function and return the configuration array with the following properties:

- **title** [string](https://docs.gravityforms.com/string)
The title of the results page.

- **capabilities** [array](https://docs.gravityforms.com/array)

An array of capabilities that can view the results page.

- **callbacks** [array](https://docs.gravityforms.com/array)

An array of callback functions. _Possible values: fields, markup, calculation_


Example:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13 | `public``function``get_results_page_config() {`<br>```return``array``(`<br>```'title'``=>``'Poll Results'``,`<br>```'capabilities'``=>``array``(``'gravityforms_polls_results'``),`<br>```'callbacks'``=>``array``(`<br>```'fields'``=>``array``(``$this``,``'results_fields'``)`<br>```)`<br>```);`<br>`}`<br>`public``function``results_fields(``$form``) {`<br>```return``GFAPI::get_fields_by_type(``$form``,``array``(``'poll'``) );`<br>`}` |

## Entry Meta

See the [Including and using Entry Meta with the Add-On Framework](https://docs.gravityforms.com/using-entry-meta-with-add-on-framework/) article.

## Object Locking API

The Gravity Forms Object Locking API prevents conflicts from occurring by preventing concurrent editing by different users of forms, entries, form settings and plugin settings. This eliminates the problem of users overwriting the changes made be other users. When one user is editing an object, the second user will be offered the choice to request control over the object. The first user will then be offered the choice to accept or deny that request. If the first user fails to respond, the second user will be offered control.

The Locking API uses the WordPress Heartbeat API to send updates at regular intervals, usually every 15 seconds when the page has focus, and every 2 minutes when the page doesn’t have the focus.

The Add-On Framework provides developers access to the Object Locking API in 2 ways:

1. Locking is automatically implemented for form settings and plugin settings – nothing additional is required for this to work.

2. Locking for custom objects. For example, an add-on that manages employee information may have an “employee” object. The Add-On Framework will prevent concurrent editing of the employee profile.


Locking is activated by overriding the following functions:

- get\_locking\_config()

Return an array with the locking configuration to activate locking

- get\_locking\_object\_id()

Return the object id

- is\_locking\_edit\_page()

Return true if the current page is the edit page

- is\_locking\_view\_page()

Return true if the current page is the view page

- is\_locking\_list\_page()

Return true if the current page is the list page


|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32 | `public``function``get_locking_config(){`<br>```$strings``=``array``(`<br>```"currently_locked"``=> __(``'This contact is currently locked. Click on the "Request Control" button to let %s know you'``d like to take over.',``"gravityforms"``),`<br>```"currently_editing"``=>``"%s is currently editing this contact"``,`<br>```"taken_over"``=>``"%s has taken over and is currently editing this contact."``,`<br>```"lock_requested"``=> __(``"%s has requested permission to take over control of this contact."``,``"gravityforms"``)`<br>```);`<br>```$contact_id``=``$this``->get_object_id();`<br>```$config``=``array``(`<br>```"object_type"``=>``"contact"``,`<br>```"capabilities"``=>``array``(``"gravityforms_contacts_edit_contacts"``),`<br>```"redirect_url"``=> admin_url(sprintf(``"admin.php?page=gf_contacts&view=contact&subview=profile&id=%d&edit=0"``,``$contact_id``)),`<br>```"edit_url"``=> admin_url(sprintf(``"admin.php?page=gf_contacts&view=contact&subview=profile&id=%d&edit=1"``,``$contact_id``)),`<br>```"strings"``=>``$strings`<br>```);`<br>```return``$config``;`<br>`}`<br>`public``function``get_locking_object_id(){`<br>```return``rgget(``"id"``);`<br>`}`<br>`public``function``is_locking_edit_page(){`<br>```$is_edit_page``= rgget(``"page"``) ==``"gf_contacts"``&& rgget(``"view"``) ==``"contact"``&& rgget(``"subview"``) ==``"profile"``&& rgget(``"edit"``) == 1;`<br>```return``$is_edit_page``;`<br>`}`<br>`public``function``is_locking_view_page(){`<br>```$is_view_page``= rgget(``"page"``) ==``"gf_contacts"``&& rgget(``"view"``) ==``"contact"``&& rgget(``"subview"``) ==``"profile"``&& rgget(``"edit"``) == 0;`<br>```return``$is_view_page``;`<br>`}`<br>`public``function``is_locking_list_page(){`<br>```$is_list_page``= rgget(``"page"``) ==``"gf_contacts"``&& rgempty(``"view"``,``$_GET``);`<br>```return``$is_list_page``;`<br>`}` |

## Uninstalling

All Gravity Forms Add-Ons should provide a way to remove settings completely before the user deactivates and deletes the plugin. The Add-On Framework handles much of this for you so you don’t need to configure anything unless you’ve added settings or database tables of your own. The uninstall button will be on the plugin settings page. The following elements will be removed automatically when the user uninstalls the add-on.

- Form settings
- Plugin settings
- Entry meta
- Version information

If you need to perform additional tasks such as removing custom options or database tables then override the uninstall() function. This will be called after permissions have been checked and before removing all the settings.

Example:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `public``function``uninstall() {`<br>```// custom code to drop database tables and remove custom options`<br>`}` |

The uninstall section of the settings page can be modified or removed completely by overriding the render\_uninstall() function.

Example:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `public``function``render_uninstall() {`<br>```// an empty function will remove the uninstall section on the settings page`<br>`}` |

## Sample Add-On

A sample add-on is available which demonstrates the basic features of the Add-On Framework:

- Plugin page
- Form Settings
- Plugin Settings
- Scripts and Styles

https://github.com/rocketgenius/simpleaddon

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gfaddon/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)