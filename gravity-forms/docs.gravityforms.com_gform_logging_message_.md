---
url: "https://docs.gravityforms.com/gform_logging_message/"
title: "gform_logging_message - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)      - [Add-On Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/addon-framework-filters/)
      - [Add-On Filters](https://docs.gravityforms.com/category/developers/hooks/filters/filters-addons/)
      - [Admin Dashboard Filters](https://docs.gravityforms.com/category/developers/hooks/filters/admin-dashboard-filters/)
      - [Calculation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/calculation-filters/)
      - [Conditional Logic Filters](https://docs.gravityforms.com/category/developers/hooks/filters/conditional-logic-filters/)
      - [Confirmation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/confirmation-filters/)
      - [Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/editor-filters/)
      - [Entry List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-list-filters/)
      - [Entry Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-filters/)
      - [Field Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-filters/)
      - [Field Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-framework-filters/)
      - [Form Component Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-component-filters/)
      - [Form List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-list/)
      - [Form Object Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-object/)
      - [Form Settings Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-settings-filters/)
      - [Import/Export Filters](https://docs.gravityforms.com/category/developers/hooks/filters/importexport-filters/)
      - [Logging Filters](https://docs.gravityforms.com/category/developers/hooks/filters/logging/)        - [gform\_logging\_message](https://docs.gravityforms.com/gform_logging_message/ "gform_logging_message")
      - [Merge Tag Filters](https://docs.gravityforms.com/category/developers/hooks/filters/merge-tags/)
      - [Notification Filters](https://docs.gravityforms.com/category/developers/hooks/filters/notification-filters/)
      - [Payment Filters](https://docs.gravityforms.com/category/developers/hooks/filters/payment/)
      - [Post Creation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/post-creation/)
      - [REST API v1 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v1/)
      - [REST API v2 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v2/)
      - [Rich Text Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rich-text-editor/)
      - [Save and Continue Filters](https://docs.gravityforms.com/category/developers/hooks/filters/save-and-continue/)
      - [Script Filters](https://docs.gravityforms.com/category/developers/hooks/filters/script-filters/)
      - [Styling/Theme/CSS Filters](https://docs.gravityforms.com/category/developers/hooks/filters/styling-filters/)
      - [System Status Filters](https://docs.gravityforms.com/category/developers/hooks/filters/system-status/)
      - [Upload Filters](https://docs.gravityforms.com/category/developers/hooks/filters/upload-filters/)
      - [Validation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/validation/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_logging\_message

- [Description](https://docs.gravityforms.com/gform_logging_message/#h-description)
- [Parameters](https://docs.gravityforms.com/gform_logging_message/#h-parameters)
- [Example](https://docs.gravityforms.com/gform_logging_message/#h-example)
- [Placement](https://docs.gravityforms.com/gform_logging_message/#h-placement)
- [Since](https://docs.gravityforms.com/gform_logging_message/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_logging_message/#h-source-code)

## Description

Use this filter to customize the messages sent to Gravity Forms logging. If the result returned is false, the message will not be logged. This is useful in multiple cases:

- Sites which do not want to write logging to disk but rely on a separate logging framework or send to stdout via error\_log.
- Sites which want to customize the formatting or content of the logging messages.

## Parameters

- **$message** [string](https://docs.gravityforms.com/string)
The current logging message.

- **$message\_type** [string](https://docs.gravityforms.com/string)

The current logging message type.

- **$plugin\_setting** [array](https://docs.gravityforms.com/array)

The logging setting for plugin.

- **$log** [object](https://docs.gravityforms.com/object)

The KLogger instance.

- **$GFLogging** [object](https://docs.gravityforms.com/object)

The Gravity Forms Logging object.


## Example

This example shows how to override the default logging behavior in Gravity Forms and log all enabled Gravity Forms logging statements to your system’s error logs rather than the default Gravity Forms log files located within your WordPress install’s uploads directory.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_filter(``'gform_logging_message'``,``'gform_debug_logging_stdout'``, 10, 5 );`<br>`function``gform_debug_logging_stdout(``$message``,``$message_type``,``$plugin_setting``,``$log``,``$GFLogging``) {`<br>`error_log``(``$message``);`<br>`return``false;`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Since

This filter was added in Gravity Forms version 2.4.15

## Source Code

This filter is located in GFLogging::log\_message in _logging.php_:

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 26, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_logging_message/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)