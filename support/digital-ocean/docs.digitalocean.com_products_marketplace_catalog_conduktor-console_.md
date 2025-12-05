---
url: "https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/"
title: "Conduktor Console | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/)
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

- Conduktor Console

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Conduktor Console

Generated on 5 Nov 2025
from [the Conduktor Console catalog page](https://marketplace.digitalocean.com/apps/conduktor-console)

## What is Conduktor Console?

The Conduktor Console is a powerful UI for Apache Kafka. The Console equips users with functionality to support many essential tasks when working with Kafka.

**Access and Manage Kafka resource.** Explore topics, reset consumer offsets, manage ACLs, deploy & restart connectors, are just some of the things you can do.

**Self-service.** Solve some of the most recurring problems associated with working with Kafka at scale. Ownership of resources, access request management, topic discvoerability, governance policies, and much more!

**Secure Kafka.** Import your existing groups, configure detailed permissions for your users, set up your external integrations, review audit logs as well as much more.

**Monitor Kafka.** The cluster, topics and consumer groups. Creating alerts to notify you based on Kafka metrics we collect for you.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Conduktor Console | latest | [Community](https://docs.conduktor.io/guide/support) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-conduktorconsole)

## Creating an App using the API

In addition to creating a Droplet from the Conduktor Console 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Conduktor Console Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-conduktorconsole"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Conduktor Console

## Access Conduktor Console

1. The Conduktor onboarding wizard will be available at http://your\_droplet\_public\_ipv4:8080

## Add your existing DigitalOcean Kafka cluster

## Download your DigitalOcean Kafka Cluster CA certificate

1. Browse to [https://cloud.digitalocean.com/databases](https://cloud.digitalocean.com/databases)
2. Select your Kafka Cluster and ‘Download CA certificate’

## Import the certificate to Conduktor Console

1. Log in to Conduktor Console
2. Browse to Settings > Certificates > Add Certificate

## Add your DigitalOcean Kafka Cluster to Conduktor Console

1. Log in to Conduktor Console
2. Browse to Settings > Clusters > Add Cluster
3. Browse to [https://cloud.digitalocean.com/databases](https://cloud.digitalocean.com/databases), select your cluster and use the connection details

In this article...

- [What is Conduktor Console?](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#what-is-conduktor-console)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#creating-an-app-using-the-api)
- [Getting Started After Deploying Conduktor Console](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#getting-started-after-deploying-conduktor-console)
- [Access Conduktor Console](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#access-conduktor-console)
- [Add your existing DigitalOcean Kafka cluster](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#add-your-existing-digitalocean-kafka-cluster)
- [Download your DigitalOcean Kafka Cluster CA certificate](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#download-your-digitalocean-kafka-cluster-ca-certificate)
- [Import the certificate to Conduktor Console](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#import-the-certificate-to-conduktor-console)
- [Add your DigitalOcean Kafka Cluster to Conduktor Console](https://docs.digitalocean.com/products/marketplace/catalog/conduktor-console/#add-your-digitalocean-kafka-cluster-to-conduktor-console)

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