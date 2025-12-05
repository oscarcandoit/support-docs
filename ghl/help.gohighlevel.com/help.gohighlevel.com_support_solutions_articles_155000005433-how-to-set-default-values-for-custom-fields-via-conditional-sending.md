---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending"
title: " How to Set Default Values for Custom Fields Via Conditional Sending : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Campaign Settings/Functionalities](https://help.gohighlevel.com/support/solutions/folders/155000001355)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Campaign Settings/Functionalities](https://help.gohighlevel.com/support/solutions/folders/155000001355)
6. How to Set Default Values for Custom Fields Via Condition...

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

# How to Set Default Values for Custom Fields Via Conditional Sending

Modified on: Tue, 29 Jul, 2025 at 1:04 PM

Personalise your emails with contact details—like name, company, or location—to boost engagement. If a custom field (such as First Name) is empty, Conditional Sending lets you display a default value, ensuring your emails always look polished.

**TABLE OF CONTENTS**

- [What Is Conditional Sending?](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#What-Is-Conditional-Sending?)
- [Benefits](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#Benefits)
- [Step-by-Step Guide](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#Step-by-Step-Guide)
- [Limitations](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#Limitations)
- [Tips](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#Tips)
- [FAQ](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending#FAQ)

### **What Is Conditional Sending?**

**Conditional Sending lets you show or hide content blocks based on your contacts’ custom field data. This means you can tailor email content to each recipient and display a default value if a field (like First Name) isn’t filled in.**

### **Benefits**

- **Professionalism:** Avoids blanks or missing information in greetings and messages.

- **Personalisation:** Ensures each recipient sees a relevant, friendly greeting—even if some data is missing.

- **Consistency:** Maintains a uniform look and feel across all emails, regardless of data quality.

- **Higher Engagement:** Personalised emails are more likely to be opened and read.


## **Step-by-Step Guide**

**Example Goal:**

Show "Dear {{contact.first\_name}}," if First Name is available, or "Dear Customer," if not.

1. **Enable Conditional Sending**

Toggle on Conditional Sending in your content block’s sidebar.
2. **Set Up the Personalised Greeting**
   - Add a text block:

     `Dear {{contact.first_name}},`

   - Under Set your conditions:

     - Select a custom field: "First Name"

     - Condition: "Is Not"

     - Value: (leave blank)
   - This block displays only if First Name is not empty.
3. **Set Up the Default Greeting**
   - Add another text block:

     `Dear Customer,`

   - Under Set your conditions:

     - Select a custom field: "First Name"

     - Condition: "Is"

     - Value: (leave blank)
   - This block displays only if First Name is empty.
4. **Preview and Test**

Use the preview feature to see how your email appears for contacts with and without a First Name.

### **Limitations**

- Only one custom value can be used under Conditional Sending per content block.

- You cannot apply multiple conditional settings for the same field within a single block or section.


### **Tips**

- Always preview with test contacts to ensure your conditions work.
- Use clear, friendly default values for a professional tone.

### **FAQ**

**Q1:** **Can I use Conditional Sending for fields other than First Name?**

**A:** Yes, this method works for any custom field you add.

**Q2:** **Can I use multiple custom fields in one block?**

**A:** No, only one custom value per content block.

**Q3:** **What if I leave "Enter a value" blank?**

**A:** The condition checks for empty or non-empty fields, letting you show or hide content accordingly.

**Q4:** **Can I set any default value?**

**A:** Yes, customize the default message to fit your brand.

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

- [How to Pause or Cancel a Scheduled Email Campaign](https://help.gohighlevel.com/support/solutions/articles/155000003462-how-to-pause-or-cancel-a-scheduled-email-campaign)
- [How to Schedule Batch Email Campaign(s)?](https://help.gohighlevel.com/support/solutions/articles/48001215379-how-to-schedule-batch-email-campaign-s-)
- [Smart Send: Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006628-smart-send-email-marketing-campaigns)
- [Understanding Email Campaign Statuses](https://help.gohighlevel.com/support/solutions/articles/155000006659-understanding-email-campaign-statuses)
- [Smart Send: Best Time Recommendation in Email Marketing Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000006754-smart-send-best-time-recommendation-in-email-marketing-campaigns)
- [Resend to un-opened : Best Practices and Guide](https://help.gohighlevel.com/support/solutions/articles/155000002088-resend-to-un-opened-best-practices-and-guide)

## Related Articles

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/articles/155000004390-overview-of-merge-fields-custom-variables)
- [How To Attach Files to MMS Using Custom Values](https://help.gohighlevel.com/support/solutions/articles/48001218845-how-to-attach-files-to-mms-using-custom-values)
- [Conditional Logic in Surveys (v2)](https://help.gohighlevel.com/support/solutions/articles/155000005564-conditional-logic-in-surveys-v2-)
- [Guide to Date/Time Formatter Workflow Action](https://help.gohighlevel.com/support/solutions/articles/48001238249-guide-to-date-time-formatter-workflow-action)
- [Business Profile Settings - Business Physical Address](https://help.gohighlevel.com/support/solutions/articles/155000006186-business-profile-settings-business-physical-address)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending/hit)