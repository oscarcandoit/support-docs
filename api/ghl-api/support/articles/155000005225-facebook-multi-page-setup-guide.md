---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide
category: articles
type: article
scraped: 2025-10-28T16:23:30.037Z
title:  Facebook multi page setup guide : LeadConnector 
status_code: 200
---

#  Facebook multi page setup guide : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Integrations](https://help.leadconnectorhq.com/support/solutions/48000454683) [Facebook](https://help.leadconnectorhq.com/support/solutions/folders/48000683642)

## Facebook multi page setup guide  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide\# "Print this Article")

Modified on: Thu, 10 Jul, 2025 at 4:27 AM

* * *

The Facebook Lead Ads integration allows you to collect leads directly from Facebook Ads and have them automatically synced with your CRM. With this integration, you can easily capture contact information from potential customers interested in your products or services on Facebook and quickly follow up with them through your CRM. By automating the lead capture process, you can save time and improve the efficiency of your sales and marketing efforts.

**TABLE OF CONTENTS**

- [What is the Facebook Lead Ads Integration?](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#What-is-the-Facebook-Lead-Ads-Integration?)

  - [Who is this integration helpful for?](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#Who-is-this-integration-helpful-for?)
  - [What are the benefits of this integration?](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#What-are-the-benefits-of-this-integration?)
- [Pre-requisites for Facebook Lead Ads](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#Pre-requisites-for-Facebook-Lead-Ads)

  - [To create custom fields:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-create-custom-fields%3A)
- [How to integrate or manage Facebook Leads Ads with a Sub-Account](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#How-to-integrate-or-manage-Facebook-Leads-Ads-with-a-Sub-Account)

  - [To setup FB integration:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-setup-FB-integration%3A)
  - [To disconnect facebook integration:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-disconnect-facebook-integration%3A)
  - [To Manage Facebook pages:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-Manage-Facebook-pages%3A)
  - [To perform basic troubleshooting or Sync leads manually:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-perform-basic-troubleshooting-or-Sync-leads-manually%3A)
  - [To enable or disable facebook/instagram messages:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-enable-or-disable-facebook/instagram-messages%3A)
  - [To manage forms:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#To-manage-forms%3A)
- [Other facebook/instagram related support guides:](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide#Other-facebook/instagram-related-support-guides%3A)

# What is the Facebook Lead Ads Integration?

Integrating Facebook Lead Ads with CRM allows businesses to automatically capture leads and manage them in one platform. This streamlines lead management, eliminates manual errors, enhances lead quality, boosts conversions, and drives business growth.

### Who is this integration helpful for?

Integrating Facebook Lead Ads with CRM is ideal for businesses using Facebook Ads to generate leads and streamline their lead management. It’s especially beneficial  for small businesses or startups with limited sales teams, as it automates lead capture, saving time and resources while improving data accuracy. For businesses already using CRM, this integration ensures seamless lead import into existing workflows, enhancing follow-ups and maximizing efficiency.

### What are the benefits of this integration?

The benefits of integrating Facebook Lead Ads with the CRM include:

Automated lead capture: With this integration, businesses can automatically capture leads generated through Facebook Ads and import them into their CRM system, eliminating the need for manual data entry.

Improved Lead Quality: By tracking and managing leads through CRM, businesses can better understand their audience, personalize their marketing efforts, and improve the overall quality of their leads.

Enhanced lead management: The CRM system allows businesses to track and manage their leads in one place, providing a 360-degree view of their interactions with prospects and customers. This can help companies to streamline their sales and marketing efforts and improve customer retention.

Efficient follow-up: With lead data automatically captured and imported into the CRM system, businesses can quickly follow up with leads and prioritize their sales efforts based on lead quality and behavior.

Increased conversions: Businesses can increase their conversions and ROI from Facebook Ads by automating lead capture and improving lead management.

# Pre-requisites for Facebook Lead Ads

- Access: You must have access to the Facebook page for which you're creating lead ads. Refer to this FacebookHelp article on [how to give someone a role on your Page](https://www.facebook.com/help/187316341316631).
- Ownership: Ensure the same user owns the page and the ad account. For business-level integrations, the owner of the page and the ad account must be the same—more on this in the Facebook help section on [Ad account roles](https://www.facebook.com/business/help/187316341316631?id=520795622598421).

- Permissions: Verify that you have the page and ad account permissions. You should ideally have admin or manage permissions. To understand different levels of permissions, refer to [Facebook Pages roles](https://www.facebook.com/help/323502271070625) and [Ads permissions](https://www.facebook.com/business/help/187316341316631?id=520795622598421). The user trying to integrate the Facebook Page into the CRM will [need to be an admin of the Facebook Business page](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143) and have [Lead Access Permission](https://www.facebook.com/business/help/540596413257598?id=735435806665862) to access Lead data (A requirement set by Facebook).

- Ad Account Check: Confirm your page is connected to the appropriate ad account. To do this, navigate to the Ad Account settings and verify the connected page—more on [how to navigate your ad account settings](https://www.facebook.com/business/help/337584869654348).

- Visibility: Note that only individuals with relevant permissions can see the owners of ad accounts. For details, check Facebook's guide on [user permissions for ad accounts](https://www.facebook.com/business/help/187316341316631?id=520795622598421).

- Leads Access: Check if you have lead access. If the lead connector isn't showing, you may need to manually search for it or enable it.

- LeadConnector will need access to the Facebook Business Manager and Business Page from which you run the Facebook Lead Ad.

- You can allow trusted people to manage some of your Facebook business pages. You can give some people [access](https://www.facebook.com/business/help/582754542592549?id=418112142508425) to certain parts of your Facebook page without giving them full access.

- Open business manager > Left navigation > Users > People. If you have added the person, who will be integrating the FB page to the CRM, there already: they will appear at the centre of the page.

[How to add users to your business?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

- To know about type of pages and profiles available in facebook refer following [link](https://www.facebook.com/business/help/1034727950288693?ref=search_new_2)


### To create custom fields:

- [When creating the custom fields for the Lead Ad in the CRM, please make sure to use the supported custom fields listed below:](https://www.facebook.com/help/135275340210354)

- Supported custom fields when using Facebook Lead Ads:

- TEXT

- LARGE\_TEXT

- NUMERICAL

- PHONE

- MONETARY

- SINGLE\_OPTIONS

- DATE

- DROPDOWN (single)


### [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258166/original/s5mNx9QweLyfo2e_yrhi9Xj8SEGQG808yw.png?1746624886)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258166/original/s5mNx9QweLyfo2e_yrhi9Xj8SEGQG808yw.png?1746624886)

### [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258177/original/1M8fIfWMkiD3PJiTN0Izi3LgQkOcbnHAnw.png?1746624888)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258177/original/1M8fIfWMkiD3PJiTN0Izi3LgQkOcbnHAnw.png?1746624888)

```
We recommend not to update the field names in Facebook forms under settings in FB form creation, as they may impact mapping at CRM end:

```

* * *

# How to integrate or manage Facebook Leads Ads with a Sub-Account

Please Note:

Only the User that integrated the FB page will be able to select the pages to connect. They need to have full access to the page in Facebook.

### To setup FB integration:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258176/original/knYvHjsf4sr8z3WAcbxjsnZnzwC4z13RAw.png?1746624888)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258176/original/knYvHjsf4sr8z3WAcbxjsnZnzwC4z13RAw.png?1746624888)

2. Click on “Connect” under facebook.

3. Allow necessary permissions.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258163/original/owh1yJIte8vBfNl46jW0HL5YFRpspZMPXA.png?1746624885)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258163/original/owh1yJIte8vBfNl46jW0HL5YFRpspZMPXA.png?1746624885)

4. Select the pages under the account that you want to connect with CRM.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258179/original/Bw5mYWTYc50Cfd7xOpmiroz5tclHWxWXdA.png?1746624888)

5. Once pages are connected, the next step is to set up the form, map the required fields with CRM fields, and we are all set to go:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258183/original/-JvPs3tSNbhQ_b3arvfMjHpioMLwpkJUgw.png?1746624889)


### To disconnect facebook integration:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
2. Go to facebook, and click on 3 dots on the card.
3. Click on disconnect.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258165/original/keXWn-8ZA82HVSg9CSEBNHozsjLZuyyA_g.png?1746624886)


### To Manage Facebook pages:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
2. Go to facebook, and click on manage pages

3. Select the pages that you want to link and click on update.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258168/original/smGfq6H0mIMMh3W0DQKwXIsk4U6sJQK-GQ.png?1746624887)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258173/original/K6tpbuNeF6N2iEvSXI48B2O4pfCVn680MA.png?1746624887)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258173/original/K6tpbuNeF6N2iEvSXI48B2O4pfCVn680MA.png?1746624887)


### To perform basic troubleshooting or Sync leads manually:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
2. Go to facebook, and click on Troubleshoot

3. In the next screen, the user can find out permissions missing and can manually sync leads.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258167/original/3QnPnCRCkYm4ttZBohQF0qzNp_A19slY0A.png?1746624887)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258171/original/s0L2RowMNCYo_NKRxC_Asc4VPHaAjvqsMA.png?1746624887)

### To enable or disable facebook/instagram messages:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
2. Go to facebook, and click on settings from the hamburger menu.

3. In the next screen, enable the fb and ig messenger for the connected page.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258164/original/wVjwKCCsKpyJAJY1xTrpfcTURudoKL0tWg.png?1746624886)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258174/original/rHSth5lgSJfvYUJ5XlBCH-ZTsmQ4LcAKcw.jpeg?1746624887)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258174/original/rHSth5lgSJfvYUJ5XlBCH-ZTsmQ4LcAKcw.jpeg?1746624887)


### To manage forms:

1. Go to integrations under sub-account:

Subaccount >> Settings >> integration
2. Go to facebook form field mapping at top of screen.

3. Find the form you want to edit, update mapping or deactivate.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258184/original/LlOO46Owg-Zlda4qJlM98R9_K6wDwFxjdA.png?1746624889)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258184/original/LlOO46Owg-Zlda4qJlM98R9_K6wDwFxjdA.png?1746624889)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258175/original/UazD_R9FrnHExrQSnqtRv6Hk-UfniPkctw.png?1746624888)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258175/original/UazD_R9FrnHExrQSnqtRv6Hk-UfniPkctw.png?1746624888)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258178/original/zx-Baralh8eUiD4uMDGKh-ZRfVIOiP7uHQ.png?1746624888)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258178/original/zx-Baralh8eUiD4uMDGKh-ZRfVIOiP7uHQ.png?1746624888)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258180/original/VYyuAeJm8Bip_JtiIRtImK-DilaXDbIuwA.png?1746624888)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258180/original/VYyuAeJm8Bip_JtiIRtImK-DilaXDbIuwA.png?1746624888)

# Other facebook/instagram related support guides:

- [Facebook Multi Page Troubleshoot](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot)
- [Facebook/Instagram messaging guide](https://help.leadconnectorhq.com/support/solutions/articles/155000005226-messaging-setup-troubleshoot#Other-facebook/instagram-related-support-guides%3A)
- [Facebook form field mapping](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping)
- [Page selection guide](https://help.leadconnectorhq.com/support/solutions/articles/155000005228-page-selection-guide)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide*  
*Generated on: 2025-10-28T16:23:30.037Z*
