---
url: "https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/"
title: "Django + PostgreSQL | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/)
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

- Django + PostgreSQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Django + PostgreSQL

Generated on 26 Nov 2024
from [the Django + PostgreSQL catalog page](https://marketplace.digitalocean.com/apps/django-postgresql)

## Make a Data-Driven App

Develop powerful Python web applications with a Django server and managed PostgreSQL database. When you launch this bundle you’ll deploy a Droplet pre-configured with Django and attached to a managed PostgreSQL database.

## Use Cases

- **Blogging Systems**
  - Django’s built-in admin panel is ideal for content management, allowing administrators to easily manage articles, images, and user comments. A managed PostgreSQL database provides reliability and scaling options as traffic grows.
- **E-commerce Platforms**
  - Django’s modular structure is suited for integrating payment gateways, managing products, and processing orders. PostgreSQL’s support for complex queries and ACID compliance ensures consistent transactions, making it well-suited for storing product details, order history, and transaction records.
- **Real-Time Web Applications**
  - Django combined with channels (for WebSockets) and a managed PostgreSQL database can handle real-time updates. PostgreSQL’s support for advanced concurrency and pub/sub notifications (LISTEN/NOTIFY) enables real-time data handling in a robust environment.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Django | [5.0](https://pypi.org/project/Django/) | [Custom](https://github.com/django/django/blob/master/LICENSE) |
| Nginx | [1.18.0](https://packages.ubuntu.com/focal/nginx) | [Custom](http://nginx.org/LICENSE) |
| Certbot | [0.40.0](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Gunicorn | [20.0.4](https://packages.ubuntu.com/focal/gunicorn) | [MIT](https://github.com/benoitc/gunicorn/blob/master/LICENSE) |
| Postgres | [12](https://packages.ubuntu.com/focal/postgresql) | [PostgreSQL](https://opensource.org/licenses/postgresql) |
| Postfix | [3.4.10](https://packages.ubuntu.com/focal/postfix) | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy Django + PostgreSQL to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?size=s-1vcpu-2gb&appId=164059212&type=applications&engine=pg&image=django-20-04)

## Getting Started After Deploying Django + PostgreSQL

After you’ve created a Droplet, you can navigate to its public IPv4 address to see the sample application live.

To learn how to make modifications or get your code onto your Droplet, here are the steps. You can also follow the sample application for the instructions.

### Step 1: Access to your Droplet

Open a terminal on your computer to access your Droplet as the root user using the following command:

```
ssh root@your_droplet_public_ipv4
```

You will then be prompted to enter a password. If you created your Droplet with a root user password, enter this in the terminal. If you created your Droplet with an ssh key, enter the passphrase associated with your key.

### Step 2: Get your code on here

Note the login message, it has important details for connecting to your Postgres database, among other things!

Clone your Django code onto the droplet, anywhere you like. Note: If you’re not using a source control, you can directly upload the files to your droplet using SFTP.

You can try to reuse this project, located in `/home/django/django_project`, or start fresh in a new location and edit Gunicorn’s configuration to point to it at `/etc/systemd/system/gunicorn.service`. You can also change how nginx is routing traffic by editing `/etc/nginx/sites-enabled/default`.

`cd` into the directory where your Django code lives, and install any dependencies. (For example, if you have a `requirements.txt` file, run `pip install -r requirements.txt`.)

That’s it! Whenever you make code changes, reload Gunicorn like so:

```
PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID
```

### Step 3: Play in the admin area

The standard Django admin area is accessible at `/admin`. The login and password are stored in the `DJANGO_USER*` values you see when you call `cat /root/.digitalocean_passwords` while logged in over SSH.

### Step 4: Get production-ready

There’s a lot you’ll want to do to make sure you’re production-ready. Here are the popular things that people will do.

- **Firewall**: Review your firewall settings by calling `sudo ufw status`, and make any changes you need. By default, only SSH/SFTP (port 22), HTTP (port 80), and HTTPS (port 443) are open. You can also disable this firewall by calling `sudo ufw disable` and use a DigitalOcean cloud firewall instead, if you like (they’re free).
- **Domain**: Register a custom domain.
- **Storage**: You can mount a volume (up to 16TB) to this server to expand the filesystem, provision a database cluster (that runs MySQL, Redis, or PostgreSQL), or use a Space, which is an S3-compatible bucket for storing objects.

## Access your Managed Database from your Droplet

To access your DigitalOcean managed PostgreSQL database from your Droplet console, you need to use the `psql` command in the terminal, providing the database connection details like hostname, port, username, and password which can be found in your DigitalOcean database settings; essentially, you’re connecting to the database remotely from your Droplet using the command line.

Key steps:

- Find connection details: Navigate to your DigitalOcean dashboard, go to your managed database cluster, and copy the required connection information (hostname, port, username, password).
- Open Droplet console: Access your Droplet through the DigitalOcean console and open the terminal.
- Run the `psql` command: Use the following command structure to connect:

```
psql -h <database_hostname> -p <database_port> -U <database_username> -d <database_name>
-h: Database hostname
-p: Database port
-U: Database username
-d: Database name
```

In this article...

- [Make a Data-Driven App](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#make-a-data-driven-app)
- [Use Cases](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#use-cases)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying Django + PostgreSQL](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#getting-started-after-deploying-django--postgresql)
  - [Step 1: Access to your Droplet](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#step-1-access-to-your-droplet)
  - [Step 2: Get your code on here](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#step-2-get-your-code-on-here)
  - [Step 3: Play in the admin area](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#step-3-play-in-the-admin-area)
  - [Step 4: Get production-ready](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#step-4-get-production-ready)
- [Access your Managed Database from your Droplet](https://docs.digitalocean.com/products/marketplace/catalog/django-postgresql/#access-your-managed-database-from-your-droplet)

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