---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action
category: articles
type: article
scraped: 2025-10-28T16:25:23.207Z
title:  How to setup Google ad conversion action : LeadConnector 
status_code: 200
---

#  How to setup Google ad conversion action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Workflow](https://help.leadconnectorhq.com/support/solutions/folders/48000684508)

## How to setup Google ad conversion action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action\# "Print this Article")

Modified on: Tue, 10 Jun, 2025 at 12:48 AM

* * *

Google AdWords has a feature called conversion action. This allows you to track the success of your ads and optimise them accordingly. It’s an essential tool for advertisers who want to maximise their return on investment (ROI).

A conversion can be a specific customer action you've defined as valuable to your business, such as an online purchase or phone call. Conversion tracking shows you what happens after a customer interacts with your ads -- whether they purchased a product, signed up for your newsletter, and called your business.

In this article, we will show you how to set up conversion tracking in Google AdWords action in workflows so that you can start optimising your campaigns.

* * *

## **Note before getting started**

```
1. For the most effective reporting, please make sure to set up Google Ad reporting.

2. Please check that you have integrated the correct MCC id and Google Id to the location and that the email associated has the highest permissions (admin).

3. UTM Tracking template is added to Google Ad Account, in Account settings or campaign settings or ad level setup. (It can ONLY be present in one place)

```

* * *

## **TABLE OF CONTENTS**

- [Note before getting started](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Note-before-getting-started%C2%A0)

- [How to set up the Google Ad Conversion Action](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#How-to-set-up-the-Google-Ad-Conversion-Action)
- [Step 1: Head into your Google Adwords account and click on the Goals section and click on Conversions - Summary.](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-1%3A%C2%A0Head-into-your-Google-Adwords-account-and-click-on-the-Goals%C2%A0section-and-click%C2%A0on%C2%A0Conversions---Summary.)
- [Step 2: Select the Conversion Goal](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-2%3A-Select-the-Conversion-Goal)
- [Step 3: Define the Conversion settings](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-3%3A-Define-the-Conversion-settings)
- [Step 4: Give this Conversion a name](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-4%3A%C2%A0Give-this-Conversion-a-name)
- [Step 5: Select the value for your conversion](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-5%3A%C2%A0Select-the-value-for-your-conversion%C2%A0)
- [Step 6: Setup the conversion window and attribution model](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-6%3A%C2%A0Setup-the-conversion-window-and-attribution-model%C2%A0)
- [Step 7: Click on Save and continue](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-7%3A%C2%A0Click-on-Save-and-continue)
- [Step 8: Now let's create the Workflow in the System](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Step-8%3A%C2%A0Now-let's-create-the-Workflow-in-the-System)


  - [Form Submission/Order Purchases/Survey Submission](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Form-Submission/Order-Purchases/Survey-Submission)
  - [Number Pool Calling](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Number-Pool-Calling)
  - [Chat Widget](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Chat-Widget)

  - [Form Submission/Order Purchases/Survey Submission](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Form-Submission/Order-Purchases/Survey-Submission-1)
  - [Number Pool Calling](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Number-Pool-Calling-2)
  - [Chat Widget](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Chat-Widget-3)
- [Custom Mapping](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Custom-Mapping)
- [Troubleshooting⁣](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Troubleshooting%E2%81%A3)

- [I have set up my conversions now how do I know it's working? ⁣](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#I-have-set-up-my-conversions-now-how-do-I-know-it's-working?-%E2%81%A3)
- [Where can I see my conversions?⁣](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Where-can-I-see-my-conversions?%E2%81%A3)
- [Does this work with all triggers?⁣](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Does-this-work-with-all-triggers?%E2%81%A3)
  - [Form Submission/Order Purchases/Survey Submission](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Form-Submission/Order-Purchases/Survey-Submission-4)
  - [Number Pool Calling](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Number-Pool-Calling-5)
  - [Chat Widget](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action#Chat-Widget-6)

* * *

# **How to set up the Google Ad Conversion Action**

## **Step 1:** Head into your Google Adwords account and click on the **Goals** section and clickon **Conversions -** **Summary.**

Click the " **\+ Create Conversion Action"**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970392/original/V7UJ_rg6G7fKrz-iN0wdh-IGAQ3nm86eNg.png?1749533987)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970392/original/V7UJ_rg6G7fKrz-iN0wdh-IGAQ3nm86eNg.png?1749533987)

**OR**

Click on the 'Create' button on top left and select ' **Conversion action**' to land on the same page as above to create a new conversion action.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970389/original/-OCLo5v5gaLJ6cr_vmY_6sgj7kWCZWOEog.png?1749533986)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970389/original/-OCLo5v5gaLJ6cr_vmY_6sgj7kWCZWOEog.png?1749533986)

