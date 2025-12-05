---
url: "https://supabase.com/docs/guides/storage/security/access-control"
title: "Storage Access Control | Supabase Docs"
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

[Ownership](https://supabase.com/docs/guides/storage/security/ownership)
[Access Control](https://supabase.com/docs/guides/storage/security/access-control)

Uploads

Serving

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
5. [Security](https://supabase.com/docs/guides/storage/security)
7. [Access Control](https://supabase.com/docs/guides/storage/security/access-control)

# Storage Access Control

* * *

Supabase Storage is designed to work perfectly with Postgres [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) (RLS).

You can use RLS to create [Security Access Policies](https://www.postgresql.org/docs/current/sql-createpolicy.html) that are incredibly powerful and flexible, allowing you to restrict access based on your business needs.

## Access policies [\#](https://supabase.com/docs/guides/storage/security/access-control\#access-policies)

By default Storage does not allow any uploads to buckets without RLS policies. You selectively allow certain operations by creating RLS policies on the `storage.objects` table.

You can find the documentation for the storage schema [here](https://supabase.com/docs/guides/storage/schema/design) , and to simplify the process of crafting your policies, you can utilize these [helper functions](https://supabase.com/docs/guides/storage/schema/helper-functions) .

The RLS policies required for different operations are documented [here](https://supabase.com/docs/reference/javascript/storage-createbucket)

For example, the only RLS policy required for [uploading](https://supabase.com/docs/reference/javascript/storage-from-upload) objects is to grant the `INSERT` permission to the `storage.objects` table.

To allow overwriting files using the `upsert` functionality you will need to additionally grant `SELECT` and `UPDATE` permissions.

## Policy examples [\#](https://supabase.com/docs/guides/storage/security/access-control\#policy-examples)

An easy way to get started would be to create RLS policies for `SELECT`, `INSERT`, `UPDATE`, `DELETE` operations and restrict the policies to meet your security requirements. For example, one can start with the following `INSERT` policy:

```
1
2
3
4
5

create policy "policy_name"ON storage.objectsfor insert with check (  true);
```

and modify it to only allow authenticated users to upload assets to a specific bucket by changing it to:

```
1
2
3
4
5

create policy "policy_name"on storage.objects for insert to authenticated with check (    -- restrict bucket    bucket_id = 'my_bucket_id');
```

This example demonstrates how you would allow authenticated users to upload files to a folder called `private` inside `my_bucket_id`:

```
1
2
3
4
5
6
7
8

create policy "Allow authenticated uploads"on storage.objectsfor insertto authenticatedwith check (  bucket_id = 'my_bucket_id' and  (storage.foldername(name))[1] = 'private');
```

This example demonstrates how you would allow authenticated users to upload files to a folder called with their `users.id` inside `my_bucket_id`:

```
1
2
3
4
5
6
7
8

create policy "Allow authenticated uploads"on storage.objectsfor insertto authenticatedwith check (  bucket_id = 'my_bucket_id' and  (storage.foldername(name))[1] = (select auth.uid()::text));
```

Allow a user to access a file that was previously uploaded by the same user:

```
1
2
3
4

create policy "Individual user Access"on storage.objects for selectto authenticatedusing ( (select auth.uid()) = owner_id::uuid );
```

* * *

How to Configure Access Control on Your Supabase Storage Buckets - SupabaseTips - YouTube

[Photo image of Supabase](https://www.youtube.com/channel/UCNTVzV1InxHV-YR0fSajqPQ?embeds_referring_euri=https%3A%2F%2Fsupabase.com%2F)

Supabase

69.2K subscribers

[How to Configure Access Control on Your Supabase Storage Buckets - SupabaseTips](https://www.youtube.com/watch?v=4ERX__Y908k)

Supabase

Search

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

[Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)

Watch on

0:00

/

•Live

•

## Bypassing access controls [\#](https://supabase.com/docs/guides/storage/security/access-control\#bypassing-access-controls)

If you exclusively use Storage from trusted clients, such as your own servers, and need to bypass the RLS policies, you can use the `service key` in the `Authorization` header. Service keys entirely bypass RLS policies, granting you unrestricted access to all Storage APIs.

Remember you should not share the service key publicly.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/security/access-control.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F4ERX__Y908k%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Access policies](https://supabase.com/docs/guides/storage/security/access-control#access-policies) [Policy examples](https://supabase.com/docs/guides/storage/security/access-control#policy-examples) [Bypassing access controls](https://supabase.com/docs/guides/storage/security/access-control#bypassing-access-controls)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)