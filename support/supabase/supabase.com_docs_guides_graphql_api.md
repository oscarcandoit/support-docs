---
url: "https://supabase.com/docs/guides/graphql/api"
title: "GraphQL API | Supabase Docs"
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
3. [API](https://supabase.com/docs/guides/graphql/api)

# GraphQL API

## Understanding the core concepts of the GraphQL API.

* * *

In our API, each SQL table is reflected as a set of GraphQL types. At a high level, tables become types and columns/foreign keys become fields on those types.

By default, PostgreSQL table and column names are not inflected when reflecting GraphQL names. For example, an `account_holder` table has GraphQL type name `account_holder`. In cases where SQL entities are named using `snake_case`, [enable inflection](https://supabase.com/docs/guides/graphql/configuration#inflection) to match GraphQL/Javascript conventions e.g. `account_holder` -\> `AccountHolder`.

Individual table, column, and relationship names may also be [manually overridden](https://supabase.com/docs/guides/graphql/configuration#tables-type).

## Primary Keys (Required) [\#](https://supabase.com/docs/guides/graphql/api\#primary-keys-required)

Every table must have a primary key for it to be exposed in the GraphQL schema. For example, the following `Blog` table will be available in the GraphQL schema as `blogCollection` since it has a primary key named `id`:

```
1
2
3
4

create table "Blog"(  id serial primary key,  name varchar(255) not null,);
```

But the following table will not be exposed because it doesn't have a primary key:

```
1
2
3
4

create table "Blog"(  id int,  name varchar(255) not null,);
```

## QueryType [\#](https://supabase.com/docs/guides/graphql/api\#querytype)

The `Query` type is the entrypoint for all read access into the graph.

### Node [\#](https://supabase.com/docs/guides/graphql/api\#node)

The `node` interface allows for retrieving records that are uniquely identifiable by a globally unique `nodeId: ID!` field. For more information about nodeId, see [nodeId](https://supabase.com/docs/guides/graphql/api#nodeid).

**SQL Setup**

```
1
2
3
4
5
6
7

create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null,  "updatedAt" timestamp not null);
```

**GraphQL Types**

QueryType

```
1
2
3
4
5
6
7

"""The root type for querying data"""type Query {  """Retrieve a record by its `ID`"""  node(nodeId: ID!): Node}
```

To query the `node` interface effectively, use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to specify which fields to return for each type.

**Example**

QueryResponse

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

{  node(    nodeId: "WyJwdWJsaWMiLCAiYmxvZyIsIDFd"  ) {    nodeId    # Inline fragment for `Blog` type    ... on Blog {      name      description    }  }}
```

### Collections [\#](https://supabase.com/docs/guides/graphql/api\#collections)

Each table has top level entry in the `Query` type for selecting records from that table. Collections return a connection type and can be [paginated](https://supabase.com/docs/guides/graphql/api#pagination), [filtered](https://supabase.com/docs/guides/graphql/api#filtering), and [sorted](https://supabase.com/docs/guides/graphql/api#ordering) using the available arguments.

**SQL Setup**

```
1
2
3
4
5
6
7

create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null,  "updatedAt" timestamp not null);
```

**GraphQL Types**

QueryType

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
26
27
28
29
30

"""The root type for querying data"""type Query {  """A pagable collection of type `Blog`"""  blogCollection(    """Query the first `n` records in the collection"""    first: Int    """Query the last `n` records in the collection"""    last: Int    """Query values in the collection before the provided cursor"""    before: Cursor    """Query values in the collection after the provided cursor"""    after: Cursor    """    Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported.    """    offset: Int    """Filters to apply to the results set when querying from the collection"""    filter: BlogFilter    """Sort order to apply to the collection"""    orderBy: [BlogOrderBy!]  ): BlogConnection}
```

Connection types are the primary interface to returning records from a collection.

Connections wrap a result set with some additional metadata.

BlogConnectionBlogEdgePageInfoBlogBlogOrderByBlogFilter

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

type BlogConnection {  # Count of all records matching the *filter* criteria  totalCount: Int!  # Pagination metadata  pageInfo: PageInfo!  # Result set  edges: [BlogEdge!]!  # Aggregate functions  aggregate: BlogAggregate}
```

The `totalCount` field is disabled by default because it can be expensive on large tables. To enable it use a [comment directive](https://supabase.com/docs/guides/graphql/configuration#totalcount)

#### Aggregates [\#](https://supabase.com/docs/guides/graphql/api\#aggregates)

Aggregate functions are available on the collection's `aggregate` field when enabled via [comment directive](https://supabase.com/docs/guides/graphql/configuration#aggregate). These allow you to perform calculations on the collection of records that match your filter criteria.

The supported aggregate operations are:

- **count**: Always available, returns the number of records matching the query
- **sum**: Available for numeric fields, returns the sum of values
- **avg**: Available for numeric fields, returns the average (mean) of values
- **min**: Available for numeric, string, boolean, and date/time fields, returns the minimum value
- **max**: Available for numeric, string, boolean, and date/time fields, returns the maximum value

**Example**

QueryResponseBlogAggregate

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

{  blogCollection(    filter: { rating: { gt: 3 } }  ) {    aggregate {      count      sum {        rating        visits      }      avg {        rating      }      min {        createdAt        title      }      max {        rating        updatedAt      }    }  }}
```

**GraphQL Types**

BlogSumAggregateResultBlogAvgAggregateResultBlogMinAggregateResultBlogMaxAggregateResult

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

"""Result of summation aggregation for `Blog`"""type BlogSumAggregateResult {  """Sum of rating values"""  rating: BigFloat  """Sum of visits values"""  visits: BigInt  # Other numeric fields...}
```

- The return type for `sum` depends on the input type: integer fields return `BigInt`, while other numeric fields return `BigFloat`.
- The return type for `avg` is always `BigFloat`.
- The return types for `min` and `max` match the original field types.

The `aggregate` field is disabled by default because it can be expensive on large tables. To enable it use a [comment directive](https://supabase.com/docs/guides/graphql/configuration#Aggregate)

#### Pagination [\#](https://supabase.com/docs/guides/graphql/api\#pagination)

##### Keyset Pagination

Paginating forwards and backwards through collections is handled using the `first`, `last`, `before`, and `after` parameters, following the [relay spec](https://relay.dev/graphql/connections.htm#).

QueryType

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

type Query {  blogCollection(    """Query the first `n` records in the collection"""    first: Int    """Query the last `n` records in the collection"""    last: Int    """Query values in the collection before the provided cursor"""    before: Cursor    """Query values in the collection after the provided cursor"""    after: Cursor    ...truncated...  ): BlogConnection}
```

Metadata relating to the current page of a result set is available on the `pageInfo` field of the connection type returned from a collection.

PageInfoBlogConnection

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

type PageInfo {  # unique identifier of the first record within the query  startCursor: String  # unique identifier of the last record within the query  endCursor: String  # is another page of content available  hasNextPage: Boolean!  # is another page of content available  hasPreviousPage: Boolean!}
```

To paginate forward in the collection, use the `first` and `after` arguments. To retrieve the first page, the `after` argument should be null or absent.

**Example**

QueryPage 1

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

{  blogCollection(    first: 2,    after: null  ) {    pageInfo {      startCursor      endCursor      hasPreviousPage      hasNextPage    }    edges {      cursor      node {        id      }    }  }}
```

To retrieve the next page, provide the cursor value from `data.blogCollection.pageInfo.endCursor` to the `after` argument of another query.

QueryPage 2

```
1
2
3
4
5
6
7

{  blogCollection(    first: 2,    after: "WzJd"  ) {  ...truncated...}
```

once the collection has been fully enumerated, `data.blogConnection.pageInfo.hasNextPage` returns false.

To paginate backwards through a collection, repeat the process substituting `first` -\> `last`, `after` -\> `before`, `hasNextPage` -\> `hasPreviousPage`

##### Offset Pagination

In addition to keyset pagination, collections may also be paged using `first` and `offset`, which operates like SQL's `limit` and `offset` to skip `offset` number of records in the results.

`offset` based pagination becomes inefficient the `offset` value increases. For this reason, prefer cursor based pagination where possible.

QueryPage 2

```
1
2
3
4
5
6
7

{  blogCollection(    first: 2,    offset: 2  ) {  ...truncated...}
```

#### Filtering [\#](https://supabase.com/docs/guides/graphql/api\#filtering)

To filter the result set, use the `filter` argument.

QueryType

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

type Query {  blogCollection(    """Filters to apply to the results set when querying from the collection"""    filter: BlogFilter    ...truncated...  ): BlogConnection}
```

Where the `<Table>Filter` type enumerates filterable fields and their associated `<Type>Filter`.

BlogFilterIntFilterStringFilterStringListFilterFilterIs

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

input BlogFilter {  nodeId: IDFilter  id: IntFilter  name: StringFilter  description: StringFilter  tags: StringListFilter  createdAt: DatetimeFilter  updatedAt: DatetimeFilter  and: [BlogFilter!]  or: [BlogFilter!]  not: BlogFilter}
```

The following list shows the operators that may be available on `<Type>Filter` types.

| Operator | Description |
| --- | --- |
| eq | Equal To |
| neq | Not Equal To |
| gt | Greater Than |
| gte | Greater Than Or Equal To |
| in | Contained by Value List |
| lt | Less Than |
| lte | Less Than Or Equal To |
| is | Null or Not Null |
| startsWith | Starts with prefix |
| like | Pattern Match. '%' as wildcard |
| ilike | Pattern Match. '%' as wildcard. Case Insensitive |
| regex | POSIX Regular Expression Match |
| iregex | POSIX Regular Expression Match. Case Insensitive |
| contains | Contains. Applies to array columns only. |
| containedBy | Contained in. Applies to array columns only. |
| overlaps | Overlap (have points in common). Applies to array columns only. |

Not all operators are available on every `<Type>Filter` type. For example, `UUIDFilter` only supports `eq` and `neq` because `UUID`s are not ordered.

**Example: simple**

QueryResult

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

{  blogCollection(    filter: {id: {lt: 3}},  ) {    edges {      cursor      node {        id      }    }  }}
```

**Example: array column**

The `contains` filter is used to return results where all the elements in the input array appear in the array column.

""

`contains` Filter Query"

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

{  blogCollection(    filter: {tags: {contains: ["tech", "innovation"]}},  ) {    edges {      cursor      node {        id        name        tags        createdAt      }    }  }}
```

`contains` Filter Result"

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
26

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation"]          },          "cursor": "WzFd"        },        {          "node": {            "id": 2,            "name": "A: Blog 2",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation", "entrepreneurship"]          },          "cursor": "WzJd"        }      ]    }  }}
```

The `contains` filter can also accept a single scalar.

""

`contains` Filter with Scalar Query"

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

{  blogCollection(    filter: {tags: {contains: "tech"}},  ) {    edges {      cursor      node {        id        name        tags        createdAt      }    }  }}
```

`contains` Filter with Scalar Result"

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
26

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation"]          },          "cursor": "WzFd"        },        {          "node": {            "id": 2,            "name": "A: Blog 2",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation", "entrepreneurship"]          },          "cursor": "WzJd"        }      ]    }  }}
```

The `containedBy` filter is used to return results where every element of the array column appears in the input array.

""

`containedBy` Filter Query"

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

{  blogCollection(    filter: {tags: {containedBy: ["entrepreneurship", "innovation", "tech"]}},  ) {    edges {      cursor      node {        id        name        tags        createdAt      }    }  }}
```

