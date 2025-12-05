---
url: "https://supabase.com/docs/guides/api/creating-routes"
title: "Creating API Routes | Supabase Docs"
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

[REST API](https://supabase.com/docs/guides/api)

[Overview](https://supabase.com/docs/guides/api)

[Quickstart](https://supabase.com/docs/guides/api/quickstart)

[Client Libraries](https://supabase.com/docs/guides/api/rest/client-libs)

[Auto-generated Docs](https://supabase.com/docs/guides/api/rest/auto-generated-docs)

[Generating TypeScript Types](https://supabase.com/docs/guides/api/rest/generating-types)

Tools[SQL to REST API Translator](https://supabase.com/docs/guides/api/sql-to-rest)

Guides[Creating API routes](https://supabase.com/docs/guides/api/creating-routes)
[How API Keys work](https://supabase.com/docs/guides/api/api-keys)
[Securing your API](https://supabase.com/docs/guides/api/securing-your-api)

Using the Data APIs[Managing tables, views, and data](https://supabase.com/docs/guides/database/tables)
[Querying joins and nested tables](https://supabase.com/docs/guides/database/joins-and-nesting)
[JSON and unstructured data](https://supabase.com/docs/guides/database/json)
[Managing database functions](https://supabase.com/docs/guides/database/functions)
[Using full-text search](https://supabase.com/docs/guides/database/full-text-search)
[Debugging performance issues](https://supabase.com/docs/guides/database/debugging-performance)
[Using custom schemas](https://supabase.com/docs/guides/api/using-custom-schemas)
[Converting from SQL to JavaScript API](https://supabase.com/docs/guides/api/sql-to-api)

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

REST API

1. [REST API](https://supabase.com/docs/guides/api)
3. [Guides](https://supabase.com/docs/guides/api)
5. [Creating API routes](https://supabase.com/docs/guides/api/creating-routes)

# Creating API Routes

* * *

API routes are automatically created when you create Postgres Tables, Views, or Functions.

## Create a table [\#](https://supabase.com/docs/guides/api/creating-routes\#create-a-table)

Let's create our first API route by creating a table called `todos` to store tasks.
This creates a corresponding route `todos` which can accept `GET`, `POST`, `PATCH`, & `DELETE` requests.

DashboardSQL

1. Go to the [Table editor](https://supabase.com/dashboard/project/_/editor) page in the Dashboard.
2. Click **New Table** and create a table with the name `todos`.
3. Click **Save**.
4. Click **New Column** and create a column with the name `task` and type `text`.
5. Click **Save**.

## API URL and keys [\#](https://supabase.com/docs/guides/api/creating-routes\#api-url-and-keys)

Every Supabase project has a unique API URL. Your API is secured behind an API gateway which requires an API Key for every request.

1. Go to the [Settings](https://supabase.com/dashboard/project/_/settings/general) page in the Dashboard.
2. Click **API** in the sidebar.
3. Find your API `URL`, `anon`, and `service_role` keys on this page.

The REST API is accessible through the URL `https://<project_ref>.supabase.co/rest/v1`

Both of these routes require the `anon` key to be passed through an `apikey` header.

## Using the API [\#](https://supabase.com/docs/guides/api/creating-routes\#using-the-api)

You can interact with your API directly via HTTP requests, or you can use the client libraries which we provide.

Let's see how to make a request to the `todos` table which we created in the first step,
using the API URL (`SUPABASE_URL`) and Key (`SUPABASE_PUBLISHABLE_KEY`) we provided:

JavascriptcURL

```
1
2
3
4
5
6

// Initialize the JS clientimport { createClient } from '@supabase/supabase-js'const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)// Make a requestconst { data: todos, error } = await supabase.from('todos').select('*')
```

JS Reference: [`select()`](https://supabase.com/docs/reference/javascript/select),
[`insert()`](https://supabase.com/docs/reference/javascript/insert),
[`update()`](https://supabase.com/docs/reference/javascript/update),
[`upsert()`](https://supabase.com/docs/reference/javascript/upsert),
[`delete()`](https://supabase.com/docs/reference/javascript/delete),
[`rpc()`](https://supabase.com/docs/reference/javascript/rpc) (call Postgres functions).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/creating-routes.mdx)

### Is this helpful?

NoYes

### On this page

[Create a table](https://supabase.com/docs/guides/api/creating-routes#create-a-table) [API URL and keys](https://supabase.com/docs/guides/api/creating-routes#api-url-and-keys) [Using the API](https://supabase.com/docs/guides/api/creating-routes#using-the-api)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)