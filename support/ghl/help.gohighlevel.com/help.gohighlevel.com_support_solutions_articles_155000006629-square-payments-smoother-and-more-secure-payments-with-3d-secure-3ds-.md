---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-"
title: "  Smoother and More Secure Payments with 3D Secure (3DS) on Square Payment Provider : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Payment Settings & Integrations](https://help.gohighlevel.com/support/solutions/folders/155000000905)
6. Square Payments: Smoother and More Secure Payments with 3...

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

# Square Payments: Smoother and More Secure Payments with 3D Secure (3DS)

Modified on: Tue, 14 Oct, 2025 at 10:57 AM

HighLevel now supports 3D Secure (3DS) with Square, adding an extra layer of cardholder authentication to online checkouts. This enhancement automatically triggers the verification step whenever a buyer’s card or regional regulations require Strong Customer Authentication (SCA), helping you capture more payments while keeping fraud at bay. ( [squareup.com](https://squareup.com/help/us/en/article/7623-risk-manager-3d-secure-3ds))

* * *

**TABLE OF CONTENTS**

- [What is 3D Secure (3DS) for Square?](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#What-is-3D-Secure-(3DS)-for-Square?)
- [Key Benefits of 3D Secure (3DS) for Square](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#Key-Benefits-of-3D-Secure-(3DS)-for-Square)
- [3DS High-Level Checkout Flow](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#3DS-High-Level-Checkout-Flow)
- [Prerequisites & Supported Flows](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#Prerequisites-&-Supported-Flows)
- [3DS Error Handling & Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#3DS-Error-Handling-&-Troubleshooting)
- [How does it work?](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#How-does-it-work?)
  - [3DS flow on Square -](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#3DS-flow-on-Square--%C2%A0)
  - [3DS flow on NMI -](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#%E2%80%8B3DS-flow-on-NMI--%C2%A0)
  - [Check out Public key addition on NMI -](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#Check-out-Public-key-addition-on-NMI--%C2%A0)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-#Frequently-Asked-Questions)

* * *

## **What is 3D Secure (3DS) for Square?**

3D Secure (3DS) is an industry-standard protocol that prompts the buyer to verify their identity (e.g., a one-time SMS code, Face ID, or redirect to the issuing bank) before the transaction can be authorized. Enabling 3DS greatly reduces fraud-related chargebacks because liability shifts to the card issuer once authentication succeeds. Square provides 3DS as part of its built-in Risk Manager, and HighLevel now passes the required data so Square can invoke the extra verification step whenever needed.

* * *

## **Key Benefits of 3D Secure (3DS) for Square**

The new Square 3DS integration delivers immediate advantages:

- Fewer payment failures on cards that mandate 3DS, boosting conversion rates.

- Added fraud protection and chargeback liability shift once authentication succeeds.

- Automatic SCA compliance in regions such as the UK and EU—no extra coding required.

- A friction-light, in-checkout pop-up keeps customers inside your HighLevel funnel for a smoother experience.

* * *

## **3DS High-Level Checkout Flow**

3DS is entirely automatic once your Square account is connected in HighLevel.

- The Buyer enters the required billing address and contact fields on an Order Form, Payment Element, Invoice, or Store checkout.

- HighLevel sends the transaction request to Square; Square risk rules decide whether 3DS is required based on the card, amount, location, and other factors.

- If 3DS is triggered, a secure pop-up/modal appears for the buyer to complete authentication.

- On successful verification, the payment is captured, and the HighLevel order/invoice status updates to “Paid.”

- If verification fails or times out, the payment is declined, and HighLevel surfaces the error so the buyer can try another card.

* * *

## **Prerequisites & Supported Flows**

3DS for Square is available anywhere you can already accept Square card payments in HighLevel: Order Forms, Payment Links, Ecommerce Store, Invoices, and more.

Prerequisites:

- A connected Square account at Sub-Account → Payments → Integrations.

- Square location set to Live mode.

- Billing Address + Email/Phone fields visible (and preferably required) on the checkout form so Square can validate the buyer.

- The buyer uses a card and an issuing bank that supports 3DS.

* * *

## **3DS Error Handling & Troubleshooting**

Understanding common scenarios helps you support customers:

- **“Authentication failed”** — Buyer entered an incorrect SMS code or declined Face ID. Ask them to retry or use another card.

- **“Issuer declined”** — The card-issuing bank blocked the transaction before or after 3DS. Suggest contacting their bank.

- **“3DS not completed”**— Buyer closed the pop-up. Please encourage them to complete the step.

HighLevel always logs the gateway response under Payments → Transactions for easy reference.

* * *

## **How does it work?**

- **Square**: No setup needed - it just works once the address and contact fields are added by the customer during checkout.

- **NMI**: A quick one-time setup is required to enable 3DS:

- Enroll in Payer Authentication 2.0 in your NMI account.

- Confirm the service status is Active.

- Generate a Checkout Public Key for 3DS in your NMI Merchant Portal, and add it to your HighLevel integration.

Once set up, whenever a card requires 3DS, your customers will automatically see a pop-up to verify and complete their payment. Refer to the [Help article](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-).

### **3DS flow on Square -**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734493/original/LGFC9Zao8SCoOuRY9PTj9t4FUr5LTP0nBw.png?1760108727)**

### **3DS flow on NMI -**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734693/original/dVnEpwdSrrFB7sPsTtqaNc4Uo7j1BGB_zg.png?1760108824)**

### **Check out Public key addition on NMI -**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734649/original/fZqOcq4KN3rowN8LG9vZbWFJIivy8c1hlw.png?1760108801)**

* * *

## **Frequently Asked Questions**

**Q: Do I need to enable anything in the Square Dashboard?**

No. Square’s default Risk Manager rules already apply 3DS to high-risk or SCA-mandated transactions.

**Q: Does 3DS work for saved “Card on File” payments?**

Square 3DS applies only to real-time cardholder-initiated payments. Card-on-file debits are exempt.

**Q: Is there an extra fee for using 3DS?**

Square does not charge additional 3DS fees; standard Square processing rates apply.

**Q: Will 3DS appear on every transaction?**

No. The card issuer and Square’s risk engine decide when to trigger 3DS. Many low-risk payments go straight through without the challenge.

**Q: Can I disable 3DS?**

You cannot disable 3DS from inside HighLevel; Square manages the rules. You may adjust risk rules in the Square Dashboard, but this is not recommended for SCA regions.

**Q: Does 3DS slow down checkout?**

The additional step adds only a few seconds and is embedded in-page, minimizing friction.

**Q: Is 3DS supported on POS or Mobile Payments?**

No. 3DS is solely for online (card-not-present) flows. In-person Square POS transactions use chip or tap for security instead.

**Q: How do I troubleshoot repeated 3DS failures?**

Check that the billing address matches the card issuer’s records, confirm the buyer’s device allows pop-ups, and ask them to retry with another card if problems persist.

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

- [How to improve the security of my SaaS Checkout process](https://help.gohighlevel.com/support/solutions/articles/155000001180-how-to-improve-the-security-of-my-saas-checkout-process)
- [Tap to Pay on Square for POS and Mobile Payments](https://help.gohighlevel.com/support/solutions/articles/155000005506-tap-to-pay-on-square-for-pos-and-mobile-payments)
- [Using Square as a Payment Provider for POS and Mobile Payments](https://help.gohighlevel.com/support/solutions/articles/155000005166-using-square-as-a-payment-provider-for-pos-and-mobile-payments)
- [How to Connect and Use Square Payment Processor in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000003314-how-to-connect-and-use-square-payment-processor-in-highlevel)
- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Getting Started - Connect Stripe](https://help.gohighlevel.com/support/solutions/articles/155000005073-getting-started-connect-stripe)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006629-square-payments-smoother-and-more-secure-payments-with-3d-secure-3ds-/hit)