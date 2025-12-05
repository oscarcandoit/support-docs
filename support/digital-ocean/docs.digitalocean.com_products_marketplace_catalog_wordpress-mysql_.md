---
url: "https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/"
title: "WordPress + MySQL | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/)
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

- WordPress + MySQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# WordPress + MySQL

Generated on 26 Nov 2024
from [the WordPress + MySQL catalog page](https://marketplace.digitalocean.com/apps/wordpress-mysql)

Quickly setup a WordPress Droplet with a managed MySQL database, perfect for launching websites quickly. When you launch this bundle you’ll deploy a Droplet pre-configured with WordPress and attached to a managed PostgreSQL database.

## Use Cases

Using a WordPress Droplet on DigitalOcean with a managed MySQL database is a popular and efficient way to create and manage content-heavy websites. Here are some use cases where this setup is particularly beneficial:

- **Blogging Platforms**
  - WordPress provides a seamless blogging experience with customizable themes, plugins, and content management tools. Using a managed MySQL database ensures fast content retrieval and data stability, especially as the blog grows in posts and traffic.
- **Online Communities or Forums**
  - WordPress, combined with plugins like bbPress or BuddyPress, enables easy forum and community site setup. A managed MySQL database can handle user-generated content, profiles, and interactions, offering a reliable backend for community engagement and growth.
- **E-commerce Sites**
  - WordPress, combined with WooCommerce, allows you to add products, manage inventory, and process payments with ease. A managed MySQL database can handle complex product, order, and customer data reliably, supporting smooth transactions and scaling as customer numbers increase.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| WordPress | [6.4.1](https://wordpress.org/news/) | [GPL 2](https://wordpress.org/about/license/) |
| Apache | [2.4.52](https://packages.ubuntu.com/focal/apache2) | [Apache 2](https://www.apache.org/licenses/) |
| MySQL server | [8.0.35](https://packages.ubuntu.com/focal/mysql-server) | [GPL 2 with modifications](https://www.mysql.com/about/legal/licensing/oem/#5) |
| PHP | [8.0.30](https://packages.ubuntu.com/focal/php) | [PHP v3.01](http://php.net/license/index.php) |
| Fail2ban | [5.2.1](https://plugintests.com/plugins/wporg/wp-fail2ban/latest) | [GPL 2](https://github.com/fail2ban/fail2ban/blob/0.11/COPYING) |
| Postfix | [3.6.4](https://packages.ubuntu.com/focal/postfix) | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |
| Certbot | [1.21](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy WordPress + MySQL to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?size=s-1vcpu-2gb&appId=160376476&type=applications&engine=mysql&image=wordpress-20-04)

## Getting Started After Deploying WordPress + MySQL

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your WordPress Droplet 1-Click, you will be greeted by a WordPress setup script.

_If you do not have a Domain yet you can enter the IP address of your Droplet into the setup script when prompted for the Domain/Subdomain instead._

The first step is to enter your domain name. Make sure that your domain is pointing to the new droplet IP. If your DNS is managed by DigitalOcean, it should look like this:

![WordPress DNS Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/wordpress-dns.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

Once your A record is set up, you are ready to enter your domain in the script:

```
This script will copy the WordPress installation into
Your web root and move the existing one to /var/www/html.old
--------------------------------------------------
This setup requires a domain name.  If you do not have one yet, you may
cancel this setup, press Ctrl+C.  This script will run again on your next login
--------------------------------------------------
Enter the domain name for your new WordPress site.
(ex. example.org or test.example.org) do not include www or http/s
--------------------------------------------------
Domain/Subdomain name: wordpress-example.com
```

Next, the script will ask you user-related data:

```
Now we will create your new admin user account for WordPress.
Your Email Address: example@digitalocean.com

Username: example

Password:

Blog Title: My Example Blog

Is the information correct? [Y/n] y
```

After you acknowledge data is correct, the script will ask if you want to configure HTTPS automatically for your droplet. We highly recommend setting HTTPS since using a domain is useless without it.

You will need to provide the email address which will receive security and renewal notices:

```
Would you like to use LetsEncrypt (certbot) to configure SSL(https) for your new site? (y/n): y
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): example@digitalocean.com
```

Finally, after reading the LetsEncrypt Terms of Service and selecting whether to share or not your email address with the Electronic Frontier Foundation, the script will ask you which domain names would you like to activate HTTPS for:

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.4-April-3-2024.pdf. You must agree in
order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: n
Account registered.

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: wordpress-example.com
2: www.wordpress-example.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1,2
Requesting a certificate for wordpress-example.com and www.wordpress-example.com
```

Consider activating HTTPS for both naked and WWW versions of your domain by specifying 1,2.

WordPress will take a few minutes to set up plugins and finish installation, after that you can access your fresh WordPress Droplet by typing your domain name in the browser. For accessing the admin console, use https://%YOUR\_DOMAIN%/wp-admin.

_If you entered an IP address instead of the Domain name you can access the admin console by using https://%YOUR\_IP%/wp-admin instead._

## Access your Managed Database from your Droplet

To test the connection to a managed MySQL database from a WordPress droplet, access your droplet via SSH, then use the mysql command with your database credentials to attempt a connection; if successful, you’ll be able to interact with the database, otherwise, you’ll receive an error message indicating the connection failed, prompting you to check your database details in the WordPress configuration file (`wp-config.php`) for accuracy.

### Key steps:

- **Access your droplet**: Log in to your droplet using SSH with your credentials.
- Run the `mysql` command:

```
mysql -u <database_username> -p <database_host> -P <database_port>
```

- Replace `<database_username>` with your database username.
- Replace `<database_host>` with the hostname of your managed MySQL database.
- Replace `<database_port>` with the database port (usually 3306).
- **Enter your password**: When prompted, type your database password and press enter.
- **Check for connection success**: If the connection is successful, you’ll be presented with a MySQL prompt, indicating you can now interact with your database.

In this article...

- [Use Cases](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#use-cases)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying WordPress + MySQL](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#getting-started-after-deploying-wordpress--mysql)
- [Access your Managed Database from your Droplet](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#access-your-managed-database-from-your-droplet)
  - [Key steps:](https://docs.digitalocean.com/products/marketplace/catalog/wordpress-mysql/#key-steps)

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