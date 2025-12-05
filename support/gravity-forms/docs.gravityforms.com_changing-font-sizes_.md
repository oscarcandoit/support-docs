---
url: "https://docs.gravityforms.com/changing-font-sizes/"
title: "Example: Changing Font Sizes - Gravity Forms Documentation"
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

# Example: Changing Font Sizes

- [Introduction](https://docs.gravityforms.com/changing-font-sizes/#h-introduction)
- [Entire Form Example](https://docs.gravityforms.com/changing-font-sizes/#h-entire-form-example)
- [Field Headers Example](https://docs.gravityforms.com/changing-font-sizes/#h-field-headers-example)
- [Field Inputs Example](https://docs.gravityforms.com/changing-font-sizes/#h-field-inputs-example)
- [Specific Field Example](https://docs.gravityforms.com/changing-font-sizes/#h-specific-field-example)
- [Placement](https://docs.gravityforms.com/changing-font-sizes/#h-placement)
- [More Info](https://docs.gravityforms.com/changing-font-sizes/#h-more-info)

## Introduction

By default, Gravity Forms will utilize much of your current theme’s stying, but in some cases, you may need to change rules that your theme defines. This article shows a few simple techniques you can try using CSS.

Refer to the article linked here for advice on [where you can add this snippet](https://docs.gravityforms.com/where-to-put-your-custom-css/).

## Entire Form Example

This example would change the font size for all text in the form:

```
body .gform_wrapper .gform_body {
    font-size: 18px;
}
```

## Field Headers Example

The following will change the font size on all field labels on the form:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `body .gform_wrapper .gform_body .gfield_label {`<br>```font-size``:``18px``;`<br>`}` |

## Field Inputs Example

The following will change the font size on all inputs on the form:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `body .gform_wrapper .gform_body input {`<br>```font-size``:``18px``;`<br>`}` |

## Specific Field Example

The following will change the font size on the input of the specific field #1 on the form #6:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `#field_``6``_``1``.gfield input {`<br>```font-size``:``18px``;`<br>`}` |

Alternately, you can target the input directly by it’s ID #input\_6\_1 in the example above.

## Placement

You can add your Custom CSS to the Customizer (Appearance → Customize) or your child theme stylesheet.

See also: [Where to Put your Custom CSS](https://docs.gravityforms.com/where-to-put-your-custom-css/).

## More Info

See [this article](https://docs.gravityforms.com/css-targeting-examples/) for dozens more examples of using CSS to target your form elements.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 20, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/changing-font-sizes/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)