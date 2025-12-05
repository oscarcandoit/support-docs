---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts
category: articles
type: article
scraped: 2025-10-28T16:17:35.716Z
title:  Importing Contacts : LeadConnector 
status_code: 200
---

#  Importing Contacts : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Contacts / SmartLists](https://help.leadconnectorhq.com/support/solutions/155000000014) [Contacts](https://help.leadconnectorhq.com/support/solutions/folders/155000000051)

## Importing Contacts  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts\# "Print this Article")

Modified on: Wed, 8 Jan, 2025 at 3:04 AM

* * *

**TABLE OF CONTENTS**

- [Prepare Your Data](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Prepare-Your-Data)
  - [Supported File Types](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Supported-File-Types)
  - [File Preparation Requirements](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#File-Preparation-Requirements)
  - [Mandatory Fields](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Mandatory-Fields)
- [Understanding Import Options](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Understanding-Import-Options)
- [Structuring Your File](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Structuring-Your-File)
- [Importing Your File](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Importing-Your-File)
- [Troubleshooting Common Errors](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Troubleshooting-Common-Errors)
- [Additional Tips](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts#Additional-Tips)

Importing files into our system is straightforward if you follow the guidelines and steps outlined below. This document will help you ensure a smooth and successful import process.

```
Only admins have permission to import files into the system
```

Sample File for importing or updating contacts:[Sample file](https://drive.google.com/file/d/1RW60QOJI3ZVJmNm0_bn1cvCW05LjBwI5/view?usp=sharing)

## Prepare Your Data

### Supported File Types

1. Ensure your file is in .csv format.

### File Preparation Requirements

1. Sheet: Only one

2. Size: Smaller than 30 MB

3. Headers: Include a header row with at least one column corresponding to a standard or custom field in the system. Note that all your custom fields should be created in the system before starting your first import

```
Please note that only new contacts import can be reverted but updating contacts is not a reversible action
```

### Mandatory Fields

**1\. For Creating Contacts:** Either of Contact Name, Phone or Email

**2\. For Updating Contacts:** Contact ID, Name, Email or Phone (as per the Duplicate Settings set for the account)

* * *

## Understanding Import Options

When importing objects, you have three options to choose from:

1. **Create Opportunities:** Use this option to upload only new records into the system.

2. **Update Opportunities:** Select this option to update information for existing records.

3. **Create and Update Opportunities** **:** Choose this option for a combination of adding new records and updating existing ones.

* * *

## Structuring Your File

Field Formatting

- **Date Picker:**
  - Acceptable formats: mm/dd/yyyy (e.g., 10/28/2020), yyyy/mm/dd (e.g., 2020/10/28), mm-dd-yyyy (e.g., 10-28-2020), yyyy-mm-dd (e.g., 2020-10-28).
- **Multiple Options, Checkbox, Textbox List:**
  - Acceptable formats: Value 1, Value 2, Value 3 (e.g., Blue, Yellow, Green). You can also use ; or . as separators.
- **Radio, Single Option:**
  - Acceptable formats: Value 1 (e.g., Blue).
- **Contact Owner:**
  - Format: FirstName LastName (e.g., Logan Paul).
- **Tags:**
  - Acceptable formats: Value 1, Value 2, Value 3 (e.g., Blue, Yellow, Green). You can also use ; or . as separators.
- **Phone Number:**
  - Format in E.164 (e.g., +1 1234567890). For US numbers, formats like 123-456-7890 or (123) 456-7890 are also acceptable.
- **Numerical:**
  - Acceptable formats: 1.23, 1234, .123.
- **Monetary:**
  - Acceptable formats: 1234, 1,234,234.33.
- **Contact Followers:**
  - Acceptable format: FirstName LastName, FirstName2 LastName2 (e.g. Adam Smith, David Lee)
- **Additional Email Addresses:**
  - If you're importing contacts with more than one email address, include an Additional email addresses column with their secondary emails.
  - Acceptable format : [abc@email.com,](mailto:abc@email.com,) [abc1@email.com](mailto:abc1@email.com)
- **Additional Phone Numbers:**
  - If you're importing contacts with more than one phone number, include an Additional phone numbers column with their secondary phone numbers.
  - Acceptable format : +1 7877123460,+1 7877123461

* * *

## Importing Your File

**Steps to Import:**

1. Go to Contacts
2. On the top row with multiple actions - click on "Import Contacts"


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405397/original/gPG305y4PVcT5_OYjZWxF1NxuNfFrxrwiA.png?1736256506)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405397/original/gPG305y4PVcT5_OYjZWxF1NxuNfFrxrwiA.png?1736256506)

3. Choose to import only Contacts or [both Contacts and Opportunities](https://help.gohighlevel.com/a/solutions/articles/155000003905?portalId=48000045315)


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405400/original/LqzxyhY3a934Y7SAsD7QC6UgirHSuSiOVA.jpeg?1736256508)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405400/original/LqzxyhY3a934Y7SAsD7QC6UgirHSuSiOVA.jpeg?1736256508)

