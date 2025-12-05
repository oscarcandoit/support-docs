---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site
category: articles
type: article
scraped: 2025-10-28T15:58:47.017Z
title:  WordPress - Adding Domains for your site : LeadConnector 
status_code: 200
---

#  WordPress - Adding Domains for your site : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Funnels & Websites Category](https://help.leadconnectorhq.com/support/solutions/48000454554) [WordPress](https://help.leadconnectorhq.com/support/solutions/folders/48000683114)

## WordPress - Adding Domains for your site  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site\# "Print this Article")

Modified on: Thu, 13 Apr, 2023 at 10:23 AM

* * *

This article provides instructions for adding and configuring domains for a WordPress website. It is important to note that this article only intends for new WordPress installations **made on or after March 31st, 2023.**

#### **Covered in this Article**

#### [**How to add Domains to your WordPress website?**](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site\#How-to-add-Domains-to-your-WordPress-website?)

#### [a)  Adding a domain for your site:](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site\#a)-%C2%A0Adding-a-domain-for-your-site%3A)

#### [b) Adding additional domains for your WordPress site](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site\#b)-Adding-additional-domains-for-your-WordPress-site)

#### [c) Adding Root Domain to WP site:](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site\#c)-Adding-Root-Domain-to-WP-site%3A)

* * *

## **How to add Domains to your WordPress website?**

Adding a domain to a WordPress site is necessary to make the website accessible to the public through that Domain. A domain serves as the website's address, and visitors can use it to access the site.

The article provides step-by-step instructions for adding a primary domain, additional domains, and a root domain (also known as an apex domain or naked Domain) to a WordPress site.

It also highlights that users may need a staging domain before adding domains to their WordPress website to see how their Website looks before they attach their domain to it. It also provides specific instructions for users with a domain in GoDaddy.

* * *

### **a)  Adding a domain for your site:**

1) To add your first Domain, click the add Domain or sub-domain button. Enter your Domain name and click on the 'Add Domain' Button. You will get two TXT and CNAME records (optional but required for pointing to website traffic).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530850/original/coxKVPu6rE2_UnyOTHI7MvX7Rkb4iAGREA.png?1681398600)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530855/original/abdBuhNtt9uFlqErTUyuPja6bQK2ikgmWg.png?1681398600)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530848/original/n5svUU6tj_fQApPFqWpYZTJ9UxAQwT-OBw.png?1681398599)

2) Copy the Key and Value of the TXT and CNAME records. Configure the TXT records and CNAME records for your Domain in your DNS provider

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292534096/original/oE0CLprQjptAytDcp_Xm-6Ev-ac-7zUMmA.gif?1681399427)

**Please Note:**

```
If you are using CLoudflare, please make sure to disable Cloudflare Proxy and switch the Proxy status to DNS only.
```

After inserting the TXT and CNAME records into your DNS provider, return to your WordPress dashboard, checkmark the please; **I have added the above domain records in my domain provider's DNS settings** checkbox, and then click on **Verify Records.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530849/original/oAZdGx2nkSb3-JApojyZS_nVQBBzALIvDg.png?1681398599)

3) Once configured the Domain will be set as your Primary Domain by Default.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530856/original/9iYglnY1MRzECVNg28aHPna2-lXvS0VE2A.png?1681398600)

### **b) Adding additional domains for your WordPress site**

1) To add additional domains, follow the same steps mentioned above. This time you only need to add your CNAME record.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530853/original/wK2mm_5hwXBurGgJdMu1VSDlyAaZvs5M2w.png?1681398600)**

2) Any additional domain will not be set as Primary by Default, and the user can opt to set it as Primary if required.

3) You will see an unverified tag near the Domain for any added domain, but the DNS Verification is not yet done.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530858/original/Nw8XotE7JEXA5mI6lDTL3oH_-2qeIrpjkg.png?1681398600)

4\. Click on DNS Settings to add your credentials to your domain hosting platform

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530859/original/z0Za_x_NjIKDtX6kqbOemqkfWOR-7UdUEg.png?1681398600)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530857/original/tMNMCLWQ5FA8sNPzD-eLtwMI0SNTWlduwg.png?1681398600)

### **c) Adding Root Domain to WP site:**

The term "Root Domain" refers to the domain name that represents the main entry point for a website, usually denoted by adding "www" in front of the domain name (www.example.com). The "APEX Domain" or "naked domain" refers to the domain name without the "www" prefix (example.com).

The CNAME value for Root Domain (www.example.com) and APEX Domain (example.com) is identical by default. If you have added your root domain already, use the CNAME Value of your root domain to set up your APEX domain and vice versa.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530772/original/kGpS4j0Hfwg6kwcKiZj-gsqsrkczpMI0kw.png?1681398574)**

If you try adding an APEX Domain (example.com) after adding a primary root domain, you will get the following information. Use the CName name and Value provided here to configure the DNS records.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292530852/original/o6UEM2Lg8E1nVCw2Hy1gYmPodjgsxdiLLg.png?1681398600)**

**Please Note:**

```
For Users having a domain in GoDaddy, Please use the Name as your domain name instead of '@'
```

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001237381-wordpress-adding-domains-for-your-site*  
*Generated on: 2025-10-28T15:58:47.017Z*
