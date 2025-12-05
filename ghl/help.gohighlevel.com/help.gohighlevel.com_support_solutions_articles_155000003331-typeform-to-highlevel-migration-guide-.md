---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-"
title: " Typeform to HighLevel (Migration Guide) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Customer Support](https://help.gohighlevel.com/support/solutions/155000000145)
4. [Software Migration Guides](https://help.gohighlevel.com/support/solutions/folders/155000000813)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Customer Support](https://help.gohighlevel.com/support/solutions/155000000145)
   - [Software Migration Guides](https://help.gohighlevel.com/support/solutions/folders/155000000813)
6. Typeform to HighLevel (Migration Guide)

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

# Typeform to HighLevel (Migration Guide)

Modified on: Fri, 7 Mar, 2025 at 11:18 AM

This comprehensive guide outlines the steps to effectively migrate forms, surveys, and associated data from Typeform to HighLevel. The goal is to ensure a smooth transition while maximizing the use of HighLevel’s comprehensive features such as CRM integration, marketing automation, and advanced analytics.

```
IMPORTANT: Make sure you migrate all of the following components when switching over from Typeform to HighLevel.

1. Forms
2. Contacts
3. Automations
4. Domains & QR codes
5. Reports
```

* * *

**TABLE OF CONTENTS**

- [Migrate Forms](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#Migrate-Forms)
- [Migrate Contacts](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#Migrate-Contacts)
- [Migrate Automation and Follow-Ups](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#Migrate-Automation-and-Follow-Ups)
- [Migrate Form Domains & QR Codes](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#Migrate-Form-Domains-&-QR-Codes)
- [Exporting and Generating New Data](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-#Exporting-and-Generating-New-Data)

* * *

# **Migrate Forms**

Typeform helps user collect information through forms, surveys, and polls and all responses can be downloaded in a CSV.

### **Step 1:** View TypeForms

- **Log in to TypeForm:** Log in to access your Workspace and manage all forms and surveys.

- **View Form Questions:** Click on each form to view each form question on the left side of the form preview screen.

- **Document Existing Automations:** Review any existing automation sequences in Typeform, including form logic, calculations, email validation, and notifications.

### **Step 2:** Recreate Questions in HighLevel

- **Log in to HighLevel:** Go to Contacts > Settings > Custom Fields.

- **Recreate form questions:** Add Custom Value Folders for all Form Questions. Manually add these as custom fields, matching their data types.

### **Step 3:** Recreate Forms & Surveys in HighLevel

- **Recreate Forms and Surveys:** Create Individual forms and surveys and add their corresponding questions.

- **Recreate Form Design:** Use HighLevel’s customization options to match the design and branding of the original TypeForm.

- **Add Form Builder Automations:** Replicate any existing automation sequences in Typeform, including logic, calculations, email/phone validation, and notifications. Several settings can be built within the form builder. Remaining automations are built at the Automation Step.

- **Test Forms:** Test Forms and ensure they perform correctly.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032414391/original/T_GOUaP-crEbIG2Nr1m1IYJjP-S2Dck8hg.jpeg?1725631651)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429215/original/iN6jpFrII7xrrj_bxQv4d3IIiUZb9gd0ww.png?1725645819)

* * *

# **Migrate Contacts**

Unlike HighLevel, Typeforms doesn't require email or phone for each form submission. You must only export form responses that have phone and email fields to migrate to HighLevel Contacts.

### **Step 1:** Export Form Responses from Typeform

- **Export Typeform Data:** Access their form in My Workspace, navigate to Results, and select Responses.

- **Download Data:** Use the checkbox to select all responses. Click the download icon at the top right to download all form responses in CSV format for backup.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429251/original/zreXLrvclihicln5nBGH93xAF--3X3LFcQ.png?1725645847)

### **Step 2:** Prepare CSV for HighLevel Import

- **Check Date Formats:** Ensure all date fields in the CSV are in the YYYY-MM-DD format. This is essential for compatibility with HighLevel.

- **Encode Special Characters:** Make sure the CSV file uses UTF-8 character encoding to properly handle special and accented characters.

- **Clean Up Data:** Remove any line breaks, emojis, and unnecessary special characters from the file. This step helps prevent import errors.

- **Recreate Custom Fields:** Log in to HighLevel and navigate to Contacts > Settings > Custom Fields. Add custom fields to store contact data in a similar way to how they were stored in Typeform.

### **Step 3:** Import Contacts into HighLevel

- **Log in to HighLevel:** Navigate to the Contacts section using the left-hand menu.

- **Start Import Process:** Click the Import Contacts button.

- **Upload CSV File:** Select and upload the prepared CSV file.

- **Map Fields:** HighLevel will prompt you to map the fields from the CSV file to the corresponding fields in HighLevel. For example, map “First Name” in the CSV to “First Name” in HighLevel.




  - **Field Mapping Tip:** Ensure all required fields are correctly mapped. If a field in your CSV does not have a corresponding field in HighLevel, you may need to create a custom field in HighLevel before proceeding.
- **Assign Tags and Lists:** During the import process, you can assign contacts to specific lists and apply tags. Consider applying a tag that indicates the source of the contacts, such as “Typeform Import.”

- **Complete Import:** After mapping all fields and setting tags/lists, click Import. HighLevel will process the import, and the contacts will be added to your account.

### **Step 4:** Review Imported Data

- **Review:** Check that all data imported into HighLevel, including contacts and form submissions, is accurate and complete.

- **Cross-Check with Typeform Data:** Compare the data in HighLevel with the original Typeform data to ensure no discrepancies.

* * *

# **Migrate Automation and Follow-Ups**

Automation in Typeform can be built in-app or by using Slack, Zapier, or webhooks.

### **Step 1:** Review Existing Automations in TypeForm

- **Review any remaining automation sequences in Typeform:** Access settings by clicking the gear icon. If they cannot be created in the Form Builder, may be created in HighLevel workflows, like follow up messaging, integrations, and webhooks.

### **Step 2:** Recreate Automations in HighLevel

- **Set up triggers and actions:** Use HighLevel’s automation workflows to set up similar sequences that cannot be built inside form builder, such as sending follow-up emails or triggering CRM actions based on form responses.

- **Test Automations:** Ensure that each automation triggers correctly and performs as expected when forms are submitted.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429259/original/7jSz-3kPivsXXfgI1WvNh-mO2r3CR0qQQw.png?1725645867)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429268/original/kyeLXKdxIJ0wLHfi9sqQoffFKF94tpADgw.png?1725645875)

* * *

# **Migrate Form Domains & QR Codes**

You must migrate the domain so the customer can continue to use this for HighLevel forms and leads can access previous custom links. Forms can be shared with custom QR Codes. Recreate any QR codes for forms in HighLevel.

### **Step 1:** Document and Remove TypeForm Domain

- **Document TypeForm Custom Domain:** Click the organization avatar in the upper left-hand corner and go to Admin settings.

- **Remove TypeForm Custom Domain:**  On the Admin settings page, click Change URL. Choose the Custom domain radio button and click Confirm.

### **Step 2:** Add 301 redirect in HighLevel

- **Setup a Redirect:** go to Sites > URL Redirects

- **Test Sharing and Accessibility:** Test each form’s accessibility across various platforms and devices to ensure a smooth user experience.

### **Step 3:** Add API Domain in HighLevel

- **Rebrand Forms with Domains:** go to Settings > Business Profile

### **Step 4:** Document Forms with QR Codes in TypeForm

- **Log into Typeform:** To get to the Share panel, open up a form and click Share. The last icon gives you a QR code, which you can also use to share your form.

### **Step 5:** Add QR codes in HighLevel

- **Create QR Code:** go to Sites > QR Codes > Create QR code. Add Name and Select QR Type as Website and click on Next.

- **Attach HighLevel Form URLs:** Add your HighLevel form URLs here. You can change this website URL later incase you want to redirect your users to a new link.

- **Test and Share:** For analytics related to QR codes, go to QR Codes > Analytics

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429273/original/ewZjz5d_jvN5M2mXNlqlivttB7ZMnj7qtw.png?1725645893)

* * *

# **Exporting and Generating New Data**

Users who cancel their paid Typeform subscriptions will not be able to view or create reports after their plan cancellation goes into effect. This report only supports aggregated form responses. Contact Info, and Address question types are currently not supported.

### **Step 1:** Export Reports from TypeForm

- **Generate Report:** Open your form from your Workspace, and click on the Results panel, and then Summary. Click Generate a report.




  - A new screen will open, where you can see and share your report.

  - Show answers to open-ended questions in your report by clicking the toggle on the left.

  - Display all open-ended questions so it is included in the report.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429288/original/mJmq5RKto93YpnrqyyaPXuF_-eNXKrtaqA.png?1725645930)

