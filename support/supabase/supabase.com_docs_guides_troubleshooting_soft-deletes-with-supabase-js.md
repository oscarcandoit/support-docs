---
url: "https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js"
title: "Supabase Docs | Troubleshooting | Implementing soft deletes with supabase-js"
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

# Implementing soft deletes with supabase-js

Last edited: 6/5/2025

* * *

When building modern applications, soft deletes are a common feature that lets you "delete" data while retaining it for potential recovery or historical tracking. This is especially useful in audit trails or when accidental deletions need undoing. Supabase makes this process seamless with Postgres views and the supabase-js library.

In this post, we’ll show how to implement soft deletes using Supabase and how to use Postgres views to manage your data efficiently.

## What are soft deletes? [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#what-are-soft-deletes)

Soft deletes don’t remove a record from the database. Instead, they mark it as "deleted" by updating a specific column, often named `deleted_at`, with a timestamp. This keeps the data in the database but excludes it from most queries unless explicitly required.

## Step 1: Add the `deleted_at` column [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#step-1-add-the-deletedat-column)

To implement soft deletes, start by adding a `deleted_at` column to your table.

Run this SQL in your Supabase SQL editor:

```
1
2

alter table itemsadd column deleted_at timestamptz;
```

This column will store the timestamp when a record is "deleted."

## Step 2: Create a view for active records [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#step-2-create-a-view-for-active-records)

To ensure you only fetch non-deleted records by default, create a Postgres view that filters out rows where `deleted_at` is not null.

```
1
2
3
4

create view active_items as  select *  from items  where deleted_at is null;
```

With this view, you can now query `active_items` instead of `items` to get only active (non-deleted) rows.

## Step 3: Soft delete a record [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#step-3-soft-delete-a-record)

Instead of deleting a record, update its `deleted_at` column with the current timestamp. Using `supabase-js`, it looks like this:

```
1

await supabase.from('items').update({ deleted_at: new Date().toISOString() }).eq('id', 123)
```

This sets the `deleted_at` column for the item with `id` 123.

## Step 4: Query active records [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#step-4-query-active-records)

To fetch only non-deleted rows, query the `active_items` view instead of the `items` table. Here's how you do it with `supabase-js`:

```
1
2
3
4
5
6

const { data, error } = await supabase  .from('active_items') // Query the view, not the table  .select('*')if (error) console.error('Error fetching active items:', error)else console.log('Active items:', data)
```

## Step 5: Restore a soft-deleted record (optional) [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#step-5-restore-a-soft-deleted-record-optional)

To "restore" a soft-deleted record, set the `deleted_at` column back to `null`:

```
1

await supabase.from('items').update({ deleted_at: null }).eq('id', 123)
```

This effectively un-deletes the record.

## Benefits of using views for soft deletes [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#benefits-of-using-views-for-soft-deletes)

- **Cleaner Queries:** No need to add `WHERE deleted_at IS NULL` to every query. Just query the view (`active_items`).
- **Separation of Concerns:** Views abstract the logic of filtering deleted records from your application code.
- **Efficiency:** Postgres handles the filtering in the view, reducing the complexity in your app.

## Full example with supabase-js [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#full-example-with-supabase-js)

Here’s a complete example of implementing soft deletes with `supabase-js`:

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

// 1. Soft delete an itemawait supabase.from('items').update({ deleted_at: new Date().toISOString() }).eq('id', 123)// 2. Query active (non-deleted) itemsconst { data, error } = await supabase  .from('active_items') // Query the view, not the table  .select('*')if (error) console.error('Error fetching active items:', error)else console.log('Active items:', data)// 3. Restore a soft-deleted itemawait supabase.from('items').update({ deleted_at: null }).eq('id', 123)
```

* * *

## Conclusion [\#](https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js\#conclusion)

Soft deletes are easy to implement with Supabase and Postgres. By combining a `deleted_at` column with views, you can cleanly separate active and deleted records, keeping your application logic simple and maintainable.

This approach provides the flexibility of retaining data for audits or recovery while keeping your app's interface clean and efficient. Start using soft deletes in your Supabase projects today!

## Metadata

* * *

### Keywords

[supabase-js](https://supabase.com/docs/guides/troubleshooting?tags=supabase-js) [sdk](https://supabase.com/docs/guides/troubleshooting?tags=sdk) [javascript](https://supabase.com/docs/guides/troubleshooting?tags=javascript)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/32523)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)