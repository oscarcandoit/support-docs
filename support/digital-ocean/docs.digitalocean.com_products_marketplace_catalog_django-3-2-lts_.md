---
url: "https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/"
title: "Django 3.2 LTS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/)
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

- Django 3.2 LTS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Django 3.2 LTS

Generated on 15 Oct 2021
from [the Django 3.2 LTS catalog page](https://marketplace.digitalocean.com/apps/django-3-2-lts)

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without having to reinvent the wheel. It’s free and open source.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Django | [3.2.4](https://docs.djangoproject.com/en/3.2/releases/3.2.4/) | [3-clause BSD](https://github.com/django/django/blob/main/LICENSE.python) |
| Nginx | 1.18.0 | [2-clause BSD](https://nginx.org/en/) |
| Gunicorn | 20.0.4 | [MIT](https://github.com/benoitc/gunicorn/blob/master/NOTICE#L6) |
| Postgres | 12.7 | [The PostgreSQL Licence](https://www.postgresql.org/about/licence/) |
| Python | 3.8.5 | [PSF License](https://docs.python.org/3/license.html) |
| Pip (for Python3) | 20.0.2 | [MIT](https://github.com/pypa/pip/blob/main/LICENSE.txt) |
| Certbot | 0.40.0 | [Apache 2](https://raw.githubusercontent.com/certbot/certbot/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=greendeployhq-django32lts-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Django 3.2 LTS 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Django 3.2 LTS Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"greendeployhq-django32lts-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Django 3.2 LTS

After you created a Droplet, you can navigate to its public IPv4 address to see the sample application live.

To learn how to make modifications or get your code onto your Droplet, here are the steps. You can also follow the sample application for the instructions.

**Step 1: Access to your Droplet**

Open a terminal on your computer to access your Droplet as the root user using the following command:

```
ssh root@your_droplet_public_ipv4
```

You will then be prompted to enter a password. If you created your Droplet with a root user password, enter this in the terminal. If you created your Droplet with an ssh key, enter the passphrase associated with your key.

**Step 2: Get your code on here**

Note the login message, it has important details for connecting to your Postgres database, among other things!

Clone your Django code onto the droplet, anywhere you like. Note: If you’re not using a source control, you can directly upload the files to your droplet using SFTP.

You can try to reuse this project, located in `/home/django/django_project`, or start fresh in a new location and edit Gunicorn’s configuration to point to it at `/etc/systemd/system/gunicorn.service`. You can also change how nginx is routing traffic by editing `/etc/nginx/sites-enabled/default`

Cd into the directory where your Django code lives, and install any dependencies. (For example, if you have a `requirements.txt` file, run `pip install -r requirements.txt`.)

That’s it! Whenever you make code changes, reload Gunicorn like so:

```
PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID
```

**Step 3: Play in the admin area**

The standard Django admin area is accessible at `/admin`. The login and password are stored in the `DJANGO_USER*` values you see when you call `cat /root/.digitalocean_passwords` while logged in over SSH.

**Step 4: Get production-ready**

There’s a lot you’ll want to do to make sure you’re production-ready. Here are the popular things that people will do.

**Firewall:** Review your firewall settings by calling sudo ufw status, and make any changes you need. By default, only SSH/SFTP (port 22), HTTP (port 80), and HTTPS (port 443) are open. You can also disable this firewall by calling sudo ufw disable and use a DigitalOcean cloud firewall instead, if you like (they’re free).

**Domain:** Register a custom domain

**Storage:** You can mount a volume (up to 16TB) to this server to expand the filesystem, provision a database cluster (that runs MySQL, Redis, or PostgreSQL), or use a Space, which is an S3-compatible bucket for storing objects.

**HTTPS:** You use certbot

To use Certbot, you’ll need a registered domain name and two DNS records:

- An A record from the domain (e.g., `example.com`) to the server’s IP address
- An A record from a domain prefaced with www (e.g., [www.example.com](http://www.example.com/)) to the server’s IP address

Additionally, if you’re using a server block file, you’ll need to make sure the server name directive in the Nginx server block (e.g., `server_name example.com`) is correctly set to the domain.

Once the DNS records and, optionally, the server block files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --nginx -d example.com -d www.example.com
```

For a more detailed walkthrough, you can follow [How to Secure Nginx with Let’s Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04) or view [Certbot’s official documentation](https://certbot.eff.org/docs/using.html).

You can serve files from the web server by adding them to the web root (`/var/www/html`) using [SFTP](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server) or other tools.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/#creating-an-app-using-the-api)
- [Getting Started After Deploying Django 3.2 LTS](https://docs.digitalocean.com/products/marketplace/catalog/django-3-2-lts/#getting-started-after-deploying-django-32-lts)

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