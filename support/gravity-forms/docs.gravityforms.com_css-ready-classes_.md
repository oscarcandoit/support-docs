---
url: "https://docs.gravityforms.com/css-ready-classes/"
title: "Modifying Field Layout with CSS Ready Classes - Gravity Forms"
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

# Modifying Field Layout with CSS Ready Classes

- [Introduction](https://docs.gravityforms.com/css-ready-classes/#h-introduction)
- [How to Use Ready Classes](https://docs.gravityforms.com/css-ready-classes/#h-how-to-use-ready-classes)
- [The Ready Class Names](https://docs.gravityforms.com/css-ready-classes/#h-the-ready-class-names)
- [Halves (2 Columns)](https://docs.gravityforms.com/css-ready-classes/#h-halves-2-columns)
- [Thirds (3 Columns)](https://docs.gravityforms.com/css-ready-classes/#h-thirds-3-columns)
- [Quarters (4 Columns)](https://docs.gravityforms.com/css-ready-classes/#h-quarters-4-columns)
- [Inline (Fluid One Line)](https://docs.gravityforms.com/css-ready-classes/#h-inline-fluid-one-line)
- [List Classes](https://docs.gravityforms.com/css-ready-classes/#h-list-classes)
- [List Columns](https://docs.gravityforms.com/css-ready-classes/#h-list-columns)
- [Inline Classes](https://docs.gravityforms.com/css-ready-classes/#h-inline-classes)
- [List Height Classes](https://docs.gravityforms.com/css-ready-classes/#h-list-height-classes)
- [Horizontal Form Layout](https://docs.gravityforms.com/css-ready-classes/#h-horizontal-form-layout)
- [HTML Classes](https://docs.gravityforms.com/css-ready-classes/#h-html-classes)
- [Confirmation Classes](https://docs.gravityforms.com/css-ready-classes/#h-confirmation-classes)
- [Other Classes](https://docs.gravityforms.com/css-ready-classes/#h-other-classes)
- [Q & A](https://docs.gravityforms.com/css-ready-classes/#h-q-amp-a)
- [Additional Notes](https://docs.gravityforms.com/css-ready-classes/#h-additional-notes)

**Note**: With the release of Gravity Forms 3.1, [support for legacy markup](https://docs.gravityforms.com/about-legacy-markup/) will be fully removed. This change marks the end of the original markup structure introduced in 2009 and finalizes the platform’s transition to modern form rendering. Although modern markup has been available since version 2.5, many forms still rely on legacy markup features, including Ready Classes, for layout control. Refer to the [CSS Ready Classes Migration](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/) guide for more information.

## Introduction

In Gravity Forms 1.5 we added “Ready Classes”. Using these new classes, you can easily create more advanced alternative layouts for the fields in your forms. Essentially, Ready Classes are class names that you can add to the parent element surrounding each field to take advantage of pre-defined styles included in the default form stylesheet.

**Note**: These Ready Classes don’t apply to mobile devices. Responsive styling is used instead for these devices.

## How to Use Ready Classes

To add a Ready Class to a field, go to the Form Editor and select the field you want to change. Under the “Appearance” tab in the Settings Sidebar, you will see an input called “Custom CSS Class”.

Add the Ready Class name or names you want to add to the field here and then save the form.

![](https://docs.gravityforms.com/wp-content/uploads/2021/04/Gravity-Forms-Field-Settings-Custom-CSS-Class-callout-1-446x1024.png)

Note that Ready Classes feature do **NOT** show in the Form Editor display. Save the form and you can review the classes being applied in the **Preview** screen.

## The Ready Class Names

Here are the Ready Classes that are built in the Gravity Forms default stylesheet that you can use right away without having to write any of your own CSS.

### Halves (2 Columns)

These classes are **deprecated** by the [column features](https://docs.gravityforms.com/working-with-columns/) built directly into the Form Editor in Gravity Forms 2.5.

Note: These only work with the “top label” form layout option and are intended to be used in left half/right half pairings to work properly.

- **gf\_left\_half**

This places the field in the left column (left half) of a 2 column layout. This only works with the “top label” form layout option.

- **gf\_right\_half**

This places the field in the left column (right half) of a 2 column layout. This only works with the “top label” form layout option.

To align two fields side by side (2 equal columns) you can add these classes. The two fields have to be adjacent to each other in the Form Builder. The gf\_left\_half class has to be added to the first field and the gf\_right\_half class to the second field.

[![Readyclass_2column](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_2column.png)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_2column.png)

### Thirds (3 Columns)

These classes are **deprecated** by the [column features](https://docs.gravityforms.com/working-with-columns/) built directly into the Form Editor in Gravity Forms 2.5.

Note: These only work with the “top label” form layout option and are intended to be used in left third/middle third/right third pairings to work properly.

- **gf\_left\_third**

This places the field in the left column (left third) of a 3 column layout. This only works with the “top label” form layout option.
- **gf\_middle\_third**

This places the field in the middle column (middle third) of a 3 column layout. This only works with the “top label” form layout option.
- **gf\_right\_third**

This places the field in the right column (right third) of a 3 column layout. This only works with the “top label” form layout option.

To align three fields side by side (3 equal columns) you can add these classes. The three fields have to be adjacent to each other in the Form Builder. The gf\_left\_third class has to be added to the first field, the gf\_middle\_third class to the second field and the gf\_right\_third class to the third field.

[![Readyclass_3column](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_3column.png)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_3column.png)

### Quarters (4 Columns)

These classes are **deprecated** by the [column features](https://docs.gravityforms.com/working-with-columns/) built directly into the Form Editor in Gravity Forms 2.5.

Note: These only work with the “top label” form layout option and are intended to be used in left third/middle third/right third pairings to work properly.

- **gf\_first\_quarter**

This places the field in the first quarter of 4 column layout. This only works with the “top label” form layout option.
- **gf\_second\_quarter**

This places the field in the second quarter of 4 column layout. This only works with the “top label” form layout option.
- **gf\_third\_quarter**

This places the field in the third quarter of 4 column layout. This only works with the “top label” form layout option.
- **gf\_fourth\_quarter**

This places the field in the fourth quarter of 4 column layout. This only works with the “top label” form layout option.

To align four fields side by side (4 equal columns) you can add these classes. The four fields have to be adjacent to each other in the Form Builder. The gf\_first\_quarter class has to be added to the first field, the gf\_second\_quarter class to the second field, the gf\_third\_quarter class to the third field, and the gf\_fourth\_quarter to the fourth field.

### Inline (Fluid One Line)

These classes are **deprecated** by the [column features](https://docs.gravityforms.com/working-with-columns/) built directly into the Form Editor in Gravity Forms 2.5.

- **gf\_inline**


This places the field inline horizontally with other fields but does not create equally-spaced column layouts. This is useful for different sized fields or when you simply want a horizontal layout without actual column spacing.


[![Readyclass_gf_inline](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_gf_inline.jpg)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_gf_inline.jpg)

### List Classes

#### List Columns

These ready classes turn a multiple choice/checkbox list into an equally-spaced column format with the defined number of columns and orientation. This only applies to multiple choice/checkbox lists and work with any of the form label position settings.

The first group will fill a list from left to right for the correct number of columns, then descending in rows until the list is exahusted.

- **gf\_list\_2col**
- **gf\_list\_3col**
- **gf\_list\_4col**
- **gf\_list\_5col**

The _\_vertical_ tagged classes will fill from top to bottom, left column first, splitting the list where needed to get the specified number of columns, with each column having as close to a similar number of entries as possible.

- **gf\_list\_2col\_vertical**
- **gf\_list\_3col\_vertical**
- **gf\_list\_4col\_vertical**
- **gf\_list\_5col\_vertical**

[![Readyclass_list_3column](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_list_3column.png)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_list_3column.png)

#### Inline Classes

- **gf\_list\_inline**

This turns a multiple choice/checkbox list into an inline horizontal list (not evenly spaced columns). This only applies to multiple choice/checkbox lists and work with any of the form label position settings. See [this article](https://docs.gravityforms.com/radio-buttons/#example-changing-the-button-display) for an example using radio buttons.

[![Readyclass_list_inline](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_list_inline.png)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_list_inline.png)

#### List Height Classes

This applies a height value to all multiple choice/checkbox items in that list. This can be useful to avoid “hanging floats” caused by list items of unequal height. This only applies to multiple choice/checkbox lists and work with any of the form label position settings.

- **gf\_list\_height\_25**
- **gf\_list\_height\_50**
- **gf\_list\_height\_75**
- **gf\_list\_height\_100**
- **gf\_list\_height\_125**
- **gf\_list\_height\_150**

### Horizontal Form Layout

This class is **deprecated** by the [submit button](https://docs.gravityforms.com/submit-button/) being built directly into the Form Editor in Gravity Forms 2.6.

- **gf\_simple\_horizontal**

Note: This only works with the “top label” form layout option. When added to “CSS Class Name” **in your form settings** will create a very simple horizontal form layout (think simple email address field and inline form button). The field label is hidden so using the placeholder option for the field is recommended. Please note that this is intended for very simple, single input form types. Also, it works best if you set the input size to “large” in the field settings.

[![Readyclass_scroll_text](https://docs.gravityforms.com/wp-content/uploads/2017/09/gf_simple_horizontal.jpg)](https://docs.gravityforms.com/wp-content/uploads/2017/09/gf_simple_horizontal.jpg)

### HTML Classes

- **gf\_alert\_green**

This turns an HTML field and its contents into a green banner message.
- **gf\_alert\_red**

This turns an HTML field and its contents into a red banner message.
- **gf\_alert\_yellow**

This turns an HTML field and its contents into a yellow banner message.
- **gf\_alert\_gray**

This turns an HTML field and its contents into a gray banner message.
- **gf\_alert\_blue**

This turns an HTML field and its contents into a blue banner message.

[![](https://docs.gravityforms.com/wp-content/uploads/2020/04/htmlmessage.png)](https://docs.gravityforms.com/wp-content/uploads/2020/04/htmlmessage.png)

### Confirmation Classes

These classes can be added to the “CSS Class Name” input on an individual form’s settings page and will turn the confirmation message into a banner of the associated color. Note: this will only work with confirmation messages of the “text” type and not page or redirect confirmations.

- **gf\_confirmation\_simple\_yellow**

This turns the confirmation message into a banner with a yellow background.
- **gf\_confirmation\_simple\_gray**

This turns the confirmation message into a banner with a gray background.
- **gf\_confirmation\_yellow\_gradient**

This turns the confirmation message into a banner with a yellow gradient background.
- **gf\_confirmation\_green\_gradient**

This turns the confirmation message into a banner with a green gradient background.

[![](https://docs.gravityforms.com/wp-content/uploads/2020/04/confirmationclass.png)](https://docs.gravityforms.com/wp-content/uploads/2020/04/confirmationclass.png)

### Other Classes

- **gf\_scroll\_text**

This converts a section break field into a box with a fixed height that will automatically show a scroll bar if there’s a large amount of text. This is useful if you’re wanting to show large amounts of content to the user, but don’t want to have to link to it or make the form very long to show it (Terms of Service Agreements, etc). This class only works on section breaks and works with any of the form label position settings.

[![Readyclass_scroll_text](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_scroll_text.png)](https://docs.gravityforms.com/wp-content/uploads/2017/09/Readyclass_scroll_text.png)

- **gf\_hide\_ampm**

This hides the am/pm selector in the time field- this only hides the field on the form, not in the form entry table. This works with any of the form label position settings.
- **gf\_hide\_charleft**

This hides the characters left counter beneath paragraph text fields when using the maximum characters option. This works with any of the form label position settings.
- **gf\_invisible**

This hides a field, useful for field types where the Visibility setting is not available, like product fields.

## Q & A

- **Can I use multiple classes on the same field?**
Yes, you can use multiple classes together. Just separate each class name by a space. Note: This doesn’t work for all of the styles, but many can be combined if they’re applicable to the field type. For example, you may have a 2 column primary layout, and want to use 2 column list layouts within the columns.

- **Can I create my own classes?**
Yes, the classes are added to the parent <li> element surrounding a field so you can define your own class name and add your own rules to your theme stylesheet based on that class name being added to the field.


## Additional Notes

You can also see an example of several of these classes applied in one form [here](https://docs.gravityforms.com/wp-content/uploads/2017/09/readyclass_fullsample.png).

One final note. As with any CSS rules, your particular theme CSS may override or supersede some of these styles. They’ve been tested in a variety of themes and work well, but you may have to make some adjustments to your theme styles for everything to work properly.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 14, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/css-ready-classes/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)