`containedBy` Filter Result"

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
26

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation"]          },          "cursor": "WzFd"        },        {          "node": {            "id": 3,            "name": "A: Blog 3",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["innovation", "entrepreneurship"]          },          "cursor": "WzNd"        }      ]    }  }}
```

The `containedBy` filter can also accept a single scalar. In this case, only results where the only element in the array column is the input scalar are returned.

""

`containedBy` Filter with Scalar Query"

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

{  blogCollection(    filter: {tags: {containedBy: "travel"}},  ) {    edges {      cursor      node {        id        name        tags        createdAt      }    }  }}
```

`containedBy` Filter with Scalar Result"

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

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 4,            "name": "A: Blog 4",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["travel"]          },          "cursor": "WzPd"        }      ]    }  }}
```

The `overlaps` filter is used to return results where the array column and the input array have at least one element in common.

""

`overlaps` Filter Query"

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

{  blogCollection(    filter: {tags: {overlaps: ["tech", "travel"]}},  ) {    edges {      cursor      node {        id        name        tags        createdAt      }    }  }}
```

`overlaps` Filter Result"

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
26
27
28
29
30
31
32
33
34
35

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation"]          },          "cursor": "WzFd"        },        {          "node": {            "id": 2,            "name": "A: Blog 2",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["tech", "innovation", "entrepreneurship"]          },          "cursor": "WzJd"        },        {          "node": {            "id": 4,            "name": "A: Blog 4",            "createdAt": "2023-07-24T04:01:09.882781",            "tags": ["travel"]          },          "cursor": "WzPd"        }      ]    }  }}
```

**Example: and/or**

Multiple filters can be combined with `and`, `or` and `not` operators. The `and` and `or` operators accept a list of `<Type>Filter`.

""""

`and` Filter Query"

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

{  blogCollection(    filter: {      and: [        {id: {eq: 1}}        {name: {eq: "A: Blog 1"}}      ]    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

`and` Filter Result"

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

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "a desc1"          },          "cursor": "WzFd"        }      ]    }  }}
```

