---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-
category: articles
type: article
scraped: 2025-10-28T15:58:39.994Z
title:  How to set up a Funnel Event Pixel for Facebook Conversion API? : LeadConnector 
status_code: 200
---

#  How to set up a Funnel Event Pixel for Facebook Conversion API? : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Facebook](https://help.leadconnectorhq.com/support/solutions/folders/48000683642)

## How to set up a Funnel Event Pixel for Facebook Conversion API?  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-\# "Print this Article")

Modified on: Sun, 9 Apr, 2023 at 8:15 AM

* * *

Facebook Conversions API (or CAPI) is designed to help businesses deliver personalized advertising experiences to customers and audiences, all while maintaining data privacy. This tool lets you send web events directly to Facebook from their respective servers. If you use a Facebook Pixel to track events for your ads, you will want to add the Pixel code to your funnel and funnel steps.

#### **Covered in this Article:**

#### [**How to set up FB CAPI (Conversions API) Funnel Event?**](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-\#How-to-set-up-FB-CAPI-(Conversions-API)-Funnel-Event?)

#### [Step 1: Create an FB Pixel:](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-\#Step-1%3A-Create-an-FB-Pixel%3A)

#### [Step 2: Apply Pixel Code to your Funnel/Website.](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-\#Step-2%3A-Apply-Pixel-Code-to-your-Funnel/Website.)

#### [Step 3: Create a Facebook Conversions API Workflow.](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-\#Step-3%3A-Create-a-Facebook-Conversions-API-Workflow.)

* * *

## **How to set up FB CAPI (Conversions API) Funnel Event?**

### **Step 1: Create an FB Pixel:**

1. Please start creating a pixel by going to your[Facebook Business Manager (also known as Meta Business Suite)](http://business.facebook.com/)\> Head over to the left and then the **[Events Manager](https://www.facebook.com/events_manager2/)** tab.
2. Ensure you are connected to the correct Ad Account with all the required Access to that FB Page.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)

3. Head over to the left sidebar and then click on **Connect Data Sources![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)**.

4. Choose **Web** in the options that show up, and then hit **Connect.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289557644/original/GTaZyRFdyaCPDbCENvgkjsLNIbPtuwv6jQ.png?1679940769)

5. If you already have pixels, it will ask you to choose between them or create a new pixel. Click on **Create New Pixel** or Use an existing pixel from the list for collecting the data. Click **Continue** when the pixel details are added.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558054/original/bJeFGIeh-ZoGTd2Tb-3fON8lBJOKZVrzmw.png?1679940937)

6. It will then ask you to provide the URL of the CRM's website/funnel where you will add your pixel code.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558739/original/PAF__5OhEXarHQx5f1VRZQ0TZlm-vIbsgw.png?1679941181)

Please add in the domain of the funnel/website where you will later add in the pixel code and then click on **Check.**

If your domain is eligible for this process, then you will see a green checkmark in the domain field., you

Once you see the green checkmark, click on the **Next** button that appears instead of the **Check** button.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289812085/original/1OsNUUNWTNoFjdevx11Mf7oDoz2ox2GMkA.png?1680030198)

        7\. It will then show you a popup asking you to **Choose how to connect your website.**

Choose the first option, **Conversions API and Meta Pixel.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289559747/original/6mnITv2Y1gAEl16BTbAvzJC_bg-RNhP2Kw.png?1679941596)

8\. It will then ask how you want to **Set up Conversions API to connect website activity.** Choose **Set up Manually.**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289560757/original/J9yG5J56U7xVPuNoTACRDlxOWCnLYzOgdg.png?1679941990)

9\. It will take you to the **Overview** tab for the **Manual Implementation** process. Read through the instructions and then click on **Continue.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289561059/original/vwU_j-bFr506Ty7spDAS3Ri5k9mpIuVwvw.png?1679942107)**

10\. You will then be taken to the **Select Events** tab. You will see a dropdown to choose which Industry you are setting up this Pixel for. Choose the one most relevant to your client.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289561652/original/YrzW4_QmhbNTe6BAGbJW-Heg1DQTy1IztQ.png?1679942343)

Then it would be best to choose the events you want to send to Facebook. Select all the events you wish to send to Facebook, and click on **Continue**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289562013/original/6ID5tq4lZiMfYoVObP_1T5r7jdNZ1j4jEw.png?1679942506)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289562298/original/AhW4mJSwW61aUiEiX1tojQrWdOoawChg7A.png?1679942600)

