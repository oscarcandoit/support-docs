---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/"
title: "How to Modify User Privileges in MySQL Databases | DigitalOcean Documentation"
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
- Modify User Privileges

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Modify User Privileges in MySQL Databases

Validated on 17 Oct 2019 • Last edited on 17 Apr 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

The privileges granted to a MySQL user determine what operations that user can perform. MySQL privileges are organized accordingly:

- **Administrative privileges** allow users to manage the operations of the MySQL server itself, including the privileges of other users. Also known as global privileges.

- **Database privileges** allow users to manage a specific database and all the objects within that database. These can be granted globally or only for specific databases.

- **Database object privileges** allow users to manage specific objects within databases. These privileges can be granted for specific objects within a database, for an entire database, or globally.


## Privilege Restrictions on DigitalOcean’s MySQL Managed Databases

By default, MySQL database clusters come with a user, `doadmin`, which has full access to every database you create. Instead of using `doadmin` to access the database, we recommend creating additional users who have only the privileges they need, following the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

Additionally by default, every database cluster is publicly accessible. To limit access, you can [add trusted sources](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/#firewalls) or manage user permissions by following this guide.

MySQL sets privileges based on account names, which consist of a user name and a host name in the format `'user_name'@'host_name'`. You can specify the host by name (`'user_name'@'localhost'`), IP address (`'user_name'@'198.51.100.1'`), or using [wildcard characters](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html) (`like %, as in 'user_name'@'%'`, which matches all hosts). Learn more in [MySQL’s documentation on specifying account names](https://dev.mysql.com/doc/refman/8.0/en/account-names.html).

To ensure stability of the platform, DigitalOcean Managed MySQL Databases have some default restrictions on user privileges that cannot be changed. Users cannot insert or edit any of the following databases, but can select from them:

- `mysql`
- `sys`
- `metrics_user_telegraf`
- `performance_schema`

Users on DigitalOcean Managed MySQL Databases cannot insert or edit the `information_schema` database, but can select from it.

You can’t currently change a user’s privileges in the control panel, so to do so you need to use a command-line MySQL client like `mysql`. After you [create a user](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/) in the cluster, [connect to the cluster](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/) as `doadmin` or another admin user. From here, the commands you need to execute depend on the permissions you want the user to have.

## Granting Privileges

To grant all privileges on a specific database to a user, you can use the following commands:

```sql
GRANT ALL ON example_database.* TO 'example_user'@'%';
```

Note
You cannot create additional admin users. However, you can give a user full access to all databases you’ve created by running the `GRANT ALL` command for each database.

To grant a user administrative privileges for a specific database, you must also give them the `GRANT OPTION` privilege. Here’s an example:

```sql
GRANT ALL ON example_database.* TO 'example_user'@'%' WITH GRANT OPTION;
```

To grant a user only read privileges on a database, you can use the following command:

```sql
GRANT SELECT ON example_database TO 'example_user'@'%';
```

To grant a user privileges on only a specific table in a database, you can use the following command:

```sql
GRANT SELECT ON example_database TO 'example_user'@'%';
mysql> GRANT INSERT ON example_database.example_table TO 'example_user'@'%';
```

Granting additional privileges to a user does not remove any existing privileges. To [remove existing privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#revoking-privileges), use the `REVOKE` command.

## Revoking Privileges

Revoking privileges is quite similar to granting them. To revoke a user’s privileges, use the `revoke` command syntax. For example, to revoke all privileges on a specific database, use the following command:

```sql
REVOKE ALL ON example_database FROM 'example_user'@'%';
```

If a user already has privileges and you want to revoke them but still allow the user to read the database, you can use the following command:

```sql
mysql> REVOKE ALL ON example_database FROM 'example_user'@'%';
mysql> GRANT SELECT ON example_database TO 'example_user'@'%';
```

## Viewing Privileges

To see the privileges for the current user, you can use the `SHOW GRANTS;` command, and will see output similar to the following, which shows the default grants for the `doadmin` user:

```sql
mysql> SHOW GRANTS;
+---------------------------------------------------------------------------------------------------------------------------------------------------+
| Grants for doadmin@%                                                                                                                              |
+---------------------------------------------------------------------------------------------------------------------------------------------------+
| GRANT CREATE, DROP, PROCESS, SHOW DATABASES, REPLICATION CLIENT, CREATE USER, CREATE ROLE, DROP ROLE ON *.* TO "doadmin"@"%" WITH GRANT OPTION |
| GRANT ROLE_ADMIN ON *.* TO "doadmin"@"%" WITH GRANT OPTION                                                                                                        |
| GRANT ALL PRIVILEGES ON "defaultdb".* TO "doadmin"@"%" WITH GRANT OPTION                                                                                          |
| GRANT SELECT ON "mysql".* TO "doadmin"@"%" WITH GRANT OPTION                                                                                                      |
| GRANT SELECT ON "sys".* TO "doadmin"@"%" WITH GRANT OPTION                                                                                                        |
| GRANT SELECT ON "metrics_user_telegraf".* TO "doadmin"@"%" WITH GRANT OPTION                                                                                      |
| GRANT SELECT ON "performance_schema".* TO "doadmin"@"%" WITH GRANT OPTION
+---------------------------------------------------------------------------------------------------------------------------------------------------+
7 rows in set (0.07 sec)
```

To view the grants for another user, you can use `SHOW GRANTS` while specifying the username:

```sql
mysql> SHOW GRANTS FOR 'example_user';
+--------------------------------------------------------------------------------------------------------------------------------------------------------+
| Grants for example_user@%                                                                                                                              |
+--------------------------------------------------------------------------------------------------------------------------------------------------------+
| GRANT CREATE, DROP, RELOAD, PROCESS, SHOW DATABASES, REPLICATION CLIENT, CREATE USER ON *.* TO "example_user"@"%" WITH GRANT OPTION |
| GRANT ROLE_ADMIN ON *.* TO "example_user"@"%" WITH GRANT OPTION                                                                                        |
| GRANT ALL PRIVILEGES ON "defaultdb".* TO "example_user"@"%" WITH GRANT OPTION                                                                          |
| GRANT SELECT ON "mysql".* TO "example_user"@"%" WITH GRANT OPTION                                                                                      |
| GRANT SELECT ON "sys".* TO "example_user"@"%" WITH GRANT OPTION                                                                                        |
| GRANT SELECT ON "metrics_user_telegraf".* TO "example_user"@"%" WITH GRANT OPTION                                                                      |
| GRANT SELECT ON "performance_schema".* TO "example_user"@"%" WITH GRANT OPTION                                                                         |
+--------------------------------------------------------------------------------------------------------------------------------------------------------+
7 rows in set (0.00 sec)
```

## Resources

For more information on MySQL privileges and how they work, see [Privileges Provided by MySQL](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html).

In this article...

- [Privilege Restrictions on DigitalOcean’s MySQL Managed Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#privilege-restrictions-on-digitaloceans-mysql-managed-databases)
- [Granting Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#granting-privileges)
- [Revoking Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#revoking-privileges)
- [Viewing Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#viewing-privileges)
- [Resources](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/#resources)

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