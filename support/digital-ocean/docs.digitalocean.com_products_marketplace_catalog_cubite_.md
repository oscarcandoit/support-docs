---
url: "https://docs.digitalocean.com/products/marketplace/catalog/cubite/"
title: "CUBITE | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/cubite/)
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

- CUBITE

[Give Feedback](https://ideas.digitalocean.com/documentation)

# CUBITE

Generated on 15 Oct 2021
from [the CUBITE catalog page](https://marketplace.digitalocean.com/apps/cubite)

Cubite provides an easy-to-use Learning Management System that helps educators create engaging and interactive courses online for their students with one click from within a DigitalOcean account. With this application, you’ll be able to install open edx, a world-class learning management system backed by MIT and Harvard University. You can also bring modern look and feel into your platform so that all of those learners out there will have an amazing experience with the course content!

## Powered by Open edX

The Open edX platform provides the massively scalable learning software technology behind edX. It is also the learning platform of choice for global organizations such as Microsoft and IBM. [https://open.edx.org/](https://docs.digitalocean.com/products/marketplace/catalog/cubite/url)

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=cubitetechnologi-cubite-20-04)

## Creating an App using the API

In addition to creating a Droplet from the CUBITE 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB CUBITE Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"cubitetechnologi-cubite-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying CUBITE

To follow along make sure you can use `ssh root@your_droplet_public_ipv4` to SSH to your server. When you have active SSH session to your server follow these steps in the command line interface.

## Set Necessary URLs

## `lms.yml`

open `/edx/etc/lms.yml` file with your favorite editor. Change following variables to domain names you just assigned to your instance

```
PREVIEW_LMS_BASE: preview.mysite.com
LMS_BASE: mysite.com
LMS_ROOT_URL: https://mysite.com
CMS_BASE: studio.mysite.com
CROSS_DOMAIN_CSRF_COOKIE_DOMAIN:
LOGIN_REDIRECT_WHITELIST:
- studio.mysite.com
```

## `studio.yml`

open `/edx/etc/studio.yml` file with your favorite editor. Change following variables to domain names you just assigned to your instance

```
PREVIEW_LMS_BASE: preview.mysite.com
LMS_BASE: mysite.com
LMS_ROOT_URL: https://mysite.com
CMS_BASE: studio.mysite.com
LMS_INTERNAL_ROOT_URL: https://mysite.com
CROSS_DOMAIN_CSRF_COOKIE_DOMAIN:
LOGIN_REDIRECT_WHITELIST:
- studio.mysite.com
```

Restart services `/edx/bin/supervisorctl restart all`

## Add Superuser

To add superuser to your instance, SSH to the server and run the following command

```
sudo -H -u edxapp bash
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
python manage.py lms --settings=production createsuperuser
```

The prompt will ask you for username, email and password.

## Enable SSL certificate

Installing an SSL certificate on your OpenX server is the best way to ensure security for both yourself and your students. The installation process only takes a few minutes.

We highly recommend installing an SSL certification as soon as possible, so we can make sure everyone stays safe from any potential cyber-attacks.

## Create DNS records

Each Open edX instance has at least 3 URLs. One for LMS, one for Studio, and One for Preview. Create A record in your DNS for each URL. For example

```
mysite.com                #LMS record
studio.mysite.com         #Studio record
preview.mysite.com        #Preview record
```

## Change Nginx files

### LMS and Preview

open `/edx/app/nginx/sites-available/lms` file with our favorite editor and add the following after `server {` section

```
server_name mysite.com preview.mysite.com
```

It should look like following

```
server {
    server_name mysite.com preview.mysite.com
.
.
.
.
.
.
```

### Studio

open `/edx/app/nginx/sites-available/cms` file with our favorite editor and add the following after `server {` section

```
server_name studio.mysite.com
```

It should look like following

```
server {
    server_name studio.mysite.com
.
.
.
.
.
.
```

## Install Letsencrypt

Follow official instructions at [https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx) to install letsencrypt

In this article...

- [Powered by Open edX](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#powered-by-open-edx)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#creating-an-app-using-the-api)
- [Getting Started After Deploying CUBITE](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#getting-started-after-deploying-cubite)
- [Set Necessary URLs](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#set-necessary-urls)
- [`lms.yml`](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#lmsyml)
- [`studio.yml`](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#studioyml)
- [Add Superuser](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#add-superuser)
- [Enable SSL certificate](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#enable-ssl-certificate)
- [Create DNS records](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#create-dns-records)
- [Change Nginx files](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#change-nginx-files)
  - [LMS and Preview](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#lms-and-preview)
  - [Studio](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#studio)
- [Install Letsencrypt](https://docs.digitalocean.com/products/marketplace/catalog/cubite/#install-letsencrypt)

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