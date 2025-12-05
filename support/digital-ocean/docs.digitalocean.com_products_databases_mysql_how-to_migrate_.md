---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/"
title: "How to Migrate MySQL Databases | DigitalOcean Documentation"
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
- Migrate MySQL Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Migrate MySQL Databases

Validated on 25 Jan 2023 • Last edited on 24 Nov 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

You can migrate existing on-premise or cloud hosted MySQL databases to clusters in your DigitalOcean account. Migrating a database establishes a connection with an existing database and replicates its contents to the new database cluster. If the existing database is continuously being written to, the migration process will continue until there is no more data to replicate or you manually stop the migration.

We do not currently support migrating managed database clusters on DigitalOcean to other managed database clusters on DigitalOcean using continuous migration. For example, you cannot migrate a managed database cluster from one DigitalOcean account to another. However, you can migrate with a dump.

## Logical Replication vs. Physical Replication

The online migration feature uses either logical replication or a physical replication to migrate data from one database to another.

- **Logical Replication:** Continuously streams the replication line-by-line, including any changes being written to the database during the migration, until the replication is stopped.
- **Physical Replication:** Copies the current contents of the database into a file and transfers it to the target database. Any changes written to the database during the migration will not be migrated.

By default, the online migration feature attempts to migrate the database using logical replication. If the source database is not configured for logical replication, the migration uses `mysqldump` instead.

## Prerequisites

To migrate an existing database to a DigitalOcean database cluster, you need to reference the source database’s connection credentials and to disable or update any firewalls between the databases.

Migration can fail if your binary logs retention is shorter than 14 days. If you have reconfigured your cluster’s `binlog_expire_logs_seconds` parameter, we recommend you return it to the default of 2592000 (30 days) before migration.

Warning
Before migrating a database, ensure that the source’s MySQL version is not newer than the target cluster’s. This can result in an error that causes migration to fail.

### Make Database Publicly Accessible

To migrate a database, the source database’s hostname or IP address must be accessible from the public internet. Public connection information for DigitalOcean databases are in [the database’s Connection Details in the control panel](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/#connection-details). For other providers, reference their documentation for more information.

### Reference Source Database’s Credentials

Before migrating an existing database, you need the following information about the source database:

- **Hostname or connection string**: The public hostname, connection string, or IP address used to connect to the database.
- **Port**: The port used to connect to the database. DigitalOcean clusters connect on port `25061` by default.
- **Username**: The username used to connect to the database. The username needs sufficient permissions to access the data you want to migrate.
- **Password**: The password used to connect to the database.

Reference your database provider’s documentation for details on how to locate this information.

### Update or Disable Firewalls

To migrate an existing database, you also need to update or temporarily disable any firewalls protecting the databases to allow the databases to connect to each other.

To do this on the target DigitalOcean database, we recommend you [add the source database to its trusted sources](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/#add-a-trusted-source-using-the-control-panel). Alternatively, you can [remove all trusted sources](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/#firewalls) from the database cluster, exposing it to the public internet.

For the source database outside of DigitalOcean, you may need to update or temporarily disable any firewalls protecting the database before attempting migration. Please refer to your database provider’s documentation to see how to do this.

## Prepare the Source Database for Migration

Once the source database is accessible from the public internet, prepare the source database itself for migration by allowing remote connections to the source database, enabling Global Transaction Identification (GTID), and granting logical replication privileges to the source database user you intend to connect and migrate with.

### Enable Remote Connections on Source Database

Because the migration requires a remote connection between the target database at DigitalOcean and the source database, the source’s host server needs to be configured to accept remote connections. Most MySQL databases are configured to only accept connections from local hosts by default.

To enable remote connections, log in to the database’s host server where the MySQL installation is being hosted, and run the following command to open the MySQL’s network configuration:

```
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

The file that opens looks like this:

/etc/mysql/mysql.conf.d/mysqld.cnf

```bash
. . .
lc-messages-dir = /usr/share/mysql
skip-external-locking
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address            = 127.0.0.1
. . .
```

By default, the `bind-address` value is set to `127.0.0.1`, meaning that the server will only look for local connections. Change this value to a wildcard IP address, `*` or `0.0.0.0`. The resulting file should look like this:

/etc/mysql/mysql.conf.d/mysqld.cnf

```bash
. . .
lc-messages-dir = /usr/share/mysql
skip-external-locking
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address            = *
. . .
```

Once you have changed the `bind-address` value, save the changes to the file and exit it. To make the change effective, restart MySQL.

```
sudo systemctl restart mysql
```

The MySQL database now accepts remote connections. It is important to revert these changes after you have completed the migration.

### Enable GTID

GTID creates a unique identifier for each transaction on the source database. If you do not already have GTID set up on your database, follow [MySQL’s documentation on how to do this](https://dev.mysql.com/doc/refman/5.7/en/replication-mode-change-online-enable-gtids.html).

To ensure success in enabling GTID, open your `my.cnf` file, which is most likely located in `/etc/my.cnf` or `/etc/mysql/my.cnf`. If the file is not in either of these locations or you’re on a Windows machine, see the [table corresponding to your OS in the official documentation](https://dev.mysql.com/doc/refman/8.0/en/option-files.html) for more possible locations.

Then, verify that the file includes the `[mysqld]` header, like this:

```
[mysqld]
gtid_mode=ON
enforce_gtid_consistency=ON
```

Once you have enabled GTID, restart MySQL:

```
sudo systemctl restart mysql
```

### Grant Logical Replication Privileges

Next, you’ll need to grant logical replication to the user you intend to connect to the source database with during the migration. To do this, log in to the database with an admin level user and grant the following permission to the target user:

```
GRANT ALL ON <database-name>.* TO ‘username’@‘%’;
```

To get the permissions to take effect, reload the grant tables by running:

```
FLUSH PRIVILEGES;
```

The user now has logical replication privileges. It is important to revert these changes after you have completed the migration.

Migration using the control panel requires that you grant replication permissions to all databases. However, you can exclude databases in [the **MySQL migration** window](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#using-the-control-panel) or by changing the [parameter `ignore_dbs`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_update_onlineMigration) using the DigitalOcean API. In this case, only databases selected with the parameter need replication permissions.

## Migrate a Database Using the API

How to Migrate a Database Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/online-migration`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_update_onlineMigration).

### cURL

Using cURL:

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
-d '{"source":{"host":"source-do-user-6607903-0.b.db.ondigitalocean.com","dbname":"defaultdb","port":25060,"username":"doadmin","password":"paakjnfe10rsrsmf"},"disable_ssl":false,"ignore_dbs":["db0","db1"]}' \
"https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/online-migration"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "source": {
    "host": "source-do-user-6607903-0.b.db.ondigitalocean.com",
    "dbname": "defaultdb",
    "port": 25060,
    "username": "doadmin",
    "password": "paakjnfe10rsrsmf"
  },
  "disable_ssl": False
  "ignore_dbs": ["db0","db1"]
}

