---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004061-how-to-use-shopify-integration-with-your-sub-account-
category: articles
type: article
scraped: 2025-10-28T16:14:05.900Z
title:  How To Use Shopify Integration? : LeadConnector 
status_code: 200
---

#  How To Use Shopify Integration? : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [E-Commerce](https://help.leadconnectorhq.com/support/solutions/155000000160) [Ecommerce](https://help.leadconnectorhq.com/support/solutions/folders/155000000784)

## How To Use Shopify Integration with Your Sub-Account?  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004061-how-to-use-shopify-integration-with-your-sub-account-\# "Print this Article")

Modified on: Tue, 22 Jul, 2025 at 10:19 AM

* * *

## Integrating Shopify with your sub-account is a 2 step process:

1. Create a Custom App in your Shopify Store
2. Connect Shopify to your Account

# Step-1: Create a Custom App in your Shopify Store

Before we setup integration we need to create a custom app in your Shopify store.

**1.1    Login to your Shopify store and click on "Apps" in your dashboard**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274558/original/ZSJJrCQiG1mxMWdAognKbVtt7sLmlZO5Rg.png?1729693048)

**1.2 Then, click on "Develop apps" on the top of the screen highlighted in the below picture**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274557/original/WIhYzLcoelf6zT6fSg3xpF2MbizCAgcIdg.png?1729693048)

**1.3 Then, click on "Allow custom app development" (if you have already enabled this permission then Shopify**

**will take you to Step-1.5)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274554/original/c1efIzaYNwK6AMhTsaqHHPcWiflc3hwaXw.png?1729693048)

**1.4 In the next screen, click on "Allow custom app development"**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274555/original/c3C51155RfXJBhQ91P_M-mUb_IaR1UG_6Q.png?1729693048)

**1.5 Then, click on "Create an app"**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274560/original/kWDttIMq7bGHQ6X8hRxK6-YZRrOS2qhqsg.png?1729693050)

**1.6 Enter a name for the app (for example "Marvel's App"), select your email under App developer**

**and click on "Create app"**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274561/original/SnexU3bF6wv-D0lEC6Iv8cXaqQX-SA6lXA.png?1729693050)

**1.7 Then, click on "Configure Admin API scopes" to configure Admin API integration**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274559/original/Em7J9mPM5C9u_MSWaVd7Q1t7gdPU_jgsrg.png?1729693049)

**1.8 Search/scroll down to the "Orders" and You will need to enable at the very**

**least "read\_orders" access**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274568/original/MBWg0uA8kYUDN-1WQnXphdBk0j_OohW3Bw.jpeg?1729693053)

**1.9 Add the "read\_customers" scope. In configuration edit the "Admin API Integrations". In this section under**

**customers, select the "read\_customers" tick box.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035278217/original/zbwoZ95ElWEao2flGsTzj1raSsFps7JUVQ.png?1729695165)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274552/original/P7Z8MGEHQOVtd8Eij3a-MM0bdhBlGpW90g.png?1729693048)

**1.10 Then, Search/scroll down to the "Products" and You will need to enable at the very**

**least "read\_products" access**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274571/original/Nqj0fAX2cPnqXad89vM16z7gPjzmXowFfA.png?1729693053)

**1.11 Then, Search/scroll down to the "Inventory" and You will need to enable at the very**

**least "read\_inventory" access**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035278346/original/mR5D0owQUbz3NuMj87W8ZaKuxGFQscb_YA.png?1729695263)**

**1.12 Once you've enabled read access on "Orders, Product, Customer, and Inventory", save the app by clicking on the**

**"Save" button on the top right**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035279308/original/pySvS_dv6-v1XgVd9IuTVwvZ8Eg3iSvw5Q.png?1729695846)**

**1.13 After saving click on the "Install app" as in the image below**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035279765/original/Jez2k-yblgx-Dfk1R5tXQVEeYTTMvAQ1WQ.png?1729696188)

**1.14 Then, click on "Install" from the pop up as in the image below**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274562/original/LQrins-fsfsZ5o6RdJTjTN31MyUG44KmPQ.png?1729693051)

and voilà your App is ready to be integrated now!

**1.15 After installing, the "Admin API access token" that you need for the Shopify integration can**

**be found under the API credentials section, click on "Reveal token once" to get access to the token**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274563/original/uaDkd9S1RtsNKm2vue958XKXpOqC4YuslQ.png?1729693052)

