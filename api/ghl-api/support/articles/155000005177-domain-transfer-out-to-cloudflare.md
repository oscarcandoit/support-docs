---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare
category: articles
type: article
scraped: 2025-10-28T16:21:53.105Z
title:  Domain Transfer-out to Cloudflare : LeadConnector 
status_code: 200
---

#  Domain Transfer-out to Cloudflare : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Domains](https://help.leadconnectorhq.com/support/solutions/155000000109) [Domain Connect / Transfer](https://help.leadconnectorhq.com/support/solutions/folders/155000001199)

## Domain Transfer-out to Cloudflare  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare\# "Print this Article")

Modified on: Thu, 5 Jun, 2025 at 7:52 AM

* * *

# **Overview**

This article outlines the steps required to transfer a domain to a different Cloudflare account. It consists of a pre-requisite, preparation steps, and the transfer process:

**TABLE OF CONTENTS**

- [Overview](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Overview)
  - [Pre-requisite](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Pre-requisite)
  - [Prepare to Transfer](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Prepare-to-Transfer)
    - [Step 1](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Step-1%3A-Add-the-Domain-as-a-Website-to-the-New-Account-and-Select-a-Plan)
    - [Step 2](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Step-2%3A-Obtain-the-Account-ID-and-Share-with-Us)
  - [Transfer](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#Transfer)
- [**⚠️ Note: “Invalid Nameservers” Status**](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare#%E2%9A%A0%EF%B8%8F-Final-Note%3A-%E2%80%9CInvalid-Nameservers%E2%80%9D-Status)

* * *

## **Pre-requisite**

A Cloudflare account where domains has to be transferred should exist and you should have access to it.

* * *

## **Prepare to Transfer**

### **Step 1: Add the Domain as a Website to the New Account and Select a Plan**

- Login to your Cloudflare account where you want to transfer your domain.

- Click **'Connect a domain'** after clicking **'\+ Add'**.



[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014673/original/imnqVROmRrW3Lv_8x0mzLNYyma-nM3Cz1A.png?1746181626)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014673/original/imnqVROmRrW3Lv_8x0mzLNYyma-nM3Cz1A.png?1746181626)

- Enter the domain name to be transferred and click **'Continue'**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014675/original/i-mlbwpnMnRxn40LyYWDlCYJL7R2q8xfFg.png?1746181626)

- Select the **'Free'** plan or a **'Paid'** plan.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014681/original/2MNAtKUsDLUOI2MAdDu4a7YsUg1ZAroGrQ.jpeg?1746181627)

- Cross-check your scanned DNS records with your current DNS records. You can find your current DNS records here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014683/original/8KM5JwRDxmO3DOwz8w42MGSCzvnfXVxumQ.jpeg?1746181627)

- If the scanned records match with the existing records, then hit **'Continue to Activation'.If not, manually add/remove the scanned records to match existing records.**

**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014679/original/J9xkpfcQdpZR0zUIA67hfb6HdJ5FPJXEfg.jpeg?1746181627)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014679/original/J9xkpfcQdpZR0zUIA67hfb6HdJ5FPJXEfg.jpeg?1746181627)**
**[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014682/original/LgJ67EMpsRdwg4nWfgUTXVrZIoqMS9OXkg.jpeg?1746181627)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014682/original/LgJ67EMpsRdwg4nWfgUTXVrZIoqMS9OXkg.jpeg?1746181627)**


> **⚠️****Please ensure proxy is turned OFF for all records before clicking 'Continue to Activation'.**

- There isn't a need a change nameservers at this step.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046014680/original/jCFrZOSHaGrhIUPUscYRJo8fvbOB8AP_sA.jpeg?1746181627)

* * *

### **Step 2: Obtain the Account ID and Share with Us**

- Once you have completed all above process, obtain the **account ID** of your Cloudflare account and share it with us.

- To obtain the account ID, follow this process:

Extract the alphanumeric value from the URL.

**Example:** In this case, this is the account ID:

`0d2031c4bcda5980204101c44294740c`


* * *

## **Transfer**

Once all 2 steps above are completed, we will initiate the transfer process from our end. You can expect the transfer to get completed within **24 hours** after we initiate it. Then you need to approve the transfer by following these steps:

- Go to 'Manage Domains' under 'Domain Registration' in the left navigation menu and click on 'Manage' button for the given domain.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046176463/original/eg_qe7JZrPhL5QRw2qRWnieAISySpi-SjQ.png?1746528227)
- Accept the transfer request. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046110498/original/9w5CUTY7e1aRJH_nN1Axvi7o1npiKF7oKw.png?1746442019)
- You can expect the transfer to get completed within 24 hours after you accept it. Once transfer is successful, status will turn to 'Active' for that domain under 'Manage Domains'. If you find 'Invalid Nameserver' status in 'Account Home' for that domain, please wait for a few hours and then check again.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046110500/original/5WtpI9h_w9sTo3givdSn58Kw028kOw7dxg.jpeg?1746442019)

* * *

## ⚠️ Note: “Invalid Nameservers” Status

After the transfer has been accepted, the domain may temporarily show **“Invalid Nameservers”** in the **Account Home** section **Don’t worry** \- this is expected behavior.

This warning typically resolves itself **automatically within 24 hours** post-transfer. No action is needed from your side.

* * *

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005177-domain-transfer-out-to-cloudflare*  
*Generated on: 2025-10-28T16:21:53.105Z*
