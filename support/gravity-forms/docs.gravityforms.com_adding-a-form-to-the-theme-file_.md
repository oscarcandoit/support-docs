---
url: "https://docs.gravityforms.com/adding-a-form-to-the-theme-file/"
title: "Integrate Forms via Theme & Hooks - Gravity Guide"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)  - [First Steps](https://docs.gravityforms.com/category/getting-started/first-steps/)
  - [Creating A Form](https://docs.gravityforms.com/category/getting-started/creating-a-form/)
  - [Adding A Form To Your Site](https://docs.gravityforms.com/category/getting-started/add-form-to-site/)    - [Adding a Form Using the Gravity Forms Block](https://docs.gravityforms.com/adding-a-form-using-block/ "Adding a Form Using the Gravity Forms Block")
    - [Adding a form using the Embed Form flyout](https://docs.gravityforms.com/embed-form-flyout/ "Adding a form using the Embed Form flyout")
    - [Adding a Form Using a Theme File or Hooks](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/ "Adding a Form Using a Theme File or Hooks")
    - [Adding a Form Using the Classic Editor](https://docs.gravityforms.com/adding-a-form-using-classic-editor/ "Adding a Form Using the Classic Editor")
    - [Creating a Form Shortcode](https://docs.gravityforms.com/gravity-forms-form-shortcode/ "Creating a Form Shortcode")
    - [Embedding One Form Multiple Times per Page](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/ "Embedding One Form Multiple Times per Page")
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Adding a Form Using a Theme File or Hooks

- [Summary](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-summary)
- [Function Call](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-function-call)
- [Usage Examples](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-usage-examples)
- [Basic Function Call](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-basic-function-call)
- [With Ajax & Tabindex](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-with-ajax-amp-tabindex)
- [Using the Form Title instead of ID](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-using-the-form-title-instead-of-id)
- [Pass a variable for Dynamic Population](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-pass-a-variable-for-dynamic-population)
- [Enqueue Scripts and Styles](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/#h-enqueue-scripts-and-styles)

## Summary

In this article, we show how to use the Gravity Forms function call embedding method that would allow you to add a form to a page or post using a theme file or third-party hooks.

## Function Call

If you would like to call a form from within a WordPress theme file, you may do so using a function call. The function and its available parameters are outlined below.

|     |
| --- |
| `gravity_form(``$id_or_title``,``$display_title``= true,``$display_description``= true,``$display_inactive``= false,``$field_values``= null,``$ajax``= false,``$tabindex``= 0,``$echo``= true,``$form_theme``= null,``$style_settings``= null );` |

- **$id\_or\_title**


( _mixed_) ( _required_) The id or title of the form to be embedded.
- **$display\_title**


( _boolean_) (optional) Whether or not to display the form title.


Defaults to _true_.
- **$display\_description**


( _boolean_) (optional) Whether or not to display the form description.


Defaults to _true_.
- **$display\_inactive**


( _boolean_) (optional) Whether or not to display the form even if it is inactive.


Defaults to _false_.
- **$field\_values**


( _array_) (optional) Pass an array of dynamic population parameter keys with their corresponding values to be populated.

_Example:_ “array(‘parameter\_name’ => ‘custom\_value’)”


Defaults to _false_.
- **$ajax**


( _boolean_) (optional) Whether or not to use AJAX for form submission.


Defaults to _false_.
- **$tabindex**

( _integer_) (optional) Specify the starting tab index for the fields of this form. Use `0` to exclude the tabindex attributes from the form markup.
- **$echo**

( _boolean_) (optional) Whether to echo the form code or return it.

Defaults to _true_.
- **$form\_theme**

( _string_) (optional) Specify the form theme to be used.

Defaults to _null_ inheriting from Default Form Theme.
- **$style\_settings**

( _JSON string_) (optional) JSON-encoded style settings. Passing `false` will bypass the `gform_default_styles` filter.

Defaults to _null_.

### Usage Examples

#### **Basic Function Call**

|     |
| --- |
| `gravity_form( 1, false, false, false,``''``, false );` |

This snippet will display the form with an id of ‘1’; the title and description will **not** be displayed, the form itself will not display if it is inactive, and it will not use AJAX for form submission.

#### **With Ajax & Tabindex**

|     |
| --- |
| `gravity_form( 1, false, false, false,``''``, true, 12 );` |

This snippet will display the exact same form as above, except it will use AJAX for form submission and the starting tabindex will be 12.

#### Using the Form Title instead of ID

|     |
| --- |
| `gravity_form(``'Contact Us'``, false, false, false,``''``, false );` |

This snippet will display the form titled ‘Contact Us’; the title and description will **not** be displayed, the form itself will not display if it is inactive, and it will not use AJAX for form submission.

If you use the form title or id for a form that does not exist, the following message will be displayed:

|     |
| --- |
| `Oops! We could not locate your form.` |

#### Pass a variable for Dynamic Population

|     |
| --- |
| `gravity_form( 1, false, false, false,``array``(``'some_field'``=>``$my_variable``), false);` |

This snippet will do the same shown above for Basic Function Call adding the array to pass a variable named $my\_variable that will populate a field that has the parameter name some\_field

## Enqueue Scripts and Styles

When embedding a form via a function call, you must manually include the necessary Gravity Forms-related JavaScript and CSS via the built-in WordPress enqueue capabilities. Gravity Forms does not include these by default when calling a form via a function call, and they are necessary for forms that contain conditional logic or the date picker field.

We strongly recommend you enqueue the scripts rather than including them as hardcoded calls in your theme. Implementing it this way will ensure that Gravity Forms does not include them on the page if they are already present. It is also a good practice only to load these scripts on the front end.

Gravity Forms 1.5 introduced the **[gravity\_form\_enqueue\_scripts](https://docs.gravityforms.com/gravity_form_enqueue_scripts)** function, which allows you to easily enqueue the necessary Gravity Forms’ scripts and styles when manually embedding a form. This is also useful if you are using a GF widget and do not wish for the styles and scripts to be loaded inline.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)