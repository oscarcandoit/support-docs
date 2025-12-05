---
url: "https://help.gohighlevel.com/support/solutions/articles/48001228664"
title: " Standard Triggers - Order Submitted : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001228664#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001228664#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
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

Modified on: Tue, 8 Apr, 2025 at 12:38 PM

The Order Submitted trigger is a powerful new workflow trigger that allows businesses to upsell customers after they have submitted an order. This trigger works with both 1 Step and 2-Step order forms, giving businesses the flexibility to customize their upsells based on the type of order form used or types of products purchased.

#### **Covered in this Article:**

#### [When does the Order Submitted trigger fire?](https://help.gohighlevel.com/support/solutions/articles/48001228664\#When-does-the-Order-Submitted-trigger-fire?)

#### [How is it different from the Order Form Submitted Workflow Trigger?](https://help.gohighlevel.com/support/solutions/articles/48001228664\#How-is-it-different-from-the-Order-Form-Submitted-Workflow-Trigger?)

#### [Using an Email Template to send an Order Confirmation via this Workflow](https://help.gohighlevel.com/support/solutions/articles/48001228664\#Using-an-Email-Template-to-send-an-Order-Confirmation-via-this-Workflow)

#### [How do submission types filters work?](https://help.gohighlevel.com/support/solutions/articles/48001228664\#How-do-submission-types-filters-work?%C2%A0)

#### [Will this trigger impact existing Order form submission triggers?](https://help.gohighlevel.com/support/solutions/articles/48001228664\#Will-this-trigger-impact-existing-Order-form-submission-triggers?)

#### [What are the filter types, if/else conditions, and custom values I can use?](https://help.gohighlevel.com/support/solutions/articles/48001228664\#What-are-the-filter-types,-if/else-conditions,-and-custom-values-I-can-use?)

* * *

## **When does the Order Submitted trigger fire?**

**Please Note**

```
Make sure that the Allow Multiple Setting is toggled on in the Workflow Settings if you want it to fire off for the same contact for an Upsell, right after it fires off for them for a Primary Product's purchase.

If you put in a wait step which holds the first instance (which came from the purchase of the primary product) of the customer in the workflow, and they go ahead and purchase the upsell, since they would still be held inside the workflow, the Upsell purchase will not let them enter the workflow a second time. Try to avoid using wait steps in this workflow, feel free to use them if you do not plan on selling Upsells or Bumps for the same product.
```

