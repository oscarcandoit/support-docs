---
url: "https://docs.gravityforms.com/multi-page-forms/"
title: "Multi-Page Forms CSS Selectors - Gravity Forms Documentation"
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

# Multi-Page Forms CSS Selectors

- [Progress Bar](https://docs.gravityforms.com/multi-page-forms/#h-progress-bar)
- [Container](https://docs.gravityforms.com/multi-page-forms/#h-container)
- [Progress Bar Title](https://docs.gravityforms.com/multi-page-forms/#h-progress-bar-title)
- [Progress Bar](https://docs.gravityforms.com/multi-page-forms/#h-progress-bar-1)
- [Percentage Bar](https://docs.gravityforms.com/multi-page-forms/#h-percentage-bar)
- [Percentage Completed Number](https://docs.gravityforms.com/multi-page-forms/#h-percentage-completed-number)
- [Steps](https://docs.gravityforms.com/multi-page-forms/#h-steps)
- [Container](https://docs.gravityforms.com/multi-page-forms/#h-container-1)
- [All Steps](https://docs.gravityforms.com/multi-page-forms/#h-all-steps)
- [Active Step](https://docs.gravityforms.com/multi-page-forms/#h-active-step)
- [Inactive Step](https://docs.gravityforms.com/multi-page-forms/#h-inactive-step)
- [Page](https://docs.gravityforms.com/multi-page-forms/#h-page)
- [Footer](https://docs.gravityforms.com/multi-page-forms/#h-footer)
- [Buttons](https://docs.gravityforms.com/multi-page-forms/#h-buttons)
- [Next Button](https://docs.gravityforms.com/multi-page-forms/#h-next-button)
- [Previous Button](https://docs.gravityforms.com/multi-page-forms/#h-previous-button)
- [Submit Button](https://docs.gravityforms.com/multi-page-forms/#h-submit-button)

## Progress Bar

### Container

- **example:** multi-page form progress bar container (div) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper {border: 1px solid red}
```

- **example:** multi-page form progress bar container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper {border: 1px solid red}
```


### Progress Bar Title

The progress bar title contains the “Step x of y” text.

- **example:** multi-page form progress bar title (h3) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar_title {color: red}
```

- **example:** multi-page form progress bar title (h3) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar_title {color: red}
```


### Progress Bar

This is the percentage progress bar shown below the above title.

- **example:** multi-page form progress bar (div) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar {border: 1px solid red}
```

- **example:** multi-page form progress bar (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar {border: 1px solid red}
```


### Percentage Bar

- **example:** multi-page form progress bar – percentage bar – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar .gf_progressbar_percentage {border: 1px solid red}
```

- **example:** multi-page form progress bar – percentage bar – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar .gf_progressbar_percentage {border: 1px solid red}
```


### Percentage Completed Number

- **example:** multi-page form progress bar – percentage completed number (span) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar .gf_progressbar_percentage span {border: 1px solid red}
```

- **example:** multi-page form progress bar – percentage completed number (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar .gf_progressbar_percentage span {border: 1px solid red}
```


## Steps

### Container

Contains the user-defined steps text

- **example:** multi-page form steps container (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps {border: 1px solid red}
```

- **example:** multi-page form steps container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps {border: 1px solid red}
```


### All Steps

- **example:** multi-page form step (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps .gf_step {color: red}
```

- **example:** multi-page form step (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps .gf_step {color: red}
```


### Active Step

- **example:** multi-page form active step (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps .gf_step_active {color: red}
```

- **example:** multi-page form active step (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps .gf_step_active {color: red}
```


### Inactive Step

- **example:** multi-page form inactive step (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps .gf_step_pending {color: red}
```

- **example:** multi-page form inactive step (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps .gf_step_pending {color: red}
```


## Page

Wraps each “paged” set of fields

- **example:** multi-page form page (div) – applies to all forms


```
body .gform_wrapper .gform_page {border: 1px solid red}
```

- **example:** multi-page form page (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_page {border: 1px solid red}
```

- **example:** multi-page form page (div) – applies just to page 2 in form ID #1


```
body #gform_wrapper_1 #gform_page_1_2 {border: 1px solid red}
```


## Footer

Contains previous and next paging buttons

- **example:** multi-page form footer (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer {border: 1px solid red}
```

- **example:** multi-page form footer (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer {border: 1px solid red}
```


## Buttons

### Next Button

- **example:** multi-page form – next button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_next_button {border: 1px solid red}
```

- **example:** multi-page form – next button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_next_button {border: 1px solid red}
```

- **example:** multi-page form – next button (input) – applies just to button with ID #1 in form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer #gform_next_button_1_1 {border: 1px solid red}
```


### Previous Button

- **example:** multi-page form – previous button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_previous_button {border: 1px solid red}
```

- **example:** multi-page form – previous button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_previous_button {border: 1px solid red}
```

- **example:** multi-page form – next button (input) – applies just to button with ID #2 in form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer #gform_previous_button_1_2 {border: 1px solid red}
```


### Submit Button

- **example:** multi-page form – submit button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_button {border: 1px solid red}
```

- **example:** multi-page form – submit button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_button {border: 1px solid red}
```


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

[Algolia](https://docs.gravityforms.com/multi-page-forms/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)