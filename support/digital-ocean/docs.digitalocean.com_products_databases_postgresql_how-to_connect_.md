---
url: "https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/"
title: "How to Connect to PostgreSQL Database Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/postgresql.855c43f1f82e98a24a05998729b39a9937438c7f77af3dc0c22da5a5739f5eb7.svg)PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/postgresql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/postgresql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/postgresql/how-to/)
  - [Create PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/)
  - [Connect to PostgreSQL Cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/import-databases/)
  - [Secure PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/)
  - [Migrate External Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/)
  - [Monitor PostgreSQL Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-read-only-nodes/)
  - [Manage Connection Pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/postgresql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/postgresql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/tag/)
  - [Upgrade PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/postgresql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/postgresql/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/postgresql/concepts/best-practices/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/postgresql/concepts/migration-strategies/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/postgresql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/postgresql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/postgresql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/postgresql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/postgresql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/postgresql/details/limits/)
  - [Supported Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/postgresql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/postgresql/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/postgresql/how-to/)
- Connect to PostgreSQL Cluster

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect to PostgreSQL Database Clusters

Validated on 19 Aug 2020 • Last edited on 17 Jun 2025

PostgreSQL is an open source, object-relational database built for extensibility, data integrity, and speed. Its concurrency support makes it fully ACID-compliant, and it supports dynamic loading and catalog-driven operations to let users customize its data types, functions, and more.

You can connect to DigitalOcean Managed Databases using command line tools and other third-party clients. This guide explains where to find your PostgreSQL database’s connection details and how to use them to configure tools and clients.

## Retrieve Database Connection Details Using the CLI

How to Retrieve Database Connection Details Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases connection`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/connection/) for more details:




```shell
doctl databases connection <database-cluster-id> [flags]
```



The following example retrieves the connection details for a database cluster with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`:




```shell
doctl databases connection f81d4fae-7dec-11d0-a765-00a0c91e6bf6
```


## Retrieve Database Connection Details Using the API

This API call retrieves the information about your database, including its connection details. The connection details are located in the returned `connection` JSON object.

How to Retrieve Database Connection Details Using the DigitalOcean API

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

## View PostgreSQL Cluster Connection Details