Order Submitted Workflow Trigger

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Order Submitted Workflow Trigger](https://www.loom.com/share/03105bba5cc64a4b8aec9e9e4ac9a88a "Order Submitted Workflow Trigger")

5 min

2.93K views

4

[Open video in Loom](https://www.loom.com/share/03105bba5cc64a4b8aec9e9e4ac9a88a "Open video in Loom")

1.2×

5 min⚡️6 min 9 sec4 min 55 sec4 min 6 sec3 min 16 sec2 min 53 sec2 min 27 sec1 min 58 sec

![](https://cdn.loom.com/sessions/thumbnails/03105bba5cc64a4b8aec9e9e4ac9a88a-1672399674714.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Order Submitted Workflow Trigger](https://www.loom.com/share/03105bba5cc64a4b8aec9e9e4ac9a88a "Order Submitted Workflow Trigger")

5 min

2.93K views

4

[Open video in Loom](https://www.loom.com/share/03105bba5cc64a4b8aec9e9e4ac9a88a "Open video in Loom")

1.2×

5 min⚡️6 min 9 sec4 min 55 sec4 min 6 sec3 min 16 sec2 min 53 sec2 min 27 sec1 min 58 sec

* * *

The trigger runs upon a 1-Step or 2-Step order form submission and upsells. This trigger runs both when an order form is submitted, and again when an upsell purchase occurs; on either of these occasions it holds the product information. This means that if the end customer purchases products A and B on an order form and product C on an upsell, it will run two times (first for A and B purchase, and then for the upsell purchase)

**Please note:**

```
This only works with version 2 funnels. (Check out this article for more details on V2 Funnels) If you are using a version 1 funnel, please upgrade to version 2 using the button shown below:
```

* * *

## **How is it different from the Order Form Submitted Workflow Trigger?**

Order Submitted vs Order Form Submission WF Triggers

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Order Submitted vs Order Form Submission WF Triggers](https://www.loom.com/share/ce4e9483f7c7496cb8765613254bd689 "Order Submitted vs Order Form Submission WF Triggers")

3 min

1.55K views

0

[Open video in Loom](https://www.loom.com/share/ce4e9483f7c7496cb8765613254bd689 "Open video in Loom")

1.2×

3 min⚡️4 min3 min 12 sec2 min 40 sec2 min 8 sec1 min 53 sec1 min 36 sec1 min 16 sec

![](https://cdn.loom.com/sessions/thumbnails/ce4e9483f7c7496cb8765613254bd689-1672399970286.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Order Submitted vs Order Form Submission WF Triggers](https://www.loom.com/share/ce4e9483f7c7496cb8765613254bd689 "Order Submitted vs Order Form Submission WF Triggers")

3 min

1.55K views

0

[Open video in Loom](https://www.loom.com/share/ce4e9483f7c7496cb8765613254bd689 "Open video in Loom")

1.2×

3 min⚡️4 min3 min 12 sec2 min 40 sec2 min 8 sec1 min 53 sec1 min 36 sec1 min 16 sec

* * *

The following are the most significant differences between the Order Submitted and the Order Form Submitted Workflow Triggers:

- The trigger does not run multiple times on multiple product purchases. The trigger contains a single checkout object sending info only a single time upon an order form submission, Even if that one order session consists of buying multiple products.
- Ability to filter the trigger directly on the basis of the global product/price. The existing trigger does not provide this functionality

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271902305/original/HkW1R_dgtia5VEH8lw5XtAJoMKdamm2xog.png?1672224456)

- Ability to use order-related custom values inside the workflow. This contains custom values related to customers, order details, coupon information, and payment gateway

**Please Note:**

```
These Custom values will not show up in the custom values drop down unless the Order Submitted Trigger is one of the workflow trigger steps.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903161/original/GfNiNTpIzmqHoleW7RVRvGJKHUBrcM8vow.png?1672224689)

- Use conditions related to order details or product details in the If branches to direct the workflow based on the cart value/products purchased/funnel

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903365/original/Fy-l-g5na5xvLpx26kk97KGSVej6hjghwA.png?1672224749)

* * *

## **Using an Email Template to send an Order Confirmation via this Workflow**

Using the Email Builder with the Order Submitted Workflow to send Order Confirmation

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Using the Email Builder with the Order Submitted Workflow to send Order Confirmation](https://www.loom.com/share/d63c77963e294cffbaa4258c3501924e "Using the Email Builder with the Order Submitted Workflow to send Order Confirmation")

2 min

903 views

0

[Open video in Loom](https://www.loom.com/share/d63c77963e294cffbaa4258c3501924e "Open video in Loom")

1.2×

2 min 12 sec⚡️2 min 46 sec2 min 12 sec1 min 50 sec1 min 28 sec1 min 18 sec1 min 6 sec53 sec

![](https://cdn.loom.com/sessions/thumbnails/d63c77963e294cffbaa4258c3501924e-1672400419672.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Using the Email Builder with the Order Submitted Workflow to send Order Confirmation](https://www.loom.com/share/d63c77963e294cffbaa4258c3501924e "Using the Email Builder with the Order Submitted Workflow to send Order Confirmation")

2 min

903 views

0

[Open video in Loom](https://www.loom.com/share/d63c77963e294cffbaa4258c3501924e "Open video in Loom")

1.2×

2 min 12 sec⚡️2 min 46 sec2 min 12 sec1 min 50 sec1 min 28 sec1 min 18 sec1 min 6 sec53 sec

* * *

The products purchased by a client can be populated using the Shopping Cart element on an email builder template and using that specific template to send out a confirmation email to the end customer. The Shopping Cart element will auto-populate the product line items along with the purchased quantities, product images, and line item prices.

**Please Note:**

```
The Shopping Cart element will also populate the product images added in the Payments ➝ Products page. In case no image is added for the product, the element will populate the default image on its own. It is highly recommended to use custom product images while making use of the shopping cart element to avoid any default system-generated images.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271904923/original/uMFRmaT5jF11XlibbTZhrwlAA9Slk44k0w.png?1672225164)

All you would need to make sure is that the **Shopping cart** element is added to Template, and the same template is added to the workflow in the **Send Email** action for the values to populate properly.

* * *

## **How do submission types filters work?**

**Primary** \- Filters if any primary product is purchased at the checkout on the order form.

**Bump**\- Filters only if a bump product has been purchased on the order form. The trigger would not work if no bump product has been purchased

**Upsell**\- Filters only in case of upsell purchases. If the filter is set to upsell, the trigger would not run on an order form submission (purchase of a primary/bump product)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271933980/original/qbQT79u8jkDAXIjo053ldP95IVhs9kG4kw.png?1672231859)

* * *

## **Will this trigger impact existing Order form submission triggers?**

No, this should not make any changes to an existing order form submission trigger. However, we recommend using the Order submitted trigger to make use of the order-related custom values along with coupon information and product line items.

* * *

## **What are the filter types, if/else conditions, and custom values I can use?**

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Trigger** |  | **Filter** | **Operators** | **Selectable items** |
| Order submission | 1 | Product | is,  is not | Global product name |
| 1a | Price | is,  is not | Price Name |
| 2 | Order Source | is,  is not | Order form |
| 2a | Submission Type | is,  is not | Primary, Bump, Upsell |
| 3 | Funnel | is,  is not | Funnel names |
| 3a | Page | is,  is not | Page inside funnel |
| 3b | Product | is,  is not | Funnel level products |

|     |     |     |     |
| --- | --- | --- | --- |
| **If/Else** | **Filter** | **Operators** | **Selectable Items** |
| A | Order Source | is, is not | Order form |
| B | Product | is, is not | Global product |
| C | Payment Gateway | is, is not | Stripe, Paypal |
| D | Order Total | Numeric operators | Numeric operators |
| E | Submission Type | is, is not | Primary, Bump, Upsell |
| F | Funnel | is, is not | Funnel names |

|     |     |
| --- | --- |
| **Custom Value Category** | **Custom Value** |
| Order | Currency symbol ($) |
| Currency code (USD) |
| Cart Total |
| Order total |
| Coupon code |
| Total discount |
| Created on |
| Created at |

|     |     |
| --- | --- |
|  | Order ID |
| Payment Gateway |

|     |     |
| --- | --- |
| **Custom Value Category** | **Custom Value** |

|     |     |
| --- | --- |
| Order>Customer | ID |
| First Name |
| Last Name |
| Name |
| Email |
| Phone |
| Full Address |
| City |
| State |
| Country |

|     |     |
| --- | --- |
|  | Postal Code |

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

- [Create Task Event In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147413-create-task-event-in-campaigns)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)
- [Workflow Action - Update Contact Field - Date type field](https://help.gohighlevel.com/support/solutions/articles/48001216170-workflow-action-update-contact-field-date-type-field)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)

## Related Articles

- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)
- [Workflow Trigger - Payment received](https://help.gohighlevel.com/support/solutions/articles/48001238334-workflow-trigger-payment-received)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted)
- [Workflow Trigger - Order Submitted vs Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission)
- [How to fetch product details purchased by customers in workflows](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001228664)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted/hit)