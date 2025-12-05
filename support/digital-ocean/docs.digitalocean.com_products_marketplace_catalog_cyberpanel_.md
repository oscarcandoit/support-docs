---
url: "https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/"
title: "CyberPanel | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/)
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

- CyberPanel

[Give Feedback](https://ideas.digitalocean.com/documentation)

# CyberPanel

Generated on 11 Sep 2025
from [the CyberPanel catalog page](https://marketplace.digitalocean.com/apps/cyberpanel)

The CyberPanel image provides a One-Click installer to automatically install OpenLiteSpeed, LSCache, WordPress, Prestashop, Joomla and contains all of the essential features, including HTTP/3 support. It also automates the initial setup for components like Mail service and DNS, to reduce the time it takes to get set up for hosting.

**Highlights**

- Redis Mass Hosting
- Imunify360 Integration
- Git Manager
- CloudFlare DNS Synchronization
- Web Based Terminal
- Docker Manager.
- Different Level Of users.
- Auto SSL.
- FTP Server.
- Light weight DNS Server (PowerDNS).
- PHPMYAdmin.
- Email Support (Rainloop).
- File Manager.
- PHP Management.
- Firewall.
- One click Backup and Restore.
- One click conversion from OpenLiteSpeed to LiteSpeed Enterprise.
- Auto Backups to DigitalOcean Spaces.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| CyberPanel | [2.4.4](https://cyberpanel.net/docs/change-log-for-cyberpanel/) | [GPLv3](https://github.com/usmannasir/cyberpanel/blob/v2.0.0/LICENSE) |
| OpenLiteSpeed | [1.8.4](https://openlitespeed.org/release-log/) | [GPLv3](https://www.litespeedtech.com/open-source/openlitespeed) |
| PHP | [8.4](http://rpms.litespeedtech.com/debian/) | proprietary |
| Rainloop | [1.14.0](https://www.rainloop.net/changelog/) | [AGPLv3](https://www.rainloop.net/licensing/) |
| PowerDNS | [4.1.1](https://doc.powerdns.com/) | [GPLv2](https://github.com/PowerDNS/pdns/blob/master/COPYING) |
| Redis | [5.0.7](https://packages.ubuntu.com/focal/redis) | [BSD](https://redis.io/topics/license) |
| memcached | [1.5.22](https://www.ubuntuupdates.org/package/core/focal/main/updates/memcached) | [BSD](https://github.com/memcached/memcached/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=litespeedtechnol-cyberpanel-20-04)

## Creating an App using the API

In addition to creating a Droplet from the CyberPanel 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB CyberPanel Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"litespeedtechnol-cyberpanel-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying CyberPanel

## For more support

Please visit our [Quick Start page](https://docs.litespeedtech.com/cloud/images/cyberpanel/) for details on how to access your CyberPanel One Click and complete your configuration.

Community Support: [![null](https://img.shields.io/badge/slack-LiteSpeed-blue.svg?logo=slack)](https://www.litespeedtech.com/slack)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/#creating-an-app-using-the-api)
- [Getting Started After Deploying CyberPanel](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/#getting-started-after-deploying-cyberpanel)
- [For more support](https://docs.digitalocean.com/products/marketplace/catalog/cyberpanel/#for-more-support)

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