---
url: "https://docs.gravityforms.com/additional-properties/"
title: "Additional Properties - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)        - [Additional Properties](https://docs.gravityforms.com/additional-properties/ "Additional Properties")
        - [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/ "Basics Of The Settings API")
        - [Create a Custom Field Type](https://docs.gravityforms.com/custom-field-types/ "Create a Custom Field Type")
        - [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/ "Creating a Feed Settings Page")
        - [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/ "Creating a Plugin Settings Page")
        - [Dependency](https://docs.gravityforms.com/dependency/ "Dependency")
        - [Field Properties](https://docs.gravityforms.com/field-properties/ "Field Properties")
        - [List of Settings API Field Types](https://docs.gravityforms.com/field-types/ "List of Settings API Field Types")
        - [List of Settings API Helper Functions](https://docs.gravityforms.com/settings-api-helpers/ "List of Settings API Helper Functions")
        - [Post Select Field Type](https://docs.gravityforms.com/post-select-field-type/ "Post Select Field Type")
        - [Section Properties](https://docs.gravityforms.com/section-properties/ "Section Properties")
        - [User Select Field Type](https://docs.gravityforms.com/user-select-field-type/ "User Select Field Type")
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Additional Properties

- [Introduction](https://docs.gravityforms.com/additional-properties/#h-introduction)
- [Examples](https://docs.gravityforms.com/additional-properties/#h-examples)
- [Add an onchange event to the select field.](https://docs.gravityforms.com/additional-properties/#h-add-an-onchange-event-to-the-select-field)
- [Add a text box.](https://docs.gravityforms.com/additional-properties/#h-add-a-text-box)
- [Resources](https://docs.gravityforms.com/additional-properties/#h-resources)

## Introduction

In the Gravity Forms Settings API, you can add HTML attributes to settings fields. These attributes include event handlers like onclick and onchange, which allow fields to respond to user actions. The API treats these attributes as strings and renders them in the HTML. This article explains how to use them in your settings fields.

## Examples

### Add an _onchange event_ to the select field.

Which will call a javascript function named “SelectChanged” when the user selects a different choice from the drop down.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28 | `array``(`<br>```'title'``=>``'This is the title for Section 1'``,`<br>```'description'``=>``'This is a description of the purpose of Section 1'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'myselect'``,`<br>```'label'``=>``'This is a select'``,`<br>```'onchange'``=>``'SelectChanged()'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'my first choice'``,`<br>```'value'``=>``'1'`<br>```),`<br>```array``(`<br>```'label'``=>``'my second choice'``,`<br>```'value'``=>``'2'`<br>```)`<br>```)`<br>```),`<br>```)`<br>`),`<br>`?>`<br>`<script language=``"javascript"``>`<br>```function``SelectChanged(){`<br>```alert(``"this is a test using js"``);`<br>```}`<br>`</script>` |

### Add a text box.

Which includes the HTML event attribute “onfocus”. a checkbox using the HTML event attribute “onclick”, and a textarea with the HTML attribute “disabled”.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `array``(`<br>```'title'``=>``'HTML Attributes Tests'``,`<br>```'description'``=>``'This is a section with fields that also have html attributes added as properties.'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'text'``,`<br>```'label'``=>``'Text Box with onfocus'``,`<br>```'onfocus'``=>``'alert("The text box has received focus.");'``,`<br>```),`<br>```array``(`<br>```'type'``=>``'checkbox'``,`<br>```'label'``=>``'Check box with onclick'``,`<br>```'onclick'``=>``'alert("You have clicked on the check box named " + this.name);'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=>``'One'``,`<br>```'name'``=>``'one'``,`<br>```'value'``=> 1,`<br>```),`<br>```array``(`<br>```'label'``=>``'Two'``,`<br>```'name'``=>``'two'``,`<br>```'value'``=> 2,`<br>```),`<br>```),`<br>```),`<br>```array``(`<br>```'type'``=>``'textarea'``,`<br>```'label'``=>``'Textarea disabled'``,`<br>```'disabled'``=> true,`<br>```),`<br>```),`<br>`),` |

Each choice is configured with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| label | [string](https://docs.gravityforms.com/string/) | The choice label. Required. |
| name | [string](https://docs.gravityforms.com/string/) | Only used for checkboxes. The name/key of the setting. Note: This is also used as the id attribute for the containing div tag. |
| value | [string](https://docs.gravityforms.com/string/) | Only used for radio buttons and select. If omitted, then the label will be used as the value. |
| default\_value | [boolean](https://docs.gravityforms.com/boolean/) | Only used for checkboxes. The default value for the choice. This may be set to 1 or 0, with 1 marking the checkbox as checked. Note: The “default\_value” property may be set for radio buttons and select in the field property array, not the choice array. |
| tooltip | [string](https://docs.gravityforms.com/string/) | The content to be included in the tooltip for this choice. Only used for checkboxes and radio buttons. |
| tooltip\_class | [string](https://docs.gravityforms.com/string/) | The tooltip class; the value to be appended to the class attribute of the element containing this choice’s tooltip. Only used for checkboxes and radio buttons. |
| icon | [string](https://docs.gravityforms.com/string/) | Icon can be an image URL or Font Awesome icon class. Only used for checkboxes and radio buttons. |
| choices | [array](https://docs.gravityforms.com/array/) | An array of choices for this optgroup. See above for the individual choice properties. |

## Resources

- ### [Additional Properties](https://docs.gravityforms.com/additional-properties/)

- ### [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/)

- ### [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/)

- ### [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/)

- ### [Dependency](https://docs.gravityforms.com/dependency/)

- ### [Field Properties](https://docs.gravityforms.com/field-properties/)

- ### [Section Properties](https://docs.gravityforms.com/section-properties/)


- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/additional-properties/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)