---
url: "https://supabase.com/docs/guides/api/sql-to-api"
title: "Converting SQL to JavaScript API | Supabase Docs"
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
3. [Using the Data APIs](https://supabase.com/docs/guides/api/data-apis)
5. [Converting from SQL to JavaScript API](https://supabase.com/docs/guides/api/sql-to-api)

# Converting SQL to JavaScript API

* * *

Many common SQL queries can be written using the JavaScript API, provided by the SDK to wrap Data API calls. Below are a few examples of conversions between SQL and JavaScript patterns.

## Select statement with basic clauses [\#](https://supabase.com/docs/guides/api/sql-to-api\#select-statement-with-basic-clauses)

Select a set of columns from a single table with where, order by, and limit clauses.

```
1
2
3
4
5

select first_name, last_name, team_id, agefrom playerswhere age between 20 and 24 and team_id != 'STL'order by last_name, first_name desclimit 20;
```

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

const { data, error } = await supabase  .from('players')  .select('first_name,last_name,team_id,age')  .gte('age', 20)  .lte('age', 24)  .not('team_id', 'eq', 'STL')  .order('last_name', { ascending: true }) // or just .order('last_name')  .order('first_name', { ascending: false })  .limit(20)
```

## Select statement with complex Boolean logic clause [\#](https://supabase.com/docs/guides/api/sql-to-api\#select-statement-with-complex-boolean-logic-clause)

Select all columns from a single table with a complex where clause: OR AND OR

```
1
2
3

select *from playerswhere ((team_id = 'CHN' or team_id is null) and (age > 35 or age is null));
```

```
1
2
3
4
5

const { data, error } = await supabase  .from('players')  .select() // or .select('*')  .or('team_id.eq.CHN,team_id.is.null')  .or('age.gt.35,age.is.null') // additional filters imply "AND"
```

Select all columns from a single table with a complex where clause: AND OR AND

```
1
2
3

select *from playerswhere ((team_id = 'CHN' and age > 35) or (team_id != 'CHN' and age is not null));
```

```
1
2
3
4

const { data, error } = await supabase  .from('players')  .select() // or .select('*')  .or('and(team_id.eq.CHN,age.gt.35),and(team_id.neq.CHN,.not.age.is.null)')
```

## Resources [\#](https://supabase.com/docs/guides/api/sql-to-api\#resources)

- [Supabase - Get started for free](https://supabase.com/)
- [PostgREST Operators](https://postgrest.org/en/stable/api.html#operators)
- [Supabase API: JavaScript select](https://supabase.com/docs/reference/javascript/select)
- [Supabase API: JavaScript modifiers](https://supabase.com/docs/reference/javascript/using-modifiers)
- [Supabase API: JavaScript filters](https://supabase.com/docs/reference/javascript/using-filters)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/sql-to-api.mdx)

### Is this helpful?

NoYes

### On this page

[Select statement with basic clauses](https://supabase.com/docs/guides/api/sql-to-api#select-statement-with-basic-clauses) [Select statement with complex Boolean logic clause](https://supabase.com/docs/guides/api/sql-to-api#select-statement-with-complex-boolean-logic-clause) [Resources](https://supabase.com/docs/guides/api/sql-to-api#resources)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)