---
url: "https://docs.gravityforms.com/conditional-logic-object/"
title: "Conditional Logic Object - Gravity Forms Documentation"
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
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)    - [Button Object](https://docs.gravityforms.com/button/ "Button Object")
    - [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object/ "Conditional Logic Object")
    - [Confirmations Object](https://docs.gravityforms.com/confirmations-object/ "Confirmations Object")
    - [Entry Object](https://docs.gravityforms.com/entry-object/ "Entry Object")
    - [Field Object](https://docs.gravityforms.com/field-object/ "Field Object")
    - [Form Object](https://docs.gravityforms.com/form-object/ "Form Object")
    - [Notifications Object](https://docs.gravityforms.com/notifications-object/ "Notifications Object")
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Conditional Logic Object

- [Introduction](https://docs.gravityforms.com/conditional-logic-object/#h-introduction)
- [Usage](https://docs.gravityforms.com/conditional-logic-object/#h-usage)
- [Properties](https://docs.gravityforms.com/conditional-logic-object/#h-properties)
- [Rule](https://docs.gravityforms.com/conditional-logic-object/#rule)

## Introduction

Conditional Logic, when applied to the form or page button or to any field, controls the visibility of that element based on a choice selected or value entered by the user in other fields on the form. It can also be used to determine if a notification, confirmation or add-on feed should be used.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13 | `array``(`<br>```'conditionalLogic'``=>``array``(`<br>```'actionType'``=>``'show'``,`<br>```'logicType'``=>``'all'``,`<br>```'rules'``=>``array``(`<br>```array``(`<br>```'fieldId'``=> 2,`<br>```'operator'``=>``'is'``,`<br>```'value'``=>``'Second Choice'``,`<br>```),`<br>```)`<br>```),`<br>`);` |

## Usage

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `// returns the conditional logic rules for the form button`<br>`$rules``= rgars(``$form``,``'button/conditionalLogic/rules'``);`<br>`// returns the conditional logic rules for the field`<br>`$rules``= rgar(``$field``->conditionalLogic,``'rules'``);`<br>`// returns the conditional logic rules for the feed`<br>`$rules``= rgars(``$feed``,``'meta/feed_condition_conditional_logic_object/conditionalLogic/rules'``);` |

## Properties

| Prop | Type | Description |
| --- | --- | --- |
| **actionType** | [string](https://docs.gravityforms.com/string) | The type of action the conditional logic will perform.<br>Possible values:<br>`show`: Displays the field when the rules match and hides the field when the rules do not match.<br>`hide`: Hides the field when the rules match and displays the field when the rules match. |
| **logicType** | [string](https://docs.gravityforms.com/string) | Determines how to the rules should be evaluated.<br>Possible values:<br>`any`: Evaluates the conditional logic to true if any of the rules match. More specifically, will **OR** the rules together (i.e. rule1 \|\| rule2 \|\| rule3).<br>`all`: Evaluates the conditional logic to true if all rules match. More specifically, will **AND** the rules together (i.e. rule1 && rule2 && rule3). |
| **rules** | [array](https://docs.gravityforms.com/array) | An indexed array containing associative arrays for each [rule](https://docs.gravityforms.com/conditional-logic-object/#rule). |

### Rule

| Prop | Type | Description |
| --- | --- | --- |
| **fieldId** | [integer](https://docs.gravityforms.com/integer) \| [string](https://docs.gravityforms.com/string) | The ID of the form field, entry property, or entry meta that will have it’s value compared to the rule `value`. |
| **operator** | [string](https://docs.gravityforms.com/string) | The operator to be used when evaluating this rule.<br>Possible values:<br>`is`: Evaluates this rule to `true` when the value of the field specified by `fieldId` is equal to `value`.<br>`isnot`: Evaluates this rule to `true` when the value of the field specified by `fieldId` is not equal to `value`.<br>`<`: Evaluates this rule to `true` when the value of the field specified by `fieldId` is less than `value`.<br>`>`: Evaluates this rule to `true` when the value of the field specified by `fieldId` is greather than `value`.<br>`contains`: Evaluates this rule to `true` when the value of the field specified by `fieldId` contains `value`.<br>`starts_with`: Evaluates this rule to `true` when the value of the field specified by `fieldId` starts with `value`.<br>`ends_with`: Evaluates this rule to `true` when the value of the field specified by `fieldId` ends with `value`. |
| **value** | [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) | The value to be compared with the value of the field specified by `fieldId`. |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 29, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/conditional-logic-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)