`or` Filter Query"

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

{  blogCollection(    filter: {      or: [        {id: {eq: 1}}        {name: {eq: "A: Blog 2"}}      ]    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

`or` Filter Result"

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
26

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 1,            "name": "A: Blog 1",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "a desc1"          },          "cursor": "WzFd"        },        {          "node": {            "id": 2,            "name": "A: Blog 2",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "a desc2"          },          "cursor": "WzJd"        }      ]    }  }}
```

**Example: not**

`not` accepts a single `<Type>Filter`.

""

`not` Filter Query"

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

{  blogCollection(    filter: {      not: {id: {eq: 1}}    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

`not` Filter Result"

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
26
27
28
29
30
31
32
33
34
35

{  "data": {    "blogCollection": {      "edges": [        {          "node": {            "id": 2,            "name": "A: Blog 2",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "a desc2"          },          "cursor": "WzJd"        },        {          "node": {            "id": 3,            "name": "A: Blog 3",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "a desc3"          },          "cursor": "WzNd"        },        {          "node": {            "id": 4,            "name": "B: Blog 3",            "createdAt": "2023-07-24T04:01:09.882781",            "description": "b desc1"          },          "cursor": "WzRd"        }      ]    }  }}
```

**Example: nested composition**

The `and`, `or` and `not` operators can be arbitrarily nested inside each other.

