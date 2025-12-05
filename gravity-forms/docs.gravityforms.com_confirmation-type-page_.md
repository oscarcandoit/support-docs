---
url: "https://docs.gravityforms.com/confirmation-type-page/"
title: "Configuring Confirmations in Gravity Forms - Gravity Forms Documentation"
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
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)    - [Configuring Confirmations in Gravity Forms](https://docs.gravityforms.com/confirmation-type-page/ "Configuring Confirmations in Gravity Forms")
    - [Confirmations Settings Reference](https://docs.gravityforms.com/confirmations-settings-reference/ "Confirmations Settings Reference")
    - [Confirmations List Page](https://docs.gravityforms.com/confirmations-listing/ "Confirmations List Page")
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Configuring Confirmations in Gravity Forms

- [What is a Confirmation](https://docs.gravityforms.com/confirmation-type-page/#h-what-is-a-confirmation)
- [Create a New Confirmation](https://docs.gravityforms.com/confirmation-type-page/#h-create-a-new-confirmation)
- [Resources](https://docs.gravityforms.com/confirmation-type-page/#h-resources)
- [Settings Reference](https://docs.gravityforms.com/confirmation-type-page/#h-settings-reference)
- [Text Confirmation Type](https://docs.gravityforms.com/confirmation-type-page/#h-text-confirmation-type)
- [Page Confirmation Type](https://docs.gravityforms.com/confirmation-type-page/#h-page-confirmation-type)
- [Redirect Confirmation Type](https://docs.gravityforms.com/confirmation-type-page/#h-redirect-confirmation-type)
- [Notes](https://docs.gravityforms.com/confirmation-type-page/#h-notes)
- [Changing the Default Confirmation Message](https://docs.gravityforms.com/confirmation-type-page/#h-changing-the-default-confirmation-message)
- [Looking for Email Confirmation?](https://docs.gravityforms.com/confirmation-type-page/#h-looking-for-email-confirmation)

## What is a Confirmation

Confirmations define what happens immediately after a successful form submission. Use them to show an on-page message, send the submitter to a WordPress page, or redirect to any URL (for thank you pages, tracking, or passing query strings). See [Getting Started: Confirmations and Notifications.](https://docs.gravityforms.com/confirmations-and-notifications/)

## Create a New Confirmation

You will need to have a form created already. If you need to learn how to do so, you may review our article on [creating forms](https://docs.gravityforms.com/creating-a-form/).

1. In your WordPress Admin, go to **Forms → \[Your Form\] → Form Settings → Confirmations**.
2. A list of all confirmations that exist for that form is displayed.

You will see the **Default Confirmation** in the list. Click its name to change its Type and Content.
3. To add a new confirmation, click the **Add New** button.
4. Pick a unique name for yourself to identify the confirmation. It is not displayed to the user, but for admin purposes. Refer to the [Confirmations List Page article](https://docs.gravityforms.com/confirmations-listing/) for more information on available actions for this page.

**Animation showing how to access the Confirmations settings page for a form.**

## Resources

### Settings Reference

Refer to the [Confirmations Settings Reference](https://docs.gravityforms.com/?p=45550) for more information about Send To options and configurations.

### Text Confirmation Type

Text confirmations allow you to display Text, HTML, or [Gravity Forms shortcodes](https://docs.gravityforms.com/how-to-chain-forms-using-shortcodes/) to the user upon submission. This is the default option for thanking the user for their submission.

[![Configuring Confirmations - Test Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-3-1024x962.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-3.png)

Select the **Text** option and write your confirmation message in the box below. Use the Add Media button to add an image or video. If you want to disable the auto-formatting of the text, enable the checkbox labeled **Disable Auto-formatting**.

### Page Confirmation Type

With the **Page** setting within the **Confirmation Type** options, you can set a page within your site that the user will be sent to upon submitting the form. To configure your confirmation page, use the dropdown labeled Page to select the page to which the user wants delivered.

[![Configuring Confirmations - Page Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-4-1024x702.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-4.png)

**Note:** The list of pages in the Page dropdown relies on the WordPress REST API. If a security plugin or other method disables the REST API on your site, the Page dropdown may not be populated with all the pages on your site.

With a custom confirmation page option, you may also have the form data sent to the page. For example, if you want the information on the page to change based on the form information submitted, add merge tags to the box under Pass Field Data via Query String.

Example:

|     |     |
| --- | --- |
| 1 | `phone={Phone:1}&email={Email:2}` |

### Redirect Confirmation Type

If you want the user to be redirected to another location, such as an external site, you may set the **Redirect** option upon submitting the form. To do so, select **Redirect** as the **Confirmation Type**, and enter the full URL that you want the user to be redirected to in the **Redirect URL** field.

[![Configuring Confirmations - Redirect Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-5-1024x702.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-5.png)

You can also pass the form information via a query string in the URL. Under **Pass Field Data via Query String** add merge tags. Next to this field is a **Merge Tag icon {..}** to make adding merge tags easier.

### Notes

Avoid using a parameter name from this [list of reserved WordPress terms](https://developer.wordpress.org/reference/functions/register_taxonomy/#reserved-terms) when using the Page or Redirect Confirmation types. One commonly used parameter that is a Reserved Term is ‘name’, which will result in a 404 Not Found error if your Redirect URL is for a WordPress website.

## Changing the Default Confirmation Message

To display a custom confirmation message, you must edit the **Default Confirmation** or create a new confirmation with conditional logic enabled. The Default Confirmation will be used if the logic fails on additional confirmations. The form must always process one confirmation; therefore, the **Default Confirmation** cannot be deleted, removed, or inactivated.

Therefore, customize the **Default Confirmation** to use the same confirmation for all users submitting the form. If you want to show a different confirmation based on conditional logic, add as many new confirmations as you may need and configure conditional logic for them.

**Note:** It is not possible to add conditional logic to the default confirmation.

For more advanced information on confirmation messages, take a look at our article on [confirmation message conditional logic](https://docs.gravityforms.com/conditional-logic-confirmations/) in which you will learn how to display different confirmation messages based on conditions specified about the form content.

## Looking for Email Confirmation?

Gravity Forms uses the term **“Notification”** to refer to emails sent after submission or other possible [events](https://docs.gravityforms.com/gravity-forms-notification-events/). Our Configuring Notifications documentation page explains all the [notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) settings.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/confirmation-type-page/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)