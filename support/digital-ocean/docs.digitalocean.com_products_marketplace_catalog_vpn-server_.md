---
url: "https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/"
title: "VPN Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/)
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

- VPN Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPN Server

Generated on 21 Oct 2025
from [the VPN Server catalog page](https://marketplace.digitalocean.com/apps/vpn-server)

Fast, Secure, and Modern VPN Solution that uses WireGuard® as underlying VPN technology.

An easy-to-use administrator website allows you to create, delete, and suspend new users. New users can download and use their VPN configuration with any WireGuard® VPN Client.

OpenID Connect, SAML, SCIM integrations available.

## Screenshots

![Login Screen](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/vpn-server-1.png)

![Home Page](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/screenshot-vpn-server-status.png)

![New VPN Connection](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/vpn-server-3.png)

![Users](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/vpn-server-4.png)

![VPN Setup](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/screenshot-vpn-server-setup-1.png)

![VPN Setup](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/screenshot-vpn-server-setup-2.png)

![VPN Setup](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/screenshot-vpn-server-setup-3.png)

![OpenID Connect Setup](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/vpn-server-6.png)

![Packet Inspection](https://in4it-vpn-server.s3.amazonaws.com/assets/screenshots/screenshot-vpn-server-packetlogging.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [wireguard](https://packages.ubuntu.com/noble/wireguard) | 1.0.20210914 | GPL |
| [wireguard-tools](https://packages.ubuntu.com/noble/wireguard) | 1.0.20210914 | GPL |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=in4it-vpnserver)

## Creating an App using the API

In addition to creating a Droplet from the VPN Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB VPN Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"in4it-vpnserver"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying VPN Server

Once the droplet has started, you can go to http:// to start the configuration. Make sure you use http:// as prefix and not https://, as TLS is not setup yet and will give you an error. You can set up TLS once logged in. You’ll be asked for a secret to start the setup process. To get the secret, login using SSH in the server (login: `root`), and enter the command `cat /vpn/setup-code.txt`. If you don’t have SSH access, you can add a tag to the Droplet with a specified random string (shown during the setup process) to start the setup.

More details at [https://vpn-documentation.in4it.com/](https://vpn-documentation.in4it.com/)

In this article...

- [Screenshots](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/#screenshots)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying VPN Server](https://docs.digitalocean.com/products/marketplace/catalog/vpn-server/#getting-started-after-deploying-vpn-server)

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