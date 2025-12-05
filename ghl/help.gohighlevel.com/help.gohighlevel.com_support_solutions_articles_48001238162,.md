---
url: "https://help.gohighlevel.com/support/solutions/articles/48001238162,"
title: " How to use the Google Sheets Premium Workflow Action? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001238162,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001238162,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Guide to Google Sheets Premium Workflow Action

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

# Guide to Google Sheets Premium Workflow Action

Modified on: Fri, 27 Jun, 2025 at 7:45 AM

This guide explains how to effectively use the Google Sheets Premium Workflow Action in HighLevel. Learn how to set up the action, utilize its individual functions, and troubleshoot common issues. This guide is ideal for users who want a deep dive into automating workflows with structured data integration in Google Sheets.

* * *

**TABLE OF CONTENTS**

- [What is the Google Sheets Premium Workflow Action?](https://help.gohighlevel.com/support/solutions/articles/48001238162,#What-is-the-Google-Sheets-Premium-Workflow-Action?)
  - [Key Benefits of Google Sheets Integration](https://help.gohighlevel.com/support/solutions/articles/48001238162,#Key-Benefits-of-Google-Sheets-Integration)
  - [Before You Start](https://help.gohighlevel.com/support/solutions/articles/48001238162,#Before-You-Start)
  - [How to Set Up the Google Sheets Integration](https://help.gohighlevel.com/support/solutions/articles/48001238162,#How-to-Set-Up-the-Google-Sheets-Integration)
  - [Google Sheets Action Basic Settings](https://help.gohighlevel.com/support/solutions/articles/48001238162,#Google-Sheets-Action-Basic-Settings)
  - [Google Sheets Action Functions](https://help.gohighlevel.com/support/solutions/articles/48001238162,#Google-Sheets-Action-Functions)

* * *

# **What is the Google Sheets Premium Workflow Action?**

The Google Sheets Premium Workflow Action allows you to integrate Google Sheets directly into HighLevel workflows, automating data transfers between the two systems with no third-party integration. This action supports various functions which include creating, looking up, updating, and deleting rows in a connected Google Sheet.

```
In the Workflow Builder this is called an Action and in the Action settings the functions are also called Actions. We will refer to sub-Actions like Create Spreadsheet Row as functions.
```

* * *

## **Key Benefits of Google Sheets Integration**

- **Structured Data Management**: Ensures data is organized the same way every time.

- **Automation**: Reduces manual effort by syncing data instantly.

- **Error Reduction**: Prevents duplication or errors from manual data entry.

- **Scalability**: Supports growing datasets and increased operations tempo without any changes.

* * *

## **Before You Start**

Before setting up the Google Sheets action, ensure the following:

1. **A Google account is integrated** with the HighLevel subaccount.

2. **A Google Sheet is prepared.** Ensure the sheet is named and has clearly defined headers.

3. **Premium Triggers & Actions enabled** in your HighLevel Agency account and the Subaccount.


```
Some Triggers & Actions are premium, meaning HighLevel charges the Agency for every execution in every Subaccount ($0.01 per execution, far less than other platforms charge). Agencies on the Pro plan can Rebill the Subaccounts, automatically covering costs or profiting. The Workflow Pro plan is a separate subscription the Agency can Resell to Subaccounts which pre-purchases premium triggers & actions at a bulk rate.
```

* * *

## **How to Set Up the Google Sheets Integration**

The Google Sheets action has several details that must be defined but they are straight forward.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038590478/original/0g9AOmI2Cpjj4GSH50ntgVFjtcagowosUQ.png?1734582672)

1. **Add the Google Sheets Action** to Your Workflow:




1. Go to **Automations > Workflows** in HighLevel.

2. Select **\+ Add Action** and choose **Google Sheets Premium Workflow Action**.
2. **Link Your Google Account**: If not already linked, authenticate your Google account in HighLevel.

3. **Select Your Spreadsheet and Worksheet**: Choose the appropriate Google Sheet and its specific worksheet where data will be updated.

* * *

## **Google Sheets Action Basic Settings**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038590342/original/cYv8BnVpsYzqgabMnOEQn3Hfog5CUlKIuw.png?1734582295)

1. Choose An **Account**

2. Choose a **Drive**

3. Choose a **Spreadsheet**

4. Choose a **Worksheet**

5. Refresh **Headers** (the first row of the Worksheet)

6. Select **Columns** (you can include all columns or a range)

```
It help if you know the exact name of the Drive, Spreadsheet, and Worksheet so you can search for them. Otherwise it might be a lot of scrolling.
```

* * *

## **Google Sheets Action Functions**

|     |     |
| --- | --- |
| **Function** | **Description** |
| Create Spreadsheet Row | Adds a new row at the end of the spreadsheet |
| Create Multiple Spreadsheet Row(s) | Adds one or more new rows at the end of the sheet |
| Lookup Spreadsheet Row | Finds the first row that matches a search |
| Lookup Multiple Spreadsheet Row(s) | Finds a match and returns a number of additional rows |
| Update Specific Spreadsheet Row | Alters the data in a numbered row |
| Update Multiple Spreadsheet Row(s) | Alters the data in multiple rows |
| Update Spreadsheet Row Using Lookup | Alters the data in a row that matches a search |
| Delete Specific Spreadsheet Row | Erases all the data in a numbered row leaving it blank |
| Delete Spreadsheet Row Using Lookup | Erases all the data in the row that matches a search |

### **Create Row**

- Adds a new row to the end of the spreadsheet.
- **Important Note**: New rows are always added after the highest-numbered row.


**Lookup Row**

- Searches for a row based on specified criteria.
- **Common Use Case**: Retrieve customer records by email address.


**Lookup + Create Row**

- Combines Lookup and Create functionalities.
- **Behavior**: If the Lookup action does not find a matching row, a new row is created.


**Update Row**

- Updates data in a specified row.
- **Important Note**: This action requires the row number, which is often obtained using the Lookup action-item.


**Delete Row**

- Deletes a row based on its row number.
- **Tip**: Use Lookup first to identify the row number before deleting.


6\. **Advanced Features**

- **Multiple Rows Lookup**: Retrieve multiple rows based on filter criteria, useful for batch processing.

- **Custom Variable Mapping**: After a Lookup action, headers are mapped to custom variables, simplifying further actions.
  - **Troubleshooting**: If headers are changed in the Google Sheet, refresh the mapping in HighLevel.

7\. **Use Cases for Google Sheets Integration**

- **Sales Tracking**: Automatically add or update leads in Google Sheets when they reach milestones.

- **Marketing Campaigns**: Sync campaign performance metrics for real-time analysis.

- **Customer Support**: Record and update support ticket logs directly in Sheets.


8\. **Troubleshooting and Common Issues**

- **Index Mapping Issues**:
  - Refresh headers in HighLevel if changes are made in the Google Sheet.
- **Authentication Errors**:
  - Reauthorize your Google account in HighLevel.
- **Spreadsheet Not Appearing**:
  - Ensure the correct account and permissions are in use.

9\. **FAQs**

**Q: What happens if Google Sheet headers are renamed?**

You will need to refresh the headers in HighLevel and reconfigure any affected workflows.

**Q: Can multiple Google Sheets be integrated into one workflow?**

Yes, each action-item can specify a different Google Sheet.

10\. **Next Steps**

- Explore related articles:
  - [Workflow Action - Google Sheets](https://chatgpt.com/g/g-6740aaf2809c8191828f1a8d0a0c1cd8-highlevel-kb-gpt-internal/c/6762140c-2f7c-8007-a132-ce766373c995#)
  - [How to Enable LC Premium Actions](https://chatgpt.com/g/g-6740aaf2809c8191828f1a8d0a0c1cd8-highlevel-kb-gpt-internal/c/6762140c-2f7c-8007-a132-ce766373c995#)

* * *

LC Premium Actions for Google Sheets is a powerful tool to streamline data management processes by automating row creation, updating, and deletion. Seamlessly integrate your Google Sheets documents within our workflow system, enabling efficient data management and reducing the risk of errors. Leverage lookup functionalities to locate specific rows, ensuring accuracy and providing a comprehensive solution for all your Google Sheets data needs.

```
Agencies on Any Plan  ($97, $970, $297, $2970, $497, $4970) can access LC Premium Triggers & Actions.

- Once Premium Actions & Triggers are enabled via the Agency settings, EXISTING and New Sub-Accounts will have 100 free executions.

- For agencies to avoid accruing execution costs for EXISTING Sub-Accounts, rebilling will need to be enabled manually for each Sub-Account within the Agency view (more info).

- If premium actions are enabled on the SaaS Configurator, new Sub-Accounts generated will automatically be enrolled in LC Premium Actions & Triggers, no further action is required by the agency.
```

#### **Covered in this Article**

#### [**What is the Google Sheets Premium Workflow Action?**](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#What-is-the-Google-Sheets-Premium-Workflow-Action?)

#### [Who is this feature useful for?](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Who-is-this-feature-useful-for?)

#### [What are the benefits of this feature?](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#What-are-the-benefits-of-this-feature?)

#### [**How to use the Google Sheets Premium Workflow Action?**](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#How-to-use-the-Google-Sheets-Premium-Workflow-Action?)

#### [Create Spreadsheet Row](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Create-Spreadsheet-Row)

#### [Choose a Google account:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Choose-a-Google-account%3A)

#### [Select a Drive:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-a-Drive%3A)

#### [Select a Spreadsheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-a-Spreadsheet%3A)

#### [Select a Worksheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-a-Worksheet%3A)

#### [Selecting Starting Column and End Column in the Worksheet](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Selecting-Starting-Column-and-End-Column-in-the-Worksheet)

#### [Insert values to create a new row in the Worksheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Insert-values-to-create-a-new-row-in-the-Worksheet%3A)

#### [Update Specific Spreadsheet Row](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Update-Specific-Spreadsheet-Row)

#### [Choose a worksheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Choose-a-worksheet%3A)

#### [Insert Row Number:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Insert-Row-Number%3A)

#### [Select Starting Column and ending column:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-Starting-Column-and-ending-column%3A)

#### [Delete Specific Spreadsheet Row](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Delete-Specific-Spreadsheet-Row)

#### [Choose a worksheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Choose-a-worksheet%3A-1)

#### [Insert Row Number:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Insert-Row-Number%3A-2)

#### [Lookup Spreadsheet Row](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#%C2%A0Lookup-Spreadsheet-Row)

#### [Choose a worksheet:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Choose-a-worksheet%3A-3)

#### [Select Search Order:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-Search-Order%3A)

#### [Select a Column and Lookup Value to find the matching row](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-a-Column-and-Lookup-Value-to-find-the-matching-row)

#### [Select an extra Column and Lookup Value.](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-an-extra-Column-and-Lookup-Value.)

#### [Using as Custom Variables:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Using-as-Custom-Variables%3A)

#### [Important points to remember:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Important-points-to-remember%3A)

#### [Update Spreadsheet Row using Lookup.](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Update-Spreadsheet-Row-using-Lookup.)

#### [Select Lookup Action](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Select-Lookup-Action)

#### [Selecting a Starting Column and End Column](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Selecting-a-Starting-Column-and-End-Column)

#### [Points to Remember:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Points-to-Remember%3A)

#### [Delete Spreadsheet Row using Lookup.](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Delete-Spreadsheet-Row-using-Lookup.)

#### [Points to Remember:](https://help.gohighlevel.com/support/solutions/articles/48001238162,\#Points-to-Remember%3A%C2%A0)

* * *

## **What is the Google Sheets Premium Workflow Action?**

Google Sheets Premium Workflow Action is a robust feature designed to enhance your data management experience within Google Sheets using the LC Premium Actions system. This powerful tool enables you to automate various tasks, such as creating, updating, and deleting rows, significantly improving your workflow efficiency and data accuracy.

By leveraging the LC Premium Actions system, you can easily integrate Google Sheets into your data management processes without complex third-party integrations. The system also provides an intuitive user interface, streamlining your data management tasks and enabling you to focus on more critical aspects of your work.

One of the standout features of the Google Sheets Premium Workflow Action is the powerful lookup functionality. This allows you to search for specific rows within your sheets based on specific criteria, making it easy to locate and work with relevant data. This feature helps automate complex data management tasks, such as cross-referencing data from multiple sheets or databases.

Furthermore, the Google Sheets Premium Workflow Action supports a range of actions, including creating new rows, updating specific rows, deleting rows, and more advanced features like updating or deleting rows using the lookup function. This comprehensive suite of actions ensures you have all the tools you need to manage your data in Google Sheets effectively.

In addition to its core features, the Google Sheets Premium Workflow Action allows you to use custom variables to store and manipulate data within your workflows. This flexibility enables you to create dynamic, data-driven workflows tailored to your needs and requirements.

### **Who is this feature useful for?**

The Google Sheets Premium Workflow Action feature is helpful for a wide range of individuals and organizations that rely on data management and collaboration using Google Sheets. This includes, but is not limited to:

- Small and medium-sized businesses: These organizations can use this feature to automate data management processes, track inventory, manage budgets, and create reports, enabling more efficient collaboration and decision-making.
- Project managers: They can utilize this feature to streamline project tracking, task management, and resource allocation within Google Sheets, leading to improved project outcomes and team productivity.
- Sales and marketing professionals: This feature can help automate data entry, lead tracking, and sales performance analysis, enabling better insights and decision-making in sales and marketing campaigns.
- Human Resources (HR) professionals: The Google Sheets Premium Workflow Action can manage employee data, automate onboarding processes, and track various HR-related metrics, saving time and reducing errors.
- Educators and academic institutions: Teachers and administrators can use this feature to manage student data, track assignments, and analyze performance metrics, leading to more effective educational strategies.
- Non-profit organizations: Non-profits can benefit from this feature by automating donor management, event planning, and budget tracking within Google Sheets, leading to more efficient operations and better allocation of resources.
- Researchers and data analysts: These professionals can use the feature to streamline data collection, analysis, and reporting processes within Google Sheets, resulting in more accurate and timely insights.

### **What are the benefits of this feature?**

The Google Sheets Premium Workflow Action offers numerous benefits to users, making it a valuable addition to their data management processes. Some of the key benefits include:

- Improved efficiency: By automating various data management tasks, such as creating, updating, and deleting rows, users can save time and improve productivity, allowing them to focus on more critical aspects of their work.

- Enhanced accuracy: Automation reduces the risk of human error in data management processes, ensuring that the data within Google Sheets remains accurate and reliable.
- Streamlined collaboration: This feature simplifies data sharing and cooperation among team members, making it easier to work together on projects and achieve shared goals.
- Flexible customization: Using custom variables and lookups enable users to create dynamic, data-driven workflows tailored to their needs and requirements.
- Powerful lookup functionality: This feature allows users to search for specific rows within their sheets based on specific criteria, making it easy to locate and work with relevant data. This is particularly useful for automating complex data management tasks, such as cross-referencing data from multiple sheets or databases.
- Easy integration: The Google Sheets Premium Workflow Action eliminates the need for complex third-party integrations, offering a seamless and user-friendly solution for managing data within Google Sheets.
- Scalability: This feature can be utilized by organizations of all sizes, making it a scalable solution for managing data as the organization grows and evolves.
- Better decision-making: By streamlining data management processes and improving data accuracy, users can make more informed decisions based on the insights derived from their Google Sheets data.

* * *

## **How to use the Google Sheets Premium Workflow Action?**

The following Workflow actions are supported in Google Sheets.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294013403/original/lCUixqYdA6zlNXPNjAJXNYf7kjn5vEngMg.png?1682257558)

* * *

### **Create Spreadsheet Row**

LC Premium Actions lets you send data directly to a Google Sheets document without requiring third-party integrations. All you need to do is integrate your Google account with our system and select the desired sheet from your Google Drive. From there, you can easily send data to the sheet using our intuitive user interface.

With our

#### **Choose a Google account:**

All your integrated Google accounts in your subaccount will be displayed in the dropdown menu for you to choose from.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014486/original/aowv6YTk63mq1daX0eqDn2h0db48akFmFA.png?1682259674)

#### **Select a Drive:**

Once you have selected a Google account from the dropdown menu in our subaccount system, all associated Google Drives will be displayed for you to choose from. This allows you to select the specific Google Drive account containing the target Google Sheets document you want to send data.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014527/original/fWMFC1aLZvu2iuX_Pd87-QxdbtZnSAQfmQ.png?1682259739)

#### **Select a Spreadsheet:**

Once you have selected a Google Drive from the dropdown menu, all Spreadsheets associated with the integrated Google Drive will be displayed for you to choose from.

This allows you to select the specific Google Spreadsheet document to which you want to send data.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014588/original/47mlhoT1pJN-daaiQVu2ubV1F9EyzNrk2w.png?1682259782)

#### **Select a Worksheet:**

Once you have selected a Google Spreadsheet from the dropdown menu, all Worksheets inside that Spreadsheet will be displayed for you to choose from.

This allows you to select the specific Worksheet to which you want to send data.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014598/original/N4mlSoOjjgifygREP0oGmDbHgU9neUHygA.png?1682259818)

#### **Selecting Starting Column and End Column in the Worksheet**

When sending data to a Google Sheets document using our workflow system, the sheet's first row is automatically considered the header row, and each Column is labeled based on the header values in that row.

If you need to update the headers in the sheet, you can click the "Refresh Headers" button to fetch the latest header values from the sheet. This ensures that your data is correctly mapped to the correct columns in the sheet and that your workflow is up-to-date with the latest sheet configurations.

By providing this functionality, our system makes it easy to automate data management processes and ensure the accuracy of your data workflows.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014623/original/8K0LEE6bz3imuip9_p68DFBtChyKkXHgnw.png?1682259878)

#### **Insert values to create a new row in the Worksheet:**

You can insert value and create a new row in your Google Sheets document.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014637/original/c4sVZ1664jaJwbVbRWDUZZLRiR9Nyr2SyA.png?1682259923)

