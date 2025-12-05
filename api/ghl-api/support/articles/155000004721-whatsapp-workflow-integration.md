---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration
category: articles
type: article
scraped: 2025-10-28T16:18:39.116Z
title:  WhatsApp - Workflow Integration : LeadConnector 
status_code: 200
---

#  WhatsApp - Workflow Integration : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [WhatsApp Integration](https://help.leadconnectorhq.com/support/solutions/48000454707) [Setup](https://help.leadconnectorhq.com/support/solutions/folders/48000683466)

## WhatsApp - Workflow Integration  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration\# "Print this Article")

Modified on: Fri, 14 Mar, 2025 at 8:34 AM

* * *

**TABLE OF CONTENTS**

- [Automating WhatsApp Responses with Workflow Automation](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Automating-WhatsApp-Responses-with-Workflow-Automation)

  - [Step 1: Create a New Workflow](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-1%3A-Create-a-New-Workflow)
  - [Step 2: Set Up a Trigger](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-2%3A-Set-Up-a-Trigger)
  - [Step 3: Apply WhatsApp-Specific Filters](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-3%3A-Apply-WhatsApp-Specific-Filters)
  - [Step 4: Define an Automated Action](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-4%3A-Define-an-Automated-Action)
  - [Step 5: Customize the Automated Response](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-5%3A-Customize-the-Automated-Response)
  - [Step 6: Save & Activate the Workflow](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-6%3A-Save-&-Activate-the-Workflow)
