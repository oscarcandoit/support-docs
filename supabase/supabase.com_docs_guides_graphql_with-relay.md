---
url: "https://supabase.com/docs/guides/graphql/with-relay"
title: "With Relay | Supabase Docs"
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
3. Integrations
5. [With Relay](https://supabase.com/docs/guides/graphql/with-relay)

# With Relay

## Using pg\_grapqhl with Relay.

* * *

pg\_graphql implements the [GraphQL Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm) (`Node` interface) and the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm#) to be compatible with [Relay](https://relay.dev/).

## Relay Setup [\#](https://supabase.com/docs/guides/graphql/with-relay\#relay-setup)

### Pre-requisites [\#](https://supabase.com/docs/guides/graphql/with-relay\#pre-requisites)

Follow the [Relay Installation Guide](https://relay.dev/docs/getting-started/installation-and-setup/).

### Configuring the Relay Compiler [\#](https://supabase.com/docs/guides/graphql/with-relay\#configuring-the-relay-compiler)

Modify your `relay.config.js` file to reflect the following:

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

module.exports = {  // standard relay config options  src: './src',  language: 'typescript',  schema: './data/schema.graphql',  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],  // pg_graphql specific options  schemaConfig: {    nodeInterfaceIdField: 'nodeId',    nodeInterfaceIdVariableName: 'nodeId',  },  customScalarTypes: {    UUID: 'string',    Datetime: 'string',    JSON: 'string',    BigInt: 'string',    BigFloat: 'string',    Opaque: 'any',  },}
```

- `schemaConfig` tells the Relay compiler where to find the `nodeId` field on the `node` interface
- `customScalarTypes` will improve Relay's type emission

For Relay versions older than v16.2.0, it should be named `customScalars` instead.

### Configuring your Relay Environment [\#](https://supabase.com/docs/guides/graphql/with-relay\#configuring-your-relay-environment)

This example uses [Supabase](https://supabase.com/) for the GraphQL server, but pg\_graphql can be used independently.

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
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54

import {  Environment,  FetchFunction,  Network,  RecordSource,  Store,} from 'relay-runtime'import supabase, { SUPABASE_ANON_KEY, SUPABASE_URL } from './supabase'const fetchQuery: FetchFunction = async (operation, variables) => {  const {    data: { session },  } = await supabase.auth.getSession()  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {    method: 'POST',    headers: {      'Content-Type': 'application/json',      apikey: SUPABASE_ANON_KEY,      Authorization: `Bearer ${session?.access_token ?? SUPABASE_ANON_KEY}`,    },    body: JSON.stringify({      query: operation.text,      variables,    }),  })  return await response.json()}const network = Network.create(fetchQuery)const store = new Store(new RecordSource())const environment = new Environment({  network,  store,  getDataID: (node) => node.nodeId,  missingFieldHandlers: [    {      handle(field, _record, argValues) {        if (field.name === 'node' && 'nodeId' in argValues) {          // If field is node(nodeId: $nodeId), look up the record by the value of $nodeId          return argValues.nodeId        }        return undefined      },      kind: 'linked',    },  ],})export default environment
```

- `getDataID` is the most important option to add, as it tells Relay how to store data correctly in the cache.
- `missingFieldHandlers` is optional in this example but helps with [Rendering Partially Cached Data](https://relay.dev/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/).

## Pagination [\#](https://supabase.com/docs/guides/graphql/with-relay\#pagination)

Say you are working on a Todo app and want to add pagination. You can use `@connection` and `@prependNode` to do this.

**Fragment passed to `usePaginationFragment()`**

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

fragment TodoList_query on Query@argumentDefinitions(  cursor: { type: "Cursor" }  count: { type: "Int", defaultValue: 20 })@refetchable(queryName: "TodoListPaginationQuery") {  todosCollection(after: $cursor, first: $count)    @connection(key: "TodoList_query_todosCollection") {    pageInfo {      hasNextPage      endCursor    }    edges {      cursor      node {        nodeId        ...TodoItem_todos      }    }  }}
```

**Mutation to create a new Todo**

```
1
2
3
4
5
6
7
8

mutation TodoCreateMutation($input: TodosInsertInput!, $connections: [ID!]!) {  insertIntoTodosCollection(objects: [$input]) {    affectedCount    records @prependNode(connections: $connections, edgeTypeName: "TodosEdge") {      ...TodoItem_todos    }  }}
```

**Code to call the mutation**

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

import { ConnectionHandler, graphql, useMutation } from 'react-relay'// inside a React componentconst [todoCreateMutate, isMutationInFlight] =  useMutation<TodoCreateMutation>(CreateTodoMutation)// inside your create todo functionconst connectionID = ConnectionHandler.getConnectionID(  'root',  'TodoList_query_todosCollection')todoCreateMutate({  variables: {    input: {      // ...new todo data    },    connections: [connectionID],  },})
```

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/usage_with_relay.md)

### Is this helpful?

NoYes

### On this page

[Relay Setup](https://supabase.com/docs/guides/graphql/with-relay#relay-setup) [Pre-requisites](https://supabase.com/docs/guides/graphql/with-relay#pre-requisites) [Configuring the Relay Compiler](https://supabase.com/docs/guides/graphql/with-relay#configuring-the-relay-compiler) [Configuring your Relay Environment](https://supabase.com/docs/guides/graphql/with-relay#configuring-your-relay-environment) [Pagination](https://supabase.com/docs/guides/graphql/with-relay#pagination)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)