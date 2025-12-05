---
url: "https://docs.digitalocean.com/products/marketplace/catalog/nginx/"
title: "NGINX | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/nginx/)
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

- NGINX

[Give Feedback](https://ideas.digitalocean.com/documentation)

# NGINX

Generated on 3 Jan 2023
from [the NGINX catalog page](https://marketplace.digitalocean.com/apps/nginx)

NGINX is an open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [nginx](https://nginx.org/) | [1.23.3](https://nginx.org/en/CHANGES) | [BSD-2-Clause](https://nginx.org/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=nginx)

## Creating an App using the API

In addition to creating a Droplet from the NGINX 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB NGINX Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"nginx"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying NGINX

### How to use this Droplet

### Log into the Droplet

If you’ve setup an SSH key while launching the Droplet, use `ssh -i <ssh_key> <user>@<your_droplet_public_ipv4>`.

Otherwise, if you’ve setup a user and password, use `ssh <user>@<your_droplet_public_ipv4>` to log into the instance.

### Check NGINX is working

Before you start tweaking NGINX, make sure it is indeed present and working. Run `curl <your_droplet_public_ipv4>` or open the IP address on your web browser of choice. If NGINX is running, you should be greeted with the default “Welcome to nginx!” landing page.

### Configure NGINX

Detailing how to configure NGINX would take more space than what’s available here. As such, we recommend you check our [Beginner’s Guide](https://nginx.org/en/docs/beginners_guide.html) and our full module reference documentation available at [https://nginx.org/en/docs/](https://nginx.org/en/docs/).

### Configure Firewall

In addition to installing NGINX, this 1-Click also enables the UFW firewall to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access. We recommend you tweak your environment to further restrict SSH access to the droplet.

### Need help?

Have a question about how to use NGINX? Want to chat with like minded fellows? [Join our NGINX community Slack](https://community.nginx.org/joinslack)!

Alternatively, feel free to reach out to the NGINX team using the [NGINX mailing list](mailto:nginx@nginx.org)!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#creating-an-app-using-the-api)
- [Getting Started After Deploying NGINX](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#getting-started-after-deploying-nginx)
  - [How to use this Droplet](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#how-to-use-this-droplet)
  - [Log into the Droplet](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#log-into-the-droplet)
  - [Check NGINX is working](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#check-nginx-is-working)
  - [Configure NGINX](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#configure-nginx)
  - [Configure Firewall](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#configure-firewall)
  - [Need help?](https://docs.digitalocean.com/products/marketplace/catalog/nginx/#need-help)

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