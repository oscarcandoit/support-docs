---
url: "https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/"
title: "RethinkDB | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/)
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

- RethinkDB

[Give Feedback](https://ideas.digitalocean.com/documentation)

# RethinkDB

Generated on 29 Aug 2020
from [the RethinkDB catalog page](https://marketplace.digitalocean.com/apps/rethinkdb)

RethinkDB is the first open-source scalable database built for realtime applications. It exposes a new database access model – instead of polling for changes, the developer can tell the database to continuously push updated query results to applications in realtime. RethinkDB allows developers to build scalable realtime apps in a fraction of the time with less effort.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| RethinkDB | [2.4.1](https://github.com/rethinkdb/rethinkdb/releases) | [Apache 2.0](https://github.com/rethinkdb/rethinkdb/blob/next/COPYRIGHT) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=rethinkdb-18-04)

## Creating an App using the API

In addition to creating a Droplet from the RethinkDB 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB RethinkDB Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"rethinkdb-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying RethinkDB

After you create a RethinkDB One-Click Droplet:

- You can view the RethinkDB Admin UI immediately by visiting the Droplet’s IP address on the administration port (8080 by default) in your browser.
- You can log into the Droplet as root using either the password emailed to you or with an SSH key, if you added one during creation.
- You can modify the default instance configuration by editing `/etc/rethinkdb/instances.d/instance.conf`.
- You can check the logs of the server at `/var/log/rethinkdb` or through the Admin UI.
- You can install clients/drivers based on your needs.Although you can start to use your droplet, there are a few setup steps that we recommend you take, since the cluster is running with default settings.

## Setting up users

RethinkDB controls access to clusters through a system based around users, permissions, and scopes. Together, these allow you to specify fine grained control for reading, writing and administrative access down to a per-table level.

A new RethinkDB cluster always has one user named admin; this user always has all permissions at a global scope, and the user cannot be deleted. By default, the admin user has no password. You can change this by updating the admin user document, or by specifying the `--initial-password` command line option on startup.

The web administration UI always connects as if it were the admin user, and skips the authentication process (i.e., the password is not used for this connection). While the web UI cannot be password-protected, you can limit the addresses it will accept connections on using the `--bind-http` command line option.

If your Droplet is publicly available, it is highly recommended to not expose the Admin UI or limit the addresses it will accept.

For more information, please visit our [Permissions and user accounts](https://rethinkdb.com/docs/permissions-and-accounts/) documentation.

## Securing your cluster

The best way to secure a RethinkDB cluster is to run it on a protected network that doesn’t allow access from the outside world. However, this may not always be feasible. For example, cloud deployments often require access from wide area networks.

There are two main methods RethinkDB provides for securing the cluster: TLS encryption for connections, and binding the ports the server uses to specific IP addresses to limit outside connections.

For more information, please visit our instructions [how to secure](https://rethinkdb.com/docs/security/) your cluster.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#creating-an-app-using-the-api)
- [Getting Started After Deploying RethinkDB](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#getting-started-after-deploying-rethinkdb)
- [Setting up users](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#setting-up-users)
- [Securing your cluster](https://docs.digitalocean.com/products/marketplace/catalog/rethinkdb/#securing-your-cluster)

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