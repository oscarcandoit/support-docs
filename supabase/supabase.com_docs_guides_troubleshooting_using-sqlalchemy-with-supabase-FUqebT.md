---
url: "https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT"
title: "Supabase Docs | Troubleshooting | Using SQLAlchemy with Supabase"
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

# Using SQLAlchemy with Supabase

Last edited: 10/30/2025

* * *

## Deploying to auto-scaling servers: [\#](https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT\#deploying-to-auto-scaling-servers)

If you are deploying to:

- edge functions
- serverless functions
- horizontally auto-scaling deployments

It is recommended that you connect with the pooler in transaction mode (port 6543), which can be found on the dashboard by clicking [Connect](https://supabase.com/dashboard/project/_?showConnect=true&method=transaction).

```
1
2

# Example transaction mode string:postgres://[db-user].[project-ref]:[db-password]@aws-0-[aws-region].pooler.supabase.com:6543
```

When using transaction mode, you should use the [`NullPool` setting:](https://docs.sqlalchemy.org/en/20/core/pooling.html#switching-pool-implementations)

```
1
2
3

from sqlalchemy.pool import NullPoolcon = sqlalchemy.create_engine(url, client_encoding='utf8', poolclass=NullPool)
```

When relying on Supavisor, it's important to pick an adequate pool size. This guide can walk you through the process:

- [https://github.com/orgs/supabase/discussions/21566](https://github.com/orgs/supabase/discussions/21566)

## Deploying to stationary servers [\#](https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT\#deploying-to-stationary-servers)

For stationary servers, such as VMs and long-running containers, it is recommended to use your direct connection string, which can be found on the dashboard by clicking [Connect](https://supabase.com/dashboard/project/_?showConnect=true).

```
1
2

# Example DB string:postgresql://postgres:[PASSWORD]@db.[PROJECT REF].supabase.co:5432/postgres
```

The connection maps to an IPv6 address, and cannot operate in an IPv4 environment.

### Checking IPv6 support: [\#](https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT\#checking-ipv6-support)

The majority of services are IPv6 compatible. However, there are a few prominent services that only accept IPv4 connections:

- [Retool](https://retool.com/)
- [Vercel](https://vercel.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Render](https://render.com/)

If you're still unsure if your network supports IPv6, you can run this cURL command on your deployment server:

```
1

curl -6 https://ifconfig.co/ip
```

If the command returns an IPv6 address, the network is IPv6 compatible.

If your deployment environment is not IPv6 compatible, then consider:

- Using the Supavisor pooler in session (port 5432)
- Enabling the [IPv4 Add-On](https://supabase.com/dashboard/project/_/settings/addons) if you're on a pro or above plan

### Choosing an internal pool size [\#](https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT\#choosing-an-internal-pool-size)

**Key Pool Settings:**

- pool\_size: This sets the maximum number of permanent connections in the pool. SQLAlchemy will create connections as needed up to this limit.
max\_overflow: Allows creating additional connections beyond pool\_size for temporary bursts in demand. These temporary connections close after use.

```
1
2
3
4

# Example configurationsengine = create_engine(    "postgresql+psycopg2://me@localhost/mydb", pool_size=20, max_overflow=15)
```

As a rule of thumb, if you're using the Supabase Database REST Client, try to limit the connections used by your deployment to 40% of available connections. Otherwise, you can cautiously increase usage to around 80%. These percentages are flexible and depend on your application's usage and setup. Monitor connection usage to determine the optimal allocation without depriving other servers of necessary connections.

## How to monitor live connections [\#](https://supabase.com/docs/guides/troubleshooting/using-sqlalchemy-with-supabase-FUqebT\#how-to-monitor-live-connections)

Connection usage can be monitored with a Supabase Grafana Dashboard. It provides realtime visibility of over 200 database metrics, such as graphs of CPU, EBS, and active direct/pooler connections. It can be extremely useful for monitoring and debugging instances.

You can check our [GitHub repo](https://github.com/supabase/supabase-grafana) for setup instructions for local deployments or free cloud deployments on [Fly.io](http://fly.io/). For a complete explainer on connection monitoring, you can check out this [guide](https://github.com/orgs/supabase/discussions/27141)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor) [Self-hosting](https://supabase.com/docs/guides/troubleshooting?products=self-hosting) [Functions](https://supabase.com/docs/guides/troubleshooting?products=functions)

* * *

### Keywords

[sqlalchemy](https://supabase.com/docs/guides/troubleshooting?tags=sqlalchemy) [ipv6](https://supabase.com/docs/guides/troubleshooting?tags=ipv6) [pool](https://supabase.com/docs/guides/troubleshooting?tags=pool) [database](https://supabase.com/docs/guides/troubleshooting?tags=database) [connection](https://supabase.com/docs/guides/troubleshooting?tags=connection)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/27071)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)