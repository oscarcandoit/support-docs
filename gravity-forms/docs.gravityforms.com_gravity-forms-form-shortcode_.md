---
url: "https://docs.gravityforms.com/gravity-forms-form-shortcode/"
title: "Creating a Form Shortcode - Gravity Forms Documentation"
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

# Creating a Form Shortcode

- [Summary](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-summary)
- [But I Just Want To Add A Form!](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-but-i-just-want-to-add-a-form)
- [Example Form Shortcode](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-example-form-shortcode)
- [Parameters](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-parameters)
- [Adding a Shortcode Using the Shortcode Block](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-adding-a-shortcode-using-the-shortcode-block)
- [Possible Errors](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-possible-errors)
- [Shortcode Actions](https://docs.gravityforms.com/gravity-forms-form-shortcode/#h-shortcode-actions)

## Summary

WordPress shortcodes allow users to perform certain actions as well as display predefined items within WordPress pages and posts. The Gravity Forms _form shortcode_ is the primary method used to display a Gravity Form on your site.

The form shortcode can be used anywhere within WordPress where shortcodes are supported. For most users, this will primarily be within the content of a WordPress post or page. Shortcodes are added when you use a standard WordPress editor to add the form to the page. [Refer to the next section](https://docs.gravityforms.com/shortcodes/#but-i-just-want-to-add-a-form-) below if you just want further information on adding a form to your site.

## But I Just Want To Add A Form!

The information contained here is not needed to add a form to your site, as the standard Add Form functions contained within the page editor will construct the shortcode for you without any manual editing required. This article is just a handy explainer for those curious as to what these shortcodes mean. If you simply want information on the process of adding a form to your post or page, refer to [this documentation section](https://docs.gravityforms.com/category/user-guides/getting-started/add-form-to-site/).

## Example Form Shortcode

|     |
| --- |
| `[gravityform id="1" title="false" description="false" ajax="true" tabindex="49" field_values="check=First Choice,Second Choice" theme="orbital"]` |

## Parameters

The following parameters can be added to a shortcode. All are optional unless marked otherwise.

| Parameter | Description | Example Usage |
| --- | --- | --- |
| **id** | **Required.** The numeric ID of the form that is to be embedded. For help finding the form ID, refer to [this guide](https://docs.gravityforms.com/how-to-determine-the-form-id/). | `id="1"` |
| **title** | Whether or not to display the form title. Defaults to `true`. | `title="false"` |
| **description** | Whether or not to display the form description. Defaults to `true`. | `description="true"` |
| **ajax** | Specify whether or not to use AJAX to submit the form. | `ajax="true"` |
| **tabindex** | Specify the starting tab index for the fields of this form. Defaults to `0`, which prevents Gravity Forms including the tabindex attributes in the field markup, so the browser will determine the tab order automatically. | `tabindex="4"` |
| **field\_values** | Specify the default field values. See [this article](https://docs.gravityforms.com/using-dynamic-population/) for detailed information on dynamically populating field values. | `field_values="check=First Choice,Second Choice"` |
| **theme** | Specify the theme to be applied to the form by providing the theme slug. <br>Possible values are `orbital` for the Orbital Theme and `gravity` for the Gravity Forms 2.5 Theme. Orbital-themed forms set this way will be styled using the Orbital default style settings, which can be modified using [this filter](https://docs.gravityforms.com/gform_default_styles/). | `theme="orbital"` |

## Adding a Shortcode Using the Shortcode Block

If you are using the block editor and want to add a form using the shortcode (instead of using the [Gravity Forms block](https://docs.gravityforms.com/adding-a-form-using-blocks/)), you can add it using the **Shortcode block**, which is found under the Widgets category.

To do this, follow these steps:

1. [Note the form ID](https://docs.gravityforms.com/how-to-determine-the-form-id/) of the form you wish to insert on the page.
2. Within the new block-based editor, bring up the (+) or “add new block” dialog where you would like to position it on the page.
3. Use the search bar to find the **Shortcode** block and add it. _See screenshot._
4. Insert a valid [Gravity Forms shortcode](https://docs.gravityforms.com/shortcodes/) inside the shortcode block. Don’t forget to add the specific form ID you noted within the _id=X_ argument. _See screenshot._
5. Preview your form, and make sure everything checks out!

[![](https://docs.gravityforms.com/wp-content/uploads/2018/12/2.-Gutenberg-Shortcode-Block-300x164.png)](https://docs.gravityforms.com/wp-content/uploads/2018/12/2.-Gutenberg-Shortcode-Block.png)[![](https://docs.gravityforms.com/wp-content/uploads/2018/12/3.-Inserted-The-Shortcode-300x197.png)](https://docs.gravityforms.com/wp-content/uploads/2018/12/3.-Inserted-The-Shortcode.png)

## Possible Errors

If you use the id for a form that does not exist, the following message will be displayed:

|     |     |
| --- | --- |
| 1 | `Oops! We could not locate your form.` |

## Shortcode Actions

Other plug-ins can extend the abilities of your Gravity Forms shortcode. [Refer to this article](https://docs.gravityforms.com/user-registration-shortcode-actions/) for information on additional shortcode functionality that comes with our official User Registration plugin.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 21, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gravity-forms-form-shortcode/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)