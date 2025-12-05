---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted"
title: " Workflow Trigger - Order Submitted : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Payments Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000742)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Payments Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000742)
6. Workflow Trigger - Order Submitted

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

# Workflow Trigger - Order Submitted

Modified on: Wed, 12 Feb, 2025 at 5:59 AM

Managing post-purchase actions efficiently is crucial for any business. The Order Submitted Trigger in HighLevel automates workflows based on completed orders, whether from 1-Step or 2-Step order forms. This guide will help you understand what this trigger does, how it differs from other order-related triggers, and how to configure it for optimized workflow automation.

* * *

**TABLE OF CONTENTS**

- [What is the Order Submitted Workflow Trigger?](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#What-is-the-Order-Submitted-Workflow-Trigger?)
- [Key Benefits of the Order Submitted Workflow Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Key-Benefits-of-the-Order-Submitted-Workflow-Trigger)
- [Order Submitted vs. Order Form Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Order-Submitted-vs.-Order-Form-Submitted)
- [Configuring the Order Submitted Workflow Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Configuring-the-Order-Submitted-Workflow-Trigger)
  - [Add Order Submitted Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Add-Order-Submitted-Trigger)
  - [Applying Filters](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Applying-Filters)
    - [Global Product](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Global-Product)
    - [Order Source](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Order-Source)
    - [Sub-Source](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Sub-Source)
    - [In Funnel/Website](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#In-Funnel/Website)
    - [Page Is](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Page-Is)
    - [Submission Type](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Submission-Type)
    - [Product Price](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Product-Price)
  - [Enable “Allow Multiple” (Best Practice for Upsells & Bumps)](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Enable-%E2%80%9CAllow-Multiple%E2%80%9D-(Best-Practice-for-Upsells-&-Bumps))
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted#Frequently-Asked-Questions)

* * *

# **What is the Order Submitted Workflow Trigger?**

The Order Submitted Trigger activates a workflow when an order is placed through an order form. Unlike basic order form triggers, this trigger captures both primary purchases and upsell transactions, making it ideal for:

- Sending order confirmation emails
- Automating upsell follow-ups
- Updating customer records with order details
- Segmenting customers based on purchase behavior

This trigger supports custom values, allowing businesses to dynamically reference product names, quantities, prices, and payment methods inside workflows.

* * *

## **Key Benefits of the Order Submitted Workflow Trigger**

- **Automated Engagement:** Sends order confirmations and upsell offers instantly.

- **Increased Revenue:** Enables upsell workflows to boost sales.

- **Time-Saving Automation:** Reduces manual order management tasks.

- **Detailed Order Insights:** Captures product and payment data for better automation.

* * *

## **Order Submitted vs. Order Form Submitted**

Understanding the difference between these triggers is essential for choosing the right one for your automation.

|     |     |     |
| --- | --- | --- |
| Feature | Order Submitted | Order Form Submitted |
| Trigger Activation | Fires for each product purchase (Primary, Bump, Upsell) | Fires once per order submission, regardless of products purchased |
| Filter Capabilities | Can filter by product, price, source, submission type | No filtering by product/price |
| Custom Values | Provides order details like product names, prices, quantities | Limited order details available |

* * *

## **Configuring the Order Submitted Workflow Trigger**

### **Access Workflow Builder**

Navigate to the **Automation** tab and select Workflows. If you’re starting from scratch, click **\+ Create Workflow** to build a new automation. If you want to add this trigger to an existing workflow, simply find the workflow from the list and open it for editing.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041447244/original/KLPycPHwFyJvar-6Uifu3gF0yGEd0wRCng.png?1739354237)

### **Add Order Submitted Trigger**

Once inside the workflow builder, click on Add New Trigger to begin setting up your automation. In the search bar, type Order Submitted and select it from the list of available triggers.After selecting the trigger, you’ll have the option to customize it further by applying filters based on product type, order source, or submission details.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041448111/original/C9kYGDOj50r0ywoURh10ZgKotD6Y141hiQ.png?1739354689)

### **Naming the Trigger**

Give your trigger a clear and specific name that reflects its purpose. A well-named trigger makes it easier to manage and identify within your workflow, ensuring clarity when reviewing automation settings.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041449901/original/Jr9Vkn5E8TTTXimIQ_7xH8yh0AquP-jb8A.png?1739355684)

