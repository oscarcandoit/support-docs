---
url: "https://docs.digitalocean.com/products/marketplace/catalog/wordpress/"
title: "WordPress | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- WordPress

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WordPress

Generated on 20 Nov 2025
from [the WordPress catalog page](https://marketplace.digitalocean.com/apps/wordpress)

> - “WordPress is a factory that makes webpages” Fred Meyer

WordPress is a free and open-source content management system. Originally it was intended to be a blog-publishing system, but has evolved to support other web content types including more traditional mailing lists and Internet forums, media galleries, membership sites, learning management systems (LMS) and online stores. WordPress is used by 42.8% of the top 10 million websites as of October 2021.

## Before you deploy your first WordPress Droplet

### Get a Domain name

Use this [DNS quickstart](https://docs.digitalocean.com/products/networking/dns/quickstart/) guide to get your DNS setup on DigitalOcean. You’ll first need to purchase and register your domain through a third party, such as Name.com, GoDaddy, etc…

- **Why do you need a domain name?**

This is how others will access your server and how you and your users will be identified on the network.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| WordPress | [6.8.1](https://wordpress.org/news/) | [GPL 2](https://wordpress.org/about/license/) |
| Apache | [2.4.52](https://packages.ubuntu.com/focal/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| MySQL server | [8.0.42](https://packages.ubuntu.com/focal/mysql-server) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| PHP | [8.3.0](https://packages.ubuntu.com/focal/php) | [PHP v3.01](http://php.net/license/index.php) |
| Fail2ban | [5.4.1](https://plugintests.com/plugins/wporg/wp-fail2ban/latest) | [GPL 2](https://github.com/fail2ban/fail2ban/blob/0.11/COPYING) |
| Postfix | [3.6.4](https://packages.ubuntu.com/focal/postfix) | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |
| Certbot | [1.21](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=wordpress-20-04)

## Creating an App using the API

In addition to creating a Droplet from the WordPress 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB WordPress Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"wordpress-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying WordPress

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your WordPress Droplet 1-Click, you will be greeted by a WordPress setup script.

_**If you do not have a Domain yet you can enter the IP address of your Droplet into the setup script when prompted for the Domain/Subdomain instead.**_

The first step is to enter your domain name. Make sure that your domain is pointing to the new droplet IP. If your DNS is managed by DigitalOcean, it should look like this:

![WordPress DNS Setup Example](https://i.imgur.com/zRbRECQ.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

Once your A record is set up, you are ready to enter your domain in the script:

![WordPress Domain Prompt](https://i.imgur.com/prDL8Ky.png)

Next, the script will ask you user-related data:

![WordPress User Data Prompt](https://i.imgur.com/1uvpST4.png)

After you acknowledge data is correct, the script will ask if you want to configure HTTPS automatically for your droplet. We highly recommend setting HTTPS since using a domain is useless without it.

You will need to provide the email address which will receive security and renewal notices:

![Certbot Email Prompt](https://i.imgur.com/xYaZja6.png)

Finally, after reading the LetsEncrypt Terms of Service and selecting whether to share or not your email address with the Electronic Frontier Foundation, the script will ask you which domain names would you like to activate HTTPS for:

![WordPress HTTPS Activation Prompt](https://i.imgur.com/vwFGHAr.png)

Consider activating HTTPS for both naked and WWW versions of your domain by specifying 1,2.

WordPress will take a few minutes to set up plugins and finish installation, after that you can access your fresh WordPress Droplet by typing your domain name in the browser. For accessing the admin console, use https://%YOUR\_DOMAIN%/wp-admin.

_**If you entered an IP address instead of the Domain name you can access the admin console by using https://%YOUR\_IP%/wp-admin instead.**_

## Getting started with WordPress

WordPress official website has quite a few excellent sources of information for beginners and even experienced users.

If you are starting your journey with WordPress, consider taking a look at the official [courses](https://wordpress.com/learn/all-courses/).

[Articles](https://wordpress.com/learn/articles/) page contains some lovely ideas on how to improve your WordPress website. Or you can get exclusive knowledge from WordPress experts on [webinars](https://wordpress.com/learn/webinars/).

## Droplet Summary

- The root password for the MySQL instance running on your Droplet is in /root/.digitalocean\_password. The Droplet root user will not be prompted for the MySQL password.
- If you’re connecting to a DigitalOcean Managed Database, your MySQL connection information can be found in /var/www/html/wp-config.php.
- The web root is /var/www/html, and the WordPress configuration file is /var/www/html/wp-config.php.
- You can get information about the PHP installation by logging into the Droplet and running php -i.
- UFW firewall allows only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- Droplet sets the MySQL root password, runs mysql\_secure\_installation, and creates a wordpress user with the necessary permissions. The Droplet root user will not be prompted for the MySQL password. Keep in mind that if you’re connecting to a DigitalOcean Managed Database, the locally installed database will be disabled.
- Droplet sets up the debian-sys-maint user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL root user password.
- Droplet creates the initial WordPress configuration file to set up [salt keys](https://developer.wordpress.org/reference/functions/wp_salt/) and allow the WordPress instance to connect to the database.
- XML-RPC is disabled to help prevent DDoS and other brute force attacks.
- Some of PHP’s settings are modified to increase the maximum file size and execution time.
- [Apache rewrite module](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) is enabled so the WordPress permalink feature will work.
- Apache is configured with UseCanonicalName On to mitigate [CVE-2017-8295](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8295).

## Protect your Wordpress deployments with WPGuardian!

[WPGuardian](https://marketplace.digitalocean.com/add-ons/wp-guardian) keeps all your WordPress sites up-to-date and protected. Embrace proactive security to maintain control and visibility over the status of both sites and servers, all in one SaaS panel.

## Backup your Wordpress data with SnapShooter

[SnapShooter](https://marketplace.digitalocean.com/add-ons/snapshooter), an offering from DigitalOcean, offers comprehensive backup solutions for all your cloud resources, including your WordPress application data. To access [SnapShooter](https://marketplace.digitalocean.com/add-ons/snapshooter), navigate to the left-hand navigation menu in your DigitalOcean cloud console. As part of the free tier, you can back up a single resource, such as your WordPress application data.

In this article...

- [Before you deploy your first WordPress Droplet](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#before-you-deploy-your-first-wordpress-droplet)
  - [Get a Domain name](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#get-a-domain-name)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#creating-an-app-using-the-api)
- [Getting Started After Deploying WordPress](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#getting-started-after-deploying-wordpress)
- [Getting started with WordPress](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#getting-started-with-wordpress)
- [Droplet Summary](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#droplet-summary)
- [Protect your Wordpress deployments with WPGuardian!](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#protect-your-wordpress-deployments-with-wpguardian)
- [Backup your Wordpress data with SnapShooter](https://docs.digitalocean.com/products/marketplace/catalog/wordpress/#backup-your-wordpress-data-with-snapshooter)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices