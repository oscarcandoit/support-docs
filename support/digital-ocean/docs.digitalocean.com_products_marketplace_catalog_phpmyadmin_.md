---
url: "https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/"
title: "PhpMyAdmin | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/)
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

- PhpMyAdmin

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PhpMyAdmin

Generated on 21 Nov 2025
from [the PhpMyAdmin catalog page](https://marketplace.digitalocean.com/apps/phpmyadmin)

phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc) can be performed via the user interface, while you still have the ability to directly execute any SQL statement.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| phpMyAdmin | [5.2.1](https://packages.ubuntu.com/focal/phpmyadmin) | [GPL 2](https://www.phpmyadmin.net/license/) |
| MySQL Server | [8.0.32](https://packages.ubuntu.com/focal/mysql-server) | [GPL 2 w/modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| Apache | [2.4.41](https://packages.ubuntu.com/focal/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| PHP | [8.1.2](https://packages.ubuntu.com/focal/php) | [PHP v3.01](http://php.net/license/index.php) |
| Certbot | [1.21.0](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=phpmyadmin-20-04)

## Creating an App using the API

In addition to creating a Droplet from the PhpMyAdmin 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PhpMyAdmin Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"phpmyadmin-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PhpMyAdmin

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your PhpMyAdmin Droplet 1-Click, you will be greeted by a message of the day which includes the admin password for your PhpMyAdmin instance:

![phpMyAdmin MOTD](https://i.imgur.com/qJRDJXH.png)

If for any reason, you are unable to access the message of the day, you can get the admin password by simply reading the `/root/.digitalocean_password` file in your droplet:

![phpMyAdmin passwords location](https://i.imgur.com/yyJqtPi.png)

With an admin password, you can now access your PhpMyAdmin instance, by visiting `http://&lt;your droplet IP&gt;/phpmyadmin`:

![phpMyAdmin login screen](https://i.imgur.com/vCpy1jr.png)

At this point, you can fully utilize your newly created phpMyAdmin Droplet 1-Click.

**Note: phpMyAdmin configuration file is located at `/usr/share/phpmyadmin/config.inc.php`.**

## Connect to a remote database

To connect to a remote database you need to add new credentials to the phpMyAdmin config file, which is located in `/usr/share/phpmyadmin/config.inc.php`.

First, open the config file with your preferred editor (vim is used in the example below):

```
$ vim /usr/share/phpmyadmin/config.inc.php
```

Next, find the section with default localhost configuration, it will look like this:

![phpMyAdmin server config example](https://i.imgur.com/5wuCC5Y.png)

Now, we can increment `i` counter and add new database connection details. Some typical connection details include:

- `$cfg['Servers'][$i]['host'] = '&lt;your db host&gt;';` \- set the hostname of the server by index `i`.
- `$cfg['Servers'][$i]['user'] = '&lt;your db user&gt;';` \- set the user to connect to the server by index `i`.
- `$cfg['Servers'][$i]['port'] = '&lt;your db port&gt;';` \- set the port of server by index `i`.
- `$cfg['Servers'][$i]['password'] = '&lt;your db password&gt;';` \- set the password to connect the server by index `i`.
- `$cfg['Servers'][$i]['auth_type'] = 'config';` \- indicates to read database credentials from the config file.

An example of a complete server configuration looks like this:

![phpMyAdmin complete server config](https://i.imgur.com/8GveaBx.png)

**Note: Keep in mind to increment index `i` before adding new parameters. Also, each line of configuration needs to end with a `;` sign.**

If your database connection requires more exotic configuration, check [official documentation](https://docs.phpmyadmin.net/en/latest/config.html) to find more connection parameters.

Now return to your phpMyAdmin Droplet login screen and you will see the option to change server:

![phpMyAdmin server option example](https://i.imgur.com/DJ8ue7q.png)

Select the newly added server and click _Log in_, now your phpMyAdmin Droplet will communicate with the remote database which you just added.

## Droplet summary

- UFW firewall allows only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- MySQL root password is set and mysql\_secure\_installation is configured.
- phpMyAdmin admin password is set.
- phpMyAdmin 32-characters blowfish secret is generated and set.
- phpMyAdmin configuration is stored in /usr/share/phpmyadmin/config.inc.php
- A debian-sys-maint user in MySQL is set so the system’s init scripts for MySQL will work without requiring the MySQL root user password.
- The MySQL root password is in /root/.digitalocean\_password.
- You can get information about the PHP installation by logging into the Droplet and running php -i.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#creating-an-app-using-the-api)
- [Getting Started After Deploying PhpMyAdmin](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#getting-started-after-deploying-phpmyadmin)
- [Connect to a remote database](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#connect-to-a-remote-database)
- [Droplet summary](https://docs.digitalocean.com/products/marketplace/catalog/phpmyadmin/#droplet-summary)

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