---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough
category: articles
type: article
scraped: 2025-10-28T15:58:37.203Z
title:  Facebook Conversion Leads Walkthrough : LeadConnector 
status_code: 200
---

#  Facebook Conversion Leads Walkthrough : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Facebook](https://help.leadconnectorhq.com/support/solutions/folders/48000683642)

## Facebook Conversion Leads Walkthrough  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\# "Print this Article")

Modified on: Tue, 4 Jul, 2023 at 11:16 AM

* * *

Facebook Conversions API aims to connect your marketing data directly with Funnels and Workflows in LeadConnector and Facebook Meta that help optimize ad targeting, decrease cost per result, and measure outcomes. With Facebook Conversion API, you can collect the people who are more likely relevant audiences for running your ads for retargeting. It is a setup for your business to upload server events for your web traffic.

#### **Covered in this Article:**

#### [**What is the difference between Funnel Events and Lead Events in Facebook Conversion API?**](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#What-is-the-difference-between-Funnel-Events-and-Lead-Events-in-Facebook-Conversion-API?)

#### [**How to set up FB CAPI (Conversions API) Lead Event?**](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#How-to-set-up-FB-CAPI-(Conversions-API)-Lead-Event?)

#### [Step 1: Create an FB Pixel:](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#Step-1%3A-Create-an-FB-Pixel%3A)

#### [Step 2: Create two FB Conversions API Workflows.](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#Step-2%3A-Create-two-FB-Conversions-API-Workflows.)

#### [Workflow -1 to Create/Update Opportunity](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#Workflow--1-to-Create/Update-Opportunity)

#### [Workflow -2 to send Conversion data to FB Conversion API](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough\#Workflow--2-to-send-Conversion-data-to-FB-Conversion-API)

* * *

## **What is the difference between Funnel Events and Lead Events in Facebook Conversion API?**

In LeadConnector, we support two types of Facebook Conversion API.

**Funnel Events** \- The events are sent from a web server to record the events when the user visits the page, adds products to a cart, purchase, subscribe, submit an application, and more. To learn more about how to set up Funnel Event Pixel using FB CAPI, [please read this article.](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-?nocache=true)

**Lead Events** \- The LeadConnector CRM sends the events with how the Lead moves across the pipeline stages. For example, a Business creates a pipeline name Lead Generation. The leads are moving across the pipeline stages, from new leads to booked or abandoned ones. With Lead events, LeadConnector CRM sends the data to Facebook Conversion API - with CRM being the data source.

**Conversion Leads -**

Facebook conversion leads integration helps your Facebook lead ads Instant Forms optimize for the quality of leads instead of the volume of leads. When users submit the Instant form, their contact information is captured and synced in the CRM. This contact information can then be used to follow up with the leads to nurture them and move them further down the sales funnel. As each Lead moves through the sales funnel, the Conversion leads integration allows the advertiser to share the lead status with Meta, which allows Meta to optimize the lead ad for increased lead-to-sales Conversion. will enable

Guidelines to ensure your business is a good fit for the Conversion Leads integration:

- Use Facebook/Instagram Lead Ads (Instant Forms) \[Facebook form field mapping inside LeadConnector is used\]
- Ensure the 15-16 digit Meta Lead ID is mapped to your CRM
- Generate at least 250 leads per month
- Can upload data regularly at least once per day
- The lead stage you want to optimize for occurs within 28 days of leads being generated
- The lead stage you want to optimize for has a 1% - 40% conversion rate.

* * *

## **How to set up FB CAPI (Conversions API) Lead Event?**

### **Step 1: Create an FB Pixel:**

01. Please start creating a pixel by going to your [Facebook Business Manager (also called the Meta Business Suite)](http://business.facebook.com/) \> Head over to the left and then the **[Events Manager](https://www.facebook.com/events_manager2/)** tab.
02. Ensure you are connected to the correct Ad Account with all the required Access to that FB Page.

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)

03. Head over to the left sidebar and then click on **Connect Data Sources![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)**
04. Choose **CRM** in the options that show up, and then hit **Connect.**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284071479/original/xefmOQbqFZ5OIXwwokxwojclMFUPmsqMgg.png?1677521389)

05. **Please Note**

    ```
    If you are looking to send a Funnel Event using Facebook CAPI from LeadConnector for funnel events, select the web option here for recording the events.
    ```

06. It will show you a popup with Best Practices and a button to click **Next.** The Best Practices are Facebook suggestions on how to utilize this capability best. Click on **Next** to proceed. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284071842/original/h2oYqzg70vxwTCK0nhUngOl5xMlDckMaJg.png?1677521528)**
07. Click on **Create New Pixel** or Use an existing pixel from the list for collecting the data. Click **Continue** when the pixel details are added.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)

