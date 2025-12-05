---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/"
title: "How to Import MySQL Databases into DigitalOcean Managed Databases | DigitalOcean Documentation"
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
- Import Databases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Import MySQL Databases into DigitalOcean Managed Databases

Validated on 15 Jun 2021 • Last edited on 17 Apr 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

To import or export databases with the DigitalOcean Managed Databases MySQL engine, you will need:

- A **MySQL client**, like the [MySQL command line client](https://www.digitalocean.com/community/tutorials/how-to-install-the-latest-mysql-on-ubuntu-18-04) or [MySQL Secure Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html).

- The **database’s connection string**; we recommend using the **Flags** format, which supplies the variables as individual flags that are easier to read and customize.


To get the database’s connection parameters from your control panel, visit [the Databases page](https://cloud.digitalocean.com/databases), open the database’s **More** menu, then select Connection details and click **Flags**.

![Databases Overview screen showing connection string](https://docs.digitalocean.com/screenshots/databases/mysql-connection-string.1d68b3742bbfa0584723e56693350eef92b2bc1e01bce3588db4b7f550d83ff8.png)

Click **Copy** to copy the flags with the password. If you want to highlight and copy the text from the screen directly, click **show-password** first to copy the actual password on your clipboard.

To import a database, you will also need the exported database file stored locally on the same machine as your MySQL client. If your database file is on a remote server, you can transfer it with tools like [`sftp`](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server) or [`rsync`](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps).

## Import with the MySQL Command Line Client

To import a database with the MySQL command line client, the exported database file must be in `sql` format and must be stored locally on the same machine as your client.

Once you have the `sql` file of the database, import it using `mysql` as in the following command. Use your connection string and substitute the actual path to your database file.

```shell
mysql -u doadmin -p -h mysql-test-do-user-4915853-0.db.ondigitalocean.com -P 25060 your_database_name \
< /path/to/database_file_name.sql
```

The application will prompt you for your MySQL `doadmin` user password.

Adding `< /path/to/database_file.sql` after the connection parameters passes the file to the `mysql` command. Learn more about `<` and `>` in [An Introduction to Linux I/O Redirection](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection#stream-redirection).

## Import with MySQL Secure Shell

To import a database with MySQL Secure Shell, the exported database file must be in `sql` or JSON format. `sql`-format files must be stored locally on the same machine as your client. How you import the file depends on the format.

To import a `sql`-format database file, use the `mysqlsh` command with the `-f` flag and specify the path to the file.

```shell
mysqlsh -u doadmin -p -h mysql-test-do-user-4915853-0.db.ondigitalocean.com -P 25060 -D your_database_name \
-f /path/to/database_file_name.sql
```

The application will prompt you for your MySQL `doadmin` user password.

To import a JSON database file, first [connect to the server using `mysqlsh`](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/), then use the `--import` command and specify the path to the file.

```sql
--import /path/to/file.json
```

You can also specify a target database or column using this method. Learn more in [Importing JSON documents with the –import command](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-utilities-json-import-command.html) from the official MySQL documentation.

## Export with mysqldump

To export your database, use `mysqldump` with your connection string as below. Specify a path to save the resulting `sql` file and to set the `--set-gtid-purged` flag to `off` as shown in the following command. The `--set-gtid-purged` flag determines whether to retain [GTID data](https://dev.mysql.com/doc/refman/5.6/en/replication-gtids-concepts.html) during the export process.

Warning
If you don’t set the `--set-gtid-purged` flag to `off` during export, importing the data may fail.

```shell
mysqldump -u doadmin -p -h mysql-test-do-user-4915853-0.db.ondigitalocean.com -P 25060 --single-transaction --set-gtid-purged=OFF your_database_name \
> /path/to/database_file.sql
```

The application prompts you for your MySQL `doadmin` user password.

Adding `> /path/to/database_file.sql` after the connection parameters saves the output of the command to the path you specify. Learn more about `<` and `>` in [An Introduction to Linux I/O Redirection](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection#stream-redirection).

The `mysqldump` program has many flags that let you customize the resulting dump file, like changing the output format or modifying statements for MySQL version compatibility. Learn more in [Using `mysqldump` for Backups reference](https://dev.mysql.com/doc/refman/8.0/en/using-mysqldump.html) from the official MySQL documentation.

## Import and Export with PHPMyAdmin or Other MySQL Clients

There are many other clients you can use to import and export MySQL databases. Here are some additional import/export resources, including official documentation from other tools:

- [PHPMyAdmin: Import and Export](https://docs.phpmyadmin.net/en/latest/import_export.html)
- [MySQL Workbench Data Export and Import Wizard](https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html)
- [How to Import and Export Databases in MySQL or MariaDB](https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb) from the DigitalOcean community

In this article...

- [Import with the MySQL Command Line Client](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/#import-with-the-mysql-command-line-client)
- [Import with MySQL Secure Shell](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/#import-with-mysql-secure-shell)
- [Export with mysqldump](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/#export-with-mysqldump)
- [Import and Export with PHPMyAdmin or Other MySQL Clients](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/#import-and-export-with-phpmyadmin-or-other-mysql-clients)

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