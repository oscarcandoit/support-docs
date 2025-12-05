---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/"
title: "How to Add Read-Only Nodes to MySQL Database Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mysql.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MySQL](https://docs.digitalocean.com/products/databases/mysql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mysql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mysql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
  - [Create MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/create/)
  - [Connect to MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/)
  - [Secure MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/)
  - [Migrate MySQL Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mysql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/)
  - [Monitor MySQL Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mysql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/destroy/)
  - [Set Global SQL Mode](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/)
  - [Create Primary Keys](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/)
- [Reference](https://docs.digitalocean.com/products/databases/mysql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mysql/concepts/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/mysql/concepts/migration-strategies/)
  - [Sort Buffer Size](https://docs.digitalocean.com/products/databases/mysql/concepts/sort-buffer-size/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mysql/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mysql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mysql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mysql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mysql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mysql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mysql/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mysql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mysql/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
- Add Read-Only Nodes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add Read-Only Nodes to MySQL Database Clusters

Validated on 1 Mar 2021 • Last edited on 17 Jun 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

[Read-only nodes](https://docs.digitalocean.com/products/databases/#cluster-configuration) are replicas of a cluster’s primary node located in additional geographical regions. Using read-only nodes reduces latency for users connecting from those regions.

Communication between primary and read-only nodes is SSL-encrypted and sent over the public network.

Note
Read-only nodes differ from [standby nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/), which are exact copies of the primary node that are automatically moved into place in the event of a primary node failure.

## Create a Read-Only Node Using the CLI

Note
To create a read-only node using `doctl`, you need to provide values `--region` and `--size` flags, which specify the node’s datacenter and its configuration (number of CPUs, amount of RAM, and hard disk space). Use the [`doctl databases options regions`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/regions/) and [`doctl databases options slugs`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/slugs/) commands, respectively, to get a list of available values.
How to Create a Read-Only Node Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases replica create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/create/) for more details:




```shell
doctl databases replica create <database-cluster-id> <replica-name> [flags]
```



The following example creates a read-only replica named `example-replica` for a database cluster with the ID `ca9f591d-f38h-5555-a0ef-1c02d1d1e35`:




```shell
doctl databases replica create ca9f591d-f38h-5555-a0ef-1c02d1d1e35 example-replica --size db-s-1vcpu-1gb
```


## Create a Read-Only Node Using the API

Note
To create a read-only node using the API, you need to provide values for the `region` and `size` fields, which specify the new node’s datacenter and its configuration (number of CPUs, amount of RAM, and hard disk space). Use the [`/v2/databases/options`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_list_options) endpoint to get a list of available values.
How to Create a Read-Only Node Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/replicas`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_create_replica).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"read-nyc3-01", "region":"nyc3", "size": "db-s-2vcpu-4gb", "storage_size_mib": 61440}' \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/replicas"
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

    replicaRequest := &godo.DatabaseCreateReplicaRequest{

        Name:   "read-nyc3-01",
        Region: "nyc3",
        Size:   "db-s-2vcpu-4gb",
        StorageSizeMiB : 61440,
    }

    replica, _, err := client.Databases.CreateReplica(ctx, "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30", replicaRequest)
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

create_req = {
  "name": "read-nyc3-01",
  "region": "nyc3",
  "size": "db-s-2vcpu-4gb",
  "storage_size_mib": 61440,
}

create_resp = client.databases.create_replica(database_cluster_uuid="9cc10173", body=create_req)
```

## Create a Read-Only using the Control Panel

To add a read-only node, click the name of the cluster to go to its **Overview**. At the bottom of the page, click the **Add a read-only node** link to go to the read-only node creation page.

![The read only nodes section of the overview page](https://docs.digitalocean.com/screenshots/databases/read-only-nodes.a000dedadde28e8a72029bed94174164449e3ab73469265900f474e4b6400b54.png)

Select the size, which must be equal to or larger than the primary node, then select the datacenter and name the node. When you’re done, click **Create a read-only node** to provision the node.

Like primary nodes, you can [limit access to a read-only nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/#firewalls) to trusted sources and access read-only nodes using a command-line client and the connection string in the node’s **Overview** page.

## Promote a Read-Only Node to Become a Primary Node

You can promote an existing read-only node to become the primary node of a new database cluster, essentially creating a fork or replica of its former database cluster. However, these two clusters are independent and do not remain in sync, so any changes you make to one are not copied to the other.

You can also promote a read-only node to create a new database cluster in a different datacenter region. This option can help you maintain uptime if a cluster is experiencing issues in another region.

How to Promote a Read-Only Node Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases replica promote`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/promote/) for more details:




```shell
doctl databases replica promote <database-cluster-id> <replica-name> [flags]
```



The following example promotes a read-only replica named `example-replica` for a database cluster with the ID `ca9f591d-f38h-5555-a0ef-1c02d1d1e35`:




```shell
doctl databases replica promote ca9f591d-f38h-5555-a0ef-1c02d1d1e35 example-replica
```


How to Promote a Read-Only Node Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_promote_replica).

### cURL

Using cURL:

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/replicas/read-nyc3-01/promote"
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

    _, err := client.Databases.PromoteReplicaToPrimary(ctx, "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30", "read-nyc3-01")
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

resp = client.databases.promote_replica(database_cluster_uuid="a7a8bas", replica_name="ba8ab22")
```

In this article...

- [Create a Read-Only Node Using the CLI](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/#create-a-read-only-node-using-the-cli)
- [Create a Read-Only Node Using the API](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/#create-a-read-only-node-using-the-api)
- [Create a Read-Only using the Control Panel](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/#create-a-read-only-using-the-control-panel)
- [Promote a Read-Only Node to Become a Primary Node](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/#promote-a-read-only-node-to-become-a-primary-node)

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