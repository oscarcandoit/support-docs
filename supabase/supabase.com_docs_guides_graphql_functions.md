---
url: "https://supabase.com/docs/guides/graphql/functions"
title: "Functions | Supabase Docs"
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
3. [Functions](https://supabase.com/docs/guides/graphql/functions)

# Functions

## Using Postgres Functions with GraphQL.

* * *

Functions can be exposed by pg\_graphql to allow running custom queries or mutations.

## Query vs Mutation [\#](https://supabase.com/docs/guides/graphql/functions\#query-vs-mutation)

For example, a function to add two numbers will be available on the query type as a field:

FunctionQueryTypeQueryResponse

```
1
2
3
4
5

create function "addNums"(a int, b int)  returns int  immutable  language sqlas $$ select a + b; $$;
```

Functions marked `immutable` or `stable` are available on the query type. Functions marked with the default `volatile` category are available on the mutation type:

FunctionMutationTypeQueryResponse

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

create table account(  id serial primary key,  email varchar(255) not null);create function "addAccount"(email text)  returns int  volatile  language sqlas $$ insert into account (email) values (email) returning id; $$;
```

## Supported Return Types [\#](https://supabase.com/docs/guides/graphql/functions\#supported-return-types)

Built-in GraphQL scalar types `Int`, `Float`, `String`, `Boolean` and [custom scalar types](https://supabase.com/docs/guides/graphql/api#custom-scalars) are supported as function arguments and return types. Function types returning a table or view are supported as well. Such functions implement the [Node interface](https://supabase.com/docs/guides/graphql/api#node):

FunctionQueryTypeQueryResponse

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

create table account(  id serial primary key,  email varchar(255) not null);insert into account(email)values  ('a@example.com'),  ('b@example.com');create function "accountById"("accountId" int)  returns account  stable  language sqlas $$ select id, email from account where id = "accountId"; $$;
```

Since Postgres considers a row/composite type containing only null values to be null, the result can be a little surprising in this case. Instead of an object with all columns null, the top-level field is null:

FunctionQueryResponse

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

create table account(    id int,    email varchar(255),    name text null);insert into account(id, email, name)values    (1, 'aardvark@x.com', 'aardvark'),    (2, 'bat@x.com', null),    (null, null, null);create function "returnsAccountWithAllNullColumns"()    returns account language sql stableas $$ select id, email, name from account where id is null; $$;
```

Functions returning multiple rows of a table or view are exposed as [collections](https://supabase.com/docs/guides/graphql/api#collections).

FunctionQueryTypeQueryResponse

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

create table "Account"(  id serial primary key,  email varchar(255) not null);insert into "Account"(email)values  ('a@example.com'),  ('a@example.com'),  ('b@example.com');create function "accountsByEmail"("emailToSearch" text)  returns setof "Account"  stable  language sqlas $$ select id, email from "Account" where email = "emailToSearch"; $$;
```

A set returning function with any of its argument names clashing with argument names of a collection (`first`, `last`, `before`, `after`, `filter`, or `orderBy`) will not be exposed.

Functions accepting or returning arrays of non-composite types are also supported. In the following example, the `ids` array is used to filter rows from the `Account` table:

FunctionQueryTypeQueryResponse

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

create table "Account"(  id serial primary key,  email varchar(255) not null);insert into "Account"(email)values  ('a@example.com'),  ('b@example.com'),  ('c@example.com');create function "accountsByIds"("ids" int[])  returns setof "Account"  stable  language sqlas $$ select id, email from "Account" where id = any(ids); $$;
```

## Default Arguments [\#](https://supabase.com/docs/guides/graphql/functions\#default-arguments)

Arguments without a default value are required in the GraphQL schema, to make them optional they should have a default value.

FunctionQueryTypeQueryResponse

```
1
2
3
4
5

create function "addNums"(a int default 1, b int default 2)  returns int  immutable  language sqlas $$ select a + b; $$;
```

If there is no sensible default, and you still want to make the argument optional, consider using the default value null.

FunctionQueryTypeQueryResponse

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

create function "addNums"(a int default null, b int default null)    returns int    immutable    language plpgsqlas $$begin    if a is null and b is null then        raise exception 'a and b both can''t be null';    end if;    if a is null then        return b;    end if;    if b is null then        return a;    end if;    return a + b;end;$$;
```

Currently, null defaults are only supported as simple expressions, as shown in the previous example.

## Limitations [\#](https://supabase.com/docs/guides/graphql/functions\#limitations)

The following features are not yet supported. Any function using these features is not exposed in the API:

- Functions that accept a table's tuple type
- Overloaded functions
- Functions with a nameless argument
- Functions returning void
- Variadic functions
- Functions that accept or return an array of composite type
- Functions that accept or return an enum type or an array of enum type

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/functions.md)

### Is this helpful?

NoYes

### On this page

[Query vs Mutation](https://supabase.com/docs/guides/graphql/functions#query-vs-mutation) [Supported Return Types](https://supabase.com/docs/guides/graphql/functions#supported-return-types) [Default Arguments](https://supabase.com/docs/guides/graphql/functions#default-arguments) [Limitations](https://supabase.com/docs/guides/graphql/functions#limitations)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)