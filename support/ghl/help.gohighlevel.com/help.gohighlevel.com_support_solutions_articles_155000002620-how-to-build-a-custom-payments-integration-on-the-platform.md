---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform"
title: " How to build a custom payments integration on the platform : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Payment Settings & Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000905)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Payment Settings & Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000905)
6. How to build a custom payments integration on the platform

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# How to build a custom payments integration on the platform

Modified on: Thu, 28 Aug, 2025 at 6:47 AM

This article provides a step-by-step guide to building a custom payments integration within the HighLevel platform. By leveraging HighLevel's API, you can connect your preferred payment gateway to streamline transactions, automate processes, and enhance the customer payment experience. Whether you're integrating a niche payment processor or creating a tailored solution, this guide will help you navigate the setup, testing, and implementation phases with ease.

**TABLE OF CONTENTS**

- [How to create a marketplace App for payment provider](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform#How-to-create-a-marketplace-App-for-payment-provider)
- [How the payment flow works](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform#How-the-payment-flow-works)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform#Frequently-Asked-Questions)

* * *

How to Integrate Custom Payment Providers in HighLevel - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Integrate Custom Payment Providers in HighLevel](https://www.youtube.com/watch?v=kg3bXTVlFFw)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)

[Watch on](https://www.youtube.com/watch?v=kg3bXTVlFFw&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 5:31
•Live

•

* * *

This framework helps you to integrate any payment provider with HighLevel. Please follow the below steps to integrate any payment gateway.

Introduction video for reference

[https://www.loom.com/share/f524dbd7858a47dea08f8a27c688ed46](https://www.loom.com/share/f524dbd7858a47dea08f8a27c688ed46)

There are four major steps to integrating any payment gateway.

1. Have a HighLevel account to be able to create and launch marketplace Apps.
2. Creating a marketplace App \`in custom payment provider category\`
3. Create a service running in any cloud provider to handle all requests from GHL while payments are happening.
4. Create a publicly hosted pages for payment, authentication and other features you want to offer to customers.

Once all above is ready, test out the integration in test mode on different payment channels in Highlevel. Then launch the app in marketplace.

* * *

## **How to create a marketplace App for payment provider**

To create a marketplace App, login to [marketplace dashboard](https://marketplace.gohighlevel.com/). Once logged in, create a new marketplace app with the following config.

**Config for Settings page**

- #### **Required scopes**

- ```
    payments/orders.readonly
    payments/orders.write
    payments/subscriptions.readonly
    payments/transactions.readonly
    payments/custom-provider.readonly
    payments/custom-provider.write
    products.readonly
    products/prices.readonly
```


- #### **Redirect Url**    This url is used to complete the Oauth flow when your app is installed at any location. Once your app is installed at any location, the user is redirects to this given url with a `code`  in query parameter. This code can be used to exchange it for a Oauth Access token which would be used for any API calls to Highlevel.


```
Example redirect url: https://domain/path?code=0834cbd778dacf89c
```

[Oauth Access token API](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token)

- #### **Client Keys**    Store these client keys on your backend server in a secure manner. These keys will be required while making calls for Oauth flow.


- #### **Webhook URL**


This URL will receive webhook events whenever an App is installed or uninstalled from a location.

[Sample Uninstall webhook request](https://marketplace.gohighlevel.com/docs/webhook/AppUninstall)


- #### **SSO Key**    This SSO key should be securely stored. This will be used to decrypt the auth token received for Custom Pages (More on this later)


### **Payment Provider**

Once the settings page config is done, let's move to creating a Payment provider. The payment provider basically ensures that the app is seen by Highlevel as a payments app. The config for payment provider is used to show payment provider details in App details page on marketplace. Below are the inputs required for payment Provider

- #### **Name**  Name of the payment provider

- #### **App description**  App description for Payment provider

- #### **Payment provider type**  Payment provider types specify to GHL about what kind of payments are supported by your payment provider.


  - #### OneTime: This options indicates that one time payments are supported by payment provider where only single time fixed payment is collected without any kind of future payments possibility.

  - #### Recurring: This options indicates that the payment provider supports recurring payment where a fixed recurring charge can be created and started on payment provider. This type would mean you can support recurring products in payments, create and manage subscriptions on your end, as well as provide updates about all subscriptions to Highlevel via webhooks (more on this later). For ex. if subscription has a new payment, is canceled or unpaid etc. So that these updates can reflect in GHL as well.

  - #### Off Session: This option indicates that the payment provider supports off session payments. Which means a given customer can be charged any amount using an API not requiring any customer input/authorization. This typically works where you have the customer cards authorized on their profiles and can use those cards to charge the customer later in time
- #### **Logo**  Logo shown on the payment provider details.


### **Profile**

Once all the above settings are done. We can move to Profile section. Where the important bit is to set the category to `Third Party Provider` . This will ensure your app shows up correctly in App Marketplace, as well as it's visible on the Payments > Integrations page for improved discoverability.

### **Custom Pages**

In order to collect payment related credentials from the user after the app is installed in a location, we recommend using a custom page. A Custom page is a public website that is loaded in an iFrame inside App details page once the app is installed on this location. For any payments app, after installation this custom page will be opened directly, so it's easier to discover for users. Also when you go to Payments > Integrations, if your app is already installed, then from there we redirect users to this Custom page in App marketplace section if they click on `Manage Integration`  in Payments >  Integration > Details details page.

This is all the config that is required for creating a marketplace App. Once this is done, let's move to authentication and app installation.

### **App Installation**

-  Whenever your app is installed in a location, immediately a new tab will open with oauth code on the redirect url provided earlier in config.
- Once the app is installed, the configured custom page is loaded.
- In parallel, Highlevel payments expects an API call with some basic config for payment integration. This creates a basic config in Highlevel payments for your payments app, as well as starts showing the payment app as a payment option in Integrations page. So the users can manage the integration from there as well.
  - [Create Public provider config](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration)

```
{
name: String, // Name of the integration shown in GHL everywhere
description: String, // A short description/tagline for payments app. Shown in Payments > Integrations page
imageUrl: String, // Public image url for payment provider logo to be shown in GHL
locationId: String, // Sub-account ID where the app is installed
queryUrl: String, // A url which received different requests for all queries related to payments. Ex. Verify, Refund etc.
paymentsUrl: String, // Public page url loaded in Iframe for making payments on frontend
}
```

- Once the app is installed, the obvious next step for users should be to add relevant payment config (public keys, merchant Id etc.) required for the configuration of this payment gateway. Two kind of configs are needed for any payment provider, a test mode and a live mode config.
  - > test mode config is used for testing payments where no real money is charged



    > live mode config is used by Customer for real payment where actual money is charged from valid cards/Banks.

- Once any user is updating the live or test config in the App Custom Page, Highlevel payments expects a test and live mode config update as well in following format. The two main parameters required for test and live mode config on Highlevel payments side are:
  - apiKey: This key will be used for verification in backend calls made from Highelevel server to your server.
  - publishableKey: Public api key used for frontend verification while initiating payment.
  - [Connect config API](https://marketplace.gohighlevel.com/docs/ghl/payments/create-config)
- Once the liveMode or testMode keys are added, that particular mode of payments can be used on Highlevel payments. The last step is to set your app as a default payment provider for that Sub-account. That can be done in `Payments > Integrations > Your app > Set as Default`

## **How the payment flow works**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027292624/original/ABr_dqmtRIFFqkbsa9G9sb53_lziRbfpSA.png?1717764603)

So payment flow to collect any payment is mentioned in the above diagram. The iframe events are defined below.

1\. Once the paymentUrl is loaded in iframe, GHL expects a ready event, which should ideally be dispatched once the iframe is loaded completely and is ready to receive payment data and process payment. Once the ready event is dispatched by Iframe, GHL dispatches a data event sending all the data needed for the iframe to process the payment.

```
// Ready event dispatched by payment Iframe
{
type: 'custom_provider_ready',
loaded: true
}

// Payment data event dispatched by GHL
{
type: 'payment_initiate_props',
publishableKey: String, // Publishable key sent while connecting integration API
amount: Number, // Amount in decimal currency with max 2 decimal places
currency: String, // Standard 3 letter notation for currencies ex. USD, INR
mode: String, // Payment mode: subscription/payment
productDetails: {productId: string, priceId: string}, // productId and priceId for recurring products. More details can be fetched using the public api for Products/Prices
contact?: { // Customer details for customer placing the order
    id: String, // Customer id in GHL
    name: String, // Full name of the customer
    email: String,
    contact: String, // Contact Number of customer with country code
},
orderId: String, // GHL internal orderId for given order
transactionId: String, // GHL internal transactionId for the given transaction
subscriptionId: String, // GHL internal subscriptionId passed in case of a recurring product
locationId: String, // Sub-account id for which the given order is created.
}
```

2\. Once the payment data event is dispatched, the Iframe should start the payment process. After the payment is done, GHL expects the following events for different outcomes from the payment

- Payment is successful

```
{
type: 'custom_element_success_response',
chargeId: String, // Payment gateway chargeId for given transaction (Will be shown in order/transaction/subscription details page
}
```

- Payment failed

```
{
type: 'custom_element_error_response',
error: {
    description: String, // Error message to be shown to the user
}
}
```

- Payment canceled: emitted if user cancels the payment while going through the payment process

```
{
type: 'custom_element_close_response'
}
```

3\. If the payment is success, a backend API call is made to the queryUrl for verifying if the payment is success. If the payment is successful, it reflects on the frontend an appropriate action is taken like redirecting user to next page just like it happens with other payment gateways.

- Verify API call is sent with following payload

```
curl --location '${queryUrl}' \
--header 'Content-Type: application/json' \
--data '{
    "type": "verify",
    "transactionId": "ghl_transaction_id",
    "apiKey": "661d4d5a2a0167fb235f99ae",
    "chargeId": "demo_charge_id",
    "subscriptionId":"ghl_subscription_id"
}'
```

The above call is sent from GHL to your servers, on the queryUrl configured initially in the payment config, to verify the payment is successful or not. You can return the following responses for it!

```
ResponseBody{
success: true //. This will mark the transaction and order both as success in GHL
}
```

To mark the transaction as failed, use the following response

```
ResponseBody{
failed: true
}
```

If you want to keep the transaction in pending state, and mark is success later on via webhooks in case of delayed payments, you can use the following response:

```
ResponseBody{
success: false
}
```

* * *

**Payment Method Related Actions**

**1\. Add Payment Method**

As earlier ready event was sent to GHL from the implementation once the iframe is loaded, in a similar manner for add card on file, a similar ready event should be sent with the addition of following field if add card on file is supported by the payment-provider:

```
// Ready event dispatched by payment Iframe
{
type: 'custom_provider_ready',
loaded: true,
addCardOnFileSupported: true // true if your payment provider supports add card on file
}
```

**Note**: Pass "addCardOnFileSupported" as true only if the payment provider supports adding card on file and you have implemented the expected changes to be done from your side as expected from GHL in order to support add card on file for custom-provider.

As soon as GHL will receive the above ready event from the other side, GHL will dispatch an event with the following data to which needs listening to and do the handling accordingly:

```
// Payment data event dispatched by GHL
{
type: 'setup_initiate_props',
publishableKey: String, // Publishable key sent while connecting integration API
currency: String, // Standard 3 letter notation for currencies ex. USD, INR
mode: 'setup', // setup for setup_initiate_props type event for add card on file
contact: { // Customer details for customer placing the order
    id: String // Customer id in GHL
},
locationId: String, //GHL Sub-account id in which card is added for the customer.
}
```

**Note**: Here event type is " **setup\_initiate\_props**" for setting up / adding a card. After successful addition of a payment method for the custom-provider, it is expected that the added payment method should be returned in the list card query for that particular customer as mentioned under the "Custom Provider - List Payment Methods" documentation.

Once the " **setup\_initiate\_props"** data event is dispatched, the Iframe should start the adding card on file / payment method process. After the payment method / card is added, GHL expects the following events for different outcomes from this process:

Payment Method addition is successful

```
{
type: 'custom_element_success_response'
}
```

Payment Method addition failed

```
{
type: 'custom_element_error_response',
error: {
    description: String, // Error message to be shown to the user
}
}
```

**2\. List Payment Method**

This API will now list custom provider payment methods also with provider type as custom-provider. GHL would be fetching all the custom-provider app with valid credentials in live or test mode according to the request made.

For each of the custom provider apps fetched, GHL would be hitting on the `queryUrl` of the app with the following payload:

```
{
      locationId: 'Ktkq45jCf1R15Z1D6Q3t',
      contactId: 'W1nPA7y2Dv8oL1MEvs2A',
      apiKey: 'API_KEY_XXXXXXX',
      type: 'list_payment_methods'
}
```

The expected response would be array of payment methods with each payment method having following fields:

```
{
      id: 'payment_method_id', // will be used to charge card
      type: 'card', // type of payment method e.g: card, us_bank_account
      title: 'US Bank Account', // Title to display while listing cards (max 20 characters)
      subTitle: 'XXX-XXX-1111', // Sub title to display below title; e.g: last 4 digit of card or bank account (max 20 characters)
      expiry: '02/29', // expiry of card or payment method mm/yy
      customerId: '453bu44112q112', // customer id at payment provider end
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png', // image icon url to be displayed while listing payment methods
}
```

Here, the clients need to maintain contactId, locationId, apiKey and customerId (at payment provider end) mapping so that they could list payment methods by customerId and return the response accordingly.

**3\. Charge Payment Method**

For each of the charge request for custom provider, GHL would be hitting on the `queryUrl` of the payment provider with the following payload:

```
{
      paymentMethodId: 'payment_method_id', // the id returned earlier in list api
      contactId: 'W1nPA7y2Dv8oL1MEvs2A', // GHL contact id
      transactionId: '680a923d54b81c699b845e47', // GHL Txn Id
      chargeDescription: 'Invoice - 1',
      amount: 100.00,
      currency: 'USD',
      apiKey: 'API_KEY_XXXXXXX',
      type: 'charge_payment'
}
```

The expected response would be the following  JSON response with success or failure status:

```
{
      success: true, // true in case of charge being successful
      failed: false, // true in case of charge failure
      chargeId: 'pay_r8167s62b', // the payment id or charge-id
      message: 'Success or Failure message', // Error msg in case of failure
      chargeSnapshot: {
         id: 'payment-id',
         status: enum, // ['succeeded', 'failed', 'pending']
         amount: number,
         chargeId: string,
         chargedAt: number // chargedAt timestamp in unix / seconds
      } // charge or payment related details
}
```

Here, the clients should maintain contactId, paymentMethodId, apiKey and transactionId (at payment provider end) mapping.

**4\. Manual subscriptions (subscription schedules) with saved payment methods.**

Payment providers that support saved payment methods can accept **manual subscription creation** requests from HighLevel. This lets user create a **subscription schedule** (e.g., start on a future date, charge monthly) without a checkout session, using a stored payment method.

### **Declare your capability**

Indicate that your custom provider supports subscription schedules by updating your app’s capabilities via the **[Update Capabilities API](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities)**.

**Notes**

- Either `companyId` **or**`locationId` is required.

- Use the OAuth token for the same scope (company or location) in the request headers.

- This setting updates your custom provider’s configuration at the agency level and applies to all current and future sub-account installs where applicable.


Once enabled, HighLevel will allow manual subscription creation (SaaS) and subscription schedules (Payments) for your provider.

### **Runtime flow (server → your `queryUrl`)**

When a manual subscription is created, HighLevel sends a POST to your configured `queryUrl` with `type: "create_subscription"`.

**Request payload**

```json
{
"type": "create_subscription",
"apiKey": "API_KEY_XXXXXXX",
"locationId": "8snsnbsydbwBY",

"contactId": "W1nPA7y2Dv8oL1MEvs2A",
"paymentMethodId": "payment_method_id",      // ID you returned in list_payment_methods
"subscriptionId": "680a923d54b81c699b845e47", // HighLevel subscription ID
"transactionId": "680a923d54b81c699b2123",    // HighLevel transaction ID
"startDate": "2025-09-22",                    // YYYY-MM-DD

"currency": "USD",
"amount": 100.00,                             // Initial charge (if any)
"recurringAmount": "80.00",                   // Subsequent billing amount

"productDetails": [\
    {\
      "_id": "621239912930123998",\
      "name": "Product Name",\
      "qty": 1,\
      "productId": "621239912930123998",\
      "priceId": "62123991293012371289",\
      "prices": [\
        {\
          "_id": "62123991293012371289",\
          "name": "Price Name",\
          "type": "monthly",\
          "currency": "USD",\
          "amount": 100.00,\
          "recurring": { "interval": "month", "intervalCount": 1 },\
          "trialPeriod": 0,\
          "totalCycles": 12\
        }\
      ]\
    }\
]
}
```

**Your expected response**

```json
{
"success": true,
"failed": false,
"message": "Subscription created",

"transaction": {
    "chargeId": "pay_r8167s62b",
    "chargeSnapshot": {
      "id": "payment-id",
      "status": "succeeded",      // one of: succeeded | failed | pending
      "amount": 10000,            // minor units if your system uses them, else number
      "chargeId": "pay_r8167s62b",
      "chargedAt": 1724217600     // unix seconds
    }
},

"subscription": {
    "subscriptionId": "sub_r8167s62b91",
    "subscriptionSnapshot": {
      "id": "sub_r8167s62b91",
      "status": "scheduled",      // one of: scheduled | trialing | active | expired | canceled | unpaid | incomplete
      "trialEnd": 0,              // unix seconds
      "createdAt": 1724217600,    // unix seconds
      "nextCharge": 1726896000    // unix seconds
    }
}
}
```

**Response guidelines**

- Set `success`/`failed` accordingly and include a helpful `message` on errors.

- The `transaction` object is **optional** when the subscription starts in the future (no initial charge).

- Always include `subscription.subscriptionId` and a `subscriptionSnapshot` reflecting the latest state in your system.


* * *

### **Other events/actions**

There are some other events that need to be supported for the payment flow. This list might keep expanding in future depending on the requirements.

- **Refund event**

```
{
type: 'refund',
amount: Number,
transactionId: String, // Internal transaction ID against which refund is issued.
}
```

Refund transactions can be partial as well. And a single transaction can have multiple refund requests with sum of their amount less than or equal to the transaction amount.

### **Webhook events**

Webhook events are supported, for updates to subscriptions, order, transactions, refunds and other actions. Currently some events are supported with more events coming in soon. This list of events and supported payloads would keep expanding.

Events supported by webhooks:

- **Subscriptions**
1. subscription.trialing
2. subscription.active
3. subscription.updated
4. subscription.charged
- **Payments**
1. payment.captured

Endpoint for webhook:-

```
https://backend.leadconnectorhq.com/payments/custom-provider/webhook

Request type: POST
Request body: as shown below.
```

General payload / request body structure for webhook:

```
{
event: enum, /* ['subscription.charged', 'subscription.trialing',\
                'subscription.active', 'subscription.updated', 'payment.captured'] */
chargeId: string, // payment charge id
ghlSubscriptionId: string,
subscriptionSnapshot: object,
chargeSnapshot: object,
ghlTransactionId: string,
marketplaceAppId: string,
locationId: string, // locationId
apiKey: string, // payment provider api key
}
```

Mandatory fields in payload by webhook events:-

1\. payment.captured

```
{
event: enum, // 'payment.captured'
chargeId: string,
ghlTransactionId: string,
chargeSnapshot: object,
locationId: string, // locationId
apiKey: string, // payment provider api key
}
```

2\. subscription.updated

```
{
event: enum, // 'subscription.updated'
ghlSubscriptionId: string,
subscriptionSnapshot: object,
locationId: string, // locationId
apiKey: string, // payment provider api key
}
```

3\. subscription.trialing, subscription.active

```
{
event: enum, // 'subscription.trialing', 'subscription.active'
chargeId: string,
ghlTransactionId: string,
ghlSubscriptionId: string,
marketplaceAppId: string,
locationId: string, // locationId
apiKey: string, // payment provider api key
}
```

4\. subscription.charged

```
{
event: enum, // 'subscription.charged'
chargeId: string,
ghlSubscriptionId: string,
subscriptionSnapshot: object,
chargeSnapshot: object,
locationId: string, // locationId
apiKey: string, // payment provider api key
}
```

Mandatory fields in:-

1\. subscriptionSnapshot:-

```
subscriptionSnapshot: {
id: string, // subscription id
status: enum, // ['trialing', 'active', 'expired', 'canceled', 'unpaid', 'pending']
trialEnd: number, // trial end timestamp in unix / seconds
createdAt: number, // createdAt timestamp in unix / seconds
nextCharge: number //  nextCharge timestamp in unix / seconds
}
```

2\. chargeSnapshot:-

```
chargeSnapshot: {
status: enum, // ['succeeded', 'failed', 'pending']
amount: number, // in 100s i.e. actual amount upto 2 decimal place mutiplied by 100
chargeId: string,
chargedAt: number // chargedAt timestamp in unix / seconds
}
```

Please see our Public API docs for more details: [https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration)

* * *

## **Frequently Asked Questions**

**Q:****What programming languages or frameworks are supported for building custom payment integrations?**

HighLevel’s API for custom payment integrations is language-agnostic. You can use any programming language or framework capable of making HTTP requests and processing JSON responses, such as Python, JavaScript, or Ruby.

**Q: **Can I test my custom payment integration before deploying it live?****

Yes, HighLevel provides a sandbox environment for testing custom payment integrations. This allows you to simulate transactions and verify functionality without impacting real customer data or financial accounts.

**Q: **Is there a way to log or monitor errors in my custom payment integration?****

While HighLevel does not have built-in error logging for custom integrations, you can implement your own logging by capturing and storing API responses and errors. Additionally, webhooks can help you track payment events in real-time for debugging purposes.

**Q: **Can I integrate multiple payment gateways simultaneously using custom integrations?****

Yes, you can integrate multiple payment gateways with custom integrations. You’ll need to create separate configurations for each gateway and ensure your application routes transactions to the appropriate gateway based on your business logic.

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Adding PayPal Buttons to Payment Elements](https://help.gohighlevel.com/support/solutions/articles/155000004254-adding-paypal-buttons-to-payment-elements)
- [How To Set Up A PayPal Integration](https://help.gohighlevel.com/support/solutions/articles/48001204158-how-to-set-up-a-paypal-integration)
- [Authorize.net integration for processing payments](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)
- [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)
- [How to build a custom payments integration on the platform](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)

## Related Articles

- [Customize Email and SMS notifications for invoicing](https://help.gohighlevel.com/support/solutions/articles/48001236926-customize-email-and-sms-notifications-for-invoicing)
- [White Label Payment Provider Solution for NMI & Authorize.net](https://help.gohighlevel.com/support/solutions/articles/155000002747-white-label-payment-provider-solution-for-nmi-authorize-net)
- [What Payment Gateways supported in Affiliate manager for Product Sales?](https://help.gohighlevel.com/support/solutions/articles/155000003656-what-payment-gateways-supported-in-affiliate-manager-for-product-sales-)
- [How to integrate Razorpay within the CRM](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm)
- [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)
- [How to Use the HighLevel MCP Server](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform/hit)