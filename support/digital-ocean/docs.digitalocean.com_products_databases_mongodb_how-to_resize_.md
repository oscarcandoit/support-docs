---
url: "https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/"
title: "How to Resize MongoDB Database Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mongodb.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MongoDB](https://docs.digitalocean.com/products/databases/mongodb/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mongodb/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mongodb/getting-started/quickstart/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
  - [Create MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/)
  - [Connect to MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/)
  - [Import MongoDB Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/)
  - [Secure MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mongodb/how-to/schedule-updates/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/)
  - [Upgrade Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mongodb/how-to/add-standby-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mongodb/how-to/monitor-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mongodb/how-to/set-up-alerts/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/fork-clusters/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mongodb/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/databases/mongodb/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mongodb/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mongodb/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mongodb/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mongodb/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mongodb/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mongodb/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mongodb/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mongodb/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mongodb/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
- Resize Database Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Resize MongoDB Database Clusters

Validated on 28 Jun 2021 • Last edited on 2 Oct 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

You can resize existing MongoDB database clusters at any time to add more CPUs, RAM, and storage. To avoid data loss, you cannot decrease the size of database clusters.

## Resize a Database Cluster Using the CLI

To resize a database cluster using `doctl`, you need to provide a value for the `--size` flag, which specifies the cluster’s new configuration (number of CPUs, amount of RAM, and hard disk space). Use the [`doctl databases options slugs`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/slugs/) command to get a list of available values.

How to Resize a Database Cluster Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases resize`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/resize/) for more details:




```shell
doctl databases resize <database-cluster-id> [flags]
```



The following example resizes a PostgreSQL or MySQL database to have two nodes, 16 vCPUs, 64 GB of memory, and 2048 GiB of storage space:




```shell
doctl databases resize ca9f591d-9999-5555-a0ef-1c02d1d1e352 --num-nodes 2 --size db-s-16vcpu-64gb --storage-size-mib 2048000 --wait true
```


## Resize a Database Cluster Using the API

To resize a database cluster using the API, you need to provide a value for the `size` field, which specifies the cluster’s configuration (number of CPUs, amount of RAM, and hard disk space). Use the [`/v2/databases/options`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_list_options) endpoint to get a list of available values.

How to Resize a Database Cluster Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/resize`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_update_clusterSize).

### cURL

Using cURL:

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
-d '{"size":"db-s-4vcpu-8gb", "num_nodes":3, "storage_size_mib":163840}' \
"https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/resize"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
    "context"
    "github.com/digitalocean/godo"
)

func main() {
    pat := "mytoken"

    client := godo.NewFromToken(pat)
    ctx := context.TODO()

    resizeRequest := &godo.DatabaseResizeRequest{
        SizeSlug: "db-s-4vcpu-8gb",
        NumNodes: 3,
        StorageSizeMib: 163840,
    }
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "size": "db-s-4vcpu-8gb",
  "num_nodes": 3,
  "storage_size_mib": 163840
}

update_resp = client.databases.update_cluster_size(database_cluster_uuid="a7a8bas", body=req)
```

## Resize a Database Cluster Using the Control Panel

To resize a MongoDB database cluster, click the name of the cluster in the control panel to go to its **Overview** page, then click the **Settings** tab.

To switch to a database cluster plan with less storage, [fork the cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/fork-clusters/) and select a smaller database cluster plan for the new cluster.

In the **Cluster configuration** section, click **Edit**. Select your cluster configuration and CPU option.

![Cluster configuration section with additional nodes selected](https://docs.digitalocean.com/screenshots/databases/mongodb-cluster-configuration.2abd7edd599ca7565d98f5f7cfc3a853cd6704abcf55d6ca54ef657a796d23dc.png)

You can also select your storage size.

![](https://docs.digitalocean.com/screenshots/databases/dbaas-choose-storage-size.3f7414c89a29f123c45ba0f1c4350ee6b2264c6d810faa1fba245f8ed3f3a7a0.png)

The **Autoscale storage** section lets you check a box to automatically increase storage when disk capacity reaches a set percentage threshold. The system bills this increase as [additional storage](https://docs.digitalocean.com/products/databases/mongodb/details/pricing/). If you click **Customize**, you can type your own percentage threshold and storage increment.

Autoscaling takes several minutes, depending on the cluster size. It runs without downtime, and you do not need to take any action.

![The storage autoscaling section](https://docs.digitalocean.com/screenshots/databases/storage-autoscaling.6d5c7dd5a6f82be81b30a1a473c89daaf982b4de7e4424a1d9f1e61a8e62b952.png)

Once you have selected your new configuration, size, and autoscaling configuration, click **Save** to provision the new configuration. The provisioning takes several minutes but the total time depends on the size of the cluster.

Your cluster’s state changes from **Active** to **Resizing** until the process is done. You can expect no downtime and do not need to take action.

In this article...

- [Resize a Database Cluster Using the CLI](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/#resize-a-database-cluster-using-the-cli)
- [Resize a Database Cluster Using the API](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/#resize-a-database-cluster-using-the-api)
- [Resize a Database Cluster Using the Control Panel](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/#resize-a-database-cluster-using-the-control-panel)

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