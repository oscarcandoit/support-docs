---
url: "https://docs.digitalocean.com/products/marketplace/catalog/fundamento/"
title: "Fundamento | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/)
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

- Fundamento

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Fundamento

Generated on 31 Mar 2025
from [the Fundamento catalog page](https://marketplace.digitalocean.com/apps/fundamento)

## Move faster working together

No more silos, no more confusion. Fundamento is the place that brings everyone together.

## Documents

Capture your ideas, document meetings, make decisions together, or share standard operating procedures so everyone’s on the same page literally.

![](https://res.cloudinary.com/fundamento/image/upload/v1743445750/document_qnrlcd.png)

## Tables

Projects, tasks, and to-dos to tackle any challenge. Place to keep your financial data and track your profit. Anything you want and need, row by row.

![](https://res.cloudinary.com/fundamento/image/upload/v1743445766/table_bkhtc8.png)

## Automations

Write once, execute thousands of times. With our easy to learn formula language you can automate your workflows and save time.

## Includes

## Teams

Organize users into teams, give each team a separate space they can own and manage. Let everybody have their own place at work they they feel at home.

## Permissions

Fundamento is a great place for every team in your company, but that doesn’t mean everyone should see or update everything. Permissions are there to help you with that.

## Privacy and flexibility

You can host Fundamento in your private cloud or in your own infrastructure ensuring your secrets stay with you. We even give you our source code to peak into.

## Peace of mind

What happens in Fundamento stays there. No annoying email notifications about every little change so you can focus on your work. Jump back into the conversation when you want it.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Nginx | [1.18.0](https://packages.ubuntu.com/jammy/nginx) | [2-clause BSD license](https://nginx.org/LICENSE) |
| Docker CE | [26.1.3](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ikigaisystems-fundamento)

## Creating an App using the API

In addition to creating a Droplet from the Fundamento 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Fundamento Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ikigaisystems-fundamento"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Fundamento

## 1-Click DigitalOcean App Deployment Guide

Your application is automatically installed during the provisioning process. Within 5-10 minutes, it should be accessible at:

_http://YOUR\_IP\_ADDRESS_

## Here’s the quickest way to attach a domain and enable SSL using Certbot.

### Steps:

1. **Open Nginx Configuration**

```
sudo nano /etc/nginx/sites-enabled/fundamento-standalone
```

2. **Replace `_` with your actual domain**

```
server_name yourdomain.com;
```

3. **Obtain & Install SSL Certificate**

Run the following command to automatically configure Nginx for SSL:


```
sudo certbot --nginx -d yourdomain.com
```

4. **Verify SSL Auto-Renewal**

Test the renewal process with:


```
sudo certbot renew --dry-run
```

5. **Restart Nginx**

```
sudo systemctl restart nginx
```

Done! Your site is now secured with HTTPS, and Certbot will automatically renew the certificate. 🚀

In this article...

- [Move faster working together](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#move-faster-working-together)
- [Documents](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#documents)
- [Tables](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#tables)
- [Automations](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#automations)
- [Includes](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#includes)
- [Teams](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#teams)
- [Permissions](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#permissions)
- [Privacy and flexibility](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#privacy-and-flexibility)
- [Peace of mind](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#peace-of-mind)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#creating-an-app-using-the-api)
- [Getting Started After Deploying Fundamento](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#getting-started-after-deploying-fundamento)
- [1-Click DigitalOcean App Deployment Guide](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#1-click-digitalocean-app-deployment-guide)
- [Here’s the quickest way to attach a domain and enable SSL using Certbot.](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#heres-the-quickest-way-to-attach-a-domain-and-enable-ssl-using-certbot)
  - [Steps:](https://docs.digitalocean.com/products/marketplace/catalog/fundamento/#steps)

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