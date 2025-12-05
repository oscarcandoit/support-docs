---
url: "https://docs.gravityforms.com/form-body/"
title: "Form Body CSS Selectors - Gravity Forms Documentation"
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

# Form Body CSS Selectors

- [Container](https://docs.gravityforms.com/form-body/#h-container)
- [Field List](https://docs.gravityforms.com/form-body/#h-field-list)
- [Container](https://docs.gravityforms.com/form-body/#h-container-0)
- [List Items](https://docs.gravityforms.com/form-body/#h-list-items)
- [Field Inputs](https://docs.gravityforms.com/form-body/#h-field-inputs)
- [Input Container](https://docs.gravityforms.com/form-body/#h-input-container)
- [Description Container](https://docs.gravityforms.com/form-body/#h-description-container)
- [Required Field Indicator](https://docs.gravityforms.com/form-body/#h-required-field-indicator)

## Container

Contains the main form content

- **example:** the form body section (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body  {``border``:``1px``solid``red``}` |

**example:** the form body section (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body {``border``:``1px``solid``red``}` |

## Field List

### Container

unordered list used to structure all of the form elements

- **example:** the form list container (ul) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields {``border``:``1px``solid``red``}` |

**example:** the form list container (ul) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields {``border``:``1px``solid``red``}` |

### List Items

Individual list items containing each form element

- **example:** the form list item (li) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield {``border``:``1px``solid``red``}` |

**example:** the form list item (li) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield {``border``:``1px``solid``red``}` |

## Field Inputs

### Input Container

Wraps the actual form element inside the containing list item

- **example:** input field container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container {``border``:``1px``solid``red``}` |

**example:** input field container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container {``border``:``1px``solid``red``}` |

**example:** input field container (div) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .ginput_container {``border``:``1px``solid``red``}` |

### Description Container

Contains the field description inside the containing list item

- **example:** input field description container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_description {``border``:``1px``solid``red``}` |

**example:** input field description container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_description {``border``:``1px``solid``red``}` |

**example:** input field description container (div) – applies just to specific field description (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .gfield_description {``border``:``1px``solid``red``}` |

## Required Field Indicator

- **example:** required field indicator (span) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_label .gfield_required {``color``:``red``}` |

**example:** required field indicator (span) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_label .gfield_required {``color``:``red``}` |

**example:** required field indicator (span) – applies just to specific indicator (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .gfield_label .gfield_required {``color``:``red``}` |

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 11, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/form-body/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)