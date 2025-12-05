---
url: "https://docs.gravityforms.com/category/developers/"
title: "Extending Gravity Forms - Gravity Forms Developer Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Developers

## Introduction

Gravity Forms has an extensive developer API that can be used to access and extend default functionality. Following is a brief description of the different areas of Gravity Forms' API. Understanding the purpose of these different areas is important to make sure the right API is used.

## Data Objects

Data Objects are objects/arrays that are used across all Gravity Forms APIs. They contain core Gravity Forms information such as form configuration and form submission data (a.k.a entry data).

- [Entry Object](https://docs.gravityforms.com/entry-object)
The Entry object contains all properties of a particular entry such as date created, client IP, and submitted field values.
- [Form Object](https://docs.gravityforms.com/form-object)
The Form object contains all properties of a particular form such as form title, fields, notification, and confirmation. This object is available to most of the Gravity Forms hooks and contains the following sub-objects that control different aspects of the form confiration
- [Field Object](https://docs.gravityforms.com/field-object)
The Field object contains all settings for a particular field. It is part of the Form object and can be manipulated to dynamically change the way the field is displayed.
- [Notifications Object](https://docs.gravityforms.com/notifications-object)
The Notifications object is an associative array containing all configured notifications for a form.
- [Confirmations Object](https://docs.gravityforms.com/confirmations-object)
The Confirmations object is an associative array containing all configured confirmations for a form.
- [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object)
Conditional Logic, when applied to the form or page button or to any field, controls the visibility of that element based on a choice selected or a value entered by the user in other fields on the form. It can also be used to determine if a notification, confirmation or add-on feed should be used.
- [Button Object](https://docs.gravityforms.com/button)
The Button Object contains the settings configured for the form button, such as the button text.

## PHP API

The PHP API provides tools for developers to access Gravity Forms when developing in the same server/site as Gravity Forms. Tasks such as developing a new Gravity Forms Add-On, creating a new field type or using a hook or filter to change default Gravity Forms behavior will all be covered here.

- [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
Consisting of the [GFAPI Class](https://docs.gravityforms.com/api-functions) and [Helper Functions](https://docs.gravityforms.com/helper-functions), Gravity Forms' API functions allows developers to manipulate core Gravity Forms data such as entries, forms, notification and confirmation.
- [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
The Add-On Framework provides basic functionality for developers when creating new add-ons for Gravity Forms. It provides a set of classes that can be extended to facilitate many aspects of developing add-ons such as initialization, settings pages, permissions, feed condition and script enqueuing.
- [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework)
The Field Framework provides classes and methods that can be used to create Gravity Forms field types (i.e. Text, Name and Address fields). All Gravity Forms built-in field types use the Field Framework and custom field types can be created as well.
- [Constants](https://docs.gravityforms.com/category/developers/php-api/constants)
Gravity Forms supports a few constants for customization and initialization of data.

## REST API

The REST API provides endpoints that allow interaction with Gravity Forms from an external client such as desktop, mobile app or javascript.

- [v2](https://docs.gravityforms.com/rest-api-v2)
Gravity Forms latest REST API is an extension of WordPress' REST API and allows developers to create, read, update and delete forms, entries, and results over HTTP.
- [v1](https://docs.gravityforms.com/web-api)
Formerly called the Web API, v1 loosely follows REST-style principles and allows developers to create, read, update and delete forms, entries, and results. Here are [some examples](https://docs.gravityforms.com/web-api-examples) of its use. Although still supported, we highly recommend developers to use [v2](https://docs.gravityforms.com/rest-api-v2) instead.

## Hooks

Gravity Forms provide an extensive list of actions and filters that can be used to modify almost any aspect of Gravity Forms default functionality.

- [Action Hooks](https://docs.gravityforms.com/category/developers/hooks/actions/)
Discover the different action hooks available within Gravity Forms. Action hooks allow you to perform additional actions when an event takes place.
- [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
Discover the different filter hooks available within Gravity Forms. You can use filters to modify data to better match your particular needs.
- [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
Discover the different JavaScript hooks available within Gravity Forms. You can use JavaScript hooks to perform actions or modify data as the user interacts with the form.

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

[Algolia](https://docs.gravityforms.com/category/developers/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)