To start tracking conversions, we need to choose the **Conversions offline** option.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970401/original/E5EL8TgGvfbt0fogIkfr9iOApY_sG3cFWg.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970401/original/E5EL8TgGvfbt0fogIkfr9iOApY_sG3cFWg.jpeg?1749533990)

Click on **Add data source** to add an offline data source and select 'Skip this step and set up a data source later' :

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970395/original/ixCfxqtobY7Vr_ybYvZVgPtCVHgo9D3IOA.jpeg?1749533989)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970395/original/ixCfxqtobY7Vr_ybYvZVgPtCVHgo9D3IOA.jpeg?1749533989)

* * *

## **Step 2**: Select the **Conversion Goal**

This step is to define, " **What do you want to measure?**" \> Select Converted lead:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970393/original/Ci9hof1sAKdotXr68jGZlGkCFB0yUQYCQg.jpeg?1749533987)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970393/original/Ci9hof1sAKdotXr68jGZlGkCFB0yUQYCQg.jpeg?1749533987)

Post selection of the conversion category, you need to add an event to the category:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970394/original/yzFhwTwWAoj3ovdZwh3K7ALcWUsnkVU4XQ.jpeg?1749533987)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970394/original/yzFhwTwWAoj3ovdZwh3K7ALcWUsnkVU4XQ.jpeg?1749533987)

Select " **Offline data sources**":

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970583/original/pP2i1rCrafsyRFevFpPVcA6vfpwyDsrF6A.png?1749534318)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970398/original/jlfKulny2aBU7LHFLFMIgFPQqa9dQs4cdQ.jpeg?1749533989)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970398/original/jlfKulny2aBU7LHFLFMIgFPQqa9dQs4cdQ.jpeg?1749533989)

* * *

## **Step 3**: Define the **Conversion settings**

Click on ' **Conversion source**' **settings** to define the details.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970402/original/UNTZJQxW56z11_8hbvj0Tttwpx0jOZy1kQ.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970402/original/UNTZJQxW56z11_8hbvj0Tttwpx0jOZy1kQ.jpeg?1749533990)

This section shows the action optimisation which shows the 'Conversion Goal' selected in the earlier steps. Let the radio button be **'** **Primary action used for bidding optimisation'** as the selected choice:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970408/original/PJ1Np66afHVXIvj27G6boN7Xxjz8gMaryg.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970408/original/PJ1Np66afHVXIvj27G6boN7Xxjz8gMaryg.jpeg?1749533990)

* * *

## **Step 4:** **Give this Conversion a name**

Please type in the name of your conversion. In this example, we are calling it "**Conversion Test**".

**Note:**

```
Once you have completed this step please copy and paste your conversion name somewhere close. This will be used in a workflow trigger on the last step of this guide.
```

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970396/original/FxvKYb0Z0FYNTMdLvh0e2dgo2Dw08tf4mg.jpeg?1749533989)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970396/original/FxvKYb0Z0FYNTMdLvh0e2dgo2Dw08tf4mg.jpeg?1749533989)

* * *

## **Step 5:** **Select the value for your conversion**

Select from: same, different, or don't use a value... **[More info](https://support.google.com/google-ads/answer/3419241?hl=en)**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970397/original/ZdfkxC4sw6ENH0yIhKQtuj1xAXYldGUZRQ.png?1749533989)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970397/original/ZdfkxC4sw6ENH0yIhKQtuj1xAXYldGUZRQ.png?1749533989)

Select the count, we recommend always **choosing option "Every"**.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970400/original/5v5RRk2ODJbyJA2fdSSYRFk6cnKZoFoKmg.png?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970400/original/5v5RRk2ODJbyJA2fdSSYRFk6cnKZoFoKmg.png?1749533990)

* * *

## **Step 6:** **Setup the conversion window and attribution model**

1\. Set the _click-through conversion window_ to " **90 days"**

2\. Set the Engaged-view conversion window to google recommended, ' **3 days**'

3\. Next, set the _Attribution model_ as " **Last Click**" or " **Data Driven**" (recommended).

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970399/original/mGGbUKMJC0U-sn4aKXe6X7o4Toi6iopJRA.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970399/original/mGGbUKMJC0U-sn4aKXe6X7o4Toi6iopJRA.jpeg?1749533990)

4\. Click on **"Done"** and the conversion settings are defined and saved.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970409/original/WTiJMNReq__3Fa8RAQuIhE2msY_sV_6ibw.jpeg?1749533991)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970409/original/WTiJMNReq__3Fa8RAQuIhE2msY_sV_6ibw.jpeg?1749533991)

## **Step 7:** Click on **Save and continue**

