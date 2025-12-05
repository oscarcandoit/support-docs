---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-"
title: " Keap to HighLevel (Migration Guide) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Customer Support](https://help.gohighlevel.com/support/solutions/155000000145)
   - [Software Migration Guides](https://help.gohighlevel.com/support/solutions/folders/155000000813)
6. Keap to HighLevel (Migration Guide)

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

# Keap to HighLevel (Migration Guide)

Modified on: Tue, 1 Oct, 2024 at 12:10 PM

This guide provides detailed instructions for migrating from Keap to HighLevel, covering the transfer of contacts, custom fields, automations, landing pages, and other essential assets. The goal is to ensure a seamless transition while maximizing the functionality offered by HighLevel.

**TABLE OF CONTENTS**

- [Prepare for Migration](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Prepare-for-Migration)
- [Migrate Contacts & Custom Fields](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Migrate-Contacts-&-Custom-Fields)
- [Migrate Pipelines and Deals](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Migrate-Pipelines-and-Deals)
- [Migrate Automations and Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Migrate-Automations-and-Campaigns)
- [Migrate Landing Pages and Forms](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Migrate-Landing-Pages-and-Forms)
- [Migrate Appointments and Calendars](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Migrate-Appointments-and-Calendars)
- [Final Checks and Training](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Final-Checks-and-Training)
- [Decommissioning Keap](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-#Decommissioning-Keap)

* * *

# **Prepare for Migration**

### **Step 1:** Review Current Keap Setup

- **Identify Key Assets:** List all critical assets in Keap, including contacts, custom fields, pipelines, automations, and landing pages.

- **Document Workflows:** Note down all automation sequences, campaigns, and other workflows that are essential for ongoing operations.

- **Evaluate Data Volume:** Assess the amount of data (contacts, custom fields, automations) that needs to be migrated.

### **Step 2:** Define Migration Objectives

- **Set Clear Goals:** Identify the key reasons for migrating to HighLevel, such as enhanced automation capabilities, integrated CRM, or improved pricing.

- **Prioritize Critical Features:** Focus on migrating the most critical features first to ensure uninterrupted operations.

### **Step 3:** Prepare Backup

- **Export Data from Keap:** Export all necessary data, including contact lists, custom fields, and automation sequences.

- **Backup Data:** Ensure all exported data is securely backed up before starting the migration process.

* * *

# **Migrate Contacts & Custom Fields**

### **Step 1:** Export Data from Keap

- **Export Contacts:**
  - Navigate to Contacts > People in Keap.
  - Select the contacts you want to export or use the Select All option.
  - Click Export and choose to download the contact data as a CSV file.
  - For large exports (over 1,000 contacts), enter your email address to receive a download link from Keap.
- **Export Custom Fields:** Document or export all custom fields associated with contacts and companies. Note that custom fields need to be recreated manually in HighLevel.

- **Document Automation Rules:** Record all automation sequences, triggers, and actions by taking screenshots or documenting them manually.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033893177/original/HvNSim0JgN9NCS5ricBaXUw_SHeyQF6myw.png?1727798693)

### **Step 2:** Import Data into HighLevel

- **Import Contacts:**
  - In HighLevel, go to Contacts > Import Contacts and upload the CSV file exported from Keap.
  - Map the custom fields from Keap to HighLevel during the import process.
- **Recreate Custom Fields:**
  - Navigate to Settings > Custom Fields in HighLevel.
  - Recreate each custom field from Keap, ensuring to match the field types appropriately.
- **Recreate Tags:** In HighLevel, manually create any tags used in Keap to ensure accurate contact segmentation.

* * *

# **Migrate Pipelines and Deals**

### **Step 1:** Review Existing Pipelines in Keap

- **List Active Pipelines:** Identify all active pipelines in Keap, including the stages and associated deals.

- **Document Deal Information:** Note down all key details associated with each deal, such as deal value, stage, and associated contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033895985/original/nSS4_Sg-LmbzHDVNyEeprpVHG-oylfp1fg.png?1727802228)

### **Step 2:** Recreate Pipelines in HighLevel

- **Set Up Pipelines:**
  - Navigate to Opportunities > Pipelines in HighLevel.
  - Create pipelines that correspond to those in Keap, adding the same stages and settings.
- **Manually Transfer Deals:** Recreate each deal in HighLevel by manually entering the deal information, ensuring to match the deal stage and contact association.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896091/original/QgAlFIvRiyOIF3DMK4MQ3IuBvcBpOwK2UA.jpg?1727802411)

* * *

# **Migrate Automations and Campaigns**