* * *

### **Update Specific Spreadsheet Row**

The "Update Specific Spreadsheet Row" action enables us to modify the contents of a specific row by specifying its row number. This action updates the values in the corresponding columns of that row.

#### **Choose a worksheet:**

Select a worksheet within your Spreadsheet that you wish to edit a row.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014668/original/NkYnzrKnKEQCb0sV4-dnD0HOgdBgoFmsQg.png?1682260011)

#### **Insert Row Number:**

Specify the row number that you wish to modify in the Spreadsheet.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014694/original/NnHgJ15jBPQCrCEHcsYCcZOk_WKZTtgJig.png?1682260064)

You may also provide the Row Number using the Custom Variable Picker to use dynamic values.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014701/original/vD0gBD8SxluQnVmvOA0yjOc1bfa9TYg3cA.png?1682260086)

#### **Select Starting Column and ending column:**

To update the desired columns, select the starting and ending columns.

You can leave it blank if you do not wish to update a particular column.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014723/original/uqOuN_jLGz2mEYd9vzaguQonUE8qfcoGCg.png?1682260129)

* * *

### **Delete Specific Spreadsheet Row**

The "Delete Specific Spreadsheet Row" action enables us to delete the contents of a specific row by specifying its row number. This action will clear the values in all of the columns of that row.