11\. You will be taken to the **Select Parameters** tab, where a few **Event Detail Parameters** will already be checked. Checkmark **Event ID,** as the Best Practices tooltip recommends it to the right.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289563694/original/gYor1B88KWEK2N6OXl5r8te5YZXFNuRzJA.png?1679943161)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289563994/original/Xs4YCd541AsuyT5VWPpzh4R-YDCQlb6pJQ.png?1679943287)

12\. Then, under **Customer Information Parameters**, you will see that **Client User Agent** will already be marked for you. You must check the **Client's IP Address, First Name, Client ID, Email, Business ID, and Last Name.**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289565394/original/W38f_IZGBu8E7B4yoOrESs3UyMy1ueMbFQ.png?1679943902)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289565394/original/W38f_IZGBu8E7B4yoOrESs3UyMy1ueMbFQ.png?1679943902)

**Please Note**

```
You need to atleast select these same checkboxes for every single event that you added to this Pixel.
```

13\. It will then ask you to **review the Setup** and check all the Parameters you have chosen for each **Event one last time.** Once you are sure everything is set up as you need it to be, click on **Continue**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289565822/original/ldzrxwho1aJQfbX49uqcqbQQkyX6N5HbQA.png?1679944116)**

14\. In the next step, click on **Continue Pixel Setup.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289566092/original/cueYbcPRa5eCXTyVRThR_YohSFiotB3Rig.png?1679944253)**

15\. You will be shown a popup to **Connect website activity using Pixel; choose** **Install Code Manually**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289566456/original/Cad-ElQHFg-5k9NH7iuaehA6Sjt52lb5lQ.png?1679944400)

16\. Click on **Copy Code** to copy the pixel code.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289568071/original/IBt_B9L9qEi7EGsxwxXwT1xGKKtniy_XMg.png?1679945070)

### **Step 2: Apply Pixel Code to your Funnel/Website.**

17\. Keep this browser tab open and navigate to your CRM account. Navigate to the **Sub** **Account** that you are setting up this Pixel for. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289570698/original/Axo_7JB7aYqMu05xVCmbyL3huyMqf8KK3g.png?1679946215)

18\. Head on to **Sites** in the left sidebar and then to **Funnels or Websites**(depending on where you built the site, which is associated with the domain you used in your Pixel Setup)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289571188/original/N9MFo0vI6O68mcQgkUIlKOsCk9ONZh8hUg.png?1679946454)

19\. Click on **Edit** **Page** under your desired page and then preferably **Edit in a new tab** to go to a different account to access the Funnel Builder. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289576432/original/hiSciufhwIJ7PCKZ-sS2vB5l1R1rtakQ-Q.png?1679948282)**

20\. Once inside the builder, head to **Settings> Tracking Code**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289576389/original/m9CQWd5rnOZKzlO66XBHbbeU8lXQxwjCeA.png?1679948253)

21\. Paste the code from step 16 in the **Header Code, then click "Yes, Save."![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289576950/original/XwZ8gxwLDHkQmjV4i9XdU5Xht3frw5kvqQ.png?1679948418)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289577098/original/Z98Zvxl_5PH_pqzvwm2NVUXw4qVqdzTf0A.png?1679948497)**

**22\. Do remember to save the funnel once you are done.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289577442/original/YI__7PAwCBY81DjMbv1zmh9IYq-5NuLLCA.png?1679948655)**

### **Step 3: Create a Facebook Conversions API Workflow.**

23\. Exit the Funnel Builder.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289695452/original/XOr7LdP7cl--hxOUM7joPfJL5oOUcbWwaQ.png?1680001352)

24\. Navigate to **Automation>Workflows>Create Workflow**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289696108/original/gOPAJEuBrOyw763_BKspl9mwls66TyWgkg.png?1680001464)**

25\. Click on **Start from Scratch** and then **Create new**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289704585/original/ZCSNobw18WNpGfxIWg-4oTkrNq6Q6-ETIA.png?1680003324)

26\. Click on **Add New Workflow Trigger![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289709868/original/fs68pGT6FcNZWDVh9bP4aO4klx31e5qGIg.png?1680004514)**

**Please Note:**

