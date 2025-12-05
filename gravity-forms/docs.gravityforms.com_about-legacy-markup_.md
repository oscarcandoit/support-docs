---
url: "https://docs.gravityforms.com/about-legacy-markup/"
title: "About Legacy Markup - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)    - [Basics](https://docs.gravityforms.com/category/user-guides/design-and-layout/basics/)      - [How to Display Choices in Columns](https://docs.gravityforms.com/how-to-display-choices-in-columns/ "How to Display Choices in Columns")
      - [List of CSS Ready Classes](https://docs.gravityforms.com/list-of-css-ready-classes/ "List of CSS Ready Classes")
      - [Where to Put Your Custom CSS](https://docs.gravityforms.com/where-to-put-your-custom-css/ "Where to Put Your Custom CSS")
      - [Example: Changing Your Form's Background Color](https://docs.gravityforms.com/changing-forms-background-color/ "Example: Changing Your Form's Background Color")
      - [Example: Changing Font Sizes](https://docs.gravityforms.com/changing-font-sizes/ "Example: Changing Font Sizes")
      - [Modifying Field Layout with CSS Ready Classes](https://docs.gravityforms.com/css-ready-classes/ "Modifying Field Layout with CSS Ready Classes")
      - [CSS Element Naming Structure](https://docs.gravityforms.com/basic-structure/ "CSS Element Naming Structure")
      - [CSS Visual Guide and Design Overview](https://docs.gravityforms.com/design-overview/ "CSS Visual Guide and Design Overview")
      - [Changes to markup in Gravity Forms 2.5](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/ "Changes to markup in Gravity Forms 2.5")
      - [About Legacy Markup](https://docs.gravityforms.com/about-legacy-markup/ "About Legacy Markup")
      - [CSS Targeting Examples](https://docs.gravityforms.com/css-targeting-examples/ "CSS Targeting Examples")
    - [CSS Selectors](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/)
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# About Legacy Markup

- [Definition](https://docs.gravityforms.com/about-legacy-markup/#h-definition)
- [Deprecation Warning](https://docs.gravityforms.com/about-legacy-markup/#h-deprecation-warning)
- [Purpose](https://docs.gravityforms.com/about-legacy-markup/#h-purpose)
- [Legacy Markup Toggle](https://docs.gravityforms.com/about-legacy-markup/#h-legacy-markup-toggle)
- [How To Disable Legacy Markup](https://docs.gravityforms.com/about-legacy-markup/#h-how-to-disable-legacy-markup)
- [Moving Forward](https://docs.gravityforms.com/about-legacy-markup/#h-moving-forward)
- [What Can You Do?](https://docs.gravityforms.com/about-legacy-markup/#h-what-can-you-do)

## Definition

_Legacy markup_ is a term we use to identify the markup code and practices that existed in Gravity Forms before version 2.5 of our core product. Gravity Forms moved to a more modern markup approach in Gravity Forms 2.5, and legacy markup is scheduled for removal.

## Deprecation Warning

⛔ Legacy markup is scheduled to be removed from Gravity Forms with the release of **Gravity Forms 3.1.** When deprecated, the forms will default to standard markup, operating as if the legacy mode setting has been disabled. This transition may introduce issues if your site has existing custom code that depends on the legacy markup structure.

## Purpose

Gravity Forms 2.5 was a significant transition to more modern markup, and we overhauled the existing methods and styles to accommodate many accessibility enhancements, abandon some bad habits we have had for years, and provide us with a more flexible and nimble methodology that can support upcoming features.

The legacy markup Form Setting was automatically enabled for existing forms upon upgrade to Gravity Forms 2.5 or later. It was designed to allow backward compatibility with that release for millions of existing forms. New forms are created with the newer “modern markup” (legacy markup setting disabled), but legacy markup can be enabled for a newly created form if circumstances require it.

Refer to [this summary article](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/) for more information on the markup changes in Gravity Forms 2.5

## Legacy Markup Toggle

The **Legacy Markup** toggle will appear in the **Form → Settings** only when the current form has **Legacy Markup** enabled. _The option will not be shown if the form does not use **Legacy Markup**_. [This article](https://docs.gravityforms.com/form-settings/#h-form-options) shows you where to find the setting.

To make the toggle available, you can:

- [Import a form](https://docs.gravityforms.com/importing-a-form-into-gravity-forms/) that already has Legacy Markup enabled, or
- Enable Legacy Markup programmatically using the [gform\_enable\_legacy\_markup](https://docs.gravityforms.com/gform_enable_legacy_markup/) filter.

A warning is also added to the Legacy Markup Toggle to advise of incompatibility with the Orbital Theme:

[![Image showing the legacy markup toggle enabled.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-53.png)](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-53.png)

## How To Disable Legacy Markup

To disable the legacy markup, use the toggle in the Enable legacy markup section of your **Form → Settings** and in this [article](https://docs.gravityforms.com/form-settings/#h-form-options).

[![Image showing the legacy markup toggle disabled.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-54.png)](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-54.png)

**Note:** If your form uses CSS Ready Classes or another legacy markup style, the Form Editor will show a message at the top when disabling legacy markup.

![Image showing Legacy Markup deprecation notice](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-56.png)

## Moving Forward

Although we recognize and support the need for backward compatibility, it is important to note that this _does not imply forward compatibility_.

**Note:** Legacy markup will **not be updated to support future functionality**. Legacy markup is scheduled to be removed from Gravity Forms with the release of **Gravity Forms 3.1.**

As such, forms continuing to use the legacy markup option will **not** have complete access to new features. Some features will require the newer markup to function. When legacy markup is enabled, you may also be presented with the following admin notice to warn you of this.

![Image showing Legacy Markup warning in the form editor.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-57.png)

For example, the following features cannot be used while the legacy markup mode is set to on.

- The column feature of the Form Editor, where a user can [drag content into columns](https://docs.gravityforms.com/working-with-columns/).
- Some [Submit button settings](https://docs.gravityforms.com/submit-button/) will not function. The [Appearance settings](https://docs.gravityforms.com/submit-button/#h-appearance-settings) of Submit Button Width and Submit Button Location will work in the editor but will not display as expected on the front end
- Conversational Forms created through the [Conversational Forms Add-On](https://docs.gravityforms.com/using-the-conversational-forms-add-on/) do not support Legacy Markup.

## What Can You Do?

We recommend that all new forms use modern markup wherever possible.

We also recommend that any time you need to make a significant update to an existing form that uses legacy markup, evaluate whether legacy markup can be switched off. Do this on a sandbox or test environment. Then, any regular testing you had planned for the form updates can also test the changes made to markup, confirming no negative effects in layout or theme support. Once completed, this ensures the most flexibility and ongoing support for your form.

Please complete this review and update process before the release of Gravity Forms 3.1, when legacy markup will be removed.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 4, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/about-legacy-markup/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)