**Please Note:**

```
When you use the "Delete Specific Spreadsheet" action, it clears the contents of the row, but it does not permanently remove the row itself.
```

#### **Choose a worksheet:**

Select a worksheet within your Spreadsheet that you wish to delete a row of.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014785/original/ZmbzRansrOH-JlzMGJNwKciPFP0wRhn-Lg.png?1682260222)

#### **Insert Row Number:**

Specify the row number that you wish to delete in the Spreadsheet.

**Please Note:**

```
 You may also provide the Row Number using the Custom Variable Picker to use dynamic values.
```

* * *

### **Lookup Spreadsheet Row**

The Google Sheet Lookup action allows you to look up data within your Google Sheets documents, providing you with a powerful tool for managing your data workflows.

- Using our system, you can easily Lookup any row in your sheet and use the custom values associated with that row within your workflow.
- This functionality allows you to automate complex data management processes, such as cross-referencing data from multiple sheets or databases.
- By leveraging the power of our workflow system, you can reduce errors, increase efficiency, and save time, all while ensuring the accuracy and completeness of your data.
- With our lookup functionality, you can easily integrate your Google Sheets documents into your workflow processes, creating powerful data management workflows that help you to drive better outcomes.

#### **Choose a worksheet:**

Select a worksheet within your Spreadsheet that you wish to use for Looking up and retrieving data.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015040/original/KBpwiNLroiROx6x6bTHlgmSpNNkmDZ-foQ.png?1682260684)

