---
url: "https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/"
title: "Passbolt CE | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/)
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

- Passbolt CE

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Passbolt CE

Generated on 9 Oct 2025
from [the Passbolt CE catalog page](https://marketplace.digitalocean.com/apps/passbolt-ce)

Passbolt is an open source password manager for businesses and IT teams. It helps centralize, organize, and share passwords securely with collaborators and teams while enforcing strong security policies. Passbolt is open source, self-hosted and respects your privacy. Passbolt Community Edition (CE) is free and will remain free forever. More information on [https://www.passbolt.com](https://www.passbolt.com/)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Passbolt | [5.6.0](https://help.passbolt.com/releases/ce/) | [GNU Affero General Public License v3.0](https://github.com/passbolt/passbolt_api/blob/master/LICENSE.txt) |
| Nginx | [1.18.0](https://packages.ubuntu.com/bionic/nginx) | [Custom](http://nginx.org/LICENSE) |
| Certbot | [0.40](https://packages.ubuntu.com/bionic/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| mariadb-server | [10.3.25](https://packages.ubuntu.com/bionic/mariadb-server) | [GPL v2](https://mariadb.com/kb/en/library/legal-documents-mariadb-license/) |
| php-fpm | [8.2](https://packages.ubuntu.com/bionic/php-fpm) | [PHP License](http://www.php.net/license/3_01.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=passboltsa-passboltce-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Passbolt CE 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Passbolt CE Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"passboltsa-passboltce-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Passbolt CE

1. **Point your domain DNS to this machine IP address.** Please check [DigitalOcean DNS documentation](https://www.digitalocean.com/docs/networking/dns/) or your domain name provider help for this.
2. **Wait until the DNS propagation is done.** To check if it is done, ping your domain and it should resolve to this Droplet IP. You can also check the propagation using [online tools](https://www.whatsmydns.net/).
3. **Login to this Droplet via SSH** as root: `ssh root@this_Droplet_ip` or `ssh root@your_domain.com`. Use this same ssh connection to gather the randomly generated mysql credentials in `/root/.mysql_credentials` you will need them for the web installation wizard.
4. **Follow the instructions**. A script will be launched, choose the automatic configuration option and let the script guide you. Once you’re done, point your browser to the DNS assigned to this Droplet: `https://your_domain.com` and you will then see the web installation wizard. In case of issues check out the installation [documentation](https://www.passbolt.com/help/tech/install/ce/digital-ocean) on the help site. You can also you can post a new entry on the [community forum](https://community.passbolt.com/c/installation-issues).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/#creating-an-app-using-the-api)
- [Getting Started After Deploying Passbolt CE](https://docs.digitalocean.com/products/marketplace/catalog/passbolt-ce/#getting-started-after-deploying-passbolt-ce)

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