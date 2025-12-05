---
url: "https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/"
title: "ShinyProxy | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/)
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

- ShinyProxy

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ShinyProxy

Generated on 12 Jul 2025
from [the ShinyProxy catalog page](https://marketplace.digitalocean.com/apps/shinyproxy)

Deploy interactive R Shiny applications at scale with ease using the 1-Click ShinyProxy app. ShinyProxy builds on enterprise Java and Docker technology to provide authentication, authorization, resource allocation, and monitoring.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ShinyProxy | [3.2.0](https://shinyproxy.io/downloads/) | [Apache 2](https://www.apache.org/licenses/LICENSE-2.0) |
| OpenJDK | [21.0.7](https://openjdk.org/) | [GPL 2 with the Classpath Exception](https://openjdk.java.net/legal/gplv2+ce.html) |
| Docker CE | [28.3.2](https://docs.docker.com/engine/release-notes/) | [Apache 2](https://www.apache.org/licenses/LICENSE-2.0) |
| Nginx | [1.24.0](http://nginx.org/en/CHANGES-1.18) | [2-clause BSD](https://opensource.org/licenses/BSD-2-Clause) |
| Certbot | [4.1.1](https://certbot.eff.org/) | [Apache 2](https://www.apache.org/licenses/LICENSE-2.0) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=analythium-shinyproxy-20-04)

## Creating an App using the API

In addition to creating a Droplet from the ShinyProxy 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ShinyProxy Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"analythium-shinyproxy-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ShinyProxy

### Log in using ShinyProxy UI

Once your new droplet with the ShinyProxy 1-Click app is up and running, you can visit your droplet’s IP address. Use `admin`/`password` or `user`/`password` as user name and password to log into your ShinyProxy instance. You’ll see two demo [R](https://www.r-project.org/) [Shiny](https://shiny.posit.co/) applications. Note that it might take 30-60 seconds for all systems to come online: please reload the page if you see an 502 Bad Gateway message from Nginx.

### Log in through SSH

Use your SSH key you set up with your droplet to log in: `ssh root@your_droplet_public_ipv4`.

On the 1st SSH login you will be prompted to set up SSL certificate via Let’s Encrypt to serve the ShinyProxy over HTTPS. You’ll need a domain name with a DNS A record pointing to the Droplet IP address, and an email address.

Edit `/etc/shinyproxy/application.yml` to [configure](https://shinyproxy.io/documentation/configuration/) your instance. Pay special attention to authentication: it is set to `simple`. You should change user names and passwords, possibly the authentication type.

Pull Docker images and add those to the configuration file to [deploy your Shiny apps](https://shinyproxy.io/documentation/deploying-apps/).

Then restart ShinyProxy to take effect using `sudo service shinyproxy restart`.

### Advanced configuration

Follow the 1-Click App documentation to manually set up SSL certificate to serve the Shiny apps over [HTTPS](https://hosting.analythium.io/custom-domain-and-security-for-shinyproxy-with-nginx/), [update the ShinyProxy apps and configs](https://hosting.analythium.io/advanced-configuration-for-shinyproxy/), and to configure continuous integration and continuous delivery (CI/CD) via [webhook](https://hub.analythium.io/docs/shinyproxy-webhook).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#creating-an-app-using-the-api)
- [Getting Started After Deploying ShinyProxy](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#getting-started-after-deploying-shinyproxy)
  - [Log in using ShinyProxy UI](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#log-in-using-shinyproxy-ui)
  - [Log in through SSH](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#log-in-through-ssh)
  - [Advanced configuration](https://docs.digitalocean.com/products/marketplace/catalog/shinyproxy/#advanced-configuration)

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