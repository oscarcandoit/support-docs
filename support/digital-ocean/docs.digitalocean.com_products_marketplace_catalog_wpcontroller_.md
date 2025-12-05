---
url: "https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/"
title: "wpcontroller | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/)
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

- wpcontroller

[Give Feedback](https://ideas.digitalocean.com/documentation)

# wpcontroller

Generated on 6 Dec 2022
from [the wpcontroller catalog page](https://marketplace.digitalocean.com/apps/wpcontroller)

wpcontroller is a modern WordPress control panel that makes it easy to run fast and secure websites in Docker containers. With wpcontroller, anyone can easily create and manage WordPress websites using its simple web-based interface.

![](https://cloud.wpcontroller.com/screenshot1.png)

**FEATURES**

- Add a new WordPress website in seconds
- Create, download, and restore backups of your websites
- Clone your websites to create dev and staging environments
- Keep WordPress core, plugins, and themes up to date
- Manage SFTP access using secure ssh keys
- Reset WordPress user passwords
- Add multiple admins
- Watch WordPress debug logs
- Access WP-CLI via SSH for advanced users

**TECHNOLOGY**

- Isolated MySQL and PHP containers per site
- Built-in high performance caching web server
- Custom WordPress Web Application Firewall (WAF)
- Modern CLI with auto-complete
- Automatic SSL/TLS certificates

**VERSIONS**

- WordPress latest
- PHP version 8.x
- MySQL version 8.x
- Ubuntu 22.04

**FREE PERSONAL LICENSE**

- 1 Site
- 1 Admin
- Basic support
- Free (no credit card required)

**PAID PROFESSIONAL LICENSE**

- 3 Sites
- 1 Admin
- Priority support
- $6/mo (billed annually)
- Cancel anytime

**PAID BUSINESS LICENSE**

- Unlimited sites
- Unlimited admins
- Priority support
- $14/mo (billed annually)
- Cancel anytime

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=warpspeedvpn-wpcontroller)

## Creating an App using the API

In addition to creating a Droplet from the wpcontroller 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB wpcontroller Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"warpspeedvpn-wpcontroller"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying wpcontroller

**1\. DEPLOY A SERVER**

Deploy a wpcontroller server using the [wpcontroller Digital Ocean marketplace app](https://marketplace.digitalocean.com/apps/wpcontroller).

It is recommended that you deploy a server with 1 GiB memory and at least 1 CPU core for each WordPress web site you will run.

**2\. OPEN REQUIRED FIREWALL PORTS**

Using [Digital Ocean Network Firewall](https://cloud.digitalocean.com/networking/firewalls), open the required ports:

- Inbound TCP port 22 – SSH and SFTP access, can be restricted by IP address
- Inbound TCP port 80 – Let’s Encrypt TLS certificate verification, must be publicly accessible
- Inbound TCP port 443 – Encrypted site and control panel traffic, must be publicly accessible

**3\. REGISTER YOUR INSTANCE**

Once your server is running, visit [https://install.wpcontroller.com](https://install.wpcontroller.com/) and enter the public IP address of your server. It may take 1-3 minutes to become available.

Your server’s public IP: `your_droplet_public_ipv4`

**TROUBLESHOOTING**

Check the wpcontroller log:

```
sudo less /var/log/wpcontroller.log
```

Check the wpcontroller systemd journal:

```
sudo journalctl --unit wpcontroller
```

Check the wpcontroller installer systemd journal

```
sudo journalctl --unit run-wpcontroller-installer
```

**NEED HELP?**

1. Search the official [wpcontroller docs](https://docs.wpcontroller.com/)
2. Contact support by sending an email to [support@wpcontroller.com](mailto:support@wpcontroller.com) and we’ll be happy to help!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/#creating-an-app-using-the-api)
- [Getting Started After Deploying wpcontroller](https://docs.digitalocean.com/products/marketplace/catalog/wpcontroller/#getting-started-after-deploying-wpcontroller)

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

Cookie Preferences

GenAI Agent - DigitalOcean