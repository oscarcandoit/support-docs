---
url: "https://docs.gravityforms.com/entry-object/"
title: "Entry Object - Gravity Forms Documentation"
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

# Entry Object

- [Introduction](https://docs.gravityforms.com/entry-object/#h-introduction)
- [Properties](https://docs.gravityforms.com/entry-object/#h-properties)
- [Usage](https://docs.gravityforms.com/entry-object/#h-usage)
- [List Field](https://docs.gravityforms.com/entry-object/#h-list-field)
- [Checkboxes Field](https://docs.gravityforms.com/entry-object/#h-checkboxes-field)
- [Add-On Field Values](https://docs.gravityforms.com/entry-object/#h-add-on-field-values)
- [Entry JSON](https://docs.gravityforms.com/entry-object/#h-entry-json)

## Introduction

The Entry object contains all properties of a particular entry (i.e. date created, client IP, submitted field values, etc…). It is formatted as an associative array with field Ids being the key to that field’s data.

## Properties

| Prop | Type | Description |
| --- | --- | --- |
| **id** | [integer](https://docs.gravityforms.com/integer) | The unique ID assigned to the entry by the database. |
| **form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form the entry was created by. |
| **created\_by** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Null or the ID of the logged-in user who submitted the form. |
| **date\_created** | [string](https://docs.gravityforms.com/string) | The UTC date and time the entry was created.<br>Format: `YYYY-MM-DD HH:MM:SS` |
| **date\_updated** | [string](https://docs.gravityforms.com/string) | The UTC date and time the entry was most recently updated.<br>Format: `YYYY-MM-DD HH:MM:SS` |
| **is\_starred** | [bool](https://docs.gravityforms.com/bool/) \| [integer](https://docs.gravityforms.com/integer) | Indicates if the entry has been starred (i.e., marked with a star). <br>`true` or `1` when starred.<br>`false` or `0` when not starred. |
| **is\_read** | [bool](https://docs.gravityforms.com/bool/) \| [integer](https://docs.gravityforms.com/integer) | Indicates if the entry has been viewed.<br>`true` or `1` when viewed.<br>`false` or `0` when not viewed. |
| **ip** | [string](https://docs.gravityforms.com/string) | The IP address of the user who submitted the form. |
| **source\_url** | [string](https://docs.gravityforms.com/string) | The URL of the request that saved the entry, limited to 200 characters. Usually, the URL of the page where the form is embedded. It can also contain the Admin Ajax or REST endpoint URL if the entry was created by an Ajax or REST API request. |
| **post\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Null or the ID of the post created by legacy post fields.<br>This is not used by the Advanced Post Creation add-on. |
| **user\_agent** | [string](https://docs.gravityforms.com/string) | The user agent string (limited to 250 characters) from the browser the user used to submit the form. Helps identify the browser, operating system, and device used to submit the form, but it can be unreliable. |
| **status** | [string](https://docs.gravityforms.com/string) | The current status of the entry.<br>Possible values: `active`, `spam`, `trash` |
| **currency** | [string](https://docs.gravityforms.com/string) | The three character [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) currency code used by the submission for any pricing fields and payment add-ons. |
| **payment\_status** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) | Null or the status (limited to 15 characters) of the transaction processed by a payment add-on.<br>Possible values: `Authorized`, `Paid`, `Processing`, `Pending`, `Active`, `Expired`, `Failed`, `Cancelled`, `Approved`, `Reversed`, `Refunded`, `Voided`, or a custom value set by a third-party add-on. |
| **payment\_date** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) | Null or the UTC date and time the transaction was processed.<br>Format: `YYYY-MM-DD HH:MM:SS` |
| **payment\_amount** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer/) \| [float](https://docs.gravityforms.com/float/) | Null or the transaction amount without the currency symbol. |
| **transaction\_id** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) | Null or the ID of the transaction returned by the payment gateway. |
| **is\_fulfilled** | [null](https://docs.gravityforms.com/null) \| [bool](https://docs.gravityforms.com/bool/) \| [integer](https://docs.gravityforms.com/integer) | Indicates if the entry/order has been fulfilled.<br>`true` or `1` when fulfilled.<br>`false` or `0` when not fulfilled. |
| **transaction\_type** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer/) | Indicates the transaction type of the entry/order.<br>`1` for a one-time payment (product/service type feed).<br>`2` for a subscription. |
| **source\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Null or the ID of the post or page where the form was embedded at the time the entry was saved.<br>Since Gravity Forms 2.9. |
| `...[Field or Input ID]` | mixed | Each field or input value is accessible in the entry using the field or input ID as the key to the value. |
| `...[Meta Key]` | mixed | Add-ons can register additional meta, some of which is accessible in the entry using the meta key as the key to the value. |

## Usage

|     |
| --- |
| `rgar(``$entry``,``'date_created'``);``// returns the entry date`<br>`rgar(``$entry``,``'1'``);``// returns the value associated with field 1 (This would be for fields with single input like Text, Number, Drop Down, etc...)`<br>`rgar(``$entry``,``'1.3'``);``// returns the value associated with the first name portion of a simple name field 1`<br>`rgar(``$entry``,``'1.6'``);``// returns the value associated with the last name portion of a simple name field 1`<br>`rgar(``$entry``,``'2.4'``);``// returns the value associated with the state input for the address field 2`<br>`rgar(``$entry``,``'5.1'``);``// returns the field label for a single product that has id 5`<br>`rgar(``$entry``,``'5.1'``);``// returns the field label for a single product that has id 5`<br>`GFCommon::to_number( rgar(``$entry``,``'5.2'``) );``// returns the field price, without currency symbol, for a single product that has id 5`<br>`rgar(``$entry``,``'5.3'``);``// returns the field quantity for a single product that has id 5` |

### List Field

Because the List field type has a complex structure with multiple rows and columns, it is stored in a serialized format. To work with its data, you must first unserialize the field.

|     |
| --- |
| `maybe_unserialize( rgar(``$entry``,``'3'``) );``// unserialize values associated with list field 3` |

### Checkboxes Field

To easily obtain a comma-separated string of selected checkboxes without manually iterating through each input, use the `get_value_export` method of the field object. For example:

|     |
| --- |
| `$field_id``= 18;``// Update this number to your field id number`<br>`$field``= GFAPI::get_field(``$form_or_id``,``$field_id``);`<br>`$value``=``is_object``(``$field``) ?``$field``->get_value_export(``$entry``) :``''``;` |

The `get_value_export` method returns a comma-separated list of the _values_ for selected choices. If you want to retrieve the actual _choice_ text instead, you’ll need to use a different approach.

|     |
| --- |
| `$value``=``is_object``(``$field``) ?``$field``->get_value_export(``$entry``,``$field_id``, true ) :``''``;` |

You can easily convert the comma-separated list to an array using PHP’s [explode()](http://php.net/manual/en/function.explode.php) function.

### Add-On Field Values

See the following pages for details about the entry values for fields added by add-ons:

- [Coupon](https://docs.gravityforms.com/entry-object/GF_Field_Coupon)
- [Dropbox Upload](https://docs.gravityforms.com/entry-object/GF_Field_Dropbox)

## Entry JSON

This example shows how an entry array would look when formatted as JSON for use by the [Gravity Forms CLI Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/wp-cli-add-on/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `{`<br>```"1"``:``"Third Choice"``,`<br>```"2"``:``"This is text content"``,`<br>```"id"``:``"1"``,`<br>```"form_id"``:``"1"``,`<br>```"date_created"``:``"2016-03-22 19:13:19"``,`<br>```"is_starred"``: 0,`<br>```"is_read"``: 0,`<br>```"ip"``:``"192.168.50.1"``,`<br>```"source_url"``:``"http:\\/\\/local.wordpress.dev\\/?gf_page=preview&amp;id=1"``,`<br>```"post_id"``:``null``,`<br>```"currency"``:``"USD"``,`<br>```"payment_status"``:``null``,`<br>```"payment_date"``:``null``,`<br>```"transaction_id"``:``null``,`<br>```"payment_amount"``:``null``,`<br>```"payment_method"``:``null``,`<br>```"is_fulfilled"``:``null``,`<br>```"created_by"``:``"1"``,`<br>```"transaction_type"``:``null``,`<br>```"user_agent"``:``"Mozilla\\/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/48.0.2564.116 Safari\\/537.36"``,`<br>```"status"``:``"active"`<br>`}` |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: December 15, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/entry-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)