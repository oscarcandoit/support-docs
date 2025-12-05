---
url: "https://help.gohighlevel.com/support/solutions/articles/48001223155"
title: " Troubleshooting Bulk Imports Via CSV : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001223155#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
4. [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001223155#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
   - [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
6. Troubleshooting Bulk Imports Via CSV

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

# Troubleshooting Bulk Imports Via CSV

Modified on: Thu, 24 Apr, 2025 at 7:58 AM

This article will help you resolve errors you may encounter when importing contacts through a CSV file in HighLevel. Each error code comes with a specific reason and fix. Understanding these will ensure your bulk import is clean, smooth, and successful.

* * *

**TABLE OF CONTENTS**

- [What is Bulk Importing?](https://help.gohighlevel.com/support/solutions/articles/48001223155#What-is-Bulk-Importing?)
- [Key Benefits of a Successful CSV Import](https://help.gohighlevel.com/support/solutions/articles/48001223155#Key-Benefits-of-a-Successful-CSV-Import)
- [CSV Import Troubleshooting Checklist](https://help.gohighlevel.com/support/solutions/articles/48001223155#CSV-Import-Troubleshooting-Checklist)
- [Master Bulk Importing Error Code List](https://help.gohighlevel.com/support/solutions/articles/48001223155#Master-Bulk-Importing-Error-Code-List)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001223155#Frequently-Asked-Questions)

* * *

## **What is Bulk Importing?**

Bulk importing allows users to quickly upload large volumes of contact data using CSV files. It’s a powerful tool for onboarding, lead migration, and syncing lists, but formatting errors can block progress. This guide helps you fix them.

This video covers how you can navigate to the error logs linked to a certain Contact Import Bulk Action and how to work through the errors to resolve them:

Navigating to the Error Logs for Contact Imports

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Navigating to the Error Logs for Contact Imports](https://www.loom.com/share/0f0f135ab6fe4d63acefe5a4e38c82e7 "Navigating to the Error Logs for Contact Imports")

1 min

5.31K views

3

[Open video in Loom](https://www.loom.com/share/0f0f135ab6fe4d63acefe5a4e38c82e7 "Open video in Loom")

1.2×

1 min 28 sec⚡️1 min 50 sec1 min 28 sec1 min 13 sec58 sec51 sec44 sec35 sec

![](https://cdn.loom.com/sessions/thumbnails/0f0f135ab6fe4d63acefe5a4e38c82e7-00001.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Navigating to the Error Logs for Contact Imports](https://www.loom.com/share/0f0f135ab6fe4d63acefe5a4e38c82e7 "Navigating to the Error Logs for Contact Imports")

1 min

5.31K views

3

[Open video in Loom](https://www.loom.com/share/0f0f135ab6fe4d63acefe5a4e38c82e7 "Open video in Loom")

1.2×

1 min 28 sec⚡️1 min 50 sec1 min 28 sec1 min 13 sec58 sec51 sec44 sec35 sec

* * *

## **Key Benefits of a Successful CSV Import**

Mastering bulk import troubleshooting can save time and avoid frustrating roadblocks. Here’s why this matters:

- Save time by reducing rework

- Avoid creating duplicate or conflicting contact records

- Maintain clean, validated contact data

- Prevent import failures that block workflow automation

- Ensure accurate owner/user assignment

- Preserve campaign personalization and tagging

* * *

## **CSV Import Troubleshooting Checklist**

Use this pre-import checklist to prevent common CSV errors:

- Only one sheet in the file

- Ensure all required fields are filled and correctly formatted

- Format emails, phone numbers, and dates properly

- Use unique Contact IDs per row

- Verify enumeration/dropdown values match exactly

- Use valid HighLevel user emails for the Owner column

- Pick a reliable Primary Column (like Email or Contact ID)

* * *

## **Master Bulk Importing Error Code List**

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Master Type** | **Error ID**<br>**(Optional)** | **Error code** | **What does the error means** | **Steps to resolve the error** |
| Formatting mistakes when placing values in the spreadsheet | **1001** | Unknown error | HighLevel is unable to process the file due to an unknown error.<br>Your data was not imported. | Confirm that your file meets all requirements. Try to re-import after clearing your browser cache or using another browser. |
| **1002** | Multiple owners found in HL | "The import file contains an Owner value that matches more than one user in the account. This usually occurs for names (e.g., there are two John Doe users in your HighLevel account, and the import file contained the name "John Doe"). The affected records were imported, but the Owner's property does not contain a value." | **Replace the name of the owner with their email address in your import file, then re-import the file. You can also manually update the Owner property value in the affected records.** |
| **1003** | Invalid sheet count | "The import file contains more than one sheet. Your data was not imported." | **Remove any additional sheets from your import file, then re-import. Review additional file requirements for importing into High Level.** |
| **1004** | Invalid required property | "A required property in the import file contains an invalid value. The data in that row was not imported." | **Confirm the format requirements of your specific property or the property type, update your file to match the correct format, then re-import.** |
| **1005** | Invalid enumeration option | "The import file contains a value that does not match an existing option in an enumeration property. This applies to multi-select, dropdown select, radio select, and checkbox-type properties.<br>The affected records were still imported, but the enumeration property does not contain a value." | **Identify the incorrect value by comparing your import file against the property in HighLevel. You can choose to update the value in your import file to match an existing option or add the value as a custom option to your property. Once you're done, re-import the file or manually update the property value in the affected records.** |
| **1006** | Invalid contact ID | "During the import, the checkbox to update existing records using Contact IDs was selected. However, the Contact ID listed in the file did not match an existing ID in HighLevel.<br>The records were not imported." | **Ensure that the \[object\] IDs are correct. You may need to export your existing records to get the correct object IDs. If you're not updating or associating existing objects in HighLevel, do not select the checkbox during the import process.** |
| **1007** | File not found | "The file you selected was not found. Your data was not imported." | Verify that you have saved your file to your computer and that it is the correct file type. Once you've done that, re-upload the file. |
| Duplicate Entries in HL/File | **1008** | Failed validation of Email | "The import file contains an email address that does not conform to the format of a typical email address (e.g., name@domain.com) <br>The import did not create or update the records." | "For contacts, update your import file with the correct email, to make sure your format is correct with '@' '.com then re-import the file. |
| **1009** | Empty unique property value in the file | "The import file contains a row with data that cannot be processed because there is no value against the record of its unique identifier (primary column)." | **Verify that your data value matches the correct format for the property you are importing, then re-import the file. You can also manually update the property value in the affected records.** |
| **1010** | Duplicate unique property value in the HL | "The same value of the primary column is present against multiple records. Your data was imported against all HL records but there may be duplicates of the same record in HighLevel" | "Choose a different column header to act as your primary column or fix any mistakes, then re-import the files." |
| **1011** | Duplicate unique property value in the file | "The same unique value was used multiple times within your files. Your data was imported but there may be duplicates of the same record in HighLevel. If you were trying to associate, your records were not associated." | "Choose a different column header to act as your unique value or fix any mistakes, then re-import the files." |
| **1012** | Duplicate Contact ID in the file | "The same Contact ID was used multiple times within your files.<br>The affected records were not updated or associated in HighLevel." | Update your import file so that there is only one row with that Contact ID. Keep the row with the most up-to-date information that you want to be included in HighLevel. Once you've removed duplicates, re-import the files. |
| Miscellaneous | **1013** | Could not parse the phone number | "The import file contains a value for a number property with non-numeric characters or numbers not formatted as per E.164 format<br>The affected records were imported, but the number property does not contain a value." | "Update your import file with the correct numerical value and re-import, or manually update the property value in the affected records.<br>If your records should match the numerical field, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=yes%20or%20no%20)-,Phone%20Number,-For%20the%20vast)" |
| **1014** | Could not parse the date | "The import file contains a date value that does not match the format you selected during the import process.<br>The affected records were imported, but the date property does not contain a value." | "Update your import file with the correct value and re-import, or manually update the property value in the affected records.<br>If your records should match the date field, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE"](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=the%20following%20columns%3A-,Date%20Picker,-Acceptable%20formats%2D) |
| **1015** | Could not find the owner | "The import file contains a record owner that does not match a user in HighLevel.<br>The affected records were imported, but the Owner field does not contain a value." | "Update the data in the Owner column of your import file to include the first and last name or email of a user in your account. If the person you want to assign the record to is not yet a user in the account, add them as a user, then re-import with their name or email as it appears in the account.<br>If your records should match contact owners, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=Not%20Supported-,Contact%20Owner,-To%20assign%20an)" |
| **1016** | Ambiguous enumeration option in HL | "The same record matches more than one of the existing options defined for an enumeration property. This applies to multi-select, dropdown select, single-choice select, and checkbox-type properties.<br>The affected records were imported, but the enumeration property does not contain a value." | "Identify the incorrect value by comparing your import file against the property in HighLevel. Update the value in your import file to match only one existing option, then re-import the file. You can also manually update the property value in the affected records.<br>If your records should match multiple options, learn how to format your file to correctly import data to multiple checkbox properties - [LEARN MORE](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-contact-import-errors/preview#:~:text=Multiple%20Options%2C%20Checkbox%2C%20Textbox%20List)" |
| **1017** | Location does not allow duplicate contacts - use 1010 & 1011 |  |  |
| **1018** | CustomField not supported -> validate while mapping itself - file and signature |  |  |
| **1019** | Invalid Custom Field value -> use 1005 instead |  |  |
| **1020** | Failed to create a contact |  |  |
| **1021** | No email, phone, firstName and lastName, and type are created |  |  |
| **1022** | Contact was not found |  |  |
| **1023** | Failed to update a contact |  |  |
| **1024** | Failed to add campaign/workflow |  |  |

* * *

## **Frequently Asked Questions**

**Q: What file type should I upload?**

Only .csv files are accepted. If you’re working in Excel or Google Sheets, export your data as a CSV file first.

**Q: Can I undo a bulk import?**

While there’s no direct “undo” option, you can tag imported contacts during upload. Use that tag to filter and delete if necessary.

**Q: What is the maximum file size for import?**

The limit is 20MB or 10,000 rows—whichever comes first.

**Q: How can I validate phone numbers before uploading?**

Use spreadsheet formulas or online tools to ensure they follow the E.164 format.

**Q: What should I choose as the Primary Column?**

Use a unique identifier like Email or Contact ID that won’t repeat across multiple contacts.

**Q. My CSV list is mixed; some contacts have an email or phone #, and some have both an email and phone. How should I proceed?**

Please use the 'secondary preference' option for a mixed CSV. The system will search for the first preference and then the second if it cannot locate the first. In the example above the first preference is 'Email' and the second is 'Phone'.

Now we can find existing contacts based on the secondary field, so if the contact record has only the phone number, we can also upload them!

# **~~![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045601330/original/4zlCOqVjoq6LY8PnLxg6pZjqPyAfvDWsNg.png?1745499014)~~**

**Q. Some of my contacts have multiple emails and or phone numbers. How should I proceed?**

If a contact has multiple phone numbers or emails, please split the contact into multiple so they will be uploaded. Example:

**Original with two phone number columns:**

|     |     |     |     |
| --- | --- | --- | --- |
| |     |
| --- |
| Josephine | | |     |
| --- |
| 810-292 9388 | | 810-374-9840 | |     |
| --- |
| josephine\_darakjy@darakjy.org | |

**Cleaned for upload version:**

|     |     |     |
| --- | --- | --- |
| Josephine | 810-292-9388 | josephine\_darakjy@darakjy.org |
| Josephine | 810-374-9840 |  |

Keep the email blank for the second lead with a different phone number because it will create duplicates when we upload contacts with phone numbers as the unique field.

**Q. Important note for people that use Keap:**

The phone field from the CSV export in Keap is incompatible with GHL. The parenthesis '()' and dashes '-' make it incompatible. We have to highlight the entire column in the CSV file and ensure it is numbered in, remove any parentheses and dashes, and then we can import without corrupting the data in the CRM.

**Q. When importing the phone numbers, I get the error code 1007 'invalid required property':**

Add a country code for numbers outside the sub-account country when importing numbers. If the sub-account country is set to the **US**, you **won't need** to add a **+1** (US country code) to the imported phone numbers. However, if you're importing numbers **outside of the US**, you will need to add the **[country code](https://countrycode.org/)**

**I.e.,** Asub-account that has set its business location to the **US** would need to add **'+44** to call the UK. If the Sub-Accounts country is set to a different country other than the **US**(like the UK, Australia, etc.), to call/SMS US numbers, you would need to add a **'** **+1 to the country's area code within the CSV File.**

**Q. I'm trying to import a CSV with a DND Column, but all contacts are set to DND for ALL channels.**

When importing contacts with a DND column within your CSV, please note that the contacts will be DND for ALL the channels. If you want to DND for specific channels, please set up a workflow first and use tags for each channel.

**I.e.,** I would like John to be DND for SMS only. I would create a workflow that DNDs a contact when a tag 'DND SMS' is added. So now, on the CSV, I would add the Tag 'DND SMS' next to John's name. When importing, this would fire automation to DND John for SMS only.

**Q. I'm trying to import a CSV with Notes, and I cannot generate more than one note per contact record.**

When importing contact notes, you may only have one note per contact record with a limit of **5000****characters**. Please use the [large text custom field](https://help.gohighlevel.com/en/support/solutions/articles/48001161579) if you have more than one note or more characters than the allowed amount.

**Q. I'm trying to export a CSV with Notes.**

As of now, We do not have any limit for CSV import for notes, and as per our current export behavior, we support Max of 255 Characters for the last note.

* * *

## **Related Articles**

- [CSV File Format for Importing Contacts and Opportunities](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities)
- [Importing Contacts using a CSV file](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file)
- [Importing Opportunities using a CSV file](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)

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

- ["Add Contact" Form Upgrade and Customizations](https://help.gohighlevel.com/support/solutions/articles/155000006513--add-contact-form-upgrade-and-customizations)
- [Adding Files To Contacts using a Custom Field](https://help.gohighlevel.com/support/solutions/articles/48001171922-adding-files-to-contacts-using-a-custom-field)
- [Adding Multiple Phone Numbers for a Contact](https://help.gohighlevel.com/support/solutions/articles/155000000448-adding-multiple-phone-numbers-for-a-contact)
- [AND/OR Filters](https://help.gohighlevel.com/support/solutions/articles/155000001247-and-or-filters)
- [Automatically Merge Facebook Messenger Contacts With Lead Ad Contacts](https://help.gohighlevel.com/support/solutions/articles/48001146104-automatically-merge-facebook-messenger-contacts-with-lead-ad-contacts)
- [Company Object Feature: A Manual Way to Organize Contacts](https://help.gohighlevel.com/support/solutions/articles/48001223777-company-object-feature-a-manual-way-to-organize-contacts)

## Related Articles

- [Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv)
- [How to Bulk Import Products into HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000003715-how-to-bulk-import-products-into-highlevel)
- [Importing Contacts using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file)
- [Importing Opportunities using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)
- [Getting Started - Import Existing Contacts](https://help.gohighlevel.com/support/solutions/articles/155000005056-getting-started-import-existing-contacts)
- [ClickFunnels to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003389-clickfunnels-to-highlevel-migration-guide-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001223155)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-bulk-imports-via-csv/hit)