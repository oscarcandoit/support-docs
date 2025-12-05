---
url: "https://docs.gravityforms.com/save-continue-gravity-forms/"
title: "Save and Continue - Gravity Forms Documentation"
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

# Save and Continue

- [Summary](https://docs.gravityforms.com/save-continue-gravity-forms/#h-summary)
- [How Save and Continue Works](https://docs.gravityforms.com/save-continue-gravity-forms/#h-how-save-and-continue-works)
- [Enabling Save and Continue](https://docs.gravityforms.com/save-continue-gravity-forms/#h-enabling-save-and-continue)
- [Confirmations/Notifications](https://docs.gravityforms.com/save-continue-gravity-forms/#h-confirmations-notifications)
- [Merge Tags](https://docs.gravityforms.com/save-continue-gravity-forms/#h-merge-tags)
- [{save\_email\_input}](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-email-input)
- [{save\_email}](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-email)
- [{save\_link}](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-link)
- [{save\_url}](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-url)
- [{save\_token}](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-token)
- [Save and Continue Link Recovery](https://docs.gravityforms.com/save-continue-gravity-forms/#h-save-and-continue-link-recovery)
- [Extending Save and Continue](https://docs.gravityforms.com/save-continue-gravity-forms/#h-extending-save-and-continue)

## Summary

Save and Continue functionality is a critical feature that many individuals rely on when building large forms. By utilizing Save and Continue functionality, users are able to save their place and come back to the form without the need to start over again. In this article, we will show you how to use the Save and Continue functionality within Gravity Forms.

## How Save and Continue Works

The Save and Continue functionality within Gravity Forms will create a link for continuing the form at a later date. Upon clicking the link in the form, the user will be presented with a custom link to the current state of their form submission, with the option of sending the link via email.

Links created will last 30 days. After that period, the link will no longer be accessible. To override this, you can utilize the [gform\_incomplete\_submissions\_expiration\_days](https://docs.gravityforms.com/gform_incomplete_submissions_expiration_days/) filter.

**Note**: If you are handling sensitive data, be sure that you have SSL (HTTPS) enabled and running on your site. The URL generated is accessible to anyone who has it, and the URL can be used to decrypt the saved details within the database. Without encryption, it’s possible that someone could access the partially submitted data as well as continue the submission of it.

**Note**: Single File Upload fields will not preserve any file added before the Save and Continue action. This is because single file fields are not validated as non-malicious until form submission is submitted. Thus, when Save and Continue is used, any single file uploads attempted will be cleared and not preserved by the link. This behavior does not exist with Multi-File Upload fields, as they validate uploaded files at the time of upload, not form submission.

**Note**: When using a List field, the column names must be unique or the data will not save when using Save and Continue.

## Enabling Save and Continue

1. First, access the form that will utilize the Save and Continue functionality. This can be done by clicking on **Forms** on the left side of your WordPress admin, then clicking on the form that you want to enable Save and Continue on.
2. Next, access the form settings for the form by clicking on **Settings** at the top of the form editor.
3. Within the form settings page, you should see an option labelled **Save and Continue**. Simply enable the checkbox to allow Save and Continue functionality within the form.
4. Upon enabling Save and Continue, an additional field will be available to change the **link text**. If you would like to change the text content of the _Save and Continue_ link, you can enter your new text here.

Of course, don’t forget to save your settings when complete.

## Confirmations/Notifications

Upon enabling the Save and Continue option, additional confirmations and notifications are created. To change any notifications or confirmations related to the Save and Continue link, access the new items as you normally would with other notifications or confirmations.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/06/save-and-continue-confirmations-1-1024x458.png)](https://docs.gravityforms.com/wp-content/uploads/2021/06/save-and-continue-confirmations-1.png) Save and Continue Confirmations

[![](https://docs.gravityforms.com/wp-content/uploads/2021/06/save-and-continue-notifications-1024x377.png)](https://docs.gravityforms.com/wp-content/uploads/2021/06/save-and-continue-notifications.png) Save and Continue Notifications

Due to the Save and Continue feature using its own confirmations and notifications that are independent of any existing items, you will need to modify these independently. Also note that if you disable the Save and Continue feature, the notifications and confirmations that were automatically created will be deleted.

### Merge Tags

The following merge tags will work only in Save and Continue confirmations and Notifications using the **Save and continue email is requested** event.

#### {save\_email\_input}

Outputs the input field that is used for sending the continue link to an address. A custom validation message, as well as button text, can be passed.

**Example**

```
{save_email_input: button_text="Send the link to my email address" validation_message="The link couldn't be sent because the email address is not valid."}
```

#### {save\_email}

The email address that the saved partial input has been sent to.

#### {save\_link}

This outputs the Save and Continue link as a clickable link. For use as part of the content for the default Save and Continue Confirmations and Save and Continue Email only.

#### {save\_url}

This outputs the Save and Continue URL only. For use as part of the content for the default Save and Continue Confirmations and Save and Continue Email only.

#### {save\_token}

The token generated.

## Save and Continue Link Recovery

By default, the resume URL isn’t saved. The value of the gf\_token query argument from the URL is saved, along with the form values, in a [separate](https://docs.gravityforms.com/database-storage-structure-reference/) [database](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-draft-submissions) [table](https://docs.gravityforms.com/database-storage-structure-reference/), which is not accessible from anywhere in the WordPress admin dashboard.

## Extending Save and Continue

The following add-ons include features that integrate with or extend Save and Continue.

- The [Partial Entries Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/partial-entries-add-on/) – if Partial Entries is enabled for the form and the Save and Continue button is clicked, the resume URL and token will be saved with the partial entry. The resume link is displayed at the bottom of the entry info metabox on the [Entry Detail](https://docs.gravityforms.com/entry-detail/) page. It also makes the URL and token available as optional columns for display on the [Entries List](https://docs.gravityforms.com/entries/) page.
- [Advanced Save & Continue](https://gravitywiz.com/documentation/gravity-forms-advanced-save-and-continue/) by [certified developer](https://www.gravityforms.com/certified-developers-and-add-ons/) Gravity Wiz adds auto-saving, auto-loading, and draft management.

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: November 1, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/save-continue-gravity-forms/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)