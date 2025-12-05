---
url: "https://docs.gravityforms.com/theme-framework/"
title: "Core Concepts - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)
    - [Theme Framework Introduction](https://docs.gravityforms.com/theme-framework-introduction/ "Theme Framework Introduction")
    - [Quick Start Guide](https://docs.gravityforms.com/quick-start-guide/ "Quick Start Guide")
    - [Core Concepts](https://docs.gravityforms.com/theme-framework/ "Core Concepts")
    - [CSS API](https://docs.gravityforms.com/css-api/ "CSS API")
    - [Theme Layers](https://docs.gravityforms.com/theme-layers/ "Theme Layers")
    - [Theme Framework Frequently Asked Questions](https://docs.gravityforms.com/theme-framework-faq/ "Theme Framework Frequently Asked Questions")
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Core Concepts

- [Introduction](https://docs.gravityforms.com/theme-framework/#h-introduction)
- [Core Concepts](https://docs.gravityforms.com/theme-framework/#h-core-concepts)
- [Theme Framework Layers and Stylesheets](https://docs.gravityforms.com/theme-framework/#h-theme-framework-layers-and-stylesheets)
- [1\. Reset](https://docs.gravityforms.com/theme-framework/#h-1-reset)
- [2\. Foundation](https://docs.gravityforms.com/theme-framework/#h-2-foundation)
- [3\. Theme Framework](https://docs.gravityforms.com/theme-framework/#h-3-theme-framework)
- [File Structure Settings](https://docs.gravityforms.com/theme-framework/#h-file-structure-settings)
- [Theme Wrapper Classes](https://docs.gravityforms.com/theme-framework/#h-theme-wrapper-classes)
- [CSS Logical Properties](https://docs.gravityforms.com/theme-framework/#h-css-logical-properties)
- [CSS API](https://docs.gravityforms.com/theme-framework/#h-css-api)
- [Color System](https://docs.gravityforms.com/theme-framework/#h-color-system)
- [Utility Classes](https://docs.gravityforms.com/theme-framework/#h-utility-classes)
- [Form Theme Framework Exclusion Classes](https://docs.gravityforms.com/theme-framework/#h-form-theme-framework-exclusion-classes)
- [Field Type](https://docs.gravityforms.com/theme-framework/#h-field-type)
- [Field Control Classes](https://docs.gravityforms.com/theme-framework/#h-field-control-classes)
- [Form Label Classes](https://docs.gravityforms.com/theme-framework/#h-form-label-classes)
- [Form Description Classes](https://docs.gravityforms.com/theme-framework/#h-form-description-classes)
- [Form Button Classes](https://docs.gravityforms.com/theme-framework/#h-form-button-classes)
- [Complex Field Layouts](https://docs.gravityforms.com/theme-framework/#h-complex-field-layouts)
- [Gravity Forms NPM packages](https://docs.gravityforms.com/theme-framework/#h-gravity-forms-npm-packages)

## Introduction

This article explores the core concepts and architecture of the [Theme Framework](https://docs.gravityforms.com/?p=37831), a system designed to facilitate the creation and customization of form themes within the Gravity Forms ecosystem.

## Core Concepts

### Theme Framework Layers and Stylesheets

The Theme Framework is based on three layers or stylesheets, which are loaded in order:

#### 1\. Reset

We apply a reset only to elements within the Gravity Forms markup wrapper to ensure a clean base for layering the API. Typographic styles are inherited from the WordPress theme, including headings, paragraphs, links, and other HTML within the form. The `:where(...)` selector manages the reset, with specific exclusions added as needed.

This Reset layer is applied as the first layer when using the Orbital form theme and is required for the Theme Framework.

File: `assets/css/src/theme/framework/gravity-forms-theme-reset.pcss`

#### 2\. Foundation

Foundation is a form theme that is not intended to be used on its own. It provides the basic functional styles required for any form theme, including styles necessary for field functionality, layouts, and field settings. Even when creating a custom theme, the Foundation stylesheet should be included for the form to function properly.

File: `assets/css/src/theme/foundation/gravity-forms-theme-foundation.pcss`

#### 3\. Theme Framework

This layer is the core of the framework. It contains most of the [CSS API](https://docs.gravityforms.com/?p=40740), applies the default Orbital theme and styling elements, and exposes the API with the Orbital theme as the default values.

This layer requires the Reset and Foundation layers to function correctly.

Check out: `assets/css/src/theme/framework/gravity-forms-theme-framework.pcss`

### File Structure Settings

The **Foundation** and **Framework** stylesheets are structured and organized as follows

| Setting | Description |
| --- | --- |
| **api** | Contains the global api (think of it as an abstracted set of custom properties for the form theme; you update these and your form is 80%+ to being customized to your design specs |
| **base** | Contains any base/global level styles (think of it as the html/body of our form) |
| **controls** | contains raw html form controls/element styles (label, input, textarea, select, button, etc.) |
| **fields** | Contains any gform field type styles (address, name, list, etc.) |
| **form** | Contains any form level styles (validation, save & continue, etc.) |
| **layout** | Contains any layout based styles |

### Theme Wrapper Classes

One of the most important concepts to understand about the architecture of the Theme Framework is the requirement to work on a global (all forms), form (anywhere a given form is used), and block (one instance of a form) level.  Since it is possible for multiple forms to appear on the same page, we have to ensure that styles specific to one form do not impact other forms.

This makes theme scoping critical, which is a fancy way to say each form theme’s styles must be scoped to their theme. This is done by ensuring all styles for a theme, of which we currently have three, are scoped to their theme-specific form wrapper class:

- Legacy & Gravity Theme: `.gform-theme--no-framework`
- Legacy Theme (pre 2.5 and available at the form level if you have the legacy markup option enabled): `.gform_legacy_markup_wrapper`
- Gravity Forms 2.5 Theme: `.gravity-theme`
- Theme Framework: `.gform-theme`
- Theme Framework – Foundation Theme (2.7+): .`gform-theme--foundation`
- Theme Framework – Framework Theme (2.7+): `.gform-theme--framework`

### CSS Logical Properties

We are using [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) to provide better and simpler support for languages of all directions. [This article on CSS Tricks](https://css-tricks.com/css-logical-properties-and-values) provides an excellent overview of what they are and how to use them.

### CSS API

The CSS API is a set of native CSS custom properties that can be shared across the Gravity Forms Ecosystem. The Orbital form theme is the default implementation of the Gravity Forms Theme Framework. It can be customized and extended through various methods: code, block settings, WordPress Full Site Editing, Global Styles, stylesheets, and inline styles. Note that we will be providing more detailed and extensive documentation for the CSS API.

Refer to [this](https://docs.gravityforms.com/?p=40740) article for more information about the CSS API.

### Color System

We’ve been working to create a simple but reliable color system where colors are dynamically generated. You can see this at work in the Orbital block style settings. Note that we will be providing more detailed and extensive documentation for the color system as part of the [CSS API](https://docs.gravityforms.com/?p=40740).

### Utility Classes

We have created an initial set of utility classes to help with the implementation of the Theme Framework. If you write an add-on that adds elements to forms, you can use these classes to make sure that Theme Framework styles are applied (or not) to your elements.

#### Form Theme Framework Exclusion Classes

The Theme Framework includes several utility classes to give you additional control over whether or not the Theme Framework’s reset and/or framework are applied to a specific element (or it’s child elements):

- `gform-theme__disable`: this will exclude this element and it’s child elements from having the reset and framework (Orbital) applied
- `gform-theme__disable-reset`: this will exclude this element and it’s child elements from having the reset applied
- `gform-theme__disable-framework`: this will exclude this element and it’s child elements from having the framework (Orbital) applied

#### Field Type

The wrapper class for each field has some classes that can be used to target specific field types and field settings:

- `gfield--type-{field type}`: based on the field type
- `gfield--type-choice`: if the field type is checkbox, radio, consent, or the field’s type setting is set to checkbox or radio
- `gfield--input-type-{input type}`: if the field’s input type is set and not empty

#### Field Control Classes

- `gform-theme-field-control`: Controls are the individual elements or components that make up fields, such as labels, inputs, and checkboxes.  The Theme Framework includes a set of style elements that are applied to all field controls.  If you need to make an element that is not a field control look like a field control, you can give it this class.

  - `gform-theme-field-control–hover`: will apply the Theme Framework field control hover state styles when present.
  - `gform-theme-field-control–focus`: will apply the Theme Framework field control focus state styles when present.
  - `gform-theme-field-control–disabled`: will apply the Theme Framework field control disabled state styles when present.
- Form Control Size
  - `gform-field–size-sm`: will make the field control size small
  - `gform-field–size-md`: will make the field control size medium (default)
  - `gform-field–size-lg`: will make the field control size large
  - `gform-field–size-xl`: will make the field control size extra large

#### Form Label Classes

- `gform-field-label`: will apply the Theme Framework form label styles and CSS API to the element. This gives you the ability to apply the core label styles more flexibly. This is for all labels.
- Form Label Variations
  - `gform-field-label–type-inline`: will apply the inline form label variation used for labels for radio, checkbox, and consent fields.
  - `gform-field-label–type-sub`: will apply the sub-label variation used for labels in complex fields and fieldsets.
  - `gform-field-label–type-sub-large`: will apply the large sub-label variation used for labels as part of product pricing.

#### Form Description Classes

- `gform-field-description`: will apply the Theme Framework form description styles and CSS API to the element. This gives you the ability to apply the core description styles more flexibly. This is for all descriptions.
- Form Description Variations
  - `gfield_validation_message`: will apply the form description variation used for field based error descriptions.

#### Form Button Classes

- `gform-theme-button`: will apply the Theme Framework form button styles and CSS API to the element.
- `gform-theme-no-framework`: will exclude a given button from having the Theme Framework applied.
- Form Button Variations
  - `gform-theme-button–secondary`: will apply the secondary button treatment
- Form Button Size
  - `gform-theme-button–size-xs`: will make the button an extra small size
  - `gform-theme-button–size-sm`: will make the button a small size
  - `gform-theme-button–size-md`: will make the button a medium size (default)
  - `gform-theme-button–size-lg`: will make the button a large size
  - `gform-theme-button–size-xl`: will make the button an extra large size

#### Complex Field Layouts

Last, we created a simple flex-based grid to handle field-level layouts (you can see examples for the address, credit card, email, password, date, and time fields). This is based on a simple set of classes that you can add to implement it:

- `gform-grid-row`: this will create a row
- `gform-grid-col`: this will create a column
- `gform-grid-col--size-auto`: used in combination with the above class as a modifier, this will create a horizontal layout at a min-width of 640px where each column is sized equally.

**Note:** when implementing on a complex field, be sure and check that the wrapper with a class of `ginput_complex` also has a class of `ginput_container`.

### Gravity Forms NPM packages

The Theme Framework uses our [gulp tasks](https://www.npmjs.com/package/@gravityforms/gulp-tasks) (which handle our build system) and [design tokens](https://www.npmjs.com/package/@gravityforms/design-tokens) packages to power the default Orbital theme values. In the future, as we consider how to best package up some of the framework for more advanced implementations, this package may become more important in providing additional mixins as pseudo “components.” Be sure to check out our [various NPM packages](https://www.npmjs.com/search?q=%40gravityforms).

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-framework/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)