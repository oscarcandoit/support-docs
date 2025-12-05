---
url: "https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/"
title: "Laravel + MySQL | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/)
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

- Laravel + MySQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Laravel + MySQL

Generated on 26 Nov 2024
from [the Laravel + MySQL catalog page](https://marketplace.digitalocean.com/apps/laravel-mysql)

Build scalable Web Apps with a pre-configured Laravel server and a managed MySQL database. Laravel is a powerful PHP framework that is used for developing web applications. A major benefit of Laravel is that you’re able to separate the presentation code from the business logic.

### Use Cases

- **SaaS Applications**
  - Laravel offers out-of-the-box tools like Laravel Cashier for subscription billing, while a managed MySQL database provides high-availability architecture, vital for uptime and data integrity in SaaS products.
- **RESTful APIs and Microservices**
  - Laravel’s API resources streamline API development with authentication, rate-limiting, and API versioning, while a managed MySQL database ensures consistent, reliable database access and performance tuning.
- **Real-Time Applications**
  - Laravel supports real-time capabilities using technologies like WebSockets, and managed MySQL helps with handling high volumes of transactional data.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Laravel | [11.26.0](https://github.com/laravel/laravel) | [MIT License](https://github.com/laravel/laravel#license) |
| Nginx | [1.18.0](https://packages.ubuntu.com/bionic/nginx) | [Custom](http://nginx.org/LICENSE) |
| MySQL server | [8.0.37](https://packages.ubuntu.com/bionic/mysql-server) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| PHP | [8.3.12](https://packages.ubuntu.com/bionic/php) | [PHP v3.01](http://php.net/license/index.php) |
| Certbot | [2.11.0](https://github.com/certbot/certbot/blob/master/CHANGELOG.md) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Composer | [2.7.7](https://github.com/composer/composer/releases) | [MIT License](https://github.com/composer/composer/blob/master/LICENSE) |

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy Laravel + MySQL to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?size=s-1vcpu-2gb&appId=166879200&type=applications&engine=mysql&image=devdojo-laravel-20-04)

## Getting Started After Deploying Laravel + MySQL

In addition to the package installation, the One-Click also:

- Enables the UFW firewall to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

After you create a Laravel One-Click Droplet, you’ll need to log into the Droplet via SSH to finish the Laravel setup.

From a terminal on your local computer, connect to the Droplet as root. Make sure to substitute the Droplet’s public IPv4 address.

```
ssh root@your_droplet_public_ipv4
```

If you did not add an SSH key when you created the Droplet, you’ll first be prompted to reset your root password.

Then, the interactive script that runs will first prompt you for your domain or subdomain:

```
--------------------------------------------------
This setup requires a domain name.  If you do not have one yet, you may
cancel this setup, press Ctrl+C.  This script will run again on your next login
--------------------------------------------------
Enter the domain name for your new Laravel site.
(ex. example.org or test.example.org) do not include www or http/s
--------------------------------------------------
Domain/Subdomain name:
```

The next prompt asks if you want to use SSL for your website via Let’s Encrypt, which we recommend:

```
Next, you have the option of configuring LetsEncrypt to secure your new site.  Before doing this, be sure that you have pointed your domain or subdomain to this server's IP address.  You can also run LetsEncrypt certbot later with the command 'certbot --nginx'

Would you like to use LetsEncrypt (certbot) to configure SSL(https) for your new site? (y/n):
```

Next, run your Laravel migrations:

```
cd /var/www/laravel
php artisan migrate
```

At this point, you can visit the Droplet’s IP address or your domain name in your browser to see the Laravel installation.

The web root is `/var/www/laravel`, and the Laravel configuration file is `/var/www/laravel/.env`.

You can get information about the PHP installation by logging into the Droplet and running `php -i`.

In addition, there are a few customized setup steps that we recommend you take.

- You should consider securing the MySQL instance by running the `mysql_secure_installation` command.
- Creating an Nginx server block file for each new site makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in `/var/www` for that domain’s content, and a new server block file in `/etc/nginx/sites-available` for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Nginx Server Blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

- If you didn’t enable HTTPS during the initial setup script, you can enable it manually at any time after your domain name has been pointed to the Droplet’s IP address.

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the Laravel One-Click to make securing the Droplet easier.

To use Certbot, you’ll need a registered domain name and two DNS records:

- An A record from the domain (e.g., `example.com`) to the server’s IP address
- An A record from a domain prefaced with www (e.g., [www.example.com](http://www.example.com/)) to the server’s IP address

Additionally, if you’re using a server block file, you’ll need to make sure the server name directive in the Nginx server block (e.g., `server_name example.com`) is correctly set to the domain.

Once the DNS records and, optionally, the server block files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --nginx -d example.com -d www.example.com
```

For a more detailed walkthrough, you can follow [How to Secure Nginx with Let’s Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04) or view [Certbot’s official documentation](https://certbot.eff.org/docs/using.html).

## Access your Managed Database from your Droplet

Once the MySQL client is installed, you can test the connection to your managed database using the following command:

```
mysql -h your-database-host -P 3306 -u your-database-username -p
```

- Replace `your-database-host` with the host of your managed database.

- Replace `your-database-username` with the username for the database.

- `-p` will prompt you to enter the password for the database user.

For example:


```
mysql -h db.example.com -P 3306 -u your_db_user -p
```

In this article...

- [Use Cases](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/#use-cases)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying Laravel + MySQL](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/#getting-started-after-deploying-laravel--mysql)
- [Access your Managed Database from your Droplet](https://docs.digitalocean.com/products/marketplace/catalog/laravel-mysql/#access-your-managed-database-from-your-droplet)

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