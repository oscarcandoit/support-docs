---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows"
title: " How to fetch product details purchased by customers in workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. How to fetch product details purchased by customers in wo...

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

# How to fetch product details purchased by customers in workflows

Modified on: Mon, 3 Feb, 2025 at 5:49 AM

### **TABLE OF CONTENTS**

- Overview
- Action Name
- Action Description
- Action Details
- Example

* * *

### **Overview**

The "Pluck and Join" feature in workflows allows you to dynamically pull product details, such as titles, from order submissions and format them into a single string. This feature is especially useful for automating order management, syncing product information with external systems, or updating data logs like Google Sheets. Similar to any custom field, users can now use Pluck and Join to format the data.

This article will talk about fetching product details such as items  from orders submitted and send this data to google sheets or any other platform.

* * *

### **Description**

This feature allows users to use helpers such as `pluck` and `join` in workflows. The `pluck` helper extracts specific fields (e.g., product titles) from an array of objects, while the `join` helper combines these values into a single string with a custom separator. These are helpful for automating data extraction and formatting across data.

* * *

### **Step-by-Step Guide**

1. **Choose the Trigger**:

   - Start by setting up a workflow trigger, such as `Order Form Submitted or Inbound webhook`, or any trigger that have a list of data - to initiate the workflow when an order is placed.
2. **Set Up an Action**:

   - Example: Use the "Create Row in Google Sheets" action to log customer and product details.
     - **Customer Name**: Use `{{ contact.first_name }}`.
     - **Email**: Use `{{ contact.email }}`.
     - **Products**: Use the combined string created in the next step.
3. **Add Data Processing Logic**:

   - Use the `pluck` helper to extract the product titles from the order’s `line_items`array.








     `{{ pluck order.line_items "title" }}`

   - Use the `join`helper to combine these titles into a single, formatted string.

     ```handlebars
     {{ join (pluck order.line_items "title") ", " }}
     ```
4. **Test and Validate**:

   - Before finalizing, run a test to ensure the workflow processes data as expected. Use tools like Postman or live order submissions to confirm correct output.
5. **List of fields available**:
   - title,
   - image,
   - price,
   - quantity,
   - line\_subtotal,
   - line\_discount,
   - line\_price,
   - meta
     - product\_id,
     - price\_id,
     - order\_id / invoice\_id

Example pluck - {{pluck payment.line\_items “title”}} , {{pluck payment.line\_items “line\_subtotal”}} , {{pluck payment.line\_items “meta.product\_id”}}

To pluck any other value, replace the field in the above example pluck

* * *

### **Example**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040013638/original/ArPTxHZKN6pAr_EZVTjXMnyzNroCaA8w4A.png?1737111986)**

#### **Scenario**

You want to log order details into a Google Sheet whenever a customer submits an order form. This log should include the customer’s name, email, and a formatted list of purchased products.

#### **Steps**

1. **Create Workflow Trigger**:

   - Use the `Order Form Submitted` trigger to start the workflow.
2. **Use Pluck and Join helpers**:

   - Extract product titles using the `pluck`helper

     ```handlebars
     {{ pluck order.line_items "title" }}
     ```

   - Format the titles using the `join`helper

     ```handlebars
     {{ join (pluck order.line_items "title") ", " }}
     ```
3. **Add Google Sheets Action**:

   - Select the "Create Row in Google Sheets" action.
   - Map the fields:
     - **Name**: `{{ contact.first_name }}`
     - **Email**: `{{ contact.email }}`
     - **Products**: `{{ join (pluck order.line_items "title") ", " }}`
4. **Test and Activate the Workflow**:

   - Submit a test order form and confirm that the order details appear correctly in the Google Sheet.

#### **Example Output**

**Google Sheet Example**:

| Name | Email | Products |
| --- | --- | --- |
| Alice | alice@test.com | TEST OFFER, ANOTHER PRODUCT |
| Bob | bob@test.com | SINGLE ITEM |

* * *

By using `pluck` and `join` helpers, you can efficiently extract and format product data for seamless workflow automation and integration. This feature saves time, reduces manual effort, and enhances the usability of your workflows.

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
- [How to Send Confirmations After a Purchase/Order](https://help.gohighlevel.com/support/solutions/articles/155000001437-how-to-send-confirmations-after-a-purchase-order)
- [Workflow Trigger - Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000003253-workflow-trigger-order-form-submission)
- [Workflow Action - Go To](https://help.gohighlevel.com/support/solutions/articles/155000003377-workflow-action-go-to)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted)
- [Shopping Cart Mode in One and Two-step Order forms (V2 Funnels only)](https://help.gohighlevel.com/support/solutions/articles/48001221440-shopping-cart-mode-in-one-and-two-step-order-forms-v2-funnels-only-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows/hit)