You use your database’s connection details to configure tools, applications, and resources that connect to the database. To view your database’s connection details, click the name of the cluster on [the Databases page](https://cloud.digitalocean.com/databases) to go to its **Overview** page.

![Databases Overview screen showing connection string](https://docs.digitalocean.com/screenshots/databases/connection-details.b18206f6861c63d5a396b1c98934b93c5588ce48c46b27582d6f20337d848ccd.png)

You can view customized connection details based on how you want to connect to the database:

- **Public network** and **Private network** ( [VPC](https://docs.digitalocean.com/products/networking/vpc/)) options generate connection details based on if you want to connect via the cluster’s public hostname or the cluster’s private hostname. Only other resources in the same VPC network as the cluster can access it using its private hostname.

- The **Database/Pool** field updates the connection details based on which database you want to connect to.

- The **User** field updates the connection details with the [user credentials](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-users-and-databases/) that you would like to connect with.


You can also choose to view the connection details in three different formats:

- **Connection parameters:** Database information meant for application configuration, such as configuring connections for DataGrip and pgAdmin.

- **Connection string:** A condensed string that you can pass to a client on the command line.

- **Flags:** A complete `psql` command that supplies the connection variables as individual flags.


We recommend the flags format because the readability can help if you want to customize the way you connect. The only required parameter is `sslmode`, but PostgreSQL supports many [options for customizing connections](https://www.postgresql.org/docs/current/app-psql.html).

By default, the control panel doesn’t reveal the cluster’s password for security reasons. Click **Copy** to copy connection details with the password, or click **show-password** to reveal the password.

## Download the SSL Certificate

Each managed database comes with an SSL certificate. You can use this SSL certificate to encrypt connections between your client applications and the database.

To download your database’s SSL certificate, click the name of the cluster on [the Databases page](https://cloud.digitalocean.com/databases) to go to its **Overview** page. In the **Connection Details** section, click **Download CA certificate**.

![Databases connection details with Download CA Certificate selected](https://docs.digitalocean.com/screenshots/databases/dbaas-ssl-certificate.8b2c955e8e43aa8e36b56bc98564bd42da5a9ba716eff506e1c174ca2d678d47.png)

When you configure your client applications, you can use the certificate’s location on your local system. Each client application is configured differently, so check the documentation for the tool you’re using for more detail on setting up SSL connections.

## Connect to the Database

You can connect and manage the database using a command line tool or an application that has a graphic user interface (GUI). In this guide, we show you how to connect to the database using the command line tool, `psql`, and the visual database management application, DataGrip.

Connect Using psql

To connect to PostgreSQL database clusters using `psql`, you need three things:

- To add your local computer [to the database’s trusted sources](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#firewalls).

- To install the [psql client](https://www.postgresql.org/docs/current/app-psql.html) on your local computer. You can also get `psql` by [installing PostgreSQL](https://www.postgresql.org/download/).

- To reference the [database cluster’s connection details](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connection-details), which tells your client how to connect to the cluster.


To connect using the flags format, paste the entire command from the control panel in your terminal:

```shell
PGPASSWORD=your_password psql -U doadmin -h cluster-do-user-1234567-0.db.ondigitalocean.com -p 25060 -d defaultdb --set=sslmode=require
```

To connect using the connection string, pass the string from the control panel in quotes to `psql` in your terminal:

```shell
psql "postgresql://your_username:your_password@cluster-do-user-1234567-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
```

When you connect successfully, your terminal changes to the `psql` prompt, which displays the name of the database you’re connected to, like `defaultdb=>`.

To connect using [your database’s SSL certificate](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#download-the-ssl-certificate), update the flags commands with the `sslrootcert` variable and the path to the certificate on your local system:

```shell
PGPASSWORD=your_password psql -U doadmin -h cluster-do-user-1234567-0.db.ondigitalocean.com -p 25060 -d defaultdb --set=sslmode=require --set=sslrootcert=path/to/your-ssl.crt
```

From here, you can change databases or users, execute SQL queries, and perform other database administration tasks. Learn more about `psql` in [our SQL cheat sheet](https://www.digitalocean.com/community/tutorials/how-to-manage-sql-database-cheat-sheet) and [the official `psql` documentation](https://www.postgresql.org/docs/9.0/app-psql.html).

If you’re having trouble connecting to the database, you can [troubleshoot the connection using our Support page](https://docs.digitalocean.com/support/postgresql/), or you can reference [psql’s connection documentation](https://www.postgresql.org/docs/9.1/ecpg-sql-connect.html).

Connect Using DataGrip

To connect to PostgreSQL database clusters using DataGrip, you need three things:

- To add your local computer [to the database’s trusted sources](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#firewalls).

- To install the [DataGrip client](https://www.jetbrains.com/datagrip/) on your local computer.

- To reference the **[database cluster’s connection details](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connection-details)**, which tells your client how to connect to the cluster.


To connect to your PostgreSQL database using a standard TCP/IP connection, open DataGrip, then click **File**, **New Data Source**, then select **PostgreSQL** from the list of options.

In the Data Sources and Drivers window, create a descriptive name for the connection in the **Name** field.

In the **General** tab, use the information from your database’s **[Connection Details](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connection-details)** section in the control panel to fill out the necessary fields.

![DataGrip Data Sources and Drivers window with connection information](https://docs.digitalocean.com/screenshots/databases/postgresql-datagrip-connection.386c755c6ba3a4ea701bbb753625878ddcfd0aab88c3841c30b77b8c94ad3989.png)

If you want to connect using SSL encryption, click the **SSH/SSL** tab. In the SSH/SSL tab, click the select the **Use SSL** option. In the **CA File** field, enter the path to [your database’s SSL certificate](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#ssl-encryption) on your local system. In the **Mode** field, select the **Require** option.

![DataGrip Data Sources and Drivers SSL tab with connection information](https://docs.digitalocean.com/screenshots/databases/postgresql-datagrip-ssl.ca973c56ecd2e5a1bb22a5c7ad527d8b1d76b4ec5f130eec84414afca47c0f3d.png)

Once you have entered the details, click **Test Connection**. If you receive the message with a green checkmark, click **OK** in the **Data Sources and Drivers** window to save the connection configuration. DataGrip automatically connects to the database. If you receive an error, recheck that you entered your credentials correctly and then reattempt the test.

If you’re having trouble connecting to the database, you can [troubleshoot the connection using our Support page](https://docs.digitalocean.com/support/postgresql/), or you can reference [DataGrip’s connection documentation](https://www.jetbrains.com/help/datagrip/connecting-to-a-database.html).

In this article...

- [Retrieve Database Connection Details Using the CLI](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#retrieve-database-connection-details-using-the-cli)
- [Retrieve Database Connection Details Using the API](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#retrieve-database-connection-details-using-the-api)
- [View PostgreSQL Cluster Connection Details](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connection-details)
- [Download the SSL Certificate](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#download-the-ssl-certificate)
- [Connect to the Database](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/#connect-to-the-database)

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