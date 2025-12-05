---
url: "https://supabase.com/docs/guides/graphql/views"
title: "Views | Supabase Docs"
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
3. [Views](https://supabase.com/docs/guides/graphql/views)

# Views

## Using Postgres Views with GraphQL.

* * *

Views, materialized views, and foreign tables can be exposed with pg\_graphql.

## Primary Keys (Required) [\#](https://supabase.com/docs/guides/graphql/views\#primary-keys-required)

A primary key is required for an entity to be reflected in the GraphQL schema. Tables can define primary keys with SQL DDL, but primary keys are not available for views, materialized views, or foreign tables. For those entities, you can set a "fake" primary key with a [comment directive](https://supabase.com/docs/guides/graphql/configuration#comment-directives).

```
1

{"primary_key_columns": [<column_name_1>, ..., <column_name_n>]}
```

For example:

```
1
2
3
4
5
6
7
8

create view "Person" as  select    id,    name  from    "Account";comment on view "Person" is e'@graphql({"primary_key_columns": ["id"]})';
```

tells pg\_graphql to treat `"Person".id` as the primary key for the `Person` entity resulting in the following GraphQL type:

```
1
2
3
4
5

type Person {  nodeId: ID!  id: Int!  name: String!}
```

Values of the primary key column/s must be unique within the table. If they are not unique, you will experience inconsistent behavior with `ID!` types, sorting, and pagination.

[Updatable views](https://www.postgresql.org/docs/current/sql-createview.html#SQL-CREATEVIEW-UPDATABLE-VIEWS) are reflected in the `Query` and `Mutation` types identically to tables. Non-updatable views are read-only and accessible via the `Query` type only.

## Relationships [\#](https://supabase.com/docs/guides/graphql/views\#relationships)

pg\_graphql identifies relationships among entities by inspecting foreign keys. Views, materialized views, and foreign tables do not support foreign keys. For this reason, relationships can also be defined in [comment directive](https://supabase.com/docs/guides/graphql/configuration#comment-directives) using the structure:

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

{  "foreign_keys": [    {      "local_name": "foo", // optional      "local_columns": ["account_id"],      "foreign_name": "bar", // optional      "foreign_schema": "public",      "foreign_table": "account",      "foreign_columns": ["id"]    }  ]}
```

For example:

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

create table "Account"(  id serial primary key,  name text not null);create table "EmailAddress"(  id serial primary key,  "accountId" int not null, -- note: no foreign key  "isPrimary" bool not null,  address text not null);comment on table "EmailAddress" is e'    @graphql({        "foreign_keys": [          {            "local_name": "addresses",            "local_columns": ["accountId"],            "foreign_name": "account",            "foreign_schema": "public",            "foreign_table": "Account",            "foreign_columns": ["id"]          }        ]    })';
```

defines a relationship equivalent to the following foreign key

```
1
2
3
4
5
6
7
8

alter table "EmailAddress"  add constraint fkey_email_address_to_account  foreign key ("accountId")  references "Account" ("id");comment on constraint fkey_email_address_to_account  on "EmailAddress"  is E'@graphql({"foreign_name": "account", "local_name": "addresses"})';
```

yielding the GraphQL types:

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

type Account {  nodeId: ID!  id: Int!  name: String!  addresses(    after: Cursor,    before: Cursor,    filter: EmailAddressFilter,    first: Int,    last: Int,    orderBy: [EmailAddressOrderBy!]  ): EmailAddressConnection}type EmailAddress {  nodeId: ID!  id: Int!  isPrimary: Boolean!  address: String!  accountId: Int!  account: Account!}
```

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/views.md)

### Is this helpful?

NoYes

### On this page

[Primary Keys (Required)](https://supabase.com/docs/guides/graphql/views#primary-keys-required) [Relationships](https://supabase.com/docs/guides/graphql/views#relationships)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)