- [How to select the From Phone Number for Sending WhatsApp Messages](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#How-to-select-the-From-Phone-Number-for-Sending-WhatsApp-Messages)

  - [Step 1: Add an Action in the Workflow](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-1%3A-Add-an-Action-in-the-Workflow)
  - [Step 2: Select WhatsApp as the Action Type](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-2%3A-Select-WhatsApp-as-the-Action-Type)
  - [Step 3: Choose the Sending Phone Number](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Step-3%3A-Choose-the-Sending-Phone-Number)
- [How to configure wait for WhatsApp contact Reply](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#How-to-configure-wait-for-WhatsApp-contact-Reply)
- [How to configure Do Not Disturb (DND) for WhatsApp](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#How-to-configure-Do-Not-Disturb-(DND)-for-WhatsApp)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#FAQs)
  - [Does the Do Not Disturb (DND) setting affect other communication channels or just WhatsApp?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Does-the-Do-Not-Disturb-(DND)-setting-affect-other-communication-channels-or-just-WhatsApp?)
  - [What's the difference between "None - Manual Text" and selecting a template when sending WhatsApp messages in workflows?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#What's-the-difference-between-)
  - [Can I use WhatsApp workflow automation to send messages outside the 24-hour window?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Can-I-use-WhatsApp-workflow-automation-to-send-messages-outside-the-24-hour-window?)
  - [What's a 'Free Entry Point Conversation' and how is it different from a regular conversation?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#What's-a-'Free-Entry-Point-Conversation'-and-how-is-it-different-from-a-regular-conversation?)
  - [What happens if a customer replies with something other than what I've configured for the 'Wait for WhatsApp Reply' step?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#What-happens-if-a-customer-replies-with-something-other-than-what-I've-configured-for-the-'Wait-for-WhatsApp-Reply'-step?)
  - [How do I select the contact number for sending WhatsApp messages?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#%C2%A0How-do-I-select-the-contact-number-for-sending-WhatsApp-messages?)
  - [Why don’t I see my phone number in the dropdown list?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#%C2%A0Why-don%E2%80%99t-I-see-my-phone-number-in-the-dropdown-list?)
  - [Can I add multiple phone numbers for WhatsApp messaging?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Can-I-add-multiple-phone-numbers-for-WhatsApp-messaging?)
  - [What happens if I select the wrong phone number?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#What-happens-if-I-select-the-wrong-phone-number?)
  - [Do I need to configure this setting for every workflow?](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration#Do-I-need-to-configure-this-setting-for-every-workflow?)

# Automating WhatsApp Responses with Workflow Automation

Automating WhatsApp Responses Made Easy 📱

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Automating WhatsApp Responses Made Easy 📱](https://www.loom.com/share/580dd12eb3a7492eac3379f941cdd1fe "Automating WhatsApp Responses Made Easy 📱")

2 min

128 views

0

[Loom](https://www.loom.com/share/580dd12eb3a7492eac3379f941cdd1fe "Open video in Loom")

1.2×

1 min 55 sec⚡️2 min 24 sec1 min 55 sec1 min 36 sec1 min 16 sec1 min 7 sec57 sec46 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Automating WhatsApp Responses Made Easy 📱](https://www.loom.com/share/580dd12eb3a7492eac3379f941cdd1fe "Automating WhatsApp Responses Made Easy 📱")

2 min

128 views

0

[Loom](https://www.loom.com/share/580dd12eb3a7492eac3379f941cdd1fe "Open video in Loom")

1.2×

1 min 55 sec⚡️2 min 24 sec1 min 55 sec1 min 36 sec1 min 16 sec1 min 7 sec57 sec46 sec

### **Step 1: Create a New Workflow**

- Navigate to **Automations** → **Create Workflow**.
- Select **"Start from Scratch"** to build a custom automation

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619140/original/eIW31ypzCh-xl0wkSj-ifg5hKoqZRyOzIg.jpeg?1741092601)

### **Step 2: Set Up a Trigger**

- Click **Add New Trigger** and search for **"Customer Replied"**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043306025/original/ptKxwsv00rkGALQM6vZISOZMeLMARfm_Jw.png?1741959241)

### **Step 3: Apply WhatsApp-Specific Filters**

- Add a filter: **Reply Channel** → Select **WhatsApp** to ensure this automation applies only to WhatsApp responses.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619144/original/mTWQBDtkmDiZApJheYmH9Ky5S7XtAMp3YQ.jpeg?1741092602)

### **Step 4: Define an Automated Action**

- Click the **\+ (plus) button** to add an action.
- Choose **WhatsApp** as the action type.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619138/original/MVc7a3wFf3PLxznpFbNW46u53vsxycEbEw.jpeg?1741092601)**

### **Step 5: Customize the Automated Response**

- Under **WhatsApp Template**, select **"None - Manual Text"** (for custom responses).
- Craft a message that will be sent automatically when a customer messages you on WhatsApp.
- Use **dynamic variables** (e.g., **Contact Name, Email, Company Name**) to personalize responses.
- Click On **Save Trigger**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619143/original/ZUHId9xnVnPAQJ1lR_zxCD__uS-RWoIckw.jpeg?1741092602)

### **Step 6: Save & Activate the Workflow**

- Click **Save Action** → **Publish** → **Save** to activate your workflow.

# **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619137/original/KPYVkyuFx_G42XRtVVJzorY3w8DDiKO0Xw.jpeg?1741092600)**

**Note:** You can also send pre-approved WhatsApp message templates instead of manual text for standardized messaging.

By automating responses, you can ensure timely and professional communication with your customers while optimizing your business operations.

# How to select the From Phone Number for Sending WhatsApp Messages

```
Note: Only Phone Number which have connected status will be available for Selection under the dropdown
```

### **Step 1: Add an Action in the Workflow**

- Tap the **“+”** icon in the workflow to add a new action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619331/original/bDo5Ycvq_BhwzqjPKguo7AUkPtY0sKY7ng.jpeg?1741092749)

### **Step 2: Select WhatsApp as the Action Type**

- In the **Action** section, search for **"WhatsApp"**.
- Click on **WhatsApp** to proceed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619334/original/sVSG2w845Nb_1n9lNwC4LDrVqmpKLXfneA.jpeg?1741092750)

### **Step 3: Choose the Sending Phone Number**

- From the dropdown menu, select the **phone number** you want to use for sending WhatsApp messages.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619339/original/raWtFhzjy4PYH0pV1quD36vBc4wP7NF72g.jpeg?1741092751)

# How to configure wait for WhatsApp contact Reply

You can send an initial WhatsApp message and then wait for the contact's reply before triggering the next step in your workflow. This enables more natural and responsive interactions within your automated workflows.

**Step 1:** Go to **Automations > Workflows > Create Workflow > Start from Scratch**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619343/original/Ne5yRj_zZ148ecWxmVOrFjwdb19TOIJMPw.jpeg?1741092752)Step 2:** Select **Add new Trigger** and search **Contact Created**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619333/original/axgq1PL12ZlpTrU6UQ8PkOkBlE-X-CuafA.jpeg?1741092750)**

**Step 4: Click on the plus button to add an action > Select WhatsApp**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619315/original/SSrC9tlPV9ArFOthVnBCaS9nPX896Wbx5g.jpeg?1741092741)**

**Step 5:** **SELECT WHATSAPP TEMPLATE > Select the template that you wish to send**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619330/original/nIACUec6A33iHebs30U5aahq6VTWZQqwJA.png?1741092749)

**Step 6:** Click on **+** button > Select **Wait**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619348/original/99A_LWnUMkfYZgYgpXVAHjNF2z8m7KAI-g.jpeg?1741092755)**

