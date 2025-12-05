---
url: "https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/"
title: "WordPress-WooCommerce | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/)
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

- WordPress-WooCommerce

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WordPress-WooCommerce

Generated on 14 Jan 2025
from [the WordPress-WooCommerce catalog page](https://marketplace.digitalocean.com/apps/wordpress-woocommerce)

WooCommerce is a customizable, open-source eCommerce platform built on WordPress and one of the most popular eCommerce platforms in the world.

This droplet includes WordPress and WooCommerce plugin to make it easier for your to start your online store.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| WordPress | 6.7.1 | GPL 2 |
| WooCommerce | 9.5.2 | GPL 2 |
| MySQL server | 8.0.40 | GPL 2 |
| Apache | 2.4.58 | Apache 2 |
| PHP | 8.3 | PHP v3.01 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=smartarget-wordpresswoocomm)

## Creating an App using the API

In addition to creating a Droplet from the WordPress-WooCommerce 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB WordPress-WooCommerce Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"smartarget-wordpresswoocomm"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying WordPress-WooCommerce

## Getting started after deploying WordPress

In addition to the package installation, this 1-Click App also:

- Enables the UFW firewall to allow only SSH (port `22`, rate limited), HTTP (port `80`), and HTTPS (port `443`) access.
- Sets the MySQL root password, runs `mysql_secure_installation`, and creates a `wordpress` user with the necessary permissions. Note that the Droplet root user will not be prompted for the MySQL password. Keep in mind that if you’re connecting to a DigitalOcean Managed Database, the locally installed database will be disabled.
- Sets up the `debian-sys-maint` user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL `root` user password.
- Creates the initial WordPress configuration file to set up [salt keys](https://developer.wordpress.org/reference/functions/wp_salt/) and allow the WordPress instance to connect to the database.
- Disables XML-RPC to help prevent DDoS and other brute force attacks.
- Modifies some of PHP’s settings to increase the maximum file size and execution time.
- Enables the [Apache rewrite module](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) so the WordPress permalink feature will work.
- Configures Apache with `UseCanonicalName On` to mitigate [CVE-2017-8295](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8295). You need a fully qualified domain name (FQDN) to use this One-Click, which you can purchase from any domain registrar. You do not have to manage your domain with [DigitalOcean DNS](https://www.digitalocean.com/docs/networking/dns/).

After you create a WordPress One-Click Droplet, you’ll need to log into the Droplet via SSH to finish the WordPress setup. If you try to visit the Droplet’s IP address before logging into the Droplet, you’ll see a DigitalOcean landing page.

To finish setup, connect to the Droplet as root. Make sure to substitute the Droplet’s public IPv4 address.

```
ssh root@your_droplet_public_ipv4
```

Then, once your database is ready, the interactive script that runs will first prompt you for your domain or subdomain. For testing purposes, you can enter the IP address of the Droplet if you don’t have a domain setup yet.

* * *

### Connecting WordPress to a DigitalOcean Managed Database

If you’d like to use a DigitalOcean managed MySQL database with your WordPress 1-Click App, make sure you select that checkbox when prompted on the Droplet Create page.

* * *

### Configure hostname and LetsEncrypt

When you connect to your WordPress 1-Click App Droplet via SSH for the 1st time, you’ll be prompted to enter a hostname after any required database configuration is completed:

```
To cancel setup, press Ctrl+C.  This script will run again on your next login
--------------------------------------------------
Enter the domain name for your new WordPress site.
(ex. example.org or test.example.org) do not include www or http/s
--------------------------------------------------
Domain/Subdomain name:
```

The next prompt asks if you want to use SSL for your website via Let’s Encrypt, which we recommend:

```
Next, you have the option of configuring LetsEncrypt to secure your new site.  Before doing this, be sure that you have pointed your domain or subdomain to this server's IP address.  You can also run LetsEncrypt certbot later with the command 'certbot --apache'

Would you like to use LetsEncrypt (certbot) to configure SSL(https) for your new site? (y/n):
```

After you respond to these two prompts, you’ll see a confirmation message:

```
WordPress has been enabled at http://example.org  Please open this URL in a browser to complete the setup of your site.
```

At this point, you should visit the Droplet’s IP address in your browser to finish the WordPress installation through the web interface.

Once the installation is complete, you can use the WordPress administration dashboard to further customize the new site. For reference:

- The root password for the MySQL instance running on your Droplet is in `/root/.digitalocean_password`. Note that the Droplet root user will not be prompted for the MySQL password.
- If you’re connecting to a DigitalOcean Managed Database, your MySQL connection information can be found in `/var/www/html/wp-config.php`.
- The web root is `/var/www/html`, and the WordPress configuration file is `/var/www/html/wp-config.php`.
- You can get information about the PHP installation by logging into the Droplet and running php -i.

In addition, there are a few customized setup steps that we recommend you take. For example, creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in `/var/www` for that domain’s content, and a new virtual host file in `/etc/apache2/sites-available` for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Apache Virtual Hosts](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04).

If you didn’t enable HTTPS during the initial setup script, you can enable it manually at any time after the fact.

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the WordPress One-Click to make securing the Droplet easier.

To use Certbot, you’ll need a registered domain name and two DNS records:

- An A record from the domain (e.g., `example.com`) to the server’s IP address
- An A record from the domain prefaced with `www` (e.g., `www.example.com`) to the server’s IP addressAdditionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., `ServerName example.com`) is correctly set to the domain.

