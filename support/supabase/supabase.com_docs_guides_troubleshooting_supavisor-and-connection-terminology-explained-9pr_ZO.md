---
url: "https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO"
title: "Supabase Docs | Troubleshooting | Supavisor and Connection Terminology Explained"
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

# Supavisor and Connection Terminology Explained

Last edited: 2/4/2025

* * *

I'll be the first to admit that the official naming conventions in the Postgres community can be a bit confusing, so here's a basic rundown. It's a bit long, so feel free to just jump to the portion relevant to you:

## Clients: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#clients)

This is any server trying to connect to the pooler or database. This can be confusing because the term client in other scenarios also means users connecting through a frontend.

## Client connections: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#client-connections)

A single application server can create multiple connections. A client connection represents any connection established by a server to the pooler.

## Direct/database connections: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#directdatabase-connections)

This represents a direct connection to the database.

Your application servers can directly connect using the DB connection string:

```
1

postgresql://postgres:[PASSWORD]@db.[PROJECT REF].supabase.co:5432/postgres
```

When connecting through the pooler, it will establish db/direct connections on behalf of clients. It then forwards/triages requests from client connections to db/direct connections.

## Max\_connections: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#maxconnections)

Configured with the max\_connections system variable, it represents how many direct/database connections Postgres will tolerate. You can view your instance's settings by running this SQL:

```
1

SHOW max_connections;
```

To know more about configuring this value, check out [monitoring connections troubleshooting guide.](https://github.com/orgs/supabase/discussions/27197)

## Pool size: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#pool-size)

The number of direct connections Supavisor is permitted to request from the database to manage each [database/role/mode combination](https://github.com/orgs/supabase/discussions/21566).

## Transaction mode: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#transaction-mode)

Transaction mode gives the pooler permission to share direct connections among multiple clients. It is used when the pooler connection string is listening on port 6543:

```
1
2

#example transaction mode stringpostgres://postgres.obfwhevidiamwdwki:[YPASSWORD]@aws-0-ca-central-1.pooler.supabase.com:**6543**/postgres
```

Postgres connections use the Postgres Wire Protocol (PWP) rather than HTTP. PWP acts like a WebSocket: once a connection is made, it stays open and active until the client disconnects.

If too many connections are held by idle or greedy clients, other application servers won’t be able to connect to your database. Transaction mode helps avoid this problem by allowing clients to access the database connections only when they are running a query. This reduces the chances of hitting the maximum direct connection limit.

## Session mode: [\#](https://supabase.com/docs/guides/troubleshooting/supavisor-and-connection-terminology-explained-9pr_ZO\#session-mode)

session mode restricts the pooler, forcing it to grant an underlying direct connection exclusively to a single client connection.

```
1
2

#example session mode string | uses port 5432postgres://postgres.obfwhevidiamwdwki:[YPASSWORD]@aws-0-ca-central-1.pooler.supabase.com:**5432**/postgres
```

Session mode behaves nearly identically to a standard direct connection, which makes one wonder: what is the point?

One benefit is that if you need long-lasting connections in an IPv4-only environment and do not want to enable the IPv4 Add-On, session mode resolves this issue.

Another clear benefit is queueing. If all direct connections were taken, without the pooler, the n+1 client that tried to connect would be rejected. It would have to constantly poll the database to see if a slot became available. The pooler in session mode will queue a client for up to a minute, so it doesn't have to constantly poll while waiting for a slot.

## Metadata

* * *

### Products

[Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor) [Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[connections](https://supabase.com/docs/guides/troubleshooting?tags=connections) [pooler](https://supabase.com/docs/guides/troubleshooting?tags=pooler) [transaction](https://supabase.com/docs/guides/troubleshooting?tags=transaction) [session](https://supabase.com/docs/guides/troubleshooting?tags=session) [pgbouncer](https://supabase.com/docs/guides/troubleshooting?tags=pgbouncer)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/27388)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)