update_resp = client.databases.update_online_migration(database_cluster_uuid="a7a8bas", body=req)
```

## Migrate a Database Cluster Using the Control Panel

To migrate a MySQL database from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), click **Databases** and then select the database you want to migrate to from your list of databases.

From the database’s **Overview** page, click the **Actions** button and then select **Set Up Migration**.

![Action menu with Set Up Migration highlighted](https://docs.digitalocean.com/screenshots/databases/dbaas-pg-set-up-migration.4f76785fc5d8ef486681b3aa61628c3d0321d9522d48440b7436c6a8d949b3fb.png)

In the **MySQL migration** window, click **Continue**, then select a connection type between public host, public connection string, or private host. Enter the source database’s credentials, any databases you want to exclude, and your credentials. Then, click **Start Migration**. A migration status banner opens at the top of the **Overview** page and your target database’s data begins to transfer.

![MySQL migration with credentials](https://docs.digitalocean.com/screenshots/databases/mysql-migration.fd131ab3defada7e4bd935dc4c711befd7fc02f9ca1e916b8ca582ebfda4b975.png)

You can stop the migration at any time by clicking the **Stop Migration** button in the migration status banner. If you stop migration, the database retains any migrated data.

Warning

Migrations automatically stop after two weeks. We do not recommend leaving migrations ongoing in order to keep two database clusters in sync; instead, consider [adding a read-only node](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/) to your cluster.

During migration, you can still write to the target database, but avoid the following actions because they may result in conflicts and replication issues:

- Do not write to any tables on the target database that the migration is already editing.
- Do not manually alter the source database’s replication or GTID configuration.
- Do not make changes to either database that could prevent the source and target database from connecting with each other. This includes modifying the source database’s `bind_address` and updating or enabling firewalls/trusted sources on either database.

In this article...

- [Logical Replication vs. Physical Replication](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#logical-replication-vs-physical-replication)
- [Prerequisites](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#prerequisites)
  - [Make Database Publicly Accessible](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#make-database-publicly-accessible)
  - [Reference Source Database’s Credentials](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#reference-source-databases-credentials)
  - [Update or Disable Firewalls](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#update-or-disable-firewalls)
- [Prepare the Source Database for Migration](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#prepare-the-source-database-for-migration)
  - [Enable Remote Connections on Source Database](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#enable-remote-connections-on-source-database)
  - [Enable GTID](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#enable-gtid)
  - [Grant Logical Replication Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#grant-logical-replication-privileges)
- [Migrate a Database Using the API](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#migrate-a-database-using-the-api)
- [Migrate a Database Cluster Using the Control Panel](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/#migrate-a-database-cluster-using-the-control-panel)

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