---
url: "https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/"
title: "WarpSpeed VPN | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/)
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

- WarpSpeed VPN

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WarpSpeed VPN

Generated on 31 May 2022
from [the WarpSpeed VPN catalog page](https://marketplace.digitalocean.com/apps/warpspeed-vpn-by-bunker)

WarpSpeed is a simple web-based VPN server powered by the open source WireGuard® protocol. WarpSpeed makes it easy for anyone to access their cloud infrastructure securely. It can also be used to enable remote workers to safely access the internet from anywhere.

FEATURES

- Simple web-based administration
- High performance WireGuard protocol
- Ultra low-latency connectivity
- Real-time Bandwidth Monitoring
- Security Audit Log
- Auto-generated Configs with QR Codes
- Supports official WireGuard clients

SINGLE SIGN-ON (SSO)

- Google G Suite
- Office365 / Azure Active Directory
- Okta
- SAML 2.0

FREE PERSONAL LICENSE

- 1 User
- 2 Devices
- 3 Day Connection History
- Community Support
- No credit card required

PAID BUSINESS LICENSE

- Unlimited Users
- Unlimited Devices
- Unlimited Connection History
- SSO using SAML 2.0
- Priority Support
- Cancel anytime

## Software Included

| Package | Version | License |
| --- | --- | --- |
| wireguard | 1.0.20200513-1~20.04.2 | GPL v3 |
| wireguard-tools | 1.0.20200513-1~20.04.2 | GPL v3 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=bunkercloudservi-warpspeedvpn-18-04)

## Creating an App using the API

In addition to creating a Droplet from the WarpSpeed VPN 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB WarpSpeed VPN Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"bunkercloudservi-warpspeedvpn-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying WarpSpeed VPN

### 1\. Open required ports on your Digital Ocean firewall

Using Digital Ocean’s Firewalls feature, you will need to enable network access to your Droplet:

- Inbound TCP port 80 (Let’s Encrypt TLS certificate verification)
- Inbound TCP port 443 (encrypted web control panel traffic)
- Inbound UDP port 51820 (WireGuard VPN protocol)

![](https://bunker.services/static/marketplace/warpspeed/digitalocean/digitalocean-firewall-inbound.png)

Link: [https://cloud.digitalocean.com/networking/firewalls](https://cloud.digitalocean.com/networking/firewalls)

_NOTE:_ To enable VPN access to any private networks or servers, your VPN server itself must have access to those as well (e.g. be on the correct VPCs).

### 2\. Connect to your WarpSpeed instance

SSH to your new WarpSpeed VPN instance:

`ssh root@your_droplet_public_ipv4`

IP Address: your\_droplet\_public\_ipv4

Username: `root`

_NOTE: If you can’t connect, you may need to open TCP port 22 from your IP address._

### 3\. Run the install script

When prompted enter “Y” or type `sudo warpspeed-installer.sh` to run the install script.

You will be asked a few simple questions in order to complete the installation, which will only take a few seconds.

_NOTE: If you get an error upon running the installer script, your instance may still be initializing. Wait a minute or two and try again._

### Need Help?

If you require any assistance, please email [support@bunker.services](mailto:support@bunker.services) and we’ll be happy to help!

### Install Screencast

![](https://bunker.services/static/marketplace/warpspeed/warpspeed-screencast-installer.gif)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#creating-an-app-using-the-api)
- [Getting Started After Deploying WarpSpeed VPN](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#getting-started-after-deploying-warpspeed-vpn)
  - [1\. Open required ports on your Digital Ocean firewall](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#1-open-required-ports-on-your-digital-ocean-firewall)
  - [2\. Connect to your WarpSpeed instance](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#2-connect-to-your-warpspeed-instance)
  - [3\. Run the install script](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#3-run-the-install-script)
  - [Need Help?](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#need-help)
  - [Install Screencast](https://docs.digitalocean.com/products/marketplace/catalog/warpspeed-vpn/#install-screencast)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)