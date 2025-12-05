---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/"
title: "How to Manage MySQL Users and Databases in a Database Cluster | DigitalOcean Documentation"
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
- Manage Users and Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage MySQL Users and Databases in a Database Cluster

Validated on 1 Mar 2021 • Last edited on 17 Jun 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

MySQL database clusters come configured with a default database (`defaultdb`) and a default administrative user (`doadmin`). These defaults are necessary for cluster replication and administration, so you can’t delete them, but you can add additional users and databases.

By default, every database cluster is publicly accessible. To limit access, you can [add trusted sources](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/#firewalls) or [manage user permissions](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/).

Tip
If you connect to the database cluster with preconfigured connection details from the cluster’s **Overview** page, you can edit them to use a different user and password or a different database.

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

![Screenshot of Users and Databases screen](https://docs.digitalocean.com/screenshots/databases/mysql-users-and-databases.fdff93cb1da64baaa57417855f5c134a3ef8eca3dde6ae16f7680837e89bcf51.png)

Create a new database in the **Databases** section by entering a name in the **Add new database** field and clicking **Save**. You can also delete a database here by opening its **More** menu, clicking **Delete**, and then confirming the deletion.

Create new users in the **Users** section by entering a name in the **Add new user** field, selecting a [**Password encryption** option](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#password-encryption), and clicking **Save**. New users will receive the permissions of the `doadmin` user by default; these can be changed by following the instructions at [How to Modify User Privileges in MySQL Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/).

You can also delete a user here by opening the user’s **More** menu, clicking **Delete**, and then confirming the deletion. Similarly, to reset a user’s password, open the user’s **More** menu and select **Reset password**. If you have any services that depend on that user’s credentials, such as log forwarding, resetting the password may break that service.

## Password Encryption

DigitalOcean Managed Databases using MySQL 8+ are automatically configured to use `caching_sha2_password` authentication by default. `caching_sha2_password` uses a stronger password encryption than prior versions of MySQL and some applications (such as PHP based applications using PHP 7.1 or older) have trouble connecting to MySQL 8+ databases. You can use the **Password Encryption** option to set a user’s password encryption to the legacy version (`mysql_native_password`) if your applications are experiencing authentication issues.

![Select password encryption](https://docs.digitalocean.com/screenshots/databases/mysql_select-pass-encryption.abc011a77915a67d396668d300f119f19b03332bc87e9d85a365a8680593225e.png)

To change a user’s password encryption on a database using the control panel, click the name of the database to go to its **Overview** page, then select the **Users & Databases** tab. Beside the user you want to change, click the **More** menu and select **Edit Password Encryption**.

In the **Password encryption** menu, select the desired encryption type, then click **Save**. The database automatically updates with the new encryption preference.
![Edit password encryption](https://docs.digitalocean.com/screenshots/databases/mysql_edit-pass-encryption.7b0413e68a8ccd00423cb59d81a9a0fa0ded3ad21f46af07356729236628886d.png)

In this article...

- [Create or Delete a Database User Using the CLI](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#create-or-delete-a-database-user-using-the-cli)
- [Create, Update, or Delete a Database User Using the API](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#create-update-or-delete-a-database-user-using-the-api)
- [Add or Delete a Database User Using the Control Panel](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#add-or-delete-a-database-user-using-the-control-panel)
- [Password Encryption](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/#password-encryption)

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