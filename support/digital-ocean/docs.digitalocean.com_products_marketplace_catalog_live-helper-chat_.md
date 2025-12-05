---
url: "https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/"
title: "Live Helper Chat | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/)
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

- Live Helper Chat

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Live Helper Chat

Generated on 6 Apr 2022
from [the Live Helper Chat catalog page](https://marketplace.digitalocean.com/apps/live-helper-chat)

With almost 30K installs detected during application lifetime (10Y) it’s a stable solution for everyone who want’s to have Live Support Chat application hosted on their infrastructure.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Nginx | 1.20.1 | [Custom](http://nginx.org/LICENSE) |
| MariaDB | 10.4.24 | [GPL 2](https://mariadb.com/kb/en/mariadb-license/) |
| NodeJS | 10.24.1 | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |
| Redis | 3.2.12 | [3-Clause-BSD](https://redislabs.com/legal/licenses/) |
| Fail2ban | 0.11.1 | [GPL 2](https://www.fail2ban.org/wiki/index.php/Fail2Ban#License) |
| PHP | 7.4.28 | [PHP License v3.01](https://php.net/license/index.php) |
| Postfix | 2.10.1 | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=livehelperchat-7-8-2003)

## Creating an App using the API

In addition to creating a Droplet from the Live Helper Chat 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Live Helper Chat Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"livehelperchat-7-8-2003"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Live Helper Chat

In addition to the package installation, the One-Click also:

- Enables the `firewalld` to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

- Sets the MariaDB root password and runs mysql\_secure\_installation.

Note, the Droplet root user will not be prompted for the MySQL password.

- Modifies some of PHP’s/Nginx’s settings to increase the maximum filesize.


After you create a Live Helper Chat One-Click Droplet, you’ll need to log into the Droplet via SSH to finish the Live Helper Chat setup. If you try to visit the Droplet’s IP address before logging into the Droplet, you’ll see a Live Helper Chat landing page.

From a terminal on your local computer, connect to the Droplet as root. Make sure to substitute the Droplet’s IP address.

```
ssh root@use_your_droplet_ip
```

Once the installation is complete, you can use the Live helper Chat administration dashboard to further customize the Live Helper Chat. Back office address will be found at

```
http://<ip>/site_admin/
```

If you setup HTTPS with your domain

```
https://example.com/site_admin/
```

To update Live Helper Chat run this command. I always recommend to update after a fresh install.

```
/opt/livehelperchat/lhc_upgrade.sh
```

For reference:

- The MySQL root password is in /root/.digitalocean\_password. Note, the Droplet root user will not be prompted for the MySQL password.
- The web root is /var/www/html, and the Live Helper Chat configuration file is /var/www/html/settings/settings.ini.php.
- You can get information about the PHP installation by logging into the Droplet and running php -i. In addition, there are a few customized setup steps that we recommend you take.

If you didn’t enable HTTPS during the initial setup script, you can enable it manually at any time after the fact.

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the Live Helper Chat One-Click to make securing the Droplet easier.

To use Certbot, you’ll need a registered domain/subdomain name and one DNS record:

- An A record from the domain (e.g., example.com, support.example.com) to the server’s IP address
- You will need to adjust `/etc/nginx/conf.d/lhc.conf` and append your domain/subdomain to `server_name` directive.

Once the DNS records and, optionally, the virtual hosts files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --nginx -d support.example.com
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/#creating-an-app-using-the-api)
- [Getting Started After Deploying Live Helper Chat](https://docs.digitalocean.com/products/marketplace/catalog/live-helper-chat/#getting-started-after-deploying-live-helper-chat)

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