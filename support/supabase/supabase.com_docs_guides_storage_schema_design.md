---
url: "https://supabase.com/docs/guides/storage/schema/design"
title: "The Storage Schema | Supabase Docs"
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
5. [Schema](https://supabase.com/docs/guides/storage/schema)
7. [Database Design](https://supabase.com/docs/guides/storage/schema/design)

# The Storage Schema

## Learn about the storage schema

* * *

Storage uses Postgres to store metadata regarding your buckets and objects. Users can use RLS (Row-Level Security) policies for access control. This data is stored in a dedicated schema within your project called `storage`.

When working with SQL, it's crucial to consider all records in Storage tables as read-only. All operations, including uploading, copying, moving, and deleting, should **exclusively go through the API**.

This is important because the storage schema only stores the metadata and the actual objects are stored in a provider like S3. Deleting the metadata doesn't remove the object in the underlying storage provider. This results in your object being inaccessible, but you'll still be billed for it.

Here is the schema that represents the Storage service:

![Storage schema design](https://supabase.com/docs/img/storage/schema-design.png)

You have the option to query this table directly to retrieve information about your files in Storage without the need to go through our API.

## Modifying the schema [\#](https://supabase.com/docs/guides/storage/schema/design\#modifying-the-schema)

We strongly recommend refraining from making any alterations to the `storage` schema and treating it as read-only. This approach is important because any modifications to the schema on your end could potentially clash with our future updates, leading to downtime.

However, we encourage you to add custom indexes as they can significantly improve the performance of the RLS policies you create for enforcing access control.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/schema/design.mdx)

### Is this helpful?

NoYes

### On this page

[Modifying the schema](https://supabase.com/docs/guides/storage/schema/design#modifying-the-schema)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)