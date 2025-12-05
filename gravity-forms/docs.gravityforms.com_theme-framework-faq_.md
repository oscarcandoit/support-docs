---
url: "https://docs.gravityforms.com/theme-framework-faq/"
title: "Theme Framework Frequently Asked Questions - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)
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

# Theme Framework Frequently Asked Questions

- [Applying block style settings to an add-on custom field](https://docs.gravityforms.com/theme-framework-faq/#h-applying-block-style-settings-to-an-add-on-custom-field)
- [Adding a block style setting to the Gravity Forms block](https://docs.gravityforms.com/theme-framework-faq/#h-adding-a-block-style-setting-to-the-gravity-forms-block)
- [Customizing existing Gravity Forms block style settings](https://docs.gravityforms.com/theme-framework-faq/#h-customizing-existing-gravity-forms-block-style-settings)
- [Adding my own form theme wrapper class](https://docs.gravityforms.com/theme-framework-faq/#h-adding-my-own-form-theme-wrapper-class)
- [Using the Theme Framework’s custom properties in a theme](https://docs.gravityforms.com/theme-framework-faq/#h-using-the-theme-framework-s-custom-properties-in-a-theme)
- [How To Create a New Form Theme](https://docs.gravityforms.com/theme-framework-faq/#h-how-to-create-a-new-form-theme)
- [Enqueuing different stylesheets for different form themes in an add-on](https://docs.gravityforms.com/theme-framework-faq/#h-enqueuing-different-stylesheets-for-different-form-themes-in-an-add-on)
- [Writing different styles for different form themes](https://docs.gravityforms.com/theme-framework-faq/#h-writing-different-styles-for-different-form-themes)
- [Adding Custom Properties To An add-on field](https://docs.gravityforms.com/theme-framework-faq/#h-adding-custom-properties-to-an-add-on-field)

## Applying block style settings to an add-on custom field

Here are four steps you can follow to ensure your field honors block style settings:

1. Make sure your field markup has the necessary [utility classes](https://docs.gravityforms.com/theme-framework/#utility-classes), especially `gform-field-label` and `gform-field-description`.
2. Make sure your CSS makes use of the correct [form wrapper classes](https://docs.gravityforms.com/theme-framework/#h-theme-wrapper-classes).  You might want to apply the same styles no matter what theme the form is using, or you might want to write different styles for the Legacy Theme, Gravity Forms 2.5 Theme, and Orbital Theme.
3. If you are writing different styles for different themes, you can either include them all in one stylesheet that is enqueued for all forms, or create different stylesheets that are enqueued conditionally based on the form theme. See the recipe for enqueueing styles below.
4. After adding utility classes, if your field still has elements that need styles, you can write your own styles that use Theme Framework custom properties.

Example of field markup with utility classes:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `<``div``id``=``"field_1_1"``class``=``"gfield gfield--type-text field_sublabel_below gfield--has-description field_description_below gfield_visibility_visible"``>`<br>```<``label``class``=``"gfield_label gform-field-label"``for``=``"input_1_1"``>Message</``label``>`<br>```<``div``class``=``"ginput_container ginput_container_text"``>`<br>```<``input``name``=``"input_1"``id``=``"input_1_1"``type``=``"text"``value``=``""``class``=``"large"``aria-describedby``=``"gfield_description_1_1"``aria-invalid``=``"false"``>`<br>```</``div``>`<br>```<``div``class``=``"gfield_description"``id``=``"gfield_description_182_1"``>Please enter your message here.</``div``>`<br>`</``div``>` |

Example of using the Theme Framework custom properties in your CSS:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `.my-form-element {`<br>```color``: var(--gf-ctrl-label-color-primary);`<br>```font-size``: var(--gf-ctrl-label-font-size-primary);`<br>`}` |

## Adding a block style setting to the Gravity Forms block

You cannot add your own block style settings, although this is something we are considering adding in the future. You can suggest this feature directly to our product management team for consideration when planning future releases on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea) product roadmap page.

## Customizing existing Gravity Forms block style settings

While you cannot add options to the existing block style settings, you can change the effects of existing settings in one of two ways:

By overriding custom properties in your own theme via CSS. This will be most helpful when overriding a specific form’s styles:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `#gform_wrapper_{ form_id }[data-form-index=``"0"``].gform-theme .my-form-element {`<br>```--gf-color-primary:``#9b51e0``;`<br>```--gf-ctrl-``border-color``:``#0693e3``;`<br>```--gf-ctrl-``size``:``18px``;`<br>```--gf-ctrl-label-color-primary:``#9b51e0``;`<br>```--gf-ctrl-btn-``size``:``18px``;`<br>`}` |

Or by using the filter [`gform_default_styles`](https://docs.gravityforms.com/gform_default_styles/) to customize the global CSS API properties. This will be most helpful when you want to specify a default set of styles for all of your forms.

## Adding my own form theme wrapper class

You can use the filter [gform\_get\_form\_filter](https://docs.gravityforms.com/gform_get_form_filter/) to alter the form wrapper class. We may add a more direct way to add a class in the future.

## Using the Theme Framework’s custom properties in a theme

To see the custom properties added by the Theme Framework, check out the `gravity-forms-theme-framework.css` stylesheet and look for the CSS custom properties that are prefixed with `--gf-`. You can leverage any of those properties like so:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `.my-form-element {`<br>```color``: var(--gf-ctrl-label-color-primary);`<br>```font-size``: var(--gf-ctrl-label-font-size-primary);`<br>`}` |

## How To Create a New Form Theme

You cannot currently register a form theme. This is a feature we hope to add in the future. For now, you can create your own form styles by:

1. Using the `gform_default_styles` filter to create styles that will be used by default on all forms.
2. Loading a CSS file. You can use the `gform_enqueue_scripts` action to enqueue your own custom styles.

Site-wide form theme rules can be set by declaring Gravity Forms CSS variable values using the selectors:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `head:has(#gravity_forms_theme_framework-css) + body .gform-theme--framework.gform-theme,`<br>`head:has(#gravity_forms_theme_framework-css) + body [data-parent-form] {`<br>`...`<br>`}` |

## Enqueuing different stylesheets for different form themes in an add-on

Set the following properties and methods within your add-on class which extends `GFAddOn`.

1. Set `$_enable_theme_layer` to true.

|     |     |
| --- | --- |
| 1 | `protected``$_enable_theme_layer``= true;` |

2. Use the `styles()` function to enqueue the styles

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25 | `// Enqueue the styles for the Gravity Forms 2.5 Theme`<br>`public``function``styles() {`<br>```$styles``=``array``(`<br>```array``(`<br>```'handle'``=>``'my_addon_editor_css'``,`<br>```'src'``=>``"my_addon/css/my_addon_form_editor.css"``,`<br>```'version'``=>``$this``->_version,`<br>```'enqueue'``=>``array``(`<br>```array``(``'admin_page'``=>``array``(``'form_editor'``) ),`<br>```)`<br>```),`<br>```array``(`<br>```'handle'``=>``'my_addon_css'``,`<br>```'src'``=>``"my_addon/css/my_addon.css"``,`<br>```'version'``=>``$this``->_version,`<br>```'enqueue'``=>``array``(`<br>```array``(``'field_types'``=>``array``(``'my_field'``) ),`<br>```array``(``'admin_page'``=>``array``(``'form_editor'``,``'results'``,``'entry_view'``,``'entry_detail'``) ),`<br>```)`<br>```),`<br>```);`<br>```return``array_merge``( parent::styles(),``$styles``);`<br>```}` |

3. Enqueue the theme layer styles

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18 | `public``function``theme_layer_styles(``$form``,``$ajax``,``$settings``,``$block_settings``=``array``() ) {`<br>```$theme_slug``= GFFormDisplay::get_form_theme_slug(``$form``);`<br>```if``(``$theme_slug``!==``'orbital'``) {`<br>```return``array``();`<br>```}`<br>```$base_url``= plugins_url(``''``,``__FILE__``);`<br>```return``array``(`<br>```'foundation'``=>``array``(`<br>```array``(``'my_addon_theme_foundation'``,``"$base_url/assets/css/dist/theme-foundation.css"``),`<br>```),`<br>```'framework'``=>``array``(`<br>```array``(``'my_addon_theme_framework'``,``"$base_url/assets/css/dist/theme-framework.css"``),`<br>```),`<br>```);`<br>`}` |

## Writing different styles for different form themes

Each form theme has a unique [form wrapper class](https://docs.gravityforms.com/theme-framework/#h-theme-wrapper-classes) that can be used to scope styles to that theme.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24 | `/* All Themes */`<br>`.gform_wrapper .my-form-element {`<br>```...`<br>`}`<br>`/* Legacy Theme (pre 2.5) */`<br>`.gform_legacy_markup_wrapper .my-form-element {`<br>```...`<br>`}`<br>`/* Gravity Forms 2.5 Theme (2.5+) */`<br>`.gform_theme .my-form-element {`<br>```...`<br>`}`<br>`/* Theme Framework – All Themes Built with the Framework (2.7+) */`<br>`.gform-theme .my-form-element {`<br>```...`<br>`}`<br>`/* Orbital Theme (2.7+) */`<br>`.gform-theme--orbital .my-form-element {`<br>```...`<br>`}` |

## Adding Custom Properties To An add-on field

If you want other theme developers to be able to style parts of your fields just like they can with Gravity Forms fields, you can extend the CSS API:

1. Create your own global custom properties. These custom properties might use Gravity Forms core custom properties as their default values.
2. If you are working with an external JavaScript API that creates your field, such as a payment gateway, many APIs provide a method to configure field styles.  Every API works differently, but you can look at our Stripe, Square, and PayPal add-ons to see examples of how we have been able to pass custom properties to these APIs.

Example of how to create your own global custom properties:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `/* This extends the Theme Framework by adding your add-on specific global CSS API properties */`<br>`.gform-theme--framework {`<br>```--gf-myaddon-element-``color``: var(--gf-ctrl-label-color-primary);`<br>```--gf-myaddon-element-``font-family``: var(--gf-ctrl-label-font-family-primary);`<br>```--gf-myaddon-element-``font-size``: var(--gf-ctrl-label-font-size-primary);`<br>```--gf-myaddon-element-``font-style``: var(--gf-ctrl-label-font-style-primary);`<br>```--gf-myaddon-element-``font-weight``: var(--gf-ctrl-label-font-weight-primary);`<br>```--gf-myaddon-element-``letter-spacing``: var(--gf-ctrl-label-letter-spacing-primary);`<br>```--gf-myaddon-element-``line-height``: var(--gf-ctrl-label-line-height-primary);`<br>`}`<br>`/* This uses your add-on specific CSS API properties as defined above on your element */`<br>`.my-form-element {`<br>```color``: var(--gf-myaddon-element-color);`<br>```font-family``: var(--gf-myaddon-element-font-family);`<br>```font-size``: var(--gf-myaddon-element-font-size);`<br>```font-style``: var(--gf-myaddon-element-font-style);`<br>```font-weight``: var(--gf-myaddon-element-font-weight);`<br>```letter-spacing``: var(--gf-myaddon-element-letter-spacing);`<br>```line-height``: var(--gf-myaddon-element-line-height);`<br>`}` |

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 14, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-framework-faq/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)