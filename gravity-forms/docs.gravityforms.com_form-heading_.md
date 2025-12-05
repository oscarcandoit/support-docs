---
url: "https://docs.gravityforms.com/form-heading/"
title: "Form Heading CSS Selectors - Gravity Forms Documentation"
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
    - [CSS Selectors](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/)      - [Standard Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/standard-fields-css-selectors/)
      - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/advanced-fields-css-selectors/)
      - [Post Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/post-fields-css-selectors/)
      - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/pricing-fields-css-selectors/)
      - [Form Components](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/form-components/)        - [Save and Continue Link CSS Selectors](https://docs.gravityforms.com/save-and-continue-link-css/ "Save and Continue Link CSS Selectors")
        - [Submit Button CSS Selectors](https://docs.gravityforms.com/submit-button-css-selectors/ "Submit Button CSS Selectors")
        - [Multi-Page Forms CSS Selectors](https://docs.gravityforms.com/multi-page-forms/ "Multi-Page Forms CSS Selectors")
        - [Validation Errors CSS Selectors](https://docs.gravityforms.com/validation-errors/ "Validation Errors CSS Selectors")
        - [Form Confirmation CSS Selectors](https://docs.gravityforms.com/form-confirmation/ "Form Confirmation CSS Selectors")
        - [Form Footer CSS Selectors](https://docs.gravityforms.com/form-footer/ "Form Footer CSS Selectors")
        - [Form Body CSS Selectors](https://docs.gravityforms.com/form-body/ "Form Body CSS Selectors")
        - [Form Heading CSS Selectors](https://docs.gravityforms.com/form-heading/ "Form Heading CSS Selectors")
        - [Form Wrapper CSS Selectors](https://docs.gravityforms.com/form-wrapper/ "Form Wrapper CSS Selectors")
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Form Heading CSS Selectors

- [Container](https://docs.gravityforms.com/form-heading/#h-container)
- [Title](https://docs.gravityforms.com/form-heading/#h-title)
- [Description](https://docs.gravityforms.com/form-heading/#h-description)

## Container

Contains the form title and description

- **example:** the form heading section (div) – applies to all forms




|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_heading {``border``:``1px``solid``red``}` |

- **example**: the form heading section (div) – applies just to form ID #1


|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_heading {``border``:``1px``solid``red``}` |

## Title

- **example:** the form title (h3) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_heading .gform_title {``color``:``red``}` |

**example:** the form title (h3) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_heading .gform_title {``color``:``red``}` |

## Description

- **example:** the form description (span) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_heading .gform_description {``border``:``1px``solid``red``}` |

**example:** the form description (span) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_heading .gform_description {``border``:``1px``solid``red``}` |

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/form-heading/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)