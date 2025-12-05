---
url: "https://docs.gravityforms.com/quick-start-guide/"
title: "Quick Start Guide - Gravity Forms Documentation"
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

# Quick Start Guide

- [Introduction](https://docs.gravityforms.com/quick-start-guide/#h-introduction)
- [Theme Framework Architecture](https://docs.gravityforms.com/quick-start-guide/#h-theme-framework-architecture)
- [Theme Framework](https://docs.gravityforms.com/quick-start-guide/#h-theme-framework)
- [Theme Layers](https://docs.gravityforms.com/quick-start-guide/#h-theme-layers)
- [Custom Properties and the CSS API](https://docs.gravityforms.com/quick-start-guide/#h-custom-properties-and-the-css-api)
- [Form Themes and Theme Scoping](https://docs.gravityforms.com/quick-start-guide/#h-form-themes-and-theme-scoping)
- [Theme Framework and Its Relationship to Block Theme Settings](https://docs.gravityforms.com/quick-start-guide/#h-theme-framework-and-its-relationship-to-block-theme-settings)
- [How Does It Work? Pulling It All Together.](https://docs.gravityforms.com/quick-start-guide/#h-how-does-it-work-pulling-it-all-together)

## Introduction

This article provides an overview of how to use the Theme Framework in your theme or add-on.

## Theme Framework Architecture

The Theme Framework comprises two main components: the **[Theme Framework](https://docs.gravityforms.com/?p=37831)** and **[Theme Layers](https://docs.gravityforms.com/?p=37834)**.

### Theme Framework

At the core of the Theme Framework is a [CSS API](https://docs.gravityforms.com/?p=40740), an extensible collection of native CSS custom properties that can be defined, overridden, or modified across various contexts. The default implementation of this framework is the Orbital theme, which allows users to customize its appearance directly from the block settings.

### Theme Layers

Theme Layers serve to group and enqueue styles, manage block settings, and connect these settings to the [CSS API](https://docs.gravityforms.com/?p=40740). They allow developers to control where styles are applied and prioritize them accordingly. For further details, refer to the user guide on [Theme Layers](https://docs.gravityforms.com/?p=37834).

## Custom Properties and the CSS API

The [CSS API](https://docs.gravityforms.com/?p=40740) is a collection of [custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/), which are essentially CSS variables that can be applied to various elements. In the Theme Framework, there are global custom properties, which are used on most, if not all, form elements, and local properties, which are used in more specific contexts. Local properties use the global properties by default but allow for shared overrides of global properties across specific sets of form elements. For more information on how we use global and local custom properties, see the [CSS API](https://docs.gravityforms.com/?p=40740) article.

## Form Themes and Theme Scoping

Gravity Forms has four built-in form themes. The themes are:

- **Gravity Forms 2.5 Theme:** this theme was introduced in Gravity Forms 2.5. It strives to be as _unopinionated_ as possible.
- **Foundation Theme:** this is not meant to be a standalone theme. It provides the foundational styles that are necessary for forms to function and be usable. This includes things like field layouts, enhanced datepicker and select styles, ready classes, etc. Any new theme will need to use the Foundation styles in addition to the theme styles.
- **Orbital Theme:** Orbital is the default implementation of the Theme Framework. This is a much more opinionated theme that uses block settings to customize the appearance of individual forms. Orbital is the user-facing name for the Theme Framework: developers will interact with the Theme Framework, and users will interact with the Orbital theme.

Each form gets a wrapper class that includes the form theme name, so if you want your styles to apply only to certain themes, you can use the theme wrapper class.

| Theme | Theme Wrapper Class |
| --- | --- |
| Legacy & Gravity Forms 2.5 Theme | **`.gform-theme--no-framework`** |
| Legacy Theme (pre 2.5) | **`.gform_legacy_markup_wrapper`** |
| Gravity Forms 2.5 Theme | **`.gravity-theme`** |
| Theme Framework | **`.gform-theme`** |
| Theme Framework – Foundation Theme | **`.gform-theme--foundation`** |
| Theme Framework – Framework Theme | **`.gform-theme--framework`** |
| Orbital Theme | **`.gform-theme--orbital`** |

## Theme Framework and Its Relationship to Block Theme Settings

The [Theme Framework](https://docs.gravityforms.com/?p=37831) makes it possible to create theme settings to give users control over the appearance of their forms. When a user embeds a form into WordPress using the block editor, they can select a form theme in the block settings. From Gravity Forms 2.7, the choices are Gravity Forms 2.5 Theme and Orbital. If a user selects Orbital, they can customize the form’s appearance. Only themes that use the Theme Framework can access and use the block settings to customize the form theme.

## How Does It Work? Pulling It All Together.

Within the Theme Framework is a collection of design tokens that define CSS custom properties and a collection of mixins that can be used to apply some common CSS patterns. The design tokens and mixins are available as _[npm packages](https://docs.gravityforms.com/?p=37833#h-gravity-forms-npm-packages),_ so theme and add-on developers can use them without having to depend on a specific version of Gravity Forms. The Theme Framework provides a series of custom properties based on those design tokens and applies them to forms.

Each form gets a wrapper class based on its theme. If the form is using the Orbital theme (the default implementation of the Theme Framework), users can customize its appearance by selecting from various block settings. Some of the block settings let users pick colors. The Theme Framework includes an algorithm that generates a whole set of colors based on a user’s color selection. These colors are then tied to custom properties.

The results of the block settings are used to create an updated set of custom properties that override the defaults via the [CSS API](https://docs.gravityforms.com/?p=40740). These block settings are output as a `<style>` block as the first child element within the form wrapper, and the style block is carefully scoped to the individual form so the styles won’t impact other forms on the same page.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/quick-start-guide/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)