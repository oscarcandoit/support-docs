---
url: "https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/"
title: "GFAPI Examples for Forms and Entries - Gravity Forms"
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

# GFAPI Examples for Forms and Entries

- [Getting and Manipulating Forms](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-and-manipulating-forms)
- [Getting All Forms](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-all-forms)
- [Getting a Single Form](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-a-single-form)
- [Updating a Form](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-updating-a-form)
- [Getting and Manipulating Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-and-manipulating-entries)
- [Getting All Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-all-entries)
- [Getting a Single Entry](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-getting-a-single-entry)
- [Update an Entry](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/#h-update-an-entry)

## Getting and Manipulating Forms

Obtaining and updating information is a quite simple process when using the GFAPI class. Below, you will see example on how you can easily retrieve and modify forms using the Gravity Forms API.

### Getting All Forms

You may want to simply get information on all forms within Gravity Forms. It can be done as simply as this:

|     |
| --- |
| `<?php`<br>`$forms``= GFAPI::get_forms();`<br>`?>` |

This will store your results within the _$form_ variable. To view information on your results, you may call something like this:

|     |
| --- |
| `var_dump(``$forms``);` |

If you were to do so, you would see something like this:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43 | `array``(1) {`<br>```[0] =>``array``(13) {`<br>```[``"title"``] => string(4)``"Test"`<br>```[``"description"``] => string(0)``""`<br>```[``"labelPlacement"``] => string(9)``"top_label"`<br>```[``"descriptionPlacement"``] => string(5)``"below"`<br>```[``"button"``] =>``array``(3) {`<br>```[``"type"``] => string(4)``"text"`<br>```[``"text"``] => string(6)``"Submit"`<br>```[``"imageUrl"``] => string(0)``""`<br>```}`<br>```[``"fields"``] =>``array``(0) {`<br>```}`<br>```[``"version"``] => string(9)``"1.9.11.15"`<br>```[``"id"``] => int(1)`<br>```[``"notifications"``] =>``array``(1) {`<br>```[``"55a3dddb74f59"``] =>``array``(7) {`<br>```[``"id"``] => string(13)``"55a3dddb74f59"`<br>```[``"to"``] => string(13)``"{admin_email}"`<br>```[``"name"``] => string(18)``"Admin Notification"`<br>```[``"event"``] => string(15)``"form_submission"`<br>```[``"toType"``] => string(5)``"email"`<br>```[``"subject"``] => string(32)``"New submission from {form_title}"`<br>```[``"message"``] => string(12)``"{all_fields}"`<br>```}`<br>```}`<br>```[``"confirmations"``] =>``array``(1) {`<br>```[``"55a3dddb75292"``] =>``array``(8) {`<br>```[``"id"``] => string(13)``"55a3dddb75292"`<br>```[``"name"``] => string(20)``"Default Confirmation"`<br>```[``"isDefault"``] => bool(true)`<br>```[``"type"``] => string(7)``"message"`<br>```[``"message"``] => string(64)``"Thanks for contacting us! We will get in touch with you shortly."`<br>```[``"url"``] => string(0)``""`<br>```[``"pageId"``] => string(0)``""`<br>```[``"queryString"``] => string(0)``""`<br>```}`<br>```}`<br>```[``"is_active"``] => string(1)``"1"`<br>```[``"date_created"``] => string(19)``"2015-07-13 15:48:43"`<br>```[``"is_trash"``] => string(1)``"0"`<br>```}`<br>`}` |

**Note**: output is shown for only one form due to its length: this data will be repeated for each form. Additionally, the actual data returned by `GFAPI::get_forms();` will vary based on your Gravity Forms version.

As you can see above, the _$forms_ variable contains an array with data on all forms within it. From here, you would be able to use that data as you need to. For example, if you wanted to display the title of the first form, you would do the following:

|     |
| --- |
| `<?php`<br>`echo``$forms``[0][``'title'``];`<br>`?>` |

### Getting a Single Form

Getting a single form is just as easy as getting all forms. Below is an example of doing so:

|     |
| --- |
| `<?php`<br>`$form_id``=``'1'``;`<br>`$form``= GFAPI::get_form(``$form_id``);`<br>`?>` |

To display the results of this, do the following:

|     |
| --- |
| `var_dump(``$form``);` |

This would show that the _$form_ variable contains the following array:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42 | `array``(13) {`<br>```[``"title"``] => string(4)``"Test"`<br>```[``"description"``] => string(0)``""`<br>```[``"labelPlacement"``] => string(9)``"top_label"`<br>```[``"descriptionPlacement"``] => string(5)``"below"`<br>```[``"button"``] =>``array``(3) {`<br>```[``"type"``] => string(4)``"text"`<br>```[``"text"``] => string(6)``"Submit"`<br>```[``"imageUrl"``] => string(0)``""`<br>```}`<br>```[``"fields"``] =>``array``(0) {`<br>```}`<br>```[``"version"``] => string(9)``"1.9.11.15"`<br>```[``"id"``] => int(1)`<br>```[``"notifications"``] =>``array``(1) {`<br>```[``"55a3dddb74f59"``] =>`<br>```array``(7) {`<br>```[``"id"``] => string(13)``"55a3dddb74f59"`<br>```[``"to"``] => string(13)``"{admin_email}"`<br>```[``"name"``] => string(18)``"Admin Notification"`<br>```[``"event"``] => string(15)``"form_submission"`<br>```[``"toType"``] => string(5)``"email"`<br>```[``"subject"``] => string(32)``"New submission from {form_title}"`<br>```[``"message"``] => string(12)``"{all_fields}"`<br>```}`<br>```}`<br>```[``"confirmations"``] =>``array``(1) {`<br>```[``"55a3dddb75292"``] =>``array``(8) {`<br>```[``"id"``] => string(13)``"55a3dddb75292"`<br>```[``"name"``] => string(20)``"Default Confirmation"`<br>```[``"isDefault"``] => bool(true)`<br>```[``"type"``] => string(7)``"message"`<br>```[``"message"``] => string(64)``"Thanks for contacting us! We will get in touch with you shortly."`<br>```[``"url"``] => string(0)``""`<br>```[``"pageId"``] => string(0)``""`<br>```[``"queryString"``] => string(0)``""`<br>```}`<br>```}`<br>```[``"is_active"``] => string(1)``"1"`<br>```[``"date_created"``] => string(19)``"2015-07-13 15:48:43"`<br>```[``"is_trash"``] => string(1)``"0"`<br>`}` |

### Updating a Form

If you want to update a form, you will first need to obtain the form object for that form, make the appropriate changes, then update that form. Your code would look something like this:

|     |
| --- |
| `$form_id``=``'1'``;`<br>`$form``= GFAPI::get_form(``$form_id``);`<br>`$form``[``'title'``] =``'New Title'``;`<br>`$result``= GFAPI::update_form(``$form``);`<br>`return``$result``;` |

In the example above, we are defining the ID of the form that we want to update, then getting the form object for that form. Next, we define the new title for the form. We now will take the form object that we have modified and call GFAPI::update\_form, passing the new form object, which will assign the result to the $result variable. Finally, we return the result.

## Getting and Manipulating Entries

In addition to obtaining and editing forms, you may also do the same with entries when using the Gravity Forms API.

### Getting All Entries

|     |
| --- |
| `<?php`<br>`$form_id``=``'1'``;`<br>`$entry``= GFAPI::get_entries(``$form_id``);`<br>`?>` |

In the above example, we are simply getting up to 20 entries for the specified form and assigning the array to the _$entry_ variable. If you want to display the contents of this, you may do the following:

|     |
| --- |
| `var_dump(``$entry``);` |

Which would then output something similar to the following:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `array``(1) {`<br>```[0] =>``array``(29) {`<br>```[``"id"``] => string(1)``"1"`<br>```[``"form_id"``] => string(1)``"1"`<br>```[``"date_created"``] => string(19)``"2015-07-20 20:50:52"`<br>```[``"is_starred"``] => int(0)`<br>```[``"is_read"``] => int(0)`<br>```[``"ip"``] => string(12)``"192.168.50.1"`<br>```[``"source_url"``] => string(48)``"http://local.wordpress.dev/?gf_page=preview&id=1"`<br>```[``"post_id"``] => NULL`<br>```[``"currency"``] => string(3)``"USD"`<br>```[``"payment_status"``] => NULL`<br>```[``"payment_date"``] => NULL`<br>```[``"transaction_id"``] => NULL`<br>```[``"payment_amount"``] => NULL`<br>```[``"payment_method"``] => NULL`<br>```[``"is_fulfilled"``] => NULL`<br>```[``"created_by"``] => string(1)``"1"`<br>```[``"transaction_type"``] => NULL`<br>```[``"user_agent"``] => string(82)``"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0"`<br>```[``"status"``] => string(6)``"active"`<br>```[1] => string(13)``"Testing Field"`<br>```[2] => string(13)``"Second Choice"`<br>```[``"3.1"``] => string(12)``"First Choice"`<br>```[``"3.3"``] => string(12)``"Third Choice"`<br>```[``"4.3"``] => string(4)``"John"`<br>```[``"4.6"``] => string(3)``"Doe"`<br>```[``"3.2"``] => string(0)``""`<br>```[``"4.2"``] => string(0)``""`<br>```[``"4.4"``] => string(0)``""`<br>```[``"4.8"``] => string(0)``""`<br>```}`<br>`}` |

**Note**: output is shown for only one entry due to its length: this data will be repeated for each entry retrieved. Additionally, the actual data returned by `GFAPI::get_entries( $form_id )` will vary based on your Gravity Forms version.

If you want to return more than twenty entries, you would need to specify a larger page\_size in the $paging parameter, see the following for more detail: [GFAPI::get\_entries](https://docs.gravityforms.com/api-functions/#get_entries)

### Getting a Single Entry

Just as it is possible to get all entries using the Gravity Forms API, you may also obtain information on a single entry.

|     |
| --- |
| `<?php`<br>`$entry_id``=``'1'``;`<br>`$entry``= GFAPI::get_entry(``$entry_id``);`<br>`?>` |

In the example above, the results are stored within the _$entry_ variable. If you would like to see the object contained within it, you may run the following:

|     |
| --- |
| `var_dump(``$entry``);` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31 | `array``(29) {`<br>```[``"id"``] => string(1)``"1"`<br>```[``"form_id"``] => string(1)``"1"`<br>```[``"date_created"``] => string(19)``"2015-07-20 20:50:52"`<br>```[``"is_starred"``] => int(0)`<br>```[``"is_read"``] => int(0)`<br>```[``"ip"``] => string(12)``"192.168.50.1"`<br>```[``"source_url"``] => string(48)``"http://local.wordpress.dev/?gf_page=preview&id=1"`<br>```[``"post_id"``] => NULL`<br>```[``"currency"``] => string(3)``"USD"`<br>```[``"payment_status"``] => NULL`<br>```[``"payment_date"``] => NULL`<br>```[``"transaction_id"``] => NULL`<br>```[``"payment_amount"``] => NULL`<br>```[``"payment_method"``] => NULL`<br>```[``"is_fulfilled"``] => NULL`<br>```[``"created_by"``] => string(1)``"1"`<br>```[``"transaction_type"``] => NULL`<br>```[``"user_agent"``] => string(82)``"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0"`<br>```[``"status"``] => string(6)``"active"`<br>```[1] => string(13)``"Testing Field"`<br>```[2] => string(13)``"Second Choice"`<br>```[``"3.1"``] => string(12)``"First Choice"`<br>```[``"3.3"``] => string(12)``"Third Choice"`<br>```[``"4.3"``] => string(4)``"John"`<br>```[``"4.6"``] => string(3)``"Doe"`<br>```[``"3.2"``] => string(0)``""`<br>```[``"4.2"``] => string(0)``""`<br>```[``"4.4"``] => string(0)``""`<br>```[``"4.8"``] => string(0)``""`<br>`}` |

From here, you can get any information that you want about the specified entry.

### Update an Entry

To update an entry, you will need to first get that entry, replace your desired information, and then update it with the new information. This is done like so:

|     |
| --- |
| `<?php`<br>`$entry_id``=``'1'``;`<br>`$entry``= GFAPI::get_entry(``$entry_id``);`<br>`$entry``[``'1'``] =``'Edited Field'``;`<br>`$result``= GFAPI::update_entry(``$entry``);`<br>`return``$result``;`<br>`?>` |

Within the code example above, we are defining the _$entry\_id_ as 1, and passing it to _get\_entry_ to get the entry with ID 1. Next, we are taking the results and modifying a part of the array. Finally, we pass the modified array to update\_entry, then return the result.

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 7, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)