#### **Select Search Order:**

Select in which order the Google Sheet rows should be searched to find the matching row.

From the top of the Sheet - returns the first matching row

From the bottom of the Sheet - returns the most recent matching row![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294343971/original/Ap0dw_qAyW7_Yzyi7O8GC4a3YAkeuBDugw.png?1682427648)

#### **Select a Column and Lookup Value to find the matching row**

The first row is considered Headers, shown as labels for each Column. You can fetch the latest headers from the sheet by clicking "Refresh Headers".columncolumn

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015052/original/GfcBeKvgMuNwS1AjYO6ipi2XiVADNqlQKg.png?1682260723)

#### **Select an extra Column and Lookup Value.**

If an extra column is added, then both the Column's values should match to determine the matching row.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015069/original/a308RmqZwNOM2ixkIBbxOY9ifkllRm17mw.png?1682260780)

#### **Create Spreadsheet row if it doesn't exist yet:**

#### If enabled, it will execute Create Spreadsheet Row action when the lookup could not find any matching row at the time of execution. This action will be logged and charged separately.  ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294757968/original/gFVg7udmk8YIEO8JVUB319ME31a2YFXBHw.png?1682592032)

### **Lookup Multiple Spreadsheet Row(s)**

Lookup Multiple Spreadsheet Row(s) is an extension to the Lookup Spreadsheet Row. Using this we can extract multiple rows. The configuration will be the same as Look Spreadsheet Row just with an addition of selecting the number of rows you want to extract.

