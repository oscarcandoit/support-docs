---
url: "https://supabase.com/docs/guides/database/postgres/timeouts"
title: "Timeouts | Supabase Docs"
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

[Database](https://supabase.com/docs/guides/database/overview)

[Overview](https://supabase.com/docs/guides/database/overview)

Fundamentals[Connecting to your database](https://supabase.com/docs/guides/database/connecting-to-postgres)
[Importing data](https://supabase.com/docs/guides/database/import-data)
[Securing your data](https://supabase.com/docs/guides/database/secure-data)

Working with your database (basics)[Managing tables, views, and data](https://supabase.com/docs/guides/database/tables)
[Working with arrays](https://supabase.com/docs/guides/database/arrays)
[Managing indexes](https://supabase.com/docs/guides/database/postgres/indexes)
[Querying joins and nested tables](https://supabase.com/docs/guides/database/joins-and-nesting)
[JSON and unstructured data](https://supabase.com/docs/guides/database/json)

Working with your database (intermediate)[Implementing cascade deletes](https://supabase.com/docs/guides/database/postgres/cascade-deletes)
[Managing enums](https://supabase.com/docs/guides/database/postgres/enums)
[Managing database functions](https://supabase.com/docs/guides/database/functions)
[Managing database triggers](https://supabase.com/docs/guides/database/postgres/triggers)
[Managing database webhooks](https://supabase.com/docs/guides/database/webhooks)
[Using Full Text Search](https://supabase.com/docs/guides/database/full-text-search)
[Partitioning your tables](https://supabase.com/docs/guides/database/partitions)
[Managing connections](https://supabase.com/docs/guides/database/connection-management)
[Managing event triggers](https://supabase.com/docs/guides/database/postgres/event-triggers)

OrioleDB[Overview](https://supabase.com/docs/guides/database/orioledb)

Access and security[Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
[Column Level Security](https://supabase.com/docs/guides/database/postgres/column-level-security)
[Hardening the Data API](https://supabase.com/docs/guides/database/hardening-data-api)
[Custom Claims & RBAC](https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac)
[Managing Postgres Roles](https://supabase.com/docs/guides/database/postgres/roles)
[Using Custom Postgres Roles](https://supabase.com/docs/guides/storage/schema/custom-roles)
[Managing secrets with Vault](https://supabase.com/docs/guides/database/vault)
[Superuser Access and Unsupported Operations](https://supabase.com/docs/guides/database/postgres/roles-superuser)

Configuration, optimization, and testing[Database configuration](https://supabase.com/docs/guides/database/postgres/configuration)
[Query optimization](https://supabase.com/docs/guides/database/query-optimization)
[Database Advisors](https://supabase.com/docs/guides/database/database-advisors)
[Testing your database](https://supabase.com/docs/guides/database/testing)
[Customizing Postgres config](https://supabase.com/docs/guides/database/custom-postgres-config)

Debugging[Timeouts](https://supabase.com/docs/guides/database/postgres/timeouts)
[Debugging and monitoring](https://supabase.com/docs/guides/database/inspect)
[Debugging performance issues](https://supabase.com/docs/guides/database/debugging-performance)
[Supavisor](https://supabase.com/docs/guides/database/supavisor)
[Troubleshooting](https://supabase.com/docs/guides/database/troubleshooting)

ORM Quickstarts

Prisma

[Drizzle](https://supabase.com/docs/guides/database/drizzle)
[Postgres.js](https://supabase.com/docs/guides/database/postgres-js)

GUI quickstarts[pgAdmin](https://supabase.com/docs/guides/database/pgadmin)
[PSQL](https://supabase.com/docs/guides/database/psql)
[DBeaver](https://supabase.com/docs/guides/database/dbeaver)
[Metabase](https://supabase.com/docs/guides/database/metabase)
[Beekeeper Studio](https://supabase.com/docs/guides/database/beekeeper-studio)

Database replication[Overview](https://supabase.com/docs/guides/database/replication)

Replication

Manual replication

Extensions[Overview](https://supabase.com/docs/guides/database/extensions)
[HypoPG: Hypothetical indexes](https://supabase.com/docs/guides/database/extensions/hypopg)
[plv8 (deprecated)](https://supabase.com/docs/guides/database/extensions/plv8)
[http: RESTful Client](https://supabase.com/docs/guides/database/extensions/http)
[index\_advisor: Query optimization](https://supabase.com/docs/guides/database/extensions/index_advisor)
[PGAudit: Postgres Auditing](https://supabase.com/docs/guides/database/extensions/pgaudit)
[pgjwt (deprecated)](https://supabase.com/docs/guides/database/extensions/pgjwt)
[PGroonga: Multilingual Full Text Search](https://supabase.com/docs/guides/database/extensions/pgroonga)
[pgRouting: Geospatial Routing](https://supabase.com/docs/guides/database/extensions/pgrouting)
[pg\_cron: Schedule Recurring Jobs](https://supabase.com/docs/guides/database/extensions/pg_cron)
[pg\_graphql: GraphQL Support](https://supabase.com/docs/guides/database/extensions/pg_graphql)
[pg\_hashids: Short UIDs](https://supabase.com/docs/guides/database/extensions/pg_hashids)
[pg\_jsonschema: JSON Schema Validation](https://supabase.com/docs/guides/database/extensions/pg_jsonschema)
[pg\_net: Async Networking](https://supabase.com/docs/guides/database/extensions/pg_net)
[pg\_plan\_filter: Restrict Total Cost](https://supabase.com/docs/guides/database/extensions/pg_plan_filter)
[postgres\_fdw: query data from an external Postgres server](https://supabase.com/docs/guides/database/extensions/postgres_fdw)
[pgvector: Embeddings and vector similarity](https://supabase.com/docs/guides/database/extensions/pgvector)
[pg\_stat\_statements: SQL Planning and Execution Statistics](https://supabase.com/docs/guides/database/extensions/pg_stat_statements)
[pg\_repack: Storage Optimization](https://supabase.com/docs/guides/database/extensions/pg_repack)
[PostGIS: Geo queries](https://supabase.com/docs/guides/database/extensions/postgis)
[pgmq: Queues](https://supabase.com/docs/guides/database/extensions/pgmq)
[pgsodium (pending deprecation): Encryption Features](https://supabase.com/docs/guides/database/extensions/pgsodium)
[pgTAP: Unit Testing](https://supabase.com/docs/guides/database/extensions/pgtap)
[plpgsql\_check: PL/pgSQL Linter](https://supabase.com/docs/guides/database/extensions/plpgsql_check)
[timescaledb (deprecated)](https://supabase.com/docs/guides/database/extensions/timescaledb)
[uuid-ossp: Unique Identifiers](https://supabase.com/docs/guides/database/extensions/uuid-ossp)
[RUM: inverted index for full-text search](https://supabase.com/docs/guides/database/extensions/rum)

Foreign Data Wrappers[Overview](https://supabase.com/docs/guides/database/extensions/wrappers/overview)
[Connecting to Auth0](https://supabase.com/docs/guides/database/extensions/wrappers/auth0)
[Connecting to Airtable](https://supabase.com/docs/guides/database/extensions/wrappers/airtable)
[Connecting to AWS Cognito](https://supabase.com/docs/guides/database/extensions/wrappers/cognito)
[Connecting to AWS S3](https://supabase.com/docs/guides/database/extensions/wrappers/s3)
[Connecting to AWS S3 Vectors](https://supabase.com/docs/guides/database/extensions/wrappers/s3_vectors)
[Connecting to BigQuery](https://supabase.com/docs/guides/database/extensions/wrappers/bigquery)
[Connecting to Clerk](https://supabase.com/docs/guides/database/extensions/wrappers/clerk)
[Connecting to ClickHouse](https://supabase.com/docs/guides/database/extensions/wrappers/clickhouse)
[Connecting to DuckDB](https://supabase.com/docs/guides/database/extensions/wrappers/duckdb)
[Connecting to Firebase](https://supabase.com/docs/guides/database/extensions/wrappers/firebase)
[Connecting to Iceberg](https://supabase.com/docs/guides/database/extensions/wrappers/iceberg)
[Connecting to Logflare](https://supabase.com/docs/guides/database/extensions/wrappers/logflare)
[Connecting to MSSQL](https://supabase.com/docs/guides/database/extensions/wrappers/mssql)
[Connecting to Notion](https://supabase.com/docs/guides/database/extensions/wrappers/notion)
[Connecting to Paddle](https://supabase.com/docs/guides/database/extensions/wrappers/paddle)
[Connecting to Redis](https://supabase.com/docs/guides/database/extensions/wrappers/redis)
[Connecting to Snowflake](https://supabase.com/docs/guides/database/extensions/wrappers/snowflake)
[Connecting to Stripe](https://supabase.com/docs/guides/database/extensions/wrappers/stripe)

Examples[Drop All Tables in Schema](https://supabase.com/docs/guides/database/postgres/dropping-all-tables-in-schema)
[Select First Row per Group](https://supabase.com/docs/guides/database/postgres/first-row-in-group)
[Print PostgreSQL Version](https://supabase.com/docs/guides/database/postgres/which-version-of-postgres)
[Replicating from Supabase to External Postgres](https://supabase.com/docs/guides/database/postgres/setup-replication-external)

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

Database

1. [Database](https://supabase.com/docs/guides/database/overview)
3. Debugging
5. [Timeouts](https://supabase.com/docs/guides/database/postgres/timeouts)

# Timeouts

## Extend database timeouts to execute longer transactions

* * *

Dashboard and [Client](https://supabase.com/docs/guides/api/rest/client-libs) queries have a max-configurable timeout of 60 seconds. For longer transactions, use [Supavisor or direct connections](https://supabase.com/docs/guides/database/connecting-to-postgres#quick-summary).

## Change Postgres timeout [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#change-postgres-timeout)

You can change the Postgres timeout at the:

1. [Session level](https://supabase.com/docs/guides/database/postgres/timeouts#session-level)
2. [Function level](https://supabase.com/docs/guides/database/postgres/timeouts#function-level)
3. [Global level](https://supabase.com/docs/guides/database/postgres/timeouts#global-level)
4. [Role level](https://supabase.com/docs/guides/database/postgres/timeouts#role-level)

### Session level [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#session-level)

Session level settings persist only for the duration of the connection.

Set the session timeout by running:

```
1

set statement_timeout = '10min';
```

Because it applies to sessions only, it can only be used with connections through Supavisor in session mode (port 5432) or a direct connection. It cannot be used in the Dashboard, with the Supabase Client API, nor with Supavisor in Transaction mode (port 6543).

This is most often used for single, long running, administrative tasks, such as creating an HSNW index. Once the setting is implemented, you can view it by executing:

```
1

SHOW statement_timeout;
```

See the full guide on [changing session timeouts](https://github.com/orgs/supabase/discussions/21133).

### Function level [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#function-level)

This works with the Database REST API when called from the Supabase client libraries:

```
1
2
3
4
5
6

create or replace function myfunc()returns void as $$ select pg_sleep(3); -- simulating some long-running process$$language sqlset statement_timeout TO '4s'; -- set custom timeout
```

This is mostly for recurring functions that need a special exemption for runtimes.

### Role level [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#role-level)

This sets the timeout for a specific role.

The default role timeouts are:

- `anon`: 3s
- `authenticated`: 8s
- `service_role`: none (defaults to the `authenticator` role's 8s timeout if unset)
- `postgres`: none (capped by default global timeout to be 2min)

Run the following query to change a role's timeout:

```
1

alter role example_role set statement_timeout = '10min'; -- could also use seconds '10s'
```

If you are changing the timeout for the Supabase Client API calls, you will need to reload PostgREST to reflect the timeout changes by running the following script:

```
1

NOTIFY pgrst, 'reload config';
```

Unlike global settings, the result cannot be checked with `SHOW statement_timeout`. Instead, run:

```
1
2
3
4
5
6
7
8
9
10
11
12

select  rolname,  rolconfigfrom pg_roleswhere  rolname in (    'anon',    'authenticated',    'postgres',    'service_role'    -- ,<ANY CUSTOM ROLES>  );
```

### Global level [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#global-level)

This changes the statement timeout for all roles and sessions without an explicit timeout already set.

```
1

alter database postgres set statement_timeout TO '4s';
```

Check if your changes took effect:

```
1

show statement_timeout;
```

Although not necessary, if you are uncertain if a timeout has been applied, you can run a quick test:

```
1
2
3
4
5

create or replace function myfunc()returns void as $$  select pg_sleep(601); -- simulating some long-running process$$language sql;
```

## Identifying timeouts [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#identifying-timeouts)

The Supabase Dashboard contains tools to help you identify timed-out and long-running queries.

### Using the Logs Explorer [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#using-the-logs-explorer)

Go to the [Logs Explorer](https://supabase.com/dashboard/project/_/logs/explorer), and run the following query to identify timed-out events (`statement timeout`) and queries that successfully run for longer than 10 seconds (`duration`).

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

select  cast(postgres_logs.timestamp as datetime) as timestamp,  event_message,  parsed.error_severity,  parsed.user_name,  parsed.query,  parsed.detail,  parsed.hint,  parsed.sql_state_code,  parsed.backend_typefrom  postgres_logs  cross join unnest(metadata) as metadata  cross join unnest(metadata.parsed) as parsedwhere  regexp_contains(event_message, 'duration|statement timeout')  -- (OPTIONAL) MODIFY OR REMOVE  and parsed.user_name = 'authenticator' -- <--------CHANGEorder by timestamp desclimit 100;
```

### Using the Query Performance page [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#using-the-query-performance-page)

Go to the [Query Performance page](https://supabase.com/dashboard/project/_/advisors/query-performance?preset=slowest_execution) and filter by relevant role and query speeds. This only identifies slow-running but successful queries. Unlike the Log Explorer, it does not show you timed-out queries.

### Understanding roles in logs [\#](https://supabase.com/docs/guides/database/postgres/timeouts\#understanding-roles-in-logs)

Each API server uses a designated user for connecting to the database:

| Role | API/Tool |
| --- | --- |
| `supabase_admin` | Used by Realtime and for project configuration |
| `authenticator` | PostgREST |
| `supabase_auth_admin` | Auth |
| `supabase_storage_admin` | Storage |
| `supabase_replication_admin` | Synchronizes Read Replicas |
| `postgres` | Supabase Dashboard and External Tools (e.g., Prisma, SQLAlchemy, PSQL...) |
| Custom roles | External Tools (e.g., Prisma, SQLAlchemy, PSQL...) |

Filter by the `parsed.user_name` field to only retrieve logs made by specific users:

```
1
2
3
4
5

-- find events based on role/server... querywhere  -- find events from the relevant role  parsed.user_name = '<ROLE>'
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/timeouts.mdx)

### Is this helpful?

NoYes

### On this page

[Change Postgres timeout](https://supabase.com/docs/guides/database/postgres/timeouts#change-postgres-timeout) [Session level](https://supabase.com/docs/guides/database/postgres/timeouts#session-level) [Function level](https://supabase.com/docs/guides/database/postgres/timeouts#function-level) [Role level](https://supabase.com/docs/guides/database/postgres/timeouts#role-level) [Global level](https://supabase.com/docs/guides/database/postgres/timeouts#global-level) [Identifying timeouts](https://supabase.com/docs/guides/database/postgres/timeouts#identifying-timeouts) [Using the Logs Explorer](https://supabase.com/docs/guides/database/postgres/timeouts#using-the-logs-explorer) [Using the Query Performance page](https://supabase.com/docs/guides/database/postgres/timeouts#using-the-query-performance-page) [Understanding roles in logs](https://supabase.com/docs/guides/database/postgres/timeouts#understanding-roles-in-logs)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)