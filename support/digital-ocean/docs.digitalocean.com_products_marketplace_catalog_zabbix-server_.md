---
url: "https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/"
title: "Zabbix server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/)
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

- Zabbix server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Zabbix server

Generated on 6 Apr 2022
from [the Zabbix server catalog page](https://marketplace.digitalocean.com/apps/zabbix-server)

Zabbix is an enterprise-class open source distributed monitoring solution designed to monitor and track performance and availability of network servers, devices, services and other IT resources. Zabbix is an all-in-one monitoring solution that allows users to collect, store, manage and analyze information received from IT infrastructure, as well as display on-screen, and alert by e-mail, SMS or Jabber when thresholds are reached. Zabbix allows administrators to recognize server and device problems within a short period of time and therefore reduces the system downtime and risk of system failure. The monitoring solution is being actively used by SMBs and large enterprises across all industries and almost in every country of the world.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Zabbix server | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Zabbix web | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Zabbix agent | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Zabbix get | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Zabbix sender | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Zabbix Java gateway | [5.0.6](https://www.zabbix.com/release_notes) | [GNU GPLv2](https://opensource.org/licenses/GPL-2.0) |
| Nginx | [1.18.0](http://nginx.org/en/CHANGES) | [Custom](http://nginx.org/LICENSE) |
| MySQL | [8.0.21](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-21.html) | [GNU GPLv2](https://downloads.mysql.com/docs/licenses/mysqld-8.0-gpl-en.pdf) |
| PHP | [7.2.24](https://www.php.net/releases/index.php) | [PHP License v3.01](http://www.php.net/license/3_01.txt) |
| OpenJDK | [1.8.0.272](http://openjdk.java.net/projects/jdk8/) | [GNU GPLv2](http://openjdk.java.net/legal/gplv2+ce.html) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=zabbix-7-6)

## Creating an App using the API

In addition to creating a Droplet from the Zabbix server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Zabbix server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"zabbix-7-6"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Zabbix server

Login in to your Zabbix server via SSH. In the prompt you should see Zabbix web interface username (Admin) and randomly generated password.

Then in a web browser go to https://YourDropletIP and login with Zabbix web interface username name and password.

Further information can be found at:

- [Zabbix Documentation](https://www.zabbix.com/manuals "Zabbix Documentation")
- [Zabbix Forum](https://www.zabbix.com/forum "Zabbix Forum")
- [Zabbix Community Channels](https://www.zabbix.com/community "Zabbix Community Channels")
- [Inquiring about Zabbix Professional Services](https://www.zabbix.com/services "Zabbix Professional Services")

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Zabbix server](https://docs.digitalocean.com/products/marketplace/catalog/zabbix-server/#getting-started-after-deploying-zabbix-server)

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