08. It will take you to your FB Events Manager> **Data Sources> Settings**.

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284082779/original/89nNGLDYELlJ8JafKn7S3j0a6pDsRUoLjA.png?1677526059)



    Hit **Continue** in front of **Choose Your CRM**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284077467/original/XbDBEbRH2zr1RvdA7bB2TIyLU185VR0o1w.png?1677523873)

09. Search for LeadConnector in the search bar, and choose LeadConnector from the dropdown:

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284078270/original/Duh85GlHa-WFW4YqBSbPJ-Dl-_HG5-B0BA.png?1677524212)

10. Select **Use a third-party partner to connect in a few steps (no coding required),** then choose **LeadConnector**. Then click on **Go to Partner** to proceed.

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284079246/original/iHOXn0pJLlidnUuDmTV7dyis5KpBkavXIA.png?1677524607)

    It will ask you to grant LeadConnector permission to connect with your Facebook Conversions API, and then your CRM should be connected.


**Please Note**

```
Prerequisite for Facebook CAPI - Lead Events
1. In CRM, please go to Settings > Integration > Check the Facebook account is connected with admin permissions. Please ensure that your FB Business Page, which you are an admin of and have all access to, [is integrated and the correct FB lead Form is mapped in your CRM account.](https://help.leadconnectorhq.com/support/solutions/articles/48001237082-facebook-lead-ad-integration-troubleshooting-guide)


2. In Facebook From Field Mapping, the form should be mapped correctly and the status should be enabled. Facebook form mapping has moved under location settings > integrations > Facebook Form Field Mapping. [Here is a list of the supported custom fields](https://help.leadconnectorhq.com/support/solutions/articles/48001237082-facebook-lead-ad-integration-troubleshooting-guide#Supported-custom-fields-when-using-Facebook-Lead-Ads%3A) which include multiple and single option custom fields as well.

```

### **Step 2: Create two FB Conversions API Workflows.**

**Please Note**

```
You need to create Two Workflows for this process to work effectively.

The first workflow focuses on generating leads and adding them to the correct pipeline with an Create/Update Opportunity Action. Once a lead is captured, it is important to ensure that it is properly tagged and categorized in the correct Pipeline and Stage so that it can be effectively managed and tracked as it moves through your sales funnel.

The second workflow focuses on triggering events for Facebook conversion leads. The goal of this workflow is to get fired off by a lead being moved to a specific pipeline stage and then a Facebook Conversions API workflow action pushing them to FB CAPI.

By combining these two workflows, you can create a comprehensive lead generation and management system that is optimized for Facebook conversion leads. This can help you generate more qualified leads, convert more customers, and grow your business over time.
```

01. To send a CRM event from your CRM, you need to create a workflow that does that. For now, you can navigate away from the **FB Events Manager> Data Sources> Settings (but keep it open in a tab in your browser)** and head over to your CRM account.

    #### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284081045/original/r6dBGPrK4R-SDzJJARAeMGvHU6SwuwwTog.png?1677525316)  **Workflow -1 to Create/Update Opportunity**



    Once the FB page is integrated correctly in sub-account settings, go to your **Automations> Workflows** **>Create a new Workflow.**



    **[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546010/original/2oXC501R-I5PNsXrie2JGBp-Q1DkpsUjgQ.png?1678462805)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546010/original/2oXC501R-I5PNsXrie2JGBp-Q1DkpsUjgQ.png?1678462805)**

    **[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546006/original/alvpeqMJi-F-GLEN3RRI2cPSXrld3Y5O_w.png?1678462804)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546006/original/alvpeqMJi-F-GLEN3RRI2cPSXrld3Y5O_w.png?1678462804)**



    **Add a new Workflow Trigger** in your Workflow and have it get fired off by **Facebook Lead Form Submitted**(if that is the first stage of your conversions flow)



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546193/original/QCoLEB86JllFreFJ5Diu7cdng-D99varng.png?1678462855)

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286546275/original/bIYLs5wFGFib8HHB4wVkTiCZ8LsAI4Ve5A.png?1678462874)You can add filters to choose which specific Facebook Lead Ad form to get the Workflow to be triggered by submissions to that form only:





    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284912934/original/heugdOwIkkCN3nHUQWQkykYEUrQ-gFxVFA.png?1677796877)

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284913014/original/9Bu9owdEH4ngwAV5KbUA_Nv7Cb8l49bevw.png?1677796929)And then add the action for Create or Update Opportunity.

    Specify the Pipeline and Pipeline Stage for this action.



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284912843/original/fcbO5T8hniNd4i6_tKAorIYMuq_hfXQF2w.png?1677796821)

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289810478/original/gxXyO-ikMbIEpVzT21sqwMTnLhg7m_1CPw.png?1680029574)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289810628/original/mhTqoClA-pn-nWwlJHm7NhAtejZptyDiBA.png?1680029620)







    The Opportunity Name can be defaulted to the Lead's Full Name by using the custom value dropper:

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289810842/original/6eLWKBPaElTUU6pwWKEHtpyCw7pikrndOg.png?1680029713)





    Toggle on Allow Duplicate Opportunities for this particular Workflow.



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286547801/original/2IRh7FSb8LVSD_YhLSiMnVX6P9O-GRYuMw.png?1678463117)**IMPORTANT**

