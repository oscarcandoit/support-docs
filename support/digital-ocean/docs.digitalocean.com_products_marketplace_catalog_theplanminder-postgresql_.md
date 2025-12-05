---
url: "https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/"
title: "ThePlanMinder PostgreSQL | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/)
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

- ThePlanMinder PostgreSQL

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ThePlanMinder PostgreSQL

Generated on 5 Mar 2025
from [the ThePlanMinder PostgreSQL catalog page](https://marketplace.digitalocean.com/apps/theplanminder-postgresql)

PostgreSQL 16 server with a script to quickly create a database for The PlanMinder. With afw firewall and fail2ban configured and ready to use.

This Droplet is intended as a server for The PlanMinder project planning software available at [www.theplanminder.com](http://www.theplanminder.com/)

A Basic 1 GB / 1 CPU plan should be enough for most users. You can upgrade later if needed.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| PostgreSQL | 16 | [PostgreSQL License](https://www.postgresql.org/about/licence/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=auspiciaab-theplanminderpos-20-04)

## Creating an App using the API

In addition to creating a Droplet from the ThePlanMinder PostgreSQL 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ThePlanMinder PostgreSQL Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"auspiciaab-theplanminderpos-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ThePlanMinder PostgreSQL

Login as root with SSH, or use the web console.

`ssh root@your_droplet_public_ipv4`

Type

`bash create_db.sh`

to create a database user login and a database for The PlanMinder.

After creation the script will display the information needed to connect to the database with The PlanMinder. When starting The PlanMinder client on your PC, make sure the service user tab is marked in the login window. The PlanMinder will ask you if you want to create database tables. You should answer yes to complete the database setup.

A detailed [step by step guide](https://theplanminder.com/droplet) is available at [theplanminder.com](https://theplanminder.com/).

## Additional details

The firewall is open for SSH at port 22, and for Postgres at port 35432.

The “postgres” database user is not allowed to connect remotely. This can be changed by editing the /etc/postgresql/16/main/pg\_hba.conf file.

You can create a firewall in the Digital Ocean Networking section to limit access to the droplet to known source ip numbers.

You can run the create\_db.sh script again to create additional databases for The PlanMinder on the droplet.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/#creating-an-app-using-the-api)
- [Getting Started After Deploying ThePlanMinder PostgreSQL](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/#getting-started-after-deploying-theplanminder-postgresql)
- [Additional details](https://docs.digitalocean.com/products/marketplace/catalog/theplanminder-postgresql/#additional-details)

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