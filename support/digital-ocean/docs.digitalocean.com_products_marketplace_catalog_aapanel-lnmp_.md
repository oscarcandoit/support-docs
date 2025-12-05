---
url: "https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/"
title: "aaPanel LNMP | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/)
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

- aaPanel LNMP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# aaPanel LNMP

Generated on 13 Nov 2024
from [the aaPanel LNMP catalog page](https://marketplace.digitalocean.com/apps/aapanel-lnmp)

## What is aaPanel

### Free and Easy-to-use Web Hosting Control Panel

### Simple and smart visualization

It’s easy to operate, Simple and friendly interactive experience, One-click installation of LEMP/LAMP website environment

### Become a master of server management easily

aaPanel is a Free and Open source Hosting control panel, encapsulates common Linux commands into functional modules, It can be completed in a few clicks on the panel

### Visible safety

One-click inspection of 16 common server security risks, firewall, whether the default port is modified, etc. and provide solutions, integrate free Fail2ban and Nginx WAF

## Functions

- WP Toolkit

- Nginx WAF

- Apache WAF

- Website statistics

- Tamper-proof

- System hardening

- Disk analysis

- Fail2ban

- MySQL Manager

- Redis Manager

- PHPMyAdmin autologin

- Web-Based Terminal

- Docker Manager

- FTP Server

- Email Support

- File Manager

- Multiple PHP Manager

- One-click Backup and Restore

- Auto Backups

- Auto SSL

- Nginx,Apache,OpenLiteSpeed Support

More…


## aaPanel LNMP Default install:

- Nginx 1.27
- Mysql 8.0
- PHP 7.4 and 8.3

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Nginx | 1.27 | BSD-2-Clause |
| PHP | 7.4 | PHP v3.01 |
| PHP | 8.3 | PHP v3.01 |
| MySQL server | 8.0.35 | GPL 2 with modifications |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=aapanel-aapanellnmp)

## Creating an App using the API

In addition to creating a Droplet from the aaPanel LNMP 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB aaPanel LNMP Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"aapanel-aapanellnmp"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying aaPanel LNMP

Use View Console or SSH tool to log in as root user.

Use `sudo bt default` to view access aaPanel link and user password information

`sudo bt default`

E.g.: use.your.ip replaced with the IP of your server

- aaPanel Internet Address: [https://use.your.ip:7800/login](https://use.your.ip:7800/login)

Note: that the password is only displayed once. If you forget it, you can use `bt 5` to modify it.

aaPanel Management script

Please use root user or sudo permission to execute

aaPanel CLI

`bt`

![](https://www.vultr.com/marketplace-assets/aapanel-readme_image-390428d9-dccb-439e-bd10-a8d04bdbdb37-1722329232.png)

View access link

`bt default`

or

`bt 14`

Change aaPanel login password，e.g. 123456

`echo 123456 | bt 5`

Change aaPanel username，e.g. useraa

`echo useraa | bt 6`

Change port of aaPanel, e.g. 8881

`echo 8881 | bt 8`

Site Configuration location

`/www/server/panel/vhost`

Site default directory

`/www/wwwroot`

Check panel logs

`bt 22`

aaPanel Stop

`bt stop`

aaPanel Start

`bt start`

aaPanel Restart

`bt restart`

Community support: [https://www.aapanel.com/forum/](https://www.aapanel.com/forum)

In this article...

- [What is aaPanel](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#what-is-aapanel)
  - [Free and Easy-to-use Web Hosting Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#free-and-easy-to-use-web-hosting-control-panel)
  - [Simple and smart visualization](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#simple-and-smart-visualization)
  - [Become a master of server management easily](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#become-a-master-of-server-management-easily)
  - [Visible safety](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#visible-safety)
- [Functions](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#functions)
- [aaPanel LNMP Default install:](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#aapanel-lnmp-default-install)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#creating-an-app-using-the-api)
- [Getting Started After Deploying aaPanel LNMP](https://docs.digitalocean.com/products/marketplace/catalog/aapanel-lnmp/#getting-started-after-deploying-aapanel-lnmp)

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