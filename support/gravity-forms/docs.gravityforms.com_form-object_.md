---
url: "https://docs.gravityforms.com/form-object/"
title: "Form Object - Gravity Forms Documentation"
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

# Form Object

- [Introduction](https://docs.gravityforms.com/form-object/#introduction)
- [Usage](https://docs.gravityforms.com/form-object/#usage)
- [Properties](https://docs.gravityforms.com/form-object/#properties)
- [Basic](https://docs.gravityforms.com/form-object/#h-basic)
- [Form Layout](https://docs.gravityforms.com/form-object/#form-layout)
- [Save and Continue](https://docs.gravityforms.com/form-object/#save-and-continue)
- [Save and Continue Button](https://docs.gravityforms.com/form-object/#save-and-continue-button)
- [Restrictions](https://docs.gravityforms.com/form-object/#restrictions)
- [Spam Detection](https://docs.gravityforms.com/form-object/#h-spam-detection)
- [Form Options](https://docs.gravityforms.com/form-object/#h-form-options)
- [Post Creation](https://docs.gravityforms.com/form-object/#h-post-creation)
- [Personal Data](https://docs.gravityforms.com/form-object/#personal-data)
- [Retention Policy](https://docs.gravityforms.com/form-object/#retention-policy)
- [Exporting and Erasing Data](https://docs.gravityforms.com/form-object/#exporting-and-erasing-data)
- [Pagination](https://docs.gravityforms.com/form-object/#pagination)
- [Add-Ons](https://docs.gravityforms.com/form-object/#h-add-ons)
- [Form JSON](https://docs.gravityforms.com/form-object/#form-json)

## Introduction

The form object, available to most action hooks and filters, is an associative array containing the form settings, fields, notifications, confirmations, and other properties (e.g. add-on settings).

## Usage

|     |
| --- |
| `// Getting a form property.`<br>`$title``= rgar(``$form``,``'title'``);`<br>`// Getting a nested form property.`<br>`$button_text``= rgars(``$form``,``'button/text'``);`<br>`// Setting a form property.`<br>`$form``[``'description'``] =``'the form description'``;` |

## Properties

### Basic

| Prop | Type | Description |
| --- | --- | --- |
| **id** | [integer](https://docs.gravityforms.com/integer) | The form ID. |
| **title** | [string](https://docs.gravityforms.com/string) | The form title. |
| **description** | [string](https://docs.gravityforms.com/string) | The form description. |
| **date\_created** | [string](https://docs.gravityforms.com/string) | The date form was created in the format YYYY-MM-DD HH:MM:SS |
| **date\_updated** | [null](https://docs.gravityforms.com/null) | Not used. |
| **is\_active** | [boolean](https://docs.gravityforms.com/boolean) | The form active/inactive status. |
| **is\_trash** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the form is in the trash. |
| **version** | [string](https://docs.gravityforms.com/string) | The Gravity Forms version used to create the form. |
| **fields** | [array](https://docs.gravityforms.com/array) | An indexed array of [Field Objects](https://docs.gravityforms.com/field-object/). |
| **button** | [array](https://docs.gravityforms.com/array) | The submit [Button Object](https://docs.gravityforms.com/button/). |
| **notifications** | [array](https://docs.gravityforms.com/array) | The [Notifications Object](https://docs.gravityforms.com/notifications-object/). |
| **confirmations** | [array](https://docs.gravityforms.com/array) | The [Confirmations Object](https://docs.gravityforms.com/confirmations-object/). |
| **confirmation** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | Populated automatically during form submission with the [Confirmation Object](https://docs.gravityforms.com/confirmations-object/#confirmation-properties) being used for the current submission. |
| **save** | [array](https://docs.gravityforms.com/array) | Since v1.9. See [Save and Continue](https://docs.gravityforms.com/form-object/#save-and-continue). |
| **personalData** | [array](https://docs.gravityforms.com/array) | Since v2.4. See [Personal Data](https://docs.gravityforms.com/form-object/#personal-data). |
| **pagination** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | Only applicable to multipage forms. See [Pagination](https://docs.gravityforms.com/form-object/#pagination). |
| **lastPageButton** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | Only applicable to multipage forms.<br>The [Button Object](https://docs.gravityforms.com/button/) for the previous button on the last page. |
| **nextFieldId** | [integer](https://docs.gravityforms.com/integer) | Since 2.4.7.<br>Calculated automatically every time the form is retrieved from the database.<br>The form fields `id` properties are recursively checked to find the highest ID for all the fields in the form. The result is then incremented by 1. |

### Form Layout

| Prop | Type | Description |
| --- | --- | --- |
| **labelPlacement** | [string](https://docs.gravityforms.com/string) | The default location of the field labels.<br>Possible values:<br>`top_label`: Above the inputs.<br>`left_label`: Left aligned; inline before the inputs.<br>`right_label`: Right aligned; inline before the inputs. |
| **descriptionPlacement** | [string](https://docs.gravityforms.com/string) | Only used when `labelPlacement` is `top_label`.<br>The default location of the field descriptions.<br>Possible values:<br>`above`: Above the inputs.<br>`below`: Below the inputs. |
| **subLabelPlacement** | [string](https://docs.gravityforms.com/string) | Only applies to fields containing multiple inputs (e.g. Name).<br>The default location of the field sub labels.<br>Possible values:<br>`above`: Above the inputs.<br>`below`: Below the inputs. |
| **validationSummary** | [boolean](https://docs.gravityforms.com/boolean) | Since v2.5<br>Default: `false`<br>Indicates if a summary of field validation errors should be listed at the top of the form. |
| **requiredIndicator** | [string](https://docs.gravityforms.com/string) | Since v2.5<br>Default: `text`<br>Legacy Default: `asterisk`<br>Defines what is used to indicate that a field is required.<br>Possible values:<br>`text`: Uses “(Required)”.<br>`asterisk`: Uses “\*”<br>`custom`: Uses the value of the `customRequiredIndicator` setting. |
| **customRequiredIndicator** | [string](https://docs.gravityforms.com/string) | Since v2.5<br>Only used when `requiredIndicator` is `custom`.<br>Allows a custom required indicator to be defined. |
| **cssClass** | [string](https://docs.gravityforms.com/string) | One or more space separated custom class names that will be added to the `class` attribute on the `<form>` tag. |

### Save and Continue

The following properties are stored in an array assigned to `$form['save']`.

| Prop | Type | Description |
| --- | --- | --- |
| **enabled** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the save and continue later feature is enabled for the form. |
| **button** | [array](https://docs.gravityforms.com/array) | See [Save and Continue Button](https://docs.gravityforms.com/form-object/#save-and-continue-button). |

#### Save and Continue Button

The following properties are stored in an array assigned to `$form['save']['button']`.

| Prop | Type | Description |
| --- | --- | --- |
| **type** | [string](https://docs.gravityforms.com/string) | The button type.<br>Default: `link`<br>Possible values: `link` |
| **text** | [string](https://docs.gravityforms.com/string) | The button text.<br>Default: `Save and Continue Later` |

### Restrictions

| Prop | Type | Description |
| --- | --- | --- |
| **limitEntries** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if there is a limit on the number of entries this form can have. |
| **limitEntriesCount** | [integer](https://docs.gravityforms.com/integer) | The total number of entries that can be created for this form during the period defined for `limitEntriesPeriod`. |
| **limitEntriesPeriod** | [string](https://docs.gravityforms.com/string) | The period the limit is based on.<br>Possible values:<br>An empty string to indicate the limit is based on the total number of entries that exist for the form regardless of when they were submitted.<br>`day`: the limit resets daily.<br>`week`: the limit resets weekly.<br>`month`: the limit resets monthly.<br>`year`: the limit resets yearly. |
| **limitEntriesMessage** | [string](https://docs.gravityforms.com/string) | The message that will be displayed when the limit is reached. |
| **scheduleForm** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the form should only be available during a scheduled period of time. |
| **scheduleStart** | [string](https://docs.gravityforms.com/string) | Date in the format (MM/DD/YYYY) that the form will become available. |
| **scheduleStartHour** | [integer](https://docs.gravityforms.com/integer) | Hour (1 to 12) that the form will become available. |
| **scheduleStartMinute** | [integer](https://docs.gravityforms.com/integer) | Minute that the form will become available. |
| **scheduleStartAmpm** | [string](https://docs.gravityforms.com/string) | Indicates if the `scheduleStartHour` is before or after midday.<br>Possible values: `am` or `pm` |
| **scheduleEnd** | [string](https://docs.gravityforms.com/string) | Date in the format (MM/DD/YYYY) that the form will become unavailable. |
| **scheduleEndHour** | [integer](https://docs.gravityforms.com/integer) | Hour (1 to 12) that the form will become unavailable. |
| **scheduleEndMinute** | [integer](https://docs.gravityforms.com/integer) | Minute that the form will become unavailable. |
| **scheduleEndAmpm** | [string](https://docs.gravityforms.com/string) | Indicates if the `scheduleEndHour` is before or after midday.<br>Possible values: `am` or `pm` |
| **schedulePendingMessage** | [string](https://docs.gravityforms.com/string) | The message to be displayed when the form is not yet available. |
| **scheduleMessage** | [string](https://docs.gravityforms.com/string) | The message to be displayed when the form is no longer available. |
| **requireLogin** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the user must be logged in to access the form. |
| **requireLoginMessage** | [string](https://docs.gravityforms.com/string) | The message to be displayed when the user isn’t logged in. |

### Spam Detection

| **Prop** | **Type** | **Description** |
| --- | --- | --- |
| **enableHoneypot** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the honeypot feature is enabled. The honeypot uses multiple techniques to detect spam. |
| **honeypotAction** | [string](https://docs.gravityforms.com/string) | Since v2.7<br>Determines if the submission is ignored or the entry is saved and marked as spam.<br>Default: `spam`<br>Possible values: `abort` or `spam` |
| **enableSubmitSpeedCheck** | [boolean](https://docs.gravityforms.com/boolean) | Since v2.9.21<br>Indicates if the “Submission Speed Check” feature is enabled. Flags the submission as spam if the elapsed time between page load and form submission is less than the threshold.<br>Default: `false` |
| **submitSpeedCheckThreshold** | [integer](https://docs.gravityforms.com/integer) | Since v2.9.21<br>The threshold for the speed check in milliseconds.<br>Default: `2000` |
| **submitSpeedCheckMode** | [string](https://docs.gravityforms.com/string) | Since v2.9.21<br>The mode to use when evaluating the submission speeds. Possible values:<br>– `normal`: at least one speed must be above the threshold.<br>– `strict`: all speeds must be above the threshold.<br>Default: `normal`. |

### Form Options

| Prop | Type | Description |
| --- | --- | --- |
| **enableAnimation** | [boolean](https://docs.gravityforms.com/boolean) | Indicates conditional logic should use a slide animation when displaying and hiding fields and buttons. |
| **markupVersion** | [integer](https://docs.gravityforms.com/integer) | Indicates which version of the form markup should be used.<br>Possible values:<br>`1`: Indicates legacy markup (pre-2.5) is enabled.<br>`2`: Indicates the accessible markup introduced in v2.5 should be used. |

### Post Creation

The following properties impact the behaviour of the built-in post creation feature; they are populated in the form editor by configuring [Post fields](https://docs.gravityforms.com/category/user-guides/post-fields/).

They don’t impact posts created by the [Advanced Post Creation Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/advanced-post-creation-add-on/).

| Prop | Type | Description |
| --- | --- | --- |
| **useCurrentUserAsAuthor** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the user logged in at the time the form is submitted should be the author. |
| **postAuthor** | [integer](https://docs.gravityforms.com/integer) | The ID of the user to be set as the author. |
| **postCategory** | [string](https://docs.gravityforms.com/string) | For forms without a Post Category field, this property determines the default category that the post will be associated with when created. |
| **postContentTemplateEnabled** | [boolean](https://docs.gravityforms.com/boolean) | Determines if the post template functionality is enabled. When enabled, the post content will be created based on the template specified by `postContentTemplate`. |
| **postContentTemplate** | [string](https://docs.gravityforms.com/string) | Only applicable when `postContentTemplateEnabled` is `true`.<br>Template to be used when creating the post content. Field merge tags (i.e. `{Name:3}`) can be added to the template to insert user submitted values into the post content. |
| **postFormat** | [string](https://docs.gravityforms.com/string) | Determines the format that the Post should be created with.<br>Possible values: Depends on the active theme. |
| **postStatus** | [string](https://docs.gravityforms.com/string) | Determines the status that the Post should be created with.<br>Possible values: `draft`, `pending`, or `publish` |
| **postTitleTemplateEnabled** | [boolean](https://docs.gravityforms.com/boolean) | Determines if the post title template functionality is enabled. When enabled, the post title will be created based on the template specified by `postTitleTemplate`. |
| **postTitleTemplate** | [string](https://docs.gravityforms.com/string) | Only applicable when `postTitleTemplateEnabled` is `true`.<br>Template to be used when creating the post title. Field merge tags (i.e. `{Name:3}`) can be added to the template to insert user submitted values into the post title. |

### Personal Data

The following properties are stored in an array assigned to `$form['personalData']`.

| Prop | Type | Description |
| --- | --- | --- |
| **preventIP** | [boolean](https://docs.gravityforms.com/boolean) | When enabled the IP address of the user submitting the form will not be saved. |
| **retention** | [array](https://docs.gravityforms.com/array) | See [Retention Policy](https://docs.gravityforms.com/form-object/#retention-policy). |
| **exportingAndErasing** | [array](https://docs.gravityforms.com/array) | See [Exporting and Erasing Data](https://docs.gravityforms.com/form-object/#exporting-and-erasing-data). |

#### Retention Policy

The following properties are stored in an array assigned to `$form['personalData']['retention']`.

| Prop | Type | Description |
| --- | --- | --- |
| **policy** | [string](https://docs.gravityforms.com/string) | Indicates how long the entries for this form should be retained.<br>Possible values:<br>`retain`: The default, retains them indefinitely, or until they are manually deleted.<br>`trash`: The entries are trashed during a daily cron job once their retention period is up.<br>`delete`: The entries are permanently deleted during a daily cron job once their retention period is up. |
| **retain\_entries\_days** | [integer](https://docs.gravityforms.com/integer) | The number of days the entries are retained, relative to their `date_created` property, before being trashed or permanently deleted. |

#### Exporting and Erasing Data

The following properties are stored in an array assigned to `$form['personalData']['exportingAndErasing']`.

| Prop | Type | Description |
| --- | --- | --- |
| **enabled** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if integration with the WordPress tools for exporting and erasing personal data is enabled. |
| **identificationField** | [integer](https://docs.gravityforms.com/integer) \| [string](https://docs.gravityforms.com/string) | The ID of the field or entry property containing the user email address or ID.<br>Possible values: The ID of a form email address field or `created_by` to use the ID of the logged in user who submitted the form. |
| **columns** | [array](https://docs.gravityforms.com/array) | [Exporting and Erasing Columns](https://docs.gravityforms.com/form-object/#exporting-and-erasing-columns) |

##### Exporting and Erasing Columns

The following properties are stored in an array assigned to `$form['personalData']['exportingAndErasing']['columns']`.

| Prop | Type | Description |
| --- | --- | --- |
| **ip** | [array](https://docs.gravityforms.com/array) | [Exporting and Erasing Column](https://docs.gravityforms.com/form-object/#exporting-and-erasing-column). |
| **source\_url** | [array](https://docs.gravityforms.com/array) | [Exporting and Erasing Column](https://docs.gravityforms.com/wp-admin/post.php?post=6449&action=edit#exporting-and-erasing-column). |
| **user\_agent** | [array](https://docs.gravityforms.com/array) | [Exporting and Erasing Column](https://docs.gravityforms.com/wp-admin/post.php?post=6449&action=edit#exporting-and-erasing-column). |

###### Exporting and Erasing Column

The following properties are stored in an array assigned to `$form['personalData']['exportingAndErasing']['columns']` using the entry property as the key.

| Prop | Type | Description |
| --- | --- | --- |
| **export** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if integration with the WordPress feature for exporting personal data is enabled. |
| **erase** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if integration with the WordPress feature for erasing personal data is enabled. |

### Pagination

The following properties are stored in an array assigned to `$form['pagination']`.

| Prop | Type | Description |
| --- | --- | --- |
| **type** | [array](https://docs.gravityforms.com/array) | The progress indicator type.<br>Possible values: `percentage`, `steps`, or `none` |
| **pages** | [array](https://docs.gravityforms.com/array) | Only applicable when `type` is `percentage` or `steps`.<br>An indexed array containing the page/step names. |
| **style** | [string](https://docs.gravityforms.com/string) | Only applicable when `type` is `percentage`.<br>The progress bar style.<br>Possible values: `blue`, `gray`, `green`, `orange`, `red`, `spring`, `blues`, `rainbow`, or `custom` |
| **backgroundColor** | [string](https://docs.gravityforms.com/string) | Only applicable when `type` is `percentage` and `style` is `custom`.<br>The progress bar background color.<br>A CSS hexadecimal color code. |
| **color** | [string](https://docs.gravityforms.com/string) | Only applicable when `type` is `percentage` and `style` is `custom`.<br>The progress bar text color.<br>A CSS hexadecimal color code. |
| **display\_progressbar\_on\_confirmation** | [boolean](https://docs.gravityforms.com/boolean) | Only applicable when `type` is `percentage`.<br>Indicates if the progress bar should start at 0% on the first page and end on 100% on the confirmation message instead of the last page. |
| **progressbar\_completion\_text** | [string](https://docs.gravityforms.com/string) | Only applicable when `type` is `percentage` and `display_progressbar_on_confirmation` is `true`.<br>The text to display when the progress bar is complete. |

### Add-Ons

Add-Ons which extend the [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/) and implement the `form_settings_fields` method will store the values of those settings in associative arrays using the add-on slug as the key. Example:

|     |
| --- |
| `$form``[``'gravityformsrecaptcha'``] =``array``(`<br>```'disable-recaptchav3'``=>``'1'``,`<br>`);` |

## Form JSON

This example shows how a form array would look when formatted as JSON for use by the [Gravity Forms CLI Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/wp-cli-add-on/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71 | `{`<br>```"title"``:``"My test form"``,`<br>```"description"``:``""``,`<br>```"labelPlacement"``:``"top_label"``,`<br>```"descriptionPlacement"``:``"below"``,`<br>```"button"``: {`<br>```"type"``:``"text"``,`<br>```"text"``:``"Submit"``,`<br>```"imageUrl"``:``""`<br>```},`<br>```"fields"``: [{`<br>```"type"``:``"text"``,`<br>```"label"``:``"My New Label"``,`<br>```"defaultValue"``:``"Just testing"``,`<br>```"id"``:``"1"``,`<br>```"visibility"``:``"visible"``,`<br>```"formId"``:``"14"``,`<br>```"pageNumber"``: 1`<br>```}, {`<br>```"type"``:``"select"``,`<br>```"label"``:``"My Dropdown"``,`<br>```"choices"``: [{`<br>```"text"``:``"Choice 1"``,`<br>```"value"``:``"one"`<br>```}, {`<br>```"text"``:``"Choice 2"``,`<br>```"value"``:``"two"`<br>```}],`<br>```"id"``:``"2"``,`<br>```"visibility"``:``"visible"``,`<br>```"formId"``:``"14"``,`<br>```"pageNumber"``: 1,`<br>```"isRequired"``:``false`<br>```}],`<br>```"version"``:``"2.3-rc-5"``,`<br>```"id"``:``"14"``,`<br>```"useCurrentUserAsAuthor"``:``true``,`<br>```"postContentTemplateEnabled"``:``false``,`<br>```"postTitleTemplateEnabled"``:``false``,`<br>```"postTitleTemplate"``:``""``,`<br>```"postContentTemplate"``:``""``,`<br>```"lastPageButton"``:``null``,`<br>```"pagination"``:``null``,`<br>```"firstPageCssClass"``:``null``,`<br>```"is_active"``:``"1"``,`<br>```"date_created"``:``"2018-04-12 16:51:40"``,`<br>```"is_trash"``:``"0"``,`<br>```"notifications"``: {`<br>```"5acf8e9cf2b40"``: {`<br>```"id"``:``"5acf8e9cf2b40"``,`<br>```"to"``:``"{admin_email}"``,`<br>```"name"``:``"Admin Notification"``,`<br>```"event"``:``"form_submission"``,`<br>```"toType"``:``"email"``,`<br>```"subject"``:``"New submission from {form_title}"``,`<br>```"message"``:``"{all_fields}"`<br>```}`<br>```},`<br>```"confirmations"``: {`<br>```"5acf8e9cf310a"``: {`<br>```"id"``:``"5acf8e9cf310a"``,`<br>```"name"``:``"Default Confirmation"``,`<br>```"isDefault"``:``true``,`<br>```"type"``:``"message"``,`<br>```"message"``:``"Thanks for contacting us! We will get in touch with you shortly."``,`<br>```"url"``:``""``,`<br>```"pageId"``:``""``,`<br>```"queryString"``:``""`<br>```}`<br>```}`<br>`}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 28, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/form-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)