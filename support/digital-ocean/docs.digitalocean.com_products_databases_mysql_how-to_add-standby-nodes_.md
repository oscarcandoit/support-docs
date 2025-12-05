---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/"
title: "How to Add Standby Nodes to MySQL Database Clusters | DigitalOcean Documentation"
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
- Add Standby Nodes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add Standby Nodes to MySQL Database Clusters

Validated on 1 Mar 2021 • Last edited on 17 Jun 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

In a database cluster, standby nodes maintain a copy of the primary node. If the primary node fails, a standby node is automatically promoted to replace it. Additionally, standby nodes can direct routing for read traffic. MySQL clusters can have up to two standby nodes.

Note
Standby nodes differ from [read-only nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/), which provide geographically distinct horizontal read scaling.

You can add standby nodes during cluster creation in the [cluster configuration section](https://docs.digitalocean.com/products/databases/mysql/how-to/create/#choose-a-cluster-configuration) of the create page.

You can also add standby nodes to an existing database cluster. From the **Databases** page, click the name of the cluster to go to its **Overview** page, then click the **Settings** tab.

![Screenshot of cluster settings page](https://docs.digitalocean.com/screenshots/databases/mysql-cluster-settings.488ffff00c3371397115f53a0ac7c13f25254636a58e80d5adf3efb0f9fdb999.png)

On the **Settings** page, in the **Cluster configuration** section, click **Edit**. Open the **Standby Nodes** drop-down and choose the number of standby nodes.

Note
Due to the memory requirements of replication, standby nodes are only supported for plans with 2GB of RAM or more.
![Screenshot of Add Standby Nodes](https://docs.digitalocean.com/screenshots/databases/cluster-add-standby.d95b2161700329cac18221112ebe3be363fc9bc78f2e79078f4e919b94b6ce4e.png)

When you’re done, click **Save** to immediately provision the standby nodes. The time to complete varies depending on the size of the primary node and its data, but we recommend allowing at least 5 minutes.

## Use Standby Nodes for Reads

You can also use standby nodes for reads, to improve your cluster’s performance. However, doing so can result in the standby nodes being too overwhelmed to properly replace the primary node in case of failure.

To use standby nodes for reads, you can find the standby nodes’ hostname via the API.

How to Retrieve an Existing Database Cluster Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a GET request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_get_cluster).

### cURL

Using cURL:

```shell
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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

    cluster, _, err := client.Databases.Get(ctx, "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30")
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

get_resp = client.databases.get_cluster(database_cluster_uuid="a7a89a")
```

And you can find the standby nodes’ IP addresses by querying DNS. To connect to the standby node, add the `replica-` prefix to the primary cluster connection URL. For example:

```
dig +short A replica-db-redis-tutorial-redis-watch-local-do-user-0.c.db.ondigitalocean.com
123.45.67.89
123.456.78.901
```

Traffic you send to multiple standby nodes is not load balanced. In order to load balance this traffic, you can either use a client that does it natively or look up the IPs with a tool such as `dig`.

In this article...

- [Use Standby Nodes for Reads](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/#use-standby-nodes-for-reads)

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