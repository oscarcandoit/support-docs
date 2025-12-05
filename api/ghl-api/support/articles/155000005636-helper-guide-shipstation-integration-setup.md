---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005636-helper-guide-shipstation-integration-setup
category: articles
type: article
scraped: 2025-10-28T16:27:25.765Z
title:  ShipStation Integration Setup Guide for Ecommerce Stores : LeadConnector 
status_code: 200
---

#  ShipStation Integration Setup Guide for Ecommerce Stores : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [E-Commerce](https://help.leadconnectorhq.com/support/solutions/155000000160) [Ecommerce](https://help.leadconnectorhq.com/support/solutions/folders/155000000784)

## Helper Guide: Shipstation Integration Setup  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005636-helper-guide-shipstation-integration-setup\# "Print this Article")

Modified on: Tue, 19 Aug, 2025 at 4:46 AM

* * *

The **ShipStation Integration** allows you to automatically sync orders, generate shipping labels, and display **live carrier rates** at checkout in your Ecommerce Store. Follow this guide to connect your ShipStation account with the Platform and streamline fulfillment.

### **? Important: Shipstation Setup Checklist**

Please check this article for the setup checklist for Shipstation:

[https://help.leadconnectorhq.com/support/solutions/articles/155000005635-shipstation-setup-checklist](https://help.leadconnectorhq.com/support/solutions/articles/155000005635-shipstation-setup-checklist)

* * *

## Step 1: Install ShipStation Integration

1. Navigate to the **App Marketplace (or Integrations Page)** in your sub-account.

2. Search for **ShipStation Integration by LeadConnector**.

3. Click **View App** → **Install**.


_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878182/original/g0fAYz0eMvemdzIbTtUZOgaRW7K4Dz5XPw.jpeg?1755595752)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878182/original/g0fAYz0eMvemdzIbTtUZOgaRW7K4Dz5XPw.jpeg?1755595752)_

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878198/original/nEJo2JA818GrBT6D2pSCXwIMNXX3dtc0Kg.jpeg?1755595766)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878198/original/nEJo2JA818GrBT6D2pSCXwIMNXX3dtc0Kg.jpeg?1755595766)

* * *

## Step 2: Connect Your ShipStation Account

1. Go to the **Settings tab** in the ShipStation app inside the Platform.

2. Enter your **ShipStation Live API Key** and **API Secret**.

   - Generate these from your ShipStation account under:

     `Settings → Account → API Settings`.
3. Click **Connect**.


⚠️ **Important:** Use the **Live Token** only. Test tokens are not supported.

_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878393/original/BwcekOgwQ_qTgSAUpZm_w_EnqbsSPi46_w.jpeg?1755595834)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878393/original/BwcekOgwQ_qTgSAUpZm_w_EnqbsSPi46_w.jpeg?1755595834)_

* * *

## Step 3: Complete the Setup Checklist

Before connecting, ensure the following requirements are met in your ShipStation account:

- At least **one "Ship From" location** is created.

_(ShipStation → Settings → Shipping → Ship From Locations)_

- The **Package option** is enabled for all active carriers.

_(ShipStation → Settings → Shipping → Packages)_

- Your **ShipStation account currency matches** the Platform store currency.


Once completed, check the boxes and click **Connect**.

_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878409/original/hLX6QDZqJ211DDRoreI-Wfv6ma25Ls-yTg.jpeg?1755595854)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878409/original/hLX6QDZqJ211DDRoreI-Wfv6ma25Ls-yTg.jpeg?1755595854)_

* * *

## Step 4: Add Shipping Options

After connecting, configure shipping options to enable live rates:

1. Click **\+ Add Shipping Option**.

2. Enter a **Shipping Option Name** (this will display at checkout).

3. Select one or more **carrier services** (e.g., USPS Priority Mail, UPS Ground, FedEx 2Day).

4. Set a **Fallback Value** (flat rate used if live rates are unavailable).

5. Click **Create**.


Your configured shipping methods will now display in the checkout process.

_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878514/original/EoYNOZe9TWkruy0oA_tG-5UOpfucreuR-g.jpeg?1755595925)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878514/original/EoYNOZe9TWkruy0oA_tG-5UOpfucreuR-g.jpeg?1755595925)_

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878539/original/r-b4sMeHb9IDyrVNOUGpKxN3NHOCpKring.jpeg?1755595938)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878539/original/r-b4sMeHb9IDyrVNOUGpKxN3NHOCpKring.jpeg?1755595938)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878556/original/QX6uf8ncOAT310pPLc17M2PJbKWYOCSavw.jpeg?1755595954)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878556/original/QX6uf8ncOAT310pPLc17M2PJbKWYOCSavw.jpeg?1755595954)

* * *

## Step 5: Test the Checkout Flow

1. Go to your store’s **Checkout Page**.

2. Add a product to cart and proceed to the shipping step.

3. The **ShipStation-powered live rates** will display (with fallback rates applied if needed).


_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878569/original/BQeeZtA1ixfg-j7sqyx07s2n31W8DpqQuQ.jpeg?1755595966)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878569/original/BQeeZtA1ixfg-j7sqyx07s2n31W8DpqQuQ.jpeg?1755595966)_

* * *

## Step 6: Fulfillment & Tracking

- Orders automatically sync to your **ShipStation Dashboard**.

- Generate and print labels, mark orders as shipped, and manage fulfillment directly in ShipStation.

- Tracking numbers sync back to the Platform and are shared with customers via branded notifications.


_(Refer to Screenshot: Orders in ShipStation + Fulfillment in Platform)_

_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878617/original/sivZgPqRrTnNnlapGVPzgyeaHddjpcgeaA.jpeg?1755596001)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878617/original/sivZgPqRrTnNnlapGVPzgyeaHddjpcgeaA.jpeg?1755596001)_

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878633/original/nljTz5FFYfVU0z9sOGKFX1EVZ48X9fvLKw.jpeg?1755596018)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051878633/original/nljTz5FFYfVU0z9sOGKFX1EVZ48X9fvLKw.jpeg?1755596018)

* * *

## Key Notes

- Customer shipping address at checkout is **required** for live rates to calculate.

- Ensure ShipStation has active carriers configured for rates to display.

- Multiple shipping options can be created to represent Standard, Express, or Custom shipping tiers.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005636-helper-guide-shipstation-integration-setup/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005636-helper-guide-shipstation-integration-setup*  
*Generated on: 2025-10-28T16:27:25.765Z*
