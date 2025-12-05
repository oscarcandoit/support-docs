---
url: "https://docs.gravityforms.com/single-line-text-field/"
title: "Single Line Text Field CSS Selectors - Gravity Forms Documentation"
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

# Single Line Text Field CSS Selectors

- [Container](https://docs.gravityforms.com/single-line-text-field/#h-container)
- [Input](https://docs.gravityforms.com/single-line-text-field/#h-input)
- [Maximum Characters Counter](https://docs.gravityforms.com/single-line-text-field/#h-maximum-characters-counter)

## Container

- **example:** single line text field container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_text {``border``:``1px``solid``red``}` |

**example:** single line text field container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_text {``border``:``1px``solid``red``}` |

**example:** single line text field container (div) – applies just to specific indicator (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .ginput_container_text {``border``:``1px``solid``red``}` |

## Input

- **example:** standard text field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_text input[type=text] {``border``:``1px``solid``red``}` |

**example:** standard text field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_text input[type=text] {``border``:``1px``solid``red``}` |

**example:** standard text field (input) – applies just to specific text field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_container_text input[type=text] {``border``:``1px``solid``red``}` |

## Maximum Characters Counter

- **example:** standard text field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_text .charleft {``border``:``1px``solid``red``}` |

**example:** standard text field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_text .charleft {``border``:``1px``solid``red``}` |

**example:** standard text field (input) – applies just to specific text field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_container_text .charleft {``border``:``1px``solid``red``}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 7, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/single-line-text-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)