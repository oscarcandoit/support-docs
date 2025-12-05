---
url: "https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/"
title: "ThingsBoard Professional Edition | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/)
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

- ThingsBoard Professional Edition

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ThingsBoard Professional Edition

Generated on 18 Jun 2020
from [the ThingsBoard Professional Edition catalog page](https://marketplace.digitalocean.com/apps/thingsboard-professional-edition)

ThingsBoard is an IoT platform for data collection, processing, visualization, assets and devices management. It enables device connectivity via industry standard IoT protocols - MQTT, CoAP and HTTP. ThingsBoard combines scalability, fault-tolerance and performance so you will never lose your data. ThingsBoard Professional Edition is a closed-source advanced version of open-source ThingsBoard IoT platform with several significant value-add features.

ThingsBoard Enterprise subscription plan includes unlimited number of devices and assets, and all TB PE features:

- Advanced RBAC for IoT Advanced management of user roles and permissions
- White-labeling System, Tenant and Customer level users are able to define color scheme and logos to be used
- Entity groups Each device or asset may be related to multiple Groups
- Scheduler Schedule various types of events: report generation, commands to devices and configuration updates
- Reporting Generate great looking reports using dashboards visualization capabilities
- Export widget data to csv/xls Widgets data can be exported to CSV and XLS formats
- Data converters feature - ability to define custom data converter from device payload to a common ThingsBoard payload format and vice versa
- Platform Integrations feature Ability to stream device and asset data from external applications, third-party IoT Platforms and connectivity providers to ThingsBoard

Visit [https://thingsboard.io for more details.](https://thingsboard.io/products/thingsboard-pe/)

To try ThingsBoard Community Edition, visit [ThingsBoard Community Edition](https://marketplace.digitalocean.com/apps/thingsboard-community-edition) 1-Click App on DigitalOcean Marketplace.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [ThingsBoard Professional Edition](https://thingsboard.io/) | [2.4.0PE](https://thingsboard.io/docs/reference/releases/#thingsboard-pe) | [Custom](https://thingsboard.io/products/thingsboard-pe/eula/) |
| [OpenJDK](https://openjdk.java.net/) | [1.8.0\_212](https://mail.openjdk.java.net/pipermail/jdk8u-dev/2019-April/009115.html) | [GPL 2](https://github.com/openjdk/jdk/blob/master/LICENSE) |
| [PostgreSQL](https://www.postgresql.org/) | [10.9](https://www.postgresql.org/docs/release/10.9/) | [Postgre SQL](https://opensource.org/licenses/postgresql) |
| [HAProxy](https://www.haproxy.org/) | [1.8.8](https://www.haproxy.org/download/1.8/src/CHANGELOG) | [GPL 2](https://github.com/haproxy/haproxy/blob/master/LICENSE) |
| [Certbot](https://certbot.eff.org/) | [0.23.0](https://packages.ubuntu.com/bionic/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=thingsboardpe-18-04)

## Creating an App using the API

In addition to creating a Droplet from the ThingsBoard Professional Edition 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ThingsBoard Professional Edition Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"thingsboardpe-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ThingsBoard Professional Edition

_This Marketplace listing does not include getting-started steps._

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/#creating-an-app-using-the-api)
- [Getting Started After Deploying ThingsBoard Professional Edition](https://docs.digitalocean.com/products/marketplace/catalog/thingsboard-professional-edition/#getting-started-after-deploying-thingsboard-professional-edition)

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