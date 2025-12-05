---
url: "https://supabase.com/docs/guides/storage/serving/bandwidth"
title: "Bandwidth & Storage Egress | Supabase Docs"
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

[Serving assets](https://supabase.com/docs/guides/storage/serving/downloads)
[Image Transformations](https://supabase.com/docs/guides/storage/serving/image-transformations)
[Bandwidth & Storage Egress](https://supabase.com/docs/guides/storage/serving/bandwidth)

Management

S3

CDN

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
5. [Serving](https://supabase.com/docs/guides/storage/serving)
7. [Bandwidth & Storage Egress](https://supabase.com/docs/guides/storage/serving/bandwidth)

# Bandwidth & Storage Egress

## Bandwidth & Storage Egress

* * *

## Bandwidth & Storage egress [\#](https://supabase.com/docs/guides/storage/serving/bandwidth\#bandwidth--storage-egress)

Free Plan Organizations in Supabase have a limit of 10 GB of bandwidth (5 GB cached + 5 GB uncached). This limit is calculated by the sum of all the data transferred from the Supabase servers to the client. This includes all the data transferred from the database, storage, and functions.

### Checking Storage egress requests in Logs Explorer [\#](https://supabase.com/docs/guides/storage/serving/bandwidth\#checking-storage-egress-requests-in-logs-explorer)

We have a template query that you can use to get the number of requests for each object in [Logs Explorer](https://supabase.com/dashboard/project/_/logs/explorer/templates).

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

select  request.method as http_verb,  request.path as filepath,  (responseHeaders.cf_cache_status = 'HIT') as cached,  count(*) as num_requestsfrom  edge_logs  cross join unnest(metadata) as metadata  cross join unnest(metadata.request) as request  cross join unnest(metadata.response) as response  cross join unnest(response.headers) as responseHeaderswhere  (path like '%storage/v1/object/%' or path like '%storage/v1/render/%')  and request.method = 'GET'group by 1, 2, 3order by num_requests desclimit 100;
```

Example of the output:

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

[  {    "filepath": "/storage/v1/object/sign/large%20bucket/20230902_200037.gif",    "http_verb": "GET",    "cached": true,    "num_requests": 100  },  {    "filepath": "/storage/v1/object/public/demob/Sports/volleyball.png",    "http_verb": "GET",    "cached": false,    "num_requests": 168  }]
```

### Calculating egress [\#](https://supabase.com/docs/guides/storage/serving/bandwidth\#calculating-egress)

If you already know the size of those files, you can calculate the egress by multiplying the number of requests by the size of the file.
You can also get the size of the file with the following cURL:

```
1

curl -s -w "%{size_download}\n" -o /dev/null "https://my_project.supabase.co/storage/v1/object/large%20bucket/20230902_200037.gif"
```

This will return the size of the file in bytes.
For this example, let's say that `20230902_200037.gif` has a file size of 3 megabytes and `volleyball.png` has a file size of 570 kilobytes.

Now, we have to sum all the egress for all the files to get the total egress:

```
1
2
3

100 * 3MB = 300MB168 * 570KB = 95.76MBTotal Egress = 395.76MB
```

You can see that these values can get quite large, so it's important to keep track of the egress and optimize the files.

### Optimizing egress [\#](https://supabase.com/docs/guides/storage/serving/bandwidth\#optimizing-egress)

See our [scaling tips for egress](https://supabase.com/docs/guides/storage/production/scaling#egress).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/serving/bandwidth.mdx)

### Is this helpful?

NoYes

### On this page

[Bandwidth & Storage egress](https://supabase.com/docs/guides/storage/serving/bandwidth#bandwidth--storage-egress) [Checking Storage egress requests in Logs Explorer](https://supabase.com/docs/guides/storage/serving/bandwidth#checking-storage-egress-requests-in-logs-explorer) [Calculating egress](https://supabase.com/docs/guides/storage/serving/bandwidth#calculating-egress) [Optimizing egress](https://supabase.com/docs/guides/storage/serving/bandwidth#optimizing-egress)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)