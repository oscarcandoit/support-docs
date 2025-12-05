---
url: "https://docs.gravityforms.com/gravity-forms-2-9-key-features/"
title: "Gravity Forms 2.9 Key Features - Gravity Forms Documentation"
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
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)  - [Gravity Forms 2.9 Key Features](https://docs.gravityforms.com/gravity-forms-2-9-key-features/ "Gravity Forms 2.9 Key Features")
  - [Multiple Choice Field](https://docs.gravityforms.com/multiple-choice-field/ "Multiple Choice Field")
  - [Image Choice Field](https://docs.gravityforms.com/image-choice-field/ "Image Choice Field")
  - [Managing images for the Image Choice field](https://docs.gravityforms.com/managing-images-for-the-image-choice-field/ "Managing images for the Image Choice field")
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Gravity Forms 2.9 Key Features

- [Summary](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-summary)
- [New Features](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-new-features)
- [Multiple Choice Field](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-multiple-choice-field)
- [Image Choice Field](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-image-choice-field)
- [Editor Improvements](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-editor-improvements)
- [Orbital Theme in the form editor](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-orbital-theme-in-the-form-editor)
- [Improved Accessibility of the form editor](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-improved-accessibility-of-the-form-editor)
- [Improved Choice Flyout in all Choice fields](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-improved-choice-flyout-in-all-choice-fields)
- [Remove the selected default choice in a choice-based field](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-remove-the-selected-default-choice-in-a-choice-based-field)
- [New Filters](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-new-filters)
- [Changelog](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-changelog)
- [2.9.0](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-2-9-0)
- [2.9.0-rc-1](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-2-9-0-rc-1)
- [2.9.0-beta-2](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-2-9-0-beta-2)
- [2.9.0-beta-1](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-2-9-0-beta-1)
- [Notes On The Enhanced AJAX Submission Functionality](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-notes-on-the-enhanced-ajax-submission-functionality)

## Summary

**Gravity Forms 2.9** is the latest feature release of our core plugin, offering new form fields, related filters, and a host of refinements. This article covers the main features of this release. After it’s public beta period, Gravity Forms 2.9 began its release on November 5th, 2024, and will be offered as an update to all installations with an active Gravity Forms license over the following few weeks.

## New Features

This release introduces two new choice-based field types: the **Multiple Choice field** and the **Image Choice field**. The Multiple Choice field provides an updated and more capable alternative to the existing Radio Button and Checkbox field types. The Image-Choice field type is brand new and provides a native way to create choice fields with pictures displayed for each choice.

### Multiple Choice Field

The Multiple Choice field combines the functionality of the checkbox and radio button field types into one enhanced field with improved layout, compatibility, and controls.

This new field includes an “Enable Select All” option that adds a “Select All” checkbox at the top of the list. Choices can be reordered, deleted, or added **without** affecting previous form entries. It also provides options to stack or display choices in line for better appearance control.

The “Enable Multiple Selection” option transforms the field from single-choice to multiple-choice and opens up additional settings for defining how the multi-choice should behave.

Note that the older field types of [Checkboxes](https://docs.gravityforms.com/checkbox-field/) and [Radio Buttons](https://docs.gravityforms.com/radio-buttons/) are still available within the Gravity Forms form editor. They will be kept for backward compatibility and will continue to work on all the forms you have used them on previously. Additionally, they both benefit from an [improved Choice Flyout](https://docs.gravityforms.com/gravity-forms-2-9-key-features/#h-improved-choice-flyout-in-all-choice-fields) in this release. However, do note that they will not be updated going forward, so if you want to take advantage of any of the new features and future improvements, we recommend you start using the Multiple Choice field type wherever possible.

To learn more about the Multiple Choice field and its settings, see [this article](https://docs.gravityforms.com/multiple-choice-field/).

### Image Choice Field

The Image Choice field allows you to display images as the choices for a single or multi-select field. It includes different styles, such as a card style for the Orbital theme and customization options to adjust the shape of the image choice. The field functions similarly to the Multiple Choice field, with options to enable or disable multiple selections and various flavors of multiple-choice settings available.

Read more about the Image Choice field [here](https://docs.gravityforms.com/image-choice-field/).

## Editor Improvements

### Orbital Theme in the form editor

The Orbital theme was first made available in Gravity Forms 2.5 and was the beginning of our aim to ensure that all your forms could maintain a uniform look and feel, enhancing your site’s overall user experience and visual coherence. Additions and improvements to Orbital and our theming and styling tools have been made in every major release of Gravity Forms since then.

With Gravity Forms 2.9, we have upgraded the Form Editor to also observe the Orbital theme.

### Improved Accessibility of the form editor

In this release, we’ve optimized accessibility in the form editor. The editor has been updated to provide better accessibility for keyboard navigation and screen readers.

### Improved Choice Flyout in all Choice fields

The Choice Flyout in all choice-based fields has been enhanced for better usability. This includes the new choice fields, as well as the older Radio Button and Checkbox fields.

![Image showing the Multiple Choice field flyout options.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-78.png)

### Remove the selected default choice in a choice-based field

Previously, once a default choice was made in a choice-based field, it couldn’t be cleared. Now, users can deselect the default option by selecting it again, enhancing form usability and control.

## New Filters

Gravity Forms 2.9 introduces new filters for enhanced customization and control over form behavior and integration.

- [`gform_field_choices_max_count_visible`](https://docs.gravityforms.com/gform-field-choices-max-count-visible/) filter to allow for the setting of the maximum number of choices shown in the form editor for choice based fields.
- [`gform_image_choice_input_visibility`](https://docs.gravityforms.com/gform-image-choice-input-visibility/) filter for the default input visibility for the Image Choice field.
- [`gform_image_choice_label_visibility_default`](https://docs.gravityforms.com/gform-image-choice-label-visibility-default/) filter for the default label visibility for the Image Choice field.
- [`gform_checkbox_limit_exact_message`](https://docs.gravityforms.com/gform-checkbox-limit-exact-message/) filter to allow customization of the message displayed in the Multiple Choice field when the field requires an exact number of selections.
- [`gform_checkbox_limit_range_message`](https://docs.gravityforms.com/gform-checkbox-limit-range-message/) filter to allow customization of the message displayed in the Multiple Choice field when the field requires a range of selections.
- [`gform_checkbox_limit_max_message`](https://docs.gravityforms.com/gform-checkbox-limit-max-message/) filter to allow customization of the message displayed in the Multiple Choice field when the field requires a maximum number of selections.
- [`gform_checkbox_limit_min_message`](https://docs.gravityforms.com/gform-checkbox-limit-min-message/) filter to allow customization of the message displayed in the Multiple Choice field when the field requires a minimum number of selections.
- [`gform_default_choice_alignment`](https://docs.gravityforms.com/gform-default-choice-alignment/) filter to set the default alignment for the Multiple Choice field.
- [`gform_source_id_pre_save_entry`](https://docs.gravityforms.com/gform_source_id_pre_save_entry/) filter, so the value to be saved to the entry source\_id property can be overridden.
- [`gform/ajax/post_page_change`](https://docs.gravityforms.com/gform_ajax_post_page_change) event allows developers to to execute custom JavaScript logic after a form submission is processed via AJAX.
- [`gform_entries_action_links`](https://docs.gravityforms.com/gform_entries_action_links) filter allows editing the list of action links in the first column of the entries page.
- [`gform_entry_meta_pre_evaluate_conditional_logic`](https://docs.gravityforms.com/gform_entry_meta_pre_evaluate_conditional_logic) filter allows entry meta fields available for use with conditional logic that can be customized before the rules are evaluated.

- [`gform_entry_meta_pre_render_feed_settings`](https://docs.gravityforms.com/gform_entry_meta_pre_render_feed_settings) allow entry meta fields to be made available to the feed conditional logic setting.
- `gform/post_init` event that is triggered after the form has been initialized. Add-ons can use this event to load necessary scripts after all Gravity Forms scripts are loaded.
- `gform_output_config` adds the ability to output config scripts.

## Changelog

### 2.9.0

- Added a new “Multiple Choice” field.
- Added a new “Image Choice” field.
- Enhanced with AJAX submission functionality. _See Notes._
- Added support for encrypting and decrypting settings fields.
- Added the ability to import images into the media library when forms are imported.
- Added screen reader only headings to the form editor for better accessibility.
- Added accessibility improvements to the “allowed file extensions” setting in the form editor.
- Added notices about the removal of Legacy Markup in 3.1.0.
- Added the ability to output config scripts by using the `gform_output_config` action.
- Added the ability to clear default choices in the choices flyout in the form editor.
- Updated the form editor to use the Orbital theme.
- Updated location of some field settings from the choices flyout to the form editor sidebar.
- Updated field configuration error messages in the form editor to be more consistent.
- Updated browser alerts in the form editor to use a dialog modal.
- Updated the markup of many settings in the form editor sidebar for better accessibility.
- Updated the “Select All” functionality on the Checkbox field so that if all choices have been selected, and then one is deselected, the button goes back to saying “Select All”.
- Updated the compact view in the form editor to show icons based on the field type, not the field input type.
- Updated asset enqueuing in the front end and the admin to be more efficient.
- Fixed an issue that prevents users from closing the conditional logic flyout in the form editor.
- Fixed an issue where dynamic field population is not working for fields inside a Repeater.
- Fixed an issue where forms with multiple pages hidden by conditional logic can fail honeypot validation.
- Fixed an issue where the full screen handler performs an unnecessary database query, which impacts front-end performance for some hosting environments.
- Fixed an issue where the embed\_post and custom\_field merge tags return empty when used in notifications and add-on feeds that are processed asynchronously.
- Fixed an issue where canceling a confirmation dialog still applies the change on choice fields.
- Fixed an issue in the Orbital theme where ordered and unordered lists are not using the theme list-style property where expected.
- Fixed an issue where the inline styles for the Theme Framework are always being output for forms using the Orbital theme when they should be disabled.
- Fixed a bug that causes the wrong page titles on the Import Forms and Export Forms pages.
- Removed support for Internet Explorer.
- AF: Added the `gform_entry_meta_pre_render_feed_settings` filter, so entry meta fields can be made available to the feed conditional logic setting.
- API: Added the `source_id` column to the `gf_entry` table.
- API: Added the [`gform_field_choices_max_count_visible`](https://docs.gravityforms.com/gform-field-choices-max-count-visible/) filter to allow for the setting of the maximum number of choices shown in the form editor for choice based fields.
- API: Added the [`gform_image_choice_input_visibility`](https://docs.gravityforms.com/gform-image-choice-input-visibility/) filter for the default input visibility for the Image Choice field.
- API: Added the [`gform_image_choice_label_visibility_default`](https://docs.gravityforms.com/gform-image-choice-label-visibility-default/) filter for the default label visibility for the Image Choice field.
- API: Added the [`gform_checkbox_limit_exact_message`](https://docs.gravityforms.com/gform-checkbox-limit-exact-message/) filter to allow the customization of the message displayed on the Multiple Choice field when the field requires an exact number of selections.
- API: Added the [`gform_checkbox_limit_range_message`](https://docs.gravityforms.com/gform-checkbox-limit-range-message/) filter to allow the customization of the message displayed on the Multiple Choice field when the field requires a range of selections.
- API: Added the [`gform_checkbox_limit_max_message`](https://docs.gravityforms.com/gform-checkbox-limit-max-message/) filter to allow the customization of the message displayed on the Multiple Choice field when the field requires a maximum number of selections.
- API: Added the [`gform_checkbox_limit_min_message`](https://docs.gravityforms.com/gform-checkbox-limit-min-message/) filter to allow the customization of the message displayed on the Multiple Choice field when the field requires a minimum number of selections.
- API: Added the [`gform_default_choice_alignment`](https://docs.gravityforms.com/gform-default-choice-alignment/) filter to set the default alignment for the Multiple Choice field.
- API: Added a JS module to keep track of current product field selection.
- API: Added a JS state management module to keep track of form stata.
- API: Added the [`gform_source_id_pre_save_entry`](https://docs.gravityforms.com/gform_source_id_pre_save_entry/) filter, so the value to be saved to the entry source\_id property can be overridden.
- API: Added a new [`gform/ajax/post_page_change`](https://docs.gravityforms.com/?p=41152) JavaScript event that runs after a page change with the new AJAX functionality.
- API: Updated the config framework to support form specific config items to be added to the config object and output to the page.
- API: Updated the theme framework utility classes of `.gform-theme__disable` and `.gform-theme__disable-framework` to also disable theme framework styles for field labels and descriptions.
- API: Deprecated the `UpdateFieldChoices` function. Use `RefreshSelectedFieldPreview` instead.
- API: Removed the deprecated form Theme Framework global CSS API properties.
- API: Added the `gform_entry_meta_pre_evaluate_conditional_logic` filter, so the entry meta fields supported for use with conditional logic can be customized before the rules are evaluated.
- API: Added the `gform_entries_action_links` filter to allow for modification of an entry action links in the form entries page.
- API: Updated the product config logic so that it filters the form via the ‘gform\_pre\_render’ filter.
- API: Added a new Javascript event `gform/post_init` that is triggered after the form has been initialized and can be used by add-ons to load necessary scripts after all Gravity Forms scripts are loaded.

### 2.9.0-rc-1

- Added “@remove-in 3.0” tags to all deprecated functions to indicate they will be removed in version 3.0.
- Added the `gform_source_id_pre_save_entry` filter, so the value to be saved to the entry source\_id property can be overridden.
- Fixed an issue with the new AJAX submission where unknown errors during form processing cause the form to be stuck in a loading state and the submit button to be locked.
- Fixed an issue where Multiple Choice fields with range or exact selection requirements fail validation if they are not required.
- Fixed a bug that causes the wrong page titles on the Import Forms and Export Forms pages.
- Fixed an issue where the File Upload component used in the Image Choice field is not working correctly with keyboard navigation.
- Fixed an issue with the new AJAX submission: Under specific conditions, Firefox saves the form state and restores it on page reload.
- Fixed an issue where the save and continue link pointed to the wrong URL when the form was submitted with the new AJAX submission.
- Fixed an issue where the loading spinner was not displayed when the form was submitted with the new AJAX submission.
- Fixed an issue where the `gform_field_choice_markup_pre_render` filter is called with an invalid $field parameter for the radio field.
- Fixed an issue with the trigger of the conditional logic warning for the field visibility setting.
- Fixed an issue where settings menu item icons are missing in the entry detail views by adding and updating the previously removed Gravity form theme admin stylesheet used in the edit entry detail views.
- Fixed an issue where the image choice field screen reader text was visually visible for choices without an image when using the Gravity form theme.
- Updated the Image Choice file upload UI to make it more accessible.
- Updated the Image Choice field markup to make it more accessible.
- Updated the “Clear Default Choices” button in the form editor choices flyout.
- API: Added a new `gform/ajax/post_page_change` JavaScript event that runs after a page change with the new AJAX functionality.
- API: Removed the deprecated form Theme Framework global CSS API properties.
- API: Updated the theme framework utility classes of `.gform-theme__disable` and `.gform-theme__disable-framework` to also disable theme framework styles for field labels and descriptions.

### 2.9.0-beta-2

- Fixed an issue where image choice field icons are missing in the edit entry detail view.
- Fixed an issue where some styles do not load on AJAX forms.
- Fixed style inconsistencies in the dialog UI.
- Fixed an issue where canceling a confirmation dialog still applied the change on choice fields.
- Fixed an issue where checking the value of a [Multiple Choice](https://docs.gravityforms.com/multiple-choice-field/) or Image Choice field with multiple selections enabled can sometimes result in a PHP error.
- Fixed an issue where the choices flyout is closed when the user clicks on a confirmation dialog.
- Fixed the gform.initializeOnLoaded function to fire on the form editor as it did in 2.8.
- Fixed an issue where the inline styles for the Theme Framework are always being output for forms using the Orbital theme and not respecting the ability to disable them.
- Fixed an issue in the Orbital theme where ordered and unordered lists are not using the theme list-style property where expected.
- Removed and replaced the admin theme stylesheet used in the edit entry detail view with the Gravity form theme stylesheets.
- Updated the image choice field to no longer offer the “Enable Other Choice” option.
- Updated the compact view in the form editor to show icons based on the field type, not the field input type.
- Updated the `Asset_Enqueue_Output_Engine` to include form theme styles in the no conflict stylesheet whitelist.
- Updated the [Multiple Choice](https://docs.gravityforms.com/multiple-choice-field/) field to no longer offer the “Enable Select All” option if selections are set to “Select Exact Number”.
- API: Added a JS module to keep track of current product field selection.
- API: Added a JS state management module to keep track of form state.
- API: Updated the config framework to support form specific config items to be added to the config object and output to the page.

### 2.9.0-beta-1

- Added the new “Multiple Choice” field.
- Added the new “Image Choice” field.
- Enhanced with AJAX submission functionality. _See Notes._
- Added support for encrypting and decrypting settings fields.
- Added the ability to import images into the media library when forms are imported.
- Added screen-reader-only headings to the form editor for better accessibility.
- Added accessibility improvements to the “allowed file extensions” setting in the form editor.
- Added notices about the removal of Legacy Markup in 3.1.0.
- Added the ability to output config scripts by using the `gform_output_config` action.
- Added the ability to clear default choices in the choices flyout.
- Updated the form editor to use the Orbital theme.
- Updated location of some field settings from the choices flyout to the form editor sidebar.
- Updated the reCAPTCHA field configuration message to use the alert component for better UI and consistency.
- Updated browser alerts in the form editor to use a dialog modal.
- Updated the markup of many settings in the form editor sidebar for better accessibility.
- Updated the “Select All” functionality on the Checkbox field so that if all choices have been selected, and then one is deselected, the button goes back to saying “Select All”.
- Updated the form restriction logging statements to include the form ID.
- Fixed an issue that prevents users from closing the conditional logic flyout in the form editor.
- Fixed an issue where dynamic field population is not working for fields inside a Repeater.
- Fixed an issue where forms with multiple pages hidden by conditional logic can fail honeypot validation.
- Fixed an issue where the full screen handler performs an unnecessary database query, which impacts front-end performance for some hosting environments.
- Fixed an issue where the embed\_post and custom\_field merge tags return empty when used in notifications and add-on feeds that are processed asynchronously.
- Removed support for Internet Explorer.
- API: Added the `source_id` column to the `gf_entry` table.
- API: Added the `gform_field_choices_max_count_visible` filter to allow for the setting of the maximum number of choices shown in the form editor for choice based fields.
- API: Added the `gform_image_choice_input_visibility` filter to allow for the managing of image choice inputs visibility.
- API: Added the `gform_image_choice_label_visibility_default` filter to allow for the managing of the default image choice labels visibility setting.
- API: Added the `gform_checkbox_limit_exact_message` filter to allow the customization of the message displayed on the Multiple Choice field the field requires an exact number of selections.
- API: Added the `gform_checkbox_limit_range_message` filter to allow the customization of the message displayed on the Multiple Choice field the field requires a range of selections.
- API: Added the `gform_checkbox_limit_max_message` filter to allow the customization of the message displayed on the Multiple Choice field the field requires a maximum number of selections.
- API: Added the `gform_checkbox_limit_min_message` filter to allow the customization of the message displayed on the Multiple Choice field the field requires a minimum number of selections.
- API: Added the `gform_default_choice_alignment` filter to allow for the setting of the default alignment for the Multiple Choice field.
- API: Deprecated the UpdateFieldChoices function. Use RefreshSelectedFieldPreview instead.

### Notes On The Enhanced AJAX Submission Functionality

Support for true AJAX-based form validation and submission has been added, providing a more seamless user experience and addressing issues with certain payment add-ons, starting with Stripe. While this new approach is intended to replace the existing iframe-based method eventually, no specific version or timeline has been set for that transition. For now, the default behavior remains unchanged—both new and existing form embeds with AJAX enabled will continue using the current iframe-based implementation.

The enhanced AJAX submission can be enabled programmatically via the [gform\_form\_args](https://docs.gravityforms.com/gform_form_args/#h-enable-new-ajax) filter.

When enabled:

- Forms are validated and submitted using real AJAX (not iframe-based).
- Multipage forms also use AJAX to handle next/previous page navigation.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gravity-forms-2-9-key-features/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)