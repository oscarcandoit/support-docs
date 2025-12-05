---
url: "https://docs.digitalocean.com/products/marketplace/catalog/qloapps/"
title: "QloApps | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/qloapps/)
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

- QloApps

[Give Feedback](https://ideas.digitalocean.com/documentation)

# QloApps

Generated on 2 Jun 2022
from [the QloApps catalog page](https://marketplace.digitalocean.com/apps/qloapps)

QloApps is an Open Source software that launches a multilingual Hotel Booking Website within a matter of few minutes that too for Free. QloApps allows you to take and manage both on-desk and online hotel booking. It consists of all the features which are required to take your hotel business to its pinnacle.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Apache | [2.4.29](https://packages.ubuntu.com/bionic/apache2) | [Apache2](https://www.apache.org/licenses/) |
| PHP | [7.2.24](https://packages.ubuntu.com/bionic/php) | [PHP v3.01](https://www.php.net/license/3_01.txt) |
| Mysql | [5.7.31](https://packages.ubuntu.com/bionic/mysql-server-5.7) | [Mysql 5.7 GPL](https://downloads.mysql.com/docs/licenses/mysqld-5.7-gpl-en.pdf) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=webkul-qloapps-18-04)

## Creating an App using the API

In addition to creating a Droplet from the QloApps 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB QloApps Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"webkul-qloapps-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying QloApps

After creation of the droplet you can ssh login to your droplet.

To login to your droplet from linux/mac system run below command

**ssh root@your-droplet-ip**

For windows system, please refer to below link

[https://www.ssh.com/ssh/putty/windows/](https://www.ssh.com/ssh/putty/windows/)

When you login to your droplet for the first time, it will ask for the domain name for QloApps setup. You must map your domain to your droplet ip beforehand. If you do not have any domain you just need to put your droplet ip.

After Initial setup is completed, you can open your QloApps url in the browser for rest of the setup.

For the rest of the setup in the browser, use below details for database configuration.

**Database name : qloapps**

**Database login : qloapps**

**Database password : password stored in /root/.digitalocean\_password**

Look for password inside the file by running the command

**cat /root/.digitalocean\_password**

For backend login, it will ask you to remove the **install** directory.

Your web directory is **/var/www/html** .

You can remove the install directory by running the command

**rm -rf /var/www/html/install.**

You can check our QloApps source code here.

[https://github.com/webkul/hotelcommerce](https://github.com/webkul/hotelcommerce)

**About DigitalOcean Managed DBaaS**

If you select to install a DigitalOcean Managed Database while creating this 1-click app, DigitalOcean handles the creation of the database cluster as well as the Droplet. The Droplet will have a **DATABASE\_URL** environment variable configured including a database connection string, such as:

**\\* postgresql://doadmin:@dbaas-db-11111-do-user-1111111-1.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require**\*

Your managed database configuration and credentials will be stored in _**/root/.digitalocean\_dbaas\_credentials**_

**Please note that there is additional configuration needed to connect your managed database to this droplet after creation.**

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/qloapps/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/qloapps/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/qloapps/#creating-an-app-using-the-api)
- [Getting Started After Deploying QloApps](https://docs.digitalocean.com/products/marketplace/catalog/qloapps/#getting-started-after-deploying-qloapps)

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