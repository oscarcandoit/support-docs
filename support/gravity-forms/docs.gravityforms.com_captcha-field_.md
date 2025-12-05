---
url: "https://docs.gravityforms.com/captcha-field/"
title: "CAPTCHA Field CSS Selectors - Gravity Forms Documentation"
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

# CAPTCHA Field CSS Selectors

- [reCAPTCHA](https://docs.gravityforms.com/captcha-field/#h-recaptcha)
- [Container](https://docs.gravityforms.com/captcha-field/#h-container)
- [Really Simple CAPTCHA](https://docs.gravityforms.com/captcha-field/#h-really-simple-captcha)
- [Container](https://docs.gravityforms.com/captcha-field/#h-container-1)
- [Image](https://docs.gravityforms.com/captcha-field/#h-image)
- [Input Field](https://docs.gravityforms.com/captcha-field/#h-input-field)

## reCAPTCHA

### Container

Third party markup inserted dynamically – contains the ReCaptcha form fields

- **example:** ReCaptcha container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .recaptcha_widget_div .recaptcha_area {``border``:``1px``solid``red``}` |

**example:** ReCaptcha container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .recaptcha_widget_div .recaptcha_area {``border``:``1px``solid``red``}` |

## Really Simple CAPTCHA

### Container

Wraps the captcha images and form elements

- **example:** captcha container (div) – applies to all forms

|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container {``border``:``1px``solid``red``}` |

**example:** captcha container (div) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_captcha_container {``border``:``1px``solid``red``}` |

### Image

- **example:** captcha image (img) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha {``border``:``1px``solid``red``}` |

**example:** captcha image (img) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha {``border``:``1px``solid``red``}` |

### Input Field

- **example:** captcha input field (input) – applies to all forms


|     |     |
| --- | --- |
| 1 | `body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha_input_container input {``border``:``1px``solid``red``}` |

**example:** captcha input field (input) – applies just to form ID #1

|     |     |
| --- | --- |
| 1 | `body #gform_wrapper_``1``.gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha_input_container input {``border``:``1px``solid``red``}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/captcha-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)