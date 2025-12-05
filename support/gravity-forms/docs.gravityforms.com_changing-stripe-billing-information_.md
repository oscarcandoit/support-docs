---
url: "https://docs.gravityforms.com/changing-stripe-billing-information/"
title: "Changing Stripe Billing Information - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Changing Stripe Billing Information

- [Introduction](https://docs.gravityforms.com/changing-stripe-billing-information/#h-introduction)
- [Prerequisites](https://docs.gravityforms.com/changing-stripe-billing-information/#h-prerequisites)
- [Notes](https://docs.gravityforms.com/changing-stripe-billing-information/#h-notes)

## Introduction

This snippet will allow you to change a customer’s billing information stored within Stripe using a form. The current snippet is based on the original one provided to us by Shamai Greenfield, one of our customers.

## Prerequisites

**Note:** The user must be logged in before submitting any of the forms described below; otherwise there is no way to identify the user and associate WordPress and Stripe IDs.

This snippet is only supported in Stripe Add-On version 3.4 and newer.

To use this snippet, you will need two forms, Form A and Form B.

Form A will contain **your standard Stripe subscription form**. It creates the customer and the _gform\_stripe\_customer\_after\_create_ snippet saves the customer id to the user meta.

Form B will be an additional form that you can use for updating the subscription. It’s used to update the billing info. This would have a **product and services feed, and hidden product with a price of at least $0.50**. On submission the _gform\_stripe\_customer\_id_ code snippet gets the customer id from the user meta. This will be used to get the customer object, which is then used to create the charge object, updating the billing info. The _gform\_stripe\_charge\_authorization\_only_ code snippet is then used to **prevent the charge being captured**.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47 | `// Save the users' Stripe customer ID after a payment is made via a subscription Stripe feed.`<br>`add_action(``'gform_stripe_customer_after_create'``,``'save_stripe_customer_id'``);`<br>`function``save_stripe_customer_id(``$customer``) {`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Running...'``);`<br>```if``( is_user_logged_in () ) {`<br>```$user_id``= get_current_user_id();`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Adding customer id '``.``$customer``->id .``' to user '``.``$user_id``);`<br>```update_user_meta(``$user_id``,``'stripe_customer_id'``,``$customer``->id );`<br>```}`<br>`}`<br>``<br>`// Gets the current Stripe customer ID to change the billing details on. Tests if the user has an ID and is signed in.`<br>`add_filter(``'gform_stripe_customer_id'``,``'get_stripe_customer_id'``);`<br>`function``get_stripe_customer_id(``$customer_id``) {`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Running...'``);`<br>```if``( is_user_logged_in () &&  get_user_meta( get_current_user_id(),``'stripe_customer_id'``, true ) !=``''``){`<br>```$user_id``= get_current_user_id();`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Getting customer id from user '``.``$user_id``);`<br>```$customer_id``= get_user_meta(``$user_id``,``'stripe_customer_id'``, true );`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Customer id set to: '``.``$customer_id``);`<br>```}`<br>```return``$customer_id``;`<br>`}`<br>``<br>`// Make a form that has a Stripe Product and Services feed, and make sure no payment is made.`<br>`add_filter(``'gform_stripe_charge_authorization_only'``,``'stripe_charge_authorization_only'``, 10, 2 );`<br>`function``stripe_charge_authorization_only(``$authorization_only``,``$feed``) {`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Running...'``);`<br>```$feed_name``= rgars(``$feed``,``'meta/feedName'``);`<br>```// The name associated with the Stripe feed.`<br>```if``(``$feed_name``==``'Update Billing'``) {`<br>```gf_stripe()->log_debug(``__METHOD__``.``'(): Authorization only for Update Billing feed.'``);`<br>```return``true;`<br>```}`<br>```return``$authorization_only``;`<br>`}`<br>``<br>`add_filter(``'gform_stripe_charge_pre_create'``,``function``(``$charge_meta``,``$feed``,``$submission_data``,``$form``,``$entry``) {`<br>```$feed_name``= rgars(``$feed``,``'meta/feedName'``);`<br>```// The name associated with the Stripe feed.`<br>```if``(``$feed_name``==``'Update Billing'``) {`<br>```gf_stripe()->log_debug(``'gform_stripe_charge_pre_create: running for feed '``. rgars(``$feed``,``'meta/feedName'``) );`<br>```$charge_meta``[``'setup_future_usage'``] =``'off_session'``;`<br>```}`<br>``<br>```return``$charge_meta``;`<br>`}, 10, 5 );` |

### Notes

1. Payment method must be set to Stripe Credit Card Field.
2. Due to changes made to the payment intents API by Stripe, the card will be saved but not set as the default payment method.

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 14, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/changing-stripe-billing-information/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)