### **Applying Filters**

Filters allow you to fine-tune your workflow trigger by specifying conditions based on order details. This helps ensure the automation runs only when certain criteria are met.

Below are the available filters and their corresponding operators, allowing for precise customization to match your business needs.

#### **Global Product**

This filter allows you to trigger the workflow based on a specific product or price. You can choose to include or exclude a product by selecting **“Is”** or **“Is Not”** from the dropdown menu, ensuring the automation runs only for relevant purchases. This is useful for setting up targeted follow-ups or exclusive post-purchase actions for certain products.

- **Is:**  Triggers the workflow only when the specified product is purchased.
- **Is Not:**  Excludes the selected product, ensuring the workflow runs for all other products except the one specified.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041451561/original/VB2bGF6uQ2iu5TCoVnSXZfn9WnLiiFrHYg.png?1739356561)

#### **Order Source**

This filter allows you to determine where the order was placed, ensuring that the workflow triggers only for purchases from a specific source. The available options for selection include:

|     |     |
| --- | --- |
| **Filter Option** | **Description** |
| External | Orders placed through an external integration or third-party system. |
| Form | Orders submitted via a standard form (not an order form). |
| Membership | Purchases made for membership-based products. |
| Order Form | Transactions processed through an order form. |
| Payment Link | Orders completed via a direct payment link. |
| Store | Purchases made from an online store. |
| Survey | Orders submitted through a survey form. |

Operators:

- **Is:** Triggers the workflow only for the selected order source.
- **Is Not:** Excludes the selected order source from triggering the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041451651/original/W6xZaFYIhJbqLJjgA7n2mVsyX0laW4SHEQ.png?1739356598)

#### **Sub-Source**

This filter allows for a more granular refinement of the Order Source, helping businesses target specific funnels, pages, or other subcategories within the selected source. It ensures that workflows trigger only when an order is placed within a particular sub-environment of the main order source.

For example:

If Order Form is selected as the order source, the Sub-Source filter allows you to specify a particular funnel or website where the order form was submitted.

If Store is the order source, the Sub-Source filter can help identify a specific product category or store section where the purchase occurred.

Operators:

- **Is:** Triggers the workflow only when the order matches the selected sub-source.
- **Is Not:** Excludes orders from the selected sub-source.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041453920/original/XSKgeqL9Ut_CvNhh52QzaUF8dCMQ-6S4og.png?1739357968)

#### **In Funnel/Website**

This filter ensures that workflows trigger only when an order form is submitted through a specific funnel or website, helping businesses refine automation based on the exact sales channel used. This is particularly useful for businesses that run multiple sales funnels or have different websites for various products or services.

For example:

If you sell products across multiple funnels, you can trigger a workflow only when an order is submitted within a specific funnel.

If you have different landing pages for different promotions, you can use this filter to trigger a workflow only when the order comes from a particular page within a funnel or website.

Operators available:

- **Is:** Workflow will trigger only if the order is submitted through the selected funnel or website.
- **Is Not:** Workflow will exclude orders from the selected funnel or website.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041455510/original/TcbjTdl0sBMEDuLY37dmIIXHxIff2vGtSg.png?1739359008)

#### **Page Is**

This filter ensures that workflows trigger only when an order form is submitted on a specific page within a funnel or website. It allows businesses to create highly targeted automation based on the exact page where a customer completes a purchase.

For example:

If a business has multiple pages within a funnel (e.g., Checkout Page, Thank You Page, Upsell Page), this filter ensures that workflows only trigger when an order is submitted on a selected page, such as the Registration Form or Checkout Page.

If different order forms exist on various pages of a website, this filter can be used to limit workflow execution to a specific order page rather than all pages within a funnel or website.

Operators available:

- **Is:** The workflow will trigger only when the order is submitted on the selected page.
- **Is Not:** The workflow will exclude orders from the selected page.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041456803/original/pPELnia5Lg3ESK6wczTCfBKZn1uWCSOAkA.png?1739359842)

#### **Submission Type**

