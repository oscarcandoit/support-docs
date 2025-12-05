---
url: "https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/"
title: "OpenSearch Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/databases/opensearch/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenSearch Quickstart

Validated on 17 Jun 2024 • Last edited on 18 Dec 2024

OpenSearch is an open-source search and analytics suite which serves as a centralized location to manage logs forwarded from other resources, such as databases and Droplets.

## Create OpenSearch Clusters

1. From the **Create** menu in the top right of the [control panel](https://cloud.digitalocean.com/databases), click **Databases**.
2. Select OpenSearch as the database engine.
3. Choose the cluster configuration and datacenter, and give the cluster a unique name.
Tip
    For the best performance, create your database cluster in the same region as your other DigitalOcean resources.

4. Click **Create a Database Cluster**.

## Change Size or Number of Nodes

1. Select your database cluster from the [**Databases** page](https://cloud.digitalocean.com/databases).
2. Click the **Settings** tab.
3. Click **Edit** in the **Cluster configuration** section.
4. Select a new Droplet plan or quantity of nodes.
5. Click **Save**.

## Add Additional Users or Databases

You can currently only manage OpenSearch users via the API or CLI.

### Add or Delete a Database User Using the CLI

How to Create a Database User Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases user create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/user/create/) for more details:




```shell
doctl databases user create <database-cluster-id> <user-name> [flags]
```



The following example creates a new user with the username `example-user` for a database cluster with the ID `ca9f591d-f38h-5555-a0ef-1c02d1d1e35`:




```shell
doctl databases user create ca9f591d-f38h-5555-a0ef-1c02d1d1e35 example-user
```


How to Delete a Database User Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases user delete`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/user/delete/) for more details:




```shell
doctl databases user delete <database-cluster-id> <user-id> [flags]
```



The following example deletes the user with the username `example-user` for a database cluster with the ID `ca9f591d-f38h-5555-a0ef-1c02d1d1e35`:




```shell
doctl databases user delete ca9f591d-f38h-5555-a0ef-1c02d1d1e35 example-user
```


### Add or Delete a Database User Using the API

How to Create a Database User Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/users`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_add_user).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "app-01"}' \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/users"
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

    addUserRequest := &godo.DatabaseCreateUserRequest{
        Name: "app-01",
    }

    user, _, err := client.Databases.CreateUser(ctx, "88055188-9e54-4f21-ab11-8a918ed79ee2", addUserRequest)

}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

add_user_resp = client.databases.add_user(database_cluster_uuid="ab7bb7a", body={"name": "app-01"})
```

How to Delete a Database User Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/users/{username}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_delete_user).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/users/app-01"
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

    _, err := client.Databases.DeleteUser(ctx, "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30", "app-01")
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

delete_resp = client.databases.delete_user(database_cluster_uuid="aba134a", username="backend_user1")
```

## Delete Clusters

1. Select your database cluster from the [**Databases** page](https://cloud.digitalocean.com/databases).
2. Click the **Settings** tab.
3. Click **Destroy** in the **Destroy this database cluster** section.
4. Enter the name of the database cluster.
5. Click **Destroy**.

In this article...

- [Create OpenSearch Clusters](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#create-opensearch-clusters)
- [Change Size or Number of Nodes](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#change-size-or-number-of-nodes)
- [Add Additional Users or Databases](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#add-additional-users-or-databases)
  - [Add or Delete a Database User Using the CLI](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#add-or-delete-a-database-user-using-the-cli)
  - [Add or Delete a Database User Using the API](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#add-or-delete-a-database-user-using-the-api)
- [Delete Clusters](https://docs.digitalocean.com/products/databases/opensearch/getting-started/quickstart/#delete-clusters)

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