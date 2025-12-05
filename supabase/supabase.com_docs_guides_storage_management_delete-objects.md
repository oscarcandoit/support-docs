---
url: "https://supabase.com/docs/guides/storage/management/delete-objects"
title: "Delete Objects | Supabase Docs"
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

[Copy / Move Objects](https://supabase.com/docs/guides/storage/management/copy-move-objects)
[Delete Objects](https://supabase.com/docs/guides/storage/management/delete-objects)

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
5. [Management](https://supabase.com/docs/guides/storage/management)
7. [Delete Objects](https://supabase.com/docs/guides/storage/management/delete-objects)

# Delete Objects

## Learn about deleting objects

* * *

When you delete one or more objects from a bucket, the files are permanently removed and not recoverable. You can delete a single object or multiple objects at once.

Deleting objects should always be done via the **Storage API** and NOT via a **SQL query**. Deleting objects via a SQL query will not remove the object from the bucket and will result in the object being orphaned.

## Delete objects [\#](https://supabase.com/docs/guides/storage/management/delete-objects\#delete-objects)

To delete one or more objects, use the `remove` method.

```
1

await supabase.storage.from('bucket').remove(['object-path-2', 'folder/avatar2.png'])
```

When deleting objects, there is a limit of 1000 objects at a time using the `remove` method.

## RLS [\#](https://supabase.com/docs/guides/storage/management/delete-objects\#rls)

To delete an object, the user must have the `delete` permission on the object. For example:

```
1
2
3
4
5
6
7

create policy "User can delete their own objects"on storage.objectsfor deleteTO authenticatedUSING (    owner = (select auth.uid()::text));
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/management/delete-objects.mdx)

### Is this helpful?

NoYes

### On this page

[Delete objects](https://supabase.com/docs/guides/storage/management/delete-objects#delete-objects) [RLS](https://supabase.com/docs/guides/storage/management/delete-objects#rls)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)