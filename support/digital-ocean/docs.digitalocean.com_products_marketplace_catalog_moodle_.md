---
url: "https://docs.digitalocean.com/products/marketplace/catalog/moodle/"
title: "moodle | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/moodle/)
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

- moodle

[Give Feedback](https://ideas.digitalocean.com/documentation)

# moodle

Generated on 7 Feb 2024
from [the moodle catalog page](https://marketplace.digitalocean.com/apps/moodle)

**[Moodle](https://moodle.org/)** is the world’s most popular learning management system. As the leading open source Learning Platform it is designed to provide learners, educators, and administrators with a single robust, secure and integrated solution to create personalised learning environments. This 1-Click app, maintained by **[Eummena](https://www.eummena.org/)**, Premium Moodle Partner, will allow you to start creating your online learning site in minutes on DigitalOcean cloud!

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Moodle | [4.3.2](https://moodledev.io/general/releases) | [GNU GPL 3](https://docs.moodle.org/dev/License) |
| Nginx | 1.22.1 | [Nginx License (BSD-2)](https://trac.nginx.org/nginx/browser/nginx/docs/text/LICENSE) |
| PHP | 8.2.7 | [PHP v3.0.1](http://php.net/license/) |
| MariaDB server | 10.11.4 | [GNU GPL 2](https://mariadb.com/kb/en/mariadb-license/) |
| Certbot | 2.1.0 | Apache 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=eummena-moodle-10)

## Creating an App using the API

In addition to creating a Droplet from the moodle 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB moodle Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"eummena-moodle-10"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying moodle

In addition to the Moodle Open Source Software installation, this 1-Click also:

1. Preinstalls the Certbot tool with the nginx plugin.
2. Enables the UFW firewall to allow access only for SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443).
3. Sets a MariaDB root password, protecting access outside the localhost (if you need to gain access to the root user, get the password from `/root/.root_mysql_password` file or follow [these instructions](https://www.digitalocean.com/community/tutorials/how-to-reset-your-mysql-or-mariadb-root-password)).
4. Creates the Moodle cron job for the www-data user

_For the impatient:_ After you create a Moodle 1-Click Droplet, you can continue with the Moodle installation on your browser, using your Droplet’s IP address. Just fire your browser, enter the IP of your droplet and follow the instructions there. You will have to choose the MariaDB driver from the available options and enter the connection details for the database (user: `root`, for password check point 4 above).

### Preparing your Moodle site for production

In order to use your Moodle for production, you must first configure a DNS entry with the fully qualified domain name ( _FQDN_) to point to the IP of your Moodle 1-Click Droplet. This way, you will have a proper URL for your Moodle site and you will also be able to enable https access (instead of the insecure http).

To proceed with these steps, you’ll need to [log into the Droplet via SSH](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/).

From a terminal on your local computer, connect to the Moodle 1-Click Droplet as root:

```
$ ssh root@your_droplet_public_ipv4
```

_Note:_ If you did not add an SSH key when you created the Droplet, you’ll first be prompted to reset your root password.

Then, to automatically apply Let’s Encrypt SSL and enable https access for your Moodle droplet, use the pre-installed `certbot` tool. You will be asked to enter your domain name, make sure you enter your configured FQDN (for example: `moodle.example.com`). Enter y and your email address to finish the process and make sure to allow the tool to configure Nginx automatically; enter y to force HTTPS rules to be applied!

```
# certbot --nginx
No names were found in your configuration files. Please enter in your domain
name(s) (comma and/or space separated)  (Enter 'c' to cancel):
moodle.example.com
...
Do you wish to force HTTPS rewrite rule for this domain? [y/N]
y
```

After successfully completing these steps, you should add the domain name in Moodle’s configuration file. Edit the `/var/www/moodle_1click/config.php` file and change the “wwwwroot” variable:

- replace the IP address with the domain name, and
- replace “http” with “https”

You are now ready to proceed with Moodle installation on your browser. Just fire your browser at your FQDN and follow the instructions there.

### Operation and further support

After you have successfully installed Moodle from your browser, you can further explore the files in your droplet:

- The “web root” folder with Moodle’s code is in `/var/www/moodle_1click` and the main configuration file is `/var/www/moodle_1click/config.php` (which also includes the Moodle Database configuration details).
- All Moodle data are stored under `/data/do1click`.
- The moodle cron job is running every one minute, and the related log files are under the folder: `/var/log/moodle_cron` (they are rotated every 30 days).

For any feedback or technical support, use the tracker on the official repo maintained by Eummena, Premium Moodle Partner: [https://github.com/eummena/moodle-1click-do/issues](https://github.com/eummena/moodle-1click-do/issues).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#creating-an-app-using-the-api)
- [Getting Started After Deploying moodle](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#getting-started-after-deploying-moodle)
  - [Preparing your Moodle site for production](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#preparing-your-moodle-site-for-production)
  - [Operation and further support](https://docs.digitalocean.com/products/marketplace/catalog/moodle/#operation-and-further-support)

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