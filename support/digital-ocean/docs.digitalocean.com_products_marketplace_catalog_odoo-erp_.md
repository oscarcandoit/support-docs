---
url: "https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/"
title: "Odoo ERP | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/)
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

- Odoo ERP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Odoo ERP

Generated on 23 Oct 2023
from [the Odoo ERP catalog page](https://marketplace.digitalocean.com/apps/erp-odoo)

Odoo is a comprehensive suite of open-source business applications, originally known as OpenERP, developed using Python and released under the LGPL license. This powerful suite integrates a wide range of applications to meet various business needs seamlessly. From e-commerce and website management to manufacturing, inventory, accounting, and more, Odoo offers a versatile platform with all-encompassing functionality.

Key features and aspects of Odoo include:

- Modularity and Extensibility:

Odoo is highly modular, allowing users to select and integrate specific modules relevant to their business requirements. Additionally, the platform provides a framework for creating custom modules to tailor the software to unique needs.

- Scalability:

It caters to businesses of all sizes, from small enterprises with just a few users to large corporations with hundreds of thousands of users. The scalability of Odoo ensures it can adapt to the growth and changing needs of an organization.

- Integration and Seamless Workflow:

Odoo’s applications seamlessly integrate with each other, enabling a smooth workflow across various departments and business processes. This integration enhances efficiency and productivity within an organization.

- User-Friendly Interface:

The user interface in Odoo is designed to be intuitive and user-friendly, promoting ease of use and faster adoption among employees. This contributes to enhanced productivity and reduced learning curves.

- Community and Support:

Odoo has a thriving community of developers, integrators, and users who actively contribute to the platform’s growth and provide assistance. This robust community ensures a wealth of resources, knowledge sharing, and ongoing support.

- Customization and Flexibility:

Users can customize Odoo to suit their specific business needs, including designing workflows, adding new modules, modifying existing ones, and adapting reports to meet their requirements. This adaptability makes Odoo highly flexible.

- Comprehensive Business Coverage:

Odoo covers a vast array of business functionalities, including CRM (Customer Relationship Management), sales, inventory management, project management, HR (Human Resources), accounting, manufacturing, and more. This all-inclusive approach minimizes the need for multiple standalone software solutions.

- Global Reach:

Odoo is a globally recognized and widely adopted business software, serving millions of users worldwide. Its availability in multiple languages and compliance with various local legal requirements make it suitable for international use.

Odoo empowers organizations to streamline their operations, improve productivity, and make data-driven decisions by providing a unified and adaptable business management solution.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Odoo | [16.0](https://www.odoo.com/blog/odoo-news-5/meet-odoo-16-968) | [LGPL](https://www.odoo.com/documentation/16.0/legal/licenses.html) |
| Postgres | [16.0](https://www.postgresql.org/about/news/postgresql-16-released-2715/) | [MIT](https://www.postgresql.org/about/licence/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-erpodoo)

## Creating an App using the API

In addition to creating a Droplet from the Odoo ERP 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Odoo ERP Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-erpodoo"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Odoo ERP

Once the Odoo One-Click Droplet is created, you can log into it as root. Make sure to substitute the Droplet’s public IPv4 address.

```
$ ssh root@your_droplet_public_ipv4
```

After creating the droplet, Odoo is ready to use. In the welcome message upon connecting to the droplet, you’ll find a link to your Odoo page and the password.

If you wish to utilize custom modules, simply access the droplet console and navigate to /local/add-ons, from there you can clone the repositories you need. Happy exploring!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/#creating-an-app-using-the-api)
- [Getting Started After Deploying Odoo ERP](https://docs.digitalocean.com/products/marketplace/catalog/odoo-erp/#getting-started-after-deploying-odoo-erp)

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