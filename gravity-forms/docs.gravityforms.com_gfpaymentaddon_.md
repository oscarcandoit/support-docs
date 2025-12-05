---
url: "https://docs.gravityforms.com/gfpaymentaddon/"
title: "GFPaymentAddOn - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)        - [GFAddOn](https://docs.gravityforms.com/gfaddon/ "GFAddOn")
        - [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/ "GFFeedAddOn")
        - [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon/ "GFPaymentAddOn")
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# GFPaymentAddOn

- [Introduction](https://docs.gravityforms.com/gfpaymentaddon/#h-introduction)
- [Getting Started](https://docs.gravityforms.com/gfpaymentaddon/#h-getting-started)
- [Creating Plugin Settings for Payment Feeds](https://docs.gravityforms.com/gfpaymentaddon/#h-creating-plugin-settings-for-payment-feeds)
- [Creating Feed Settings Fields for Payment Feeds](https://docs.gravityforms.com/gfpaymentaddon/#h-creating-feed-settings-fields-for-payment-feeds)
- [Products and Services Example](https://docs.gravityforms.com/gfpaymentaddon/#h-products-and-services-example)
- [Subscriptions Example](https://docs.gravityforms.com/gfpaymentaddon/#h-subscriptions-example)
- [Helper Functions for Adding/Removing/Replacing Default Fields](https://docs.gravityforms.com/gfpaymentaddon/#h-helper-functions-for-adding-removing-replacing-default-fields)
- [Modifying Default Fields](https://docs.gravityforms.com/gfpaymentaddon/#h-modifying-default-fields)
- [Billing Info Fields](https://docs.gravityforms.com/gfpaymentaddon/#h-billing-info-fields)
- [Billing Cycle Intervals](https://docs.gravityforms.com/gfpaymentaddon/#h-billing-cycle-intervals)
- [Main Functionality](https://docs.gravityforms.com/gfpaymentaddon/#h-main-functionality)
- [redirect\_url()](https://docs.gravityforms.com/gfpaymentaddon/#h-redirect-url)
- [authorize()](https://docs.gravityforms.com/gfpaymentaddon/#h-authorize)
- [capture()](https://docs.gravityforms.com/gfpaymentaddon/#h-capture)
- [subscribe()](https://docs.gravityforms.com/gfpaymentaddon/#h-subscribe)
- [cancel()](https://docs.gravityforms.com/gfpaymentaddon/#h-cancel)
- [callback()](https://docs.gravityforms.com/gfpaymentaddon/#h-callback)
- [post\_callback()](https://docs.gravityforms.com/gfpaymentaddon/#h-post-callback)

## Introduction

The GFPaymentAddOn class provides basic functionality for developers when creating new add-ons for Gravity Forms that collect payments. It handles payments which redirect to a third-party website (e.g., PayPal Standard) and payments which are made using a credit card with the transaction hidden behind-the-scenes (e.g., Authorize.Net, PayPal Payments Pro, and Stripe). The GFPaymentAddOn class extends the [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/) class which gives you the functionality from that class and also the functionality from the [GFAddOn](https://docs.gravityforms.com/gfaddon/) class.

The GFPaymentAddOn class uses functionality similar to the GFAddOn. View the GFAddOn’s documention for [Initialization](https://docs.gravityforms.com/gfaddon/), [Results Page](https://docs.gravityforms.com/gfaddon/), and [Uninstalling](https://docs.gravityforms.com/gfaddon/) for more information on how to use this functionality in the GFPaymentAddOn class.

## Getting Started

These are the first steps you’ll need to take to create an add-on using the Payment Add-On Framework:

1. Include the Payment Add-On Framework files by calling the following:


```
GFForms::include_payment_addon_framework();
```

2. Inherit the Payment Add-On Framework by creating a new class which extends GFPaymentAddOn :


```
class GFPayPal extends GFPaymentAddOn {}
```

3. Add the class variables to configure the add-on. The list below are variables specific to the payment framework. There are other variables needed which are documented in the GFAddOn [class variables](https://docs.gravityforms.com/gfaddon/) section.


- **[$\_supports\_callbacks](https://docs.gravityforms.com/_supports_callbacks)** [boolean](https://docs.gravityforms.com/boolean)

If set to true, callbacks/webhooks/IPN will be enabled and the appropriate database table will be created.

- **[$\_requires\_credit\_card](https://docs.gravityforms.com/_requires_credit_card)** [boolean](https://docs.gravityforms.com/boolean)

If set to true, the user will not be able to create feeds for a form until a credit card field has been added.

- **[$redirect\_url](https://docs.gravityforms.com/redirect_url)** [string](https://docs.gravityforms.com/string)

For payment add-ons that send users to an external website to submit payment (i.e. PayPal Standard), use this class variable to specify the URL of the payment page.


Example:

```
if ( method_exists( 'GFForms', 'include_payment_addon_framework' ) ) {
    GFForms::include_payment_addon_framework();
    class GFPayPal extends GFPaymentAddOn {
        protected $_version = "2.3.7";
        protected $_min_gravityforms_version = "1.8.12";
        protected $_slug = 'gravityformspaypal';
        protected $_path = 'gravityformspaypal/paypal.php';
        protected $_full_path = __FILE__;
        protected $_title = 'Gravity Forms PayPal Standard Add-On';
        protected $_short_title = 'PayPal';
        protected $_supports_callbacks = true;
        protected $_requires_credit_card = false;
    }
}
```

## Creating Plugin Settings for Payment Feeds

Review the article [Creating Plugin Settings](https://docs.gravityforms.com/gfaddon/) for more details on adding plugin settings.

## Creating Feed Settings Fields for Payment Feeds

The Payment Framework automatically adds key fields to the Feed Settings page. You may add the feed\_settings\_fields() function to your add-on and override the base function.

The key fields automatically added are as follows:

- Feed Name

Text box labeled “Name” so you may uniquely identify your payment feed.

- Transaction Type

Drop down populated with the types “Products and Services” and “Subscriptions”.

- Payment Amount

This is only available when the transaction type is “Products and Services”.

Drop down populated with the option “Form Total”. If there are products on the form, the product fields will also be populated in the drop down. Form Total is selected by default.

- Subscription Settings

These are only available when the transaction type is “Subscription”.
  - Recurring Amount

    Drop down populated with the option “Form Total”. If there are products on the form, the product fields will also be populated in the drop down.
  - Billing Cycle

    The choices available are days (1-365), weeks (1-52), months (1-12), years (1-10).
  - Recurring Times

    The choices available are infinite or 2-100. This is the number of times the payment will occur.
  - Setup Fee

    When enabled, a drop down appears for you to select which product field is used as the setup fee. The “Trial” option is not available when this is enabled.
  - Trial

    When enabled, a drop down appears for you to select which product field is used at the Trial amount. You also have to ability to manually enter an amount instead of using a product field on the form.
- Billing Information
  - Email
  - Address
  - Address 2
  - City
  - State
  - Zip
  - Country
- Options

Displays a “Sample Option” checkbox for you to modify to your needs.

- Conditional Logic

Displays an “Enable Condition” checkbox which when clicked provides the functionality for selecting a conditional logic match using “All” or “Any” with the ability to select fields on the form, a condition (is, is not, greater than, less than, contains, starts with, ends with) and an input to set the matching data.


### Products and Services Example

[![Products and Services Example](https://docs.gravityforms.com/wp-content/uploads/2015/04/GFPaymentAddon_ProductsAndServices.png)](https://docs.gravityforms.com/wp-content/uploads/2015/04/GFPaymentAddon_ProductsAndServices.png)

### Subscriptions Example

[![Subscriptions Example](https://docs.gravityforms.com/wp-content/uploads/2015/04/GFPaymentAddon_Subscriptions.png)](https://docs.gravityforms.com/wp-content/uploads/2015/04/GFPaymentAddon_Subscriptions.png)

### Helper Functions for Adding/Removing/Replacing Default Fields

There are several helper functions that you may use to remove, modify, and add fields.

- [add\_field\_before()](https://docs.gravityforms.com/field-manipulation-helpers/#add_field_before)
- [add\_field\_after()](https://docs.gravityforms.com/field-manipulation-helpers/#add_field_after)
- [remove\_field()](https://docs.gravityforms.com/field-manipulation-helpers/#remove_field)
- [replace\_field()](https://docs.gravityforms.com/field-manipulation-helpers/#replace_field)

### Modifying Default Fields

The default values for some of the fields may not be appropriate for your add-on. Below are a few you may modify.

#### Billing Info Fields

You may override the function billing\_info\_fields() to set your own fields for billing.

```
public function billing_info_fields() {
  $fields = array(
              array( 'name' =&amp;gt; 'email', 'label' =&amp;gt; __( 'Email', 'gravityforms' ), 'required' =&amp;gt; false ),
              array( 'name' =&amp;gt; 'zip', 'label' =&amp;gt; __( 'Zip', 'gravityforms' ), 'required' =&amp;gt; false ),
  );
  return $fields;
}
```

#### Billing Cycle Intervals

You may override the function supported\_billing\_intervals() to set your own intervals to be used.

```
public function supported_billing_intervals() {
  //authorize.net does not use years or weeks, override framework function
  $billing_cycles = array(
      'day'   =&amp;gt; array( 'label' =&amp;gt; __( 'day(s)', 'gravityforms' ), 'min' =&amp;gt; 7, 'max' =&amp;gt; 365 ),
      'month' =&amp;gt; array( 'label' =&amp;gt; __( 'month(s)', 'gravityforms' ), 'min' =&amp;gt; 1, 'max' =&amp;gt; 12 )
  );

  return $billing_cycles;
}
```

## Main Functionality

Like the [GFAddOn](https://docs.gravityforms.com/gfaddon/) class, the Payment Framework contains many features that can be activated by overriding functions in the GFPaymentAddOn class. To override a function, add a function with the same name (and arguments) as the function in the base class.

### redirect\_url()

Override this method to specify a URL to the third party payment processor. Useful when developing a payment gateway that processes the payment outside of the website (i.e. PayPal Standard). Returns a full URL (including http:// or https://) to the payment processor.

```
protected function redirect_url( $feed, $submission_data, $form, $entry ) {}
```

#### Parameters

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)
Active payment feed containing all the configuration data. The properties will change dependent on the add-on.

- **$submission\_data** [Submission Data](https://docs.gravityforms.com/submission-data-object)

Contains form field data submitted by the user as well as payment information (i.e. payment amount, setup fee, line items, etc…)

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

Current form array containing all form settings.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

Current entry array containing entry information (i.e data submitted by users).


### authorize()

Override this method to add integration code to the payment processor in order to authorize a credit card with or without capturing payment. This method is executed during the form validation process and allows the form submission process to fail with a validation error if there is anything wrong with the payment/authorization. This method is only supported by single payments. For subscriptions or recurring payments, use the subscribe() method. Returns an array of the authorization information.

```
protected function authorize( $feed, $submission_data, $form, $entry ) {}
```

#### Parameters

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)
Active payment feed containing all the configuration data. The properties will change dependent on the add-on.

- **$submission\_data** [Submission Data](https://docs.gravityforms.com/submission-data-object)

Contains form field data submitted by the user as well as payment information (i.e. payment amount, setup fee, line items, etc…).

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

Current form array containing all form settings.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

Current entry array containing entry information (i.e data submitted by users). **Note**: the entry hasn’t been saved to the database at this point, so this $entry object does not have the ‘ID’ property and is only a memory representation of the entry.


#### Returns

An associative array with the following properties:

- **is\_authorized** [boolean](https://docs.gravityforms.com/boolean)

- **error\_message** [string](https://docs.gravityforms.com/string)

- **transaction\_id** [string](https://docs.gravityforms.com/string)


If the payment is captured in this method, returns a ‘captured\_payment’ array with the following information about the payment:

- **captured\_payment** [array](https://docs.gravityforms.com/array)
  - is\_success – [boolean](https://docs.gravityforms.com/boolean)
  - error\_message – [string](https://docs.gravityforms.com/string)
  - transaction\_id – [string](https://docs.gravityforms.com/string)
  - amount – [float](https://docs.gravityforms.com/float)

### capture()

Override this method to capture a single payment that has been authorized via the authorize() method. Use only with single payments. For subscriptions, use subscribe() instead. Return an array with the information about the captured payment.

```
protected function capture( $authorization, $feed, $submission_data, $form, $entry ) {}
```

#### Parameters

- **$authorization** [array](https://docs.gravityforms.com/array)
Contains the [result](https://docs.gravityforms.com/gfpaymentaddon/#returns) of the [authorize()](https://docs.gravityforms.com/gfpaymentaddon/#authorize) function.

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)

Active payment feed containing all the configuration data. The properties will change dependent on the add-on.

- **$submission\_data** [Submission Data](https://docs.gravityforms.com/submission-data-object)

Contains form field data submitted by the user as well as payment information (i.e. payment amount, setup fee, line items, etc…).

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

Current form array containing all form settings.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

Current entry array containing entry information (i.e data submitted by users).


#### Returns

Returns an associative array with the information about the captured payment in the following format:

- **is\_success** [boolean](https://docs.gravityforms.com/boolean)

- **error\_message** [string](https://docs.gravityforms.com/string)

- **transaction\_id** [string](https://docs.gravityforms.com/string)

- **amount** [float](https://docs.gravityforms.com/float)

- **payment\_method** [string](https://docs.gravityforms.com/string)


### subscribe()

Override this method to add integration code to the payment processor in order to create a subscription. This method is executed during the form validation process and allows the form submission process to fail with a validation error if there is anything wrong when creating the subscription.

```
protected function subscribe( $feed, $submission_data, $form, $entry ) {}
```

#### Parameters

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)
Active payment feed containing all the configuration data. The properties will change dependent on the add-on.

- **$submission\_data** [Submission Data](https://docs.gravityforms.com/submission-data-object)

Contains form field data submitted by the user as well as payment information (i.e. payment amount, setup fee, line items, etc…).

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

Current form array containing all form settings.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

Current entry array containing entry information (i.e data submitted by users). **Note**: the entry hasn’t been saved to the database at this point, so this $entry object does not have the ‘ID’ property and is only a memory representation of the entry.


#### Returns

An associative array with the following properties:

- **is\_success** [boolean](https://docs.gravityforms.com/boolean)

- **error\_message** [string](https://docs.gravityforms.com/string)

- **subscription\_id** [string](https://docs.gravityforms.com/string)

- **amount** [float](https://docs.gravityforms.com/float)


To implement an initial/setup fee for gateways that do not support setup fees as part of subscriptions, manually capture the funds for the setup fee as a separate transaction and send that payment information in the following property:

- **captured\_payment** [array](https://docs.gravityforms.com/array)
  - name – [string](https://docs.gravityforms.com/string)
  - is\_success – [boolean](https://docs.gravityforms.com/boolean)
  - error\_message – [string](https://docs.gravityforms.com/string)
  - subscription\_id – [string](https://docs.gravityforms.com/string)
  - amount – [float](https://docs.gravityforms.com/float)

### cancel()

Override this method to add integration code to the payment processor in order to cancel a subscription. This method is executed when a subscription is canceled from the Payment Gateway (i.e. Stripe or PayPal).

```
protected function cancel( $entry, $feed ) {
    return false;
}
```

### callback()

Override this method to add code to handle processing the callback/webhook/IPN request.

```
protected function callback() {}
```

Return an associative array with the following properties:

- **id** [string](https://docs.gravityforms.com/string)
The event ID.

- **type** [string](https://docs.gravityforms.com/string)

The action type. _Possible values: complete\_payment, refund\_payment, fail\_payment, add\_pending\_payment, void\_authorization, create\_subscription, cancel\_subscription, expire\_subscription, add\_subscription\_payment, fail\_subscription\_payment, or a custom event type._

- **amount** [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float)

The transaction amount.

- **transaction\_type** [string](https://docs.gravityforms.com/string)

The type of transaction which occurred.

- **transaction\_id** [string](https://docs.gravityforms.com/string)

The transaction ID.

- **subscription\_id** [string](https://docs.gravityforms.com/string)

The subscription ID.

- **entry\_id** [integer](https://docs.gravityforms.com/integer)

The ID of the entry which created the transaction.

- **payment\_status** [string](https://docs.gravityforms.com/string)

The payment status.

- **note** [string](https://docs.gravityforms.com/string)

The note to be added to the entry.

- **callback** [string](https://docs.gravityforms.com/string)

The function to be used to process the custom event **type**.


### post\_callback()

Override this method to add code to handle post processing of the callback.

```
protected function post_callback( $callback_action, $result ) {}
```

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 21, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gfpaymentaddon/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)