This filter allows workflows to trigger based on the type of purchase made, helping businesses automate follow-ups and post-purchase actions accordingly. It ensures that workflows activate only when a specific type of transaction occurs.

|     |     |
| --- | --- |
| Operator | Description |
| Primary | Triggers when a customer purchases the main product at checkout. This is the initial product purchase made through an order form. |
| Bump | Triggers when a bump offer is accepted during checkout. Bump offers are optional add-ons that customers can purchase along with the primary product. |
| Upsell | Triggers when a post-checkout upsell is accepted. Upsells are additional offers presented after the initial purchase, often to increase order value. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041457552/original/FYpZwBGu8g7zoNf_bNGKc_3bPsa0vB6VTw.png?1739360381)

#### **Product Price**

This filter triggers workflows based on the specific price of a product, allowing businesses to differentiate actions based on standard pricing, discounts, or promotional rates. It ensures that workflows are activated only when a product is purchased at a designated price point.

Operators available:

- **Is:** Triggers the workflow when the product is purchased at a specific price set in the order form.
- **Is not:** Triggers the workflow when the product is purchased at any price other than the specified one.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041457186/original/FYkeDjYIGGnznC1EeVoKA8LszdSfuPL4ng.png?1739360116)

### **Enable “Allow Multiple” (Best Practice for Upsells & Bumps)**

To ensure seamless automation for both primary purchases and upsells, it’s recommended to enable the Allow Multiple setting in workflow settings. This allows the workflow to trigger separately for each purchase event, including bump offers and upsells.

|     |     |
| --- | --- |
| When Allow Multiple is ON | The workflow can trigger multiple times for the same contact, ensuring that both the primary purchase and any subsequent upsell purchases are processed independently. |
| When Allow Multiple is OFF | If the workflow is still active from the primary purchase, any upsell purchases made by the customer won’t trigger a new instance of the workflow. |

```
Tip: Keeping Allow Multiple ON prevents delays and ensures that upsell and bump offers trigger the workflow correctly, optimizing revenue opportunities and customer engagement.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041458623/original/X3hNZ7vn-fIj-15ytERk82g925XxdyR9_Q.png?1739361076)

### **Save and Publish the Workflow**

Once you’ve configured your Order Submitted trigger and applied the necessary filters, it’s time to finalize your workflow.

1. Click Save to ensure all trigger settings are applied correctly.
2. Click Publish to activate the workflow and allow it to start processing orders automatically.
3. Test Your Workflow by submitting a test order and checking the Workflow History to confirm that the trigger fires as expected.

* * *

## **Frequently Asked Questions**

**Q: Does this trigger work with upsell purchases?**

Yes, the Order Submitted Trigger fires for both primary purchases and upsells, provided Allow Multiple is enabled in workflow settings.

**Q: Can I use this trigger to send order confirmations?**

Yes, you can automate order confirmation emails and use the Shopping Cart element to include product details dynamically.

**Q: How do I ensure the workflow only triggers for a specific product?**

Use the Global Product filter and select “Is” or “Is Not” to include/exclude specific products.

**Q: Will this trigger affect my existing order form workflows?**

No, the Order Submitted Trigger works independently from the Order Form Submitted Trigger, allowing more granular control over workflow execution.

**Q: Can I trigger workflows based on the payment method used?**

Yes, you can apply filters based on the payment gateway (Stripe, PayPal, etc.) to trigger different workflows for different payment methods.

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

- [Workflow Trigger - Invoice](https://help.gohighlevel.com/support/solutions/articles/155000002835-workflow-trigger-invoice)
- [Workflow Trigger - Product Access Granted](https://help.gohighlevel.com/support/solutions/articles/155000003256-workflow-trigger-product-access-granted)
- [Workflow Trigger - Product Access Removed](https://help.gohighlevel.com/support/solutions/articles/155000003257-workflow-trigger-product-access-removed)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)
- [Workflow Trigger - Subscription](https://help.gohighlevel.com/support/solutions/articles/155000003536-workflow-trigger-subscription)

## Related Articles

- [Workflow Trigger - Order Submitted vs Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)
- [How to fetch product details purchased by customers in workflows](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows)
- [Workflow Trigger – Service Booking (Services v2)](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted/hit)