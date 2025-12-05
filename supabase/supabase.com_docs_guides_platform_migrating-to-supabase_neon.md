---
url: "https://supabase.com/docs/guides/platform/migrating-to-supabase/neon"
title: "Migrate from Neon to Supabase | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Platform](https://supabase.com/docs/guides/platform)

Add-ons[Custom Domains](https://supabase.com/docs/guides/platform/custom-domains)
[Database Backups](https://supabase.com/docs/guides/platform/backups)
[IPv4 Address](https://supabase.com/docs/guides/platform/ipv4-address)
[Read Replicas](https://supabase.com/docs/guides/platform/read-replicas)

Upgrades & Migrations[Upgrading](https://supabase.com/docs/guides/platform/upgrading)

Migrating within Supabase

Migrating to Supabase

[Overview](https://supabase.com/docs/guides/platform/migrating-to-supabase)
[Auth0](https://supabase.com/docs/guides/platform/migrating-to-supabase/auth0)
[Firebase Auth](https://supabase.com/docs/guides/platform/migrating-to-supabase/firebase-auth)
[Firestore Data](https://supabase.com/docs/guides/platform/migrating-to-supabase/firestore-data)
[Firebase Storage](https://supabase.com/docs/guides/platform/migrating-to-supabase/firebase-storage)
[Heroku](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku)
[Render](https://supabase.com/docs/guides/platform/migrating-to-supabase/render)
[Amazon RDS](https://supabase.com/docs/guides/platform/migrating-to-supabase/amazon-rds)
[Postgres](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres)
[Vercel Postgres](https://supabase.com/docs/guides/platform/migrating-to-supabase/vercel-postgres)
[Neon](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon)
[MySQL](https://supabase.com/docs/guides/platform/migrating-to-supabase/mysql)
[MSSQL](https://supabase.com/docs/guides/platform/migrating-to-supabase/mssql)

Project & Account Management[Access Control](https://supabase.com/docs/guides/platform/access-control)

Multi-factor Authentication

[Transfer Project](https://supabase.com/docs/guides/platform/project-transfer)
[Restore to a new project](https://supabase.com/docs/guides/platform/clone-project)

Single Sign-On

Platform Configuration[Regions](https://supabase.com/docs/guides/platform/regions)
[Compute and Disk](https://supabase.com/docs/guides/platform/compute-and-disk)
[Database Size](https://supabase.com/docs/guides/platform/database-size)
[HIPAA Projects](https://supabase.com/docs/guides/platform/hipaa-projects)
[Network Restrictions](https://supabase.com/docs/guides/platform/network-restrictions)
[Performance Tuning](https://supabase.com/docs/guides/platform/performance)
[SSL Enforcement](https://supabase.com/docs/guides/platform/ssl-enforcement)
[Default Platform Permissions](https://supabase.com/docs/guides/platform/permissions)
[PrivateLink](https://supabase.com/docs/guides/platform/privatelink)

Billing[About billing on Supabase](https://supabase.com/docs/guides/platform/billing-on-supabase)
[Get set up for billing](https://supabase.com/docs/guides/platform/get-set-up-for-billing)
[Manage your subscription](https://supabase.com/docs/guides/platform/manage-your-subscription)

Manage your usage

[Your monthly invoice](https://supabase.com/docs/guides/platform/your-monthly-invoice)
[Control your costs](https://supabase.com/docs/guides/platform/cost-control)
[Credits](https://supabase.com/docs/guides/platform/credits)

AWS Marketplace

[Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Platform

1. [Platform](https://supabase.com/docs/guides/platform)
3. More
5. [Migrating to Supabase](https://supabase.com/docs/guides/platform/migrating-to-supabase)
7. [Neon](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon)

# Migrate from Neon to Supabase

## Migrate your existing Neon database to Supabase.

* * *

This guide demonstrates how to migrate your Neon database to Supabase to get the most out of Postgres while gaining access to all the features you need to build a project.

## Retrieve your Neon database credentials [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#retrieve-credentials)

1. Log in to your Neon Console [https://console.neon.tech/login](https://console.neon.tech/login).
2. Select **Projects** on the left.
3. Click on your project in the list.
4. From your Project Dashboard find your **Connection string** and click **Copy snippet** to copy it to the clipboard (do not check "pooled connection").

Example:

```
1

postgresql://neondb_owner:xxxxxxxxxxxxxxx-random-word-yyyyyyyy.us-west-2.aws.neon.tech/neondb?sslmode=require
```

## Set your `OLD_DB_URL` environment variable [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#set-your-olddburl-environment-variable)

Set the **OLD\_DB\_URL** environment variable at the command line using your Neon database credentials from the clipboard.

Example:

```
1

export OLD_DB_URL="postgresql://neondb_owner:xxxxxxxxxxxxxxx-random-word-yyyyyyyy.us-west-2.aws.neon.tech/neondb?sslmode=require"
```

## Retrieve your Supabase connection string [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#retrieve-supabase-connection-string)

1. If you're new to Supabase, [create a project](https://supabase.com/dashboard).
Make a note of your password, you will need this later. If you forget it, you can [reset it here](https://supabase.com/dashboard/project/_/database/settings).

2. On your project dashboard, click [Connect](https://supabase.com/dashboard/project/_?showConnect=true&method=session)

3. Under the Session pooler, click the **Copy** button to the right of your connection string to copy it to the clipboard.


## Set your `NEW_DB_URL` environment variable [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#set-your-newdburl-environment-variable)

Set the **NEW\_DB\_URL** environment variable at the command line using your Supabase connection string. You will need to replace `[YOUR-PASSWORD]` with your actual database password.

Example:

```
1

export NEW_DB_URL="postgresql://postgres.xxxxxxxxxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
```

## Migrate the database [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#migrate-the-database)

You will need the [pg\_dump](https://www.postgresql.org/docs/current/app-pgdump.html) and [psql](https://www.postgresql.org/docs/current/app-psql.html) command line tools, which are included in a full [Postgres installation](https://www.postgresql.org/download).

1. Export your database to a file in console

Use `pg_dump` with your Postgres credentials to export your database to a file (e.g., `dump.sql`).


```
1
2
3
4
5
6
7

pg_dump "$OLD_DB_URL" \  --clean \  --if-exists \  --quote-all-identifiers \  --no-owner \  --no-privileges \  > dump.sql
```

2. Import the database to your Supabase project

Use `psql` to import the Postgres database file to your Supabase project.



```
1

psql -d "$NEW_DB_URL" -f dump.sql
```


Additional options

- To only migrate a single database schema, add the `--schema=PATTERN` parameter to your `pg_dump` command.
- To exclude a schema: `--exclude-schema=PATTERN`.
- To only migrate a single table: `--table=PATTERN`.
- To exclude a table: `--exclude-table=PATTERN`.

Run `pg_dump --help` for a full list of options.

- If you're planning to migrate a database larger than 6 GB, we recommend [upgrading to at least a Large compute add-on](https://supabase.com/docs/guides/platform/compute-add-ons). This will ensure you have the necessary resources to handle the migration efficiently.

- We strongly advise you to pre-provision the disk space you will need for your migration. On paid projects, you can do this by navigating to the [Compute and Disk Settings](https://supabase.com/dashboard/project/_/settings/compute-and-disk) page. For more information on disk scaling and disk limits, check out our [disk settings](https://supabase.com/docs/guides/platform/compute-and-disk#disk) documentation.


## Enterprise [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon\#enterprise)

[Contact us](https://forms.supabase.com/enterprise) if you need more help migrating your project.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/neon.mdx)

### Is this helpful?

NoYes

### On this page

[Retrieve your Neon database credentials](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#retrieve-credentials) [Set your OLD\_DB\_URL environment variable](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#set-your-olddburl-environment-variable) [Retrieve your Supabase connection string](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#retrieve-supabase-connection-string) [Set your NEW\_DB\_URL environment variable](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#set-your-newdburl-environment-variable) [Migrate the database](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#migrate-the-database) [Enterprise](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon#enterprise)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)