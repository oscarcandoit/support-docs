---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005079-import-orders-csv-file-field-formats
category: articles
type: article
scraped: 2025-10-28T16:19:39.256Z
title:  Import Orders CSV File - Field formats : LeadConnector 
status_code: 200
---

#  Import Orders CSV File - Field formats : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## Import Orders CSV File - Field formats  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005079-import-orders-csv-file-field-formats\# "Print this Article")

Modified on: Mon, 8 Sep, 2025 at 1:44 AM

* * *

This document will walk you through how to prepare and upload a CSV file to import orders into the system. Follow the format and instructions below to ensure a successful import.

* * *

## **File Requirements**

- The file must be in .csv format.

- The **column headers must exactly match** those provided in the sample file.

- Each row represents a single order item. If an order contains multiple line items, each line item must be a separate row, with all order-level fields repeated.

- All required fields must be filled in to avoid upload errors.


* * *

## **CSV Column Descriptions and Examples**

| **Column Name** | **Description** | **Example** |
| --- | --- | --- |
| **Customer First Name** | First name of the customer. | Jane |
| **Customer Last Name** | Last name of the customer. | Smith |
| **Customer Email** | Customer’s email address. | jane.smith@example.com |
| **Customer Phone** | Customer’s phone number (include country code if available). | +14155552671 |
| **Currency** | Currency used for the order (ISO code). | USD |
| **Subtotal** | Total cost of the order before tax, discount, and shipping. | 120.00 |
| **Discount** | Any discount applied to the order. | 10.00 |
| **Total Tax Amount** | Total tax amount charged. | 8.40 |
| **Amount** | Final amount paid for the order (Subtotal - Discount + Tax). | 118.40 |
| **Order Date** | Date the order was placed (format: DD/MM/YYYY). | 25/01/2025 |
| **Order Time** | Time the order was placed (24-hour format HH:MM). | 12:45 |
| **Payment Method** | Method used to pay (e.g., Credit Card, PayPal, Cash, ACH). | Credit Card |
| **Payment Provider** | The payment gateway or provider who facilitated the transaction | Stripe |
| **Line Item Name** | Name of the individual item in the order. | Blue T-Shirt |
| **Line Item Quantity** | Quantity of the individual line item. | 2 |
| **Line Item Price** | Price of the item (per unit, before tax/discount). | 25.00 |
| **Address Line 1** | Address Line 1 of the Buyer's Address | 123 Main St |
| **City** | City of the Buyer's Address | San Francisco |
| **State** | State of the Buyer's Address | CA |
| **Country** | Country of the Buyer's Address (ISO 2-letter or full name recommended) | US |
| **Postal Code** | Postal Code of the Buyer's Address | 94105 |

* * *

## ⚠️ Common Upload Errors to Avoid

- Incorrect or missing date/time formats.

- Currency not in ISO 3-letter format (e.g., use `USD`, not `$`).

- Email or phone numbers in invalid formats.

- Orders with multiple line items not grouped correctly.

- Amount mismatch: Ensure `Amount = Subtotal - Discount + Total Tax Amount`.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005079-import-orders-csv-file-field-formats/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005079-import-orders-csv-file-field-formats*  
*Generated on: 2025-10-28T16:19:39.256Z*
