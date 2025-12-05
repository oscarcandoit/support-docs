---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005078-import-transactions-csv-file-field-formats
category: articles
type: article
scraped: 2025-10-28T16:19:36.959Z
title:  Import Transactions CSV File - Field formats : LeadConnector 
status_code: 200
---

#  Import Transactions CSV File - Field formats : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## Import Transactions CSV File - Field formats  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005078-import-transactions-csv-file-field-formats\# "Print this Article")

Modified on: Mon, 8 Sep, 2025 at 1:44 AM

* * *

This guide will help you correctly upload your transaction data using the platform's CSV  import feature. Below, you’ll find the required format and explanations for each column in the sample CSV file.

* * *

## **CSV Format Requirements**

- The file must be in **.csv** format.

- The **column headers must match** those in the sample file (see table below).

- Each row represents a single transaction.

- All required fields must be completed accurately to avoid errors.


* * *

## **CSV Column Descriptions and Examples**

| **Column Name** | **Description** | **Example** |
| --- | --- | --- |
| **Customer First Name** | First name of the customer. | John |
| **Customer Last Name** | Last name of the customer. | Doe |
| **Customer Email** | Customer’s email address. | john.doe@example.com |
| **Customer Phone** | Customer’s phone number (include country code if available). | +14155552671 |
| **Currency** | ISO currency code for the transaction. | USD |
| **Late Fees** | Additional fee due to late payment (if any). | 2.00 |
| **Tip Amount** | Any tip included in the transaction. | 5.00 |
| **Amount Paid** | The final amount the customer paid (can be equal to: Subtotal - Discount + Tax + Tip + Late Fees). | 105.00 |
| **Transaction Date** | Date the transaction occurred in 'DD/MM/YYYY' format. | 25/01/2025 |
| **Transaction Time** | Time of the transaction in HH:MM (12-hour format). | 12:30 PM |
| **Payment Method** | Method used to complete the transaction. Common examples include: `Credit Card`, `PayPal`, `Cash`, `ACH`. | Credit Card |
| **Payment Provider** | The payment gateway or provider who facilitated the transaction | Stripe |
| **Address Line 1** | Address Line 1 of the Buyer's Address | 4034 Granville Lane |
| **City** | City of the Buyer's Address | Secaucus |
| **State** | State of the Buyer's Address | New Jersey |
| **Country** | Country of the Buyer's Address (ISO 2-letter or full name recommended) | United States |
| **Postal Code** | Postal Code of the Buyer's Address | 07094 |

* * *

## ⚠️ Common Upload Errors to Avoid

- Missing required fields like `Amount Paid`, `Transaction date`, or `Customer email`.

- Incorrect date or time formats.

- Currency not using ISO 3-letter codes (e.g., use `USD` not `$`).

- Invalid email or phone number formats.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005078-import-transactions-csv-file-field-formats/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005078-import-transactions-csv-file-field-formats*  
*Generated on: 2025-10-28T16:19:36.959Z*
