---
url: "https://docs.gravityforms.com/category/developers/php-api/add-on-framework/"
title: "Add-On Framework Archives - Gravity Forms"
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
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Add-On Framework

## Introduction

The Add-On Framework provides basic functionality for developers when creating new add-ons for Gravity Forms. It facilitates the following:

- Initialization
- Enforcing Gravity Forms minimum version requirement
- Creating settings pages (add-on and form settings)
- Permissions and integration with the Members plugin
- Conditional script enqueuing including no-conflict mode integration
- Adding custom meta fields to the entry object
- Creating form feeds
- Creating a results page
- Adding notes to the entry
- Integration with the Gravity Forms Locking API
- Registering notification events
- Standardization of UI elements and styles
- Automatic clean uninstall

## How It Works

To create a new add-on, simply extend one of the following classes:

- [GFAddOn](https://docs.gravityforms.com/gfaddon)
Extend the GFAddOn class to create add-ons that are either very simple or that don't fit into the more specialized cases below (GFFeedsAddOn and GFPaymentAddOn). This class will help to make sure all the scripts are enqueued on the right page. It'll speed up the development of settings pages and it eliminates the need to write some of the housekeeping tasks like clean uninstall.

- [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon)
Extend the GFFeedAddOn class to create add-ons that give users the ability to create form feeds. A feed is a user-configurable action that gets processed after a form is submitted. With this class, you get all of the features of the GFAddOn class plus some additional functionality to facilitate the development of the feed settings UI and conditional processing. For examples of add-ons that use feeds, check out the MailChimp Add-On and the Coupons Add-On.

- [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon)
Extend the GFPaymentAddOn class when creating new add-ons for Gravity Forms that collect payments. It handles payments which redirect to a third-party website (e.g., PayPal Standard) and payments which are made using a credit card with the transaction hidden behind-the-scenes (e.g., Authorize.Net, PayPal Payments Pro, and Stripe).


## Settings API

The Settings API can be used to create feed and plugin settings pages. The API provides the mechanisms for rendering field UIs and saving values automatically. It supports standard field types like radio buttons, text boxes, checkboxes and also custom field types.

- [Get started with the Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api)

## A Simple Add-On

The following code demonstrates the following:

- basic configuration of the add-on
- including the Add-On Framework in a plugin
- extending the GFAddOn class
- enforcing the requirement for the minimum version of Gravity Forms
- adding a top-level page to the Forms menu
- adding a form settings tab and add one checkbox
- adding an add-on settings tab to the Gravity Forms settings page with one textbox

The bootstrap file, simpleaddon.php, contains no dependency on Gravity Forms. This is important because it allows the add-on to load correctly by WordPress even if Gravity Forms hasn't been loaded yet.

This file then uses the "gform\_loaded" Gravity Forms hook to properly initialize the add-on once Gravity Forms has been loaded.

Below is an example of what this bootstrap file should look like (minus the plugin headers).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22 | `define(``'GF_SIMPLE_ADDON_VERSION'``,``'2.0'``);`<br>`add_action(``'gform_loaded'``,``array``(``'GF_Simple_AddOn_Bootstrap'``,``'load'``), 5 );`<br>`class``GF_Simple_AddOn_Bootstrap {`<br>```public``static``function``load() {`<br>```if``( ! method_exists(``'GFForms'``,``'include_addon_framework'``) ) {`<br>```return``;`<br>```}`<br>```require_once``(``'class-gfsimpleaddon.php'``);`<br>```GFAddOn::register(``'GFSimpleAddOn'``);`<br>```}`<br>`}`<br>`function``gf_simple_addon() {`<br>```return``GFSimpleAddOn::get_instance();`<br>`}` |

Note in the above example that the add-on is initialized by including the class-gfsimpleaddon.php file when gform\_loaded is fired.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>155<br>156<br>157<br>158<br>159<br>160<br>161<br>162<br>163<br>164<br>165<br>166<br>167<br>168<br>169<br>170<br>171<br>172<br>173<br>174<br>175<br>176<br>177<br>178<br>179<br>180<br>181<br>182<br>183<br>184<br>185<br>186<br>187<br>188<br>189<br>190<br>191<br>192<br>193<br>194<br>195<br>196<br>197<br>198<br>199<br>200<br>201<br>202<br>203<br>204<br>205<br>206<br>207<br>208<br>209<br>210<br>211<br>212<br>213<br>214<br>215<br>216<br>217<br>218<br>219<br>220<br>221<br>222<br>223<br>224<br>225<br>226<br>227<br>228<br>229<br>230<br>231<br>232<br>233<br>234<br>235<br>236<br>237<br>238<br>239<br>240<br>241<br>242<br>243<br>244<br>245<br>246<br>247<br>248<br>249<br>250<br>251<br>252<br>253<br>254<br>255<br>256<br>257<br>258<br>259<br>260 | `GFForms::include_addon_framework();`<br>`class``GFSimpleAddOn``extends``GFAddOn {`<br>```protected``$_version``= GF_SIMPLE_ADDON_VERSION;`<br>```protected``$_min_gravityforms_version``=``'1.9'``;`<br>```protected``$_slug``=``'simpleaddon'``;`<br>```protected``$_path``=``'simpleaddon/simpleaddon.php'``;`<br>```protected``$_full_path``=``__FILE__``;`<br>```protected``$_title``=``'Gravity Forms Simple Add-On'``;`<br>```protected``$_short_title``=``'Simple Add-On'``;`<br>```private``static``$_instance``= null;`<br>```public``static``function``get_instance() {`<br>```if``( self::``$_instance``== null ) {`<br>```self::``$_instance``=``new``GFSimpleAddOn();`<br>```}`<br>```return``self::``$_instance``;`<br>```}`<br>```public``function``init() {`<br>```parent::init();`<br>```add_filter(``'gform_submit_button'``,``array``(``$this``,``'form_submit_button'``), 10, 2 );`<br>```}`<br>```public``function``scripts() {`<br>```$scripts``=``array``(`<br>```array``(`<br>```'handle'``=>``'my_script_js'``,`<br>```'src'``=>``$this``->get_base_url() .``'/js/my_script.js'``,`<br>```'version'``=>``$this``->_version,`<br>```'deps'``=>``array``(``'jquery'``),`<br>```'strings'``=>``array``(`<br>```'first'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```'second'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```'third'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``)`<br>```),`<br>```'enqueue'``=>``array``(`<br>```array``(`<br>```'admin_page'``=>``array``(``'form_settings'``),`<br>```'tab'``=>``'simpleaddon'`<br>```)`<br>```)`<br>```),`<br>```);`<br>```return``array_merge``( parent::scripts(),``$scripts``);`<br>```}`<br>```public``function``styles() {`<br>```$styles``=``array``(`<br>```array``(`<br>```'handle'``=>``'my_styles_css'``,`<br>```'src'``=>``$this``->get_base_url() .``'/css/my_styles.css'``,`<br>```'version'``=>``$this``->_version,`<br>```'enqueue'``=>``array``(`<br>```array``(``'field_types'``=>``array``(``'poll'``) )`<br>```)`<br>```)`<br>```);`<br>```return``array_merge``( parent::styles(),``$styles``);`<br>```}`<br>```function``form_submit_button(``$button``,``$form``) {`<br>```$settings``=``$this``->get_form_settings(``$form``);`<br>```if``( isset(``$settings``[``'enabled'``] ) && true ==``$settings``[``'enabled'``] ) {`<br>```$text``=``$this``->get_plugin_setting(``'mytextbox'``);`<br>```$button``= "</pre>`<br>`<div>{``$text``}</div>`<br>`<pre>" .``$button``;`<br>```}`<br>```return``$button``;`<br>```}`<br>```public``function``plugin_page() {`<br>```echo``'This page appears in the Forms menu'``;`<br>```}`<br>```public``function``plugin_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Simple Add-On Settings'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'mytextbox'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'label'``=> esc_html__(``'This is the label'``,``'simpleaddon'``),`<br>```'type'``=>``'text'``,`<br>```'class'``=>``'small'``,`<br>```'feedback_callback'``=>``array``(``$this``,``'is_valid_setting'``),`<br>```)`<br>```)`<br>```)`<br>```);`<br>```}`<br>```public``function``form_settings_fields(``$form``) {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Simple Form Settings'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'My checkbox'``,``'simpleaddon'``),`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'enabled'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'Enabled'``,``'simpleaddon'``),`<br>```'name'``=>``'enabled'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My checkboxes'``,``'simpleaddon'``),`<br>```'type'``=>``'checkbox'``,`<br>```'name'``=>``'checkboxgroup'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'first'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'second'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```'name'``=>``'third'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Radio Buttons'``,``'simpleaddon'``),`<br>```'type'``=>``'radio'``,`<br>```'name'``=>``'myradiogroup'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Horizontal Radio Buttons'``,``'simpleaddon'``),`<br>```'type'``=>``'radio'``,`<br>```'horizontal'``=> true,`<br>```'name'``=>``'myradiogrouph'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Dropdown'``,``'simpleaddon'``),`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'mydropdown'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'first'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'second'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Third Choice'``,``'simpleaddon'``),`<br>```'value'``=>``'third'``,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Text Box'``,``'simpleaddon'``),`<br>```'type'``=>``'text'``,`<br>```'name'``=>``'mytext'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'class'``=>``'medium'``,`<br>```'feedback_callback'``=>``array``(``$this``,``'is_valid_setting'``),`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Text Area'``,``'simpleaddon'``),`<br>```'type'``=>``'textarea'``,`<br>```'name'``=>``'mytextarea'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip'``,``'simpleaddon'``),`<br>```'class'``=>``'medium merge-tag-support mt-position-right'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Hidden Field'``,``'simpleaddon'``),`<br>```'type'``=>``'hidden'``,`<br>```'name'``=>``'myhidden'``,`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'My Custom Field'``,``'simpleaddon'``),`<br>```'type'``=>``'my_custom_field_type'``,`<br>```'name'``=>``'my_custom_field'``,`<br>```'args'``=>``array``(`<br>```'text'``=>``array``(`<br>```'label'``=> esc_html__(``'A textbox sub-field'``,``'simpleaddon'``),`<br>```'name'``=>``'subtext'``,`<br>```'default_value'``=>``'change me'``,`<br>```),`<br>```'checkbox'``=>``array``(`<br>```'label'``=> esc_html__(``'A checkbox sub-field'``,``'simpleaddon'``),`<br>```'name'``=>``'my_custom_field_check'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'Activate'``,``'simpleaddon'``),`<br>```'name'``=>``'subcheck'``,`<br>```'default_value'``=> true,`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```),`<br>```);`<br>```}`<br>```public``function``settings_my_custom_field_type(``$field``,``$echo``= true ) {`<br>```echo``'</pre>`<br>`<div>``' . esc_html__( '``My custom field contains a few settings:``', '``simpleaddon``' ) . '``</div>`<br>`<pre>';`<br>```// get the text field settings from the main field and then render the text field`<br>```$text_field``=``$field``[``'args'``][``'text'``];`<br>```$this``->settings_text(``$text_field``);`<br>```// get the checkbox field settings from the main field and then render the checkbox field`<br>```$checkbox_field``=``$field``[``'args'``][``'checkbox'``];`<br>```$this``->settings_checkbox(``$checkbox_field``);`<br>```}`<br>```public``function``is_valid_setting(``$value``) {`<br>```return``strlen``(``$value``) > 5;`<br>```}`<br>`}` |

The above example add-on is available on GitHub, including inline documentation: [https://github.com/rocketgenius/simpleaddon](https://github.com/rocketgenius/simpleaddon).

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

[Algolia](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)