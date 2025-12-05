---
url: "https://docs.gravityforms.com/drop-down-field/"
title: "Drop Down Field CSS Selectors - Gravity Forms Documentation"
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
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)    - [Basics](https://docs.gravityforms.com/category/user-guides/design-and-layout/basics/)
    - [CSS Selectors](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/)      - [Standard Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/standard-fields-css-selectors/)        - [HTML Field CSS Selectors](https://docs.gravityforms.com/html-field/ "HTML Field CSS Selectors")
        - [Number Field CSS Selectors](https://docs.gravityforms.com/number-field/ "Number Field CSS Selectors")
        - [Multi Select Field CSS Selectors](https://docs.gravityforms.com/multi-select-field/ "Multi Select Field CSS Selectors")
        - [Paragraph Text Field CSS Selectors](https://docs.gravityforms.com/paragraph-text-field-2/ "Paragraph Text Field CSS Selectors")
        - [Section Break CSS Selectors](https://docs.gravityforms.com/section-break-css/ "Section Break CSS Selectors")
        - [Checkboxes Field CSS Selectors](https://docs.gravityforms.com/checkboxes-field/ "Checkboxes Field CSS Selectors")
        - [Radio Buttons Field CSS Selectors](https://docs.gravityforms.com/radio-buttons-field/ "Radio Buttons Field CSS Selectors")
        - [Paragraph Text Field CSS Selectors](https://docs.gravityforms.com/paragraph-text-field/ "Paragraph Text Field CSS Selectors")
        - [Single Line Text Field CSS Selectors](https://docs.gravityforms.com/single-line-text-field/ "Single Line Text Field CSS Selectors")
        - [Drop Down Field CSS Selectors](https://docs.gravityforms.com/drop-down-field/ "Drop Down Field CSS Selectors")
      - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/advanced-fields-css-selectors/)
      - [Post Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/post-fields-css-selectors/)
      - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/pricing-fields-css-selectors/)
      - [Form Components](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/form-components/)
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Drop Down Field CSS Selectors

- [Container](https://docs.gravityforms.com/drop-down-field/#h-container)
- [Select Box](https://docs.gravityforms.com/drop-down-field/#h-select-box)
- [Items](https://docs.gravityforms.com/drop-down-field/#h-items)

If you’ve enabled the Enhanced UI option, you will need to target “.chosen-container” CSS class rather than “.ginput\_container\_select” in the selectors below.

## Container

example: standard drop-down container (div) – applies to all forms

```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_select {border: 1px solid red}
```

example: standard drop-down container (div) – applies just to form ID #1

```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_container_select {border: 1px solid red}
```

example: standard drop-down container (div) – applies just to specific drop-down field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_container_select {border: 1px solid red}
```

## Select Box

Select is an element generated by the browser not by Gravity Forms, for this reason they may look slightly different depending on the browser, device, and OS used. For the same reason, you may not be able to fully customize them easily only with CSS as you can do with other elements of the form.

example: standard drop-down field (select) – applies to all forms

```
body .gform_wrapper .gform_body .gform_fields .gfield select {border: 1px solid red}
```

example: standard drop-down field (select) – applies just to form ID #1

```
body #gform_wrapper_1 .gform_body .gform_fields .gfield select {border: 1px solid red}
```

example: standard drop-down field (select) – applies just to specific drop-down field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield select {border: 1px solid red}
```

## Items

Select items are elements generated by the browser not by Gravity Forms, for this reason they may look slightly different depending on the browser, device, and OS used. For the same reason, you may not be able to fully customize them easily only with CSS as you can do with other elements of the form.

example: standard drop-down item (option) – applies to all forms

```
body .gform_wrapper .gform_body .gform_fields .gfield select option {color: red}
```

example: standard drop-down item (option) – applies just to form ID #1

```
body #gform_wrapper_1 .gform_body .gform_fields .gfield select option {color:red}
```

example: standard drop-down item (option) – applies just to specific drop-down field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield select option {color: red}
```

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/drop-down-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)