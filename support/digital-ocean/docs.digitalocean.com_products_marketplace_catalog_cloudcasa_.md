---
url: "https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/"
title: "CloudCasa | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/)
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

- CloudCasa

[Give Feedback](https://ideas.digitalocean.com/documentation)

# CloudCasa

Generated on 17 Oct 2025
from [the CloudCasa catalog page](https://marketplace.digitalocean.com/apps/cloudcasa)

**Kubernetes Backup and Recovery with Velero Management (Free Service Plan Available)**

[CloudCasa](https://cloudcasa.io/) is the best Kubernetes backup, recovery, and migration service for multi-cluster and multi-cloud environments. It’s been named a leader and outperformer by industry analysts. With CloudCasa, developers, DevOps, and Platform Engineering teams don’t need to be storage or data protection experts to back up and restore Kubernetes clusters.

CloudCasa if fully compatible with DigitalOcean Kubernetes and DigitalOcean Spaces object storage.

Just 1-Click install the CloudCasa agent and let us do all the hard work of managing and protecting your cluster resources and persistent data from human error, security breaches, and service failures. CloudCasa provides the business continuity and compliance that your business requires. It’s easy for a single cluster, and just as easy for large, complex, multi-cluster, multi-cloud, and hybrid cloud environments.

Start with our Free Service plan, which allows you to back up your cluster resource data and persistent volumes to CloudCasa’s secure cloud storage, or to your own object storage, on clusters with up to 5 worker nodes. No payment information is required.

Upgrade to a Premium plan for additional worker nodes, unlimited retention times, immutable recovery points, API access, and premium support. CloudCasa Pro is priced based on the average number of worker nodes running, and the amount of (optional) CloudCasa storage consumed.

All service plans also include CloudCasa’s Velero management features, which allow Velero users to manage their existing Velero installations across multiple clusters and clouds.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| CloudCasa Agent | 3.4.2 | CloudCasa service agreement |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=cloudcasa&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating CloudCasa using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks cloudcasa
```

## Getting Started After Deploying CloudCasa

After performing a 1-Click install of the CloudCasa agent on your cluster, you will need to perform one more configuration step to complete the process. Log in to the CloudCasa portal at [https://home.cloudcasa.io](https://home.cloudcasa.io/). Go to the _Clusters/Overview_ page, click “Add New Cluster” and fill in the required information. If the cluster has already been added, simply click on the cluster name under the _Clusters/Overview_ page. Either way, you will be presented with the cluster ID.

Next use the following kubectl command to configure the agent, replacing "" with the ID you obtained from the portal.

```
cat <<EOF | kubectl -n cloudcasa-io apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  name: cloudcasa-config
data:
  default: cluster.id=<cluster id>
EOF
```

That’s it!

In the CloudCasa portal, you should soon see the cluster status change from “Registered” to “Active.” You can then go ahead and configure your backups or perform restores or migrations using the simple and intuitive UI.

See the [CloudCasa Quick Guides](https://docs.cloudcasa.io/help/guides.html) for more details.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/#creating-an-app-using-the-api)
- [Getting Started After Deploying CloudCasa](https://docs.digitalocean.com/products/marketplace/catalog/cloudcasa/#getting-started-after-deploying-cloudcasa)

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