QueryResult

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

{  blogCollection(    filter: {      or: [        { id: { eq: 1 } }        { id: { eq: 2 } }        { and: [{ id: { eq: 3 }, not: { name: { eq: "A: Blog 2" } } }] }      ]    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

**Example: empty**

Empty filters are ignored, i.e. they behave as if the operator was not specified at all.

QueryResult

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

{  blogCollection(    filter: {      and: [], or: [], not: {}    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

**Example: implicit and**

Multiple column filters at the same level will be implicitly combined with boolean `and`. In the following example the `id: {eq: 1}` and `name: {eq: "A: Blog 1"}` will be `and`ed.

QueryResult

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

{  blogCollection(    filter: {      # Equivalent to not: { and: [{id: {eq: 1}}, {name: {eq: "A: Blog 1"}}]}      not: {        id: {eq: 1}        name: {eq: "A: Blog 1"}      }    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

This means that an `and` filter can be often be simplified. In the following example all queries are equivalent and produce the same result.

"Original "Simplified Even More Simplified QueryResult

`and` Query"

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

{  blogCollection(    filter: {      and: [        {id: {gt: 0}}        {id: {lt: 2}}        {name: {eq: "A: Blog 1"}}      ]    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

Be aware that the above simplification only works for the `and` operator. If you try it with an `or` operator it will behave like an `and`.

QueryResult

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

{  blogCollection(    filter: {      # This is really an `and` in `or`'s clothing      or: {        id: {eq: 1}        name: {eq: "A: Blog 2"}      }    }  ) {    edges {      cursor      node {        id        name        description        createdAt      }    }  }}
```

This is because according to the rules of GraphQL list input coercion, if a value passed to an input of list type is not a list, then it is coerced to a list of a single item. So in the above example `or: {id: {eq: 1}, name: {eq: "A: Blog 2}}` will be coerced into `or: [{id: {eq: 1}, name: {eq: "A: Blog 2}}]` which is equivalent to `or: [and: [{id: {eq: 1}}, {name: {eq: "A: Blog 2}}}]` due to implicit `and`ing.\
\
Avoid naming your columns `and`, `or` or `not`. If you do, the corresponding filter operator will not be available for use.\
\
The `and`, `or` and `not` operators also work with update and delete mutations.\
\
#### Ordering [\#](https://supabase.com/docs/guides/graphql/api\#ordering)\
\
The default order of results is defined by the underlying table's primary key column in ascending order. That default can be overridden by passing an array of `<Table>OrderBy` to the collection's `orderBy` argument.\
\
QueryTypeBlogOrderByOrderByDirection\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
\
type Query {  blogCollection(    """Sort order to apply to the collection"""    orderBy: [BlogOrderBy!]    ...truncated...  ): BlogConnection}\
```\
\
**Example**\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
\
{  blogCollection(    orderBy: [{id: DescNullsLast}]  ) {    edges {      node {        id      }    }  }}\
```\
\
Note, only one key value pair may be provided to each element of the input array. For example, `[{name: AscNullsLast}, {id: AscNullFirst}]` is valid. Passing multiple key value pairs in a single element of the input array e.g. `[{name: AscNullsLast, id: AscNullFirst}]`, is invalid.\
\
## MutationType [\#](https://supabase.com/docs/guides/graphql/api\#mutationtype)\
\
The `Mutation` type is the entrypoint for mutations/edits.\
\
Each table has top level entry in the `Mutation` type for [inserting](https://supabase.com/docs/guides/graphql/api#insert)`insertInto<Table>Collection`, [updating](https://supabase.com/docs/guides/graphql/api#update)`update<Table>Collection` and [deleting](https://supabase.com/docs/guides/graphql/api#delete)`deleteFrom<Table>Collection`.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null default now(),  "updatedAt" timestamp);\
```\
\
MutationType\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
17\
18\
19\
20\
21\
22\
23\
24\
25\
26\
27\
28\
29\
30\
31\
32\
33\
34\
35\
36\
37\
38\
39\
40\
41\
\
"""The root type for creating and mutating data"""type Mutation {  """Adds one or more `BlogInsertResponse` records to the collection"""  insertIntoBlogCollection(    """Records to add to the Blog collection"""    objects: [BlogInsertInput!]!  ): BlogInsertResponse  """Updates zero or more records in the collection"""  updateBlogCollection(    """    Fields that are set will be updated for all records matching the `filter`    """    set: BlogUpdateInput!    """Restricts the mutation's impact to records matching the critera"""    filter: BlogFilter    """    The maximum number of records in the collection permitted to be affected    """    atMost: Int! = 1  ): BlogUpdateResponse!  """Deletes zero or more records from the collection"""  deleteFromBlogCollection(    """Restricts the mutation's impact to records matching the critera"""    filter: BlogFilter    """    The maximum number of records in the collection permitted to be affected    """    atMost: Int! = 1  ): BlogDeleteResponse!}\
```\
\
### Insert [\#](https://supabase.com/docs/guides/graphql/api\#insert)\
\
To add records to a collection, use the `insertInto<Table>Collection` field on the `Mutation` type.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null default now(),  "updatedAt" timestamp);\
```\
\
**GraphQL Types**\
\
MutationTypeBlogInsertInputBlogInsertResponse\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
\
"""The root type for creating and mutating data"""type Mutation {  """Adds one or more `BlogInsertResponse` records to the collection"""  insertIntoBlogCollection(    """Records to add to the Blog collection"""    objects: [BlogInsertInput!]!  ): BlogInsertResponse}\
```\
\
Where elements in the `objects` array are inserted into the underlying table.\
\
**Example**\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
\
mutation {  insertIntoBlogCollection(    objects: [      {name: "foo"},      {name: "bar"},    ]  ) {    affectedCount    records {      id      name    }  }}\
```\
\
### Update [\#](https://supabase.com/docs/guides/graphql/api\#update)\
\
To update records in a collection, use the `update<Table>Collection` field on the `Mutation` type.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null default now(),  "updatedAt" timestamp);\
```\
\
**GraphQL Types**\
\
MutationTypeBlogUpdateInputBlogUpdateResponse\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
17\
18\
19\
20\
21\
\
"""The root type for creating and mutating data"""type Mutation {  """Updates zero or more records in the collection"""  updateBlogCollection(    """    Fields that are set will be updated for all records matching the `filter`    """    set: BlogUpdateInput!    """Restricts the mutation's impact to records matching the critera"""    filter: BlogFilter    """    The maximum number of records in the collection permitted to be affected    """    atMost: Int! = 1  ): BlogUpdateResponse!}\
```\
\
Where the `set` argument is a key value pair describing the values to update, `filter` controls which records should be updated, and `atMost` restricts the maximum number of records that may be impacted. If the number of records impacted by the mutation exceeds the `atMost` parameter the operation will return an error.\
\
**Example**\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
\
mutation {  updateBlogCollection(    set: {name: "baz"}    filter: {id: {eq: 1}}  ) {    affectedCount    records {      id      name    }  }}\
```\
\
### Delete [\#](https://supabase.com/docs/guides/graphql/api\#delete)\
\
To remove records from a collection, use the `deleteFrom<Table>Collection` field on the `Mutation` type.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "Blog"(  id serial primary key,  name varchar(255) not null,  description varchar(255),  "createdAt" timestamp not null default now(),  "updatedAt" timestamp);\
```\
\
**GraphQL Types**\
\
MutationTypeBlogFilterBlogDeleteResponse\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
\
"""The root type for creating and mutating data"""type Mutation {  """Deletes zero or more records from the collection"""  deleteFromBlogCollection(    """Restricts the mutation's impact to records matching the critera"""    filter: BlogFilter    """    The maximum number of records in the collection permitted to be affected    """    atMost: Int! = 1  ): BlogDeleteResponse!}\
```\
\
Where `filter` controls which records should be deleted and `atMost` restricts the maximum number of records that may be deleted. If the number of records impacted by the mutation exceeds the `atMost` parameter the operation will return an error.\
\
**Example**\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
\
mutation {  deleteFromBlogCollection(    filter: {id: {eq: 1}}  ) {    affectedCount    records {      id      name    }  }}\
```\
\
## Concepts [\#](https://supabase.com/docs/guides/graphql/api\#concepts)\
\
### nodeId [\#](https://supabase.com/docs/guides/graphql/api\#nodeid)\
\
The base GraphQL type for every table with a primary key is automatically assigned a `nodeId: ID!` field. That value, can be passed to the [node](https://supabase.com/docs/guides/graphql/api#node) entrypoint of the `Query` type to retrieve its other fields. `nodeId` may also be used as a caching key.\
\
##### relay support\
\
By default relay expects the `ID` field for types to have the name `id`. pg\_graphql uses `nodeId` by default to avoid conflicting with user defined `id` columns. You can configure relay to work with pg\_graphql's `nodeId` field with relay's `nodeInterfaceIdField` option. More info available [here](https://github.com/facebook/relay/tree/main/packages/relay-compiler#supported-compiler-configuration-options).\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
\
create table "Blog"(    id serial primary key,    name varchar(255) not null);\
```\
\
**GraphQL Types**\
\
Blog\
\
```\
1\
2\
3\
4\
5\
\
type Blog {  nodeId: ID! # this field  id: Int!  name: String!}\
```\
\
### Relationships [\#](https://supabase.com/docs/guides/graphql/api\#relationships)\
\
Relationships between collections in the Graph are derived from foreign keys.\
\
#### One-to-Many [\#](https://supabase.com/docs/guides/graphql/api\#one-to-many)\
\
A foreign key on table A referencing table B defines a one-to-many relationship from table A to table B.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
\
create table "Blog"(    id serial primary key,    name varchar(255) not null);create table "BlogPost"(    id serial primary key,    "blogId" integer not null references "Blog"(id),    title varchar(255) not null,    body varchar(10000));\
```\
\
**GraphQL Types**\
\
Blog\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
17\
18\
19\
20\
21\
22\
23\
24\
25\
26\
27\
28\
29\
30\
31\
32\
33\
34\
35\
\
type Blog {  # globally unique identifier  nodeId: ID!  id: Int!  name: String!  description: String  blogPostCollection(    """Query the first `n` records in the collection"""    first: Int    """Query the last `n` records in the collection"""    last: Int    """Query values in the collection before the provided cursor"""    before: Cursor    """Query values in the collection after the provided cursor"""    after: Cursor    """    Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported.    """    offset: Int    """Filters to apply to the results set when querying from the collection"""    filter: BlogPostFilter    """Sort order to apply to the collection"""    orderBy: [BlogPostOrderBy!]  ): BlogPostConnection}\
```\
\
Where `blogPostCollection` exposes the full `Query` interface to `BlogPost`s.\
\
**Example**\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
17\
\
{  blogCollection {    edges {      node {        name        blogPostCollection {          edges {            node {              id              title            }          }        }      }    }  }}\
```\
\
#### Many-to-One [\#](https://supabase.com/docs/guides/graphql/api\#many-to-one)\
\
A foreign key on table A referencing table B defines a many-to-one relationship from table B to table A.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
\
create table "Blog"(    id serial primary key,    name varchar(255) not null);create table "BlogPost"(    id serial primary key,    "blogId" integer not null references "Blog"(id),    title varchar(255) not null,    body varchar(10000));\
```\
\
**GraphQL Types**\
\
BlogPost\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
\
type BlogPost {  nodeId: ID!  id: Int!  blogId: Int!  title: String!  body: String  blog: Blog}\
```\
\
Where `blog` exposes the `Blog` record associated with the `BlogPost`.\
\
QueryResult\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
\
{  blogPostCollection {    edges {      node {        title        blog {          name        }      }    }  }}\
```\
\
#### One-to-One [\#](https://supabase.com/docs/guides/graphql/api\#one-to-one)\
\
A one-to-one relationship is defined by a foreign key on table A referencing table B where the columns making up the foreign key on table A are unique.\
\
**SQL Setup**\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
\
create table "EmailAddress"(    id serial primary key,    address text unique not null);create table "Employee"(    id serial primary key,    name text not null,    email_address_id int unique references "EmailAddress"(id));\
```\
\
**GraphQL Types**\
\
EmployeeEmailAddressQuery\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
type Employee {  nodeId: ID!  id: Int!  name: String!  emailAddressId: Int  emailAddress: EmailAddress}\
```\
\
**Example**\
\
Result\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
15\
16\
17\
18\
19\
\
{  "data": {    "employeeCollection": {      "edges": [        {          "node": {            "name": "Foo Barington",            "emailAddress": {              "address": "foo@bar.com",              "employee": {                "name": "Foo Barington"              }            }          }        }      ]    }  }}\
```\
\
## Custom Scalars [\#](https://supabase.com/docs/guides/graphql/api\#custom-scalars)\
\
Due to differences among the types supported by PostgreSQL, JSON, and GraphQL, `pg_graphql` adds several new Scalar types to handle PostgreSQL builtins that require special handling.\
\
### JSON [\#](https://supabase.com/docs/guides/graphql/api\#json)\
\
`pg_graphql` serializes `json` and `jsonb` data types as `String` under the custom scalar name `JSON`.\
\
```\
1\
\
scalar JSON\
```\
\
**Example**\
\
Given the setup\
\
SQLGraphQL\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "User"(    id bigserial primary key,    config jsonb);insert into "User"(config)values (jsonb_build_object('palette', 'dark-mode'));\
```\
\
The query\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
\
{  userCollection {    edges {      node {        config      }    }  }}\
```\
\
The returns the following data. Note that `config` is serialized as a string\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
\
{  "data": {    "userCollection": {      "edges": [        {          "node": {            "config": "{\"palette\": \"dark-mode\"}"          }        }      ]    }  }}\
```\
\
Use serialized JSON strings when updating or inserting `JSON` fields via the GraphQL API.\
\
JSON does not currently support filtering.\
\
### BigInt [\#](https://supabase.com/docs/guides/graphql/api\#bigint)\
\
PostgreSQL `bigint` and `bigserial` types are 64 bit integers. In contrast, JSON supports 32 bit integers.\
\
Since PostgreSQL `bigint` values may be outside the min/max range allowed by JSON, they are represented in the GraphQL schema as `BigInt`s and values are serialized as strings.\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
\
scalar BigIntinput BigIntFilter {  eq: BigInt  gt: BigInt  gte: BigInt  in: [BigInt!]  lt: BigInt  lte: BigInt  neq: BigInt  is: FilterIs}\
```\
\
**Example**\
\
Given the setup\
\
SQLGraphQL\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "Person"(    id bigserial primary key,    name text);insert into "Person"(name)values ('J. Bazworth');\
```\
\
The query\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
\
{  personCollection {    edges {      node {        id        name      }    }  }}\
```\
\
The returns the following data. Note that `id` is serialized as a string\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
\
{  "data": {    "personCollection": {      "edges": [        {          "node": {            "id": "1",            "name": "Foo Barington",          }        }      ]    }  }}\
```\
\
### BigFloat [\#](https://supabase.com/docs/guides/graphql/api\#bigfloat)\
\
PostgreSQL's `numeric` type supports arbitrary precision floating point values. JSON's `float` is limited to 64-bit precision.\
\
Since a PostgreSQL `numeric` may require more precision than can be handled by JSON, `numeric` types are represented in the GraphQL schema as `BigFloat` and values are serialized as strings.\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
\
scalar BigFloatinput BigFloatFilter {  eq: BigFloat  gt: BigFloat  gte: BigFloat  in: [BigFloat!]  lt: BigFloat  lte: BigFloat  neq: BigFloat  is: FilterIs}\
```\
\
**Example**\
\
Given the SQL setup\
\
```\
1\
2\
3\
4\
5\
6\
7\
\
create table "GeneralLedger"(    id serial primary key,    amount numeric(10,2));insert into "GeneralLedger"(amount)values (22.15);\
```\
\
The query\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
\
{  generalLedgerCollection {    edges {      node {        id        amount      }    }  }}\
```\
\
The returns the following data. Note that `amount` is serialized as a string\
\
```\
1\
2\
3\
4\
5\
6\
7\
8\
9\
10\
11\
12\
13\
14\
\
{  "data": {    "generalLedgerCollection": {      "edges": [        {          "node": {            "id": 1,            "amount": "22.15",          }        }      ]    }  }}\
```\
\
### Opaque [\#](https://supabase.com/docs/guides/graphql/api\#opaque)\
\
PostgreSQL's type system is extensible and not all types handle all operations e.g. filtering with `like`. To account for these, `pg_graphql` introduces a scalar `Opaque` type. The `Opaque` type uses PostgreSQL's `to_json` method to serialize values. That allows complex or unknown types to be included in the schema by delegating handling to the client.\
\
```\
1\
2\
3\
4\
5\
6\
\
scalar Opaqueinput OpaqueFilter {  eq: Opaque  is: FilterIs}\
```\
\
[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/api.md)\
\
### Is this helpful?\
\
NoYes\
\
### On this page\
\
[Primary Keys (Required)](https://supabase.com/docs/guides/graphql/api#primary-keys-required) [QueryType](https://supabase.com/docs/guides/graphql/api#querytype) [Node](https://supabase.com/docs/guides/graphql/api#node) [Collections](https://supabase.com/docs/guides/graphql/api#collections) [MutationType](https://supabase.com/docs/guides/graphql/api#mutationtype) [Insert](https://supabase.com/docs/guides/graphql/api#insert) [Update](https://supabase.com/docs/guides/graphql/api#update) [Delete](https://supabase.com/docs/guides/graphql/api#delete) [Concepts](https://supabase.com/docs/guides/graphql/api#concepts) [nodeId](https://supabase.com/docs/guides/graphql/api#nodeid) [Relationships](https://supabase.com/docs/guides/graphql/api#relationships) [Custom Scalars](https://supabase.com/docs/guides/graphql/api#custom-scalars) [JSON](https://supabase.com/docs/guides/graphql/api#json) [BigInt](https://supabase.com/docs/guides/graphql/api#bigint) [BigFloat](https://supabase.com/docs/guides/graphql/api#bigfloat) [Opaque](https://supabase.com/docs/guides/graphql/api#opaque)\
\
- Need some help?\
[Contact support](https://supabase.com/support)\
- Latest product updates?\
[See Changelog](https://supabase.com/changelog)\
- Something's not right?\
[Check system status](https://status.supabase.com/)\
\
* * *\
\
[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings\
\
[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)