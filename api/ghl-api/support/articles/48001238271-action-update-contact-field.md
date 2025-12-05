---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field
category: articles
type: article
scraped: 2025-10-28T15:59:02.455Z
title:  Action - Update Contact Field : LeadConnector 
status_code: 200
---

#  Action - Update Contact Field : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## Action - Update Contact Field  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\# "Print this Article")

Modified on: Tue, 25 Apr, 2023 at 10:27 AM

* * *

This article explains workflows' "Update Contact Field" and "Clear Field Data" actions. The former allows updating a contact field with a new value, either static or dynamic, while the latter clears the existing value of a custom contact field. Both actions are currently supported for Contact Custom Fields only.

#### **Covered in this Article**

#### [**What is the Update Contact Field Action in Workflows?**](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#What-is-the-Update-Contact-Field-Action-in-Workflows?)

#### [What are some good usage cases for this?](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#What-are-some-good-usage-cases-for-this?)

#### [**How to use this action?**](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#How-to-use-this-action?)

#### [Select Update/Clear Field Data](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#Select-Update/Clear-Field-Data)

#### [Update Field Data](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#Update-Field-Data)

#### [Clear Field Data](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field\#Clear-Field-Data)

* * *

## **What is the Update Contact Field Action in Workflows?**

The update contact field action in workflows allows you to update the value of a specific field for a contact. With this action, you can specify a new value for the field, and the contact's existing field value will be replaced with the new value. However, with the new feature, you can also clear the field, i.e., empty the input field or reset it to the default value.

**Please Note:**

```
It's important to note that the clear field data feature currently supports only the Contact Custom Fields.
```

You can use this action to update or clear multiple fields with static or custom values anywhere in the workflow. The fields can be dynamically updated in workflows wherever they are being used.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294379946/original/7uOQh_K68fa9-BSrLtJLo_Xiz2Pyqqu9Rg.png?1682435188)

## **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294379954/original/fALHu-xTp-pwoBYc4x-BSr8hw9V5pv96eg.jpeg?1682435190)**

### **What are some good usage cases for this?**

Here are some excellent usage cases for the "Update Contact Field" and "Clear Field Data" actions in workflows:

**Lead Management:** You can use the "Update Contact Field" action to update the lead source field for a contact based on the referral source. This will help you to understand where your leads are coming from and optimize your marketing efforts accordingly. You can also use the "Clear Field Data" action to remove outdated information from your lead records.

**Personalization:** You can use the "Update Contact Field" action to personalize your email marketing campaigns by updating contact fields such as first or last name. This will help to increase engagement and conversion rates. You can also use the "Clear Field Data" action to remove incorrect or outdated information from contact fields.

**Sales Pipeline Management:** You can use the "Update Contact Field" action to update the stage of a contact in your sales pipeline based on their progress. This will help you to track and manage your sales pipeline more effectively. You can also use the "Clear Field Data" action to remove contacts from your pipeline if they are no longer a good fit.

**Custom Integrations:** You can use the "Update Contact Field" action to update custom contact fields based on data from other integrations. For example, you can use Zapier to update a custom field with data from a Google Sheet or form submission on your website. You can also use the "Clear Field Data" action to reset custom fields based on specific triggers or conditions.

* * *

## **How to use this action?**

### **Select Update/Clear Field Data**

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294379950/original/yMFL3kKEwjtxlegk1_tcUtduPEaEbYbMHA.png?1682435189)

### **Update Field Data**

Updates the selected field with the provided value.

The "Update Contact Field" action in workflows allows you to update the value of a specific field for a contact. This feature is useful when updating a contact field with a new value, such as a phone number, email address, or custom field.

To use the "Update Contact Field" action, you must add it to your workflow, select the contact field you want to update and specify the new value you want to set for the field. You can update the field with a static value, a fixed value that you specify in the workflow, or a custom value, which is a value dynamically generated based on other data in your workflow.

For example, if you have a custom field called "Lead Source," you can use the "Update Contact Field" action to update the value of this field for a specific contact. You might want to update the field with a static value like "Website," indicating that the lead came from your website. Alternatively, you might want to update the field with a custom value that is dynamically generated based on the referral source of the lead.

Once the "Update Contact Field" action is executed in the workflow, the contact's existing field value will be replaced with the new value specified in the action. It's important to note that you can use this action to update multiple fields with static or custom values anywhere in the workflow.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294379953/original/Y3ZWm6EgjBJ7SzWb6P5n84l2UDCYtxm0Qw.png?1682435190)

### **Clear Field Data**

Resets the selected field to the default value (clears the data).

Clearing contact fields is a feature that allows you to remove the existing value of a contact field, effectively resetting it to an empty value. This feature is useful when removing a previously entered value from a contact field. When you use the clear field data feature, the contact field value is set to NULL or empty.

**Please Note:**

```
It's important to note that the clear field data feature currently supports only the Contact Custom FieldsThis means you can use only clear custom fields you've created for your contacts, not standard fields like first name, last name, or email.
```

To clear a contact field in a workflow, add the "Update Contact Field" action, select the contact field you want to clear and add a filter for which field you want to clear. Once the workflow is executed, the contact field will be cleared of its previous value and set to an empty value.

It's important to use this feature with care, as clearing a contact field may result in the loss of valuable data. Therefore, it's recommended to use this feature only when necessary and ensure that you have a data backup before clearing any contact field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294379952/original/R_l1ysiuuZWmlIXCv-K1g1Qsx1bQjS88Zg.png?1682435189)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001238271-action-update-contact-field*  
*Generated on: 2025-10-28T15:59:02.455Z*
