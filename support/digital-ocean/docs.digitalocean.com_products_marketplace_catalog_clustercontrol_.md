---
url: "https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/"
title: "ClusterControl | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/)
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

- ClusterControl

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ClusterControl

Generated on 16 Jul 2025
from [the ClusterControl catalog page](https://marketplace.digitalocean.com/apps/clustercontrol)

A unified console (“single pane of glass”) to manage the full database lifecycle of the most popular open-source databases on-premise or in the cloud.

Provision, monitor and manage highly available database clusters in minutes with dashboards, backups, notifications, reports and automated recovery.

**Supported databases: MySQL Replication, MySQL Galera, MySQL Cluster (NDB), PostgreSQL, Redis, Valkey, Elasticsearch, MS SQL Server 2019, TimescaleDB and MongoDB ReplicaSet and Shards**

## Software Included

| Package | Version | License |
| --- | --- | --- |
| clustercontrol-controller | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-cloud | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-clud | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-ssh | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-notifications | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-mcc | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-proxy | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |
| clustercontrol-kuber | 2.3.3 | [Severalnines AB](https://docs.severalnines.com/docs/clustercontrol/requirements/license) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=severalnines-clustercontrol-20-04)

## Creating an App using the API

In addition to creating a Droplet from the ClusterControl 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ClusterControl Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"severalnines-clustercontrol-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ClusterControl

ClusterControl requires passwordless SSH access to the database nodes. A private and public SSH key is needed after droplet creation and you will need to first `ssh root@your_droplet_public_ipv4` to create and then copy the public SSH key which you will then provide when you create your droplets for the database nodes.

**Note: All droplets must be on the same VPC network and have a private IP address**

The first step is to get access to the public SSH key:

1. SSH into the created droplet `ssh root@your_droplet_public_ipv4`. Follow the instructions in your terminal console at login.
2. Copy the public SSH key from the terminal console
3. Add a new SSH key to your DigitalOcean account by going to Settings->Security
4. Name the new key for example as `clustercontrol`

Now that we have the public SSH key added we can go ahead and launch a few droplets that will be used to host our database nodes.

**Note: All droplets must be on the same VPC network and have a private IP address**

- Create 2-3 new droplets that will be used to host the database nodes
- Make sure the droplets are in the same datacenter and VPC network as the ClusterControl droplet
- Select the previous created `clustercontrol` SSH key. It must be included otherwise ClusterControl will not be able to access the nodes

Finally open the ClusterControl web application and deploy our first database:

1. Use your browser and open `https://your_droplet_public_ipv`
2. Register/create the ClusterControl admin user
3. Open the deployment wizard by clicking on the ‘Deploy’ button on the top header/menu
4. Select ‘deploy’ and then choose which database technology you want to use
5. As the SSH user enter `root`
6. Continue and select the database vendor and version
7. Enter the private IP addresses of the droplets where the database nodes will run
8. Deploy the database cluster

**DigitalOcean Managed Database**

If you select to install a DigitalOcean Managed Database while creating this 1-click app, DigitalOcean handles the creation of the database cluster as well as the Droplet. The Droplet will have a **DATABASE\_URL** environment variable configured including a database connection string, such as:

**postgresql://doadmin:@dbaas-db-11111-do-user-1111111-1.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require**

Your managed database configuration and credentials will be stored in **/root/.digitalocean\_dbaas\_credentials**

_**Please note that there is additional configuration needed to connect your managed database to this droplet after creation.**_

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/#creating-an-app-using-the-api)
- [Getting Started After Deploying ClusterControl](https://docs.digitalocean.com/products/marketplace/catalog/clustercontrol/#getting-started-after-deploying-clustercontrol)

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