**Step 7:** WAIT FOR > **Contact Reply** \> REPLY TO > **WhatsApp** and **Save Action**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619352/original/Vp0ui60457NH166HdT8ypOUAwJ2UsGGy6w.jpeg?1741092756)

**Step 8:** Select the + button > **ACTION NAME**: WhatsApp > **SELECT WHATSAPP TEMPLATE** : **None - Manual Text**

Note: You can send free text messages at **NO ADDITIONAL COST** since the [**Free Entry Point Conversations**](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-and-billing-full-guide#Free-Entry-Point-Conversations) is opened since the customer replied to you.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619353/original/zi4DZud_sCRtGmhCcIC9kUn08PhiFTCLzQ.jpeg?1741092755)

**Step 9: Save Action** and **Publish** the Automation and click **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619350/original/LH41mCkKRV_6AAByHtZ6835e7njJjdy4yA.jpeg?1741092755)**

# How to configure Do Not Disturb (DND) for WhatsApp

Based on specific customer actions (e.g., sending "STOP"), set DND status for all channels or specifically for WhatsApp. This empowers you to respect customer preferences and manage communication channels more effectively.

**Step 1:** Go to **Automations > Workflows > Create Workflow > Start from Scratch**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619342/original/9axiIHeQhSp310XGqmhORaXN13_rJ8TMpw.jpeg?1741092752)**

**Step 2:** Select **Add New Trigger >  Customer Replied**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619346/original/-HGzR_LX0WR0xHGQMCglxpf4xO218MRsQg.jpeg?1741092755)**

**Step 3:** Select **Add filters >** Reply channel **\> WhatsApp** andContains phase **\> STOP** and **Save Trigger**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619347/original/9ZkT8KIFk3t7-7i8q8ykLyhD9iuMG8C7yQ.jpeg?1741092755)**

**Step 4:** Select **\+ button > Search DND > Select Enable/Disable DND**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619349/original/Rm2IOWVm11ykDzJQoUzcymdRsagMHVdBug.jpeg?1741092755)**

**Step 5:** Select **Enable DND for specific channels** \> Channels: **WhatsApp > Save Action**

Note: You can enable DND for all Channels by selecting **Enable DND for all channels**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042619354/original/oawrMvJG2g9z9bomGNCWMtc6DtRTay4pfQ.jpeg?1741092756)**

* * *

# FAQs

## **Does the Do Not Disturb (DND) setting affect other communication channels or just WhatsApp?**

You can configure DND to apply to all channels or just WhatsApp. This gives you control over whether you want to prevent the customer from receiving communications across all methods or just on the particular channel where they requested to be left alone.

## **What's the difference between "None - Manual Text" and selecting a template when sending WhatsApp messages in workflows?**

"None - Manual Text" lets you write a free-form message within the 24-hour window. Selecting a template is for sending pre-approved messages, which is useful for starting conversations outside of the 24-hour window or for specific marketing or support purposes.

## **Can I use WhatsApp workflow automation to send messages outside the 24-hour window?**

Yes, you can use approved WhatsApp templates after the initial 24-hour window for outreach or follow-up messages. Keep in mind that these template-based messages will incur additional charges.

## **What's a 'Free Entry Point Conversation' and how is it different from a regular conversation?**

- Triggered when a customer clicks a "Click to WhatsApp" ad or a Facebook Call-to-Action button.
- Lasts for 72 hours, compared to the standard 24-hour window.
- During this extended window, you can send both free-form and template messages.

## **What happens if a customer replies with something other than what I've configured for the 'Wait for WhatsApp Reply' step?**

The workflow will continue to wait until they send a reply that matches what you've set up. If you want to handle unexpected responses, consider adding additional branches to your workflow with alternative conditions.

## **How do I select the contact number for sending WhatsApp messages?**

You can select the contact number by following these steps:

1. Tap the **“+”** icon in the workflow to add a new action.
2. In the **Action** section, search for **"WhatsApp"** and select it.
3. Choose the phone number from the dropdown list.

## **Why don’t I see my phone number in the dropdown list?**

Only phone numbers connected under the **Phone Number** tab will appear in the dropdown. Ensure that your WhatsApp number is correctly linked in this section.

## **Can I add multiple phone numbers for WhatsApp messaging?**

Yes, if you have multiple WhatsApp numbers connected, you can select the preferred number from the dropdown list when setting up the workflow.

## **What happens if I select the wrong phone number?**

If you select an incorrect number, the messages will be sent from that number. To fix this, edit the workflow and choose the correct phone number.

## **Do I need to configure this setting for every workflow?**

Yes, each workflow requires you to manually select the sending phone number to ensure messages are sent from the correct source.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004721-whatsapp-workflow-integration*  
*Generated on: 2025-10-28T16:18:39.116Z*
