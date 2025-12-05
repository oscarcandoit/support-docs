---
url: "https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/"
title: "How to Manage MongoDB Users and Databases in a Database Cluster | DigitalOcean Documentation"
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
- Manage Users and Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage MongoDB Users and Databases in a Database Cluster

Validated on 28 Jun 2021 • Last edited on 17 Jun 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

MongoDB database clusters come configured with a default database (`admin`), a default administrative user (`doadmin`), and a default read only user (`do-readonly`). These defaults are necessary for cluster replication and administration, so you can’t delete them, but you can add additional users and databases.

By default, every database cluster is publicly accessible. To natively limit access, you can [add trusted sources](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/#firewalls).

Tip
If you connect to the database cluster with preconfigured connection details from the cluster’s **Overview** page, you can edit them to use a different user and password or a different database.

You cannot add users to a cluster using the `mongo` shell. Users must be added to the cluster using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), API, or CLI.

The available user roles [using the API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases/operation/databases_add_user) are `Admin`, `Read/Write`, and `Read-Only`.

## Create or Delete a Database User Using the CLI

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


## Create, Update, or Delete a Database User Using the API

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

How to Update a Database User Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/users/{username}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_update_user).

### cURL

Using cURL:

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"settings": {"acl": [{"topic": "events", "permission": "produce"}]}}' \
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
    userName := "test-user"

    updateUserRequest := &godo.DatabaseUpdateUserRequest{
      Settings: {
        ACL: [\
          {\
            Permssion: "consume",\
            Topic: "events",\
          }\
          {\
            Permission: "produce",\
            Topic: "metrics",\
          }\
        ]
      }
    }

    user, _, err := client.Databases.UpdateUser(ctx, "88055188-9e54-4f21-ab11-8a918ed79ee2", userName, updateUserRequest)
}
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

## Add or Delete a Database User Using the Control Panel

To add or delete users or databases to a database cluster, click the name of the database to go to its **Overview** page, then select the **Users & Databases** tab.

![Screenshot of Users and Databases screen](https://docs.digitalocean.com/screenshots/databases/mongodb-users-and-databases.ce76bfb0ed62d367cbe9eda16f52e926895b6646916b4eda4d89a02fcf1ca41e.png)

Create new users in the **Users** section by entering a name in the **Add new user** field and clicking **Save**. The new user receives a password that you can view temporarily. Copy the password and store it safely.

New users receive the permissions of the `doadmin` user by default. You can’t change these permissions at this time. However, you can create a read-write or read-only user using the DigitalOcean API. Currently, you cannot create read-write or read-only users via the [DigitalOcean Control Panel](https://cloud.digitalocean.com/).

You can also delete a user here by opening the user’s **More** menu, clicking **Delete**, and then confirming the deletion. Similarly, to reset a user’s password, open the user’s **More** menu and select **Reset password**. If you have any services that depend on that user’s credentials, such as log forwarding, resetting the password may break that service.

Create a new database in the **Databases** section by entering a name in the **Add new database** field and clicking **Save**. You can also delete a database here by opening its **More** menu, clicking **Delete**, and then confirming the deletion.

In this article...

- [Create or Delete a Database User Using the CLI](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/#create-or-delete-a-database-user-using-the-cli)
- [Create, Update, or Delete a Database User Using the API](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/#create-update-or-delete-a-database-user-using-the-api)
- [Add or Delete a Database User Using the Control Panel](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/#add-or-delete-a-database-user-using-the-control-panel)

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