**1.16 Copy the "Admin API access token" by clicking on the clipboard icon**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274567/original/lIbw63vCPHdPPpo5mvjDlfUBz9RrvaHc6g.png?1729693053)

## Step-2: Connect Shopify to your Account

How to use:

1. Access the Integration:
Shopify integration can be found within a sub-account at:
Settings > Integration > Shopify
.




[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050249674/original/BNomncFhtx_t7mQa6Tq4se8AyFs5idiupQ.png?1753197002)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050249674/original/BNomncFhtx_t7mQa6Tq4se8AyFs5idiupQ.png?1753197002)

2. Connect the Shopify Store:
Users can click on "connect" button to begin the setup. A modal will appear where users must enter Admin API access Token and a valid Shopify store URL as the first step.



![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250397/original/CTLVi2OkD2Q_pGZzxIdPBL3fieXKM1AVEQ.png?1753197556)
3. Select Data to Import:
    In the second step, users will be directed to the Import Elements screen, where they can select which data to import from their Shopify store. The available options for import are:
Contacts, Orders, Transactions, Products, Collections
.

**Reimporting Data:** If users wish to reimport data, they can disconnect and reconnect the integration, allowing them to reimport any data they may have missed during the initial import.





![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250152/original/xmcecQkcD97iu8O7AMzkc2Vv6fXIrQO1ZA.jpeg?1753197350)
4. Configure Syncing Settings:
    The third and final step takes users to the Sync Settings screen, where users can choose which data to continuously sync from Shopify to LC in future. The options for syncing include:
Contacts, Orders, Transactions, Order submitted trigger, Payment received trigger, Products, Collections.

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250254/original/W-aICI6xtxX_-E0kQYNmsVHvVlBYw30gNw.png?1753197429)

5. Completing the Setup:
    After selecting the desired elements to import and sync, click
Save
. The import and sync process may take some time to complete.
6. Manage Settings:
Once the Shopify integration is successfully connected, users can enable or disable the elements they want to sync for future orders from the Shopify store.




[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035277243/original/WMC9UZReXPr_dzCylfjhn1dTsN-2ID1nTA.jpeg?1729694598)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035277243/original/WMC9UZReXPr_dzCylfjhn1dTsN-2ID1nTA.jpeg?1729694598)


N

otes:

- Taxes are not mapped in Products while importing or syncing the Products.
- For each order, only one transaction is created in your sub-account.
- Order statuses are marked as "Completed" or "Cancelled" when synced with Shopify.
- Merged contacts in Shopify will have the primary contact updated in Sub-account.
- If there are no changes to the SEO details in Shopify (default SEO settings), the data will be received as null in Sub-account.

```
Frequently Asked Questions

Q1: Why aren't my contacts syncing from Shopify?
Ans: Due to a Shopify API update, the Basic plan no longer provides access to customer PII (customer names, emails, addresses, phone numbers). This data is required to create Contacts in the platform.
Note: To sync contacts, you must upgrade to Shopify Advanced or Plus plan.
Reference: [https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/m-p/2496209](https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/m-p/2496209)

Q2: What Shopify data can sync on the Basic plan?
Ans: On the Basic plan, you can still Import and sync:
- Products
- Collections
But you cannot sync:
- Contacts
- Orders
- Transactions

Q3: It used to work before. Why did it stop now?
Reference: [https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/td-p/2496209](https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/td-p/2496209)
Admin APIs have these restrictions, and even the webhook calls that we receive have stopped returning the customer data
We previously used an older Shopify API that allowed PII access on all plans. That API is now deprecated. As we migrate to the new API, these restrictions will apply across the board.

Q4: Where can I check or manage app permissions?
Manage your Shopify app configuration here: [Shopify App Configuration](https://admin.shopify.com/store/1phxbv-b1/settings/apps/development/195355017217/configuration)

Q5: Where can I find my Shopify Store name?
If you don't know your Shopify store name, you can find it by logging into your Shopify account. Once you login to Shopify, you can find your store name by looking at the URL at the top of the page - your store name is the name or combination of letters and numbers to the right of "store/". In this example, the store name would be ef760-ef.

```

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004061-how-to-use-shopify-integration-with-your-sub-account-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004061-how-to-use-shopify-integration-with-your-sub-account-*  
*Generated on: 2025-10-28T16:14:05.900Z*