```
You will need to use the Facebook Lead Form Submitted trigger step to trigger this workflow.

Prerequisite for Facebook CAPI - Funnel Events.

1. In CRM, please go to Settings > Integration > Check that the Facebook account is connected with admin permissions. Please ensure that your FB Business Page, which you are an admin of and have all access to, [is integrated and the correct FB lead Form is mapped in your CRM account.](https://help.leadconnectorhq.com/support/solutions/articles/48001237082-facebook-lead-ad-integration-troubleshooting-guide#How-to-directly-integrate-Facebook-Leads-Ads-with-a-Sub-Account)



2. In Facebook From Field Mapping, the form should be mapped correctly and the status should be enabled. Facebook form mapping has moved under location settings > integrations > Facebook Form Field Mapping. [Here is a list of the supported custom fields](https://help.leadconnectorhq.com/support/solutions/articles/48001237082-facebook-lead-ad-integration-troubleshooting-guide#Supported-custom-fields-when-using-Facebook-Lead-Ads%3A) which include multiple and single option custom fields as well.

```

Once you have chosen the workflow trigger,

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289721353/original/zKEiDic2LbITy4OTkp4EPLNqftPC3E3wTg.png?1680007109)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289721353/original/zKEiDic2LbITy4OTkp4EPLNqftPC3E3wTg.png?1680007109)

If you want it to get fired off by Facebook Form submissions for a specific form, **Add Filters>In Form> Choose the Facebook Lead Form.** You will not need to add any filters to this trigger unless you want it to get fired off by only specific submissions.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289720956/original/UzW2lQxRnD89kC50mNmvcm9dPEdFVg8oFQ.png?1680007015)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289721039/original/80BvC38WqaO_PBTT3uTrESPHZJxKFFg-Dw.png?1680007039)**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289721255/original/RvXSQg-836i6SRM2N8JNGoQ_c0CLSPNU4A.png?1680007077)

Do not forget to save it down below by clicking on **Save Trigger**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289721481/original/BSdWqGzCUtGVpypAWQHpx_tYoy8r52Ys1Q.png?1680007145)

27\. Then click on **Add your first Action.** Search for and select the **Facebook Conversion API** Action:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289711718/original/BlBprv4vsy-ln4pK4HQT4k0J1Egn-Ah2LA.png?1680004959)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289711847/original/fWCnbLpgrJ5UiMkE_Yt1QlvofWNsDO5zsw.png?1680004986)

28\. Configure the **Facebook Conversion API** action. You can name this Action in **Action Name** if you'd like. In the **Event Type** dropdown, choose **Funnel Event.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289712358/original/QZE0sWnE-pbrOLgAMkyomQTWuz1BiIsGkQ.png?1680005113)**

29\. Head over to the **[Events Manager](https://www.facebook.com/events_manager2/)** tab where you were creating a Pixel. Search for the name of the Pixel you were working on. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289714422/original/2b7gcqusnexxCMS4WB7cI6k4wM4Ihy_RHg.png?1680005546)

30\. Click on **Complete Setup.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289714754/original/cve6wtT3L80nD_bgdm-BNtTWwsvBwh8sPQ.png?1680005606)

31\. In the **Using Conversion API** tab, click on **Get Started**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289722071/original/ZUjryQ9uZpPbZykijHiBMPthfg369JXcpw.png?1680007278)**

32\. Click on **Generate Access Token** and copy the Access Token generated. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289722332/original/iNgpHSOF_fNtQpVBadEh5XJXnB3wYOeVng.png?1680007361)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289722674/original/rEIgSM6qrptfSee-X6aq9No2EspxhQdJ-A.png?1680007454)**

33\. Paste the Access token in the **Access Token** field in the Facebook Conversion API Action.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289723076/original/tfa8RTENoclPwsMDruB1EYnISHaeFoC9dA.png?1680007580)

34\. Navigate back to your Events Manager, Scroll down to the bottom, and click on, **Finish** under **Finish Implementation.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289724559/original/QES1YU8T20V7OJcENNJviPFgu-2J1e6bZQ.png?1680007855)**

**35\. Head to Settings and then Copy the Pixel ID. Then Navigate back to your Workflow.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289725706/original/iAepBwSr9GL5uStEWT2DKZyEZVWAVClyCA.png?1680008064)**

36\. Paste the Pixel ID in the **Pixel ID** field in the Facebook Conversion API Action. **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289726791/original/jJEtjQkW_8i4KUi2XjoHcefesHLy-_buBQ.png?1680008289)**

**Please Note:**

**```**
**For Lead Value please use assumed values like 1000 or 2000 so that you can identify value each lead contributes to your pipeline.**
**```**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289806309/original/hxd2uFEgwAUCvwnUuG3T-EQydiOboNJUGA.png?1680027972)**

Once complete, **Save the Action** and then **Save** and **Publish** the Workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289806384/original/97Ca2J6ee77OfgVtCKIGJmsZfKPzg5Ga8Q.png?1680027999)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001237084-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-*  
*Generated on: 2025-10-28T15:58:39.994Z*