The only difference is selecting the number of rows and that can be achieved by typing in the number of Rows in the "Row Count" field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025719351/original/UBHwpCpCW0i-lmy6t4QBIWy-Wh3aDZXI_A.png?1715178858)

#### **Using as Custom Variables:**

One of the advantages of using Lookup is that when you search for a particular row, all of its data can be saved as a custom value that can be utilized throughout your workflow.

Consider the following Worksheet as an example. If you need to search for a specific row, you can enter the contact phone number or email address in the lookup section. Once the lookup function finds the matching row, it will store all the values under the corresponding header name as custom variables.

#### **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015115/original/LGaxBgQwvGYJoILbTF4nkBZzWgXDoySsyA.png?1682260855)**

When you add a Lookup action, an index is automatically generated. This index is essential for mapping the row data to the custom variables and allows for easy identification of multiple lookup values. Removing or editing the index once it is added is impossible.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015133/original/XkZFM8oEj5xmLie9900hm1X7SmVVdhmidg.png?1682260890)

The values obtained from the lookup action for a particular row can be used in all other activities within your workflows, just like any other contact fields or custom variables.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015142/original/GJblMYbDnexU3c5q-lBeQMQ812EGRVdK4A.png?1682260923)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015154/original/O4T0vx4kMtrqadNUUSZ1E3xXPUtgLbzlFw.png?1682260954)

