---
url: "https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/"
title: "Bitwarden | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/)
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

- Bitwarden

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Bitwarden

Generated on 14 Nov 2025
from [the Bitwarden catalog page](https://marketplace.digitalocean.com/apps/bitwarden)

Bitwarden is an open source password management tool that allows you to securely store, share, and sync passwords and other senitive data. No matter what platform or environment you use, Bitwarden offers an array of official, high quality client applications that can easily connect to your self-hosted Bitwarden server.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Bitwarden | [2025.11.0](https://github.com/bitwarden/server/releases) | [AGPL v3](https://github.com/bitwarden/server/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=bitwarden)

## Creating an App using the API

In addition to creating a Droplet from the Bitwarden 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Bitwarden Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"bitwarden"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Bitwarden

Before you begin with your Bitwarden 1-Click Droplet, you will need to obtain:

1. A hostname (domain or subdomain) where you can create a DNS record pointing to your Droplet’s IP address
2. A Bitwarden installation ID and key from [https://bitwarden.com/host/](https://bitwarden.com/host/). Bitwarden requires at least 2GB of RAM, so make sure to choose a plan with enough memory during creation. After you create your Bitwarden 1-Click Droplet, Bitwarden’s dependencies and installation scripts will be preinstalled and ready for you to use. You will need to connect to the Droplet via SSH to complete the setup.`ssh root@your_droplet_ip`

Once you connect, you’ll be prompted to complete Bitwarden’s installation. Provide the hostname that you will use (be sure you have setup the DNS record), your installation ID and key, and answer the questions about how you will configure SSL with your Bitwarden installation. Bitwarden requires a secure HTTPS connection to operate. The installer can generate a self-signed certificate for you if you do not have one.

After you have completed the installation, you can visit your Bitwarden domain in a web browser, register a Bitwarden user account, and log in.

Your Bitwarden 1-Click Droplet has also been preconfigured with automatic updates so you won’t need to worry about keeping the Bitwarden server application up to date. Update checks will occur weekly.

Finally, application settings (such as a SMTP mail server) can be configured in `/root/bwdata/env/global.override.env`. If you need to make changes to your server’s installation settings, you can do so in `/root/bitwarden/bwdata/config.yml`.

More information on managing your Bitwarden server can be found at [https://help.bitwarden.com/hosting/](https://help.bitwarden.com/hosting/).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/#creating-an-app-using-the-api)
- [Getting Started After Deploying Bitwarden](https://docs.digitalocean.com/products/marketplace/catalog/bitwarden/#getting-started-after-deploying-bitwarden)

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