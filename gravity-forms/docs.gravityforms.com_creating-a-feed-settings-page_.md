---
url: "https://docs.gravityforms.com/creating-a-feed-settings-page/"
title: "Creating a Feed Settings Page - Gravity Forms Documentation"
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

# Creating a Feed Settings Page

- [Introduction](https://docs.gravityforms.com/creating-a-feed-settings-page/#h-introduction)
- [Example](https://docs.gravityforms.com/creating-a-feed-settings-page/#h-example)
- [Resources](https://docs.gravityforms.com/creating-a-feed-settings-page/#h-resources)

## Introduction

Add-ons extending the [GFFeedAddon](https://docs.gravityforms.com/gffeedaddon) class can create settings pages for managing form submission feeds. This article demonstrates how to implement the `feed_settings_fields()` method to configure feed settings for your add-on.

## Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47 | `/**`<br>```* Configures the settings which should be rendered on the feed settings page.`<br>```*`<br>```* @return array`<br>```*/`<br>```public``function``feed_settings_fields() {`<br>```return``array``(`<br>```array``(`<br>```'title'``=> esc_html__(``'Feed Settings'``,``'simpleaddon'``),`<br>```'description'``=> esc_html__(``'Configure the feed settings below'``,``'simpleaddon'``),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'text'``,`<br>```'name'``=>``'feedName'``,`<br>```'label'``=> esc_html__(``'Feed Name'``,``'simpleaddon'``),`<br>```'required'``=> true,`<br>```'class'``=>``'medium'`<br>```),`<br>```array``(`<br>```'type'``=>``'select'``,`<br>```'name'``=>``'feedAction'``,`<br>```'label'``=> esc_html__(``'Action'``,``'simpleaddon'``),`<br>```'required'``=> true,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'First Action'``,``'simpleaddon'``),`<br>```'value'``=>``'first'`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'Second Action'``,``'simpleaddon'``),`<br>```'value'``=>``'second'`<br>```)`<br>```)`<br>```),`<br>```array``(`<br>```'type'``=>``'field_select'``,`<br>```'name'``=>``'mappedField'``,`<br>```'label'``=> esc_html__(``'Map to Field'``,``'simpleaddon'``),`<br>```'tooltip'``=> esc_html__(``'Select which field to map'``,``'simpleaddon'``),`<br>```'required'``=> true`<br>```)`<br>```)`<br>```)`<br>```);`<br>```}`<br>`}` |

![Image showing Simple Add-On Feed Settings](https://docs.gravityforms.com/wp-content/uploads/2025/03/image-1-1024x559.png)

## Resources

- ### [Additional Properties](https://docs.gravityforms.com/additional-properties/)

- ### [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/)

- ### [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/)

- ### [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/)

- ### [Dependency](https://docs.gravityforms.com/dependency/)

- ### [Field Properties](https://docs.gravityforms.com/field-properties/)

- ### [Section Properties](https://docs.gravityforms.com/section-properties/)


- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/creating-a-feed-settings-page/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)