---
url: "https://docs.gravityforms.com/personal-data-settings/"
title: "Personal Data Settings - Gravity Forms Documentation"
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
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)    - [Form Settings](https://docs.gravityforms.com/form-settings/ "Form Settings")
    - [Gravity Forms Block Settings](https://docs.gravityforms.com/gravity-forms-block-settings/ "Gravity Forms Block Settings")
    - [Personal Data Settings](https://docs.gravityforms.com/personal-data-settings/ "Personal Data Settings")
    - [Role and Capability Management](https://docs.gravityforms.com/role-management-guide/ "Role and Capability Management")
    - [Save and Continue](https://docs.gravityforms.com/save-continue-gravity-forms/ "Save and Continue")
    - [Submit Button Settings](https://docs.gravityforms.com/submit-button/ "Submit Button Settings")
    - [WP Config Options](https://docs.gravityforms.com/wp-config-options/ "WP Config Options")
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Personal Data Settings

- [Summary](https://docs.gravityforms.com/personal-data-settings/#h-summary)
- [Features](https://docs.gravityforms.com/personal-data-settings/#h-features)
- [Accessing Personal Data Settings](https://docs.gravityforms.com/personal-data-settings/#h-accessing-personal-data-settings)
- [General Settings](https://docs.gravityforms.com/personal-data-settings/#h-general-settings)
- [Retention Policy](https://docs.gravityforms.com/personal-data-settings/#h-retention-policy)
- [Note](https://docs.gravityforms.com/personal-data-settings/#h-note)
- [Exporting and Erasing Data](https://docs.gravityforms.com/personal-data-settings/#h-exporting-and-erasing-data)
- [Options Displayed When An Email Address Field Exists on Form](https://docs.gravityforms.com/personal-data-settings/#h-options-displayed-when-an-email-address-field-exists-on-form)
- [Fields Added Using the gform\_personal\_data\_identification\_fields Filter](https://docs.gravityforms.com/personal-data-settings/#h-fields-added-using-the-gform-personal-data-identification-fields-filter)
- [Email Address Field Does Not Exist on Form](https://docs.gravityforms.com/personal-data-settings/#h-email-address-field-does-not-exist-on-form)

## Summary

Added in Gravity Forms version 2.4, the Personal Data tab of the Form Settings provides integration with the WordPress [Export Personal Data](https://codex.wordpress.org/Tools_Export_Personal_Data_Screen) and [Erase Personal Data](https://codex.wordpress.org/Tools_Erase_Personal_Data_Screen) tools. Data for both entries and draft submissions (save & continue) are supported.

This new functionality is part of GDPR compliance. See the article [WordPress Gravity Forms And GDPR Compliance](https://docs.gravityforms.com/wordpress-gravity-forms-and-gdpr-compliance) for more details.

## Features

- Add-Ons may define custom personal data items that will be added to the exporting and erasing process using the [gform\_personal\_data](https://docs.gravityforms.com/gform_personal_data) filter.
- The storage of IP addresses may be prevented. The IP address section on the entry detail page will be hidden if the IP address is empty.
- Entries may be deleted or trashed after a specified number of days.
- Fields containing user IDs may be added to the list of available options to identify users when exporting/erasing customer data by using the [gform\_personal\_data\_identification\_fields](https://docs.gravityforms.com/gform_personal_data_identification_fields) filter. Examples are the created\_by field or fields where the default value has been set to use {user:ID}
- Entries may be rescued at the last minute before automatic deletion according to the retention policy using the [gform\_entry\_ids\_automatic\_deletion](https://docs.gravityforms.com/gform_entry_ids_automatic_deletion) filter. An example for using this would be the User Registration Add-On preventing deletion of entries which are still pending activation.

## Accessing Personal Data Settings

While viewing your form, mouse-over the Form’s Settings menu and select the Personal Data option.

[![GForms Personal Data Settings - Where](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-17-at-08.06.07.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-17-at-08.06.07.png)

After selecting Personal Data, you will be presented with the following screen:

[![Screenshot of Form Settings - Personal Data Settings](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-09-09-at-13.49.45.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-09-09-at-13.49.45.png)

### General Settings

| Setting | Description |
| --- | --- |
| **IP Addresses** | Check this toggle if you do not want IP Addresses stored upon form submission. |

### Retention Policy

| Setting | Description |
| --- | --- |
| **Retain entries**<br>**indefinitely** | Entries will never be deleted. |
| **Trash entries**<br>**automatically** | Entries will be trashed automatically after a specified number of days. **See note.** |
| **Delete entries**<br>**permanently**<br>**automatically** | Entries will be deleted permanently automatically after a specified number of days. **See note.** |

#### Note

**The minimum number of days allowed is one**. This is to ensure that all entry processing is complete before deleting/trashing. The number of days setting is a minimum, not an exact period of time. The trashing/deleting occurs during the daily cron task so some entries may appear to remain up to a day longer than expected.

[![GForms Personal Data Settings - Exporting Erasing Data](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-17-at-08.20.49.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-17-at-08.20.49.png)

### Exporting and Erasing Data

Check the **Enable** box if you would like to include data from this form when exporting or erasing personal data on this site. Once you have checked the Enable box, you will be presented with a drop down to identify what to use to uniquely identify the data, and a list of available data to export/erase.

#### Options Displayed When An Email Address Field Exists on Form

| Tag | Description |
| --- | --- |
| **Identification Field Drop Down** | When an email address field exists on the form, the **Identification Field** drop down will be populated with the Email field as an option to select. The field chosen in this drop down will be used to identify the owner of the personal data. |
| **Personal Data** | A listing of data which may be marked to be exported or erased will also be displayed. This list includes the form fields, along with several key pieces of data normally saved. |

#### Fields Added Using the gform\_personal\_data\_identification\_fields Filter

Fields that have been added using the [gform\_personal\_data\_identification\_fields](https://docs.gravityforms.com/gform_personal_data_identification_fields/) filter will appear as a selection in the **Identification Field** drop down. The fields added need to be a way to uniquely identify user data. The **created\_by** field and fields set to use the {user:ID} merge tag may be used.

#### Email Address Field Does Not Exist on Form

If an email address does not exist on the form, the **Enable** option is disabled. The email address is needed as a means to identify the data to be exported/erased.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 11, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/personal-data-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)