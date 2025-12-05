---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site
category: articles
type: article
scraped: 2025-10-28T15:57:09.044Z
title:  How to point your domains or subdomains to your WordPress Site : LeadConnector 
status_code: 200
---

#  How to point your domains or subdomains to your WordPress Site : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Funnels & Websites Category](https://help.leadconnectorhq.com/support/solutions/48000454554) [WordPress](https://help.leadconnectorhq.com/support/solutions/folders/48000683114)

## How to point your domains or subdomains to your WordPress Site  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site\# "Print this Article")

Modified on: Wed, 1 Jun, 2022 at 6:52 AM

* * *

## **TABLE OF CONTENTS**

- ## [Setting up a new WordPress Site](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site\#Setting-up-a-new-WordPress-Site)


  - [Setting up new WordPress as a Blog](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Setting-up-new-WordPress-as-a-Blog)
    - [Linked Articles for other Domain Registrars](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Linked-Articles-for-other-Domain-Registrars)
  - [Setting up new WordPress as your main site](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Setting-up-new-WordPress-as-your-main-site)
- [Migration of an Existing Website](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Migration-of-an-Existing-Website)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#FAQs)
  - [Q1: I'm unable to add the same domain to my other subaccount / location:](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Q1%3A-I'm-unable-to-add-the-same-domain-to-my-other-subaccount-/-location%3A)
  - [Q2: Why can't I update my primary domain?](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Q2%3A-Why-can't-I-update-my-primary-domain?)
  - [Q3: I've added the A / CNAME record but the domain is still not being added](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Q3%3A-I've-added-the-A-/-CNAME-record-but-the-domain-is-still-not-being-added)
  - [Q4: I can't connect my root domain (ex. mydomain.com)](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site#Q4%3A-I-can't-connect-my-root-domain-(ex.-mydomain.com))

If you are setting up a new WordPress website, migrating & existing one or just adding additional domains, you will need to configure your domain's DNS to point to your WordPress instance. This article will help you in the setup and also share some best practices with you.

# Setting up a new WordPress Site

If you are creating a new WordPress site, the following two use cases will be relevant for you.

## Setting up new WordPress as a Blog