Once the DNS records and, optionally, the virtual hosts files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --apache -d example.com -d www.example.com
```

HTTPS traffic on port 443 is already allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port 80:

```
ufw delete allow 80/tcp
```

For a more detailed walkthrough, you can follow [How to Secure Apache with Let’s Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04) or view [Certbot’s official documentation](https://certbot.eff.org/docs/using.html).

You can serve files from the web server by adding them to the web root (`/var/www/html`) using [SFTP](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server) or other tools.

## Upgrade instructions

You can run the following command to update WordPress to the latest version.

```
#!/bin/sh

set -e

################################################################################
# repo
################################################################################
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update > /dev/null

################################################################################
# chart
################################################################################
STACK="wordpress"
CHART="bitnami/wordpress"
NAMESPACE="wordpress"

if [ -z "${MP_KUBERNETES}" ]; then
  # use local version of values.yml
  ROOT_DIR=$(git rev-parse --show-toplevel)
  values="$ROOT_DIR/stacks/wordpress/values.yml"
else
  # use github hosted master version of values.yml
  values="https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/wordpress/values.yml"
fi

helm upgrade "$STACK" "$CHART" \
  --namespace "$NAMESPACE" \
  --values "$values" \
  --set wordpressPassword=$(kubectl get secret --namespace "wordpress" wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode) \
  --set mariadb.auth.rootPassword=$(kubectl get secret --namespace "wordpress" wordpress-mariadb -o jsonpath="{.data.mariadb-root-password}" | base64 --decode) \
  --set mariadb.auth.password=$(kubectl get secret --namespace "wordpress" wordpress-mariadb -o jsonpath="{.data.mariadb-password}" | base64 --decode)
```

## Uninstall instructions

You can run the following command to uninstall WordPress.

```
#!/bin/sh

set -e

################################################################################
# chart
################################################################################
STACK="wordpress"
NAMESPACE="wordpress"

helm uninstall "$STACK" \
  --namespace "$NAMESPACE"

kubectl delete ns "$NAMESPACE"
```

## API Creation

In addition to creating a Droplet from the WordPress 1-Click App via the control panel, you can also use the [DigitalOcean API](https://digitalocean.com/docs/api).

As an example, to create a 4GB WordPress Droplet in the SFO2 region, you can use the following curl command. You’ll need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it into the command below.

```
curl -X POST -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer '$TOKEN'' -d \
    '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"wordpress-20-04"}' \
    "https://api.digitalocean.com/v2/droplets"
```

.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#creating-an-app-using-the-api)
- [Getting Started After Deploying WordPress-WooCommerce](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#getting-started-after-deploying-wordpress-woocommerce)
- [Getting started after deploying WordPress](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#getting-started-after-deploying-wordpress)
  - [Connecting WordPress to a DigitalOcean Managed Database](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#connecting-wordpress-to-a-digitalocean-managed-database)
  - [Configure hostname and LetsEncrypt](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#configure-hostname-and-letsencrypt)
- [Upgrade instructions](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#upgrade-instructions)
- [Uninstall instructions](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#uninstall-instructions)
- [API Creation](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-woocommerce/#api-creation)

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