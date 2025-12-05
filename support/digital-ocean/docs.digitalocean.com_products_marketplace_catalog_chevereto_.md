---
url: "https://docs.digitalocean.com/products/marketplace/catalog/chevereto/"
title: "Chevereto | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/)
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

- Chevereto

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Chevereto

Generated on 26 Mar 2024
from [the Chevereto catalog page](https://marketplace.digitalocean.com/apps/chevereto)

> 🔔 [Subscribe](https://newsletter.chevereto.com/subscription?f=PmL892XuTdfErVq763PCycJQrvZ8PYc9JbsVUttqiPV1zXt6DDtf7lhepEStqE8LhGs8922ZYmGT7CYjMH5uSx23pL6Q) to don’t miss any update regarding Chevereto.

[![Chevereto](https://github.com/chevereto/chevereto/raw/4.0/chevereto.svg)](https://chevereto.com/)

[![CHUISS](https://github.com/chevereto/chevereto/blob/4.0/.github/banner/chevereto-ultimate-remix.png?raw=true)](https://chevereto.com/)

Chevereto is a self-hosted multipurpose multi-user, full-featured image sharing solution. It can be used to create a myriad of applications or to empower existing systems, all around the concept of users sharing image content.

## Overview

This is the Chevereto DigitalOcean Marketplace application, it provides Chevereto ready to be one-click installed.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Chevereto](https://github.com/chevereto/chevereto) | [4](https://releases.chevereto.com/4.X/) | [AGPL-3.0](https://github.com/chevereto/chevereto/blob/master/LICENSE) |
| [PHP](https://php.net/) | [8.2](https://www.php.net/downloads) | [PHP v3.01](http://www.php.net/license/3_01.txt) |
| [Apache HTTP Server](https://httpd.apache.org/) | [2.4.58](https://packages.ubuntu.com/jammy/apache2) | [Apache-2.0](https://www.apache.org/licenses/) |
| [Certbot](https://certbot.eff.org/) | [1.21.0](https://packages.ubuntu.com/jammy/python3-certbot-apache) | [Apache-2.0](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=chevereto-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Chevereto 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Chevereto Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"chevereto-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Chevereto

**In addition to the package installation, this one-click deploy also**

- Enables the UFW firewall to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- Sets the MySQL root password.
- Sets up the debian-sys-maint user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL root user password.
- Sets the cron required for background tasks.
- Resolves Cloudflare IP addresses.

## Chevereto Server Details

Chevereto will be available at this URL:

[http://your\_droplet\_public\_ipv4](http://your_droplet_public_ipv4/)

This is an Apache HTTP server based provisioning. PHP runs with `mod_php` using `mpm_prefork`. You can run Chevereto under any configuration, check our [documentation](https://chv.to/docs) for more information.

## Credentials

The database credentials are at the configuration file at `/var/www/html/app/env.php`.

## Extra-steps

- Provide HTTPS.

```
certbot --apache -d example.com -d www.example.com
```

- Disable non-HTTPS access.

```
ufw delete allow 80/tcp
```

- Secure MySQL.

```
mysql_secure_installation
```

## Updates

Chevereto can update itself, simply open [http://your\_droplet\_public\_ipv4/dashboard](http://your_droplet_public_ipv4/dashboard) and click “check for updates” button.

In this article...

- [Overview](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#overview)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#creating-an-app-using-the-api)
- [Getting Started After Deploying Chevereto](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#getting-started-after-deploying-chevereto)
- [Chevereto Server Details](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#chevereto-server-details)
- [Credentials](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#credentials)
- [Extra-steps](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#extra-steps)
- [Updates](https://docs.digitalocean.com/products/marketplace/catalog/chevereto/#updates)

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