In this most likely you plan to use your WordPress site on a subdomain like [blog.mydomain.com](https://blog.mydomain.com/) or [updates.mydomain.com](https://updates.mydomain.com/). In this case, once you are on this screen, pick "I want to create a new website"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229694461/original/T49r8HPUFpDfasSBEi9NpPayBXtemDLJdw.png?1654083940)

Then login to your domain provider ( _like CloudFlare, GoDaddy, BigRock, NameCheap, etc._) and add a CNAME record for [blog.mydomain.com](https://blog.mydomain.com/) pointing to [wp.msgsndr.com](https://wp.msgsndr.com/). An example of this using BigRock domain provider is shown below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171643220/original/2Q9zJfhG_hF7VtxJNHboRrP5bumnTyaXyQ.png?1639679737)

### Linked Articles for other Domain Registrars

1. [How to add a CNAME Record in CloudFlare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
2. [How to add a CNAME Record in Domain.com](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
3. [How to add a CNAME Record in BlueHost](https://my.bluehost.com/hosting/help/resource/714)
4. [How to add a CNAME Record in HostGator](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
5. [How to add a CNAME Record in GoDaddy](https://ca.godaddy.com/help/add-a-cname-record-19236)
6. [How to add a CNAME Record in NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

```
Some domain providers take 24 - 48 hours to propagate DNS changes while others are instant. You can use tools like [https://dnschecker.org/](https://dnschecker.org/) to check if your DNS changes are propagated or not.
```

Once your DNS changes are propagated, you can come back to the following screen and verify that your domain is correctly pointed

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229694824/original/Go3dZ6ph-8Q2USciwUvUEO_ODrcASa7JrA.png?1654084022)

If your domain is not pointed correctly, you will get an error like the example below

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229695373/original/nbHnFzXWii09sc0cGxMJRqZVz5Q2y-dAXw.png?1654084159)

This can happen due to a few reasons

1. There is a typo in your domain name \[ _like in the example above_\]

In this scenario fixing the typo will resolve your issue

2. Your DNS changes haven't propagated yet

In this case you need to wait longer and try again after a few hours or the next day to see if it works

3. Your DNS configuration is not setup correctly

Please reach out to your Domain Provider and discuss the errors with their support team

4. Maybe you have conflicting records for the same subdomain \[ _for example if [blog.mydomain.com](https://blog.mydomain.com/) has a CNAME record pointing to [wp.msgsndr.com](https://wp.msgsndr.com/) but it also has an A record pointing to some other provider_\]

In such cases removing the other duplicate record will fix your issue


```
In most cases with your DNS setup, our support teams will not be able to assist you and you may need to reach out to your domain provider.
```

## Setting up new WordPress as your main site

If you wish to use your WordPress site as your main site you will most likely use it on [mydomain.com](https://mydomain.com/) and [www.mydomain.com](https://www.mydomain.com/)

In such a scenario the steps would remain similar as above, but you will need to point an A record for you root domain (mydomain.com) to 34.149.157.183 and a CNAME for your subdomain ( [www.mydomain.com](http://www.mydomain.com/)) to [wp.msgsndr.com](https://wp.msgsndr.com/). An example of such a setup is given below.

### A record for [mydomain.com](https://mydomain.com/)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171653872/original/iAcCaLykU6_CRQaW1-oEkV9qEZsaDh1mYA.png?1639682652)

### CNAME for [www.mydomain.com](https://www.mydomain.com/)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171657076/original/ds7JsTOXfjri0BfpmHePKgsR1BpBgLtzvw.png?1639683646)

# Migration of an Existing Website

If you already have an existing WordPress site that has live traffic that you are trying to migrate to our servers, you will need to change DNS twice. We do this 2 step process to ensure that your live site does not have a downtime during the migration process. This ensures that your (or your client's) website visitors have a consistent experience during the time of migration process.

## At the beginning of Migration

When you start your migration you will be asked to enter a dummy CNAME & to point it to a randomly generate value to verify your domain. This step will look like this:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229695901/original/8I_YEko54b6YimTMhNuzBhFsrcdVbuIpAQ.png?1654084237)

This helps us verify the domain which is the origin of your backup file.

## After Successful Migration

Once your migration is completed, you will be issues a temporary domain that looks like [wp-my-domain-com.msgsndr.com](https://wp-my-domain-com.msgsndr.com/) which will allow you to preview your migrated website, login to wp-admin portal and test out all your customizations. Once you have checked your migration, you can prepare to divert traffic from your old website to the newly migrated website.

To do this you will need to point your live traffic domains like

- [domain.com](https://domain.com/) (root domain to 34.149.157.183via A Record)
- [www.domain.com](https://www.domain.com/) (subdomain to wp.msgsndr.com via CNAME)
- [blog.domain.com](https://blog.domain.com/) (subdomain to wp.msgsndr.com via CNAME)

Once your domain changes have propagated, you will need to go to location view -> sites -> WordPress and add them as additional domains.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229696145/original/4h3IDzgcb8UL7cM9TfcHQ_ey0Nfjwfwiog.png?1654084285)

Then you can log-in to wp-admin -> dashboard -> settings in left menu -> general and change the Site URL and WordPress URL as shown below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229696339/original/bj8DN2fPf1ohlEMzIU1ZhmGLNBQQ0wytQQ.png?1654084327)

# FAQs

## Q1: I'm unable to add the same domain to my other subaccount / location:

Same domain / subdomain can't be used in 2 locations

## Q2: Why can't I update my primary domain?

Additional domains can be deleted and used elsewhere but Primary domains can't be recycled as of now

## Q3: I've added the A / CNAME record but the domain is still not being added

This can happen due to a few reasons

1. There is a typo in your domain name \[ _like in the example above_\]

In this scenario fixing the typo will resolve your issue

2. Your DNS changes haven't propagated yet

In this case you need to wait longer and try again after a few hours or the next day to see if it works

3. Your DNS configuration is not setup correctly

Please reach out to your Domain Provider and discuss the errors with their support team

4. Maybe you have conflicting (multiple) records for the same subdomain \[ _for example if [blog.mydomain.com](https://blog.mydomain.com/) has a CNAME record pointing to [wp.msgsndr.com](https://wp.msgsndr.com/) but it also has an A record pointing to some other provider_\]

In such cases removing the other duplicate record will fix your issue

## Q4: I can't connect my root domain (ex. [mydomain.com](https://mydomain.com/))

Please make sure there are no additional AAA, TXT, records etc if you plan to use that slug / root domain for WordPress

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site*  
*Generated on: 2025-10-28T15:57:09.044Z*