4. Upload the file for importing and then click on "Choose how to import contacts" to decide whether you want to create, update or do both.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405398/original/tS6rglsznL9nkqQ_6uKumF-1ZU3fOBBuXA.jpeg?1736256506)De-duplication preferences are respected for finding contacts for creating and updating contacts.
5. **Map Your Fields:** Ensure each column in your file is correctly mapped to the corresponding field in the system.

Adjust the mappings if necessary.



A few things to note:

1. Checking the "Don't update Empty Values" checkbox will not update any field if the imported file has empty values and the field does have some value for the opportunity

2. If you decide to not import certain field, you can choose to keep it unmapped and check the box on the bottom to proceed. -"Please ensure all mandatory fields are mapped. To proceed, either map all fields or choose Don't import data for unmapped columns"


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405415/original/zP6U8hTpDhHZ7WFE8s5xyE3Tvmeo4taH2A.jpeg?1736256509)

6\. **Review and Confirm:** Review the data preview to ensure everything looks correct. Confirm the import to proceed.

Note that it is mandatory to check the box on the bottom and accept the disclaimer to start importing.

You can also add tags to the corresponding contacts for these opportunities on this screen.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405414/original/DCjWAm_2dJpXUZVXLiVwKWAKIgbtEcKY0w.jpeg?1736256509)

7\. **Monitor the Import:** Check the import progress under Opportunities > Bulk Actions. If any errors occur, refer to the error messages provided for guidance on fixing them.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405408/original/K3khqnW9f2qJ8_EEGmrAt1Wu8lOup1Os_w.jpeg?1736256509)

8\. Monitor stats, errors and warnings by clicking on the "Show Stats" button for any import.

**Errors:** Failures in mandatory fields which cause the import to fail for that row

**Warnings:** Failures in optional fields where the import happens for that row but that specific field is not updated

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039405399/original/rTi5p20-ofH69rcoBCfqQXWZVp9UJ_5mQA.jpeg?1736256506)

* * *

## Troubleshooting Common Errors

- **Error**: Required fields to create/update contacts are missing

**Solution**: To successfully create contacts while importing:
  - At least one of the following fields is mandatory for creating a new contact: **Name**, **Phone**, or **Email**. Ensure these fields are included in your CSV and mapped correctly during the import process.



    For updating contacts:
  - Verify your de-duplication settings under **Settings > "Allow Duplicate Contacts"**.
  - Depending on the setting, contacts are identified using **Contact ID**, or a combination of **Phone** and **Email**. Include and map these fields for a successful update.
- **Error**: Duplicate phone found / Duplicate email found

**Solution**: This error occurs when the import tool detects a duplicate phone number or email address in your file, based on your de-duplication settings.
1. Verify your de-duplication settings under **Settings > "Allow Duplicate Contacts"**.
2. If your settings restrict duplicates based on **phone** or **email**:
     - Update the phone number or email in your file to make it unique.
     - Alternatively, adjust the de-duplication setting to allow duplicate contacts regardless.
- By ensuring the file aligns with your de-duplication settings or updating the settings, you can complete the import successfully.

- **Error**: Contact is not valid or not in your sub-account

**Solution**: This error occurs when the **Contact ID** provided in the import file is either:
1. Not part of the current sub-account.
2. Invalid or associated with a deleted contact.
- **To solve this -**

1. Verify the **Contact ID** in your file matches a valid contact in the current sub-account.
2. If the contact has been deleted, retrieve the correct and current **Contact ID** for the record.
3. Update your file with the valid **Contact ID** and map it correctly during the import process.
- By ensuring the Contact ID is accurate and belongs to the sub-account, you can successfully complete the import or update.

