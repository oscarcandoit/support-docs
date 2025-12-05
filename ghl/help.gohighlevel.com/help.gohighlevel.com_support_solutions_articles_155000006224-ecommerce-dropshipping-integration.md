---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration"
title: " Ecommerce: Dropshipping Integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [E-commerce store](https://help.gohighlevel.com/support/solutions/155000000059)
4. [E-Commerce Store](https://help.gohighlevel.com/support/solutions/folders/155000000182)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [E-commerce store](https://help.gohighlevel.com/support/solutions/155000000059)
   - [E-Commerce Store](https://help.gohighlevel.com/support/solutions/folders/155000000182)
6. Ecommerce: Dropshipping Integration

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

# Ecommerce: Dropshipping Integration

Modified on: Sat, 30 Aug, 2025 at 7:34 AM

## **Introduction**

This document will help you create a dropshipping integration and publish it to the marketplace app. It outlines the high-level goals and structure you’ll follow when building provider integrations (e.g., logistics, fulfillment, shipping) that connect to the platform and are distributed via the marketplace.

## **Dropshipping Integration**

### **1\. Marketplace App Creation**

Create your app in the Marketplace: set the distribution type (Agency or Sub-Account), complete the app profile, add the required OAuth scopes, and generate client credentials (Client ID/Secret). This establishes the app’s identity and permissions.

For a detailed guide, visit the helper doc link: [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace).

Based on the APIs you plan to use (products, prices, orders, fulfillments, webhooks, etc.), ensure you add the corresponding OAuth scopes to your app. Refer to the complete scopes list here: [Scopes](https://highlevel.stoplight.io/docs/integrations/vcctp9t1w8hja-scopes).

### **2\. Authorization Handling for Marketplace App**

Configure the OAuth Redirect URL in app settings, then implement a GET callback endpoint to receive the authorization code. Exchange the code for access/refresh tokens, store them securely, and set up a POST webhook endpoint; add its URL in app settings. Finally, assign locations/accounts to the app and verify the connection.

For a detailed guide, visit the helper doc link: [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace).

### **3\. Product Sync (Platform → HighLevel)**

Use the Public API to first create a Product, then create one or more Prices for that product. For simple items, you will have a single price; for variant items, create a price per variant combination.

- Product creation (high-level):

  - Create Product with core fields: name, locationId, description, productType (PHYSICAL/DIGITAL), availableInStore, image, and medias.

  - For variant products, include variants with variant options (e.g., Color, Size). Keep the option IDs; they are required when creating variant prices.
- Price creation:

  - Create Price referencing the product \_id: include locationId, type (one\_time/recurring), currency, amount, sku, and optional inventory flags.

  - For variant products, pass variantOptionIds that match the specific combination (e.g., \[Color: Red, Size: Small\]).

  - For physical products, include shippingOptions with weight (value, unit) and dimensions (length, width, height, unit).
- Optional: After prices are created, you can map images to specific variants by updating the Product medias with priceIds so storefronts render the correct variant image.


For a detailed guide (examples and payloads), visit: [Create a Product with Price using Public API](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api).

For the list of APIs and standard response fields, refer to: [Integrations API — Standard Response Fields](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-standard-response-fields).

### **4\. Order Webhooks (HighLevel → Provider)**

Subscribe to two webhooks: OrderCreate and OrderStatusUpdate. These drive order export to your provider and subsequent updates.

- OrderCreate webhook (schema highlights):

- Contains order header (ids, dates), customer info, shipping/billing addresses, line items with price/sku, currency/amounts, and optional metadata.

- Use it to create or upsert the corresponding order in your provider. Map each line item to the provider’s SKU/variant before submission.

- Schema: [OrderCreate](https://highlevel.stoplight.io/docs/integrations/80837edaceead-order)


- OrderStatusUpdate webhook (schema highlights):

- Includes order id/status transitions (e.g., pending → completed/cancelled), timestamps, and may include fulfillment-related signals from the platform.

- Use it to trigger provider order creation only when status is eligible (e.g., Completed), or to cancel/hold as needed.

- Schema: [OrderStatusUpdate](https://highlevel.stoplight.io/docs/integrations/9f1caf85e3890-order)


Using these webhooks, construct the provider-specific order payload (map items to provider SKU/variant, addresses, totals) and create/update the order in the respective platform.

### **5\. Fulfillment Webhooks (Provider → HighLevel)**

Subscribe to your provider’s shipment/fulfillment webhooks. When a shipment is created or updated, build a fulfillment payload for the corresponding HighLevel order and submit it.

- Map provider shipment → HighLevel fulfillment:

  - Order: internal order id in HighLevel

  - Items: price/variant identifiers and fulfilled quantities

  - Tracking: trackingNumber, shippingCarrier, trackingUrl

  - Optionally notify the customer

Use the API to create the fulfillment: [Create Order Fulfillment](https://highlevel.stoplight.io/docs/integrations/1e091099a92c6-create-order-fulfillment).

Example request body:

{

"items":\[{"priceId":"66b6021be68f7a98102ba272","qty":2}\],

"trackings":\[\
\
{\
\
"trackingNumber":"1Z999AA10123456784",\
\
"shippingCarrier":"UPS",\
\
"trackingUrl":"https://wwwapps.ups.com/WebTracking/track?trackNums=1Z999AA10123456784"\
\
}\
\
\],

"notifyCustomer":true

}

### **6\. Custom Pages (Optional)**

If you want to extend your Marketplace app with richer UI/flows, leverage Custom Pages. These allow embedding provider-specific setup, advanced settings, or dashboards inside HighLevel while preserving user context.

- Typical uses: connection wizards, verification steps, shipping preferences, carrier service mappings, troubleshooting pages.

- Authentication/User context: pass and validate user context per the guide to securely identify the installing user/location when rendering your page.


Refer to: [User context in Marketplace apps](https://highlevel.stoplight.io/docs/integrations/adfc6ad89ffb8-user-context-in-marketplace-apps).

## **Conclusion**

You now have a compact blueprint to ship a dropshipping integration end‑to‑end:

- Create and scope your Marketplace app, then complete OAuth and token storage.

- Sync catalog data using Products/Prices APIs.

- Subscribe to order webhooks to export orders to your provider.

- Consume provider shipment webhooks and create fulfillments back in HighLevel.

- Optionally enhance UX with custom pages powered by user context.


Use the linked docs for deep dives and payload examples as you implement each step.

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

- [How to Set Up an E-Commerce Online Store (Websites)](https://help.gohighlevel.com/support/solutions/articles/155000001157-how-to-set-up-an-e-commerce-online-store-websites-)
- [Manual Payment Method in E-commerce Stores & Order Forms](https://help.gohighlevel.com/support/solutions/articles/155000002897-manual-payment-method-in-e-commerce-stores-order-forms)
- [Shipping and Delivery rates for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000002842-shipping-and-delivery-rates-for-ecommerce-stores)
- [Shipping: How to Connect a Shippo Integration?](https://help.gohighlevel.com/support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-)
- [How to use Printful Integration with your Ecommerce Store?](https://help.gohighlevel.com/support/solutions/articles/155000002442-how-to-use-printful-integration-with-your-ecommerce-store-)
- [Recover Lost Sales with Automatic Abandoned Checkout Emails](https://help.gohighlevel.com/support/solutions/articles/155000001718-recover-lost-sales-with-automatic-abandoned-checkout-emails)

## Related Articles

- [How to Use the New Printful Integration with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002602-how-to-use-the-new-printful-integration-with-highlevel)
- [Printify Integration for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000006595-printify-integration-for-ecommerce-stores)
- [How to use Printful Integration with your Ecommerce Store?](https://help.gohighlevel.com/support/solutions/articles/155000002442-how-to-use-printful-integration-with-your-ecommerce-store-)
- [How to sell products on Facebook and Instagram Shops?](https://help.gohighlevel.com/support/solutions/articles/155000004055-how-to-sell-products-on-facebook-and-instagram-shops-)
- [How to Set Up ShipStation Integration for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000006094-how-to-set-up-shipstation-integration-for-ecommerce-stores)
- [Shipping Profiles: Custom Shipping Rates and App Integrations](https://help.gohighlevel.com/support/solutions/articles/155000006618-shipping-profiles-custom-shipping-rates-and-app-integrations)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration/hit)