02. ```
    Note - In Workflow Settings, please Allow Multiple contacts.



    ```

03. Make sure to save your actions and then save and Publish the Workflow.



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289811747/original/cNyMa27nnTKziuJvBIsKE44CNNVXEKSLBg.png?1680030064)



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286550117/original/MWJV_FDpKOSGuoKp2nAB4j22FW0GWZYCSw.png?1678463664)







    #### **Workflow -2 to send Conversion data to FB Conversion API**

    Create another workflow. Add the **Pipeline Stage Change** trigger and a **Facebook Conversion API** action.



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284913563/original/x6nVQu6rCGuqGi1eraGeNkm6anfS5SXrTA.png?1677797220)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284913625/original/HJDwiaFWG7nIwBKgA-a-n8ssIpyvfCFIJA.png?1677797259)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284913863/original/hG8Y6bkGqBXvPSiwT5BsymoFcATYK0P-eQ.png?1677797379)Choose **Lead Event** as the **Event Type**

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284913927/original/RYZECNsdo5FJRAqq5VuGqI0oVmphuPGuMQ.png?1677797416)

    Make sure to save your actions and then save and Publish the Workflow.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289809267/original/NJE25vxjbsGs1W81dAPerxmifAHywBIwaQ.png?1680029104)





    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286550117/original/MWJV_FDpKOSGuoKp2nAB4j22FW0GWZYCSw.png?1678463664)
04. Navigate to your **Facebook Events Manager> Data Sources> Settings> Scroll down and click on Generate Access Token.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284083011/original/RwfRWhgZecEtx5n_8bJ4KJoI7xDElidJxg.png?1677526170)**

    Copy the generated Access Token.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284083404/original/bHK53D95m_c3ncnPCMPnmMRzFZwGImFefA.png?1677526360)
05. Paste it in the **Access Token** field of your Workflow's FB Conversion API Action.

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914111/original/9VLCelzYHWuoWc60Vc70ngi9Fz6FDjHZOg.png?1677797522)

06. Navigate to your **Facebook Events Manager> Data Sources> Settings> Scroll down and copy your Pixel ID.**

    **[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284083951/original/E5sstzualqyZTzkOPdRidoKqw9sAFz0YaQ.png?1677526654)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284083951/original/E5sstzualqyZTzkOPdRidoKqw9sAFz0YaQ.png?1677526654)**
07. Paste the **Pixel ID** in the **Pixel ID** field in your Workflow's **FB Conversion API Action.**

    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914151/original/XROx-MtmbjcQ-0iQe0z1L-5Ba3AxacUTzg.png?1677797557)**
08. Fill in the **Stage Name;** it should accurately represent your Pipeline and Pipeline Stage name for better reporting. Select it using the tag icon at the end to add the custom value of the opportunity pipeline and stages. Save the Action, save and Publish the Workflow

    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914422/original/elCtHmZ8BT5Q3vXnUtgdhsmSHZfrDNYm5w.png?1677797736)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914455/original/gOIy3oLHfVqEUAzKmxvBnlmNly_2NXYgww.png?1677797768)





    Save the Action, **Save** and **Publish** the Workflow.



    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289807621/original/rWwzj05pUY2_7sFeDhLxXsiVCoXKKRpPKg.png?1680028476)**IMPORTANT**

09. ```
    Note - In Workflow Settings, please enable Allow Multiple.



    ```

10. You can test your Workflow using the [Lead Ads Test Tool.](https://developers.facebook.com/tools/lead-ads-testing) Choose the correct Page and Lead Ad Form, then **Create a Lead.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284085774/original/zCWJuZ-RgVmwqiVyUGkYg9sBskBWo0Oh0Q.png?1677527436)**

    For more details on how to use the Lead Ads Testing Tool, please [click here.](https://help.leadconnectorhq.com/support/solutions/articles/48001237082-facebook-lead-ad-integration-troubleshooting-guide#Why-are-my-Lead-Ads-not-making-it-into-my-Sub-Account?)


The Event should be picked up by your Events Manager, who is actively waiting for Events sent by your Workflow. It takes up to a day to successfully pick up an event sent by your Workflow.

Once the Event is sent from the Lead Ads Test Tool, please go to Opportunity Pipeline and move the dummy Facebook lead to another stage configured in the Workflow. Once this is completed, check the workflow status as executed and the conversion API event in Event Manager.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289807416/original/lPWKPzVG8LSj7hT4URdCTXBJsQAya3ue-Q.png?1680028394)

11\. Return to the “Settings” tab in Events Manager to track the progress of the Conversion Leads integration.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001237083-facebook-conversion-leads-walkthrough*  
*Generated on: 2025-10-28T15:58:37.203Z*
