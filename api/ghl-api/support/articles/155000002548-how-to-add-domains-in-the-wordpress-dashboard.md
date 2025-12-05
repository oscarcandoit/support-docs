---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000002548-how-to-add-domains-in-the-wordpress-dashboard
category: articles
type: article
scraped: 2025-10-28T16:08:52.623Z
title:  How to Add Domains in the WordPress Dashboard : LeadConnector 
status_code: 200
---

#  How to Add Domains in the WordPress Dashboard : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Funnels & Websites Category](https://help.leadconnectorhq.com/support/solutions/48000454554) [WordPress](https://help.leadconnectorhq.com/support/solutions/folders/48000683114)

## How to Add Domains in the WordPress Dashboard  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000002548-how-to-add-domains-in-the-wordpress-dashboard\# "Print this Article")

Modified on: Fri, 31 May, 2024 at 4:33 AM

* * *

Adding a domain to a WordPress site is necessary to make the website accessible to the public through that Domain. A domain serves as the website's address, and visitors can use it to access the site.

The article provides step-by-step instructions for adding a primary domain and additional domains to a WordPress site.

**TABLE OF CONTENTS**

- [Adding Primary Domain in WordPress Dashboard:](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Adding-Primary-Domain-in-WordPress-Dashboard%3A)
  - [Step 1: Add Your Domain Name](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Step-1%3A-Add-Your-Domain-Name)
  - [Step 2: Configure SSL Certificate](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Step-2%3A-Configure-SSL-Certificate)
  - [Step 3: Update DNS](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Step-3%3A-Update-DNS)
- [Adding Sub Domain in WordPress Dashboard:](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Adding-Sub-Domain-in-WordPress-Dashboard%3A)
  - [Step 1: Add Your Sub-Domain Name](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Step-1%3A-Add-Your-Sub-Domain-Name)
  - [Step 2: Update CNAME and A record with your DNS provider](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Step-2%3A-Update-CNAME-and-A-record-with-your-DNS-provider)
- [Comprehensive Domain/Sub-Domain Dashboard:](https://help.gohighlevel.com/a/solutions/articles/155000002547?portalId=48000045315#Comprehensive-Domain/Sub-Domain-Dashboard%3A)

* * *

# **Adding Primary Domain in WordPress Dashboard:**

Go to your Sub-Account-> Sites-> WordPress Dashboard. In the Dashboard you will see a section for adding Domains/subdomain. Click on 'Add Domain' Button to proceed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893404/original/-7L_WNYFwWD5iTORmdjeYHiTLDlWHO5USg.jpeg?1717147939)

## **Step 1: Add Your Domain Name**

1. Navigate to the domain management section in your WordPress hosting dashboard.
2. Enter your desired domain name.
3. Our system will automatically verify if the domain is already associated with another location or agency.
4. If the domain is available, proceed to the next step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893401/original/cXOhxI3LUHGQaA2XkkFINAcU9NSLTQ9gTA.jpeg?1717147938)

## **Step 2: Configure SSL Certificate**

1. After your domain is verified, you will need to configure your SSL certificate.
2. Add the provided TXT records to your DNS provider.
3. Once the TXT records are successfully added and verified, you can move on to the final step.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893403/original/vyi07eWDFelwfMaDW3AiPW3dP499s-QXdQ.jpeg?1717147939)

```
1. While most SSL Records propagate within an hour, global updates take upto 48 hours.
2. Configure your TTL Value to 600 ms or the lowest value possible for optimal ssl record propagation.
```

## **Step 3: Update DNS**

1. In this step, you will need to update your DNS settings.
2. Add the provided CNAME and A records to your DNS provider.
3. Once the records are successfully added click on 'Verify DNS Records' button.
4. Go to the dashboard and Mark your Domain as Primary.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893402/original/wYVRaVWTM2fcOGQXG7ZI-FCNyCxwbt2GEg.jpeg?1717147938)

```
1. If your DNS Provider is Cloudflare, please turn off Proxy Settings
2. While most DNS updates activate within an hour, global updates take upto 48 hours.
3. Configure your TTL Value to 600 ms or the lowest value possible for optimal DNS record propagation.
```

# **Adding Sub Domain in WordPress Dashboard:**

Adding sub-domain is similar to adding your Domain. The SSL certificate for additional domains will be Verified in the Update DNS step and hence adding the TXT records is not required.

## **Step 1: Add Your Sub-Domain Name**

1. Navigate to the domain management section in your WordPress hosting dashboard and enter your desired domain name.
2. Our system will automatically verify if the domain is already associated with another location or agency. If the domain is available, proceed to the final step of updating DNS records.

## **Step 2: Update CNAME and A record with your DNS provider**

1. Add the provided CNAME and A records to your DNS provider.
2. Once the records are successfully added click on 'Verify DNS Records' button.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893399/original/eJ-c9XGda0j-w_UezZLKl9og2lJ8y_wzew.png?1717147938)

# **Comprehensive Domain/Sub-Domain Dashboard:**

Our new dashboard offers a comprehensive overview of domain management.

- **SSL Issuance Status:** Monitor the status of your SSL certificate issuance to ensure it is properly configured using the 'SSL issued/ SSL Not Issued' tags.
- **DNS Record Verification:** Check the verification status of your DNS records to confirm they are correctly set up using the 'Verified/ Not Verified' tags.
- **Domain Management:** You can add up to 5 domains or sub-domains. Designate one as your primary domain for better organisation.
- **Easy Prefix Adjustment:** Easily switch between www and non-www prefixes with a simple adjustment in the dashboard using the 'Change prefix to WWW/ Remove WWW Prefix' option.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893400/original/zX3UoqejgXrRSh8IjafVQ8zOSqkzjGpwHw.jpeg?1717147939)

```
If you need to delete and re-add a domain, please note that this process might take some time.
```

* * *

Our enhanced domain management flow ensures that adding and managing your domains is as smooth and efficient as possible. With the new streamlined steps and a powerful dashboard, you can enjoy greater control and simplicity in managing your WordPress hosting services.

For further assistance or if you have any questions, please contact our support team. Enjoy the new domain management experience!

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000002548-how-to-add-domains-in-the-wordpress-dashboard/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000002548-how-to-add-domains-in-the-wordpress-dashboard*  
*Generated on: 2025-10-28T16:08:52.623Z*
