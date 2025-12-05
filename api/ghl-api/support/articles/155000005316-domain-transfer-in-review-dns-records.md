---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records
category: articles
type: article
scraped: 2025-10-28T16:24:01.734Z
title:  Domain Transfer In - Review DNS Records : LeadConnector 
status_code: 200
---

#  Domain Transfer In - Review DNS Records : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Domains](https://help.leadconnectorhq.com/support/solutions/155000000109) [Domain Connect / Transfer](https://help.leadconnectorhq.com/support/solutions/folders/155000001199)

## Domain Transfer In - Review DNS Records  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records\# "Print this Article")

Modified on: Wed, 11 Jun, 2025 at 5:58 AM

* * *

**TABLE OF CONTENTS**

- [Overview: Review DNS records](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Overview%3A-Review-DNS-records)
- [Need to review DNS records](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Need-to-review-DNS-records)
- [**Step 1:** Retrieving DNS records](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Step-1%3A-Retrieving-DNS-records)
  - [1\. Upload DNS Zone File](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#1.-Upload-DNS-Zone-File)
    - [GoDaddy](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#GoDaddy)
    - [Cloudflare](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Cloudflare)
    - [NameCheap](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#NameCheap)
    - [IONOS](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#IONOS)
  - [2\. Auto Scan DNS Records](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#2.-Auto-Scan-DNS-Records)
- [**Step 2:** Reviewing DNS Records](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Step-2%3A-Reviewing-DNS-Records)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#FAQs)
- [Next Steps / Related Articles](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records#Next-Steps-/-Related-Articles)

* * *

## Overview: Review DNS records

Once a domain has passed the Eligibility Check, the next step is to review its DNS records. In this step, users have the option to either

- upload a DNS Zone File or

- scan DNS records automatically.


[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047256366/original/dn8FSXT4YEd5fapJn6tMfXtdno4gIpCQ5g.png?1748326818)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047256366/original/dn8FSXT4YEd5fapJn6tMfXtdno4gIpCQ5g.png?1748326818)

* * *

## Need to review DNS records

When you transfer your domain from your current registrar, such as GoDaddy, Namecheap, etc., it’s important to ensure that all DNS records configured with your current DNS provider are accurately transferred as well. This is crucial to keep your existing services like websites, email, and others working smoothly after the transfer. If the DNS records are not reviewed properly, your website might go down or your email may stop working. To avoid such issues, it is strongly recommended to carefully review and replicate your DNS records before completing the domain transfer.

* * *

## Step 1: Retrieving DNS records

Users can choose between two methods to retrieve your DNS records by uploading the DNS zone file from your current DNS provider or auto scanning the DNS records:

### 1\. Upload DNS Zone File

This method is recommended if you want to import all DNS records from your current DNS provider without missing any of the existing records.

How to get the DNS Zone file from your current DNS provider?

- Login into your current DNS provider or where you purchased your domain originally.


NOTE: Your domain registrar and DNS provider can be different if you’ve changed the nameservers where you bought your domain. For example, if you bought your domain on GoDaddy but pointed it to Cloudflare by updating the nameservers, then Cloudflare is now managing your DNS. In that case, you’ll need to log in to Cloudflare to access your DNS records (zone file).

- Go to DNS settings of the domain you want to transfer

- Locate the option to export DNS zone/records file

- In case you can’t find such option, reach out to your current DNS provider or registrar’s support to get it


**Go to your registrar below to follow step by step process:**

#### GoDaddy

- #### Learn about how to upload zone files from GoDaddy [HERE](https://www.godaddy.com/en-in/help/export-my-domains-zone-file-records-4166).


#### Cloudflare

- #### Learn about how to upload zone files from Cloudflare [HERE](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/).


#### NameCheap

- #### Currently, Namecheap does not offer a downloadable zone file, so you may need to recreate the records manually or reach out to support to access the records. Link to manually extract the records [HERE](https://gist.github.com/ashleykleynhans/69e4fb525d4f32d766313d3f9d22b688).


#### IONOS

- [Domain Exports](https://www.ionos.com/help/domains/general-information-about-domain-usage/domain-exports/)
- [Cloud DNS](https://docs.ionos.com/cloud/network-services/cloud-dns)
- [API HowTos](https://docs.ionos.com/cloud/network-services/cloud-dns/api-how-tos/export-dns-zone)

* * *

### 2\. Auto Scan DNS Records

This method is convenient and requires no prior setup. In this method, your existing DNS records will be automatically scanned, but some of the existing records may not get detected in the scan. So, to avoid interruptions in your existing connected services like funnel, website etc post transfer, it is highly recommended to manually cross check the scanned records with your records at your current DNS provider or registrar and add/edit records if required.

**NOTE:** Your domain registrar and DNS provider can be different if you’ve updated the nameserver records at your registrar. For example, if you purchased your domain from GoDaddy but pointed it to Cloudflare by changing the nameservers, then Cloudflare becomes your DNS provider. In that case, you’ll need to log in to Cloudflare to view and compare your DNS records.

* * *

## Step 2: Reviewing DNS Records

Once records are retrieved, you can now review your DNS records. In the DNS table shown you can:

- View all DNS entries in a table format, categorized by record type (e.g., A, CNAME, TXT, MX).

- Add new records by clicking “Add Record”.

- Edit or delete individual records as needed.

- Search records using any field (name, type, value).


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047294027/original/a_Aa2nz80cD6o0L2p6AXMe_-9Kq9Io1VTQ.png?1748353067)

**GoDaddy Interface -**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047294066/original/1Uz8wzjSfUSZwRlP2-R73_9rcUaCoQtXoA.png?1748353089)

NOTE: It is highly recommended to manually cross-check the scanned DNS records with the records currently available at your DNS provider or registrar (where you originally purchased your domain). If any record is missed during the automatic scan, it could cause your website to go down or your email to stop working after the transfer. That’s why it’s important to carefully review and compare the scanned records with your existing ones, and make any necessary additions or changes to ensure nothing is left out.

* * *

## FAQs

1\. What if some DNS records are missing after auto-scan?

Always manually cross-check the scanned records with your current DNS provider. Auto-scanning might miss some records. You can edit, delete, or add records before finalizing the transfer.

2\. What if my nameservers are managed by someone else (e.g., Cloudflare), but the domain is with GoDaddy?

Then your DNS provider is Cloudflare even if your registrar is GoDaddy. When transferring the domain, your DNS setup will still be managed at Cloudflare unless you switch nameservers post-transfer.

3\. What if my registrar and DNS provider are different?

Then you'll need to log in to your DNS provider (e.g., Cloudflare) to export or review DNS records. The registrar only holds the domain, not the DNS settings.

* * *

## Next Steps / Related Articles

- [Domain Transfer In - Finalize Transfer](https://help.leadconnectorhq.com/support/solutions/articles/155000005317-domain-transfer-in-finalize-transfer)
- [Domain Transfer In - Approve Transfer](https://help.leadconnectorhq.com/support/solutions/articles/155000005326-domain-transfer-in-approve-transfer)

**Previous Step**

- [Domain Transfer In - Eligibility Check](https://help.leadconnectorhq.com/support/solutions/articles/155000005315-domain-transfer-in-and-eligibility-check)


* * *

If you have any questions or run into issues during your domain transfer, feel free to reach out to our support team from the help icon in your account.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records*  
*Generated on: 2025-10-28T16:24:01.734Z*
