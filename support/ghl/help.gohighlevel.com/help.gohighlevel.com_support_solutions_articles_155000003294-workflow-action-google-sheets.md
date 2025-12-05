---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets"
title: " Workflow Action - Google Sheets : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
6. Workflow Action - Google Sheets

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

# Workflow Action - Google Sheets

Modified on: Wed, 4 Sep, 2024 at 5:30 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets#Example)

## Overview

The **Google Sheets** action allows you to send data from your workflow directly into a Google Sheets spreadsheet. This is a premium action, which means each execution incurs additional charges. This action is ideal for keeping records, tracking data, and organising information in a structured format within a Google Sheet.

## Action Name

**Google Sheets**

## Action Description

The **Create Spreadsheet Row** action is used to add a new row of data into a specified Google Sheets spreadsheet. This action can automatically log information such as ticket details, user information, or any other relevant data that needs to be recorded.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032225222/original/mO8g2rTWNdoF7JOCphoy3e8eXA9K-ktP7w.png?1725445694)

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | The name of the action, identifying what it will do. For this action, it's set to "Create Spreadsheet Row". | Yes |
| Action | Defines the specific operation to be performed on Google Sheets. Options include creating a row, updating a cell, etc. For this action, it's "Create Spreadsheet Row". | Yes |
| Choose an Account | The Google account linked to your HighLevel platform that has access to the desired Google Sheet. | Yes |
| Drive | Specifies the Google Drive where the spreadsheet is located. Typically set to "My Drive" for personal documents. | Yes |
| Spreadsheet | Select the specific Google Sheets document where the data will be sent. This field lists all accessible spreadsheets in the chosen account. | Yes |
| Worksheet | The specific worksheet within the selected spreadsheet where the new row will be added. Worksheets are individual tabs within a Google Sheets document. | Yes |
| Refresh Headers | A button that updates the available columns based on the current headers in the selected worksheet. This ensures data is mapped correctly to the columns. | No |
| Starting Column | Specifies the starting column for where the data will be inserted. Maps data to the correct column based on the Google Sheet's headers. | Yes |
| Ending Column | Specifies the ending column for where the data will be inserted. Allows you to define a range of columns to populate with data. | Yes |
| Dynamic Fields | These fields appear based on the columns in your spreadsheet. Each column is represented here, and you can specify what data should be inserted into each one. Example fields include Ticket ID (A) and Subject (B). | Yes |

### **How to Configure the Action**

1. **Add the Action to Workflow**: Drag and drop the **Google Sheets** action into your desired workflow.
2. **Select Action Type**: Choose "Create Spreadsheet Row" from the Action dropdown.
3. **Choose Google Account**: Select the linked Google account that has access to your Google Sheets.
4. **Select Drive**: Typically, select "My Drive" unless you are using a shared drive.
5. **Select Spreadsheet and Worksheet**: Choose the specific Google Sheets document and the corresponding worksheet tab where you want to add the data.
6. **Map Data Fields**: Use the Starting Column and Ending Column to define the range. Map the workflow data to the corresponding columns in the Google Sheet by entering values or using custom values.
7. **Refresh Headers**: Click this if you’ve made recent changes to the Google Sheet’s headers to ensure the data aligns correctly.

## Example

- **Trigger**: New Support Ticket Created
  - **Condition**: A new support ticket is generated from a contact.
  - **Action**: Google Sheets - Create Spreadsheet Row
    - **Drive**: My Drive
    - **Spreadsheet**: "Support\_Analysis\_2023"
    - **Worksheet**: "September"
    - **Starting Column**: Ticket ID (A)
    - **Ending Column**: Subject (B)
    - **Ticket ID**: Insert the ticket ID using custom values.
    - **Subject**: Insert the ticket subject using custom values.

By integrating the **Google Sheets** action within workflows, you can automate data entry tasks, ensuring critical information is logged accurately and consistently, reducing manual errors and saving time.

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

- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)
- [Workflow Action - Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code)
- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)

## Related Articles

- [Guide to Google Sheets Premium Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238162-guide-to-google-sheets-premium-workflow-action)
- [How to handle multiple rows in Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000002097-how-to-handle-multiple-rows-in-google-sheets)
- [How to fetch product details purchased by customers in workflows](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows)
- [How to enable and rebill Premium Features for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005678-how-to-enable-and-rebill-premium-features-for-workflows)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets/hit)