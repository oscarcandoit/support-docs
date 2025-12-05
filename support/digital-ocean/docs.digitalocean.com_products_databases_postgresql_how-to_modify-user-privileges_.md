---
url: "https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/"
title: "How to Modify User Privileges in PostgreSQL Databases | DigitalOcean Documentation"
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
- Modify User Privileges

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Modify User Privileges in PostgreSQL Databases

Validated on 22 Apr 2021 • Last edited on 17 Apr 2025

PostgreSQL is an open source, object-relational database built for extensibility, data integrity, and speed. Its concurrency support makes it fully ACID-compliant, and it supports dynamic loading and catalog-driven operations to let users customize its data types, functions, and more.

By default, PostgreSQL database clusters come with a user, `doadmin`, which has full access to every database you create. Instead of using `doadmin` to access the database, we recommend creating additional users that only have the privileges they need, following the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

Additionally by default, every database cluster is publicly accessible. To limit access, you can [add trusted sources](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#firewalls) or manage user permissions by following this guide.

You can [create a new user in the control panel](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-users-and-databases/), but you currently can’t set a user’s privileges in the control panel, so you need to use a command-line PostgreSQL client like [`psql`](https://www.postgresql.org/docs/current/app-psql.html).

## Modify PostgreSQL User Permissions

First, [connect to your database cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/) as the admin user, `doadmin`, by passing the cluster’s connection string to `psql`.

```shell
psql "postgresql://doadmin:your_password@cluster-do-user-1234567-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
```

This brings you into the interactive shell for PostgreSQL, which changes your command prompt to `defaultdb=>`.

From here, connect to the database that you want to modify the user’s privileges on.

```sql
defaultdb=> \connect example_database
```

Connecting to the database changes the command prompt to the database’s name and displays output like this:

```
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
You are now connected to database "example_database" as user "doadmin".
```

From here, the commands you need to execute depend on the permissions you want the user to have. Learn more about [PostgreSQL privileges in their documentation](https://www.postgresql.org/docs/9.1/ddl-priv.html).

As an example, to make a **read-only user**, first revoke all of the user’s default privileges, then give `CONNECT` access. From there, add `SELECT` privileges on the existing tables in the database and set `SELECT` privileges as their default for any other tables created in the future.

```sql
REVOKE ALL ON DATABASE example_database FROM example_user;
GRANT CONNECT ON DATABASE example_database TO example_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO example_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO example_user;
```

You need to run these commands on each database you want this user to have these privileges on.

You can also modify these commands to give the user different permissions. For example, changing the permissions from `SELECT` to `INSERT, SELECT` will make a user that can both read and write data.

## Check PostgreSQL User Privileges

Once you’re [connected to your database cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/), you can use the `\du` command to list users that currently exist and see their roles.

```sql
\du
```

```
                                       List of roles
 Role name     |                         Attributes                         | Member of
---------------+------------------------------------------------------------+-----------
 \_dodb        | Superuser, Replication                                     | {}
 doadmin       | Create role, Create DB, Replication, Bypass RLS            | {}
 postgres      | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 example_user  |                                                            | {}
```

You can verify that a privilege change completed successfully by querying the database privileges table for the user:

```sql
SELECT table_catalog, table_schema, table_name, privilege_type FROM information_schema.table_privileges WHERE grantee = 'example_user';
```

The output will display the new privileges. For example, if you granted only `SELECT` privileges, the output would look like this:

```
 table_catalog    | table_schema | table_name | privilege_type
------------------+--------------+------------+----------------
 example_database | public       | account    | SELECT
```

You can also verify that the user’s permissions are changed by logging into the database cluster as the new user, then connecting to the database and testing commands. For example, if you try to `INSERT` into a database as a read-only user, you should receive an error like `ERROR:  permission denied for table account`.

In this article...

- [Modify PostgreSQL User Permissions](https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/#modify-postgresql-user-permissions)
- [Check PostgreSQL User Privileges](https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/#check-postgresql-user-privileges)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

Cookie Preferences