**Please Note:**

```
As previously mentioned, the index generated by the lookup function serves as a reference and is used for internal mapping of the custom variables in lookup actions.
```

You can use {{sheet.x.rowNumber}} to get the row number of the lookup value.

Here x is the index of the lookup action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015187/original/viPTWFRwhmb1scMyguQYVXDynZa8OxKdww.png?1682261023)

**Example:**

The custom values of LookedUp Row can be utilized in all of the actions within your workflow. Some examples of how to do this are provided below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015228/original/e-kSxKyAnih4z5l92rupHPtUFgddgBdK1g.gif?1682261092)

**In If/Else:**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015249/original/nNpO9JtVAJ9DWXrirZwplnuD9MpFPGai4Q.gif?1682261136)

#### **Important points to remember:**

- Referencing the Google Sheets Lookup Action cannot find a matching row; all subsequent Google Sheets Actions that reference this Lookup Action will be skipped due to lack of a result. Therefore, consider this when building workflows that include this Lookup Action and the Google Sheets: Update Spreadsheet Row using Lookup or Google Sheets: Delete Spreadsheet Row using Lookup.
- Provide
- since the Lookup Action results are available for If/Else Conditions, you can use those to decide whether to use Google Sheets: Create Spreadsheet Row or Google Sheets: Update Spreadsheet Row using Lookup, based on the condition of having a Lookup Result or not. use

