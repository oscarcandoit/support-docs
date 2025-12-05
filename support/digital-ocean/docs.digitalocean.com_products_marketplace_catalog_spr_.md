---
url: "https://docs.digitalocean.com/products/marketplace/catalog/spr/"
title: "SPR | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/spr/)
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

- SPR

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SPR

Generated on 2 Dec 2024
from [the SPR catalog page](https://marketplace.digitalocean.com/apps/spr)

SPR (Secure Programmable Router) lets users run a hardened, secure, open source VPN.

Run a self-hosted VPN, DNS & other services to filter & redirect traffic, block ads, [and more](https://www.supernetworks.org/pages/blog/first-blog-post).

![SPR Image](https://www.supernetworks.org/assets/img/screenshot-light.png)

Block Ads, filter DNS and keep track of your devices - all with a [documented API](https://www.supernetworks.org/pages/docs/apis/overview) allowing programmatic control of your network.

![SPR API](https://www.supernetworks.org/pages/assets/images/sprbus-cli-476cc4f905e635d16c3fdcc0041fc30a.gif)

The droplet will update to the latest stable version of SPR when creating the instance.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [super](https://github.com/spr-networks/super) | [latest](https://github.com/spr-networks/super/releases) | [BSD-3 Clause](https://github.com/spr-networks/super/blob/main/LICENSE) |
| Docker CE | [20.10.25](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |
| Docker Compose | [1.29.2](https://docs.docker.com/release-notes/docker-compose/) | [Apache 2](https://github.com/docker/compose/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=supernetworks-spr)

## Creating an App using the API

In addition to creating a Droplet from the SPR 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB SPR Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"supernetworks-spr"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying SPR

## Deployment steps

- Deploy a Droplet from the Marketplace
- Log on using SSH

`ssh root@your_droplet_public_ipv4`

admin credentials & instructions to add a vpn peer will be presented

## Add a VPN peer

`cd /home/spr/super; ./virtual_install.sh`

## Connect to VPN

- Import config or scan QR code in [Wireguard](https://www.wireguard.com/install/) & enable the VPN connection
- Connect to [http://192.168.2.1](http://192.168.2.1/)
- Login with the admin credentials
- Done!

Read more in the [Virtual SPR Guide](https://www.supernetworks.org/pages/blog/virtual%20SPR#configure-the-vpn-client-on-your-device)

Access HTTP interface over ssh:

`ssh root@your_droplet_public_ipv4 -N -L 8000:127.0.0.1:8000`

Connect to [http://localhost:8000](http://localhost:8000/)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/spr/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/spr/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/spr/#creating-an-app-using-the-api)
- [Getting Started After Deploying SPR](https://docs.digitalocean.com/products/marketplace/catalog/spr/#getting-started-after-deploying-spr)
- [Deployment steps](https://docs.digitalocean.com/products/marketplace/catalog/spr/#deployment-steps)
- [Add a VPN peer](https://docs.digitalocean.com/products/marketplace/catalog/spr/#add-a-vpn-peer)
- [Connect to VPN](https://docs.digitalocean.com/products/marketplace/catalog/spr/#connect-to-vpn)

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