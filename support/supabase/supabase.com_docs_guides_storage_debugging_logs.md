---
url: "https://supabase.com/docs/guides/storage/debugging/logs"
title: "Logs | Supabase Docs"
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

[Storage](https://supabase.com/docs/guides/storage)

[Overview](https://supabase.com/docs/guides/storage)

File Buckets[Quickstart](https://supabase.com/docs/guides/storage/quickstart)
[Fundamentals](https://supabase.com/docs/guides/storage/buckets/fundamentals)
[Creating Buckets](https://supabase.com/docs/guides/storage/buckets/creating-buckets)

Security

Uploads

Serving

Management

S3

CDN

Debugging

[Logs](https://supabase.com/docs/guides/storage/debugging/logs)
[Error Codes](https://supabase.com/docs/guides/storage/debugging/error-codes)
[Troubleshooting](https://supabase.com/docs/guides/storage/troubleshooting)

Schema

Going to production

[Pricing](https://supabase.com/docs/guides/storage/pricing)

Analytics Buckets[Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)
[Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)
[Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/replication)
[Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

Examples

[Limits](https://supabase.com/docs/guides/storage/analytics/limits)
[Pricing](https://supabase.com/docs/guides/storage/analytics/pricing)

Vector Buckets[Introduction](https://supabase.com/docs/guides/storage/vector/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets)
[Working with Indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
[Storing Vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)
[Querying Vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors)
[Limits](https://supabase.com/docs/guides/storage/vector/limits)

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

Storage

1. [Storage](https://supabase.com/docs/guides/storage)
3. More
5. [Debugging](https://supabase.com/docs/guides/storage/debugging)
7. [Logs](https://supabase.com/docs/guides/storage/debugging/logs)

# Logs

* * *

Accessing the [Storage Logs](https://supabase.com/dashboard/project/__/logs/explorer?q=select+id%2C+storage_logs.timestamp%2C+event_message+from+storage_logs%0A++%0A++order+by+timestamp+desc%0A++limit+100%0A++) allows you to examine all incoming request logs to your Storage service. You can also filter logs and delve into specific aspects of your requests.

### Common log queries [\#](https://supabase.com/docs/guides/storage/debugging/logs\#common-log-queries)

#### Filter by status 5XX error [\#](https://supabase.com/docs/guides/storage/debugging/logs\#filter-by-status-5xx-error)

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

select  id,  storage_logs.timestamp,  event_message,  r.statusCode,  e.message as errorMessage,  e.raw as rawErrorfrom  storage_logs  cross join unnest(metadata) as m  cross join unnest(m.res) as r  cross join unnest(m.error) as ewhere r.statusCode >= 500order by timestamp desclimit 100;
```

#### Filter by status 4XX error [\#](https://supabase.com/docs/guides/storage/debugging/logs\#filter-by-status-4xx-error)

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

select  id,  storage_logs.timestamp,  event_message,  r.statusCode,  e.message as errorMessage,  e.raw as rawErrorfrom  storage_logs  cross join unnest(metadata) as m  cross join unnest(m.res) as r  cross join unnest(m.error) as ewhere r.statusCode >= 400 and r.statusCode < 500order by timestamp desclimit 100;
```

#### Filter by method [\#](https://supabase.com/docs/guides/storage/debugging/logs\#filter-by-method)

```
1
2
3
4
5
6
7
8

select id, storage_logs.timestamp, event_message, r.methodfrom  storage_logs  cross join unnest(metadata) as m  cross join unnest(m.req) as rwhere r.method in ("POST")order by timestamp desclimit 100;
```

#### Filter by IP address [\#](https://supabase.com/docs/guides/storage/debugging/logs\#filter-by-ip-address)

```
1
2
3
4
5
6
7
8

select id, storage_logs.timestamp, event_message, r.remoteAddressfrom  storage_logs  cross join unnest(metadata) as m  cross join unnest(m.req) as rwhere r.remoteAddress in ("IP_ADDRESS")order by timestamp desclimit 100;
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/debugging/logs.mdx)

### Is this helpful?

NoYes

### On this page

[Common log queries](https://supabase.com/docs/guides/storage/debugging/logs#common-log-queries)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)