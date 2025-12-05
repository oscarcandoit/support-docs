---
url: "https://docs.digitalocean.com/products/marketplace/catalog/mysql/"
title: "MySQL | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/mysql/)
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

- MySQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# MySQL

Generated on 7 Aug 2025
from [the MySQL catalog page](https://marketplace.digitalocean.com/apps/mysql)

The world’s most popular open-source database

## Software Included

| Package | Version | License |
| --- | --- | --- |
| MySQL server | [8.0.42](https://packages.ubuntu.com/focal/mysql-server) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| phpMyAdmin | [5.2.2](https://packages.ubuntu.com/focal/phpmyadmin) | [GPL 2](https://www.phpmyadmin.net/license/) |
| Apache | [2.9.0-1](https://packages.ubuntu.com/focal/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| PHP | [8.3](https://packages.ubuntu.com/focal/php) | [PHP v3.01](http://php.net/license/index.php) |
| Certbot | [0.40.0](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=mysql-20-04)

## Creating an App using the API

In addition to creating a Droplet from the MySQL 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB MySQL Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"mysql-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying MySQL

In addition to package installation, the One-Click also:

- Enables the UFW firewall to allow only SSH (port `22`, rate limited), HTTP (port `80`), and HTTPS (port `443`), and MySQL (`3306`) access.
- Sets the MySQL root password and runs `mysql_secure_installation`.
- Sets the phpMyAdmin admin password.
- Sets up the `debian-sys-maint` user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL `root` user password.After you create a MySQL One-Click Droplet:
- You can access phpMyAdmin immediately by visiting the Droplet’s IP address in your browser followed by `/phpmyadmin`.
- You can log into the Droplet as `root` using either the password emailed to you or with an SSH key if you added one during creation.
- The MySQL root password and phpMyAdmin admin password are in `/root/.digitalocean_password`.
- You can get information about the PHP installation by logging into the Droplet and running `php -i`.In addition, we recommend taking steps to [further secure the phpMyAdmin installation](https://docs.phpmyadmin.net/en/latest/setup.html#securing-your-phpmyadmin-installation), like [enabling SSL for the connection from phpMyAdmin to the database server](https://docs.phpmyadmin.net/en/latest/setup.html#using-ssl-for-connection-to-database-server).
- The default landing page, shown when you visit the Droplet’s IP address, is located at `/var/www/html`.
- The phpMyAdmin configuration file is located at `/etc/phpmyadmin/`. To secure your connection, you will need a registered domain configured for your Droplet.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/mysql/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/mysql/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/mysql/#creating-an-app-using-the-api)
- [Getting Started After Deploying MySQL](https://docs.digitalocean.com/products/marketplace/catalog/mysql/#getting-started-after-deploying-mysql)

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