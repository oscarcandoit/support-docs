---
url: "https://supabase.com/docs/guides/troubleshooting/disabling-prepared-statements-qL8lEL"
title: "Supabase Docs | Troubleshooting | Disabling Prepared statements"
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

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Disabling Prepared statements

Last edited: 2/4/2025

* * *

### It is important to note that although the direct connections and Supavisor in session mode support prepared statements, Supavisor in transaction mode does not. [\#](https://supabase.com/docs/guides/troubleshooting/disabling-prepared-statements-qL8lEL\#it-is-important-to-note-that-although-the-direct-connections-and-supavisor-in-session-mode-support-prepared-statements-supavisor-in-transaction-mode-does-not)

## How to disable prepared statements for Supavisor in transaction mode [\#](https://supabase.com/docs/guides/troubleshooting/disabling-prepared-statements-qL8lEL\#how-to-disable-prepared-statements-for-supavisor-in-transaction-mode)

Each ORM or library configures prepared statements differently. Here are settings for some common ones. If you don't see yours, make a comment

# Prisma:

add ?pgbouncer=true to end of connection string:

```
1

postgres://[db-user].[project-ref]:[db-password]@aws-0-[aws-region].pooler.supabase.com:6543/[db-name]?pgbouncer=true
```

# Drizzle:

Add a prepared false flag to the client:

```
1

export const client = postgres(connectionString, { prepare: false })
```

# Node Postgres

[Just omit the "name" value in a query definition](https://node-postgres.com/features/queries#prepared-statements):

```
1
2
3
4
5

const query = {  name: 'fetch-user', // <--------- DO NOT INCLUDE  text: 'SELECT * FROM user WHERE id = $1',  values: [1],}
```

# Psycopg

set the [prepare\_threshold](https://www.psycopg.org/psycopg3/docs/api/connections.html#psycopg.Connection.prepare_threshold) to `None`.

# asyncpg

Follow the recommendation in the [asyncpg docs](https://magicstack.github.io/asyncpg/current/faq.html#why-am-i-getting-prepared-statement-errors)

> disable automatic use of prepared statements by passing `statement_cache_size=0` to [asyncpg.connect()](https://magicstack.github.io/asyncpg/current/api/index.html#asyncpg.connection.connect) and [asyncpg.create\_pool()](https://magicstack.github.io/asyncpg/current/api/index.html#asyncpg.pool.create_pool) (and, obviously, avoid the use of [Connection.prepare()](https://magicstack.github.io/asyncpg/current/api/index.html#asyncpg.connection.Connection.prepare));

# Rust's Deadpool or `tokio-postgres`:

- Check [GitHub Discussion](https://github.com/bikeshedder/deadpool/issues/340#event-13642472475)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor)

* * *

### Keywords

[prepared](https://supabase.com/docs/guides/troubleshooting?tags=prepared) [statements](https://supabase.com/docs/guides/troubleshooting?tags=statements) [transaction](https://supabase.com/docs/guides/troubleshooting?tags=transaction) [mode](https://supabase.com/docs/guides/troubleshooting?tags=mode) [disable](https://supabase.com/docs/guides/troubleshooting?tags=disable)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/28239)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)