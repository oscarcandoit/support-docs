---
url: "https://supabase.com/docs/guides/storage/management/copy-move-objects"
title: "Copy Objects | Supabase Docs"
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
7. [Copy / Move Objects](https://supabase.com/docs/guides/storage/management/copy-move-objects)

# Copy Objects

## Learn how to copy and move objects

* * *

## Copy objects [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#copy-objects)

You can copy objects between buckets or within the same bucket. Currently only objects up to 5 GB can be copied using the API.

When making a copy of an object, the owner of the new object will be the user who initiated the copy operation.

### Copying objects within the same bucket [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#copying-objects-within-the-same-bucket)

To copy an object within the same bucket, use the `copy` method.

```
1

await supabase.storage.from('avatars').copy('public/avatar1.png', 'private/avatar2.png')
```

### Copying objects across buckets [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#copying-objects-across-buckets)

To copy an object across buckets, use the `copy` method and specify the destination bucket.

```
1
2
3

await supabase.storage.from('avatars').copy('public/avatar1.png', 'private/avatar2.png', {  destinationBucket: 'avatars2',})
```

## Move objects [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#move-objects)

You can move objects between buckets or within the same bucket. Currently only objects up to 5GB can be moved using the API.

When moving an object, the owner of the new object will be the user who initiated the move operation. Once the object is moved, the original object will no longer exist.

### Moving objects within the same bucket [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#moving-objects-within-the-same-bucket)

To move an object within the same bucket, you can use the `move` method.

```
1
2
3

const { data, error } = await supabase.storage  .from('avatars')  .move('public/avatar1.png', 'private/avatar2.png')
```

### Moving objects across buckets [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#moving-objects-across-buckets)

To move an object across buckets, use the `move` method and specify the destination bucket.

```
1
2
3

await supabase.storage.from('avatars').move('public/avatar1.png', 'private/avatar2.png', {  destinationBucket: 'avatars2',})
```

## Permissions [\#](https://supabase.com/docs/guides/storage/management/copy-move-objects\#permissions)

For a user to move and copy objects, they need `select` permission on the source object and `insert` permission on the destination object. For example:

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

create policy "User can select their own objects (in any buckets)"on storage.objectsfor selectto authenticatedusing (    owner_id = (select auth.uid()));create policy "User can upload in their own folders (in any buckets)"on storage.objectsfor insertto authenticatedwith check (    (storage.folder(name))[1] = (select auth.uid()));
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/management/copy-move-objects.mdx)

### Is this helpful?

NoYes

### On this page

[Copy objects](https://supabase.com/docs/guides/storage/management/copy-move-objects#copy-objects) [Copying objects within the same bucket](https://supabase.com/docs/guides/storage/management/copy-move-objects#copying-objects-within-the-same-bucket) [Copying objects across buckets](https://supabase.com/docs/guides/storage/management/copy-move-objects#copying-objects-across-buckets) [Move objects](https://supabase.com/docs/guides/storage/management/copy-move-objects#move-objects) [Moving objects within the same bucket](https://supabase.com/docs/guides/storage/management/copy-move-objects#moving-objects-within-the-same-bucket) [Moving objects across buckets](https://supabase.com/docs/guides/storage/management/copy-move-objects#moving-objects-across-buckets) [Permissions](https://supabase.com/docs/guides/storage/management/copy-move-objects#permissions)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)