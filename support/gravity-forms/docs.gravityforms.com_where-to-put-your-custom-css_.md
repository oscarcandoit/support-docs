---
url: "https://docs.gravityforms.com/where-to-put-your-custom-css/"
title: "Where to Put Your Custom CSS - Gravity Forms Documentation"
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

# Where to Put Your Custom CSS

- [Use the WordPress Customizer](https://docs.gravityforms.com/where-to-put-your-custom-css/#h-use-the-wordpress-customizer)
- [Using a Third Party Plugin](https://docs.gravityforms.com/where-to-put-your-custom-css/#h-using-a-third-party-plugin)
- [Modifying style.css](https://docs.gravityforms.com/where-to-put-your-custom-css/#h-modifying-style-css)

## Use the WordPress Customizer

WordPress includes a tool to enable you to tailor the presentation of your theme. Included in that, is a way to add custom CSS code. Do the following:

1. From your site admin dashboard, click the **Appearance** option.
2. Under Appearance, choose **Customize**.
3. That will be take you into the theme customizer, where you can find the **Additional CSS** tool.

Remember, these custom CSS changes are kept with your theme, so will be lost if you change themes.

[This external article](https://wplift.com/how-to-use-the-wordpress-customizer) covers the basics of the customizer, and as always, your can refer to the [official WordPress documentation](https://wordpress.org/support/article/appearance-customize-screen/) for a detailed list of the options.

## Using a Third Party Plugin

There are third-party plugins that allow you to add additional styles to your theme without editing the core theme files. They often allow you to target changes to only specific form pages, and it may keep your changes intact, even if you decide to switch themes or your theme provider issues an update.

The good folks at Gravity Wiz have a free plug-in called [Code Chest](https://www.gravityforms.com/add-ons/code-chest/), which will output your form-specific code (JavaScript and CSS) right where it needs to be.

The [Custom CSS & JS Pro plugin by SilkyPress.com](https://www.silkypress.com/simple-custom-css-js-pro/) is a well-established plugin with good supporting documentation. There are also other plugins that do similar things. Try searching our [community plugins library](https://www.gravityforms.com/community/add-ons/?query=css&orderby=) or the [WordPress plugin directory](https://wordpress.org/plugins/search/custom+css/).

_**Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test,_ or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost, _and support needs of your project._

## Modifying style.css

If you are comfortable with editing and modifying cascading style sheets (CSS), then you can make custom site wide changes to how your Gravity Forms are displayed by manipulating your theme’s _style.css_ file. We recommended this approach only for users with at least moderate CSS experience, as the interactions and complexity of style sheets can mount up quickly.

The location of the style.css file is not consistent across the many themes available. Often the theme’s style.css file is located in the in the root (or top level) of the theme folder on the web server hosting your site, but theme developers can choose to place them somewhere else within their theme’s folder structure. [Check out this article](https://zellwk.com/blog/find-wordpress-css/) (external site) for some advice on how to locate and access the theme’s CSS file.

Remember: Your first step should **always** be to **back up the CSS file** before you modify it!

We cannot really advise _where_ to put your style additions within your _style.css_ file, as their organization varies immensely from theme to theme. If in doubt, or your changes do not seem to be working, review any documentation that accompanies your theme, or contact your theme provider.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 19, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/where-to-put-your-custom-css/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)