**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970404/original/GDGI7NkhgeQQegn0WGpcjSMP_v-enKsAHw.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970404/original/GDGI7NkhgeQQegn0WGpcjSMP_v-enKsAHw.jpeg?1749533990)**

Click on **Finish** to conclude the conversion creation process.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970403/original/GC3VB_mu9-fvx6xCVXaueobz9TmBoMxsNA.jpeg?1749533990)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970403/original/GC3VB_mu9-fvx6xCVXaueobz9TmBoMxsNA.jpeg?1749533990)

* * *

## **Step 8:** **Now let's create the Workflow in the System**

Workflow can be created for Form Submission, Order Purchases, Number Pool Calling, Survey Submission, and Chat Widget.

- #### [Form Submission/Order Purchases/Survey Submission](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Form-Submission/Order-Purchases/Survey-Submission)

- #### [Number Pool Calling](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Number-Pool-Calling)

- #### [Chat Widget](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Chat-Widget)


**Please Note:**

```
Every time you create a new campaign in Google, you will need to select the conversion action which you just created as your Google Adwords option in your new workflow action.

It will take approximately 5 minutes once we receive one contact with UTM source and gclid, wbraid or gbraid to get the list populated in workflow trigger as well as in Google Adwords Conversion.
```

### **Form Submission/Order Purchases/Survey Submission**

- Create the Workflow
- Select the trigger - **Form Submission, Order Form Submission,** or **Survey Submission**
- Once the trigger is selected, add the **filters** with which the Form/ Order Form/ Survey and save the trigger details
- Click on the plus icon action and select the " **A** **dd to Google Ads**" event and select the conversion action from the dropdown which was created on Google.
- Define the **Currency** and **Conversion Value** for the conversion.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970391/original/zYeqxBZXi4cepI7Db3UzqCiGu8C9wU9pgw.jpeg?1749533986)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970391/original/zYeqxBZXi4cepI7Db3UzqCiGu8C9wU9pgw.jpeg?1749533986)

- Please click "Save" and "Publish" your workflow.

### **Number Pool Calling**

- Create the Workflow
- Select the trigger - Call Status
- Once the trigger is selected, add the filters with **Call Direction** > **Incoming and Pool Number** > **Select Pool Number**.
- \[Please add the pool number script on the funnel/website in header settings\]
- Click on the plus icon action and select the " **add to Google Adwords**" event and select the conversion action from the dropdown which was created on Google.
- Define the **Currency** and **Conversion Value** for the conversion.
- Please click "Save" and "Publish" your workflow.

### **Chat Widget**

- Create the Workflow
- Select the trigger - **Customer Replied Trigger**
- Click on the plus icon action and select the " **add to Google Adwords**" event and select the conversion action from the dropdown which was created on Google.
- Define the **Currency** and **Conversion Value** for the conversion.
- Please click "Save" and "Publish" your workflow.

* * *

# **Custom Mapping**

Previously, the system automatically mapped Google Click Identifier (GCLID), GBRAID, and WBRAID for conversion tracking. With the introduction of this new option, users can now custom map these parameters based on their specific use case.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970560/original/koTrF0hmVzeD8qYQirGyBNXucPLXO0kZ4Q.jpeg?1749534269)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047970560/original/koTrF0hmVzeD8qYQirGyBNXucPLXO0kZ4Q.jpeg?1749534269)

**How It Works:**

- By default, custom mapping is disabled.
- Users can toggle it on to enable custom mapping.
- When enabled, users can map GCLID, GBRAID, and WBRAID to their own custom values.
- If custom mapping fields are provided, they will take priority over system defaults.
- If left empty, the system will continue using its default internal values.

* * *

# **Troubleshooting⁣**

⁣

### **I have set up my conversions now how do I know it's working? ⁣**

Currently, there is no way to test this event. You can always check your workflow action and check out the history tab⁣. It should show the execution for Google Adword Action.

⁣⁣

### **Where can I see my conversions?⁣**

It will take approximately 5 minutes to get the list populated in trigger/workflow as well as in Google AdWords Conversion. ⁣Within the 15 minutes window, you can check the workflow history.⁣

### **Does this work with all triggers?⁣**

It **only works** for Form Submission, Order Purchase, Number Pool Calling, Survey Submission, and Chat Widget.

- #### [Form Submission/Order Purchases/Survey Submission](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Form-Submission/Order-Purchases/Survey-Submission)

- #### [Number Pool Calling](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Number-Pool-Calling)

- #### [Chat Widget](https://gohighlevelassist.freshdesk.com/a/solutions/articles/48001220947/edit?portalId=48000045315\#Chat-Widget)


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005483-how-to-setup-google-ad-conversion-action*  
*Generated on: 2025-10-28T16:25:23.207Z*
