---
url: "https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/"
title: "Pachyderm | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/)
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

- Pachyderm

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Pachyderm

Generated on 24 Jan 2023
from [the Pachyderm catalog page](https://marketplace.digitalocean.com/apps/pachyderm)

### Pachyderm is for data science teams who want to operationalize the data tasks in their ML lifecycle to iterate on data more quickly and reliably.

Pachyderm is the leader in data versioning and pipelines for MLOps. We provide the data foundation that allows data science teams to automate and scale their machine learning lifecycle while guaranteeing reproducibility. Unlike other data versioning and pipeline products Pachyderm provides data-driven automation, petabyte scalability and end-to-end reproducibility.

### Primary Benefits

- **Data-Driven Automation** — Automate and unify your MLOps tool chain with data driven pipelines and automated data versioning for increased productivity and reduced risk
- **Petabyte Scalability** — Rapidly process the largest unstructured and structured data sets with automatic parallel and incremental processing that requires no code changes
- **End-to-End Reproducibility** — Iterate quickly while still meeting audit and data governance requirements through end-to-end reproducibility and immutable data lineage

### Key Features

- **Automated Data Versioning** — Pachyderm’s Data Versioning gives teams an automated and performant way to keep track of all data changes- Utilizes a Git-like structure that enables effective team collaboration through commits, branches and rollbacks
  - Powerful content-based deduplication reduces the cost of storing and accessing large data sets
  - File-based versioning provides a complete audit trail for all data and artifacts across pipeline stages including intermediate results
  - Stored as native objects (not metadata pointers) so that versioning is automated and guaranteed
- **Data-Driven Pipelines** — Pachyderm’s Containerized Pipelines speed data processing while lowering compute costs- Kubernetes native approach supports any library or language
  - Autoscale with parallel processing of data without writing additional code
  - Automated pipelines execute whenever new data is committed
  - Incremental processing saves compute by only processing differences and automatically skipping duplicate data
  - Pipeline steps have JSON/YAML defined inputs and outputs that ease debugging
- **Immutable Data Lineage** — Pachyderm’s Data Lineage provides an immutable record for all activities and assets in the ML lifecycle- Track every version of your code, models, and data
  - Maintain reproducibility of data and code for compliance
  - Manage relationships between historical data states
  - Pachyderm’s Global IDs make it easy for teams to track any result all the way back to its raw input, including all analysis, parameters, code, and intermediate results.

**Note:**

Pachyderm recommends using 4 Nodes of the $20/month plan (4GB RAM / 2vCPU)

_The minimum requirements is 2 Nodes of the $10/month plan (2GB RAM / 1vCPU)_

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Pachyderm](https://github.com/pachyderm/pachyderm) | 2.4.4 | [Community License](https://github.com/pachyderm/pachyderm/blob/master/LICENSE) |
| [etcd](https://github.com/etcd-io/etcd) | v3.5.5 | Apache License 2.0 |
| [pachyderm/postgresql](https://github.com/pachyderm/postgresql) | 13.3.0 | Apache License 2.0 |
| [pachyderm/pgbouncer](https://github.com/pachyderm/pg-bouncer) | 1.16.2 | Apache License 2.0 |
| [envoyproxy/envoy](https://github.com/envoyproxy/envoy) | v1.22.0 | Apache License 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=pachyderm&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Pachyderm using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks pachyderm
```

## Getting Started After Deploying Pachyderm

### Prerequisites

_Please install the following:_

- [`pachctl`](https://docs.pachyderm.com/latest/getting_started/local_installation/#install-pachctl), is the command-line tool that lets you interact with Pachyderm. It is a client-side tool and it will need to be installed on your local machine.
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/#kubectl), the Kubernetes command-line tool allows you to run commands against Kubernetes clusters.
- [`doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), DigitalOcean’s Client API tool supports most functionality found in the control panel.

_If you wish to customize your pachyderm configuration you will need to install [Helm](https://helm.sh/docs/intro/install/#helm). You can find the full list of Helm Chart values [here](https://docs.pachyderm.com/latest/reference/helm_values/). To upgrade pachyderm with your new values follow the instructions [here](https://docs.pachyderm.com/latest/deploy-manage/deploy/helm_install/#upgrade-pachyderms-helm-chart)._

### This installation is **NOT** designed to be a production environment. It is meant to help you learn and experiment quickly with Pachyderm.

* * *

To connect `kubectl` to your Kubernetes cluster:

- Follow the instructions found in step 2 (Connecting to Kubernetes) of the Getting Started section for your Kubernetes cluster.

OR

- Find your Cluster ID and run the following command:


`doctl kubernetes cluster kubeconfig save &amp;amp;lt;Insert Cluster ID Here&amp;amp;gt;`

Pachyderm will already be installed in your cluster in the `pachyderm` namespace.

To confirm run:

`kubectl get pods -n pachyderm`

Your output should look like this:

```
NAME                                         READY   STATUS    RESTARTS   AGE
console-d56d7b7f6-j5lvc                      1/1     Running   0          10m
etcd-0                                       1/1     Running   0          10m
pachd-76f7d5455-jk2lj                        1/1     Running   0          10m
pachyderm-kube-event-tail-54f6759474-tnf8q   1/1     Running   0          10m
pachyderm-loki-0                             1/1     Running   0          10m
pachyderm-promtail-7drcc                     1/1     Running   0          10m
pachyderm-promtail-k846r                     1/1     Running   0          10m
pachyderm-promtail-ltdx4                     1/1     Running   0          10m
pachyderm-proxy-fff6dc868-qcxk4              1/1     Running   0          10m
pg-bouncer-57869fc46c-pgqz5                  1/1     Running   0          10m
postgres-0                                   1/1     Running   0          10m
```

The last step is to connect `pachctl` to your cluster. To do this, you will need to run three commands:

`kubectl get service pachyderm-proxy -n pachyderm`

Once an IP address is listed under `EXTERNAL-IP`, run the following command using that IP:

`echo '{"pachd_address": "grpc://&lt;IP ADDRESS HERE&gt;:80"}' |pachctl config set context digitalocean`

To verify your connection run: `pachctl version`

You should see the following output:

```
COMPONENT           VERSION
pachctl             2.4.4
pachd               2.4.4
```

You can also access the web interface at `http://&lt;IP ADDRESS HERE&gt;`

* * *

## You are now ready to start the [Beginner Tutorial](https://docs.pachyderm.com/latest/getting_started/beginner_tutorial/)!

In this article...

- [Pachyderm is for data science teams who want to operationalize the data tasks in their ML lifecycle to iterate on data more quickly and reliably.](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#pachyderm-is-for-data-science-teams-who-want-to-operationalize-the-data-tasks-in-their-ml-lifecycle-to-iterate-on-data-more-quickly-and-reliably)
- [Primary Benefits](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#primary-benefits)
- [Key Features](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#key-features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#creating-an-app-using-the-api)
- [Getting Started After Deploying Pachyderm](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#getting-started-after-deploying-pachyderm)
- [Prerequisites](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#prerequisites)
- [This installation is **NOT** designed to be a production environment. It is meant to help you learn and experiment quickly with Pachyderm.](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#this-installation-is-not-designed-to-be-a-production-environment-it-is-meant-to-help-you-learn-and-experiment-quickly-with-pachyderm)
- [You are now ready to start the](https://docs.digitalocean.com/products/marketplace/catalog/pachyderm/#you-are-now-ready-to-start-the-beginner-tutorial) [Beginner Tutorial](https://docs.pachyderm.com/latest/getting_started/beginner_tutorial/)!

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