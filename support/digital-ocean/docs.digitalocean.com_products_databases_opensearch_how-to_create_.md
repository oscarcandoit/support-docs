---
url: "https://docs.digitalocean.com/products/databases/opensearch/how-to/create/"
title: "How to Create OpenSearch Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/opensearch.2629f480d99bedd31ae31e9fd8269c327373bb1a8ecc38a68f458985e2393b42.svg)OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/)
- [Getting Started](https://docs.digitalocean.com/products/databases/opensearch/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/opensearch/how-to/)
  - [Create OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/opensearch/how-to/forward-logs/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/)
  - [Secure OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/opensearch/how-to/schedule-updates/)
  - [Manage Users](https://docs.digitalocean.com/products/databases/opensearch/how-to/manage-users/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/opensearch/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/opensearch/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/fork-clusters/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/opensearch/how-to/restore-from-backups/)
  - [Destroy Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/opensearch/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/opensearch/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/opensearch/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/opensearch/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/opensearch/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/opensearch/details/)
  - [Features](https://docs.digitalocean.com/products/databases/opensearch/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/opensearch/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/opensearch/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/opensearch/details/notifications/)
  - [Supported Plugins](https://docs.digitalocean.com/products/databases/opensearch/details/supported-plugins/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [How-Tos](https://docs.digitalocean.com/products/databases/opensearch/how-to/)
- Create OpenSearch Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create OpenSearch Clusters

Validated on 17 Jun 2024 • Last edited on 2 Oct 2025

OpenSearch is an open-source search and analytics suite which serves as a centralized location to manage logs forwarded from other resources, such as databases and Droplets.

## Create a Database Cluster Using the CLI

To create a database using `doctl`, you need to provide values for the `--engine`, `--region`, and `--size` flags. Use the [`doctl databases options engines`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/engines/), [`doctl databases options regions`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/regions/), and [`doctl databases options slugs`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/slugs/) commands, respectively, to get a list of available values.

How to Create a Database Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/create/) for more details:




```shell
doctl databases create <name> [flags]
```



The following example creates a database cluster named `example-database` in the `nyc1` region with a single 1 GB node:




```shell
doctl databases create example-database --region nyc1 --size db-s-1vcpu-1gb --num-nodes 1
```


## Create a Database Cluster Using the API

To create a database using the API, you need to provide values for the `engine`, `region`, and `size` fields, which specify the database’s engine, its datacenter, and its configuration (number of CPUs, amount of RAM, and hard disk space). Use the [`/v2/databases/options`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_list_options) endpoint to get a list of available values.

How to Create a Database Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/databases`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_create_cluster).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "backend", "engine": "pg", "version": "14", "region": "nyc3", "size": "db-s-2vcpu-4gb", "num_nodes": 2, "storage_size_mib": 61440, "tags": ["production"]}' \
  "https://api.digitalocean.com/v2/databases"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
    "context"
    "os"

    "github.com/digitalocean/godo"
)

func main() {
    token := os.Getenv("DIGITALOCEAN_TOKEN")

    client := godo.NewFromToken(token)
    ctx := context.TODO()

    createRequest := &godo.DatabaseCreateRequest{
        Name:       "backend",
        EngineSlug: "pg",
        Version:    "14",
        Region:     "nyc3",
        SizeSlug:   "db-s-2vcpu-4gb",
        NumNodes:   2,
        StorageSizeMiB : 61440,
    }

    cluster, _, err := client.Databases.Create(ctx, createRequest)
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

create_req = {
  "name": "backend",
  "engine": "pg",
  "version": "14",
  "region": "nyc3",
  "size": "db-s-2vcpu-4gb",
  "num_nodes": 2,
  "storage_size_mib": 61440,
  "tags": [\
    "production"\
  ]
}

create_resp = client.databases.create_cluster(body=create_req)
```

## Create a Database Cluster Using the Control Panel

You can create an OpenSearch database cluster from the **Create** menu by selecting **Databases**. This takes you to the **Create a Database** page.

![The Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

### Choose a datacenter

In the **Choose a datacenter** section, select the datacenter for your database cluster.

![The datacenter selection portion of the databases create page](https://docs.digitalocean.com/screenshots/databases/choose-a-datacenter.8a85a318bf0c63c34a708273e30550fe7f8424a031dac254ae00dadd5d93d7be.png)

This page lists the datacenters in which you currently have the most resources. The number of resources you have in each datacenter is listed to the right as **X resources**. Hover over this text to see the specific resources you have in that datacenter.

For the best performance, create your database in the same datacenter as your other DigitalOcean resources.

Note
Each region has one or more datacenters, each with a different [VPC](https://docs.digitalocean.com/products/networking/vpc/) network. By including resources in the same datacenter, they all gain access to the same private networking interface, which reduces lag and keeps traffic between them from being routed over the public internet.

### Choose a database engine

In the **Choose a database engine** section, choose OpenSearch.

![The database engine selection portion of the databases create page](https://docs.digitalocean.com/screenshots/databases/opensearch-database-engine.5eff06d2c0fa3f4bb2840b844dd0e53f500f3ffaaae076a51ea7c3317caed470.png)

We currently support OpenSearch v1 and v2. You cannot change the OpenSearch version after creating a cluster.

### Choose a cluster configuration

In the **Choose a cluster configuration** section, select a Droplet plan and quantity of nodes for the cluster.

For Basic plans, you can choose 1 or 3 nodes. For General Purpose and Memory-Optimized plans, you can choose 1, 3, 6, 9, or 15 nodes.

![The Choose a cluster configuration section of the Create a database page displaying the node size and monthly cost](https://docs.digitalocean.com/screenshots/databases/opensearch-cluster-configuration.36329c12d24babee122b0233ceedb9c428a0a387792500bee944432b9eae2903.png)

After creation, you can [increase the number or size of nodes](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/) at any time. However, you cannot downsize nodes to have less storage than the current storage the cluster is currently using.

### Choose a storage size

In the **Choose a storage size** section, you can specify the storage size by clicking the up or down arrow or by entering your desired storage amount, in increments of 10 GB, up to the maximum listed in the storage range. Additional storage you add to the cluster costs $0.21 per GiB per month.

![](https://docs.digitalocean.com/screenshots/databases/opensearch-choose-storage-size.2729c8b71ba565bf715bf9f49149f00d6eaa7827f6c6814087023cd4204b7b08.png)

You can [increase or decrease your storage](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/) at any time.

### Enable storage autoscaling

The **Autoscale storage** section lets you check a box to automatically increase storage when disk capacity reaches a set percentage threshold. The system bills this increase as [additional storage](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/). If you click **Customize**, you can type your own percentage threshold and storage increment.

Autoscaling takes several minutes, depending on the cluster size. It runs without downtime, and you do not need to take any action.

![The storage autoscaling section](https://docs.digitalocean.com/screenshots/databases/storage-autoscaling.6d5c7dd5a6f82be81b30a1a473c89daaf982b4de7e4424a1d9f1e61a8e62b952.png)

### Finalize and create

In this section, enter the following information:

- **Choose a name**: Use the automatically-generated name for the database or choose a custom name. Names must be unique, be between 3 and 63 characters long, and only contain alphanumeric characters, dashes, and periods.

- **Select a project**: Use the default project or choose another one.

- **Tags**: Add a tag in the text box and press enter. Tags can only contain letters, numbers, colons, dashes, and underscores.


![The Finalize and Create section of the Create a database page](https://docs.digitalocean.com/screenshots/databases/finalize-and-create.f9c53777d46a3fd47e903b632bcb639e8d26b1bfacda7058c55eb322caeeb5c0.png)

After creation, you can [edit the database’s tags](https://docs.digitalocean.com/products/databases/opensearch/how-to/tag/) or move it to another project; however, you can’t rename it.

Click the **Create a Database Cluster** button.

Clusters typically take five minutes or more to provision, but you can complete important configuration tasks such as [restricting inbound connections](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/#firewalls) while the cluster is provisioning.

In this article...

- [Create a Database Cluster Using the CLI](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#create-a-database-cluster-using-the-cli)
- [Create a Database Cluster Using the API](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#create-a-database-cluster-using-the-api)
- [Create a Database Cluster Using the Control Panel](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#create-a-database-cluster-using-the-control-panel)
  - [Choose a datacenter](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#choose-a-datacenter)
  - [Choose a database engine](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#choose-a-database-engine)
  - [Choose a cluster configuration](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#choose-a-cluster-configuration)
  - [Choose a storage size](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#choose-a-storage-size)
  - [Enable storage autoscaling](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#enable-storage-autoscaling)
  - [Finalize and create](https://docs.digitalocean.com/products/databases/opensearch/how-to/create/#finalize-and-create)

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