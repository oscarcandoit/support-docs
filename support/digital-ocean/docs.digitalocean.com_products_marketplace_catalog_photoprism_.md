---
url: "https://docs.digitalocean.com/products/marketplace/catalog/photoprism/"
title: "PhotoPrism | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/)
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

- PhotoPrism

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PhotoPrism

Generated on 22 Mar 2023
from [the PhotoPrism catalog page](https://marketplace.digitalocean.com/apps/photoprism)

PhotoPrism® is an AI-Powered Photos App for the Decentralized Web. It makes use of the latest technologies to tag and find pictures automatically without getting in your way. You can run it at home, on a private server, or in the cloud.

Visit [photoprism.app](https://www.photoprism.app/) to learn more, or try our public demo at [demo.photoprism.app](https://demo.photoprism.app/).

## Software Included

| Package | Version | License |
| --- | --- | --- |
| PhotoPrism | [latest](https://docs.photoprism.org/release-notes/) | [AGPL 3](https://github.com/photoprism/photoprism/blob/develop/LICENSE) |
| Docker CE | [23.0](https://docs.docker.com/engine/release-notes/) | [Apache 2](https://github.com/docker/docker-ce/blob/master/components/cli/LICENSE) |
| Traefik | [2.9](https://github.com/traefik/traefik/releases) | [MIT](https://github.com/traefik/traefik/blob/master/LICENSE.md) |
| MariaDB | [10.10](https://mariadb.com/kb/en/release-notes/) | [GPL 2](https://mariadb.com/kb/en/mariadb-license/) |
| Ofelia | [0.3](https://github.com/mcuadros/ofelia/releases) | [MIT](https://github.com/mcuadros/ofelia/blob/master/LICENSE) |
| Watchtower | [1.5](https://github.com/containrrr/watchtower/releases) | [Apache 2](https://github.com/containrrr/watchtower/blob/main/LICENSE.md) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=photoprism-20-04)

## Creating an App using the API

In addition to creating a Droplet from the PhotoPrism 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PhotoPrism Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"photoprism-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PhotoPrism

Please note that it will take a few minutes until your Droplet is set up and all services are initialized.

Your initial admin password is stored on the Droplet, you will see it when you run the following commands:

```
ssh root@YOUR-SERVER-IP
cat /root/.initial-password.txt
```

You can then log in to your instance by navigating to it in a web browser (see “Using Let’s Encrypt HTTPS” for how to get a valid certificate):

```
https://YOUR-SERVER-IP/
```

All files related to PhotoPrism can be found in `/opt/photoprism`. It is running as “photoprism” (UID 1000) by default.

To edit the main config file containing services, storage paths, and basic settings (save changes by pressing _Ctrl+O_, then _Ctrl+X_ to exit):

```
cd /opt/photoprism
nano docker-compose.yml
```

Remember to restart services for changes to take effect:

```
docker-compose stop
docker-compose up -d
```

## Using Let’s Encrypt HTTPS

By default, a self-signed certificate will be used for HTTPS connections. Browsers are going to show a security warning because of that. Depending on your settings, they may also refuse connecting at all.

To get an official, free HTTPS certificate from Let’s Encrypt, your server needs a fully qualified public domain name, e.g. “photos.yourdomain.com”.

You may add a static DNS entry (on DigitalOcean go to Networking > Domains) for this, or use a Dynamic DNS service of your choice.

Once your server has a public domain name, please disable the self-signed certificate and enable domain based routing in docker-compose.yml and traefik.yaml (see inline instructions in !! UPPERCASE !!):

```
ssh root@YOUR-SERVER-IP
cd /opt/photoprism
nano docker-compose.yml
nano traefik.yaml
```

Then restart services for the changes to take effect:

```
docker-compose stop
docker-compose up -d
```

You should now be able to access your instance without security warnings:

```
https://photos.yourdomain.com/
```

Note the first request may still fail while Traefik gets and installs the new certificate. Try again after 30 seconds.

## System Requirements

We recommend hosting PhotoPrism on a server with at least 2 cores and 4 GB of memory. Indexing and searching may be slow on smaller Droplets, depending on how many and what types of files you upload.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#creating-an-app-using-the-api)
- [Getting Started After Deploying PhotoPrism](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#getting-started-after-deploying-photoprism)
- [Using Let’s Encrypt HTTPS](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#using-lets-encrypt-https)
- [System Requirements](https://docs.digitalocean.com/products/marketplace/catalog/photoprism/#system-requirements)

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