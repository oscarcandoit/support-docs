---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide"
title: " Shipping carrier integration Highlevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [E-commerce store](https://help.gohighlevel.com/support/solutions/155000000059)
   - [E-Commerce Store](https://help.gohighlevel.com/support/solutions/folders/155000000182)
6. HighLevel Custom Shipping Carrier Integration Guide

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

# HighLevel Custom Shipping Carrier Integration Guide

Modified on: Sun, 13 Apr, 2025 at 7:30 AM

**TABLE OF CONTENTS**

- [Introduction](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Introduction)
- [Table of Contents](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Table-of-Contents)
- [Integration Flow Diagram](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Integration-Flow-Diagram)
- [1\. Requirements](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#1.-Requirements)
  - [Technical Knowledge](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Technical-Knowledge)
  - [Backend Service](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Backend-Service)
  - [Database](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Database)
  - [Frontend](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Frontend)
  - [APIs](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#APIs)
- [2\. Initial Setup](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#2.-Initial-Setup)
  - [Create Marketplace App](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Create-Marketplace-App)
  - [Configure App Settings](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Configure-App-Settings)
  - [Required Scopes](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Required-Scopes)
  - [Frontend UI (Custom Page)](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Frontend-UI-(Custom-Page))
  - [Handling User Context](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Handling-User-Context)
  - [Carrier Credential Handling](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Carrier-Credential-Handling)
- [3\. Live Shipping Rates Implementation](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#3.-Live-Shipping-Rates-Implementation)
  - [Register Shipping Carrier in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Register-Shipping-Carrier-in-HighLevel)
  - [Implement Live Rates Callback](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Implement-Live-Rates-Callback)
  - [Configure Shipping Rates in HighLevel Zones](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Configure-Shipping-Rates-in-HighLevel-Zones)
- [4\. Order Syncing and Fulfillment](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#4.-Order-Syncing-and-Fulfillment)
  - [Enable Order Webhooks](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Enable-Order-Webhooks)
  - [Handling Order Creation Webhook](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Handling-Order-Creation-Webhook)
  - [Handling Carrier Shipping Updates](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Handling-Carrier-Shipping-Updates)
- [5\. Disconnection and Uninstallation](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#5.-Disconnection-and-Uninstallation)
  - [Deleting the Shipping Carrier](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Deleting-the-Shipping-Carrier)
- [Conclusion](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide#Conclusion)

## Introduction

This guide provides a comprehensive walkthrough for developing a shipping carrier integration with HighLevel's marketplace. A custom shipping carrier integration allows businesses using HighLevel to connect their preferred shipping providers, offer real-time shipping rates during checkout, automate order fulfillment workflows, and provide accurate tracking information directly to customers. This enhances the native e-commerce capabilities within HighLevel.

Key benefits of implementing a custom shipping carrier integration include:

- **Flexibility:** Connect with any shipping carrier that provides an API, beyond built-in options.
- **Accurate Rates:** Display real-time, accurate shipping costs from your specific carrier accounts during checkout.
- **Automated Fulfillment:** Reduce manual effort by automatically creating shipping labels and triggering shipments with your carrier.
- **Seamless Tracking:** Keep customers informed by syncing tracking information from the carrier back into HighLevel orders.
- **Integrated Experience:** Manage shipping aspects directly within the HighLevel ecosystem.

Building this integration involves backend development to handle API calls and webhooks, frontend development for user configuration (often via a Custom Page), and secure management of credentials and data flow between HighLevel, your service, and the carrier's API. By following this guide, you can build a robust integration that streamlines shipping operations for HighLevel users.

## Integration Flow Diagram

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044784099/original/KlH4zElvi21uzFzAciqiP3e3oxmP1F6ldQ.png?1744189412)

## 1\. Requirements

### Technical Knowledge

- Basic backend development knowledge (e.g., Node.js, Python, etc.).
- Understanding of REST APIs, webhooks, and OAuth 2.0 authorization flow.

### Backend Service

- A backend service capable of:
  - Handling OAuth redirection from HighLevel.
  - Receiving and processing webhooks from both HighLevel (e.g., order events) and the custom shipping carrier (e.g., shipping updates).
  - Making API calls to both HighLevel and the custom carrier's API.
  - Serving the frontend UI (if not hosted separately).

### Database

- A database to securely store:
  - HighLevel OAuth tokens (access and refresh tokens) associated with location IDs.
  - Custom shipping carrier credentials (e.g., API keys, secrets) provided by the user, linked to the HighLevel location.
  - Mapping information between HighLevel entities (like orders) and carrier entities.

### Frontend

- A simple frontend application (can be implemented as a HighLevel Custom Page) that allows users to:
  - Initiate the connection process.
  - Input and save their shipping carrier API credentials.
  - Manage connection settings (e.g., enable/disable features).

### APIs

- Your backend service will need to implement several API endpoints:
  - **OAuth Redirect URI:** Handles the callback from HighLevel after app authorization.
  - **HighLevel Webhook Listener:** Receives webhooks from HighLevel (e.g., `OrderCreate`, `OrderStatusUpdate`).
  - **Carrier Credential Management:** APIs to save/update/delete carrier credentials entered via the frontend.
  - **Carrier Webhook Listener:** Receives webhooks from the custom shipping carrier.
  - **Live Rates Callback:** An endpoint HighLevel calls to fetch live shipping rates during checkout.

## 2\. Initial Setup

### Create Marketplace App

- Follow the HighLevel documentation to create a new Marketplace application: [HighLevel Authorization Documentation](https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization)

### Configure App Settings

- **App Type:** Set the application type to **Sub-Account**. This allows installation on specific location accounts.
- **Redirect URI:** Set this to the URL of your backend service endpoint designated to handle the OAuth callback (e.g., `https://your-backend.com/oauth/callback`).
- **Webhook URL:** Set this to the URL of your backend service endpoint designated to receive webhooks from HighLevel (e.g., `https://your-backend.com/webhooks/highlevel`). Ensure `OrderCreate` and `OrderStatusUpdate` webhooks are enabled in the app settings.

### Required Scopes

- Your application will need the following scopes to manage shipping and orders. Refer to the scopes documentation for the exact scope names: [HighLevel Scopes Documentation](https://highlevel.stoplight.io/docs/integrations/6444956c5219f-scopes)
  - `orders.readonly`
  - `orders.write`
  - `shipping.readonly`
  - `shipping.write`

### Frontend UI (Custom Page)

- Develop a frontend interface where users can enter their specific shipping carrier credentials (API Key, Secret, Account ID, etc.).
- This UI should be embedded within HighLevel using a Custom Menu Link pointing to your hosted frontend page or an endpoint serving the UI.

### Handling User Context

- Your frontend and backend need to identify the HighLevel location the user is currently interacting with. Use the context provided by HighLevel when loading your custom page/menu link.
- Refer to the documentation on User Context: [User Context in Marketplace Apps](https://highlevel.stoplight.io/docs/integrations/adfc6ad89ffb8-user-context-in-marketplace-apps)
- Typically, this involves parsing a token (like a JWT or an encrypted payload) passed as a query parameter when HighLevel redirects to your frontend/backend. Decrypt/validate this token using a shared secret provided during app setup to get the `locationId`.

**Backend Example (Node.js/Express):**

```javascript

```

JavaScript

**Frontend Example (Custom Page JavaScript):**

```javascript

```

JavaScript

### Carrier Credential Handling

1. **Receive Credentials:** Get the carrier API key, secret, etc., from the user via your frontend UI.

2. **Associate with Location:** Store these credentials securely in your database, linking them to the `locationId` obtained from the user context.

3. **Validate Credentials:** Make a test API call to the carrier's API using the provided credentials to ensure they are valid. Provide feedback to the user.

**Frontend Example (Saving Credentials):**





```javascript

```





JavaScript

4. **Setup Carrier Webhooks:** Use the validated carrier credentials to make API calls to the _carrier's_ system to register _your_ backend's carrier webhook listener URL (e.g., `https://your-backend.com/webhooks/carrier`). This allows the carrier to notify your service about shipping updates (like tracking number generation).


## 3\. Live Shipping Rates Implementation

To allow HighLevel checkout to display real-time shipping rates from your custom carrier, you need to register your service as a shipping carrier within HighLevel.

### Register Shipping Carrier in HighLevel

- Your backend service needs to make a POST request to the HighLevel API endpoint responsible for creating shipping carriers. This endpoint is typically associated with the Store/Payments microservice. The endpoint is `POST /shipping-carrier`.
- The request body should include the location context (`altId`, `altType`) and details about your carrier integration.

**Example Request:**

```javascript

```

JavaScript

- **`name`**: The name displayed to the user in HighLevel shipping settings.
- **`callbackUrl`**: The **base URL** where HighLevel will send POST requests to fetch live rates during checkout. HighLevel will append `/rates` to this URL. So, if you provide `https://your-backend.com/shipping`, HighLevel will call `https://your-backend.com/shipping/rates`. In the example above, the final URL called will be `https://your-backend.com/rates/rates`, so adjust your `callbackUrl` accordingly (e.g., just `https://your-backend.com` if your endpoint is `/rates`). _Correction based on user prompt: The prompt implies the full URL including `/rates` should be provided in `callbackUrl`._ Let's assume the prompt is correct: Set `callbackUrl` to `https://your-backend.com/rates`.
- **Response:** A successful response will contain the details of the created carrier, including a unique `_id` (let's call it `shippingCarrierId`). Store this `shippingCarrierId` in your database, associated with the location and carrier credentials.

```javascript

```

JavaScript

### Implement Live Rates Callback

- Your backend must implement the endpoint specified in the `callbackUrl` (e.g., `POST /rates`).
- HighLevel will send a `POST` request to this endpoint during checkout with details of the cart contents and destination address.

**Example Request Body Received by Your Backend (`POST /rates`):**

```javascript

```

JavaScript

- **Your Backend Logic:**
1. Parse the request body.
2. Retrieve the carrier credentials associated with the `altId` (locationId) from your database.
3. Transform the HighLevel rate request payload into the format required by your custom carrier's API.
4. Call the carrier's API to get live shipping rates.
5. Transform the carrier's response into the format expected by HighLevel.
- **Example Response Sent by Your Backend:**

```javascript

```

JavaScript

### Configure Shipping Rates in HighLevel Zones

- After successfully registering the shipping carrier, your integration (or the user manually) needs to add shipping rates based on this carrier to the relevant Shipping Zones within HighLevel Store settings.

- **Backend Automation:**

1. Use the HighLevel API to list existing Shipping Zones for the location. The endpoint is`GET /shipping-zone`.

     **Example Request (`GET /shipping-zone`):**





     ```javascript

     ```





     JavaScript

2. For each relevant zone returned by the above call, use the HighLevel API to create a new Shipping Rate (`POST /shipping-zones/{zoneId}/rates` \- endpoint inferred).

     - In the request body for creating the rate:
       - Set `isCarrierRate` to `true`.
       - Provide the `shippingCarrierId` obtained during carrier registration.
       - Set a placeholder `amount` (e.g., 0) as the actual rate will be fetched live via the callback.
       - Set `name` (e.g., "My Awesome Shipping - Live Rates").
       - Specify `altId`, `altType`.

**Example Request Body (`POST /shipping-zones/{zoneId}/rates`):**

```javascript

```

JavaScript

## 4\. Order Syncing and Fulfillment

This section describes how to sync orders to your carrier and automate fulfillment updates back into HighLevel.

### Enable Order Webhooks

- Ensure the `OrderCreate` and `OrderStatusUpdate` webhooks are enabled in your HighLevel Marketplace App configuration settings. Point them to your backend's HighLevel webhook listener endpoint.

### Handling Order Creation Webhook

1. **Receive Webhook:** Your backend receives a POST request from HighLevel when an order is created or its status changes (specifically looking for newly completed orders relevant for shipping).

2. **Validate:** Verify the webhook signature/authenticity if applicable.

3. **Process:**

   - Check if the order status is appropriate for shipping (e.g., `Completed`, `Paid`).
   - Check if the order requires shipping (contains physical products).
   - Retrieve the full order details using the HighLevel API (`GET /orders/{orderId}`).
   - Retrieve the associated carrier credentials from your database using the `locationId`.
4. **Backend Example (Node.js/Express):**





```javascript

```





JavaScript

5. **Create Order with Carrier:**

   - Transform the HighLevel order data into the format required by your carrier's "create order" or "create shipment" API endpoint.
   - Call the carrier's API to create the order/shipment.
   - Store the mapping between the HighLevel `orderId` and the carrier's order/shipment ID in your database.

### Handling Carrier Shipping Updates

1. **Receive Webhook:** Your backend's _carrier_ webhook listener receives a notification from the shipping carrier when a shipment status changes (e.g., label printed, tracking number generated, shipped, delivered).

2. **Validate:** Verify the webhook's authenticity based on the carrier's mechanism (e.g., signature).

3. **Process:**

   - Parse the webhook data to extract the carrier's order/shipment ID and the new shipping information (tracking number, tracking URL, status).
   - Use the carrier ID to look up the corresponding HighLevel `orderId` and `locationId` from your database mapping.
4. **Backend Example (Node.js/Express):**





```javascript

```





JavaScript

5. **Create Fulfillment in HighLevel:** If a tracking number is now available, trigger the fulfillment process in HighLevel.

   - Use the HighLevel API to create an order fulfillment record. Refer to the official documentation: [Create Order Fulfillment API](https://highlevel.stoplight.io/docs/integrations/1e091099a92c6-create-order-fulfillment)
   - This typically involves making a `POST` request to an endpoint like `/orders/{orderId}/fulfillments`, as demonstrated in the `createHighLevelFulfillment` function example above.

## 5\. Disconnection and Uninstallation

When a user disconnects or uninstalls your Marketplace App from their location, you need to clean up the integration settings within HighLevel.

### Deleting the Shipping Carrier

- Your backend should listen for the App Uninstalled webhook from HighLevel (configure this in your Marketplace App settings).
- When this webhook is received for a specific `locationId`:
1. Look up the `shippingCarrierId` associated with that `locationId` in your database.
2. If found, make a `DELETE` request to the HighLevel API to remove the shipping carrier registration. The endpoint is`DELETE /shipping-carrier/{shippingCarrierId}`.

**Example Request:**

```javascript

```

JavaScript

- This removes the carrier from the location's shipping settings, preventing errors if the callback URL becomes invalid.
- Also, perform cleanup on your side: delete stored credentials, webhook registrations with the carrier, etc.

## Conclusion

Successfully creating a custom shipping carrier integration for HighLevel can significantly enhance the platform's e-commerce capabilities for users, offering greater flexibility and automation in their shipping processes. This guide has outlined the essential steps, from setting up the Marketplace App and handling authentication to implementing live rates, order syncing, and fulfillment.

The core components involve:

1. **Secure Authentication:** Managing OAuth tokens for HighLevel and API credentials for the carrier.
2. **API Integration:** Interacting with both HighLevel and carrier APIs for registration, rates, orders, and fulfillment.
3. **Webhook Handling:** Reliably processing asynchronous events from both platforms.
4. **Data Management:** Storing credentials and mapping IDs between systems.
5. **User Interface:** Providing a clear way for users to configure the integration.

When building your integration, remember to prioritize robust error handling, security best practices (especially around credentials), and clear logging for easier debugging. Consider the scalability of your backend service and database as usage grows. Keep abreast of API changes from both HighLevel and your target shipping carrier to ensure long-term compatibility.

By following these principles and adapting the examples provided, you can build a valuable and reliable shipping carrier integration for the HighLevel marketplace.

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

- [How to Set Up ShipStation Integration for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000006094-how-to-set-up-shipstation-integration-for-ecommerce-stores)
- [Ecommerce: Dropshipping Integration](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration)
- [Shipping: How to Connect a Shippo Integration?](https://help.gohighlevel.com/support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-)
- [How to Use the New Printful Integration with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002602-how-to-use-the-new-printful-integration-with-highlevel)
- [Shipping Profiles: Custom Shipping Rates and App Integrations](https://help.gohighlevel.com/support/solutions/articles/155000006618-shipping-profiles-custom-shipping-rates-and-app-integrations)
- [Customizing the Checkout Page in Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000004467-customizing-the-checkout-page-in-ecommerce-stores)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide/hit)