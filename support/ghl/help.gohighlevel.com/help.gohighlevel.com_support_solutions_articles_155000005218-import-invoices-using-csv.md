---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv"
title: " Import Invoices Using CSV : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. Import Invoices Using CSV

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

# Import Invoices Using CSV

Modified on: Tue, 6 May, 2025 at 3:34 PM

This article will show you how to quickly import invoices from external platforms using a CSV file. Whether you're migrating from another system or organizing historical billing data, this feature will save you hours of manual work.

**TABLE OF CONTENTS**

- [What is CSV Invoice Import?](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#What-is-CSV-Invoice-Import?)
- [Key Benefits of CSV Invoice Import](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#Key-Benefits-of-CSV-Invoice-Import)
- [How to Import Invoices Using CSV](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#How-to-Import-Invoices-Using-CSV)
- [Tax Mapping](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#Tax-Mapping)
- [Automated Import Summary Email](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#Automated-Import-Summary-Email)
- [Important Notes](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#Important-Notes)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv#Frequently-Asked-Questions)

* * *

## What is CSV Invoice Import?

CSV Invoice Import allows users to bring external invoice data—such as spreadsheets or exports from other platforms—directly into their HighLevel account. During the import, you can map essential fields such as issue date, due date, and taxes, and receive an automated summary of the import results. This enables a smooth transition from legacy systems and helps consolidate all billing information into a single location for streamlined management.

## Key Benefits of CSV Invoice Import

Importing invoices using a CSV file provides a range of efficiency and accuracy benefits that streamline operations and eliminate redundant data entry.

- Quickly migrate invoice data from other billing systems or spreadsheets.

- Map essential fields such as issue dates, due dates, and tax values.

- Automatically receive a post-import email summary for transparency.

- Reduce the risk of manual entry errors.

- Improve reporting accuracy by centralizing invoice records in one location.


## How to Import Invoices Using CSV

Importing invoices is a straightforward process that involves uploading your data, mapping it correctly, and reviewing the results. Follow these steps to complete the import.

01. Navigate to Payments → Invoices & Estimates.

02. Click the \+ New button located in the top right corner.

03. Select Import Invoices using CSV from the dropdown menu.

04. Download the sample CSV file to understand the required column structure.

05. Prepare your CSV file by matching the sample format.

06. Ensure all applicable tax rates are already created in the platform by visiting Settings → Taxes.

07. Upload your CSV file.

08. Map each column in your CSV to the appropriate invoice field, including date fields (issue date, due date) using the correct date format.

    Screenshot: Field mapping interface with dropdowns for CSV column matching.

09. The system will detect any tax-related columns and prompt you to map them to existing tax rates.

    Screenshot: Tax mapping section showing dropdowns to match CSV tax names to system-defined tax rates.

10. Click Start Import to begin the process.

    Screenshot: Green confirmation banner displaying successful initiation of import.

11. You will receive an Invoice Import Summary email containing details of the imported and failed invoices.


## Tax Mapping

Proper tax mapping ensures that imported invoices reflect accurate tax values consistent with your existing tax configurations.

When the system detects tax-related columns during import:

- Each detected column must be matched to a tax rate previously created in Settings → Taxes.

- If a matching tax rate does not exist, it must be added before completing the mapping process.

- The import process will pause if a tax field remains unmapped, ensuring no inaccurate data is imported.


## Automated Import Summary Email

After the import is completed, an automated summary email will be sent to your registered email address. This message provides:

- A count of successfully imported invoices.

- A detailed list of failed entries along with the specific reasons for failure.

- A CSV file attachment showing each invoice row's import status.


## Important Notes

These key behaviors distinguish imported invoices from those created directly within the platform.

No Automated Reminders

Imported invoices will not trigger automated reminder emails or text messages. Reminder workflows will only apply to new invoices manually created inside the platform.

Late Fees and Tips

Imported invoices will follow your configured default or global settings for late fees and tips. If you wish to disable these features for specific invoices, you must manually edit them after import.

* * *

## Frequently Asked Questions

Q: Can I import invoices with multiple tax types?

Yes. As long as each tax type is properly labeled in your CSV file and already exists in your account under Settings → Taxes, the system will allow you to map and import them accordingly.

Q: Will the imported invoices trigger emails or notifications to clients?

No. Imported invoices are treated as historical records and will not trigger any reminder or notification emails.

Q: Can I use the import tool to update or overwrite existing invoices?

No. The CSV import tool is only for creating new invoices. It cannot update or replace previously created invoices.

Q: What if some rows fail during import?

Any rows that fail to import will be listed in the summary email with specific reasons for each failure, such as an invalid date format or unmatched tax value.

Q: Is there a limit to the number of invoices I can import at one time?

While there is no strict upper limit, we recommend importing invoices in batches of 500 or fewer to ensure optimal performance and easier error management.

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

- [Invoices - New revamped UI](https://help.gohighlevel.com/support/solutions/articles/155000004042-invoices-new-revamped-ui)
- [Bank-Only Transfers for Invoice Payments (SEPA & ACH)](https://help.gohighlevel.com/support/solutions/articles/155000004301-bank-only-transfers-for-invoice-payments-sepa-ach-)
- [How to Edit Recurring Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004403-how-to-edit-recurring-invoices)
- [How to View Invoices and Download Receipts in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000002354-how-to-view-invoices-and-download-receipts-in-the-mobile-app)
- [Setting up QuickBooks Integration](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration)
- [Editing of Payment Schedules and Partially Paid Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004960-editing-of-payment-schedules-and-partially-paid-invoices)

## Related Articles

- [Hubspot to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003388-hubspot-to-highlevel-migration-guide-)
- [Importing Contacts using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file)
- [How to Bulk Import Products into HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000003715-how-to-bulk-import-products-into-highlevel)
- [Importing Opportunities using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)
- [Import Transactions and Orders using CSV files](https://help.gohighlevel.com/support/solutions/articles/155000005544-import-transactions-and-orders-using-csv-files)
- [Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv/hit)