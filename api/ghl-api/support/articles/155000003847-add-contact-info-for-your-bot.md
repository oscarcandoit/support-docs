---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot
category: articles
type: article
scraped: 2025-10-28T16:13:49.673Z
title:  Add Contact Info for your Bot : LeadConnector 
status_code: 200
---

#  Add Contact Info for your Bot : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Add Contact Info for your Bot  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot\# "Print this Article")

Modified on: Fri, 20 Dec, 2024 at 5:10 AM

* * *

**TABLE OF CONTENTS**

- [Introducing Add Contact Info Feature](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot#Introducing-Add-Contact-Info-Feature%C2%A0)
- [Step 1: Once you're in the Bot Goals tab, click on the Add Contact Info button to explore the details](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot#Step-1%3A-Once-you're-in-the-Bot-Goals-tab,-click-on-the-Add-Contact-Info-button-to-explore-the-details)
- [Step 2: Click on Add Contact info button and update the required details i.e. the details that you wish to update](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot#Step-2%3A-Click-on-Add-Contact-info-button-and-update-the-required-details-i.e.-the-details-that-you-wish-to-update)
  - [How to Set Up the Fields](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot#How-to-Set-Up-the-Fields)
- [Additional Information](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot#Additional-Information)

## **Introducing Add Contact Info Feature**

The **Add Contact Info** feature allows users to easily add or update contact information, such as name, phone number, email, and more, directly through the AI. This feature is designed to streamline the process, making it more efficient to maintain accurate and up-to-date information about your leads. Here's how you can access and use this feature effectively:This feature allows users to add or update contact information of the leads through the AI

```
This feature only updates the empty fields in a contact information
```

```
Contact's email and phone are automatically updated so this action is not required for adding or updating email or phone
```

```
After saving contact info, explicitly ask the customer for their contact details in the bot’s prompt. If this instruction isn't included in the prompt, the bot will not ask for the required information, and the contact field won't be updated.
```

## **Step 1: Once you're in the Bot Goals tab, click on the Add Contact Info button to explore the details**

```
If you are creating a new bot, you need to edit the Bot name or assign a new name before accessing the feature
```

**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034771459/original/BLz49mpEcAi5J5i0FkxW7rcFeH-ztgiwIQ.png?1729057504)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034771459/original/BLz49mpEcAi5J5i0FkxW7rcFeH-ztgiwIQ.png?1729057504)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034715359/original/-pLUT1PSrRSWmRhWAHbQPpOPss5Yf-efuw.png?1728987128)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630189/original/VatLL5Y_HS84nDIbZk1rYvHZCvqxOtbtAA.png?1734615012)**

## **Step 2: Click on Add Contact info button and update the required details i.e. the details that you wish to update**

### How to Set Up the Fields

To ensure the best experience, follow these steps to edit and update the contact details:

- **Action Name:** Assign an action name of your choice. This will help you recognize the action later. For example, "Update Contact's  Date of Birth".
- **Select Field:** Choose the field you want to update from the dropdown menu (e.g., name, phone, email, business name, etc.).
- **What to Update:** In the third field, write a short description of what you’re updating. For example:
  - If you choose **Date of Birth**, you could write: "This is the birth date of the contact"
  - If you select **Business Name**, you might write: "This the business name of the contact."
  - This information helps the AI generate more accurate and personalised responses.
- **Output Example (Optional):** If applicable, provide an example of the updated information. For instance, if you're updating the date of birth, you could enter " 5th Jan 1990 "
- Once you're done, click **Save** to finalise the new contact information settings.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630206/original/EVEZHRhx98uhnQGDkx7wbfKRO-Ic42O96w.png?1734615035)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630266/original/JsJXRkMJ86AiKFMtvwbzFksDpxhu1ra-8A.png?1734615075)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630535/original/8tthonoasvb2juYN4PT_I6v1V4au-aqrmw.png?1734615247)

## Additional Information

- After saving or updating the contact info, it's important to **explicitly ask the customer for their contact details** in the bot’s prompt., we have already mentioned this information in the tip
- For example, if you're creating a field to update the date of birth, make sure to include a clear instruction like:

**"Ask the customer for their date of birth.**
- If this instruction isn't included in the prompt, the bot will not ask for the required information, and the contact field won't be updated.
- Steps / best practices to add the details in the prompt

```
Lets say you want to collect name , email , phone , business name , date of birth before booking an appointment
Add this in the prompt to make sure the bot asks these questions
Start the prompt from ### mandatory instruction

###mandatory instruction : before booking an appointment always start the conversation by asking these question one after another
1. Ask the customer his name
2. Ask the customer his email
3. Ask the customer his phone
4. Ask the customer his date of birthdate
5. Ask the customer his business name

```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630065/original/3I-BcxMj3DEg7gvXGS0-mZCWZjc_RYs-yw.png?1734614865)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038630049/original/cNdgY8f191AuKxLot4jaMa4BIjwIItgTVA.png?1734614847)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003847-add-contact-info-for-your-bot*  
*Generated on: 2025-10-28T16:13:49.673Z*
