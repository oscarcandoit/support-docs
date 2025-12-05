---
url: "https://supabase.com/docs/guides/graphql/configuration"
title: "Configuration & Customization | Supabase Docs"
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

[GraphQL](https://supabase.com/docs/guides/graphql)

[Overview](https://supabase.com/docs/guides/graphql)

[API](https://supabase.com/docs/guides/graphql/api)

[Views](https://supabase.com/docs/guides/graphql/views)

[Functions](https://supabase.com/docs/guides/graphql/functions)

[Configuration & Customization](https://supabase.com/docs/guides/graphql/configuration)

[Security](https://supabase.com/docs/guides/graphql/security)

Integrations[With Apollo](https://supabase.com/docs/guides/graphql/with-apollo)
[With Relay](https://supabase.com/docs/guides/graphql/with-relay)

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

GraphQL

1. [GraphQL](https://supabase.com/docs/guides/graphql)
3. [Configuration & Customization](https://supabase.com/docs/guides/graphql/configuration)

# Configuration & Customization

## Extra configuration options can be set on SQL entities using comment directives.

* * *

Extra configuration options can be set on SQL entities using comment directives.

## Comment Directives [\#](https://supabase.com/docs/guides/graphql/configuration\#comment-directives)

Comment directives are snippets of configuration associated with SQL entities that alter how those entities behave.

The format of a comment directive is

```
1

@graphql(<JSON>)
```

### Inflection [\#](https://supabase.com/docs/guides/graphql/configuration\#inflection)

Inflection describes how SQL entities' names are transformed into GraphQL type and field names. By default, inflection is disabled and SQL names are literally interpolated such that

```
1
2
3
4

create table "BlogPost"(    id int primary key,    ...);
```

results in GraphQL type names like

```
1
2
3
4

BlogPostBlogPostEdgeBlogPostConnection...
```

Since snake case is a common casing structure for SQL types, `pg_graphql` support basic inflection from `snake_case` to `PascalCase` for type names, and `snake_case` to `camelCase` for field names to match Javascript conventions.

The inflection directive can be applied at the schema level with:

```
1

comment on schema <schema_name> is e'@graphql({"inflect_names": true})';
```

for example

```
1
2
3
4
5
6

comment on schema public is e'@graphql({"inflect_names": true})';create table blog_post(    id int primary key,    ...);
```

similarly would generated the GraphQL type names

```
1
2
3
4

BlogPostBlogPostEdgeBlogPostConnection...
```

For more fine grained adjustments to reflected names, see [renaming](https://supabase.com/docs/guides/graphql/configuration#renaming).

### Max Rows [\#](https://supabase.com/docs/guides/graphql/configuration\#max-rows)

The default page size for collections is 30 entries. To adjust the number of entries on each page, set a `max_rows` directive on the relevant schema entity, table or view.

For example, to increase the max rows per page for each table in the `public` schema:

```
1

comment on schema public is e'@graphql({"max_rows": 100})';
```

To limit the max rows per page for the `blog_post` table and `Person` view:

```
1
2

comment on table blog_post is e'@graphql({"max_rows": 20})';comment on view "Person" is e'@graphql({"primary_key_columns": ["id"], "max_rows": 10})';
```

The `max_rows` value falls back to the parent object if it is missing on the current object. For example, if a table doesn't have `max_rows` set, the value set on the table's schema will be used. If the schema also doesn't have `max_rows` set, then it falls back to default value 30. The parent object of a view is the schema, not the table on which the view is created.

### totalCount [\#](https://supabase.com/docs/guides/graphql/configuration\#totalcount)

`totalCount` is an opt-in field that extends a table's Connection type. It provides a count of the rows that match the query's filters, and ignores pagination arguments.

```
1
2
3
4
5
6
7

type BlogPostConnection {  edges: [BlogPostEdge!]!  pageInfo: PageInfo!  """The total number of records matching the `filter` criteria"""  totalCount: Int! # this field}
```

to enable `totalCount` for a table, use the directive

```
1

comment on table "BlogPost" is e'@graphql({"totalCount": {"enabled": true}})';
```

for example

```
1
2
3
4
5

create table "BlogPost"(    id serial primary key,    email varchar(255) not null);comment on table "BlogPost" is e'@graphql({"totalCount": {"enabled": true}})';
```

### Aggregate [\#](https://supabase.com/docs/guides/graphql/configuration\#aggregate)

The `aggregate` field is an opt-in field that extends a table's Connection type. It provides various aggregate functions like count, sum, avg, min, and max that operate on the collection of records that match the query's filters.

```
1
2
3
4
5
6
7

type BlogPostConnection {  edges: [BlogPostEdge!]!  pageInfo: PageInfo!  """Aggregate functions calculated on the collection of `BlogPost`"""  aggregate: BlogPostAggregate # this field}
```

To enable the `aggregate` field for a table, use the directive:

```
1

comment on table "BlogPost" is e'@graphql({"aggregate": {"enabled": true}})';
```

For example:

```
1
2
3
4
5
6

create table "BlogPost"(    id serial primary key,    title varchar(255) not null,    rating int not null);comment on table "BlogPost" is e'@graphql({"aggregate": {"enabled": true}})';
```

You can combine both totalCount and aggregate directives:

```
1

comment on table "BlogPost" is e'@graphql({"totalCount": {"enabled": true}, "aggregate": {"enabled": true}})';
```

### Renaming [\#](https://supabase.com/docs/guides/graphql/configuration\#renaming)

#### Table's Type [\#](https://supabase.com/docs/guides/graphql/configuration\#tables-type)

Use the `"name"` JSON key to override a table's type name.

```
1
2
3
4
5
6

create table account(    id serial primary key);comment on table public.account ise'@graphql({"name": "AccountHolder"})';
```

results in:

```
1
2
3

type AccountHolder { # previously: "Account"  id: Int!}
```

#### Column's Field Name [\#](https://supabase.com/docs/guides/graphql/configuration\#columns-field-name)

Use the `"name"` JSON key to override a column's field name.

```
1
2
3
4
5
6
7

create table public."Account"(    id serial primary key,    email text);comment on column "Account".email ise'@graphql({"name": "emailAddress"})';
```

results in:

```
1
2
3
4
5

type Account {  nodeId: ID!  id: Int!  emailAddress: String! # previously "email"}
```

#### Computed Field [\#](https://supabase.com/docs/guides/graphql/configuration\#computed-field)

Use the `"name"` JSON key to override a [computed field's](https://supabase.github.io/pg_graphql/computed_fields) name.

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

create table "Account"(    id serial primary key,    "firstName" varchar(255) not null,    "lastName" varchar(255) not null);-- Extend with functioncreate function public."_fullName"(rec public."Account")    returns text    immutable    strict    language sqlas $$    select format('%s %s', rec."firstName", rec."lastName")$$;comment on function public._full_name ise'@graphql({"name": "displayName"})';
```

results in:

```
1
2
3
4
5
6
7

type Account {  nodeId: ID!  id: Int!  firstName: String!  lastName: String!  displayName: String # previously "fullName"}
```

#### Relationship's Field [\#](https://supabase.com/docs/guides/graphql/configuration\#relationships-field)

Use the `"local_name"` and `"foreign_name"` JSON keys to override a relationship's inbound and outbound field names.

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

create table "Account"(    id serial primary key);create table "Post"(    id serial primary key,    "accountId" integer not null references "Account"(id),    title text not null,    body text);comment on constraint post_account_id_fkey  on "Post"  is E'@graphql({"foreign_name": "author", "local_name": "posts"})';
```

results in:

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

type Post {  nodeId: ID!  id: Int!  accountId: Int!  title: String!  body: String!  author: Account # was "account"}type Account {  id: Int!  posts( # was "postCollection"    after: Cursor,    before: Cursor,    filter: PostFilter,    first: Int,    last: Int,    orderBy: [PostOrderBy!]  ): PostConnection}
```

### Description [\#](https://supabase.com/docs/guides/graphql/configuration\#description)

Tables, Columns, and Functions accept a `description` directive to populate user defined descriptions in the GraphQL schema.

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

create table "Account"(    id serial primary key);comment on table public.accountis e'@graphql({"description": "A User Account"})';comment on column public.account.idis e'@graphql({"description": "The primary key identifier"})';
```

```
1
2
3
4
5
6

"""A User Account"""type Account implements Node {  """The primary key identifier"""  id: Int!}
```

#### Enum Variant [\#](https://supabase.com/docs/guides/graphql/configuration\#enum-variant)

If a variant of a Postgres enum does not conform to GraphQL naming conventions, introspection returns an error:

For example:

```
1

create type "Algorithm" as enum ('aead-ietf');
```

causes the error:

```
1
2
3
4
5
6
7

{  "errors": [    {      "message": "Names must only contain [_a-zA-Z0-9] but \"aead-ietf\" does not.",    }  ]}
```

To resolve this problem, rename the invalid SQL enum variant to a GraphQL compatible name:

```
1

alter type "Algorithm" rename value 'aead-ietf' to 'AEAD_IETF';
```

or, add a comment directive to remap the enum variant in the GraphQL API

```
1

comment on type "Algorithm" is '@graphql({"mappings": {"aead-ietf": "AEAD_IETF"}})';
```

Which both result in the GraphQL enum:

```
1
2
3

enum Algorithm {  AEAD_IETF}
```

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/configuration.md)

### Is this helpful?

NoYes

### On this page

[Comment Directives](https://supabase.com/docs/guides/graphql/configuration#comment-directives) [Inflection](https://supabase.com/docs/guides/graphql/configuration#inflection) [Max Rows](https://supabase.com/docs/guides/graphql/configuration#max-rows) [totalCount](https://supabase.com/docs/guides/graphql/configuration#totalcount) [Aggregate](https://supabase.com/docs/guides/graphql/configuration#aggregate) [Renaming](https://supabase.com/docs/guides/graphql/configuration#renaming) [Description](https://supabase.com/docs/guides/graphql/configuration#description)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)