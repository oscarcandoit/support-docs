---
url: "https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/"
title: "HQbird Firebird v3.0 | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/)
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

- HQbird Firebird v3.0

[Give Feedback](https://ideas.digitalocean.com/documentation)

# HQbird Firebird v3.0

Generated on 27 Oct 2025
from [the HQbird Firebird v3.0 catalog page](https://marketplace.digitalocean.com/apps/hqbird-firebird-v3.0)

HQbird Firebird 3.0.14.33827-11.3.1017 installed on Ubuntu 24.04

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ibsurgeon-hqbirdfirebirdv3)

## Creating an App using the API

In addition to creating a Droplet from the HQbird Firebird v3.0 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB HQbird Firebird v3.0 Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ibsurgeon-hqbirdfirebirdv3"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying HQbird Firebird v3.0

## **Getting Started with HQbird Cloud Firebird**

Steps to deploy your Firebird database:

1. To start using HQbird, login to **http://your\_droplet\_public\_ipv4:8082** and enter user and password: `admin/strong password`.

HQbird has free 30 days trial, already activated on this image.

2. Upload database using embedded FTP. Default settings: ftp://your\_droplet\_public\_ipv4:8721, user `ftpuser`, password `strong password`, home folder /opt/data/db

Access to database files is restricted to **/opt/data/db** by default.

3. Register databases you need to manage and monitor - for this click in the right bottom of HQbird to wheel “Add database”, specify full path for the database, and then setup backups, replication, etc.

Also, you can use Group jobs to maintain many databases in the folder (specify /opt/data/db).

See [HQbird User Guide](https://ib-aid.com/download/docs/hqbirduserguide/userguide.html) for details

After adding database, you can access monitoring web console http://your\_droplet\_public\_ipv4:8083 with the same password as 8082.

4. Default passwords for Firebird databases `SYSDBA`/`masterkey`(for both Srp and Legacy\_UserManager).

5. For security reasons, change all passwords: SYSDBA, FTP and HQbird.
   - FTP password: click the third from the right icon in the top bar (you can see hint “Internal FTP server”), then type new password in the line “Access password”
   - HQbird password: click the link with Installation name right to the HQbird release data (e.g. HQbird 2024 R2 11.3.1006), then press button “Change web-access password”
   - SYSDBA database password: locate widget “Active Server” in the upper left part of the page, click gear wheel icon in the top right corner of the widget panel, press button “Change Firebird Server SYSDBA Password”, a new window for a new password will open, type it here, then close. Do not forget to type new password in the line “SYSDBA password”.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/#creating-an-app-using-the-api)
- [Getting Started After Deploying HQbird Firebird v3.0](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/#getting-started-after-deploying-hqbird-firebird-v30)
- [**Getting Started with HQbird Cloud Firebird**](https://docs.digitalocean.com/products/marketplace/catalog/hqbird-firebird-v3-0/#getting-started-with-hqbird-cloud-firebird)

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