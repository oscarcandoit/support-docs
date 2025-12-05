---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record
category: articles
type: article
scraped: 2025-10-28T16:08:24.413Z
title:  How to Add a Domain and Verify DNS Records : LeadConnector 
status_code: 200
---

#  How to Add a Domain and Verify DNS Records : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/48000454677) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/folders/48000687936)

## How to Add a Domain and Verify DNS Record  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record\# "Print this Article")

Modified on: Mon, 8 Apr, 2024 at 11:23 PM

* * *

This guide will help you add and verify your email domain.

Verifying your domain is really important before you start sending emails. We ask everyone to do this to track opens and clicks, stop spam, and make sure only you and your team can send emails from your domain.

**TABLE OF CONTENTS**

- [Add Your Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record#Add-Your-DomainOnce-you-are-in-the-Sub-account-%3E-Click-on-Settings-%3E-Email-Services-%3E-Dedicated-Domain-and-IP-%3E-+-Add-Domain.Enter-the-domain-you-want-to-use-in-the-%E2%80%9CEnter-domain-name%E2%80%9D-field,-then-click-)
- [Verify Your Domain](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record#Verify-Your-Domain)
  - [Option 1: Connect Your domain(Auto Configure DNS)](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record#Option-1%3A-Connect-Your-domain(Auto-Configure-DNS))
  - [Option 2: Set Up Manually](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record#Option-2%3A-Set-Up-Manually)

* * *

## **Add Your Domain**  - Once you are in the Sub-account > Click on **Settings > Email Services > Dedicated Domain and IP > + Add Domain**.            ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024040549/original/b9X7tSQqLMHcDrVQR5deOToiidQS33lhcg.png?1712317613)    - **Enter the domain** you want to use in the “Enter domain name” field, then **click "Add & Verify."**                  ```   we recommend using a subdomain for better email deliverability.   ```

* * *

## **Verify Your Domain**

Here are two options for you: Connect through your DNS provider or Set up manually.

- ### **Option 1: Connect Your domain(Auto Configure DNS)**

This is the easiest method to verify and authenticate your domain. It uses our built-in connection with many top DNS providers to automatically set up DNS records. This way, you can verify and authenticate your domain in just one simple process.
1. Click “ **Continue**” on the next modal.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024040511/original/GyJoW9Ue2OD_SqbajlFvGWmD6V5GIqfn5w.png?1712317583)

2. Our system will detect your DNS provider and then guide you directly to their platform.





     ```
     Note: The "Configure Domain" option may not be compatible with all DNS providers. If our system is unable to identify your provider, the records will be shown in a modal window. [Click here](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record#Option-2%3A-Set-up-manually) to manually add the DNS records.
     ```



     **The example below shows the DNS provider is Cloudflare.** To move forward, you will need to have the credentials to log into your DNS provider.



     Click “ **Authorize domain**” on the next modal.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024040695/original/Gxh0EoqEsLQdKybkYn8ane4ymf89pwHV7A.png?1712317729)

3. Login to your DNS provider. This will look slightly different for each provider. This example is Cloudflare. The login method will also be slightly different for each DNS provider.



     The DNS provider in question may ask you to enter a confirmation code emailed or texted to you.



     Click “ **Authorize**” on the Cloudflare page.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024182925/original/dASFIiw7X2yNMgxetHyCI9i154eWIxYdNg.png?1712635985)

4. You will redirected to the domain verification page.





     ```
     Note: It might take anywhere from 1 to 10 minutes for DNS changes to spread across the internet. Typically, it happens faster, but don't worry if it doesn't happen right away.

     DMARC: If you've already added the policy to your root domain, you can skip adding the DMARC record for the sub-domain.
     ```



     If everything is set right you’ll see a **Verified** status like this:



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024182966/original/lJgc5zwDjmAYfgdlqsFFd-4Ef00pan1idQ.png?1712636006)
- ### **Option 2: Set Up Manually**


1. Once you've added the domain, if our system couldn't identify your provider, the records will be displayed for you to see.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024182970/original/eYNLZZMFxs-Q1_vJzutB8MfStvdqJroOWg.png?1712636025)Most DNS providers will typically require the following information to set up your DNS records:
     - **Root domain example:**



       |     |     |
       | --- | --- |
       | Type | Choose the for each row: TXT, CNAME and MX |
       | Name or Hostname | Copy and paste the "Name" for each DNS record as follows: Use "@" if your DNS was not verified. Remove the "@" and add your root domain name instead.<br>**Example:** if your domain name is "yourdomain.com", replace "@" with "yourdomain.com". |
       | Value or Record | Copy and paste the “Value” shown for each DNS record. |
       | TTL | 5 minutes |

     - **Sub-domain example:**





       |     |     |
       | --- | --- |
       | Type | Choose the for each row: TXT, CNAME and MX |
       | Name or Hostname | Copy and paste the "Name" for each DNS record.<br>**Example**: If the hostname is mail.yourdomain.com, you may just have to enter the subdomain, which would be "mail". If it's not verified, add the full name like mail.yourdomain.com. |
       | Value or Record | Copy and paste the “Value” shown for each DNS record. |
       | TTL | 5 minutes |
2. If everything is set right you’ll see a Verified status like this:



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024182979/original/omeIHk6jeE3QTNJJEjqI0ZvCWkLLgBc7QQ.png?1712636046)
3. You will be redirected to the Dedicated Domain page where you can see the active status.





     ```
     Note: After your domain is verified, issuing the SSL certificate may take between 1 to 10 minutes. Usually, it happens faster, but don't worry if it doesn't happen immediately.
     ```

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024075588/original/KlEFbcsAmeCfWZFwZnHW5y8l4oepCRgHAw.png?1712388479)

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000002223-how-to-add-a-domain-and-verify-dns-record*  
*Generated on: 2025-10-28T16:08:24.413Z*
