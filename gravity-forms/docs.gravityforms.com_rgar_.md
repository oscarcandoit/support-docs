---
url: "https://docs.gravityforms.com/rgar/"
title: "rgar() - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)      - [Creating Forms with the GFAPI](https://docs.gravityforms.com/creating-forms-with-the-gfapi/ "Creating Forms with the GFAPI")
      - [Duplicating Forms with the GFAPI](https://docs.gravityforms.com/duplicating-forms-with-the-gfapi/ "Duplicating Forms with the GFAPI")
      - [Updating Forms with the GFAPI](https://docs.gravityforms.com/updating-forms-with-the-gfapi/ "Updating Forms with the GFAPI")
      - [Getting Forms with the GFAPI](https://docs.gravityforms.com/getting-forms-with-the-gfapi/ "Getting Forms with the GFAPI")
      - [Deleting Forms with the GFAPI](https://docs.gravityforms.com/deleting-forms-with-the-gfapi/ "Deleting Forms with the GFAPI")
      - [Submitting Forms with the GFAPI](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/ "Submitting Forms with the GFAPI")
      - [GFAPI Class](https://docs.gravityforms.com/api-functions/ "GFAPI Class")
      - [Validating Form Submissions with the GFAPI](https://docs.gravityforms.com/validating-forms-with-the-gfapi/ "Validating Form Submissions with the GFAPI")
      - [Creating Entries with the GFAPI](https://docs.gravityforms.com/creating-entries-with-the-gfapi/ "Creating Entries with the GFAPI")
      - [Updating Entries with the GFAPI](https://docs.gravityforms.com/updating-entries-with-the-gfapi/ "Updating Entries with the GFAPI")
      - [Searching and Getting Entries with the GFAPI](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/ "Searching and Getting Entries with the GFAPI")
      - [Deleting Entries with the GFAPI](https://docs.gravityforms.com/deleting-entries-with-the-gfapi/ "Deleting Entries with the GFAPI")
      - [Managing Add-On Feeds with the GFAPI](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/ "Managing Add-On Feeds with the GFAPI")
      - [Sending Notifications with the GFAPI](https://docs.gravityforms.com/sending-notifications-with-the-gfapi/ "Sending Notifications with the GFAPI")
      - [Getting Fields with the GFAPI](https://docs.gravityforms.com/getting-fields-with-the-gfapi/ "Getting Fields with the GFAPI")
      - [Validating Field Submissions with the GFAPI](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/ "Validating Field Submissions with the GFAPI")
      - [Managing Notes with the GFAPI](https://docs.gravityforms.com/managing-notes-with-the-gfapi/ "Managing Notes with the GFAPI")
      - [GFAPI Examples for Forms and Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/ "GFAPI Examples for Forms and Entries")
      - [gf\_has\_action](https://docs.gravityforms.com/gf_has_action/ "gf_has_action")
      - [gf\_has\_filters](https://docs.gravityforms.com/gf_has_filters/ "gf_has_filters")
      - [Helper Functions](https://docs.gravityforms.com/helper-functions/ "Helper Functions")
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# rgar()

- [Description](https://docs.gravityforms.com/rgar/#h-description)
- [Usage](https://docs.gravityforms.com/rgar/#h-usage)
- [Parameters](https://docs.gravityforms.com/rgar/#h-parameters)
- [Returns](https://docs.gravityforms.com/rgar/#h-returns)
- [Examples](https://docs.gravityforms.com/rgar/#h-examples)
- [1\. Key exists](https://docs.gravityforms.com/rgar/#h-1-key-exists)
- [2\. Key does not exist](https://docs.gravityforms.com/rgar/#h-2-key-does-not-exist)
- [3\. Key does not exist but default value provided](https://docs.gravityforms.com/rgar/#h-3-key-does-not-exist-but-default-value-provided)
- [4\. Used with IF statement](https://docs.gravityforms.com/rgar/#h-4-used-with-if-statement)
- [5\. Used with Ternary Shorthand](https://docs.gravityforms.com/rgar/#h-5-used-with-ternary-shorthand)
- [Source Code](https://docs.gravityforms.com/rgar/#h-source-code)

## Description

Get a specific property of an array without needing to check if that property exists.

Provide a default value if you want to return a specific value if the property is not set.

## Usage

|     |     |
| --- | --- |
| 1 | `rgar(``$array``,``$prop``);` |

|     |     |
| --- | --- |
| 1 | `rgar(``$array``,``$prop``,``$default_value``);` |

## Parameters

- **$array** [array](https://docs.gravityforms.com/array)

Array from which the property’s value should be retrieved.
- **$prop** [string](https://docs.gravityforms.com/string)

Name of the property to be retrieved.
- **$default\_value** [string](https://docs.gravityforms.com/string)

Value that should be returned if the property is not set or empty. Defaults to null. This parameter is OPTIONAL.

## Returns

null\|string\|mixed The value

## Examples

### 1\. Key exists

This example will return the value for the key “dog” – Roddenberry.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `$pets``=``array``(`<br>```'dog'``=>``'Roddenberry'``,`<br>```'cat'``=>``'Tucker'`<br>`);`<br>`rgar(``$pets``,``'dog'``);` |

### 2\. Key does not exist

This example returns the value for the key “ferret”. Since this key does not exist and no default value was provided to the function, **null** is returned.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `$pets``=``array``(`<br>```'dog'``=>``'Roddenberry'``,`<br>```'cat'``=>``'Tucker'`<br>`);`<br>`rgar(``$pets``,``'ferret'``);` |

### 3\. Key does not exist but default value provided

This example returns the value for the key “ferret”. Since this key does not exist the default value passed to the function is returned – Malcolm.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `$pets``=``array``(`<br>```'dog'``=>``'Roddenberry'``,`<br>```'cat'``=>``'Tucker'`<br>`);`<br>`rgar(``$pets``,``'ferret'``,``'Malcolm'``);` |

### 4\. Used with IF statement

This examples checks the [Form Object](https://docs.gravityforms.com/form-object) to see if the honey pot is enabled.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `// Honey pot.`<br>`$honey_pot_checked``=``''``;`<br>`if``( rgar(``$form``,``'enableHoneypot'``) ) {`<br>```$honey_pot_checked``=``'checked="checked"'``;`<br>`}` |

### 5\. Used with Ternary Shorthand

This example checks the [Confirmation Object](https://docs.gravityforms.com/confirmations-object) to see if its type is set, if so, the confirmation type is set to its value, otherwise the type is set to “message”.

|     |     |
| --- | --- |
| 1 | `$confirmation_type``= rgar(``$confirmation``,``'type'``) ? rgar(``$confirmation``,``'type'``) :``'message'``;` |

## Source Code

This function is located in _gravityforms.php_

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 21, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/rgar/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)