### **Step 1:** Review Existing Automations in Keap

- **List Active Automations:** Identify all active automations, including email sequences, tags, and triggers.

- **Document Automation Flows:** Take detailed notes or screenshots of each automation flow to facilitate recreation in HighLevel.

### **Step 2:** Recreate Automations in HighLevel

- **Build New Workflows:**
  - Go to Automation > Workflows in HighLevel.
  - Recreate the automations from Keap, using HighLevel’s triggers, conditions, and actions to achieve similar results.
- **Test Workflows:** Test all recreated workflows thoroughly to ensure they function correctly, making any necessary adjustments.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896189/original/t6TXuRjFWGtGuXzACQ0xX7zLKdDacyzm9Q.png?1727802588)

* * *

# **Migrate Landing Pages and Forms**

### **Step 1:** Recreate Landing Pages in HighLevel

- **Rebuild Landing Pages:** Use HighLevel’s Funnel & Website Builder to recreate landing pages from Keap. Ensure that the design and content closely match the original Keap landing pages.

- **Add Forms:** Embed forms into landing pages as required, ensuring they capture the necessary lead information and trigger the correct tags or automations.

### **Step 2:** Customize Forms

- **Recreate Public Forms:**
  - In HighLevel, navigate to Funnels & Websites > Forms and recreate the public forms from Keap.
  - Customize the form fields and settings to match those used in Keap.
- **Configure Form Actions:** Ensure that form submissions in HighLevel trigger the correct tags and workflows, similar to the setup in Keap.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896153/original/h7HHSz_LlBoxZNWV0flYVvPlsCYwjmSleg.png?1727802541)

* * *

# **Migrate Appointments and Calendars**

### **Step 1:** Review Existing Appointments in Keap

- **List Active Appointment Types:** Identify all existing appointment types and associated settings, including reminders and integrations.

- **Document Appointment Settings:** Note down all key settings related to each appointment type, such as duration, availability, and reminders.

### **Step 2:** Recreate Appointment Types in HighLevel

- **Set Up Appointment Types:**
  - Navigate to Calendars > Appointment Types in HighLevel.
  - Recreate each appointment type from Keap, including all relevant settings like duration, location (Zoom integration), and availability.
- **Integrate External Calendars:** Integrate Google or Outlook calendars with HighLevel to ensure all appointments are synced and conflicts are avoided.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896195/original/pVBX15x-GqEmu0rL5RKJXZGzZvKQwvLRog.png?1727802599)

* * *

# **Final Checks and Training**

### **Step 1:** Perform Final Data Validation

- **Cross-Check Data:** Verify that all data has been successfully migrated, including contacts, pipelines, automations, and landing pages.

- **Validate Workflows**: Ensure that all workflows and automations are operational in HighLevel.

### **Step 2:** Train Team Members

- **HighLevel Training:** Provide necessary training to your team on using HighLevel’s CRM, automation, and appointment management tools.

- **Leverage Support Resources:** Encourage your team to utilize HighLevel’s support resources for ongoing learning and troubleshooting.

### **Step 3:** Monitor and Optimize

- **Monitor Performance:** Continuously monitor the performance of your HighLevel setup, making adjustments as needed to optimize operations.

- **Continuous Improvement:** Regularly review your setup to ensure it meets your evolving business needs.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896204/original/T2DEx5mvKA-DXK0it85lqixsZrYab6KCsA.png?1727802618)

* * *

# **Decommissioning Keap**

### **Step 1:** Transition Period

- **Run in Parallel:** Consider running both Keap and HighLevel in parallel during the transition to ensure no disruptions in operations.

- **Gradual Phase-Out:** Slowly reduce reliance on Keap as you become more comfortable with HighLevel.

### **Step 2:** Cancel Keap Subscription

- **Final Data Backup:** Ensure that all necessary data is securely backed up before canceling your Keap subscription.

- **Official Cancellation:** Follow Keap’s process to cancel your subscription and terminate any associated services.

### **Step 3:** Post-Migration Review

- **Review Success:** Evaluate the success of the migration, documenting any challenges faced and lessons learned.

- **Ongoing Monitoring:** Keep an eye on your HighLevel setup post-migration to catch and resolve any issues promptly.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896211/original/glUVBEs16TpPxruTsx3cTk0z_3qoq7BO_w.png?1727802636)

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
- [Jotform to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003692-jotform-to-highlevel-migration-guide-)
- [Typeform to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003331-typeform-to-highlevel-migration-guide-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003384-keap-to-highlevel-migration-guide-/hit)