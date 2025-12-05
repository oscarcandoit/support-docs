---
url: "https://docs.digitalocean.com/products/marketplace/catalog/coder/"
title: "Coder | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/coder/)
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

- Coder

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Coder

Generated on 23 Mar 2022
from [the Coder catalog page](https://marketplace.digitalocean.com/apps/coder)

Coder handles the orchestration of new consistent developer workspaces using source-controlled Dockerfiles and workspace templates. Empower developers and data scientists to self-serve workspaces that just work.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Coder](https://coder.com/docs) | [v1.28.2](https://coder.com/docs/coder/latest/changelog/1.28.1) | [Paid (free trial)](https://coder.com/docs/coder/latest/comparison) |
| [Caddy](https://caddyserver.com/) | [v2.4.6](https://github.com/caddyserver/caddy/releases/tag/v2.4.6) | [Apache 2.0](https://github.com/caddyserver/caddy/blob/master/LICENSE) |
| [Docker Engine](https://docker.com/) | [20.10.12](https://github.com/moby/moby/releases/tag/v20.10.12) | [Apache 2.0](https://github.com/moby/moby/blob/master/LICENSE) |
| [docker-compose](https://docs.docker.com/compose) | [v1.29.2](https://docs.docker.com/compose/release-notes/#1292) | [Apache 2.0](https://github.com/docker/compose/blob/v2/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=coder)

## Creating an App using the API

In addition to creating a Droplet from the Coder 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Coder Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"coder"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Coder

By default, Coder will run on your Droplet’s public IPv4 address with a self-signed certificate: [https://your\_droplet\_public\_ipv4/login](https://your_droplet_public_ipv4/login)

Log in with these credentials, then set a new password:

```
admin
coder12345
```

## Add a domain (optional)

1. Point your DNS records (`coder.yourdomain.com``*.coder.yourdomain.com`) to the Droplet’s public IPv4 address.
2. Navigate to the domain, Caddy should automatically provision a TLS certificate. (We recommend using an incognito window to avoid initial caching

## Enable [dev URLs](https://coder.com/docs/coder/latest/workspaces/devurls) (optional)

1. SSH into your Droplet: `ssh root@your_droplet_public_ipv4`

2. Follow instructions to modify `coder/docker-compose.yaml` and set


```
- DEVURL_HOST=*.coder.yourdomain.com
```

3. Modify `coder/Caddyfile` to specify your email address for LetsEncrypt.

4. Restart Coder and Caddy:


   ```
   cd $HOME/coder && docker-compose restart
   ```


## Harden your configuration (recommended)

1. SSH into your Droplet: `ssh root@your_droplet_public_ipv4`

2. Follow instructions to modify `coder/Caddyfile` to disable “internal” (self-signed) certificates and add your email for LetsEncrypt.

3. Replace `https:// {` with `coder.yourdomain.com, *.coder.yourdomain.com {` to limit the proxy to your domain(s).

4. Restart Coder and Caddy:


   ```
   cd $HOME/coder && docker-compose restart
   ```


## Use a wildcard certificate

By default, Caddy’s [On-Demand TLS](https://caddyserver.com/docs/automatic-https#on-demand-tls) will be used to generate certificates for dev URLs. This zero-configuration options works well, but introduces ~10 second delays or [rate limiting](https://letsencrypt.org/docs/rate-limits/) when a developer visits a newly-created dev URL.

For best results, consider configuring [ZeroSSL with Caddy](https://caddy.community/t/using-zerossls-acme-endpoint/9406) or [build a Caddy image](https://github.com/docker-library/docs/tree/master/caddy#adding-custom-caddy-modules) with the module for your DNS provider.

Stay tuned for a [future release](https://github.com/bpmct/c4d-packer/releases) with improved steps for wildcard/custom certificates.

## Use a managed Postgres database (optional)

1. SSH into your Droplet: `ssh root@your_droplet_public_ipv4`

2. Modify `coder/docker-compose.yaml` and [follow our docs](https://coder.com/docs/coder/latest/setup/docker#use-an-external-postgresql-database) to configure your managed database with Coder for Docker.

3. Restart Coder and Caddy:


   ```
   cd $HOME/coder && docker-compose restart
   ```


Stay tuned for a [future release](https://github.com/bpmct/c4d-packer/releases) with built-in support for DigitalOcean managed DBs.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/coder/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/coder/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/coder/#creating-an-app-using-the-api)
- [Getting Started After Deploying Coder](https://docs.digitalocean.com/products/marketplace/catalog/coder/#getting-started-after-deploying-coder)
- [Add a domain (optional)](https://docs.digitalocean.com/products/marketplace/catalog/coder/#add-a-domain-optional)
- [Enable](https://docs.digitalocean.com/products/marketplace/catalog/coder/#enable-dev-urls-optional) [dev URLs](https://coder.com/docs/coder/latest/workspaces/devurls) (optional)
- [Harden your configuration (recommended)](https://docs.digitalocean.com/products/marketplace/catalog/coder/#harden-your-configuration-recommended)
- [Use a wildcard certificate](https://docs.digitalocean.com/products/marketplace/catalog/coder/#use-a-wildcard-certificate)
- [Use a managed Postgres database (optional)](https://docs.digitalocean.com/products/marketplace/catalog/coder/#use-a-managed-postgres-database-optional)

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