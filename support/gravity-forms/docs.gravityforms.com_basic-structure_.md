---
url: "https://docs.gravityforms.com/basic-structure/"
title: "CSS Element Naming Structure - Gravity Forms Documentation"
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

# CSS Element Naming Structure

- [Element IDs](https://docs.gravityforms.com/basic-structure/#h-element-ids)
- [Configurable Classes](https://docs.gravityforms.com/basic-structure/#h-configurable-classes)
- [Form Wrapper Classes](https://docs.gravityforms.com/basic-structure/#h-form-wrapper-classes)
- [Theme & Markup Classes](https://docs.gravityforms.com/basic-structure/#h-theme-markup-classes)
- [Label Position Classes](https://docs.gravityforms.com/basic-structure/#h-label-position-classes)
- [Field Size Classes](https://docs.gravityforms.com/basic-structure/#h-field-size-classes)
- [Custom Classes](https://docs.gravityforms.com/basic-structure/#h-custom-classes)
- [More Information](https://docs.gravityforms.com/basic-structure/#h-more-information)

Gravity Forms are structured so that every element can be targeted and manipulated via CSS. Most elements share reusable class names to affect styling, and many elements have unique ID’s that you can use to target specific elements within the form. By using [CSS inheritance](http://www.w3.org/TR/CSS21/cascade.html), you can effectively style every element in your form.

## Element IDs

Element ID’s utilize the unique ID of the form or field.

For example:

- **#gform\_wrapper\_xx** where “xx” is the form ID, or
- **#field\_xx\_yyy** where “xx” is the form ID and “yyy” is the field ID.

## Configurable Classes

### Form Wrapper Classes

#### Theme & Markup Classes

There are 2 classes applied to the form wrapper based on whether or not legacy mode is enabled for a form. The class **.gravity-theme** is applied to all forms that do no have legacy mode enabled. The class **.gform\_legacy\_markup\_wrapper** is applied to all forms that have legacy mode enabled.

#### Label Position Classes

There are 3 label classes that are applied to the form wrapper based on the individual form settings, **.top\_label**, **.left\_label** and **.right\_label**.

Other elements change positions, widths, etc. based on inheritance from these label classes.

### Field Size Classes

For many of the individual fields, there are classes of **.small**, **.medium** and **.large** which are defined in the form admin by changing the field size setting.

### Custom Classes

Finally, for most of the fields, the user can define additional class names with the [_Custom CSS Class_](https://docs.gravityforms.com/common-field-settings/#appearance-settings-tab) setting in order to apply additional custom styles or to target elements for other types of manipulation.

## More Information

We’ve put together a help guide and a visual CSS diagram to illustrate the structure of a form and the CSS class relationships [in an article here](https://docs.gravityforms.com/design-overview/).

Additionally, review our [article of CSS targeting examples](https://docs.gravityforms.com/css-targeting-examples/) for an expanded list of elements.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 27, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/basic-structure/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)