* * *

### **Update Spreadsheet Row using Lookup.**

Updating a spreadsheet row using Lookup involves searching for a specific row in your Spreadsheet based on a particular value using Lookup and then updating the values in that row with new data.

To update a specific row in a spreadsheet, you Should use Lookup Action to search for a column value in the data, which will return the corresponding row. Once you have located the desired row, you can use the "Update sheet using Lookup" Action to modify the data within that row.

**Please Note:**

```
If you want to use the "Update using lookup" action, it is necessary to first use the "Lookup" action to search for a specific row in your spreadsheet based on a particular value. Once you have found the desired row using lookup, you can then use the "Update using lookup" action to modify the data within that row. Therefore, using the lookup action prior to updating using lookup is a necessary step in this process.
```

#### **Select Lookup Action**

This action will only display the Lookup actions added above it for selection.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015478/original/oTwiXd_AlB6rUAcygGvIj9jkKugfbANlEg.gif?1682261723)

#### **Selecting a Starting Column and End Column**

To update the desired columns, select the starting and ending columns.

You can leave it blank if you do not wish to update a particular column.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015513/original/7fT3UvPXjD4J4uoawpGjymxipluQJ7FFXQ.png?1682261821)

#### **Points to Remember:**

- In the "Update Specific Sheet Row" action, you can select only one Lookup Action at a time.
- You can leave it blank if you do not wish to update a particular column.
- If the Lookup Action does not return any rows, the workflow will skip this step and proceed to the next one.

* * *

### **Delete Spreadsheet Row using Lookup.**

Deleting a spreadsheet row using Lookup involves searching for a specific row in your Spreadsheet based on a particular value using Lookup and then deleting all the values in that row.

To delete a specific row in a spreadsheet, you Should use Lookup Action to search for a column value in the data, which will return the corresponding row. Once you have located the desired row, you can use the "Delete Spreadsheet Row using Lookup" Action to clear the data in the row.

**Please Note:**

```
If you want to use the "Delete using lookup" action, it is necessary to first use the "Lookup" action to search for a specific row in your spreadsheet based on a particular value. Once you have found the desired row using lookup, you can then use the "Delete using lookup" action to clear the row data. Therefore, using the lookup action prior to delete using lookup is a necessary step in this process.
```

**Select Lookup Action**

Only the Lookup Actions added above this action will be listed for selection.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294015593/original/DYActajsfztIVW8KP0Wj3xvdvzXFIPSCPA.gif?1682261965)

If a row is returned during a lookup, all the values associated with that row will be cleared.

#### **Points to Remember:**

- When you use the "Delete Spreadsheet Row" action, it clears the contents of the row, but it does not permanently remove the row itself.
- If the Lookup Action does not return any rows, the workflow will skip this step and proceed to the next one.

* * *

## **Frequently Asked Questions**

**Q: Can I update or delete all rows returned by a Lookup Multiple Spreadsheet Row(s) action?**

The Lookup Multiple Spreadsheet Row(s) action is designed to retrieve and reference multiple rows at once. However, Google Sheets actions like **Update** and **Delete** are intended to work with **one row at a time**. These follow-up actions do not automatically loop through multiple results from a Lookup Multiple action.

If your workflow requires updating or deleting multiple rows, you can implement custom logic using code actions or external automation tools that handle batch processing. This approach gives you greater control over how each row is processed while maintaining the flexibility of your workflow.

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

- [How to handle multiple rows in Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000002097-how-to-handle-multiple-rows-in-google-sheets)
- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)
- [How to enable and rebill Premium Features for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005678-how-to-enable-and-rebill-premium-features-for-workflows)
- [How to fetch product details purchased by customers in workflows](https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows)
- [Using Custom Objects in Workflow Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)
- [Workflow Trigger - Scheduler](https://help.gohighlevel.com/support/solutions/articles/155000006653-workflow-trigger-scheduler)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001238162,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001238162-guide-to-google-sheets-premium-workflow-action/hit)