---
url: "https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/"
title: "Changes to markup in Gravity Forms 2.5 - Gravity Forms Documentation"
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

# Changes to markup in Gravity Forms 2.5

- [Introduction](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/#h-introduction)
- [Markup Changes in 2.5](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/#h-markup-changes-in-2-5)
- [Sample](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/#h-sample)

## Introduction

Gravity Forms 2.5 introduced significant updates to the markup used. Changes were made to modernize and improve the markup for better standardization and accessibility, as well as simplifying the styles used. These can create breaking changes on existing forms. Note that all existing forms will default to **[Enable Legacy Markup](https://docs.gravityforms.com/form-settings/#form-options)** enabled, meaning that the new markup changes listed here will not be in effect for those forms. If you do choose to turn that off and use the new markup, review and test first! For more information on the use and limitations of legacy markup, refer to [this article](https://docs.gravityforms.com/about-legacy-markup/).

To test your existing forms and their presentation under the new markup (if needed), we suggest you install 2.5 on one of your sandboxes, turn off legacy markup on your existing forms, and start checking under all your normal user conditions. There is no substitute for grunt-work QA in this scenario.

## Markup Changes in 2.5

This list is a good starting point for changes that have been made. It may not be exhaustive, with possible changes as we progress through the Beta releases.

- All fields are now wrapped with either a <div> or a <fieldset>. We no longer wrap fields in <li>.
- All multi-input fields (such as Address, Name, Checkboxes, etc) are now wrapped in a <fieldset> (previously were <div>) for improved accessibility.
- Field labels inside a <fieldset> use <legend> (previously were <label>).
- Refactored the List field for improved accessibility.
- Add and Remove icons are now <button>‘s (previously were <a>’s).
- All <table> tags have been replaced with <div>‘s.
- All scripts (including inline scripts) are now deferred and loaded in the footer by default for performance improvement.

## Sample

This example shows a comparison of old and new markup for the same small form.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38 | `// New Markup Example`<br>`<``div``id``=``"gform_fields_893"``class``=``"gform_fields top_label form_sublabel_below description_below"``>`<br>```<``fieldset``id``=``"field_893_4"``class``=``"gfield field_sublabel_below field_description_below gfield_visibility_visible"``>`<br>```<``legend``class``=``"gfield_label gfield_label_before_complex"``>Name C</``legend``>`<br>```<``div``class``=``"ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name"``id``=``"input_893_4"``>`<br>```<``span``id``=``"input_893_4_3_container"``class``=``"name_first"``>`<br>```<``input``type``=``"text"``name``=``"input_4.3"``id``=``"input_893_4_3"``value``=``""``aria-label``=``"First name"``aria-required``=``"false"``>`<br>```<``label``for``=``"input_893_4_3"``>First</``label``>`<br>```</``span``>`<br>```<``span``id``=``"input_893_4_6_container"``class``=``"name_last"``>`<br>```<``input``type``=``"text"``name``=``"input_4.6"``id``=``"input_893_4_6"``value``=``""``aria-label``=``"Last name"``aria-required``=``"false"``>`<br>```<``label``for``=``"input_893_4_6"``>Last</``label``>`<br>```</``span``>`<br>```</``div``>`<br>```</``fieldset``>`<br>`</``div``>`<br>`// Old Markup Of Same`<br>`<``ul``id``=``"gform_fields_893"``class``=``"gform_fields top_label form_sublabel_below description_below"``>`<br>```<``li``id``=``"field_893_4"``class``=``"gfield field_sublabel_below field_description_below gfield_visibility_visible"``><``label``class``=``"gfield_label gfield_label_before_complex"``>Name C</``label``>`<br>```<``div``class``=``"ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name"``id``=``"input_893_4"``>`<br>```<``span``id``=``"input_893_4_3_container"``class``=``"name_first"``>`<br>```<``input``type``=``"text"``name``=``"input_4.3"``id``=``"input_893_4_3"``value``=``""``aria-label``=``"First name"``aria-required``=``"false"``>`<br>```<``label``for``=``"input_893_4_3"``>First</``label``>`<br>```</``span``>`<br>```<``span``id``=``"input_893_4_6_container"``class``=``"name_last"``>`<br>```<``input``type``=``"text"``name``=``"input_4.6"``id``=``"input_893_4_6"``value``=``""``aria-label``=``"Last name"``aria-required``=``"false"``>`<br>```<``label``for``=``"input_893_4_6"``>Last</``label``>`<br>```</``span``>`<br>```</``div``>`<br>```</``li``>`<br>`</``ul``>` |

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 17, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/changes-to-markup-in-gravity-forms-2-5/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)