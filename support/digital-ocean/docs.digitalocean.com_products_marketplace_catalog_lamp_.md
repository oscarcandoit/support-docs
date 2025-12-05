---
url: "https://docs.digitalocean.com/products/marketplace/catalog/lamp/"
title: "LAMP | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/lamp/)
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

- LAMP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# LAMP

Generated on 9 Sep 2025
from [the LAMP catalog page](https://marketplace.digitalocean.com/apps/lamp)

In less than a minute, spin up a cloud server with Apache, MySQL, and PHP installed.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Apache | [2.4.58](https://packages.ubuntu.com/focal/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| MySQL server | [8.0.43](https://packages.ubuntu.com/focal/mysql-server) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| PHP | [8.4.11](https://packages.ubuntu.com/focal/php) | [PHP v3.01](http://php.net/license/index.php) |
| Fail2ban | [1.0.2](https://packages.ubuntu.com/focal/fail2ban) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| Postfix | [3.8.6](https://packages.ubuntu.com/focal/postfix) | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |
| Certbot | [2.9.0](https://packages.ubuntu.com/focal/python3-certbot-apache) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=lamp-20-04)

## Creating an App using the API

In addition to creating a Droplet from the LAMP 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB LAMP Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"lamp-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying LAMP

In addition to the package installation, the 1-Click also:

- Enables the UFW firewall to allow only SSH (port `22`, rate limited), HTTP (port `80`), and HTTPS (port `443`) access.
- Sets the MySQL root password and runs `mysql_secure_installation`.
- Sets up the `debian-sys-maint` user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL `root` user password.

After you create a LAMP One-Click Droplet:

- You can view the LAMP instance immediately by visiting the Droplet’s IP address in your browser.
- You can log into the Droplet as root using either the password you set when you created the Droplet or with an SSH key, if you added one during creation.
- The MySQL root password is in `/root/.digitalocean_password`.
- The web root is `/var/www/html`.
- You can get information about the PHP installation by logging into the Droplet and running `php -i`.

In addition, there are a few customized setup steps that we recommend you take.

Creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in `/var/www` for that domain’s content, and a new virtual host file in `/etc/apache2/sites-available` for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Apache Virtual Hosts](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04).

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the LAMP One-Click to make securing the Droplet easier.

To use Certbot, you’ll need a registered domain name and two DNS records:

- An A record from a domain (e.g., `example.com`) to the server’s IP address
- An A record from a domain prefaced with `www` (e.g., `www.example.com`) to the server’s IP address

Additionally, if you are using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., `ServerName example.com`) is correctly set to the domain.

Once the DNS records and, optionally, the virtual hosts files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --apache -d example.com -d www.example.com
```

HTTPS traffic on port `443` is already allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port `80`:

```
ufw delete allow 80/tcp
```

For a more detailed walkthrough, you can follow [How to Secure Apache with Let’s Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04) or view [Certbot’s official documentation](https://certbot.eff.org/docs/using.html).

You can serve files from the web server by adding them to the web root (`/var/www/html`) using [SFTP](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server) or other tools.

A newly-created LAMP Droplet includes an `index.html` web page. You can change this by uploading a custom `index.html` file or remove it.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/lamp/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/lamp/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/lamp/#creating-an-app-using-the-api)
- [Getting Started After Deploying LAMP](https://docs.digitalocean.com/products/marketplace/catalog/lamp/#getting-started-after-deploying-lamp)

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