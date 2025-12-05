---
url: "https://docs.gravityforms.com/repeater-fields/"
title: "Repeater (beta) - Gravity Forms Documentation"
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
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)    - [Address](https://docs.gravityforms.com/address-field/ "Address")
    - [CAPTCHA](https://docs.gravityforms.com/captcha/ "CAPTCHA")
    - [Chained Selects Field](https://docs.gravityforms.com/chained-selects/ "Chained Selects Field")
    - [Consent Field](https://docs.gravityforms.com/consent/ "Consent Field")
    - [Date](https://docs.gravityforms.com/date/ "Date")
    - [Email](https://docs.gravityforms.com/email/ "Email")
    - [File Upload](https://docs.gravityforms.com/file-upload/ "File Upload")
    - [List](https://docs.gravityforms.com/list/ "List")
    - [Multi Select](https://docs.gravityforms.com/multi-select/ "Multi Select")
    - [Name](https://docs.gravityforms.com/name/ "Name")
    - [Password](https://docs.gravityforms.com/password/ "Password")
    - [Phone](https://docs.gravityforms.com/phone/ "Phone")
    - [Pipe](https://docs.gravityforms.com/pipe-recorder-field/ "Pipe")
    - [Poll](https://docs.gravityforms.com/polls/ "Poll")
    - [Quiz](https://docs.gravityforms.com/quiz-field/ "Quiz")
    - [Repeater (beta)](https://docs.gravityforms.com/repeater-fields/ "Repeater (beta)")
    - [Signature](https://docs.gravityforms.com/signature/ "Signature")
    - [Survey](https://docs.gravityforms.com/survey/ "Survey")
    - [Time](https://docs.gravityforms.com/time/ "Time")
    - [Username](https://docs.gravityforms.com/username/ "Username")
    - [Website](https://docs.gravityforms.com/website/ "Website")
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Repeater (beta)

- [Introduction](https://docs.gravityforms.com/repeater-fields/#h-introduction)
- [Appearance](https://docs.gravityforms.com/repeater-fields/#h-appearance)
- [Field Properties](https://docs.gravityforms.com/repeater-fields/#h-field-properties)
- [Permitted Sub-Fields](https://docs.gravityforms.com/repeater-fields/#h-permitted-sub-fields)
- [Label](https://docs.gravityforms.com/repeater-fields/#h-label)
- [Maximum Repeater Items](https://docs.gravityforms.com/repeater-fields/#h-maximum-repeater-items)
- [Button Text](https://docs.gravityforms.com/repeater-fields/#h-button-text)
- [Repeater Field Nesting](https://docs.gravityforms.com/repeater-fields/#h-repeater-field-nesting)
- [Limitations](https://docs.gravityforms.com/repeater-fields/#h-limitations)
- [Entries](https://docs.gravityforms.com/repeater-fields/#h-entries)
- [Export](https://docs.gravityforms.com/repeater-fields/#h-export)
- [Sample Forms](https://docs.gravityforms.com/repeater-fields/#h-sample-forms)
- [All Supported Fields](https://docs.gravityforms.com/repeater-fields/#h-all-supported-fields)
- [Nested Repeaters](https://docs.gravityforms.com/repeater-fields/#h-nested-repeaters)
- [Sample Code](https://docs.gravityforms.com/repeater-fields/#h-sample-code)
- [Example 1](https://docs.gravityforms.com/repeater-fields/#h-example-1)
- [Example 2](https://docs.gravityforms.com/repeater-fields/#h-example-2)
- [Placement of the Repeater field within a form](https://docs.gravityforms.com/repeater-fields/#h-placement-of-the-repeater-field-within-a-form)

**Note**: This field type, released with Gravity Forms 2.4, is **currently in BETA**. There is **no Form Editor UI component built for this field yet**. This means you cannot add this field to a form using standard Form Editor drag and drop methods. Currently this field is only intended for developers who can build their forms programmatically, or through other methods. Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you are a developer who has run into trouble using this field.

## Introduction

A repeater field is **a collection of other Gravity Forms fields**, combined into a set that can then be used as a single form. The benefit is that when a user submits the form, the repeater field collection can be entered multiple times by the submitter, within the same single form submission.

**Example:** a repeater field for phone number, allowing a user to enter multiple country codes, phone numbers and associated phone number type data on a single _contact form_ submission.

**Example:** a repeater field consisting of attendee names and job titles, allowing a single _convention registration form_ submission to include multiple people from the same organization.

Additionally, repeater fields can be **nested** within another repeater field. For example, you could allow multiple contact phone numbers to be entered for each attendee by combining the two examples mentioned above.

Save & Continue functionality is supported.

## Appearance

Example of a Repeater field containing just one Name field.

![](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-simple.gif)

Example with 3 nested Repeater fields.

![](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-frontend.png)

Sub-fields are listed in the entry list filter so they can be searched like other fields on the form.

![](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-field-filters.png)

## Field Properties

#### Permitted Sub-Fields

The **fields** property of the Repeater field is an array of fields ( **GF\_Field** objects). Supported field types are as follows:

Single Line Text; Paragraph Text; Drop Down; Multi Select; Number; Checkboxes; Radio Buttons; Name; Date; Time; Phone (“international” format only); Address; Website; Email; List; Repeater (Nested).

#### Label

The value of the **label** property will be displayed at the top of the repeater field.

#### Maximum Repeater Items

The maximum number of items allowed in a repeater can be set using the **maxItems** field property (true/false).

#### Button Text

The button texts for adding and removing items for each repeater field can be defined with the field properties **addButtonText** and **removeButtonText**.

## Repeater Field Nesting

A Repeater field can be nested inside another Repeater field.

There is no enforced limit to nesting depth, though form designers should consider the implications especially when designing for narrower screens.

## Limitations

The following limitations exist for repeater fields as currently released. These items are likely to be addressed in future updates, so we recommend you monitor the latest releases to keep an eye on future improvements.

- Conditional logic is not yet implemented.
- Calculations are not yet implemented.
- Re-ordering of items within the repeater field during form entry is not yet implemented.
- The rich text editor does not work within the paragraph field.
- Enhanced UI feature for a dropdown select field does not work.
- The confirmation feature of the email field does not work.
- The “Standard” US format for the phone field does not work as expected.
- File Upload, Signature field, and Password field cannot be incorporated into a repeater fieldset.
- The CSS Ready classes will not work for fields inside the repeater.
- Dynamic population is not yet supported.
- Maintaining default values for the new items is not yet supported.
- Assigning unique tabindex attributes to new items is not yet supported. We recommend disabling the tabindex when embedding the form by using a value of 0.
- Validation is not fully implemented.
- Pricing fields are not included in the total and order summary, so are not supported by payment add-ons.
- Fields included by add-ons that rely on JavaScript are unlikely to function as expected.

## Entries

All repeater field items will be displayed values that can be edited when the entry is edited.

To help with readability, the repeater field entry display uses indentation and line breaks to display the (possibly multiple) levels of input received in the single repeater field for an entry.

## Export

The Conditional Logic setting for the entry export allows filtering by values of a Repeater’s sub-fields.

![](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-field-export-conditional-logic.png)

Note that indentations and line breaks will be present when you export the repeater data.

## Sample Forms

### All Supported Fields

All supported fields inside a repeater field:

[repeater-all-supported-fields.zip](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-all-supported-fields.zip)

### Nested Repeaters

Three nested repeater fields:

[repeater-3-nested.zip](https://docs.gravityforms.com/wp-content/uploads/2018/10/repeater-3-nested.zip)

## Sample Code

### Example 1

How to add a Repeater field programmatically.

|     |
| --- |
| `// Adjust your form ID`<br>`add_filter(``'gform_form_post_get_meta_149'``,``'add_my_field'``);`<br>`function``add_my_field(``$form``) {`<br>```// Create a Single Line text field for the team member's name`<br>```$name``= GF_Fields::create(``array``(`<br>```'type'``=>``'text'``,`<br>```'id'``=> 1002,``// The Field ID must be unique on the form`<br>```'formId'``=>``$form``[``'id'``],`<br>```'label'``=>``'Name'``,`<br>```'pageNumber'``=> 1,``// Ensure this is correct`<br>```) );`<br>```// Create an email field for the team member's email address`<br>```$email``= GF_Fields::create(``array``(`<br>```'type'``=>``'email'``,`<br>```'id'``=> 1001,``// The Field ID must be unique on the form`<br>```'formId'``=>``$form``[``'id'``],`<br>```'label'``=>``'Email'``,`<br>```'pageNumber'``=> 1,``// Ensure this is correct`<br>```) );`<br>```// Create a repeater for the team members and add the name and email fields as the fields to display inside the repeater.`<br>```$team``= GF_Fields::create(``array``(`<br>```'type'``=>``'repeater'``,`<br>```'description'``=>``'Maximum of 3 team members  - set by the maxItems property'``,`<br>```'id'``=> 1000,``// The Field ID must be unique on the form`<br>```'formId'``=>``$form``[``'id'``],`<br>```'label'``=>``'Team Members'``,`<br>```'addButtonText'``=>``'Add team member'``,``// Optional`<br>```'removeButtonText'``=>``'Remove team member'``,``// Optional`<br>```'maxItems'``=> 3,``// Optional`<br>```'pageNumber'``=> 1,``// Ensure this is correct`<br>```'fields'``=>``array``(``$name``,``$email``),``// Add the fields here.`<br>```) );`<br>```$form``[``'fields'``][] =``$team``;`<br>```return``$form``;`<br>`}`<br>`// Remove the field before the form is saved. Adjust your form ID`<br>`add_filter(``'gform_form_update_meta_149'``,``'remove_my_field'``, 10, 3 );`<br>`function``remove_my_field(``$form_meta``,``$form_id``,``$meta_name``) {`<br>```if``(``$meta_name``==``'display_meta'``) {`<br>```// Remove the Repeater field: ID 1000`<br>```$form_meta``[``'fields'``] = wp_list_filter(``$form_meta``[``'fields'``],``array``(``'id'``=> 1000 ),``'NOT'``);`<br>```}`<br>```return``$form_meta``;`<br>`}` |

### Example 2

This snippet grabs all the fields from another form, puts them into a single repeater field and adds the repeater to the form. Note that it may be necessary to set the pageNumber property.

|     |
| --- |
| `// Adjust your form ID`<br>`add_filter(``'gform_form_post_get_meta_150'``,``'add_fields_from_another_form'``);`<br>`function``add_fields_from_another_form(``$form``) {`<br>```$repeater``= GF_Fields::create(``array``(`<br>```'type'``=>``'repeater'``,`<br>```'id'``=> 1000,`<br>```'formId'``=>``$form``[``'id'``],`<br>```'label'``=>``'My Repeater'``,`<br>```'pageNumber'``=> 1,``// Ensure this is correct`<br>```) );`<br>```$another_form``= GFAPI::get_form( 103 );`<br>```foreach``(``$another_form``[``'fields'``]``as``$field``) {`<br>```$field``->id         =``$field``->id + 1000;`<br>```$field``->formId     =``$form``[``'id'``];`<br>```$field``->pageNumber = 1;``// Ensure this is correct`<br>```if``(``is_array``(``$field``->inputs ) ) {`<br>```foreach``(``$field``->inputs``as``&``$input``) {`<br>```$input``[``'id'``] = (string) (``$input``[``'id'``] + 1000 );`<br>```}`<br>```}`<br>```}`<br>```$repeater``->fields =``$another_form``[``'fields'``];`<br>```$form``[``'fields'``][] =``$repeater``;`<br>```return``$form``;`<br>`}`<br>`// Remove the field before the form is saved. Adjust your form ID`<br>`add_filter(``'gform_form_update_meta_150'``,``'remove_my_field'``, 10, 3 );`<br>`function``remove_my_field(``$form_meta``,``$form_id``,``$meta_name``) {`<br>```if``(``$meta_name``==``'display_meta'``) {`<br>```// Remove the Repeater field: ID 1000`<br>```$form_meta``[``'fields'``] = wp_list_filter(``$form_meta``[``'fields'``],``array``(``'id'``=> 1000 ),``'NOT'``);`<br>```}`<br>```return``$form_meta``;`<br>`}` |

## Placement of the Repeater field within a form

The placement of the repeater field in the form also needs to be controlled programmatically. Here is an example showing how you could insert the repeater field at a specific position in the fields array:

|     |
| --- |
| `array_splice``(``$form``[``'fields'``], 2, 0,``array``(``$repeater``) );` |

The fields array starts with an index of 0, using the above line which is adding the repeater field at index 2 would make the repeater field the third field on the form. You will need to determine what number you need to change the 2 in the example above to so that the repeater field falls between the range of fields in your form where you would like it to be located.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 1, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/repeater-fields/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)