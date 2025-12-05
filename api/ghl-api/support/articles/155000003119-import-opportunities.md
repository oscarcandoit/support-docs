---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities
category: articles
type: article
scraped: 2025-10-28T16:10:35.150Z
title:  Import Opportunities : LeadConnector 
status_code: 200
---

#  Import Opportunities : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Pipelines & Opportunities](https://help.leadconnectorhq.com/support/solutions/48000454682) [Opportunities](https://help.leadconnectorhq.com/support/solutions/folders/155000000077)

## Import Opportunities  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities\# "Print this Article")

Modified on: Fri, 18 Oct, 2024 at 12:37 PM

* * *

**TABLE OF CONTENTS**

- [Prepare Your Data](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Prepare-Your-Data)
  - [Supported File Types](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Supported-File-Types)
  - [File Preparation Requirements](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#File-Preparation-Requirements)
  - [Mandatory Fields](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Mandatory-Fields)
- [Understanding Import Options](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Understanding-Import-Options)
- [Structuring Your File](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Structuring-Your-File)
- [Importing Your File](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Importing-Your-File)
- [Troubleshooting Common Errors](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Troubleshooting-Common-Errors)
- [Additional Tips](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities#Additional-Tips)

* * *

Importing files into our system is straightforward if you follow the guidelines and steps outlined below. This document will help you ensure a smooth and successful import process.

Sample File for importing or updating opportunities:[Sample file](https://drive.google.com/file/d/17TvjuJxFniIHFe0rMYQjlYZ0BIT9asIZ/view?usp=drive_link%C2%A0)

## Prepare Your Data

### Supported File Types

1. Ensure your file is in .csv format.

### File Preparation Requirements

1. Sheet: Only one

2. Size: Smaller than 30 MB

3. Headers: Include a header row with at least one column corresponding to a field in the system

```
Please note that Opportunity import is not a reversible action
```

### Mandatory Fields

**1\. For Creating Opportunities:** Contact ID, Opportunity name and Pipeline ID/name.

- Default values:
  - If the Stage ID/name is absent, it defaults to the first stage under that pipeline.
  - If the Opportunity Value is absent, it defaults to 0.
  - If the Opportunity status is absent, it defaults to “Open”.
  - If the Opportunity lost reason is added and is valid, the Opportunity Status will be updated to "Lost"

```
Opportunity ID, Pipeline ID/name and Stage ID/name can be fetched by exporting opportunities.

Contact ID can be fetched by exporting contacts in the same sub-account.
```

**2\. For Updating Opportunities:** Opportunity ID (can be fetched by exporting opportunities)

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
- **Opportunity Owner:**
  - Format: FirstName LastName (e.g., Logan Paul).
- **Tags:**
  - Acceptable formats: Value 1, Value 2, Value 3 (e.g., Blue, Yellow, Green). You can also use ; or . as separators.
- **Phone Number:**
  - Format in E.164 (e.g., +1 1234567890). For US numbers, formats like 123-456-7890 or (123) 456-7890 are also acceptable.
- **Numerical:**
  - Acceptable formats: 1.23, 1234, .123.
- **Monetary:**
  - Acceptable formats: 1234, 1,234,234.33.
- **Opportunity Followers:**
  - Acceptable format: FirstName LastName, FirstName2 LastName2 (e.g. Adam Smith, David Lee)

* * *

## Importing Your File

**Steps to Import:**

1. Turn on Opportunities Import under "Labs" > Subaccounts



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651766/original/Fh2Xg_wkwpHExItbx89slk6bCrdn8QCNVQ.png?1716820655)
2. Go to Opportunities

3. On the top right under 3 dots, click on "Import Opportunities"



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651951/original/Xs_GUUYQd1aZVPF2IkM8pf1ZSxqGbJevVQ.png?1716820829)

4. Upload Your File: Click the 'Import' button and upload your file. Also select whether you would like to "Create", "Update" or "Create and Update"




[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651841/original/m8XleCF2yG1M5UAc7ijQhrNQsy_0gsaJng.jpeg?1716820706)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651841/original/m8XleCF2yG1M5UAc7ijQhrNQsy_0gsaJng.jpeg?1716820706)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651859/original/5aGfH_KL23MEOGucizB4qF93EMlqaVwyHg.png?1716820727)

5. Map Your Fields: Ensure each column in your file is correctly mapped to the corresponding field in the system. Adjust the mappings if necessary.



A few things to note:
1. Checking the "Don't update Empty Values" checkbox will not update any field if the imported file has empty values and the field does have some value for the opportunity

2. If you decide to not import certain field, you can choose to keep it unmapped and check the box on the bottom to proceed. -"Please ensure all mandatory fields are mapped. To proceed, either map all fields or choose Don't import data for unmapped columns"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031119664/original/L_ZWT-Vy3GlMufVL-3HwCZRvPyVafHvl0Q.png?1723743226)

6\. Review and Confirm: Review the data preview to ensure everything looks correct. Confirm the import to proceed.

Note that it is mandatory to check the box on the bottom and accept the disclaimer to start importing.

You can also add tags to the corresponding contacts for these opportunities on this screen.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026651879/original/FXJvg9PdXkM-PU49GHcdQFsTQujQlf0pgA.png?1716820748)

7\. Monitor the Import: Check the import progress under Opportunities > Bulk Actions. If any errors occur, refer to the error messages provided for guidance on fixing them.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031119666/original/NUjzmGJXX-6iapJJXxCgTwIuzJ2QweuTJQ.png?1723743234)

8\. Monitor stats, errors and warnings by clicking on the "Show Stats" button for any import.

**Errors:** Failures in mandatory fields which cause the import to fail for that row

**Warnings:** Failures in optional fields where the import happens for that row but that specific field is not updated

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031119670/original/YPVXhlT6rSlddANSB3MTF7tHcOwPMH6P4A.png?1723743255)

* * *

## Troubleshooting Common Errors

- **Error**: Invalid option selected for multiselect or dropdown field

**Solution**: Check your import file for incorrect values in multiselect or dropdown fields by comparing them with the options in the system. Update the value in your file to match an existing option or add it as a custom option in the system. Then re-import the file.

- **Error**: Invalid Contact ID

**Solution**: Verify that the Contact ID exists in the system or remove the ID if not updating an existing contact.

- **Error**: Could Not Parse Date

**Solution**: Ensure date fields are in one of the acceptable formats: mm/dd/yyyy, yyyy/mm/dd, mm-dd-yyyy, yyyy-mm-dd.

- **Error**: Duplicate Unique Property Value

**Solution**: Ensure there are no duplicate values in fields marked as unique, such as emails or IDs.

- **Error**: File Not Found

**Solution**: Verify that your file is the correct type and format. Re-upload the file.

- **Error**: Required Fields Missing

**Solution**: Ensure all mandatory fields (e.g., Opportunity Name for opportunities, Email/Phone/Name for contacts) are included and correctly formatted.

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

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003119-import-opportunities*  
*Generated on: 2025-10-28T16:10:35.150Z*