- **Error**: Could not read the phone number

**Solution**: For the vast majority of cases, as long as you format the phone numbers in E.164 (Ex: [+1 1234567890](tel:+11234567890)) our system will recognize it as valid- irrespective of the default Country picked at the sub-account level

Additionally, if you have set the Country to the US, the following would work perfectly fine as well
- [123-456-7890](tel:1234567890)
- [(123) 4567890](tel:1234567890)
- 1234567890

- Furthermore, if you are working with international numbers (Outside the US), we'd encourage you to visit: [https://libphonenumber.appspot.com/](https://libphonenumber.appspot.com/) and run your phone number format by the tool in conjunction with the country code to ascertain its appropriateness for upload.

- **Error**: Could not read the date

**Solution**: Ensure that the dates in your file conform to one of the following supported formats:
  - `YYYY-MM-DD` (e.g., 2024-09-08 or 2024-9-8)
  - `YYYY/M/D` (e.g., 2024/09/08 or 2024/9/8)
  - `YYYY.MM.DD` (e.g., 2024.09.08 or 2024.9.8)
  - `M.D.YYYY` (e.g., 09.08.2024 or 9.8.2024)
  - `M/D/YYYY` (e.g., 09/08/2024 or 9/8/2024)
  - `M-D-YYYY` (e.g., 09-08-2024 or 9-8-2024)
  - `YYYY/MM/DD` (e.g., 2024/09/08)
  - `MM/DD/YYYY` (e.g., 09/08/2024 or 9/8/2024)
  - `MM-DD-YYYY` (e.g., 09-08-2024 or 9-8-2024)
  - `MM.DD.YYYY` (e.g., 09.08.2024 or 9.8.2024)
  - `DD MMM YYYY` (e.g., 08 Sep 2024 or 8 Sep 2024)
  - `MMM DD YYYY` (e.g., Sep 08 2024 or Sep 8 2024)
  - `YYYY MMM DD` (e.g., 2024 Sep 08 or 2024 Sep 8)
  - `DD-MMM-YYYY` (e.g., 08-Sep-2024 or 8-Sep-2024)
  - `MMM-DD-YYYY` (e.g., Sep-08-2024 or Sep-8-2024)
  - `YYYY-MMM-DD` (e.g., 2024-Sep-08 or 2024-Sep-8)
  - `DD MMM, YYYY` (e.g., 08 Sep, 2024 or 8 Sep, 2024)
  - `MMM DD, YYYY` (e.g., Sep 08, 2024 or Sep 8, 2024)
  - `DDth MMM YYYY` (e.g., 08th Sep 2024 or 8th Sep 2024)
  - `MMM DDth YYYY` (e.g., Sep 08th 2024 or Sep 8th 2024)
  - `DDth MMM, YYYY` (e.g., 08th Sep, 2024 or 8th Sep, 2024)
  - `MMM DDth, YYYY` (e.g., Sep 08th, 2024 or Sep 8th, 2024)
  - `DD MMMM YYYY` (e.g., 08 September 2024 or 8 September 2024)
  - `MMMM DD YYYY` (e.g., September 08 2024 or September 8 2024)
  - `YYYY MMMM DD` (e.g., 2024 September 08 or 2024 September 8)
  - `MMMM DD, YYYY` (e.g., September 08, 2024 or September 8, 2024)
  - `DD MMMM, YYYY` (e.g., 08 September, 2024 or 8 September, 2024)
- Correct the dates in your file to match one of these formats, and reattempt the import. Properly formatted dates ensure they are recognized and mapped successfully.

- **Error**: Invalid email address

**Solution**: This error occurs when the email address in your file does not follow a valid format (e.g., missing "@" or domain extensions).
1. Verify the format of all email addresses in your file.
     - A valid email address should look like: `example@domain.com`.
2. Correct any invalid email addresses in your file (e.g., fix typos, add missing parts).
3. Reattempt the import with the corrected file.
- Ensuring accurate email formats will prevent this error and allow for a successful import.


* * *

## Additional Tips

- Double-check your file before importing to avoid errors.

- If you encounter any issues during the import process, refer back to this guide or reach out to our support team for assistance.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004433-importing-contacts*  
*Generated on: 2025-10-28T16:17:35.716Z*
