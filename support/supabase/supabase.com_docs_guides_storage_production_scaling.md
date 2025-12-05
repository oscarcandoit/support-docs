---
url: "https://supabase.com/docs/guides/storage/production/scaling"
title: "Storage Optimizations | Supabase Docs"
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

Schema

Going to production

[Scaling](https://supabase.com/docs/guides/storage/production/scaling)

[Pricing](https://supabase.com/docs/guides/storage/pricing)

Analytics Buckets[Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)
[Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)
[Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/etl)
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
5. [Going to production](https://supabase.com/docs/guides/storage/production)
7. [Scaling](https://supabase.com/docs/guides/storage/production/scaling)

# Storage Optimizations

## Scaling Storage

* * *

Here are some optimizations that you can consider to improve performance and reduce costs as you start scaling Storage.

## Egress [\#](https://supabase.com/docs/guides/storage/production/scaling\#egress)

If your project has high egress, these optimizations can help reducing it.

#### Resize images [\#](https://supabase.com/docs/guides/storage/production/scaling\#resize-images)

Images typically make up most of your egress. By keeping them as small as possible, you can cut down on egress and boost your application's performance. You can take advantage of our [Image Transformation](https://supabase.com/docs/guides/storage/serving/image-transformations) service to optimize any image on the fly.

#### Set a high cache-control value [\#](https://supabase.com/docs/guides/storage/production/scaling\#set-a-high-cache-control-value)

Using the browser cache can effectively lower your egress since the asset remains stored in the user's browser after the initial download. Setting a high `cache-control` value ensures the asset stays in the user's browser for an extended period, decreasing the need to download it from the server repeatedly. Read more [here](https://supabase.com/docs/guides/storage/cdn/smart-cdn#cache-duration)

#### Limit the upload size [\#](https://supabase.com/docs/guides/storage/production/scaling\#limit-the-upload-size)

You have the option to set a maximum upload size for your bucket. Doing this can prevent users from uploading and then downloading excessively large files. You can control the maximum file size by configuring this option at the [bucket level](https://supabase.com/docs/guides/storage/buckets/creating-buckets).

#### Smart CDN [\#](https://supabase.com/docs/guides/storage/production/scaling\#smart-cdn)

By leveraging our [Smart CDN](https://supabase.com/docs/guides/storage/cdn/smart-cdn), you can achieve a higher cache hit rate and therefore lower your egress cached, as we charge less for cached egress (see [egress pricing](https://supabase.com/docs/guides/platform/manage-your-usage/egress#pricing)).

## Optimize listing objects [\#](https://supabase.com/docs/guides/storage/production/scaling\#optimize-listing-objects)

Once you have a substantial number of objects, you might observe that the `supabase.storage.list()` method starts to slow down. This occurs because the endpoint is quite generic and attempts to retrieve both folders and objects in a single query. While this approach is very useful for building features like the Storage viewer on the Supabase dashboard, it can impact performance with a large number of objects.

If your application doesn't need the entire hierarchy computed you can speed up drastically the query execution for listing your objects by creating a Postgres function as following:

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
21
22
23
24
25
26
27
28
29

create or replace function list_objects(    bucketid text,    prefix text,    limits int default 100,    offsets int default 0) returns table (    name text,    id uuid,    updated_at timestamptz,    created_at timestamptz,    last_accessed_at timestamptz,    metadata jsonb) as $$begin    return query SELECT        objects.name,        objects.id,        objects.updated_at,        objects.created_at,        objects.last_accessed_at,        objects.metadata    FROM storage.objects    WHERE objects.name like prefix || '%'    AND bucket_id = bucketid    ORDER BY name ASC    LIMIT limits    OFFSET offsets;end;$$ language plpgsql stable;
```

You can then use the your Postgres function as following:

Using SQL:

```
1

select * from list_objects('bucket_id', '', 100, 0);
```

Using the SDK:

```
1
2
3
4
5
6

const { data, error } = await supabase.rpc('list_objects', {  bucketid: 'yourbucket',  prefix: '',  limit: 100,  offset: 0,})
```

## Optimizing RLS [\#](https://supabase.com/docs/guides/storage/production/scaling\#optimizing-rls)

When creating RLS policies against the storage tables you can add indexes to the interested columns to speed up the lookup

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/production/scaling.mdx)

### Is this helpful?

NoYes

### On this page

[Egress](https://supabase.com/docs/guides/storage/production/scaling#egress) [Optimize listing objects](https://supabase.com/docs/guides/storage/production/scaling#optimize-listing-objects) [Optimizing RLS](https://supabase.com/docs/guides/storage/production/scaling#optimizing-rls)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)