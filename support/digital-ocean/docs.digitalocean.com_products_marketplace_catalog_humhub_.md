---
url: "https://docs.digitalocean.com/products/marketplace/catalog/humhub/"
title: "HumHub | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/humhub/)
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

- HumHub

[Give Feedback](https://ideas.digitalocean.com/documentation)

# HumHub

Generated on 8 Dec 2021
from [the HumHub catalog page](https://marketplace.digitalocean.com/apps/humhub)

HumHub is an open-source Enterprise Social Network. Easy to install, intuitive and adaptable with countless free modules. Available as on-premise or SaaS solution. Boost communication and knowledge transfer in your organization. Keep hands on your data with your own Enterprise Social Network.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [HumHub](https://www.humhub.com/) | 1.10.2 | AGPL-3 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=humhubgmbhkg-humhub-10)

## Creating an App using the API

In addition to creating a Droplet from the HumHub 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB HumHub Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"humhubgmbhkg-humhub-10"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying HumHub

After you create your HumHub One-Click Droplet:

- Briefly visit the Droplet via SSH `ssh root@your_droplet_public_ipv4` to display the required **Database configuration**.
- Then visit http://your\_droplet\_public\_ipv4 in the browser and start the HumHub initial installation.

## Individual Hostname with SSH

To use a custom hostname e.g. `test.example.com` instead of the droplet IP, the following steps are necessary.

Please make sure to always replace the example hostname with your own hostname.

1. Create a DNS record for your hostname that pointing to your new Droplet\_IP
2. Run certbot to obtain a SSL certificate e.g. `certbot certonly -a webroot -w /var/www/html -d test.example.com`
3. Adjust hostname and SSL in NGINX configuration `/etc/nginx/sites-available/humhub.conf`. (See related `HINTS` in the file.)
4. Restart NGINX with `systemctl restart nginx`
5. Change the default URL in the HumHub configuration. To do this, change the `Base URL` field in `Administration` -\> `Settings` -\> `General`.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/humhub/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/humhub/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/humhub/#creating-an-app-using-the-api)
- [Getting Started After Deploying HumHub](https://docs.digitalocean.com/products/marketplace/catalog/humhub/#getting-started-after-deploying-humhub)
- [Individual Hostname with SSH](https://docs.digitalocean.com/products/marketplace/catalog/humhub/#individual-hostname-with-ssh)

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