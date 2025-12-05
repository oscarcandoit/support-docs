---
url: "https://docs.gravityforms.com/enable-conditional-logic-for-notifications/"
title: "Enabling Conditional Logic for Notifications - Gravity Forms"
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
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)    - [Enabling Conditional Logic for Confirmations](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/ "Enabling Conditional Logic for Confirmations")
    - [Enabling Conditional Logic For A Field](https://docs.gravityforms.com/enable-conditional-logic/ "Enabling Conditional Logic For A Field")
    - [Enabling Conditional Logic for a Feed](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/ "Enabling Conditional Logic for a Feed")
    - [Enabling Conditional Logic for Notifications](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/ "Enabling Conditional Logic for Notifications")
    - [Nested Conditional Logic Limitations](https://docs.gravityforms.com/conditional-logic-limitations/ "Nested Conditional Logic Limitations")
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

# Enabling Conditional Logic for Notifications

- [Summary](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/#h-summary)
- [Notifications Settings](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/#h-notifications-settings)
- [Examples](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/#h-examples)
- [Logic based on a choice](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/#h-logic-based-on-a-choice)
- [Logic based on an empty field](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/#h-logic-based-on-an-empty-field)

## Summary

Conditional logic can be used with Notifications to determine which notification is sent to the user based on the data they input into the form.

## Notifications Settings

Go to the Notifications settings page of the form to enable conditional logic.

[![GForms Notifications Conditional - 3](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.01.02.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.01.02.png)

Here you can determine the criteria for sending the Notification.

[![GForms Notifications Conditional - 1](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.02.02.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.02.02.png)

## Examples

### Logic based on a choice

In this example we are using conditional logic to determine which notification should be sent to the user based on their answer to the question “Do you own a pet?”.

First, we create a form with a field containing the question “Do you own a pet?”.

[![GForms Conditional - Do you own a pet?](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.36.08.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.36.08.png)

Then we create two separate notifications: one for people who answer no and one for people for answer yes.

[![GForms Notifications Conditional - 2](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.08.52.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.08.52.png)

Then we enable conditional logic for each notification accordingly. For the notification for people who do not have a pet, we set the conditional logic to “Do you own a pet?” is “No”. This will send this notification to the users who said they do not own a pet.

For the notification for people who do have a pet, we set the conditional logic to “Do you own a pet?” is “Yes”. This will send this notification to the users who said they do own a pet.

Click [here](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.15.38.mp4) to view a video demonstration.

### Logic based on an empty field

In some cases you may want to process a notification only if a certain field is not empty. For example, an optional Email field.

Configuring this type of logic is pretty easy, you would just select the field you want to check in your logic rule, and use the “is not” operator, leaving the input for the value empty. See the screenshot below.

![](https://docs.gravityforms.com/wp-content/uploads/2022/10/email-is-not-empty-logic.png)

You can also use the “is” operator for the opposite logic. For example, you want to process the notification only if a Hidden field in your form is empty.

![](https://docs.gravityforms.com/wp-content/uploads/2022/10/hidden-field-is-empty-logic.png)

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 4, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)