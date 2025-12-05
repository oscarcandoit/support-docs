---
url: "https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku"
title: "Migrate from Heroku to Supabase | Supabase Docs"
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
7. [Heroku](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku)

# Migrate from Heroku to Supabase

## Migrate your Heroku Postgres database to Supabase.

* * *

Supabase is one of the best [free alternatives to Heroku Postgres](https://supabase.com/alternatives/supabase-vs-heroku-postgres). This guide shows how to migrate your Heroku Postgres database to Supabase. This migration requires the [pg\_dump](https://www.postgresql.org/docs/current/app-pgdump.html) and [psql](https://www.postgresql.org/docs/current/app-psql.html) CLI tools, which are installed automatically as part of the complete Postgres installation package.

Alternatively, use the [Heroku to Supabase migration tool](https://migrate.supabase.com/) to migrate in just a few clicks.

## Quick demo [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#quick-demo)

Migrate Your Heroku Database to Supabase - YouTube

[Photo image of Supabase](https://www.youtube.com/channel/UCNTVzV1InxHV-YR0fSajqPQ?embeds_referring_euri=https%3A%2F%2Fsupabase.com%2F)

Supabase

69.3K subscribers

[Migrate Your Heroku Database to Supabase](https://www.youtube.com/watch?v=xsRhPMphtZ4)

Supabase

Search

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

Watch on

0:00

/

•Live

•

## Retrieve your Heroku database credentials [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#retrieve-heroku-credentials)

1. Log in to your [Heroku account](https://heroku.com/) and select the project you want to migrate.
2. Click **Resources** in the menu and select your **Heroku Postgres** database.
3. Click **Settings** in the menu.
4. Click **View Credentials** and save the following information:
   - Host (`$HEROKU_HOST`)
   - Database (`$HEROKU_DATABASE`)
   - User (`$HEROKU_USER`)
   - Password (`$HEROKU_PASSWORD`)

## Retrieve your Supabase connection string [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#retrieve-supabase-connection-string)

1. If you're new to Supabase, [create a project](https://supabase.com/dashboard).
2. Get your project's Session pooler connection string from your project dashboard by clicking [Connect](https://supabase.com/dashboard/project/_?showConnect=true&method=session).
3. Replace \[YOUR-PASSWORD\] in the connection string with your database password. You can reset your database password on the [Database Settings page](https://supabase.com/dashboard/project/_/database/settings) if you do not have it.

## Export your Heroku database to a file [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#export-heroku-database)

Use `pg_dump` with your Heroku credentials to export your Heroku database to a file (e.g., `heroku_dump.sql`).

```
1
2
3

pg_dump --clean --if-exists --quote-all-identifiers \ -h $HEROKU_HOST -U $HEROKU_USER -d $HEROKU_DATABASE \ --no-owner --no-privileges > heroku_dump.sql
```

## Import the database to your Supabase project [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#import-database-to-supabase)

Use `psql` to import the Heroku database file to your Supabase project.

```
1

psql -d "$YOUR_CONNECTION_STRING" -f heroku_dump.sql
```

## Additional options [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#additional-options)

- To only migrate a single database schema, add the `--schema=PATTERN` parameter to your `pg_dump` command.
- To exclude a schema: `--exclude-schema=PATTERN`.
- To only migrate a single table: `--table=PATTERN`.
- To exclude a table: `--exclude-table=PATTERN`.

Run `pg_dump --help` for a full list of options.

- If you're planning to migrate a database larger than 6 GB, we recommend [upgrading to at least a Large compute add-on](https://supabase.com/docs/guides/platform/compute-add-ons). This will ensure you have the necessary resources to handle the migration efficiently.

- We strongly advise you to pre-provision the disk space you will need for your migration. On paid projects, you can do this by navigating to the [Compute and Disk Settings](https://supabase.com/dashboard/project/_/settings/compute-and-disk) page. For more information on disk scaling and disk limits, check out our [disk settings](https://supabase.com/docs/guides/platform/compute-and-disk#disk) documentation.


## Enterprise [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku\#enterprise)

[Contact us](https://forms.supabase.com/enterprise) if you need more help migrating your project.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/heroku.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FxsRhPMphtZ4%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Quick demo](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#quick-demo) [Retrieve your Heroku database credentials](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#retrieve-heroku-credentials) [Retrieve your Supabase connection string](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#retrieve-supabase-connection-string) [Export your Heroku database to a file](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#export-heroku-database) [Import the database to your Supabase project](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#import-database-to-supabase) [Additional options](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#additional-options) [Enterprise](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku#enterprise)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)