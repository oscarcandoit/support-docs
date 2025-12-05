---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot
category: articles
type: article
scraped: 2025-10-28T16:23:41.633Z
title:  Facebook Multi page Troubleshoot : LeadConnector 
status_code: 200
---

#  Facebook Multi page Troubleshoot : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Facebook](https://help.leadconnectorhq.com/support/solutions/folders/48000683642)

## Facebook Multi page Troubleshoot  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot\# "Print this Article")

Modified on: Mon, 19 May, 2025 at 12:46 AM

* * *

**TABLE OF CONTENTS**

- [Why are my Lead Ads not making it into my Sub-Account?](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Why-are-my-Lead-Ads-not-making-it-into-my-Sub-Account?)
- [A Facebook Token Has Expired In a Sub-Account; why does this happen, and How to Fix This?](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#A-Facebook-Token-Has-Expired-In-a-Sub-Account;-why-does-this-happen,-and-How-to-Fix-This?)
  - [Why Did This Connection Break?](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Why-Did-This-Connection-Break?)
  - [To reconnect:](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#To-reconnect%3A)
- [Common Errors](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Common-Errors)
  - [Permission Issue:](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Permission-Issue%3A)
    - [To find missing permissions:](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#To-find-missing-permissions%3A)
    - [To enable the missing permissions:](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#To-enable-the-missing-permissions%3A)
  - [Instagram Connection/messages :](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Instagram-Connection/messages-%3A)
  - [Leads are not syncing:](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot#Leads-are-not-syncing%3A)

## Why are my Lead Ads not making it into my Sub-Account?

1. **Do you have full access control of the Facebook page -** [Add people to a business portfolio and assign a business asset](https://www.facebook.com/business/help/2169003770027706)
2. **Now in your Sub-Account, check in settings> integrations > Facebook form fields mapping check if the form you have selected in ads manager is enabled in status**
3. **Can you try this to confirm if Lead Connector is accessible and has access to your page? -[https://www.facebook.com/settings?tab=business\_tools&ref=settings](https://www.facebook.com/settings?tab=business_tools&ref=settings)**
1. **Check if lead connector is connected with FB account![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357735/original/oTEnFDx_XMn9n-rVu35TX1OWyfn8wvP82g.jpeg?1746764899)**
2. **Check if all the permissions are available with lead connector in terms of page access and lead access![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357734/original/n4UQzp0gN8kl2LxgyUW_L55ZLxCiDTCEsQ.png?1746764899)**
4. **Once you have completed the steps above, please use the **[Facebook leads ads testing tool](https://developers.facebook.com/tools/lead-ads-testing)** to see if leads are now being added to your Sub-Account.**
1. **Select Page from where lead is to be fetched**
2. **Select form to be tested.**
3. **Check if App ID: 390181264778064 is present, if not then go to step 6.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357739/original/gE-6Ftlz0FXXA3OeIDvLb2FfcCrwQ7zXTA.png?1746764900)**
5. If you see that LeadConnector access to your page has been revoked or the App ID is not coming up, you will manually need to assign Lead access permissions to LeadConnector on Facebook:

i. Go to Business Suite.

ii. If you don't have access to Business Suite, go to Business Settings and select your business, skip to step (v)

iii. Click the dropdown in the top-left corner and choose your business account.

iv. Click Settings in the bottom-left corner.

v. Click More Business Settings.

vi. Click Integrations in the left menu, then click Leads Access.

vii. Click Assign CRMs. You'll see a list of CRM systems integrated with your Facebook Page.

viii. Check the circle next to LeadConnector, then click Assign.

## A Facebook Token Has Expired In a Sub-Account; why does this happen, and How to Fix This?

**If** you received an email with a subject that says "Important: Facebook connection has expired.", this means that the Facebook integration for one of your Sub-accounts has become disconnected.

### Why Did This Connection Break?

Several reasons could cause the integration to break. The most common are:

- A user changes their password
- The Facebook token naturally expires after some time
- A user de-authorizes your app
- A user logs out of Facebook
- A user changes page permission or adds/removes a user
- A virtual assistant in another country logs in without using a VPN

### To reconnect:

1\. Select the account indicated in the email you received from the "Switch To An Account" dropdown

2\. In the left-hand sidebar, click "Settings."

3\. From the sidebar, click "Integrations."

4\. Click the "Connected" button to disconnect the broken integration under the Facebook icon. Click on Connect again to reconnect

5\. In the window that pops up, continue as yourself, select the Facebook page that you want to connect, then click the "Connect Page" button

Common Errors

## Permission Issue:

### To find missing permissions:

1. Goto Sub-account >> Settings >> Integration >> Troubleshoot in FB card >> Missing permission
2. This would display all the missing permissions along with the features impacted.

### To enable the missing permissions:

1. Go to following [link](https://www.facebook.com/settings?tab=business_tools&ref=settings).
2. Enable the missing permissions. **[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357737/original/jZM1WfORYAvCmnj_VyJATjcLOB93zCJZug.jpeg?1746764899)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357737/original/jZM1WfORYAvCmnj_VyJATjcLOB93zCJZug.jpeg?1746764899)**

## Instagram Connection/messages :

Step 1: Check if instagram account is connected to FB page: [https://business.facebook.com/latest/settings](https://business.facebook.com/latest/settings)

If instagram account is not connected, connect the account, and proceed to step 2

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357733/original/fUpUI9aqJtuIslq7uD6zA9lvt3r0AZCAtQ.jpeg?1746764899)

Step 2: Check if message access is enabled: The user is added in people with full control access.

Step 3: In Sub-account >> Settings >> Integration >> settings in FB card, make sure Instagram and FB messaging is enabled.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357741/original/F8cT0aLyFU0lHsdRtBbicp3Hk10neeUqyw.png?1746764901)

## Leads are not syncing:

To ensure all settings are enabled, please verify by accessing link: [https://business.facebook.com/latest/settings,](https://business.facebook.com/latest/settings,)

Step 1: Under Users >> people, the user is added and has full control in business portfolio access.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357740/original/YdvqtbEv4VyrDvjx418KNEHWyCq2X5jr-g.png?1746764900)

Step 2: Select Accounts >> pages section under side navigation, Confirm if the user is added in people and has access of full control.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357736/original/qAyflHbP90HN8qREsOxl7yZchX7CEzOTfg.png?1746764900)

Step 3: Go to integrations >> Lead access from side navigation, verify if lead connector is connected under CRM

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046357738/original/mGKVEytxUIiNLQF3gR-7GBDKOc3J9vXC3w.png?1746764900)

# Other facebook/instagram related support guides:

- [Multi Page Facebook Setup guide](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide)
- [Page selection guide](https://help.leadconnectorhq.com/support/solutions/articles/155000005228-page-selection-guide)
- [Instagram/Facebook messaging setup](https://help.leadconnectorhq.com/support/solutions/articles/155000005226-messaging-setup-troubleshoot#Other-facebook/instagram-related-support-guides%3A)
- [Facebook form field mapping](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot*  
*Generated on: 2025-10-28T16:23:41.633Z*
