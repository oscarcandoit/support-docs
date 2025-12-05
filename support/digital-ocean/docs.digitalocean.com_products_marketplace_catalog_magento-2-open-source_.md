---
url: "https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/"
title: "Magento 2 Open Source | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/)
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

- Magento 2 Open Source

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Magento 2 Open Source

Generated on 11 Apr 2025
from [the Magento 2 Open Source catalog page](https://marketplace.digitalocean.com/apps/magento-2-open-source)

Magento is a flexible, endlessly customizable eCommerce platform that allows merchants to quickly bring to market the innovative, differentiated experiences that customers demand. As merchants retain full control over their Magento environment, they can enrich their web store with new features anytime.

Besides the default Luma theme, this Magento 1-Click App can also deploy the Hyva theme.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Magento Open Source | [2.4.8](https://magento.com/tech-resources/download) | [The Open Software License 3.0 (OSL-3.0)](https://opensource.org/licenses/OSL-3.0) |
| PHP | [8.2.18](https://packages.ubuntu.com/search?keywords=php8) | [PHP v3.01](https://www.php.net/license/index.php) |
| Composer | [2.5.8](https://getcomposer.org/download/) | [MIT license](https://github.com/composer/composer/blob/master/LICENSE) |
| Opensearch | [2.12.0](https://opensearch.org/) | [Apache License 2.0](https://github.com/opensearch-project/OpenSearch/blob/main/LICENSE.txt) |
| Varnish | [6.4.0](https://varnish-cache.org/releases/rel6.4.0.html#rel6-4-0) | [The 2-Clause BSD License](https://varnish-cache.org/intro/#license-and-origin) |
| Apache | [2.4.41](https://packages.ubuntu.com/bionic/apache2) | [Apache License 2.0](https://www.apache.org/licenses/) |
| MySQL | [8.0.27](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-21.html) | [GPLv2](https://downloads.mysql.com/docs/licenses/mysqld-5.7-gpl-en.pdf) |
| Certbot | [0.40.0](https://github.com/certbot/certbot) | [Apache Version 2.0](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Postfix SMTP | 3.4.13 |  |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=eltrino-magento2opensour-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Magento 2 Open Source 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Magento 2 Open Source Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"eltrino-magento2opensour-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Magento 2 Open Source

Minimal Droplet requirements:

- 2 vCPU
- 4 GB RAM
- 50 GB SSD

In addition to the package installation, the One-Click also:

● Enables the Apache rewrite module so the Magento 2 permalink feature will work.

● Enables the UFW firewall to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

● Creates a Magento Mysql user with the necessary permissions, creates Magento database. **Note**, the Droplet root user will not be prompted for the MySQL password.

● Download and install Magento 2 with Sample Data (optional) instance on your entered domain.

● Enable and configure Varnish (port 80) for your Magento 2 instance.

● Configure Postfix SMTP server. It’s a free and open-source mail transfer agent that routes and delivers electronic mail to your Magento 2 Admin email address

After you create a Magento One-Click Droplet, you’ll need to log into the Droplet via SSH to finish the Magento setup. This prevents the setup wizard from being visible to the internet until you’re ready to complete it. If you try to visit the Droplet’s IP address before logging into the Droplet, you’ll see a DigitalOcean landing page.

From a terminal on your local computer, connect to the Droplet as root.

Make sure to substitute the Droplet’s IP address.

`ssh root@use_your_droplet_ip`

If you didn’t add an SSH key when you created the Droplet, you’ll first be prompted to reset your root password.

Then, the interactive script that runs will first prompt you for your domain or subdomain. **Note**, before entering your domain or subdomain name, it must be configured through DigitalOcean Control Panel or through any other DNS provider.

```
To cancel setup, press Ctrl+C. This script will run again on your next login
--------------------------------------------------
Enter the domain name for your new Magento 2 site.
(ex. example.org or test.example.org) do not include www or http/s
--------------------------------------------------
Domain/Subdomain name:
```

Further, you will be asked to enter the proposed data to create a new

admin account for Magento 2.

```
Now we will create your new admin user account for Magento.
Your Email Address:
Username:
Password: (Note! Your password must include both numeric and alphabetic characters)
```

Further, you will be asked to enter the proposed data to create an admin account for Magento 2. The next prompt asks if you want to use SSL for your website via Let’s Encrypt.

**Note**, before use SSL for your website your domain name must be propagated by DNS, otherwise Let’s Encrypt doesn’t validate it.

You will see the following message:

```
Next, you have the option of configuring LetsEncrypt to secure your new site.
Before doing this, be sure that you have pointed your domain or subdomain to
this server's IP address. You can also run Let's Encrypt certbot later with the
command 'certbot --apache'
Would you like to use LetsEncrypt (certbot) to configure SSL(https) for your
new site? (y/n):
```

**Note.** You can not configure SSL certificate later just using command ‘certbot –apache’ because Varnish using default 80 port. You must open magento\_setup.sh file in /opt/digitalocean/ directory and find section with configure LetsEncrypt certificate to secure your site and run the commands described there to configure the SSL certificate.

Before installation process, you will be asked to enter your authentication keys from Magento Marketplace.

```
Authentication required (repo.magento.com):
Username:
Password:
```

To get your **Public** and **Private key**, you must follow instruction [How to get your authentication keys](https://devdocs.magento.com/guides/v2.3/install-gde/prereq/connect-auth.html). Use the **Public key** as your **Username** and the **Private key** as your **Password**.

Then you’ll see the installation process of Magento 2, where you can choose to install the sample data or not.

On the next step you’ll be asked

```
Please, select patch provider: 1
Please, select patch category: 1
```

Select category from the bellow

Patch categories:

01. All (51)

02. Catalog/Product (10)

03. Order/Checkout (7)

04. Payments (3)

05. Customer (2)

06. Other (2)

07. Reports (1)

08. Inventory (5)

09. Shopping Cart (8)

10. Price/Tax (2)

11. Emails (2)

12. Admin (9)

13. GraphQL (14)

14. Performance (1)

15. Web API (1)

16. Import/Export (1)


In the next section, you have to enter y to add data in env.php file for correct Varnish cache cleaning for your Magento 2 instance.

```
Overwrite the existing configuration for db-ssl-verify?[Y/n]
Overwrite the existing configuration for allow-parallel-generation?[Y/n]
```

After success installation, you will see the following message:

```
Installation complete. Access your new Magento site in a browser to continue.
```

After that, you can use the Magento 2 Admin Dashboard. For reference:

● The MySQL Magento user password is in /root/.digitalocean\_password.

**Note**, the Droplet root user will not be prompted for the MySQL password.

● The web root is /var/www/html.

● You can get information about the PHP installation by logging into the Droplet and running php -i.

● For access Magento admin panel using “Username” and “Password”, which were introduced earlier.

Creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in /var/www for that domain’s content, and a new virtual host file in /etc/apache2/sites-available for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Apache Virtual Hosts](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04).

If you didn’t enable HTTPS during the initial setup script, you can enable it manually at any time after the fact.

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the Magento 2 One-Click to make securing the Droplet easier.

To use Certbot, you’ll need a registered domain name and two DNS records:

● An A record from the domain (e.g., example.com) to the server’s IP address

● An A record from the domain prefaced with www (e.g., [www.example.com](http://www.example.com/)) to the server’s IP addressAdditionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., ServerName example.com) is correctly set to the domain.

HTTPS traffic on port 443 is already allowed through the firewall. After you set up HTTPS, Varnish configuration will automatically redirect your site to your secure ‘https’ url.

For a more detailed walkthrough, you can follow [How to Secure Apache with Let’s Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04) or view [Certbot’s official documentation](https://certbot.eff.org/docs/using.html).

You can serve files from the web server by adding them to the web root

(/var/www/html) using SFTP or other tools.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/#creating-an-app-using-the-api)
- [Getting Started After Deploying Magento 2 Open Source](https://docs.digitalocean.com/products/marketplace/catalog/magento-2-open-source/#getting-started-after-deploying-magento-2-open-source)

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