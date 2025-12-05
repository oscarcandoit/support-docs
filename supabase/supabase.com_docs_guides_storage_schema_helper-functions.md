---
url: "https://supabase.com/docs/guides/storage/schema/helper-functions"
title: "Storage Helper Functions | Supabase Docs"
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

[Database Design](https://supabase.com/docs/guides/storage/schema/design)
[Helper Functions](https://supabase.com/docs/guides/storage/schema/helper-functions)
[Custom Roles](https://supabase.com/docs/guides/storage/schema/custom-roles)

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
5. [Schema](https://supabase.com/docs/guides/storage/schema)
7. [Helper Functions](https://supabase.com/docs/guides/storage/schema/helper-functions)

# Storage Helper Functions

## Learn the storage schema

* * *

Supabase Storage provides SQL helper functions which you can use to write RLS policies.

### `storage.filename()` [\#](https://supabase.com/docs/guides/storage/schema/helper-functions\#storagefilename)

Returns the name of a file. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `'avatar.png'`

**Usage**

This example demonstrates how you would allow any user to download a file called `favicon.ico`:

```
1
2
3
4
5
6
7

create policy "Allow public downloads"on storage.objectsfor selectto publicusing (  storage.filename(name) = 'favicon.ico');
```

### `storage.foldername()` [\#](https://supabase.com/docs/guides/storage/schema/helper-functions\#storagefoldername)

Returns an array path, with all of the subfolders that a file belongs to. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `[ 'public', 'subfolder' ]`

**Usage**

This example demonstrates how you would allow authenticated users to upload files to a folder called `private`:

```
1
2
3
4
5
6
7

create policy "Allow authenticated uploads"on storage.objectsfor insertto authenticatedwith check (  (storage.foldername(name))[1] = 'private');
```

### `storage.extension()` [\#](https://supabase.com/docs/guides/storage/schema/helper-functions\#storageextension)

Returns the extension of a file. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `'png'`

**Usage**

This example demonstrates how you would allow restrict uploads to only PNG files inside a bucket called `cats`:

```
1
2
3
4
5
6
7

create policy "Only allow PNG uploads"on storage.objectsfor insertto authenticatedwith check (  bucket_id = 'cats' and storage.extension(name) = 'png');
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/schema/helper-functions.mdx)

### Is this helpful?

NoYes

### On this page

[storage.filename()](https://supabase.com/docs/guides/storage/schema/helper-functions#storagefilename) [storage.foldername()](https://supabase.com/docs/guides/storage/schema/helper-functions#storagefoldername) [storage.extension()](https://supabase.com/docs/guides/storage/schema/helper-functions#storageextension)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)