---
url: "https://docs.digitalocean.com/products/marketplace/catalog/immich/"
title: "Immich | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/immich/)
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

- Immich

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Immich

Generated on 30 Sep 2025
from [the Immich catalog page](https://marketplace.digitalocean.com/apps/immich)

Self-hosted photo and video management solution

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Immich](https://immich.app/) | release | [AGPL 3 on GitHub](https://github.com/immich-app/immich/blob/main/LICENSE) |
| Docker CE | 28.4.0 | [Apache 2 on GitHub](https://github.com/docker/docker/blob/master/LICENSE) |
| Docker Compose | 2.39.2 | [Apache 2 on GitHub](https://github.com/docker/compose/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=futo-immich)

## Creating an App using the API

In addition to creating a Droplet from the Immich 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Immich Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"futo-immich"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Immich

## Immich First-Time Setup Instructions

## Initial Deployment

Upon deployment, Immich requires several minutes to fully initialize all services. Please allow adequate time for the complete startup process before attempting to access the application.

## Accessing Your Immich Instance

Once the initialization process is complete, access your Immich instance using your server’s IP address:

_**https://your\_droplet\_public\_ipv4**_

Click `Allow` / `Continue` on any security warning while accessing Immich via the IP Address (Follow the Certificate Configuration steps below to avoid this warning.)

## System Architecture

Immich is deployed as Docker containers running under the dedicated `immich` system user. To perform administrative tasks, [login](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) and switch to this user account:

_**ssh root@your\_droplet\_public\_ipv4**_

```
su - immich
```

## Configuration Management

### Application Directory

The Immich application files are located in the following directory:

```
cd /home/immich/immich-app/
```

### Environment Configuration

Application settings can be modified through the environment configuration file:

```
nano /home/immich/immich-app/.env
```

### Applying Configuration Changes

After making changes to the configuration, restart the Immich services to apply the modifications:

```
cd /home/immich/immich-app/ ;
docker compose down ;
docker compose pull --policy always --quiet ;
docker compose up -d
```

### Process Management Scripts

Additional system scripts and utilities for Immich management are located in:

```
/opt/immich/
```

## SSL/TLS Certificate Configuration

### Automatic Certificate Provisioning

When pointing a domain name to your server’s IP address, Caddy will automatically provision and configure SSL certificates through Let’s Encrypt.

To enable automatic certificate management:

1. Configure your domain’s DNS records to point to your server’s IP address
2. Access your Immich instance using your domain:

```
https://yourdomain.com/
```

The certificate provisioning process will complete automatically upon first access, refresh the page if this takes more than 60 seconds.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/immich/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/immich/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/immich/#creating-an-app-using-the-api)
- [Getting Started After Deploying Immich](https://docs.digitalocean.com/products/marketplace/catalog/immich/#getting-started-after-deploying-immich)
- [Immich First-Time Setup Instructions](https://docs.digitalocean.com/products/marketplace/catalog/immich/#immich-first-time-setup-instructions)
- [Initial Deployment](https://docs.digitalocean.com/products/marketplace/catalog/immich/#initial-deployment)
- [Accessing Your Immich Instance](https://docs.digitalocean.com/products/marketplace/catalog/immich/#accessing-your-immich-instance)
- [System Architecture](https://docs.digitalocean.com/products/marketplace/catalog/immich/#system-architecture)
- [Configuration Management](https://docs.digitalocean.com/products/marketplace/catalog/immich/#configuration-management)
  - [Application Directory](https://docs.digitalocean.com/products/marketplace/catalog/immich/#application-directory)
  - [Environment Configuration](https://docs.digitalocean.com/products/marketplace/catalog/immich/#environment-configuration)
  - [Applying Configuration Changes](https://docs.digitalocean.com/products/marketplace/catalog/immich/#applying-configuration-changes)
  - [Process Management Scripts](https://docs.digitalocean.com/products/marketplace/catalog/immich/#process-management-scripts)
- [SSL/TLS Certificate Configuration](https://docs.digitalocean.com/products/marketplace/catalog/immich/#ssltls-certificate-configuration)
  - [Automatic Certificate Provisioning](https://docs.digitalocean.com/products/marketplace/catalog/immich/#automatic-certificate-provisioning)

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