### **Step 2:** Save the Report as a PDF

- **Click the Print button to print your report:** A new tab will open in your browser with a option to Save as PDF. Upload this to Cloud Storage for safekeeping.

### **Step 3:** Form Submissions and Dashboard Widget Reporting

- [Where Do Form Responses Show Up?](https://help.gohighlevel.com/support/solutions/articles/48000979916-where-do-form-responses-show-up-)

- [Custom Widgets](https://help.gohighlevel.com/support/solutions/folders/155000000192)(Pro Plan Users Only)


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

- [ActiveCampaign to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003296-activecampaign-to-highlevel-migration-guide-)
- [ClickFunnels to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003389-clickfunnels-to-highlevel-migration-guide-)
- [Skool to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003309-skool-to-highlevel-migration-guide-)
- [Keap to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-)
- [Wix to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003310-wix-to-highlevel-migration-guide-)
- [Calendly to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003308-calendly-to-highlevel-migration-guide-)

## Related Articles

- [Calendly to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003308-calendly-to-highlevel-migration-guide-)
- [Wix to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003310-wix-to-highlevel-migration-guide-)
- [Hubspot to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003388-hubspot-to-highlevel-migration-guide-)
- [Zoho to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003316-zoho-to-highlevel-migration-guide-)
- [Keap to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-)
- [Jotform to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003692-jotform-to-highlevel-migration-guide-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-/hit)