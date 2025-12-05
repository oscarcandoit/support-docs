---
url: "https://supabase.com/docs/guides/storage/cdn/metrics"
title: "Cache Metrics | Supabase Docs"
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

[Fundamentals](https://supabase.com/docs/guides/storage/cdn/fundamentals)
[Smart CDN](https://supabase.com/docs/guides/storage/cdn/smart-cdn)
[Metrics](https://supabase.com/docs/guides/storage/cdn/metrics)

Debugging

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
5. [CDN](https://supabase.com/docs/guides/storage/cdn)
7. [Metrics](https://supabase.com/docs/guides/storage/cdn/metrics)

# Cache Metrics

* * *

Cache hits can be determined via the `metadata.response.headers.cf_cache_status` key in our [Logs Explorer](https://supabase.com/docs/guides/platform/logs#logs-explorer). Any value that corresponds to either `HIT`, `STALE`, `REVALIDATED`, or `UPDATING` is categorized as a cache hit.
The following example query will show the top cache misses from the `edge_logs`:

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

select  r.path as path,  r.search as search,  count(id) as countfrom  edge_logs as f  cross join unnest(f.metadata) as m  cross join unnest(m.request) as r  cross join unnest(m.response) as res  cross join unnest(res.headers) as hwhere  starts_with(r.path, '/storage/v1/object')  and r.method = 'GET'  and h.cf_cache_status in ('MISS', 'NONE/UNKNOWN', 'EXPIRED', 'BYPASS', 'DYNAMIC')group by path, searchorder by count desclimit 50;
```

Try out [this query](https://supabase.com/dashboard/project/_/logs/explorer?q=%0Aselect%0A++r.path+as+path%2C%0A++r.search+as+search%2C%0A++count%28id%29+as+count%0Afrom%0A++edge_logs+as+f%0A++cross+join+unnest%28f.metadata%29+as+m%0A++cross+join+unnest%28m.request%29+as+r%0A++cross+join+unnest%28m.response%29+as+res%0A++cross+join+unnest%28res.headers%29+as+h%0Awhere%0A++starts_with%28r.path%2C+%27%2Fstorage%2Fv1%2Fobject%27%29%0A++and+r.method+%3D+%27GET%27%0A++and+h.cf_cache_status+in+%28%27MISS%27%2C+%27NONE%2FUNKNOWN%27%2C+%27EXPIRED%27%2C+%27BYPASS%27%2C+%27DYNAMIC%27%29%0Agroup+by+path%2C+search%0Aorder+by+count+desc%0Alimit+50%3B) in the Logs Explorer.

Your cache hit ratio over time can then be determined using the following query:

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

select  timestamp_trunc(timestamp, hour) as timestamp,  countif(h.cf_cache_status in ('HIT', 'STALE', 'REVALIDATED', 'UPDATING')) / count(f.id) as ratiofrom  edge_logs as f  cross join unnest(f.metadata) as m  cross join unnest(m.request) as r  cross join unnest(m.response) as res  cross join unnest(res.headers) as hwhere starts_with(r.path, '/storage/v1/object') and r.method = 'GET'group by timestamporder by timestamp desc;
```

Try out [this query](https://supabase.com/dashboard/project/_/logs/explorer?q=%0Aselect%0A++timestamp_trunc%28timestamp%2C+hour%29+as+timestamp%2C%0A++countif%28h.cf_cache_status+in+%28%27HIT%27%2C+%27STALE%27%2C+%27REVALIDATED%27%2C+%27UPDATING%27%29%29+%2F+count%28f.id%29+as+ratio%0Afrom%0A++edge_logs+as+f%0A++cross+join+unnest%28f.metadata%29+as+m%0A++cross+join+unnest%28m.request%29+as+r%0A++cross+join+unnest%28m.response%29+as+res%0A++cross+join+unnest%28res.headers%29+as+h%0Awhere+starts_with%28r.path%2C+%27%2Fstorage%2Fv1%2Fobject%27%29+and+r.method+%3D+%27GET%27%0Agroup+by+timestamp%0Aorder+by+timestamp+desc%3B) in the Logs Explorer.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/cdn/metrics.mdx)

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)