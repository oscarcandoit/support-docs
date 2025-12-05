---
url: "https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/"
title: "Enabling Conditional Logic for a Feed - Gravity Forms Documentation"
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

# Enabling Conditional Logic for a Feed

- [Summary](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/#h-summary)
- [Feed Settings](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/#h-feed-settings)
- [Examples](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/#h-examples)
- [Use a feed based on a field choice](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/#h-use-a-feed-based-on-a-field-choice)
- [Process a feed only if a field is not Empty](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/#h-process-a-feed-only-if-a-field-is-not-empty)

## Summary

Conditional logic can be used to specify when a certain feed should process based on the form data. This is useful for subscribing users to mailing lists and sending payment information to different services.

## Feed Settings

Enabling conditional logic for a feed can be done in the feed settings. This will need to be done for each feed associated with the form. If conditional logic is not configured, the form will process the first feed it finds.

[![GForms Enabling Conditional logic for a feed](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-13-at-21.14.57.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-13-at-21.14.57.png)

## Examples

### Use a feed based on a field choice

In this example we are using conditional logic to determine if the form data should be sent to one of two payment services, either Authorize.Net or Stripe.

First, we add a field to the form which allows the user to choose a payment method. We’re going to use a drop down field labeled Gateway with the choices of Authorize.Net and Stripe.

[![GForms Enabling Conditional logic for a feed - Dropdown](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-13-at-17.00.03.png)](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-13-at-17.00.03.png)

Then we create a feed for each service via the specific add on’s feed settings page. Conditional logic is enabled and the criteria is set so that the gateway equals the appropriate payment method for that feed. Click [here](https://docs.gravityforms.com/wp-content/uploads/2019/02/CleanShot-2021-05-13-at-21.48.14.mp4) to view a video demonstration.

When the user is on the form, they will be presented with the Gateway field which allows them to select which payment gateway they wish to use. Then when the form is submitted, the conditional logic will determine where the payment information is sent. If they select Authorize.Net as the Gateway, then the payment information will be sent to Authorize.Net. If they select Stripe as the Gateway, then the payment information will be sent to Stripe.

### Process a feed only if a field is not Empty

For this case you can use the “is not” operator, leaving the input for the value empty. The example below would create a post using an Advanced Post Creation feed only if a field is not empty.

![](https://docs.gravityforms.com/wp-content/uploads/2022/10/apc-feed-not-empty-logic.png)

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 6, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)