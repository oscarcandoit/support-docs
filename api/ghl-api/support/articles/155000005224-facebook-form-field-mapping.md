---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping
category: articles
type: article
scraped: 2025-10-28T16:23:22.871Z
title:  Facebook form field mapping : LeadConnector 
status_code: 200
---

#  Facebook form field mapping : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Facebook](https://help.leadconnectorhq.com/support/solutions/folders/48000683642)

## Facebook form field mapping  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping\# "Print this Article")

Modified on: Tue, 22 Jul, 2025 at 9:59 AM

* * *

# Overview:

This guide explains how to map fields from your connected **Facebook Lead Ads forms** to your CRM contact fields. Field mapping ensures that data submitted via your Facebook forms (name, phone, email, etc.) flows correctly into your contact records, enabling seamless follow-up and automation.

**TABLE OF CONTENTS**

- [Overview](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping#Overview%3A)
- [How to map forms](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping#How-to-map-forms%3A)
- [How to create a custom field](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping#How-to-create-a-custom-field%3A)
- [Additional support documents related to Facebook Integration](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping#Additional-support-documents-related-to-Facebook-Integration%3A)

# How to map forms:

Step 1. Connect Facebook integration with CRM. (refer to <support doc> to understand in depth creation flow).

Step 2. Once FB <-> CRM integration is setup, you would be required to map the facebook lead form's field with relevant fields on CRM's end. (settings >> Integrations >> Form field Mapping)

Step 3. The **standard fields** are auto-mapped, such as:

- `full_name` → Contact Name

- `email` → Email

- `phone_number` → Phone


For **custom fields**:

- You can create **Contact Custom Fields** in your CRM.

- Then manually map those Facebook form fields to the appropriate custom fields.


Step 4. Once mapped, the status will be shown as active with toggle button enabled and Map fields status as " **Edit Fields**"

P.S. The field type in facebook form should match the field type in CRM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437611/original/ILkW_ECp9M5dJgSexjcr7E5DqJITDXoLUQ.png?1746970720)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437656/original/av5GV4rystHg1X1ODRcmts4DV2yuHI24zQ.png?1746970879)

# How to create a custom field:

1. Navigate to Settings >> Custom Fields

2. Click “ **\+ Add Custom Field**”

   - Choose the object type (Contacts for this case)

   - Enter the field name, type (text, dropdown, checkbox, date, etc.), and optionally group it under a custom section.
3. Save the Custom Field

   - Once saved, the custom field will be available throughout the CRM where that entity type is used.

- Supported custom fields when using Facebook Lead Ads:

- TEXT

- LARGE\_TEXT

- NUMERICAL

- PHONE

- MONETARY

- DATE

- DROPDOWN (single)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437709/original/vTC81u865ClCs_2pNIvw8ANDfebVsXT0Ag.png?1746971076)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046437711/original/cP8ciDJuHM9ShhkSrIzLAC9NumIzYyOXJw.png?1746971094)

```
We recommend not to update the field names in Facebook forms under settings in FB form creation, as they may impact mapping at LC end:

```

# Additional support documents related to Facebook Integration:

- [Facebook multi page Setup](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide)
- [Facebook Page selection guide](https://help.leadconnectorhq.com/support/solutions/articles/155000005228-page-selection-guide)
- [Facebook Multi page troubleshoot](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot)
- [Facebook / Instagram setup and troubleshoot](https://help.leadconnectorhq.com/support/solutions/articles/155000005226-messaging-setup-troubleshoot)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping*  
*Generated on: 2025-10-28T16:23:22.871Z*
