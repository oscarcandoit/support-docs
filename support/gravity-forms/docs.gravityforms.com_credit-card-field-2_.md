---
url: "https://docs.gravityforms.com/credit-card-field-2/"
title: "Credit Card Field CSS Selectors - Gravity Forms Documentation"
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
      - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/pricing-fields-css-selectors/)        - [Total Field CSS Selectors](https://docs.gravityforms.com/total-field/ "Total Field CSS Selectors")
        - [Shipping Field CSS Selectors](https://docs.gravityforms.com/shipping-field/ "Shipping Field CSS Selectors")
        - [Option Field CSS Selectors](https://docs.gravityforms.com/option-field/ "Option Field CSS Selectors")
        - [Quantity Field CSS Selectors](https://docs.gravityforms.com/quantity-field/ "Quantity Field CSS Selectors")
        - [Product Field CSS Selectors](https://docs.gravityforms.com/product-field/ "Product Field CSS Selectors")
        - [Credit Card Field CSS Selectors](https://docs.gravityforms.com/credit-card-field-2/ "Credit Card Field CSS Selectors")
      - [Form Components](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/form-components/)
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Credit Card Field CSS Selectors

- [Container](https://docs.gravityforms.com/credit-card-field-2/#h-container)
- [Card Icons](https://docs.gravityforms.com/credit-card-field-2/#h-card-icons)
- [Container](https://docs.gravityforms.com/credit-card-field-2/#h-container-1)
- [American Express](https://docs.gravityforms.com/credit-card-field-2/#h-american-express)
- [Discover](https://docs.gravityforms.com/credit-card-field-2/#h-discover)
- [Mastercard](https://docs.gravityforms.com/credit-card-field-2/#h-mastercard)
- [Visa](https://docs.gravityforms.com/credit-card-field-2/#h-visa)
- [Card Number Input](https://docs.gravityforms.com/credit-card-field-2/#h-card-number-input)
- [Expiration](https://docs.gravityforms.com/credit-card-field-2/#h-expiration)
- [Month](https://docs.gravityforms.com/credit-card-field-2/#h-month)
- [Year](https://docs.gravityforms.com/credit-card-field-2/#h-year)
- [Security Code](https://docs.gravityforms.com/credit-card-field-2/#h-security-code)
- [Container](https://docs.gravityforms.com/credit-card-field-2/#h-container-2)
- [Input](https://docs.gravityforms.com/credit-card-field-2/#h-input)
- [Icon](https://docs.gravityforms.com/credit-card-field-2/#h-icon)

## Container

example: credit card field container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard {``border``:``1px``solid``red``;}` |

example: credit card field container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard {``border``:``1px``solid``red``;}` |

example: credit card field container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard {``border``:``1px``solid``red``;}` |

## Card Icons

### Container

example: card icon container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .gform_card_icon_container {``border``:``1px``solid``red``;}` |

### American Express

example: card icon container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_amex {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_amex {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .gform_card_icon_container  .gform_card_icon_amex {``border``:``1px``solid``red``;}` |

### Discover

example: card icon container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_discover {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_discover {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .gform_card_icon_container  .gform_card_icon_discover {``border``:``1px``solid``red``;}` |

### Mastercard

example: card icon container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_mastercard {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_mastercard {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .gform_card_icon_container  .gform_card_icon_mastercard {``border``:``1px``solid``red``;}` |

### Visa

example: card icon container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_visa {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .gform_card_icon_container .gform_card_icon_visa {``border``:``1px``solid``red``;}` |

example: card icon container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .gform_card_icon_container  .gform_card_icon_visa {``border``:``1px``solid``red``;}` |

## Card Number Input

example: card icon container (input) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_full input {``border``:``1px``solid``red``;}` |

example: card icon container (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_full input {``border``:``1px``solid``red``;}` |

example: card icon container (input) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_full  input {``border``:``1px``solid``red``;}` |

## Expiration

example: card expiration container (span) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container {``border``:``1px``solid``red``;}` |

example: card expiration container (span) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container {``border``:``1px``solid``red``;}` |

example: card expiration container (span) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_expiration_container  {``border``:``1px``solid``red``;}` |

### Month

example: card expiration month (select) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_month {``border``:``1px``solid``red``;}` |

example: card expiration month (select) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_month {``border``:``1px``solid``red``;}` |

example: card expiration month (select) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_month {``border``:``1px``solid``red``;}` |

### Year

example: card expiration month (select) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_year {``border``:``1px``solid``red``;}` |

example: card expiration month (select) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_year {``border``:``1px``solid``red``;}` |

example: card expiration month (select) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_expiration_container .ginput_card_expiration_year {``border``:``1px``solid``red``;}` |

## Security Code

### Container

example: card security code container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right {``border``:``1px``solid``red``;}` |

example: card security code container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right {``border``:``1px``solid``red``;}` |

example: card security code container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_cardinfo_right {``border``:``1px``solid``red``;}` |

### Input

example: card security code input (input) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code {``border``:``1px``solid``red``;}` |

example: card security code input (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code {``border``:``1px``solid``red``;}` |

example: card security code input (input) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code {``border``:``1px``solid``red``;}` |

### Icon

example: card security code image (span) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code_icon {``border``:``1px``solid``red``;}` |

example: card security code image (span) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields .gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code_icon {``border``:``1px``solid``red``;}` |

example: card security code image (span) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper_``1``.gform_body .gform_fields #field_XX_X.gfield .ginput_container_creditcard .ginput_cardinfo_right .ginput_card_security_code_icon {``border``:``1px``solid``red``;}` |

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/credit-card-field-2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)