---
url: "https://docs.gravityforms.com/theme-framework-upgrade-guide/"
title: "Theme Framework Upgrade Guide - Gravity Forms Documentation"
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
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)  - [Gravity Forms 2.8 Key Features](https://docs.gravityforms.com/gravity-forms-2-8-key-features/ "Gravity Forms 2.8 Key Features")
  - [Compact View](https://docs.gravityforms.com/compact-view/ "Compact View")
  - [Theme Framework Upgrade Guide](https://docs.gravityforms.com/theme-framework-upgrade-guide/ "Theme Framework Upgrade Guide")
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Theme Framework Upgrade Guide

- [Introduction](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-introduction)
- [Upgrade Guide](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-upgrade-guide)
- [Gravity Forms CSS API Properties v2.8](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-gravity-forms-css-api-properties-v2-8)
- [Polls Add-On CSS API Properties v4.1.1](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-polls-add-on-css-api-properties-v4-1-1)
- [Survey Add-On CSS API Properties v3.8.1](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-survey-add-on-css-api-properties-v3-8-1)
- [NPM Packages](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-npm-packages)
- [Examples](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-examples)
- [CSS](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-css)
- [Upgrading to v2.8](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-upgrading-to-v2-8)
- [Upgrading to v2.8 while maintaining v2.7 compatibility](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-upgrading-to-v2-8-while-maintaining-v2-7-compatibility)
- [PHP](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-php)
- [Corollary](https://docs.gravityforms.com/theme-framework-upgrade-guide/#h-corollary)

## Introduction

In Gravity Forms 2.8, we refactored the Theme Framework, which powers the Orbital theme, to boost performance by decreasing CSS stylesheet sizes. To do this, we shortened the CSS API property names where appropriate, trying to balance performance, legibility, and maintenance. This is a major update to the Theme Framework and includes breaking changes.

What follows is a guide to upgrading your usage of the Theme Framework from v2.7 to 2.8.

## Upgrade Guide

If you have been working with the Theme Framework and integrated it into your add-on or done some custom form theming leveraging the CSS API, you’ll want to follow along below and check to see what if any updates you need to make to what you have used.

### Gravity Forms CSS API Properties v2.8

The Theme Framework’s CSS API properties received the following naming updates:

| Old | New |
| --- | --- |
| gform-theme | gf |
| background | bg |
| button | btn |
| control | ctrl |
| password | pwd |
| page | pg |
| file-upload | file |
| spacing | space |
| gf-font-family | gf-font-family-base |
| progress | prog |
| description | desc |
| outside | out |
| inside | in |
| box-shadow | shadow |
| preview | prev |
| ctrl-file-prev-file | ctrl-file-prev |
| drop-area | zone |
| border-radius | radius |
| strength | str |
| indicator | ind |
| product | prod |
| quantity | quant |
| required | req |
| col-gap | gap-x |
| row-gap | gap-y |
| vertical | y |
| horizontal | x |
| inline-size | width |
| block-size | height |
| padding-inline | padding-x |
| padding-block | padding-y |
| margin-inline | margin-x |
| margin-block | margin-y |
| inset-block-start | inset-y-start |
| inset-block-end | inset-y-end |
| inset-inline-start | inset-x-start |
| inset-inline-end | inset-x-end |
| table-cell | cell |
| table-head-cell | head-cell |

### Polls Add-On CSS API Properties v4.1.1

The Polls Add-On v4.1.1 CSS API properties received the following naming updates:

| Old | New |
| --- | --- |
| gform-polls-theme | gf-polls |
| gform-polls-theme-blue-results-color | gf-polls-results-color-blue |
| gform-polls-theme-green-results-color | gf-polls-results-color-green |
| gform-polls-theme-red-results-color | gf-polls-results-color-red |
| gform-polls-theme-orange-results-color | gf-polls-results-color-orange |

### Survey Add-On CSS API Properties v3.8.1

The Survey Add-On v3.8.1 CSS API properties received the following naming updates:

| Old | New |
| --- | --- |
| gform-survey-theme | gf-survey |
| gform-survey-theme-field-likert-row-odd-background-color | gf-survey-field-likert-row-odd-bg-color |
| gform-survey-theme-icon-control-rank | gf-survey-icon-control-rank |

### NPM Packages

If you are leveraging the [design tokens package](https://www.npmjs.com/package/@gravityforms/design-tokens) in your add-on, specifically any of the Theme Framework based mixins, you’ll want to be sure to update to use v4.0.

## Examples

### CSS

#### Upgrading to v2.8

Here is an example of the updates we can make to the Survey add-on to make it Gravity Forms v2.8 ready.

_Existing_

|     |
| --- |
| `.gsurvey-likert-choice-label,`<br>`.gsurvey-likert-row-label {`<br>```color``: var(--gform-theme-control-label-color-primary);`<br>```font-family``: var(--gform-theme-control-label-font-family-primary);`<br>```font-size``: var(--gform-theme-control-label-font-size-primary);`<br>```font-style``: var(--gform-theme-control-label-font-style-primary);`<br>```font-weight``: var(--gform-theme-control-label-font-weight-primary);`<br>```letter-spacing``: var(--gform-theme-control-label-letter-spacing-primary);`<br>```line-height``: var(--gform-theme-control-label-line-height-primary);`<br>`}` |

_Updated_

|     |
| --- |
| `.gsurvey-likert-choice-label,`<br>`.gsurvey-likert-row-label {`<br>```color``: var(--gf-ctrl-label-color-primary);`<br>```font-family``: var(--gf-ctrl-label-font-family-primary);`<br>```font-size``: var(--gf-ctrl-label-font-size-primary);`<br>```font-style``: var(--gf-ctrl-label-font-style-primary);`<br>```font-weight``: var(--gf-ctrl-label-font-weight-primary);`<br>```letter-spacing``: var(--gf-ctrl-label-letter-spacing-primary);`<br>```line-height``: var(--gf-ctrl-label-line-height-primary);`<br>`}` |

#### Upgrading to v2.8 while maintaining v2.7 compatibility

Here is an example of the updates we can make to the Survey add-on to make it Gravity Forms v2.8 ready while providing v2.7 compatibility. This leverages the ability to provide a fallback for CSS custom properties, where the first value is the preferred (new) custom property, and the second is the fallback (old) should the new not exist.

_Existing_

See the same code snippet from above.

_Updated_

|     |
| --- |
| `.gsurvey-likert-choice-label,`<br>`.gsurvey-likert-row-label {`<br>```color``: var(--gf-ctrl-label-color-primary, var(--gform-theme-control-label-color-primary));`<br>```font-family``: var(--gf-ctrl-label-font-family-primary, var(--gform-theme-control-label-font-family-primary));`<br>```font-size``: var(--gf-ctrl-label-font-size-primary, var(--gform-theme-control-label-font-size-primary));`<br>```font-style``: var(--gf-ctrl-label-font-style-primary, var(--gform-theme-control-label-font-style-primary));`<br>```font-weight``: var(--gf-ctrl-label-font-weight-primary, var(--gform-theme-control-label-font-weight-primary));`<br>```letter-spacing``: var(--gf-ctrl-label-letter-spacing-primary, var(--gform-theme-control-label-letter-spacing-primary));`<br>```line-height``: var(--gf-ctrl-label-line-height-primary, var(--gform-theme-control-label-line-height-primary));`<br>`}` |

### PHP

Here is an example of the updates we can make to the Mollie add-on to make it Gravity Forms v2.8 ready while providing v2.7 compatibility.

|     |
| --- |
| `$styles``=``array``();`<br>`if``( version_compare( GFForms::``$version``,``'2.8-beta-0'``,``'>='``) ) {`<br>```$styles``=``array``(`<br>```'base'``=>``array``(`<br>```'backgroundColor'``=>``'transparent'``,`<br>```'color'``=>``'--gf-ctrl-color'``,`<br>```'fontSize'``=>``'--gf-ctrl-font-size'``,`<br>```'fontWeight'``=>``'--gf-ctrl-font-weight'``,`<br>```'letterSpacing'``=>``'--gf-ctrl-letter-spacing'``,`<br>```'lineHeight'``=>``'--gf-ctrl-line-height'``,`<br>```'::placeholder'``=>``array``(`<br>```'color'``=>``'--gf-ctrl-placeholder-color'``,`<br>```'fontSize'``=>``'--gf-ctrl-placeholder-font-size'``,`<br>```'fontWeight'``=>``'--gf-ctrl-placeholder-font-weight'``,`<br>```'letterSpacing'``=>``'--gf-ctrl-placeholder-letter-spacing'``,`<br>```),`<br>```),`<br>```'invalid'``=>``array``(`<br>```'color'``=>``'--gf-ctrl-color-invalid'``,`<br>```),`<br>```);`<br>`}``else``{`<br>```$styles``=``array``(`<br>```'base'``=>``array``(`<br>```'backgroundColor'``=>``'transparent'``,`<br>```'color'``=>``'--gform-theme-control-color'``,`<br>```'fontSize'``=>``'--gform-theme-control-font-size'``,`<br>```'fontWeight'``=>``'--gform-theme-control-font-weight'``,`<br>```'letterSpacing'``=>``'--gform-theme-control-letter-spacing'``,`<br>```'lineHeight'``=>``'--gform-theme-control-line-height'``,`<br>```'::placeholder'``=>``array``(`<br>```'color'``=>``'--gform-theme-control-placeholder-color'``,`<br>```'fontSize'``=>``'--gform-theme-control-placeholder-font-size'``,`<br>```'fontWeight'``=>``'--gform-theme-control-placeholder-font-weight'``,`<br>```'letterSpacing'``=>``'--gform-theme-control-placeholder-letter-spacing'``,`<br>```),`<br>```),`<br>```'invalid'``=>``array``(`<br>```'color'``=>``'--gform-theme-control-color-invalid'``,`<br>```),`<br>```);`<br>`}`<br>`return``$styles``;` |

## Corollary

After feedback around the compiled stylesheet size and much deliberation, we believe now is the right time to make these changes before Orbital and the Theme Framework become widely adopted.

We know this is a significant update, and we appreciate your understanding. We have always prioritized maintaining backward compatibility, and we take stability very seriously. We have worked hard to ensure that any breaking changes are justifiable and as painless as possible.

We will also be updating our official add-ons that use the Theme Framework to reflect these changes, which is intended to be completed before the public release of v2.8. We’ve got some more performance-based refinements to come, but we don’t plan any more refactoring of the CSS API moving forward

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: November 1, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-framework-upgrade-guide/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)