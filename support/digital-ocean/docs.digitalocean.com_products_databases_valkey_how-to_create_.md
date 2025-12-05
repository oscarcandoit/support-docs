---
url: "https://docs.digitalocean.com/products/databases/valkey/how-to/create/"
title: "How to Create Valkey Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/valkey.f170106c44632502ecb41bfb74b6d22d99f94ad223afccd11be669fedac30b18.svg)Valkey](https://docs.digitalocean.com/products/databases/valkey/)
  - [Getting Started](https://docs.digitalocean.com/products/databases/valkey/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/databases/valkey/getting-started/quickstart/)
    - [Convert Caching to Valkey](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/)
  - [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
    - [Connect to Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/connect/)
    - [Secure Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/secure/)
    - [Migrate Valkey Databases](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/)
    - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/valkey/how-to/schedule-updates/)
    - [Choose Eviction Policies](https://docs.digitalocean.com/products/databases/valkey/how-to/choose-eviction-policies/)
    - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/tag/)
    - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-clusters/)
    - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/valkey/how-to/add-standby-nodes/)
    - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/)
    - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/relocate/)
    - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/)
    - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/destroy/)
    - [Monitor Valkey Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-databases/)
    - [Forward Logs](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/)
    - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/reconfigure/)
    - [Create Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/create/)
  - [Reference](https://docs.digitalocean.com/products/databases/valkey/reference/)
    - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
    - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
  - [Concepts](https://docs.digitalocean.com/products/databases/valkey/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/databases/valkey/concepts/best-practices/)
    - [Migration Strategies](https://docs.digitalocean.com/products/databases/valkey/concepts/migration-strategies/)
    - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/valkey/concepts/responsibility-model/)
  - [Details](https://docs.digitalocean.com/products/databases/valkey/details/)
    - [Features](https://docs.digitalocean.com/products/databases/valkey/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/databases/valkey/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/databases/valkey/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/)
    - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [Valkey](https://docs.digitalocean.com/products/databases/valkey/)
- [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
- Create Valkey Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Valkey Clusters

Validated on 24 Apr 2025 • Last edited on 17 Jun 2025

Valkey is a high-performance, open-source database that stores key-value data in memory, and is designed for caching, message queues, and primary database use. Fully compatible with Redis, Valkey serves as a drop-in replacement.

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

You can create a Valkey database cluster at any time from the **Create** menu by selecting **Databases**. This takes you to the **Create a Database** page.

![The Create menu](https://docs.digitalocean.com/screenshots/create.88f76a2e0fbab47d46467cfdb31a9a9396d289032523120cfbdf1b695f0aac34.png)

In the create menu, click **Databases** to open the database cluster creation page. This is where you choose your database cluster’s configuration, like the number and size of nodes and the datacenter region.

### Choose a datacenter

In the **Choose a datacenter** section, select the datacenter for your database cluster.

![The datacenter selection portion of the databases create page](https://docs.digitalocean.com/screenshots/databases/choose-a-datacenter.8a85a318bf0c63c34a708273e30550fe7f8424a031dac254ae00dadd5d93d7be.png)

This page lists the datacenters in which you currently have the most resources. The number of resources you have in each datacenter is listed to the right as **X resources**. Hover over this text to see the specific resources you have in that datacenter.

For the best performance, create your database in the same datacenter as your other DigitalOcean resources. After creation, you can [relocate your cluster to another datacenter](https://docs.digitalocean.com/products/databases/valkey/how-to/relocate/).

Note
Each region has one or more datacenters, each with a different [VPC](https://docs.digitalocean.com/products/networking/vpc/) network. By including resources in the same datacenter, they all gain access to the same private networking interface, which reduces lag and keeps traffic between them from being routed over the public internet.

### Choose a database engine

In the **Choose a database engine** section, choose Valkey.

![The database engine selection portion of the databases create page](https://docs.digitalocean.com/screenshots/databases/valkey-database-engine.0808501cf57002027eceeaecfee1b3f910581a894894796aed162bdd454ccce9.png)

We currently support Valkey 8. You cannot change the Valkey version after creating a cluster.

### Choose a cluster configuration

In the **Choose a cluster configuration** section, select a Droplet plan and quantity of nodes for the cluster. Each option lists its combined monthly cost, equivalent hourly cost, and node specifications. For more options, click **Additional product plans**.

![The Choose a cluster configuration section of the Create a database page displaying the node size, standby nodes, and monthly cost](https://docs.digitalocean.com/screenshots/databases/valkey-cluster-configuration.c5894839e5f5b0918067f6b88b769b58a9e292e0708400e70016b8e9aee530fc.png)

If you select any node plan _besides_ the smallest (`1 vCPU / 1 GiB RAM / 10 GiB SSD`), you can also add one or two standby nodes to your cluster. Standby nodes ensure that your data stays available by giving your cluster [high availability and failover](https://docs.digitalocean.com/products/databases/#high-availability).

Valkey has memory overhead requirements, so the amount of available, usable memory in Valkey nodes is less than their total amount of memory. For a chart of usable memory per plan, see [Valkey memory usage](https://docs.digitalocean.com/products/databases/redis/details/memory-usage/).

You can [increase the number or size of database nodes](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/) at any time. However, you cannot downsize nodes to have less storage than the current storage the cluster is currently using.

Note

On Valkey, each CPU in your cluster can handle up to 200 new connections per second. Any additional connection attempts within the second fail and users must try again.

To work around this limitation, we recommend using connection pooling, which caches database connections and improves performance. DigitalOcean Valkey clusters do not support connection pooling natively; however, most clients used to connect to Valkey do. Alternatively, you can [resize your database clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/) to add more CPUs.

### Finalize and Create

In the last section, **Finalize and Create**, choose the name for the cluster, the project to add it to, and any tags you want to use.

![The Finalize and Create section of the Create a database page](https://docs.digitalocean.com/screenshots/databases/finalize-and-create.f9c53777d46a3fd47e903b632bcb639e8d26b1bfacda7058c55eb322caeeb5c0.png)

There are three sub-headers in this section:

- **Choose a name**: You can leave the automatically-generated name for the database or choose a custom name. Names must be unique, be between 3 and 63 characters long, and only contain alphanumeric characters, dashes, and periods.

- **Select a project**: You can leave the default project or choose another one.

- **Tags**: You can add a tag by typing it into the text box and pressing enter. Tags can only contain letters, numbers, colons, dashes, and underscores.


After creation, you can always [edit the database’s tags](https://docs.digitalocean.com/products/databases/valkey/how-to/tag/) or move it to another project; however, its name cannot be changed.

When you’re ready, click the **Create a Database Cluster** button.

Clusters typically take five minutes or more to provision, but you can complete important configuration tasks such as [restricting inbound connections](https://docs.digitalocean.com/products/databases/valkey/how-to/secure/#firewalls) while you wait.

In this article...

- [Create a Database Cluster Using the CLI](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#create-a-database-cluster-using-the-cli)
- [Create a Database Cluster Using the API](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#create-a-database-cluster-using-the-api)
- [Create a Database Cluster Using the Control Panel](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#create-a-database-cluster-using-the-control-panel)
  - [Choose a datacenter](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#choose-a-datacenter)
  - [Choose a database engine](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#choose-a-database-engine)
  - [Choose a cluster configuration](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#choose-a-cluster-configuration)
  - [Finalize and Create](https://docs.digitalocean.com/products/databases/valkey/how-to/create/#finalize-and-create)

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