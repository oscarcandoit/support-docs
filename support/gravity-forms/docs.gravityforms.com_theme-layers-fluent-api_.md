---
url: "https://docs.gravityforms.com/theme-layers-fluent-api/"
title: "Theme Layers Fluent API - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)      - [Theme Layers Fluent API](https://docs.gravityforms.com/theme-layers-fluent-api/ "Theme Layers Fluent API")
      - [Theme Layers JSON API](https://docs.gravityforms.com/theme-layers-json-api/ "Theme Layers JSON API")
      - [Theme Layers View Classes](https://docs.gravityforms.com/theme-layers-view-classes/ "Theme Layers View Classes")
    - [Theme Framework Introduction](https://docs.gravityforms.com/theme-framework-introduction/ "Theme Framework Introduction")
    - [Quick Start Guide](https://docs.gravityforms.com/quick-start-guide/ "Quick Start Guide")
    - [Core Concepts](https://docs.gravityforms.com/theme-framework/ "Core Concepts")
    - [CSS API](https://docs.gravityforms.com/css-api/ "CSS API")
    - [Theme Layers](https://docs.gravityforms.com/theme-layers/ "Theme Layers")
    - [Theme Framework Frequently Asked Questions](https://docs.gravityforms.com/theme-framework-faq/ "Theme Framework Frequently Asked Questions")
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Theme Layers Fluent API

- [Introduction](https://docs.gravityforms.com/theme-layers-fluent-api/#h-introduction)
- [Usage](https://docs.gravityforms.com/theme-layers-fluent-api/#h-usage)
- [Settings Reference](https://docs.gravityforms.com/theme-layers-fluent-api/#h-settings-reference)

## Introduction

A Fluent API is a design pattern that simplifies complex operations by chaining method calls in a readable, step-by-step sequence. It allows developers to build and configure objects or execute commands in a more natural, procedural flow.

## Usage

To use the Fluent Theme Layer API, instantiate a new `Theme_Layer_Builder` within `functions.php`, `plugin`, or `mu-plugin file`, and finish by calling `register()`. The underlying Framework will connect all the dots and enable all the features the Theme Layer needs.

For instance, a Theme Layer implementing _every single possible engine_ is condensed to fewer than 20 lines of code (not counting the code that creates the variables we pass to the methods):

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | `$layer``=``new``Theme_Layer_Builder();`<br>`$layer``->set_name(``'conversational_forms'``)`<br>```->set_short_title(``'Conversational Forms'``)`<br>```->set_icon(``'gform-icon--user'``)`<br>```->set_settings_fields(``$settings_fields``() )`<br>```->set_block_settings(``$block_settings``() )`<br>```->set_overidden_fields(``$overriden_fields``() )`<br>```->set_form_css_properties(``$css_properties``)`<br>```->set_styles(``$styles``)`<br>```->set_scripts(``$scripts``)`<br>```->register();` |

## Settings Reference

| Setting |  | Description |  |
| --- | --- | --- | --- |
| **set\_name()** | [string](https://docs.gravityforms.com/string) | Sets the name. |  |
| **set\_short\_title()** | [string](https://docs.gravityforms.com/string) | It is used to define the human-readable name of the Theme Layer. This is used throughout the system, from the title of the Settings page for the Theme Layer, to displaying in a list of active Theme Layers. |  |
| **set\_icon()** | [string](https://docs.gravityforms.com/string) | is used to define the icon to display in the Form Settings navigation. Should be one of our registered Gravity Forms icons. |  |
| **set\_settings\_fields()** | [array](https://docs.gravityforms.com/array) | Takes an array, the structure of which should follow the typical pattern for registering Form Settings fields. The array should be an array of Settings Groups, each of which has an element for description (the title of the Settings Group), as well as fields, which should be an array of Field Definition arrays, as outlined in our Settings Framework. |  |
| **set\_block\_settings()** | [array](https://docs.gravityforms.com/array) | takes an array argument. The array should be a series of key/value pairs, where the key is the machine-readable name of the settings field, and the value is an array representing the attributes of this field. Since these wind up being mapped to React components, the attributes passed need to match the props the component uses. |  |
| **set\_overidden\_fields()** | [array](https://docs.gravityforms.com/array) | Takes an Array argument. The array should be a series of key/value pairs, where the key is the field or form being overridden, and the value is the classname of the View class (more on that later) that handles the overriding. |  |
| **set\_form\_css\_properties()** | callable | Takes a _callable_ argument. This is because the CSS Properties (generally) need access to the saved Settings or Block Settings fields, which are passed to the callable argument passed to the method. This allows Theme Layers to output CSS Properties based on the settings a user has defined on the Theme Layer’s Form Settings page, allowing for Theme Layers which site owners can adapt without having to write any code. |  |
| **set\_styles()** | callable | Takes a callable argument. This is because often different things will need to be enqueued based on various settings the user has defined. By using a callable argument, the defined callback receives the form object, settings, and block settings as arguments, allowing the developer to act on these values when returning the styles to enqueue. |  |
| **set\_scripts()** | callable | Works exactly like set\_styles(), but enqueues JS files instead of CSS. |  |
| **register()** | _none_ | is the final method that should be called when using the Fluent API. When it is called, the system compiles all of the information passed to the Fluent Layer and activates it as an active Theme Layer on the site. Calling any methods after this one will not have an effect. |  |

##### **Examples**

###### `set_settings_fields()`

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20 | `// An example of registering some settings fields.`<br>`array``(`<br>```array``(`<br>```// translators: %1 is an opening <a> tag, and %2 is a closing </a> tag.`<br>```'description'``=>``'Conversational Forms'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'enable'``,`<br>```'label'``=>``'Enable Conversational Forms'``,`<br>```'type'``=>``'toggle'``,`<br>```),`<br>```array``(`<br>```'name'``=>``'form_full_screen_slug'``,`<br>```'label'``=>``'Conversational Forms Permalink'``,`<br>```'type'``=>``'text'``,`<br>```'input_prefix'``=> site_url(),`<br>```),`<br>```),`<br>```),`<br>`);` |

###### `set_block_settings()`

We currently only support the built-in WordPress components.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10 | `// An example of registering a Block Settings text input.`<br>`array``(`<br>```'input_border_radius'``=>``array``(`<br>```'type'``=>``'string'``,`<br>```'default'``=>``''``,`<br>```'section'``=>``'advanced'``,`<br>```'label'``=>``'Input Border Radius'``,`<br>```'controlType'``=>``'text'``,`<br>```)`<br>`);` |

###### `set_overridden()`

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `// An example of registering an override to the entire Form, as well as any Text inputs`<br>`array``(`<br>```'form'``=> Form_View::``class``,`<br>```'text'``=> Text_View::``class``,`<br>`);` |

###### `set_form_css_properties()`

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14 | `// An example of a callback used to parse the form and block settings and return the CSS properties to display.`<br>`public``function``form_css_properties(``$form_id``,``$settings``,``$block_settings``) {`<br>```$border_radius``= null;`<br>```if``( isset(``$settings``[``'input_border_radius'``] ) ) {`<br>```$border_radius``=``$settings``[``'input_border_radius'``];`<br>```}`<br>```if``( isset(``$block_settings``[``'input_border_radius'``] ) ) {`<br>```$border_radius``=``$block_settings``[``'input_border_radius'``];`<br>```}`<br>```return``array``(`<br>```'gf-color-primary'``=> isset(``$settings``[``'primary_color'``] ) ?``$settings``[``'primary_color'``] : null,`<br>```'gf-ctrl-border-radius'``=>``$border_radius``,`<br>```);`<br>`}` |

This will result in the following CSS block being output for the form:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `gform_form_{form_id} {`<br>```--gf-color-primary:``#ccc``, // the value from $settings[``'primary_color'``]`<br>```--gf-ctrl-``border-radius``:``20px``, // the value from $border_radius`<br>`}` |

###### `set_styles()`

The final array returned should be a series of arrays, each of which provides the various arguments passed to `wp_enqueue_script()`.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25 | `// An example of enqueueing some stylesheets based on whether the 'enable' setting is active.`<br>`public function get_styles( $form, $ajax, $settings ) {`<br>```if ( ! isset( $settings['enable'] ) || ! $settings['enable'] ) {`<br>```return array();`<br>```}`<br>```$base_url = \GFCommon::get_base_url();`<br>```return array(`<br>```array(`<br>```'gravity_forms_theme_reset',`<br>```"$base_url/assets/css/dist/gravity-forms-theme-reset.css",`<br>```),`<br>```array(`<br>```'gravity_forms_skeleton_theme',`<br>```"$base_url/assets/css/dist/gravity-forms-skeleton-theme.css",`<br>```),`<br>```array(`<br>```'gravity_forms_orbital_theme',`<br>```"$base_url/assets/css/dist/gravity-forms-orbital-theme.css",`<br>```),`<br>```array(`<br>```'gravity_forms_conversational_theme',`<br>```plugin_dir_url( __FILE__ ) . '../../../assets/css/dist/theme.css',`<br>```),`<br>```);`<br>`}` |

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-layers-fluent-api/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)