---
url: "https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/"
title: "VitalPBX | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/)
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

- VitalPBX

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VitalPBX

Generated on 23 May 2023
from [the VitalPBX catalog page](https://marketplace.digitalocean.com/apps/vitalpbx)

[VitalPBX](https://vitalpbx.com/) is a unified communications PBX system based on Asterisk and Linux (Centos 7). VitalPBX provides a robust and scalable platform, which will allow you to manage your PBX in an easy and intuitive way.

VitalPBX is the graphic user interface between you and the complex world of modern communications. VitalPBX will help you implement a secure telephone system for your company, save, take advantage of recent innovations and provide opportunities to integrate your business processes if you wish to do so.

## Easy to Use

VitalPBX is built to be easy to use with tooltips across the system and a coherent user interface throughout.

## Security

In today’s cyber environment anyone running a telephony system should be aware of security hazards and avoid them. Our PBX system, VitalPBX offers various levels of protection against cyber threats in the VoIP world.

## [Professional Support](https://vitalpbx.com/vitalpbx-store/)

We can help with everything from implementation assistance to upgrades and production down emergencies. VitalPBX support experts are a team of dedicated professionals who communicate clearly and focus on rapid problem resolution.

## [Commercial Modules](https://vitalpbx.com/vitalpbx-store/)

We offer modules so that you take your PBX system to the next level.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Asterisk | 18.0.1 | GPL |
| PHP | 7.2.33 | PHP License v3.01 |
| Apache | 2.4.6 | Apache 2 |
| MariaDB | 10.4.13 | GPL |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=aplitel-vitalpbx-7)

## Creating an App using the API

In addition to creating a Droplet from the VitalPBX 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB VitalPBX Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"aplitel-vitalpbx-7"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying VitalPBX

After you create a VitalPBX One-Click Droplet:

- You can view the VitalPBX instance immediately by visiting the Droplet’s IP address in your browser.
- Configure the admin password for your new instance.
- Add your public IP or the IP Addresses that you need on the intrusion detection whitelist to avoid be banned during the PBX configuration.Enjoy!

In this article...

- [Easy to Use](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#easy-to-use)
- [Security](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#security)
- [Professional Support](https://vitalpbx.com/vitalpbx-store/)
- [Commercial Modules](https://vitalpbx.com/vitalpbx-store/)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#creating-an-app-using-the-api)
- [Getting Started After Deploying VitalPBX](https://docs.digitalocean.com/products/marketplace/catalog/vitalpbx/#getting-started-after-deploying-vitalpbx)

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