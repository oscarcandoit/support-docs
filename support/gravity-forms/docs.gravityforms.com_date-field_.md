---
url: "https://docs.gravityforms.com/date-field/"
title: "Date Field CSS Selectors - Gravity Forms Documentation"
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
      - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/advanced-fields-css-selectors/)        - [File Upload Field CSS Selectors](https://docs.gravityforms.com/file-upload-field/ "File Upload Field CSS Selectors")
        - [Email Field CSS Selectors](https://docs.gravityforms.com/email-field/ "Email Field CSS Selectors")
        - [Website Field CSS Selectors](https://docs.gravityforms.com/website-field/ "Website Field CSS Selectors")
        - [Address Field CSS Selectors](https://docs.gravityforms.com/address-field-2/ "Address Field CSS Selectors")
        - [Name Fields CSS Selectors](https://docs.gravityforms.com/name-fields/ "Name Fields CSS Selectors")
        - [List Field CSS Selectors](https://docs.gravityforms.com/list-field/ "List Field CSS Selectors")
        - [CAPTCHA Field CSS Selectors](https://docs.gravityforms.com/captcha-field/ "CAPTCHA Field CSS Selectors")
        - [Time Field CSS Selectors](https://docs.gravityforms.com/time-field/ "Time Field CSS Selectors")
        - [Date Field CSS Selectors](https://docs.gravityforms.com/date-field/ "Date Field CSS Selectors")
        - [Consent Field CSS Selectors](https://docs.gravityforms.com/consent-field-css-selectors/ "Consent Field CSS Selectors")
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

# Date Field CSS Selectors

- [Date Picker Input Type](https://docs.gravityforms.com/date-field/#h-date-picker-input-type)
- [Input Field](https://docs.gravityforms.com/date-field/#h-input-field)
- [Icon Image](https://docs.gravityforms.com/date-field/#h-icon-image)
- [Date Field Input Type](https://docs.gravityforms.com/date-field/#h-date-field-input-type)
- [Month](https://docs.gravityforms.com/date-field/#h-month)
- [Container](https://docs.gravityforms.com/date-field/#h-container)
- [Input Field](https://docs.gravityforms.com/date-field/#h-input-field-1)
- [Sub-Label](https://docs.gravityforms.com/date-field/#h-sub-label)
- [Day](https://docs.gravityforms.com/date-field/#h-day)
- [Container](https://docs.gravityforms.com/date-field/#h-container-1)
- [Input Field](https://docs.gravityforms.com/date-field/#h-input-field-2)
- [Sub-Label](https://docs.gravityforms.com/date-field/#h-sub-label-1)
- [Year](https://docs.gravityforms.com/date-field/#h-year)
- [Container](https://docs.gravityforms.com/date-field/#h-container-2)
- [Input Field](https://docs.gravityforms.com/date-field/#h-input-field-3)
- [Sub-Label](https://docs.gravityforms.com/date-field/#h-sub-label-2)

## Date Picker Input Type

### Input Field

- **example:** date – input field (input) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .datepicker {``border``:``1px``solid``red``}` |

**example:** date – input field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .datepicker {``border``:``1px``solid``red``}` |

**example:** date – input field (input) – applies just to specific date field input (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .datepicker {``border``:``1px``solid``red``}` |

### Icon Image

- **example:** date – icon image (img) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_input_datepicker_icon {``border``:``1px``solid``red``}` |

**example:** date – icon image (img) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_input_datepicker_icon {``border``:``1px``solid``red``}` |

**example:** date – icon image (img) – applies just to specific date field input (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_input_datepicker_icon {``border``:``1px``solid``red``}` |

## Date Field Input Type

### Month

#### Container

Contains the month input field and sub-label

- **example:** date – month container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month {``border``:``1px``solid``red``}` |

**example:** date – month container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_month {``border``:``1px``solid``red``}` |

**example:** date – month container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month {``border``:``1px``solid``red``}` |

#### Input Field

- **example:** date – month input field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month input {``border``:``1px``solid``red``}` |

**example:** date – month input field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_month input {``border``:``1px``solid``red``}` |

**example:** date – month input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month input {``border``:``1px``solid``red``}` |

#### Sub-Label

- **example:** date – month sub-label (label) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month label {``color``:``red``}` |

**example:** date – month sub-label (label) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_month label {``color``:``red``}` |

**example:** date – month sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month label {``color``:``red``}` |

### Day

#### Container

Contains the day input field and sub-label

- **example:** date – day container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day {``border``:``1px``solid``red``}` |

**example:** date – day container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_day {``border``:``1px``solid``red``}` |

**example:** date – day container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day {``border``:``1px``solid``red``}` |

#### Input Field

- **example:** date – day input field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day input {``border``:``1px``solid``red``}` |

**example:** date – day input field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_day input {``border``:``1px``solid``red``}` |

**example:** date – day input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day input {``border``:``1px``solid``red``}` |

#### Sub-Label

- **example:** date – day sub-label (label) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day label {``color``:``red``}` |

**example:** date – sub-label (label) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_day label {``color``:``red``}` |

**example:** date – sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day label {``color``:``red``}` |

### Year

#### Container

Contains the month input field and sub-label

- **example:** date – year container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year {``border``:``1px``solid``red``}` |

**example:** date – year container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_year {``border``:``1px``solid``red``}` |

**example:** date – year container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year {``border``:``1px``solid``red``}` |

#### Input Field

- **example:** date – year input field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year input {``border``:``1px``solid``red``}` |

**example:** date – year input field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_year input {``border``:``1px``solid``red``}` |

**example:** date – year input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year input {``border``:``1px``solid``red``}` |

#### Sub-Label

- **example:** date – year sub-label (label) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year label {``color``:``red``}` |

**example:** date – year sub-label (label) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_date_year label {``color``:``red``}` |

**example:** date – year sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year label {``color``:``red``}` |

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/date-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)