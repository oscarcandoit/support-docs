---
url: "https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/"
title: "Enabling Conditional Logic for Confirmations - Gravity Forms"
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

# Enabling Conditional Logic for Confirmations

- [Summary](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/#h-summary)
- [Confirmations Settings](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/#h-confirmations-settings)
- [How To Setup Up a Conditional Confirmation](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/#h-how-to-setup-up-a-conditional-confirmation)
- [Usage Notes](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/#h-usage-notes)

## Summary

Sometimes you may want to send a user to a different page or display different information to them based on what they submit within the form. Here we will show you how to use conditional logic within your form confirmation messages.

## Confirmations Settings

You must create a new confirmation as conditional logic is only available in additional confirmations.

**Note:** The Default Confirmation doesn’t have support for logic. This is intended as the form always needs to process one confirmation. The Default Confirmation will be used if the logic failed in additional confirmations.

Go to the Confirmations settings page of the form.

[![Gravity Forms Conditional Confirmation](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.39.44.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.39.44.png)

Here you can determine the criteria for sending the Confirmation.

[![Gravity Forms Conditional Confirmation](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.32.35.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-14-at-08.32.35.png)

## How To Setup Up a Conditional Confirmation

[![GF - Conditional Logic in Gravity Forms Confirmations](https://docs.gravityforms.com/wp-content/uploads/2021/06/CleanShot-2021-06-02-at-16.16.29.png)](https://docs.gravityforms.com/wp-content/uploads/2021/06/CleanShot-2021-06-02-at-16.16.29.png)

1. Within your form confirmations page, at the bottom, you should notice a heading labeled **Conditional Logic**.

2. The first field is a dropdown in which you can switch between _All_ and _Any_. Setting this to _All_ will require all rules to match before the confirmation is executed. Conversely, setting it to _Any_ will only require one of the rules to match.

3. Below this, you will see another set of fields. The first field will list the form field name, the second field is the comparison operator, and the third field is the value. For example, if you wanted to show a different confirmation for users that selected a particular radio button, you would select the field that contains the radio buttons, then _is_, and finally the individual radio button option that you want to base the confirmation on. In this scenario, users will receive the custom confirmation only if the particular radio button **First Choice** is selected.

4. If you want to add additional conditions, simply press, the **“+”** button to the right of your first condition.


## Usage Notes

| Behavior | Description |
| --- | --- |
| **Default Confirmation** | A default confirmation is established automatically at the creation of every new form. Edit it instead of following this tutorial if you want to always show the same confirmation for your form submissions. |
| **Conditional Logic Limitations** | Conditional logic is only available in new confirmations you create and is not available for the default confirmation. |
| **Default Confirmation Enforcement** | The default confirmation cannot be turned off. This is intended to always ensure one confirmation can be executed. The default confirmation will execute only if no other confirmation is executed. |
| **Multiple Conditional Matches** | If a form submission would trigger multiple active conditional confirmations, then only the first one will be executed. |
| **New Confirmations Always Use Conditional Logic** | Conditional logic for new confirmations cannot be turned off. If you need a confirmation without conditional logic, edit the Default Confirmation instead of creating a new one. |

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 15, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)