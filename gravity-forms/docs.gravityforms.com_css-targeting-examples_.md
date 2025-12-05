---
url: "https://docs.gravityforms.com/css-targeting-examples/"
title: "CSS Targeting Examples - Gravity Forms Documentation"
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

# CSS Targeting Examples

- [Introduction](https://docs.gravityforms.com/css-targeting-examples/#h-introduction)
- [Version Specificity](https://docs.gravityforms.com/css-targeting-examples/#h-version-specificity)
- [Form Wrapper](https://docs.gravityforms.com/css-targeting-examples/#h-form-wrapper)
- [Form Header](https://docs.gravityforms.com/css-targeting-examples/#h-form-header)
- [Form Heading](https://docs.gravityforms.com/css-targeting-examples/#h-form-heading)
- [Form Title](https://docs.gravityforms.com/css-targeting-examples/#h-form-title)
- [Form Description](https://docs.gravityforms.com/css-targeting-examples/#h-form-description)
- [Form Body](https://docs.gravityforms.com/css-targeting-examples/#h-form-body)
- [Form Body](https://docs.gravityforms.com/css-targeting-examples/#h-form-body-1)
- [Form Container](https://docs.gravityforms.com/css-targeting-examples/#h-form-container)
- [Form Items](https://docs.gravityforms.com/css-targeting-examples/#h-form-items)
- [Input Field Container](https://docs.gravityforms.com/css-targeting-examples/#h-input-field-container)
- [Input Field Description Container](https://docs.gravityforms.com/css-targeting-examples/#h-input-field-description-container)
- [Standard Field Label](https://docs.gravityforms.com/css-targeting-examples/#h-standard-field-label)
- [Required Field Indicator (Asterisk)](https://docs.gravityforms.com/css-targeting-examples/#h-required-field-indicator-asterisk)
- [Standard Fields](https://docs.gravityforms.com/css-targeting-examples/#h-standard-fields)
- [Text Field](https://docs.gravityforms.com/css-targeting-examples/#h-text-field)
- [Drop-Down (Select) Field](https://docs.gravityforms.com/css-targeting-examples/#h-drop-down-select-field)
- [Paragraph (Textarea) Field](https://docs.gravityforms.com/css-targeting-examples/#h-paragraph-textarea-field)
- [Multiple-Choice (Radio) List](https://docs.gravityforms.com/css-targeting-examples/#h-multiple-choice-radio-list)
- [Multiple-Choice (Radio) List Items](https://docs.gravityforms.com/css-targeting-examples/#h-multiple-choice-radio-list-items)
- [Multiple-Choice (Radio) Inputs](https://docs.gravityforms.com/css-targeting-examples/#h-multiple-choice-radio-inputs)
- [Checkbox List](https://docs.gravityforms.com/css-targeting-examples/#h-checkbox-list)
- [Checkbox List Items](https://docs.gravityforms.com/css-targeting-examples/#h-checkbox-list-items)
- [Checkbox Inputs](https://docs.gravityforms.com/css-targeting-examples/#h-checkbox-inputs)
- [Advanced Fields](https://docs.gravityforms.com/css-targeting-examples/#h-advanced-fields)
- [Advanced Field (multi-field) Container](https://docs.gravityforms.com/css-targeting-examples/#h-advanced-field-multi-field-container)
- [Advanced Field – Left Container](https://docs.gravityforms.com/css-targeting-examples/#h-advanced-field-left-container)
- [Sub-Label: Advanced Field – Left Container](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-advanced-field-left-container)
- [Advanced Field – Right Container](https://docs.gravityforms.com/css-targeting-examples/#h-advanced-field-right-container)
- [Sub-Label: Advanced Field – Right Container](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-advanced-field-right-container)
- [Advanced Fields – Full Container](https://docs.gravityforms.com/css-targeting-examples/#h-advanced-fields-full-container)
- [Sub-Label: Advanced Field – Full Container](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-advanced-field-full-container)
- [Time – Hours Container](https://docs.gravityforms.com/css-targeting-examples/#h-time-hours-container)
- [Time – Hours Input Field](https://docs.gravityforms.com/css-targeting-examples/#h-time-hours-input-field)
- [Sub-Label: Time – Hours](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-time-hours)
- [Time – Minutes Container](https://docs.gravityforms.com/css-targeting-examples/#h-time-minutes-container)
- [Time – Minutes Input Field](https://docs.gravityforms.com/css-targeting-examples/#h-time-minutes-input-field)
- [Sub-Label: Time – Minutes](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-time-minutes)
- [Time – AM/PM Container](https://docs.gravityforms.com/css-targeting-examples/#h-time-am-pm-container)
- [Time – AM/PM Selector](https://docs.gravityforms.com/css-targeting-examples/#h-time-am-pm-selector)
- [Date – Input Field (Datepicker Option)](https://docs.gravityforms.com/css-targeting-examples/#h-date-input-field-datepicker-option)
- [Date – Icon Image (Datepicker Option)](https://docs.gravityforms.com/css-targeting-examples/#h-date-icon-image-datepicker-option)
- [Date – Month Container](https://docs.gravityforms.com/css-targeting-examples/#h-date-month-container)
- [Date – Month Input Field](https://docs.gravityforms.com/css-targeting-examples/#h-date-month-input-field)
- [Sub-Label: Date – Month](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-date-month)
- [Date – Day Container](https://docs.gravityforms.com/css-targeting-examples/#h-date-day-container)
- [Date – Day Field Input](https://docs.gravityforms.com/css-targeting-examples/#h-date-day-field-input)
- [Sub-Label: Date – Day](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-date-day)
- [Date – Year Container](https://docs.gravityforms.com/css-targeting-examples/#h-date-year-container)
- [Date – Year Input Field](https://docs.gravityforms.com/css-targeting-examples/#h-date-year-input-field)
- [Sub-Label: Date – Year](https://docs.gravityforms.com/css-targeting-examples/#h-sub-label-date-year)
- [HTML 5 Fields](https://docs.gravityforms.com/css-targeting-examples/#h-html-5-fields)
- [Email Input Field (HTML 5 Option)](https://docs.gravityforms.com/css-targeting-examples/#h-email-input-field-html-5-option)
- [Telephone Input Field (HTML 5 Option)](https://docs.gravityforms.com/css-targeting-examples/#h-telephone-input-field-html-5-option)
- [Website Input Field (HTML 5 Option)](https://docs.gravityforms.com/css-targeting-examples/#h-website-input-field-html-5-option)
- [Section Breaks](https://docs.gravityforms.com/css-targeting-examples/#h-section-breaks)
- [Section Break Container](https://docs.gravityforms.com/css-targeting-examples/#h-section-break-container)
- [Section Break Title](https://docs.gravityforms.com/css-targeting-examples/#h-section-break-title)
- [Section Break Description](https://docs.gravityforms.com/css-targeting-examples/#h-section-break-description)
- [Captcha Fields](https://docs.gravityforms.com/css-targeting-examples/#h-captcha-fields)
- [ReCaptcha Container](https://docs.gravityforms.com/css-targeting-examples/#h-recaptcha-container)
- [Captcha Container (Really Simple Captcha Option)](https://docs.gravityforms.com/css-targeting-examples/#h-captcha-container-really-simple-captcha-option)
- [Captcha Image (Really Simple Captcha Option)](https://docs.gravityforms.com/css-targeting-examples/#h-captcha-image-really-simple-captcha-option)
- [Captcha Input Field (Really Simple Captcha Option)](https://docs.gravityforms.com/css-targeting-examples/#h-captcha-input-field-really-simple-captcha-option)
- [Form Footer](https://docs.gravityforms.com/css-targeting-examples/#h-form-footer)
- [Form Footer](https://docs.gravityforms.com/css-targeting-examples/#h-form-footer-1)
- [Submit Button](https://docs.gravityforms.com/css-targeting-examples/#h-submit-button)
- [Submit Button (image)](https://docs.gravityforms.com/css-targeting-examples/#h-submit-button-image)
- [Form Confirmation](https://docs.gravityforms.com/css-targeting-examples/#h-form-confirmation)
- [Inline Confirmation Message](https://docs.gravityforms.com/css-targeting-examples/#h-inline-confirmation-message)
- [Validation Errors](https://docs.gravityforms.com/css-targeting-examples/#h-validation-errors)
- [Validation Error Message](https://docs.gravityforms.com/css-targeting-examples/#h-validation-error-message)
- [Validation – Error Container](https://docs.gravityforms.com/css-targeting-examples/#h-validation-error-container)
- [Validation – Error Description Message](https://docs.gravityforms.com/css-targeting-examples/#h-validation-error-description-message)
- [Multi-Page Form Fields](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-fields)
- [Multi-Page Form Progress Bar Container](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-progress-bar-container)
- [Multi-Page Form Progress Bar Title](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-progress-bar-title)
- [Multi-Page Form Progress Bar](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-progress-bar)
- [Multi-Page Form Progress Bar – Percentage Completed](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-progress-bar-percentage-completed)
- [Multi-Page Form Steps Container](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-steps-container)
- [Multi-Page Form Step](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-step)
- [Multi-Page Form Active Step](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-active-step)
- [Multi-Page Form Page](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-page)
- [Multi-Page Form Footer](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-footer)
- [Multi-Page Form – Next Button](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-next-button)
- [Multi-Page Form – Previous Button](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-previous-button)
- [Multi-Page Form – Submit Button](https://docs.gravityforms.com/css-targeting-examples/#h-multi-page-form-submit-button)
- [List Fields](https://docs.gravityforms.com/css-targeting-examples/#h-list-fields)
- [List Field Container](https://docs.gravityforms.com/css-targeting-examples/#h-list-field-container)
- [List Field](https://docs.gravityforms.com/css-targeting-examples/#h-list-field)
- [List Field Table Headers](https://docs.gravityforms.com/css-targeting-examples/#h-list-field-table-headers)
- [List Field Table Rows](https://docs.gravityforms.com/css-targeting-examples/#h-list-field-table-rows)
- [List Field Table Cells](https://docs.gravityforms.com/css-targeting-examples/#h-list-field-table-cells)

## Introduction

This article shows usage examples for targeting Gravity Forms elements.

Generally, we illustrate one example that would be generic for all forms, and then one (or two) that would be specific to a unique form ID. If you’re styling a specific form, you would simply view your source, find the form ID and replace the ID in my examples with your own.

You’ll note that these examples are more specific (ie: longer) than what you might need to accomplish the styling, but better CSS specificity makes overriding inherited theme styles much easier.

## Version Specificity

These examples have been updated to reflect the changes to markup made in **Gravity Forms 2.5**. Where an example would be different in different version, it is marked in the text:

- “ **_legacy markup_**” — targeting for Gravity Forms versions prior to 2.5, or forms with the [_enable legacy markup_](https://docs.gravityforms.com/form-settings/#form-options) setting turned on.
- “ _standard markup” —_ targeting needed for forms created under Gravity Forms 2.5 and later, or older forms with the [_enable legacy markup_](https://docs.gravityforms.com/form-settings/#form-options) setting turned off.

## Form Wrapper

Contains the entire Gravity Form

- **example:** the main form wrapper (div) – applies to all forms


```
body .gform_wrapper { border: 1px solid red }
```

- **example:** the main form wrapper (div) – applies just to form ID


```
body #gform_wrapper_1 { border: 1px solid red }
```


The following classes are applied to the form wrapper based on whether or not legacy mode is enabled for a form.

- **example:** the main form wrapper (div) – applies to all standard markup forms


```
body .gform_wrapper.gravity-theme { border: 1px solid red }
```

- **example:** the main form wrapper (div) – applies to all forms using legacy markup.


```
body .gform_wrapper.gform_legacy_markup_wrapper { border: 1px solid red }
```


## Form Header

### Form Heading

Contains the form title and description

- **example:** the form heading section (div) – applies to all forms


```
body .gform_wrapper .gform_heading { border: 1px solid red }
```

- **example**: the form heading section (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_heading { border: 1px solid red }
```


### Form Title

- **example:** the form title (h3) – applies to all forms


```
body .gform_wrapper .gform_heading .gform_title { color: red }
```

- **example:** the form title (h3) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_heading .gform_title { color: red }
```


### Form Description

- **example:** the form description (span) – applies to all forms


```
body .gform_wrapper .gform_heading .gform_description { border: 1px solid red }
```

- **example:** the form description (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_heading .gform_description { border: 1px solid red }
```


## Form Body

### Form Body

Contains the main form content

- **example:** the form body section (div) – applies to all forms


```
body .gform_wrapper .gform_body {border: 1px solid red}
```

- **example:** the form body section (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body {border: 1px solid red}
```


### Form Container

Used to structure all of the form elements

- **example:** the form container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields {border: 1px solid red}
```

- **example:** the form container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields {border: 1px solid red}
```


### Form Items

Individual items containing each form element

- **example:** the form item (div \| fieldset) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield {border: 1px solid red}
```

- **example:** the form item (div \| fieldset) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield {border: 1px solid red}
```


### Input Field Container

Wraps the actual form element inside the containing item

- **example:** input field container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_container {border: 1px solid red}
```

- **example:** input field container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_container {border: 1px solid red}
```

- **example:** input field container (div) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .ginput_container {border: 1px solid red}
```


### Input Field Description Container

Contains the field description inside the containing list item

- **example:** input field description container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_description {border: 1px solid red}
```

- **example:** input field description container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_description {border: 1px solid red}
```

- **example:** input field description container (div) – applies just to specific field description (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .gfield_description {border: 1px solid red}
```


### Standard Field Label

- **example:** standard field label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_label {color: red}
```

- **example:** standard field label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_label {color: red}
```

- **example:** standard field label (label) – applies just to specific field label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .gfield_label {color: red}
```


### Required Field Indicator (Asterisk)

- **example:** required field indicator (span) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_label .gfield_required {color: red}
```

- **example:** required field indicator (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_label .gfield_required {color: red}
```

- **example:** required field indicator (span) – applies just to specific indicator (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gfield .gfield_label .gfield_required {color: red}
```


## Standard Fields

### Text Field

- **example:** standard text field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield input[type=text] {border: 1px solid red}
```

- **example:** standard text field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield input[type=text] {border: 1px solid red}
```

- **example:** standard text field (input) – applies just to specific text field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield input[type=text] {border: 1px solid red}
```


### Drop-Down (Select) Field

- **example:** standard drop-down field (select) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield select {border: 1px solid red}
```

- **example:** standard drop-down field (select) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield select {border: 1px solid red}
```

- **example:** standard drop-down field (select) – applies just to specific drop-down field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield select {border: 1px solid red}
```


### Paragraph (Textarea) Field

- **example:** standard paragraph field (textarea) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield textarea {border: 1px solid red}
```

- **example:** standard paragraph field (textarea) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield textarea {border: 1px solid red}
```

- **example:** standard paragraph field (textarea) – applies just to specific paragraph field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield textarea {border: 1px solid red}
```


### Multiple-Choice (Radio) List

Used to structure all of the individual list choices

- **example:** standard multiple-choice list (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_radio {border: 1px solid red}
```

- **example:** standard multiple-choice list (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_radio {border: 1px solid red}
```

- **example:** standard multiple-choice list (div) – applies just to specific multiple-choice list (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_radio {border: 1px solid red}
```


### Multiple-Choice (Radio) List Items

Individual list choices

- **example:** standard multiple-choice list item (div) – applies to all standard markup forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_radio .gchoice {border: 1px solid red}
```

- **legacy example:** standard multiple-choice list item (li) – applies to all forms using legacy markup.


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_radio li {border: 1px solid red}
```

- **example:** standard multiple-choice list item (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_radio .gchoice {border: 1px solid red}
```

- **example:** standard multiple-choice list item (div) – applies just to specific multiple-choice list item (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_radio .gchoice {border: 1px solid red}
```


### Multiple-Choice (Radio) Inputs

- **example:** standard multiple-choice input (radio) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_radio input[type=radio] {border: 1px solid red}
```

- **example:** standard checkbox input (radio) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_radio input[type=radio] {border: 1px solid red}
```

- **example:** standard checkbox input (radio) – applies just to specific multiple-choice inputs (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_radio input[type=radio] {border: 1px solid red}
```


### Checkbox List

Used to structure all of the individual list choices

- **example:** standard checkbox list (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_checkbox {border: 1px solid red}
```

- **example:** standard checkbox list (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_checkbox {border: 1px solid red}
```

- **example:** standard checkbox list (div) – applies just to specific checkbox list (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_checkbox {border: 1px solid red}
```


### Checkbox List Items

Individual list choices

- **example:** standard checkbox list item (div) – applies to all standard markup forms

```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_checkbox .gchoice {border: 1px solid red}
```

- **legacy example:** standard checkbox list item (li) – applies to all forms using legacy markup.

```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_checkbox li {border: 1px solid red}
```

- **example:** standard checkbox list item (div) – applies just to form ID #1

```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_checkbox .gchoice {border: 1px solid red}
```

- **example:** standard checkbox list item (div) – applies just to specific checkbox list item (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_checkbox .gchoice {border: 1px solid red}
```


### Checkbox Inputs

- **example:** standard checkbox input (checkbox) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_checkbox input[type=checkbox] {border: 1px solid red}
```

- **example:** standard checkbox input (checkbox) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_checkbox input[type=checkbox] {border: 1px solid red}
```

- **example:** standard checkbox input (checkbox) – applies just to specific checkbox list inputs (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_checkbox input[type=checkbox] {border: 1px solid red}
```


## Advanced Fields

### Advanced Field (multi-field) Container

Wraps the different fields in multi-field sections like the name fields, address fields, etc.\*

- **example:** advanced field container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex {border: 1px solid red}
```

- **example:** advanced field container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex {border: 1px solid red}
```

- **example:** advanced field container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex {border: 1px solid red}
```


### Advanced Field – Left Container

Contains the left-positioned inputs and sub-labels in the advanced fields

- **example:** advanced field – left container (span) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_left {border: 1px solid red}
```

- **example:** advanced field – left container (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_left {border: 1px solid red}
```

- **example:** advanced field – left container (span) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_left {border: 1px solid red}
```


### Sub-Label: Advanced Field – Left Container

The sub-label beneath the left-positioned elements in the advanced fields

- **example:** advanced field – left container sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_left label {color: red}
```

- **example:** advanced field – left container sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_left label {color: red}
```

- **example:** advanced field – left container sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_left label {color: red}
```


### Advanced Field – Right Container

Contains the right-positioned inputs and sub-labels in the advanced fields

- **example:** advanced field – right container (span) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_right {border: 1px solid red}
```

- **example:** advanced field – right container (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_right {border: 1px solid red}
```

- **example:** advanced field – right container (span) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_right {border: 1px solid red}
```


### Sub-Label: Advanced Field – Right Container

The sub-label beneath the right-positioned elements in the advanced fields

- **example:** advanced field – right container sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_right label {color: red}
```

- **example:** advanced field – right container sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_right label {color: red}
```

- **example:** advanced field – right container sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_right label {color: red}
```


### Advanced Fields – Full Container

Contains the full width inputs and sub-labels in the advanced fields

- **example:** advanced field – full container (span) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_full {border: 1px solid red}
```

- **example:** advanced field – full container (span) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_full {border: 1px solid red}
```

- **example:** advanced field – full container (span) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_full {border: 1px solid red}
```


### Sub-Label: Advanced Field – Full Container

The sub-label beneath the full width elements in the advanced fields

- **example:** advanced field – full container sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_complex .ginput_full label {color: red}
```

- **example:** advanced field – full container sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_complex .ginput_full label {color: red}
```

- **example:** advanced field – full container sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_complex .ginput_full label {color: red}
```


### Time – Hours Container

Contains the hours input field and sub-label

- **example:** time – hours container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_hour {border: 1px solid red}
```

- **example:** time – hours container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_hour {border: 1px solid red}
```

- **example:** time – hours container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_hour {border: 1px solid red}
```


### Time – Hours Input Field

- **example:** time – hours input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_hour input {border: 1px solid red}
```

- **example:** time – hours input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_hour input {border: 1px solid red}
```

- **example:** time – hours input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_hour input {border: 1px solid red}
```


### Sub-Label: Time – Hours

- **example:** time – hours sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_hour label {color: red}
```

- **example:** time – hours sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_hour label {color: red}
```

- **example:** time – hours sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_hour label {color: red}
```


### Time – Minutes Container

Contains the minutes input field and sub-label

- **example:** time – minutes container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_minute {border: 1px solid red}
```

- **example:** time – minutes container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_minute {border: 1px solid red}
```

- **example:** time – minutes container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_minute {border: 1px solid red}
```


### Time – Minutes Input Field

- **example:** time – minutes input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_minute input {border: 1px solid red}
```

- **example:** time – minutes input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_minute input {border: 1px solid red}
```

- **example:** tim – minutes input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_minute input {border: 1px solid red}
```


### Sub-Label: Time – Minutes

- **example:** time – minutes sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_minute label {color: red}
```

- **example:** time – minutes sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_minute label {color: red}
```

- **example:** time – minutes sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_minute label {color: red}
```


### Time – AM/PM Container

Contains the minutes input field and sub-label

- **example:** time – AM/PM container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_ampm {border: 1px solid red}
```

- **example:** time – AM/PM container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_ampm {border: 1px solid red}
```

- **example:** time – AM/PM container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_ampm {border: 1px solid red}
```


### Time – AM/PM Selector

- **example:** time – AM/PM selector (select) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_time_ampm select {border: 1px solid red}
```

- **example:** time – AM/PM selector (select) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_time_ampm select {border: 1px solid red}
```

- **example:** time – AM/PM selector (select) – applies just to specific drop-down field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_time_ampm select {border: 1px solid red}
```


### Date – Input Field (Datepicker Option)

- **example:** date – input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .datepicker {border: 1px solid red}
```

- **example:** date – input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .datepicker {border: 1px solid red}
```

- **example:** date – input field (input) – applies just to specific date field input (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .datepicker {border: 1px solid red}
```


### Date – Icon Image (Datepicker Option)

- **example:** date – icon image (img) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield img {border: 1px solid red}
```

- **example:** date – icon image (img) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield img {border: 1px solid red}
```

- **example:** date – icon image (img) – applies just to specific date field input (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield img {border: 1px solid red}
```


### Date – Month Container

Contains the month input field and sub-label

- **example:** date – month container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month {border: 1px solid red}
```

- **example:** date – month container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_month {border: 1px solid red}
```

- **example:** date – month container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month {border: 1px solid red}
```


### Date – Month Input Field

- **example:** date – month input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month input {border: 1px solid red}
```

- **example:** date – month input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_month input {border: 1px solid red}
```

- **example:** date – month input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month input {border: 1px solid red}
```


### Sub-Label: Date – Month

- **example:** date – month sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_month label {color: red}
```

- **example:** date – month sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_month label {color: red}
```

- **example:** date – month sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_month label {color: red}
```


### Date – Day Container

Contains the day input field and sub-label

- **example:** date – day container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day {border: 1px solid red}
```

- **example:** date – day container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_day {border: 1px solid red}
```

- **example:** date – day container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day {border: 1px solid red}
```


### Date – Day Field Input

- **example:** date – day input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day input {border: 1px solid red}
```

- **example:** date – day input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_day input {border: 1px solid red}
```

- **example:** date – day input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day input {border: 1px solid red}
```


### Sub-Label: Date – Day

- **example:** date – day sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_day label {color: red}
```

- **example:** date – sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_day label {color: red}
```

- **example:** date – sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_day label {color: red}
```


### Date – Year Container

Contains the month input field and sub-label

- **example:** date – year container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year {border: 1px solid red}
```

- **example:** date – year container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_year {border: 1px solid red}
```

- **example:** date – year container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year {border: 1px solid red}
```


### Date – Year Input Field

- **example:** date – year input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year input {border: 1px solid red}
```

- **example:** date – year input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_year input {border: 1px solid red}
```

- **example:** date – year input field (input) – applies just to specific form field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year input {border: 1px solid red}
```


### Sub-Label: Date – Year

- **example:** date – year sub-label (label) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_date_year label {color: red}
```

- **example:** date – year sub-label (label) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_date_year label {color: red}
```

- **example:** date – year sub-label (label) – applies just to specific sub-label (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .gfield_date_year label {color: red}
```


## HTML 5 Fields

### Email Input Field (HTML 5 Option)

- **example:** HTML 5 email field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield input[type=email] {border: 1px solid red}
```

- **example:** HTML 5 email field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield input[type=email] {border: 1px solid red}
```

- **example:** HTML 5 email field (input) – applies just to specific email field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield input[type=email] {border: 1px solid red}
```


### Telephone Input Field (HTML 5 Option)

- **example:** HTML 5 telephone field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield input[type=tel] {border: 1px solid red}
```

- **example:** HTML 5 telephone field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield input[type=tel] {border: 1px solid red}
```

- **example:** HTML 5 telephone field (input) – applies just to specific telephone field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield input[type=tel] {border: 1px solid red}
```


### Website Input Field (HTML 5 Option)

- **example:** HTML 5 website field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield input[type=url] {border: 1px solid red}
```

- **example:** HTML 5 website field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield input[type=url] {border: 1px solid red}
```

- **example:** HTML 5 website field (input) – applies just to specific website field (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield input[type=url] {border: 1px solid red}
```


## Section Breaks

### Section Break Container

Wraps the section break elements inside the containing list item

- **example:** section break container (li) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gsection {border: 1px solid red}
```

- **example:** section break container (li) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gsection {border: 1px solid red}
```

- **example:** section break container (li) – applies just to specific section break container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gsection {border: 1px solid red}
```


### Section Break Title

- **example:** section break title (h2) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gsection .gsection_title {color: red}
```

- **example:** section break container (li) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gsection .gsection_title {color: red}
```

- **example:** section break container (li) – applies just to specific section break title (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gsection .gsection_title {color: red}
```


### Section Break Description

- **example:** section break description (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gsection .gsection_description {border: 1px solid red}
```

- **example:** section break description (li) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gsection .gsection_description {border: 1px solid red}
```

- **example:** section break description (li) – applies just to specific section break description (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields  #field_XX_X.gsection .gsection_description {border: 1px solid red}
```


## Captcha Fields

### ReCaptcha Container

Third party markup inserted dynamically – contains the ReCaptcha form fields

- **example:** ReCaptcha container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_recaptcha {border: 1px solid red}
```

- **example:** ReCaptcha container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_recaptcha {border: 1px solid red}
```


### Captcha Container (Really Simple Captcha Option)

Wraps the captcha images and form elements

- **example:** captcha container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container {border: 1px solid red}
```

- **example:** captcha container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_captcha_container {border: 1px solid red}
```


### Captcha Image (Really Simple Captcha Option)

- **example:** captcha image (img) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha {border: 1px solid red}
```

- **example:** captcha image (img) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha {border: 1px solid red}
```


### Captcha Input Field (Really Simple Captcha Option)

- **example:** captcha input field (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha_input_container input {border: 1px solid red}
```

- **example:** captcha input field (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .gfield_captcha_container .gfield_captcha_input_container input {border: 1px solid red}
```


## Form Footer

### Form Footer

Contains the submit button and admin edit link

- **example:** the form footer section (div) – applies to all forms


```
body .gform_wrapper .gform_footer {border: 1px solid red}
```

- **example:** the form footer section (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_footer {border: 1px solid red}
```


### Submit Button

- **example:** the form submit button (input) – applies to all forms


```
body .gform_wrapper .gform_footer input[type=submit] {border: 1px solid red}
```

- **example:** the form submit button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_footer input[type=submit] {border: 1px solid red}
```


### Submit Button (image)

- **example:** the form submit button (image) – applies to all forms


```
body .gform_wrapper .gform_footer input[type=image] {border: 1px solid red}
```

- **example:** the form submit button (image) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_footer input[type=image] {border: 1px solid red}
```


## Form Confirmation

### Inline Confirmation Message

Displays on same page upon successful completion of the form

- **example:** inline confirmation message (div) – applies to all forms


```
body .gform_confirmation_message  {border: 1px solid red}
```


## Validation Errors

### Validation Error Message

- **example:** validation error message (div) – applies to all standard markup forms


```
body .gform_wrapper .gform_validation_error {border: 1px solid red}
```

- **legacy example:** validation error message (div) – applies to all forms using legacy markup.


```
body .gform_wrapper .validation_error {border: 1px solid red}
```

- **example:** validation error message (div) – applies just to form ID #1


```
body #gform_wrapper_1 .validation_error {border: 1px solid red}
```


### Validation – Error Container

Container for fields with invalid values

- **example:** validation – error container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield_error {border: 1px solid red}
```

- **example:** validation – error container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield_error {border: 1px solid red}
```


### Validation – Error Description Message

Description/error message below inputs with invalid values

- **example:** validation – error description message (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield_error .validation_message {border: 1px solid red}
```

- **example:** validation – error description message (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield_error .validation_message {border: 1px solid red}
```


## Multi-Page Form Fields

### Multi-Page Form Progress Bar Container

- **example:** multi-page form progress bar container (div) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper {border: 1px solid red}
```

- **example:** multi-page form progress bar container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper {border: 1px solid red}
```


### Multi-Page Form Progress Bar Title

- **example:** multi-page form progress bar title (h3) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar_title {color: red}
```

- **example:** multi-page form progress bar title (h3) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar_title {color: red}
```


### Multi-Page Form Progress Bar

- **example:** multi-page form progress bar (div) – applies to all forms


```
body .gform_wrapper .gf_progressbar_wrapper .gf_progressbar {border: 1px solid red}
```

- **example:** multi-page form progress bar (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar_wrapper .gf_progressbar {border: 1px solid red}
```


### Multi-Page Form Progress Bar – Percentage Completed

- **example:** multi-page form progress bar – percentage completed (div) – applies to all forms


```
body .gform_wrapper .gf_progressbar .gf_progressbar_percentage {border: 1px solid red}
```

- **example:** multi-page form progress bar – percentage completed (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_progressbar .gf_progressbar_percentage {border: 1px solid red}
```


### Multi-Page Form Steps Container

Contains the user-defined steps text

- **example:** multi-page form steps container (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps {border: 1px solid red}
```

- **example:** multi-page form steps container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps {border: 1px solid red}
```


### Multi-Page Form Step

- **example:** multi-page form step (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps .gf_step {color: red}
```

- **example:** multi-page form step (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps .gf_step {color: red}
```


### Multi-Page Form Active Step

- **example:** multi-page form active step (div) – applies to all forms


```
body .gform_wrapper .gf_page_steps .gf_step_active {color: red}
```

- **example:** multi-page form active step (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gf_page_steps .gf_step_active {color: red}
```


### Multi-Page Form Page

Wraps each “paged” set of fields

- **example:** multi-page form page (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page {border: 1px solid red}
```

- **example:** multi-page form page (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page {border: 1px solid red}
```


### Multi-Page Form Footer

Contains previous and next paging buttons

- **example:** multi-page form footer (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer {border: 1px solid red}
```

- **example:** multi-page form footer (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer {border: 1px solid red}
```


### Multi-Page Form – Next Button

- **example:** multi-page form – next button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_next_button {border: 1px solid red}
```

- **example:** multi-page form – next button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_next_button {border: 1px solid red}
```


### Multi-Page Form – Previous Button

- **example:** multi-page form – previous button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_previous_button {border: 1px solid red}
```

- **example:** multi-page form – previous button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_previous_button {border: 1px solid red}
```


### Multi-Page Form – Submit Button

- **example:** multi-page form – submit button (input) – applies to all forms


```
body .gform_wrapper .gform_body .gform_page_footer .gform_button {border: 1px solid red}
```

- **example:** multi-page form – submit button (input) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_page_footer .gform_button {border: 1px solid red}
```


## List Fields

### List Field Container

(div) wraps the list field

- **example:** list field container (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list {border: 1px solid red}
```

- **example:** list field container (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list {border: 1px solid red}
```

- **example:** list field container (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_list {border: 1px solid red}
```


### List Field

List field structure that contains the list field inputs

- **example:** list field (div) – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list .gfield_list {border: 1px solid red}
```

- **example:** list field (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list .gfield_list {border: 1px solid red}
```

- **example:** list field (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield .ginput_list .gfield_list {border: 1px solid red}
```


### List Field Table Headers

Targets the individual column headers (labels)

- **example:** column header (div) – applies to all standard markup forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list .gfield_list_header {color: red}
```


- **legacy example:** column header (th) – applies to all forms using legacy markup.


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list table.gfield_list thead th {color: red}
```

- **example:** column header (div) – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list .gfield_list_header {color:red}
```

- **example:** column header (div) – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield ginput_list .gfield_list_header {color: red}
```


### List Field Table Rows

Targets the individual HTML table rows – useful for specifying sizes or creating alternating-color row styles

- **example:** odd-numbered row – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_row_odd {border: 1px solid red}
```

- **example:** odd-numbered row – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_row_odd {border: 1px solid red}
```

- **example:** odd-numbered row – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield ginput_list .gfield_list .gfield_list_row_odd {border: 1px solid red}
```

- **example:** even-numbered row – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_row_even {border: 1px solid red}
```

- **example:** even-numbered row – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_row_even {border: 1px solid red}
```

- **example:** even-numbered row – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield ginput_list .gfield_list .gfield_list_row_even {border: 1px solid red}
```


### List Field Table Cells

Targets the list field cells

- **example:** list cell – applies to all forms


```
body .gform_wrapper .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_cell {border: 1px solid red}
```

- **example:** list cell – applies just to form ID #1


```
body #gform_wrapper_1 .gform_body .gform_fields .gfield .ginput_list .gfield_list .gfield_list_cell {border: 1px solid red}
```

- **example:** list cell – applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)


```
body .gform_wrapper .gform_body .gform_fields #field_XX_X.gfield ginput_list .gfield_list .gfield_list_cell {border: 1px solid red}
```


- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/css-targeting-examples/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)